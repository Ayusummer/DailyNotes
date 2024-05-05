# PDF 嵌入 JavaScript

> [实战|通过恶意 pdf 执行 xss 漏洞 - 网安客 (wanganke.com)](https://www.wanganke.com/web/article/show/2411)

PDF 文件本身支持 JavaScript, 因此攻击者可以创建文件, 在文件打开时执行脚本来下载额外的恶意载荷或者窃取信息

下载并安装 [迅捷PDF编辑器 - 多功能的PDF编辑软件 (xunjiepdf.com)](https://www.xunjiepdf.com/editor)

新建或打开一个 PDF 文档

打开 `视图->页面缩略图`

![image-20240506001705447](http://cdn.ayusummer233.top/DailyNotes/202405060017522.png)

在左侧缩略图选中一个页面打开属性

![image-20240506001933010](http://cdn.ayusummer233.top/DailyNotes/202405060019088.png)

在右侧页面属性栏中找到动作, 为 `打开页面` 或 `关闭页面` 添加一个动作, `新增->运行JavaScript`

![image-20240506002037634](http://cdn.ayusummer233.top/DailyNotes/202405060020732.png)

在弹出的窗口中编辑恶意 JavaScript 即可:

![image-20240506002217510](http://cdn.ayusummer233.top/DailyNotes/202405060022588.png)

---

## 弹窗

例如弹个窗:

```JavaScript
app.alert('XSS');
```

> Adobe 支持自身的 JavaScript 对象模型，例如 alert(‘xss’)必须被 APP 对象调用，因此变成了 app.alert('xss')。这意味着，利用 JavaScript 进行攻击时只能使用 Adobe 所支持的功能。

保存文档后打开此PDF文档则会弹窗(例如使用 Edge 打开):

![image-20240506002816946](http://cdn.ayusummer233.top/DailyNotes/202405060028984.png)

---

> [JavaScript APIs — Acrobat-PDFL SDK: JavaScript Reference (adobe.com)](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#app)
>
> 现在 PDF JavaScript API 限制的比较严格, 似乎无法发起网络请求通信
>
> 除了 PDF 查看器漏洞利用外没有想到什么其他的利用方案

---

## 跳转 URL

```JavaScript
app.launchURL("http://www.example.com", true);
```

![image-20240506013348197](http://cdn.ayusummer233.top/DailyNotes/202405060133269.png)

> PS: 使用 Adobe Acrobat 会提示跳转 URL, 但是使用Edge,Chrome,Firefox打开不会提示也不会打开 URL
>
> 可能会被用于结合文档内容引导用户下载文件, 例如:
>
> [Rise in Deceptive PDF: The Gateway to Malicious Payloads | McAfee Blog](https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-in-deceptive-pdf-the-gateway-to-malicious-payloads/)
>
> [技术详解 | 黑客如何通过PDF文件分发恶意软件 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/network/394052.html)

---

