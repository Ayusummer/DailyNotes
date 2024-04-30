
# ElementPlus

- [ElementPlus](#elementplus)
  - [backtop 踩坑记录](#backtop-踩坑记录)
  - [表单](#表单)
  - [表单校验](#表单校验)

---

> [Button 按钮 | Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/component/button.html)

- `安装`

  ```shell
  pnpm install element-plus
  pnpm i @types/lodash-es@"*"
  ```

- `main.ts` 引入

  ```typescript
  import ElementPlus from "element-plus";
  import "element-plus/dist/index.css";
  ```

使用的时候直接在官网 cpoy 代码使用即可(可能有的组件会要求再装一些库)

---

## backtop 踩坑记录

> [Element-ui Backtop 组件使用正确姿势 - 简书 (jianshu.com)](https://www.jianshu.com/p/b40d98535c10)
>
> [Backtop 回到顶部 | Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/component/backtop.html#自定义内容)
>
> [组件-backtop | Element](https://element.eleme.cn/#/zh-CN/component/backtop)

`ElementPlus` 的 `backtop` 文档和 `ELementUI` 的`backtop` 文档有区别

![image-20220406211225315](http://cdn.ayusummer233.top/img/202204062112607.png)

而恰恰是 `ElementPlus` 缺的这个 `target` 在实际使用中容易踩坑

当外层滚动对象是 `el-scrollbar` 时, `target` 除了外层的 `el-scrollbar__wrap` 外还有个 `page-component__scroll`

![image-20220406211602331](http://cdn.ayusummer233.top/img/202204062116631.png)

![msedge_ppd2EOEtd3](http://cdn.ayusummer233.top/img/202204062115589.gif)

```html
<el-backtop
  target=".page-component__scroll, .el-scrollbar__wrap"
  :right="40"
  :bottom="40"
  :visibility-height="40"
  >UP</el-backtop
>
```

如果滚动对象是 `div` 的话可以将 `target` 定位到 `div` 的 `class`

![image-20220406211804219](http://cdn.ayusummer233.top/img/202204062118528.png)

```html
<el-backtop target=".box" :right="40" :bottom="40" :visibility-height="1"
  >UP</el-backtop
>
```

![msedge_b09VxKHBwD](http://cdn.ayusummer233.top/img/202204062119433.gif)

---

## 表单

## 表单校验

先装下 `async-validator`:

```shell
pnpm i async-validator
```

---
