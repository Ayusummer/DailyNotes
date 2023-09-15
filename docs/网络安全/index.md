# 网络安全

## 常见概念

> [计算机漏洞安全相关的概念 POC 、EXP 、VUL 、CVE 、0DAY_www.xpshuai.cn 的博客-CSDN 博客\_poc 漏洞 什么意思](https://blog.csdn.net/qq_37622608/article/details/88048847)

---

- `POC`: `Proof Of Concept`，中文意思是“`观点证明`”。这个短语会在漏洞报告中使用，漏洞报告中的 POC 则是 ==一段说明== 或者 ==一个攻击的样例==，使得读者能够确认这个漏洞是真实存在的。

- `EXP`: `Exploit`，中文意思是“`漏洞利用`”。意思是一段对漏洞 ==如何利用的详细说明或者一个演示的漏洞攻击代码==，可以使得读者完全了解漏洞的机理以及利用的方法。

- `VUL`: `Vulnerability` 的缩写，泛指`漏洞`。

- `CVE漏洞编号`: `Common Vulnerabilities & Exposures`

  - 公共漏洞和暴露，例如 CVE-2015-0057、CVE-1999-0001 等等。CVE 就好像是一个字典表，为广泛认同的信息安全漏洞或者已经暴露出来的弱点给出一个公共的名称。如果在一个漏洞报告中指明的一个漏洞，如果有 CVE 名称，你就可以快速地在任何其它 CVE 兼容的数据库中找到相应修补的信息，解决安全问题。
  - 可以在 [CVE - CVE (mitre.org)](https://cve.mitre.org/) 网站根据漏洞的 CVE 编号搜索该漏洞的介绍。

- `0DAY`

  - 在计算机领域中，零日漏洞或零时差漏洞（``Zero-day exploit`）通常是指还没有补丁的安全漏洞，而零日攻击或零时差攻击（`Zero-day attack`）则是指利用这种漏洞进行的攻击。提供该漏洞细节或者利用程序的人通常是该漏洞的发现者。零日漏洞的利用程序对网络安全具有巨大威胁，因此零日漏洞不但是黑客的最爱，掌握多少零日漏洞也成为评价黑客技术水平的一个重要参数。
  - 零日漏洞及其利用代码不仅对犯罪黑客而言，具有极高的利用价值，一些国家间谍和网军部队，例如美国国家安全局和美国网战司令部也非常重视这些信息。据路透社报告称美国政府是零日漏洞黑市的最大买家。

- `CAN`: CAN 和 CVE 的唯一区别是前者代表了候选条目，还未经 CVE 编辑委员会认可，而后者则是经过认可的条目。 然后，两种类型的条目都对公众可见，条目的编号不会随着认可而改变—仅仅是“CAN”前缀替换成了“CVE”。

- `BUGTRAQ`: 一个完整的对计算机安全漏洞（它们是什么，如何利用它们，以及如何修补它们）的公告及详细论述进行适度披露的邮件列表

- `CNCVE`: 中国（CN）的 CVE ，是 `CNCERT/CC（国家计算机网络应急处理协调中心）`为漏洞进行编号的一个自己的标准。 CNCVE 不但包含漏洞的描述予以统一定义，还将包括漏洞的补丁、验证等措施，更方便、有用。

- `CNVD`: 国家信息安全漏洞共享平台。是由国家计算机网络应急技术处理协调中心（简称 CNCERT）联合国内重要信息系统单位、基础电信运营商、网络安全厂商、软件厂商和互联网企业建立的信息安全漏洞信息共享知识库。

- `CNNVD`: 中国国家信息安全漏洞库。是中国信息安全测评中心为切实履行漏洞分析和风险评估的职能，负责建设运维的国家信息安全漏洞库，为我国信息安全保障提供基础服务

- `CVSS`: `(Common Vulnerability Scoring System)` 通用漏洞评分系统，行业公开标准，用来评测漏洞的严重程度，0-10 分值越高越严重,美国国家漏洞数据库官网：[NVD - Search and Statistics (nist.gov)](https://nvd.nist.gov/vuln/search) 可查询 CVE 对应 CVSS 分值

  > _PS：评分会受时间和空间影响，如随着时间推移，漏洞相关补丁越多，可被利用性越低；漏洞存在不同的环境，也会影响漏洞的威胁程度_

- `CPE`: `（Common Platform Enumeration）` 以标准化方式为软件应用程序、操作系统及硬件命名的方法

---

## 环境搭建

### vulhub

> [vulhub/README.zh-cn.md at master · vulhub/vulhub · GitHub](https://github.com/vulhub/vulhub)

---

在 Ubuntu2204 上安装 Docker

```bash
# Install the latest version docker
curl -s https://get.docker.com/ | sh

# Run docker service
systemctl start docker
```

然后拉取 vulhub 仓库按照相应漏洞中的 README 文件操作即可

---

#### vulhub 捉虫

- `elasticsearch/CVE-2015-3337/Dockerfile`

  ```dockerfile
  FROM vulhub/elasticsearch:1.4.4

  LABEL maintainer="phithon <root@leavesongs.com>"

  RUN set -ex \
      && plugin --install mobz/elasticsearch-head/1.x -u https://codeload.github.com/mobz/elasticsearch-head/zip/refs/heads/1.x
  ```

  原来是如下这样, 是无法成功拉取的

  ```dockerfile
  RUN set -ex \
      && plugin -install mobz/elasticsearch-head/1.x
  ```

  官方的解决方案:

  ```dockerfile
  RUN set -ex \
      && plugin -install mobz/elasticsearch-head
  ```

---

---

### VULFOCUS

> [fofapro/vulfocus: 🚀Vulfocus 是一个漏洞集成平台，将漏洞环境 docker 镜像，放入即可使用，开箱即用。 (github.com)](https://github.com/fofapro/vulfocus)
>
> [安装 (fofapro.github.io)](https://fofapro.github.io/vulfocus/#/INSTALL)

#### 使用 docker-compose 安装 VULFCOUS

```bash
git clone https://github.com/fofapro/vulfocus.git
cd vulfocus
```

将 `docker-compose.yaml` 中如下的两个 `VUL_IP` 改成本机 IP 即可

![image-20230328005609764](http://cdn.ayusummer233.top/DailyNotes/202303280056842.png)

```bash
# 启动并后台运行 VULFOCUS 容器
docker compose up -d
```

![image-20230328010058301](http://cdn.ayusummer233.top/DailyNotes/202303280100357.png)

![image-20230328010131947](http://cdn.ayusummer233.top/DailyNotes/202303280101984.png)

访问默认的 80 端口服务即可看到 VULFOCUS 登录页

![image-20230328010326881](http://cdn.ayusummer233.top/DailyNotes/202303280103017.png)

默认账密 `admin/admin`

---

### 域控

> [域环境搭建 (qq.com)](https://mp.weixin.qq.com/s/sqAFxgfm1h4gU-fuvjfuWQ)

---

#### 配置网络信息

装一台 Windows Server, 这里选择的是 Windows Server 2016, 配置局域网网卡属性:

![image-20230704110044519](http://cdn.ayusummer233.top/DailyNotes/202307041100572.png)

> - 这里是跟着网关配的, 当前指定的网卡的网关是 `192.168.6.1`, 所以根据人工分配的 IP 网段配置了 `192.168.6.212` 这个 IP
> - 目前虚拟机不是太多, 掩码也基本都在 16 位的范围内, 因此这里掩码设置了 16 位
> - DNS 服务器需要配置为域控本身 IP(不能是本地回环地址 `127.0.0.1`)

---

#### 安装域服务并提升到域控

打开 `服务管理器 -> 仪表板 -> 添加角色和功能`

![image-20230703182211445](http://cdn.ayusummer233.top/DailyNotes/202307031822572.png)

![image-20230703182247207](http://cdn.ayusummer233.top/DailyNotes/202307031822275.png)

![image-20230703182301434](http://cdn.ayusummer233.top/DailyNotes/202307031823497.png)

![image-20230703182328445](http://cdn.ayusummer233.top/DailyNotes/202307031823593.png)

> 如果这里 IP 地址显示 169.254 的话, 可能是配置的静态 IP 没有生效, 可以尝试重启一下计算机

勾选 `AD域服务` 以及可能会用到的服务, 然后 `下一步`:

> Web 服务器也是我手动勾选的, 后续可能会用到就先勾上了

![image-20230703182441294](http://cdn.ayusummer233.top/DailyNotes/202307031824409.png)

`功能` 也继续默认, `下一步`:

![image-20230703182510919](http://cdn.ayusummer233.top/DailyNotes/202307031825071.png)

`IIS` 默认, `下一步`:

![image-20230703182539197](http://cdn.ayusummer233.top/DailyNotes/202307031825287.png)

默认, `下一步`:

![image-20230703182558356](http://cdn.ayusummer233.top/DailyNotes/202307031825450.png)

默认, 然后 `下一步`:

![image-20230703182621147](http://cdn.ayusummer233.top/DailyNotes/202307031826229.png)

没有需要变动的项目, 然后 `安装`:

![image-20230703183215211](http://cdn.ayusummer233.top/DailyNotes/202307031832313.png)

![image-20230703183235592](http://cdn.ayusummer233.top/DailyNotes/202307031832675.png)

到这里需要注意: 在下面红框的位置选择将该服务器提升为域控

![image-20230704091401548](http://cdn.ayusummer233.top/DailyNotes/202307040914617.png)

添加新林, 域名随便填

![image-20230704091548947](http://cdn.ayusummer233.top/DailyNotes/202307040915072.png)

配置一下 `还原模式(DSRM)密码` 然后下一步

![image-20230704093833253](http://cdn.ayusummer233.top/DailyNotes/202307040938376.png)

由于本次创建的是单个域, 不需要管理子域之类的操作, 因此这里的 DNS 委派也是非必须的, 直接下一步即可

> [域控制器部署疑难解答 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/identity/ad-ds/deploy/troubleshooting-domain-controller-deployment)
>
> ![image-20230704095312132](http://cdn.ayusummer233.top/DailyNotes/202307040953244.png)

![image-20230704095007052](http://cdn.ayusummer233.top/DailyNotes/202307040950155.png)

`NetBIOS域名` 会自动填写, 保持默认即可, 然后下一步

![image-20230704095509232](http://cdn.ayusummer233.top/DailyNotes/202307040955315.png)

路径也会自动填写, 保持默认即可, 然后下一步

![image-20230704095610886](http://cdn.ayusummer233.top/DailyNotes/202307040956961.png)

`查看选项` 这里用于检视至今为止的配置, 直接下一步即可

![image-20230704095709884](http://cdn.ayusummer233.top/DailyNotes/202307040957011.png)

检查通过, 点击 `安装`

![image-20230704095859460](http://cdn.ayusummer233.top/DailyNotes/202307040958630.png)

安装时会自动重启, 显示 `即将注销你的登录`

> 愣了一下, 这张图没截到(, 截个重启的图凑合看一下
> 后续又搭了一台域控, 截了一张截图, 所以细看的划能看到下面这张图的目标服务器和前面不一样了

![image-20230705162959888](http://cdn.ayusummer233.top/DailyNotes/202307051630230.png)

![image-20230704100126011](http://cdn.ayusummer233.top/DailyNotes/202307041001129.png)

重启后 DNS 可能会被改成 `127.0.0.1`, 需要手动再改一遍, 不过可能会弹这个弹窗, 显示无法访问指定项目

![image-20230704103758262](http://cdn.ayusummer233.top/DailyNotes/202307041037396.png)

此时需要 `Win+R -> gpedit.msc` 打开 `本地组策略编辑器`:

![image-20230704103915438](http://cdn.ayusummer233.top/DailyNotes/202307041039534.png)

将 `计算机配置 -- Windows配置 -- 安全设置 -- 本地策略 --- 安全选项  -- 用于账户控制:用于内置管理员账户的管理员批准模式` 改为启用

![image-20230704104215397](http://cdn.ayusummer233.top/DailyNotes/202307041042518.png)

![image-20230704104237189](http://cdn.ayusummer233.top/DailyNotes/202307041042304.png)

然后重启服务器, 重启完就可以打开了

![image-20230704104835386](http://cdn.ayusummer233.top/DailyNotes/202307041048474.png)

将 DNS 改回本地 IP:

![image-20230704110020501](http://cdn.ayusummer233.top/DailyNotes/202307041100596.png)

---

#### 配置 DNS 传输

最后配置一下 DNS 传输:

![image-20230707093023109](http://cdn.ayusummer233.top/DailyNotes/202307070930618.png)

![image-20230707093321129](http://cdn.ayusummer233.top/DailyNotes/202307070933277.png)

![image-20230707093532109](http://cdn.ayusummer233.top/DailyNotes/202307070935209.png)

---

#### 新建一个普通的域用户

打开 `服务器管理器 -> 工具 -> Active Directory 用户和计算机`

![image-20230707104443331](http://cdn.ayusummer233.top/DailyNotes/202307071044476.png)

`域名 -> 右键Users -> 新建 -> 用户`:

![image-20230707110329980](http://cdn.ayusummer233.top/DailyNotes/202307071103190.png)

输入姓名和登录名, 点击下一步

![image-20230707110752555](http://cdn.ayusummer233.top/DailyNotes/202307071107724.png)

输入密码, 按照需要勾选复选框:

![image-20230707111105221](http://cdn.ayusummer233.top/DailyNotes/202307071111326.png)

`完成`:

![image-20230707111127145](http://cdn.ayusummer233.top/DailyNotes/202307071111257.png)

然后就可以在 Users 中看到新建的用户:

![image-20230707111219700](http://cdn.ayusummer233.top/DailyNotes/202307071112798.png)

`右键此用户 -> 属性 -> 账户 -> 登录到`:

![image-20230707111309306](http://cdn.ayusummer233.top/DailyNotes/202307071113449.png)

![image-20230707111343915](http://cdn.ayusummer233.top/DailyNotes/202307071113069.png)

该账户默认可以登录到所有计算机, 可以自定义选择登录到下列计算机, 输入计算机名并点击 `添加`

![image-20230707111903644](http://cdn.ayusummer233.top/DailyNotes/202307071119826.png)

![image-20230707111917300](http://cdn.ayusummer233.top/DailyNotes/202307071119429.png)

> 最开始搜教程, 直接是`右键域名 -> 新建 -> 用户`, 这样创建的用户最后在域名页面就能看到了, 感觉不是很合适, 就有了上面的过程截图
>
> ![image-20230707104644079](http://cdn.ayusummer233.top/DailyNotes/202307071046182.png)
>
> 输入姓名和用户名并点击 `下一步`
>
> ![image-20230707104931561](http://cdn.ayusummer233.top/DailyNotes/202307071049682.png)
>
> 输入密码并确认, 复选框按照需求勾选即可, 然后点击 `下一步`:
>
> ![image-20230707105233446](http://cdn.ayusummer233.top/DailyNotes/202307071052516.png)
>
> `完成`:
>
> ![image-20230707105340177](http://cdn.ayusummer233.top/DailyNotes/202307071053271.png)
>
> 新建完成后可以在域名页面看到新建的用户
>
> ![image-20230707110151483](http://cdn.ayusummer233.top/DailyNotes/202307071101624.png)
>
> `右键该用户 -> 属性`
>
> ![image-20230707112004475](http://cdn.ayusummer233.top/DailyNotes/202307071120577.png)
>
> `账户 -> 登录到`
>
> ![image-20230707112120321](http://cdn.ayusummer233.top/DailyNotes/202307071121416.png)
>
> 默认是可以登录到所有计算机, 可以使用该账户将计算机添加到域, 加完域后可以指定该账户只能登录到指定计算机来做权限控制
>
> 可以自定义选择登录到下列计算机, 计算机名填写需要登录到的计算机的名称, 例如:
>
> ![image-20230707112430394](http://cdn.ayusummer233.top/DailyNotes/202307071124485.png)
>
> ![image-20230707112548523](http://cdn.ayusummer233.top/DailyNotes/202307071125761.png)
>
> ![image-20230707112608465](http://cdn.ayusummer233.top/DailyNotes/202307071126576.png)

---

#### 加域

在需要添加到域的主机上进行操作

配置网卡信息:

![image-20230707095227600](http://cdn.ayusummer233.top/DailyNotes/202307070952219.png)

![image-20230707095606303](http://cdn.ayusummer233.top/DailyNotes/202307070956456.png)

![image-20230707095811306](http://cdn.ayusummer233.top/DailyNotes/202307070958477.png)

> PS: 一般只有一张卡, 图里的另一张卡和域环境无关, 有其他用处, 这里可以忽略

将 DNS 服务器配成刚才设置的域控 IP

![image-20230707100001572](http://cdn.ayusummer233.top/DailyNotes/202307071000673.png)

> IP, 掩码和网关信息还是跟着网关进行配置, 这里当前添加的网卡的网关是 `192.168.4.1`, 掩码是 `24` 位的, 所以选了一个 IP 如上填写
>
> 这样的话域内主机和域控不在同一个网络范围, 需要双方添加路由才可联通
>
> 对于域内主机:
>
> ```cmd
> route add -p 192.168.0.0 mask 255.255.0.0 192.168.4.1
> ```
>
> ![image-20230707100722859](http://cdn.ayusummer233.top/DailyNotes/202307071007941.png)
>
> 对于域控, 只加了一张网卡, 路由如下, 默认走网关 `192.168.6.1` 可以访问到其他经由中间路由器设备转发的 `192` 网段的主机
>
> ![image-20230707101214125](http://cdn.ayusummer233.top/DailyNotes/202307071012172.png)
>
> ![image-20230707101314181](http://cdn.ayusummer233.top/DailyNotes/202307071013325.png)

打开 `Windows 设置 -> 系统 -> 关于`

![image-20230707101500852](http://cdn.ayusummer233.top/DailyNotes/202307071015005.png)

![image-20230707101535987](http://cdn.ayusummer233.top/DailyNotes/202307071015114.png)

![image-20230707101646217](http://cdn.ayusummer233.top/DailyNotes/202307071016359.png)

> 需要注意的是, 不是下面这张图里的重命名这台电脑:
>
> ![image-20230707101551531](http://cdn.ayusummer233.top/DailyNotes/202307071015675.png)

从此处进入修改域的页面:

![image-20230707101903682](http://cdn.ayusummer233.top/DailyNotes/202307071019769.png)

勾选隶属于 `域`, 填入域名并 `确定`:

![image-20230707102023738](http://cdn.ayusummer233.top/DailyNotes/202307071020829.png)

> 如果弹出此窗口则需要修改下计算机名(限定 15 个字符):
>
> ![image-20230707102135148](http://cdn.ayusummer233.top/DailyNotes/202307071021247.png)
>
> 这里是因为我的 Win10 基本上都是用直接打包好的 OVF 创建的, 所以会存在名称一样的情况
>
> 尝试修改为:
>
> ![image-20230707102343365](http://cdn.ayusummer233.top/DailyNotes/202307071023538.png)
>
> 发现超出长度了
>
> ![image-20230707102432729](http://cdn.ayusummer233.top/DailyNotes/202307071024873.png)

将计算机名修改为不重复的长度在规范内的字符串后点击 `确定` 则会弹出如下弹窗:

![image-20230707102627849](http://cdn.ayusummer233.top/DailyNotes/202307071026955.png)

输入有权限登录到该计算机的域账户的账密

![image-20230707112759281](http://cdn.ayusummer233.top/DailyNotes/202307071127385.png)

![image-20230707114516626](http://cdn.ayusummer233.top/DailyNotes/202307071145718.png)

逐级确定后需要重启计算机以生效:

![image-20230707115305866](http://cdn.ayusummer233.top/DailyNotes/202307071153295.png)

重启后就可以使用该域账户从控制台登入计算机了:

![image-20230707120146125](http://cdn.ayusummer233.top/DailyNotes/202307071201506.png)

![image-20230707132912542](http://cdn.ayusummer233.top/DailyNotes/202307071329987.png)

不过此时是无法使用此域账户远程登录这台计算机的, 因为 RDP 默认只允许本地管理员登录, 需要配置一下

> ![image-20230707141654004](http://cdn.ayusummer233.top/DailyNotes/202307071416105.png)

打开 `设置 -> 远程桌面 -> 选择可远程访问这台电脑的用户`:

![image-20230707142644383](http://cdn.ayusummer233.top/DailyNotes/202307071426687.png)

可以看到本地管理员账户 `Win10Pro` 已有远程权限, 还需要添加上域用户, 点击 `添加`:

![image-20230707142743465](http://cdn.ayusummer233.top/DailyNotes/202307071427557.png)

输入域用户名并 `检查名称`:

![image-20230707142916009](http://cdn.ayusummer233.top/DailyNotes/202307071429098.png)

在弹出的窗口中输入该域账户的账密, 然后点击确定:

![image-20230707143031446](http://cdn.ayusummer233.top/DailyNotes/202307071430572.png)

可以看到检查的名称已经出现在输入窗中了, 点击 `确定` 即可

![image-20230707143103873](http://cdn.ayusummer233.top/DailyNotes/202307071431015.png)

然后就可以使用该账户 RDP 到该计算机了:

![image-20230707150530128](http://cdn.ayusummer233.top/DailyNotes/202307071505728.png)

---

#### 从域中退出

仍然是加域的页面, 将隶属于的选项从域换到工作组, 然后随便起个工作组的名字再点击 `确定`, 输入域账户账密退出加域即可

![image-20230707134336159](http://cdn.ayusummer233.top/DailyNotes/202307071343331.png)

![image-20230707134826465](http://cdn.ayusummer233.top/DailyNotes/202307071348521.png)

![image-20230707134816708](http://cdn.ayusummer233.top/DailyNotes/202307071348794.png)

![image-20230707135004520](http://cdn.ayusummer233.top/DailyNotes/202307071350608.png)

![image-20230707135012984](http://cdn.ayusummer233.top/DailyNotes/202307071350068.png)

---

## 使用 OpenSSL 创建自签名 SSL 证书

> [如何创建自签名 SSL 证书 | myfreax](https://www.myfreax.com/creating-a-self-signed-ssl-certificate/)

> 最近有给站点上 HTTPS 的需求, 且在内网使用, 所以有了自签名证书的需求

自签名 SSL 证书是由创建它的人而不是受信任的证书颁发机构签名的证书。自签名证书可以与受信任的 CA 签名 SSL 证书具有相同的加密级别。

在浏览器中访问自签名证书的 HTTPS 站点时会提示不安全的链接

自签名证书常用于测试以及内部使用, 不应当用于正式的生产环境

---

### 安装 openssl

这里使用 openssl 工具包生成自签名证书, 可以使用 `openssl version` 命令检查系统是否安装了 openssl, 如果未安装则可以使用如下命令安装

:::tabs

@tab:active Ubuntu/Debian

```bash
sudo apt install openssl
```

@tab Centos/Fedora

```bash
sudo yum install openssl
```

:::

### 创建自签名 SSL 证书

可以使用 `openssl req`创建自签名 SSL 证书

```bash
openssl req -newkey rsa:4096 \
            -x509 \
            -sha256 \
            -days 3650 \
            -nodes \
            -out example.crt \
            -keyout example.key
```

- `-newkey rsa:4096`-创建新的证书请求和 4096 位 RSA 密钥。默认值为 2048 位。
- `-x509` -创建 X.509 证书。
- `-sha256` -使用 265 位 SHA（安全哈希算法）。
- `-days 3650` -认证证书的天数。 3650 是 10 年。您可以使用任何正整数。
- `-nodes` -创建没有密码的密钥。
- `-out example.crt` -指定将新创建的证书写入的文件名。您可以指定任何文件名。
- `-keyout example.key` -指定要写入新创建的私钥的文件名。您可以指定任何文件名。

> 有关`openssl req`命令选项的更多信息，请访问[ OpenSSL req 文档页面。](https://www.openssl.org/docs/manmaster/man1/openssl-req.html)

回车后可以看到如下回显:

> ![image-20230106103502248](http://cdn.ayusummer233.top/DailyNotes/202301061035592.png)

输入相应信息后会在当前目录生成证书与私钥

> ![image-20230106104219369](http://cdn.ayusummer233.top/DailyNotes/202301061042234.png)

---
