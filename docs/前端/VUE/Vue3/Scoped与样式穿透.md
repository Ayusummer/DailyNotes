
# Scoped与样式穿透

> [学习 Vue3 第三十二章(详解 Scoped 和样式 穿透) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123319462)
>
> [SFC CSS Features | Vue.js (vuejs.org)](https://vuejs.org/api/sfc-css-features.html#scoped-css)

主要用于修改组件库的样式

`VUE` 中的 `scoped` 通过在 `DOM` 结构以及 `css` 样式上加唯一不重复的标记的方式，以保证唯一(而这个工作是由过 `PostCSS` 转译实现的) ，达到样式私有化模块化的目的。

`scoped` 三条渲染规则：

- 给 HTML 的 DOM 节点加一个不重复 data 属性来表示其唯一性

- 在每句 css 选择器的末尾(编译后的生成的 css 语句) 加一个当前组件的 data 属性选择器来私有化样式

- 如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的 data 属性

PostCSS 会给一个组件中的所有 dom 添加一个独一无二的动态属性 data-v-xxxx，然后，给 CSS 选择器额外添加一个对应的属性选择器来选择该组件中 dom，这种做法使得样式只作用于含有该属性的 dom——组件内部 dom, 从而达到了'样式模块化'的效果.

直接修改样式的话会因为 scoped 把元素选择器位置默认放在最后而无法成功修改样式, 可以通过 `:deep(xxx)` 的形式来修改具体样式

例如: 修改下 `el-input` 中的输入框背景色:

`ELementUIInputStyleChange.vue`

```vue
<!-- 创建时间: 2022/4/2-21-04-29 -->
<!-- 路径: src/components/ScopedDeepTest -->
<!-- IDE: WebStorm -->
<!-- 创建者: 233 -->
<template>
  <div style="margin:200px;">
    <el-input class="ipt"></el-input>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.ipt {
  // 样式穿透修改 input 样式
  :deep(input) {
    background-color: red;
  }
}
</style>
```

> ![image-20220402213512868](http://cdn.ayusummer233.top/img/202204022135656.png)

---
