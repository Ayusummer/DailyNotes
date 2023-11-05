# SSH 劫持

> [Remote Service Session Hijacking: SSH Hijacking, Sub-technique T1563.001 - Enterprise | MITRE ATT&CK®](https://attack.mitre.org/techniques/T1563/001/)

攻击者可能会劫持一个当前拿下的主机与另一个主机的连接, 利用当前 SSH 会话中的公钥身份验证与其他系统建立的信任关系, 这可能是通过损害 SSH 代理本身或访问访问代理的socket来实现的;

> 如果攻击者已经拿到了 root 权限, 那么就没必要劫持 SSH 会话了

SSH 劫持与 SSH 本身不同之处在于它劫持现有的 SSH session 而非使用有效的账户创建一个新的 session

> [又一波神操作：横向渗透中的 SSH 劫持技巧 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/news/104235)
>
> [一文彻底搞懂什么是SSH中间人攻击(Man-in-the-middle attack)-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1277461)
>
> [使用 BCC 实现 SSH 密钥劫持 - 先知社区 (aliyun.com)](https://xz.aliyun.com/t/12689)

