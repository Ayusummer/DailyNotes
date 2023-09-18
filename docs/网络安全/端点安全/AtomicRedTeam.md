# Atomic Red Team

> [redcanaryco/atomic-red-team: Small and highly portable detection tests based on MITRE's ATT&CK. --- redcanaryco/atomic-red-team：基于 MITRE 的 ATT&CK 的小型且高度便携的检测测试。 (github.com)](https://github.com/redcanaryco/atomic-red-team)
>
> [redcanaryco/invoke-atomicredteam: Invoke-AtomicRedTeam is a PowerShell module to execute tests as defined in the atomics folder of Red Canary's Atomic Red Team project. --- redcanaryco/invoke-atomicredteam：Invoke-AtomicRedTeam 是一个 PowerShell 模块，用于执行 Red Canary 的 atomics 文件夹中定义的测试原子红队项目。](https://github.com/redcanaryco/invoke-atomicredteam)

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
```powershell
Get-Module
```

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

### 通过编号执行测试

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

```powershell
# 清理环境
Invoke-AtomicTest T1218.010-1,2 -Cleanup
```

![image-20230917225147559](http://cdn.ayusummer233.top/DailyNotes/202309172251588.png)

---

### 通过名称执行测试

除了上述命令中使用测试用例的编号外, 还可以使用其名称:

```powershell
Invoke-AtomicTest T1218.010 -TestNames "Regsvr32 remote COM scriptlet execution","Regsvr32 local DLL execution"
# 清理环境
Invoke-AtomicTest T1218.010 -TestNames "Regsvr32 remote COM scriptlet execution","Regsvr32 local DLL execution" -Cleanup
```

![image-20230915164933033](http://cdn.ayusummer233.top/DailyNotes/202309151649184.png)

![image-20230917225213561](http://cdn.ayusummer233.top/DailyNotes/202309172252593.png)

---

### 通过 GUID 执行测试

或者使用其 GUID:

```powershell
Invoke-AtomicTest T1218.010 -TestGuids 449aa403-6aba-47ce-8a37-247d21ef0306,c9d0c4ef-8a96-4794-a75b-3d3a5e6f2a36
```

![image-20230915165205345](http://cdn.ayusummer233.top/DailyNotes/202309151652511.png)

---

### 执行指定技术的所有测试

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

![image-20230917192454429](http://cdn.ayusummer233.top/DailyNotes/202309171925764.png)

> PS: 这里 `T1218.010-5` 会弹出一个计算器以及一个确定窗口(`regsvr32.exe`弹的), 需要点击确定窗口才会完成测试

----

### 指定进程超时

```powershell
Invoke-AtomicTest T1218.010 -TimeoutSeconds 15
```

如果攻击命令未在指定的 `-TimeoutSeconds` 内退出（返回），则该进程及其子进程将被强制终止, 从而允许 `Invoke-AtomicTest` 脚本继续进行下一个测试。

> `-TimeoutSeconds` 的默认值为 120。

![image-20230917194407394](http://cdn.ayusummer233.top/DailyNotes/202309171944227.png)

> 上之前的测试中可以看到这个用例是会有一个 regsvr 的弹窗卡住程序的, 因此便会超时退出

---

### 交互执行测试

可以通过在执行期间向测试提供输入的方式来执行测试。例如，在覆盖文件之前执行的命令会提示您进行确认。

为了能够执行此操作，必须指定 `-Interactive` 标志。如果不指定 `-Interactive` 标志并且命令要求用户输入，则执行将挂起，直到最终超时。

```powershell
# 检查依赖
Invoke-AtomicTest T1003 -CheckPrereqs
```

![image-20230917211459537](http://cdn.ayusummer233.top/DailyNotes/202309172114569.png)

发现缺少依赖, 需要安装, 执行

```powershell
# 安装依赖
Invoke-AtomicTest T1003 -GetPrereqs
```

![image-20230917212447500](http://cdn.ayusummer233.top/DailyNotes/202309172124537.png)

发现找不到 `Get-WindowsFeature` 命令, 搜索后发现该命令是属于 Windows Server 的命令, 这里用的是Win10Pro, 默认是没有这个模块的

> [Get-WindowsFeature (ServerManager) | Microsoft Learn --- 获取 WindowsFeature (服务器管理器) |微软学习](https://learn.microsoft.com/en-us/powershell/module/servermanager/get-windowsfeature?view=windowsserver2022-ps)

所以需要装一下, 该命令属于 `ServerManager` 模块, 在 Win10 上可以通过 `管理可选功能` 页面添加 RSAT(`Remote Server Administrator Tools`) 的相关功能来安装, 不过这条命令具体属于哪个功能模块并没有找到, 因此这里就把 RSAT 相关功能全装了:

![image-20230917214755067](http://cdn.ayusummer233.top/DailyNotes/202309172147151.png)

![image-20230917214739417](http://cdn.ayusummer233.top/DailyNotes/202309172147482.png)

> PS: 感觉可能是这个, 不过想到其他测试可能也会用到相关模块, 就全装了
>
> ![image-20230917214822097](http://cdn.ayusummer233.top/DailyNotes/202309172148166.png)
>
> 装完之后就可以用了:
>
> ![image-20230917223444555](http://cdn.ayusummer233.top/DailyNotes/202309172234613.png)
>
> ![image-20230917224559414](http://cdn.ayusummer233.top/DailyNotes/202309172245446.png)
>
> 报错了, 不支持在 Windows 客户端操作, 应该是要 Windows Server

```powershell
Invoke-AtomicTest T1003 -Interactive
```

![image-20230917224725224](http://cdn.ayusummer233.top/DailyNotes/202309172247287.png)

使用 `-Interactive` 标志的缺点是无法将命令执行的输出重定向到文件。

----

### 执行所有测试

不建议一次性执行所有的 atomic test, 非要这样做的话可以使用如下命令:

```powershell
Invoke-AtomicTest All
# 上述命令默认使用预定义的 atomics 目录中的示例, 也可以指定指定 atomics 目录
Invoke-AtomicTest All -PathToAtomicsFolder C:\AtomicRedTeam\atomics
# 如果不想手动确认执行的话也可以使用如下命令, 将 Confirm 设置为 false
Invoke-AtomicTest All -Confirm:$false
# 或者将 Confirm 设置为 Medium(文档中没有详细说明 false 和 medium 二者的区别)
$ConfirmPreference = 'Medium'
Invoke-AtomicTest All
```

![image-20230917220839090](http://cdn.ayusummer233.top/DailyNotes/202309172208128.png)

需要确定才能运行, 这里就不完全跑完了

更好的方法是使用一个小的 PowerShell 脚本逐个运行每个测试，先获取先决条件，然后在每个测试执行后进行清理。

以下为运行所有自动化 Windows atomics 的 powershell 脚本示例:

```powershell
$techniques = gci C:\AtomicRedTeam\atomics\* -Recurse -Include T*.yaml | Get-AtomicTechnique

foreach ($technique in $techniques) {
    foreach ($atomic in $technique.atomic_tests) {
        if ($atomic.supported_platforms.contains("windows") -and ($atomic.executor -ne "manual")) {
            # Get Prereqs for test
            Invoke-AtomicTest $technique.attack_technique -TestGuids $atomic.auto_generated_guid -GetPrereqs
            # Invoke
            Invoke-AtomicTest $technique.attack_technique -TestGuids $atomic.auto_generated_guid
            # Sleep then cleanup
            Start-Sleep 3
            Invoke-AtomicTest  $technique.attack_technique -TestGuids $atomic.auto_generated_guid -Cleanup
        }
    }
}
```

----

## 在远程执行 atomic tests

可以使用 `Invoke-AtomicTest` 函数在安装 Atomic Red Team 的系统（本地）或通过 PowerShell 远程会话（远程）在远程计算机上运行原子测试。如下说明展示了如何在远程计算机上执行测试。

----

### 前提条件

在安装了 `Invoke-AtomicTests` 的本地计算机上, 满足如下条件后便可以在远程计算机上执行 atomic tests

|  本地计算机  |  远程计算机  |                                         先决条件                                          |
| :----------: | :----------: | :---------------------------------------------------------------------------------------: |
|   Windows    |   Windows    |                             远程必须启用 PowerShell Remoting                              |
|   Windows    | Linux, macOS | 1) 本地必须安装PowerShell Core <br>2) 远程必须配置好了通过 SSH 来进行 powershell remoting |
| Linux, macOS |   Windows    | 1）本地必须安装PowerShell Core<br>2) 远程必须配置好了通过 SSH 来进行 powershell remoting  |

---

### 启用 Powershell Remoting - Win2Win

> [Enable-PSRemoting (Microsoft.PowerShell.Core) - PowerShell | Microsoft Learn --- 启用-PSRemoting (Microsoft.PowerShell.Core) - PowerShell |微软学习](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/enable-psremoting?view=powershell-7.3&source=docs)

如果本地和远程都是 Windows 的话, 只需要在远程 Windows 上启用 PS Remoteing

![image-20230918162723157](http://cdn.ayusummer233.top/DailyNotes/202309181627870.png)

> 这个虚拟机加了两张卡, 一张用来连公网, 一张用来连内网, 这里由于公网那张卡开 WinRM 失败了, 因此暂且将其禁用了
>
> 除此以外, 文档中还提到了这种情况下也可以通过使用  `-SkipNetworkProfileCheck` 来跳过此项验证

![image-20230918163201801](http://cdn.ayusummer233.top/DailyNotes/202309181632947.png)

默认情况下, 只有远程计算机上的 Administrators 组中的用户才能建立 PS Remoting 连接

---

### 安装 Powershell Core - NoWin

> [Install PowerShell on Windows, Linux, and macOS - PowerShell | Microsoft Learn --- 在 Windows、Linux 和 macOS 上安装 PowerShell - PowerShell |微软学习](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.3)

当本地和远程计算器不是 Windows 时, 必须安装 `Powershell Core Version >= 6` 的版本

```powershell
$PSVersionTable
```

![image-20230918180016101](http://cdn.ayusummer233.top/DailyNotes/202309181800702.png)

---

### 通过 SSH 配置 PowerShell Remoting - NoWin

> [PowerShell Remoting Over SSH - PowerShell | Microsoft Learn --- 通过 SSH 进行 PowerShell 远程处理 - PowerShell |微软学习](https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/ssh-remoting-in-powershell-core?view=powershell-7.3)

当本地与远程计算机都不是 Windows 时, 必须将远程计算机配置为通过 SSH 进行 Powershell Remoting, 具体操作可以参阅上面的链接

PS: 如果远程计算机为 Linux/MacOS, 并且如果运行的测试需要管理员权限的话, 需要再 sshd_config 文件中包含 sudo, 并且需要链接的用户必须能够在没有密码的情况下执行 sudo

---

## 在执行完 atomic tests 之后运行清理命令

许多原子测试包括清理命令，用于删除在执行测试期间生成的临时文件或将设置返回到以前的或更安全的值，以便可以再次运行测试。建议在每次测试执行后运行清理命令。

可以使用 `ShowDetails` 选项来查看清理命令的具体作用

要查看清理命令的作用，您可以使用 `-ShowDetails` 选项，如本 Wiki 的“列表原子测试”页面上所述。

```powershell
Invoke-AtomicTest T1003 -ShowDetails
```

![image-20230917221634506](http://cdn.ayusummer233.top/DailyNotes/202309172216543.png)

---

### 运行指定测试的清理命令

```powershell
# 清理环境
Invoke-AtomicTest T1218.010 -TestNames "Regsvr32 remote COM scriptlet execution","Regsvr32 local DLL execution" -Cleanup
```

![image-20230917225234153](http://cdn.ayusummer233.top/DailyNotes/202309172252223.png)

----

### 对给定编号的所有 atomic test 执行清理命令

```powershell
Invoke-AtomicTest T1218.010 -Cleanup
```

![image-20230917225429297](http://cdn.ayusummer233.top/DailyNotes/202309172254323.png)

---



 











