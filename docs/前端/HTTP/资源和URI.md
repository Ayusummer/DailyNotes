# 资源和 URI

- [资源和 URI](#资源和-uri)
  - [标识 Web 上的 resources](#标识-web-上的-resources)
    - [URLs 与 URNs](#urls-与-urns)
      - [URLs](#urls)
      - [URNs](#urns)
    - [统一资源标识符 URI 的语法](#统一资源标识符-uri-的语法)
      - [Scheme(方案) 或 Protocol(协议)](#scheme方案-或-protocol协议)
      - [Authority](#authority)
      - [Port 端口](#port-端口)
      - [Path 路径](#path-路径)
      - [Query 查询](#query-查询)
    - [Fragment 片段](#fragment-片段)
    - [Tips](#tips)
      - [examples 示例](#examples-示例)
      - [Specifications 规范](#specifications-规范)
      - [See also](#see-also)
  - [Data URLs](#data-urls)
    - [语法](#语法)
    - [给数据做 base64 编码](#给数据做-base64-编码)
    - [常见问题](#常见问题)
    - [规范](#规范)
    - [浏览器兼容性](#浏览器兼容性)
  - [MIME 类型](#mime-类型)
    - [语法](#语法-1)
      - [Multipart 类型](#multipart-类型)
    - [重要的 MIME 类型](#重要的-mime-类型)
      - [application/octet-stream](#applicationoctet-stream)
      - [text/plain](#textplain)
      - [text/css](#textcss)
      - [text/html](#texthtml)
      - [text/javascript](#textjavascript)
      - [图片类型](#图片类型)
      - [音视频类型](#音视频类型)
      - [font/woff2](#fontwoff2)
      - [application/json](#applicationjson)


## 标识 Web 上的 resources

> [标识互联网上的内容 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)

`HTTP request(请求)` 的目标通常被称作 `resource(资源)` , 它可以是一份文档，一张图片，或所有其他你能够想到的格式。每个资源都由一个 ([URI(Uniform Resource Identifier 统一资源标识符)](https://developer.mozilla.org/zh-CN/docs/Glossary/URI)) 来进行标识。

一般情况下，资源的名称和位置由同一个  `URL(Uniform Resource Locator 统一资源定位符，它是 URI 的一种) `来 标识。

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

在浏览器的地址栏中输入上述任一地址，浏览器就会加载相应的网页(资源) 。

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

|    方案     |                                                描述                                                |
| :---------: | :------------------------------------------------------------------------------------------------: |
|    data     |      [Data URIs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)       |
|    file     |                                        指定主机上文件的名称                                        |
|     ftp     |               [文件传输协议](https://developer.mozilla.org/en-US/docs/Glossary/FTP)                |
| http/https  |  [超文本传输  协议／安全的超文本传输协议](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)  |
|   mailto    |                                            电子邮件地址                                            |
|     ssh     |                                             安全 shell                                             |
|     tel     |                                                电话                                                |
|     urn     |                                            统一资源名称                                            |
| view-source |                                            资源的源代码                                            |
|   ws/wss    | (加密的) [WebSocket (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 连接 |

---

#### Authority

> [标识互联网上的内容 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#主机)

![image-20220830193044413](http://cdn.ayusummer233.top/img/202208301934459.png)

`www.example.com` 既是一个域名，也代表管理该域名的机构。它指示了需要向网络上的哪一台主机发起请求。当然，也可以直接向主机的 [IP address](https://developer.mozilla.org/zh-CN/docs/Glossary/IP_Address) 地址发起请求。但直接使用 IP 地址的场景并不常见。

---

#### Port 端口

![image-20220830193154577](http://cdn.ayusummer233.top/img/202208301934051.png)

`:80` 是端口。它表示用于访问 Web 服务器上资源的技术“门”。如果访问的该 Web 服务器使用 HTTP 协议的标准端口(`HTTP 为 80，HTTPS 为 443`) 授予对其资源的访问权限，则通常省略此部分。否则端口就是 URI 必须的部分。

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

**Data URLs**，即前缀为 `data:` 协议的 URL，其允许内容创建者向文档中嵌入小文件。

---

### 语法

Data URLs 由四个部分组成：前缀 (`data:`)、指示数据类型的 MIME 类型、如果非文本则为可选的`base64`标记、数据本身：

```
data:[<mediatype>][;base64],<data>
```

`mediatype` 是个 [MIME](#MIME 类型) 类型的字符串，例如 `image/jpeg` 表示 JPEG 图像文件。如果被省略，则默认值为 `text/plain;charset=US-ASCII`

如果数据是文本类型，你可以直接将文本嵌入 (根据文档类型，使用合适的实体字符或转义字符)。

如果是二进制数据，你可以将数据进行 base64 编码之后再进行嵌入。

---

`示例`:

- 简单的 `text/plain` 类型数据

  ```
  data:,Hello%2C%20World!
  ```

  ![image-20220831204824673](http://cdn.ayusummer233.top/img/202208312131837.png)

- 上一条示例的 base64 编码版本

  ```
  data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D
  ```

  ![image-20220831205017015](http://cdn.ayusummer233.top/img/202208312131016.png)

  > [Python模块——base64 - 龙~白 - 博客园 (cnblogs.com)](https://www.cnblogs.com/longwhite/p/10397707.html)
  >
  > [Base64 在线编码解码 | Base64 加密解密 - Base64.us](https://base64.us/)

- 一个 HTML 文档源代码 `<h1>Hello, World</h1>`

  ````
  data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E
  ````

  ![image-20220831210533807](http://cdn.ayusummer233.top/img/202208312131707.png)

- 一个会执行 JavaScript alert 的 HTML 文档。注意 script 标签必须封闭。

  ```
  data:text/html,<script>alert('hi');</script>
  ```

  ![image-20220831210613201](http://cdn.ayusummer233.top/img/202208312131935.png)

---

### 给数据做 base64 编码

`base64` 是一组 `binary-to-text`(二进制转文本) `encoding scheme` (编码方案), 通过将二进制数据解释成 `radix-64` 的表现形式从而能够用 ASCII 字符串的形式表示出来; 由于仅由 ASCII 字符组成, base64 字符串通常是 `url-safe` 的, 这就是它可用于在 Data URL 中编码数据的原因

---

==在 JavaScript 中编码==

Web API 有原生的方法编码或解码 base64

> [Base64 - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Base64#encoded_size_increase)
>
> [Base64 的编码与解码 - 术语表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Glossary/Base64)

在 JavaScript 中, 有两个函数分别用来处理编码和解码 base64 字符串

- [`atob()`](https://developer.mozilla.org/zh-CN/docs/Web/API/atob)
- [`btoa()`](https://developer.mozilla.org/zh-CN/docs/Web/API/btoa)

---

==在 Unix 系统中编码==

在 Linux 和 macOS 系统中, 可以使用 `base64` 命令行来为文件或者字符串进行 base64 编码

```bash
echo -n hello | base64
```

> `echo -n`: 显示输出并清除换行
>
> ![image-20220831213639392](http://cdn.ayusummer233.top/img/202208312136550.png)

```bash
echo -n hello > a.txt
base64 a.txt
```

> ![image-20220831213729490](http://cdn.ayusummer233.top/img/202208312137544.png)

```bash
base64 a.txt > b.txt
```

> ![image-20220831213759617](http://cdn.ayusummer233.top/img/202208312137667.png)

---

==在 Windows 中编码==

使用 Powershell  的 `Convert.ToBase64String` 或者找一个 `GUN/Linux shell`(比如 WSL 或者 git bash) 用前面 Unix 的 `base64` 命令

---

### 常见问题

下文介绍一些在使用`data` URIs 时遇到的常见问题：

---

==语法==

`data` URLs 的格式很简单，但很容易会忘记把逗号加在 "data" 协议名后面，在对数据进行 base64 编码时也很容易发生错误。

```
data:[<mediatype>][;base64],<data>
```

---

==HTML 代码格式化==

一个 `data` URL 是一个文件中的文件，相对于文档来说这个文件可能就非常的长。因为 data URL 也是 URL，所以 data 会用空白符 (换行符，制表符，空格) 来对它进行格式化。但如果数据是经过 base64 编码的，就可能会[遇到一些问题](https://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12)。

---

==长度限制==

虽然 Firefox 支持无限长度的 `data` URLs，但是标准中并没有规定浏览器必须支持任意长度的 `data` URIs。比如，Opera 11 浏览器限制 URLs 最长为 65535 个字符，这意味着 data URLs 最长为 65529 个字符(如果你使用纯文本 data:, 而不是指定一个 MIME 类型的话，那么 65529 字符长度是编码后的长度，而不是源文件) 。

----

==缺乏错误处理==

MIME 类型错误或者 base64 编码错误，都会造成`data` URIs 无法被正常解析，但不会有任何相关错误提示。

---

==不支持查询字符串==

一个 data URI 的数据字段是没有结束标记的，所以尝试在一个 data URI 后面添加查询字符串会导致，查询字符串也一并被当作数据字段。例如：

```
data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val
```

> 这个 data URL 代表的 HTML 源文件内容为：
>
> ```bash
> lots of text...<p><a name="bottom">bottom</a>?arg=val
> ```
>
> ![image-20220831214537926](http://cdn.ayusummer233.top/img/202208312145985.png)

---

### 规范

> [Data URLs - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#规范)

---

### 浏览器兼容性

> [Data URLs - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#浏览器兼容性)

---

## MIME 类型

> [MIME 类型 - HTTP | MDN (mozilla.org)-2022-9-13](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types)

**媒体类型**(通常称为 **Multipurpose Internet Mail Extensions** 或 **MIME** 类型) 是一种标准，用来表示文档、文件或字节流的性质和格式。它在[IETF RFC 6838](https://tools.ietf.org/html/rfc6838)中进行了定义和标准化。

互联网号码分配机构([IANA](https://www.iana.org/)) 是负责跟踪所有官方 MIME 类型的官方机构，您可以在[媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)页面中找到最新的完整列表。

> **警告：** 浏览器通常使用 MIME 类型(而不是文件扩展名) 来确定如何处理 URL，因此 Web 服务器在响应头中添加正确的 MIME 类型非常重要。如果配置不正确，浏览器可能会曲解文件内容，网站将无法正常工作，并且下载的文件也会被错误处理。

---

### 语法

`通用结构`:

```
type/subtype
```

MIME 的组成结构非常简单；由类型与子类型两个字符串中间用`'/'`分隔而组成。不允许空格存在。*type* 表示可以被分多个子类的独立类别。*subtype 表示细分后的每个类型。*

MIME 类型对大小写不敏感，但是传统写法都是小写。

---

`独立类型`

```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/*
application/json
application/javascript
application/ecmascript
application/octet-stream
…
```

*独立*类型表明了对文件的分类，可以是如下之一：

|     类型      |                                  描述                                  |                                                                    典型示例                                                                     |
| :-----------: | :--------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|    `text`     |                  表明文件是普通文本，理论上是人类可读                  |                                             `text/plain`, `text/html`, `text/css, text/javascript`                                              |
|    `image`    | 表明是某种图像。不包括视频，但是动态图(比如动态 gif) 也使用 image 类型 |                  `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`, `image/x-icon`, `image/vnd.microsoft.icon`                  |
|    `audio`    |                           表明是某种音频文件                           |                                          `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav`                                           |
|    `video`    |                           表明是某种视频文件                           |                                                            `video/webm`, `video/ogg`                                                            |
| `application` |                          表明是某种二进制数据                          | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

对于 text 文件类型若没有特定的 subtype，就使用 `text/plain`。类似的，二进制文件没有特定或已知的 subtype，即使用 `application/octet-stream`。

---

#### Multipart 类型

```
multipart/form-data
multipart/byteranges
```

*Multipart* 类型表示细分领域的文件类型的种类，经常对应不同的 MIME 类型。这是*复合*文件的一种表现方式。`multipart/form-data` 可用于联系 [HTML Forms](https://developer.mozilla.org/zh-CN/docs/Learn/Forms) 和 [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 方法，此外 `multipart/byteranges`使用状态码[`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial Content`来发送整个文件的子集，而 HTTP 对不能处理的复合文件使用特殊的方式：将信息直接传送给浏览器(这时可能会建立一个“另存为”窗口，但是却不知道如何去显示内联文件。) 

---

### 重要的 MIME 类型

#### application/octet-stream

这是应用程序文件的默认值。意思是 *未知的应用程序文件 ，*浏览器一般不会自动执行或询问执行。浏览器会像对待 设置了 HTTP 头[`Content-Disposition`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition) 值为 `attachment` 的文件一样来对待这类文件。

---

#### text/plain

文本文件默认值。即使它*意味着未知的文本文件*，但浏览器认为是可以直接展示的。

> `text/plain`并不是意味着某种文本数据。如果浏览器想要一个文本文件的明确类型，浏览器并不会考虑他们是否匹配。比如说，如果通过一个表明是下载 CSS 文件的[<link>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)链接下载了一个 `text/plain` 文件。如果提供的信息是 text/plain，浏览器并不会认出这是有效的 CSS 文件。CSS 类型需要使用 text/css。

> ![image-20220913103709402](http://cdn.ayusummer233.top/img/202209131037479.png)
>
> ![image-20220913103732443](http://cdn.ayusummer233.top/img/202209131037538.png)

---

#### text/css

网页中要被解析为 CSS 的任何 CSS 文件必须指定 MIME 为`text/css`。通常，服务器不识别以.css 为后缀的文件的 MIME 类型，而是将其以 MIME 为`text/plain` 或 `application/octet-stream` 来发送给浏览器：在这种情况下，大多数浏览器不识别其为 CSS 文件，直接忽略掉。特别要注意为 CSS 文件提供正确的 MIME 类型。

---

#### text/html

所有的 HTML 内容都应该使用这种类型。XHTML 的其他 MIME 类型(如`application/xml+html`) 现在基本不再使用(HTML5 统一了这些格式) 。

> PS: 如果需要使用 XML 严格解析规则的话需要使用 `application/xml` 或者 `application/xhtml+xml`, 使用 `<![CDATA[...]]>` 或者其他的来自 `non-HTML`、`non-SVG`  或 `non-MathML` XML 名称空间的元素，因为 `text/HTML` 的解析语义与 `application/XML` 的语义微妙地不兼容。

---

#### text/javascript

根据 HTML 标准 , 对于 JavaScript 文件, 应当使用 `text/javascript` MIME 类型而非其他类型, 否则可能会导致无法载入或运行脚本
由于历史原因，[MIME 嗅探标准](https://mimesniff.spec.whatwg.org/)(定义浏览器应该如何解释媒体类型和如何处理无有效媒体类型的内容) 允许使用匹配以下任意的 MIME 类型服务 JavaScript：

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript` 非标准
- `application/x-javascript` 非标准
- `text/javascript`
- `text/ecmascript`
- `text/javascript1.0` 非标准
- `text/javascript1.1` 非标准
- `text/javascript1.2` 非标准
- `text/javascript1.3` 非标准
- `text/javascript1.4` 非标准
- `text/javascript1.5` 非标准
- `text/jscript` 非标准
- `text/livescript` 非标准
- `text/x-ecmascript` 非标准
- `text/x-javascript` 非标准

> PS:  即便任何给定的 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent) 可能支持这些中的任意或所有，你==只应该使用 `text/javascript`==。它是唯一确保能在==目前和以后正常工作的 MIME 类型==。

你可能发现某些内容在 `text/javascript` 媒体类型末尾有一个 `charset` 参数，指定用于表示代码内容的字符集。这不是合法的，而且在大多数场景下会导致脚本不被载入。

> ![image-20220913102530907](http://cdn.ayusummer233.top/img/202209131025002.png)
>
> ![image-20220913103536589](http://cdn.ayusummer233.top/img/202209131035701.png)

---

#### 图片类型

MIME 类型包含 `image` 的文件包含图像数据, 其子类型指定了具体的图片数据类型

在网页上常使用以下安全的图像类型

|    MIME 类型    |                                     图片类型                                     |
| :-------------: | :------------------------------------------------------------------------------: |
|   image/apng    | Animated Portable Network Graphics  (**动态便携式网络图像**)(PNG 格式的动画扩展) |
|   image/avif    |                              AV1 Image File Format                               |
|   `image/gif`   |       Graphics Interchange Format  (GIF 图片)(无损耗压缩方面被 PNG 所替代)       |
|  `image/jpeg`   |                Joint Photographic Expert Group image  (JPEG 图片)                |
|   `image/png`   |                      Portable Network Graphics  (PNG 图片)                       |
| `image/svg+xml` |                  Scalable Vector Graphics  (SVG 图片) (矢量图)                   |
|   image/webp    |                            Web Picture format (WEBP)                             |

> [不一样的动图-APNG - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1114186)
>
> [APNG 那些事 - HelloWorld开发者社区](https://www.helloworld.net/p/5650557531)
>
> APNG(Animated Portable Network Graphics) 顾名思义是基于 PNG 格式扩展的一种动画格式，增加了对动画图像的支持，同时加入了 24 位图像和 8 位 Alpha 透明度的支持，这意味着动画将拥有更好的质量，其诞生的目的是为了替代老旧的 GIF 格式，但它目前并没有获得 PNG 组织官方的认可。
>
> ---
>
> [关于下一代图片格式AVIF，你想要知道的都在这里了。 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/355256489)
>
> AVIF是一种基于AV1视频编码的新图像格式，相对于JPEG，WEBP这类图片格式来说，它的压缩率更高，并且画面细节更好。而最关键的是，它是免费且开源的，没有任何授权费用。
>
> ---
>
> [几种常见图片格式的区别 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/143649897)

> 这篇文档: [Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#common_image_file_types) 提供了何时使用何种图像格式的信息以及建议

---

`image/svg+xml`

> ![image-20220913102741732](http://cdn.ayusummer233.top/img/202209131027815.png)
>
> ![image-20220913102936868](http://cdn.ayusummer233.top/img/202209131029976.png)

---

`image/png`

> ![image-20220913103825724](http://cdn.ayusummer233.top/img/202209131038814.png)
>
> ![image-20220913103837963](http://cdn.ayusummer233.top/img/202209131038043.png)

---

#### 音视频类型



---

#### font/woff2

> ![image-20220913102710582](http://cdn.ayusummer233.top/img/202209131027657.png)


---

#### application/json

> ![image-20220913103625938](http://cdn.ayusummer233.top/img/202209131036023.png)
>
> ![image-20220913103634799](http://cdn.ayusummer233.top/img/202209131036887.png)

---

