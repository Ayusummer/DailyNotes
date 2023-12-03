# Windows 安全

> [Powershell 攻击指南 2——Empire_powershsell empire_willowpy 的博客-CSDN 博客](https://blog.csdn.net/qq_34640691/article/details/110686135)

---

- [Windows 安全](#windows-安全)
  - [永久关闭 Windows 实时防护](#永久关闭-windows-实时防护)
  - [Sysmon](#sysmon)
    - [简介](#简介)
    - [功能概述](#功能概述)
    - [使用](#使用)
  - [查看登录日志](#查看登录日志)
  - [Process Explorer - 查看某个窗口是哪个进程调起的](#process-explorer---查看某个窗口是哪个进程调起的)
  - [定时任务](#定时任务)
    - [schtasks](#schtasks)
    - [at](#at)
  - [Windows Management Instrumentation - Windows 管理工具](#windows-management-instrumentation---windows-管理工具)
    - [在 CMD 中使用 wmic 命令查看一些系统信息](#在-cmd-中使用-wmic-命令查看一些系统信息)
    - [在 CMD 中使用 wmic 命令新建进程](#在-cmd-中使用-wmic-命令新建进程)
      - [在 powershell 中使用 wmic 命令执行 rundll32](#在-powershell-中使用-wmic-命令执行-rundll32)
    - [使用 wmic](#使用-wmic)
    - [在powershell 中使用 Invoke-WmiMethod 新建进程](#在powershell-中使用-invoke-wmimethod-新建进程)
      - [在 powershell 中从 Win32\_Process 派生一个类新建进程](#在-powershell-中从-win32_process-派生一个类新建进程)
  - [域渗透](#域渗透)
    - [域内提权-42278/42287](#域内提权-4227842287)


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

## 计划任务

### schtasks

```cmd
schtasks /create /tn "T1053_005_OnLogon" /sc onlogon /tr "cmd.exe /c calc.exe"
schtasks /create /tn "T1053_005_OnStartup" /sc onstart /ru system /tr "cmd.exe /c calc.exe"
SCHTASKS /Create /SC ONCE /TN spawn /TR "C:\windows\system32\cmd.exe" /ST "20:10"
```

- `/tn`: `Task Name`
- `/sc`: `schedule` - 后续接任务执行频率
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

```cmd
# 列出所有计划任务
schtasks /query /FO LIST
# 查询名称包含指定字符串的计划任务(例如包含 T1053 的计划任务)
schtasks /query | findstr "T1053"
# 查询名称为 T1053_005_OnLogon 的计划任务
schtasks /query /tn "T1053_005_OnLogon"
```

- `/FO LIST` 指定输出格式为列表, 显示更详细的信息

---

```cmd
# 远程创建计划任务
# SCHTASKS /Create /S #{target} /RU #{user_name} /RP #{password} /TN "Atomic task" /TR "#{task_command}" /SC daily /ST #{time}
schtasks /Create /S [remote-ip] /RU [remote-user] /RP [passwd] /TN "Atomic task" /TR "C:/windows/system32/cmd.exe" /SC daily /ST 20:10
```

- `/S`: `Server` - 指定任务执行的服务器
- `/RU`: `Run User` - 指定任务执行的用户
- `/RP`: `Run Password` - 指定任务执行的用户密码
- `/tn`: `Task Name`
- `/tr`: `Task Run` - 指定任务执行时运行的命令或程序
- `/sc`: `schedule` - 后续接任务执行频率
  - `daily`: 每天执行
- `/st`: `Start Time` - 指定任务开始执行的时间

---

### PowerShell Cmdlet

---

```powershell
# 新建一个计划任务用于执行 calc.exe
$Action = New-ScheduledTaskAction -Execute "calc.exe"
# 新建一个计划任务触发器, 在用户登入时触发
$Trigger = New-ScheduledTaskTrigger -AtLogon
# 新建一个计划任务主体, 指定任务以管理员组的权限运行, 并且以最高权限级别运行
$User = New-ScheduledTaskPrincipal -GroupId "BUILTIN\Administrators" -RunLevel Highest
# 新建一个计划任务设置集(这里没有设置具体参数, 因此保持默认)
$Set = New-ScheduledTaskSettingsSet
# 综合前面定义的动作,触发器,主体和设置创建一个新的计划任务对象
$object = New-ScheduledTask -Action $Action -Principal $User -Trigger $Trigger -Settings $Set
# 将前面创建的计划任务对象注册到系统中, 任务名称为 AtomicTask, 注册后该任务将根据其配置在系统中自动运行
Register-ScheduledTask AtomicTask -InputObject $object
```

---

### WMI Invoke-CimMethod 计划任务



---

### AT

```powershell
at 13:20 /interactive cmd 
```

at 命令在 win10 中已经弃用, 在 Win7 中可以使用

> ![image-20231122162800484](http://cdn.ayusummer233.top/DailyNotes/202311221628629.png)
>
> ![image-20231122162652063](http://cdn.ayusummer233.top/DailyNotes/202311221626960.png)

---

- 根据 [at (command) - Wikipedia](https://en.wikipedia.org/wiki/At_(command)), [At Command (computerhope.com)](https://www.computerhope.com/at.htm), [Use the at command to schedule tasks - Windows Client | Microsoft Learn](https://learn.microsoft.com/en-us/troubleshoot/windows-client/system-management-components/use-at-command-to-schedule-tasks) 以及 [at | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/at) 的信息
  - `at` 命令自 Windows NT 开始就可用于在计算机上指定的时间和日期运行命令和程序
  - 其在 `Windows NT`、`Windows 2000` 和 `Windows XP` 等早期版本中都是可用的。在Windows Vista及更新的Windows版本中，`at`命令被标记为弃用，推荐使用`schtasks`命令来替代
  - 在微软官方的 Windows Server 文档中有提到其适用于``Windows Server 2022`、`Windows Server 2019`、`Windows Server 2016`、`Windows Server 2012 R2`、`Windows Server 2012`

---

## Windows Management Instrumentation - Windows 管理工具

`WMIC(Windows Management Instrumentation Command-line)(Windows管理规范命令行)`  是一个用于访问本地或远程计算机上的管理信息的Windows命令行工具

---

### 在 CMD 中使用 wmic 命令查看一些系统信息

```powershell
# 列出系统中所有用户账户的详细信息，包括用户的各种属性，如用户名、SID（安全标识符）、账户类型等，输出格式设置为 CSV
wmic useraccount get /ALL /format:csv
# 列出系统中所有进程的名称、它们的可执行文件路径和启动它们的命令行参数，输出格式为 CSV
wmic process get caption,executablepath,commandline /format:csv
# 获取系统上安装的更新和修补程序的详细信息，包括它们的描述和安装日期，输出格式为 CSV
wmic qfe get description,installedOn /format:csv 
```

- `xxx get`: 获取 xxx 信息
  - `useraccount`：获取用户账户信息。
  - `process`：获取与进程（程序）相关的信息。
  - `qfe(Quick Fix Engineering)`: 获取系统上的更新和修补程序信息
- `get xxx` 获取 xxx 信息
  - `caption` 进程的名称
  - `executablepath` 可执行文件的路径
  - `commandline` 显示启动进程时使用的命令行参数。
  - `description` 描述信息
  - `installedOn` 安装日期
  - `/ALL`：返回所有可用的属性。
- `/format:csv`：指定输出格式为 CSV

> ![image-20231121151050009](http://cdn.ayusummer233.top/DailyNotes/202311211510098.png)
>
> ![image-20231121151517619](http://cdn.ayusummer233.top/DailyNotes/202311211515762.png)
>
> ![image-20231121153412521](http://cdn.ayusummer233.top/DailyNotes/202311211534644.png)

```cmd
# 查询本机上，所有描述中包含“Spooler”(打印机)的服务的信息
wmic /node:"127.0.0.1" service where (caption like "%Spooler%")
```

- `/node:"127.0.0.1"`: 指定要查询的目标节点(计算机) IP 为 `127.0.0.1` (也可以写hostname)

- `service`：指定要查询的 WMI 类别。这里表示正在查询 Windows 服务相关的信息。

- `where (caption like "%Spooler%")`：这是一个过滤条件，用于限制查询结果。

  - `caption` : 服务的描述标签。

  - `like "%Spooler%"`  筛选出描述中包含“Spooler”字样的服务。

    百分号（`%`）是通配符，表示“Spooler”可以出现在任何位置。

>![image-20231121155454706](http://cdn.ayusummer233.top/DailyNotes/202311211554805.png)

---

### 在 CMD 中使用 wmic 命令新建进程

---

```cmd
# 在 Windows 系统上启动一个新的记事本应用程序实例
wmic process call create notepad.exe
# 在 remote_ip/hostnmae windows上启动一个新的记事本应用程序实例
wmic /user:DOMAIN\Administrator /password:Password /node:"remote_ip/hostname" process call create notepad.exe
```

- `process` 指定 wmic 在操作与系统进程相关的信息

- `call create notepad.exe`  

  - `call` 表示执行一个方法

  - `create` 是 process 类中的一个方法, 用于创建新的进程

    `notepad.exe` 是传递给 `create` 方法的参数, 指定要创建的进程为记事本

> ![image-20231121160748978](http://cdn.ayusummer233.top/DailyNotes/202311211607180.png)
>
> 远程启进程的命令不能指定  `remote_ip/hostname` 为本机的 ip, 否则会:
>
> ![image-20231121162658528](http://cdn.ayusummer233.top/DailyNotes/202311211626609.png)
>
> 远程执行示例:
>
> ![image-20231121162724037](http://cdn.ayusummer233.top/DailyNotes/202311211627101.png)
>
> > TODO: PS: 虽然这里显示执行成功了, 但是 rdp 过去并没有看到有记事本, 这里对此效果存疑

---

#### 在 powershell 中使用 wmic 命令执行 rundll32

---

```powershell
wmic /node:127.0.0.1 process call create "rundll32.exe xxx\xxx\calc.dll StartW"
wmic /node:127.0.0.1 process call create "rundll32.exe C:\AtomicRedTeam\ExternalPayloads/calc.dll StartW"
```

指示系统运行 `rundll32.exe` 程序，该程序用于调用 DLL 文件中的函数。`C:\AtomicRedTeam\ExternalPayloads/calc.dll` 是 DLL 文件的路径，而 `StartW` 是 DLL 中的一个函数。

> TODO: 这个 dll 的作用是启动计算器, 学一下怎么用 x64dbg 调试 dll



-----

### 使用 wmic

```cmd
wmic /node:"#{node}" product where "name like '#{product}%%'" call uninstall
```





---

### 在powershell 中使用 Invoke-WmiMethod 新建进程

---

```powershell
powershell -exec bypass -e SQBuAHYAbwBrAGUALQBXAG0AaQBNAGUAdABoAG8AZAAgAC0AUABhAHQAaAAgAHcAaQBuADMAMgBfAHAAcgBvAGMAZQBzAHMAIAAtAE4AYQBtAGUAIABjAHIAZQBhAHQAZQAgAC0AQQByAGcAdQBtAGUAbgB0AEwAaQBzAHQAIABuAG8AdABlAHAAYQBkAC4AZQB4AGUA
```

- **`-exec bypass`**: 绕过 PowerShell 的执行策略。

  默认情况下 Windows 为了安全起见可能会限制运行某些脚本。使用 `-exec bypass` 可以绕过这些限制，允许运行没有签名的脚本。

- **`-e`**: 这是 PowerShell 的一个参数，用于执行经过 Base64 编码的命令。

使用 powershell 执行一个 `utf-16le` 编码的命令, 可以使用 python `base64.b64decode(*enc_cmd*).decode("utf-16-le")`  解码该命令, 得到:

```powershell
Invoke-WmiMethod -Path win32_process -Name create -ArgumentList notepad.exe
```

- `Invoke-WmiMethod`：调用 `Windows Management Instrumentation (WMI) `方法

- `-Path win32_process`：指定 WMI 类的路径，`win32_process` 是一个用于表示系统进程的 WMI 类。

- `-Name create`: 调用的 WMI 方法的名称，在这里是 `create`，用于创建新的进程

- `-ArgumentList notepad.exe`：传递给 `create` 方法的参数，表示要创建的进程。

  在此示例中将启动 Windows 记事本应用程序（Notepad）

---

#### 在 powershell 中从 Win32_Process 派生一个类新建进程

---

```powershell
# 创建一个 ManagementClass 对象，代表 Win32_Process WMI 类
$Class = New-Object Management.ManagementClass(New-Object Management.ManagementPath("Win32_Process"))
# 从 Win32_Process 类派生出一个新的类，并命名为 Win32_Atomic
$NewClass = $Class.Derive("Win32_Atomic")
# 将新创建的 Win32_Atomic 类注册到 WMI 命名空间中。这意味着，之后可以像其他标准 WMI 类一样使用 Win32_Atomic。
$NewClass.Put()
# 使用 Invoke-WmiMethod 命令调用 Win32_Atomic 类的 create 方法新建一个进程启动记事本
Invoke-WmiMethod -Path Win32_Atomic -Name create -ArgumentList notepad.exe

# Clean
# 创建一个指向 Win32_Atomic 类的 ManagementClass 对象。
$CleanupClass = New-Object Management.ManagementClass(New-Object Management.ManagementPath("Win32_Atomic"))
# 尝试删除 Win32_Atomic 类
try { $CleanupClass.Delete() } catch {}
```

- `Win32_Process` 是一个预定义的 WMI 类，用于表示和操作系统进程相关的信息。

- 派生操作是在 WMI 中创建一个新的类，它继承了父类的所有属性和方法。

- 由于 Win32_Atomic 类是从 Win32_Process 类派生的，它继承了 create 方法，该方法用于创建新的进程。

  在这个例子中，它被用来启动 Windows 的记事本应用程序（Notepad）。

  ---

- `try { $CleanupClass.Delete() } catch {}`:用于尝试执行某些操作，并捕获如果这些操作失败时产生的任何异常。

  在 `try` 块中，代码尝试调用 `$CleanupClass.Delete()`，这个方法用于从 WMI 命名空间中删除 `Win32_Atomic` 类。

---








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



