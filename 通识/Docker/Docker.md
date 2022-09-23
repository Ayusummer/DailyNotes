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

---

## Docker-hub 换源

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

## 常见问题

### ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network

> [[openvpn\] ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network · Issue #418 · docker/for-linux (github.com)](https://github.com/docker/for-linux/issues/418)

```bash
docker network prune
```

---

## unable to connect to deb.debian.org:http

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



## Docker

### [docker](https://so.csdn.net/so/search?q=docker&spm=1001.2101.3001.7020) cp：从容器中复制文件到本地

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

### docker拉取镜像

```
docker pull vuldocker/lamp   #vuldocker/lamp映像包括（php＋apache+mysql），只需要下载dvwa源码即可
```

![image-20220725161350946](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220725161350946.png)

### 查看下载的镜像

```
docker images
```

![image-20220725161527093](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220725161527093.png)

### 将镜像跑为容器

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp
```

tips:设置名字为dvwa，映射端口为8008 -i: 交互式操作。-t: 终端（一般与i一起）。 -d：后台运行。

![image-20220725161808686](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220725161808686.png)

从图中可以看到在执行

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp
```

指令时出现了问题，说已经有container使用了dvwa这个名字（ The container name "/dvwa" is already in use by container "6e3fc590b41c9c6cf6c0d81de14730c127240edecb6a2a5e3debf1565eb3fe6b"），但是从图中也可以看到docker ps指令执行后没有正在运行的container,可以执行

### 删除容器

```
docker rm -f $(docker ps -a -q)   
```

再重新运行

```
docker run -it -d --name dvwa -p 8008:80 vuldocker/lamp             //这个镜像起初运行成的容器里什么都没有 只有基础的Apache的HTTP和 MYSQL服务  需要手动安装dvwa
```

### 显示容器

```
docker ps  
```

查看简历的容器是否正在运行，并记录容器ID

docker ps -a  显示所有状态的容器

### 进入启动的容器

```
docker exec -it 容器ID /bin/bash
```

![image-20220728091443802](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220728091443802.png)

### 删除镜像

docker rmi  容器ID

### 修改镜像TAG

docker tag 【镜像ID】【镜像名称】:【tag版本信息】 

如：docker tag 8ef375298394 mysql:v5.7

### 删除镜像

**docker rmi 用于删除指定的镜像，常见用法如下：**

[root@localhost ~]$ docker rmi centos # 根据 **镜像名称** 来删除镜像
[root@localhost ~]$ docker rmi centos:**v2** # 根据 **标签名称** 来删除镜像
[root@localhost ~]$ docker rmi 7e6257c9f8d8 # 根据 **镜像ID** 来删除镜像，同时会删除所有该镜像的TAG镜像


**知道docker rmi的用法后删除多余标签的镜像就是易如反掌**

从图中可以看出，两个镜像的镜像id一样，所以删除时出现报错，软件不知道删除哪个了。针对这种情况，我们可以使用docker untag可以直接将标签去除，也可以使用**docker rmi** **镜像名:TAG** 方式删除

![在这里插入图片描述](http://cdn.ayusummer233.top/img/20200929201806923.png)


\ **以下为补充内容**（关于如何创建**相同镜像名**repository，却**不同标签**tag的镜像）

①.假如我现在有一个镜像
![在这里插入图片描述](http://cdn.ayusummer233.top/img/20200929202240470.png)



②.我开发了一个新版本的镜像，需要给他打上新标签，就用以下命令.例：**docker tag centos:7 centos:centos7** 效果如下：
![在这里插入图片描述](http://cdn.ayusummer233.top/img/20200929202528351.png)

### 查看容器日志

docker logs 容器ID

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

![image-20220805160807288](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220805160807288.png)

![image-20220805160856412](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220805160856412.png)

docker tag **本地镜像的REPOSITORY名称：本地镜像的TAG** 10.182.235.200:8081/项目名称/**希望展示的镜像的REPOSITORY名称:希望展示的镜像的tag名称**                    成功  

其中（10.182.235.200:8081/项目名称/**希望展示的镜像的REPOSITORY名称 ----表示仓库的具体地址和名称）

docker push 10.182.235.200:8081/**此前设置的希望展示的镜像的REPOSITORY名:希望展示的镜像的TAG名**

```
 docker tag vuldocker/lamp:latest 10.182.235.200:8081/baji/dvwa:lets_go
```

tag名称里不能包含特殊符号

![image-20220805161909240](../../../../OneDrive%2520-%25200c26d/%25E6%2596%2587%25E6%25A1%25A3/%25E5%25B1%25B1%25E7%259F%25B3%25E5%25B7%25A5%25E4%25BD%259C/%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0/%25E6%2594%25BB%25E9%2598%25B2%25E5%25AE%259E%25E9%25AA%258C%25E5%25AE%25A4/%25E6%2594%25BB%25E5%2587%25BB%25E6%259C%25BA%25E5%2592%258C%25E9%259D%25B6%25E6%259C%25BA.assets/image-20220805161909240.png)

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

## 文件描述符

### 系统调用接口的引入

不管是学习语言还是学习操作系统，IO流是我们学习过程中不可或缺的一个阶段，在这一部分我们会学习打开文件、读写文件等操作，在C语言中我们打开文件调用的是C语言的[库函数](https://so.csdn.net/so/search?q=库函数&spm=1001.2101.3001.7020)接口，像fopen打开，fclose关闭，fputs写入，fgets读取，这些都是在C中我们对文件进行操作的一些库函数，但是如果不允许使用库函数接口时我们应该怎么办？？？
  这时候我们就应该使用系统调用相关接口，我们首先要明确一个概念，C语言接口和操作系统接口是上下级的关系，任何一个语言，不管是C、C++、java、Python都有自己打开文件关闭文件读写文件的库函数，但是这些库函数的使用都是在Linux和Windows系统下进行的，所以任何语言的接口和系统接口是一种上下级的关系。

![在这里插入图片描述](http://cdn.ayusummer233.top/img/e8c1697e9b434f1da0a2052d84567322.png)

在系统调用接口中，我们打开文件使用open、关闭文件close、写入write、读取read。那这些接口和C中库函数接口有什么联系呢？我们可以这样理解：C中调用得这些库函数底层一定封装了系统调用接口，可以认为[fopen](https://so.csdn.net/so/search?q=fopen&spm=1001.2101.3001.7020)底层调用open，fclose底层调用close，fread底层调用read，fwrite底层调用write。我们在windows中打开文件，windows底层也有一套自己的windows相关的api系统接口，当我们在windows使用C的库函数时，C调用的就是windows下的系统接口。这样在语言层面上就实现了跨平台性。

### 文件描述符

 我们查看关于C语言中库函数和系统调用相关接口的使用手册。

![在这里插入图片描述](http://cdn.ayusummer233.top/img/ee1a12b11f504a2585a7fd9f2f2ed790.png)

 图中我们给出了C和系统调用的相关接口的使用手册，我们发现C中库函数的类型为FILE*，系统调用接口的类型为int。
 FILE*是文件指针，在C中打开一个文件，打开成功后会返回一个文件指针，该指针指向文件内容的起始地址，文件指针是C语言级别的概念；int fd本质是new file descriptor-文件描述符，文件描述符是系统级别的概念。

### 演示文件描述符

| ![img](https://img-blog.csdnimg.cn/d1aa467b689c4da982bcad43e9a71ed0.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIwMjEyMw==,size_16,color_FFFFFF,t_70)         图1 代码 | ![img](https://img-blog.csdnimg.cn/624bbbcbc2c34f869c9af190e5573482.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIwMjEyMw==,size_16,color_FFFFFF,t_70)   图2 运行结果 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

  通过上图中，我们就可以观察到了fd的值，但是fd的值为-1，-1意思是这个文件不让我们创建不让我们打开，这是因为单纯的O_WRONLY是没有创建功能的，所以如果你想打开一个文件写入，并且文件不存在想创建的话需要扩加一个选项O_CREAT。

| ![img](http://cdn.ayusummer233.top/img/b2e6edfe39fd40b387ed43e01d0828dd.png)图1 代码 | ![img](http://cdn.ayusummer233.top/img/38c6702390b1457f9ebf89e3c0b589ba.png)图2 运行结果 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

  其实OS系统的open接口的O_WRONLY+O_CREAT组合起来就是C语言接口中的w方式，因为他们是上下级的关系，所以fopen一定调用了open，即C语言中的w方式底层同时给open函数传入了两个参数：O_WRONLY+O_CREAT。

### 文件描述符的返回值

| ![img](http://cdn.ayusummer233.top/img/deb948a30e374dc18bb5550a9cd01952.png)                                               图1 代码 | ![img](http://cdn.ayusummer233.top/img/27b1dadb71f64c1cbe60d1b3517614f8.png)                    图2 运行结果 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

  我们发现返回值从3开始依次递增，有很强的规律性；而-1代表打开文件失败，那么012在哪呢？又代表什么？

  相信各位读者应该都听过一个概念，C语言程序会默认打开3个输入输出流，其中这三个输入输出流对应的名为stdin，stdout，stderr，文件类型为FILE*，而FILE*是C语言的概念，底层对应的文件描述符，其中stdin对应0，stdout对应1，stderr对应2，换言之012被默认已经打开了，再打开时就是从3开始打开了，所谓的文件描述符，本质其实就是数组下标。

### 文件描述符的底层原理

一个进程是可以打开多个文件的，无非就是多调用几次open，而我们的计算机中是同时存在大量进程的，而这些进程可能会打开各种各样的文件，所以系统中在任何时刻都可能存在大量已经打开的文件，操作系统的功能之一就是文件管理，就是要对这些打开的文件进行管理。
  而我们都知道，所谓管理就是先描述再管理，底层中描述文件的数据结构叫做struce file，一个文件对应一个struct file，大量的文件就有大量的struct file，我们只需将这些数据结构用双链表连接起来，所以对文件的管理就变成了对双链表的增删改查。而我们现在要做的，这些已经被打开的文件那些文件属于某个特定的进程，就需要建立进程和文件的对应关系。
  每一个进程都有一个task_strut，这个task_struct会指向一个struct files_struct结构体，这个结构体里会有一个指针数组struct file* fd_array[32]，而这个指针数组就是文件描述符对应的数组。

![在这里插入图片描述](http://cdn.ayusummer233.top/img/323bb0430bde42359decae96a5abedc6.png)

 既然是数组就有下标，下标从0开始依次递增，task_struct结构里会有一个指针变量指向这个struct files_struct结构体，我们这个指针数组中的每个数据都是一个指针变量。默认的3个文件+我们上面的例子中自己打开的log.txt，总共有4个文件描述符打开，这四个打开的文件描述符都对应一个struct file的结构体，结构体里有描述该文件属性的相关信息，而这些struct file文件结构体之间，是通过双链表的形式链接起来的。
  对于输入输出错误，将下标012分配给他们，自己打开的文件从3开始依次分配，当我们将下标和struct file结构体的指向关系表明清楚以后，open函数返回时，就会将下标数字直接返回给调用方，至此在应用层我们就拿到了文件描述符，至此我们就完成了文件和进程的对应关系。所以，所谓的文件描述符实际就是数组的下标。

![在这里插入图片描述](http://cdn.ayusummer233.top/img/e9b3c520ced94c849a8d578fab9d5b4b.png)

### 文件描述符的分配规则

文件描述符的分配规则：在files_struct数组当中，找到当前没有被使用的最小的一个下标，作为新的文件描述符。（其实就是将数组从上到下扫描，找没有被使用的）

文件描述符就是一个小整数，Linux进程默认情况下会有3个缺省打开的文件描述符，分别是标准输入0， 标准输出1， 标准错误2.；0,1,2对应的物理设备一般是：键盘，显示器，显示器。
而每当我们打开一个新的文件时，系统就会将文件描述符对应的指针数组从上而下进行扫描，找到没有被使用的作为该文件的文件描述符。