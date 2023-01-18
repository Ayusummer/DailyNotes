# Linux

## Ubuntu 的 source.list 文件

> [Ubuntu | 对sources.list的总结 - 简书 (jianshu.com)](https://www.jianshu.com/p/5400722c369c)
>
> [详解Ubuntu的source.list文件_VinQin的博客-CSDN博客_sourcelist](https://blog.csdn.net/u012843189/article/details/80964287)

### 换源

> [vim - Ubuntu 20.04 Desktop 换源的两种方法_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000040946515)

换网易源:

打开 `/etc/apt/sources.list` 在文件首部加上如下配置

```
# 镜像
deb http://mirrors.163.com/ubuntu/ focal main restricted
deb http://mirrors.163.com/ubuntu/ focal universe
deb http://mirrors.163.com/ubuntu/ focal multiverse
deb http://mirrors.163.com/ubuntu/ focal-updates main restricted
deb http://mirrors.163.com/ubuntu/ focal-updates universe
deb http://mirrors.163.com/ubuntu/ focal-updates multiverse
deb http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse
```

然后注释掉相应后缀的源本的官方源之后更新下索引即可

```bash
apt update
```

---

## SHELL

> [Bash编程入门-1：Shell与Bash - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/56532223)

shell 是运行在终端中的文本互动程序，bash（GNU Bourne-Again Shell）是最常用的一种 shell。是当前大多数 Linux 发行版的默认 Shell。

其他的 shell 还有：sh、bash、ksh、rsh、csh等。Ubuntu 系统常用的是 bash，Bio-linux 系统是基于 ubuntu 定制的，但是却使用了zsh。

sh 的全名是 Bourne Shell。名字中的玻恩就是这个 Shell 的作者。

而 bash 的全名是 Bourne Again Shell。最开始在 Unix 系统中流行的是 sh，而 bash 作为 sh 的改进版本，提供了更加丰富的功能。一般来说，都推荐使用 bash 作为默认的 Shell。

查看当前系统中 shell 的类型:  
```shell
echo $SHELL
```

![20211219065045](http://cdn.ayusummer233.top/img/20211219065045.png)

---

### 快捷键/命令

---

### 路由操作

```bash
route add -net [目的网段] netmask [掩码] gw [网关]
route del -net [目的网段] netmask [掩码] gw [网关]
```

这样加的路由是临时的, 每次重启都会掉路由, 可以通过在 `/root/.bashrc` 中写入如下命令

```bash
# 如果路由中没有到目的网段 [目的网段] 的路由则添加此条路由
if ! ip route | grep -q [目的网段]; then
    route add -net [目的网段] netmask [子网掩码] gw [网关ip]
fi
```

由于每次打开 bash 都会加载 `~/.bashrc`, 而 VSCode SSH 连远程主机一般第一件事就是新建一个 bash, 所以这样也可以变相解决手动加路由的困扰

> 不用 bash 的话也可以手动 source ~/.bashrc 来加载路由
>
> ---
>
> `-q` 参数使得 `ip route | grep [目的网段]` 命令不输出结果, 不使用 `-d` 的话每次新建 bash 都会看到该条命令的输出结果

---

#### 类清屏

- ```bash
  # 清屏
  clear
  # 指针移到行尾
  Ctrl+L
  ```

---

#### 运算符


###### 管道运算符 `|`

```bash
command 1 | command 2
```

把第一个命令 `command 1` 执行的结果作为 `command 2`的输入传给 `command 2`

例如:

```bash
ls -s|sort -nr
```

该命令列出当前目录中的文档(含size)，并把输出送给 sort 命令作为输入，sort 命令按数字递减的顺序把 ls 的输出排序。

- `-s`: file size
- `-n`: `numeric-sort`
- `-r`: reverse，反转

> ![image-20221122002954641](http://cdn.ayusummer233.top/img/202211220038780.png)



---

#### 查找文件

- 使用 locate

  > [Difference between locate and mlocate - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/273182/difference-between-locate-and-mlocate)
  >
  > ---

  ```bash
  # 注意是 mlocate 而非 locate, 二者是不一样的
  apt install mlocate
  # 更新数据库
  time updatedb
  # 使用 mlocate 搜索文件(注意这里命令就是 locate 而非 mlocate)
  locate [文件名]

---

## SSH 工具


> [如何在 Ubuntu 20.04 启用 SSH-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/763505)
>
> ---

首先需要确认自己的机子是否有 SSH 服务, 如果 SSH 不能连上本机的话那么需要装下 openssh

```bash
# 刚装好系统需要配置下 root 密码, 输入如下命令然后输入当前账户密码后设置 root 密码即可
sudo passwd root

# 更新源
apt update
# 安装 openssh-server
apt install openssh-server
```


安装完成后 SSH 服务会自动启动

```bash
# 验证 SSH 是否在运行
systemctl status ssh
```

> 按 `q` 返回命令行

需要注意的是 ubuntu 自带一个配置 iptables 防火墙的工具 UFW(`Uncomplicated Firewall`), 如果系统防火墙已经启用那么请确保打开了 SSH 端口

```bash
ufw allow ssh
```

到此为止就可以使用普通账户 ssh 登录了, 但是还不能用 root 来 ssh  连接, 还需要再配置下

```bash
# 安装 vim
apt install vim

# 打开 sshd_config 文件
vim /etc/ssh/sshd_config
# 按下 i 切换到编辑模式进行文本编辑
# 编辑完成后 esc 后输入 :wq 并回车即可保存并退出 vim
```

将 `#Authentication` 项目下的 `PermitRootLogin` 设置为 `yes`, `PasswordAuthentication` 项也设置为 `yes`

> 如果后者没有就新建一个

> ![image-20221110002027202](http://cdn.ayusummer233.top/img/202211100020293.png)  
> ![image-20221110002039422](http://cdn.ayusummer233.top/img/202211100020468.png)

```bash
# 重启 ssh 服务
service ssh restart
# 添加开机启动
update-rc.d ssh enable
```

然后就可以使用 root 账户 ssh 该设备了

---


### VSCode: Remote-SSH


VSCode 安装 Remote-SSH

> ![image-20221110003106144](http://cdn.ayusummer233.top/img/202211100031215.png)

打开 Remote-SSH 配置项

> ![image-20221110003320756](http://cdn.ayusummer233.top/img/202211100033780.png)

填入

```properties
Host [为该主机随便起个有辨识度的名字]
    HostName [主机ip]
    User [登入用户, 可以填 root]
```

连接到远程然后根据提示选择 Linux, 输入密码即可

---

在本地打开命令行执行生成密钥命令:

```bash
ssh-keygen
```

根据提示完成密钥生成步骤(可以什么都不输入一路回车到完成)

完成后会生成一个私钥(`id_rsa`)一个公钥(`id_rsa_pub`)

将==本地公钥==复制到远程主机的 `/root/.ssh` 目录下然后在终端中 cd 到该目录执行(如果该目录不存在则先创建此目录)

```bash
cat id_rsa_ubuntu1.pub >> authorized_keys
sudo chmod 600 authorized_keys	# 修改文件权限
sudo chmod 700 ~/.ssh	# 修改目录权限
```

然后打开 remote-ssh 配置文件, 在原来配置项的基础上加上一个 `IdentityFile` 字段, 填写上==本地私钥==路径即可

```properties
Host [为该主机随便起个有辨识度的名字]
    HostName [主机ip]
    User [root]
    IdentityFile "[本地私钥路径]"
```

然后重新连接远程主机, 就不需要输入密码了


---

### MobaXterm

> [【MobaXterm】设置保持SSH连接_hitrjj的博客-CSDN博客_mobaeterm keepalive](https://blog.csdn.net/u014636245/article/details/83855860)

---

### WindTerm



---

### Terminus

---

### 远程图形化界面的本地显示

> [ssh链接远程服务器 及 远程图形化界面的本地显示 - 掘金 (juejin.cn)](https://juejin.cn/post/7109647016086470669)
>
> [本地显示远程图形化界面、服务器配置图形化界面 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/260189540)
>
> [Installing and running an X Server on Windows — Aalto scientific computing](https://scicomp.aalto.fi/triton/quickstart/installxonwindows/)
>
> ---

编辑 `/etc/ssh/sshd_config`

![image-20221201165743295](http://cdn.ayusummer233.top/img/202212011718395.png)

修改如下三条配置:

```properties
X11Forwarding yes
#X11DisplayOffset 10
X11UseLocalhost no
#PermitTTY yes
PrintMotd no
#PrintLastLog yes
#TCPKeepAlive yes
```

```bash
# 重启 ssh
service ssh reload
# 安装 x11-apps
sudo apt install x11-apps
```

到这里 MobaXterm 就可以在本地显示远程应用的 UI 了

![image-20221201170353587](http://cdn.ayusummer233.top/img/202212011718703.png)

但是 VSCode 没有 DISPLAY 环境变量, 需要在 MobaXterm 里执行下

```bash
env | grep DISPLAY
```

> ![image-20221201170530202](http://cdn.ayusummer233.top/img/202212011718613.png)

对应得将如下配置添加到 `/root/.bashrc` 中:

```properties
export DISPLAY=localhost:11.0
```

![image-20221201170804190](http://cdn.ayusummer233.top/img/202212011718410.png)

> PS: 这个 IDSPLAY 变量的值是会变的, 貌似是每次 MobaXterm SSH 连接设备都会变
>
> ![image-20221202133848680](http://cdn.ayusummer233.top/img/202212021823466.png)
>
> > [xorg - What is the $DISPLAY environment variable? - Ask Ubuntu](https://askubuntu.com/questions/432255/what-is-the-display-environment-variable)
>>
> > [使用 WSL2 + X11 转发 - 在 Windows10 中打造 GNU/Linux 学习生产环境 - Steins;Lab (steinslab.io)](https://steinslab.io/archives/2082#3_X11_Forwarding)
> 
> 折腾了一圈最后感觉还是开个 MobaXterm 然后用 VSCode 比较方便

---

#### 一些软件命令行启动的命令

```bash
# 火狐浏览器直接在命令行里输入 firefox 并回车会在远程启动默认用户配置的 Firefox 窗口, 并不会在本地启动
firefox
# 如果要在本地启动的话需要用如下配置调起火狐用户配置, 然后新建一个用户配置并启动, 此时在本地就可以看到火狐的窗口了
firefox -profilemanager
```

![image-20221201191455296](http://cdn.ayusummer233.top/img/202212021823418.png)

> 不过远程启动火狐后使用体验不是很好, 比较卡, 找到的一篇相关文章也并没有复现成功, 于是就继续远程 windows 用浏览器了
>
> [为什么Firefox在SSH上这么慢？ - rebeca8 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zafu/p/9392498.html)
>
> ---
>
> 从个人实际需求出发之后发现了一个比较好的替代方案
>
> 因为个人希望打开远程浏览器主要是为了访问局域网里的靶场, 然后通过 burp 拦截请求
>
> 那么可以用 VSCode 的端口转发功能, 将 BurpSuit 代理的端口(比如8080) 转发到本机, 然后在本机的 firefox 设置 localhost 8080 代理, 之后就可以在本机 firefox 中访问局域网靶场以及使用 burp 拦截请求了
>
> > PS: 单独设置 VSCode 的端口转发以及 FireFox 的代理并不能使 Firefox 访问局域网站点, 需要用 burp 也代理相同端口才能正常访问局域网站点
>
> ![image-20221202183951903](http://cdn.ayusummer233.top/img/202212021839812.png)
>
> ![image-20221202184032013](http://cdn.ayusummer233.top/img/202212021907976.png)
>
> ![image-20221202184101762](http://cdn.ayusummer233.top/img/202212021907666.png)
>
> ![image-20221202190638055](http://cdn.ayusummer233.top/img/202212021908693.png)
>
> ![image-20221202190726334](http://cdn.ayusummer233.top/img/202212021908052.png)

---

```bash
java -jar [burpsuitxxx.jar绝对路径]
```

> ![image-20221202093238590](http://cdn.ayusummer233.top/img/202212021823179.png)
>
> 就是分辨率有点奇怪, 可以在 `~/.bashrc` 加上 `GDK_SCALE` 参数来放大 [GDK_SCALE] 倍(只能是整数倍)
>
> ```bash
> export GDK_SCALE=2
> export GDK_DPI_SCALE=1
> ```

---

## 使用 root 登入 UI

> [ubuntu20.04 使用root用户登录系统_COCO56（徐可可）的博客-CSDN博客_ubuntu使用root登录](https://blog.csdn.net/COCO56/article/details/107628019)
>
> ---

> 不建议使用特权用户登入系统(一键扬掉系统.jpg)
>
> > [为什么sudo存在？为什么不将特权系统访问作为用户权限处理？ | 码农俱乐部 - Golang中国 - Go语言中文社区 (mlog.club)](https://mlog.club/article/4094413)
>
> ---

首先设置好 root 密码, 然后改几个文件

- `/usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf`

  在末尾加上

  ```properties
  # 手工输入登录系统的用户名和密码
  greeter-show-manual-login=true
  ```

- `/etc/pam.d/gdm-autologin`

  使用 # 注释第三行的限制 root 登录:

  ```properties
  # auth	required	pam_succeed_if.so user != root quiet_success
  ```

- `/etc/pam.d/gdm-password`

  使用 # 注释第 3 行限制 root 登录的配置项:

  ```properties
  # auth	required	pam_succeed_if.so user != root quiet_success
  ```

- `/root/.profile`

  使用 # 注释掉最后一行然后添加一行

  ```properties
  # mesg n 2> /dev/null || true
  tty -s&&mesg n || true
  ```

- 重启设备然后即可使用 root 账户登入 UI 界面

  ```bash
  reboot
  ```

  > 然后就会看到不推荐使用特权用户登入系统

---

## 常见问题

### the root filesystem require a manual fsck

> [boot - Root file system requires manual fsck - Ask Ubuntu](https://askubuntu.com/questions/885062/root-file-system-requires-manual-fsck)

![image-20220810092901637](http://cdn.ayusummer233.top/img/202208100929766.png)

```bash
fask -tf /dev/mapper/ubuntu--vg-root
exit
```

> [Linux fsck 命令 command not found fsck 未找到命令 fsck 命令详解 fsck 命令未找到 fsck 命令安装 - CommandNotFound ⚡️ 坑否](https://commandnotfound.cn/linux/1/451/fsck-命令)
>
> - `-y`: 确认所有的 yes/no 选项
> - `-f`: (force)  尽管目录被标记为 clean 也强制检查

---

### E: dpkg was interrupted, you must manually run 'dpkg --configure -a' to correct the problem.

执行 `dpkg --configure -a` 以修复

若执行后出现 

```bash
dpkg: error: parsing file '/var/lib/dpkg/updates/0000' near line 0:
 newline in field name '▒v▒▒'
```

则

```bash
sudo rm /var/lib/dpkg/updates/*
```

即可

---

### E: Sub-process /usr/bin/dpkg returned an error code (1)

![image-20220825102350086](http://cdn.ayusummer233.top/img/202208251023257.png)

> [E: Sub-process /usr/bin/dpkg returned an error code (1)解决办法_Mr.Stick的博客-CSDN博客](https://blog.csdn.net/stickmangod/article/details/85316142)

----

## 软硬链接

> [软连接和硬链接区别 - matengfei - 博客园 (cnblogs.com)](https://www.cnblogs.com/matengfei123/p/12824422.html)

---

## 常用命令

### echo

> [How to use Echo Command in Linux (With Examples) (phoenixnap.com)](https://phoenixnap.com/kb/echo-command-linux)

```bash
# 帮助文档
/bin/echo --help
```

```bash
# 语法
echo [option] [string]
```

---

### 查看软件安装位置

> [Ubuntu中查看软件的安装位置及安装文件 - Macrored - 博客园 (cnblogs.com)](https://www.cnblogs.com/macrored/p/11757888.html)

```bash
whereis
which
```

---

### 防火墙相关

> [Debian/Ubuntu/Centos 防火墙放行指定端口 - SunPma'Blog](https://sunpma.com/555.html)
>
> [ubuntu的ufw如何开放特定端口?_justheretobe的博客-CSDN博客_ufw开放端口](https://blog.csdn.net/justheretobe/article/details/51843178)

---

### 压缩与解压

```bash
# 解压 zip 文件
unzip [option] [压缩包名]
```

|   option    |                             含义                             |
| :---------: | :----------------------------------------------------------: |
|  -d 目录名  |                 将压缩文件解压到指定目录下。                 |
|     -n      |                解压时并不覆盖已经存在的文件。                |
|     -o      |         解压时覆盖已经存在的文件，并且无需用户确认。         |
|     -v      | 查看压缩文件的详细信息，包括压缩文件中包含的文件大小、文件名以及压缩比等，但并不做解压操作。 |
|     -t      |              测试压缩文件有无损坏，但并不解压。              |
| -x 文件列表 |           解压文件，但不包含文件列表中指定的文件。           |


---
## WSL2

---

### 安装

> [安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)
>
> [旧版 WSL 的手动安装步骤 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-3---enable-virtual-machine-feature)
>
> [win10 WSL2问题解决WslRegisterDistribution failed with error: 0x800701bc_first_Dance的博客-CSDN博客](https://blog.csdn.net/qq_18625805/article/details/109732122)
>
> ---

安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。 计算机需要[虚拟化功能](https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed)才能使用此功能。

以管理员身份打开 PowerShell 并运行：

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

**重新启动**计算机，以完成 WSL 安装并更新到 WSL 2。

---

下载 Linux 内核更新包并安装

- [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

  > 如果使用的是 ARM64 计算机，请下载 [ARM64 包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi)。 如果不确定自己计算机的类型，请打开命令提示符或 PowerShell，并输入：`systeminfo | find "System Type"`。 **Caveat：** 在非英文版 Windows 上，你可能必须修改搜索文本，对“System Type”字符串进行翻译。 你可能还需要对引号进行转义来用于 find 命令。 例如，在德语版中使用 `systeminfo | find '"Systemtyp"'`。

---

`Windows+X` 选择以管理员模式打开 Powershell, 执行如下命令安装 wsl2

```powershell
# 该命令默认安装 wsl2
wsl --install
```

![image-20221120231039275](http://cdn.ayusummer233.top/img/202211202310305.png)

```powershell
wsl --install -d kali-linux
```

按照提示新建账户密码即可

---

### 卸载

> [WSL 发行版卸载 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/487091950)
>
> ---

```powershell
wslconfig /u kali-linux
```

---

### VSCode-ssh-remote

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
  >
  > 相应的看到的是 `kali-linux`, 但是输入命令时要用 `kali`

- 再打开相应 `WSL` 时就可以看到用户已经切换到相应设置的用户了

  ![image-20210921163927558](http://cdn.ayusummer233.top/img/202109211639773.png)
  
  再用 VSCode-SSH-remote 连接 WSL 时可以看到登入用户已经切换成刚才配置的用户了, 当切换的是 root 用户时, 此时就可以使用 VSCode 新建及编辑系统目录下的文件了
  
  ![image-20210921164444924](http://cdn.ayusummer233.top/img/202109211644088.png)
  
  ---

### 端口映射

正常情况下直接从本机 telnet  wsl2 的端口是不通的, 需要映射 wsl2 端口到本机

> [wsl2 设置端口映射_压码路的博客-CSDN博客_wsl端口映射](https://blog.csdn.net/keyiis_sh/article/details/113819244)

```powershell
# 获取 wsl ip 地址
wsl -- ifconfig eth0
```

> ![image-20220806160015420](http://cdn.ayusummer233.top/img/202208061600558.png)

```powershell
# 随便看看本机端口有没有占用(比如9225)
netstat -aon | findstr "9225"
```

> ![image-20220806160222828](http://cdn.ayusummer233.top/img/202208061602939.png)

```powershell
# 将ip地址的对应的端口映射到宿主win10对应的端口
# 需要管理员权限
# netsh interface portproxy add v4tov4 listenport=[win10端口] listenaddress=0.0.0.0 connectport=[虚拟机的端口] connectaddress=[虚拟机的ip]
netsh interface portproxy add v4tov4 listenport=9225 listenaddress=0.0.0.0 connectport=69 connectaddress=172.29.61.202
```

> ![image-20220806160340771](http://cdn.ayusummer233.top/img/202208061603880.png)

```powershell
# 检测是否设置成功
netsh interface portproxy show all
```

> ![image-20220806160442677](http://cdn.ayusummer233.top/img/202208061604773.png)
>
> ```powershell
> # 删除端口转发
> netsh interface portproxy delete v4tov4 listenport=9225 listenaddress=0.0.0.0
> ```
>
> 


---
### WSL2 DNS 服务异常

无法正确解析域名, 直接 ping ip 可以 ping 通, 排查了一圈发现主网也 ping 不通

> 解决方案: [WSL 2 自定义安装目录和网络配置_daihaoxin的专栏-CSDN博客_wsl2目录](https://blog.csdn.net/daihaoxin/article/details/115978662)

![20211218213224](http://cdn.ayusummer233.top/img/20211218213224.png)
- 网络: 172.22.0.0, 20 位掩码

配置主网防火墙入站规则
- 规则类型: 自定义
- 程序: 所有程序
- 协议和端口: 默认值不做改动
- 作用域: 此规则适用于哪些本地 IP 地址?: 下列 IP 地址 -> 添加 -> 此 ip 地址或子网: `172.22.0.0/20` 
- 操作: 允许连接
- 配置文件: 全选
- 名称自定义

然后在 WSL2 里重新 ping 主网又能 ping 通了, DNS 也正常了, 可以 ping 同其他域名了

> 缺点在于计算机重启后 WSL2 主网地址可能会变(   
> 需要再配下防火墙  
> 挺秃然的, 没有完全搞清楚原理, 无法一劳永逸地解决这个问题  




---

### 报错收集

> [WSL2 踩坑分享 – xiabee](https://xiabee.cn/coding/wsl2/)
>
> [WSL2 网络异常排查 [ping 不通、网络地址异常、缺少默认路由、被宿主机防火墙拦截\] - 简书 (jianshu.com)](https://www.jianshu.com/p/ba2cf239ebe0)
>
> 

---

#### ssh 拒绝

`ssh: connect to host localhost port 22: Connection refused`

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

#### ping 的通 ip , ping 不通域名

dns 解析错误

修改 `/etc/resolv.conf` 文件

```conf
nameserver 8.8.8.8
```

---

## 服务器

### 远程连接服务器

---

#### remote-SSH

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

> [每天一个linux命令（10）：cat 命令 - peida - 博客园 (cnblogs.com)](https://www.cnblogs.com/peida/archive/2012/10/30/2746968.html)
>
> - 显示文件内容 `cat [filename]`
>
>   ![image-20211123110321948](http://cdn.ayusummer233.top/img/202111231103098.png)
>
> - 创建一个文件 `cat > [filename]`
>
>   ![image-20211123111154541](http://cdn.ayusummer233.top/img/202111231111636.png)
>
> - 将若干个文件合并为一个文件: `cat file1 file2 > file`
>
>   ![image-20211123111347216](http://cdn.ayusummer233.top/img/202111231113303.png)

---

### 文件下载

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

### 腾讯云轻量

---

[云产品首单秒杀_云服务器秒杀_云数据库秒杀 - 腾讯云 (tencent.com)](https://cloud.tencent.com/act/new?from=14615)[PS: 2C4G轻量首年74]

---

#### 内网 DNS

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
  ```

---
#### 使用密钥登录到 root 账户
> [腾讯云 密钥直接登录root_Xav Pun的博客-CSDN博客](https://blog.csdn.net/weixin_39591031/article/details/118700963)

- 腾讯云的 `ubuntu` 系统, 生成密钥后绑定服务器默认会绑定在 `ubuntu` 用户下, 若要通过密钥登录到 `root` 用户则需要将 `ubuntu` 用户下的密钥复制到 `root` 用户下:
  ```sh
  cat /home/ubuntu/.ssh/authorized_keys > /root/.ssh/authorized_keys
  ```
  然后就可以使用密钥登录到 `root` 用户了

---

### 探针

> [cokemine/ServerStatus-Hotaru: 云探针、多服务器探针、云监控、多服务器云监控 (github.com)](https://github.com/CokeMine/ServerStatus-Hotaru)

在连不上 GitHub 时使用方式

> Coding 目前好像是需要登录才能下载, 仓库提供的默认脚本使用 coding 会拉不下来仓库, 所以还是用 github
>
> 将源仓库中的 github 相关链接换成了 GitHub Proxy 对应链接, 于是有了下文中的脚本

- 服务端

  ```bash
  # 源仓库的 shell(由于有时服务器不一定可以连上 github 所以修改了其中的部分链接便有了下面第二个自己修改的 shell)
  # wget https://cokemine.coding.net/p/hotarunet/d/ServerStatus-Hotaru/git/raw/master/status.sh
  wget https://cdn.ayusummer233.top/shell/status.sh
  ```

  ```bash
  bash status.sh s
  ```

  > - `选择 GitHub / Coding.net`: 保持默认(Github)(1)
  > - `选择监听端口`: 保持默认(35601) 或者自己填个未被使用且已放通的端口
  > - `自动部署`: 保持默认(y)
  > - `输入本机域名或ip`: 没有域名就直接输入本机 ip
  > - `输入 ServerStatus 服务端中网站要设置的 域名/IP 的端口`: 随便输个未被使用且已放通的端口, 这个端口用于访问 Web 页面
  >
  > ![image-20220913174443396](http://cdn.ayusummer233.top/img/202209131744795.png)
  >
  > ![image-20220913174525133](http://cdn.ayusummer233.top/img/202209131745321.png)
  >
  > ![image-20220913174857476](http://cdn.ayusummer233.top/img/202209131748700.png)
  >
  > ![image-20220913174920330](http://cdn.ayusummer233.top/img/202209131749559.png)

- 客户端

  首先在服务端添加一个节点配置, 用于与客户端配置对接
  
  ```bash
  bash status.sh s
  ```
  
  - 进入 7-服务端配置
  - 1 - 节点配置
  - 设置节点账密(自定义, 之后客户端通过此项配置进行连接)以及基本信息

> ![image-20220913175404031](http://cdn.ayusummer233.top/img/202209131754161.png)
>
> ![image-20220913175713057](http://cdn.ayusummer233.top/img/202209131757271.png)

在客户端进行相应配置(与服务端刚才设置的节点信息一致即可)

```bash
# 源仓库的 shell(由于有时服务器不一定可以连上 github 所以修改了其中的部分链接便有了下面第二个自己修改的 shell)
# wget https://cokemine.coding.net/p/hotarunet/d/ServerStatus-Hotaru/git/raw/master/status.sh
wget https://cdn.ayusummer233.top/shell/status.sh
bash status.sh c
```

> ![image-20220913175901782](http://cdn.ayusummer233.top/img/202209131759040.png)

---

若客户端为 windows 则需要手动用 Python 跑下

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py # 若未安装pip
python get-pip.py
# 可以换下源, 不换也行
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
pip install psutil
# 修改 status-psutil.py(在主仓库的 clients 目录中)
# https://github.com/cokemine/ServerStatus-Hotaru/blob/master/clients/status-psutil.py
# 运行程序, 也可以将这句写成个 bat 文件然后双击运行
python status-psutil.py
```

> cmd 在快速编辑模式下运行命令时, 若用户鼠标点击到窗口区域可能会引起程序阻塞, 可以将其点掉
>
> ![image-20220928100730680](http://cdn.ayusummer233.top/img/202209281007350.png)
>
> > 快速编辑模式是一种很便捷的操作方式：左键选中，右键复制以及右键从剪贴板粘贴内容等  
> > 如果鼠标选中控制台界面上的内容，控制台就被阻塞了  
> > 在Windows Server 2012 及Windowns 8以上，控制台窗口的程序默认是打开“快速编辑模式”的开关的。
>

---

## 窗口工具

### Zellij

> [Zellij](https://zellij.dev/)

#### 安装

> [Linux Ubuntu添加环境变量_FarryNiu的博客-CSDN博客_ubuntu 添加环境变量](https://blog.csdn.net/qq_43474959/article/details/115028848)
>
> [Installation - Zellij User Guide](https://zellij.dev/documentation/installation.html)

先在 [Zellij](https://zellij.dev/) 下载好压缩包, 然后传到 Linux 文件系统中

> 位置选定在自己想要安装 zellij 位置

解压:

```shell
tar -xvf zellij-x86_64-unknown-linux-musl.tar.gz
```

![](http://cdn.ayusummer233.top/img/202205041947326.png)

添加执行权限:

```shell
chmod +x zellij
```

运行 `zellij`:

```shell
./zellij
```

将 `zellij` 所在目录添加到 `PATH` 变量中以在任何地方使用 `zellij`:

打开 `/root/.bashrc` 在末尾加上如下内容:

```sh
export PATH="/home/ubuntu/zellij:$PATH"
```

> 若已经有了其他的环境变量, 请使用 `:` 将此条拼接在前面
>
> ![image-20220824141913053](http://cdn.ayusummer233.top/img/202208241419154.png)

然后:

```shell
source ~/.bashrc
```

然后就可以在任意位置使用 `zellij` 命令来启用 `zellij` 了

---

#### 使用

新建一个`session`

```shell
zellij
```

新建一个 `Tab`: `ctrl + t, n`

重命名 `Tab`: `ctrl + t, r`

新建一个 `pane`: `ctrl + p, n`

重命名 `pane`: `Ctrl + p, c`

detach session: `ctrl + o, d`

关闭 session: `Ctrl + q`

界面底部有提示, 很友好:

![image-20220504210749149](http://cdn.ayusummer233.top/img/202205042107266.png)

显示 session 列表: `zellij list-sessions` 或者 `zellij ls`

![image-20220504210932759](http://cdn.ayusummer233.top/img/202205042109817.png)

返回某个 session: `zellij attach xxx` 或者 `zellij a xxx`

---

### Screen命令

Linux screen命令用于多重视窗管理程序。

screen为多重视窗管理程序。此处所谓的视窗，是指一个全屏幕的文字模式画面。通常只有在使用telnet登入主机或是使用老式的终端机时，才有可能用到screen程序。

#### 语法

```
screen [-AmRvx -ls -wipe][-d <作业名称>][-h <行数>][-r <作业名称>][-s <shell>][-S <作业名称>]
```

**参数说明**：

- `-A` 　将所有的视窗都调整为目前终端机的大小。
- `-d<作业名称>` 　将指定的screen作业离线。
- `-h<行数>` 　指定视窗的缓冲区行数。
- `-m` 　即使目前已在作业中的screen作业，仍强制建立新的screen作业。
- `-r<作业名称>` ：　恢复离线的screen作业。
- `-R` 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。
- `-s<shell>    <视窗名>` 　：指定建立新视窗时，所要执行的shell。
- `-S<作业名称>` 　:指定screen作业的名称。
- `-v` 　显示版本信息。
- `-x` 　恢复之前离线的screen作业。
- `-ls或--list` 　显示目前所有的screen作业。
- `-wipe` 　检查目前所有的screen作业，并删除已经无法使用的screen作业。

在 screen 终端 下 按下 `Ctrl+a d` 键  可以离开 screen 作业

---

## 软件

### Firefox

> [在 Linux 中安装 Firefox | Firefox 帮助 (mozilla.org)](https://support.mozilla.org/zh-CN/kb/linux-firefox#w_cong-fa-xing-ban-ti-gong-de-bao-an-zhuang-tui-jian)
>
> ---

1. 从 [Firefox 下载页面](https://www.mozilla.org/firefox/linux/?utm_medium=referral&utm_source=support.mozilla.org) 并点击 {button立即下载} 按钮。

2. 打开一个**终端**，转到下载 Firefox 的目录，比如

- `cd ~/Downloads`

3. 将下载文件的内容解压缩：

- `tar xjf firefox-\*.tar.bz2`

以下命令必须以 root 身份执行，或以 `sudo` 开头。

4. 将解压的 Firefox 目录移到 */opt*:

- `mv firefox /opt`

5. 创建一个指向 Firefox 可执行文件的 symlink:

- `ln -s /opt/firefox/firefox /usr/local/bin/firefox`

6. 下载一个 desktop 文件：

- `wget https://ghproxy.com/https://raw.githubusercontent.com/mozilla/sumo-kb/main/install-firefox-linux/firefox.desktop -P /usr/local/share/applications`

如果，没有安装 `wget`，那么你可以右击以上链接，打开弹出菜单并选择 另存为。下载好文件之后，把它放到 */usr/local/share/applications*。

你可以打开 [排障信息](https://support.mozilla.org/zh-CN/kb/使用故障排除信息页面来帮助解决Firefox的问题) 页面来验证安装是否成功。在 *应用基础* 部分，Application Binary 应该是 `/opt/firefox/firefox-bin`。

---

### 微信

> [Ubuntu下如何使用微信 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/413646220)
>
> [Ubuntu安装微信，三步到位_辞与不羡的博客-CSDN博客_ubuntu安装微信](https://blog.csdn.net/m0_50502579/article/details/126096484)
>
> ---

安装 kylin.wine 封装版的微信

与deepin一样，ubuntukylin（优麒麟）系统也第三方封装的ubuntu。

```bash
# 下载Wine环境包：
wget http://archive.ubuntukylin.com/software/pool/partner/ukylin-wine_70.6.3.25_amd64.deb 
# 下载微信（wine）包：
wget http://archive.ubuntukylin.com/software/pool/partner/ukylin-wechat_3.0.0_amd64.deb 
# 安装
sudo apt-get install -f -y ./ukylin-wine_70.6.3.25_amd64.deb
sudo apt-get install -f -y ./ukylin-wechat_3.0.0_amd64.deb
```

然后就可以在应用程序页面最后看到微信的图标了

---

## Ubuntu 安装邮件服务器(TODO - 校验有问题且暂时不打算用, 已搁置)

> [Ubuntu安装邮件服务器 - 简书 (jianshu.com)](https://www.jianshu.com/p/f438aa21069e)
>
> [The Postfix Home Page](http://www.postfix.org/)
>
> [在Ubuntu 20.04上配置Postfix以使用Gmail SMTP-番茄网 (tomato.cm)](http://www.tomato.cm/1267.html)
>
> ---

Postifx 是  `Wietse Venema` 在 IBM 的\ GPL 协议之下开发的 `MTA`（邮件传输代理）软件。是 Wietse Venema 想要为使用最广泛的 sendmail 提供替代品的一个尝试, 是一个SMTP服务器