# Postfix

- [Postfix](#postfix)
  - [部署](#部署)
    - [制作 SSL 证书](#制作-ssl-证书)
    - [安装与配置 MySQL](#安装与配置-mysql)
      - [安装 MySQL](#安装-mysql)
      - [新建数据库及用户](#新建数据库及用户)
      - [新建表格](#新建表格)
      - [插入数据](#插入数据)
    - [安装与配置 Postfix](#安装与配置-postfix)
      - [安装 Postfix](#安装-postfix)
      - [配置Postfix](#配置postfix)
        - [main.cf](#maincf)
        - [mysql-virtual-mailbox-domains.cf](#mysql-virtual-mailbox-domainscf)
        - [mysql-virtual-mailbox-maps.cf](#mysql-virtual-mailbox-mapscf)
        - [mysql-virtual-alias-maps.cf](#mysql-virtual-alias-mapscf)
        - [master.cf](#mastercf)
    - [安装与配置 Dovecot](#安装与配置-dovecot)
      - [安装Dovecot](#安装dovecot)
      - [配置 Dovecot](#配置-dovecot)
        - [Dovecot 主配置文件 - dovecot.conf](#dovecot-主配置文件---dovecotconf)
        - [配置磁盘路径相关信息 -10-mail.conf](#配置磁盘路径相关信息--10-mailconf)
        - [配置用户验证相关信息 - 10-auth.conf](#配置用户验证相关信息---10-authconf)
        - [配置SQL-Type验证相关信息 - auth-sql.conf.ext](#配置sql-type验证相关信息---auth-sqlconfext)
        - [配置数据库连接相关信息 - dovecot-sql.conf.ext](#配置数据库连接相关信息---dovecot-sqlconfext)
        - [配置本地socket相关信息 - 10-master.conf](#配置本地socket相关信息---10-masterconf)
        - [配置 SSL 相关信息 - 10-ssl.conf](#配置-ssl-相关信息---10-sslconf)
    - [测试邮件服务器是否正常](#测试邮件服务器是否正常)

---

> [Postfix 主页 --- The Postfix Home Page](https://www.postfix.org/)

Postfix 是一款开源的, 高性能, 稳定且可靠的邮件服务器, 广泛用于搭建邮件系统

---

## 部署

> [搭建邮件服务器之使用Postfix收发邮件 - 小枫同学 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xfstu/p/17468312.html)
>
> [【验】Postfix+Dovecot+MySQL搭建邮件服务器_wx63b644a53b596的技术博客_51CTO博客](https://blog.51cto.com/u_15930680/7436441)

---

### 制作 SSL 证书

可以购买第三方的证书也可以自行用 OpenSSL 制作, 区别就在于自己做的证书, 客户端连接服务器时会弹出是否信任的询问窗口

关于如何制作自签名 SSL 证书可以参考 [使用 openssl 生成自签名证书)](https://ayusummer.github.io/DailyNotes/网络安全/加密算法/#使用-openssl-生成自签名证书)

---

### 安装与配置 MySQL

#### 安装 MySQL

:::tabs

@tab:active ubuntu

```bash
apt update
apt install mysql-server
```

![image-20240228095550394](http://cdn.ayusummer233.top/DailyNotes/202402280955220.png)

```bash
# 设置 root 密码
sudo mysql_secure_installation
```

根据需求设定是否使用强密码以及其他配置项

![image-20240228102220181](http://cdn.ayusummer233.top/DailyNotes/202402281022600.png)

```bash
# 进入 mysql
mysql
# 修改 root@% 密码为 new_password
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'your_new_password';

# 需要通过FLUSH PRIVILEGES刷新权限表使修改生效
FLUSH PRIVILEGES;
```

![image-20240228103331081](http://cdn.ayusummer233.top/DailyNotes/202402281033455.png)

:::

---

#### 新建数据库及用户

> [在 MySQL 8.0 中使用 GRANT 或 IDENTIFIED BY 创建用户时出错 | urashita.com urashita.com (urashita.com) --- MySQL 8.0 ではGRANT、IDENTIFIED BYでユーザーを作成するとエラー | urashita.com 浦下.com (ウラシタドットコム)](https://urashita.com/archives/35970)

```bash
# 使用 root 口令登录 MySQL
mysql -u root -p
# 新建一个名为 mailserver 的数据库
create database mailserver character set utf8;
# 新建一个名为 mailserver 的用户, 指定密码为 maillserve123
create user mailserver@'localhost' identified by 'Mail#Server@123';
# 将数据库mailserver的所有权限赋给用户mailserver(Mysql5.7)
grant all on mailserver.* to mailserver@'localhost' identified by 'Mail#Server@123';
# 将数据库mailserver的所有权限赋给用户mailserver(Mysql8.0)
grant all on mailserver.* to mailserver@'localhost' with grant option;

# 退出 root用户
exit;
```

![image-20240228112215004](http://cdn.ayusummer233.top/DailyNotes/202402281122621.png)

---

#### 新建表格

```bash
# 使用mailserver用户登录：
mysql -u mailserver -p'Mail#Server@123'
# 将默认数据库切换为mailserver数据库：
use mailserver;
```

新建 `virtual_domains` 表用于存放本地服务器接收邮件的域名:

```mysql
CREATE TABLE `virtual_domains` (
    `id` int(11) NOT NULL auto_increment,
    `name` varchar(50) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
```

![image-20240228113927005](http://cdn.ayusummer233.top/DailyNotes/202402281139391.png)

新建 `virtual_users` 表作为邮件服务器的终端用户表，记录用户的邮件地址及密码(非明文密码):

```mysql
CREATE TABLE `virtual_users` (
    `id` int(11) NOT NULL auto_increment,
    `domain_id` int(11) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`),
    FOREIGN KEY (domain_id) REFERENCES virtual_domains(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
```

![image-20240228114352591](http://cdn.ayusummer233.top/DailyNotes/202402281143878.png)

> PS: `password varchar(255) NOT NULL,` 的 255 是后来改的, 所以和贴出来的图中的 106 对不上, 后续用来更新密码的 dovecot 的密码太长了, 所以通过 `ALTER TABLE virtual_users MODIFY COLUMN password VARCHAR(255);` 改了下, 所以修改了这里新建表单的时候就写成 255

新建 `virtual_aliases` 表作为邮件服务器别名表:

```mysql
CREATE TABLE `virtual_aliases` (
    `id` int(11) NOT NULL auto_increment,
    `domain_id` int(11) NOT NULL,
    `source` varchar(100) NOT NULL,
    `destination` varchar(100) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (domain_id) REFERENCES virtual_domains(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
```

![image-20240228133437812](http://cdn.ayusummer233.top/DailyNotes/202402281334185.png)

![image-20240228133501390](http://cdn.ayusummer233.top/DailyNotes/202402281335840.png)

---

#### 插入数据

在 `virtual_domains` 表中添加测试域名数据:

```mysql
insert into virtual_domains(id,name) values(1,'mail.ayusummer.com');     
insert into virtual_domains(id,name) values(2,'ayusummer.com');
```

![image-20240228134557391](http://cdn.ayusummer233.top/DailyNotes/202402281345963.png)

---

在 `virtual_users` 表中添加用户数据:

> PS: ==关于密码的部分不用特别关注了,dovecot这玩意儿密码生成和mysql始终对不上, 后续要拿dovecot的密码来改数据库里的密码==

:::tabs

@tab MySQL5.7

```sql
insert into
    virtual_users(id, domain_id, password, email)
values
    (
        1,
        2,
        ENCRYPT(
            'zhangsan123456',
            CONCAT('$6$', SUBSTRING(SHA(RAND()), -16))
        ),
        'zhangsan@mydomain.com'
    );

insert into
    virtual_users(id, domain_id, password, email)
values
    (
        2,
        2,
        ENCRYPT(
            '123456lisi',
            CONCAT('$6$', SUBSTRING(SHA(RAND()), -16))
        ),
        'lisi@mydomain.com'
    );
```

- `ENCRYPT('zhangsan123456', CONCAT('$6$', SUBSTRING(SHA(RAND()), -16)))`: 使用 MySQL 的 `ENCRYPT` 函数对密码进行加密

  `ENCRYPT` 将原始密码和盐作为参数, 并使用指定算法(这里是 SHA-512)进行加密, 最终结果是经过盐处理的加密密码
  
  - `zhangsan123456`: 原始密码
  - `CONCAT('$6$', SUBSTRING(SHA(RAND()), -16)`: 生成一个随机的 16 位字符串, 作为加密的盐
    - `$6$` 表示使用 SHA-512 算法进行加密
    - `SUBSTRING(SHA(RAND()), -16)`: 生成一个随机的 16 位字符串
      - `SHA(RAND())`: 生成一个随机的字符串并进行 SHA-1 加密
      - `SUBSTRING(SHA(RAND()), -16)`: 截取 SHA-1 加密后的字符串的后 16 位
  

---

@tab:active MySQL8.0

因为 `ENCRYPT` 函数采用了基于DES(Data Encryption Standard) 的加密算法，而DES是一种相对较弱的加密算法，不再被视为安全, MySQL 8.0 中不再支持 `ENCRYPT` 函数

> 随着时间的推移，密码学的研究不断进展，新的算法和更安全的加密方法得以发展。由于DES存在一些安全漏洞，例如密钥长度较短，易受到暴力破解等攻击

在 MySQL 8.0 中，采用了更现代且安全的密码哈希函数，例如 SHA-256、SHA-512 等，以替代过时的加密方法。这有助于提高存储在数据库中的密码的安全性，并抵御更高级的攻击。

```mysql
INSERT INTO
    virtual_users(id, domain_id, password, email)
VALUES
    (
        1,
        2,
        CONCAT(
            '$6$',
            SUBSTRING(
                SHA2(
                    CONCAT(
                        'zhangsan123456',
                        RAND()
                    ),
                    512
                ),
                -16
            )
        ),
        'zhangsan@ayusummer.com'
    );

INSERT INTO
    virtual_users(id, domain_id, password, email)
VALUES
    (
        2,
        2,
        CONCAT(
            '$6$',
            SUBSTRING(
                SHA2(
                    CONCAT(
                        '123456lisi',
                        RAND()
                    ),
                    512
                ),
                -16
            )
        ),
        'lisi@ayusummer.com'
    );
```

- `CONCAT('$6$', SUBSTRING(SHA2(CONCAT('zhangsan123456', RAND()), 512), -16))`: 对密码进行哈希和加盐
  - `CONCAT(xxx,xxx)`: 将两个字符串连接起来
  - `$6$`: 表示使用 SHA-512 算法进行加密
  - `SUBSTRING(SHA2(CONCAT('zhangsan123456', RAND()), 512), -16)`
    - `SUBSTRING(xx, -16)`: 截取字符串的后 16 位
    - `SHA2(CONCAT('zhangsan123456', RAND()), 512)`: 对 `zhangsan123456` 和一个随机数进行 SHA-512 加密

![image-20240228141555297](http://cdn.ayusummer233.top/DailyNotes/202402281415690.png)

![image-20240228142354323](http://cdn.ayusummer233.top/DailyNotes/202402281423677.png)

> 更新 email 列数据可以使用:
>
> ```mysql
> UPDATE
>     virtual_users
> SET
>     email = 'zhangsan@mydomain.com'
> WHERE
>     id = 1;
>     
> select * from virtual_users;
> ```

> PS: 这一节关于密码的部分看个乐呵, 后续要拿 dovecot 生成的密码覆盖掉原始密码


:::

---

在 `virtual_aliases` 表添加别名数据:

```mysql
insert into
    virtual_aliases(id, domain_id, source, destination)
values
    (
        1,
        2,
        'all@ayusummer.com',
        'zhangsan@ayusummer.com'
    );

insert into
    virtual_aliases(id, domain_id, source, destination)
values
    (2, 2, 'all@ayusummer.com', 'lisi@ayusummer.com');
```

![image-20240228171722085](http://cdn.ayusummer233.top/DailyNotes/202402281717835.png)

![image-20240228171733788](http://cdn.ayusummer233.top/DailyNotes/202402281717182.png)

---

```mysql
# 看下各表单数据
select * from virtual_domains;  
select * from virtual_users;  
select * from virtual_aliases;
```

![image-20240228172604491](http://cdn.ayusummer233.top/DailyNotes/202402281726787.png)

---

### 安装与配置 Postfix

#### 安装 Postfix

:::tabs

@tab:active ubuntu

```bash
apt update
apt install postfix  
```

![image-20240227161653598](http://cdn.ayusummer233.top/DailyNotes/202402271616144.png)

- `No configuration`: 保持默认配置
- `Internet site`: 这是默认的配置类型, 适用于大多数情况;
  邮件服务器直接连接到互联网, 并能够直接发送和接收邮件
  用户输入域名时，Postfix会自动根据机器的主机名和域名生成合适的配置
- `Satellite System`: 将此邮件服务器作为一个 "卫星" 系统, 依赖于另一个邮件服务器来处理所有入站和出站的邮件
- `Local Only`: 仅在本地(局域网)发送邮件, 不与外部网络直接交互; 邮件仅在本地用户之间传递, 不涉及互联网邮件传输

根据需求自行选择配置, 这里以  `Internet Site` 为例

![image-20240227170322096](http://cdn.ayusummer233.top/DailyNotes/202402271703555.png)

选择完成后回车进入下一个页面, 输入域名

![image-20240227170621512](http://cdn.ayusummer233.top/DailyNotes/202402271706858.png)

这里如果你想让对方邮箱显示 `admin@example.org` 的话就填 `example.org`

回车后会自动继续安装

![image-20240227170833859](http://cdn.ayusummer233.top/DailyNotes/202402271708251.png)

安装 Postfix-mysql

```bash
apt install postfix-mysql
```

![image-20240228174303512](http://cdn.ayusummer233.top/DailyNotes/202402281743059.png)

:::

---

#### 配置Postfix

##### main.cf

先把Postfix 的配置文件备份一下

```bash
cp /etc/postfix//main.cf /etc/postfix/main.cf_backup_20240228
```

![image-20240228175424199](http://cdn.ayusummer233.top/DailyNotes/202402281754562.png)

编辑 `main.cf`

这里不做权限验证,注释掉如下几行

```properties
# TLS parameters  
#smtpd_tls_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem  
#smtpd_tls_key_file=/etc/ssl/private/ssl-cert-snakeoil.key  #smtpd_use_tls=yes  
#smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache  
#smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache
```

![image-20240229164622978](http://cdn.ayusummer233.top/DailyNotes/202402291646515.png)

将如下配置插入到注释代码之后:

```properties
smtpd_tls_cert_file=/etc/dovecot/dovecot.pem  
smtpd_tls_key_file=/etc/dovecot/private/dovecot.key  
smtpd_use_tls=yes  
smtpd_tls_auth_only = yes  

#Enabling SMTP for authenticated users, and handing off authentication to Dovecot  
smtpd_sasl_type = dovecot  
smtpd_sasl_path = private/auth  
smtpd_sasl_auth_enable = yes  
smtpd_recipient_restrictions =  permit_sasl_authenticated, permit_mynetworks, reject_unauth_destination
```

修改 mydestination 的配置为 `localhost` 以便适应 MySQL 中的邮件配置

![image-20240304093101058](http://cdn.ayusummer233.top/DailyNotes/202403040931781.png)

---

在配置文件末尾加上如下内容以配置不使用 LDA(Local Delivery Agent) 而是使用 Dovecot 的 LMTP 完成本地邮件投递

```properties
#Handing off local delivery to Dovecot's LMTP, and telling it where to store mail  
virtual_transport = lmtp:unix:private/dovecot-lmtp
```

![image-20240304093429909](http://cdn.ayusummer233.top/DailyNotes/202403040934550.png)

在配置文件末尾加上如下内容以配置Postfix去MySQL数据库种寻找域名、用户帐号密码及邮件别名等信息:

```properties
#Virtual domains, users, and aliases  
virtual_mailbox_domains = mysql:/etc/postfix/mysql-virtual-mailbox-domains.cf  
virtual_mailbox_maps = mysql:/etc/postfix/mysql-virtual-mailbox-maps.cf  
virtual_alias_maps = mysql:/etc/postfix/mysql-virtual-alias-maps.cf
```

---

##### mysql-virtual-mailbox-domains.cf

新建 `/etc/postfix/mysql-virtual-mailbox-domains.cf` 内容如下:

```properties
user = mailserver
password = Mail#Server@123
hosts = 127.0.0.1
dbname = mailserver
query = SELECT 1 FROM virtual_domains WHERE name='%s'
```

重启 Postfix 服务

```bash
service postfix restart
```

测试配置是否正确, 如果上述配置正确, 那么如下命令执行后会返回1

```bash
postmap -q mail.ayusummer.com mysql:/etc/postfix/mysql-virtual-mailbox-domains.cf
```

![image-20240304102633629](http://cdn.ayusummer233.top/DailyNotes/202403041026014.png)

> 实际效果就是按照 `mysql-virtual-mailbox-domains.cf` 的配置文件链接 mysql 数据库并切换到 mailserver 表后执行了 `SELECT 1 FROM virtual_domains WHERE name='mail.ayusummer.com';`, 如果条目存在则返回 1, 根据前面mysql 的配置可以看出来是可以查询到的
>
> ![image-20240304102822698](http://cdn.ayusummer233.top/DailyNotes/202403041028114.png)

---

##### mysql-virtual-mailbox-maps.cf

新建 `/etc/postfix/mysql-virtual-mailbox-maps.cf` 文件并输入如下内容:

```properties
user = mailserver
password = Mail#Server@123
hosts = 127.0.0.1  
dbname = mailserver  
query = SELECT 1 FROM virtual_users WHERE email='%s'
```

重启Postfix服务:

```bash
service postfix restart
```

测试配置是否正确, 如果上述配置正确, 那么如下命令执行后会返回1:

```bash
postmap -q lisi@ayusummer.com mysql:/etc/postfix/mysql-virtual-mailbox-maps.cf
```

![image-20240304100734214](http://cdn.ayusummer233.top/DailyNotes/202403041007618.png)

---

##### mysql-virtual-alias-maps.cf

新建 `/etc/postfix/mysql-virtual-alias-maps.cf` 文件并输入如下内容:

```properties
user = mailserver
password = Mail#Server@123
hosts = 127.0.0.1  
dbname = mailserver  
query = SELECT destination FROM virtual_aliases WHERE source='%s'
```

重启Postfix服务:

```bash
service postfix restart
```

测试上述配置是否正确，如果上述配置正确，则如下命令执行后返回结果应该是之前添加的别名帐号：

```bash
postmap -q all@ayusummer.com mysql:/etc/postfix/mysql-virtual-alias-maps.cf
```

![image-20240304101826028](http://cdn.ayusummer233.top/DailyNotes/202403041018498.png)

---

##### master.cf

备份一份 `/etc/postfix/master.cf` 然后修改其中内容, 将 `submission` 和 `smtps` 所在的如下两行的注释去掉以允许Postfix通过 [587(submission) 和 465(smtps)](名词解释.md#submission和SMTPS) 端口发送邮件

![image-20240304171031269](http://cdn.ayusummer233.top/DailyNotes/202403041710393.png)

重启Postfix服务

```bash
service postfix restart
```

到这里关于 Postfix 服务器的配置就完成了

---

### 安装与配置 Dovecot

#### 安装Dovecot

Dovecot 是一个流行的开源邮件服务器软件，主要用于支持邮件协议的 IMAP(Internet Message Access Protocol) 和 POP3(Post Office Protocol version 3) 。它允许用户通过电子邮件客户端(如邮件应用程序或 Webmail) 访问和管理存储在服务器上的电子邮件(Dovecot会将真正的验证工作交给MySQL处理)

因为使用SSL，Dovecot会使用993「IMAP协议」及995「POP协议」与外界交流, 如果服务器有防火墙则需要放通这两个端口

在此章节中需要配置如下信息:

- 开启Dovecot的IMAP、POP3、LMTP协议
- 告知Dovecot本地邮件的投档路径
- 连接Dovecot和MySQL数据库以验证用户身份
- 配置SSL加密相关信息

---

安装Dovecot最新版:

```bash
apt install dovecot-core dovecot-imapd dovecot-pop3d dovecot-lmtpd dovecot-mysql
```

![image-20240306093813220](http://cdn.ayusummer233.top/DailyNotes/202403060938038.png)

![image-20240305181937525](http://cdn.ayusummer233.top/DailyNotes/202403051819585.png)

- `dovecot-core`: Dovecot的核心组件, 包括必要的库和二进制文件; 提供了Dovecot邮件服务器的基本功能
- `dovecot-imapd`: Dovecot 的 IMAP 服务器模块; 允许用户使用 IMAP 协议来访问和管理邮件，通常用于接收邮件
- `dovecot-pop3d`: Dovecot 的 POP3 服务器模块; 允许用户使用 POP3 协议来访问和下载邮件，通常用于接收邮件
- `dovecot-lmtpd`: Dovecot 的 LMTP(Local Mail Transfer Protocol) 服务器模块。LMTP 通常用于传递本地邮件，特别是与其他邮件组件 (如邮件投递代理) 集成时。
- `dovecot-mysql`: Dovecot 的 MySQL 驱动模块; 允许 Dovecot 与 MySQL 数据库进行集成，以便存储和检索用户的邮件和相关信息

---

#### 配置 Dovecot

需要备份与修改的配置文件如下

- `/etc/dovecot/dovecot.conf` Dovecot 的主配置文件

- `/etc/dovecot/conf.d/10-mail.conf` Dovecot将要操作的磁盘路径相关配置信息

- `/etc/dovecot/conf.d/10-auth.conf` 用户验证相关配置信息

- `/etc/dovecot/conf.d/auth-sql.conf.ext` SQL-Type 验证相关配置信息

- `/etc/dovecot/dovecot-sql.conf.ext` Dovecot与数据库连接相关配置信息

- `/etc/dovecot/conf.d/10-master.conf` Dovecot本地socket相关配置信息

- `/etc/dovecot/conf.d/10-ssl.conf` 关于SSL的相关配置信息

----

##### Dovecot 主配置文件 - dovecot.conf

备份与修改 `/etc/dovecot/dovecot.conf`, 检查 `!include conf.d/*.conf` 这行是否有注释, 如果有则去掉该行注释以便能够正常解析 `conf.d` 中的配置项

![image-20240306103627672](http://cdn.ayusummer233.top/DailyNotes/202403061036048.png)

在 `!include_try /usr/share/dovecot/protocols.d/*.protocol` 行下加入这行以启用 Dovecot 的 imap、pop3、lmtp等相关协议

```properties
protocols = imap pop3 lmtp
```

![image-20240306103920796](http://cdn.ayusummer233.top/DailyNotes/202403061039128.png)

---

##### 配置磁盘路径相关信息 -10-mail.conf

备份与修改 `/etc/dovecot/conf.d/10-mail.conf`

配置其中的 `mail_location` 字段, 指向本地磁盘路径用于存放收到的邮件:

```properties
mail_location = maildir:/var/mail/vhosts/%d/%n
```

> `%d` 和 `%n` 是占位符，它们将被实际的域名和用户名替换，以创建每个用户的独立邮件存储路径。

![image-20240306111434731](http://cdn.ayusummer233.top/DailyNotes/202403061114042.png)

同时，找到文件中 `mail_privileged_group` 配置项, 将其指定为 `mail` 以使得 Dovecot 在启动时以 mail 组权限运行从而可以访问邮件存储目录

```properties
mail_privileged_group = mail
```

![image-20240306111048659](http://cdn.ayusummer233.top/DailyNotes/202403061110010.png)

查询下 `/var/mail` 路径的权限:

```bash
ls -ld /var/mail
```

- **`-l`：** 以长格式（long format）显示文件或目录的详细信息
  长格式包括文件/目录的权限、链接数、所有者、所属组、大小、修改日期和文件/目录名称等。
- **`-d`：** 仅显示目录本身的详细信息，而不显示目录中的内容
  如果不使用 `-d`，`ls` 命令将显示目录中的文件和子目录的详细信息。

输出大致如下

![image-20240306111523149](http://cdn.ayusummer233.top/DailyNotes/202403061115637.png)

- **第一列 (`drwxrwsr-x`)：**
  - `d`: 表示这是一个目录。
  - `rwx`: 表示拥有者（root）有读、写和执行权限。
  - `rws`: 表示组（mail）的用户具有读、写和执行权限，并设置了组的 setgid 位。setgid 位确保新创建的文件和目录属于与父目录相同的组（这里是 mail 组）。
  - `r-x`: 表示其他用户有读和执行权限，但没有写权限。
- **第二列 (`3`)：** 表示目录中包含的子目录（或链接数）的数量。
- **第三列 (`root mail`)：**
  - `root`: 表示拥有者是 root 用户。
  - `mail`: 表示所属组是 mail 组。
- **第四列 (`4096`)：** 表示目录的大小，以字节为单位。
- **第五列 (`3月 6 11:00`)：**表示目录的最后修改时间。

---

创建 `/var/mail/vhosts/` 文件夹给每个需要启用的域名：

```bash
mkdir -p /var/mail/vhosts/ayusummer.com
```

- `-p`: 表示递归创建目录。如果指定的目录路径中的某个父级目录不存在，`mkdir` 将会创建这些父级目录。

![image-20240306112452420](http://cdn.ayusummer233.top/DailyNotes/202403061124758.png)

新建 vmail 用户组及用户并赋权限:

```bash
groupadd -g 5000 vmail  
useradd -g vmail -u 5000 vmail -d /var/mail
```

- **`groupadd -g 5000 vmail`：**
  - `-g 5000`: 指定新创建的用户组的组ID为 5000
  - `vmail`: 新创建的用户组的名称
- **`useradd -g vmail -u 5000 vmail -d /var/mail`：**
  - `-g vmail`: 将新用户添加到名为 `vmail` 的用户组中
  - `-u 5000`: 指定新用户的用户ID为 5000
  - `vmail`: 新用户的用户名
  - `-d /var/mail`: 指定新用户的家目录为 `/var/mail`

> 在Linux系统中，用户组（group）有一个唯一的标识符，称为组ID（Group ID，通常缩写为GID）。GID是一个非负整数，用于在系统中唯一标识一个用户组。

![image-20240306113018479](http://cdn.ayusummer233.top/DailyNotes/202403061130207.png)

![image-20240306113050515](http://cdn.ayusummer233.top/DailyNotes/202403061130010.png)

修改 `/var/mail/` 目录的权限, 使 vmail 用户能够访问:

```bash
chown -R vmail:vmail /var/mail
```

- **`chown`:** 改变文件或目录所有者
- **`-R`:** 递归地更改目录及其子目录和文件的所有者
- **`vmail:vmail`:** 新所有者和组。前面的 `vmail` 表示新的所有者，后面的 `vmail` 表示新的组。这意味着所有文件和子目录将属于 `vmail` 用户和 `vmail` 组
- **`/var/mail`:** 目标目录，即要更改所有者的目录

![image-20240306113247728](http://cdn.ayusummer233.top/DailyNotes/202403061132234.png)

----

##### 配置用户验证相关信息 - 10-auth.conf

备份与修改 ``/etc/dovecot/conf.d/10-auth.conf` 文件

找到文件中 `disable_plaintext_auth` 并取消注释以启用使用明文密码进行身份验证

![image-20240306113755867](http://cdn.ayusummer233.top/DailyNotes/202403061137403.png)

> 如发现连不上服务器不行，可以试试注释此项

找到文件中 `auth_mechanisms` 并将其修改为如下值:

```properties
auth_mechanisms = plain login
```

![image-20240306114028003](http://cdn.ayusummer233.top/DailyNotes/202403061140411.png)

默认情况下，Dovecot是允许Ubuntu系统用户登录使用的，我们需要将其禁用。找到文件中的如下内容并将其注释:

```properties
!include auth-system.conf.ext
```

> 如发现连不上服务器不行，可以试试开启此项

![image-20240306114143590](http://cdn.ayusummer233.top/DailyNotes/202403061141984.png)

----

开启 Dovecot 的 MySQL 支持，取消 `!include auth-sql.conf.ext` 的注释符号:

![image-20240306114253626](http://cdn.ayusummer233.top/DailyNotes/202403061142284.png)

---

##### 配置SQL-Type验证相关信息 - auth-sql.conf.ext

备份与修改 `/etc/dovecot/conf.d/auth-sql.conf.ext` 文件

在文件中加入如下内容:

```properties
passdb {  
    driver = sql  
    args = /etc/dovecot/dovecot-sql.conf.ext  
}  

userdb {  
    driver = static  
    args = uid=vmail gid=vmail home=/var/mail/vhosts/%d/%n  
}                                                                    
```

- `driver = sql`: 指定使用 SQL 数据库进行密码验证
- `args = /etc/dovecot/dovecot-sql.conf.ext`: 指定用于 SQL 认证的配置文件路径
  这个文件中会设置数据库连接信息和查询语句
- `driver = static`: 指定使用静态（静态配置的）用户数据库
- `args = uid=vmail gid=vmail home=/var/mail/vhosts/%d/%n`: 指定用户数据库的一些静态参数, 用户ID、组ID和用户的家目录。

![image-20240306140426435](http://cdn.ayusummer233.top/DailyNotes/202403061404913.png)

---

##### 配置数据库连接相关信息 - dovecot-sql.conf.ext

取消文件中 driver 行的注释, 并将其修改为如下:

```properties
driver = mysql
```

![image-20240306141739968](http://cdn.ayusummer233.top/DailyNotes/202403061417424.png)

取消文件中 connect 行的注释, 并将其修改为如下:

```properties
connect = host=127.0.0.1 dbname=mailserver user=mailserver password=Mail#Server@123
```

![](http://cdn.ayusummer233.top/DailyNotes/202403061419280.png)

取消文件中 default_pass_scheme 行的注释，并将其修改为如下以设置默认的密码存储方案为 SHA512-CRYPT，即使用 SHA-512 算法进行密码加密和验证:

```properties
default_pass_scheme = SHA512-CRYPT
```

![image-20240306143351934](http://cdn.ayusummer233.top/DailyNotes/202403061433434.png)

取消文件中 password_query 行的注释, 并将起修改为如下:

```properties
password_query = SELECT email as user, password FROM virtual_users WHERE email='%u';
```

从名为 `virtual_users` 的数据库表中选择用户的电子邮件地址 (`email`) 作为用户标识 (`user`)，以及与该用户关联的密码 (`password`)。`%u` 是 Dovecot 中用于替代实际用户名的占位符。

![image-20240306143538478](http://cdn.ayusummer233.top/DailyNotes/202403061435051.png)

---

修改目录权限:

```bash
chown -R vmail:dovecot /etc/dovecot
chmod -R o-rwx /etc/dovecot
```

- **`chown -R vmail:dovecot /etc/dovecot`**

  - `chown`: 更改文件或目录的所有者
  - `-R`: 递归地更改所有者, 包括子目录和文件
  - `vmail:dovecot`: 新的所有者和组, 即 `vmail` 用户和 `dovecot` 组
  - `/etc/dovecot`: 要更改所有者的目标目录

  将 `/etc/dovecot` 目录及其所有子目录和文件的所有者更改为 `vmail` 用户和 `dovecot` 组

- **`chmod -R o-rwx /etc/dovecot`**

  - `o-rwx`: 移除其他用户（除所有者和组之外的用户）的读、写和执行权限。

  将 `/etc/dovecot` 目录及其所有子目录和文件的其他用户权限（即除了所有者和组之外的用户）设置为无读、无写和无执行权限

![image-20240306144809065](http://cdn.ayusummer233.top/DailyNotes/202403061448608.png)

---

##### 配置本地socket相关信息 - 10-master.conf

备份与修改 `/etc/dovecot/conf.d/10-master.conf` 文件

可以通过将端口设置为0，以禁用非SSL加密的IMAP和POP3协议:

```properties
service imap-login {  
    inet_listener imap {  
        port = 0   
    }  
    ...  
}  

service pop3-login {  
    inet_listener pop3 {  
        port = 0  
    }  
    ...  
}
```

这里对 IMAP 以及 POP3 端口以及对应 SSL 加密端口进行配置如下:

```properties
service imap-login {
   inet_listener imap {
     port = 143
   }
   inet_listener imaps {
     port = 993
     ssl = yes
   }
    ...
 }service pop3-login {
   inet_listener pop3 {
     port = 110
   }
   inet_listener pop3s {
     port = 995
     ssl = yes
   }
 }
```

![image-20240306145531028](http://cdn.ayusummer233.top/DailyNotes/202403061455555.png)

![image-20240306145627106](http://cdn.ayusummer233.top/DailyNotes/202403061456640.png)

---

找到文件中的 service lmtp 并将其修改如下：

```properties
service lmtp {
  unix_listener /var/spool/postfix/private/dovecot-lmtp {  
    mode = 0600  
    user = postfix  
    group = postfix  
  }  

  # Create inet listener only if you can't use the above UNIX socket
  #inet_listener lmtp {
    # Avoid making LMTP visible for the entire internet
    #address =
    #port = 
  #}
}
```

上述是LMTP (Local Mail Transfer Protocol) 服务的设置

- `unix_listener`: 定义了 LMTP 服务的 [UNIX 监听器](名词解释.md/#UNIX监听器)
- `/var/spool/postfix/private/dovecot-lmtp`: 指定 LMTP 使用的 UNIX socket 路径
- `mode = 0600`: 设置 UNIX socket 的权限模式，这里是只允许 owner(postfix 用户) 有读写权限
- `user = postfix` 和 `group = postfix`: 指定 UNIX socket 的所有者和组

Dovecot 配置中的 UNIX 监听器指的是 LMTP 服务通过 UNIX socket 进行本地通信的机制

Postfix 通过连接到 `/var/spool/postfix/private/dovecot-lmtp` 这个 UNIX socket 与 Dovecot 的 LMTP 服务进行通信

> 这种本地通信方式相对于网络通信更加高效，因为它不需要经过网络协议栈，直接在操作系统内核中完成数据传输。

![image-20240306145900791](http://cdn.ayusummer233.top/DailyNotes/202403061459313.png)

---

找到文件中 service auth 并将其内容修改如下:

```properties
service auth {  
  # auth_socket_path points to this userdb socket by default. It's typically  
  # used by dovecot-lda, doveadm, possibly imap process, etc. Its default  
  # permissions make it readable only by root, but you may need to relax these  
  # permissions. Users that have access to this socket are able to get a list  
  # of all usernames and get results of everyone's userdb lookups.  

  unix_listener /var/spool/postfix/private/auth {  
    mode = 0666  
    user = postfix  
    group = postfix  
  }  

  unix_listener auth-userdb {  
    mode = 0600  
    user = vmail  
    #group =  
  }  

  # Postfix smtp-auth  
  #unix_listener /var/spool/postfix/private/auth {  
  #       mode = 0666  
  #}  

  # Auth process is run as this user.  
  user = dovecot  
}
```

- `unix_listener`: 定义了一个 UNIX socket，用于 auth 服务

- `/var/spool/postfix/private/auth`: 指定 UNIX socket 的路径

- `mode = 0666`: 设置 UNIX socket 的权限模式, 允许所有用户读写

- `user = postfix` 和 `group = postfix`: 指定 UNIX socket 的所有者和组

  ---

- `unix_listener`: 定义了另一个 UNIX socket, 用于用户数据库的查询

- `auth-userdb`: UNIX socket 的标识符

- `mode = 0600`: 设置 UNIX socket 的权限模式, 只允许 owner（vmail 用户） 有读写权限

- `user = vmail`: 指定 UNIX socket 的所有者

  ---

- `user`: 指定 auth 进程的运行用户为 `dovecot`。

![image-20240306154246027](http://cdn.ayusummer233.top/DailyNotes/202403061542784.png)

---

找到文件中 `service auth-worker` 内容并修改如下:

```properties
service auth-worker {
  # Auth worker process is run as root by default, so that it can access
  # /etc/shadow. If this isn't necessary, the user should be changed to
  # $default_internal_user.
  user = vmail  
}
```

- `service auth-worker`: 定义了 `auth-worker` 服务
- `user = vmail`: 指定了 `auth-worker` 进程运行的用户为 `vmail`

`auth-worker` 进程是一个处理认证请求的后台工作进程; 通过将 `user` 设置为 `vmail` 来指定这个工作进程以 `vmail` 用户的身份运行

---

##### 配置 SSL 相关信息 - 10-ssl.conf

备份与修改 `/etc/dovecot/conf.d/10-ssl.conf` 文件

找到文件中的 `ssl_cert` 项并修改内容如下

> 请确保 dovecot 的 pem 文件已经存在
>
> 若使用了自己的SSL文件，请将如下内容修改为相应的路径

```properties
ssl_cert = </etc/dovecot/dovecot.pem  
ssl_key = </etc/dovecot/private/dovecot.key
```

![image-20240306155020771](http://cdn.ayusummer233.top/DailyNotes/202403061550427.png)

强制用户使用SSL加密:

```properties
ssl = required
```

![image-20240306155621358](http://cdn.ayusummer233.top/DailyNotes/202403061556729.png)

重新启动Dovecot服务:

```bash
service dovecot restart
```

---

### 测试邮件服务器是否正常

用 FoxMail测试一下

FoxMail 配置示例:

![image-20240307134316074](http://cdn.ayusummer233.top/DailyNotes/202403071343655.png)

> ![image-20240307145116642](http://cdn.ayusummer233.top/DailyNotes/202403071451547.png)
>
> PS: 后续成功连上之后发邮件总是有问题, 所以发件服务器没有勾选ssl

在这里可能会发现始终因为密码错误连不上邮箱, 可以修改 `/etc/dovecot/conf.d/10-logging.conf` 中的如下三个属性来记录详细调试日志:

![image-20240307112748022](http://cdn.ayusummer233.top/DailyNotes/202403071127557.png)

![image-20240307112814208](http://cdn.ayusummer233.top/DailyNotes/202403071128215.png)

从这里可以看到 Dovecot 生成的 SHA512 加密的 `zhangsan123456` 与数据库中的并不一致

> PS: 在前面新建数据库时我们使用了加盐密码, 但是没有存储盐值, 后来我把加盐去掉了, 相应的 zhangsan123456 在 mysql 中的 sha512 就是  `$6$b92dcd2db75c3bca`, 这里并不能匹配上

需要使用 Dovecot 生成的 SHA512 密码覆盖掉数据库中的密码

```bash
doveadm pw -s SHA512-CRYPT
# 输入 zhangsan123456
```

![image-20240307113130052](http://cdn.ayusummer233.top/DailyNotes/202403071131663.png)

将生成的这一整串拷贝下来更新到数据库中

```mysql
UPDATE virtual_users
SET password = '{SHA512-CRYPT}$6$1usGCm9j6RW5vkIe$q86YxTXRI0gFW4elsHmMS8puW1wAs0GEXTyfxVoqxeU/6S2sZYH4no99Pvv9lA1Ka9fvzjha3ogTTD4lq3DZE/'
WHERE email = 'zhangsan@ayusummer.com';
# 相应的
UPDATE virtual_users
SET password = '{SHA512-CRYPT}$6$xSB1atu8NVtHnvEZ$/Ngn354.FuRXXbm1.CZ.OLJkTOlGwezRLfinxGncaInhhKooIYmCgo8IJCo7V6kDCqx36.ETEKjWqQQpCwPg/1'
WHERE email = 'lisi@ayusummer.com';
# 看一眼表
select * from virtual_users;
```

![image-20240307145619680](http://cdn.ayusummer233.top/DailyNotes/202403071456160.png)

然后就能连上了    

![image-20240307110854009](http://cdn.ayusummer233.top/DailyNotes/202403071108966.png)

![image-20240307154231674](http://cdn.ayusummer233.top/DailyNotes/202403071542234.png)

成功收发邮件

---

















