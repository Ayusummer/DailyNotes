# 目录
- [目录](#目录)
- [WSL2](#wsl2)
  - [VSCode-ssh-remote](#vscode-ssh-remote)
  - [`ssh: connect to host localhost port 22: Connection refused`](#ssh-connect-to-host-localhost-port-22-connection-refused)
- [服务器](#服务器)
  - [远程连接服务器](#远程连接服务器)
    - [remote-SSH](#remote-ssh)
  - [文件下载](#文件下载)
  - [腾讯云轻量](#腾讯云轻量)
    - [内网 DNS](#内网-dns)
- [python](#python)
  - [Pipenv](#pipenv)
  - [生成环境依赖](#生成环境依赖)

# WSL2

## VSCode-ssh-remote

使用 SSH-remote 插件连上 WSL 后如果不是以 root 用户登入的话,会在一些系统目录(如 `/etc`, `/dev`, `/root` 等)被限制编辑与增删, 不过在用户目录(如 `/ubuntu`, `/mnt`)的权限是足够的

如果想要登入后可以编辑系统目录文件的话就要使用 `root` 用户登录, 但是 remote-ssh 虽然对于 `SSH Targets` 有配置文件可以编辑登入用户, 但是没有关于 `WSL Targets` 的配置, 那么这就需要在更高的层级编辑默认以 `root` 身份登入 `WSL`

> [Change vscode user in remote-WSL · Issue #3631 · microsoft/vscode-remote-release (github.com)](https://github.com/microsoft/vscode-remote-release/issues/3631)  
> 
> [Manage Linux Distributions - Change the default user for a distribution | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#change-the-default-user-for-a-distribution)  
>   
> [Ubuntu : 无法将“Ubuntu”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径 正确，然后再试一次。 - z_zhiro - 博客园 (cnblogs.com)](https://www.cnblogs.com/Hiro666/p/14119763.html)

- 首先查看下当前出问题的 `WSL Distribution` 版本    
  `win+x` 打开 `Windows Terminal`, 输入如下命令查看所有的 `WSL Distribution`:
  ```shell
  wsl --list --all
  ```
  
  ![image-20210921163044694](http://cdn.ayusummer233.top/img/202109211630793.png)
  
  其实在 `Remote-ssh - WSL Targets` 目录下就可以看到当前的 `WSL Distribution`
  
  ![image-20210921163322476](http://cdn.ayusummer233.top/img/202109211633562.png)
  
- 确认当前的 `WSL Distribution` 后在 `Windows Terminal` 中输入

  ```shell
  <DistributionName> config --default-user <Username>
  ```

  就可以将 `WSL Distribution` 为 `DistributionName` 的 `WSL` 的默认登录用户切换为 `Username`, 如:

  ![image-20210921163536793](http://cdn.ayusummer233.top/img/202109211635853.png)

  > 需要注意的是, 虽然看到的 `Distribution` 为 `Ubuntu-20.04`, 但是输入命令时要写成 `ubuntu2004`

- 再打开相应 `WSL` 时就可以看到用户已经切换到相应设置的用户了

  ![image-20210921163927558](http://cdn.ayusummer233.top/img/202109211639773.png)
  
  再用 VSCode-SSH-remote 连接 WSL 时可以看到登入用户已经切换成刚才配置的用户了, 当切换的是 root 用户时, 此时就可以使用 VSCode 新建及编辑系统目录下的文件了
  
  ![image-20210921164444924](http://cdn.ayusummer233.top/img/202109211644088.png)

---

## `ssh: connect to host localhost port 22: Connection refused`

> [wsl 的 ssh server 无法启动 （ssh localhost 时报错ssh: connect to host localhost port 22: Connection refused）_hxc2101的博客-CSDN博客](https://blog.csdn.net/hxc2101/article/details/113617870)

打开 `/etc/ssh/sshd_config` 将监听地址 localhost 取消注释:

![image-20211026214222894](http://cdn.ayusummer233.top/img/202110262142078.png)

 然后重启 `ssh 服务` 

```shell
service ssh restart
```

**mark 下这句 ssh 服务重启指令**, ssh localhost 能够正常运行后如果 WSL2 关闭重启了再 `ssh localhost` 可能还会 `Connection refused`, 这时只要再 `service ssh restart` 然后 `ssh localhost` 就可以了

![image-20211026214857109](http://cdn.ayusummer233.top/img/202110262148965.png)

---

# 服务器

## 远程连接服务器

---

### remote-SSH

先在控制台生成并绑定密钥(本地密钥妥善保管), 然后再重置 `root` 密码
> ![20211122113415](http://cdn.ayusummer233.top/img/20211122113415.png)
> ![20211122113543](http://cdn.ayusummer233.top/img/20211122113543.png)

> [轻量应用服务器 重置密码 - 操作指南 - 文档中心 - 腾讯云 (tencent.com)](https://cloud.tencent.com/document/product/1207/44575)

打开 VSCode Remote-SSH 插件配置项

```shell
Host Ubuntu
    HostName 公网ip
    User ubuntu
    IdentityFile "本地密钥路径"

Host CentOS
    HostName 公网ip
    User root
    IdentityFile "本地密钥路径"
```

- 腾讯云轻量的 ubuntu 默认禁用 root 用户名通过密码方式登录实例, 如需开启请参考 [Ubuntu 系统如何使用 root 用户登录实例？](https://cloud.tencent.com/document/product/1207/44569#ubuntu-.E7.B3.BB.E7.BB.9F.E5.A6.82.E4.BD.95.E4.BD.BF.E7.94.A8-root-.E7.94.A8.E6.88.B7.E7.99.BB.E5.BD.95.E5.AE.9E.E4.BE.8B.EF.BC.9F)  
  - 腾讯云启用 root 密码登录后将 `remote-ssh` 配置项中对应 `User` 改为 `root` 后进行远程连接即可使用 `root 密码` 登录到服务器  
  - `CentOS` 的话直接使用 `root` 和 `密钥` 的配置就可以自动登录到 `root 账户`   
  - 由于`腾讯云(ubuntu)`绑定密钥默认绑定在 `ubuntu` 用户下, 因此腾讯云使用 `root + 密钥` 的形式登录 `root` 账户需要将密钥拷贝到 `root` 账户配置下即可:
    ```shell
    cat /home/ubuntu/.ssh/authorized_keys > /root/.ssh/authorized_keys
    ```
    > [腾讯云 密钥直接登录root_Xav Pun的博客-CSDN博客](https://blog.csdn.net/weixin_39591031/article/details/118700963)
- `阿里云` 和 `UCLOUD` 默认是支持 `root +  密钥`登录的

---

## 文件下载

- `VSCode` 连接到服务器确实可以在左栏 `资源管理器` 处选择文件(夹)右键下载, 不过服务器带宽小的话很容易断连
- `Xshell + Xftp` 正版要付费且没必要为了下载个文件就多装一个软件专门做这件事
- 所以考虑直接使用 `Linux scp 命令` 进行下载

`scp` 命令无法识别 `Windows 目录`, 所以要采用一些方式来将 `Windows 目录` 转化成 `Linux 目录`,`WSL` 可以做到这点

`Windows + X` 打开 `Windows 终端`, 随便选择安装了的一个 `ubuntu 发行版` 进入后可以看到当前命令行所在目录 `/mnt/c/Users/233`, 对应 `Windows` 的  `C:/Users/233 目录`

![image-20211101103247697](http://cdn.ayusummer233.top/img/202111011032910.png)

 然后使用如下命令将服务器文件下载到本地:

```shell
scp [user]@[ip]:[Linux 服务器上目标文件的路径] [指定下载到windows本地的路径]
```

![image-20211101104310152](http://cdn.ayusummer233.top/img/202111011043258.png)

![image-20211101104334687](http://cdn.ayusummer233.top/img/202111011043774.png)

下载文件夹:

```shell
scp -r [user]@[ip]:[Linux 服务器上目标文件的路径] [指定下载到windows本地的路径]
```

![image-20211101104510504](http://cdn.ayusummer233.top/img/202111011045617.png)

![image-20211101104630367](http://cdn.ayusummer233.top/img/202111011046461.png)

> [一说 git bash 可以](https://blog.csdn.net/fakerswe/article/details/103178542), 不过我拿 `git bash` 用 `ssh 命令` 连接服务器总是被拒绝连接

---

## 腾讯云轻量

---

[云产品首单秒杀_云服务器秒杀_云数据库秒杀 - 腾讯云 (tencent.com)](https://cloud.tencent.com/act/new?from=14615)[PS: 2C4G轻量首年74]

---

### 内网 DNS

- yum 命令报错: `Could not resolve host: mirrors.tencentyun.com; Unknown error`

  [Could not resolve host: mirrors.tencentyun.com_user2025的博客-CSDN博客](https://blog.csdn.net/user2025/article/details/107733068)

  原因：腾讯云服务器内网 yum 源的域名 mirrors.tencentyun.com 需要有内网的 DNS 才能访问，但是实际情况下，我们会根据需要修改 DNS，为了使用腾讯云内网快速稳定的内网源，我们需要把 DNS 恢复为内网 DNS，下面为各地区服务器 DNS 地址
  解决办法：
  （1）修改服务器的 DNS 配置文件：`/etc/resolv.conf` ，请参阅如下文档添加对应地区的内网 DNS 服务器

  ​          [云服务器 内网服务 - 产品简介 - 文档中心 - 腾讯云 (tencent.com)](https://cloud.tencent.com/document/product/213/5225)
  
  > 我用的上海地域的轻量, 配上海或者上海金融的 DNS 都不对, 最后无奈重置实例才发现原来应该配最后一个所有地域的那个 DNS
  >
  > ![image-20210916203841882](http://cdn.ayusummer233.top/img/202109162038974.png)
  
  （2）重启网络服务
  
  ```shell
  # 重启方式1：
  /etc/init.d/network restart
  #重启方式2：
  systemctl restart network

---
### 使用密钥登录到 root 账户
> [腾讯云 密钥直接登录root_Xav Pun的博客-CSDN博客](https://blog.csdn.net/weixin_39591031/article/details/118700963)

- 腾讯云的 `ubuntu` 系统, 生成密钥后绑定服务器默认会绑定在 `ubuntu` 用户下, 若要通过密钥登录到 `root` 用户则需要将 `ubuntu` 用户下的密钥复制到 `root` 用户下:
  ```sh
  cat /home/ubuntu/.ssh/authorized_keys > /root/.ssh/authorized_keys
  ```
  然后就可以使用密钥登录到 `root` 用户了

---

# python

## Pipenv

> [如何开始使用 Pipenv？ | w3c笔记 (w3cschool.cn)](https://www.w3cschool.cn/article/94449206.html)
>
> [WSL Ubuntu 18.04上使用pipenv的4个关键点 | 老梅笔记 (laomeinote.com)](https://laomeinote.com/4-points-need-to-be-noticed-about-pipenv-usage-in-wsl-ubuntu-18.04)
>
> [Pipenv: Python Dev Workflow for Humans — pipenv 2021.11.9 documentation (pypa.io)](https://pipenv.pypa.io/en/latest/)
>
> [12. Virtual Environments and Packages — Python 3.10.0 documentation](https://docs.python.org/3/tutorial/venv.html)

[Pipenv](https://pipenv.pypa.io/en/latest/) 是 Python 的 Python 打包工具，是对使用 [Pip](https://pip.pypa.io/en/stable/)、[Venv](https://docs.python.org/3/library/venv.html) 和 requirements.txt的升级。Pipenv 是将包管理与虚拟环境相结合的好方法。

虚拟环境是一个自包含的目录树，其中包含针对特定 Python 版本的 Python 安装，以及许多其他包。


安装 `pipenv` 模块:

```sh
apt install pipenv
pip insatll pipenv
```

使用 `cd` 命令切换到需要安装虚拟环境的目录安装虚拟环境(如果当前目录下没有 `Pipfile` 则会先生成 `Pipfile`, 如果有的话便会继续安装虚拟环境):

```sh
pipenv install
```

> `Pipfile` 中将 `[[source]]` 区域下的 `url` 改为国内的源
>
> ```sh
> # 华为镜像
> https://repo.huaweicloud.com/repository/pypi/simple
> # 阿里镜像
> https://mirrors.aliyun.com/pypi/simple
> # 官方源
> https://pypi.python.org/simple
> ```
>
> ![image-20211114221709756](http://cdn.ayusummer233.top/img/202111142217965.png)
>
> 如果默认生成的 `Pipfile` 中的包特别多, 那么这条命令会执行很长时间且没有 log, 这将会是一个很折磨的过程(

启动虚拟环境

```sh
pipenv shell
```

可以通过 `exit` 退出虚拟环境

----

## 生成环境依赖

> [python 项目自动生成环境配置文件requirements.txt_凝眸伏笔的博客-CSDN博客](https://blog.csdn.net/pearl8899/article/details/113877334)

---

- 生成整个当前环境的依赖

    ```bash
    pip freeze > requirements.txt
    ```

> 如果对项目使用了虚拟环境那么这会是一个生成项目依赖的不错的方法

- 生成当前项目的依赖

  ```bash
  pip install pipreqs
  pipreqs .
  ```

  
