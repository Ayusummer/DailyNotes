
# Less

- [Less](#less)
  - [使用](#使用)
  - [实例](#实例)

----

> [学习 Vue3 第十三章(实操组件和认识 less 和 scoped) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/122832888)
>
> [Less 快速入门 | Less.js 中文文档 - Less 中文网 (bootcss.com)](https://less.bootcss.com/#概览)
>
> [十分钟看懂 Css、less 和 Sass(SCSS) 的区别 - IT 界新人 - 博客园 (cnblogs.com)](https://www.cnblogs.com/a1231230/p/12107592.html)

**Less (Leaner Style Sheets 的缩写)  是一门向后兼容的 CSS 扩展语言。**

`Less` 和 `CSS` 非常像, 且仅对 `CSS` 增加了少许方便的扩展, 比较容易学习

- _有关 Less 语言特性的详细文档，请参阅 [Less 语言特性](https://less.bootcss.com/features/) 章节_
- _有关 Less 内置函数的列表，请参阅 [Less 函数手册](https://less.bootcss.com/functions/) 章节_
- _有关详细的使用说明，请参阅 [Less.js 用法](https://less.bootcss.com/usage/) 章节_
- _有关第三方工具的详细信息，请参阅 [工具](https://less.bootcss.com/tools/) 章节_

在 `vue` 文件中使用 `less` 只需要在 `style` 标签中注明即可

```vue
<style lang="less"></style>
```

> 关于 `scoped`:
>
> `scoped` 用于实现组件的私有化, 当前 `style` 属性只属于当前模块
>
> 在 `DOM` 结构中可以发现, `vue` 通过在 `DOM` 结构以及 `css` 样式上加了唯一标记,达到样式私有化,不污染全局的作用,
>
> ![img](http://cdn.ayusummer233.top/img/202203191508403.png)

## 使用

在 `Node.js` 环境中使用 `Less`:

```shell
npm install -g less
```

```less
lessc styles.less styles.css
```

在浏览器环境中使用 `Less`:

```less
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

```less
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

---

## 实例

![image-20220319180238137](http://cdn.ayusummer233.top/img/202203191802477.png)

做一个如图所示的页面布局

在开发环境安装 `less`

```cmd
pnpm install less less-loader -D
```

> ![image-20220402134322239](http://cdn.ayusummer233.top/img/202204021343407.png)
>
> 可能会报缺少 webpack, 可以在开发环境下装下 webpack
>
> ```shell
> pnpm i webpack -D
> ```
>
> ![image-20220402134957842](http://cdn.ayusummer233.top/img/202204021349006.png)

- `src\assets\css\reset.less` 清除原生样式:

  ```less
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  ```

- `src\main.ts` 引入 `reset.less`:

  ```typescript
  import { createApp } from "vue";
  import App from "./App.vue";
  import "./assets/css/reset.less";

  createApp(App).mount("#app");
  ```

- `src\layout_less\less_layout.vue`:

  ```vue
  <script setup lang="ts">
  import lessMenu from "./Menu/lessMenu.vue";
  import lessHeader from "./Header/lessHeader.vue";
  import lessContent from "./Content/lessContent.vue";
  </script>

  <template>
    <div class="layout_less">
      <lessMenu />
      <div class="layout_less-right">
        <lessHeader />
        <lessContent />
      </div>
    </div>
  </template>

  <style lang="less" scoped>
  .layout_less {
    display: flex;
    height: 60%;
    overflow: hidden;
    border: 1px solid #ccc;
    &-right {
      display: flex;
      flex-direction: column; // 垂直方向
      flex: 1;
    }
  }
  </style>
  ```

- `src\layout_less\Menu\lessMenu.vue`:

  ```vue
  <script setup lang="ts"></script>

  <template>
    <div class="menu_less">菜单区域</div>
  </template>

  <style lang="less" scoped>
  .menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
  }
  </style>
  ```

- `src\layout_less\Header\lessHeader.vue`:

  ```vue
  <script setup lang="ts"></script>

  <template>
    <div class="header_layout">头部区域</div>
  </template>

  <style lang="less" scoped>
  .header_layout {
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
  </style>
  ```

- `src\layout_less\Content\lessContent.vue`:

  ```vue
  <script setup lang="ts"></script>

  <template>
    <div class="content_layout">
      <div class="content_layout-items" :key="item" v-for="item in 100">
        {{ item }}
      </div>
    </div>
  </template>

  <style lang="less" scoped>
  .content_layout {
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
    overflow: auto;
    &-items {
      padding: 20px;
      border: 1px solid #ccc;
    }
  }
  </style>
  ```

![image-20220319223448674](http://cdn.ayusummer233.top/img/202203192234054.png)

---
