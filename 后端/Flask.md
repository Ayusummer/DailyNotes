# Flask

## Microsoft Learn - 使用 Python 和 Flask 生成  AI Web 应用

> [使用 Python 和 Flask 生成 AI Web 应用 | 简介 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/python-flask-build-ai-web-app/0-introduction)
>
> 以下内容为以上述链接中内容为蓝本的摘抄, 删减, 扩充与注释

---

### 目标

- 设置 Flask 开发环境
- 使用 Flask 生成表单
- 使用翻译器服务翻译文本

---

### 配置开发环境

- 安装 VSCode
- 安装 Python
- 创建并进入项目目录

---

### 创建 Python 虚拟环境

一个项目专用一个虚拟环境, 避免与其他地方出现依赖冲突问题

> [docker和virtualenv有什么区别？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/27937300)
>
> 开发用 venv 测试部署用 docker

```bash
# 创建虚拟环境
python -m venv venv
# 激活虚拟环境
.\venv\Scripts\activate
```

> 创建过程需要一些时间
>
> ![image-20211107114111351](http://cdn.ayusummer233.top/img/202111071141500.png)

---

### 安装 Flask 和其他库

在项目根目录下新建 `requirements.txt` 来描述本项目需要的 python 第三方库, 后续使用 pip 命令可以依据此文件安装项目依赖

```txt
flask
python-dotenv
requests
```

> `python-dotenv`: 用于管理密钥

```bash
# pip 命令依据 requirements.txt 安装依赖
pip install -r requirements.txt
```

---

### Flask 基础知识

 使用任何框架创建 Web 应用都需要了解几个核心概念: `路由`, `方法` 和 `模板化`

---

#### 使用路由响应用户请求

在使用 Web 应用时，用户通过浏览到不同的统一资源定位器（即 URL）来表明自己要执行的操作或正在查找的信息; 可以直接输入地址（比如 `https://adventure-works.com`），也可以选择链接或包含相应 URL 的按钮。 在电子商务网站上，你可能会看到如下 URL：

- 主页：`https://adventure-works.com/`
- 小组件详细信息：`https://adventure-works.com/products/widget`
- 完成购买：`https://adventure-works.com/cart/buy`

作为开发人员，我们实际上无需担心 URL 的第一部分或域（本例中的“`adventure-works.com`”）。 我们的应用程序将根据域名后面的任何内容来执行操作，从 / 开始。 **域名后面的部分称为“路由”**。

> 域名在开发时候不用管, 后面部署项目的时候才会涉及到挂载业务

路由是操作的路径。 与点击移动应用中的按钮类似，路由指示用户想要执行的操作。 我们将在 Web 应用中注册不同的路由，以响应应用程序支持的各种请求。

在我们的应用程序中，我们通过**提供一个函数来指示要如何响应特定路由请求**。 路由是到函数的映射。 当我们考虑编写一般代码时，此概念相对直观。 当我们想要执行特定操作时，就会调用函数。 我们的用户将执行完全相同的操作！ 不过他们将通过访问路由来完成此操作。

---

#### 方法或谓词

可以通过所谓的方法或谓词（这两个术语意思相同，可以互换使用）以多种方式访问路由。 访问路由的方式提供了关于用户请求状态和用户要执行的操作的更多上下文。

创建 Web 应用时，有许多可用方法，但最常见的两种方法（也是我们只关注的两种）是“GET”和“POST”。 

- `GET ` 通常表示用户正在请求信息，
- `POST` 表示用户需要向我们发送信息并接收响应。

> 不管使用什么谓词，信息始终都返回给用户。

使用 `GET` 和 `POST` 的常见应用程序流围绕使用表单展开。 假设我们创建了一款应用程序，其中用户想要注册邮件列表：

- 用户通过 GET 访问注册表单
- 用户完成表单，并选择“提交”按钮
- 表单中的信息通过 POST 发送回服务器
- 向用户返回“成功”消息

用户并没有直接指明自己要使用的谓词，谓词由应用程序控制。 一般来说，如果用户通过键入 URL 或选择链接直接导航到 URL，则使用 GET 访问该页面。 当该用户选择表单的按钮时，通常会通过 POST 发送信息。

---

#### 模板

超文本标记语言 (HTML) 是用于构造浏览器上显示的信息的语言，而级联样式表 (CSS) 则用于管理样式和布局。 在创建应用程序时，大多数 HTML 都是静态的，这意味着该语言不会改变。 然而，为使页面具有动态性，我们需要能够以编程方式将信息放入 HTML 页面。 几乎每个 Web 框架都可通过模板来满足这一需求。

借助模板，你可以编写核心 HTML（或模板）并指示动态信息的占位符。 占位符最常见的语法或许是 `{{ }}`。 Flask 的模板引擎 Jinja 会使用这种语法。

```HTML
<h1>Welcome, {{ name }}</h1>
```

在前面的例子中，我们用到了 `h1`（标头）的 HTML，其中包含我们要显示的文本。 `{{ name }}` 表示要在“欢迎使用”之后显示一个名为 `name` 的变量。 通过这种语法，我们可以使用现有技能编写 HTML，并根据需要注入动态信息。

---

### 创建应用

我们将以迭代方式创建应用程序，在创建过程中重点关注特定的概念。 首先，我们将为应用程序创建登陆页面，该页面将显示用户要使用的表单。

通常，Flask 应用程序的入口点是名为“`app.py`”的文件。 我们将遵循这一约定并创建应用程序的核心。 我们将执行以下步骤：

- 创建核心应用程序
- 为应用程序添加路由
- 为网站创建 HTML 模板
- 测试应用程序

---

#### 创建核心应用程序

在项目根目录下创建 `app.py` 并编辑

```python
from flask import Flask, redirect, url_for, request, render_template, session

app = Flask(__name__)
```

>  当我们想返回 HTML 时，我们将在一段时间内使用 `render_template`。

`app` 将是我们的核心应用程序。 在下一步中，我们将使用它来注册路由。

---

#### 添加路由

应用程序将使用一个路由 - /。 此路由有时称为“默认”或“索引”路由，因为在用户不提供域或服务器名称之外的任何内容时，就会使用该路由。

在 `app.py` 末尾添加如下代码:

```python
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')
```

通过 `@app.route`，我们可以指定要创建的路由。 路径将是 /，这是默认路由。 我们指出这将用于 GET。 如果 / 收到 GET 请求，Flask 将自动调用修饰器下面直接声明的函数，我们的示例中为 `index`。 在 `index` 的正文中，我们表示将向用户返回一个名为“index.html”的 HTML 模板。

---

#### 为表单创建 HTML 模板

Flask 的模板引擎 Jinja 非常关注 HTML。 因此，我们可以使用所有现有的 HTML 技能和工具。 我们将使用[Bootstrap](https://getbootstrap.com/)来布置页面，使其更美观。 通过 Bootstrap ，我们将在 HTML 上使用不同的 CSS 类。 如果不熟悉 Bootstrap，则可以忽略这些类而专注于 HTML（这是真正重要的部分）。

> [bootstrap和vue哪个好？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/412680346)
>
> [vue与bootstrap有什么区别？ | w3c笔记 (w3cschool.cn)](https://www.w3cschool.cn/article/7600862.html#:~:text=vue与bootstrap有什么区别？ 在很多人眼里 bootstrap 和 vue,都是前端框架，其实他们还是有很多区别的，bootstrap 是前端页面框架，用于快速开发响应式页面，而 vue 是前端 js 库，把前端开发组件化。)
>
> Bootstrap 上手快, 专为响应式页面而生, 所以此次初识 Flask 用其来布置页面

- 在项目根目录下创建 `templates` 文件夹

- 新建 `/templates/index.html` 并填入如下内容

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <title>Translator</title>
  </head>
  <body>
      <div class="container">
          <h1>翻译服务</h1>
          <div>在如下窗格内键入待翻译语句, 选择语言后点击 翻译 按钮!</div>
          <div>
              <form method="POST">
                  <div class="form-group">
                      <textarea name="text" cols="20" rows="10" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                      <label for="language">语言:</label>
                      <select name="language" class="form-control">
                          <option value="en">英语</option>
                          <option value="it">意大利语</option>
                          <option value="ja">日语</option>
                          <option value="ru">俄语</option>
                          <option value="de">德语</option>
                      </select>
                  </div>
                  <div>
                      <button type="submit" class="btn btn-success">翻译!</button>
                  </div>
              </form>
          </div>
      </div>
  </body>
  </html>
  ```

  > ![image-20211107112839255](http://cdn.ayusummer233.top/img/202111071128498.png)

以上 HTML 中的核心组成部分是用户希望翻译的文本的 `textarea`，以及用户将用来指示目标语言的下拉列表 (`select`)。 如果要添加更多语言，则可以参考[受支持语言列表](https://docs.microsoft.com/zh-cn/azure/cognitive-services/Translator/language-support?WT.mc_id=python-11210-chrhar)，获取其他选项。 将 `value` 属性设置为语言代码，例如，“pl”表示波兰语。

---

#### 测试应用程序

创建初始站点后，就该对其进行测试了！ 我们将使用 Visual Studio Code 中的集成终端，让这一过程更轻松一些。

在终端中运行以下命令将 Flask 运行时设置为开发，这意味着服务器将在每次更改时自动重载:

```bash
# Windows
set FLASK_ENV=development

# Linux/macOS
export FLASK_ENV=development
```

运行应用程序:

```bash
flask run
```

> `Unicode Decode Error`: 获取本机名称遇到中文导致乱码报错
>
> 解决方案: 将本机名称改为英文: `设置 -> 系统 -> 关于 -> 重命名这台电脑`
>
> [解决Python flask运行报错：UnicodeDecodeError: 'utf-8' codec can't decode byte 0xd2 in position 0: invalid continuation byte - 戈小戈 - 博客园 (cnblogs.com)](https://www.cnblogs.com/wsgxg/p/15001711.html)
>
> ![image-20211107120655193](http://cdn.ayusummer233.top/img/202111071207376.png)

> 后面要用到 Azure 的一些服务, 手里没 visa 就不搞了(

---

