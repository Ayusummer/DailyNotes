# mysql

## 安装

:::tabs

@tab:active Windows

> [mysql的安装与配置——详细教程 - Winton-H - 博客园 (cnblogs.com)](https://www.cnblogs.com/winton-nfs/p/11524007.html)
>
> ---

- 下载[mysql 免安装版](https://dev.mysql.com/get/Downloads/mysql-8.0/mysql-8.0.22-winx64.zip)

  > 该链接指向的是截至 2020.12.2 最新版的 mysql 社区版最新下载链接, 或者自行到 [mysql :: mysql Downloads](https://www.mysql.com/downloads/) 选择具体版本下载

  ![image-20221128004735707](http://cdn.ayusummer233.top/img/202211280047742.png)

  ![image-20221128004757314](http://cdn.ayusummer233.top/img/202211280047346.png)

  ![image-20221128004839123](http://cdn.ayusummer233.top/img/202211280048162.png)

  

- 下载完成后解压到你想把 mysql 安装在的目录

  > 该目录不可有中文与空格

- 安装 mysql 的服务
  - 打开解压后的文件夹中的 bin 文件夹,单击 Windows 文件资源管理器左上角的`文件`->`打开Windows Powershell`->`以管理员身份打开Windows Powershell`
    > Win11 的话 `win+X` 选择 `Windows Powershell(管理员)` 打开, 使用
    ```powershell
    cd [当前文件夹路径]
    ```
    转到当前文件夹路径
  - 输入
    ```powershell
    .\mysqld --install
    ```
    并回车
  - 之后会显示安装成功的提示:`Service successfully installed.`
- 初始化 mysql
  - 输入
    ```powershell
    .\mysqld --initialize --console
    ```
    并回车
  - 将会显示几行文字,复制最后一行`root@localhost:`字样后面的字符串`o?0yxuffh?E.`

    > 这串字符串是初始化生成的随机密码
- 开启 mysql 的服务

  - 输入

    ```powershell
    net start mysql
    ```

    并回车

  - 将会显示`mysql 服务已经启动成功`的字样

- 登录验证 mysql 是否安装成功
  - 输入

    ```powershell
    .\mysql -u root -p
    ```

    并回车,将会让你输入密码

    > 密码就是刚才生成的临时密码,输入并回车即可
    >
    > 这里需要注意的是: 若刚才生成临时密码的时候最后有个`.`的话注意这里的`.` 不是句号,而是密码的一部分

  - 登陆成功后当前光标前面会有`mysql>`
- 修改密码

  - 登录成功后输入

    ```powershell
    alter user 'root'@'localhost' identified by 'root';
    ```

    - 这样即可将密码改为`root`

    - 同理,将最后 by 后面的`root`改成你自己想修改成的密码吧

    - 修改成功后将会显示`Query OK, 0 rows affected`字样

    - 输入

      ```powershell
      exit
      ```

      并回车以退出 mysql

    - 验证密码

      - 输入

        ```powershell
        .\mysql -u root -p
        ```

        并回车,将会让你输入密码

      - 输入你刚才修改好的密码

      - 能够再次成功进入则修改成功

- 设置系统的全局变量：

  - `桌面`->`右键"此电脑"`->`属性`->左侧`高级系统设置`->`环境变量`

    > Win 11 的话 `设置 -> 系统 -> 关于 -> 高级系统设置 -> 环境变量`
    >
    > ![image-20220327122623794](http://cdn.ayusummer233.top/img/202203271226203.png)

  - 进入后上面是`用户变量`,下面是`系统变量`
    - 点击 `下面的新建按钮`, 新建一个`系统变量`
      - 变量名填`mysql`
      - 变量值填你将 mysql 安装的位置
        - 例如我填的是`C:\Database\mysql\mysql-8.0.22-winx64`
      - 单击`确定`以完成新建
    - 进入`系统变量`的`Path`变量
      - 单击`新建`
      - 输入`%mysql%\bin`
    - 完成后逐级确定以完成配置

- 配置完系统变量之后要登录 mysql 只需

  - `Win + R`输入`cmd`并回车打开命令行窗口

  - 输入

    ```shell
    mysql -u root -p
    ```

    并回车即可

- 在 mysql 目录下创建一个 ini 或 cnf 配置文件，在这里我创建的是 ini 配置文件，里面写的代码是 mysql 的一些基本配置
  - mysql 目录就是刚才配置环境变量时的 mysql 安装位置
    - 我的就是`C:\Database\mysql\mysql-8.0.22-winx64`
    - 打开该文件夹新建一个文本文档并**连同文件扩展名**一同改为`my.ini`
      - 打开`my.ini`,键入以下配置并保存退出
        ```ini
        [mysqld]
        character-set-server=utf8mb4
        bind-address=0.0.0.0
        port=3306
        default-storage-engine=INNODB
        [mysql]
        default-character-set=utf8mb4
        [client]
        default-character-set=utf8mb4
        ```
- 到这里就已经配置完成了

- 你可以在 Navicat 中连接配置好的 mysql
  - 打开 Navicat
  - 左上`连接`->`mysql`
    - 连接名自拟
    - 主机:`localhost`
    - 端口:`3306`
    - 用户名:`root`
    - 密码:你刚才配置好的 mysql 的密码
  - 输入完成并单击`确定`后会在当前窗口左栏出现一个你自拟的链接名,双击它,若它变绿了就说明连接上你配置的 mysql 了
- 到这里 mysql 的安装,配置与连接就已经完成了,更详细的步骤以及**可能出现的问题**可以移步原博主的[博客链接](https://www.cnblogs.com/winton-nfs/p/11524007.html)查看
  - 如果有空的话别忘了给博主点个`推荐`哦

    > 若忘记密码可以参考[这篇文章](https://www.cnblogs.com/syq816/p/12241136.html)

---

@tab:active kali

> [kali自带mysql配置 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1920635)

kali 自带 MariaDB, 基本兼容 mysql

> 在部署 gshark时要安装 mysql, 且其只支持 mysql
>
> 搜索 linux 安装 mysql 多半出来的是 CentOS 的陈年教程
>
> 搜索 Debian 安装 mysql 找到了 [如何在Debian 10安装mysql | myfreax](https://www.myfreax.com/how-to-install-mysql-on-debian-10/) 不过
>
> ![image-20221123144046127](http://cdn.ayusummer233.top/img/202211231606829.png)
>
> ---

```bash
# 启动 mysql 服务
service mysql start
```

> ![image-20221123144229699](http://cdn.ayusummer233.top/img/202211231606894.png)

```bash
# 初始化密码
mysql_secure_installation
```

> ![image-20221123144351106](http://cdn.ayusummer233.top/img/202211231606785.png)
>
> 然后可以一路 yes 下去(或者按照自己的需求选择配置)
>
> ![image-20221123144915315](http://cdn.ayusummer233.top/img/202211231606778.png)

---

@tab Debian

> [如何在Debian 10安装mysql | myfreax](https://www.myfreax.com/how-to-install-mysql-on-debian-10/)
>
> ---

mysql在默认的 Debian 存储库中不可用。 MariaDB 是 Debian 10中的默认数据库。

要将mysql存储库添加到您的系统，请访问[mysql仓库下载页面](https://dev.mysql.com/downloads/repo/apt/)并使用[wget命令](https://www.myfreax.com/wget-command-examples/)下载最新mysql。

```bash
wget https://repo.mysql.com//mysql-apt-config_0.8.24-1_all.deb
# 安装此 deb 软件包
apt install ./mysql-apt-config_0.8.24-1_all.deb 
```

---

@tab Ubuntu

> [如何在 Ubuntu 20.04 上安装 mysql-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/758177)
>
> ---

```bash
sudo apt update
sudo apt install mysql-server
# 安装完后会自动启动后, 可以执行如下命令查看其运行状态
sudo systemctl status mysql
# mysql 安装文件附带了一个名为mysql_secure_installation的脚本，它允许你很容易地提高数据库服务器的安全性
sudo mysql_secure_installation
```

---

@tab Docker

> [Docker配置mysql容器+远程连接（全流程）_卷、就硬卷的博客-CSDN博客](https://blog.csdn.net/qq_43781399/article/details/112650755)
>
> ---

```bash
docker pull mysql
docker run -d -p [宿主机端口]:3306 -e mysql_ROOT_PASSWORD=[初始化root密码] --name [自定义一个可辨识的容器名] mysql
# 进入 docker 容器
docker exec -it [上面自定义的可辨识的容器名] bash
# 如果想远程连接且mysql在docker里的话可以执行
alter user 'root'@'%' identified with mysql_native_password by 'root';
```

如果出现报错, 可以参考本文最后一节的报错收集中的相关条目

---

:::

---

## mysql 数据类型

> [mysql 数据类型 | 菜鸟教程 (runoob.com)](https://www.runoob.com/mysql/mysql-data-types.html)
>
> ---

- mysql 中定义数据字段的类型对你数据库的优化是非常重要的。
- mysql 支持多种类型，大致可以分为三类：
  - 数值
  - 日期/时间
  - 字符串(字符)类型。

---

### 数值类型

- mysql 支持所有标准 SQL 数值数据类型。
  - 这些类型包括
    - 严格数值数据类型(INTEGER、SMALLINT、DECIMAL 和 NUMERIC)
    - 近似数值数据类型(FLOAT、REAL 和 DOUBLE PRECISION)。
- 关键字 INT 是 INTEGER 的同义词，关键字 DEC 是 DECIMAL 的同义词。
- BIT 数据类型保存位字段值，并且支持 MyISAM、MEMORY、InnoDB 和 BDB 表。
- 作为 SQL 标准的扩展，mysql 也支持整数类型 TINYINT、MEDIUMINT 和 BIGINT。

---

- 下面的表显示了需要的每个整数类型的存储和范围。

![image-20221109104146576](http://cdn.ayusummer233.top/img/202211091041891.png)

---

- Navicat 中设计表时,数值类型数据的长度设置与字符类型的长度设置是不一样的
  
  > [mysql字段int类型的长度INT(M)_乖乖康少的博客-CSDN博客_mysql int 长度](https://blog.csdn.net/guaiguaiknl/article/details/105813770)
  >
  > ---
  
  - **char**类型数据的长度为字符(字母或汉字)的**个数**
  - **varchar**类型数据的长度为字符(字母或汉字)的**最大个数**
  - **int**类型的长度指的是**显示宽度**
    - 长度的设定值范围 1~255
      - 设置 0 时自动转为 11
      - 不设置时自动转为默认的 11
      - 在此范围内任意长度值的字段值范围都是
        - -2147483648~2147483647
          - 即$-2³¹-1$ ~ $2³¹-1$
  
            > 也就是说：int(1)、int(4)、int(11)和 int(110)表示意思是一样的
  - 要查看出不同效果记得在创建类型的时候加 zerofill 这个值（INT(M) ZEROFILL），表示用 0 填充，否则看不出效果的

---

#### 日期和时间类型

- 表示时间值的日期和时间类型为 DATETIME、DATE、TIMESTAMP、TIME 和 YEAR。
- 每个时间类型有一个有效值范围和一个"零"值，当指定不合法的 mysql 不能表示的值时使用"零"值。
- TIMESTAMP 类型有专有的自动更新特性，将在后面描述。

---

![image-20221109104242640](http://cdn.ayusummer233.top/img/202211091042201.png)

---

#### 字符串类型

- 字符串类型指 CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM 和 SET。
- 该节描述了这些类型如何工作以及如何在查询中使用这些类型。

---

![image-20221109104257710](http://cdn.ayusummer233.top/img/202211091043368.png)

---

- 注意:
  - char(n) 和 varchar(n) 中括号中 n 代表字符的个数，并不代表字节个数，比如 CHAR(30) 就可以存储 30 个字符。
  - CHAR 和 VARCHAR 类型类似，但它们保存和检索的方式不同。它们的最大长度和是否尾部空格被保留等方面也不同。在存储或检索过程中不进行大小写转换。
  - BINARY 和 VARBINARY 类似于 CHAR 和 VARCHAR，不同的是它们包含二进制字符串而不要非二进制字符串。也就是说，它们包含字节字符串而不是字符字符串。这说明它们没有字符集，并且排序和比较基于列值字节的数值值。
  - BLOB 是一个二进制大对象，可以容纳可变数量的数据。
    - 有 4 种 BLOB 类型：TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB。
      - 它们区别在于可容纳存储范围不同。
    - 有 4 种 TEXT 类型：TINYTEXT、TEXT、MEDIUMTEXT 和 LONGTEXT。
      - 对应的这 4 种 BLOB 类型，可存储的最大长度不同，可根据实际情况选择。


---

## 重置自增量

> [mysql重置自增字段的起始值 - 简书 (jianshu.com)](https://www.jianshu.com/p/d3b225260042)
>
> [面试官:mysql如何重置自增id_wx6010cbc8d50ca的技术博客_51CTO博客](https://blog.51cto.com/u_15095774/2718785)
>
> [mysql / MariaDB 重置自增 ID (AUTO_INCREMENT)教程 - 完美保留表数据的终极解决方案 - 卡拉云 (kalacloud.com)](https://kalacloud.com/blog/how-to-reset-auto-increment-in-mysql/#四-保留数据重置---直接删除-id-法)

---

## 重置密码

> [忘记mysql数据库的root密码时如何重置密码 (aliyun.com)](https://help.aliyun.com/document_detail/42520.html)
>
> ---

如果忘记了 mysql 的密码可以修改配置文件登录时跳过密码然后再在数据库中修改密码

::: tabs

@tab:active Linux

修改 `/etc/mysql/my.cnf` 文件

> 也有可能在 `/etc/my.cnf`, 以实际目录为准
> 

在 `[mysqld]` 字段下新增如下内容并保存

```properties
skip-grant-tables
```

然后重启并进入 mysql

```bash
# 重启 mysql
service mysql restart
# 进入 mysql
mysql
```

:::

---

## 报错收集

---

### mysql Failed! Error: SET PASSWORD has no significance for user ‘root’@’localhost’ as the authentication method used doesn’t store authentication data in the mysql server. Please consider using ALTER USER

> [mysql Failed! Error: SET PASSWORD has no significance for user 'root'@'localhost' as the authentication method used doesn't store authentication data in the mysql server. Please consider using ALTER USER - Linux - nixCraft Linux/Unix Forum](https://www.nixcraft.com/t/mysql-failed-error-set-password-has-no-significance-for-user-root-localhost-as-the-authentication-method-used-doesnt-store-authentication-data-in-the-mysql-server-please-consider-using-alter-user/4233)
>
> ----

```bash
# 将 root 密码更改为 SetRootPasswordHere
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SetRootPasswordHere';
exit
# 重新配置 mysql 安全项
sudo mysql_secure_installation
# 使用上面修改的密码(如SetRootPasswordHere) 登入然后修改配置项即可
```

---

### ERROR 1819 (HY000): Your password does not satisfy the current policy requirements

> [解决ERROR 1819 (HY000): Your password does not satisfy the current policy requirements - 慕尘 - 博客园 (cnblogs.com)](https://www.cnblogs.com/baby123/p/12221405.html)
>
> ---

```bash
SHOW VARIABLES LIKE 'validate_password%';
set global validate_password_policy=0
```

> 简单来说就是更改密码策略为低, 不建议在公网上使用
>
> ---

---

### ERROR 1396 (HY000): Operation ALTER USER failed for 'root'@'%'

> [linux mysql把root@localhost修改成root@% 的详细步骤谢谢_百度知道 (baidu.com)](https://zhidao.baidu.com/question/604727574.html)
>
> ---

在远程访问 docker 中的 mysql 的需求的实现中, 需要修改 `root@%` 的密码, 不过之前设置数据库的用户名是 `root@localhost`, 当使用

```bash
alter user 'root'@'%' identified with mysql_native_password by '[密码]';
```

时报错 `ERROR 1396 (HY000): Operation ALTER USER failed for 'root'@'%'`

```mysql
use mysql;
select user,host from user;
```

可以看到当前只有 `root@localhost` 所以要加一个 `root@%`

```mysql
grant all on *.* to 'root'@'%' identified by '[密码]' with grant option;
```





