# Docker


## ubuntu 安装 docker

> [ubuntu安装docker详细步骤 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1854430)
>
> [Docker 入门指南：如何在 Ubuntu 上安装和使用 Docker - 卡拉云 (kalacloud.com)](https://kalacloud.com/blog/how-to-install-and-use-docker-on-ubuntu/)

安装所需工具包

```bash
sudo apt install apt-transport-https ca-certificates curl gnupg-agent  software-properties-common
```

更新现有的软件包列表

```bash
apt update
```

然后将官方 Docker 版本库的 GPG 密钥添加到系统中：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

将 Docker 版本库添加到APT源：

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

用新添加的 Docker 软件包来进行升级更新。

```bash
sudo apt update
```

确保要从 Docker 版本库，而不是默认的 Ubuntu 版本库进行安装：

```bash
apt-cache policy docker-ce
```

安装 Docker ：

```bash
sudo apt install docker-ce
```

现在 Docker 已经安装完毕。我们启动守护程序。检查 Docker 是否正在运行：

```bash
sudo systemctl status docker
```

---


## 容器

> [容器Docker进入的四种方法 - 指尖上的代码go - 博客园 (cnblogs.com)](https://www.cnblogs.com/cqqfboy/p/15209635.html#:~:text=容器Docker进入的四种方法 1 使用docker attach进入Docker容器,2 使用SSH进入Docker容器 3 使用nsenter进入Docker容器)

```bash
# 进入容器 
docker container exec -it [容器id] /bin/bash
# 或者
docker container exec -it [容器id] /bin/sh
```

---

---

## 两个id相同的镜像怎么删除

> [Docker - 两个id相同的镜像怎么删除_Joker_Wangx的博客-CSDN博客_docker 镜像重复](https://blog.csdn.net/wx940627/article/details/106821002)

---

## 镜像导出与导入

> [docker容器导出，并将导出镜像在另外一台设备上运行起来_hx_long的博客-CSDN博客_docker 容器导出](https://blog.csdn.net/hx_long/article/details/122705151)

