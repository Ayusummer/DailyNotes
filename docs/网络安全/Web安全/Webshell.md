# Webshell

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

- 大马：大马WebShell功能齐全，能够管理数据库、文件管理、信息收集、提权等。由于这种大型木马的体量比较大，通常由多个文件组成，上传过程中容易被检测且不方便进行上传绕过测试。

- 小马：小马的功能通常是围绕文件管理的功能（文件上传、文件修改、新建文件等），在上传文件的时候，可能会出现被限制上传的文件大小或是被拦截的情况，可以通过小马来上传大马。

- 一句话木马：短小精悍、功能强大、隐蔽性好、使用客户端可以快速管理WebShell。

  简单的一句话木马举例

  - PHP: `<?php @eval($_POST['password']);?>`
  - ASP: `<%execute request("password")%>`
  - JSP: `<%Runtime.getRuntime().exec(request.getParameter("password"));%>`

---

WebShell 的利用前提

- lWebShell 后门文件可以被放置在服务器的Web目录
- 攻击者知道WebShell文件的具体位置及文件名并且能访问到
- WebShell能被服务器解析执行
- WebShell 文件没有被杀毒软件查杀

---

## WebShell 分析

攻击者入侵服务器, 使用 Webshell, 首先可以想到的是根据 webshell 内容做静态特征检测; 其次 webshell 运行后也可以在 HTTP交互中找到一些特征

如下情况可能表名当前网站中存在 Webshell

- 服务器使用率非常高（可能是因为攻击者在上传和下载大量数据）
- 文件上的时间戳错误
- 服务器上存在外来文件
- 具有可疑名称的文件
- 服务器端日志中存在未知连接

因此可以监控服务器 Web 目录的文件修改与落地的行为

- 对于非文件上传目录下的文件修改与落地的行为进行记录并分析器内容
- 对于文件上传目录中的文件也可以检测其后缀是否是 `php, asp, jsp, jspx` 等危险后缀
- 对于服务器的文件解析配置的修改也需要注意, 例如在某些情况下也许是配置出了问题也许是攻击者利用了某些漏洞, 会导致服务器配置中可以将非 php 的代码当做 php 文件来解析

---

### 分析Webshell内容

很多 Webshell 中都会使用到 eval 函数, 因其可以很方便地将其参数作为代码进行解析, 甚至不少漏洞就是因为开发者滥用 eval 导致的, 因此也有 `eval is evil` 的说法

- PHP:  `<?php @eval($_POST['caidao']);?>`
- ASP:  `<%eval request("caidao")%>`
- ASP.NET:  `<%@ Page Language="Jscript"%><%eval(Request.Item["caidao"],"unsafe");%>`





---

### 分析 HTTP 流量

> [AntSwordProject/antSword: 中国蚁剑是一款跨平台的开源网站管理工具。AntSword is a cross-platform website management toolkit. (github.com)](https://github.com/AntSwordProject/antSword)
>
> [raddyfiy/caidao-official-version: 中国菜刀官方版本，拒绝黑吃黑，来路清晰 (github.com)](https://github.com/raddyfiy/caidao-official-version)

> [四大主流WebShell管理工具分析 | 防守方攻略 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/362011041)
>
> [常见webshell工具及特征分析 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/324622.html)
>
> [常见webshell工具及特征分析 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/324622.html)
>
> [四大主流WebShell管理工具分析 | 防守方攻略 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/362011041)

一般情况下, 公开的用于渗透测试的 Webshell 管理工具都会配置一些默认的特征, 例如默认的 User-Agent 等等, 例如蚁剑的 `User-Agent` 默认为 `antSword/v版本号`

一般情况下, Webshell 管理工具默认会对交互进行编码, 比较常见的默认项为 base64 编解码, 因此在默认的交互流量中看到诸如 `base64`, `base64_encode`, `base64_decode` 等特征

除此以外Webshell 也会提供一些默认的编解码器来对传输的数据进行编码, 针对这些默认的编码器的流量

- 中国菜刀：经典的网站管理工具，使用一句话木马作为服务端，通信流量中存在eval、base64_decode等关键字，请求头中的User-Agent默认为百度爬虫
- 中国蚁剑：开源的网站管理工具，支持多种编码器和自定义头部字段，请求头中的User-Agent默认为
- 冰蝎：动态二进制加密的网站管理工具，使用预共享密钥进行加密传输，请求头中存在Pragma: no-cache，Cache-Control: no-cache等特征
- 哥斯拉：这支持多种加密方式和自定义参数，请求头中存在Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8等特征



















