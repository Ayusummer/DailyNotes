# Web安全

## 概述

### WEB 应用程序

WEB应用程序是指在HTTP协议基础之上，借助浏览器进行URL访问的网站。

![image-20220526150421908](http://cdn.ayusummer233.top/img/202205261504067.png)

---

### HTTP 协议

`HTTP协议（HyperText Transfer Protocol，超文本传输协议）`是用于**从WWW服务器传输超文本到本地浏览器的传送协议。**
HTTP是一个`应用层协议`，由请求和响应构成，是一个标准的客户端服务器模型。HTTP是一个无状态的协议。

![image-20220526150620505](http://cdn.ayusummer233.top/img/202205261506596.png)

---

### HTTP请求

HTTP请求由三部分组成，分别是:请求行、消息报头、请求正文

![image-20220526150654339](http://cdn.ayusummer233.top/img/202205261506484.png)

---

### HTTP 响应

http响应也由三部分组成，分别是︰状态行、消息报头、响应正文

![image-20220526150912767](http://cdn.ayusummer233.top/img/202205261509897.png)

---

### URL

**URL可以用来标识一个资源，而且还指明了如何locate这个资源URL一般由三部组成∶**

- 协议(或称为服务方式)
- 存有该资源的主机IP地址(有时也包括端口号)
- 主机资源的具体地址。如目录和文件名等

`schema://host[:port#]/path/.../[?query-string][#anchor]`

![image-20220526151104661](http://cdn.ayusummer233.top/img/202205261511717.png)

URL编码是一种浏览器用来打包表单输入的格式。浏览器从表单中获取所有的 name 和其中的值，将它们以 name/value 参数编码（移去那些不能传送的字符，将数据排行等等)作为URL的一部分或者分离地发给服务器

---

## Web 安全漏洞

### SQL 注入

SQL 注入是因为后台 SQL 语句拼接了用户的输入，而且 Web   应用程序对用户输入数据的合法性没有判断和过滤，前端传到后端的参数是攻击者可以控制的，并且将参数带入数据库中进行查询，攻击者可悻通过构造不同的 SQL 语句来实现对数据库的任意操作。例如可以增加、删除、修改数据库里的数据，如果权限过大，还可以执行服务器系统的命令。

![image-20220526151231215](http://cdn.ayusummer233.top/img/202205261512315.png)

![image-20220526151443160](http://cdn.ayusummer233.top/img/202205261514308.png)

---

### XSS

跨站点脚本（XSS）攻击是一种注射型攻击，攻击者在网页中嵌入恶意代码，用户访问网页时受到影响。

![image-20220526151754226](http://cdn.ayusummer233.top/img/202205261517314.png)

----

### CSRF漏洞

CSRF，是跨站请求伪造(Cross Site Request Forgery)的缩写，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。

通常情况下，CSRF 攻击是攻击者借助受害者的Cookie骗取服务器的信任，在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器,从而在并未授权的情况下执行在权限保护之下的操作。

![image-20220526152041762](http://cdn.ayusummer233.top/img/202205261520861.png)

---

### SSRF 漏洞

`SSRF(Server-Side Request Forgery.服务器端请求伪造)` 是一种由攻击者构造数据进而伪造服务端请求的安全漏洞。一般情况下，SSRF 攻击的目标是从外网无法访问的内部系统。

![image-20220526152324376](http://cdn.ayusummer233.top/img/202205261523463.png)

---

### 反序列化漏洞

反序列化漏洞是指网站对用户可控制的数据进行反序列化时,攻击者能够操纵序列化的对象,将有害数据传递到应用程序代码中。

![image-20220526152522660](http://cdn.ayusummer233.top/img/202205261525752.png)

---

### XXE 漏洞

XXE Injection 即 XML External Entity Injection, 也就是 XML 外部实体注入攻击。XXE 漏洞发生在应用程序解析 XML 输入时，没有禁止外部实体的加载，导致可加载恶意外部文件和代码。

![image-20220526152806471](http://cdn.ayusummer233.top/img/202205261528545.png)

![image-20220526152814356](http://cdn.ayusummer233.top/img/202205261528456.png)

---

### 命令执行漏洞

当用户可以控制命令执行函数中的参数时，将可注入恶意系统命令到正常命令中造成命令执行攻击。

由于服务器端没有针对执行函数和对用户提交的内容进行过滤，所以产生了恶意命令。

![image-20220526152926118](http://cdn.ayusummer233.top/img/202205261529217.png)

`?ip=1|whoami`

---

### 文件上传漏洞

Web服务系统大部分都存在文件上传功能，比如允许用户上传文档、图片、头像、视频等。当用户点击上传时，服务端一般会对上传的文件进行判断，比如是否是指定的类型、后缀名等等，然后存储在指定的目录。当上传功能的实现代码没有严格校验上传文件的后缀和文件类型时候，攻击者可以上传恶意的代码文件并解析执行，从而控制整个服务器。

![image-20220526153108373](http://cdn.ayusummer233.top/img/202205261531469.png)

---

## 常用的工具

- 主机和端口存活扫描: `nmap`、`fscan`
- WEB 漏洞扫描: `AWVS`、`AppScan`、`Xray`
- 抓包工具: `BurpSuite`
- `Webshell` 管理工具: 中国蚁剑、冰蝎
- 网站目录文件扫描: `dirsearch`、御剑
- SQL 注入: `Sqlmap`

---

### Web 安全学习建议

学习建议: 多看文章、多实践、多交流、多做笔记、多总结

漏洞文章: 先知社区、安全客、freebuf、看雪、微信安全公众号

漏洞复现: [vulhub](https://vulhub.org)

CTF 训练平台: `BUUCTF`、`CTFHUB`、`Bugku`

交流学习: 团队(校内外的 CTF 等团队)、安全相关的 QQ 群和微信群

学习记录: 写博客（`hexo+github`、`wordpresss`)、语雀、有道云笔记、印象笔记等

---

## 靶场

### DVWA

#### 使用 docker 搭建 DVWA

```bash
# 拉取 dvwa 镜像
docker pull vulnerables/web-dvwa
# 运行 dvwa 镜像(将容器 80 端口映射到主机 9220 端口)
docker run -it -d -p 9220:80 vulnerables/web-dvwa
```

- `-i`: 以交互模式运行容器，通常与 -t 同时使用；
- `-t`: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
- `-d`: 后台运行容器，并返回容器ID；
- `-p`: 端口映射，格式为：主机(宿主)端口:容器端口


---

### pikachu

> [zhuifengshaonianhanlu/pikachu: 一个好玩的Web安全-漏洞测试平台 (github.com)](https://github.com/zhuifengshaonianhanlu/pikachu)

---

Pikachu由国内大佬@hanlu开发[GITHUB地址](https://github.com/zhuifengshaonianhanlu/pikachu)，其中包含的漏洞种类与体验感完全不亚于DVWA，并且与DVWA配置环境都兼容，所以两者同时练习亦可。


```Mermaid
graph LR
P[Pikachu] --- BruteForce[暴力破解漏洞]
BruteForce --- 基于表单的暴力破解
BruteForce --- 服务端验证码绕过
BruteForce --- 客户端验证码绕过
BruteForce --- 带token的登录绕过

P --- XSS[跨站脚本漏洞]
XSS --- XSS1["反射型 xss(get)"]
XSS --- XSS2["存储型 xss"]
XSS --- XSS3["DOM 型 xss"]
XSS --- XSS4["xss 盲打"]
XSS --- XSS5["xss 过滤"]
XSS --- XSS6["xss htmlspecialchars"]
XSS --- XSS7["xss href 输出"]
XSS --- XSS8["xss js 输出"]

P --- CSRF[跨站请求伪造]
CSRF --- CSRF1["CSRF(get)"]
CSRF --- CSRF2["CSRF(post)"]
CSRF --- CSRF3["CSRF token"]

P --- SQLinject(SQL 注入漏洞)
SQLinject --- SQLinject1["数字型注入(post)"]
SQLinject --- SQLinject2["字符型注入(get)"]
SQLinject --- SQLinject3["搜索型注入"]
SQLinject --- SQLinject4["xx型注入"]
SQLinject --- SQLinject5["'insert/update'注入"]
SQLinject --- SQLinject6["'delete' 注入"]
SQLinject --- SQLinject7["'http header' 注入"]
SQLinject --- SQLinject8["基于boolian的盲注"]
SQLinject --- SQLinject9["基于时间的盲注"]
SQLinject --- SQLinject0["宽字节注入"]

P --- RCE[远程代码执行漏洞]
RCE --- RCE1["exec 'ping'"]
RCE --- RCE2["exec 'evel'"]

P --- FilesInclusion(文件包含漏洞)
FilesInclusion --- FilesInclusion1["本地文件包含漏洞"]
FilesInclusion --- FilesInclusion2["远程文件包含漏洞"]

P --- Unsafefiledownloads(不安全的文件下载)

P --- Unsafefileuploads(不安全的文件上传)
Unsafefileuploads --- Unsafefileuploads1["客户端验证"]
Unsafefileuploads --- Unsafefileuploads2["MIME type 验证"]
Unsafefileuploads --- Unsafefileuploads3["getimagesize"]

P --- OverPermisson(越权漏洞)
OverPermisson --- OverPermisson1["水平越权"]
OverPermisson --- OverPermisson2["垂直越权"]

P --- ../../../(目录遍历)
P --- IcanseeyourABC(敏感信息泄露)
P --- PHP反序列化漏洞
P --- XXE(XML External Entity attack)
P --- 不安全的URL重定向
P --- SSRF(Server-Side Request Forgery)
SSRF --- SSRF1["SSRF(curl)"]
SSRF --- SSRF2["SSRF(file_get_content)"]
```

---

#### 使用 Docker 搭建 pikachu 靶场

```bash
docker pull area39/pikachu
docker run --restart=always -d -p 9221:80 -p 9222:3306 area39/pikachu
```

- `docker run`
  - `--restart=always`: 容器设置自动启动
  - `-d`: 后台运行容器，并返回容器ID；
  - `-p`: 指定端口映射，格式为：**主机(宿主)端口:容器端口**

> 需要注意的是默认初始化完成之后密码是空的, 如果想要远程连接 docker 中的 MySQL 则需要修改密码, 修改完密码之后需要重新初始化, 此时务必注意要初始化写的密码配置项有两个, 一个在 `/app/inc/config.inc.php` 对应主页面的配置, 另一个在 `/app/pkxss/inc/config.inc.php` 对应后台管理的配置

---

#### pkxss 管理后台使用介绍

工具栏左侧最下方 `管理工具 -> XSS 后台`

![image-20221028100744102](http://cdn.ayusummer233.top/img/202210281007172.png)

![image-20221028101844150](http://cdn.ayusummer233.top/img/202210281018229.png)

![image-20221028102040438](http://cdn.ayusummer233.top/img/202210281020496.png)

![image-20221028102052933](http://cdn.ayusummer233.top/img/202210281020993.png)

![image-20221028100830152](http://cdn.ayusummer233.top/img/202210281008216.png)

![image-20221028100913224](http://cdn.ayusummer233.top/img/202210281009284.png)

---

### VULFOCUS

> [fofapro/vulfocus: 🚀Vulfocus 是一个漏洞集成平台，将漏洞环境 docker 镜像，放入即可使用，开箱即用。 (github.com)](https://github.com/fofapro/vulfocus)
>
> [安装 (fofapro.github.io)](https://fofapro.github.io/vulfocus/#/INSTALL)

#### 使用 docker-compose 安装 VULFCOUS

```bash
git clone https://github.com/fofapro/vulfocus.git
cd vulfocus
```

将 `docker-compose.yaml` 中如下的两个 `VUL_IP` 改成本机 IP 即可

![image-20230328005609764](http://cdn.ayusummer233.top/DailyNotes/202303280056842.png)

```bash
# 启动并后台运行 VULFOCUS 容器
docker-compose up -d
```

![image-20230328010058301](http://cdn.ayusummer233.top/DailyNotes/202303280100357.png)

![image-20230328010131947](http://cdn.ayusummer233.top/DailyNotes/202303280101984.png)

访问默认的 80 端口服务即可看到 VULFOCUS 登录页

![image-20230328010326881](http://cdn.ayusummer233.top/DailyNotes/202303280103017.png)

默认账密 `admin/admin`

---

## 工具整理

### 资源库知识库类

- [knownsec/404StarLink: 404StarLink - 推荐优质、有意义、有趣、坚持维护的安全开源项目 (github.com)](https://github.com/knownsec/404StarLink)

- [狼组渗透资源库 - WgpSec](https://go.wgpsec.org/)
- [狼盘主页 | WgpSec PAN](https://pan.wgpsec.org/)
- [狼组安全团队公开知识库 (wgpsec.org)](https://wiki.wgpsec.org/)

----

### 公开信息收集与自动推送

- [yhy0/github-cve-monitor: 实时监控github上新增的cve、自定义关键字、安全工具更新、大佬仓库监控，并多渠道推送通知](https://github.com/yhy0/github-cve-monitor)
- [lxflxfcl/monitor: 漏洞监控平台——Monitor。目前实现了监控GitHub、微软、CNNVD三者的漏洞信息，并使用企业微信实时推送。还可以使用邮箱推送，默认关闭。](https://github.com/lxflxfcl/monitor)

---

### 信息收集

- [ ] [pingc0y/URLFinder: 类似JSFinder的golang实现，一款用于快速提取检测页面中JS与URL的工具，更快更全更舒服 (github.com)](https://github.com/pingc0y/URLFinder)

---

#### FuzzScanner

> [TideSec/FuzzScanner: 一个主要用于信息搜集的工具集，主要是用于对网站子域名、开放端口、端口指纹、c段地址、敏感目录等信息进行批量搜集。 (github.com)](https://github.com/TideSec/FuzzScanner)
>
> ----

安装

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/secplus/tide-fuzzscanner:1.0
docker run --name fuzzscanner -t -i 52341fc71d0a /bin/bash
```

使用

```
进入 docker 之后在 /root 目录下有 FuzzScaner
```

```bash
python FuzzScanner.py -hc target.com         -->  domain && web finger && Dir scan && C scan 
                                                  设置单个目标网站，子域名枚举 && web指纹识别 && 目录枚举 && C段扫描

python FuzzScanner.py -Hc vuln_domains.txt   -->  domain && web finger && Dir scan && C scan
                                                  从文件读取单个或多个目标网站，子域名枚举 && web指纹识别 && 目录枚举 && C段扫描

python FuzzScanner.py -hca target.com        -->  domain && web finger && Dir scan && C scan && C allport
                                                  设置单个目标网站，子域名枚举 && web指纹识别 && 目录枚举 && C段全端口扫描
                                                  
python FuzzScanner.py -Hca vuln_domains.txt  -->  domain && web finger && Dir scan && C scan && C allport
                                                  从文件读取单个或多个目标网站，子域名枚举 && web指纹识别 && 目录枚举 && C段全端口扫描

python FuzzScanner.py -h  target.com         -->  domain && web finger && Dir scan
                                                  设置单个目标网站，子域名枚举 && web指纹识别 && 目录枚举 

python FuzzScanner.py -H  vuln_domains.txt   -->  domain && web finger && Dir scan
                                                  从文件读取单个或多个目标网站，子域名枚举 && web指纹识别 && 目录枚举

python FuzzScanner.py -c  192.168.1.1        -->  C scan
                                                  设置单个IP，进行C段地址探测

python FuzzScanner.py -cd 192.168.1.1        -->  C scan  && Dir scan
                                                  设置单个IP，进行C段地址探测并对web服务进行目录枚举

python FuzzScanner.py -C  vuln_ip.txt        -->  C scan
                                                  从文件读取单个或多个目标IP地址，进行C段地址探测

python FuzzScanner.py -Cd vuln_ip.txt        -->  C scan  && Dir scan
                                                  从文件读取单个或多个目标IP地址，进行C段地址探测并对web服务进行目录枚举

python FuzzScanner.py -ca 192.168.1.1        -->  C scan  && C allport
                                                  设置单个IP，进行C段地址探测和全端口扫描

python FuzzScanner.py -Ca vuln_ip.txt        -->  C scan  && C allport
                                                  从文件读取单个或多个目标IP地址，进行C段地址探测和全端口扫描
```

---

#### gshark - 敏感信息搜集防泄漏图形化工具

> [madneal/gshark: Scan for sensitive information easily and effectively. (github.com)](https://github.com/madneal/gshark)
>
> [多平台的敏感信息监测工具-GShark (seebug.org)](https://paper.seebug.org/1560/)
>
> [gshark-敏感信息搜集防泄漏图形化工具（避坑指南）_爱国小白帽的技术博客_51CTO博客](https://blog.51cto.com/u_15274949/2922245)
>
> ----

- 前端部署

  在 [Releases · madneal/gshark (github.com)](https://github.com/madneal/gshark/releases) 下载对应系统的 release

  ```bash
  # 解压压缩包, 如:
  unzip gshark_linux_amd64.zip
  
  # 安装 nginx
  sudo apt update
  sudo apt install nginx
  ```
  
  > 
  
  编辑 Nginx 配置文件 `/etc/nginx/nginx.conf`, 在 `http{}` 中添加如下配置项
  
  ```properties
  http {
  	......
  	server {
  		listen 8080;
  		server_name localhost;
  		root /var/www;
  
  		# charset koi8-r;
  
  		# access_log /var/log/nginx/host.access.log main;
  
  		location /api/ {
  			proxy_set_header Host $http_host;
  			proxy_set_header  X-Real-IP $remote_addr;
  			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  			proxy_set_header X-Forwarded-Proto $scheme;
  			rewrite ^/api/(.*)$ /$1 break;
  			proxy_pass http://127.0.0.1:8888;	# 设置代理服务器的协议和地址
  		}
  	}
  }
  ```
  
  将解压后的 dist 目录下的文件拷贝到 `/var/www` 目录下
  
- 后端部署

  ```bash
  git clone https://github.com/madneal/gshark.git
  cd server
  go mod tidy
  mv config-temp.yaml config.yaml
  go build
  ./gshark web
  ```

- 访问 Web 页面 `localhost:8080` 输入 MySQL 账密初始化数据库

  账密都是 `gshark` 登入系统

- 在 `管理` 菜单进行 Token 配置, 规则(关键词) (批量导入, 关键词换行)以及过滤规则

- 然后回到后端命令行 `./gshark scan`

- 然后在前端页面 `搜索结果` 中进行查看

---

### 暴力破解

- [ ] [pingc0y/URLFinder: 类似JSFinder的golang实现，一款用于快速提取检测页面中JS与URL的工具，更快更全更舒服 (github.com)](https://github.com/pingc0y/URLFinder)

---

#### 超级弱口令检查工具

> [shack2/SNETCracker: 超级弱口令检查工具是一款Windows平台的弱口令审计工具，支持批量多线程检查，可快速发现弱密码、弱口令账号，密码支持和用户名结合进行检查，大大提高成功率，支持自定义服务端口和字典。 (github.com)](https://github.com/shack2/SNETCracker)
>
> 直接到 Release 页面下载即可
>
> ---
>
> [WangYihang/ccupp: 基于社会工程学的弱口令密码字典生成工具 (github.com)](https://github.com/WangYihang/ccupp)
>
> [k8gege/PasswordDic: 2011-2019年Top100弱口令密码字典 Top1000密码字典 服务器SSH/VPS密码字典 后台管理密码字典 数据库密码字典 子域名字典 (github.com)](https://github.com/k8gege/PasswordDic)
>
> [shadowabi/S-BlastingDictionary: 自己搜集的爆破字典，包括常用用户名、密码弱口令、XSS的on事件遍历、SQL万能密码等 (github.com)](https://github.com/shadowabi/S-BlastingDictionary)
>
> ---

![image-20221122092808517](http://cdn.ayusummer233.top/img/202211220929065.png)

---

### 威胁情报收集

- [ ] [wgpsec/tig: Threat Intelligence Gathering 威胁情报收集，旨在提高蓝队拿到攻击 IP 后对其进行威胁情报信息收集的效率。 (github.com)](https://github.com/wgpsec/tig)
- [ ] [威胁情报大合集-awesome-threat-intelligence/README_ch.md at main · hslatman/awesome-threat-intelligence (github.com)](https://github.com/hslatman/awesome-threat-intelligence/blob/main/README_ch.md)


### Chrome 扩展推荐

#### Wapplayzer

> [Chrome Store](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg/related)
>
> [Wappalyzer - Technology profiler - Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/wappalyzer-technology-p/mnbndgmknlpdjdnjfmfcdjoegcckoikn)
>
> ---

![image-20221118195151757](https://cdn.ayusummer233.top/img/image-20221118195151757.png)

---

#### WhatRuns

> [Chrome Store](https://chrome.google.com/webstore/detail/whatruns/cmkdbmfndkfgebldhnkbfhlneefdaaip)
>
> ---

![image-20221118195204712](https://cdn.ayusummer233.top/img/image-20221118195204712.png)

---

#### findsomething

> [chrome Store - findsomething](https://chrome.google.com/webstore/detail/findsomething/kfhniponecokdefffkpagipffdefeldb)
>
> ---

![image-20221121144907413](http://cdn.ayusummer233.top/img/202211211449087.png)

---

