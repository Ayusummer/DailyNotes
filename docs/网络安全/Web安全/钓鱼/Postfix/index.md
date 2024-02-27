# Postfix

> [Postfix 主页 --- The Postfix Home Page](https://www.postfix.org/)

Postfix 是一款开源的, 高性能, 稳定且可靠的邮件服务器, 广泛用于搭建邮件系统

---

## 部署

> [搭建邮件服务器之使用Postfix收发邮件 - 小枫同学 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xfstu/p/17468312.html)

:::tabs

@tab:active ubuntu

```bash
apt update
apt install postfix  
```

![image-20240227161653598](http://cdn.ayusummer233.top/DailyNotes/202402271616144.png)

- `No configuration`: 保持默认配置
- `Internet site`: 这是默认的配置类型, 适用于大多数情况;
  邮件服务器直接连接到互联网, 并能够直接发送和接收邮件
  用户输入域名时，Postfix会自动根据机器的主机名和域名生成合适的配置
- `Satellite System`: 将此邮件服务器作为一个 "卫星" 系统, 依赖于另一个邮件服务器来处理所有入站和出站的邮件
- `Local Only`: 仅在本地(局域网)发送邮件, 不与外部网络直接交互; 邮件仅在本地用户之间传递, 不涉及互联网邮件传输

根据需求自行选择配置, 这里以  `Internet Site` 为例

![image-20240227170322096](http://cdn.ayusummer233.top/DailyNotes/202402271703555.png)

选择完成后回车进入下一个页面, 输入域名

![image-20240227170621512](http://cdn.ayusummer233.top/DailyNotes/202402271706858.png)

这里如果你想让对方邮箱显示 `admin@example.org` 的话就填 `example.org`

回车后会自动继续安装

![image-20240227170833859](http://cdn.ayusummer233.top/DailyNotes/202402271708251.png)

:::

---

## 制作 SSL 证书

可以购买第三方的证书也可以自行用 OpenSSL 制作, 区别就在于自己做的证书, 客户端连接服务器时会弹出是否信任的询问窗口

关于如何制作自签名 SSL 证书可以参考 [使用 openssl 生成自签名证书)](https://ayusummer.github.io/DailyNotes/网络安全/加密算法/#使用-openssl-生成自签名证书)

