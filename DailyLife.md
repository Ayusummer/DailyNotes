<!--
 * @Author: your name
 * @Date: 2021-01-22 00:42:58
 * @LastEditTime: 2021-07-05 20:21:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\DailyLife.md
-->
# 目录
- [目录](#目录)
- [Programming](#programming)
  - [行尾序列](#行尾序列)
- [下载](#下载)
  - [aria2](#aria2)
  - [超星相关](#超星相关)
    - [没有下载选项的 PDF](#没有下载选项的-pdf)
- [搜题目解析](#搜题目解析)
- [SQLite](#sqlite)
- [云盘](#云盘)
  - [OneDrive](#onedrive)
  - [E5](#e5)
    - [申请流程](#申请流程)
    - [续期](#续期)
      - [OneIndex](#oneindex)
  - [将云盘挂载到本地(RaiDrive)](#将云盘挂载到本地raidrive)
  - [微软商店中的iCloud](#微软商店中的icloud)
- [Microsoft](#microsoft)
  - [Edge](#edge)
    - [扩展](#扩展)
  - [Windows](#windows)
    - [内核隔离](#内核隔离)
      - [WSL2 DNS 服务异常](#wsl2-dns-服务异常)
- [学习工作生活小技能?](#学习工作生活小技能)
  - [图片OCR->表格](#图片ocr-表格)
- [Game](#game)
  - [Steam](#steam)
    - [steam工具箱](#steam工具箱)
  - [手游模拟器](#手游模拟器)
    - [蓝叠模拟器 5(支持 Hyper-V)](#蓝叠模拟器-5支持-hyper-v)


# Programming

## 行尾序列

- `LF` - 换行 - Unix/macOS(\n)
- `CR` 回车 - Classic MacOS(\r)
- `CRLF` 回车换行 - Windows(\r\n)

CLion 编辑代码保存时会自动替换行尾为当前行尾序列。

![20211221092252](http:cdn.ayusummer233.top/img/20211221092252.png)  
在 Windows 下使用 CLion, 使用回车换行作为行尾可以正常编译运行代码

![20211221092905](http:cdn.ayusummer233.top/img/20211221092905.png)  

![20211221092951](http:cdn.ayusummer233.top/img/20211221092951.png)

单独使用回车或换行作为行尾时会编译出错

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

---
## Windows

### 内核隔离

> [Windows 10中的核心隔离和内存完整性是什么？ | MOS86](https://mos86.com/95722.html)

![20211218173047-内核隔离警告](http:cdn.ayusummer233.top/img/20211218173047.png)

![20211218173109-不兼容驱动](http:cdn.ayusummer233.top/img/20211218173109.png)

![20211218180744-不兼容驱动详细信息](http:cdn.ayusummer233.top/img/20211218180744.png)

> 解决方案: [Windows 10 Core Isolation: Remove incompatible drivers - Administrator](https://administrator.pro/tutorial/windows-10-core-isolation-remove-incompatible-drivers-769558697.html)  
> [Core Isolation - Memory Integrity Not Turning On - Driver - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/all/core-isolation-memory-integrity-not-turning-on/d49ca385-77a8-4390-a4e1-b96224ba3fee?auth=1)  
> [PnPUtil 命令语法 - Windows drivers | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-hardware/drivers/devtest/pnputil-command-syntax)  
> [PnPUtil 示例 - Windows drivers | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-hardware/drivers/devtest/pnputil-examples)

mark 下上面每个不兼容驱动的 `发布名称`

管理员模式打开 `powershell`, 可以先查看下驱动列表

```bash
pnputil /enum-drivers
```

筛下不兼容驱动的相关信息

```bash
发布名称:     oem61.inf
原始名称:      ew_usbccgpfilter.inf
提供程序名称:      Huawei
类名:         USB
类 GUID:         {36fc9e60-c465-11cf-8056-444553540000}
驱动程序版本:     05/18/2016 1.0.9.0
签名者姓名:        Microsoft Windows Hardware Compatibility Publisher

发布名称:     oem91.inf
原始名称:      hw_cdcacm.inf
提供程序名称:      HUAWEI Technologies CO.,LTD
类名:         Ports
类 GUID:         {4d36e978-e325-11ce-bfc1-08002be10318}
驱动程序版本:     05/18/2016 1.0.26.0
签名者姓名:        Microsoft Windows Hardware Compatibility Publisher

发布名称:     oem62.inf
原始名称:      hw_quser.inf
提供程序名称:      Huawei Incorporated
类名:         Ports
类 GUID:         {4d36e978-e325-11ce-bfc1-08002be10318}
驱动程序版本:     11/28/2016 2.0.6.725
签名者姓名:        Microsoft Windows Hardware Compatibility Publisher

发布名称:     oem34.inf
原始名称:      hw_usbdev.inf
提供程序名称:      Huawei Incorporated
类名:         Ports
类 GUID:         {4d36e978-e325-11ce-bfc1-08002be10318}
驱动程序版本:     04/20/2012 1.3.0.0
签名者姓名:        Microsoft Windows Hardware Compatibility Publisher

发布名称:     oem116.inf
原始名称:      hw_cdcmdm.inf
提供程序名称:      HUAWEI Technologies Co.,LTD
类名:         Modem
类 GUID:         {4d36e96d-e325-11ce-bfc1-08002be10318}
驱动程序版本:     11/28/2016 1.0.26.0
签名者姓名:        Microsoft Windows Hardware Compatibility Publisher

发布名称:     oem110.inf
原始名称:      hw_qumdm.inf
提供程序名称:      Huawei Incorporated
类名:         Modem
类 GUID:         {4d36e96d-e325-11ce-bfc1-08002be10318}
驱动程序版本:     05/18/2016 2.0.6.725
签名者姓名:        Microsoft Windows Hardware Compatibility Publisher
```


执行如下命令删除相应驱动程序包

```bash
pnputil /delete-driver oem61.inf
pnputil /delete-driver oem91.inf
pnputil /delete-driver oem62.inf
pnputil /delete-driver oem34.inf
pnputil /delete-driver oem116.inf
pnputil /delete-driver oem110.inf
```

![20211218181950-删除不兼容驱动](http:cdn.ayusummer233.top/img/20211218181950.png)

重新扫描

![20211218182035](http:cdn.ayusummer233.top/img/20211218182035.png)

![20211218182146](http:cdn.ayusummer233.top/img/20211218182146.png)

这两个驱动实在找不到(, 驱动检测里没有, `C:\Windows\System32\DriverStore\FileRepository` 也没有

> 解决方案: [如何在卸载游戏后完全删除TP？ - (qq.com)](https://dnf.gamebbs.qq.com/thread-1362897-1-1.html)

打开 `C:\Windows\System32\drivers` 可以找到 `TesMon.sys`

![20211218182922-TesMon.sys](http:cdn.ayusummer233.top/img/20211218182922.png)

删除 `TesMon.sys` 然后重新重新扫描

![20211218190522-UniFairySys.sys](http:cdn.ayusummer233.top/img/20211218190522.png)

![20211218192308-UniFairySys.sys-搜索结果](http:cdn.ayusummer233.top/img/20211218192308.png)

![20211218192422-UniFairySys.sys-属性](http:cdn.ayusummer233.top/img/20211218192422.png)

![20211218192556-UniFairySys.sys-数字签名](http:cdn.ayusummer233.top/img/20211218192556.png)

![20211218192739-UniFairySys.sys-位置](http:cdn.ayusummer233.top/img/20211218192739.png)

在 `C:\Windows\System32` 目录下, `everything` 检索结果中的另一个也出现在了其属性中的 "原始名称"字段中, 且检索资料时也有说这个文件导致崩崩崩游戏蓝屏之类, 所以将此文件剪切到其他目录再重新扫描试试, 后面如果有关于此文件的报错再将其放回去

![20211218193109](http:cdn.ayusummer233.top/img/20211218193109.png)

> [Windows 10中的核心隔离和内存完整性是什么？ | MOS86](https://mos86.com/95722.html)  
> 查阅资料中发现这个功能可能会导致虚拟机运行异常, 不过遇见这种问题时再把功能关掉就是了(

重启计算机, 检查下是否有虚拟机运行异常

> ![20211218194344](http:cdn.ayusummer233.top/img/20211218194344.png)  
> 基于 Hyper-V 的 BlueStacks 模拟器运行正常  
> **WSL2 异常** 

---
#### WSL2 DNS 服务异常

无法正确解析域名, 直接 ping ip 可以 ping 通, 排查了一圈发现主网也 ping 不通

> 解决方案: [WSL 2 自定义安装目录和网络配置_daihaoxin的专栏-CSDN博客_wsl2目录](https://blog.csdn.net/daihaoxin/article/details/115978662)

![20211218213224](http:cdn.ayusummer233.top/img/20211218213224.png)
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
> TODO: 计网的复习该提上日程了(

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
## 手游模拟器

### 蓝叠模拟器 5(支持 Hyper-V)

[如何在 Windows 上為 BlueStacks 5 開啟 Hyper-V](https://support.bluestacks.com/hc/zh-tw/articles/4412148150157-%E5%A6%82%E4%BD%95%E5%9C%A8-Windows-%E4%B8%8A%E7%82%BA-BlueStacks-5-%E9%96%8B%E5%95%9F-Hyper-V)

需要注意的是模拟器启动程序务必使用管理员模式启动

![20211208145623](http:cdn.ayusummer233.top/img/20211208145623.png)
> [如何從您的電腦上完全移除BlueStacks 5](https://support.bluestacks.com/hc/zh-tw/articles/360057724751)  
> [Bluestacks 5 Cannot Start BlueStacks on Win11 (any 64Bit instance version)](https://www.reddit.com/r/BlueStacks/comments/r7hvkw/bluestacks_5_cannot_start_bluestacks_on_win11_any/)

