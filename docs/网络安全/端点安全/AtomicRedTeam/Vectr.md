# Vectr

> [VECTR | Collaborate. Quantify. Improve. --- 向量|合作。量化。提升。](https://vectr.io/)
>
> [SecurityRiskAdvisors/VECTR: VECTR is a tool that facilitates tracking of your red and blue team testing activities to measure detection and prevention capabilities across different attack scenarios --- SecurityRiskAdvisors/VECTR：VECTR 是一种工具，可帮助跟踪红队和蓝队测试活动，以衡量不同攻击场景的检测和预防能力 (github.com)](https://github.com/SecurityRiskAdvisors/VECTR)

紫队工具, 可以帮助跟踪红队和蓝队测试活动以衡量不同攻击场景的检测和预防能力

----

## 安装

> [Getting Started - VECTR Documentation --- 入门 - VECTR 文档](https://docs.vectr.io/Installation/)

---

### 硬件要求

官方推荐使用 ubuntu LTS 版本(18.04 - 22.04) 安装

- 能够通过 Internet 访问 Github 和 DockerHub
- `>= 4C8G`
- 100 +GB SSD

---

### 安装 Docker

> [Docker | DailyNotes (ayusummer.github.io)](https://ayusummer.github.io/DailyNotes/通识/Docker/Docker.html#安装)

可参阅 [Install Docker Engine on Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/) 安装 Docker

---

### 确定安装路径

官方推荐将 Vectr 安装在 `/opt/vectr` 中

> `/opt`: 可选软件包的安装位置。某些第三方软件可能安装在此处。

---

### 下载 Vector Runtime

在 `/opt/vectr` 目录下运行如下命令

```bash
wget https://ghproxy.com/https://github.com/SecurityRiskAdvisors/VECTR/releases/download/ce-8.9.1/sra-vectr-runtime-8.9.1-ce.zip 
unzip sra-vectr-runtime-8.9.1-ce.zip
```

![image-20230920153844593](http://cdn.ayusummer233.top/DailyNotes/202309201539716.png)

---

### 配置 .env 文件

编辑 `/opt/vectr` 目录下的 `.env` 文件, 写入并编辑如下配置:

```properties
# .env file
# VECTR URL, 如果尝试通过 IP 访问, 也会被重定向为此 hostname; 需要配置 DNS 解析俩支持此项配置
VECTR_HOSTNAME=sravectr.internal
# Tomcat 实例监听 HTTPS 的端口(VECTR不支持HTTP访问)
VECTR_PORT=8081

# defaults to warn, debug useful for development
VECTR_CONTAINER_LOG_LEVEL="DEBUG"

MONGO_INITDB_ROOT_USERNAME=admin

# PLEASE change this and store it in a safe place.  Encrypted data like passwords
# to integrate with external systems (like TAXII) use this key
# 用于与外部系统(如 TAXII) 集成的密码登加密数据会使用此密钥
VECTR_DATA_KEY=CHANGEMENOW

# ALSO change and store in a safe place
# 默认的 MongoDB 登录密码
MONGO_INITDB_ROOT_PASSWORD=CHANGEMENOW

# JWT signing (JWS) and encryption (JWE) keys
# Do not use the same value for both signing and encryption!
# JWT Signing 和 JWT Encryption Key, 不建议使用相同的值, 至少 16 个可打印的 Unicode 字符
JWS_KEY=CHANGEME
JWE_KEY=CHANGEMENOW
```

> VSCode 左侧目录树默认不显示这些`.`开头的隐藏文件, 可以使用 `code .env` 打开, 或者使用 `打开文件` 找到并打开此文件

---

### 启动 Docker Containers

在 `/opt/vectr` 目录下运行 

```bash
# 启动并后台执行容器
sudo docker compose up -d
```

![image-20230920161208935](http://cdn.ayusummer233.top/DailyNotes/202309201612011.png)

![image-20230920161221160](http://cdn.ayusummer233.top/DailyNotes/202309201612218.png)

![image-20230920161430439](http://cdn.ayusummer233.top/DailyNotes/202309201614534.png)

---

### 配置 hosts

编辑 `/etc/hosts`, 加一行解析, 其中 `sravectr.internal` 就是先前配置的 `.env` 中的 `VECTR_HOSTNAME`

```properties
127.0.0.1       sravectr.internal
```

保存后,系统会立即开始使用新的映射关系, 可以尝试 ping 下看看

```bash
ping sravectr.internal -c 4
```

![image-20230920161114620](http://cdn.ayusummer233.top/DailyNotes/202309201611091.png)

如果没生效, 可以尝试清除 DNS 缓存:

```bash
sudo systemd-resolve --flush-caches
```

或者重启试试

----

要在其他主机上访问该主机上的 Vectr 服务请将该主机 ip 和 `sravectr.internal` 写到 hosts 里, Windwos 的 Hosts 在 `C:\Windows\System32\drivers\etc\hosts`

---

### 使用

访问宿主机的 8081 端口的HTTPS 服务 

![image-20230920161834164](http://cdn.ayusummer233.top/DailyNotes/202309201618274.png)

使用默认凭据登入:

- `User`: `admin`
- `Password`: `11_ThisIsTheFirstPassword_11`

登入后可以在 Profile 页修改密码:

![image-20230920170340643](http://cdn.ayusummer233.top/DailyNotes/202309201703333.png)





