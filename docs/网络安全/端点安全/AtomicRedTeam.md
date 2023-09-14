# Atomic Red Team

> [redcanaryco/atomic-red-team: Small and highly portable detection tests based on MITRE's ATT&CK. --- redcanaryco/atomic-red-team：基于 MITRE 的 ATT&CK 的小型且高度便携的检测测试。 (github.com)](https://github.com/redcanaryco/atomic-red-team)
>
> [redcanaryco/invoke-atomicredteam: Invoke-AtomicRedTeam is a PowerShell module to execute tests as defined in the [atomics folder](https://github.com/redcanaryco/atomic-red-team/tree/master/atomics) of Red Canary's Atomic Red Team project. --- redcanaryco/invoke-atomicredteam：Invoke-AtomicRedTeam 是一个 PowerShell 模块，用于执行 Red Canary 的 [atomics 文件夹](https://github.com/redcanaryco/atomic-red-team/tree/master/atomics) 中定义的测试原子红队项目。](https://github.com/redcanaryco/invoke-atomicredteam)

Atomic Red Team™ 是映射到 MITRE ATT&CK® 框架的测试库。安全团队可以使用 Atomic Red Team 快速、可移植且可重复地测试其环境。

Invoke-AtomicRedTeam 是一个 PowerShell 模块，用于执行 Red Canary 的 Atomic Red Team 项目的 `atomic` 目录中定义的测试。 `atomic` 目录包含 MITRE ATT&CK™ 框架定义的每种技术的文件夹。在每个 `T#` 文件夹中，都可以找到一个 yaml 文件，该文件定义每个原子测试的攻击过程以及相同数据的更易于阅读的 markdown (md) 版本。

---

## Invoke-atomicredteam

### 安装

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

> PS: 在哪个目录运行命令不重要, 文件不会落地到当前目录:
>
> ![image-20230914181341639](http://cdn.ayusummer233.top/DailyNotes/202309141815360.png)

