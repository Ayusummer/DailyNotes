# TA0001-InitialAccess 初始访问

> [Initial Access, Tactic TA0001 - Enterprise | MITRE ATT&CK® --- 初始访问，战术 TA0001 - 企业 | MITRE ATT＆CK®](https://attack.mitre.org/tactics/TA0001/)
>
> [Dm2333/ATTCK-PenTester-Book: ATTCK-PenTester-Book ](https://github.com/Dm2333/ATTCK-PenTester-Book)

----

The adversary is trying to get into your network.

攻击者正试图进入您的网络。

Initial Access consists of techniques that use various entry vectors to gain their initial foothold within a network. Techniques used to gain a foothold include targeted spearphishing and exploiting weaknesses on public-facing web servers. Footholds gained through initial access may allow for continued access, like valid accounts and use of external remote services, or may be limited-use due to changing passwords.

初始访问包括使用各种入口向量在网络中获得初始立足点的技术。用于获得立足点的技术包括有针对性的鱼叉式网络钓鱼和利用面向公众的 Web 服务器上的漏洞。 这种战术通常是在侦查和资源开发等战术之后的下一步

攻击者通过初始访问获得的立足点可能会利用有效帐户或是使用外部远程服务继续访问内网，不过也可能由于获取到的账户及时更改了密码而被限制使用。

---

## T1189 [Drive-by Compromise](https://attack.mitre.org/techniques/T1189) 水坑攻击

Adversaries may gain access to a system through a user visiting a website over the normal course of browsing. With this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring [Application Access Token](https://attack.mitre.org/techniques/T1550/001).

攻击者可能通过用户在正常浏览过程中访问网站来获取访问系统的权限。

在这种技术中，用户的 Web 浏览器通常成为利用的目标，但攻击者也可能使用受感染的网站进行非利用行为，例如获取 Application Access Token 。

> - 应用程序访问令牌是一种授权机制, 可以让用户或应用程序访问受保护的应用程序和信息
> - 攻击者可能通过弹窗等方式, 将用户引导到一个恶意的应用程序从而窃取用户的应用程序访问令牌
>
> ---
>
> - `Drive-by Shooting` 是一种犯罪行为, 指的是从一辆行驶中的车上向路边的人或者建筑开枪
>
> - `Drive-by Compromise` 的意思是, 攻击者从一个受控网站向该网站的用户发起攻击
>
>   这里的 `Compromise` 是指使某人受到损害或者危险
>
> - 类似于一种捕猎方法，指的是在动物经常来饮水的地方埋伏，等待猎物上钩。水坑攻击的意思是，对手在目标用户经常访问的网站埋伏，等待用户访问该网站，然后利用该网站向用户传播恶意代码或者窃取用户信息。
>
> ---
>
> - 之所以说获取应用访问令牌是一种非利用行为是因为他不需要对用户的浏览器或者是系统进行任何攻击或是破坏, 对方只需要利用被贡献的网站来诱导用户授权一个恶意的应用程序从而获取应用程序访问令牌

---

分析并了解目标的上网活动规律，寻找目标经常访问的网站的漏洞，利用漏洞在该网站植入恶意代码(陷阱、水坑) ，在目标进行访问时，攻击形成

多种可能被植入的代码，包括

- 通过注入某些形式的恶意代码。例如：JavaScript、iframe、跨站脚本等
- 植入恶意的广告链接
- 内置的 Web 应用程序接口用于插入任何其他类型的对象，该对象可用于显示 Web 内容或包含在访问客户端上执行的脚本(例如，论坛帖子，评论和其他用户可控制的 Web 内容) 
- 重定向用户所经常访问的站点到恶意站点

---

### 在页面嵌入存储型 XSS，获得用户 cookie 信息

编写具有恶意功能的 javascript 语句，例如获取登录用户 cookie、内网 ip、 截屏、网页源代码等操作，配合 XSS 平台可查看获取到的信息

![image-20230419161702532](http://cdn.ayusummer233.top/DailyNotes/202304191617898.png)

---

### phpstudy backdoor

2019 年 9 月 20 日杭州公安微信公众账号发布了“杭州警方通报打击涉网违法 犯罪暨“净网 2019”专项行动战果”的文章，文章里说明 phpstudy 存在“后门”，攻击者通过在 phpstudy 2016 php5.4 和 phpstudy2018 php-5.2.17 和 php-5.4.45 中植入后门并发布至互联网，导致大量使用 phpstudy 的用户成为肉鸡

---

### Beef 攻击框架

BeEF攻击框架是一款专门针对浏览器的渗透测试工具，它可以利用浏览器的漏洞或者XSS攻击来控制受害者的浏览器，从而执行各种恶意的命令或者社工操作。BeEF是用Ruby语言开发的，Kali Linux中默认安装了BeEF，也可以在其他系统中自行安装。BeEF的原理是在受害者访问的网页中插入一段名为hook.js的JS脚本代码，如果浏览器加载了这个脚本，就会被勾住，然后定期向BeEF服务器发送请求，询问是否有新的命令需要执行。BeEF服务器可以通过一个Web界面来管理和操作被勾住的浏览器，有很多内置的模块可以选择，比如获取cookie、重定向网页、弹出窗口、克隆网站等。BeEF也可以和其他工具结合使用，比如Metasploit、Bettercap等，实现更强大的攻击效果。

---

### 缓解措施

- [M1048](https://attack.mitre.org/mitigations/M1048) [Application Isolation and Sandboxing - 应用程序隔离和沙盒](https://attack.mitre.org/mitigations/M1048)

  浏览器沙箱可用于减轻利用的一些影响，但沙箱逃逸可能仍然存在。

  其他类型的虚拟化和应用程序微分段也可以减轻客户端利用的影响。这些类型的系统可能仍然存在额外漏洞利用和实施弱点的风险。

- [M1050](https://attack.mitre.org/mitigations/M1050) [Exploit Protection - 漏洞利用保护](https://attack.mitre.org/mitigations/M1050) 

  可以使用 Windows Defender Exploit Guard (WDEG) 和 Enhanced Mitigation Experience Toolkit (EMET) 等寻找利用期间使用的行为的安全应用程序来减轻某些利用行为。

  控制流完整性检查是另一种可能识别和阻止软件攻击发生的方法。

  这些保护中的许多都依赖于体系结构和目标应用程序二进制文件的兼容性。

- [M1021](https://attack.mitre.org/mitigations/M1021) [Restrict Web-Based Content - 限制基于 Web 的内容](https://attack.mitre.org/mitigations/M1021)

  对于通过广告提供的恶意代码，广告拦截器可以帮助阻止该代码在第一时间执行。

  脚本阻止扩展可以帮助防止在开发过程中经常使用的 JavaScript 的执行。

- [M1051](https://attack.mitre.org/mitigations/M1051) [Update Software - 升级软件](https://attack.mitre.org/mitigations/M1051) 

  确保所有浏览器和插件保持更新有助于防止此技术的利用阶段。使用启用了安全功能的现代浏览器。

---

### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [ Application Log](https://attack.mitre.org/datasources/DS0015) [应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  防火墙和代理可以检查 URL 是否存在潜在的已知错误域或参数。他们还可以对网站及其请求的资源进行基于声誉的分析，例如域的年龄、注册者、是否在已知的不良列表中，或者之前有多少其他用户连接过该域。

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) [File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation)

  监视写入磁盘的新构建文件，以便通过在正常浏览过程中访问网站的用户访问系统。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029)

  - [Network Connection Creation -  网络连接创建](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)

    监视与用于发送或接收数据的不受信任主机的新建网络连接。

  - [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content) 

    监视其他异常的网络流量，这些流量可能表明向系统传输了额外的工具。使用网络入侵检测系统(有时使用 SSL/TLS 检查) 来查找已知的恶意脚本(侦察、堆喷射和浏览器识别脚本经常被重复使用) 、常见的脚本混淆和利用代码。

- [DS0009](https://attack.mitre.org/datasources/DS0009) [Process](https://attack.mitre.org/datasources/DS0009) [Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)

  在端点系统上寻找可能表明受到损害的行为，例如浏览器进程的异常行为。这可能包括写入磁盘的可疑文件、试图隐藏执行的进程注入证据或发现证据。

---

## T1190 Exploit Public-Facing Application 利用公开漏洞

Adversaries may attempt to take advantage of a weakness in an Internet-facing computer or program using software, data, or commands in order to cause unintended or unanticipated behavior. The weakness in the system can be a bug, a glitch, or a design vulnerability. These applications are often websites, but can include databases (like SQL), standard services (like SMB or SSH), network device administration and management protocols (like SNMP and Smart Install), and any other applications with Internet accessible open sockets, such as web servers and related services. Depending on the flaw being exploited this may include [Exploitation for Defense Evasion](https://attack.mitre.org/techniques/T1211).

攻击者可能会尝试利用面向互联网的计算机或程序中的弱点，使用软件、数据或命令来引起计划或意料外的行为。系统中的漏洞可能是bug、故障或是设计缺陷。这些应用程序通常是网站，但可以包括数据库(如 SQL) 、标准服务(如 SMB 或 SSH) 、网络设备管理和管理协议(如 SNMP 和Smart install) 以及任何其他具有可访问 Internet 的开放式套接字的应用程序，例如 Web 服务器和相关服务。根据被利用的缺陷，这可能包括针对防御规避软件/措施的攻击利用

---

利用软件、数据库、中间件、第三方库或存在漏洞的库等公开的漏洞，对目标系统进行攻击，以达到攻击未及时修补或升级的信息系统。 公开漏洞来源

- CVE、CNVD、CNNVD、exploit-db 等漏洞库
- qq 群、推特、社区、论坛等社交平台
- github

---

### 缓解措施

- [M1048](https://attack.mitre.org/mitigations/M1048) [ Application Isolation and Sandboxing - 应用程序隔离和沙盒](https://attack.mitre.org/mitigations/M1048)

  应用程序隔离将限制被利用目标可以访问的其他进程和系统功能。

- [M1050](https://attack.mitre.org/mitigations/M1050) [Exploit Protection - 漏洞利用保护](https://attack.mitre.org/mitigations/M1050)

  Web 应用程序防火墙可用于限制应用程序的暴露，以防止利用流量到达应用程序

- [M1030](https://attack.mitre.org/mitigations/M1030) [Network Segmentation - 网络分割](https://attack.mitre.org/mitigations/M1030)

  使用 DMZ 或在单独的托管基础设施上将面向外部的服务器和服务与网络的其余部分分开。

- [M1026](https://attack.mitre.org/mitigations/M1026) [ Privileged Account Management - 特权账户管理](https://attack.mitre.org/mitigations/M1026)

  对服务帐户使用最小权限将限制被利用进程在系统其余部分获得的权限。

- [M1051](https://attack.mitre.org/mitigations/M1051) [ Update Software - 更新软件](https://attack.mitre.org/mitigations/M1051) 

  通过对外部暴露的应用程序采用补丁管理来定期更新软件。

- [M1016](https://attack.mitre.org/mitigations/M1016) [Vulnerability Scanning  漏洞扫描](https://attack.mitre.org/mitigations/M1016) 

  定期扫描面向外部的系统是否存在漏洞，并建立程序以在通过扫描和公开披露发现严重漏洞时快速修补系统

---

### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  根据可用的工具，检测软件利用可能很困难。软件漏洞利用可能并不总是成功，或者可能导致被利用的进程变得不稳定或崩溃。 Web 应用程序防火墙可能会检测到试图利用的不当输入。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)

  使用深度数据包检测来查找常见漏洞利用流量的工件，例如 SQL 注入字符串或已知有效负载。

---

## T1133 External Remote Services 外部远程服务

Adversaries may leverage external-facing remote services to initially access and/or persist within a network. Remote services such as VPNs, Citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations. There are often remote service gateways that manage connections and credential authentication for these services. Services such as [Windows Remote Management](https://attack.mitre.org/techniques/T1021/006) and [VNC](https://attack.mitre.org/techniques/T1021/005) can also be used externally.

攻击者可能会利用面向外部的远程服务来最初访问和/或保留在网络中。 VPN、Citrix 和其他访问机制等远程服务允许用户从外部位置连接到内部企业网络资源。通常有远程服务网关管理这些服务的连接和凭证认证。也可以在外部使用 Windows 远程管理和 VNC 等服务。

通常需要访问有效帐户来使用该服务，这可以通过凭证嫁接或在危及企业网络后从用户处获得凭证来实现。在操作期间，可以将对远程服务的访问用作冗余访问的一部分

远程服务：VPN、Citrix、SSH、Windows 远程桌面、TeamViewer、 EasyConnect 

---

### 缓解措施

- [M1042](https://attack.mitre.org/mitigations/M1042) [ Disable or Remove Feature or Program - 禁用或删除功能或程序](https://attack.mitre.org/mitigations/M1042)

  禁用或阻止可能不需要的远程可用服务。

- [M1035](https://attack.mitre.org/mitigations/M1035) [ Limit Access to Resource Over Network - 限制对网络资源的访问](https://attack.mitre.org/mitigations/M1035)

  通过集中管理的集中器(如 VPN 和其他管理的远程访问系统) 限制对远程服务的访问。

- [M1032](https://attack.mitre.org/mitigations/M1032) [ Multi-factor Authentication - 多重身份验证](https://attack.mitre.org/mitigations/M1032)

  对远程服务帐户使用强大的双因素或多因素身份验证来减轻对手利用被盗凭据的能力，但要注意某些双因素身份验证实施的多因素身份验证拦截技术。

- [M1030](https://attack.mitre.org/mitigations/M1030) [Network Segmentation - 网络分割](https://attack.mitre.org/mitigations/M1030)

  拒绝通过使用网络代理、网关和防火墙直接远程访问内部系统。

---

### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  当访问公开的远程服务不需要身份验证时，监视后续活动，例如公开的 API 或应用程序的异常外部使用。

- [DS0028](https://attack.mitre.org/datasources/DS0028) [ Logon Session](https://attack.mitre.org/datasources/DS0028) [ Logon Session Metadata - 登录会话元数据](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)

  遵循检测攻击者使用有效帐户对远程服务进行身份验证的最佳做法。收集身份验证日志并分析异常访问模式、活动窗口和正常工作时间以外的访问。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029)

  - [Network Connection Creation - 网络连接创建](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)

    监视新构建的网络连接，这些连接可能使用有效帐户访问和/或持久存在于使用外部远程服务的网络中。根据环境及其使用方式，使用外部远程服务可能是合法的。其他因素，例如远程登录后发生的访问模式和活动，可能表示使用外部远程服务的可疑或恶意行为。

  - [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content) 

    监控和分析与不遵循预期协议标准和流量流的协议相关的流量模式和数据包检查(例如，不属于已建立流量的无关数据包、无偿或异常流量模式、异常语法或结构) 。考虑与流程监控和命令行的相关性，以检测与流量模式相关的异常流程执行和命令行参数(例如，监控使用通常不会为相应协议启动连接的文件的异常情况) 。

  - [Network Traffic Flow - 网络流量](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow) 

    监视源自未知/意外硬件设备的网络流量。本地网络流量元数据(例如源 MAC 地址) 以及网络管理协议(例如 DHCP) 的使用可能有助于识别硬件。


----

## T1200 Hardware Additions 硬件攻击

Adversaries may introduce computer accessories, networking hardware, or other computing devices into a system or network that can be used as a vector to gain access. Rather than just connecting and distributing payloads via removable storage (i.e. [Replication Through Removable Media](https://attack.mitre.org/techniques/T1091)), more robust hardware additions can be used to introduce new functionalities and/or features into a system that can then be abused.

攻击者可能会将计算机配件、网络硬件或其他计算设备引入系统或网络中，这些系统或网络可用作获取访问权限的载体。不仅仅是通过可移动存储连接和分发有效负载(即通过可移动媒体进行复制) ，还可以使用更强大的硬件添加来将新功能和/或特性引入系统，然后这些功能和/或特性可能会被滥用。

商业和开源产品的功能包括被动网络窃听，打破中间人加密，击键注入，通过 DMA 读取内核内存，增加新的无线接入现有网络等。 

可添加的硬件：U 盘、鼠标、键盘、硬盘、智能设备、摄像头、打印机、USB 数据线、Pineapple 等

---

### [通过一根数据线控制你的 mac](http://mg.lol/blog/defcon-2019/)

一根经过特殊定制的苹果手机充电器，使用它连接苹果电脑后，可以通过植入木马远程操控电脑。 

参考链接:

- [能远程控制你电脑的苹果充电线正在生产和售卖，走一个？ (qq.com)](https://mp.weixin.qq.com/s/bnbODlzMn7_vCgWyfm4Rsg)
- [O-MG/DemonSeed (github.com)](https://github.com/O-MG/DemonSeed)


---

### 缓解措施

- [M1035](https://attack.mitre.org/mitigations/M1035) [ Limit Access to Resource Over Network - 限制对网络资源的访问](https://attack.mitre.org/mitigations/M1035)\

  建立网络访问控制策略，例如使用设备证书和 802.1x 标准。 将 DHCP 的使用限制在已注册的设备上，以防止未注册的设备与受信任的系统通信。

- [M1034](https://attack.mitre.org/mitigations/M1034) [ Limit Hardware Installation - 限制硬件安装](https://attack.mitre.org/mitigations/M1034)

  通过端点安全配置和监控代理阻止未知设备和附件。

---

### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [ Application Log](https://attack.mitre.org/datasources/DS0015) [ Application Log Content 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  配置管理数据库 (CMDB) 和其他资产管理系统可能有助于检测网络上不应存在的计算机系统或网络设备。

- [DS0016](https://attack.mitre.org/datasources/DS0016) [Drive](https://attack.mitre.org/datasources/DS0016) [Drive Creation](https://attack.mitre.org/datasources/DS0016/#Drive%20Creation)

  监视与连接到系统的计算机硬件和其他附件(尤其是新的或未知的) 相关的新建驱动器或其他相关事件。端点传感器可能能够检测到通过 USB、Thunderbolt 和其他外部设备通信端口添加的硬件。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) [Network Traffic Flow - 网络流量](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)

  监视源自未知/意外硬件设备的网络流量。本地网络流量元数据(例如源 MAC 地址) 以及网络管理协议(例如 DHCP) 的使用可能有助于识别硬件。

---

## T1566 Phishing 钓鱼

Adversaries may send phishing messages to gain access to victim systems. All forms of phishing are electronically delivered social engineering. Phishing can be targeted, known as spearphishing. In spearphishing, a specific individual, company, or industry will be targeted by the adversary. More generally, adversaries can conduct non-targeted phishing, such as in mass malware spam campaigns.

攻击者可能会发送网络钓鱼消息以获得对受害系统的访问权限。所有形式的网络钓鱼都是以电子方式进行的社会工程。网络钓鱼可以有针对性，称为鱼叉式网络钓鱼。在鱼叉式网络钓鱼中，特定的个人、公司或行业将成为攻击者的目标。更一般地说，攻击者可以进行无针对性的网络钓鱼，例如大规模恶意软件垃圾邮件活动。

---

### T1566.001 Separphing Attachment  钓鱼附件

Adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. Spearphishing attachment is a specific variant of spearphishing. Spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. All forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. In this scenario, adversaries attach a file to the spearphishing email and usually rely upon [User Execution](https://attack.mitre.org/techniques/T1204) to gain execution. Spearphishing may also involve social engineering techniques, such as posing as a trusted source.

攻击者可能会发送带有恶意附件的鱼叉式网络钓鱼电子邮件，以试图获得对受害系统的访问权限。鱼叉式网络钓鱼附件是鱼叉式网络钓鱼的一种特定变体。鱼叉式网络钓鱼附件不同于其他形式的鱼叉式网络钓鱼，因为它使用附加到电子邮件的恶意软件。所有形式的鱼叉式网络钓鱼都是针对特定个人、公司或行业的电子交付社会工程。在这种情况下，攻击者将文件附加到鱼叉式网络钓鱼电子邮件中，并且通常依靠用户执行来获得执行。鱼叉式网络钓鱼还可能涉及社会工程技术，例如冒充可信来源。

---

附件有许多选项，例如 Microsoft Office 文档，可执行文件，PDF 或存档文件。打开附件后，攻击者的有效负载会利用漏洞或直接在用户的系统上执行。

鱼叉式网络钓鱼电子邮件的文本通常试图给出一个合理的理由， 说明为什么要打开文件，并且可以解释如何绕过系统保护以便这样做。该电子邮件还可能包含有关如何解密附件的说明，例如 zip 文件密码，以逃避电子邮件边界防御。攻击者经常操纵文件扩展名和图标，以使附加的可执行文件看起来像是文档文件，或者利用一个应用程序的文件看起来是另 一个应用程序的文件

---

#### 缓解措施

- [M1049](https://attack.mitre.org/mitigations/M1049) [Antivirus/Antimalware - 防病毒/反恶意软件](https://attack.mitre.org/mitigations/M1049) 

  防病毒软件还可以自动隔离可疑文件。

- [M1031](https://attack.mitre.org/mitigations/M1031) [ Network Intrusion Prevention - 网络入侵防御](https://attack.mitre.org/mitigations/M1031) 

  网络入侵防御系统和旨在扫描和删除恶意电子邮件附件的系统可用于阻止活动。

- [M1021](https://attack.mitre.org/mitigations/M1021) [ Restrict Web-Based Content - 限制基于 Web 的内容](https://attack.mitre.org/mitigations/M1021)

  默认情况下阻止不应通过电子邮件传输的未知或未使用的附件，作为防止某些矢量(如 `.scr、.exe、.pif、.cpl` 等) 的最佳做法。一些电子邮件扫描设备可以打开和分析压缩和加密 zip 和 rar 等格式，可用于隐藏恶意附件。

- [M1054](https://attack.mitre.org/mitigations/M1054) [Software Configuration - 软件配置](https://attack.mitre.org/mitigations/M1054)

  使用反欺骗和电子邮件身份验证机制，根据发件人域的有效性检查(使用 SPF) 和邮件的完整性(使用 DKIM) 来过滤邮件。在组织内启用这些机制(通过 DMARC 等策略) 可能使收件人(组织内和跨域) 能够执行类似的消息过滤和验证。

- [M1017](https://attack.mitre.org/mitigations/M1017) [User Training](https://attack.mitre.org/mitigations/M1017) 

  可以训练用户识别社会工程技术和鱼叉式网络钓鱼电子邮件。

---

#### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  监控第三方应用程序日志记录、消息传递和/或其他可能发送带有恶意附件的鱼叉式网络钓鱼电子邮件以试图访问受害系统的工件。基于 DKIM+SPF 或标头分析的过滤有助于检测电子邮件发件人何时被欺骗。

  当恶意文档和附件被扫描并存储在电子邮件服务器或用户计算机上时，防病毒软件可能会检测到它们。监控从 Microsoft Office 和其他生产力软件产生的可疑后代进程。

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) [File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation) 

  从带有恶意附件的鱼叉式网络钓鱼电子邮件中监控新构建的文件，以试图访问受害系统。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) 

  - [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)

    监控和分析与不遵循预期协议标准和流量的协议相关的 SSL/TLS 流量模式和数据包检查(例如，不属于已建立流量的无关数据包、无故或异常流量模式、异常语法或结构) 。考虑与流程监控和命令行的相关性，以检测与流量模式相关的异常流程执行和命令行参数(例如，监控使用通常不会为相应协议启动连接的文件的异常情况) 。基于 DKIM+SPF 或标头分析的过滤有助于检测电子邮件发件人何时被欺骗

  - [Network Traffic Flow - 网络流量](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow) 

    监视网络数据中不常见的数据流。使用通常不具有网络通信或以前从未见过的网络的进程是可疑的。

---

### T1566.002 Spearphishing Link 钓鱼链接

Adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. Spearphishing with a link is a specific variant of spearphishing. It is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. Spearphishing may also involve social engineering techniques, such as posing as a trusted source.

攻击者可能会发送带有恶意链接的鱼叉式网络钓鱼电子邮件，以试图获得对受害系统的访问权限。带有链接的鱼叉式网络钓鱼是鱼叉式网络钓鱼的一种特定变体。它不同于其他形式的鱼叉式网络钓鱼，因为它使用链接下载电子邮件中包含的恶意软件，而不是将恶意文件附加到电子邮件本身，以避免可能检查电子邮件附件的防御措施。鱼叉式网络钓鱼还可能涉及社会工程技术，例如冒充可信来源。

所有形式的鱼叉式网络钓鱼都是以电子方式提供的针对特定个人，公司或行业的社会工程。在这种情况下，恶意电子邮件包含链接。通常，链接将 伴随社会工程文本，并要求用户主动点击或复制并将 URL 粘贴到浏览器中，从而利用用户执行。被访问的网站可能使用漏洞攻击来破坏 Web 浏览器，或者用户会被提示下载应用程序、文档、zip 文件，甚至是可执行文件，这首先取决于电子邮件的借口。攻击者还可以包括旨在与电子邮件阅读器直接交互的链接，包括旨在直接利用终端系统的嵌入式图像或验证电子邮件的接收(即网络错误/网络信标) 

---

#### 缓解措施

- [M1047](https://attack.mitre.org/mitigations/M1047) [Audit](https://attack.mitre.org/mitigations/M1047) 

  审核应用程序及其权限，以确保根据必要性和最小特权原则限制对数据和资源的访问。

- [M1021](https://attack.mitre.org/mitigations/M1021) [ Restrict Web-Based Content - 限制基于 Web 的内容](https://attack.mitre.org/mitigations/M1021)

  确定某些可用于鱼叉式网络钓鱼的网站是否是业务运营所必需的，并在无法很好地监控活动或构成重大风险时考虑阻止访问。

- [M1054](https://attack.mitre.org/mitigations/M1054) [ Software Configuration - 软件配置](https://attack.mitre.org/mitigations/M1054) 

  使用反欺骗和电子邮件身份验证机制，根据发件人域的有效性检查(使用 SPF) 和邮件的完整性(使用 DKIM) 来过滤邮件。在组织内启用这些机制(通过 DMARC 等策略) 可能使收件人(组织内和跨域) 能够执行类似的消息过滤和验证

  此外，政策可能会强制执行/安装浏览器扩展以防止 IDN 和同形异义词攻击。

- [M1018](https://attack.mitre.org/mitigations/M1018) [ User Account Management - 用户账户管理](https://attack.mitre.org/mitigations/M1018)

  Azure AD 管理员对用户向不熟悉或未经验证的第三方应用程序授予同意的能力施加限制。

- [M1017](https://attack.mitre.org/mitigations/M1017) [ User Training ](https://attack.mitre.org/mitigations/M1017)

  可以训练用户识别社会工程技术和带有恶意链接的鱼叉式网络钓鱼电子邮件，其中包括使用 OAuth 2.0 同意的网络钓鱼。此外，用户可以对他们访问的域进行目视检查；但是，ASCII 和 IDN 域中的同形异义词可能会使手动检查变得困难。网络钓鱼培训和其他网络安全培训可能会提高人们在访问网站之前检查 URL 的意识。

---

#### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  监控第三方应用程序日志记录、消息传递和/或其他可能发送带有恶意链接的鱼叉式网络钓鱼电子邮件以试图访问受害系统的工件。基于 DKIM+SPF 或标头分析的过滤有助于检测电子邮件发件人何时被欺骗。电子邮件中的 URL 检查(包括扩展缩短的链接) 可以帮助检测指向已知恶意站点的链接。引爆室可用于检测这些链接，并自动转到这些站点以确定它们是否具有潜在恶意，或者在用户访问该链接时等待并捕获内容。
  
- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) 

  - [ Network Traffic Content 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content) 

    监控和分析与不遵循预期协议标准和流量的协议相关的 SSL/TLS 流量模式和数据包检查(例如，不属于已建立流量的无关数据包、无故或异常流量模式、异常语法或结构) 。考虑与流程监控和命令行的相关性，以检测与流量模式相关的异常流程执行和命令行参数(例如，监控使用通常不会为相应协议启动连接的文件的异常情况) 。

    此外，通过使用滥用不同字符集的国际化域名(例如受信任站点的西里尔文与拉丁文版本) ，监控克隆站点和同形异义词的网络流量。

  - [Network Traffic Flow - 网络流量](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow) 

    监视网络数据中不常见的数据流。使用通常不具有网络通信或以前从未见过的网络的进程是可疑的。


---

### T1566.003 [Spearphishing via Service](https://attack.mitre.org/techniques/T1566/003) 通过服务器进行鱼叉式网络钓鱼

Adversaries may send spearphishing messages via third-party services in an attempt to gain access to victim systems. Spearphishing via service is a specific variant of spearphishing. It is different from other forms of spearphishing in that it employs the use of third party services rather than directly via enterprise email channels.

攻击者可能会通过第三方服务发送鱼叉式网络钓鱼消息，试图访问受害系统。通过服务进行的鱼叉式网络钓鱼是鱼叉式网络钓鱼的一种特定变体。它不同于其他形式的鱼叉式网络钓鱼，因为它使用第三方服务而不是直接通过企业电子邮件渠道。

所有形式的鱼叉式网络钓鱼都是以电子方式提供的针对特定个人，公司或行业的社会工程。在这种情况下，攻击者通过各种社交媒体服务，个人网络邮件和其他非企业控制的服务发送消息。与企业相比，这些服务更可能具有不太严格的安全策略。与大多数类型的鱼叉式网络钓鱼一样，所发送的服务是与目标产生融洽关系，或以某种方式获得目标的兴趣。攻击者会创建虚假的社交媒体帐户，并向员工发送潜在工作机会的信息。

这样做可以提供一个合理的理由来询问在环境中运行的服务、策略和软件。然后， 攻击者可以通过这些服务发送恶意链接或附件。 一个常见的例子是通过社交媒体与目标建立融洽关系，然后将内容发送到目标在其工作计算机上使用的个人网络邮件服务。这允许攻击者绕过对工作帐户的某些电子邮件限制，并且目标更有可能打开文件，因为内容是他们期望的东西。如果有效负载不能按预期工作，则攻击者可以继续正常通信，并与目标进行故障排除，了解如何使其正常工作

---

#### 缓解措施

- [M1049](https://attack.mitre.org/mitigations/M1049) [Antivirus/Antimalware 防病毒/反恶意软件](https://attack.mitre.org/mitigations/M1049)

  防病毒软件还可以自动隔离可疑文件。

- [M1021](https://attack.mitre.org/mitigations/M1021) [ Restrict Web-Based Content - 限制基于 Web 的内容](https://attack.mitre.org/mitigations/M1021)

  确定某些社交媒体网站、个人网络邮件服务或其他可用于鱼叉式网络钓鱼的服务是否是业务运营所必需的，并在无法很好地监控活动或构成重大风险时考虑阻止访问。

- [M1017](https://attack.mitre.org/mitigations/M1017) [User Training](https://attack.mitre.org/mitigations/M1017) 

  可以训练用户识别社会工程技术和带有恶意链接的鱼叉式网络钓鱼消息。

---

#### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015)  [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  监控第三方应用程序日志记录、消息传递和/或其他可能通过第三方服务发送鱼叉式钓鱼消息以试图访问受害系统的工件。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) 

  - [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)

    监控和分析与不遵循预期协议标准和流量流的协议相关的流量模式和数据包检查(例如，不属于已建立流量的无关数据包、无偿或异常流量模式、异常语法或结构) 。考虑与流程监控和命令行的相关性，以检测与流量模式相关的异常流程执行和命令行参数(例如，监控使用通常不会为相应协议启动连接的文件的异常情况) 。

  - [Network Traffic Flow - 网络流量](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)

    监视网络数据中不常见的数据流。使用通常不具有网络通信或以前从未见过的网络的进程是可疑的。


---

### 缓解措施

- [M1049](https://attack.mitre.org/mitigations/M1049) [Antivirus/Antimalware  防病毒/反恶意软件](https://attack.mitre.org/mitigations/M1049) 

  杀毒软件可以自动隔离可疑文件。

- [M1031](https://attack.mitre.org/mitigations/M1031) [ Network Intrusion Prevention - 网络入侵防御](https://attack.mitre.org/mitigations/M1031)

  网络入侵防御系统和旨在扫描和删除恶意电子邮件附件或链接的系统可用于阻止活动。

- [M1021](https://attack.mitre.org/mitigations/M1021) [ Restrict Web-Based Content - 限制基于 Web 的内容](https://attack.mitre.org/mitigations/M1021)

  确定可用于网络钓鱼的某些网站或附件类型(例如：.scr、.exe、.pif、.cpl 等) 是否是业务运营所必需的，如果无法很好地监控活动或构成威胁，则考虑阻止访问重大风险。

- [M1054](https://attack.mitre.org/mitigations/M1054) [ Software Configuration - 软件配置](https://attack.mitre.org/mitigations/M1054) 

  使用反欺骗和电子邮件身份验证机制，根据发件人域的有效性检查(使用 SPF) 和邮件的完整性(使用 DKIM) 来过滤邮件。在组织内启用这些机制(通过 DMARC 等策略) 可能使收件人(组织内和跨域) 能够执行类似的消息过滤和验证。

---

### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  监控第三方应用程序日志记录、消息传递和/或其他可能发送网络钓鱼消息以获取对受害者系统的访问权限的工件。基于 DKIM+SPF 或标头分析的过滤有助于检测电子邮件发件人何时被欺骗。 电子邮件中的 URL 检查(包括扩展缩短的链接) 可以帮助检测指向已知恶意站点的链接。引爆室可用于检测这些链接，并自动转到这些站点以确定它们是否具有潜在恶意，或者在用户访问该链接时等待并捕获内容。

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) [File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation)

  监视网络钓鱼消息中新建的文件以获取对受害系统的访问权限。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) 

  - [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)

    监控和分析与不遵循预期协议标准和流量的协议相关的 SSL/TLS 流量模式和数据包检查(例如，不属于已建立流量的无关数据包、无故或异常流量模式、异常语法或结构) 。考虑与流程监控和命令行的相关性，以检测与流量模式相关的异常流程执行和命令行参数(例如，监控使用通常不会为相应协议启动连接的文件的异常情况) 。基于 DKIM+SPF 或标头分析的过滤有助于检测电子邮件发件人何时被欺骗。

  - [Network Traffic Flow - 网络流量](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)

    监视网络数据中不常见的数据流。使用通常不具有网络通信或以前从未见过的网络的进程是可疑的。


---

## [T1091](https://attack.mitre.org/techniques/T1091)  [Replication Through Removable Media](https://attack.mitre.org/techniques/T1091) 通过移动介质复制

Adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of Autorun features when the media is inserted into a system and executes. In the case of Lateral Movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. In the case of Initial Access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.

通过将恶意软件复制到可移动媒体并在媒体插入系统并执行时利用自动运行功能，攻击者可能会进入系统，可能是那些在断开连接或气隙网络上的系统。在横向移动的情况下，这可能通过修改存储在可移动媒体上的可执行文件或通过复制恶意软件并将其重命名为看起来像合法文件来诱骗用户在单独的系统上执行它来发生。在初始访问的情况下，这可能通过手动操作媒体、修改用于初始格式化媒体的系统或修改媒体固件本身来实现。

> air-gapped networks是指一种网络安全措施，用于确保一个安全的计算机网络与不安全的网络，如公共互联网或不安全的局域网，物理隔离。这意味着一个计算机或网络没有任何网络接口控制器连接到其他网络，有一个物理或概念上的空气隔离，类似于水暖中用于保持水质的空气隔离。这种方式可以提供最大程度的网络保护，防止外部攻击。要在外部世界和空气隔离的系统之间传输数据，需要将数据写入物理介质，如可移动磁盘或USB闪存驱动器，并在计算机之间物理移动它。
>
> [Air gap (networking) - Wikipedia --- 气隙(网络) ——维基百科](https://en.wikipedia.org/wiki/Air_gap_(networking))
>
> [What Is an Air-Gapped Network? Why Should You Use One? (makeuseof.com)](https://www.makeuseof.com/what-is-an-air-gapped-network/)
>
> [Message from SentinelOne](https://www.sentinelone.com/blog/air-gapped-networks-a-false-sense-of-security/)

---

### 缓解措施

- [M1040](https://attack.mitre.org/mitigations/M1040) [ Behavior Prevention on Endpoin -  端点行为预防](https://attack.mitre.org/mitigations/M1040)

  在 Windows 10 上，启用攻击面减少 (ASR) 规则以阻止未签名/不受信任的可执行文件(例如 `.exe`、`.dll` 或 `.scr`) 从 USB 可移动驱动器运行。

- [M1042](https://attack.mitre.org/mitigations/M1042) [ Disable or Remove Feature or Program - 禁用或删除功能或程序](https://attack.mitre.org/mitigations/M1042)

  如果不需要，请禁用自动运行

  如果业务运营不需要，则在组织策略级别禁止或限制可移动媒体。 

- [M1034](https://attack.mitre.org/mitigations/M1034) [ Limit Hardware Installation - 限制硬件安装](https://attack.mitre.org/mitigations/M1034)

  限制在网络中使用 USB 设备和可移动媒体。

---

### 检测

- [DS0016](https://attack.mitre.org/datasources/DS0016) [Drive](https://attack.mitre.org/datasources/DS0016) [Drive Creation](https://attack.mitre.org/datasources/DS0016/#Drive%20Creation)

  监视新构建的驱动器号或可移动媒体的安装点

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) 

  - [File Access - 文件访问](https://attack.mitre.org/datasources/DS0022/#File%20Access)

    监视在可移动媒体上访问的意外文件。

  - [File Creation - 文件新建](https://attack.mitre.org/datasources/DS0022/#File%20Creation)

    监视可移动媒体上新建的文件

- [DS0009](https://attack.mitre.org/datasources/DS0009) [Process](https://attack.mitre.org/datasources/DS0009) [Process Creation - 进程新建](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)

  监视在可移动媒体安装后或由用户启动时从可移动媒体执行的新执行进程。如果以这种方式使用远程访问工具进行横向移动，那么执行后很可能会发生额外的动作，例如打开网络连接以进行命令和控制以及系统和网络信息发现。


---

## [T1195](https://attack.mitre.org/techniques/T1195) [ Supply Chain Compromise](https://attack.mitre.org/techniques/T1195) 供应链渗透

Adversaries may manipulate products or product delivery mechanisms prior to receipt by a final consumer for the purpose of data or system compromise.

攻击者可能会在最终消费者收到产品或产品交付机制之前操纵产品或产品交付机制，以达到破坏数据或系统的目的。

---

### T1195.001 Compromise Software Dependencies and Development Tools  破坏软件依赖和开发工具

Adversaries may manipulate software dependencies and development tools prior to receipt by a final consumer for the purpose of data or system compromise. Applications often depend on external software to function properly. Popular open source projects that are used as dependencies in many applications may be targeted as a means to add malicious code to users of the dependency.

攻击者可能会在最终消费者收到之前操纵软件依赖项和开发工具，以达到破坏数据或系统的目的。应用程序通常依赖于外部软件才能正常运行。在许多应用程序中用作依赖项的流行开源项目可能会成为向依赖项用户添加恶意代码的手段。

---

`栗子`: [S0658](https://attack.mitre.org/software/S0658) - [XCSSET](https://attack.mitre.org/software/S0658)

XCSSET 通过枚举 `/Library/Ruby/Gems` 文件夹下的 CocoaPods `target_integrator.rb` 文件或枚举给定目录下的所有 `.xcodeproj` 文件夹，将恶意代码添加到主机的 Xcode 项目中。 XCSSET 然后将脚本和 Mach-O 文件下载到 Xcode 项目文件夹中。

> XCSSET 是一个针对 Xcode 应用程序开发人员的 macOS 模块化后门。 XCSSET 于 2020 年 8 月首次被发现，已被用于安装后门组件、修改浏览器应用程序、进行收集并提供类似勒索软件的加密功能。

---

#### 缓解措施

- [M1051](https://attack.mitre.org/mitigations/M1051) [Update Software](https://attack.mitre.org/mitigations/M1051) 应该实施补丁管理流程来检查未使用的依赖项、未维护和/或以前易受攻击的依赖项、不必要的功能、组件、文件和文档。

- [M1016](https://attack.mitre.org/mitigations/M1016) [Vulnerability Scanning - 漏洞扫描](https://attack.mitre.org/mitigations/M1016)

  还应实施对漏洞来源的持续监控以及自动和手动代码审查工具的使用。

---

#### 检测

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) [File Metadata](https://attack.mitre.org/datasources/DS0022/#File%20Metadata) 

  通过散列检查或其他完整性检查机制使用分布式二进制文件的验证。扫描下载的恶意签名并尝试在部署之前测试软件和更新，同时注意潜在的可疑活动。

---

### T1195.002 [Compromise Software Supply Chain](https://attack.mitre.org/techniques/T1195/002) 渗透软件供应链

Adversaries may manipulate application software prior to receipt by a final consumer for the purpose of data or system compromise. Supply chain compromise of software can take place in a number of ways, including manipulation of the application source code, manipulation of the update/distribution mechanism for that software, or replacing compiled releases with a modified version.

攻击者可能会在最终消费者收到应用软件之前操纵应用软件，以达到破坏数据或系统的目的。软件的供应链妥协可以通过多种方式发生，包括操纵应用程序源代码、操纵该软件的更新/分发机制，或者用修改后的版本替换编译版本。

---

`栗子`: 

- [S0222](https://attack.mitre.org/software/S0222) [CCBkdr](https://attack.mitre.org/software/S0222) 

  CCBkdr 已添加到 CCleaner 软件的合法签名版本 5.33 中，并在 CCleaner 的分发站点上分发。

  > CCBkdr 是注入到 CCleaner 签名版本中并从 CCleaner 的分发网站分发的恶意软件。

---

#### 缓解措施

- [M1051](https://attack.mitre.org/mitigations/M1051) [ Update Software](https://attack.mitre.org/mitigations/M1051) 

  应实施补丁管理流程以检查未使用的应用程序、未维护和/或以前易受攻击的软件、不必要的功能、组件、文件和文档。

- [M1016](https://attack.mitre.org/mitigations/M1016) [Vulnerability Scanning  漏洞扫描](https://attack.mitre.org/mitigations/M1016)

  还应实施对漏洞来源的持续监控以及自动和手动代码审查工具的使用。

---

#### 检测

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) [File Metadata](https://attack.mitre.org/datasources/DS0022/#File%20Metadata)

  通过散列检查或其他完整性检查机制使用分布式二进制文件的验证。扫描下载的恶意签名并尝试在部署之前测试软件和更新，同时注意潜在的可疑活动。

---

### T1195.003 [Compromise Hardware Supply Chain](https://attack.mitre.org/techniques/T1195/003) 渗透硬件供应链

Adversaries may manipulate hardware components in products prior to receipt by a final consumer for the purpose of data or system compromise. By modifying hardware or firmware in the supply chain, adversaries can insert a backdoor into consumer networks that may be difficult to detect and give the adversary a high degree of control over the system. Hardware backdoors may be inserted into various devices, such as servers, workstations, network infrastructure, or peripherals.

攻击者可能会在最终消费者收到产品之前操纵产品中的硬件组件，以达到破坏数据或系统的目的。通过修改供应链中的硬件或固件，攻击者可以在消费者网络中插入后门，这可能难以检测，并使攻击者对系统具有高度控制权。硬件后门可以插入各种设备，例如服务器、工作站、网络基础设施或外围设备。

---

#### 缓解措施

- [M1046](https://attack.mitre.org/mitigations/M1046) [Boot Integrity](https://attack.mitre.org/mitigations/M1046) 

  使用可信平台模块技术和安全或可信的启动过程来防止系统完整性受到损害。检查现有 BIOS 或 EFI 的完整性以确定它是否易受修改。

---

#### 检测

- [DS0013](https://attack.mitre.org/datasources/DS0013) [Sensor Health](https://attack.mitre.org/datasources/DS0013) [ Host Status](https://attack.mitre.org/datasources/DS0013/#Host%20Status)

  对硬件进行物理检查以查找潜在的篡改。对可以出于恶意目的操纵的预操作系统启动机制执行完整性检查，并与已知的良好基线行为进行比较。

---

### 缓解措施

- [M1051](https://attack.mitre.org/mitigations/M1051) [ Update Software - 更新软件](https://attack.mitre.org/mitigations/M1051) 

  应该实施补丁管理流程来检查未使用的依赖项、未维护和/或以前易受攻击的依赖项、不必要的功能、组件、文件和文档。

- [M1016](https://attack.mitre.org/mitigations/M1016) [Vulnerability Scanning  漏洞扫描](https://attack.mitre.org/mitigations/M1016)

  还应实施对漏洞来源的持续监控以及自动和手动代码审查工具的使用。

---

### 检测

- [DS0022](https://attack.mitre.org/datasources/DS0022) [File](https://attack.mitre.org/datasources/DS0022) [File Metadata - 文件元数据](https://attack.mitre.org/datasources/DS0022/#File%20Metadata)

  通过散列检查或其他完整性检查机制使用分布式二进制文件的验证。扫描下载的恶意签名并尝试在部署之前测试软件和更新，同时注意潜在的可疑活动。

- [DS0013](https://attack.mitre.org/datasources/DS0013) [Sensor Health](https://attack.mitre.org/datasources/DS0013) [Host Status - 主机状态(健康状况)](https://attack.mitre.org/datasources/DS0013/#Host%20Status)

  对硬件进行物理检查以查找潜在的篡改。对可以出于恶意目的操纵的预操作系统启动机制执行完整性检查，并与已知的良好基线行为进行比较。


---
## T1199 [Trusted Relationship](https://attack.mitre.org/techniques/T1199) 利用可靠关系

Adversaries may breach or otherwise leverage organizations who have access to intended victims. Access through trusted third party relationship abuses an existing connection that may not be protected or receives less scrutiny than standard mechanisms of gaining access to a network.

攻击者可能会破坏或以其他方式利用有权接触目标受害者的组织。通过受信任的第三方关系进行访问会滥用现有连接，该连接可能不受保护或受到的审查少于获得网络访问权限的标准机制。

组织经常授予第二或第三方外部提供者更高的访问权限，以便允许他们管攻击者理内部系统。这些关系的一些例子包括攻击者IT攻击者服务承包商、托管安全供应攻击者商、基础设施承包商(例如攻击者HVAC、电梯、物理安全)。第三方提供者的访攻击者问可能仅限于正在维护的基础设施，但可能与企业的其他部分存在于同一攻击者网络上。因此，另一方用于访问内部网络系统的有效帐户可能被破坏和使攻击者用

---

### 缓解措施

- [M1032](https://attack.mitre.org/mitigations/M1032) [Multi-factor Authentication 多重身份验证](https://attack.mitre.org/mitigations/M1032)

  要求对所有委派的管理员帐户进行 MFA

- [M1030](https://attack.mitre.org/mitigations/M1030) [Network Segmentation  网络分割](https://attack.mitre.org/mitigations/M1030)

  网络分段可用于隔离不需要广泛网络访问的基础设施组件。

- [M1018](https://attack.mitre.org/mitigations/M1018) [ User Account Management - 用户账户管理](https://attack.mitre.org/mitigations/M1018)

  妥善管理信任关系中各方使用的帐户和权限，以最大程度地减少该方的潜在滥用行为以及该方被对手破坏的情况。在 Office 365 环境中，可以在“合作伙伴关系”页面下查看合作伙伴关系和角色。

---

### 检测

- [DS0015](https://attack.mitre.org/datasources/DS0015) [Application Log](https://attack.mitre.org/datasources/DS0015) [Application Log Content - 应用程序日志内容](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)

  配置管理数据库 (CMDB) 和其他资产管理系统可能有助于检测网络上不应存在的计算机系统或网络设备。监控任何委派管理员帐户采取的意外操作的日志

- [DS0028](https://attack.mitre.org/datasources/DS0028) [Logon Session](https://attack.mitre.org/datasources/DS0028) 

  - [Logon Session Creation - 登录会话创建](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)

    监控可能破坏或以其他方式利用有权访问目标受害者的组织的新构建的登录行为。

  - [Logon Session Metadata - 登录会话元数据](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)

    将其他安全系统与登录信息相关联(例如，用户有一个活动的登录会话但尚未进入建筑物或没有 VPN 访问权限) 。

- [DS0029](https://attack.mitre.org/datasources/DS0029) [Network Traffic](https://attack.mitre.org/datasources/DS0029) [Network Traffic Content - 网络流量内容](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)

  监控和分析与不遵循预期协议标准和流量的协议相关的流量模式和数据包检查(例如，不属于已建立流量的无关数据包、无偿或异常流量模式、异常语法或结构) 受信任的实体。考虑与流程监控和命令行的相关性，以检测与流量模式相关的异常流程执行和命令行参数(例如，监控使用通常不会为相应协议启动连接的文件的异常情况) 。


---
## T1078 [Valid Accounts](https://attack.mitre.org/techniques/T1078) 利用合法账户

Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Compromised credentials may be used to bypass access controls placed on various resources on systems within the network and may even be used for persistent access to remote systems and externally available services, such as VPNs, Outlook Web Access, network devices, and remote desktop. Compromised credentials may also grant an adversary increased privilege to specific systems or access to restricted areas of the network. Adversaries may choose not to use malware or tools in conjunction with the legitimate access those credentials provide to make it harder to detect their presence.

攻击者可能会获取和滥用现有帐户的凭据，以此作为获得初始访问权限、持久性、特权升级或防御规避的手段。泄露的凭据可用于绕过对网络内系统上各种资源的访问控制，甚至可用于持续访问远程系统和外部可用服务，例如 VPN、Outlook Web Access、网络设备和远程桌面。受损的凭据还可能授予攻击者对特定系统的更高特权或对网络受限区域的访问权限。攻击者可能会选择不将恶意软件或工具与这些凭据提供的合法访问结合使用，从而更难检测到它们的存在。

攻击者可以使用凭据访问技术窃取特定用户或服务帐户的凭据，或者通过社会工程在其侦察过程中更早地捕获凭据，以获得初始访问权。攻击者可能使用的帐户可以分为三类:默认帐户、本地帐户和域帐户。默认帐户是那些内置到操作系统中的帐户，比如Windows系统上的访客或管理员帐户，或者其他类型的系统、软件或设备上的默认工厂/供应商帐户。本地帐户是由组织为用户、远程支持、服务或单个系统或服务上的管理而配置的帐户。域帐户是由ActiveDirectory域服务管理的，其中访问和权限是跨属于该域的系统和服务配置的。域帐户可以覆盖用户、管理员和服务。受危害的凭据可以用来绕过对网络内系统上各种资源的访问控制，甚至可以用于对远程系统和外部可用服务(如VPNs、OutlookWebaccess和远程桌面)的持久访问。受损害的凭据还可能授予攻击者对特定系统或访问网络的受限区域的更多特权。攻击者可能会选择不使用恶意软件或工具，使用这些证书提供的合法访问权限，从而使检测它们的存在变得更加困难。缺省帐户也不限于客户机上的客户机和管理员，它们还包括为网络设备和计算机应用程序等设备预先设置的帐户，无论这些设备是内部的、开放源码的还是COTS的。预置用户名和密码组合的设备对安装后不更改it的组织构成严重威胁，因为它们很容易成为攻击者的目标。类似地，攻击者也可以利用公开公开的私钥，或偷来的私钥，通过远程服务合法地连接到远程环境帐户访问、凭据和跨系统网络的权限的重叠是值得关注的，因为攻击者可能能够跨帐户和系统进行切换，以达到较高的访问级别

---

### T1078.001 [Default Accounts](https://attack.mitre.org/techniques/T1078/001) 默认账户

Adversaries may obtain and abuse credentials of a default account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Default accounts are those that are built-into an OS, such as the Guest or Administrator accounts on Windows systems. Default accounts also include default factory/provider set accounts on other types of systems, software, or devices, including the root user account in AWS and the default service account in Kubernetes.

攻击者可能会获取并滥用默认帐户的凭据，以此作为获得初始访问权限、持久性、特权升级或防御规避的手段。默认帐户是操作系统内置的帐户，例如 Windows 系统上的来宾或管理员帐户。默认账户还包括其他类型的系统、软件或设备上的默认工厂/提供商设置账户，包括 AWS 中的根用户账户和 Kubernetes 中的默认服务账户。

---

#### 缓解措施

- [M1027](https://attack.mitre.org/mitigations/M1027) [Password Policies](https://attack.mitre.org/mitigations/M1027)

  使用默认用户名和密码的应用程序和设备应在安装后和部署到生产环境之前立即更改。

---

#### 检测

- [DS0028](https://attack.mitre.org/datasources/DS0028) [Logon Session](https://attack.mitre.org/datasources/DS0028) [Logon Session Creation - 登录会话创建](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)

  监视已激活或登录的默认帐户的新建登录行为。这些审计还应包括检查任何设备和应用程序的默认凭据或 SSH 密钥，如果发现任何问题，应立即更新。

- [DS0002](https://attack.mitre.org/datasources/DS0002) [User Account](https://attack.mitre.org/datasources/DS0002) [User Account Authentication -  用户账户认证](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication)

  通常通过提供凭据来监视用户是否尝试访问网络或计算资源

---

### T1078.002 Domain Accounts 域账户

Adversaries may obtain and abuse credentials of a domain account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Domain accounts are those managed by Active Directory Domain Services where access and permissions are configured across systems and services that are part of that domain. Domain accounts can cover users, administrators, and services.

攻击者可能会获取并滥用域帐户的凭据，以此作为获得初始访问权限、持久性、特权升级或防御规避的手段。域帐户是由 Active Directory 域服务管理的帐户，其中访问和权限是跨属于该域的系统和服务配置的。域帐户可以涵盖用户、管理员和服务。

---

#### 缓解措施

- [M1032](https://attack.mitre.org/mitigations/M1032) [ Multi-factor Authentication - 多重身份验证](https://attack.mitre.org/mitigations/M1032)

  将多因素身份验证 (MFA) 集成为组织策略的一部分可以大大降低对手获得有效凭据控制的风险，这些凭据可用于其他策略，例如初始访问、横向移动和收集信息。 MFA 还可用于限制对云资源和 API 的访问。

- [M1026](https://attack.mitre.org/mitigations/M1026) [ Privileged Account Management - 特权账户管理](https://attack.mitre.org/mitigations/M1026)

  定期审核域帐户权限级别，以查找可能允许对手通过获取特权帐户的凭据来获得广泛访问权限的情况。不要将用户或管理域帐户放在跨系统的本地管理员组中，除非它们受到严格控制并且帐户的使用是分段的，因为这通常等同于在所有系统上拥有一个具有相同密码的本地管理员帐户。遵循企业网络设计和管理的最佳实践，以限制跨管理层的特权帐户使用。限制跨系统的凭据重叠，以防止在获得帐户凭据时进行访问。

- [M1017](https://attack.mitre.org/mitigations/M1017) [User Training](https://attack.mitre.org/mitigations/M1017)

  应用程序可以发送推送通知来验证登录，作为一种多因素身份验证 (MFA) 的形式。培训用户只接受有效的推送通知并报告可疑的推送通知。

---

#### 检测

- [DS0028](https://attack.mitre.org/datasources/DS0028) [Logon Session](https://attack.mitre.org/datasources/DS0028)

  - [Logon Session Creation - 登录会话创建](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation) 

    跨共享帐户(用户、管理员或服务帐户) 的系统监视可疑帐户行为。

    示例：

    - 一个账号同时登录多个系统；
    - 多个帐户同时登录同一台机器；
    - 在非正常时间或营业时间以外登录的帐户。

    活动可能来自交互式登录会话或进程所有权，来自用于作为特定帐户在远程系统上执行二进制文件的帐户。

  - [Logon Session Metadata - 登录会话元数据](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)   

    将其他安全系统与登录信息相关联(例如，用户有一个活动的登录会话但没有 VPN 访问权限) 。

- [DS0002](https://attack.mitre.org/datasources/DS0002) [User Account](https://attack.mitre.org/datasources/DS0002) [User Account Authentication - 用户账户认证](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication)

  监视用户访问网络或计算资源的尝试，通常是通过使用域身份验证服务，例如 Linux 上的系统安全服务守护进程 (sssd)

---

### T1078.003 [Local Accounts](https://attack.mitre.org/techniques/T1078/003) 本地账户

Adversaries may obtain and abuse credentials of a local account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.
攻击者可能会获取和滥用本地帐户的凭据，以此作为获得初始访问权限、持久性、特权升级或防御规避的手段。本地帐户是由组织配置的，供用户、远程支持、服务使用，或用于单个系统或服务的管理。

---

#### 缓解措施

- [M1027](https://attack.mitre.org/mitigations/M1027) [Password Policies](https://attack.mitre.org/mitigations/M1027) 

  确保本地管理员帐户在网络上的所有系统中都具有复杂、唯一的密码。

- [M1026](https://attack.mitre.org/mitigations/M1026) [ Privileged Account Management - 特权账户管理](https://attack.mitre.org/mitigations/M1026)

  定期审核本地帐户权限级别，以查找可能允许对手通过获取特权帐户的凭据来获得广泛访问权限的情况。

  这些审计应检查是否创建了未经授权的新本地帐户。实施 LAPS 可能有助于防止在域中重复使用本地管理员凭据

---

#### 检测

- [DS0028](https://attack.mitre.org/datasources/DS0028) [Logon Session](https://attack.mitre.org/datasources/DS0028)

  - [Logon Session Creation - 登录会话创建](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation) 

    跨共享帐户(用户、管理员或服务帐户) 的系统监视可疑帐户行为。示例：一个账号同时登录多个系统；多个帐户同时登录同一台机器；在非正常时间或营业时间以外登录的帐户。活动可能来自交互式登录会话或进程所有权，来自用于作为特定帐户在远程系统上执行二进制文件的帐户。

  - [Logon Session Metadata - 登录会话元数据](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)

    将其他安全系统与登录信息相关联(例如，用户有一个活动的登录会话但没有 VPN 访问权限) 。

- [DS0002](https://attack.mitre.org/datasources/DS0002) [User Account](https://attack.mitre.org/datasources/DS0002) [User Account Authentication - 用户账户认证](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication) 

  监视用户访问网络或计算资源的尝试，通常是通过使用域身份验证服务，例如 Linux 上的系统安全服务守护进程 (sssd)

---

### T1078.004 [Cloud Accounts](https://attack.mitre.org/techniques/T1078/004) 云账户

Adversaries may obtain and abuse credentials of a cloud account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Cloud accounts are those created and configured by an organization for use by users, remote support, services, or for administration of resources within a cloud service provider or SaaS application. In some cases, cloud accounts may be federated with traditional identity management system, such as Window Active Directory.

攻击者可能会获取和滥用云帐户的凭据，以此作为获得初始访问权限、持久性、特权升级或防御规避的手段。云帐户是由组织创建和配置的帐户，供用户、远程支持、服务使用，或用于管理云服务提供商或 SaaS 应用程序中的资源。在某些情况下，云帐户可能与传统的身份管理系统联合，例如 Window Active Directory。

---

#### 缓解措施

- [ M1032 ](https://attack.mitre.org/mitigations/M1032) [ Multi-factor Authentication - 多重身份验证](https://attack.mitre.org/mitigations/M1032) 

  对云帐户使用多重身份验证，尤其是特权帐户。这可以通过多种形式(例如硬件、虚拟、SMS) 实现，也可以使用管理报告功能进行审计。

- [ M1027 ](https://attack.mitre.org/mitigations/M1027) [ Password Policies ](https://attack.mitre.org/mitigations/M1027)

  确保云帐户，尤其是特权帐户，在网络上的所有系统中都具有复杂、唯一的密码。密码和访问密钥应定期轮换。如果凭据在您不知情的情况下遭到破坏，这会限制凭据可用于访问资源的时间。云服务提供商可能会跟踪访问密钥年龄，以帮助审核和识别可能需要轮换的密钥。

- [ M1026 ](https://attack.mitre.org/mitigations/M1026) [ Privileged Account Managemen - 特权账户管理](https://attack.mitre.org/mitigations/M1026)

  定期审查特权云帐户权限级别，以寻找可能允许对手获得广泛访问权限的权限级别。

  这些审查还应该检查是否创建了未经授权的新特权云帐户。

- [ M1018 ](https://attack.mitre.org/mitigations/M1018) [ User Account Management - 用户账户管理](https://attack.mitre.org/mitigations/M1018)

  定期审查用户帐户并删除那些不活跃或不需要的帐户。限制用户帐户创建其他帐户的能力。

- [ M1017 ](https://attack.mitre.org/mitigations/M1017) [ User Training ](https://attack.mitre.org/mitigations/M1017)

  应用程序可以发送推送通知来验证登录，作为一种多因素身份验证 (MFA) 的形式。培训用户只接受有效的推送通知并报告可疑的推送通知。

---

#### 检测

- [DS0028](https://attack.mitre.org/datasources/DS0028) [Logon Session](https://attack.mitre.org/datasources/DS0028) 

  - [Logon Session Creation - 登录会话创建](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)

    跨共享帐户的云服务监视可疑帐户行为。

  - [Logon Session Metadata - 登录会话元数据](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)

    将其他安全系统与登录信息相关联(例如，用户有一个活动的登录会话但没有 VPN 访问权限) 。

- [DS0002](https://attack.mitre.org/datasources/DS0002) [User Account](https://attack.mitre.org/datasources/DS0002) [User Account Authentication - 用户账户认证](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication)

  监控云帐户的活动以检测异常或恶意行为，例如访问帐户正常功能之外的信息或在非典型时间使用帐户。

---

### 缓解措施

- [M1013](https://attack.mitre.org/mitigations/M1013) [ Application Developer Guidance - 应用程序开发人员指南](https://attack.mitre.org/mitigations/M1013)

  确保应用程序不会不安全地存储敏感数据或凭据。 (例如，代码中的明文凭据、存储库中的已发布凭据或公共云存储中的凭据) 。

- [M1027](https://attack.mitre.org/mitigations/M1027) [Password Policies - 密码策略](https://attack.mitre.org/mitigations/M1027) 

  使用默认用户名和密码的应用程序和设备应在安装后和部署到生产环境之前立即更改

  如果可能，应定期更新使用 SSH 密钥的应用程序并妥善保护。

- [M1026](https://attack.mitre.org/mitigations/M1026) [ Privileged Account Management - 特权账户管理](https://attack.mitre.org/mitigations/M1026)

  定期审核域和本地帐户及其权限级别，以查找可能允许对手通过获取特权帐户的凭据来获得广泛访问权限的情况。 

  这些审计还应该包括是否启用了默认帐户，或者是否创建了未经授权的新本地帐户。遵循企业网络设计和管理的最佳实践，以限制跨管理层的特权帐户使用。

- [M1018](https://attack.mitre.org/mitigations/M1018) [ User Account Management - 用户账户管理](https://attack.mitre.org/mitigations/M1018)

  定期审核用户帐户的活动并停用或删除不再需要的帐户。

- [M1017](https://attack.mitre.org/mitigations/M1017) [User Training](https://attack.mitre.org/mitigations/M1017)

  应用程序可以发送推送通知来验证登录，作为一种多因素身份验证 (MFA) 的形式。培训用户只接受有效的推送通知并报告可疑的推送通知。

---

### 检测

- [DS0028](https://attack.mitre.org/datasources/DS0028) [Logon Session](https://attack.mitre.org/datasources/DS0028) 

  - [Logon Session Creation - 登录会话创建](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)

    监控新构造的登录行为，这些行为可能获取和滥用现有帐户的凭据作为获得初始访问、持久性、特权升级或防御规避的手段。将其他安全系统与登录信息相关联(例如，用户有一个活动的登录会话但尚未进入建筑物或没有 VPN 访问权限) 。

  - [Logon Session Metadata - 登录会话元数据](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)

    在共享帐户(用户、管理员或服务帐户) 的系统中查找可疑帐户行为。

    示例：一个账号同时登录多个系统；多个帐户同时登录同一台机器；在非正常时间或营业时间以外登录的帐户。活动可能来自交互式登录会话或进程所有权，来自用于作为特定帐户在远程系统上执行二进制文件的帐户。

- [DS0002](https://attack.mitre.org/datasources/DS0002) [User Account](https://attack.mitre.org/datasources/DS0002) [User Account Authentication - 用户账户认证](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication)

  监视用户可能获取和滥用现有帐户的凭据作为获得初始访问、持久性、特权升级或防御规避的手段的尝试。

---





