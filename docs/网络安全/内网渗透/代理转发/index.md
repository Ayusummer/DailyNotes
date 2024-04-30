# 代理转发

- [代理转发](#代理转发)
  - [正向代理与反向代理](#正向代理与反向代理)
    - [正向代理(Forward Proxy)](#正向代理forward-proxy)
    - [反向代理(Reverse Proxy)](#反向代理reverse-proxy)
  - [Socks 协议](#socks-协议)
  - [使用 SSH 创建动态端口转发作 socks 代理](#使用-ssh-创建动态端口转发作-socks-代理)
    - [BurpSuit 挂内网主机的 socks 代理拦截本地 http 流量访问内网其他的服务](#burpsuit-挂内网主机的-socks-代理拦截本地-http-流量访问内网其他的服务)
  - [使用 netsh 设置端口转发](#使用-netsh-设置端口转发)

---

> [内网渗透之代理转发 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/256415.html)

当拿到一个主机的权限之后可以通过该主机向内网进行渗透, 不过由于该主机上不一定有渗透需要的工具以及若是直接远程连接到主机的话会留下明显的痕迹, 因此通过本地操作然后内网转发流量是比较稳妥的做法

---

## 正向代理与反向代理

- 正向代理中，Proxy和Client同属一个区域，对Server是透明的； 
- 反向代理中，Proxy和Server同属一个区域，对Client透明。

正向代理与反相代理都是用于代替收发请求与响应, 从拓扑上来看大致如下:

```mermaid
flowchart TB
  subgraph 正向代理
    subgraph LAN0
    c00[Client] --> p0[Proxy] 
    c01[Client] --> p0
    c02[Client] --> p0
    end
    p0 --> s0[Server]
  end
  subgraph 反向代理
    subgraph LAN1
    p1[Proxy] --> s10[Server]
    p1 --> s11[Server]
    p1 --> s12[Server]
    end
    c10[Client] --> p1
    c11[Client] --> p1
    c12[Client] --> p1
  end
```

---

### 正向代理(Forward Proxy)

```mermaid
flowchart TB
  subgraph 正向代理
    subgraph LAN0
    c00[Client] --> p0[Proxy] 
    c01[Client] --> p0
    c02[Client] --> p0
    end
    p0 --> s0[Server]
  end
```

Client 为了访问到 Server, 想 Proxy 发送了一个请求并指定目标位 Server, 然后由 Proxy 转发请求并将获得的内容返回给 Client

正向代理，也称为普通代理，是客户端向代理服务器发送请求，代理服务器再将请求发送给目标服务器，然后将目标服务器返回的数据返回给客户端。正向代理的代理对象是客户端, 帮助客户端访问其无法访问的服务器资源

正向代理是代理服务器向服务器发送请求，代表客户端请求数据, 一般是由客户端架设的

正向代理中, 服务器不知道真正的客户端是谁

---

### 反向代理(Reverse Proxy)

```mermaid
flowchart TB
  subgraph 反向代理
    subgraph LAN1
    p1[Proxy] --> s10[Server]
    p1 --> s11[Server]
    p1 --> s12[Server]
    end
    c10[Client] --> p1
    c11[Client] --> p1
    c12[Client] --> p1
  end
```

反向代理，是客户端向反向代理服务器发送请求，反向代理服务器根据请求的内容将请求转发到内部的服务器集群中的某一台服务器上，将处理结果返回给客户端。反向代理的代理对象是服务器, 帮助服务器做负载均衡, 安全防护等

反向代理是代理服务器接收客户端请求，向服务器发送请求，代表服务器提供服务, 一般是由服务端架设的

反向代理中, 客户端不知道真正的服务器是谁

---

## Socks 协议

代理是一种网络服务, 可以让客户端通过一个中间服务器来访问目标服务器, Socks 协议是一种代理协议, 可以支持任何类型的网络流量

Socks(Socket Secure)协议是一种网络协议，用于在客户端和服务器之间进行通信，常被代理服务器使用。Socks协议与HTTP代理不同，它不解析数据包，而是将其原封不动地发送给代理目标。因此，Socks协议可以更高效地处理网络流量，但也会带来一些安全风险。

Socks 工作在第五层(会话层), 使用 TCP 协议传输数据, 不提供如 ICMP 信息之类的网络层相关服务

![img](http://cdn.ayusummer233.top/DailyNotes/202302271331853.jpeg)

Socks 目前有 SOCKS4 和 SOCKS5 两个版本

- SOCKS4支持TELNET, FTP, HTTP等TCP协议；
- SOCKS5支持TCP与UDP，并支持安全认证方案。

> - 认证方式：Socks4 不支持认证机制，而 Socks5 支持多种认证方式，包括用户名密码认证、GSS-API 认证等。
> - 支持的协议：Socks4只支持TCP协议，而Socks5支持TCP和UDP协议。
> - DNS解析：Socks4代理不支持DNS解析，它只接受IP地址作为参数。而Socks5代理支持DNS解析，可以将域名解析为IP地址。
> - Socks5 支持 IPv6, Socks4只支持IPv4地址，而Socks5支持IPv4和IPv6地址。

常见的转发工具有

- reGeorg
- SSH 端口转发
- iptables
- Netsh
- LCX
- EarthWorm(支持多种系统)
- Socks(Linux)
- Netcat

常见的代理链工具:

- Proxychains(Linux)
- Proxifier(Windows)
- Sockscap64(Windows)

---

## 使用 SSH 创建动态端口转发作 socks 代理

> [用ssh做firefox的代理_空空法师的博客-CSDN博客](https://blog.csdn.net/snleo/article/details/4792523)


```bash
ssh -fND localhost:12345 -i [私钥路径] root@192.168.1.96
```

- `-f` 表示在后台运行 ssh 命令, 不占用终端
- `-N` 表示不执行远程命令,只做端口转发
- `-D localhost:12345` 表示创建一个动态端口转发, 将本地主机的 12345 端口作为 socks 代理
- `-i [私钥路径]` 表示使用指定私钥文件进行身份验证
- `root@192.168.1.96` 表示以 root 用户登录远程主机 192.168.1.96

这个命令可以使得通过 ssh 隧道访问远程主机上的网络服务, 或者使用远程主机作为代理访问其他网站

![image-20230330173345557](http://cdn.ayusummer233.top/DailyNotes/202304041354643.png)

挂上后命令行会卡在这里
然后 Firefox 配置 socks 5 代理

![image-20230330180127369](http://cdn.ayusummer233.top/DailyNotes/202304041354163.png)

如此这般就可以从本地的 Firefox 挂 96 的代理访问内网其他的服务了

----

### BurpSuit 挂内网主机的 socks 代理拦截本地 http 流量访问内网其他的服务

首先还是 SSH 连接并转发端口

```bash
ssh -fND localhost:12345 -i [私钥路径] root@192.168.1.96
```

配置 BurpSuit Socks 代理:

`BurpSuit -> Proxy Setting -> Network->Connections->Socks proxy`

![image-20230331113331780](http://cdn.ayusummer233.top/DailyNotes/202304041354182.png)

配置 BurpSuit http 代理监听:

![image-20230331112806555](http://cdn.ayusummer233.top/DailyNotes/202304041354730.png)

配置 Firefox http 代理

![image-20230331141034822](http://cdn.ayusummer233.top/DailyNotes/202304041354257.png)

---

## 使用 netsh 设置端口转发

`netsh(Network Shell)` 是 Windows 用于查看和修改本地计算机或远程计算机网络配置的命令行脚本工具, 被广泛应用于配置网络接口, 防火墙规则, IP地址, 路由规则等多种网络相关的设置

可以使用 netsh 来配置端口转发, 结合如下场景演示:

```mermaid
graph TB
    subgraph 本地主机
        A((Local Host-连接))
    end

    subgraph 本地主机可以访问到的一台Windows主机
        B((Transport Host<br>转发本地listenprot到<br>Remote Host connectport))
    end

    subgraph Transport Host 可以访问到的目标远程Linux主机
        C((Remote Host<br>connectport上有SSH服务))
    end
	
	A -->|SSH Connection <br>-> listenport| B --> C

```

```powershell
netsh interface portproxy add v4tov4 listenport=[本地端口] listenaddress=0.0.0.0 connectport=[远程端口] connectaddress=[内网Linux设备的IP]
```

这样就可以在 Local Host 上直接 SSH 到 Transport Host 的 listenport 来连接 Remote Host 上的 SSH 服务了

---

相应的, 要通过 RDP 本机的 listenport 转发到目标 Windows 的 3389 端口也可以远程登录目标机器, 例如:

```powershell
netsh interface portproxy add v4tov4 listenport=9100 listenaddress=0.0.0.0 connectport=3389 connectaddress=192.168.1.21
# 删除上述规则:
netsh interface portproxy delete v4tov4 listenport=9100 listenaddress=0.0.0.0
# 查看所有转发规则
netsh interface portproxy show all
```

然后就可以 RDP 到本机的 9100 端口来远程 192.168.1.21 了, 例如

![](http://cdn.ayusummer233.top/DailyNotes/202312011346591.png)

---

## Proxychains

### 安装

```bash
sudo apt update
sudo apt install proxychains
```

---

### 使用

编辑 `/etc/proxychains.conf`

![image-20240412105517854](http://cdn.ayusummer233.top/DailyNotes/202404121055235.png)

然后就可以在需要代理的命令前加 `proxychains`  来使用了, 例如:

```bash
proxychains wget http://example.com
```

---

## 命令行设置HTTP代理

:::tabs

@tab:active powershell

```powershell
$env:http_proxy = "http://your_proxy_address:port"
# 使用用户名和密码身份验证的代理服务器:
$env:http_proxy = "http://username:password@proxy.example.com:8080"
```

@tab Linux

```bash
export http_proxy="http://your_proxy_address:port"
# 使用用户名和密码身份验证的代理服务器:
export http_proxy="http://username:password@proxy.example.com:8080"
```

:::

































