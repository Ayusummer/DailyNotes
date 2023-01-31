# PHP 学习

- [PHP 学习](#php-学习)
  - [概述](#概述)
  - [安装与调试](#安装与调试)
    - [下载 XAMPP](#下载-xampp)
      - [配置环境变量](#配置环境变量)
    - [下载 xdebug 插件](#下载-xdebug-插件)
    - [在 VSCode 中调试 PHP](#在-vscode-中调试-php)
    - [在 PHPStorm 中调试 PHP](#在-phpstorm-中调试-php)
    - [一些基本指令](#一些基本指令)

---

## 概述

> [PHP 教程 (w3school.com.cn)](https://www.w3school.com.cn/php/index.asp)  
> [PHP 参考手册](https://www.w3school.com.cn/php/php_ref.asp)  
> [PHP 测验](https://www.w3school.com.cn/php/php_quiz.asp)  

PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言

---

## 安装与调试

:::tabs

@tab:active Windows

> [如何在VSCode配置PHP开发环境（详细版）[通俗易懂\] - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1990743)
>
> ---

---

### 下载 XAMPP

XAMPP 是一个把 Apache网页服务器与 PHP, Perl 及 MariaDB 合在一起的安装包, 允许用户在自己的电脑上轻易的创建网页服务器

XAMPP 的名称来自以下组合

- X(支持跨平台)
- Apache
- MySQL 或 MariaDB 
- PHP
- Perl

> Perl 是一种 CGI 脚本语言
>
> CGI 目前由 NCSA 维护，NCSA 定义 CGI 如下：
>
> CGI(Common Gateway Interface),通用网关接口,它是一段程序,运行在服务器上如：HTTP服务器，提供同客户端 HTML 页面的接口。
>
> ---
>
> 为了更好的了解 CGI 是如何工作的，我们可以从在网页上点击一个链接或 URL 的流程：
>
> - 1、使用你的浏览器访问 URL 并连接到 HTTP web 服务器。
> - 2、Web 服务器接收到请求信息后会解析 URL，并查找访问的文件在服务器上是否存在，如果存在返回文件的内容，否则返回错误信息。
> - 3、浏览器从服务器上接收信息，并显示接收的文件或者错误信息。
>
> CGI 程序可以是 Python 脚本，PERL 脚本，SHELL 脚本，C 或者 C++ 程序等。
>
> ---
>
> CGI 架构图:
>
> ![cgiarch](http://cdn.ayusummer233.top/img/202210210941771.png)
>
> ---
>
> > [Python3 CGI 编程_w3cschool](https://www.w3cschool.cn/python3/python3-cgi-programming.html)
>
> ---

XAMPP是一个易于安装的Apache发行版，其中包含MariaDB、PHP和Perl。仅仅需要下载并启动安装程序。

> [Download XAMPP (apachefriends.org)](https://www.apachefriends.org/zh_cn/download.html)
>
> ---

![image-20221021094326815](http://cdn.ayusummer233.top/img/202210210946224.png)

写 PHP 的话可以选择开启 Apache

---

#### 配置环境变量

将 XAMPP 安装目录下的 php 目录添加到 `环境变量-系统变量-Path` 中然后在命令行中输入 `php -v` 就可以看到版本号了

> ![image-20221021095308959](http://cdn.ayusummer233.top/img/202210210953864.png)

---


### 下载 xdebug 插件

> [XDEBUG 从入门到精通 - 掘金 (juejin.cn)](https://juejin.cn/post/7045941450248306719)
>
> ---

Xdebug是PHP的扩展，用于协助调试和开发。

- 它包含一个用于IDE的调试器
- 它升级了PHP的`var_dump()`函数
- 它为通知，警告，错误和异常添加了堆栈跟踪
- 它具有记录每个函数调用和磁盘变量赋值的功能
- 它包含一个分析器
- 它提供了与PHPUnit一起使用的代码覆盖功能。

 但不推荐在生产环境中使用xdebug，因为他太重了。

---

> [xedebug 下载地址]([Xdebug: Downloads](https://xdebug.org/download))
>
> [[Configure Xdebug | PhpStorm (jetbrains.com)](https://www.jetbrains.com/help/phpstorm/2022.2/configuring-xdebug.html#c54f0dec)](https://xdebug.org/download)
>
> ---

在命令行输入 `php -i` 并把输出粘贴到 [Xdebug: Support — Tailored Installation Instructions](https://xdebug.org/wizard) 便可以看到需要下载哪个版本的 xedebug
下载完后将该 dll 文件拷贝到 `xampp/php/ext` 目录下并重命名为 `php_xebug.dll` 

> ![image-20221021111954317](http://cdn.ayusummer233.top/img/202210211119490.png)





将其放到 `xampp/php/ext` 目录下并修改 `xampp/php/php.ini` , 在末尾添加 `xedebug` 相关配置, 其中 `zend_extension` 为 `xedebug` 文件路径

`Xedebug3` 配置如下:

```ini
[xdebug]
zend_extension="<path to xdebug extension>"
xdebug.mode=debug
xdebug.client_host=127.0.0.1
xdebug.client_port="<the port (9003 by default) to which Xdebug connects>"
```

> ```ini
> [xdebug]
> zend_extension=xdebug
> xdebug.mode=debug
> xdebug.client_host=127.0.0.1
> xdebug.client_port="9003"
> ```
>
> xdebug dll 命名为 `php_xdebug.dll` 后这里的 `zend_extension` 就可以写 xebug, 否则写 dll 的完整路径

---

:::

### 在 VSCode 中调试 PHP

安装 `PHP Debug` 扩展

> ![image-20221021101332552](http://cdn.ayusummer233.top/img/202210211013664.png)

修改 VSCode 的 `settings.json`, 修改如下配置

```json
"php.debug.executablePath": "D:/Software/Programming/PHP/XAMPP/php/php.exe",
```

---

打开一个文件目录创建并编辑 `test.php` 文件

```php
<?php
$a = 'hello world';
echo $a;
?>
```

`F5` 执行

> ![image-20221021103344298](http://cdn.ayusummer233.top/img/202210211033410.png)

也可以使用

---

### 在 PHPStorm 中调试 PHP

和上文中一样打开一个文件目录创建一个 `test.php` 文件

编辑配置项

![image-20221021112755348](http://cdn.ayusummer233.top/img/202210211127460.png)

填入 `php.exe` 以及 `php.ini` 的路径即可

![image-20221021112834002](http://cdn.ayusummer233.top/img/202210211128117.png)

调试 php 文件

![image-20221021112925694](http://cdn.ayusummer233.top/img/202210211129809.png)

---
### 一些基本指令

查看 PHP 版本

```bash
php -v
```
