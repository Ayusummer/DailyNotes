# SSH 横向移动

> [SSH横向移动备忘单|ssh内网横向渗透技巧 - 🔰雨苁ℒ🔰 (ddosi.org)](https://www.ddosi.org/ssh-movement/)

---

## SSH 的概念

> [什么是SSH？SSH是如何工作的？ - 华为 (huawei.com)](https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html)

SSH（Secure Shell，安全外壳）是一种网络安全协议，与传统的 Telnet, FTP 使用明文传输数据不同, SSH 协议通过加密和认证机制实现安全的访问和文件传输等业务。

> 使用明文传输数据容易因中间人嗅探而泄露数据
>
> > [嗅探欺骗 | 凡间的精灵 (chenzhonzhou.github.io)](https://chenzhonzhou.github.io/2021/01/04/kali-xiu-tan-qi-pian/)
> >
> > [中间人攻击之ARP欺骗 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/562434778)
> >
> > [Telnet,Mstsc,SSH,FTP之间的比较和区别 - 上善若泪 - 博客园 (cnblogs.com)](https://www.cnblogs.com/jingzh/p/16018410.html)
> >
> > [常见服务类漏洞 - Geekby's Blog](https://www.geekby.site/2020/05/常见服务类漏洞/)
> >
> > [旭日酒馆 (xueyp.github.io)](https://xueyp.github.io/网络安全/2018/11/20/网络安全-局域网https嗅探.html)

---

## SSH 的工作流程

> [什么是SSH？SSH是如何工作的？ - 华为 (huawei.com)](https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html)
>
> ---
>
> [SSH 证书登录教程 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2020/07/ssh-certificate.html)

SSH 由服务器和客户端组成，为建立安全的SSH通道，双方需要先建立TCP连接，然后协商使用的版本号和各类算法，并生成相同的会话密钥用于后续的对称加密。在完成用户认证后，双方即可建立会话进行数据交互。

SSH的工作流程包括如下几个阶段:

![SSH工作流程](http://cdn.ayusummer233.top/DailyNotes/202311070711464.png)

> 其中密钥交换部分的流程如下:
>
> ![SSH密钥交换](http://cdn.ayusummer233.top/DailyNotes/202311070738610.png)

---

## 查找 SSH 密钥

一般在如下目录, 文件中:

```bash
/home/*
cat /root/.ssh/authorized\_keys 
cat /root/.ssh/identity.pub 
cat /root/.ssh/identity 
cat /root/.ssh/id\_rsa.pub 
cat /root/.ssh/id\_rsa 
cat /root/.ssh/id\_dsa.pub 
cat /root/.ssh/id\_dsa 
cat /etc/ssh/ssh\_config 
cat /etc/ssh/sshd\_config 
cat /etc/ssh/ssh\_host\_dsa\_key.pub 
cat /etc/ssh/ssh\_host\_dsa\_key 
cat /etc/ssh/ssh\_host\_rsa\_key.pub 
cat /etc/ssh/ssh\_host\_rsa\_key 
cat /etc/ssh/ssh\_host\_key.pub 
cat /etc/ssh/ssh\_host\_key
cat ~/.ssh/authorized\_keys 
cat ~/.ssh/identity.pub 
cat ~/.ssh/identity 
cat ~/.ssh/id\_rsa.pub 
cat ~/.ssh/id\_rsa 
cat ~/.ssh/id\_dsa.pub 
cat ~/.ssh/id\_dsa 
```

也可以::

```bash
grep -irv "-----BEGIN RSA PRIVATE KEY-----" /home/*
grep -irv "BEGIN DSA PRIVATE KEY" /home/*

grep -irv "BEGIN RSA PRIVATE KEY" /*
grep -irv "BEGIN DSA PRIVATE KEY" /*
```

找到密钥后需要确认其可以用于哪些主机, 可以检查如下文件:

```bash
/etc/hosts 
~/.known_hosts
~/.bash_history 
~/.ssh/config 
```

---

## SSH 密码后门

在攻击机上生成一对密钥,将公钥贴在受感染主机的 `~/.ssh/authorized_keys` 中

---

## SSH 劫持

> [Remote Service Session Hijacking: SSH Hijacking, Sub-technique T1563.001 - Enterprise | MITRE ATT&CK®](https://attack.mitre.org/techniques/T1563/001/)

攻击者可能会劫持一个当前拿下的主机与另一个主机的连接, 利用当前 SSH 会话中的公钥身份验证与其他系统建立的信任关系, 这可能是通过损害 SSH 代理本身或访问访问代理的socket来实现的;

SSH 劫持与 SSH 本身不同之处在于它劫持现有的 SSH session 而非使用有效的账户创建一个新的 session

----

### SSH 代理转发

> [SSH横向移动备忘单|ssh内网横向渗透技巧 - 🔰雨苁ℒ🔰 (ddosi.org)](https://www.ddosi.org/ssh-movement/)

SSH 代理的工作原理是允许一个中间机器 SSH Server 将 Local Host 的 SSH 密钥从当前客户端传递(转发)到下一个下游服务器 Remote Host

```mermaid
graph LR
    subgraph Client
        A((Local Host))
    end

    subgraph Server
        B((Remote Host))
    end

    subgraph SSH Server
        C((SSH Server))
    end

    A -->|SSH Connection| C
    C -->|SSH Connection| B

```

在这个过程中, SSH Server 中并不会存储也不会物理访问而仅仅是将密钥传递给 Remote Host

-----

### 劫持 SSH 代理转发

SSH 代理转发允许用户在不输入密码的情况下连接到其他机器。当存在活动会话时，可以利用此功能访问受感染用户 SSH 密钥有权访问的任何主机（无需直接访问密钥）。





































