<!--
 * @Author: your name
 * @Date: 2021-01-22 00:42:58
 * @LastEditTime: 2021-07-05 20:21:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\DailyLife.md
-->
# 下载

---
## aria2
- 下载[aria2.exe]并将其移动至`C:\Windows\System32`文件夹
- 复制`aria2`下载命令
- 在本地你想下载到的位置，按住 `Shift` 右键点击空白处，选择在此打开命令行窗口(`Powershell`)
- 将刚才复制的命令粘贴（鼠标右键点击即可，不要按 ctrl-V）;回车，然后等待下载完成

---
## 超星相关

---
### 没有下载选项的 PDF
- [参考链接](https://www.zhihu.com/question/448827791/answer/1783365679)
- `F12` 找到 `objectid` 然后替换下面的 `[objectid]` 并打开链接   
  `https://mooc1-1.chaoxing.com/ananas/status/[objectid]?flag=normal`
- 打开之后是个响应页, 找到 `pdf` 字样, 后面跟着的就是直链

---
- 或者使用[这个插件](https://chrome.google.com/webstore/detail/%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E8%BE%85%E5%8A%A9%E6%8F%92%E4%BB%B6/kejppjboemkbampcomibgpenbmdpimol/related)

# 搜题目解析
- 油猴插件:`AC-baidu-重定向优化百度搜狗谷歌必应搜索`
  - ![](res_-daily-notes/img/DailyLife/拦截域名.png)
- 垃圾域名
```
ppkao.com
51xuexiaoyi.com
jiandati.com
cnitpm.com
shangxueba.cn
datiyi.cn
ysxqzs.cn
doc.xuehai.net
imdza.org.cn
shangxueba.com
zyszedu.com
ixueyi.com
bvchati.cn
kjfwxy.com
yc-qx.cn
hmyllh.com
jsgncl.org.cn
zhaokaoti.com
http://www.zslangqiao.com/
http://www.tfsenabo.com/
zuixu.com
educity.cn
xcsdbzx.com
nuchati.cn
xmkqhs.com
hzssc.org
http://ask.mzhishi.com/
nviv.cn
30596.cn
asklib.com
```

---
# SQLite
- [Windows下安装SQLite](https://blog.csdn.net/jason_cdd/article/details/111302337)


---
# 云盘

---
## OneDrive
- 多次同步,挂起,取消链接账户可能会导致 Explorer 左栏快捷访问中存在多个指向相同的 OneDrive 快捷访问  
  [删除OneDrive for Bussiness导航栏快捷方式_根号负一的博客-CSDN博客](https://blog.csdn.net/u014389786/article/details/54095019)


---
## E5
- [参考链接](https://www.bilibili.com/video/BV1B7411C7wb)
  
  ---
- E5开发者账号是E3账号的升级版,可免费续期并体验Office365的全部功能
- OD的单子账户容量最高15T,理论上可以注册25个子账户

----
### 申请流程
- 进入[微软开发者中心](https://developer.microsoft.com/zh-cn/)并进入Office子项  
  ![20210403092546](http:cdn.ayusummer233.top/img/20210403092546.png)
- 加入开发人员计划  
  ![20210403093501](http:cdn.ayusummer233.top/img/20210403093501.png)
  ![20210403093524](http:cdn.ayusummer233.top/img/20210403093524.png)
- 填写基本信息并进入下一步  
  - 国家选中国(否则国内连接服务器延迟可能会很高),企业随便填
  - ![20210403093832](http:cdn.ayusummer233.top/img/20210403093832.png)
  - 下一步的信息按照自己的实际情况填写即可
- 设置开发者订阅
  - 验证个人信息,密码,手机号
  - ![20210403094040](http:cdn.ayusummer233.top/img/20210403094040.png)
- 转到订阅进行进一步设置
  ![20210403094241](http:cdn.ayusummer233.top/img/20210403094241.png)
- 进入OD  
  ![20210403094714](http:cdn.ayusummer233.top/img/20210403094714.png)
- 进入[活跃用户界面](https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users)
  - ![20210403095449](http:cdn.ayusummer233.top/img/20210403095449.png)
  - 更改空间即可
  - ![20210403095727](http:cdn.ayusummer233.top/img/20210403095727.png)
- 每个E5账号可以注册25个子账号,除去管理员和一个空子账号有23个账号
  - 当子账号>5 && 每个子账号的OD容量只剩0.5T时可以向微软提交工单扩容到25T 

---
### 续期
- 理论上只需要调用Office365的API,可以部署OneIndex或者Cloudreve
- 绑定 Github 账号并保持活跃

---
#### OneIndex
- [参考视频](https://www.bilibili.com/video/BV1T64y1u7Z5)
> 自己懒得搭了(  配合本地OneDriveBusiness当同步分享盘了  
> ![20210403114429](http:cdn.ayusummer233.top/img/20210403114429.png)


---
## 将云盘挂载到本地(RaiDrive)
- 云盘支持
  - `Personal` : GoogleDrive, `OneDrive`, Dropbox, Box, MEGA, PCloud, YandexDisk, Mail.ru.Cloud, GooglePhotos
    
    > 基本都要挂代理,OneDrive看个人情况,我这边是无法直连的
  - `Business` : Google Shared drives, `OneDrive`, `DropBox`, `SharePoint`
  - `Enterprise` : AWS S3, Azure Storage, Google Cloud Storage, Naver Object Storage, `Alibaba Object Storage`, Wasabi Object Storage, IBM Object Storage
  - `NAS` : `WebDAV`, `SFTP`, `FTP`, `Nextcloud`, `Synology(群晖)`, `ASUSTOR(华硕)`, `QNAP(威联通)`, ipTIME
  
  ---
- 效果:
  - ![20210404202719](http:cdn.ayusummer233.top/img/20210404202719.png)
- 下载[RaiDrive](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EY5FYay5Go1En2aduguGoIsBErdJ8QCQT_r4BwxspAB7qw?e=VFsSSc)并安装到自定义位置后打卡软件,可以自行更新到最新版本(本就是官网有提供的free版)  
  ![20210404203117](http:cdn.ayusummer233.top/img/20210404203117.png)
> 如果安装的时候出现问题可以选择忽略,这样依然装好了,运行桌面上的快捷方式,在设置里面检查更新到最新版本安装的时候基本不会报错
> 也可以直接在[官网](https://www.raidrive.com/)下载(可能需要一些魔法)

---
- 安装完后点击工具栏中的`添加`按钮进行添加,点击确定后会弹出登录界面,按照你要挂载云盘的账号登录并授权即可  
  ![20210405192941](http:cdn.ayusummer233.top/img/20210405192941.png)
> 我这里用的是E5开发者订阅里的OneDrive Business,墙内是可以直连的,不用挂代理;


---
> - 最初找这个只是为了能让[PotPlayer](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EdWtKYYX0yRMrz5J8JLHEhMBRUPM_9xJu00VVpxWUCc_Uw?e=i8cZt2)能更方便地访问云盘中的视频资源从而在本地倍速播放云端的视频;
> ![20210405195251](http:cdn.ayusummer233.top/img/20210405195251.png)



---
## 微软商店中的iCloud
- 有点糟心,Microsoft Store里下载的iCloud只能装在系统盘,并且没有找到有效的方法能够将其移到非系统盘
> 后记: 建议放弃在非apple设备上使用iCloud  
> 有一说一,真的烂(  
> [删除win10 删除icloud后资源管理器icloud图标无法删除？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/393865503/answer/1307730087)

---
# Microsoft

---
## Edge

---
### 扩展
- 默认安装目录 : `C:\Users\用户名\AppData\Local\Microsoft\Edge\User Data\Default\Extensions`


----
# 学习工作生活小技能?

----
## 图片OCR->表格




----
# Game

## Steam

---
### steam工具箱
- [steam工具箱@rmbadmin](https://github.com/SteamTools-Team/SteamTools/releases/tag/1.1.4)
- 在`Releases`找最新的一次发行,下载第一个压缩文件,解压即可使用
- ![steam工具箱使用示意](https://images.gitee.com/uploads/images/2021/0302/095303_d61c768b_7703072.png "屏幕截图.png")
- 点加速后若提醒443端口被占用可以去找一下是什么进程占用了443端口
  - `Win+R`输入cmd并回车进入命令行界面输入`netstat -ano|findstr "443"`并回车  
    ![查看端口占用](https://images.gitee.com/uploads/images/2021/0302/101831_6b41b097_7703072.png "屏幕截图.png")
  - `tasklist |findstr "16280"`  
     ![输入图片说明](https://images.gitee.com/uploads/images/2021/0302/102101_420d69e1_7703072.png "屏幕截图.png")
     > 我这里已经成功运行了,所以这里是steam工具箱占用了443端口
     - 如果显示`vmware-hosted.exe`占用443端口那么打开VMWare  
       ![输入图片说明](https://images.gitee.com/uploads/images/2021/0302/102428_6dfb9294_7703072.png "屏幕截图.png")

---

# 服务器

---

## 腾讯云轻量

---

[云产品首单秒杀_云服务器秒杀_云数据库秒杀 - 腾讯云 (tencent.com)](https://cloud.tencent.com/act/new?from=14615)[PS: 2C4G轻量首年74]

---

### remote-SSH

先在控制台生成并绑定密钥(本地密钥妥善保管), 然后再重置 root 密码

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

> 腾讯云轻量的 ubuntu 默认禁用 root 用户名通过密码方式登录实例, 如需开启[请参考 Ubuntu 系统如何使用 root 用户登录实例？](https://cloud.tencent.com/document/product/1207/44569#ubuntu-.E7.B3.BB.E7.BB.9F.E5.A6.82.E4.BD.95.E4.BD.BF.E7.94.A8-root-.E7.94.A8.E6.88.B7.E7.99.BB.E5.BD.95.E5.AE.9E.E4.BE.8B.EF.BC.9F)
>
> CentOS 的话直接使用 root 和 密钥 的配置就可以自动登录到 root 账户

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
# WSL2

---
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
