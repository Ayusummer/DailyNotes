# 信息收集

## 信息订阅

> [我是如何走进黑客世界的？ - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/neopoints/190895.html)

- 黑客工具

  - [KitPloit - PenTest & Hacking Tools](https://www.kitploit.com/)

    [KitPloit-RSS](https://feeds.feedburner.com/PentestTools)

## Findsomething

> [陌陌安全应急响应中心 (immomo.com)](https://security.immomo.com/blog/145)

搜集当前标签页的源码和js链接，对js链接再次加载，获取js代码，然后从html和js中使用正则匹配我们需要的信息。将匹配到的信息筛选、去重并展示到插件的页面中。

[FindSomething - Chrome 应用商店 (google.com)](https://chrome.google.com/webstore/detail/findsomething/kfhniponecokdefffkpagipffdefeldb)

![image-20230727224129911](http://cdn.ayusummer233.top/DailyNotes/202307272241749.png)

---

## 子域名查询

> [Subdomain Center | ARPSyndicate](https://www.subdomain.center/)

```http
http://api.subdomain.center/?domain=x.com
```

将上述 URL 中的 Query 参数 domain 修改为需要查询的域名并请求即可

![image-20231009144647105](http://cdn.ayusummer233.top/DailyNotes/202310091446212.png)

---

## IP 地址查询

> [The trusted source for IP address data, leading IP data provider - IPinfo.io](https://ipinfo.io/)
>
> [ipapi.is --- ipapi.is](https://ipapi.is/)

```powershell
curl "ipinfo.io/103.142.141.76?token=ea371af279e38a"
```

![image-20231009173614611](http://cdn.ayusummer233.top/DailyNotes/202310091736872.png)

```bash
curl 'https://api.ipapi.is?q=32.5.140.2&key=xxx'
```

![image-20231009174039094](http://cdn.ayusummer233.top/DailyNotes/202310091740160.png)

