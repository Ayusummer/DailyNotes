# 暴力破解

> [暴力破解 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/335161.html)
>
> [暴力破解漏洞_Eaxing的博客-CSDN博客](https://blog.csdn.net/qq_44040833/article/details/104189665)
>
> [Brute Force Attack | OWASP Foundation](https://owasp.org/www-community/attacks/Brute_force_attack)
>
> [How to brute force http forms in windows | Silly Chicken](https://www.sillychicken.co.nz/2011/05/how-to-brute-force-http-forms-in-windows/)
>
> [Endpoint Protection - Symantec Enterprise (broadcom.com)](https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=656f46ef-9e3c-4c1e-a629-594d76fb5339&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments)
>
> ---

`暴力破解` 是一种攻击手段，在web攻击中，一般会使用这种手段对应用系统的认证信息进行获取。其过程就是使用大量的认证信息在认证接口进行尝试登录，直到得到正确的结果。

例如一个已知是四位并且全部由数字组成的密码，其可能共有10000种组合，因此最多尝试10000次就能找到正确的密码。而当遇到人为设置密码（非随机密码，人为设置密码有规律可循）的场景，则可以使用密码字典（例如彩虹表）查找高频密码，破解时间大大缩短。

> 设置长而复杂的密码、在不同的地方使用不同的密码、避免使用个人信息作为密码、定期修改密码等是防御暴力破解的有效方法。

---

暴力破解一般会使用带有字典的工具进行自动化操作; 

理论上来说，只要攻击者有足够强大的计算能力和时间, 大多数系统都是可以被暴力破解的，所以判断一个系统是否存在暴力破解漏洞，其条件也不是绝对的。

> 字典通常包含常见(弱)口令, 并且需要根据实际验证规则做出调整， 使用字典可以提高效率

---

我们说一个web应用系统存在暴力破解漏洞，一般是指该web应用系统没有采用或者采用了比较比较弱的认证安全策略，导致其被暴力破解的“可能性”变的比较高。这里的认证安全策略，包括但不限于：

- 是否要求用户设置复杂的密码；

- 是否每次认证都使用安全的验证码

  例如: 买火车票时的勾选符合条件的图片

  又如: 手机`OneTimePassword（一次性密码/动态口令）`；

- 是否对尝试登录的行为进行判断和限制

  例如: 连续多次错误登录，进行账号锁定或IP地址锁定等

- 是否采用了双因素认证

---

暴力破解关键在于一个好的字典, 这个字典的生成需要大量的数据收集, 积累与拟合

并且需要根据攻击目标的验证规则做出调整

---

## 原理

- **撞库** 或者说：**枚举法**。
- 攻击者借助计算机的高速计算不停枚举所有可能的用户名和密码，直到尝试出正确的组合，成功登录系统。
- 理论上，只要字典足够大，破解总是会成功的。

---

## 危害

目的主机账号猜解成功后，攻击者通常利用该账号做如下操作：

- **攻击者通过泄露账户非法登录主机，盗取用户数据；**
- 攻击者通过泄露账户非法登录主机，注入病毒程序，执行挖矿或勒索，如`Goblelmposter` 勒索病毒、蠕虫等；
- 攻击者通过泄露账户非法登录主机，作为跳板机攻击其他主机。

---

## 字典

> 其他字典相关知识详见 [附录-字典](#附录-字典)

一个有效的字典, 可以大大提高暴力破解的效率

- 常用的账号密码(弱口令), 比如常用用户名/密码 TOP 500 等
- 互联网上被脱库后的账号密码(社工库), 比如 CSDN 对当前泄露的约 600W 用户信息
- 使用指定的字符使用工具按照指定的规则进行排列组合算法生成的密码

---

## 测试流程

- `确认登录接口的脆弱性`:

  确认目标是否存在暴力破解的漏洞。（确认被暴力破解的“可能性”）。 

  > 比如：尝试登录-抓包-观察验证元素和response信息，判断是否存在被暴力破解的可能。
  >
  > 又如使用 nmap 遍历全网服务器 22 端口

- `优化字典`

  可以使用 `Crunch`, `Pydictor` 等工具来制作定制化的字典

  或者直接使用已有的网上的或者个人搜集整理的各种字典, 比如 kali 自带的一些字典

  根据实际情况对字典进行优化，提高暴破过程的效率。

  > [字典优化技巧](#字典优化技巧)

- `工具自动化操作`

  配置自动化工具

  > 比如线程、超时时间、重试次数等进行自动化操作。
  >
  > 工具包括但不限于
  >
  > - Python + 三方库写自动化脚本
  > - Hydra
  > - Metasploit
  > - Medusa
  > - patator
  > - BrutesPray
  > - Ncrack
  
  

---

## 暴力破解的方法

### 穷举法

穷举法是指根据输入密码的设定长度、选定的字符集生成可能的密码全集，进行地毯式搜索。例如一个已知是四位并且全部由数字组成的密码，其可能共有10000种组合，因此最多尝试10000次就能找到正确的密码。理论上利用这种方法可以破解任何一种密码，但随着密码复杂度增加，破解密码的时间会指数级延长。

穷举法适用于猜解随机生成的短信验证码等，因为各种随机生成密码出现的概率是一样的，不受人的记忆影响。

---

### 字典式攻击

字典式攻击是将出现频率最高的密码保存到文件中，这文件就是字典，暴破时使用字典中的这些密码去猜解。

字典式攻击适用于猜解人为设定的口令，因为人为设定受人方便记忆影响不同密码出现的概率是不一样的，12345678、password作为密码的概率比fghtsaer作为密码的概率要高得多。与穷举法相比，字典式攻击虽然损失了较小的命中率但节省了较多的时间。

---

### 彩虹表攻击

彩虹表攻击也属于字典式攻击，但它是一种高效地破解哈希算法（MD5、SHA1、SHA256/512等）的攻击方式。

网站为了增加安全性，不会直接将用户密码存储在数据库中，而是将密码进行哈希，变成一长串毫无意义的字符，并且哈希算法是不可逆的，没有解密算法可以还原成原来的密码。面对哈希后的密码，破解的方法有两个，一是用穷举法组合出所有的密码可能，然后经哈希加密算法计算，将结果与目标哈希值进行比对，但边计算边比对会耗费海量的时间；二是提前生成可能密码与对应哈希串的对照表，但是对照表将占据海量的磁盘空间，以14位字母和数字的组合密码为例，生成的密码32位哈希串的对照表将占用5.7×10^14 TB的存储空间。

彩虹表是时间空间折中的方法，其核心思想是将明文计算得到的哈希值由R函数映射回明文空间，交替计算明文和哈希值，生成哈希链，将这个链的首尾存储在表中，中间的都删掉，用的时候临时算，那么存储的空间比原来的减少了一半，而计算次数也并没有大量增多。由于在哈希链的计算过程中引入不同的R函数，将不同的R函数用不同的颜色表示，众多的哈希链就会像彩虹一样，所以叫做彩虹表。

![image-20220829141741586](http://cdn.ayusummer233.top/img/202208291417694.png)

使用彩虹表进行破解，普通PC也能达到每秒1000亿次以上的惊人速度。为了增加安全性，可能会多次哈希，例如MD5后再MD5一次；或者在原始密码前后补上一串字符，增加密码长度后再哈希，学名叫加盐（salt），这些算法的结果都可以加入彩虹表中。最完善的彩虹表差不多能破解出目前网上99.9%的密码。

---

## 容易被暴力破解的密码

许多人设置的密码都过于简单，或者使用电话号码、出生日期、亲人或宠物的名字作为密码，或者在不同网站使用相同密码，这些行为导致密码很容易被破解。

在 2020 年末，NordPass 公布了 2020 年使用率最高的 200 个密码，排名靠前的几个密码分别为 123456、123456789、password、12345678、111111、123123、12345、1234567890、1234567、000000、1234 …… ，除了纯数字，还有各种数字和字母组合，例如：qwerty、abc123 和 picture1 等。

暴力破解不会造成直接的入侵，但攻击者通过暴力破解获得了系统/用户的账号和密码，以此为后续的入侵做准备。对于个人而言，直接从用户那里窃取金钱，或者窃取其身份，身份盗用可能导致进一步的财务损失。对于企业而言，通过暴力破解可以登录Telnet服务、POP3服务和MySQL服务等，登录成功将会导致用户信息泄露、文件共享、邮件泄露或无法正常发送邮件等高危事件。

---

## 校验

---

### 验证码

`认证流程`

1. 客户端request登录页面，后台生成验证码：

   后台使用算法生成图片，并将图片response给客户端；

   同时将算法生成的值全局赋值存到session中；

2. 校验验证码：

   客户端将认证信息和验证码一同提交；

   后台对提交的验证码与session里面的进行比较；

3. 客户端重新刷新页面，再次生成新的验证码：

   验证码算法中一般包含随机函数，所以每次刷新都会改变。

---

`不安全的验证码-on client-常见问题`:

- 使用前端 JS 实现验证（纸老虎）；
- 将验证码在cookie中泄露，容易被获取；
- 将验证码在前端源代码中泄露，容易被获取。

---

`不安全的验证码-on server-常见问题`

- 验证码在后台不过期，导致可以长期被使用；
- 验证码校验不合格，逻辑出现问题；
- 验证码设计的太过简单和有规律，容易被猜解。

---

### Token

---

一个简单的 token 实例

```php
// 生成一个token，以当前微妙时间+一个5位的前缀
function set_token(){
if(isset($_SESSION['token'])){
unset($_SESSION['token']);
}
$_SESSION['token'] = str_replace('.','',uniqid(mt_rand(10000,99999),true));
}
```

---

一般的做法

1. 将 token 以 `type = 'hiden'` 的形式输出在表单中；
2. 在提交认证的时候一起提交，并在后台对其进行校验。

**但**由于其 `token` 值输出在了前端源码中，容易被获取，因此也就失去了防暴力破解的意义。一般 `token` 在防止 `CSRF` 上有较好的功效。

> `Cross-Site Request Forgery` 跨站请求伪造
>
> [Web漏洞之 CSRF(跨站请求伪造漏洞）详解 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/398601816)
>
> [什么是CSRF攻击？如何防御 CSRF 攻击？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/114750961)

---

## 防范

### 用户层面-增强密码安全性

- 提升密码长度和复杂度

  密码应由数字、大小写字母和特殊符号混合组成，且密码越长，破解密码的时间就会成指数增加，一旦密码超过了某个长度，基本上就不能用暴力破解了。例如，使用破解的服务器集群，每秒可以尝试3500亿次，这个速度破解6位密码只需要4.08秒，7位密码只需6.47分钟，8位密码需要10.24小时，9位密码需要40.53天，10位密码就需要10.55年了。

- 在不同的地方使用不同的密码

  重复使用电子邮件、银行和社交媒体帐户的密码更可能导致身份被盗用。可以将网站的缩写作为密码的后缀，例如登陆QQ的密码是 `Hl9tysY.qq`，登陆微博的密码是 `Hl9tysY.wb`，这样每个网站都有独立的密码且不容易忘记。

- 避免使用字典单词、数字组合、相邻键盘组合、重复的字符串。

  例如 password 、12345678、asdfg 、aaaa 或 123abc。

- 避免使用名字或者非机密的个人信息（电话号码、出生日期等）作为密码，或者是亲人、孩子、宠物的名字。因为当我们单击一些网站中的“忘记密码”链接时，系统有时会要求回答一系列问题。而答案通常可以在我们的社交媒体资料中找到，从而使帐户更易被破解。

- 定期修改密码

---

### 系统层面-做好密码防暴力破解设计

- 锁定策略：输错密码几次就锁定一段时间。
- 验证码技术：要求用户完成简单的任务才能登录到系统，用户可以轻松完成，但暴力工具无法完成。例如图形验证码、短信等。
- 密码复杂度限制：强制用户设置长而复杂的密码，并强制定期更改密码。
- 双因子认证：结合两种不同的认证因素对用户进行认证的方法。例如密码、身份证、安全令牌、指纹、面部识别、地理信息等。

---

### 安全防护设备防暴力破解

- 根据认证错误的频次锁用户和锁ip
  - 认证错误依据可以是用户自定义的关键字段

---

## 优缺点

- 优点：理论破解成功率100%（理论上来说利用密码全集尝试是这样的）
- 非常耗时间，甚至有些不人性化。

> 但是在常规工作和具体测试环境中从来不会这么搞，大都是通过从全集挑选出一些常用的或者常见的密码进行组合的方式来尝试破解，这种成功率也很高，又称”字典攻击“。
>
> 是否能成功破解的条件：就是密码字典里边一定包含有一个正确的密码，否则再大再多的密码都失败。
>
> 所以说，破解的速度和成功率关键不是取决于你的技术水平，而是取决于**[字典的密码耦合度]**问题。


---

# 附录

## 附录-字典

暴力破解攻击需要有一个字典, 它可以是常用单词与密码的组合

---

### kali 自带的字典

路径: `/usr/share/wordlists`:

![image-20221024145433153](http://cdn.ayusummer233.top/img/202210241455477.png)

- `drib`

  - `others` 扩展目录 默认用户名等

    ![image-20221024145502782](http://cdn.ayusummer233.top/img/202210241455075.png)

    ![image-20220830140139570](http://cdn.ayusummer233.top/img/202210241456239.png)

  - `stress` 压力测试

    ![image-20221024145706798](http://cdn.ayusummer233.top/img/202210241457879.png)

    ![image-20221024145755740](http://cdn.ayusummer233.top/img/202210241457829.png)

    ![image-20221024145817252](http://cdn.ayusummer233.top/img/202210241458346.png)

  - `vulns` 漏洞测试

    ![image-20221024145846510](http://cdn.ayusummer233.top/img/202210241458602.png)

    ![image-20221024145917329](http://cdn.ayusummer233.top/img/202210241459423.png)

  - `common.txt` 公共字典

  - `spanish.txt` 方法名或库目录

  - `small.txt` 小字典

  - `enskera.txt` 数据目录字典

  - `indexes.txt` 首页字典

  - `catala.txt` 项目配置字典

  - `big.txt` 大字典(180 K)

  - `extensions_common.txt` 常用文件扩展名字典

  - `mutations_common.txt` 备份扩展名字典

    ![image-20221024165540764](http://cdn.ayusummer233.top/img/202210241655847.png)

- `dirbuster`

  - `apache-user-enum-**  `  apache 用户枚举

  - `directories.jbrofuzz  ` 目录枚举

  - `directory-list-** ` 目录列表大/中/小

    ![image-20221024165608483](http://cdn.ayusummer233.top/img/202210241656564.png)

- `fasttrack.txt`

- `fern-wifi`  公共 wifi 账户密码

- `metasploit`

- `nmap.lst`

- `rockyou.txt.gz`

- `wfuzz`  模糊测试, 各种字典

---

### 字典生成工具

- kali 预装的字典生成工具 [Crunch](#Crunch) 
- [pydictor](https://github.com/LandGrey/pydictor/blob/master/README_CN.md)


---

### 字典优化技巧

- `根据注册提示信息优化`

  > 对目标站点进行注册，搞清楚账号密码的一些限制，比如目标站点要求密码是6位数字以上、字母数字组合，则可以按照此优化字典(去掉不符合要求的密码)

- `后台管理系统常见用户名`

  如果暴破的是管理后台，往往这种系统的管理员是 `admin/administrator/root` 的几率比较高，可以使用这三个账号随便一个密码，尝试登录，观察返回的结果，确定用户名。

  > 例如：
  >
  > 输入 `xxx/yyy` 返回 “用户名或密码错误”；
  >
  > 输入 `admin/yyy` 返回 “密码错误”；
  >
  > 则基本可以确定用户名是 `admin`；
  >
  > 因此只对密码进行暴破即可，提高效率。
  >
  > > 不过一般接口设计的时候会将用户名或密码错误归为一类并返回同样的信息从而避免从返回信息确定用户名的正确性

---

## 相关漏洞

[微软：0.08%的 RDP 暴力破解能够成功 - FreeBuf网络安全行业门户](https://www.freebuf.com/fevents/224781.html)

---

## 暴力破解工具

- [Metasploit](#Metasploit)
- [Hydra](#Hydra)

---

## Web 登录鉴权的演进

> [登录（鉴权与授权）历史演进版 - 简书 (jianshu.com)](https://www.jianshu.com/p/bd439beeca03)

### 鉴权与授权

- 鉴权 Authentication，指对于一个声明者所声明的身份权利，对其所声明的真实性进行鉴别确认的过程。
   例子：用户名张三，密码******，用户名和密码通过挖财验证，登陆成功
- 授权 Authorization，一般是指获取用户的委派权限。
   例子：我是张三，有权访问git/client/jizhang，因为gitlab给我进行了授权

可见，先有鉴权，才有授权。而登录，其实就是鉴权的过程。但是，现在的登录服务，同时做了鉴权和授权的工作，所以，用户是感知不到这两个阶段的明显区别。

---

# Crunch

> [crunch - wordlist generator download | SourceForge.net](https://sourceforge.net/projects/crunch-wordlist/)
>
> - `Registered`: 2009-06-15
> - `Last Updated`: 2016-11-29
>
> ----
>
> [crunch | Kali Linux Tools](https://www.kali.org/tools/crunch/)
>
> [crunch - 根据字符集生成字典_Nixawk的博客-CSDN博客](https://blog.csdn.net/nixawk/article/details/38409073)
>
> [Linux下的字典生成工具Crunch，创造自己的专属字典 - FreeBuf网络安全行业门户](https://www.freebuf.com/sectool/170817.html)

---

如果在情报侦测阶段，获取了足够多的信息，比如名字，生日，孩子的名字，宠物，学校等，甚至还知道了密码策略，例如至少8位，必须包含大小写字母等。我们就可以自定义一个有针对性的字典，从而完成爆破的任务。

可以利用 Crunch 来创建自定义的破解字典, 还可以和 `Hashcat`, `Join the Ripper`, `Aircrack-ng` 等工具一起使用。如果设置得当，势必能够节约时间。

---

## 安装

- `Debian/Ubuntu`

  ```bash
  sudo apt-get install crunch
  ```

  - kali 预装了 crunch

    ![image-20221024165704888](http://cdn.ayusummer233.top/img/202210241657053.png)  

    ![image-20221024165805002](http://cdn.ayusummer233.top/img/202210241658093.png)
    
    `CentOS/RedHat`

  ```bash
  sudo yum install crunch
  ```

- `Fedora OS`

  ```bash
  sudo dnf install crunch
  ```

验证安装

```bash
crunch
```

![image-20221024165830687](http://cdn.ayusummer233.top/img/202210241658796.png)

---

## 语法

```bash
crunch <min-len> <max-len> [<charset string>] [options]
```

- `min-len`:密码最小长度
- `max-len`:密码最大长度 
- `charset string`（可选）:用户自定义用来生成字典的字符集
  - 不设置的话使用==默认字符集即26位小写字母集[a-z]==
  - 如果指定字符要按照小写字母，大写字母，数字然后是符号
    - 如果使用指定字符，那么就其他的没使用字符集的要用+号来代替使用默认字符，不能不写，如我指定数字是`345`，那么我在`345`前面应该加上2个加号，用空格间隔
    - 如果指定字符集中想要包含空格，请用 `\` 字符将其转义或用引号闭合
- 特殊字符

  -  `%` 代表数字
  - `^` 代表特殊符号
  - `@` 代表小写字母
  - `,` 代表大写字符  
- `options`（可选）:选择参数

---

`可选参数`:

---

### 指定输出文件 -o

`-o wordlist.txt`: 指定输出文件, 例如: `wordlist.txt`

---

### 指定输出文件大小 -b

- `-b number[type]`

  指定输出文件的大小， 只有结合 `-o START` 使用时，该参数才起作用，例如: 60MB

  自动输出的文件名的格式是 `起始字符-结束字符`，

  例如:

  ```bash
  crunch 4 5 -b 20mb -o START
  ```

  ![image-20221024165909095](http://cdn.ayusummer233.top/img/202210241659180.png)

  会生成四个文件

  ![image-20220830154400006](http://cdn.ayusummer233.top/img/202210241451549.png)

  - `kb，mb，gb`，是以1000为单位计算统计的。
  - `kib，mib，gib` 是以1024为基础。
  - 注意==类型与数字之间没有空格==。例如: `500mb` 正确， `500 mb` 错误。

  ---

### 从文件获取字符集 -f

- `-f /path/to/charset.lst charset-name`

  从文件中获取字符集, 例如 `/usr/share/crunch/charset.lst`

  ![image-20220830162518135](http://cdn.ayusummer233.top/img/202210241451751.png)

---

### 写入文件的行数 -c

- `-c number`

  指定写入文件的行数, 只有 `-o START` 使用时，该参数才起作用，例如: 60 

  输出文件名的格式是 起始字符-结束字符.

  例如: 

  ```bash
  crunch 1 1 -f /usr/share/crunch/charset.lst mixalpha-numeric-all-space -o START -c 60
  ```

  > ```
  > mixalpha-numeric-all-space = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]
  > ```

  会生成两个文件: `a-7.txt and 8-\ .txt`

  > 第二个文件名中包含`\`， 是因为后面有个空格
  >
  > ![image-20220830201637659](http://cdn.ayusummer233.top/img/202208302016747.png)

  ---

### 指定模式 -t

- `-t @,%^`

指定模式, 例如: `@@god@@@@` 只有在 `@ , % ^` 处会改变
-  `%` 代表数字
-  `^` 代表特殊符号
-  `@` 代表小写字母
-  `,` 代表大写字符  

---

### 限制字符重复字数 -d

- `-d numbersymbol`
     限制字符重复的次数.  

     - `-d 2@` 会限制小写字符集输出类似 `aab` 和 `aac` 这样的值. `Aaa` 不会被产生
     - 参数格式就是数字后面跟一个符号，数字表示连续字符出现的最大次数，符号指想要限制的字符集符号，例如: `@,%^`   请看例子 `17-19`.

     ```bash
     # Example 17 - 生成字符长度 5 的字典，以 aab00 为起始， zzy99为结尾. 
     # 包含 aaa 和 zzz 这样的词不会出现.
     crunch 5 5 -d 2@ -t @@@%%
     
     # Example 18 - 生成字符长度为 10 的字典，以 aab!0001!! 为起始， zzy 9998. 为结尾。 
     # 每个文件的大小是 20mb.
     crunch 10 10 -t @@@^%%%%^^ -d 2@ -d 3% -b 20mb -o START
      
     # Example 19 - 生成词长为8的字典，字符重复次数最大为2
     # Crunch 会以 aabaabaa 为起始，  zzyzzyzz 为结束
     crunch 8 8 -d 2@
     ```

---

### 提前结束 -e

`-e string`: 遇到该字符, crunch 会提前结束

---

### 反转输出内容 -i

`-i` 翻转输出内容, 如果原始内容是 `aaa,aab,aac,aad`, 你会得到 `aaa,baa,caa,daa`

---

`-l` 当你使用 -t 选项时, crunch会将符号理解为它的字面值. 这样可以在模式中使用占位符.

`-l` 选项应该与-t选项拥有同样的长队，详见例子15.

```bash
crunch 7 7 -t p@ss,%^ -l a@aaaaa
```

> crunch 会将 `@` 符号理解为其字面意思， 不会替换为大写字符集.  生成的字符集如下:
>
> ```
> p@ssA0!
> p@ssA0@
> p@ssA0#
> p@ssA0$
> <skipped>
> p@ssZ9
> ```

---

### 指定起始字符串 -s

`-s startblock`: 指定一个起始字符串, 例如: `03god22fs`

---

### 不包含重复字符 -p

`-p charset OR -p word1 word2 ...`: 告诉 crunch 生成不包含重复字符的词

- 默认crunch生成的字典大小是 `#of_chars_in_charset ^ max_length`
- 该选项不会产生 `#of_chars_in_charset!`(! 代表阶乘)
- 例如: 字符是 abc，最大长度为 4.  Crunch 默认会生成 3^4 = 81 个词. 
  - 该选项会生成 $$3! = 3x2x1 =  6$$ 个词
  - (abc, acb, bac, bca, cab, cba).  
- 它必须是最后一个选项!  此选项不能与 `-s` 一起使用, 它会忽略最小和最大长度, 但是你必须指定两个数字。

---

### 生成不包含重复字符的词(从文件中获取输入) -q

`-q filename.txt`: 类似 -p 选项， 不同的是它从文件中获取输入.

---

### 继续完成上次终止的任务 -r

- `-r` 告诉 crunch 继续完成上次终止的任务.  
- `-r` 仅与 `-o` 一起时生效.
- `-r` 如果与 `-s` 一起使用， 会出现异常;

  如果原始命令中包含 -s 选项, 你必须移除它，然后在命令末尾加上 -r ，才能继续上次的任务.

---

### 禁止输出百分线 -u

`-u`: 禁止输出百分线, 该选项应该是最后一个参数

---

### 压缩 -o 选项指定的输出 -z

`-z gzip, bzip2, lzma, and 7z`: 压缩 -o 选项指定的输出.  有效参数有gzip, bzip2, lzma, 7z.

- gzip 速度快，但是压缩率较小
- bzip2 比 gzip 慢，但是有更好的压缩率
- 7z最慢, 但是压缩的最好.

---

# pydictor

> [LandGrey/pydictor: A powerful and useful hacker dictionary builder for a brute-force attack (github.com)](https://github.com/LandGrey/pydictor)
>
> [pydictor/README_CN.md at master · LandGrey/pydictor (github.com)](https://github.com/LandGrey/pydictor/blob/master/README_CN.md)
>
> [pydictor/usage.md at master · LandGrey/pydictor (github.com)](https://github.com/LandGrey/pydictor/blob/master/docs/doc/usage.md)
>
> [pydictor/api.md at master · LandGrey/pydictor (github.com)](https://github.com/LandGrey/pydictor/blob/master/docs/doc/api.md)
>
> ---

---

# Hydra

> [vanhauser-thc/thc-hydra: hydra (github.com)](https://github.com/vanhauser-thc/thc-hydra)
>
> - [ AGPL-3.0 license](https://github.com/vanhauser-thc/thc-hydra/blob/master/LICENSE)
>
> ---
>
> [为什么你的服务器总被入侵？SSH密码暴力破解实战 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1115791)
>
> [黑客工具之hydra详细使用教程 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/397779150)
>
> [【渗透测试】密码暴力破解工具——九头蛇（hydra）使用详解及实战 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/378051599)
>
> [爆破神器 - hydra(附下载) - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv10947357)

---

# Metasploit

> [官网 - Metasploit | Penetration Testing Software, Pen Testing Security | Metasploit](https://www.metasploit.com/)
>
> [Stargazers · rapid7/metasploit-framework (github.com)](https://github.com/rapid7/metasploit-framework)
>
> [文档 - Home | Metasploit Documentation Penetration Testing Software, Pen Testing Security](https://docs.metasploit.com/)
>
> [metasploit.github.io | GitHub pages for great justice. Mostly for public resources associated with Metasploit Framework and friends.](http://resources.metasploit.com/)
>
> [Metasploit Unleashed - Free Online Ethical Hacking Course (offensive-security.com)](https://www.offensive-security.com/metasploit-unleashed/)
>
> ---
>
> [How to Brute-Force SSH in Kali Linux? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-brute-force-ssh-in-kali-linux/)
>
> [Metasploit入门系列(一)——何为MSF - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/203000.html)
>
> [metasploit渗透测试入门 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/97894195)
>
> [为什么你的服务器总被入侵？SSH密码暴力破解实战 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1115791)
>
> [黑客基础，Metasploit模块简介，渗透攻击模块、攻击载荷模块 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/news/329927)
>
> [Metasploit快速入门（一） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/62429064)
>
> 

----

# Medusa

> [Ascotbe/Medusa: :cat2:Medusa是一个红队武器库平台，目前包括XSS平台、协同平台、CVE监控、免杀生成、DNSLOG、钓鱼邮件、文件获取等功能，持续开发中 (github.com)](https://github.com/Ascotbe/Medusa)
>
> - [GPL-3.0 license](https://github.com/Ascotbe/Medusa/blob/master/LICENSE)
>
> ---
>
> [为什么你的服务器总被入侵？SSH密码暴力破解实战 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1115791)



---

# patator

> [lanjelot/patator: Patator is a multi-purpose brute-forcer, with a modular design and a flexible usage. (github.com)](https://github.com/lanjelot/patator)
>
> - [ GPL-2.0 license](https://github.com/lanjelot/patator/blob/master/LICENSE)
>
> [patator | Kali Linux Tools](https://www.kali.org/tools/patator/)
>
> ---
>
> [为什么你的服务器总被入侵？SSH密码暴力破解实战 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1115791)



---

# BrutesPray

> [为什么你的服务器总被入侵？SSH密码暴力破解实战 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1115791)



---

# Ncrack

> [Ncrack — Hack Tools 1.0.0 文档 (hack-security-tools-cn.readthedocs.io)](https://hack-security-tools-cn.readthedocs.io/zh_CN/latest/ncrack.html)
>
> [Ncrack - High-speed network authentication cracker (nmap.org)](https://nmap.org/ncrack/)
>
> [nmap/ncrack: Ncrack network authentication tool (github.com)](https://github.com/nmap/ncrack)



---



