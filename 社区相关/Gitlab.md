# Gitlab 搭建

> [GitLab installation minimum requirements | GitLab](https://docs.gitlab.com/15.2/ee/install/requirements.html)
>
> [Ubuntu20.04 搭建 gitlab 服务 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/385951111)

## 配置参考

> [Supported operating systems | GitLab](https://docs.gitlab.com/ee/administration/package_information/supported_os.html#supported-operating-systems)

---

## 创建工作目录

```bash
# 创建 gitlab 工作目录
mkdir xxx
cd xxx
```

---

## 安装 docker 并拉取官方镜像

> [ubuntu安装docker详细步骤 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1854430)
>
> [Docker 入门指南：如何在 Ubuntu 上安装和使用 Docker - 卡拉云 (kalacloud.com)](https://kalacloud.com/blog/how-to-install-and-use-docker-on-ubuntu/)

安装所需工具包

```bash
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent  software-properties-common
```

更新现有的软件包列表

```bash
sudo apt-get update
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

系统方面支持

