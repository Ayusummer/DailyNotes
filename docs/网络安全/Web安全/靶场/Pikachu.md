# pikachu

> [zhuifengshaonianhanlu/pikachu: 一个好玩的Web安全-漏洞测试平台 (github.com)](https://github.com/zhuifengshaonianhanlu/pikachu)

---

## 简介

Pikachu由国内大佬@hanlu开发[GITHUB地址](https://github.com/zhuifengshaonianhanlu/pikachu)，其中包含的漏洞种类与体验感完全不亚于DVWA，并且与DVWA配置环境都兼容，所以两者同时练习亦可。

---

## 靶场搭建

```bash
docker pull area39/pikachu
docker run --restart=always -d -p 9221:80 -p 9222:3306 area39/pikachu
```

- `docker run`
  - `--restart=always`: 容器设置自动启动
  - `-d`: 后台运行容器，并返回容器ID；
  - `-p`: 指定端口映射，格式为：**主机(宿主)端口:容器端口**

> 需要注意的是默认初始化完成之后密码是空的, 如果想要远程连接 docker 中的 mysql 则需要修改密码, 修改完密码之后需要重新初始化, 此时务必注意要初始化写的密码配置项有两个, 一个在 `/app/inc/config.inc.php` 对应主页面的配置, 另一个在 `/app/pkxss/inc/config.inc.php` 对应后台管理的配置

---

## 涵盖漏洞类型

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

## pkxss 管理后台使用介绍

工具栏左侧最下方 `管理工具 -> XSS 后台`

![image-20221028100744102](http://cdn.ayusummer233.top/img/202210281007172.png)

![image-20221028101844150](http://cdn.ayusummer233.top/img/202210281018229.png)

![image-20221028102040438](http://cdn.ayusummer233.top/img/202210281020496.png)

![image-20221028102052933](http://cdn.ayusummer233.top/img/202210281020993.png)

![image-20221028100830152](http://cdn.ayusummer233.top/img/202210281008216.png)

![image-20221028100913224](http://cdn.ayusummer233.top/img/202210281009284.png)







































