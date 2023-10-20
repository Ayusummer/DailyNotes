# 日常

- [日常](#日常)
  - [Programming](#programming)
    - [行尾序列](#行尾序列)
    - [交流社区](#交流社区)
      - [HackerTalk](#hackertalk)
  - [证书](#证书)
    - [软考证书](#软考证书)
    - [计算机程序设计能力考试(PAT)](#计算机程序设计能力考试pat)
    - [项目管理职业资格认证(PMI)](#项目管理职业资格认证pmi)
    - [华为认证](#华为认证)
  - [下载](#下载)
    - [IDM](#idm)
    - [aria2](#aria2)
    - [超星相关](#超星相关)
      - [没有下载选项的 PDF](#没有下载选项的-pdf)
  - [搜题目解析](#搜题目解析)
  - [云盘](#云盘)
    - [OneDrive](#onedrive)
    - [E5](#e5)
      - [申请流程](#申请流程)
      - [续期](#续期)
          - [OneIndex](#oneindex)
      - [同步目录空格路径解决](#同步目录空格路径解决)
    - [将云盘挂载到本地(RaiDrive)](#将云盘挂载到本地raidrive)
    - [微软商店中的iCloud](#微软商店中的icloud)
    - [Cloudreve](#cloudreve)
      - [WebDav 使用](#webdav-使用)
  - [Microsoft](#microsoft)
    - [Edge](#edge)
      - [扩展](#扩展)
    - [Windows](#windows)
      - [内核隔离](#内核隔离)
          - [WSL2 DNS 服务异常](#wsl2-dns-服务异常)
      - [针对某一软件关闭用户账户控制](#针对某一软件关闭用户账户控制)
      - [命令行重启文件资源管理器](#命令行重启文件资源管理器)
  - [图片OCR-\>表格](#图片ocr-表格)
  - [英语学习](#英语学习)
  - [clash](#clash)
  - [桌面显示器屏幕使用体验](#桌面显示器屏幕使用体验)
    - [Win11 设置合盖不休眠](#win11-设置合盖不休眠)
  - [Game](#game)
    - [Steam](#steam)
      - [steam工具箱](#steam工具箱)
    - [手游模拟器](#手游模拟器)
      - [蓝叠模拟器 5(支持 Hyper-V)](#蓝叠模拟器-5支持-hyper-v)
  - [PowerToys](#powertoys)
    - [自定义窗口布局](#自定义窗口布局)
    - [调整图像大小](#调整图像大小)
    - [始终置项](#始终置项)
    - [文件资源管理器加载项](#文件资源管理器加载项)
    - [鼠标实用工具](#鼠标实用工具)
  - [字体](#字体)
    - [中易宋体和微软雅黑](#中易宋体和微软雅黑)
  - [活动监控](#活动监控)
  - [零散报错](#零散报错)
    - [Win11 下 QQ 调起文件资源管理器 C:\\WINDOWS\\SYSTEM32\\ntdll.dll 报错](#win11-下-qq-调起文件资源管理器-cwindowssystem32ntdlldll-报错)


## Programming

### 行尾序列

- `LF` - 换行 - Unix/macOS(\n)
- `CR` 回车 - Classic MacOS(\r)
- `CRLF` 回车换行 - Windows(\r\n)

CLion 编辑代码保存时会自动替换行尾为当前行尾序列。

![20211221092252](http://cdn.ayusummer233.top/img/20211221092252.png)  
在 Windows 下使用 CLion, 使用回车换行作为行尾可以正常编译运行代码

![20211221092905](http://cdn.ayusummer233.top/img/20211221092905.png)  

![20211221092951](http://cdn.ayusummer233.top/img/20211221092951.png)

单独使用回车或换行作为行尾时会编译出错

---

### 交流社区

#### HackerTalk

> [黑客说 - 技术驱动优质交流 (hackertalk.net)](https://hackertalk.net/)

作者初衷是打造一款程序员社交平台, 界面很对味, 使用体验不错, 就是略显冷清了

![image-20220517213112403](http://cdn.ayusummer233.top/img/202205172131575.png)



---
## 路由器

> [公共DNS推荐及dns测速 - fogwu - 博客园 (cnblogs.com)](https://www.cnblogs.com/fogwang/p/10735487.html)

小米路由器 DNS DHCP 后使用 EDGE 浏览器似乎经常显示 `无法访问 Internet`, 具体原因不清楚

手动将 DNS 改为

```
首选：119.29.29.29
备选：182.254.116.116
```

后新建页面后似乎可以恢复正常

> 上述 DNS 为 DNSPod的 Public DNS+, 是目前国内第一家支持ECS的公共DNS，是DNSPod推出的公共域名解析服务，可以为全网用户提供域名的公共递归解析服务

---

## 小米

### 小爱音箱Pro连不上电脑

> [大佬们，小爱音箱pro蓝牙电脑搜索不到【小爱同学吧】_百度贴吧 (baidu.com)](https://tieba.baidu.com/p/8487114265#:~:text=检查电脑的蓝牙设置，确保蓝牙开关已经打开，并且在“设备管理器”中查看是否已经启用了蓝牙设备。 3. 尝试在电脑端重新连接小爱音箱 Pro，可以尝试在蓝牙设备列表中选择小爱音箱,Pro，并输入配对码进行配对。 4. 尝试在手机上连接小爱音箱 Pro，然后尝试在电脑上连接同一个网络下的其他设备，以判断是否是音箱本身的问题。)

在小爱音箱APP中打开蓝牙自发现后手机都可以搜到小爱音箱的蓝牙, 唯独电脑怎么重启蓝牙都搜不到, 最后在贴吧看到一个老哥给出了正解, 将 Win 的蓝牙设备发现模式改为 `高级` 就能搜到小爱音箱Pro的蓝牙了

![image-20231020225819202](http://cdn.ayusummer233.top/DailyNotes/202310202258299.png)

---

## 证书

> [从计算机专业学生到程序员大佬，都一定受用的计算机行业高含金量证书盘点！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZR4y1g7tD?spm_id_from=333.851.b_7265636f6d6d656e64.1)
>
> [计算机行业证书--哪些值得考？ | ProcessOn免费在线作图,在线流程图,在线思维导图](https://www.processon.com/view/link/61c584f963768939a3694478#map 作者：王大飞op https://www.bilibili.com/read/cv14636458?spm_id_from=333.788.b_636f6d6d656e74.7 出处：bilibili)
>
> 建议是能力足够了随便去刷刷, 有公司报销可以考虑考考(

---

### 软考证书

> [中国计算机技术职业资格网](https://www.ruankao.org.cn/)

工业和信息化部承办的, 目前国企事业单位中含金量认可度最高的计算机行业证书

![20220118105139](http://cdn.ayusummer233.top/img/20220118105139.png)

> 一般只有中级以上才有用, 在企事业单位工作或者项目与其有对接那么考个软考证书帮助比较大  
> 打算在一线城市发展积分落户的话也有计分

---
### 计算机程序设计能力考试(PAT)

> [PAT 计算机程序设计能力测试 (patest.cn)](https://www.patest.cn/)


浙大发起承办, 乙,甲,顶级有用, 主要考察算法能力, 行业认可度比较高


---
### 项目管理职业资格认证(PMI)

> [首页-项目管理职业资格认证 (chinapmp.cn)](http://exam.chinapmp.cn/)

PMI 所有证书

|  缩写   |     名称     |
| :-----: | :----------: |
|   PMP   |   项目管理   |
| PMI-ACP | 敏捷项目管理 |
|  PfMP   | 项目组合管理 |
|  PgMP   |  项目集管理  |
|  CAPM   | 助理项目管理 |
| PMI-RMP | 项目风险管理 |
| PMI-SP  |   进度管理   |

比较推荐的是: PMP(项目管理) 和 PMI-ACP(敏捷项目管理)

需要报培训班计学时才能考且有相关年龄限制(费用一般 2K ~ 7K 不等)

|       学历       |  年龄限制  |
| :--------------: | :--------: |
|     不限学历     | 年满 26 岁 |
|    有学士学位    | 年满 24 岁 |
| 有硕士及以上学位 |  不限年龄  |

想转管理岗可以考虑考个这个证书

不过证书有年限, 期间需要积累 PDU 并加钱才能续期

- 通过PMI制定培训机构参加PMP培训将会获得35个PDU, PMP考试通过后35个PDU直接转换。
- 本人从事PMP工作,每年自动获得5个PDU，3年时间即可获得15个PDU。
- 从事项目管理工作，每年自学可获得10个/年。
- 公司内部会议，每小时获得一个PDU(保留会议纪要)。
- 实际工作中使用MSP软件,同时高博是此软件的合作伙伴，提供MSP培训，可积累16个PDU。
- 参加PMI活动(PMI组织活动基本免费，即使收费也很低)。
- 撰写PMP文章，一般可获得2-3个PDU。
- 志愿者活动(如给学员上课)可获得3-5个PDU。

---

### 华为认证

> [华为认证 (huawei.com)](https://cn.e-learning.huawei.com/#/huaweiTenant/Certification)

得加钱(


---
## 下载

---

### FDM

#### 防病毒配置

> [关于IDM调用火绒的设置 - 火绒安全软件 - 火绒安全软件 (huorong.cn)](https://bbs.huorong.cn/thread-60060-1-1.html)

以火绒为例:

![image-20230731151418988](http://cdn.ayusummer233.top/DailyNotes/202307311514473.png)

注意这里的 `%path%` 指的是下载文件的保存路径而非上面填写的火绒的路径

但是实际上下载后会调起火绒UI并查杀该文件, 用户手动关闭火绒UI(点右上角的X关闭按钮)后 FDM 上的 `正在检测病毒` 才会停止, 总体来说体验不是很流畅, 因此后面不打算配置了

不过也可以手动检测:

![image-20230731151658502](http://cdn.ayusummer233.top/DailyNotes/202307311517478.png)

![image-20230731151708991](http://cdn.ayusummer233.top/DailyNotes/202307311517391.png)

![image-20230731151720438](http://cdn.ayusummer233.top/DailyNotes/202307311517245.png)

手动关闭火绒UI后

![image-20230731151925117](http://cdn.ayusummer233.top/DailyNotes/202307311519586.png)

---

### IDM

> [解决新版 Edge 浏览器无法使用 IDM 的问题_Xavier Jiezou的博客-CSDN博客_edge idm](https://blog.csdn.net/qq_42951560/article/details/120678847)

在 Edge 上安装 IDM 扩展

打开 `IDM 安装目录` 找到 `IDMGCExt.crx`

![image-20220416092234213](http://cdn.ayusummer233.top/img/202204160922375.png)

在 Edge 扩展中打开 `开发人员模式`:

![image-20220416092329182](http://cdn.ayusummer233.top/img/202204160923294.png)

将 `IDMGCExt.crx` 拖动到 Edge 扩展界面即可安装扩展

---
### aria2
- 下载[aria2.exe]并将其移动至`C:\Windows\System32`文件夹
- 复制`aria2`下载命令
- 在本地你想下载到的位置，按住 `Shift` 右键点击空白处，选择在此打开命令行窗口(`Powershell`)
- 将刚才复制的命令粘贴（鼠标右键点击即可，不要按 ctrl-V）;回车，然后等待下载完成

---
### 超星相关

---
#### 没有下载选项的 PDF
- [参考链接](https://www.zhihu.com/question/448827791/answer/1783365679)
- `F12` 找到 `objectid` 然后替换下面的 `[objectid]` 并打开链接   
  `https://mooc1-1.chaoxing.com/ananas/status/[objectid]?flag=normal`
- 打开之后是个响应页, 找到 `pdf` 字样, 后面跟着的就是直链

---
- 或者使用[这个插件](https://chrome.google.com/webstore/detail/%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E8%BE%85%E5%8A%A9%E6%8F%92%E4%BB%B6/kejppjboemkbampcomibgpenbmdpimol/related)

## 搜题目解析
- 油猴插件:`AC-baidu-重定向优化百度搜狗谷歌必应搜索`
  <!-- - ![](res_-daily-notes/img/DailyLife/拦截域名.png) -->
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
## 云盘

---
### OneDrive
- 多次同步,挂起,取消链接账户可能会导致 Explorer 左栏快捷访问中存在多个指向相同的 OneDrive 快捷访问  
  [删除OneDrive for Bussiness导航栏快捷方式_根号负一的博客-CSDN博客](https://blog.csdn.net/u014389786/article/details/54095019)


---
### E5
- [参考链接](https://www.bilibili.com/video/BV1B7411C7wb)
  
  ---
- E5开发者账号是E3账号的升级版,可免费续期并体验Office365的全部功能
- OD的单子账户容量最高15T,理论上可以注册25个子账户

----
#### 申请流程
- 进入[微软开发者中心](https://developer.microsoft.com/zh-cn/)并进入Office子项  
  ![20210403092546](http://cdn.ayusummer233.top/img/20210403092546.png)
- 加入开发人员计划  
  ![20210403093501](http://cdn.ayusummer233.top/img/20210403093501.png)
  ![20210403093524](http://cdn.ayusummer233.top/img/20210403093524.png)
- 填写基本信息并进入下一步  
  - 国家选中国(否则国内连接服务器延迟可能会很高),企业随便填
  - ![20210403093832](http://cdn.ayusummer233.top/img/20210403093832.png)
  - 下一步的信息按照自己的实际情况填写即可
- 设置开发者订阅
  - 验证个人信息,密码,手机号
  - ![20210403094040](http://cdn.ayusummer233.top/img/20210403094040.png)
- 转到订阅进行进一步设置
  ![20210403094241](http://cdn.ayusummer233.top/img/20210403094241.png)
- 进入OD  
  ![20210403094714](http://cdn.ayusummer233.top/img/20210403094714.png)
- 进入[活跃用户界面](https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users)
  - ![20210403095449](http://cdn.ayusummer233.top/img/20210403095449.png)
  - 更改空间即可
  - ![20210403095727](http://cdn.ayusummer233.top/img/20210403095727.png)
- 每个E5账号可以注册25个子账号,除去管理员和一个空子账号有23个账号
  - 当子账号>5 && 每个子账号的OD容量只剩0.5T时可以向微软提交工单扩容到25T 

---
#### 续期
- 理论上只需要调用Office365的API,可以部署OneIndex或者Cloudreve
- 绑定 Github 账号并保持活跃

---
###### OneIndex
- [参考视频](https://www.bilibili.com/video/BV1T64y1u7Z5)
> 自己懒得搭了(  配合本地OneDriveBusiness当同步分享盘了  
> ![20210403114429](http://cdn.ayusummer233.top/img/20210403114429.png)

---
#### 同步目录空格路径解决

默认情况下 OneDrive 的同步目录根目录所在文件夹名称是 `OneDrive - 组织名称` 的形式, 中间是有两个空格的, 这可太不优雅了, 可以通过创建符号链接的形式来解决这个问题  
管理员模式打开 `CMD` 执行如下指令:

```shell
# 创建符号链接 E:\OneDriveE5\Pro 指向 E:\OneDriveE5\mixon\OneDrive - ayusummer
mklink /J OneDriveE5\mix "E:\OneDriveE5\mixon\OneDrive - ayusummer"
```
- `OneDriveE5\mix` 目录在执行完命令后会自动创建

---
### 将云盘挂载到本地(RaiDrive)
- 云盘支持
  - `Personal` : GoogleDrive, `OneDrive`, Dropbox, Box, MEGA, PCloud, YandexDisk, Mail.ru.Cloud, GooglePhotos
    
    > 基本都要挂代理,OneDrive看个人情况,我这边是无法直连的
  - `Business` : Google Shared drives, `OneDrive`, `DropBox`, `SharePoint`
  - `Enterprise` : AWS S3, Azure Storage, Google Cloud Storage, Naver Object Storage, `Alibaba Object Storage`, Wasabi Object Storage, IBM Object Storage
  - `NAS` : `WebDAV`, `SFTP`, `FTP`, `Nextcloud`, `Synology(群晖)`, `ASUSTOR(华硕)`, `QNAP(威联通)`, ipTIME
  
  ---
- 效果:
  
  - ![20210404202719](http://cdn.ayusummer233.top/img/20210404202719.png)
- 下载[RaiDrive](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EY5FYay5Go1En2aduguGoIsBErdJ8QCQT_r4BwxspAB7qw?e=VFsSSc)并安装到自定义位置后打开软件,可以自行更新到最新版本(本就是官网有提供的free版)  
  ![20210404203117](http://cdn.ayusummer233.top/img/20210404203117.png)
> 如果安装的时候出现问题可以选择忽略,这样依然装好了,运行桌面上的快捷方式,在设置里面检查更新到最新版本安装的时候基本不会报错
> 也可以直接在[官网](https://www.raidrive.com/)下载(可能需要一些魔法)

---
- 安装完后点击工具栏中的`添加`按钮进行添加,点击确定后会弹出登录界面,按照你要挂载云盘的账号登录并授权即可  
  ![20210405192941](http://cdn.ayusummer233.top/img/20210405192941.png)
> 我这里用的是E5开发者订阅里的OneDrive Business,墙内是可以直连的,不用挂代理;


---
> - 最初找这个只是为了能让[PotPlayer](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EdWtKYYX0yRMrz5J8JLHEhMBRUPM_9xJu00VVpxWUCc_Uw?e=i8cZt2)能更方便地访问云盘中的视频资源从而在本地倍速播放云端的视频;
> ![20210405195251](http://cdn.ayusummer233.top/img/20210405195251.png)



---
### 微软商店中的iCloud
- 有点糟心,Microsoft Store里下载的iCloud只能装在系统盘,并且没有找到有效的方法能够将其移到非系统盘
> 后记: 建议放弃在非apple设备上使用iCloud  
> 有一说一,真的烂(  
> [删除win10 删除icloud后资源管理器icloud图标无法删除？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/393865503/answer/1307730087)

---
### Cloudreve

> [快速开始 - Cloudreve](https://docs.cloudreve.org/getting-started/install)

---

#### WebDav 使用

可用于双向同步云盘和本地文件, 需要使用第三方 Webdav 客户端 Raidrive

首先需要在浏览器 cloudreve 页面的 WebDAV 选项卡添加账户, 并记住==提示中的==地址和登录名以及==新建账号的密码==

![image-20220829110858019](http://cdn.ayusummer233.top/img/202208291108129.png)

然后打开 Raidrive 配置下 WebDAV 挂载

![image-20220829110810634](http://cdn.ayusummer233.top/img/202208291108723.png)

然后就可以在文件资源管理器中看到了

![image-20220829111044719](http://cdn.ayusummer233.top/img/202208291110794.png)

---

### Nextcloud

#### 服务器搭建

> Docker 搭建可以参考: [nextcloud/all-in-one: Nextcloud AIO stands for Nextcloud All-in-One and provides easy deployment and maintenance with most features included in this one Nextcloud instance. --- nextcloud/all-in-one：Nextcloud AIO 代表 Nextcloud All-in-One，通过该 Nextcloud 实例中包含的大多数功能提供轻松的部署和维护。 (github.com)](https://github.com/nextcloud/all-in-one#nextcloud-all-in-one)

ubuntu: 

```bash
sudo snap install nextcloud
```

安装完成后访问 80 端口配置管理员账密即可使用

---

#### 配置

当有多张网卡时, 似乎默认情况下只允许了第一张网卡访问 web 页面, 可以手动到 `/var/snap/nextcloud/current/nextcloud/config/config.php` 配置 `trusted_domains` 以允许通过其他网卡访问web

```php
  'trusted_domains' => 
  array (
    0 => '10.10.10.21',
    1 => '192.168.1.21',
  ),
```

---

## Microsoft

---
### Edge

---
#### 扩展
- 默认安装目录 : `C:\Users\用户名\AppData\Local\Microsoft\Edge\User Data\Default\Extensions`

---
### Windows

#### 内核隔离

> [Windows 10中的核心隔离和内存完整性是什么？ | MOS86](https://mos86.com/95722.html)

![20211218173047-内核隔离警告](http://cdn.ayusummer233.top/img/20211218173047.png)

![20211218173109-不兼容驱动](http://cdn.ayusummer233.top/img/20211218173109.png)

![20211218180744-不兼容驱动详细信息](http://cdn.ayusummer233.top/img/20211218180744.png)

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

![20211218181950-删除不兼容驱动](http://cdn.ayusummer233.top/img/20211218181950.png)

重新扫描

![20211218182035](http://cdn.ayusummer233.top/img/20211218182035.png)

![20211218182146](http://cdn.ayusummer233.top/img/20211218182146.png)

这两个驱动实在找不到(, 驱动检测里没有, `C:\Windows\System32\DriverStore\FileRepository` 也没有

> 解决方案: [如何在卸载游戏后完全删除TP？ - (qq.com)](https://dnf.gamebbs.qq.com/thread-1362897-1-1.html)

打开 `C:\Windows\System32\drivers` 可以找到 `TesMon.sys`

![20211218182922-TesMon.sys](http://cdn.ayusummer233.top/img/20211218182922.png)

删除 `TesMon.sys` 然后重新重新扫描

![20211218190522-UniFairySys.sys](http://cdn.ayusummer233.top/img/20211218190522.png)

![20211218192308-UniFairySys.sys-搜索结果](http://cdn.ayusummer233.top/img/20211218192308.png)

![20211218192422-UniFairySys.sys-属性](http://cdn.ayusummer233.top/img/20211218192422.png)

![20211218192556-UniFairySys.sys-数字签名](http://cdn.ayusummer233.top/img/20211218192556.png)

![20211218192739-UniFairySys.sys-位置](http://cdn.ayusummer233.top/img/20211218192739.png)

在 `C:\Windows\System32` 目录下, `everything` 检索结果中的另一个也出现在了其属性中的 "原始名称"字段中, 且检索资料时也有说这个文件导致崩崩崩游戏蓝屏之类, 所以将此文件剪切到其他目录再重新扫描试试, 后面如果有关于此文件的报错再将其放回去

![20211218193109](http://cdn.ayusummer233.top/img/20211218193109.png)

> [Windows 10中的核心隔离和内存完整性是什么？ | MOS86](https://mos86.com/95722.html)  
> 查阅资料中发现这个功能可能会导致虚拟机运行异常, 不过遇见这种问题时再把功能关掉就是了(

重启计算机, 检查下是否有虚拟机运行异常

> ![20211218194344](http://cdn.ayusummer233.top/img/20211218194344.png)  
> 基于 Hyper-V 的 BlueStacks 模拟器运行正常  
> **WSL2 异常** 

---
###### WSL2 DNS 服务异常

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

#### 针对某一软件关闭用户账户控制

> [如何对某一程序取消用户账户控制_百度知道 (baidu.com)](https://zhidao.baidu.com/question/295265277.html)

当设置了应用以管理员身份运行时, 在运行应用时会弹出一个用户账户控制的弹窗, `你要允许此应用对你的设备进行更改吗?`, 用户只有点击 `是` 之后才能正常运行应用, 对于一个已经设置了以管理员身份运行的应用要跳过此步的话可以做如下操作

打开注册表编辑器在 `HKEY_CURRENT_USERS\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers` 下新建值

- 值的名称是程序的绝对路径
- 值数据时 `RunAsInvoker`

![image-20221101233113947](http://cdn.ayusummer233.top/img/202211012331979.png)

---

#### 命令行重启文件资源管理器

Windows 的任务栏和文件资源管理器(Explorer) 是一体的, 因此如果出现了任务栏莫名卡死或者消失的问题时可以在任务管理器中找到文件资源管理器并重启

有时候可能在任务管理器中没能找到文件资源管理器, 或者查找比较困难, 那么此时也可以使用命令行或者 powershell 来终止并启动 explorer

```powershell
# 强制终止 explorer
taskkill /IM explorer.exe /F
# 启动 explorer
explorer
```

---

## 你需要来自 S-1-5-21-XXXX-XXX-XXX 的权限才能对此文件夹进行更改

> [你需要来自 S-1-5-21-XXXX-XXX-XXX - Microsoft Community](https://answers.microsoft.com/zh-hans/windows/forum/all/你需要来自-s-1/8fab1a9a-412a-44f9-915b-6743d8b8dffb)
>
> [Win10无法删除文件提示“你需要来自system的权限”的解决方案－系统城·电脑系统下载之家 (xitongcheng.com)](https://www.xitongcheng.com/jiaocheng/win10_article_14750.html)

重装系统但是没格式化其他盘符， 在同步 Onedrive 时发现没有文件操作权限， 尝试删除提示需要来自 S-1-5-21-xxxx 的权限才能删除， 猜测是原本系统用户创建的文件， 在系统被扬了之后用户找不到了就变成 S-1-5-xx 这种不可读的形式了

解决方案为 `右键文件夹->属性->安全->高级` 可以看到所有者是 `S-1-5-xxx`, 勾选

----
----
## 图片OCR->表格

[白描](https://web.baimiaoapp.com/image-to-excel)

---
## 英语学习

`背单词`:

[沙拉查词](https://saladict.crimx.com/download.html)
- [使用文档](https://saladict.crimx.com/manual.html)
- [初次使用注意事项](https://saladict.crimx.com/notice.html)
- [配合Anki使用](https://saladict.crimx.com/anki.html)
- 也支持欧路词典, 扇贝单词和 WebDAV 方式同步
  ![20220117225152](https://cdn.ayusummer233.top/img/20220117225152.png)

---

## clash

> [Github/Dreamacro/clash](https://github.com/Dreamacro/clash)  
> [Github/Dreamacro/clash-dashboard](https://github.com/Dreamacro/clash-dashboard)
> [alvinkwok/clashForLinux安装配置](https://www.alvinkwok.cn/2022/01/29/2022/01/Clash%20For%20Linux%20Install%20Guide/)
>
> ---
>
> [正确配置Clash For Windows的TUN、TAP、系统代理三种模式？ | 来去之间 (clashdingyue.tk)](https://clashdingyue.tk/2022/06/正确配置Clash-For-Windows/)
>
> [clash 中的 minxin 使用教程 - cornradio的技术博客](https://cornradio.github.io/hugo/posts/4minxin-howtouse/)
>
> [steam如何绕过clash的全局代理 - cornradio的技术博客](https://cornradio.github.io/hugo/posts/让steam绕过clash系统代理/)
>
> ---

> [Clash for windows RCE 漏洞 - FreeBuf网络安全行业门户](https://www.freebuf.com/vuls/323348.html)

==`Clash Version <= V0.19.8`  存在 RCE 漏洞==, 建议升级到 `V0.19.10` 及以上版本

---

Windows 端的配置比较方便, Linux 端主要需要注意普通用户和root用户的区别以及需要多配置一个 dashboard 来管理

下面主要记录下 ubuntu 上使用 clash 的随笔

需要注意的是, 使用不同的用户进行操作生成的配置文件会在对应用户的 `.config` 目录下, 如下记录的是使用 root 用户登录时进行的操作(SSH 链接的 ubuntu 设备, 习惯了 root; 相应的桌面端的话一般是普通用户)

在 `/root/.config/` 目录下新建一个 `clash` 目录

在 [Releases · Dreamacro/clash (github.com)](https://github.com/Dreamacro/clash/releases) 下载对应的安装包, 这里我选择的是 [clash-linux-amd64-v1.13.0.gz](https://github.com/Dreamacro/clash/releases/download/v1.13.0/clash-linux-amd64-v1.13.0.gz) 

```bash
# 解压该 gz 包得到一个文件, 给该文件加上执行权限
gunzip clash-linux-amd64-v1.13.0.gz
chmod u+x clash-linux-amd64-v1.13.0
```

clone dashboard 仓库并切换到 gh-pages 分支:

```bash
git clone https://github.com/Dreamacro/clash-dashboard.git
cd clash-dashboard
git checkout -b gh-pages origin/gh-pages
```

> 尝试过使用镜像 clone, 但是在  `git checkout -b gh-pages origin/gh-pages` 这步会报错找不到 `origin/gh-pages` 分支, 由于裸连能 clone 下来所以没再处理

下载配置信息

```bash
sudo wget -O config.yaml [订阅链接]
sudo wget -O Country.mmdb https://www.sub-speeder.com/client-download/Country.mmdb
```

编辑 `config.yaml` 的如下三个属性, 分别对应页面端口, 访问密钥以及页面所在目录

```yaml
external-controller: '0.0.0.0:9090'
secret: 'xxxxxxx'
external-ui: '/root/.config/clash/clash-dashboard'
```

尝试运行 clash

```bash
screen -S clash
./clash-linux-amd64-v1.13.0
```

访问 `[ip]:[port]/ui` 输入密钥登入

到这里没问题的话就可以配置下系统代理了

![image-20230201151825066](http://cdn.ayusummer233.top/DailyNotes/202302011518116.png)

有些程序不走系统代理，需要单独配置，比如 git, 需要单独进行配置

```bash
git config --global http.proxy "http://127.0.0.1:7890"
```

---

### pip 报错 `ValueError: check_hostname requires server_hostname`

![image-20230718235830248](http://cdn.ayusummer233.top/DailyNotes/202307182358348.png)

![image-20230718235900189](http://cdn.ayusummer233.top/DailyNotes/202307182359232.png)

解决方案: 打开该项配置:

![image-20230719000029091](http://cdn.ayusummer233.top/DailyNotes/202307190000154.png)

> [bpo-42627: Fix wrong parsing of Windows registry proxy settings by CrazyBoyFeng · Pull Request #26307 · python/cpython · GitHub](https://github.com/python/cpython/pull/26307)

开了之后就正常了:

![image-20230719000057721](http://cdn.ayusummer233.top/DailyNotes/202307190000747.png)

---



---

### TUN Mode

> [TUN 模式 | Clash for Windows (lbyczf.com)](https://docs.cfw.lbyczf.com/contents/tun.html)
>
> [正确配置Clash For Windows的TUN、TAP、系统代理三种模式？ | 来去之间 (clashdingyue.tk)](https://clashdingyue.tk/2022/06/正确配置Clash-For-Windows/)
>
> [Clash for Windows 优雅地使用 TUN 模式接管系统流量 · Dejavu's Blog](https://blog.dejavu.moe/posts/cfw-tun/)

Clash 有三种代理模式

- 系统代理模式

  - 最简单的一种模式，只需要开启系统代理的开关即可。
  - 但是有些软件不走系统代理，因此这种模式适合普通用户，平常用浏览器进行科学上网的。

- Clash Tap Device模式

  - Clash Tap 虚拟网卡模式，让所有的流量走虚拟网卡，实现真正的全局翻墙模式，实现所有软件代理。

  - **TAP** 是 `二层设备`，模拟一个物理以太网设备，操作第二层数据包如以太网数据帧

    > 对于不遵循系统代理的软件，TUN 和 TAP 模式都可以接管系统流量并交由 CFW 处理，但是 TUN 模式在 Windows 下拥有比 TAP 模式更好的性能，

- Clash TUN Mode模式

  - **TUN** 是 `三层设备` ，模拟一个网络层设备，操作 **第三层** 数据包比如 IP 数据包，TUN 虚拟网卡实现 IP 层隧道

    Tun 模式通过新建一个 Tun 虚拟网卡接受操作系统的三层浏览流量，从而拓展 Clash 入口（inbound）转发能力，Tun 模式可以提升 Clash 处理 UDP 流量的能力，可以劫持任何三层流量，实现 DNS 劫持也是轻而易举，并且它与部分操作系统的网络栈结合也非常好，可以提升利用 iptables 等组件的能力

  - 对于不遵循系统代理的软件，TUN 模式可以接管其流量并交由 CFW 处理，在 Windows 中，TUN 模式性能比 TAP 模式好

  > `注意`: 近期大部分浏览器默认已经开启“**安全 DNS**”功能，此功能会影响 TUN 模式劫持 DNS 请求导致反推域名失败，请在浏览器设置中关闭此功能以保证 TUN 模式正常运行

- 什么情况下需要开启TAP/TUN ？

  - 在使用一些游戏软件需要加速，或者一些不遵循系统代理的软件时，需要开启 TAP/TUN 模式。
  - 专业用户，例如IT、开发人员，需要经常操作终端，使用开发软件，用到Linux子系统的建议使用TUN模式。
  - 其实大部分软件都走系统代理，例如浏览器，但是有些不走系统代理，例如某些游戏，Git等。平时使用浏览器翻墙，比如访问google网站，或者使用一些遵循系统代理的软件时，不需要开启 TAP/TUN 模式。建议直接使用系统代理模式。
  - Windows 中的 UWP 应用是无法走这个代理的，因为 UWP 应用网络隔离的‘沙箱’特性，因此我们还需要使用 `UWP Loopback` 中的轻量 `Fiddler Web Debuger` 来解锁 UWP 应用的网络隔离，后续新安装的 UWP 应用也要按照上面步骤进行添加，否则 UWP 应用就会无法联网；此外，像 Git、npm、yarn 这些是无法走系统代理的，需要 [手动设置代理](https://blog.dejavu.moe/posts/git-npm-yarn-proxy/)，而且一些不支持设置代理但又无法在天朝直连国际互联网的软件/应用 Fuxk GFW 也是个难题，而绝佳的 CFW(Clash For Windows) 提供了 TUN/TAP 模式就很好的解决了这个问题
  - ==在使用局域网VPN时==, 如果同时启用了 TUN Mode 可能会导致网络异常, 此时建议使用 System Proxy

- 启用 TUN Mode(`0.19.27`以上版本)

  - 点击`General`中`Service Mode`右边`Manage`，在打开窗口中安装服务模式，安装完成应用会自动重启，Service Mode 右边地球图标变为`绿色`即安装成功（无法安装参考：[这里](https://docs.cfw.lbyczf.com/contents/questions.html#service-mode-无法安装-windows)）

    > [Service Mode 作用是啥？为什么要开启这个模式 · Issue #2839 · Fndroid/clash_for_windows_pkg (github.com)](https://github.com/Fndroid/clash_for_windows_pkg/issues/2839)

    ![image-20230719003009188](http://cdn.ayusummer233.top/DailyNotes/202307190030213.png)

    ![image-20230719003029472](http://cdn.ayusummer233.top/DailyNotes/202307190030538.png)

  - 点击`General`中`TUN Mode`右边开关启动 TUN 模式

    相应的需要关闭 `System Proxy`, 如果装了 Tap Server 也需要相应 `uninstall`, 因为三种模式之间可能会冲突

    ![image-20230719003133662](http://cdn.ayusummer233.top/DailyNotes/202307190031691.png)

    > 如果使用`system`作为 TUN stack，需要同时在系统防火墙中将 clash core 放行，方法如下：
    >
    > 在`0.19.27`及以上版本中，点击 Clash Core 版本号前的图标，并在 UAC 弹窗（若有）中允许运行，CFW 将自动配置对应的防火墙规则。
    >
    > 成功配置防火墙规则后该图标作为指示灯亮起。
    >
    > ![img](http://cdn.ayusummer233.top/DailyNotes/202307190042513.png)

---

### Mixin

> [Mixin | Clash for Windows (lbyczf.com)](https://docs.cfw.lbyczf.com/contents/mixin.html)
>
> [clash 中的 minxin 使用教程 - cornradio的技术博客](https://cornradio.github.io/hugo/posts/4clash-minxin-howtouse/)

简单说，mixin是一种混合配置的方式，你可以把自己的配置注入到“配置文件”中，这样就可以在一定程度上的自定义配置了，比如加入一些你自己的规则之类的。

![image-20230719004524193](http://cdn.ayusummer233.top/DailyNotes/202307190045224.png)

例如：在配置文件中统一添加`dns`字段，操作如下：

1. 进入 Settings 页面

2. 滚动至 Profile Mixin 栏

3. 点击 YAML 右边 Edit 小字打开编辑界面

4. 在修改编辑界面内容为：

   ```yaml
   mixin: # 注意下面缩进
     dns:
       enable: true
       listen: :53
       nameserver:
         - 8.8.8.8
   ```

5. 点击编辑器右下角保存

在启动或切换配置时，上面内容将会替换到原有配置文件中进行覆盖

> **TIP**
>
> 配置文件内容不会被修改，混合行为只会发生在内存中
>
> 可以通过任务栏图标菜单开关这个行为

---

### Bypass

> [绕过系统代理 | Clash for Windows (lbyczf.com)](https://docs.cfw.lbyczf.com/contents/bypass.html)
>
> [0.16.2 版，Steam 商店、社区无法加载 · Issue #2035 · Fndroid/clash_for_windows_pkg (github.com)](https://github.com/Fndroid/clash_for_windows_pkg/issues/2035)
>
> [steam如何绕过clash的全局代理 - cornradio的技术博客](https://cornradio.github.io/hugo/posts/让steam绕过clash系统代理/)

可以自定义系统代理需要绕过的域名或 IP, 常用于配置局域网域名不使用代理或是其他指定的不想使用代理的域名(例如Steam游戏下载)

![image-20230719005351367](http://cdn.ayusummer233.top/DailyNotes/202307190053433.png)

一般情况下后台基本都会挂着 Clash, 然而当需要登 Steam 下游戏时, 如果当前代理的配置中相应域名走了 Proxy 那就比较耗流量且较慢(毕竟 Steam 下载设置中是可以设置国内地区的)

此时则可以修改 

```yaml
bypass:
# Steam中国大陆地区游戏下载
  - "steampipe.steamcontent.tnkjmec.com" #华为云
  - "st.dl.eccdnx.com" #白山云
  - "st.dl.bscstorage.net"
  - "st.dl.pinyuncloud.com"
  - "dl.steam.clngaa.com" #金山云
  - "cdn.mileweb.cs.steampowered.com.8686c.com" #网宿云
  - "cdn-ws.content.steamchina.com"
  - "cdn-qc.content.steamchina.com" #腾讯云
  - "cdn-ali.content.steamchina.com" #阿里云
# Steam非中国大陆地区游戏下载/社区实况直播
  - "*.steamcontent.com"
# Steam国际创意工坊下载CDN
  - "steamusercontent-a.akamaihd.net" #CDN-Akamai
# Origin游戏下载
  - "ssl-lvlt.cdn.ea.com" #CDN-Level3
  - "origin-a.akamaihd.net" #CDN-Akamai
# Battle.net战网中国大陆地区游戏下载
  - "client05.pdl.wow.battlenet.com.cn" #华为云
  - "client02.pdl.wow.battlenet.com.cn" #网宿云
# Battle.net战网非中国大陆地区游戏下载
  - "level3.blizzard.com" #CDN-Level3
  - "blzddist1-a.akamaihd.net" #CDN-Akamai
  - "blzddistkr1-a.akamaihd.net"
  - "kr.cdn.blizzard.com" #CDN-Blizzard
  - "us.cdn.blizzard.com"
  - "eu.cdn.blizzard.com"
# Epic Games中国大陆地区游戏下载
  - "epicgames-download1-1251447533.file.myqcloud.com"
# Epic Games非中国大陆地区游戏下载
  - "epicgames-download1.akamaized.net" #CDN-Akamai
  - "download.epicgames.com" #CDN-Amazon
  - "download2.epicgames.com"
  - "download3.epicgames.com"
  - "download4.epicgames.com"
# Rockstar Launcher客户端更新/游戏更新/游戏下载
  - "gamedownloads-rockstargames-com.akamaized.net"
# GOG中国大陆游戏下载/客户端更新
  - "gog.qtlglb.com"
# GOG非中国大陆游戏下载/客户端更新
  - "cdn.gog.com"
  - "galaxy-client-update.gog.com"
```





---

## 桌面显示器屏幕使用体验

写这份随笔的时候已经入手 `小米 34英寸 WQHD` 这款带鱼屏一个月有余了, 实际体验下来确实比之前双屏三屏副屏的时候体验要好不少, 至少脖子没有那么不舒服了

最开始有副屏需求是为了能够边写代码边看文档, 但是笔记本 15.6 英寸的屏幕同时代码和文档两个窗口的话太挤, 要么代码看不全要么文档看不全, 最初尝鲜副屏没有太多预算, 于是花 236 在咸鱼淘了个 13.5 英寸 1080P 的 DIY 副屏

![image-20220328222132611](http://cdn.ayusummer233.top/img/202203282221481.png)

![image-20220328222148173](http://cdn.ayusummer233.top/img/202203282221990.png)

从无到有的体验还是比较奇妙的, 总的来说写代码的体验有了质的提升, 至少不用来回切屏了, 不过 DIY副屏驱动板拖着一根排线接着屏幕, 支架也是个 DIY 的塑料支架, 直到有一次在图书馆折了支架又裂了排线后有了换屏幕的想法, 再加上 13.6 英寸的屏幕感觉还是有些小, 于是又入了一个 23.8 英寸的 `熊猫 PH24QA2`

![image-20220328222820090](http://cdn.ayusummer233.top/img/202203282228044.png)

感觉屏幕素质还好, 不过这款显示器就无法竖起来放置了, 基本上都是斜着放置在左侧, 比起上一个可以竖起来放置的 13.6 英寸的 DIY 屏幕, 这款显示器的优势在于屏幕更大了, 可以放下更多的内容, 不过纵向长度感觉变短了

用过一段时间的左边是 23.8 英寸的显示器, 中间放个 15.6 英寸的笔记本, 右边竖起来放置一个 13.6 英寸 DIY 屏幕, 不过后面由于宿舍桌子长度有限且二人共用因此撤掉了右侧的 DIY 屏幕送给室友用了

用了一段时间后愈发觉得这个显示器别扭, 放文档的话为了减少脖子扭动的幅度一般会放在靠近笔记本屏幕的一侧贴半边, 不过这也就导致了显示器的左半侧使用是一个比较尴尬的地方, 我需要扭动脖子将近 60° 去看左半边的屏幕, 这对脖子太不友好了, 而且两个屏幕之前的大块空隙完全是视野无效区域, 就算是在显示器右半边看文档, 时间长了脖子还是会有些酸痛, 于是就有了入个大点的屏幕的想法, 于是在今年 2 月入了小米的这款 34 英寸的带鱼屏

![image-20220328224024373](http://cdn.ayusummer233.top/img/202203282240451.png)

宿舍桌面空间有限, 就把笔记本放在了桌面上层的书架格子上背过放置, 这样比较方便走线

> 左侧那个显示器拍摄当时是想出掉所以拿出来放在侧边准备截下参数和色域检测以及坏点检测之类的图的, 并不是与带鱼屏一起使用(而且也不想再大浮动扭脖子看另一个屏幕了

一个月的使用体验上来看, 带鱼屏对于我个人码代码方面还是比较友好的, 属于是折腾这么长时间以来使用体验最舒服的一次折腾 (当然也是最贵的一次(ಥ_ಥ)

windows 自带的分屏可以覆盖大多数应用场景

- 需要长时间使用单个窗口时一般将窗口防止屏幕中央占大块区域

  > 比如 Typora 专注写一份文档

  ![image-20220328224910432](http://cdn.ayusummer233.top/img/202203282249120.png)

  放在中间正对面部基本就不需要扭脖子了

- 写前端项目时我一般会打开 4 个窗口, `文档, 笔记, 调试页面, 编码页面`

  最开始用的是上图中的中间大块区域码代码两边一侧文档一侧笔记的分屏方式, 但是总感觉哪里不太对, 除了需要单独切出来调试界面外后来换用了另一种分屏方式后发现文档那屏宽度不太够, 有的博主的文章样式比较怪, 横向全显示不支持滚动, 有的则是代码看不全;

  后来在实践中找到了合适的窗口排布方案, 不过由于不是 win11 原生支持的贴边所以为了不频繁切换窗口就新建了一个虚拟桌面专门用来放置写前端项目的这四个窗口
  
  ![image-20220329074440333](http://cdn.ayusummer233.top/img/202203290744483.png)
  
  ![image-20220329074906822](http://cdn.ayusummer233.top/img/202203290749181.png)
  
  > 除了四格外还放了 picgo 的上传图片界面以及 ShareX 的截图文件夹, 用来给笔记贴 gif 图
  >
  > ![image-20220329075153895](http://cdn.ayusummer233.top/img/202203290751207.png)
  >
  > 
  
  前端项目的四格单放一个桌面后原本的主桌面主要用于放置其他日常窗口以及 `Typora 正在书写的笔记对应的 VSCode 窗口`
  
  > ![image-20220329075415478](http://cdn.ayusummer233.top/img/202203290754851.png)
  >
  > 毕竟 Typora 没有 Wakatime 插件, 而 VSCode 有 wakatime 扩展, 不在 VSCode 中打开相应文件的话就会丢失这部分的时间记录
  
  此外, 让我比较愉悦的一点在于, 这块屏幕终于能让我完整地看完 wakatime 的页面了(
  
  > ![image-20220329075832380](http://cdn.ayusummer233.top/img/202203290758685.png)
  
  ![image-20220329080647578](http://cdn.ayusummer233.top/img/202203290806742.png)
  
  > 目前写前端项目的桌面状态差不多就是这样
  >
  > pad 主要用于看视频教程, 不看视频教程时一般就是用来放音乐(

---

### Win11 设置合盖不休眠

`控制面板 -> 硬件和声音 -> 电源选项 -> 选择关闭笔记本计算机盖的功能 -> 关闭盖子时不采取任何操作`

![image-20220707003226256](http://cdn.ayusummer233.top/img/202207070032741.png)

----
## Game

### Steam

---
#### steam工具箱
- [steam工具箱@rmbadmin](https://github.com/SteamTools-Team/SteamTools/releases/tag/1.1.4)
- 在`Releases`找最新的一次发行,下载第一个压缩文件,解压即可使用
- ![steam工具箱使用示意](http://cdn.ayusummer233.top/DailyNotes/202302191541753.png "屏幕截图.png")
- 点加速后若提醒443端口被占用可以去找一下是什么进程占用了443端口
  - `Win+R`输入cmd并回车进入命令行界面输入`netstat -ano|findstr "443"`并回车  
    ![查看端口占用](http://cdn.ayusummer233.top/DailyNotes/202302191541095.png "屏幕截图.png")
  - `tasklist |findstr "16280"`  
     ![输入图片说明](http://cdn.ayusummer233.top/DailyNotes/202302191541561.png "屏幕截图.png")
     
     > 我这里已经成功运行了,所以这里是steam工具箱占用了443端口
     - 如果显示`vmware-hosted.exe`占用443端口那么打开VMWare  
       ![输入图片说明](http://cdn.ayusummer233.top/DailyNotes/202302191541071.png "屏幕截图.png")

---
### 手游模拟器

#### 蓝叠模拟器 5(支持 Hyper-V)

[如何在 Windows 上為 BlueStacks 5 開啟 Hyper-V](https://support.bluestacks.com/hc/zh-tw/articles/4412148150157-%E5%A6%82%E4%BD%95%E5%9C%A8-Windows-%E4%B8%8A%E7%82%BA-BlueStacks-5-%E9%96%8B%E5%95%9F-Hyper-V)

需要注意的是模拟器启动程序务必使用管理员模式启动

![20211208145623](http://cdn.ayusummer233.top/img/20211208145623.png)
> [如何從您的電腦上完全移除BlueStacks 5](https://support.bluestacks.com/hc/zh-tw/articles/360057724751)  
> [Bluestacks 5 Cannot Start BlueStacks on Win11 (any 64Bit instance version)](https://www.reddit.com/r/BlueStacks/comments/r7hvkw/bluestacks_5_cannot_start_bluestacks_on_win11_any/)

---

## PowerToys

----

### 自定义窗口布局

![image-20220508084455471](http://cdn.ayusummer233.top/img/202205080844574.png)

使用快捷键打开 FancyZiones 编辑器:

![image-20220508083929402](http://cdn.ayusummer233.top/img/202205080839769.png)

自定义完布局后按住 Shift 并拖动窗口就可以像使用原生贴边一样进行窗口排版了(如果设置了布局快捷键的话此时可以按下布局快捷键数字来显示自定义的不同布局进行贴靠)

![](http://cdn.ayusummer233.top/img/202205080850523.png)

窗口之间不想留太多距离的话可以在自定义布局时将区域周围的空间设置为0

![image-20220508085213113](http://cdn.ayusummer233.top/img/202205080852269.png)

---

### 调整图像大小

![image-20220508085743432](http://cdn.ayusummer233.top/img/202205080857567.png)

![image-20220508085807402](http://cdn.ayusummer233.top/img/202205080858585.png)

![image-20220508085728963](http://cdn.ayusummer233.top/img/202205080857073.png)

![image-20220508085838940](http://cdn.ayusummer233.top/img/202205080858038.png)

![image-20220508090021884](http://cdn.ayusummer233.top/img/202205080900080.png)

---

### 始终置项

![image-20220508090222743](http://cdn.ayusummer233.top/img/202205080902866.png)

![image-20220508090404436](http://cdn.ayusummer233.top/img/202205080904587.png)

始终此功能可以将一些不支持置项的窗口进行置项(比如原生的便筏)

![image-20220508090440581](http://cdn.ayusummer233.top/img/202205080904708.png)

---

### 文件资源管理器加载项

enmmm, 本身 explorer 就比较卡, 平时能不打开Explorer就不打开Explorer, 因此对这项功能无感

---

### 鼠标实用工具

![image-20220508091000734](http://cdn.ayusummer233.top/img/202205080910895.png)

最有用的地方在于可以双击ctrl来找鼠标指针, 会有一个聚焦效果, 不用再乱晃鼠标找指针了

![image-20220508091126088](http://cdn.ayusummer233.top/img/202205080911271.png)

荧光笔功能比较无感, 鼠标按住移动的时候周围会有一圈高亮(类似上面的聚焦圈圈换个亮黄色), 但是不显示轨迹, 就是单纯的一个跟着指针的圈

---

## 字体

---

### 中易宋体和微软雅黑

> [在打印文本的正文字体中，宋体（中易）和微软雅黑孰优孰劣？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/19855799)
>
> [Windows自带的宋体、黑体、楷体、仿宋体等能免费商用吗？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/162838215)
>
> [对不起，微软雅黑不是免费字体 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/30568782)
>
> 

总的来说, 微软雅黑不适合印刷品, 中易宋体是一种印刷字体但是比较平庸

而且这两款windows自带的字体虽然使用频率很高, 但是并不能免费商用

---

## 活动监控

可以用  [WakaTime](https://wakatime.com) 做代码时间监控

![image-20230201223505418](http://cdn.ayusummer233.top/img/202302012235552.png)

对于窗口活动监控可以使用 [ActivityWatch/activitywatch: The best free and open-source automated time tracker. Cross-platform, extensible, privacy-focused. (github.com)](https://github.com/ActivityWatch/activitywatch)

![image-20230201223638262](http://cdn.ayusummer233.top/img/202302012236308.png)

---
## 零散报错

### Win11 下 QQ 调起文件资源管理器 C:\WINDOWS\SYSTEM32\ntdll.dll 报错

> [ntdll.dll故障_a874045的博客-CSDN博客_ntdll.dll错误](https://blog.csdn.net/a874045/article/details/105579478)  
> [如何在Windows 10使用sfc /scannow命令？ - 都叫兽软件 | 都叫兽软件 (reneelab.com.cn)](https://www.reneelab.com.cn/windows-10-sfc-scannow.html)

![image-20211225082416864](http://cdn.ayusummer233.top/img/202112250824048.png)

管理员权限打开 powershell 后输入
```shell
sfc /SCANNOW  
```
- `sfc/scannow` 是 sfc(系统文件检查器)的一条运行命令，运行该命令时可以扫描所有受保护的系统文件的完整性，并自动修复出现问题的系统文件。
  
  > 扫描过程会比较长
- `SFC`
  - `sfc /scannow`：扫描所有受保护系统文件的完整性，并尽可能修复有问题的文件
  - `sfc /verifyonly`：扫描所有受保护系统文件的完整性，不会执行修复操作
  - `sfc /scanfile`：扫描引用的文件的完整性，如果找到问题，则修复文件(需指定完整路径)
  - `sfc /verifyfile`：验证带有完整路径的文件的完整性，但不会执行修复操作
  - `sfc /offbootdir`：对于脱机修复，指定脱机启动目录的位置
  - `sfc /offwindir`：对于脱机修复，指定脱机Windows目录的位置
  - `sfc /logfile`：对于脱机修复，通过指定日志文件路径选择性地启用记录

![20211225083521](http://cdn.ayusummer233.top/img/20211225083521.png)  
扫描完成, 未发现异常, 那可能是我注册表出了问题  

以管理员权限打开`CMD`, 执行以下命令把  `%systemroot%\system32` 下所有的 dll 文件重新注册一遍
```shell
for %1 in (%windir%\system32\*.dll) do regsvr32.exe /s %1
```

重启 QQ 后, 可以正常调起 Explorer 了

可能是之前用 CCleaner 清注册表的时候误删了
