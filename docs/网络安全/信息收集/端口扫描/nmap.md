# nmap

在不给 `-p` 参数的情况下 nmap 默认扫描最常见的 1000 个 TCP 端口, 范围从 1-1024

```bash
# 扫描 192.168.1.11 的 1-65535 端口并写入到当前目录下的 result.md 文件中
nmap -p 1-65535 192.168.1.11 > result.md
```

----

## SERVICE 字段一览

nmap扫描结果中的SERVICE字段显示扫描出的端口所运行的服务的名称和版本信息。具体的SERVICE字段中的值可以分为以下几种情况：

- 具体的服务名称：例如SSH、HTTP、FTP等等，这些值表明对应的端口正在运行相应的服务。
- 已知的服务名称加版本信息：例如Apache httpd、OpenSSH等等，这些值表明对应的端口正在运行已知名称和版本的服务。
- 未知的服务名称加版本信息：例如3Com 3CDaemon、Trend Micro OfficeScan等等，这些值表明对应的端口正在运行未知名称但已知版本的服务。
- 未知的服务名称和版本信息：例如unknown、unidentified等等，这些值表明nmap无法识别对应端口所运行的服务。

> 当目标主机上有 VULFOCUS 时似乎会扫出一堆奇奇怪怪的 SERVICE
>
> ![image-20230226185824036](http://cdn.ayusummer233.top/DailyNotes/202302261858978.png)
