# Windows 安全

> [Powershell 攻击指南 2——Empire_powershsell empire_willowpy 的博客-CSDN 博客](https://blog.csdn.net/qq_34640691/article/details/110686135)

---

## 永久关闭 Windows 实时防护

> [Win11 关闭 Windows Defender 实时保护，暂时关闭和永久关闭方法 | Win10 怎么永久关闭 Windows Defender 实时保护\_COCO56（徐可可）的博客-CSDN 博客](https://blog.csdn.net/COCO56/article/details/128613164)

在需要完全关闭 Windows 防病毒设置时一般会选择在 Windows 安全中心进行相关配置

- 关闭防火墙

  ![image-20230625160629143](http://cdn.ayusummer233.top/DailyNotes/202306251606226.png)

- 关闭病毒和威胁防护

  ![image-20230625160704569](http://cdn.ayusummer233.top/DailyNotes/202306251607683.png)

  ![image-20230625160742889](http://cdn.ayusummer233.top/DailyNotes/202306251607978.png)

  不过这样关闭后, 实时防护仍旧会自动开启, 需要永久关闭的话可以参考如下流程:

  直接 Win 然后搜索组策略并打开

  ![image-20230625161403721](http://cdn.ayusummer233.top/DailyNotes/202306251614873.png)

  ![image-20230625161523466](http://cdn.ayusummer233.top/DailyNotes/202306251615540.png)

  将下面两项改为已启用

  ![image-20230625161756869](http://cdn.ayusummer233.top/DailyNotes/202306251617972.png)

  ![image-20230625161848713](http://cdn.ayusummer233.top/DailyNotes/202306251618831.png)

  然后回去看下 Windows 安全中心中的实时防护开关, 已经变成不可操作的状态了

  ![image-20230625161949403](http://cdn.ayusummer233.top/DailyNotes/202306251619476.png)

---

## Sysmon


> [Sysmon - Sysinternals | Microsoft Learn](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysmon)

---

### 简介

系统监视器(Sysmon) 是一项Windows 系统服务，也是一个设备驱动程序，一旦安装在系统上，就会在系统重新启动后一直驻留，以监视系统活动并将其记录到 Windows 事件日志中。 它提供有关进程创建、网络连接和文件创建时间更改的详细信息。 通过使用 [Windows 事件收集](https://msdn.microsoft.com/library/windows/desktop/bb427443(v=vs.85).aspx)或 [SIEM](https://en.wikipedia.org/wiki/security_information_and_event_management) 代理收集生成的事件，然后对事件进行分析，你可识别恶意或异常活动，并了解入侵者和恶意软件如何在网络上运行。

请注意，*Sysmon* 不会提供对其生成的事件的分析，也不会尝试保护或隐藏自己免受攻击者的攻击。

----

### 功能概述

*Sysmon* 包括以下功能：

- 记录当前进程和父进程中使用完整命令行创建的进程。
- 记录使用 SHA1（默认）、MD5、SHA256 或 IMPHASH 的进程映像文件的哈希。
- 可以同时使用多个哈希。
- 在进程内创建事件之中包含一个进程 GUID，当 Windows 重新使用进程 ID 时，允许事件的相关性。
- 在每个事件中包含会话 GUID，允许同一登录会话上事件的相关性。
- 记录驱动程序或 DLL 的加载及其签名与哈希。
- 记录磁盘和卷的原始读取访问打开次数。
- （可选）记录网络连接，包括每个连接的源进程、IP 地址、端口数量、主机名和端口名称。
- 检测文件创建时间的更改，以了解文件真正创建的时间。 修改文件创建时间戳是恶意软件惯用的伎俩来掩盖其轨道。
- 如果注册表中发生更改，则自动化重新加载配置。
- 进行规则筛选以动态包含或不包含某些事件。
- 在启动进程之初生成事件，以捕获相当复杂的内核模式恶意软件进行的活动。

---

### 使用

---

可以在 [Sysmon - Sysinternals | Microsoft Learn](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysmon)  下载 Sysmon 压缩包, 解压后通过命令行安装:

```powershell
sysmon64 -i
```

![image-20230921155938698](http://cdn.ayusummer233.top/DailyNotes/202309211559238.png)

---

使用简单命令行选项来安装和卸载 Sysmon，以及检查和修改其配置的常见用法：

安装：`sysmon64 -i [<configfile>]`
更新配置：`sysmon64 -c [<configfile>]`
安装事件清单：`sysmon64 -m`
打印架构：`sysmon64 -s`
卸载：`sysmon64 -u [force]`

| 参数   | 说明                                                                                            |
| :----- | :---------------------------------------------------------------------------------------------- |
| -i     | 安装服务和驱动程序。 （可选）采用配置文件。                                                     |
| **-c** | 如果未提供其他参数，则更新已安装的 Sysmon 驱动程序的配置或转储当前配置。 （可选）采用配置文件。 |
| **-m** | 安装事件清单（以及在服务安装时隐式完成）。                                                      |
| **-s** | 打印配置架构定义。                                                                              |
| **-u** | 卸载服务和驱动程序。 使用“`-u force`”会导致卸载继续进行，即使未安装一些组件。                   |

服务会立即记录事件，驱动程序会安装为引导启动驱动程序，从引导早期开始就捕获活动，服务会将启动时间写入活动日志。

在 Vista 以及更新的系统上，事件存储在 `Applications and Services Logs/Microsoft/Windows/Sysmon/Operational` 中。 在较旧的系统中，事件写入到“`System`”事件日志。

如果需要与配置文件有关的更多信息，请使用“`-? config`”命令。

指定 `-accepteula` 在安装时自动接受 EULA，否则系统会以交互方式提示你接受。

安装或卸载都不需要重启。

---

- 查看 Sysmon 运行状态

  ```powershell
  Get-Service -Name Sysmon
  ```

  ![image-20230705150949454](http://cdn.ayusummer233.top/DailyNotes/202307051509753.png)

- 停止 Sysmon

  ```cmd
  sc stop Sysmon
  ```

  ![image-20230705153607522](http://cdn.ayusummer233.top/DailyNotes/202307051536745.png)

  ![image-20230705153619818](http://cdn.ayusummer233.top/DailyNotes/202307051536930.png)

----

## 查看登录日志

`Win+X` 或直接搜索打开事件查看器 `->  Windows日志 -> 安全` 然后 `-> 操作 -> 查找` 或者 `右键安全 -> 查找` 

![image-20231023094609789](http://cdn.ayusummer233.top/DailyNotes/202310230946237.png)

然后搜寻事件 ID 接口

- 登录成功 - 4624
- 登录失败 - 4625

![image-20231024151558584](http://cdn.ayusummer233.top/DailyNotes/202310241515737.png)

---

## Process Explorer - 查看某个窗口是哪个进程调起的

> [Process Explorer - Sysinternals | Microsoft Learn --- Process Explorer - Sysinternals | 进程资源管理器微软学习](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer)
>
> [How to determine which process owns a toplevel window? - Super User --- 如何确定哪个进程拥有顶级窗口？ - 超级用户](https://superuser.com/questions/1299931/how-to-determine-which-process-owns-a-toplevel-window)

例如目前有个窗口不知道是哪个进程调起的, 且从视觉上也看不出什么信息, 那么可以考虑使用 Process Explorer 来进行查看, 该软件可以在  [Process Explorer - Sysinternals | Microsoft Learn --- Process Explorer - Sysinternals | 进程资源管理器微软学习](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer) 获取

![image-20230917203502299](http://cdn.ayusummer233.top/DailyNotes/202309172035378.png)

要查看某个窗口属于哪个进程可以如下操作, 拖动该按钮到需要识别的窗口上后即会在 Process Explorer 上高亮显示该窗口所属进程:

![image-20230917203613487](http://cdn.ayusummer233.top/DailyNotes/202309172036546.png)

---

## 定时任务

```cmd
schtasks /create /tn "T1053_005_OnLogon" /sc onlogon /tr "cmd.exe /c calc.exe"
schtasks /create /tn "T1053_005_OnStartup" /sc onstart /ru system /tr "cmd.exe /c calc.exe"
SCHTASKS /Create /SC ONCE /TN spawn /TR "C:\windows\system32\cmd.exe" /ST "20:10"
```

- `/tn`: `Task Name`
- `/sc`: `shcedule` - 后续接任务执行频率
  - `Once`: 一次性任务
  - `onlogon`: 用户登录时执行
  - `onstart`: 系统启动时执行
  - `daily`: 每天执行
- `/tr`: `Task Run` - 指定任务执行时运行的命令或程序
- `/st`: `Start Time` - 指定任务开始执行的时间
- `/S`: `Server` - 指定任务执行的服务器
- `/RU`: `Run User` - 指定任务执行的用户
- `/RP`: `Run Password` - 指定任务执行的用户密码

---

```powershell
$Action = New-ScheduledTaskAction -Execute "calc.exe"
$Trigger = New-ScheduledTaskTrigger -AtLogon
$User = New-ScheduledTaskPrincipal -GroupId "BUILTIN\Administrators" -RunLevel Highest
$Set = New-ScheduledTaskSettingsSet
$object = New-ScheduledTask -Action $Action -Principal $User -Trigger $Trigger -Settings $Set
Register-ScheduledTask AtomicTask -InputObject $object
```



---

## 域渗透

### 域内提权-42278/42287

> [域内提权漏洞CVE-2021-42287与CVE-2021-42278原理分析 - FreeBuf网络安全行业门户](https://www.freebuf.com/vuls/317773.html)
>
> [safebuffer/sam-the-admin: Exploiting CVE-2021-42278 and CVE-2021-42287 to impersonate DA from standard domain user --- safebuffer/sam-the-admin：利用 CVE-2021-42278 和 CVE-2021-42287 来模拟标准域用户的 DA (github.com)](https://github.com/safebuffer/sam-the-admin?tab=readme-ov-file)
>
> [eXploit – CVE-2021-42287/CVE-2021-42278 Weaponisation --- eXploit – CVE-2021-42287/CVE-2021-42278 武器化](https://exploit.ph/cve-2021-42287-cve-2021-42278-weaponisation.html)
>
> [CVE-2021-42278&42287（域控）漏洞分析与利用 | KB-AT的博客 (kb-at-zero.github.io)](https://kb-at-zero.github.io/2021/12/19/CVE-2021-42278-42287（域控）漏洞分析与利用/)

适用范围: 未打补丁的 Winserver, 具体可参阅上述连接, 似乎 winserver 2012  - 2022 都有覆盖

拿到一个域用户后, 保证当前 kali 主机能够连通域控主机, 使用 [safebuffer/sam-the-admin](https://github.com/safebuffer/sam-the-admin?tab=readme-ov-file) 中的脚本来 getshell

```bash
python sam_the_admin.py "域/用户:密码" -dc-ip [域控ip] -shell
```

![image-20231019165850749](http://cdn.ayusummer233.top/DailyNotes/202310191658100.png)

> PS: Python 3.11 安装 `impacket==0.9.24` 会出错, 建议使用 Python3.10

---



