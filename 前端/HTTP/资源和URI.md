# 资源和 URI

## 标识 Web 上的 resources

> [标识互联网上的内容 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)

`HTTP request(请求)` 的目标通常被称作 `resource(资源)` , 它可以是一份文档，一张图片，或所有其他你能够想到的格式。每个资源都由一个 ([URI(Uniform Resource Identifier 统一资源标识符)](https://developer.mozilla.org/zh-CN/docs/Glossary/URI)) 来进行标识。

一般情况下，资源的名称和位置由同一个  `URL（Uniform Resource Locator 统一资源定位符，它是 URI 的一种）`来 标识。

也有某些特殊情况，资源的名称和位置由不同的 URI 进行标识：

> 例如，待请求的资源希望客户端从另外一个位置访问它。我们可以使用一个特定的首部字段，[`Alt-Svc (Alternative Service - 备选服务)`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Svc)，来指示这种情况。

---

### URLs 与 URNs

#### URLs

URI 的最常见形式是统一资源定位符 ([URL](https://developer.mozilla.org/zh-CN/docs/Glossary/URL))，它也被称为 *Web 地址*。

```
https://github.com
https://github.com/Ayusummer/DailyNotes/blob/main/%E5%89%8D%E7%AB%AF/%E9%80%9A%E8%AF%86.md#form
https://developer.mozilla.org/en-US/search?q=URL
```

在浏览器的地址栏中输入上述任一地址，浏览器就会加载相应的网页（资源）。

URL 由多个必须或可选的组件构成。下面给出了一个复杂的 URL：

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

> `?` 后面跟着的就是 query 参数
>
> ![image-20220820173821403](http://cdn.ayusummer233.top/img/202208201738638.png)
>
> 比如这里的 `query` 参数就是这两个:
>
> ![image-20220820173904151](http://cdn.ayusummer233.top/img/202208201739240.png)

---

#### URNs

`URN(Uniform Resource Name)` 是另一种形式的 URI，它通过特定命名空间中的唯一名称来标识资源。

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

上面两个 URN 标识了下面的资源：

- 乔治·奥威尔所著的《1984》
- IETF 规范 7230，超文本传输  协议 (HTTP/1.1)：Message Syntax and Routing.

---

### 统一资源标识符 URI 的语法

#### Scheme(方案) 或 Protocol(协议)

![image-20220820174347411](http://cdn.ayusummer233.top/img/202208201743468.png)

`http://`告诉浏览器使用何种协议。对于大部分 Web 资源，通常使用 HTTP 协议或其安全版本，HTTPS 协议。另外，浏览器也知道如何处理其他协议。例如， `mailto:` 协议指示浏览器打开邮件客户端；`ftp:`协议指示浏览器处理文件传输。常见的方案有：

|    方案     |                             描述                             |
| :---------: | :----------------------------------------------------------: |
|    data     | [Data URIs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) |
|    file     |                     指定主机上文件的名称                     |
|     ftp     | [文件传输协议](https://developer.mozilla.org/en-US/docs/Glossary/FTP) |
| http/https  | [超文本传输  协议／安全的超文本传输协议](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) |
|   mailto    |                         电子邮件地址                         |
|     ssh     |                          安全 shell                          |
|     tel     |                             电话                             |
|     urn     |                         统一资源名称                         |
| view-source |                         资源的源代码                         |
|   ws/wss    | （加密的）[WebSocket (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 连接 |

---

#### Authority

> [标识互联网上的内容 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#主机)

![image-20220830193044413](http://cdn.ayusummer233.top/img/202208301934459.png)

`www.example.com` 既是一个域名，也代表管理该域名的机构。它指示了需要向网络上的哪一台主机发起请求。当然，也可以直接向主机的 [IP address](https://developer.mozilla.org/zh-CN/docs/Glossary/IP_Address) 地址发起请求。但直接使用 IP 地址的场景并不常见。

---

#### Port 端口

![image-20220830193154577](http://cdn.ayusummer233.top/img/202208301934051.png)

`:80` 是端口。它表示用于访问 Web 服务器上资源的技术“门”。如果访问的该 Web 服务器使用 HTTP 协议的标准端口（`HTTP 为 80，HTTPS 为 443`）授予对其资源的访问权限，则通常省略此部分。否则端口就是 URI 必须的部分。

---

#### Path 路径

![image-20220830193409485](http://cdn.ayusummer233.top/img/202208301934181.png)

`/path/to/myfile.html` 是 Web 服务器上资源的路径。在 Web 的早期，类似这样的路径表示 Web 服务器上的物理文件位置。现在，它主要是由没有任何物理实体的 Web 服务器抽象处理而成的。

---

#### Query 查询

![image-20220830194044801](http://cdn.ayusummer233.top/img/202208301940859.png)

`?key1=value1&key2=value2` 是提供给 Web 服务器的额外参数。这些参数是用 & 符号分隔的键/值对列表。Web 服务器可以在将资源返回给用户之前使用这些参数来执行额外的操作。

每个 Web 服务器都有自己的参数规则，想知道特定 Web 服务器如何处理参数的唯一可靠方法是询问该 Web 服务器所有者。

> 发请求和查看回显的工具:
>
> `VSCode-ThunderClient`:
>
> ![image-20220830194436670](http://cdn.ayusummer233.top/img/202208301944755.png)
>
> `Apipost`:
>
> ![image-20220830194718994](http://cdn.ayusummer233.top/img/202208301947115.png)
>
> `Postman`: 略

---

### Fragment 片段

![image-20220830194324599](http://cdn.ayusummer233.top/img/202208301943648.png)

`#SomewhereInTheDocument` 是资源本身的某一部分的一个锚点。锚点代表资源内的一种“书签”，它给予浏览器显示位于该“加书签”点的内容的指示。 

> 例如，在 HTML 文档上，浏览器将滚动到定义锚点的那个点上；在视频或音频文档上，浏览器将转到锚点代表的那个时间。
>
> 例如该部分内容的所在片段:`https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#%E7%89%87%E6%AE%B5`

值得注意的是 # 号后面的部分，也称为==片段标识符，永远不会与请求一起发送到服务器==。

---

### Tips

通常我们在使用 URL 时只会只用到一部分 URL scheme

当访问子资源(例如作为更大的文档的一部分来加载时), 应当只使用 HTTP 和 HTTPS scheme, 出于安全原因, 越来越多的浏览器正在取消对 FTP 的支持

目前尽管一些浏览器可能会将 FTP 内容加载委托给另一个应用程序, FTP 在顶层仍然可以被接受(例如直接键入浏览器的 URL 栏或者链接的目标)

---

#### examples 示例

```
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
```

---

#### Specifications 规范

[Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing# section-2.7](https://httpwg.org/specs/rfc7230.html#section-2.7)

---

#### See also

- [What is a URL?](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

---

## Data URLs

