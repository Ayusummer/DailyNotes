# Atomic Red Team

> [redcanaryco/atomic-red-team: Small and highly portable detection tests based on MITRE's ATT&CK. --- redcanaryco/atomic-red-team：基于 MITRE 的 ATT&CK 的小型且高度便携的检测测试。 (github.com)](https://github.com/redcanaryco/atomic-red-team)
>
> [redcanaryco/invoke-atomicredteam: Invoke-AtomicRedTeam is a PowerShell module to execute tests as defined in the [atomics folder](https://github.com/redcanaryco/atomic-red-team/tree/master/atomics) of Red Canary's Atomic Red Team project. --- redcanaryco/invoke-atomicredteam：Invoke-AtomicRedTeam 是一个 PowerShell 模块，用于执行 Red Canary 的 [atomics 文件夹](https://github.com/redcanaryco/atomic-red-team/tree/master/atomics) 中定义的测试原子红队项目。](https://github.com/redcanaryco/invoke-atomicredteam)

Atomic Red Team™ 是映射到 MITRE ATT&CK® 框架的测试库。安全团队可以使用 Atomic Red Team 快速、可移植且可重复地测试其环境。

Invoke-AtomicRedTeam 是一个 PowerShell 模块，用于执行 Red Canary 的 Atomic Red Team 项目的 `atomic` 目录中定义的测试。 `atomic` 目录包含 MITRE ATT&CK™ 框架定义的每种技术的文件夹。在每个 `T#` 文件夹中，都可以找到一个 yaml 文件，该文件定义每个原子测试的攻击过程以及相同数据的更易于阅读的 markdown (md) 版本。

---

## 安装

> [Installing Invoke AtomicRedTeam · redcanaryco/invoke-atomicredteam Wiki --- 安装 Invoke AtomicRedTeam · redcanaryco/invoke-atomicredteam Wiki (github.com)](https://github.com/redcanaryco/invoke-atomicredteam/wiki/Installing-Invoke-AtomicRedTeam)

先挂个代理:

```powershell
# 为当前 powershell 会话设置 http 与 https 代理
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"
```

安装执行框架以及 `atomic folder` :

```powershell
IEX (IWR 'https://raw.githubusercontent.com/redcanaryco/invoke-atomicredteam/master/install-atomicredteam.ps1' -UseBasicParsing);
Install-AtomicRedTeam -getAtomics
```

![image-20230914181259875](http://cdn.ayusummer233.top/DailyNotes/202309141814657.png)

> 安装过程中会提示需要安装 NuGet, 同意安装即可
>
> PS: 在哪个目录运行命令不重要, 文件不会落地到当前目录:
>
> ![image-20230914181341639](http://cdn.ayusummer233.top/DailyNotes/202309141815360.png)
>
> 而是会在 C 盘根目录下新建一个 AtomicRedTeam 存储这些文件:
>
> ![image-20230915095506951](http://cdn.ayusummer233.top/DailyNotes/202309150955518.png)
>
> 因此相应的, 如果原本这个目录是有文件的, 那么需要使用 `-Force` 参数来进行强制删除与替换, 如果这个目录下的文件需要保留的话请提前备份
>
> ```powershell
> IEX (IWR 'https://raw.githubusercontent.com/redcanaryco/invoke-atomicredteam/master/install-atomicredteam.ps1' -UseBasicParsing);
> Install-AtomicRedTeam -getAtomics -Force
> ```
>
> 也可以使用 `--InstallPath` 参数来指定安装目录, 例如:
>
> ```powershell
> Install-AtomicRedTeam -InstallPath "c:\tools"
> Install-AtomicsFolder -InstallPath "c:\tools"
> ```

实际上这个安装操作就是将 `redcanaryco/atomic-red-team` 仓库的 `atomics` 目录以及 `redcanaryco/invoke-atomicredteam` 仓库的源码下载到了本地的某个目录, 然后为 powershell 注册了相关命令, 如果没安装 NuGet 的话还会提示安装一下

> 将 `invoke-atomicredteam` 作为模块导入到 powershell 才能使用相关命令:
>
> ![image-20230915104505877](http://cdn.ayusummer233.top/DailyNotes/202309151045518.png)
>
> 可以使用 `Get-Module` 来验证是否已安装成功:
>
> ![image-20230915104750591](http://cdn.ayusummer233.top/DailyNotes/202309151047650.png)

----

## 展示 Atomic 测试用例列表

安装完框架以及 `atomic folder` 并且导入了模块后便可以开始使用了, 首先可以列出可以执行的技术的编号以及测试用例的名称:

```powershell
# 展示当前系统(Win,Lin,Mac)支持运行的 T1003 相关的 atomic 测试列表
Invoke-AtomicTest T1003 -ShowDetailsBrief

# 展示所有系统支持运行的 T1003 相关的 atomic 测试列表
Invoke-AtomicTest T1003 -ShowDetailsBrief -anyOS
```

![image-20230915105446603](http://cdn.ayusummer233.top/DailyNotes/202309151054660.png)

```powershell
# 展示当前系统(Win,Lin,Mac)支持运行的全部 atomic 测试列表
Invoke-AtomicTest All -ShowDetailsBrief

# 展示所有系统支持运行的全部 atomic 测试列表
Invoke-AtomicTest All -ShowDetailsBrief -anyOS
```

> 运行结果比较长, 就不全部展示了
>
> ![image-20230915110254093](http://cdn.ayusummer233.top/DailyNotes/202309151102183.png)
>
> ![image-20230915110623464](http://cdn.ayusummer233.top/DailyNotes/202309151106570.png)





















 











