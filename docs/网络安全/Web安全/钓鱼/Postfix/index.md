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
    `password` varchar(106) NOT NULL,
    `email` varchar(100) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`),
    FOREIGN KEY (domain_id) REFERENCES virtual_domains(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
```

![image-20240228114352591](http://cdn.ayusummer233.top/DailyNotes/202402281143878.png)

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

因为 `ENCRYPT` 函数采用了基于DES（Data Encryption Standard）的加密算法，而DES是一种相对较弱的加密算法，不再被视为安全, MySQL 8.0 中不再支持 `ENCRYPT` 函数

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







































