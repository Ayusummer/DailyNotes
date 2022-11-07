# JavaScript

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

