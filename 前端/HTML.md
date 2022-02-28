# HTML

## `label`

> [`<label>` - HTML（超文本标记语言） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label)

将一个 `<label>` 和一个 `<input>` 元素相关联主要有这些优点：

- 标签文本不仅与其相应的文本输入元素在视觉上相关联，程序中也是如此。 这意味着，当用户聚焦到这个表单输入元素时，屏幕阅读器可以读出标签，让使用辅助技术的用户更容易理解应输入什么数据。
- 你可以点击关联的标签来聚焦或者激活这个输入元素，就像直接点击输入元素一样。这扩大了元素的可点击区域，让包括使用触屏设备在内的用户更容易激活这个元素。

> ![image-20211108215755125](http://cdn.ayusummer233.top/img/202111082157257.png)



---

## `form`

### `action`

> [form的action属性作用 - 脚本小娃子 - 博客园 (cnblogs.com)](https://www.cnblogs.com/shengulong/p/7418456.html)
>
> [HTML form action 属性 | 菜鸟教程 (runoob.com)](https://www.runoob.com/tags/att-form-action.html)

action 属性规定当提交表单时，向何处发送表单数据。

```html
<form action="URL">
```

> 在 HTML5 中，action 属性不再是必需的。

`action=""`　和 `action="#"` 以及没有action属性的作用相同，都是提交到当前页面(也就是 `document.location.href`)



