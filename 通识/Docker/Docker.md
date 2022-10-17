# Docker

## 安装

### ubuntu 安装 docker

> [ubuntu安装docker详细步骤 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1854430)
>
> [Docker 入门指南：如何在 Ubuntu 上安装和使用 Docker - 卡拉云 (kalacloud.com)](https://kalacloud.com/blog/how-to-install-and-use-docker-on-ubuntu/)



```bash
# 更新现有的软件包列表
apt update
# 安装所需工具包
sudo apt install apt-transport-https ca-certificates curl gnupg-agent  software-properties-common
# 然后将官方 Docker 版本库的 GPG 密钥添加到系统中：
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# 将 Docker 版本库添加到APT源：
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
# 用新添加的 Docker 软件包来进行升级更新。
sudo apt update
# 确保要从 Docker 版本库，而不是默认的 Ubuntu 版本库进行安装：
apt-cache policy docker-ce
# 安装 Docker ：
sudo apt install docker-ce
# 现在 Docker 已经安装完毕。我们启动守护程序。检查 Docker 是否正在运行：
sudo systemctl status docker
```

----

### debian 安装 docker

> [在Kali Linux版本中安装Docker（Docker CE社区版）和Docker Compose_Linux教程_云网牛站 (ywnz.com)](https://ywnz.com/linuxjc/6543.html#:~:text=要在Kali Linux上安装Docker CE，请运行以下命令： sudo apt install,docker-ce docker-ce-cli containerd.io 按y键开始在Kali Linux上安装Docker： 此安装会将docker组添加到系统中，而无需任何用户，将用户帐户添加到组中，以非特权用户身份运行docker命令：)
>
> ---

```bash
# 更新现有的软件包列表
sudo apt update
# 安装所需工具包
sudo apt -y install curl gnupg2 apt-transport-https software-properties-common ca-certificates
# 导入用于签署Docker软件包的Docker GPG密钥：
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
# 添加包含Docker CE最新稳定版本的Docker存储库：
echo "deb [arch=amd64] https://download.docker.com/linux/debian buster stable" | sudo tee  /etc/apt/sources.list.d/docker.list
# 更新apt包索引
sudo apt update
# 在Kali Linux上安装Docker CE
sudo apt install docker-ce docker-ce-cli containerd.io
# 检查安装的Docker版本
docker version
```



---

## 换源

### Docker-hub 换源

打开 `/etc/docker/daemon.json` 并输入

```json
{
    "registry-mirrors": [
      "https://hub-mirror.c.163.com",
      "https://ustc-edu-cn.mirror.aliyuncs.com"
      ]
}

```

然后重启 docker

```bash
service docker restart
```


---

## 镜像

> [关于docker容器和镜像的区别 - jason.bai - 博客园 (cnblogs.com)](https://www.cnblogs.com/baizhanshi/p/9655102.html)

![image-20220923175753464](http://cdn.ayusummer233.top/img/202209231758602.png)

---

### 常用指令

- 拉取镜像

  ```bash
  # docker pull [镜像名]
  # vuldocker/lamp映像包括（php＋apache+mysql），只需要下载dvwa源码即可
  docker pull vuldocker/lamp   
  ```

- 查看当前镜像列表

  ```bash
  docker images
  ```

- 修改镜像 Tag

  ```bash
  # docker tag [镜像ID] [镜像名称]:[tag版本信息]
  docker tag 8ef375298394 mysql:v5.7
  
  # docker tag [原tag][新tag]
  docker tag mysql:v5.7 http://100.1.1.111:8080/mysql:v5.7
  ```

---

### 删除镜像

```bash
# 根据 镜像名称 来删除镜像
docker rmi centos 
# 根据 镜像:标签名称 来删除镜像
docker rmi centos:v2
# 根据 镜像ID 来删除镜像，
docker rmi 7e6257c9f8d8 
```

#### 删除两个 id 相同的镜像

> [Docker - 两个id相同的镜像怎么删除_Joker_Wangx的博客-CSDN博客_docker 镜像重复](https://blog.csdn.net/wx940627/article/details/106821002)

通过 `docker rmi [镜像:tag]` 来删除对应标签的镜像, 实际上


---

### 镜像导出与导入

> [docker容器导出，并将导出镜像在另外一台设备上运行起来_hx_long的博客-CSDN博客_docker 容器导出](https://blog.csdn.net/hx_long/article/details/122705151)

---



### 将镜像跑为容器

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp
```

tips:设置名字为dvwa，映射端口为8008 -i: 交互式操作。-t: 终端（一般与i一起）。 -d：后台运行。

![image-20220923153129005](http://cdn.ayusummer233.top/img/image-20220923153129005.png)

从图中可以看到在执行

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp
```

指令时出现了问题，说已经有container使用了dvwa这个名字（ The container name "/dvwa" is already in use by container "6e3fc590b41c9c6cf6c0d81de14730c127240edecb6a2a5e3debf1565eb3fe6b"），但是从图中也可以看到docker ps指令执行后没有正在运行的container,可以执行

---


### 推送到远程仓库

**因为是在只有http  sql apach服务的镜像上跑的容器，在容器里配置了dvwa（并没有改变镜像）**

**此时将原来的镜像推送还是只有http  sql apach服务的镜像，没有自己在容器里的所有配置  需要将容器保存为镜像再去推送才行**

1、在本地实验室使用harbor搭建了docker 仓库的私服，使用的是HTTP 不安全传输协议（简化部署），地址10.182.235.200:8081

2、在本地docker客户端--靶机进行如下配置：

a)   touch /etc/docker/daemon.json                  

b) vim /etc/docker/daemon.json

{

"insecure-registries": ["10.182.235.200:8081"]  否则pull 10.182.235.200:8081的镜像时候不成功

}

c) sudo systemctl daemon-reload

d) sudo systemctl restart docker

3、方便进行项目上传，在docker客户端登录到harbor服务器

**docker login 10.182.235.200:8081**

Username: 用户名haihangyu

Password:密码公司设置的密码_8月的

Login Succeeded

4、上传image

第一步：先将本地的image新建1个新的tag

docker tag SOURCE_IMAGE[:TAG] 10.182.235.200:8081/baji/REPOSITORY[:TAG]

docker tag **本地镜像的REPOSITORY名称：本地镜像的TAG** **10.182.235.200:8081/项目名称/········[为希望展示的镜像的REPOSITORY名称]:希望展示的镜像的tag名称**

例如： docker tag vuldocker/lamp:latest 10.182.235.200:8081/baji/dvwa:lets_go   就会在docker images里出现绑定了同一镜像的REPOSITORY

希望删除绑定了相同镜像的多个REPOSITORY则使用docker rmi repository:tag 的组合来删除特殊的镜像;  [Docker - 两个id相同的镜像怎么删除_Joker_Wangx的博客-CSDN博客_docker 镜像重复](https://blog.csdn.net/wx940627/article/details/106821002)

![image-20220830165203731](http://cdn.ayusummer233.top/img/image-20220830165203731.png)

不要输错内容

不然

![image-20220923153314595](http://cdn.ayusummer233.top/img/image-20220923153314595.png)

![image-20220923153331543](http://cdn.ayusummer233.top/img/image-20220923153331543.png)

docker tag **本地镜像的REPOSITORY名称：本地镜像的TAG** 10.182.235.200:8081/项目名称/**希望展示的镜像的REPOSITORY名称:希望展示的镜像的tag名称**                    成功  

其中（10.182.235.200:8081/项目名称/**希望展示的镜像的REPOSITORY名称 ----表示仓库的具体地址和名称）

docker push 10.182.235.200:8081/**此前设置的希望展示的镜像的REPOSITORY名:希望展示的镜像的TAG名**

```
 docker tag vuldocker/lamp:latest 10.182.235.200:8081/baji/dvwa:lets_go
```

tag名称里不能包含特殊符号

![image-20220923153345842](http://cdn.ayusummer233.top/img/image-20220923153345842.png)

第二部：push image

如：docker push 10.182.235.200:8081/baji/REPOSITORY[:TAG]

docker push 10.182.235.200:8081/**此前设置的希望展示的镜像的REPOSITORY名:希望展示的镜像的TAG名**

```
docker push 10.182.235.200:8081/baji/dvwa:lets_go    网址表示希望推送收到的地址   所以需要在tag的时候指明REPOSITORY
```

![image-20220830164732816](http://cdn.ayusummer233.top/img/image-20220830164732816.png)

成功

说明：baji项目是在harbor私服上创建了用于归档咱们靶机docker image镜像的项目，大家搭建的docker image靶机镜像可以上传到这个项目中，同时大家也可以自行到harbor仓库中创建自己的项目

正确操作：

![image-20220830164547694](http://cdn.ayusummer233.top/img/image-20220830164547694.png)

5、下载image

docker pull 10.182.235.200:8081/baji/vulhub/mysql:5.5.23




---


## 容器

> [容器Docker进入的四种方法 - 指尖上的代码go - 博客园 (cnblogs.com)](https://www.cnblogs.com/cqqfboy/p/15209635.html#:~:text=容器Docker进入的四种方法 1 使用docker attach进入Docker容器,2 使用SSH进入Docker容器 3 使用nsenter进入Docker容器)


---

### 将镜像跑为容器

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp
```

tips:设置名字为dvwa，映射端口为8008 -i: 交互式操作。-t: 终端（一般与i一起）。 -d：后台运行。

![image-20220923153129005](http://cdn.ayusummer233.top/img/image-20220923153129005.png)

从图中可以看到在执行

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp
```

指令时出现了问题，说已经有container使用了dvwa这个名字（ The container name "/dvwa" is already in use by container "6e3fc590b41c9c6cf6c0d81de14730c127240edecb6a2a5e3debf1565eb3fe6b"），但是从图中也可以看到docker ps指令执行后没有正在运行的container,可以执行

---

### 常用指令

```bash
# 进入容器(使用 bash 或者 sh 均可)
docker container exec -it [容器id] /bin/bash
docker container exec -it [容器id] /bin/sh

# 强制删除容器 docker rm -f [容器 id]
# 删除所有容器
docker rm -f $(docker ps -a -q)   

# 显示当前正在运行的容器
docker ps  

# 查看容器日志
docker logs [容器ID]
```


---

### 从容器中复制文件到本地(docker cp)

例：从容器中复制一个`test.db`文件到本地`data`目录。

```python
# 假设存在一个镜像名为 kitty，标签为0.1，创建一个名为 koko的容器

# 1. create a container first
docker run -itd --name koko kitty:0.1 /bin/bash
# 2. copy test.db from koko tmp directory to local data directory.
docker cp koko:/tmp/test.db ./data/test.db
# 3. rm container koko
docker rm -f koko
```

------

`docker cp`也可以从本地copy文件到容器中：

```python
# 以上面的代码为例，把容器路径和本地路径颠倒即可.
docker cp ./data/test.db koko:/tmp/test.db
```

在docker中，LAMP是指Linux（操作系统）、Apache HTTP服务器、MySQL（MariaDB等数据库软件）和PHP（Perl或Python）的组合方案，一般用来建立Web服务器环境。

[docker中的lamp是什么-Docker-PHP中文网](https://www.php.cn/docker/488591.html)

---

## 常见问题

### ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network

> [[openvpn\] ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network · Issue #418 · docker/for-linux (github.com)](https://github.com/docker/for-linux/issues/418)

```bash
docker network prune
```

---

### unable to connect to deb.debian.org:http

![image-20220919202703896](http://cdn.ayusummer233.top/img/202209192027036.png)

>  [Docker failed to fetch http://deb.debian.org/debian/dists/jessie/InRelease - Stack Overflow](https://stackoverflow.com/questions/44080220/docker-failed-to-fetch-http-deb-debian-org-debian-dists-jessie-inrelease)

![image-20220919202953164](http://cdn.ayusummer233.top/img/202209192029288.png)

![image-20220919203028392](http://cdn.ayusummer233.top/img/202209192030522.png)

---

### There is no public key

> [使用apt-get时出现 “no public key available” 的解决方法-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/533899)

```BASH
sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com [报错缺失的public key]
```

---

### debconf: delaying package configuration, since apt-utils is not installed

> [[16.04\] debconf: delaying package configuration, since apt-utils is not installed · Issue #319 · phusion/baseimage-docker (github.com)](https://github.com/phusion/baseimage-docker/issues/319)

```BASH
apt-get update && apt-get install -y --no-install-recommends apt-utils
```
