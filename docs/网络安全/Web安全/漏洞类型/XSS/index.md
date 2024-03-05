#  XSS 跨站脚本漏洞

## 概述

- XSS 漏洞一直被评估为 web 漏洞中危害较大的漏洞, 在 OWASP TOP10 排名中一致属于前三的地位

- XSS 是一种发生在 Web 前端的漏洞, 所以其危害的对象也主要是前端用户
- XSS 漏洞可以用来进行钓鱼攻击, 前端 js 挖矿, 用户 cookie 获取, 甚至于结合浏览器自身的漏洞对用户主机进行远程控制等

---

![image-20221026172635938](http://cdn.ayusummer233.top/img/202210261726202.png)

---

- 常见类型

  危害: 存储型 > 反射型 > DOM 型

  - `存储型`: 交互的数据会被存在数据库里面, 长久性存储, 一般出现在留言板, 注册等界面
  - `反射型`: 交互的数据一般不会被存在数据库里面, 一次性, 所见即所得, 一般出现在查询类页面等
  - `DOM 型`: 
    - 不与后台服务器产生数据交互, 是一种通过 DOM 操作前端代码输出的时候产生的问题, 一次性, 也属于反射型
    - 与一般的反射型的区别就在于不会与后端数据库进行交互

---

## 漏洞成因

![image-20221026173752716](http://cdn.ayusummer233.top/img/202210261737780.png)

形成 XSS 漏洞的主要原因是程序对输入和输出的控制不够严格, 导致 “精心构造” 的脚本输入后, 在输出到前端时被浏览器当做有效代码执行从而产生危害

---

## 漏洞测试流程

1. 在目标站点上找到输入点, 比如查询接口, 留言板等
2. 输入一组 “特殊字符 + 唯一识别字符”, 点击提交后, 查看返回的源码, 是否有做对应的处理
3. 通过搜索定位到唯一字符, 结合唯一字符前后语法确认是否可以构造执行 js 的条件(构造闭合)
4. 提交构造的脚本代码(以及各种绕过), 看看是否可以成功执行, 如果成功执行则说明存在 XSS 漏洞

> - 一般查询接口容易出现反射型  XSS, 留言板容易出现存储型 XSS
> - 由于后台可能存在过滤措施, 构造的 script 可能会被过滤掉而无法生效, 或者环境限制了执行(浏览器)
> - 通过变化不同的 script, 尝试绕过后台过滤机制

> 高版本 Chrome 安全级别比较高, 可能会把一些常规的 XSS 禁掉, 建议使用 FireFox 开发者版

----

## 分类

### 反射型 XSS

反射型 XSS 有 get 和 post 两种

GET 和 POST 的典型区别在于

- GET 是以 url 方式提交数据
- POST 是以表单方式在请求体中提交数据

GET 方式的 XSS 漏洞更加容易被利用, 一般利用的方式是将带有跨站脚本攻击的 URL 伪装后发给目标

而 POST 方式由于是以表单方式提交, 无法直接使用 URL 方式进行攻击

---

#### 反射型XSS(get)

利用此漏洞构造一个恶意url发给受害者, 由于 url 中的域名是正常或者知名域名, 因此受害者可能还会降低戒备, 如果受害者点击该 url 则会受到(反射)攻击

![image-20221027150306448](http://cdn.ayusummer233.top/img/202210271503635.png)

---

#### 反射型XSS(Post)

```html
<script>alert('xss')</script>
```

```http
http://192.168.1.215:9221/vul/xss/xss_reflected_get.php?message=<script>alert('xss')</script>&submit=submit

http://192.168.1.215:9221/vul/xss/xss_reflected_get.php?message=%3Cscript%3Ealert%28%27xss%27%29%3C%2Fscript%3E&submit=submit
```

![image-20221027155258803](http://cdn.ayusummer233.top/img/202210271552963.png)



---

### 存储型 XSS

存储型  XSS 和反射型形成的原因一样, 不同的是存储型 XSS 下攻击者可以将脚本注入到后台存储起来, 构成更加持久的危害, 因此存储型 XSS 也称 ‘永久型 XSS’

---



![image-20221027151014976](http://cdn.ayusummer233.top/img/202210271510154.png)





---

### DOM 型 XSS

> [JavaScript HTML DOM (w3school.com.cn)](https://www.w3school.com.cn/js/js_htmldom.asp)
>
> ---

HTML DOM(Document Object Model 文档对象模型)

当网页被加载时，浏览器会创建页面的文档对象模型(*D*ocument *O*bject *M*odel) 。

*HTML DOM* 模型被结构化为*对象树*：

![image-20221027155838530](http://cdn.ayusummer233.top/img/202210271558653.png)

**通过 HTML DOM，JavaScript 能够访问和改变 HTML 文档的所有元素。**

通过这个对象模型，JavaScript 获得创建动态 HTML 的所有力量：

- JavaScript 能改变页面中的所有 HTML 元素
- JavaScript 能改变页面中的所有 HTML 属性
- JavaScript 能改变页面中的所有 CSS 样式
- JavaScript 能删除已有的 HTML 元素和属性
- JavaScript 能添加新的 HTML 元素和属性
- JavaScript 能对页面中所有已有的 HTML 事件作出反应
- JavaScript 能在页面中创建新的 HTML 事件

可以把 DOM 理解为一个访问 HTML 的标准编程接口

>  DOM 操作是完全在前端完成的, 不会与后台进行交互

并不是所有的query都是调用后端接口和服务器交互数据
前端写法千奇百怪, 有可能前端会从 url 中获取参数来操作 dom, 例如这种:

```html
<div id="xssd_main">
    <script>
        function domxss(){
            <!-- 获取 url 中的参数 -->
            var str = window.location.search;
            <!-- 获取 url 中的 text 参数 -->
            var txss = decodeURIComponent(str.split("text=")[1]);
            var xss = txss.replace(/\+/g,' ');
            //  alert(xss);

            document.getElementById("dom").innerHTML = "<a href='"+xss+"'>就让往事都随风,都随风吧</a>";
        }
        //试试：'><img src="#" onmouseover="alert('xss')">
        //试试：' onclick="alert('xss')">,闭合掉就行
    </script>
    <!--<a href="" onclick=('xss')>-->
    <form method="get">
        <input id="text" name="text" type="text"  value="" />
        <input id="submit" type="submit" value="请说出你的伤心往事"/>
    </form>
    <div id="dom"></div>
</div>
```

> ![image-20221028100544063](http://cdn.ayusummer233.top/img/202210281005174.png)

---

## XSS 漏洞测试: cookie 获取和钓鱼攻击演示

![image-20221028095602906](http://cdn.ayusummer233.top/img/202210281005525.png)































