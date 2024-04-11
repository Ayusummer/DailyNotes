# PostgreSQL

- [PostgreSQL](#postgresql)
  - [安装](#安装)
  - [设置远程访问](#设置远程访问)
  - [基础操作](#基础操作)
  - [sqlalchemy操作](#sqlalchemy操作)
  - [数据库同步](#数据库同步)
    - [逻辑复制](#逻辑复制)

---

## 安装

:::tabs

@tab:active  Ubuntu

```bash
# 更新软件包列表
sudo apt update
# 安装PostgreSQL
sudo apt install postgresql postgresql-contrib
# 安装完成后，PostgreSQL 服务将自动启动。你可以通过以下命令检查它是否正在运行
sudo systemctl status postgresql
# 安装完成后，默认情况下会创建一个名为postgres的系统用户，该用户拥有对PostgreSQL服务器的超级用户权限。你可以切换到该用户并使用以下命令进入PostgreSQL命令行界面,可以通过 \q 回车退出
sudo -i -u postgres
psql
```

- `postgresql-contrib` 是 PostgreSQL 数据库的一个附加包，包含了一些附加功能和扩展模块，可以增强 PostgreSQL 的功能。这些功能可能包括各种数据类型、函数、插件等，可以用于处理更复杂的数据库需求或提供额外的功能。

![image-20240408164820725](http://cdn.ayusummer233.top/DailyNotes/202404081648820.png)

:::

----

## 设置远程访问

在PostgreSQL服务器上，打开配置文件`postgresql.conf`，通常于`/etc/postgresql/{version}/main/postgresql.conf`

![image-20240408165346376](http://cdn.ayusummer233.top/DailyNotes/202404081653095.png)

![image-20240408165614574](http://cdn.ayusummer233.top/DailyNotes/202404081656674.png)

可以使用 `*` 来匹配所有的 IP, 亦可以指定监听的网卡 IP (本机网卡IP)列表, 例如:

```properties
listen_addresses = 'localhost,192.168.1.100'
```

然后编辑同级目录下的 `pg_hba.conf` 来设置允许连接到此数据库的 IP 段

![image-20240408171001717](http://cdn.ayusummer233.top/DailyNotes/202404081710795.png)

例如

```properties
# IPv4 local connections:
host    all             all             192.168.1.0/24            scram-sha-256
host    all             all             10.0.0.0/24               scram-sha-256
```

查看当前的用户列表:

```bash
sudo -u postgres psql
\du
```

![image-20240408171416256](http://cdn.ayusummer233.top/DailyNotes/202404081714323.png)

可以使用如下命令修改 `postgres` 用户的密码为 `new_password`

```postgresql
ALTER USER postgres PASSWORD 'new_password';
```

![image-20240408171721932](http://cdn.ayusummer233.top/DailyNotes/202404081717005.png)

完成上述配置后重启 Postgres

```bash
sudo systemctl restart postgresql
```

之后就可以正常通过配置的 `listen_address` 以及 Postgres 端口通过允许连接的 host IP 段的主机连接到 Postgres 数据库了

> 不需要考虑 md5 或是  scram-sha-256 的密码加密方案, 在使用数据库管理工具连接 Postgres 的时候会自动协商

![image-20240408174158805](http://cdn.ayusummer233.top/DailyNotes/202404081741964.png)

![image-20240408174213587](http://cdn.ayusummer233.top/DailyNotes/202404081742654.png)

---

## 基础操作

```postgresql
-- 创建数据库 mydatabase
CREATE DATABASE mydatabase;
--- 将 mydatabase 修改为 samplea
ALTER DATABASE mydatabase RENAME TO sample;
```

-----

## sqlalchemy操作

除了需要安装 SQLAlchemy 外还需要安装 psycopg2 库(PostgreSQL 数据库适配器), 它允许 Python 应用程序与 PostgreSQL 数据库进行交互

在安装 psycopg2 库前需要先安装 PostgreSQL 客户端库:

```bash
sudo apt install libpq-dev
```

然后再安装  psycopg2 

```bash
pip install psycopg2
```

---

## 数据库同步

- **流复制（Streaming Replication）**：配置 PostgreSQL 流复制，将源数据库设置为主服务器（Primary），目标数据库设置为从服务器（Standby），然后使用流复制将数据同步到目标数据库。这种方法可以保持数据的实时同步，并且不会产生不必要的网络流量。
- **逻辑复制（Logical Replication）**：逻辑复制允许你只复制感兴趣的表或数据，而不是整个数据库。你可以设置逻辑复制订阅，并选择要复制的表，以减少不必要的数据传输。

---

### 逻辑复制

在 Postgre 中, 要使用逻辑复制, 需要确保 `wal_level` 至少为 `logical`, 这样 PostgreSQL 才能生成逻辑复制所需的 WAL 日志

> WAL 日志(Write-Ahead Logging)是数据库系统中的一种技术, 用于确保数据持久性和事务的原子性
>
> WAL 日志记录了数据库中发生的所有变更操作, 例如插入, 更新和删除操作, 以及相关的事务信息

修改 `postgresql.conf` 中的 `wal_level` 设置为 `logical` 即可:

![image-20240409155715278](http://cdn.ayusummer233.top/DailyNotes/202404091557518.png)

```bash
# 重启 PostgreSQL
sudo systemctl restart postgresql
```

主数据库创建逻辑复制源:

```postgresql
-- 连接到目标数据库
\c my_database
-- 创建逻辑订阅
CREATE PUBLICATION my_pub FOR TABLE my_table;
```

在从数据库中设置逻辑复制订阅

```postgresql
-- 创建逻辑复制订阅
CREATE SUBSCRIPTION my_sub CONNECTION 'dbname=my_db host=xx.xx.xx.xx port=5432 user=postgres password=xxx' PUBLICATION my_pub;
-- 启用订阅
ALTER SUBSCRIPTION my_sub ENABLE;
-- 关闭订阅
ALTER SUBSCRIPTION my_sub DISABLE;
```

---

























