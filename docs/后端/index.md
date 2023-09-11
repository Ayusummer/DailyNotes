# 后端

## WSGI

> [Web服务器网关接口 - 维基百科，自由的百科全书 (wikipedia.org)](https://zh.wikipedia.org/wiki/Web服务器网关接口)

`WSGI(Web Server Gateway Interface)` 是 Python 中端口定义 Web 服务器和 Web 应用程序或框架之间的一种简单而通用的接口

WSGI 分为两个部分: 一为 "服务器" / "网关", 另一为 "应用程序" 或 "应用框架"; 在处理 WSGI 请求时, 服务器会为应用程序提供环境信息以及回调函数;当应用程序完成处理请求后, 会通过回调函数将结果回传给服务器

---

## ASGI

> [ASGI Documentation — ASGI 3.0 documentation --- ASGI 文档 — ASGI 3.0 文档](https://asgi.readthedocs.io/en/latest/)
>
> [Python - WSGI 和 ASGI 服务器 - 小菠萝测试笔记 - 博客园 (cnblogs.com)](https://www.cnblogs.com/poloyy/p/15291403.html)

ASGI(Asynchronous Server Gateway Interface) 是 WSGI 的 "精神继承者", 旨在为支持异步的 Python Web 服务器, 框架和应用程序之间提供标准接口

WSGI 为同步的 Python 应用程序提供了一套标准, 而 ASGI 为异步和同步应用都提供了一种标准, 并且兼容 WSGI 而且提供了多种服务器与应用框架以供开发者选择

---

