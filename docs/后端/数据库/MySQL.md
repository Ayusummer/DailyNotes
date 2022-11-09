# Mysql

## 安装

> [MySQL的安装与配置——详细教程 - Winton-H - 博客园 (cnblogs.com)](https://www.cnblogs.com/winton-nfs/p/11524007.html)
>
> ---

- 下载[MySQL 免安装版](https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.22-winx64.zip)

  > 该链接指向的是截止 2020.12.2 最新版的 MySQL 社区版最新下载链接

- 下载完成后解压到你想把 MySQL 安装在的目录

  > 该目录不可有中文与空格

- 安装 MySQL 的服务
  - 打开解压后的文件夹中的 bin 文件夹,单击 Windows 文件资源管理器左上角的`文件`->`打开Windows Powershell`->`以管理员身份打开Windows Powershell`
    > Win11 的话 `win+X` 选择 `Windows Powershell(管理员)` 打开, 使用
    ```powershell
    cd 当前文件夹路径
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

  - 将会显示`MySQL 服务已经启动成功`的字样

- 登录验证 MySQL 是否安装成功
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

      并回车以退出 MySQL

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
      - 变量值填你将 MySQL 安装的位置
        - 例如我填的是`C:\Database\MySQL\mysql-8.0.22-winx64`
      - 单击`确定`以完成新建
    - 进入`系统变量`的`Path`变量
      - 单击`新建`
      - 输入`%mysql%\bin`
    - 完成后逐级确定以完成配置

- 配置完系统变量之后要登录 MySQL 只需

  - `Win + R`输入`cmd`并回车打开命令行窗口

  - 输入

    ```shell
    mysql -u root -p
    ```

    并回车即可

- 在 mysql 目录下创建一个 ini 或 cnf 配置文件，在这里我创建的是 ini 配置文件，里面写的代码是 mysql 的一些基本配置
  - mysql 目录就是刚才配置环境变量时的 MySQL 安装位置
    - 我的就是`C:\Database\MySQL\mysql-8.0.22-winx64`
    - 打开该文件夹新建一个文本文档并**连同文件扩展名**一同改为`my.ini`
      - 打开`my.ini`,键入以下配置并保存退出
        ```
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

- 你可以在 Navicat 中连接配置好的 MySQL
  - 打开 Navicat
  - 左上`连接`->`MySQL`
    - 连接名自拟
    - 主机:`localhost`
    - 端口:`3306`
    - 用户名:`root`
    - 密码:你刚才配置好的 MySQL 的密码
  - 输入完成并单击`确定`后会在当前窗口左栏出现一个你自拟的链接名,双击它,若它变绿了就说明连接上你配置的 MySQL 了
- 到这里 MySQL 的安装,配置与连接就已经完成了,更详细的步骤以及**可能出现的问题**可以移步原博主的[博客链接](https://www.cnblogs.com/winton-nfs/p/11524007.html)查看
  - 如果有空的话别忘了给博主点个`推荐`哦

    > 若忘记密码可以参考[这篇文章](https://www.cnblogs.com/syq816/p/12241136.html)

---

## MySQL 数据类型

> [MySQL 数据类型 | 菜鸟教程 (runoob.com)](https://www.runoob.com/mysql/mysql-data-types.html)
>
> ---

- MySQL 中定义数据字段的类型对你数据库的优化是非常重要的。
- MySQL 支持多种类型，大致可以分为三类：
  - 数值
  - 日期/时间
  - 字符串(字符)类型。

---

### 数值类型

- MySQL 支持所有标准 SQL 数值数据类型。
  - 这些类型包括
    - 严格数值数据类型(INTEGER、SMALLINT、DECIMAL 和 NUMERIC)
    - 近似数值数据类型(FLOAT、REAL 和 DOUBLE PRECISION)。
- 关键字 INT 是 INTEGER 的同义词，关键字 DEC 是 DECIMAL 的同义词。
- BIT 数据类型保存位字段值，并且支持 MyISAM、MEMORY、InnoDB 和 BDB 表。
- 作为 SQL 标准的扩展，MySQL 也支持整数类型 TINYINT、MEDIUMINT 和 BIGINT。

---

- 下面的表显示了需要的每个整数类型的存储和范围。

![image-20221109104146576](http://cdn.ayusummer233.top/img/202211091041891.png)

---

- Navicat 中设计表时,数值类型数据的长度设置与字符类型的长度设置是不一样的
  
  > [MySQL字段int类型的长度INT(M)_乖乖康少的博客-CSDN博客_mysql int 长度](https://blog.csdn.net/guaiguaiknl/article/details/105813770)
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
- 每个时间类型有一个有效值范围和一个"零"值，当指定不合法的 MySQL 不能表示的值时使用"零"值。
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

> [MySql重置自增字段的起始值 - 简书 (jianshu.com)](https://www.jianshu.com/p/d3b225260042)
>
> [面试官:mysql如何重置自增id_wx6010cbc8d50ca的技术博客_51CTO博客](https://blog.51cto.com/u_15095774/2718785)
>
> [MySQL / MariaDB 重置自增 ID (AUTO_INCREMENT)教程 - 完美保留表数据的终极解决方案 - 卡拉云 (kalacloud.com)](https://kalacloud.com/blog/how-to-reset-auto-increment-in-mysql/#四-保留数据重置---直接删除-id-法)

---

## 重置密码

> [忘记MySQL数据库的root密码时如何重置密码 (aliyun.com)](https://help.aliyun.com/document_detail/42520.html)
>
> ---

如果忘记了 MySQL 的密码可以修改配置文件登录时跳过密码然后再在数据库中修改密码

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

