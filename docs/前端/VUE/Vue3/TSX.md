
# TSX

> [JSX · TypeScript 中文网 · TypeScript——JavaScript 的超集 (tslang.cn)](https://www.tslang.cn/docs/handbook/jsx.html)
>
> [学习 Vue3 第二十五章(TSX) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123172735)
>
> [(为什么 Vue3 的组件库都在使用 jsx/tsx？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/436260027)

[JSX](https://facebook.github.io/jsx/)是一种嵌入式的类似 XML 的语法。 它可以被转换成合法的 JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX 因[React](https://reactjs.org/)框架而流行，但也存在其它的实现。 TypeScript 支持内嵌，类型检查以及将 JSX 直接编译为 JavaScript。

在此之前使用的是 Template 去写模板。现在可以扩展另一种风格: `TSX风格`

vue2 的时候就已经支持 jsx 写法，只不过不是很友好，随着 vue3 对[typescript](https://so.csdn.net/so/search?q=typescript&spm=1001.2101.3001.7020)的支持度，tsx 写法越来越被接受

- 安装

  ```pnpm
  pnpm install @vitejs/plugin-vue-jsx -D
  ```

> `todo`: 感觉暂时没有上 JSX/TSX 的需求, 后面切实需要用到时再看看吧
>
> 至少目前大部分业务场景都可以直接 template 写

---
