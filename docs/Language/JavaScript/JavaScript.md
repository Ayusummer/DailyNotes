# JavaScript

- [JavaScript](#javascript)
  - [类](#类)
  - [Axios](#axios)
    - [特性](#特性)
    - [应用场景](#应用场景)
    - [使用](#使用)
  - [Web API 接口](#web-api-接口)
    - [Window](#window)
      - [Window.localStorage](#windowlocalstorage)
        - [示例](#示例)
  - [动画/动效](#动画动效)
    - [sliderland](#sliderland)
  - [模拟键盘输入](#模拟键盘输入)
  - [IIFE(立即调用函数表达式)](#iife立即调用函数表达式)


---

- `toLocaleString()`
  - `toLocaleString()` 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
  - 以将数字变成千分位格式

> [Using Javascript Kernel in Vscode Jupyter Notebooks (tomche.space)](https://www.tomche.space/post/using-javascript-kernel-in-vscode-jupyter-notebooks/)
>
> [JavaScript toLocaleString() 方法 | 菜鸟教程 (runoob.com)](https://www.runoob.com/jsref/jsref-tolocalestring.html)

---

## 类

> [JavaScript 类 (w3school.com.cn)](https://www.w3school.com.cn/js/js_class_intro.asp)

```javascript
class Item {
    constructor(value, displayProperty) {
        this.value = value;
        this.displayProperty = displayProperty;
    }
}
```

实例化:

```js
let item2 = new Item(2, '兼职');
```

---


## Axios

> [Axios是什么？用在什么场景？如何使用？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/69157371)

Axios 是一个基于 promise 的 HTTP 库，简单的讲就是可以发送get、post请求。

前几年Jquery比较火的时候，大家都在用他。但是由于Vue、React等框架的出现，Jquery也不是那么吃香了。也正是Vue、React等框架的出现，促使了Axios轻量级库的出现，因为Vue等，不需要操作Dom，所以不需要引入Jquery.js了。

---

### 特性

1、可以在浏览器中发送 XMLHttpRequests
2、可以在 node.js 发送 http 请求
3、支持 Promise API
4、拦截请求和响应
5、转换请求数据和响应数据
6、能够取消请求
7、自动转换 JSON 数据
8、客户端支持保护安全免受 XSRF 攻击

---

### 应用场景

浏览器发送请求，或者Node.js发送请求都可以用到Axios。

像Vue、React、Node等项目就可以使用Axios

如果你的项目里面用了Jquery，此时就不需要多此一举了，jquery里面本身就可以发送请求。

---

### 使用

安装模块

```shell
npm install axios
```

或者直接引入:

```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

引入模块后可以直接使用

```js
// GET
axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

// POST
axios.post('/user', {
  name: 'Javan',
  website: 'www.javanx.cn'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

上面的参数是可选的

并发多个请求，可以这样写:

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求都执行完成才会执行
  }));
```



---

## Web API 接口

### Window

#### Window.localStorage

> [Window.localStorage - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

只读的`localStorage` 属性允许你访问一个[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 源(origin) 的对象 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)；存储的数据将保存在浏览器会话中。`localStorage` 类似 [`sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)，但其区别在于：存储在 `localStorage` 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 `sessionStorage` 的数据会被清除 。

应注意，无论数据存储在 `localStorage` 还是 `sessionStorage` ，**它们都特定于页面的协议。**

另外，`localStorage` 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

##### 示例

访问了当前域名下的本地 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象，并通过 [`Storage.setItem()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem) 增加一个数据项目:

```typescript
localStorage.setItem('myCat', 'Tom');
```

读取 `localStorage` 项:

```typescript
let cat = localStorage.getItem('myCat');
```

移除 `localStorage` 项:

```typescript
localStorage.removeItem('myCat');
```

移除所有的 `localStorage` 项:

```typescript
// 移除所有
localStorage.clear();
```

---


---

## 动画/动效

### sliderland

> [blinry/sliderland: A (very) minimalist creative coding playground. Make animations using only 64 HTML sliders! (github.com)](https://github.com/blinry/sliderland)
>
> [Sliderland (blinry.org)](https://sliderland.blinry.org/)

![image-20220523093011957](http://cdn.ayusummer233.top/img/202205230930199.png)

----

## 模拟键盘输入

>  [javascript 模拟按键事件 触发输入框oninput事件_谢泽的网络日志的博客-CSDN博客_js模拟输入数字到input](https://blog.csdn.net/a0405221/article/details/124374119)

对于被框架劫持setter事件可以使用如下方式录入数据

```js
function changeReactInputValue(inputDom,newText){
    let lastValue = inputDom.value;
    inputDom.value = newText;
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = inputDom._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    inputDom.dispatchEvent(event);
}

let userIdDom = document.getElementById('userName');		//普通JS获取输入框Dom
let passwdDom = document.getElementById('password');		//普通JS获取输入框Dom

changeReactInputValue(userIdDom,'username');			//改变React的输入框的值
changeReactInputValue(passwdDom,'passwd');			//改变React的输入框的值
```

---

## IIFE(立即调用函数表达式)

> [IIFE - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**IIFE**(立即调用函数表达式) 是一个在定义时就会立即执行的 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) [函数](https://developer.mozilla.org/zh-CN/docs/Glossary/Function)。

```JavaScript
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

> ![image-20230214145357266](http://cdn.ayusummer233.top/DailyNotes/202302141454393.png)

这是一个被称为 [自执行匿名函数](https://developer.mozilla.org/zh-CN/docs/Glossary/Self-Executing_Anonymous_Function) 的设计模式，主要包含两部分。第一部分是包围在 [`圆括号运算符`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping) `()` 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。

第二部分再一次使用 `()` 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。

---

