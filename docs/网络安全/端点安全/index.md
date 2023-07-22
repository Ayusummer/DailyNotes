# 端点安全

---

## C2 工具

[Cobalt Strike 模块详解&功能详解 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/261298349)

---

## Linux

[bsauce/kernel-exploit-factory: Linux kernel CVE exploit analysis report and relative debug environment. You don't need to compile Linux kernel and configure your environment anymore. --- bsauce/kernel-exploit-factory：Linux 内核 CVE 漏洞利用分析报告和相关调试环境。您不再需要编译 Linux 内核和配置您的环境。 (github.com)](https://github.com/bsauce/kernel-exploit-factory)

---

## Windows

> [Powershell 攻击指南 2——Empire_powershsell empire_willowpy 的博客-CSDN 博客](https://blog.csdn.net/qq_34640691/article/details/110686135)

---

### 永久关闭 Windows 实时防护

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

### Sysmon

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
