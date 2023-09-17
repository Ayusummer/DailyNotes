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

将 `invoke-atomicredteam` 作为模块导入到 powershell 才能使用相关命令:

![image-20230915104505877](http://cdn.ayusummer233.top/DailyNotes/202309151045518.png)

可以使用 `Get-Module` 来验证是否已安装成功:

![image-20230915104750591](http://cdn.ayusummer233.top/DailyNotes/202309151047650.png)

不过需要注意的是, 脚本里虽然导入了模块, 但是只会在当前 Powershell 窗口生效, 因此需要将导入模块的命令写到  Powershell 配置文件中才能保证其永久生效

```powershell
# 使用 VSCode 打开 powershell 配置文件
code $profile
```

在文件末尾写入如下命令并保存

```powershell
Import-Module "C:\AtomicRedTeam\invoke-atomicredteam\Invoke-AtomicRedTeam.psd1" -Force
$PSDefaultParameterValues = @{"Invoke-AtomicTest:PathToAtomicsFolder"="C:\AtomicRedTeam\atomics"}
```

![image-20230915151354682](http://cdn.ayusummer233.top/DailyNotes/202309151513177.png)

这样打开新的 powershell 的时候依旧可以识别到 atomic 相关模块

![image-20230915151510956](http://cdn.ayusummer233.top/DailyNotes/202309151515029.png)

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

---

```powershell
# 展示当前系统(Win,Lin,Mac)支持运行的 T1003 相关的 atomic 测试列表详细信息
Invoke-AtomicTest T1003 -ShowDetails

# 展示所有系统支持运行的 T1003 相关的 atomic 测试列表详细信息
Invoke-AtomicTest T1003 -ShowDetails -anyOS
```

![image-20230915151816010](http://cdn.ayusummer233.top/DailyNotes/202309151518119.png)

![image-20230915151918794](http://cdn.ayusummer233.top/DailyNotes/202309151519888.png)

---

```powershell
# 展示当前系统(Win,Lin,Mac)支持运行的全部 atomic 测试列表
Invoke-AtomicTest All -ShowDetailsBrief

# 展示所有系统支持运行的全部 atomic 测试列表
Invoke-AtomicTest All -ShowDetailsBrief -anyOS
```

运行结果比较长, 就不全部展示了

![image-20230915110254093](http://cdn.ayusummer233.top/DailyNotes/202309151102183.png)

![image-20230915110623464](http://cdn.ayusummer233.top/DailyNotes/202309151106570.png)

----

## 检查先决条件

每个 atomic test 的 yaml 文件中都定义了其是否要在 Win, Lin 还是 Mac 上运行

![image-20230915152316401](http://cdn.ayusummer233.top/DailyNotes/202309151523549.png)

不过有的 atomic test 可能会有更细致的需求, 例如可能需要在域控或服务器上运行而不能在工作站上运行; 或者说有些 atomic test 需要一些特征的文件或是依赖于一些其他工具, 

要检查当前环境是否满足某个 test 所需的先决条件, 可以在执行测试前使用 `0CheckPrereqs` 来进行检查:

```powershell
# 检查当前环境是否满足 T1003 中名为 Gsecdump 测试
Invoke-AtomicTest T1003 -TestName "Gsecdump" -CheckPrereqs
```

![image-20230915154250877](http://cdn.ayusummer233.top/DailyNotes/202309151542287.png)

![image-20230915154318865](http://cdn.ayusummer233.top/DailyNotes/202309151543971.png)

> 可以看到当前环境并不满足执行该项测试的前提条件

----

安装所需依赖:

```powershell
Invoke-AtomicTest T1003 -TestName "Gsecdump" -GetPrereqs
```

![image-20230915160528504](http://cdn.ayusummer233.top/DailyNotes/202309151605993.png)

> 安装依赖时可能需要代理, 并且也可能会多次失败, 这里会将以来程序装到如下目录中:
>
> ![image-20230915160724395](http://cdn.ayusummer233.top/DailyNotes/202309151607453.png)
>
> ![image-20230915160745338](http://cdn.ayusummer233.top/DailyNotes/202309151607392.png)

---

## 在本地执行 atomic tests

```powershell
# 检查依赖
Invoke-AtomicTest T1218.010 -TestNumbers 1,2 -CheckPrereqs
# 依赖完整, 执行测试
Invoke-AtomicTest T1218.010 -TestNumbers 1,2
# 或者使用上述命令的简化写法:
Invoke-AtomicTest T1218.010-1,2
```

> 检查依赖不通过则相应使用 `-GetPrereqs` 获取依赖然后再复查下即可
>
> ```powershell
> # 如果不满足则安装依赖
> Invoke-AtomicTest T1218.010 -TestNumbers 1,2 -GetPrereqs
> # 检查依赖
> Invoke-AtomicTest T1218.010 -TestNumbers 1,2 -CheckPrereqs
> ```

![image-20230915164050337](http://cdn.ayusummer233.top/DailyNotes/202309151640839.png)

![image-20230915164124433](http://cdn.ayusummer233.top/DailyNotes/202309151641595.png)

---

除了上述命令中使用测试用例的编号外, 还可以使用其名称:

```powershell
Invoke-AtomicTest T1218.010 -TestNames "Regsvr32 remote COM scriptlet execution","Regsvr32 local DLL execution"
```

![image-20230915164933033](http://cdn.ayusummer233.top/DailyNotes/202309151649184.png)

---

或者使用其 GUID:

```powershell
Invoke-AtomicTest T1218.010 -TestGuids 449aa403-6aba-47ce-8a37-247d21ef0306,c9d0c4ef-8a96-4794-a75b-3d3a5e6f2a36
```

![image-20230915165205345](http://cdn.ayusummer233.top/DailyNotes/202309151652511.png)

---

执行指定技术的所有用例

```powershell
# 检查依赖
Invoke-AtomicTest T1218.010 -CheckPrereqs
# 如果不满足则安装依赖
Invoke-AtomicTest T1218.010 -GetPrereqs
# 检查依赖
Invoke-AtomicTest T1218.010 -CheckPrereqs
```

![image-20230915170252327](http://cdn.ayusummer233.top/DailyNotes/202309151702456.png)

```powershell
# 执行测试
Invoke-AtomicTest T1218.010
```























 











