# PYPSRP

PyPSRP 是 [Jordan Borean](https://www.bloggingforlogging.com/sample-page/) 编写的一个 python 库, 他只关注仅允许 WSMan 传输的 `PowerShell 2-5.x`, 这个库旨在 PSRP 层上运行, 而其他第三方库一般只是提供了 WinRS 组件;

在介绍 PYPSRP 前需要了解一些 PSRP 中的概念

> 这部分内容推荐到 [PowerShell Remoting on Python – Blogging for Logging](https://www.bloggingforlogging.com/2018/08/14/powershell-remoting-on-python/) 中阅读, 这里只摘录与讨论一些个人比较关注的概念

---

## Runspace Pool and Runspaces 运行空间池和运行空间

Runspaces 是指现有 PowerShell 进程上的一个新线程, 可以在某个事件点运行单个 "Pipeline"

Runspace Pool 是 Runspace 的集合(collection)/池(pool) , 他可以高效地处理多个 Runspace 的执行

----

## Pileline 管道

在 PSRP 中, Pipeline 是在 Runspace 上执行 "Statements(语句)" 的有序集合

Runspace 和 Pipeline 存在一一对应的关系, 这意味着每个 Runspace 只能执行一个 Pipeline

---

## Statements 语句

statement 是在 Pipeline 上运行的 Commands/scripts 的有序集合

一条语句很容易被视为一个工作单元, 并且通常在 powershell 中表示为一行, 例如:

```powershell
# 2 statement
$service = Get-Service -Name winrm
$service.Status

# same 2 statements in the 1 line
$service = Get-Service -Name winrm; $service.Status
```

---

## Commands 命令

Command 是通过 pipe 连接在一起的 cmdlet 或 scripts 的有序集合

> 例如:
>
> ```powershell
> Get-Process | Where-Object {$_.Name -eq "explorer"} | Stop-Process
> ```
>
> pipe 用于将一个命令的输出传给另一个命令的输入, 形成命令链, 这样就可以用于将多个命令连接起来从而实现更复杂的任务
>
> 上述语句中的 `|` 就是 pipe, `Get-Process` 就是 cmdlet
>
> `Get-Process` 获取所有进程, 然后通过管道将其传递给 `Where-Object`, 该命令过滤出进程名为 `explorer` 的进程, 然后通过将这些进程传递给 `Stop-Process` 来停止这些进程; 最终实现的效果就是会关闭当前打开的所有文件资源管理器
>
> > PS: 由于 Windows 任务栏也是和 explorer 绑一起的, 所以执行命令后也会看到任务栏消失, 然后 explorer 进程重启恢复任务栏
>
> cmdlet 是 powershell 中的命令, 是一种轻量级的命令, 他们通常以 `动词-名词` 的形式命令, 如上述代码中的 `Get-Porcess`, `Stop-Process`; cmdlet 提供了在 PowerShell 中执行各种操作的功能单元

script 就像一个 PowerShell 代码块, 可以包含多行代码以及函数和其他属性;

当 command 中有多个 cmdlet 或 script 时, 第一个 cmdlet/scirpt 的输出将被 piped into 第二个 cmdlet/script 的输入中, 例如上面示例中的 `Get-Process` 的输出就通过 pipe `|` 送给了 `Where-Object` 作输入

每个 cmdlet/script 在运行时可以没有 `parameter/argument`; 

> - parameter 是指 cmdlet/script 定义中的参数, 用于接收传入的值
> - argument 是指 cmdlet/scirpt 调用时传入的实际值, 用于赋给 parameter
>
> 例如 `Get-Process -Name exploere` 中 `-Name` 就是 `parameter`, `exploere` 就是 `argument`

---

## Streams(流)

与使用 `input`, `output` 和 `error` 字节流的经典进程不同, PowerShell 包含 6 个(5.0 之前是 5 个)流:

![img](http://cdn.ayusummer233.top/DailyNotes/202311081355765.png)

- `Output/Success`: 正常,成功结果的默认流

  可以使用 `Write-Output` 或 `>` 操作符将数据/对象写入到这个流

- `Error`: 用于输出错误/异常信息

  可以使用 `Write-Error` 或 `2>` 操作符将数据发送到 Error 流

- `Warning`: 用于输出非致命性的警告信息

  这些信息通常表示一些问题或潜在错误, 但命令仍然可以继续进行(例如提示升级 pip 版本)

  可以使用 `Write-Warning` 或 `Write-Host -ForegroundColor Yellow` 将数据发送到警告流

- `Verbose`: 用于输出详细信息, 常用于调试目的

  可以使用 `Write-Verbose` 命令或在执行命令时使用 `-Verbose` 开关来控制输出

- `Debug`: 用于输出调试信息, 通常包括命令内部的状态和

  可以使用 `Write-Debug` 命令或在执行命令时使用 `-Debug` 开关来控制输出

- `Information`: 用于输出一般性的信息, 不是错误或警告, 用于提供帮助用户了解脚本正在做什么的消息

  可以使用 `Write-Information` 或 `$InformationPreference` 变量来控制信息消息的显示

> 参考阅读:
>
> - [Understanding Streams, Redirection, and Write-Host in PowerShell - Scripting Blog [archived\] (microsoft.com)](https://devblogs.microsoft.com/scripting/understanding-streams-redirection-and-write-host-in-powershell/)
> - [Weekend Scripter: Welcome to the PowerShell Information Stream - Scripting Blog [archived\](microsoft.com)](https://devblogs.microsoft.com/scripting/weekend-scripter-welcome-to-the-powershell-information-stream/)

---

## Objects(对象)

除了拥有更多 Stream 外, PowerShell 与 stdio 的不同知乎还在于其传输的时 Object(对象) 而非 byte(字节); 

虽然从技术上讲, 他们仍被表示为字节, 但在 PowerShell 层中, 这些字节级别的细节被抽象隐藏了, 在 PowerShell 层面上, 数据是以高级别的对象进行处理的, 这使得在 PowerShell 中编写和理解代码更加直观方便;

例如, 如果 C 程序运行 `printf("Hello World")`, 它讲把字节 `48 65 6c 6c 6f 20 57 6f 72 6c 64` 发送到 stdout 流。与 PowerShell 相比， `Write-Output "Hello World"` 将在第一个流上将字符串作为 .NET 对象发送。

这种方法的一个问题是如何通过 WSMan 等远程传输协议表示这些对象，因为这些对象不是该层的原始对象。 Microsoft 使用 CLIXML 来解决这个问题

> CLIXML 是一种 XML 格式, 通常在 PowerShell 中用于序列化和反序列化命令输出和数据

---

## Process Flow

通过如下例子详细解释下 pypsrp 在执行以下脚本时会做什么:

```python 
from pypsrp.powershell import PowerShell, RunspacePool
from pypsrp.wsman import WSMan

wsman = WSMan("server2016.domain.local", username="vagrant",
              password="vagrant",
              cert_validation=False)

with RunspacePool(wsman) as pool:
    ps = PowerShell(pool)
    ps.add_cmdlet("Get-PSDrive").add_parameter("Name", "C")
    ps.invoke()
    # we will print the first object returned back to us
    print(ps.output[0])
```

这个脚本高效地在主机 `server2016.domain.local` 上运行 `cmdlet Get-PSDrive -Name C`, 如下是执行这段代码时交换信息的基本流程:

![企业微信截图_16994249322263](http://cdn.ayusummer233.top/DailyNotes/202311081428598.png)

虽然上面使用的消息是 PSRP 协议中最常用的类型, 但基本协议中当前有 31 种不同的 PSRP 消息类型

---

## Message Structure 消息结构

如下消息是 PSRP 交换中发送的第一条消息:

```xml
<s:Envelope xmlns:rsp="http://schemas.microsoft.com/wbem/wsman/1/windows/shell" xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsman="http://schemas.dmtf.org/wbem/wsman/1/wsman.xsd" xmlns:wsmv="http://schemas.microsoft.com/wbem/wsman/1/wsman.xsd">
    <s:Header>
        <wsa:Action s:mustUnderstand="true">http://schemas.xmlsoap.org/ws/2004/09/transfer/Create</wsa:Action>
        <wsmv:DataLocale s:mustUnderstand="false" xml:lang="en-US"/>
        <wsman:Locale s:mustUnderstand="false" xml:lang="en-US"/>
        <wsman:MaxEnvelopeSize s:mustUnderstand="true">153600</wsman:MaxEnvelopeSize>
        <wsa:MessageID>uuid:1C74E6AE-8C7A-4C03-99D1-C4AD3DABFD6D</wsa:MessageID>
        <wsman:OperationTimeout>PT20S</wsman:OperationTimeout>
        <wsa:ReplyTo>
            <wsa:Address s:mustUnderstand="true">http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsman:ResourceURI s:mustUnderstand="true">http://schemas.microsoft.com/powershell/Microsoft.PowerShell</wsman:ResourceURI>
        <wsmv:SessionId s:mustUnderstand="false">uuid:C6602DD7-6096-4983-A956-82B048821F4D</wsmv:SessionId>
        <wsa:To>http://server2016.domain.local:5985/wsman</wsa:To>
        <wsman:OptionSet s:mustUnderstand="true">
            <wsman:Option MustComply="true" Name="protocolversion">2.3</wsman:Option>
        </wsman:OptionSet>
    </s:Header>
    <s:Body>
        <rsp:Shell ShellId="5A416EA5-FB2A-4AAA-91BF-77BF51043386">
            <rsp:InputStreams>stdin pr</rsp:InputStreams>
            <rsp:OutputStreams>stdout</rsp:OutputStreams>
            <creationXml xmlns="http://schemas.microsoft.com/powershell">AAAAAAAAAAEAAAAAAAAAAAMAAADHAgAAAAIAAQBaQW6l+ypKqpG/d79RBDOGAAAAAAAAAAAAAAAAAAAAADxPYmogUmVmSWQ9IjAiPjxNUz48VmVyc2lvbiBOPSJwcm90b2NvbHZlcnNpb24iPjIuMzwvVmVyc2lvbj48VmVyc2lvbiBOPSJQU1ZlcnNpb24iPjIuMDwvVmVyc2lvbj48VmVyc2lvbiBOPSJTZXJpYWxpemF0aW9uVmVyc2lvbiI+MS4xLjAuMTwvVmVyc2lvbj48L01TPjwvT2JqPgAAAAAAAAACAAAAAAAAAAADAAAC/QIAAAAEAAEAWkFupfsqSqqRv3e/UQQzhgAAAAAAAAAAAAAAAAAAAAA8T2JqIFJlZklkPSIwIj48TVM+PEkzMiBOPSJNaW5SdW5zcGFjZXMiPjE8L0kzMj48STMyIE49Ik1heFJ1bnNwYWNlcyI+MTwvSTMyPjxPYmogTj0iUFNUaHJlYWRPcHRpb25zIiBSZWZJZD0iMSI+PFROIFJlZklkPSIwIj48VD5TeXN0ZW0uTWFuYWdlbWVudC5BdXRvbWF0aW9uLlJ1bnNwYWNlcy5QU1RocmVhZE9wdGlvbnM8L1Q+PFQ+U3lzdGVtLkVudW08L1Q+PFQ+U3lzdGVtLlZhbHVlVHlwZTwvVD48VD5TeXN0ZW0uT2JqZWN0PC9UPjwvVE4+PFRvU3RyaW5nPkRlZmF1bHQ8L1RvU3RyaW5nPjxJMzI+MDwvSTMyPjwvT2JqPjxPYmogTj0iQXBhcnRtZW50U3RhdGUiIFJlZklkPSIyIj48VE4gUmVmSWQ9IjEiPjxUPlN5c3RlbS5NYW5hZ2VtZW50LkF1dG9tYXRpb24uUnVuc3BhY2VzLkFwYXJ0bWVudFN0YXRlPC9UPjxUPlN5c3RlbS5FbnVtPC9UPjxUPlN5c3RlbS5WYWx1ZVR5cGU8L1Q+PFQ+U3lzdGVtLk9iamVjdDwvVD48L1ROPjxUb1N0cmluZz5VTktOT1dOPC9Ub1N0cmluZz48STMyPjI8L0kzMj48L09iaj48T2JqIE49Ikhvc3RJbmZvIiBSZWZJZD0iMyI+PE1TPjxCIE49Il9pc0hvc3ROdWxsIj50cnVlPC9CPjxCIE49Il9pc0hvc3RVSU51bGwiPnRydWU8L0I+PEIgTj0iX2lzSG9zdFJhd1VJTnVsbCI+dHJ1ZTwvQj48QiBOPSJfdXNlUnVuc3BhY2VIb3N0Ij50cnVlPC9CPjwvTVM+PC9PYmo+PE5pbCBOPSJBcHBsaWNhdGlvbkFyZ3VtZW50cyIgLz48L01TPjwvT2JqPg==</creationXml>
        </rsp:Shell>
    </s:Body>
</s:Envelope>
```

> 其中的长串 base64 编码信息解码并去除非 base64 字符后得到:
>
> ```xml
> <Obj RefId="0">
>     <MS>
>         <Version N="protocolversion">2.3</Version>
>         <Version N="PSVersion">2.0</Version>
>         <Version N="SerializationVersion">1.1.0.1</Version>
>     </MS>
> </Obj>
> <Obj RefId="0">
>     <MS>
>         <I32 N="MinRunspaces">1</I32>
>         <I32 N="MaxRunspaces">1</I32>
>         <Obj N="PSThreadOptions" RefId="1">
>             <TN RefId="0">
>                 <T>System.Management.Automation.Runspaces.PSThreadOptions</T>
>                 <T>System.Enum</T>
>                 <T>System.ValueType</T>
>                 <T>System.Object</T>
>             </TN>
>             <ToString>Default</ToString>
>             <I32>0</I32>
>         </Obj>
>         <Obj N="ApartmentState" RefId="2">
>             <TN RefId="1">
>                 <T>System.Management.Automation.Runspaces.ApartmentState</T>
>                 <T>System.Enum</T>
>                 <T>System.ValueType</T>
>                 <T>System.Object</T>
>             </TN>
>             <ToString>UNKNOWN</ToString>
>             <I32>2</I32>
>         </Obj>
>         <Obj N="HostInfo" RefId="3">
>             <MS>
>                 <B N="_isHostNull">true</B>
>                 <B N="_isHostUINull">true</B>
>                 <B N="_isHostRawUINull">true</B>
>                 <B N="_useRunspaceHost">true</B>
>             </MS>
>         </Obj>
>         <Nil N="ApplicationArguments" />
>     </MS>
> </Obj>
> ```

---

## WSMan

WSMan 是一种基于 SOAP 的协议, 通过 HTTP 发送

> SOAP 是一种在计算机之间交换结构化数据的网络协议; 它使用 XML 格式传输消息, 基于应用层协议(例如 HTTP, SMTP, TCP 等)进行标记和传输
>
> SOAP 的优点是它可以跨平台, 跨语言和跨防火墙进行通信, 是一种开放的标准, 由 W3C 维护; 
>
> 缺点在于它相对复杂, 需要解析 XML 文档, 且其性能与效率不如其他轻量级协议, 如 REST; 
> 不过虽然 SOAP 在一些情况下已经被 RESTful API 替代, 但它仍然在特定的企业和集成环境中得到广泛应用

关于具体这些 XML 各层的含义可以阅读 [PowerShell Remoting on Python – Blogging for Logging](https://www.bloggingforlogging.com/2018/08/14/powershell-remoting-on-python/), 这里暂且不做讨论

---

## 安装 pypsrp

```bash
pip install pypsrp
```

要使用 PyPSRP 需要先启用 PowerShell Remoting

```powershell
Enable-PSRemoting
```

![image-20231109000451634](http://cdn.ayusummer233.top/DailyNotes/202311090004919.png)

----

## 示例

```python
# 通过 PSRP 层运行一些代码的示例
from pypsrp.client import Client

SERVER = "192.168.1.219"
USERNAME = "ARTWinSummer\Win10Pro"
PASSWORD = "Win10Pro"
client = Client(SERVER, username=USERNAME, password=PASSWORD, ssl=False)

script = r"New-Item -Path C:\temp\folder -ItemType Directory -Verbose"
output, streams, had_errors = client.execute_ps(script)

print("HAD ERRORS: %s" % had_errors)
print("OUTPUT:\n%s" % output)
print("ERROR:\n%s" % "\n".join([str(s) for s in streams.error]))
print("DEBUG:\n%s" % "\n".join([str(s) for s in streams.debug]))
print("VERBOSE:\n%s" % "\n".join([str(s) for s in streams.verbose]))

```

![image-20231108151015825](http://cdn.ayusummer233.top/DailyNotes/202311081510417.png)

如果再运行一次就会看到有一个错误条目, 不过 had errors 仍然为 False, 这是因为使用了 `execute_ps` 运行了这个脚本, 仅 terminating 了错误; 例如, 使用 `throw` 则会将此项变为 `True`

![image-20231108151101089](http://cdn.ayusummer233.top/DailyNotes/202311081511178.png)

---

将其转换为低级 API 如下所示:

```python
# 将 basic_sample.py 转换为使用低级API的写法示例:
from pypsrp.powershell import PowerShell, RunspacePool
from pypsrp.wsman import WSMan

SERVER = "192.168.1.219"
USERNAME = "ARTWinSummer\Win10Pro"
PASSWORD = "Win10Pro"
wsman = WSMan(SERVER, username=USERNAME, password=PASSWORD, ssl=False)

with RunspacePool(wsman) as pool:
    ps = PowerShell(pool)
    ps.add_script("New-Item -Path C:\\temp\\folder -ItemType Directory -Verbose")
    output = ps.invoke()

print("HAD ERRORS: %s" % ps.had_errors)
print("OUTPUT:\n%s" % "\n".join([str(s) for s in output]))
print("ERROR:\n%s" % "\n".join([str(s) for s in ps.streams.error]))
print("DEBUG:\n%s" % "\n".join([str(s) for s in ps.streams.debug]))
print("VERBOSE:\n%s" % "\n".join([str(s) for s in ps.streams.verbose]))

```

![image-20231108161459797](http://cdn.ayusummer233.top/DailyNotes/202311081615458.png)

这些低级API旨在复制 `.Net API` 以处理 Runspace Pools 和 Pipelines, 具体信息可以参阅 `PowerShell, RunspacePool` 类

---

## WInRS 示例

pypsrp 设计之初就表明了要实现 pywinrm 的所有功能, 其中包括通过 WInRS 执行命令

和上面 PSRP 类似, 有一个 high level implementation  可用于快速上手

例如:

```python
from pypsrp.client import Client

client = Client(
    "192.168.1.219", username="ARTWinSummer\Win10Pro", password="Win10Pro", ssl=False
)

stdout, stderr, rc = client.execute_cmd("whoami.exe /all", encoding="GBK")

print("RC: %d" % rc)
print("STDOUT:\n%s" % stdout)
print("STDERR:\n%s" % stderr)

```

> 其中 `client.execute_cmd` 的 `encoding` 参数默认是 `437(en-US)`, 这里需要改成 `GBK` 才能解析中文环境的 Windows 命令输出
>
> ![image-20231108174930909](http://cdn.ayusummer233.top/DailyNotes/202311081749579.png)
>
> ![image-20231108174958802](http://cdn.ayusummer233.top/DailyNotes/202311081749988.png)

现在将上面的写法与使用 lower level API 相比较:

```python
from pypsrp.shell import Process, SignalCode, WinRS
from pypsrp.wsman import WSMan
from config import SERVER, USERNAME, PASSWORD


wsman = WSMan(
    server=SERVER,
    username=USERNAME,
    password=PASSWORD,
    ssl=False,
)

with WinRS(wsman) as shell:
    process = Process(shell, "whoami.exe", ["/all"])
    process.invoke()
    process.signal(SignalCode.CTRL_C)

print("RC: %d" % process.rc)

# the stdout and stderr streams come back as bytes, this decodes them with GBK(用于中文)
print("STDOUT:\n%s" % process.stdout.decode("GBK"))
print("STDERR:\n%s" % process.stderr.decode("GBK"))

```

![image-20231109001414210](http://cdn.ayusummer233.top/DailyNotes/202311090014262.png)

在这个示例中, 我们手动创建了一个 `Process` 对象, 该对象参数中包含了可执行程序(`whoami.exe`) 以及其参数 `/all`, 调用完该对象并在完成后发送停止信号; 这比其他代码要详细得多, 但是我们可以使用这些 low level interface 来实现如下操作:

- 在同一个 WinRS Shell 中运行多个命令, 从而节省反复启动 shell 的时间
- 进程对象具有 `begin_invoke()`, `poll_invoke` 和 `end_invoke()` 来有效地在后台执行命令, 并且在其完成之前不会 block Python
- Process 对象有一个 `send()` 方法将字节发送到远程进程的 stdin pipe
- 围绕 WinRS shell 和 Process 对象还有更多的配置选项, 如环境, 工作目录, 代码页等

---

## Interop with Secure Strings

PyPSRP 作者认为这是一个非常重要的特性, 不过目前个人对此需求不大, 这里 mark 一下, 需要了解的话可以参阅 [PowerShell Remoting on Python – Blogging for Logging](https://www.bloggingforlogging.com/2018/08/14/powershell-remoting-on-python/)

---
