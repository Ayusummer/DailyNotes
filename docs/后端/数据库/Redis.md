# Redis

> [Redis](https://redis.io/)
>
> [Redis 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/redis/redis-tutorial.html)

---

REmote DIctionary Server(Redis) 是一个由 Salvatore Sanfilippo 写的 key-value 存储系统，是跨平台的非关系型数据库。

Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存、分布式、可选持久性的键值对(Key-Value)存储数据库，并提供多种语言的 API。

Redis 通常被称为数据结构服务器，因为值（value）可以是字符串(String)、哈希(Hash)、列表(list)、集合(sets)和有序集合(sorted sets)等类型。

> Redis is an open source (BSD licensed), in-memory **data structure store** used as a database, cache, message broker, and streaming engine. 

- [Redis](#redis)
  - [安装](#安装)
    - [Ubuntu/Debian](#ubuntudebian)
  - [常用命令](#常用命令)


---

## 安装

:::tabs

@tab:active Ubuntu/Debian

```bash
sudo apt install lsb-release

# 将仓库加入到 apt index, 并更新以及安装 redis
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
```

:::

@tab windows

到 [Releases · tporadowski/redis --- 发布 · tporadowski/redis (github.com)](https://github.com/tporadowski/redis/releases) 下载 `msi` 文件进行安装即可

进入 redis 安装目录, 以管理员方式运行 `redis-server.exe` 即可

:::



---

## 常用命令

```bash
ps -ef|grep redis # 查看redis服务器进程
sudo kill -9 pid # 杀死redis服务器
sudo killall -9 redis-server # 杀死redis服务器
sudo redis-server /etc/redis/redis.conf # 指定加载的配置文件
netstat -nlt|grep 6372 # 我们检查Redis的网络监听端口
```

`启动与停止`

```bash
/etc/init.d/redis-server stop
/etc/init.d/redis-server start
/etc/init.d/redis-server restart
```

