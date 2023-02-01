# CSS

- [CSS](#css)
  - [属性](#属性)
    - [`overflow`](#overflow)
    - [`padding`](#padding)
    - [margin](#margin)
  - [布局](#布局)
    - [`Flex`](#flex)
      - [flex 属性](#flex-属性)


---

## 属性

### `overflow`

> [CSS overflow 属性 (w3school.com.cn)](https://www.w3school.com.cn/cssref/pr_pos_overflow.asp)

![image-20220319182820529](http://cdn.ayusummer233.top/img/202203191828656.png)

`overflow` 属性规定当内容溢出元素框时发生的事情。

|   值    |                           描述                           |
| :-----: | :------------------------------------------------------: |
| visible |       默认值。内容不会被修剪，会呈现在元素框之外。       |
| hidden  |          内容会被修剪，并且其余内容是不可见的。          |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
|  auto   | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit |         规定应该从父元素继承 overflow 属性的值。         |

---

### `padding`

> [CSS padding 属性 (w3school.com.cn)](https://www.w3school.com.cn/cssref/pr_padding.asp)

设置 p 元素的 4 个内边距：

```css
p
  {
  padding:2cm 4cm 3cm 4cm;
  }
```

![image-20220319194651640](http://cdn.ayusummer233.top/img/202203191946789.png)

`padding` 简写属性在一个声明中设置所有内边距属性。

这个简写属性设置元素所有内边距的宽度，或者设置各边上内边距的宽度。行内非替换元素上设置的内边距不会影响行高计算；因此，如果一个元素既有内边距又有背景，从视觉上看可能会延伸到其他行，有可能还会与其他内容重叠。元素的背景会延伸穿过内边距。**不允许指定负边距值**。

- 例如:

  ```css
  padding:10px 5px 15px 20px;
  ```

  - 上内边距是 10px
  - 右内边距是 5px
  - 下内边距是 15px
  - 左内边距是 20px

|    值    |                             描述                             |
| :------: | :----------------------------------------------------------: |
|   auto   |                      浏览器计算内边距。                      |
| *length* | 规定以具体单位计的内边距值，比如像素、厘米等。默认值是 0px。 |
|   *%*    |            规定基于父元素的宽度的百分比的内边距。            |
| inherit  |                 规定应该从父元素继承内边距。                 |

---

### margin

> [CSS margin 属性 (w3school.com.cn)](https://www.w3school.com.cn/cssref/pr_margin.asp)

设置 p 元素的 4 个外边距：

```css
p
  {
  margin:2cm 4cm 3cm 4cm;
  }
```

`margin` 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。

这个简写属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。

块级元素的垂直相邻外边距会合并，而行内元素实际上不占上下外边距。行内元素的的左右外边距不会合并。同样地，浮动元素的外边距也不会合并。**允许指定负的外边距值，不过使用时要小心**。

|    值    |                             描述                             |
| :------: | :----------------------------------------------------------: |
|   auto   |                      浏览器计算外边距。                      |
| *length* | 规定以具体单位计的外边距值，比如像素、厘米等。默认值是 0px。 |
|   *%*    |              以包含元素宽度的百分比指定外边距。              |
| inherit  |                 规定应该从父元素继承外边距。                 |

---

## 布局

### `Flex`

> [Flex 布局语法教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/flex-grammar.html)
>
> [弹性布局（display:flex;）属性详解 - cdgogo - 博客园 (cnblogs.com)](https://www.cnblogs.com/hellocd/p/10443237.html)

2009 年，`W3C` 提出了一种新的方案 ---- `Flex` 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

`Flexbox` 是 `flexible box` 的简称, 是 `CSS3` 引入的新的布局模式。它决定了元素如何在页面上排列，使它们能在不同的屏幕尺寸和设备下可预测地展现出来。

`Flexbox` 能够扩展和收缩 `flex` 容器内的元素, 以最大限度地填充可用空间; 与早期布局方式相比, `Flexbox` 是一种更为强大的布局方式. 其可以:

- 在不同方向排列元素
- 重新排列元素的显示顺序
- 更改元素的对齐方式
- 动态地将元素装入容器

---

#### flex 属性

> [flex:1 到底代表什么? - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/136223806)

`flex` 属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 的简写，默认值为0 1 auto。后两个属性可选

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto (1 1 auto)` 和  `none (0 0 auto)`。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

---
