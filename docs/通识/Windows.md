# Windows

- [Windows](#windows)
  - [关闭 WIndows 自动更新](#关闭-windows-自动更新)
  - [软链接与硬链接](#软链接与硬链接)
  - [Robocopy](#robocopy)
    - [结合定时任务使用](#结合定时任务使用)
  - [Windows 远程连接](#windows-远程连接)
    - [WinRM](#winrm)
      - [WinRS](#winrs)
      - [PSRP](#psrp)
  - [问题收集](#问题收集)
    - [异常端口占用](#异常端口占用)

---

## 关闭 WIndows 自动更新

> [WIN10系统手动更新和关闭自动更新方法-山东大学（威海）信息化工作办公室 (sdu.edu.cn)](https://net.wh.sdu.edu.cn/info/1129/1573.htm)

`Win+R -> services.msc`

找到 `Windows Update` 将启动类型改为 `禁用` 即可

![image-20240429011123400](http://cdn.ayusummer233.top/DailyNotes/202404290111807.png)

![image-20240429011339442](http://cdn.ayusummer233.top/DailyNotes/202404290113486.png)

![image-20240429011429757](http://cdn.ayusummer233.top/DailyNotes/202404290114807.png)

---

## 软链接与硬链接

- 软链接是路径的别名

  - 软链接可以不存在的路径, 因此可能引入死链接

  - 软链接可以指向文件也可以指向目录, 也可以跨磁盘分区

  - 软链接可以用于链接深层目录从而缩短访问路径

  - 为 `C:\Users\233\Documents\test.txt` 创建一个软链接到 `D:\link.txt`

    ```CMD
    mklink D:\link.txt C:\Users\233\Documents\test.txt
    ```

    为 `C:\Users\233\Documents` 创建一个软链接到 `D:\Documents`

    ```CMD
    mklink /D D:\Documents C:\Users\233\Documents
    ```

    > `/D` 表示创建目录的软链接

- 硬链接是文件对应物理数据块的别名

  - 硬链接是同一文件系统中创建的多个文件名, 指向同一物理数据快

  - 硬链接只能连接到实际存在的文件, 不能链接到目录, 不能跨磁盘分区

  - 可以用于备份文件, 防止误删文件

  - 为 `C:\Users\233\Documents\test.txt` 创建一个硬链接到 `D:\link.txt`

    ```CMD
    mklink /H D:\link.txt C:\Users\233\Documents\test.txt
    ```

-----

## Robocopy

> [Robocopy | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/robocopy?source=docs)

Robocopy 用于将文件数据从一个位置复制到另一个位置

> 发现这个需求是因为我需要在两个 git 仓库中跟踪同样的一个目录
>
> 由于跟踪的是目录所以无法使用硬链接
>
> 由于需要git跟踪所以无法使用如软连接, 因此有了目录同步的需求
>
> Windows 上又不像 unix 有 rsync, 不过找到了 robocopy 可以复制文件, 也能达成需求

`语法`: 

```powershell
robocopy <source> <destination> [<file>[ ...]] [<options>]
```

| 参数            | 描述                                                                                                     |
| :-------------- | :------------------------------------------------------------------------------------------------------- |
| `<source>`      | 指定源目录的路径。                                                                                       |
| `<destination>` | 指定目标目录的路径。                                                                                     |
| `<file>`        | 指定要复制的一个或多个文件。 支持通配符（***** 或 **?**）。 如果未指定此参数，`*.*` 将用作默认值。       |
| `<options>`     | 指定要与 **robocopy** 命令结合使用的选项，包括**复制**、**文件**、**重试**、**日志记录**和**作业**选项。 |

> 更详细的选项可参阅 [Robocopy | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/robocopy?source=docs#copy-options)

例如, 若要将名为 *yearly-report.mov* 的文件从 *c:\reports* 复制到文件共享 *\\marketing\videos*, 同时启用多线程以提高性能(使用 `/mt` 参数)并在传输中断时重新开始传输(使用 `/z` 参数), 请键入:

```powershell
robocopy c:\reports "\\marketing\videos" yearly-report.mov /mt /z
```

- `/mt` 默认使用 8 线程

----

### 结合定时任务使用

由于 robocopy 是一次性命令, 因此需要同步两个目录的话可以结合定时任务来使用

可以编写一个 `.ps1` 脚本

```powershell
robocopy <source> <destination> /MIR /mt /z
```

使用 `Win+R -> taskschd.msc`呼出任务计划程序然后设置任务执行逻辑并执行上面编写的脚本即可

---

## Windows 远程连接

> [PowerShell Remoting on Python – Blogging for Logging](https://www.bloggingforlogging.com/2018/08/14/powershell-remoting-on-python/)
>
> [About Me – Blogging for Logging](https://www.bloggingforlogging.com/sample-page/)

说到 Windows 远程首先能想到的就是 RDP, VNC; 不过这里暂且不讨论这些远程桌面协议, 而是关注远程调试Shell方面的需求

---

### WinRM

微软提供了 WinRM(Windows Remote Management) 来远程管理Windows计算机和服务器, 它提供了一种安全的通信机制, 使得管理员可以在本地或远程系统上执行管理任务, 包括

- 远程管理 Windows, 执行命令,脚本,系统配置,收集信息等

- 使用安全通信协议(如 HTTPS) 加密数据传输

- 使用 WS-Man(Web Services for Management) 协议作为通信标准

  > WS-Man 是一种跨平台标准, 可用于各种操作系统和设备进行通信, 不仅限于 Windows

- WinRM 紧密集成了 PowerShell, 这样管理员可以远程管理 Windows, 创建自动化任务, 执行脚本等

---

#### WinRS

WinRS(Windows Remote Shell) 是一种基于 WInRM 的命令行工具, 它可以让用户在远程Windows上执行命令和程序, 类似于 Telnet 或 SSH; 它使用 WS-Man 协议, 支持加密和身份验证, 常用于管理 Windows Server, Exchange Server, SQL Server 等远程服务器

----

#### PSRP

PSRP(PowerShell Remoting Protocol) 可用于在 Windows 或者安装了 PowerShell Core 的 Linux/MacOS 系统上实现远程 PowerShell 命令执行和管理; 需要再远程计算机上启用 WInRM 并配置相关安全策略使用;

PSRP 相对于 WInRS 有如下好处:

- PSRP 在执行 PowerShell 命令时速度更快, 因其不需要再每次调用时启动新的 PowerShell 进程

- PSRP 可以连接到自定义的端点/配置, 从而实现 JEA(Just Enough Administration) 等功能

  > JEA 可用于在 Windows 上增强安全性和权限管理, 允许管理员为用户分配最小必要的权限以执行特定的管理任务, 并且可以记录用户在 PowerShell 会话中执行的所有命令和操作, 以便进行审计和调查

- PSRP 直接处理 PowerShell 对象, 例如字符串, 整数, 字典, 列表和其他对象在主机间传送时可以序列化/反序列化

- PSRP 有一种通过 SecureString 类型安全共享秘密的机制

PSRP 旨在与 PowerShell 实例远程交互, 近年来也扩展到了在 SSH 等其他传输机制上运行, 不过这是 PowerShell Core(6.0+) 才加的功能, Win10 22H2 默认 PowerShell 还是 5.1

```powershell
$psversiontable
```

PyPSRP 是 [Jordan Borean](https://www.bloggingforlogging.com/sample-page/) 编写的一个 python 库, 他只关注仅允许 WSMan 传输的 `PowerShell 2-5.x`, 这个库旨在 PSRP 层上运行, 而其他第三方库一般只是提供了 WinRS 组件;

关于 PyPSRP 部分的内容可在[此处](../Language/Python/libs/PyPSRP/PyPSRP.md)继续阅读

---

## 问题收集

### 异常端口占用

> [SocketException: Failed to create server socket (OS Error: 以一种访问权限不允许的方式做了一个访问套接字的尝试 , eerrno = 10013), address = 0.0.0.0, port = 53317 · localsend/localsend · Discussion #935 · GitHub](https://github.com/localsend/localsend/discussions/935)

今天用 Localsend 发现了报错, 服务器无法启动, 端口连不上

![image-20240429225929701](http://cdn.ayusummer233.top/DailyNotes/202404292301802.png)

很常见的报错, 第一时间想到是端口占用了, 尝试查找占用端口的程序

```bash
netstat -ano | findstr 53317
```

![image-20240429230036991](http://cdn.ayusummer233.top/DailyNotes/202404292301045.png)

找到 PID 后根据 PID 从 tasklist 里找进程名称:

```bash
tasklist | findstr 17828
```

![image-20240429230213037](http://cdn.ayusummer233.top/DailyNotes/202404292302062.png)

发现居然是 localsend 自己, 发觉这个普通的端口占用不一样, 便开始查下有没有其他朋友遇到了这个问题

在 github 中找到了这样一条 discussion: [SocketException: Failed to create server socket (OS Error: 以一种访问权限不允许的方式做了一个访问套接字的尝试 , eerrno = 10013), address = 0.0.0.0, port = 53317 · localsend/localsend · Discussion #935 (github.com)](https://github.com/localsend/localsend/discussions/935)

提到了这个帖子:  [(Windows)以一种访问权限不允许的方式做了一个访问套接字的尝试处理 - 玖亖伍 (gsw945.com)](https://gsw945.com/index.php/archives/33/)

Windows 有时会出现需要排除某些端口不被使用的情况，比如防火墙或其他网络配置需求, 上文中提到了如下命令可以查看当前系统中那些端口是被排除在 TCP 协议下的

```powershell
netsh interface ipv4 show excludedportrange protocol=tcp
```

![image-20240429230726811](http://cdn.ayusummer233.top/DailyNotes/202404292307843.png)

果不其然, `53317` 在这个端口范围内

解决方法倒是简单, 重启 winnat 即可:

```powershell
net stop winnat
net start winnat
```

然后重新查看TCP协议端口排除:

```powershell
netsh interface ipv4 show excludedportrange protocol=tcp
```

![image-20240429230911121](http://cdn.ayusummer233.top/DailyNotes/202404292309184.png)

可以看到此时 53317 已经不在范围内了

LocalSend 服务器也成功起来了:

![image-20240429230941076](http://cdn.ayusummer233.top/DailyNotes/202404292309112.png)

