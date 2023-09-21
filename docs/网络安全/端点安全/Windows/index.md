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

---

## Process Explorer - 查看某个窗口是哪个进程调起的

> [Process Explorer - Sysinternals | Microsoft Learn --- Process Explorer - Sysinternals | 进程资源管理器微软学习](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer)
>
> [How to determine which process owns a toplevel window? - Super User --- 如何确定哪个进程拥有顶级窗口？ - 超级用户](https://superuser.com/questions/1299931/how-to-determine-which-process-owns-a-toplevel-window)

例如目前有个窗口不知道是哪个进程调起的, 且从视觉上也看不出什么信息, 那么可以考虑使用 Process Explorer 来进行查看, 该软件可以在  [Process Explorer - Sysinternals | Microsoft Learn --- Process Explorer - Sysinternals | 进程资源管理器微软学习](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer) 获取

![image-20230917203502299](http://cdn.ayusummer233.top/DailyNotes/202309172035378.png)

要查看某个窗口属于哪个进程可以如下操作, 拖动该按钮到需要识别的窗口上后即会在 Process Explorer 上高亮显示该窗口所属进程:

![image-20230917203613487](http://cdn.ayusummer233.top/DailyNotes/202309172036546.png)

