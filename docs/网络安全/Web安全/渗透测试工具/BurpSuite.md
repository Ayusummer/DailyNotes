# BurpSuit

> [Burp Suite - Application Security Testing Software - PortSwigger](https://portswigger.net/burp)
>
> ---
>
> [引子 · burpsuite实战指南 (gitbooks.io)](https://t0data.gitbooks.io/burpsuite/content/)

---

## BurpSuit 安装与环境配置

> [第一章 Burp Suite 安装和环境配置 · burpsuite实战指南 (gitbooks.io)](https://t0data.gitbooks.io/burpsuite/content/chapter1.html)
>
> ---

BurpSuite是一个集成化的渗透测试工具，它集合了多种渗透测试组件，使我们自动化地或手工地能更好的完成对web应用的渗透测试和攻击。在渗透测试中，我们使用Burp Suite将使得测试工作变得更加容易和方便，即使在不需要娴熟的技巧的情况下，只有我们熟悉Burp Suite的使用，也使得渗透测试工作变得轻松和高效。

Burp Suite是由Java语言编写而成，而Java自身的跨平台性，使得软件的学习和使用更加方便。Burp Suite不像其他的自动化测试工具，它需要你手工的去配置一些参数，触发一些自动化流程，然后它才会开始工作。

BurpSuite可执行程序是java文件类型的jar文件，免费版的可以从[免费版下载地址](https://portswigger.net/burp/downloadfree.html)进行下载。免费版的Burp Suite会有许多限制，很多的高级工具无法使用，如果您想使用更多的高级功能，需要付费购买专业版。专业版与免费版的主要区别有

- Burp Scanner
- 工作空间的保存和恢复
- 拓展工具，如 `Target Analyzer`, `Content Discovery` 和 `Task Scheduler`

---

## Proxy

Proxy 模块可以通过与浏览器代理配置相同的本地端口来截取浏览器请求

在 `Proxy -> Options` 中编辑代理配置, 比如代理本地的 8080 端口:

![image-20221024193923997](http://cdn.ayusummer233.top/img/202210241939377.png)

在 Firefox 中也将代理配置为此项:

![image-20221024194017883](http://cdn.ayusummer233.top/img/202210241940381.png)

这样配置完后, 在 Firefox 中的请求会被 BurpSuit 截获, 可在 BurpSuit 中进行相关操作

---

### proxy 使用指南

> [第三章 如何使用Burp Suite代理 · burpsuite实战指南 (gitbooks.io)](https://t0data.gitbooks.io/burpsuite/content/chapter3.html)
>
> ---

Burp Proxy 是Burp Suite以用户驱动测试流程功能的核心，通过代理模式，可以让我们拦截、查看、修改所有在客户端和服务端之间传输的数据。

---

#### Burp Proxy基本使用

一般使用Burp Proxy时，大体涉及环节如下：

1. 首先，确认JRE已经安装好，Burp Suite可以启动并正常运行，且已经完成浏览器的代理服务器配置。

2. 点击 Proxy 中的 Intercept(拦截) 选项卡中的 `intercept is off` 按钮将其切换为 `intercept is on` 开始拦截数据

   ![image-20221025171418319](http://cdn.ayusummer233.top/img/202210251714612.png)

   ![image-20221025171436544](http://cdn.ayusummer233.top/img/202210251714854.png)

3. 在浏览器中访问数据, 比如访问 [baidu.com](www.baidu.com), 这时你将会看到数据流量经过Burp Proxy并暂停

   ![image-20221025171815530](http://cdn.ayusummer233.top/img/202210251718708.png)

   - 直到你点击 `Forward`，才会继续传输下去。
   - 如果你点击了 `Drop`，则这次通过的数据将会被丢失，不再继续处理。

   在当前的 `intercept` 界面有两个视图

   - Raw: 该视图主要显示web请求的raw格式，包含

     -  `请求地址`
     - `http 协议版本`
     - `主机头`
     - `浏览器信息`、
     - `Accept可接受的内容类型`、
     - `字符集`、
     - `编码方式`、
     - `cookie`等。

     你可以通过手工修改这些信息，对服务器端进行渗透测试。

     ![image-20221025174008076](http://cdn.ayusummer233.top/img/202210251740208.png)

   - Hex: 这个视图显示Raw的二进制内容，你可以通过hex编辑器对请求的内容进行修改。

     ![image-20221025174024927](http://cdn.ayusummer233.top/img/202210251740065.png)

4. `Forward` 之后可以在浏览器中或者是 `HTTP history` 中查看本次请求的响应内容

   ![image-20221025172506044](http://cdn.ayusummer233.top/img/202210251725355.png)

5. 默认情况下，Burp Proxy只拦截请求的消息，普通文件请求如 `css`、`js`、图片是不会被拦截的，你可以修改默认的拦截选项来拦截这些静态文件，当然，你也可以通过修改拦截的作用域、参数或者服务器端返回的关键字来控制Burp Proxy的消息拦截，

   所有流经Burp Proxy的消息，都会在 `http history`记录下来，我们可以通过历史选项卡，查看传输的数据内容，对交互的数据进行测试和验证。

   同时，对于拦截到的消息和历史消息，都可以通过右击弹出菜单，发送到Burp的其他组件，如Spider、Scanner、Repeater、Intruder、Sequencer、Decoder、Comparer、Extender，进行进一步的测试。

   ![image-20221025174240769](http://cdn.ayusummer233.top/img/202210251742940.png)

   或者点此按钮

   ![image-20221025174432728](http://cdn.ayusummer233.top/img/202210251744855.png)

---

#### 数据拦截与控制

Burp Proxy 的拦截功能主要由 Intercept 选项卡中的 Forward、Drop、Interception is on/off、Action、Comment 以及Highlight构成，

- `Forward` 的功能是当你查看过消息或者重新编辑过消息之后，点击此按钮，将发送消息至服务器端。

- `Drop` 的功能是你想丢失当前拦截的消息，不再 forward 到服务器端。 

- `Interception is on` 表示拦截功能打开，拦截所有通过Burp Proxy的请求数据；

- `nterception is off` 表示拦截功能关闭，不再拦截通过Burp Proxy的所有请求数据。

- `Action` 的功能是除了将当前请求的消息传递到 Spider、Scanner、Repeater、Intruder、Sequencer、Decoder、Comparer组件外，还可以做一些请求消息的修改，如

  - 改变GET或者POST请求方式
  - 改变请求body的编码
  - 同时也可以改变请求消息的拦截设置，如
    - 不再拦截此主机的消息
    - 不再拦截此IP地址的消息
    - 不再拦截此种文件类型的消息
    - 不再拦截此目录的消息
  - 也可以指定针对此消息拦截它的服务器端返回消息。

  ![image-20221025183539119](http://cdn.ayusummer233.top/img/202210251840867.png)

- `Comment` 可以对拦截的消息添加备注，在一次渗透测试中，你通常会遇到一连串的请求消息，为了便于区分，在某个关键的请求消息上，你可以添加备注信息。

  `Highlight` 的功能与Comment功能有点类似，即对当前拦截的消息设置高亮，以便于其他的请求消息相区分。

  ![image-20221025184704516](http://cdn.ayusummer233.top/img/202210251847636.png)

----

#### 可选项配置Options

![image-20221025184733129](http://cdn.ayusummer233.top/img/202210251847281.png)

从界面显示来看，主要包括以下几大板块

- 客户端请求消息拦截
- 服务器端返回消息拦截
- 服务器返回消息修改
- 正则表达式配置
- 其他配置项

----

#### 历史记录-History

Burp Proxy的历史记录由HTTP历史和 WebSockets 历史两个部分组成。

- WebSockets历史所提供的功能和选项是HTTP历史的一个子集，只是因为采用的通信方式的不同，而被独立出来成为一个专门的视图。其功能的使用方式与HTTP历史大致相同

HTTP历史界面由筛选过滤器、历史记录列表、消息详情3个部分组成。

![image-20221025192235608](http://cdn.ayusummer233.top/img/202210251922745.png)

当我们在某一条历史记录上单击，会在下方的消息详解块显示此条消息的文本详细信息。当我们在某条消息上双击，则会弹出此条消息的详细对话框。

---

## Intruder

> [第八章 如何使用Burp Intruder · burpsuite实战指南 (gitbooks.io)](https://t0data.gitbooks.io/burpsuite/content/chapter8.html)
>
> ---

Intruder 是 Burp Suite中一款功能极其强大的自动化测试工具，通常被使用在各种任务测试的场景中。

Intruder 模块通过对 http request 的数据包以变量的方式自定义参数, 然后根据对应策略进行自动化的重放, 常用于自动化猜测/暴力破解的过程中

- target 选项卡

  设置攻击目标, 可以通过 Proxy 发送

- Position 选项卡

  指定需要暴力破解的参数并设置成变量, 同时选择攻击模式

  - `Sniper`

    设置一个 payload, 先将第一个变量使用字典进行测试, 然后再将第二个变量使用字典进行测试

  - `Battering ram`

    设置一个 payload, 所有的变量一起用字典内容替换(为同一内容), 然后一起尝试

  - `Ptichfork`

    每个变量设置一个 payload, 分别使用对应的字典对变量进行同时替换

    > 也即两个字典同时跑, 不会做交叉组合, 而是二者按照序号一一对应跑

  - `Cluster bomb`

    需要为每个变量设置一个 payload, 分别使用字典内容组合对变量进行替换

    > 常用于暴力破解

- Payloads 选项卡

  设置字典, 并可以对字典进行统一的策略处理

- options选项卡

  对扫描的线程, 失败重试等进行配置

  对结果设置匹配的 flag: 通过一个标识符来区别结果, 并在结果栏中 flag 出来

---

### Intruder使用场景和操作步骤



---

### Payload类型与处理



---

### Payload 位置和攻击类型



---

### 可选项设置(Options) 



---

### Intruder 攻击和结果分析



---

## Repeater

Repeater 是 Burp Suite 中一款手工验证 HTTP 消息的测试工具，通常用于多次重放请求响应和手工修改请求消息的修改后对服务器端响应的消息分析。

---

### Repeater的使用



---

### 可选项设置(Options) 



---































