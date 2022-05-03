*Vue**

# 目录
- [目录](#目录)
- [简介](#简介)
  - [MVC](#mvc)
    - [MV*](#mv)
    - [Vue框架的特点](#vue框架的特点)
    - [常见的插件](#常见的插件)
    - [与 Vue2 对比](#与-vue2-对比)
      - [Options API 与 Composition API](#options-api-与-composition-api)
- [Microsoft Learn | 开始使用 Vue.js](#microsoft-learn--开始使用-vuejs)
    - [Vue 入门](#vue-入门)
      - [简介](#简介-1)
      - [Vue.js 入门](#vuejs-入门)
      - [通过使用 Vue.js 创建应用](#通过使用-vuejs-创建应用)
      - [属性绑定](#属性绑定)
    - [通过 Vue.js 动态显示界面](#通过-vuejs-动态显示界面)
      - [目标](#目标)
      - [Render lists](#render-lists)
      - [使用条件呈现(Use conditional rendering)](#使用条件呈现use-conditional-rendering)
    - [处理 Vue.js 中的数据和事件](#处理-vuejs-中的数据和事件)
      - [动态数据和事件概述](#动态数据和事件概述)
      - [使用窗体](#使用窗体)
      - [处理事件](#处理事件)
      - [了解计算属性](#了解计算属性)
    - [Vue.js 中的 Vue CLI 和单文件组件入门](#vuejs-中的-vue-cli-和单文件组件入门)
      - [Vue CLI 入门](#vue-cli-入门)
      - [使用 Vue CLI 创建应用程序](#使用-vue-cli-创建应用程序)
      - [Vue 组件入门](#vue-组件入门)
      - [创建组件](#创建组件)
      - [组件属性](#组件属性)
      - [向组件添加属性](#向组件添加属性)
      - [组件的自定义事件](#组件的自定义事件)
      - [向组件添加自定义事件](#向组件添加自定义事件)
- [安装](#安装)
  - [pnpm](#pnpm)
  - [命令行工具(CLI)](#命令行工具cli)
- [工具](#工具)
  - [TypeScript 支持](#typescript-支持)
  - [NPM 包中的官方声明](#npm-包中的官方声明)
  - [推荐配置](#推荐配置)
  - [VSCode 用户片段](#vscode-用户片段)
  - [VSCode 插件](#vscode-插件)
  - [开发工具](#开发工具)
    - [项目创建](#项目创建)
    - [DevTools](#devtools)
      - [DevTools 无法加载源映射](#devtools-无法加载源映射)
- [Vite](#vite)
  - [目录结构](#目录结构)
  - [路径别名配置](#路径别名配置)
  - [单页面应用与多页面应用](#单页面应用与多页面应用)
  - [开始](#开始)
    - [搭建一个 `Vite` 项目](#搭建一个-vite-项目)
  - [部署静态站点](#部署静态站点)
    - [构建应用](#构建应用)
    - [本地测试应用](#本地测试应用)
  - [环境变量与模式](#环境变量与模式)
    - [环境变量](#环境变量)
      - [生产环境替换](#生产环境替换)
    - [.env 文件](#env-文件)
      - [TypeScript 智能提示](#typescript-智能提示)
    - [模式](#模式)
  - [报错收集](#报错收集)
      - [`listen EACCES: permission denied 127.0.0.1:3000`](#listen-eacces-permission-denied-1270013000)
      - [`找不到模块“vue”或其相应的类型声明。ts(2307)`](#找不到模块vue或其相应的类型声明ts2307)
- [ESLint](#eslint)
  - [安装](#安装-1)
  - [配置文件](#配置文件)
    - [配置 ignore files](#配置-ignore-files)
- [Router](#router)
  - [安装](#安装-2)
  - [入门](#入门)
  - [路由模式](#路由模式)
    - [Hash 模式](#hash-模式)
    - [HTML5 模式](#html5-模式)
  - [命名路由](#命名路由)
  - [编程式导航](#编程式导航)
    - [导航到不同位置](#导航到不同位置)
  - [历史记录](#历史记录)
  - [路由传参](#路由传参)
    - [query 路由传参](#query-路由传参)
    - [使用 Params 传参](#使用-params-传参)
    - [动态路由](#动态路由)
  - [嵌套路由](#嵌套路由)
  - [命名视图](#命名视图)
  - [重定向和别名](#重定向和别名)
    - [重定向](#重定向)
    - [别名](#别名)
  - [导航守卫](#导航守卫)
    - [全局前置守卫](#全局前置守卫)
    - [全局后置钩子](#全局后置钩子)
  - [路由元信息](#路由元信息)
  - [过渡动效](#过渡动效)
  - [滚动行为](#滚动行为)
  - [动态路由](#动态路由-1)
- [Vuex](#vuex)
- [Pinia](#pinia)
  - [安装](#安装-3)
  - [使用](#使用)
  - [Pinia 状态修改](#pinia-状态修改)
  - [解构 store](#解构-store)
  - [Actions, getters](#actions-getters)
    - [`Actions` 同步写法](#actions-同步写法)
    - [Actions 异步写法](#actions-异步写法)
    - [getters](#getters)
  - [PInia 插件](#pinia-插件)
  - [API](#api)
    - [$reset](#reset)
    - [$subscribe](#subscribe)
    - [$onAction](#onaction)
- [Less](#less)
  - [使用](#使用-1)
  - [实例](#实例)
- [`Animate.css`](#animatecss)
  - [安装与使用](#安装与使用)
  - [结合 `vue3 transition` 使用](#结合-vue3-transition-使用)
- [GreenSock](#greensock)
- [Lodash](#lodash)
- [VueUse](#vueuse)
- [TSX](#tsx)
- [auto-import](#auto-import)
- [ElementPlus](#elementplus)
  - [backtop 踩坑记录](#backtop-踩坑记录)
  - [表单](#表单)
    - [表单校验](#表单校验)
- [Scoped 与样式穿透](#scoped-与样式穿透)
- [自定义全局插件](#自定义全局插件)
- [组件系统](#组件系统)
  - [生命周期](#生命周期)
  - [单文件组件SFC(Single File Component)](#单文件组件sfcsingle-file-component)
    - [基本语法](#基本语法)
  - [模板语法](#模板语法)
    - [`v-on`](#v-on)
    - [`.stop`](#stop)
    - [`v-model`](#v-model)
      - [计算器示例](#计算器示例)
    - [`v-bind`](#v-bind)
  - [父子组件传参](#父子组件传参)
    - [传递字符串](#传递字符串)
    - [传递任意类型参数](#传递任意类型参数)
    - [参数默认值](#参数默认值)
    - [子组件给父组件传参](#子组件给父组件传参)
    - [子组件暴露给父组件内部属性](#子组件暴露给父组件内部属性)
  - [兄弟组件传参](#兄弟组件传参)
    - [利用父组件中转实现兄弟组件传参](#利用父组件中转实现兄弟组件传参)
    - [通过发布订阅模式传参](#通过发布订阅模式传参)
  - [全局组件](#全局组件)
  - [局部组件](#局部组件)
  - [递归组件](#递归组件)
  - [动态组件](#动态组件)
  - [异步组件](#异步组件)
  - [通过插槽分发内容](#通过插槽分发内容)
    - [匿名插槽](#匿名插槽)
    - [具名插槽](#具名插槽)
    - [作用域插槽](#作用域插槽)
    - [动态插槽](#动态插槽)
- [可复用 & 组合](#可复用--组合)
  - [Teleport](#teleport)
- [API](#api-1)
  - [GlobalAPI](#globalapi)
    - [app.config.globalProperties](#appconfigglobalproperties)
  - [应用 API](#应用-api)
    - [directive](#directive)
    - [mixin](#mixin)
    - [自定义 Hook](#自定义-hook)
  - [指令](#指令)
    - [v-model](#v-model-1)
  - [特殊 attribute](#特殊-attribute)
    - [ref](#ref)
  - [内置组件](#内置组件)
    - [`transition`](#transition)
      - [结合 Animate.css 使用](#结合-animatecss-使用)
  - [!](#)
      - [生命周期 和 GSAP](#生命周期-和-gsap)
  - [>  !](#--)
      - [appear](#appear)
  - [!](#-1)
    - [`transition-group`](#transition-group)
      - [平面过渡动画](#平面过渡动画)
      - [状态过渡](#状态过渡)
    - [`keep-alive`](#keep-alive)
    - [`slot`](#slot)
  - [响应性 API](#响应性-api)
    - [响应性基础 API](#响应性基础-api)
      - [reactive](#reactive)
    - [Refs](#refs)
      - [ref](#ref-1)
    - [`Computed` 与 `watch`](#computed-与-watch)
      - [`computed`](#computed)
      - [watch](#watch)
      - [watchEffect](#watcheffect)
  - [组合式 API](#组合式-api)
  - [Provide/inject](#provideinject)

# 简介

> [介绍 — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/guide/)
>
> [学习Vue3 第一章_qq1195566313的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122768533)

`Vue` 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

![img](http://cdn.ayusummer233.top/img/202202281517242.png)

---

## MVC

`MVC` 是 `模型(Model)`、`视图(View)`、`控制器(Controller)` 的简写，是一种软件设计规范。

是将业务逻辑、数据、显示分离的方法来组织代码。

MVC 主要作用是降低了视图与业务逻辑间的双向偶合。

MVC 不是一种设计模式，MVC 是一种架构模式，不同的MVC存在差异。

- `Model（模型)`: 数据模型，提供要展示的数据，因此包含数据和行为，可以认为是领域模型或 JavaBean 组件（包含数据和行为)，不过现在一般都分离开来:Value Object（数据Dao）和服务层（行为Service)。也就是模型提供了模型数据查询和模型数据的状态更新等功能，包括数据和业务。

- `View（视图)`: 负责进行模型的展示，一般就是我们见到的用户界面，客户想看到的东西。

- `Controller（控制器）`: 接收用户请求，委托给模型进行处理（状态改变），处理完毕后把返回的模型数据返回给视图，由视图负责展示也就是说控制器做了个调度员的工作

  ![img](http://cdn.ayusummer233.top/img/202201241033369.png)

---

### MV*

> [01-Vue的介绍和vue-cli | 千古前端图文教程 (qianguyihao.com)](https://web.qianguyihao.com/12-Vue基础/01-Vue的介绍和vue-cli.html#介绍)

![img](http://cdn.ayusummer233.top/img/202201241034343.png)

- Model：负责数据存储
- View：负责页面展示
- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示

![img](http://cdn.ayusummer233.top/img/202201241033942.png)

Vue框架中，没有控制器。

Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。

Vue 以及大型 Vue 项目所需的周边技术，构成了生态。

渐进式框架图：

![img](http://cdn.ayusummer233.top/img/202201241112260.png)

### Vue框架的特点

> [01-Vue的介绍和vue-cli | 千古前端图文教程 (qianguyihao.com)](https://web.qianguyihao.com/12-Vue基础/01-Vue的介绍和vue-cli.html#vue框架的特点)

- 模板渲染：基于 html 的模板语法，学习成本低。
- 响应式的更新机制：数据改变之后，视图会自动刷新。【重要】
- 渐进式框架
- 组件化/模块化
- 轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到 60kb）。

### 常见的插件

- Webpack：代码模块化构建打包工具。
- Gulp：基于流的自动化构建工具。
- Babel：使用最新的 规范来编写 js。
- Vue：构建数据驱动的Web界面的渐进式框架
- Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

以上这些包，都可以通过 NPM 这个包管理工具来安装。

---

### 与 Vue2 对比

#### Options API 与 Composition API

> [Options API 和 Composition API 的对比 - 调皮小妮 - 博客园 (cnblogs.com)](https://www.cnblogs.com/loving0606/p/14128712.html)

- `Options API`

  `在vue2中`，我们会在一个vue文件中methods，computed，watch，data中等等定义属性和方法，共同处理页面逻辑，我们称这种方式为Options API

  `缺点`： 一个功能往往需要在不同的vue配置项中定义属性和方法，`比较分散`，项目小还好，清晰明了，但是`项目大了后，一个methods中可能包含很多个方法`，你往往分不清哪个方法对应着哪个功能

- `Composition API`

  在 `vue3 Composition API` 中，我们的代码是根据逻辑功能来组织的，`一个功能所定义的所有api会放在一起（更加的高内聚，低耦合）`，这样做，即时项目很大，功能很多，我们都能`快速的定位到这个功能所用到的所有API`，而不像vue2 Options API 中一个功能所用到的API都是分散的，需要改动功能，到处找API的过程是很费劲的



---

# Microsoft Learn | 开始使用 Vue.js

> [开始使用 Vue.js - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/paths/vue-first-steps/)
>
> **重要标记: 以下内容为以上述链接(MSLearn)为蓝本的删减, 修改, 扩充, 注释**

----

### Vue 入门

- 了解 Vue.js 的核心概念。
- 创建基于 web 的功能性应用程序。
- 在页面上显示数据。
- 将数据绑定到 HTML 属性。
- 浏览样式和类绑定。

---

#### 简介

Vue.js（也称为 Vue）由 Evan You 创建，并于 2014 年 2 月首次发布。 开发 Vue 时，他的目标是创建一个渐进式的、轻型版本的 JavaScript。

Vue 最初创建的目的是让开发人员能够通过添加一组将软件组件与数据连接的自定义 HTML 属性来创建用户界面。 为实现此目的，Vue.js 将 HTML 属性解释为指令，这些指令将页面的输入或输出部分绑定到模型。 该模型由标准 JavaScript 变量表示。

可以将 Vue 核心库添加到任何页面，并可以随时开始创建动态 HTML 标记，该标记使用强大的功能进行数据绑定和事件处理。 完成本训练模块后，你将能够使用 Vue.js 框架来创建功能性应用程序。

总而言之，Vue.js 是基于 JavaScript 的一个强大的轻型框架。 它易于使用，并且可用于创建响应式前端应用程序。 可以以增量方式应用 Vue.js，且不会破坏现有应用程序。 还可以使用 Vue CLI 和其他生成器工具来纵向扩展应用的复杂性，添加服务器端功能。

---

#### Vue.js 入门

若要开始使用 Vue.js，需要安装框架，创建 Vue 应用，然后在页面上注册它。 注册过程会告知页面如何使用应用

---

**将 Vue.js 添加到页面**:

将 Vue.js 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn)的形式导入。
2. 下载 JavaScript 文件并[自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)。

本次尝试使用的是方式 1: 在页面中添加 `script` 元素

```html
<script src="https://unpkg.com/vue@next"></script>
```

此元素告知浏览器运行 `src` 指令引用的脚本文件。 脚本运行后，Vue API 变为可用状态。

> [安装 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/installation.html#发布版本说明)

---

**创建应用**

所有 Vue.js 应用程序的开发均始于创建应用对象。 该应用是集中操作你的应用程序使用的所有数据和方法的位置。 尽管应用对象遵循一些约定，但其核心是 JavaScript 对象。

要创建 Vue 应用，需调用方法 `createApp()`。

```javascript
const App = Vue.createApp({
    // methods and content go here
});
```

---

**添加数据**
创建了应用后，可以添加属性以使应用具有更多功能。 大多数应用都具有的一个重要方法是 `data()`。 Vue.js 使用此方法访问你需要向应用程序提供的任何信息。

> 整个模块中都会用到 `data()` 方法。

`data()` 返回的对象内的任何属性都是动态的。 Vue.js 自动检测任何值更改。 然后，它将使用更新的信息来更新和刷新所显示内容的相应部分。

---

**创建数据对象**

Vue.js 调用 `data()` 方法。 相应的，Vue.js 需要接收一个 JavaScript 对象。

在下面的示例中，返回的对象包含属性 `firstName` 和 `lastName`。

```javascript
// a sample app object
const App = Vue.createApp({
    data() {
        return {
            firstName: 'Christopher',
            lastName: 'Harrison'
        };
    }
});
```

此时，会公开数据，以便向用户显示。

---

**装载应用**

必须先装载已创建的应用对象，然后 Vue.js 才能使用它。 通过装载应用，可以指示由应用控制的页面部分，使其能够显示信息甚至 HTML。

若要装载应用程序，需引用普通 HTML 元素的 `id`。

```html
<!-- the HTML element which will host our app -->
<div id='app'>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    const App = Vue.createApp({
        data() {
            return {
                firstName: 'Christopher',
                lastName: 'Harrison'
            };
        }
    });
    // Registering and mounting our app
    App.mount('#app');
</script>

```

在运行时，`id= 'app'` 元素的内容将替换为 Vue.js 应用程序的内容。

---

**显示数据**

若要在页面上显示数据，需使用 `{{ }}` 语法，它有时称为“句柄把”。 在 `{{ }}` 语法中，可以提供访问要显示的信息时所需的任何 JavaScript 代码。

前面创建的 `data()` 函数返回一个对象。 Vue.js 自动使对象可用，因此无需调用 `data()`。

如果要显示名字，可使用语法 `{{ firstName }}`。 下面的示例演示了完整的应用程序，它可以显示 `lastName` 和 `firstName`。

```html
<!-- the HTML element which will host our app -->
<div id='app'>
    {{ lastName }} {{ firstName }}
</div>
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://unpkg.com/vue@next"></script>
<script>
    const App = Vue.createApp({
        data() {
            return {
                firstName: '233',
                lastName: 'ayusummer'
            };
        }
    });
    // Registering and mounting our app
    App.mount('#app');
</script>
```

> ![image-20211107145425932](http://cdn.ayusummer233.top/img/202111071454050.png)

> `{{ }}` 语法仅在 Vue 控制的元素内有效。 该语法在组件或 Vue 装载的 HTML 元素内有效。

---

#### 通过使用 Vue.js 创建应用

- 在本单元中，你将使用 HTML 文件创建初学者 Vue 应用程序。 该文件链接到 Vue 核心库和包含应用程序详细信息的外部 JavaScript 文件。 你将定义一个 Vue 数据变量并在 HTML 页中动态显示它。

---

**克隆入门存储库**

应用程序的入门网站包含映像和基本样式。 首先，克隆存储库并在 Visual Studio Code 中打开它。

在终端或命令窗口中，运行以下命令。

```bash
# clone 远程库
git clone https://github.com/MicrosoftDocs/mslearn-vue-get-started/
# 切换到项目根目录
cd mslearn-vue-get-started/start
# 在当前目录打开VSCode
code .
```

----

**链接到 HTML 文件中的 Vue 核心库**

打开 `start/index.html`

从内容分发网络 (CDN) 安装 Vue.js: 通过链接到 Vue 核心库来安装 Vue.js。

![image-20211107153916744](http://cdn.ayusummer233.top/img/202111071539858.png)

> ```html
> <script src="https://unpkg.com/vue@next"></script>
> ```

---

**为 Vue 应用程序创建 JavaScript 文件**

如果需要，可以开始在 HTML 文件中编写 Vue 脚本。 **但通常可将代码放在单独的 JavaScript 文件中，从而更清晰地地管理应用程序。**

1. 创建 `start/index.js`
2. 将以下代码添加到 index.js 以创建应用。

```javascript
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            // additional properties later


        }
    },
});
```

有一个 `createApp()` 函数可供使用，因为你已将 Vue.js 库导入到 HTML 页的 `<head>` 标记中。 然后将此函数的参数作为具有 `data` 属性的对象传递。 这个对象返回另一个用于存储数据的对象。

---

**导入并装载应用程序**

打开 `start/index.html`

在 `TODO: Import Vue app` 注释下添加以下脚本。

```html
<script src="./index.js"></script>
<script>
    app.mount('#app');
</script>
```

> ![image-20211107155011147](http://cdn.ayusummer233.top/img/202111071550254.png)

---

**使用 Vue 应用程序**

创建并导入 Vue 应用程序后，即可创建信息的显示内容。

在 `start/index.html` 文件的 `TODO: Add information display` 注释下面添加以下 HTML。

```html
<div id="app">
    <h2>{{ productName }}</h2>
    <div>{{ productDescription }}</div>
</div>
```

> ![image-20211107155325602](http://cdn.ayusummer233.top/img/202111071553773.png)
>
> 页面顺序在 Vue.js 的处理中很重要。 在 HTML 页面完全加载之前，无法将应用程序附加到文档对象模型 (DOM)。 因此，在将所有其他 HTML 元素加载到浏览器中之后，需要在页面底部导入 Vue 应用程序。
>
> ![image-20211107155939506](http://cdn.ayusummer233.top/img/202111071559582.png)
>
>  通常，在调用用于更改 DOM 内容或结构的外部脚本文件之前，最好先加载 HTML 页面。

---

**使用 Live Server 打开页面**

安装完 `Live Server` 扩展后 `Ctrl + Shift + P` 呼出命令面板, 输入 `live server` 选择通过 Live Server 打开即可呼出默认浏览器

> 页面托管在 `localhost:5500` 上

> 到此处为止, 学会了将 Vue 代码放在单独的 JavaScript 文件中, 在 HTML 文件中导入 Vue 应用程序并使用 {{}} 获取数据

----

#### 属性绑定

你已经了解如何使用 handlebar (`{{}}`) 在页面上显示数据。 但是页面上的文本并不是唯一需要设为动态的部分。

可以通过使用属性来设置页面上的多个值。 幸运的是，使用 Vue.js 可通过指令绑定到属性。

---

**指令**

指令是供 `Vue.js` 识别的特性。 通过指令可动态设置 HTML 属性的值。 所有指令都以 `v-` 开头。

---

**v-bind**

核心指令是 `v-bind`。 通过它可将数据值绑定到属性。 可以使用该指令动态设置类的名称、图像的源或样式。

若要使用指令，请在要设置的属性前面加上 `v-bind` 和冒号 (`:`)。 因此，要设置图像的 `src` 属性，可以使用 `v-bind:src="value"`。 然后按照使用 `{{ }}` 语法时计算属性值的相同方式计算该值。

下面的代码生成 HTML 元素 `<img src="./media/sample.jpg">`。

```html
<div id="app">
    <img v-bind:src="imageSource" />
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                imageSource: './media/sample.jpg'
            }
        }
    }).mount('#app');
</script>
```

> ![image-20211107161718938](http://cdn.ayusummer233.top/img/202111071617155.png)

`imageSource` 属性可用于模板，因为它是从 `data()` 方法返回的。 然后将其绑定到图像元素的 `src` 属性。

> 不必维护为应用所用对象的引用。 但是可以立即调用 `createApp`，然后再调用 `mount`，这和之前一样。

---

**绑定简写**

现在，你已经了解如何在 Vue 应用中使用 `v-bind` 指令将数据绑定到属性。 你还可以在简写中键入此指令。 例如，可以键入 `:attribute`，而不是键入 `v-bind:attribute`。 这种简写形式为你节省了一些字符。

![image-20211107162649128](http://cdn.ayusummer233.top/img/202111071626322.png)

---

**类和样式**

一般为 HTML 元素设置的最常见属性之一是 `class` 或 `style`。 若要绑定到这些属性，可以使用 `v-bind:class` 和 `v-bind:style`。 或使用简写 `:class` 和 `:style`。

**类对象**

假设有一个具有两个类的应用程序：`centered` 和 `active`。 下面介绍了如何在 HTML 中使用这些类。

```HTML
<div class='centered active'>Hello, Vue!</div>
```

但此示例是静态的。 如果希望能够更改数据，可以使用绑定。 通过 Vue 不仅可以绑定字符串，还可以绑定对象。

下面介绍了如何为不同属性切换静态值 `centered active`：

```HTML
<div id="app">
    <div :class="classObject">Hello, Vue!</div>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                classObject: {
                    centered: true,
                    active: true
                }
            }
        }
    }).mount('#app');
</script>
```

> ![image-20211107173314403](http://cdn.ayusummer233.top/img/202111071733625.png)

数据属性 `classObject` 有两个值为布尔值的属性。 使用布尔值可以启用或禁用特定的类。 将 `centered` 设置为 `false` 将呈现 `<div class="active">`，因为 `active` 将是唯一仍然为 `true` 的属性。

> JavaScript 命名规则适用于类对象。 因此，如果类名含有破折号，例如 `center-text`，则在添加属性时，需将名称用引号括住 (`'center-text': true`)。

---

**样式对象**

在 CSS 中设置样式涉及创建键/值对的集合。 使用 JavaScript 对象来表示样式要相对自然一些。 在 Vue.js 中，可以创建样式对象来设置样式。

例如，要设置 HTML 元素样式的背景色 (`background-color`)，可以使用以下代码。

```HTML
<div id="app">
    <div :style="styleObject">Hello, Vue!</div>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                styleObject: {
                    'background-color': 'red'
                }
            }
        }
    }).mount('#app');
</script>
```

> ![image-20211107174109403](http://cdn.ayusummer233.top/img/202111071741592.png)

---

### 通过 Vue.js 动态显示界面

创建基于数据的页面时，可能需要根据特定值更改显示内容，或在数组中显示多个项。

通过使用 Vue.js，可以通过各种指令来完成这些操作。 这样做可以使用 HTML 控制输出，这对许多 Web 开发人员来说是很自然的。

---

#### 目标

- 在数组中呈现所有项。
- 基于变量值显示或隐藏 HTML 元素。
- 在 Vue.js 中使用 if-else/if-else 语句。

---

#### Render lists

使用数据通常需要数组或其他类型的集合。 通常可使用某种形式的循环来遍历集合中的所有项。 Vue.js 支持通过名为 `v-for` 的指令进行循环。

---

**v-for 指令简介**

若要显示列表中的所有项，可以使用指令 `v-for`。 `v-for` 的行为与 JavaScript 中的 `for...of` 循环非常类似。 它循环访问某个集合，通过声明的变量提供对每个项的访问。

`v-for` 的语法如下所示：

```HTML
v-for="itemName in collectionName"
```

`collectionName` 是数据对象中数组的名称。 对于每次迭代，`itemName` 都假定当前项的标识。 若要在模板中使用 `v-for`，请将指令添加到元素声明中。 这样做将重复 HTML 元素，数组中有多少项就重复多少次。

> 如果要创建无序列表 (`ul`)，就不能将 `v-for` 添加到 `ul` 元素中。 可将其添加到 `li` 元素中，因为 `li` 元素将被重复。

---

**在应用中使用 v-for**

若要在应用中使用 `v-for` 指令，需要执行两项操作：

- 通过数据对象公开数组。 若要使用 `v-for` 指令，请确保 `data()` 方法返回的是数组类型的数据。
- 将 `v-for` 指令添加到元素。 将 `v-for` 指令添加到 HTML 元素。 若要显示数组中的数据，请使用双括号 ({{ }}) 语法。

假设你想要在数据对象中公开一个名称数组：

```JavaScript
const app = Vue.createApp({
    data() {
        return {
            names:['Susan', 'Peter', 'Bill']
        }
    },
});
```

显示这些值可以如下操作:

```html
    <ul id="app">
        <li v-for="name in names">{{ name }}</div>
    </ul>
```

> `ul` 标签用于定义无序列表
>
> `<li>`  标签定义列表项目。
>
> `<li>`  标签可用在有序列表 (`<ol>`) 和无序列表 (`<ul>`) 中。

> ![image-20211107200537559](http://cdn.ayusummer233.top/img/202111072005698.png)

---

**键和状态**

如果更改了数据，Vue.js 需要能够刷新显示的相应部分。 使用列表时，最好更新单个项，而不是整个列表。 若要允许 Vue.js 查找单个项，请为每个显示的项指定一个键。 键不需要是数据的一部分；你可以使用数组的索引来生成它。

可以通过更新 `v-for` 声明来获取索引，如以下代码所示：

```html
    <ul id="app">
        <li v-for="(name, index) in names":key="index">{{ name }} {{ index }}</div>
    </ul>
```

`index` 对于数组中的每个项都递增。 `:key` 指令存储 Vue.js 的键，该键允许它在发生更改时更新单个项。

> ![image-20211107200841624](http://cdn.ayusummer233.top/img/202111072008746.png)

---

[练习呈现列表 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/vue-dynamic-rendering/3-render-lists-exercise)

---

#### 使用条件呈现(Use conditional rendering)

使用数据驱动的应用程序时，通常需要具备根据某些值更新显示内容的能力。 可能需要更改颜色以指示警告、停用不可用的选项或仅仅是不显示控件。 Vue.js 提供了若干指令来控制是否显示项以及显示方式。

---

**切换可见性**

可使用 `v-show` 指令控制要显示的项。 `v-show` 检查一个布尔值或表达式，然后确定是否应显示某个组件。 如你所料，`true` 表示将显示它，而 `false` 表示不显示它。

以下示例显示了将 `v-show` 与计算结果为 `true` 或 `false` 的表达式一起使用：

```html
    <div v-if="new Date().getMonth() < 3">当前为第一季度</div>
    <div v-else-if="new Date().getMonth() < 6">当前为第二季度</div>
    <div v-else-if="new Date().getMonth() < 9">当前为第三季度</div>
    <div v-else>当前为第四季度</div>
```

> 你可以在任何指令中或双括号 ({{ }}) 内使用有效的 JavaScript。

> ![image-20211107222809055](http://cdn.ayusummer233.top/img/202111072228189.png)

![image-20211107224015454](http://cdn.ayusummer233.top/img/202111072240733.png)

---

### 处理 Vue.js 中的数据和事件

#### 动态数据和事件概述

用户通常使用窗体修改 Web 应用程序中的数据。 由于 Vue.js 与使用动态数据有关，因此它具有将数据绑定到窗体的强大机制。 你还可以管理事件，在用户选择按钮或与页面交互时执行不同的操作。 甚至可以添加动态计算得出的值，从而最大程度地减少重复的代码量。

学习目标

- 将模型数据绑定到窗体。
- 添加事件处理程序。
- 创建计算值。

在本模块中，你需要了解如何实现用户与 Vue 数据的交互。 首先创建窗体，然后将数据绑定到窗体。 然后，设置一个事件处理程序并对其进行配置，以便通过按钮选择调用它。 最后，添加计算属性以最大程度地减少 HTML 中所需的 JavaScript 代码量。

---

#### 使用窗体

Vue 应用或组件中的 `data()` 函数所返回的数据一般称为“状态”。 状态是应用程序执行必要的操作所需跟踪的任何信息。 用户通常通过 HTML 窗体修改状态。 Vue.js 允许将数据绑定到窗体，以便用户可以更新状态。

---

**v-model**

`v-model` 指令在 HTML 控件和关联的数据之间创建双向绑定。 因此，当窗体中的值更新时，应用程序状态中的值也会更新。 `v-model` 指令支持绑定到任何窗体控件，包括复选框、文本框和下拉列表。

> `v-bind` 指令用于创建单向绑定。 因此，用户在窗体中所做的任何更改都不会存储在状态中。

```js
Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ]
        }
    }
})
```

---

**绑定到文本框**

```html
<input type="text" v-model="name" />
```

> 每当文本框值发生更改，`name` 属性就会更新。 如果要改为使用 `textarea`，则语法相同；你可以像以前一样使用 `v-model="name"`。

> ![image-20211108165936693](http://cdn.ayusummer233.top/img/202111081659858.png)

---

**绑定到复选框**

通常情况下，布尔值可绑定到复选框。 复选框允许切换选项。 若要绑定 `active` 选项，可以使用之前所用的 `v-model`。

```html
<input type="checkbox" v-model="active" /> Is active
```

> ![image-20211108170022039](http://cdn.ayusummer233.top/img/202111081700221.png)

有时，切换不是布尔值。 相反，你可能有两种选择，如“是”和“否”。 在这种情况下，可以使用 `true-value` 和 `false-value` 来指示所选 (true) 或未选 (false) 复选框的关联值。

```html
<input type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no"> Benefits selected: {{ benefitsSelected }}
```

> ![image-20211108170153693](http://cdn.ayusummer233.top/img/202111081701888.png)

---

**下拉列表**

在 HTML 中，分两部分创建下拉列表。 使用 `select` 创建列表，使用 `option` 添加选项。 `select` 标记存储下拉列表的选定值，因此可以使用它来绑定到模型。

在 Vue 中，需执行以下操作：

- **创建选项列表**。 若要创建 `option` 列表元素，请使用 `v-for` 循环遍历并为数组中的各项创建一个 option 元素。
- **标识值**。 需要为创建的各选项标识值。 例如，如果列表只是一个字符串数组，则应将字符串或所选索引存储为值。 下面是一个示例：

```html
        <select v-model="selectedIndex">
            <option v-for="(stringItem, index) in statusList" 
            :value="index"> 
            {{stringItem}}
            </option>
         </select>
```

`vue.js` 相应的加上一个下拉列表索引变量

```js
const app = Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ],
            // 下拉列表索引
            selectedIndex:'0',
        }
    }
});
```

> ![image-20211108173041422](http://cdn.ayusummer233.top/img/202111081730702.png)
>
> ![image-20211108182222900](http://cdn.ayusummer233.top/img/202111081822077.png)
>
> ![image-20211108182251476](http://cdn.ayusummer233.top/img/202111081822633.png)

如果列表存储由对象构成的数组，请指出显示属性以及值所在的位置。

```js
        <select v-model="selectedValue">
            <option v-for="item in items" :value="item.value">
            {{ item.displayProperty }}
            </option>
        </select>
```

> ![image-20211108203830423](http://cdn.ayusummer233.top/img/202111082038689.png)
>
> ![image-20211108203914882](http://cdn.ayusummer233.top/img/202111082039110.png)
>
> ![image-20211108203208179](http://cdn.ayusummer233.top/img/202111082032339.png)

- **跟踪选定的值**。 可使用 `v-model` 将所选值绑定到 `select` 标记。 这样便可跟踪项的索引或值。 这由您自己决定。

若要创建选项列表，请使用 `v-for` 遍历列表。 然后选择将值设置为数组中项的索引。 使用 `v-for(status, index) in statusList` 为每个项提供索引。 然后将每个选项的 `:value` 设置为 `index`，并将 `status` 显示为用户的选项。

```js
        <select v-model="statusIndex">
            <!-- Create a message to select one -->
            <option disabled value="">Please select one</option>
            <!-- Use v-for to create the list of options -->
            <option v-for="(status, index) in statusList" :value="index">
                {{ status }}
            </option>
        </select>
```

> ![image-20211108204746566](http://cdn.ayusummer233.top/img/202111082047895.png)
>
> ![image-20211108204912684](http://cdn.ayusummer233.top/img/202111082049849.png)

最后，添加 `v-model="statusIndex"` 以确保用户选择某项时，`statusIndex` data 属性的值将更新为所选索引。

---

#### 处理事件

在应用程序中，事件是可能发生的操作，但你不一定知道何时发生。 例如，如果页面上有一个按钮，你知道用户可能会选择该按钮。 但不知道何时选择。

创建任何 Web 应用程序都需要了解如何处理事件。 在此，你将了解如何使用 Vue.js 管理事件。

---

**v-on 指令和 @**

Vue.js 提供了一个名为 `v-on` 的指令，你可以将其绑定到任何事件，例如 `v-on:click`。 由于处理事件是一项核心任务，Vue.js 还提供了一个 `@` 快捷方式来处理任何事件。 因此，若要绑定 click 事件，可以使用 `@click` 快捷方式。

---

**事件处理程序**

可通过将函数添加到 Vue 应用程序或组件中的 `methods` 字段来创建事件处理程序。 `methods` 字段类似于 `data()`，但它不返回状态对象，而是保留应用程序的可用函数的列表。 可以采用与引用其他 JavaScript 函数相同的方式在 HTML 中引用这些函数。

> 向 `methods` 字段添加函数的主要原因是函数可以访问任何已注册的数据。

向 Vue 应用或组件添加方法时，`this` 将指向活动实例。 可从 `this` 访问可用于活动实例的任何数据，如以下示例中的 `name` 所示。

---

**创建事件处理程序**

若要创建在调用 `name` data 属性时显示其值的方法，可按照以下示例操作：

```js
const app = Vue.createApp({
    data() {
        return {
            name: 'Cheryl'
        }
    },

    methods: {
        displayName() {
            console.log(this.name);
        }
    }
});
```

由于 `displayName()` 已添加到 `methods` 属性中，因此它可由模板访问，并可绑定到事件。

---

**将事件处理程序绑定到事件**

可使用 `@click` 速记将 `displayName()` 函数绑定到 `click` 事件。 当用户选择该按钮时，将调用 `displayName()` 函数。

```html
<button type="button" @click="displayName">Display name</button>
```

> ![image-20211109222253632](http://cdn.ayusummer233.top/img/202111092223813.png)
>
> ![image-20211109222337364](http://cdn.ayusummer233.top/img/202111092223445.png)

---

#### 了解计算属性

通过使用 handlebars 语法 (`{{ }}`)，可以显示值并将 JavaScript 注入到 HTML 中。 此语法非常强大，但可能导致代码混乱或重复。 可使用 Vue 中的计算属性来卸载计算和其他形式的动态字符串。

---

**创建计算属性**

与在 `methods` 字段下添加方法类似，计算属性将添加到 `computed` 字段中。 计算属性是返回值的函数。 与方法类似，计算属性可使用 `this` 访问 Vue 的活动实例。

你可使用计算属性将 `firstName` 和 `lastName` 合并为 `fullName` 属性，在数组中执行查找以返回正确的值，或执行其他动态任务。

而且，计算属性是响应式的。 如果计算属性中的任何值发生更改，则会更新计算属性以反映所做的更改。

以下示例创建了一个 `fullName`。

```js
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Cheryl',
            lastName: 'Smith',
        }
    },
    computed: {
        fullName(){
            return `${this.lastName} ${this.firstName}`
        }
    }
});

```

字符串字面量将连接 `lastName` 和 `firstName` 字段。

> ![image-20211110080918519](http://cdn.ayusummer233.top/img/202111100809759.png)
>
> ![image-20211110082205487](http://cdn.ayusummer233.top/img/202111100822795.png)

---

### Vue.js 中的 Vue CLI 和单文件组件入门

虽然可以仅使用 JavaScript 来创建 Vue.js 应用程序，但大多数开发人员都需要更多的功能和灵活性。 使用 Vue CLI 和单文件组件，你可以利用更可靠的工具增强开发体验。 我们将了解如何使用 Vue CLI 启动应用程序，以及如何在 Vue 中创建可重用组件。

在一个 JavaScript 文件中创建整个 Vue.js 应用程序，但只能在小型应用程序中管理它。 为了支持将应用程序分解为较小的单元，Vue 使你能够创建组件。 组件是可重用的构建基块，你可以基于组件创建应用程序。

可以将组件创建为 JavaScript 文件，或通过扩展名为 .vue 的单文件组件来创建组件。 单文件组件使用浏览器无法读取的专用语法。 必须将此语法转换为相应的 JavaScript、HTML 和 CSS 语法。 将专用语法转换为浏览器可读取的内容的过程称作“捆绑”，这需要额外的工具，例如 webpack。

幸运的是，Vue 还提供了可用于启动应用程序的命令行接口 (CLI)。 CLI 配置所有必备工具，包括捆绑程序和开发服务器。

本模块介绍如何执行以下操作：

- 使用 Vue CLI 创建应用程序。
- 创建单文件组件。
- 使用属性将值传入组件。

---

#### Vue CLI 入门

Vue CLI 提供了一套开发工具，包括用于项目基架构建和快速原型设计的工具和一个开发服务器。 它帮助你快速创建初始应用程序，以便你可以专注于编码，而不是配置库和其他设置。

---

**启动**

Vue CLI 的核心功能是启动应用程序。 Create 脚本供一个向导，你可以在其中选择一些最常见的配置，包括：
- **Lint 分析选项**：确保所有代码看上去一致。 这些选项还可帮助发现错误。
- **应用程序类型**：选择是否添加渐进式 Web 应用支持。
- **Babel 支持**： Babel 的任务是当需要在较旧版本的浏览器中使用应用时，将较新的 JavaScript 语法转换为旧式 JavaScript 语法。
- **语言**：选择 JavaScript 或 TypeScript。 哪一个都可以，但 TypeScript 除其他功能外还提供类型，在应用程序增长时可能是一个不错的选择。 Vue 本身就是使用 TypeScript 生成的。

---

**生成过程**

Vue CLI 的设计使其能处理单文件 Vue 组件或 .vue 文件。 模块捆绑程序或捆绑程序管理将 .vue 文件中的专用语法转换为相应 JavaScript、HTML 和 CSS 语法的过程，使浏览器可读取这些文件。

Vue CLI 将 [webpack](https://webpack.js.org/) 作为默认捆绑程序。 在大多数情况中，webpack 的默认配置都适用。 使用 Vue CLI 可跳过配置捆绑程序需要的步骤，改用提供的设置。

---

**开发服务器**

开发任何类型的应用程序都需要反复试验。 你需要做一些更改，在浏览器中加载页面，测试该页面，然后再进行更改。 然后重复此过程，直到一切都按照预期工作。

你希望尽量减少此过程涉及的步骤。 为了简化开发，Vue CLI 包含了一个开发服务器。 该开发服务器会在你每次保存文件时检测文件更改，重新生成（或重新捆绑）项目，并使你能在浏览器中测试页面。

---

#### 使用 Vue CLI 创建应用程序

我们要创建一个应用程序，使用户能通过它向虚构公司 Relecloud 预订月球巡航。 我们将使用 Vue CLI 启动应用程序。

---

**安装 Vue CLI**

可通过 [npm](https://www.npmjs.com/)（Node.js 使用的打包工具）获取 Vue CLI。 系统会在你安装 Node.js 时自动安装 npm 工具。 若要确保在系统上安装了 npm 和 Node.js，请打开命令窗口或终端窗口，并运行以下命令：

```bash
node -v
npm -v
```

> **重要**: Vue CLI 往往是通过 npm 全局安装的，如果你已直接安装了 Node.js，这需要提升的权限。 如果使用节点版本管理器 (nvm)，你能以普通用户身份执行安装。 你可以[在 Linux、适用于 Linux 的 Windows 子系统 (WSL) 或 macOS 上安装 nvm](https://github.com/nvm-sh/nvm#installing-and-updating/?azure-portal=true)，也可以[在 Windows 上安装 nvm](https://docs.microsoft.com/zh-cn/windows/nodejs/setup-on-wsl2/)。

如果要安装 Vue CLI，请打开命令窗口或终端窗口，然后运行以下命令：

```bash
npm install -g @vue/cli
```

在系统上安装 Vue CLI 需要几分钟时间。

---

**启动应用程序**

启动 Vue 应用程序最快的方式是使用 Vue CLI。 现在，我们将使用 Vue CLI 创建一个初始应用程序。

1. 在命令窗口或终端窗口中，转到要用于存储应用程序的文件夹。
2. 通过运行以下命令创建一个 Vue 应用程序：

```bash
vue create relecloud
```

3. 出现提示时，使用箭头键移动到“Manually select features”，然后选择 Enter 键。

4. 系统提示项目需要的功能时，使用箭头键移动到“Babel”，然后选择空格键禁用它。 接下来，使用箭头键移动到“Linter / Formatter”，然后选择空格键禁用它。

![image-20211110201523420](http://cdn.ayusummer233.top/img/202111102015574.png)

5. 确保选中“Choose Vue version”。

6. 选择 Enter 键确认功能选择。

   > 对于生产项目，你可能决定添加更多功能。 这些功能超出了本模块的范畴。

7. 系统提示你选择 Vue.js 版本时，使用箭头键移动到“3.x (Preview)”，然后选择 Enter 键。

   ![image-20211110201709497](http://cdn.ayusummer233.top/img/202111102017611.png)

8. 如果系统提示你选择用于放置配置文件的位置，请保留默认位置“In dedicated config files”，然后选择 Enter 键。

   ![image-20211110201906480](http://cdn.ayusummer233.top/img/202111102019568.png)

9. 系统提示你将此信息作为预设保存时，通过选择 Enter 键接受默认值“No”。

   ![image-20211110201946569](http://cdn.ayusummer233.top/img/202111102019645.png)

10. ![image-20211110202334115](http://cdn.ayusummer233.top/img/202111102023213.png)

    Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 — Yarn，正如[官方文档](https://code.facebook.com/posts/1840075619545360)中写的，Yarn 是为了弥补 npm 的一些缺陷而出现的：

    npm 安装包（packages）的速度不够快，拉取的 packages 可能版本不同

    npm 允许在安装 packages 时执行代码，这就埋下了安全隐患

    > [Yarn vs npm：你需要知道的一切 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/23493436)

---

**浏览代码**

我们来看一看 Vue CLI 已创建的代码。

1. 安装完成后，在 Visual Studio Code 中打开 relecloud 目录：

2. 打开 package.json

   ![image-20211110203822639](http://cdn.ayusummer233.top/img/202111102038751.png)

3. 请注意，`vue` 作为依赖项列出，`@vue/cli-service` 作为 `devDependency` 列出。

   > `@vue/cli-service` 部分负责生成应用程序和运行开发服务器。

4. 请注意两个脚本：
   
   - `serve` 脚本用于启动开发服务器。
   - `build` 脚本用于在你准备好发布项目时，创建 JavaScript、HTML 或 CSS。
   
5. 打开将托管 Vue 应用程序的 `public/index.html`。

   ![image-20211110204149015](http://cdn.ayusummer233.top/img/202111102041133.png)

6. 打开 `src/main.js`，注意从 `App.vue` 导入 `App` 的代码。

   ![image-20211110204221550](http://cdn.ayusummer233.top/img/202111102042637.png)

7. 打开` src/App.vue`，它包含我们将在下一个单元中探讨的核心组件。

   ![image-20211110204252728](http://cdn.ayusummer233.top/img/202111102042834.png)

   > Visual Studio Code 可能会向你提示推荐的扩展。 我们会在未来的某个模块中安装该扩展。

8. 请注意` src/components` 文件夹，所有组件都将存储在其中。

   ![image-20211110204350988](http://cdn.ayusummer233.top/img/202111102043064.png)

---

**运行开发服务器**

我们启动开发服务器并查看默认页面。

1. 通过选择“终端” > “新终端”，在 Visual Studio Code 中打开新终端窗口。

2. 在集成终端中，运行以下命令来启动开发服务器：

   ```bash
   yarn serve
   ```

3. 打开浏览器，然后转到 `http://localhost:8080`。

   此时显示默认的 Vue 应用程序。

   ![image-20211110205351838](http://cdn.ayusummer233.top/img/202111102053069.png)

至此, 达成了用 VUE CLI 创建了一个 APP

---

#### Vue 组件入门

根据定义，组件是“一个较大整体中的一个部分或元素”。 考虑创建应用程序时，你通常是使用较小的部分，然后将它们组合成一个较大的整体：应用程序。 Vue 使你能创建可用于创建完整应用程序的组件。

---

**Vue 组件**

虽然可以使用 JavaScript 文件创建组件，但更常见的方法是使用 `.vue` 文件中的 Vue 语法创建单文件组件。 单文件组件拥有更清晰的结构以及更独立的设置。 你甚至能通过这些组件使用各种预处理器，例如 Pug 或 Stylus。

创建组件时，你实际上是创建可在应用程序中使用的新标记，方式类似于创建普通 HTML 标记。 这种形式的语义标记指明了页面上显示的内容。 像 `<booking-form></booking-form>` 这样的标记可能会显示一个用于创建预订的窗体，而 `<booking-list></booking-list>` 可能会显示一个预订列表。

---

**Vue 组件结构**
Vue 组件包含三个主要部分：`style`、`script` 和 `template`。

---

**样式**

`style` 部分可以包含任何有效的 CSS 或你可能使用的任何预处理器的语法。

你还可以使用 `scoped` 特性将 CSS 的范围设定为该特定组件。 样式只会仅应用于该组件，因此你可以创建类和其他设置，而无需担心会意外修改页面的其他部分。

```HTML
<style>
.demo {
    font-family: Verdana
}
</style>
```

> `Verdana` 是一套无衬线字体, 它在小字上有结构清晰端整、阅读辨识容易等高品质表现，成为许多领域爱用的标准字型之一。

----

**脚本**

`script` 部分存储用于组件的脚本。 和 Vue JavaScript 组件一样，你可以导出各种 Vue 属性和方法，例如 `data()`、`methods` 和 `components`。

```html
<script>
export default {
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'A cool cruise to the moon!'
            }
        }
    }
}
</script>
```

---

**template**

`template` 部分包含要用于显示信息并使用户能与数据交互的 HTML 模板。 使用基于 JavaScript 的组件时，`template` 通常位于 `.html` 文件中，或者它是 JavaScript 文件中的字符串字面量。

`template` 中使用的 HTML 语法与基于 JavaScript 的组件中的语法相同，这包括使用 handlebars (`{{}}`) 来显示数据。

```html
<template>
  <div id="product">
    <div>{{ product.name }}</div>
    <div>{{ product.description }}</div>
  </div>
</template>
```

> 模板需要有一个根元素。 也就是说，将 `product` 作为 `id` 的 `div` 元素不能拥有任何同级元素。 它只能拥有子元素，如前面的代码所示。

---

**加载和组件**

如前文所述，保存单文件组件所用的扩展名是 `.vue`。 你可以使用 `import` 语句以类似的方式将这些组件加载到其他模块。 可以使用 `components` 属性注册它们。 组件注册后，可用作 `template` 内的标记。

> 使用 `import` 导入库时，标准做法是使用帕斯卡命名法为这些标记命名，其中每个单词的首字母大写（例如 `PascalCase`）。 但在 HTML 中，标记名的约定是使用短横线隔开式命名法：每个单词均小写，单词之间加一个短横线 `-`。 Vue 自动管理这两种不同的约定。

```html
<template>
<product-display></product-display>
</template>
<script>
import ProductDisplay from './ProductDisplay.vue'
export default {
    components: {
        ProductDisplay
    }
}
```

在前面的代码中，导入了 `ProductDisplay` 组件，并已将它添加到 `components` 属性。 于是，在模板中使用 `ProductDisplay` 时，Vue 的编译器可以判断需要分析的是此组件，而不是常规的 HTML 元素。

---

**分离关注点**

将 HTML、CSS 和 JavaScript 融入一个文件中似乎背离了为每个类型创建独立的文件的最佳做法。 实际上，在这些文件之间切换可能会导致开发速度缓慢，因为它们之间相互依赖。 此外，还有一个认知负载与不得不在文件之间切换有关联。

借助单文件组件，你能使用 `src` 特性为 `script` 和 `style` 部分创建独立的文件。

```html
<template>
    <div>Hello, world</div>
</template>
<script src="./hello.js"></script>
<style src="./style.css"></style>
```

---

#### 创建组件

我们要创建一个应用程序，使用户能预订月球巡航。 在接下来的几个练习中，你将为创建一个组件作为用户为创建预订而填写的窗体；然后创建另一个组件，用于显示创建的预订的列表。 你要创建的第一个组件将托管两个子组件。

----

**安装 Visual Studio Code 扩展**

Visual Studio Code 在 [Visual Studio Marketplace](https://marketplace.visualstudio.com/vscode/) 中有大量可用于帮助开发的扩展。 我们将利用其中两个：

- [Vetur](https://marketplace.visualstudio.com/items/?itemName=octref.vetur) 提供在 Visual Studio Code 中使用 `.vue` 文件的支持。
- 来自 `Sarah Drasner` 的 [Vue VSCode 代码片段](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)支持在 Visual Studio Code 中使用代码片段。

> ![image-20211110210958158](http://cdn.ayusummer233.top/img/202111102109328.png)
>
> ![image-20211110211025138](http://cdn.ayusummer233.top/img/202111102110245.png)

---

**创建 Host 组件**

我们来创建 Host 组件。

1. 在` src/components` 中创建一个名为 `Host.vue` 的文件。

2. 在 `Host.vue` 中键入 `vue`，然后从代码片段菜单选择“`<vue> with default.vue`”。

   ![image-20211110211352021](http://cdn.ayusummer233.top/img/202111102113165.png)

   ![image-20211110211423963](http://cdn.ayusummer233.top/img/202111102114052.png)

---

**更新脚本部分**

此代码片段为我们创建 `script` 元素，其中已创建了 `export default`。 `export default` 命令使 Vue 中的另一个组件能加载此组件。 我们会将需要的代码添加到此部分中。

在 `export default` 的大括号 (`{ }`) 内添加以下代码，用于为组件命名，注册数据并添加两条注释供将来使用：

```js
name: 'Host',
data() {
    return {
        cruise: {
            name: 'Cruise to the moon',
            description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            cabins: [
                { name: 'Coach', price: 125000 },
                { name: 'Business', price: 275000 },
                { name: 'First', price: 430000 },
            ]
        },
        bookings: [
            { name: 'Sample', price: 0 }
        ]
    }
},

// TODO: Add components

// TODO: Add methods
```

`name` 字段设置组件的名称。 `data()` 部分将 `cruise` 对象注册为组件的数据。 稍后我们将使用 `bookings` 来存储巡航预订列表。 `TODO` 注释充当表示供未来使用的标记。

---

**添加模板**

注册数据后，接下来将 HTML 添加到 `template` 元素以显示核心信息。 我们还将添加两个占位符供将来使用。

在 `Host.vue` 中的 `template` 元素内添加以下 HTML，用于显示巡航的名称和说明。 该 HTML 通过占位符来表示两个我们将于稍后创建的组件。

```html
<section>
<div class="nav-bar"></div>
<h1>Relecloud Galaxy Tours</h1>

<div>
    <h2>{{ cruise.name }}</h2>
    <div>{{ cruise.description }}</div>
    <hr />

    <div class="row">
        <div>
            <!-- TODO: Add booking-form -->

        </div>
        <div>
            <!-- TODO: Add booking-list -->

        </div>
    </div>
</div>
</section>
```

---

**添加样式**

创建 HTML 后，为应用程序添加样式。

在 `Host.vue` 中的 `style` 元素内添加以下 CSS：

```css
body {
    background-color: #f2f2f2;
    margin: 0, 5%;
    font-family: tahoma;
}

.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    vertical-align: middle;
    margin: 2em;
}

.button {
    background-color: #39495c;
    border-radius: 5px;
    color: white;
    text-align: center;
}

.nav-bar {
    background: linear-gradient(-50deg, #010801, #0d0d60);
    height: 60px;
    margin-bottom: 25px;
}
```

此 CSS 会向应用程序添加一些结构和颜色。

---

**将 Host 组件设置为应用程序的入口点**

Vue CLI 创建一个 `main.js` 文件，该文件将 `App.vue` 作为入口点加载到应用程序中。 为此，我们创建了一个名为 Host 的新组件。 我们会更新 main.js，以使用我们的组件。

打开 `main.js`，然后使用以下代码替换内容：

```js
import { createApp } from 'vue'
import Host from './components/Host.vue'

createApp(Host).mount('#app')
```

---

**测试应用程序**

保存代码后返回 `http://localhost:8080`

![image-20211110212325478](http://cdn.ayusummer233.top/img/202111102123691.png)

到此为止完成了在 Vue.js 中创建了你的第一个单文件组件！

----

#### 组件属性

HTML 元素是用于创建页面的构建基块。 可通过将特性设置为不同的值来配置这些元素的行为。 正如我们前面强调的那样，创建组件与创建自定义 HTML 标记相似。 因此，你可以通过属性传入信息，从而提高组件的可重用性。

---

**定义属性**

属性是一组可传入组件的值。 你通常会向组件添加属性，以传入它应显示或更改其行为的值。

可通过在 `script` 元素内添加 `props` 字段来定义组件的属性。 可以列出组件属性的名称，方式是将它们以数组形式列出：

```html
<!-- UserDisplay component -->
<script>
export default {
    name: 'UserDisplay',
    props: ['name', 'age']
}
</script>
```

组件的调用方使用与 HTML 特性相同的语法来设置属性。 就上一个组件而言，我们可以像下面这样设置 `name` 和 `age`：

```html
<!-- inside parent component -->
<template>
    <user-display name='Cheryl' age='28'></user-display>
</template>
<script>
import UserDisplay from './UserDisplay.vue';
export default {
    components: {
        UserDisplay
    }
}
</script>
```

通过特性绑定，值 `Cheryl` 和 `28` 分别绑定到 `name` 和 `age` 属性。

> Vue.js 会将名为 `UserDisplay` 的组件转换为用短横线分隔的小写形式 `user-display`。

---

**限制类型**

调用方可通过将值作为数组的一部分列出的方式来传入任何类型的值。 这适用于基本应用程序，但你通常需要指出希望为每个属性使用的数据类型。

定义架构可提供有关属性的更可靠的信息。 如果希望指出 `name` 为字符串，`age` 为数字，可以像下面这样定义属性架构：

```html
<!-- UserDisplay component script -->
<script>
export default {
    name: 'UserDisplay',
    props: {
        name: String,
        age: Number
    }
}
</script>
```

请注意，你其实是在创建一个具有 `name` 和 `age` 类型的属性对象。 现在，此组件只接受指定的数据类型。 你还可以像以前那样进行设置：

```html
<!-- inside parent component -->
<user-display name='Cheryl' age='28'></user-display>
```

但是，如果将数据类型设置为与架构不匹配的值（例如向 `name` 传入数字），你会在控制台中收到一条警告。 该警告将要求你采取措施。

---

**复杂对象**

使用 Vue 时，通常是使用对象而不是使用单独的值。 幸运的是，你可以声明具有属性的复杂结构。

如果你使用具有 `name` 和 `age` 属性的 `User` 对象，可以在属性中将这声明为一个完整的构造：

```html
<!-- UserDisplay component script -->
<script>
export default {
    name: 'UserDisplay',
    props: {
        user: {
            name: String,
            age: Number
        }
    }
}
</script>
```

可以像以前那样使用特性设置值。 此外，你可以指定要使用的对象的名称，以通过这样的方式传入动态数据。 在下面的示例中，使用和传递静态值一样的语法传递了一段名为 `user` 的数据：

```html
<!-- parent component -->
<template>
<user-display :user="user"></user-display>
</template>

<script>
import UserInfo from './UserInfo.vue';
export default {
    data() {
        return {
            user: {
                firstName: 'Cheryl',
                age: 28
            }
        }
    },
    components: {
        UserDisplay
    }
}
</script>
```

---

**在组件内使用属性**

在组件内，可以使用读取数据的方式来读取属性。 完整的 `UserDisplay` 组件可能如下所示：

```html
<template>
    <div>Name: {{ user.name }}</div>
    <div>Age: {{ user.age }}</div>
</template>
<script>
export default {
    name: 'UserDisplay',
    props: {
        user: {
            name: String,
            age: Number
        }
    }
}
</script>
```

> 与有状态数据不同，通过属性传递值是单向绑定。 如果对属性进行了更改，这些更新不会扩展到父级。

---

#### 向组件添加属性

接下来，通过创建显示当前预订列表的组件，继续生成应用程序。 你将添加一个窗体，用户可以使用它来添加预订，现在创建一个静态数组吧。

---

**创建组件**

首先创建组件。

1. 使用 Visual Studio Code，在 `src/components` 中创建一个名为 `BookingList.vue` 的文件。
2. 在 `BookingList.vue` 中键入 `vue`，然后从代码片段菜单中选择“`<vue> with default.vue`”。

---

**注册属性和计算出的值**

我们需要一个预订信息数组，所以将属性声明为 `Array` 类型。 你要创建组件，因此还可以利用计算属性自动计算值。 你将添加一个计算属性，用于添加总价并返回可供你使用的显示值。

1. 打开 `src/components/BookingList.vue`
2. 在 `export default` 的大括号 (`{ }`) 内，添加以下代码，以创建一个名为 `bookings` 的属性和 `computed` 属性：

```js
props: {
    bookings: Array
},
computed: {
    totalDisplay() {
        let totalCost = 0;
        if (this.bookings && this.bookings.length > 0) {
            totalCost = 
                this.bookings.map(b => b.price)
                            .reduce((a, b) => a + b);
        }
        return '$ ' + totalCost.toLocaleString('en-US');
    }
}
```

请注意，`totalDisplay` 可以使用 `this` 访问 `bookings` 属性，也就是说我们能访问声明为组件的一部分的数据或其他属性。 我们创建代码，以计算 `bookings` 中列出的所有价格的总价，并创建字符串显示。

---

**为显示信息添加模板**

接下来，添加模板以显示预订信息。 你将使用 `v-for` 循环访问所有预订，并使用我们之前创建的 `totalDisplay` 计算属性。

1. 打开 `src/components/BookingList.vue`
2. 在 `<template>` 元素内部，添加以下 HTML：

```html
<section>
<h2>
    Here's your current bookings:
</h2>

<div class="row" v-for="(booking, index) in bookings" :key="index">
    <div>{{ booking.cabin }} </div>
</div>

<h3 class="row">
    Total: {{ totalDisplay }}
</h3>
</section>
```

1. 我们的代码使用 `v-for` 循环访问所有预订，并显示 `cabin`。 然后，我们调用 `totalDisplay` 来显示所有预订的总费用。

---

**向主页添加组件**

接下来，使用我们创建的组件，然后传入预订列表。

1. 打开 `src/components/Host.vue`。

2. 在 `<script>` 开始标记下、`export default` 前添加一个新行。

3. 添加以下代码（包括注释）以导入 `BookingList` 组件：

   ```js
   import BookingList from './BookingList.vue';
   // TODO: Register next component
   ```

4. 通过在 `TODO: Add components` 注释下添加以下代码（包括注释）来注册组件：

   ```js
   components: {
       BookingList,
       // TODO: Add next component
   
   },
   ```

   > 这两个逗号是必需的，因为我们未来会添加更多值。

---

**使用组件**

注册组件后，在页面中调用它吧。 我们将使用之前创建的 `bookings` 数组在页面上播种预订列表。

1. 打开 `src/components/Host.vue`

2. 在 `TODO: Add booking-list` 注释下，添加以下代码以使用 `booking-list` 组件：

   ```html
   <booking-list :bookings="bookings"></booking-list>
   ```

---

**测试页面**

保存后返回 `http://localhost:8080`

![image-20211110220720738](http://cdn.ayusummer233.top/img/202111102207889.png)

到此为止完成了创建一个具有属性的组件。

---

#### 组件的自定义事件

HTML 元素可基于用户交互引发事件。 使用组件发射事件也能引发事件。 然后，父组件可以使用与添加代码以侦听按钮点击事件相同的方式来处理这些事件。

---

**注册事件**

创建组件时，在 `script` 中的 `emits` 字段中列出组件可能发射的任何事件，从而注册这些事件：

```html
<!-- inside the component's vue file -->
<script>
export default {
    name: 'Demo',
    emits: ['userUpdated']
}
</script>
```

---

**发射事件**

使用 `$emit` 函数发射事件。 如果要发射 HTML 控件直接引发的事件，可使用内联方式执行此操作。 请注意，你可以通过注册按钮的 `click` 事件处理程序来发射 `userUpdated` 事件：

```html
<!-- inside the component's vue file -->
<template>
    <button @click="$emit('userUpdated')">Save user</button>
</template>
```

> 你使用的是快捷方式 `@click`，它通常用于连接 Vue 中的事件处理程序。

有时，可能需要在发射事件前执行更多步骤。 如果组件在返回任何更新的信息之前需要先将值保存到数据库中，你可以通过添加方法来完成此操作。 在方法中，可以使用 `this.$emit` 来引发事件，就像之前一样：

```html
<!-- inside the component's vue file -->
<template>
    <button @click="saveUser">Save user</button>
</template>
<script>
export default {
    name: 'UserDialog',
    emits: ['userUpdated'],
    methods: {
        saveUser() {
            // perform other operations
            this.$emit('userUpdated'); // emits event
        }
    }
}
</script>
```

----

**发射带有数据的事件**

组件可能需要通过事件向父组件返回数据。 可以通过向 `$emit` 传递其他参数来返回任何数据。 如果希望通过返回 `true` 来指示更新成功，可以像下面这样更新调用：

```html
<button @click="$emit('userUpdated', true)">Save user</button>
```

你也可以使用方法:

```js
methods: {
    saveUser() {
        // perform other operations
        this.$emit('userUpdated', true); // emits event
    }
}
```

---

**侦听事件**

侦听组件发射的事件和侦听普通 HTML 控件引发的事件类似。 你往往会在父组件中创建一个方法，然后使用会为 `@click` 或其他事件使用的 `@<event-name>` 语法，将该方法连接到事件。 如果事件返回任何数据，这些数据都会被作为参数传递给函数。

如果要为先前创建的 `userUpdated` 事件添加事件处理程序，可以使用以下代码。 请注意，Vue.js 会将采用骆驼拼写法的名称转换为用短横线分隔的小写名称。

```html
<template>
<user-dialog @user-updated="handleUserUpdated"></user-dialog>
</template>
<script>
import UserDialog from './UserDialog.vue';
export default {
    methods: {
        handleUserUpdated(success) {
            if (success) {
                alert('It worked!!');
            } else {
                alert('Something went wrong');
            }
        }
    },
    components: {
        UserDialog
    }
}
```

---

#### 向组件添加自定义事件

接下来，通过添加一个窗体来完成应用程序的构建。 该窗体有一个供用户选择客舱的下拉列表，还有一个用于预订巡航的按钮。 你会将此窗体设置为新组件，并为该按钮创建一个事件。 最后，通过从 `Host.vue` 调用此新组件。

---

**创建组件**

使用默认模板创建 `BookingForm` 组件

----

**为组件添加代码**

在 `export default` 的大括号 (`{ }`) 内，添加以下代码来配置组件：

```js
props: {
    cabins: Array,
},
emits: ['bookingCreated'],
data() {
    return {
        cabinIndex: -1
    }
},
methods: {
    bookCabin() {
        if(this.cabinIndex < 0) return;
        this.$emit('bookingCreated', this.cabinIndex);
        this.cabinIndex = -1;
    },
}
```

此代码首先创建一个用于显示可用客舱的列表的 `cabins` 属性。 我们使用 `emits` 公开一个名为 `bookingCreated` 的事件。 再创建一个名为 `cabinIndex` 的数据项来存储选定的客舱索引。

最后，创建一个名为 `bookCabin` 的方法。 此方法将检查 `cabinIndex` 的值，并且仅当该值为 0 或更大值（表示用户选择了客舱）时才运行。 如果此验证通过，我们发射返回选定的 `cabinIndex` 的事件，然后将 `cabinIndex` 重置为 -1。

---

**添加显示模板**

在 `<template>` 标记内添加以下代码创建显示内容：

```html
<section>
<h2>Book now!</h2>
<form>
    <div class="row">
        <label for="cruise-cabin">Select class:</label>
        <select id="cruise-cabin" v-model="cabinIndex">
            <option disabled value="-1">Select a cabin</option>
            <option v-for="(cabin, index) in cabins" :value="index" :key="index">
                {{ cabin.name }} $ {{ cabin.price.toLocaleString('en-US') }}
            </option>
        </select>
    </div>
    <div class="row">
        <button class="button" type="button" @click="bookCabin">Book now!</button>
    </div>
</form>
</section>
```

该 HTML 创建窗体。 我们使用 `v-for` 创建下拉列表，从而循环访问 `cabins` 属性。 将 `select` 标记模型绑定到 `cabinIndex`，用户选择客舱并选择该按钮时，会返回该模型。 然后，将按钮设置为在被选定时调用 `bookCabin`。

---

将 `BookingForm` 添加到页面

打开 `Host.vue`

在 `TODO: Register next component` 注释后添加以下代码以导入 `BookingForm`：

```js
import BookingForm from './BookingForm.vue';
```

通过在 `TODO: Add next component` 注释后添加以下代码，将 `BookingForm` 添加到可用组件列表中：

```js
BookingForm
```

通过在 `TODO: Add methods` 注释后添加以下代码来添加用于处理 `bookingCreated` 自定义事件的方法：

```js
methods: {
    addBooking(cabinIndex) {
        const cabin = this.cruise.cabins[cabinIndex];
        const booking = {
            cabin: cabin.name,
            price: cabin.price
        }
        this.bookings.push(booking);
    }
},
```

`addBooking` 函数使用索引检索选定的客舱。 然后，该函数使用 `cabin.name` 和 `cabin.price` 新建一个 `booking` 对象。 接下来，将 `booking` 添加到 `bookings` 数组中。

使用 `booking-form` 组件，使用方法为在 `TODO: Add booking-form` 注释后添加以下代码：

```html
<booking-form @booking-created="addBooking" :cabins="cruise.cabins"></booking-form>
```

我们将 `addBooking` 函数连接到 `booking-created` 事件，并传递要显示的客舱列表。

---

**测试页面**

保存并返回 `http://localhost:8080`

![image-20211110221819293](http://cdn.ayusummer233.top/img/202111102218514.png)

---

# 安装

> [安装 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/installation.html#发布版本说明)

将 `Vue.js` 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn) 的形式导入。
2. 下载 JavaScript 文件并 [自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)。

---

## pnpm

```bash
# 最新稳定版
pnpm install vue@next
```

大多数情况下，我们更倾向于使用 Vue CLI 来创建一个配置最小化的 webpack 构建版本

> 本质上，*webpack* 是一个现代 JavaScript 应用程序的 *静态模块打包器(module bundler)*。当 webpack 处理应用程序时，它会递归地构建一个*依赖关系图(dependency graph)*，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 *bundle*。
>
> [概念 | webpack 中文网 (webpackjs.com)](https://www.webpackjs.com/concepts/)

---

## 命令行工具(CLI)

Vue 提供了一个[官方的 CLI](https://github.com/vuejs/vue-cli)，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org/)。

> CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读[指南](https://v3.cn.vuejs.org/guide/introduction.html)，在熟悉 Vue 本身之后再使用 CLI。

对于 Vue 3，你应该使用 `pnpm` 上可用的 `Vue CLI v4.5` 作为 `@vue/cli`。要升级，你应该需要全局重新安装最新版本的 `@vue/cli`：

```bash
pnpm install -g @vue/cli
```

> 使用 `@vue/cli` 可视化创建 Vue 项目
>
> ```bash
> vue ui
> ```
>
> ![image-20211116191439270](http://cdn.ayusummer233.top/img/202111161914501.png)
>
> 选择 `创建` 后根据界面提示完成项目的创建
>
> > [pnpm安装以及安装@vue/cli_cxrlover的博客-CSDN博客_安装pnpm](https://blog.csdn.net/weixin_43852058/article/details/113752494)

然后在 Vue 项目中运行

```bash
vue upgrade --next
```

---

# 工具

## TypeScript 支持

> [Vue CLI](https://cli.vuejs.org/) 提供内置的 TypeScript 工具支持。

---

##  NPM 包中的官方声明

随着应用的增长，静态类型系统可以帮助防止许多潜在的运行时错误，这就是为什么 Vue 3 是用 TypeScript 编写的。这意味着在 Vue 中使用 TypeScript 不需要任何其他工具——它具有一等公民支持。

---

## 推荐配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

请注意，必须包含 `strict: true` (或至少包含 `noImplicitThis: true`，它是 `strict` 标志的一部分) 才能在组件方法中利用 `this` 的类型检查，否则它总是被视为 `any` 类型。

参见 [TypeScript 编译选项文档](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 查看更多细节。

---

## VSCode 用户片段

`vue.json`:

```json
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"vue-template":{
		"prefix": "vue3",
		"body": [
			"<script setup lang=\"ts\">",
			"</script>",
			"",
			"<template>",
			"</template>",
			"",
			"<style lang=\"less\" scoped>",
			"</style>"
		],
		"description": "vue3 template"
	}
}

```

---

## VSCode 插件

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备 （也可以选择 Volar）
  - Vue3 推荐 Volar
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

---

## 开发工具

### 项目创建

[Vue CLI](https://github.com/vuejs/vue-cli) 可以生成使用 TypeScript 的新项目，开始：

```sh
# 1. Install Vue CLI, 如果尚未安装
pnpm install --global @vue/cli@next

# 2. 创建一个新项目, 选择 "Manually select features" 选项
vue create my-project-name

# 3. 如果已经有一个不存在TypeScript的 Vue CLI项目，请添加适当的 Vue CLI插件：
vue add typescript
```

请确保组件的 `script` 部分已将语言设置为 TypeScript：

```html
<script lang="ts">
  ...
</script>
```

或者，如果你想将 TypeScript 与 [JSX `render` 函数](https://v3.cn.vuejs.org/guide/render-function.html#jsx)结合起来：

```html
<script lang="tsx">
  ...
</script>
```

---

### DevTools

#### DevTools 无法加载源映射

> [DevTools 无法加载 SourceMap：XXXX.map 的内容:HTTP 错误: 状态代码 404，net::ERR_UNKNOWN_URL_SCHEM_caesarding07-CSDN博客_devtools 无法加载源映射](https://blog.csdn.net/qq_44628595/article/details/116061062)

![image-20220107101932334](http://cdn.ayusummer233.top/img/202201071019476.png)

扩展加载错误, 根据扩展 id 可以查到是这个:

![image-20220107102054923](http://cdn.ayusummer233.top/img/202201071020000.png)

关掉就好了

---
# Vite

> [开始 | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/)
>
> Vite 是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
>
> - 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
> - 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
>
> Vite 意在提供开箱即用的配置，同时它的 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 带来了高度的可扩展性，并有完整的类型支持。
>
> 你可以在 [为什么选 Vite](https://cn.vitejs.dev/guide/why.html) 中了解更多关于项目的设计初衷。

> [学习Vue3 第二章（配置环境）_qq1195566313的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122769982)

- `vite` 的优势

  `冷服务`:  默认的构建目标浏览器是能 [在 script 标签上支持原生 ESM](https://caniuse.com/es6-module) 和 [原生 ESM 动态导入](https://caniuse.com/es6-module-dynamic-import)

  HMR 速度快到惊人的 [模块热更新（HMR）](https://vitejs.cn/guide/features.html#hot-module-replacement)

  Rollup打包 它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的 并且支持大部分rollup插件

```powershell
pnpm create v
```

---

## 目录结构

> [学习Vue3 第三章（Vite目录 & Vue单文件组件）_qq1195566313的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122771007)

- `public` - 不会被编译, 放置静态资源

- `assets` - 存放可编译的静态资源

- `components` - 存放组件

- `App.vue` - 全局组件

- `main.ts` - 全局 ts 文件

- `index.html` - 非常重要的入口文件**（webpack，rollup 他们的入口文件都是enrty input 是一个 js文件 而 Vite 的入口文件是一个 html 文件，他刚开始不会编译这些js文件 只有当你用到的时候 如script src="xxxxx.js" 会发起一个请求被vite拦截这时候才会解析js文件）**

- `vite.config.ts` - vite 配置项

- `tsconfig.json` - TS 编译器配置

  > [详解TypeScript项目中的tsconfig.json配置 - 简书 (jianshu.com)](https://www.jianshu.com/p/0383bbd61a6b)

---

## 路径别名配置

> [(32) vite配置项目路径别名 - SegmentFault 思否](https://segmentfault.com/a/1190000041417219)

`vite.config.ts`:

```typescript
// vite.config.js/ts
import { join } from "path";
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})

```

`tsconfig.json`

```typescript
{
   // ...
  "compilerOptions": {
    // ...其他配置
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  // ...
}

```

如果你是刚创建的TypeScript项目，有可能会遇到`找不到模块“path”或其相应的类型声明`的错误提示，安装`@types/node`即可。

```shell
pnpm install @types/node --save-dev
```



---

## 单页面应用与多页面应用

> [前端：你要懂的单页面应用和多页面应用 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903512107663368)

![image-20220209225014834](http://cdn.ayusummer233.top/img/202202092250005.png)

---

## 开始

### 搭建一个 `Vite` 项目

> [开始 | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/#trying-vite-online)

> **兼容性注意:**
>
> Vite 需要 [Node.js](https://nodejs.org/en/) 版本 `>= 12.0.0`。然而，有些模板需要依赖更高的 `Node` 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 `Node` 版本。

- `npm`

  ```shell
   npm create vite@latest
  ```

- `yarn`

  ```shell
  yarn create vite
  ```

- `pnpm`

  ```shell
  pnpm create vite
  ```

---

## 部署静态站点

> [部署静态站点 | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/static-deploy.html#testing-the-app-locally)

### 构建应用

- `npm`

  ```shell
  npm run build
  ```

- `pnpm`

  ```shell
  pnpm run build
  ```

默认情况下，构建会输出到 `dist` 文件夹中。你可以部署这个 `dist` 文件夹到任何你喜欢的平台。

> ![image-20220325121425782](http://cdn.ayusummer233.top/img/202203251214892.png)

---

### 本地测试应用

当构建完成应用后, 可以通过运行 `npm run preview` 命令, 在本地测试该应用

```shell
# pnpm 与 npm 命令一般是相似的
npm run build
npm run preview

# pnpm
pnpm run build
pnpm run preview
```

`vite preview` 命令会在本地启动一个静态 Web 服务器，将 `dist` 文件夹运行在 `http://localhost:4173`。这样在本地环境下查看该构建产物是否正常可用就方便多了。

可以通过 `--port` 参数来配置服务的运行端口。

```json
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```

现在 `preview` 命令会将服务器运行在 `http://localhost:8080`。

---

## 环境变量与模式

> [环境变量和模式 | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/env-and-mode.html)

---

### 环境变量

Vite 在一个特殊的 **`import.meta.env`** 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

- **`import.meta.env.MODE`**: {string} 应用运行的[模式](https://cn.vitejs.dev/guide/env-and-mode.html#modes)。
- **`import.meta.env.BASE_URL`**: {string} 部署应用时的基本 URL。他由[`base` 配置项](https://cn.vitejs.dev/config/#base)决定。
- **`import.meta.env.PROD`**: {boolean} 应用是否运行在生产环境。
- **`import.meta.env.DEV`**: {boolean} 应用是否运行在开发环境 (永远与 `import.meta.env.PROD`相反)

---

#### 生产环境替换

在生产环境中，这些环境变量会在构建时被**静态替换**，因此，在引用它们时请使用**完全静态的字符串**。动态的 key 将无法生效。例如，动态 key 取值 `import.meta.env[key]` 是无效的。

它还将替换出现在 JavaScript 和 Vue 模板中的字符串。这本应是非常少见的，但也可能是不小心为之的。在这种情况下你可能会看到类似 `Missing Semicolon` 或 `Unexpected token` 等错误，例如当 `"process.env.NODE_ENV"` 被替换为 `""development": "`。有一些方法可以避免这个问题：

- 对于 JavaScript 字符串，你可以使用 unicode 零宽度空格 **`\u200b`** (一个看不见的分隔符)来分割这个字符串，例如： `'import.meta\u200b.env.MODE'`。
- 对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 [\<wbr> 标签](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)，例如：`import.meta.<wbr>env.MODE`。

---

### .env 文件

Vite 使用 [dotenv](https://github.com/motdotla/dotenv) 从你的 [环境目录](https://cn.vitejs.dev/config/#envdir) 中的下列文件加载额外的环境变量：

```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

![image-20220503175156811](http://cdn.ayusummer233.top/img/202205031751154.png)

> 环境加载优先级
>
> 一份用于指定模式的文件（例如 `.env.production`）会比通用形式的优先级更高（例如 `.env`）。
>
> 另外，Vite 执行时已经存在的环境变量有最高的优先级，不会被 `.env` 类文件覆盖。例如当运行 `VITE_SOME_KEY=123 vite build` 的时候。
>
> `.env` 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。

加载的环境变量也会通过 `import.meta.env` 以字符串形式暴露给客户端源码。

为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这个文件中：

```
DB_PASSWORD=foobar
VITE_SOME_KEY=123
```

只有 `VITE_SOME_KEY` 会被暴露为 `import.meta.env.VITE_SOME_KEY` 提供给客户端源码，而 `DB_PASSWORD` 则不会。

> ![image-20220503181037817](http://cdn.ayusummer233.top/img/202205031810991.png)
>
> 像 `Vben` 中的 `.env`, 这里所有的变量都会暴露出来

如果你想自定义 env 变量的前缀，请参阅 [envPrefix](https://cn.vitejs.dev/config/index.html#envprefix)。

> 安全注意事项
>
> `.env.*.local` 文件应是本地的，可以包含敏感变量。你应该将 `.local` 添加到你的 `.gitignore` 中，以避免它们被 git 检入。
>
> 由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，`VITE_*` 变量应该不包含任何敏感信息。

---

#### TypeScript 智能提示

默认情况下，Vite 在 [`vite/client.d.ts`](https://github.com/vitejs/vite/blob/main/packages/vite/client.d.ts) 中为 `import.meta.env` 提供了类型定义。随着在 `.env[mode]` 文件中自定义了越来越多的环境变量，你可能想要在代码中获取这些以 `VITE_` 为前缀的用户自定义环境变量的 TypeScript 智能提示。

要想做到这一点，你可以在 `src` 目录下创建一个 `env.d.ts` 文件，接着按下面这样增加 `ImportMetaEnv` 的定义：

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

### 模式

默认情况下，开发服务器 (`dev` 命令) 运行在 `development` (开发) 模式，而 `build` 命令则运行在 `production` (生产) 模式。

这意味着当执行 `vite build` 时，它会自动加载 `.env.production` 中可能存在的环境变量：

```
# .env.production
VITE_APP_TITLE=My App
```

在你的应用中，你可以使用 `import.meta.env.VITE_APP_TITLE` 渲染标题。

然而，重要的是要理解 **模式** 是一个更广泛的概念，而不仅仅是开发和生产。一个典型的例子是，你可能希望有一个 “staging” (预发布|预上线) 模式，它应该具有类似于生产的行为，但环境变量与生产环境略有不同。

你可以通过传递 `--mode` 选项标志来覆盖命令使用的默认模式。例如，如果你想为我们假设的 staging 模式构建应用：

```sh
vite build --mode staging
```

为了使应用实现预期行为，我们还需要一个 `.env.staging` 文件：

```
# .env.staging
NODE_ENV=production
VITE_APP_TITLE=My App (staging)
```

现在，你的 staging 应用应该具有类似于生产的行为，但显示的标题与生产环境不同。

> 比如 `Vben` 中的 `.env.test`
>
> ![image-20220503181616713](http://cdn.ayusummer233.top/img/202205031816937.png)

---

## 报错收集

#### `listen EACCES: permission denied 127.0.0.1:3000`

![image-20220208142918215](http://cdn.ayusummer233.top/img/202202081429374.png)

> [Too many reserved port for Hyper-V · Issue #5514 · microsoft/WSL (github.com)](https://github.com/microsoft/WSL/issues/5514)
>
> [windows subsystem for linux - How to fix `listen EACCES: permission denied` on any port - Super User](https://superuser.com/questions/1437780/how-to-fix-listen-eacces-permission-denied-on-any-port?newreg=cfbe3fc8d90b48579e87202a58f8679c)
>
> [Unable to bind ports: Docker-for-Windows & Hyper-V excluding but not using important port ranges · Issue #3171 · docker/for-win (github.com)](https://github.com/docker/for-win/issues/3171#issuecomment-554587817)
>
> [The default dynamic port range for TCP/IP has changed in Windows Vista and in Windows Server 2008 - Windows Server | Microsoft Docs](https://docs.microsoft.com/en-US/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang)

![image-20220208164408408](http://cdn.ayusummer233.top/img/202202081644610.png)

---

#### `找不到模块“vue”或其相应的类型声明。ts(2307)`

> [vue3 报错解决：找不到模块‘xxx.vue’或其相应的类型声明。（Vue 3 can not find module） - 小船二 - 博客园 (cnblogs.com)](https://www.cnblogs.com/JasmineHan/p/13673560.html)

使用 vite 构建 vue-ts 项目时发现该报错

![image-20220212003136197](http://cdn.ayusummer233.top/img/202202120031251.png)

原因在于 typescript 只能理解 .ts 文件，无法理解 .vue文件

解决方案: 在项目根目录或 `src` 文件夹下创建一个后缀为 `.d.ts` 的文件，并写入以下内容：

```typescript
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
```

然后发现本来就已经有了(

![image-20220212004458873](http://cdn.ayusummer233.top/img/202202120044180.png)

重启窗口后再看 `HelloWorld.vue`, 报错消失了😅

![image-20220212004613823](http://cdn.ayusummer233.top/img/202202120046085.png)

> PS: `App.vue` 里的错误是 `vuter` 报的, 使用 vue3 开发的话可以禁用 `vuter`, 使用 `volar`
>
> > [Volar - vue终极开发神器！ - 掘金 (juejin.cn)](https://juejin.cn/post/6966106927990308872)

---

# ESLint

> [代码检查工具！从 TSLint 到 ESLint - 掘金 (juejin.cn)](https://juejin.cn/post/6955025103507849223)
>
> [Roadmap: TSLint -> ESLint · Issue #4534 · palantir/tslint (github.com)](https://github.com/palantir/tslint/issues/4534)
>
> [typescript-eslint/typescript-eslint: Monorepo for all the tooling which enables ESLint to support TypeScript (github.com)](https://github.com/typescript-eslint/typescript-eslint)
>
> [Linting your TypeScript Codebase | TypeScript ESLint (typescript-eslint.io)](https://typescript-eslint.io/docs/linting/)

2019 年 1 月，`TypeScript` 官方决定全面采用 `ESLint`，之后也发布 `typescript-eslint` 项目，以集中解决 `TypeScript` 和 `ESLint` 兼容性问题。而之前的两个 `lint` 解决方案都将弃用：

- `typescript-eslint-parser` 已停止维护
- 在完成 `ESLint` 功能后，将弃用 `TSLint` 并帮助用户迁移到 `ESLint`

> ![image-20220402133014799](http://cdn.ayusummer233.top/img/202204021330104.png)

## 安装

```shell
pnpm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

> `@typescript-eslint/parser`为 `ESLint` 提供解析器。
>
> `@typescript-eslint/eslint-plugin` 它作为 `ESLint` 默认规则的补充，提供了一些额外的适用于 `ts` 语法的规则。

---

## 配置文件

`.eslintrc.js`

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
```

> 如上是最小化的一个配置文件
>
> - `parser: '@typescript-eslint/parser,'`
>
>   告诉 `ESLint` 使用 `@typescript-eslint/parser` 作为 `parser package`
>   
>   这可以使 `ESLint` 可以理解 `TypeScript` 语法
>   
>   不这样写的话会使 `ESLint` 像往常解析 `JS` 一样解析 `TS`, 自然就会报错
>   
> - ```js
>   plugins: [
>       '@typescript-eslint',
>   ],
>   ```
>
>   告诉 `ESLint` 加载安装好的 `@typescript-eslint/eslint-plugin` `plugin package`
>
>   这将允许你在代码库中使用这些 `rules`
>
> - ```js
>       extends: [
>           'eslint:recommended',
>           'plugin:@typescript-eslint/recommended',
>       ],
>   ```
>
>   `extends` 属性告诉 `ESLint` 你的配置 `extends(扩展)`  了给定配置
>
>   - `'eslint:recommended'` 是 `ESLint` 内置的 "推荐配置" ---- 他给出一个小的,合理的 `rules` 集, 这些 `rules` 是众所周知的最佳实践的 `lint`
>   - `'plugin:@typescript-eslint/recommended'` 是官方的 "建议配置" --- 它就像 `eslint:recomment` 一样, 只不过它只针对 `TypeScript-specific` 插件中的 `rules`
>
> ----
>
> `module` 报错: `'module' is not defined. eslint(no-undef)`
>
> ![image-20220402141356618](http://cdn.ayusummer233.top/img/202204021413088.png)
>
> [typescript-eslint config: .eslintrc file 'module' is not defined - Stack Overflow](https://stackoverflow.com/questions/63478122/typescript-eslint-config-eslintrc-file-module-is-not-defined)
>
> `env` 里加上 `node:true` 即可解决
>
> ```js
> module.exports = {
>     root: true,
>     parser: '@typescript-eslint/parser',         // Specifies the ESLint parser
>     plugins: [
>         '@typescript-eslint',
>     ],
>     extends: [
>         'eslint:recommended',
>         'plugin:@typescript-eslint/recommended',
>     ],
>     env: {
>         node: true  // 解决 module 报错
>     }
> };
> ```
>

---

### 配置 ignore files

在根目录下再创建一个 `.eslintignore` 文件, 它会告诉 `ESLint` 不要 `lint` 哪些文件(夹)

```eslintignore
# don't lint build output (make sure it's set to your correct build folder name)
dist
```



---

# Router

> [介绍 | Vue Router (vuejs.org)](https://next.router.vuejs.org/zh/introduction.html)
>
> Vue Router 是 [Vue.js](http://v3.vuejs.org/) 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：
>
> - 嵌套路由映射
> - 动态路由选择
> - 模块化、基于组件的路由配置
> - 路由参数、查询、通配符
> - 展示由 Vue.js 的过渡系统提供的过渡效果
> - 细致的导航控制
> - 自动激活 CSS 类的链接
> - HTML5 history 模式或 hash 模式
> - 可定制的滚动行为
> - URL 的正确编码

---

## 安装

```shell
pnpm install vue-router@4
```

> vue3 装 router4
>
> vue2 装 router3

![image-20220408220637494](http://cdn.ayusummer233.top/img/202204082206720.png)

---

## 入门

用 Vue + Vue Router 创建单页应用非常简单：通过 Vue.js，我们已经用组件组成了我们的应用。当加入 Vue Router 时，我们需要做的就是将我们的组件映射到路由上，让 Vue Router 知道在哪里渲染它们。下面是一个基本的例子：

在 `src` 目录下新建一个 `router` 文件夹, 新建一个 `index.ts` 文件

`src/router/index.ts`:

```typescript
//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: () => import('../components/HelloWorld.vue')
}, {
    path: '/marquee',
    component: () => import('../components/Marquee.vue')
}]

// 创建 router
const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router
```

在 `main.ts` 中引入并使用:

```typescript
// 引入 vue-router
import router from './router'
// 使用 router
app.use(router)
```

在 `App,vue` 中展示

```html
<router-view></router-view>
```

可以使用 `<router-link>` 添加跳转链接

```html
<router-link to="/marquee">跑马灯组件跳转</router-link>
```

> 请注意，我们没有使用常规的 `a` 标签，而是使用一个自定义组件 `router-link` 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。我们将在后面看到如何从这些功能中获益。
>
> ![msedge_ClbRzoAsDK](http://cdn.ayusummer233.top/img/202204082247577.gif)

---

## 路由模式

> [不同的历史模式 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/history-mode.html)
>
> [小满Router（第一章入门）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123585949?spm=1001.2014.3001.5502)

在创建路由器实例时，`history` 配置允许我们在不同的历史模式中进行选择。

```typescript
// 创建 router
const router = createRouter({
    history: createWebHistory(),
    routes
})
```



`Vue2 -> Vue3` 路由模式名称变化

|  Vue2   |         Vue3         |
| :-----: | :------------------: |
| history |   createWebHistory   |
|  hash   | createWebHashHistory |
| abstact | createMemoryHistory  |

---

### Hash 模式

它在内部传递的实际 URL 之前使用了一个哈希字符（`#`）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，**它在 SEO 中确实有不好的影响**。如果你担心这个问题，可以使用 HTML5 模式。

> [搜索引擎优化（搜索优化）_百度百科 (baidu.com)](https://baike.baidu.com/item/搜索引擎优化/3132)

---

### HTML5 模式

用 `createWebHistory()` 创建 HTML5 模式，**官方推荐使用这个模式**

当使用这种历史模式时，URL 会看起来很 "正常"，例如 `https://example.com/user/id`。漂亮!

不过，问题来了。由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 `https://example.com/user/id`，就会得到一个 404 错误。这就丑了。

不用担心：要解决这个问题，你需要做的就是在你的服务器上添加一个简单的回退路由。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 `index.html` 相同的页面。漂亮依旧!

---

## 命名路由

> [命名路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/named-routes.html)
>
> [小满Router（第二章-命名路由-编程式导航）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123589648)

除了 `path` 之外，你还可以为任何路由提供 `name`。这有以下优点：

- 没有硬编码的 URL
- `params` 的自动编码/解码。
- 防止你在 url 中出现打字错误。
- 绕过路径排序（如显示一个）

```typescript
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'helloWorld',
    component: () => import('../components/HelloWorld.vue')
}, {
    path: '/marquee',
    name: 'marquee',
    component: () => import('../components/Marquee.vue')
}]
```

官方示例:

```typescript
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```

要链接到一个命名的路由，可以向 `router-link` 组件的 `to` 属性传递一个对象：

```html
  <el-button>
    <router-link :to="{
      name: 'marquee'
    }">跑马灯组件跳转</router-link>
  </el-button>
```

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

这跟代码调用 `router.push()` 是一回事：

```js
router.push({ name: 'user', params: { username: 'erina' } })
```

在这两种情况下，路由将导航到路径 `/user/erina`。

> 还可以使用 a 标签进行跳转
> ```html
> <!-- 使用 a 标签跳转 -->
> <el-button>
>  <a href="/marquee">使用a标签跳转到跑马灯</a>
> </el-button>
> ```
>
> 使用 `router.push` 进行跳转
>
> ```html
>   <!-- 使用 router.push 跳转 -->
>   <el-button @click="switchToMarquee">使用router.push跳转到跑马灯</el-button>
> ```
>
> ```typescript
> // 引入 vue-router
> import router from '@/router'
> // 使用 router.push 跳转到跑马灯页面
> const switchToMarquee = (): void => {
>   router.push('/marquee')
> }
> ```
>
> 三种跳转方式中只有使用 a 标签进行跳转是在重新加载界面的情况下更改URL
>
> ![image-20220409211757607](http://cdn.ayusummer233.top/img/202204092118935.png)

---

## 编程式导航

> [编程式导航 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/navigation.html#编程式导航)
>
> [小满Router（第二章-命名路由-编程式导航）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123589648)

---

### 导航到不同位置

**注意：在 Vue 实例中，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

想要导航到不同的 URL，可以使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。

当你点击 `<router-link>` 时，内部会调用这个方法，所以点击 `<router-link :to="...">` 相当于调用 `router.push(...)` ：

|          声明式           |       编程式       |
| :-----------------------: | :----------------: |
| `<router-link :to="...">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

**注意**：如果提供了 `path`，`params` 会被忽略，上述例子中的 `query` 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 `name` 或手写完整的带有参数的 `path` ：

```js
const username = 'eduardo'
// 我们可以手动建立 url，但我们必须自己处理编码
router.push(`/user/${username}`) // -> /user/eduardo
// 同样
router.push({ path: `/user/${username}` }) // -> /user/eduardo
// 如果可能的话，使用 `name` 和 `params` 从自动 URL 编码中获益
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// `params` 不能与 `path` 一起使用
router.push({ path: '/user', params: { username } }) // -> /user
```

由于属性 `to` 与 `router.push` 接受的对象种类相同，所以两者的规则完全相同。

`router.push` 和所有其他导航方法都会返回一个 *Promise*，让我们可以等到导航完成后才知道是成功还是失败。在官方文档的 [Navigation Handling](https://router.vuejs.org/zh/guide/advanced/navigation-failures.html) 中有详细介绍。

---

## 历史记录

> [小满Router（第三章-历史记录）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123590884)

使用 `replace` 可以在不留下历史记录的情况下跳转页面

> 就是不支持前进回退了, 当不需要用户回退上个界面的时候可以使用这个, 比如登录后不需要再返回登录界面

```typescript
// 不留示例记录跳转
const switchToMarquee_no_record = (): void => {
  router.replace('/marquee')
}
```

```html
  <!-- 不留历史记录跳转 -->
  <el-button @click="switchToMarquee_no_record">不留历史记录跳转到跑马灯</el-button>
```

> ![msedge_cSoLw6uzxb](http://cdn.ayusummer233.top/img/202204100815795.gif)

当然, 同样的`前进` 和 `回退` 操作也是支持自定义按钮及层级的

```typescript
// 前进 1 级界面
const forward = (): void => {
  router.forward()
  // 或者 router.go(1)
}

// 回退 1 级界面
const back = (): void => {
  router.back()
  // 或者 router.go(-1)
}
```

```html
  <!-- 前进 1 级界面 -->
  <el-button @click="forward">前进 1 级界面</el-button>
  <!-- 回退 1 级界面 -->
  <el-button @click="back">回退 1 级界面</el-button>
```

> ![msedge_3pZIvCuV6y](http://cdn.ayusummer233.top/img/202204100824354.gif)

---

## 路由传参

> [小满Router（第四章-路由传参）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123613595)
>
> [将 props 传递给路由组件 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

query 传参和 params 传参的区别

- query 传参配置的是 path，而 params 传参配置的是name，在 params中配置 path 无效
- query 在路由配置不需要设置参数，而 params 必须设置
- query 传递的参数会显示在地址栏中
- params传参刷新会无效，但是 query 会保存传递过来的值，刷新不变 ;
- 路由配置

---

### query 路由传参

`GoodsWarehouse.vue`:

```vue
<script setup lang="ts">
import router from '@/router'
import { data } from './goods.json'

type good = {
    id: number;
    name: string;
    price: number;
}

// 转到商品详情页_path+query
const toGoodsDetail = (good: good) => {
    router.push({
        path: '/goodInfo',
        query: good
    })
}



</script>

<template>
    <div>
        <el-table :data=data>
            <el-table-column label="商品名称" prop="name" width="180">
            </el-table-column>
            <el-table-column label="商品价格" prop="price" width="180">
            </el-table-column>
            <!-- 商品id -->
            <el-table-column label="商品id" prop="id" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <!-- 跳转到商品详情页 -->
                <template #default="scope">
                    <el-button @click="toGoodsDetail(scope.row)" type="text">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="less" scoped>
</style>

```

> `el-table` 中可以使用插槽来获取单行数据

`GoodInfo.vue`:

```vue
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

</script>

<template>
    <div>
        <!-- 返回商品货仓界面 -->
        <el-button @click="router.push('/goodsWarehouse')">返回商品货仓界面</el-button>
        <el-row>
            id: {{ route.query.id }}
        </el-row>
        <el-row>
            商品名称 {{ route.query.name }}
        </el-row>
        <el-row>
            商品价格: {{ route.query.price }}
        </el-row>
    </div>
</template>

<style lang="less" scoped>
</style>
```

> 子界面使用 `useRoute().query.xx`获取传入数据

> ![msedge_gJMiVwzXow](http://cdn.ayusummer233.top/img/202204132052730.gif)

---

### 使用 Params 传参

```typescript
// 转到商品详情页_name+params
const toGoodsDetail_params = (good: good) => {
    router.push({
        name: 'goodInfo',
        params: good
    })
}
```

```html
        <!-- params 传参, route.params 接收参数 -->
        <el-card>
            <template #header>
                <div class="card-header">params 传参, route.params 接收参数</div>
            </template>
            <div>
                <el-row>
                    id: {{ route.params?.id }}
                </el-row>
                <el-row>
                    商品名称 {{ route.params?.name }}
                </el-row>
                <el-row>
                    商品价格: {{ route.params?.price }}
                </el-row>
            </div>
        </el-card>
```

> ![msedge_6mAt4yKKUJ](http://cdn.ayusummer233.top/img/202204132106174.gif)

---

### 动态路由

> [带参数的动态路由匹配 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#带参数的动态路由匹配)

设置动态路由:

```typescript
    {
        path: '/goodInfo/:id',
        name: 'goodInfo',
        component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
    }
```

```typescript
// 转到商品详情页_动态路由传id
const toGoodsDetail_dynamic = (good: good) => {
    router.push({
        name: 'goodInfo',
        params: {
            id: good.id
        }
    })
}
```

```typescript
import { useRoute, useRouter } from 'vue-router';
import { data } from './goods.json'

const route = useRoute();
const router = useRouter();

const item = data.find(v => v.id === Number(route.params.id))
```

```html
        <!-- 动态路由传参, 导入数据结合传入id提取目标数据 -->
        <el-card>
            <template #header>
                <div class="card-header">动态路由传参, 导入数据结合传入id提取目标数据</div>
            </template>
            <div>
                <el-row>
                    id: {{ item?.id }}
                </el-row>
                <el-row>
                    商品名称 {{ item?.name }}
                </el-row>
                <el-row>
                    商品价格: {{ item?.price }}
                </el-row>
            </div>
        </el-card>
```

> ![msedge_CVTuOI2ofJ](http://cdn.ayusummer233.top/img/202204132143962.gif)

> 动态路由传参也是通过 Params, 因此除了根据 id 定位 data 中的相应条目数据
>
> params 直接传一个 good 对象即可(good对象中有id属性, 默认会赋给id)
>
> > 只传 id 然后结合 data 取值可以通过网址直接访问具体商品的详情(网址里传了id)

---

## 嵌套路由

> [小满Router（第五章-嵌套路由）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123618719)

比如导航菜单栏做成父路由, 具体内容做成子路由

![image-20220415202911435](http://cdn.ayusummer233.top/img/202204152029712.png)

首先在路由表里把子路由嵌套进父路由的 `children` 属性中:

```typescript
    {
        path: '/goodsWarehouse',
        name: 'goodsWarehouse',
        component: () => import('@/components/GoodsWarehouse/footer.vue'),
        children: [
            {
                // path 设为空默认显示该子路由页面
                path: '',
                name: 'goodsWarehouseMain',
                component: () => import('@/components/GoodsWarehouse/GoodsWarehouse.vue')
            },
            {
                path: '/goodInfo/:id',
                name: 'goodInfo',
                component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
            }
        ]
    },
```

然后在组件中使用 `<router-view>` 展示子路由

`footer`:

```vue
<script setup lang="ts">
import router from '@/router'
</script>

<template>
    <el-card>
        <template #header>
            <div class="card-header">我是父路由</div>
            <div class="card-header">
                <!-- 跳转到货仓主界面 -->
                <el-button @click="router.push('/goodsWarehouse')">返回货仓主界面</el-button>
                <!-- 前往商品1详情页 -->
                <el-button @click="router.push('/goodInfo/1')">前往商品1详情页</el-button>
            </div>
        </template>
        <router-view></router-view>
    </el-card>
</template>

<style lang="less" scoped>
.card-header {
    // 文字居中
    text-align: center;
}
</style>
```

> ![image-20220415214306409](http://cdn.ayusummer233.top/img/202204152143958.png)
>
> ![msedge_69jPqzIooD](http://cdn.ayusummer233.top/img/202204152144041.gif)

---

## 命名视图

> [小满Router（第六章-命名视图）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123671069)
>
> [命名路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/named-routes.html)

命名视图和插槽比较像

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 `router-view` 没有设置名字，那么默认为 `default`。

```html
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 `components` 配置 (带上 **s**)：

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
})
```

---

在路由表上进行相关配置:

```typescript
    {
        path: '/namedVIew',
        name: 'namedView',
        component: () => import('@/components/NamedViewsTest/root.vue'),
        children: [{
            path: "user1",
            components: {
                default: () => import('@/components/NamedViewsTest/A.vue'),
            }
        },
            {
                path: "user2",
                components: {
                    b: () => import('@/components/NamedViewsTest/B.vue'),
                    c: () => import('@/components/NamedViewsTest/C.vue')
                }
            }
        ]
    }
```

> 这是由一组嵌套路由和两组命名视图组成的(

`A B C 组件` 中只有象征性的 `Component X` 字符串

`root.vue`:

```vue
<script setup lang="ts">
</script>

<template>
    <!-- 返回主界面 -->
    <el-button @click="$router.push('/')">返回主界面</el-button>
    <!-- 跳转到 user1 -->
    <el-button @click="$router.push('/namedView/user1')">跳转到 user1</el-button>
    <!-- 跳转到 user2 -->
    <el-button @click="$router.push('/namedView/user2')">跳转到 user2</el-button>
    <router-view></router-view>
    <router-view name="b"></router-view>
    <router-view name="c"></router-view>
</template>

<style lang="less" scoped>
</style>
```

> ![image-20220416095535247](http://cdn.ayusummer233.top/img/202204160955467.png)
>
> ![msedge_P5oKJvTUy9](http://cdn.ayusummer233.top/img/202204160955336.gif)
>
> `root.vue` 中的三个 `router-view` 第一个其实就是指 `default`, 如果在路由表的 `user2` 中加上 `default` 组件那么跳转到 `user2` 界面时就能看到三个组件界面了
>
> ```typescript
>             {
>                 path: "user2",
>                 components: {
>                     default: () => import('@/components/NamedViewsTest/A.vue'),
>                     b: () => import('@/components/NamedViewsTest/B.vue'),
>                     c: () => import('@/components/NamedViewsTest/C.vue')
>                 }
>             }
> ```
>
> ![image-20220416100053450](http://cdn.ayusummer233.top/img/202204161000639.png)

---

## 重定向和别名

> [小满Router（第七章-重定向-别名）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123697904)
>
> [重定向和别名 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)
>
> [Redirect and Alias | Vue Router (vuejs.org)](https://router.vuejs.org/guide/essentials/redirect-and-alias.html)

---

### 重定向

重定向可以用于将主页面路由重定向到想要作为默认页面的子页面路由上, 以 [命名视图](#命名视图) 中的例子为基准, 其主页面路由为 `/namedView`:

![image-20220416173721210](http://cdn.ayusummer233.top/img/202204161737466.png)

想要将 `namedView 主页面` 重定向到 `user1` 的话可以在路由表中加个 `redirect`:

```typescript
    {
        path: '/namedVIew',
        name: 'namedView',
        redirect:'/namedView/user1',
        component: () => import('@/components/NamedViewsTest/root.vue'),
        children: [{
            path: "user1",
            components: {
                default: () => import('@/components/NamedViewsTest/A.vue'),
            }
        },
            {
                path: "user2",
                components: {
                    b: () => import('@/components/NamedViewsTest/B.vue'),
                    c: () => import('@/components/NamedViewsTest/C.vue')
                }
            }
        ]
    }
```

> ![msedge_1NBz7cHtPj](http://cdn.ayusummer233.top/img/202204161803114.gif)

---

`redirect` 除了可以写路径字符串外还可以使用对象形式配置:

```typescript
redirect:{path:'/namedView/user1'},
```

以及函数形式(可以传参):

```typescript
redirect: to => {
    // console.log("函数形式重定向")
    return {
        path: '/namedView/user1',
        query: {
            name: '233'
        }
    }
},
```

---

### 别名

顾名思义可以给路由定义别名, 比如给 `namedView` 定义两个别名 `namedView1, namedView2` 可以在路由表中使用 `alias` 属性进行定义:

```typescript
path: '/namedVIew',
name: 'namedView',
// 别名
alias: ['/namedView1', '/namedView2'],
```

```html
<!-- 跳转到 namedView1 -->
<el-button @click="$router.push('/namedView1')">跳转到 namedView1</el-button>
<!-- 跳转到 namedView2 -->
<el-button @click="$router.push('/namedView2')">跳转到 namedView2</el-button>
```

> ![msedge_oDYgxZLJHR](http://cdn.ayusummer233.top/img/202204161821462.gif)

---

## 导航守卫

> [导航守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)
>
> [小满Router（第八章-导航守卫）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123699583)
>
> [Navigation Guards | Vue Router (vuejs.org)](https://router.vuejs.org/guide/advanced/navigation-guards.html)

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的。

所有的跳转和前进后退都会走导航守卫函数, 因此做路由权限用得比较多

### 全局前置守卫

比如在登录时存一个 `token`, 当直接通过路由访问界面时先判断当前路由是否在路由白名单中或者当前已登录(存了 token, 或者其他复杂的加密算法) 则放通路由, 否则重定位回登录界面

`main.ts`:

```typescript
// 定义路由白名单
const whiteList = ['/login', '/404', '/401', '/lock']

//  使用导航守卫
router.beforeEach((to, from, next) => {
    // 若路由在白名单内或者已经登录(有token), 则放通
    if (whiteList.indexOf(to.path) !== -1 || localStorage.getItem('token')) {
        next()
    } else {
        // 否则跳转到登录页面
        next('/login')
    }
})
```

路由表:

```typescript
// 导航守卫测试页面
{
    path: '/',
    name: 'login',
    alias: '/login',
    component: () => import('@/views/NavigationGuardTest/login.vue'),
},
// 导航守卫测试主页面(需要登录才能访问)(导航界面)
{
    path: "/navigation",
    name: "navigation",
    component: () => import("@/components/Navigation/Navigation.vue")
},
```

`login.vue`:

```vue
<script setup lang="ts">
import { reactive, ref, Ref } from 'vue'
import type { FormInstance, FormItemRule } from 'element-plus'
import { ElMessage } from 'element-plus'
import router from '@/router'

// 定义表单数据类型
type FormData = {
    account: string,
    password: string
}

// 定义表单验证规则
const form = ref<FormInstance>()

// 定义规则类型
type Rules = {
    [K in keyof FormData]?: Array<FormItemRule>
}

// 定义表单数据
const formLabelAlign = reactive<FormData>({
    // 账号
    account: '',
    // 密码
    password: '',
})

// 定义规则
const rules = reactive<Rules>({
    account: [
        {
            required: true,
            message: '请输入账号',
            type: 'string',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            type: 'string',
        },
    ],
})

// 密码输入框的显示状态
const showPassword: Ref<boolean> = ref(false)


//  登录函数
const login = (): void => {
    form.value?.validate((validate) => {
        if (validate) {
            // 跳转到首页
            router.push('/navigation')
            // 设置token
            localStorage.setItem('token', '1')
        } else {
            // 提示错误
            ElMessage.error('请检查表单错误')
        }
    })
}

</script>

<template>
    <div class="login">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <!-- 返回主界面 -->
                    <el-button @click="$router.push('/')">返回主界面</el-button>
                    Login
                </div>
            </template>
            <el-form :model="formLabelAlign" :rules="rules" ref="form">
                <el-form-item label="账号:" prop="account">
                    <el-input v-model="formLabelAlign.account" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <!-- <el-input type="password" v-model="formLabelAlign.password" /> -->
                    <el-input v-model="formLabelAlign.password" type="password" show-password show-password-icon
                        @click="showPassword = !showPassword" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <!-- 登录按钮 -->
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>

            </el-form>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-card {
    width: 480px;
}
</style>
```

> 这里使用了 `ElementPlus` 的表单控件并配了示例性质的表单校验
>
> ![msedge_qXVOGjzrg4](http://cdn.ayusummer233.top/img/202204171003267.gif)

---

### 全局后置钩子

和守卫不同的是，钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath)
})
```

它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。

它们也反映了 [navigation failures](https://router.vuejs.org/zh/guide/advanced/navigation-failures.html) 作为第三个参数：

```js
router.afterEach((to, from, failure) => {
  if (!failure) sendToAnalytics(to.fullPath)
})
```

---

## 路由元信息

> [路由元信息 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/meta.html)
>
> [小满Router（第九章-路由元信息）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123766639)

通过路由记录的 `meta` 属性可以定义路由的**元信息**。使用路由元信息可以在路由中附加自定义的数据，例如：

- 权限校验标识。
- 路由组件的过渡名称。
- 路由组件持久化缓存 (keep-alive) 的相关配置。
- 标题名称

我们可以在**导航守卫**或者是**路由对象**中访问路由的元信息数据。

比如我们给每个页面路由加一个 `meta` 属性, 其中包含一个 `title` 字段, 并在 `beforeEach` 中读取 `title` 并赋给当前界面标题:

`路由表`:

```typescript
// 导航守卫测试页面
{
    path: '/',
    name: 'login',
    alias: '/login',
    // 路由元信息
    meta: {
        title: '登录页面',
    },
    component: () => import('@/views/NavigationGuardTest/login.vue'),
},
// 导航守卫测试主页面(需要登录才能访问)(导航界面)
{
    path: "/navigation",
    name: "navigation",
    meta: {
        title: '组件导航页面'
    },
    component: () => import("@/components/Navigation/Navigation.vue")
},
    
// .....其他路由meta
    
// 定义 meta 中的属性类型, 以免后面使用时报类型错误
declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}

//  使用导航守卫(前置守卫)
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    // 挂载 LoadingBar 到 body 上(折中做法)
    render(LoadingBarVNode, document.body)
    LoadingBarVNode.component?.exposed?.startLoading()
    // 若路由在白名单内或者已经登录(有token), 则放通
    if (whiteList.indexOf(to.path) !== -1 || localStorage.getItem('token')) {
        next()
    } else {
        // 否则跳转到登录页面
        next('/login')
    }
})
```

> ![msedge_DOQ8qIlolX](http://cdn.ayusummer233.top/img/202204172206956.gif)

---

## 过渡动效

> [过渡动效 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/transitions.html)
>
> [小满Router（第十章-路由过渡动效）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123767240)

想要在路径组件上使用转场，并对导航进行动画处理，你需要使用 [v-slot API](https://router.vuejs.org/zh/api/#router-view-s-v-slot)：

```html
<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
```

比如结合 [Animate.css](https://animate.style/#usage) 来做一些路由入场动效:

首先在路由表里给每个路由的 `meta` 加上一个 `transition` 字段:

```typescript
// 导航守卫测试页面
{
    path: '/',
    name: 'login',
    alias: '/login',
    // 路由元信息
    meta: {
        title: '登录页面',
        transition: 'animate__fadeIn',
    },
    component: () => import('@/views/NavigationGuardTest/login.vue'),
},
// 导航守卫测试主页面(需要登录才能访问)(导航界面)
{
    path: "/navigation",
    name: "navigation",
    meta: {
        title: '组件导航页面',
        transition: 'animate__fadeIn',
    },
    component: () => import("@/components/Navigation/Navigation.vue")
},
    
    // ... 其他路由 transition.....
```

> 图省事每个路由的 `transition` 都填的淡入效果

然后在使用 `router-view` 时通过插槽解出 `route(当前路由信息)` 和 `Component(当前VNode)` 并使用过渡效果

```typescript
<script setup lang="ts">
import 'animate.css'
</script>
```

```html
<template>
  <!-- route 即路由信息, Component 即当前 VNode -->
  <router-view #default="{ route, Component }">
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
```

> ![msedge_L6Sb0mpZNj](http://cdn.ayusummer233.top/img/202204180919633.gif)

---

## 滚动行为

> [滚动行为 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#滚动行为)
>
> [小满Router（第十一章-滚动行为）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123770440)

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

> **注意: 这个功能只在支持 history.pushState 的浏览器中可用。**

当创建一个 Router 实例，你可以提供一个 `scrollBehavior` 方法:

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
```

比如想让路由跳转时记住当前页面滚动条位置并在下次回到当前页面时保持此位置(若无则默认滚动到顶部) 可以如下操作:

在路由表 `router` 创建时:

```typescript
// 创建 router
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log("savaPosition", savedPosition);
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})
```

> ![msedge_QUnJhZJs4x](http://cdn.ayusummer233.top/img/202204181005323.gif)

---

## 动态路由

> [小满Router（第十二章-动态路由）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123783173)
>
> [动态路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html)

对路由的添加通常是通过 [`routes` 选项](https://router.vuejs.org/zh/api/#routes)来完成的，但是在某些情况下，你可能想在应用程序已经运行的时候添加或删除路由。具有可扩展接口(如 [Vue CLI UI](https://cli.vuejs.org/dev-guide/ui-api.html) )这样的应用程序可以使用它来扩展应用程序。

> 常用于分权限, 比如不同用户看到的页面功能不同

---

# Vuex

> Vuex 是一个专为 Vue.js 应用程序开发的 **状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
>
> ### 什么情况下我应该使用 Vuex？
>
> Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
>
> 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 [store 模式](https://v3.cn.vuejs.org/guide/state-management.html#从零打造简单状态管理)就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：
>
> > Flux 架构就像眼镜：您自会知道什么时候需要它。

---

# Pinia

> [pinia_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/category_11672479.html)
>
> [Introduction | Pinia (vuejs.org)](https://pinia.vuejs.org/introduction.html)
>
> [技术胖-Pinia入门视频教程 全新一代状态管理工具Pinia -Vue3全家桶系列 (jspang.com)](https://jspang.com/article/82)

Pinia是Vue生态里Vuex的代替者，一个全新Vue的状态管理库, 是 Vue3 中推荐的状态管理库

> Pinia 也是 Vuex 的开发团队开发的

特点

- 支持 Vue3 和 Vue2

- 完整的 TS 支持
- 足够轻量, 压缩后体积只有 1kb 左右
- 去除 mutations, 只有 state, getter, actions
- actions 支持同步与异步
- 代码扁平化没有模板嵌套, 只有 store 的概念, store 之前可以自由使用, 每一个 store 都是独立的
- 无需手动添加 store, store 一旦创建会自动添加

---

## 安装

```shell
pnpm install pinia
```

引入注册 Vue3

`main.ts`:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
 
const store = createPinia()
let app = createApp(App)
 
 
app.use(store)
 
app.mount('#app')
```

---

## 使用

> [技术胖-Pinia入门视频教程 全新一代状态管理工具Pinia -Vue3全家桶系列 (jspang.com)](https://jspang.com/article/82)
>
> [学习Pinia 第二章（初始化仓库Store）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123342785)
>
> 

在 main.ts 中引入完 pinia 后就可以创建状态管理库了

再 `src` 目录下创建一个 `store ` 文件夹, 在其中创建一个 `index.ts` 文件, 用于

- 定义状态管理库
- 修改容器中的 `state`
- 仓库中 `action` 的使用

示例:

`@/store/store-names.ts`:

```typescript
export const enum Names{
    TEST = 'TEST'
}
```

`@/store/index.ts`

```typescript
import { defineStore } from 'pinia'
import { Names} from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    // state 存储全局状态
    state: () => {
        return {
            current: 1,
            name:'233'
        }
    },
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {
        
    },
    // methods, 可做同步异步, 提交state(用于修改 state 全局状态数据)
    actions: {
        
    }
})
```

`PiniaTest.vue`:

```vue
<script setup lang="ts">
import { useTestStore } from '@/store';

const useTest = useTestStore()
</script>

<template>
    <div>pinia:{{ useTest.current }} -- {{ useTest.name }}</div>
</template>

<style lang="less" scoped>
</style>
```

> ![image-20220403224742834](http://cdn.ayusummer233.top/img/202204032247528.png)

---

## Pinia 状态修改

五种修改方式, 比 vuex 的写法要简洁, 具体示例如下:

`@store/index.ts`

```typescript
import { defineStore } from 'pinia'
import { Names} from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    // state 存储全局状态
    state: () => {
        return {
            current: 1,
            name:'Cola'
        }
    },
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {
        
    },
    // methods, 可做同步异步, 提交state(用于修改 state 全局状态数据)
    actions: {
        // current++
        currentIncrement() {
            this.current++
        },
    }
})
```

`PiniaTest.vue`

```vue
<script setup lang="ts">
import { useTestStore } from '@/store';

const useTest = useTestStore()

// 直接修改属性值实现 useTest.current++
const useTestChange1 = () => {
  useTest.current++
}
// 方法2: 通过$patch 批量修改属性值
const useTestChange2 = () => {
  useTest.$patch({
    name: '马克杯',
    current: 10
  })
}
// 方法3: $patch 函数式写法
const useTestChange3 = () => {
  useTest.$patch( (state) => {
    state.name = '立牌'
    state.current = 5
  })
}
// 方法4: 通过原始对象修改整个实例(缺点在于需要修改state所有属性, 因此一般不建议使用)
const useTestChange4 = () => {
  useTest.$state = {
    name: '小夜灯',
    current: 7
  }
}
// 方法5: 通过 actions 修改
const useTestChange5 = () => {
  useTest.currentIncrement()
}
</script>

<template>
    <div>pinia: {{ useTest.name }} -- ${{ useTest.current }}</div>
    <button @click="useTestChange1">increment-直接修改属性值</button>
    <button @click="useTestChange2">通过$patch批量修改属性</button>
    <button @click="useTestChange3">$patch的函数式写法</button>
    <button @click="useTestChange4">通过原始对象修改整个实例</button>
    <button @click="useTestChange5">通过 actions 修改</button>
</template>

<style lang="less" scoped>
</style>
```

> ![image-20220404091331349](http://cdn.ayusummer233.top/img/202204040913862.png)
>
> ![](http://cdn.ayusummer233.top/img/202204040915730.gif)

---

## 解构 store

> [学习Pinia 第四章（解构store）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123365751)
>
> [技术胖-Pinia入门视频教程 全新一代状态管理工具Pinia -Vue3全家桶系列 (jspang.com)](https://jspang.com/article/82#toc5)
>
> [Using a store outside of a component | Pinia (vuejs.org)](https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications)

直接解构 store 的话没有响应性特性, 需要使用 storeToRefs 方法转换为响应式对象解构出来

```vue
<script setup lang="ts">
import { useTestStore } from '@/store';
// 导入 storeToRefs 以从 store 中获取响应式数据
import { storeToRefs } from 'pinia';
const useTest = useTestStore()

// 直接结构 useTest 不具有响应式特性
const { current, name } = useTest
// 通过 storeToRefs 将 store 中的数据转换为响应式数据
const { current: currentRef, name: nameRef } = storeToRefs(useTest)


// 直接修改属性值实现 useTest.current++
const useTestChange1 = () => {
    useTest.current++
}
// 方法2: 通过$patch 批量修改属性值
const useTestChange2 = () => {
    useTest.$patch({
        name: '马克杯',
        current: 10
    })
}
// 方法3: $patch 函数式写法
const useTestChange3 = () => {
    useTest.$patch((state) => {
        state.name = '立牌'
        state.current = 5
    })
}
// 方法4: 通过原始对象修改整个实例(缺点在于需要修改state所有属性, 因此一般不建议使用)
const useTestChange4 = () => {
    useTest.$state = {
        name: '小夜灯',
        current: 7
    }
}
// 方法5: 通过 actions 修改
const useTestChange5 = () => {
    useTest.currentIncrement()
}
</script>

<template>
    <div>
        <div>pinia: {{ useTest.name }} -- ${{ useTest.current }}</div>
        <button @click="useTestChange1">increment-直接修改属性值</button>
        <button @click="useTestChange2">通过$patch批量修改属性</button>
        <button @click="useTestChange3">$patch的函数式写法</button>
        <button @click="useTestChange4">通过原始对象修改整个实例</button>
        <button @click="useTestChange5">通过 actions 修改</button>
    </div>
    <div>
        <div>直接解构: name: {{ name }} --- current: {{ current }} --- 不具有响应式特性</div>
        <div>通过 storeToRefs 解构: name: {{ nameRef }} --- current: {{ currentRef }} --- 具有响应式特性</div>
    </div>
</template>

<style lang="less" scoped>
</style>
```

> ![](http://cdn.ayusummer233.top/img/202204041739489.gif)

原理和 `toRefs` 一样是给数据包一层`toRef`

---

在一个 store 中调用另一个 store 的方法和在 SFC 中调用 store 的方法一致:

`store-name.ts`:

```typescript
export const enum Names{
    TEST = 'TEST',
    STUDENT = 'STUDENT'
}
```

`student.ts`:

```typescript
import { defineStore } from 'pinia'
import { Names } from './store-name'

export const studentStore = defineStore(Names.STUDENT, {
    state: () => {
        return {
            stuNames: ['张三', '李四', '王五', '赵六', '田七']
        }
    }
})
```

`index.ts`:

```typescript
import { defineStore } from 'pinia'
import { Names } from './store-name'
import { studentStore } from './student'

export const useTestStore = defineStore(Names.TEST, {
    // state 存储全局状态
    state: () => {
        return {
            current: 1,
            name:'Cola'
        }
    },
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {
        
    },
    // methods, 可做同步异步, 提交state(用于修改 state 全局状态数据)
    actions: {
        // current++
        currentIncrement() {
            this.current++
        },
        // 打印 studentStore 的 name
        printStudentState() {
            console.log(studentStore().stuNames)
        }
    }
})
```

`PiniaTest.vue` 代码片段:

```typescript
import { useTestStore } from '@/store';
// 导入 storeToRefs 以从 store 中获取响应式数据
import { storeToRefs } from 'pinia';
const useTest = useTestStore()

// 调用 useTest actions 中的  printStudentState() 函数打印 studentSTore 中的 name
console.log('studentStoreName:')
useTest.printStudentState()
```

> ![image-20220404175644156](http://cdn.ayusummer233.top/img/202204041756354.png)

---

## Actions, getters

> [学习Pinia 第五章（Actions，getters）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123376269)
>
> [Getters | Pinia (vuejs.org)](https://pinia.vuejs.org/core-concepts/getters.html)
>
> [Actions | Pinia (vuejs.org)](https://pinia.vuejs.org/core-concepts/actions.html)
>
> [技术胖-Pinia入门视频教程 全新一代状态管理工具Pinia -Vue3全家桶系列 (jspang.com)](https://jspang.com/article/82#toc4)

### `Actions` 同步写法

`store-name.ts` 片段:

```typescript
export const enum Names{
    USER = 'USER'
}
```

`User.ts`:

```typescript
import { defineStore } from 'pinia'
import { Names } from './store-name'
import { studentStore } from './student'

type User = {
    name: string,
    age: number
}

let result: User = {
    name: "233",
    age: 21
}

export const userStore = defineStore(Names.USER, {
    // state 存储全局状态
    state: () => {
        return {
            user: <User>{},
            name:""
        }
    },
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {

    },
    // methods, 可做同步异步, 提交state(用于修改 state 全局状态数据)
    actions: {
        // 写个同步方法, setuser
        setUser() {
            console.log("设置user")
            this.user = result
        }
    }
})
```

`PiniaTest.vue` 片段:

```typescript
import { userStore } from '@/store/User'
const userTest = userStore()
// 调用 userTest 中的 setUser 函数设置 user
const changeUserByAction = () => {
    userTest.setUser()
}

```

```html
    <div>
        <p>actions-user: {{ userTest.user }}</p>
        <p>actions-name: {{ userTest.name }}</p>
        <p>getters:</p>
        <button @click="changeUserByAction">通过 action 修改 user</button>
    </div>
```

> ![image-20220404215502780](http://cdn.ayusummer233.top/img/202204042155736.png)
>
> ![](http://cdn.ayusummer233.top/img/202204042156011.gif)

---

### Actions 异步写法

`user.ts` 代码片段:

```typescript
        // 异步写法
        async setUserAsync() {
            const resultAsyn = await Login()
            this.user = resultAsyn
            this.setName("233Alter")
        },
        setName(name: string) {
            this.name = name
        }
```

`PiniaTest.vue`: 使用 ElementPlus 更新一波 UI:

```vue
<script setup lang="ts">
import { useTestStore } from '@/store';
import { userStore } from '@/store/User'
// 导入 storeToRefs 以从 store 中获取响应式数据
import { storeToRefs } from 'pinia';
// element-plus button 相关依赖
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

const userTest = userStore()
// 调用 userTest 中的 setUser 函数设置 user
const changeUserByAction = () => {
    userTest.setUser()
}

// 调用 userTest 中的 setUserAsync 函数设置 user
const changeUserByActionAsync = () => {
    userTest.setUserAsync()
}
const useTest = useTestStore()
// 调用 useTest actions 中的  printStudentState() 函数打印 studentSTore 中的 name
console.log('studentStoreName:')
useTest.printStudentState()

// 直接结构 useTest 不具有响应式特性
const { current, name } = useTest
// 通过 storeToRefs 将 store 中的数据转换为响应式数据
const { current: currentRef, name: nameRef } = storeToRefs(useTest)


// 直接修改属性值实现 useTest.current++
const useTestChange1 = () => {
    useTest.current++
}
// 方法2: 通过$patch 批量修改属性值
const useTestChange2 = () => {
    useTest.$patch({
        name: '马克杯',
        current: 10
    })
}
// 方法3: $patch 函数式写法
const useTestChange3 = () => {
    useTest.$patch((state) => {
        state.name = '立牌'
        state.current = 5
    })
}
// 方法4: 通过原始对象修改整个实例(缺点在于需要修改state所有属性, 因此一般不建议使用)
const useTestChange4 = () => {
    useTest.$state = {
        name: '小夜灯',
        current: 7
    }
}
// 方法5: 通过 actions 修改
const useTestChange5 = () => {
    useTest.currentIncrement()
}
</script>

<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">基础 state 修改测试, actions 测试</div>
            </template>
            <el-row>pinia: {{ useTest.name }} -- ${{ useTest.current }}</el-row>
            <el-row>直接解构: name: {{ name }} --- current: {{ current }} --- 不具有响应式特性</el-row>
            <el-row>通过 storeToRefs 解构: name: {{ nameRef }} --- current: {{ currentRef }} --- 具有响应式特性</el-row>
            <el-row>
                <el-button type="primary" @click="useTestChange1">increment-直接修改属性值</el-button>
                <el-button type="primary" @click="useTestChange2">通过$patch批量修改属性</el-button>
                <el-button type="primary" @click="useTestChange3">$patch的函数式写法</el-button>
            </el-row>
            <el-row>
                <el-button type="primary" @click="useTestChange4">通过原始对象修改整个实例</el-button>
                <el-button type="primary" @click="useTestChange5">通过 actions 修改 current++</el-button>
            </el-row>
        </el-card>
    </div>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">actions 同/异步写法, getters 测试</div>
            </template>
            <p>actions-user: {{ userTest.user }}</p>
            <p>actions-name: {{ userTest.name }}</p>
            <p>getters:</p>
            <el-button @click="changeUserByAction">通过 action 修改 user</el-button>
            <el-button @click="changeUserByActionAsync">通过 action 异步修改 user</el-button>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
.card-header {
    // 文字居中
    text-align: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 620px;
}
</style>
```

> ![image-20220405080944278](http://cdn.ayusummer233.top/img/202204050809673.png)
>
> ![](http://cdn.ayusummer233.top/img/202204050826567.gif)

---

### getters

actions 可用于修改 state, 而 getters 可用于修饰 state 并返回修饰结果

`User.ts` 代码片段:

```typescript
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {
        newName(): string {
            return `$ - 名: ${this.name} - 年龄: ${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },
```

`PiniaTest.vue`代码片段:

```html
        <el-card class="box-card">
            <template #header>
                <div class="card-header">actions 同/异步写法, getters 测试</div>
            </template>
            <p>actions-user: {{ userTest.user }}</p>
            <p>actions-name: {{ userTest.name }}</p>
            <p>getters: {{ userTest.newName }}</p>
            <el-button @click="changeUserByAction">通过 action 修改 user</el-button>
            <el-button @click="changeUserByActionAsync">通过 action 异步修改 user</el-button>
        </el-card>
```

> ![](http://cdn.ayusummer233.top/img/202204050826567.gif)

---

## PInia 插件

>[学习Pinia 第七章（pinia插件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123431769)

pinia 和 vuex 都有一个通病 页面刷新状态会丢失, 所以要做下持久化插件

`main.ts` 代码片段:

```typescript
import { createApp, toRaw } from 'vue'

import { createPinia, PiniaPluginContext } from 'pinia'


type Options = {
    key?:string
}
// 默认配置
const __piniaKey__ = 'yusummer'

// 将 key 存入 localstorage
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// 根据 key 从 localstorage 获取数据
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : null
}

// 定义 pinia 插件
const piniaPlugin = (options:Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context;
        // 从 localstorage 获取数据
        const data = getStorage(`${options.key ?? __piniaKey__}-${store.$id}`) 
        console.log(data)
        // state 有变化时, 将数据存入 localstorage
        store.$subscribe(() => {
            setStorage(`${options.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })
        
        console.log("store", store)

        return {
            ...data
        }
    }
}

// export const app = createApp(App)
const app = createApp(App)
// 使用 ElementPlus 插件
app.use(ElementPlus)

// 引入 pinia
const store = createPinia()
store.use(piniaPlugin({
    key: 'pinia'
}))
```

> [DailyNotes/HTML&CSS.md at main · Ayusummer/DailyNotes (github.com)](https://github.com/Ayusummer/DailyNotes/blob/main/前端/HTML%26CSS.md#windowlocalstorage)
>
> ![msedge_2RktLwJ26F](http://cdn.ayusummer233.top/img/202204071059859.gif)



---

## API

> [学习Pinia 第六章（API）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123402377)

---

### $reset

无参函数, 用于重置 state 状态

```html
<el-button @click="userTest.$reset()">通过 $reset 重置 userTest 到初始状态</el-button>
```

> ![](http://cdn.ayusummer233.top/img/202204050927720.gif)

---

### $subscribe

订阅 state 更新

`PiniaTest.vue` 代码片段:

```typescript
// 通过 $subscribe 订阅 state 的改变
userTest.$subscribe((args, state) => {
    console.log(args)
    console.log('userTest state:', state)
})
```

> ![](http://cdn.ayusummer233.top/img/202204050929731.gif)
>
> `$subscribe` 还有第二个参数, 目前暂时没用到就没做记录, 详见[学习Pinia 第六章（API）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123402377)

---

### $onAction

只要有 action 被调用就会执行该函数

`PiniaTest.vue` 代码片段:

```typescript
// 当有 action 执行时便会执行 $onAction 函数
userTest.$onAction((args) => {
    console.log("有 action 执行了 ↓")
    console.log(args)
    console.log("有 action 执行了 ↑")
})
```

> ![](http://cdn.ayusummer233.top/img/202204050939211.gif)
>
> `$onAction` 还有第二个参数, 目前暂时没用到就没做记录, 详见[学习Pinia 第六章（API）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123402377)

---

# Less

> [学习Vue3 第十三章（实操组件和认识less 和 scoped）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122832888)
>
> [Less 快速入门 | Less.js 中文文档 - Less 中文网 (bootcss.com)](https://less.bootcss.com/#概览)
>
> [十分钟看懂Css、less和Sass（SCSS）的区别 - IT界新人 - 博客园 (cnblogs.com)](https://www.cnblogs.com/a1231230/p/12107592.html)

**Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。**

`Less` 和 `CSS` 非常像, 且仅对 `CSS` 增加了少许方便的扩展, 比较容易学习

- *有关 Less 语言特性的详细文档，请参阅 [Less 语言特性](https://less.bootcss.com/features/) 章节*
- *有关 Less 内置函数的列表，请参阅 [Less 函数手册](https://less.bootcss.com/functions/) 章节*
- *有关详细的使用说明，请参阅 [Less.js 用法](https://less.bootcss.com/usage/) 章节*
- *有关第三方工具的详细信息，请参阅 [工具](https://less.bootcss.com/tools/) 章节*

在 `vue` 文件中使用 `less` 只需要在 `style` 标签中注明即可

```vue
<style lang="less">
 
</style>
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
> 可能会报缺少 webpack, 可以在开发环境下装下webpack
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
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    
    ```

- `src\main.ts` 引入 `reset.less`:

  ```typescript
  import { createApp } from 'vue'
  import App from './App.vue'
  import './assets/css/reset.less'
  
  createApp(App).mount('#app')
  
  ```

- `src\layout_less\less_layout.vue`:

  ```vue
  <script setup lang="ts">
  import lessMenu from './Menu/lessMenu.vue'
  import lessHeader from './Header/lessHeader.vue'
  import lessContent from './Content/lessContent.vue'
  
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
  <script setup lang="ts">
  </script>
  
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
  <script setup lang="ts">
  </script>
  
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
  <script setup lang="ts">
  </script>
  
  <template>
      <div class="content_layout">
          <div class="content_layout-items" :key="item" v-for="item in 100">{{ item }}</div>
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

# `Animate.css`

> [Animate.css | A cross-browser library of CSS animations.](https://animate.style/)

## 安装与使用

```shell
pnpm install webpack
pnpm install animate.css
```

使用 `pnpm` 安装在组建中导入 `css` 即可使用

```typescript
import 'animate.css'
```

---

## 结合 `vue3 transition` 使用

安装了依赖并在组建中导入后在使用 `<transition>` 时指定 `enter-active-class` 与 `leave-active-class` 来使用 `animate.css` 的动效, 如:

```html
    <transition 
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__fadeOut"
    >
        <div v-if="flag" class="box"></div>
    </transition>
```

> 完整代码详见 [内置组件-transition中的相关内容](#结合 Animate.css 使用)
>
> ![](http://cdn.ayusummer233.top/img/202203291950307.gif)

---

# GreenSock

> [学习Vue3 第二十一章（transition动画组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123000653)
>
> [GreenSock | Docs | GSAP](https://greensock.com/docs/v3/GSAP)

一个强大的 JS 动画库

- 安装

  ```shell
  pnpm install gsap
  ```

---

# Lodash

> [Lodash 简介 | Lodash 中文文档 | Lodash 中文网 (lodashjs.com)](https://www.lodashjs.com/)

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

- 安装:

  ```shell
  pnpm install lodash -S
  pnpm install @types/lodash -D
  ```

---

# VueUse

> [Get Started | VueUse](https://vueuse.org/guide/)

`VueUse` 是一个基于 [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) 的实用函数的合集

- 安装

  ```shell
  pnpm install @vueuse/core
  ```

  

---

# TSX

> [JSX · TypeScript中文网 · TypeScript——JavaScript的超集 (tslang.cn)](https://www.tslang.cn/docs/handbook/jsx.html)
>
> [学习Vue3 第二十五章（TSX）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123172735)
>
> [(为什么 Vue3 的组件库都在使用 jsx/tsx？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/436260027)

[JSX](https://facebook.github.io/jsx/)是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX因[React](https://reactjs.org/)框架而流行，但也存在其它的实现。 TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。

在此之前使用的是 Template去写模板。现在可以扩展另一种风格: `TSX风格`

vue2 的时候就已经支持 jsx 写法，只不过不是很友好，随着 vue3 对[typescript](https://so.csdn.net/so/search?q=typescript&spm=1001.2101.3001.7020)的支持度，tsx 写法越来越被接受

- 安装

  ```pnpm
  pnpm install @vitejs/plugin-vue-jsx -D
  ```

> `TODO`: 感觉暂时没有上 JSX/TSX 的需求, 后面切实需要用到时再看看吧
>
> 至少目前大部分业务场景都可以直接 template 写

---

# auto-import

> [antfu/unplugin-auto-import: Auto import APIs on-demand for Vite, Webpack and Rollup (github.com)](https://github.com/antfu/unplugin-auto-import)
>
> [学习Vue3 第二十六章（深入v-model）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123187523)

- 安装

  ```shell
  pnpm i -D unplugin-auto-import
  ```

- `vite 配置`

  ```typescript
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import VueJsx from '@vitejs/plugin-vue-jsx'
  import AutoImport from 'unplugin-auto-import/vite'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue(),VueJsx(),AutoImport({
      imports:['vue'],
      dts:"src/auto-import.d.ts"
    })]
  })
  ```

---

# ElementPlus

> [Button 按钮 | Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/component/button.html)

- `安装`

  ```shell
  pnpm install element-plus
  pnpm i @types/lodash-es@"*"
  ```

- `main.ts` 引入

  ```typescript
  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'
  
  ```

使用的时候直接在官网 cpoy 代码使用即可(可能有的组件会要求再装一些库)

---

## backtop 踩坑记录

> [Element-ui Backtop组件使用正确姿势 - 简书 (jianshu.com)](https://www.jianshu.com/p/b40d98535c10)
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
        >UP</el-backtop>
```

如果滚动对象是 `div` 的话可以将 `target` 定位到 `div` 的 `class`

![image-20220406211804219](http://cdn.ayusummer233.top/img/202204062118528.png)

```html
<el-backtop target=".box" :right="40" :bottom="40" :visibility-height="1">UP</el-backtop>
```

![msedge_b09VxKHBwD](http://cdn.ayusummer233.top/img/202204062119433.gif)

---

## 表单

### 表单校验

先装下 `async-validator`:

```shell
pnpm i async-validator
```



---

# Scoped 与样式穿透

> [学习Vue3 第三十二章（详解Scoped和样式 穿透）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123319462)
>
> [SFC CSS Features | Vue.js (vuejs.org)](https://vuejs.org/api/sfc-css-features.html#scoped-css)

主要用于修改组件库的样式

`VUE` 中的 `scoped` 通过在 `DOM` 结构以及 `css` 样式上加唯一不重复的标记的方式，以保证唯一（而这个工作是由过 `PostCSS` 转译实现的），达到样式私有化模块化的目的。

`scoped` 三条渲染规则：

- 给 HTML 的 DOM 节点加一个不重复 data 属性来表示其唯一性

- 在每句 css 选择器的末尾（编译后的生成的css语句）加一个当前组件的 data 属性选择器来私有化样式

- 如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性

PostCSS 会给一个组件中的所有 dom 添加一个独一无二的动态属性 data-v-xxxx，然后，给 CSS 选择器额外添加一个对应的属性选择器来选择该组件中 dom，这种做法使得样式只作用于含有该属性的 dom——组件内部dom, 从而达到了'样式模块化'的效果.

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

<script setup lang="ts">
</script>

<style scoped lang="less">
.ipt{
  // 样式穿透修改 input 样式
  :deep(input){
    background-color:red;
  }
}
</style>
```

> ![image-20220402213512868](http://cdn.ayusummer233.top/img/202204022135656.png)

---

# 自定义全局插件

> [学习Vue3 第三十章（编写Vue3插件）_小满zs的博客-CSDN博客_vue3插件写法](https://blog.csdn.net/qq1195566313/article/details/123300264)
>
> [插件 | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/guide/reusability/plugins.html#plugins)
>
> [插件 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/plugins.html#插件)
>
> [Plugins | Vue.js (vuejs.org)](https://vuejs.org/guide/reusability/plugins.html#plugins)

插件是一种呢能够为 Vue 添加全局功能的工具代码

- 会用插件

  ```typescript
  import { createApp } from 'vue'
  
  const app = createApp({})
  
  app.use(myPlugin, {
    /* 可选的选项 */
  })
  ```

插件是一个拥有 `install()` 方法的对象, 或者简单的就只是一个函数, 它自己就是安装函数

, 接收应用实例和传递给 `app.use()` 的额外选项

```typescript
const myPlugin = {
  install(app, options) {
    // 配置此应用
  }
}
```

---

`示例: 写一个 loading 插件`:

`AnotherLoading.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'

let isShow = ref<boolean>(false)

const show = () => {
    isShow.value = true
}

const hide = () => {
    isShow.value = false
}

defineExpose({
    show,
    hide,
    isShow
})
</script>

<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">loading...</div>
    </div>
</template>

<style lang="less" scoped>
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        font-size: 30px;
        color: #fff;
    }
}
</style>
```

`AnotherLoading.ts`

```typescript
import {App, createVNode, VNode, render} from 'vue'
import AnotherLoading from './AnotherLoading.vue'

export default {
    install(app: App) {
        const vnode: VNode = createVNode(AnotherLoading)
        render(vnode, document.body)
        console.log(AnotherLoading)
        console.log(vnode.component?.exposed)
        app.config.globalProperties.$AnotherLoading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }
        // app.config.globalProperties.$AnotherLoading.show()
    }
}
```

`main.ts`

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Card from './components/Card.vue'
import AnotherLoading from './components/AnotherLoading/AnotherLoading'

// export const app = createApp(App)
const app = createApp(App)


// 定义 Filter 类型, 作为 $filters 的返回类型
type Filter = {
    format: <T>(str: T) => string
}

// Loading 插件类型定义
type ALP = {
    show: () => void,
    hide: () => void
}

// 添加声明
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env: string
        // Loading 插件
        $AnotherLoading: ALP
    }
}

// 注册全局过滤器
app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `233${str}`;
    }
}

app.config.globalProperties.$env = 'dev'

// 注册 Loading 插件
app.use(AnotherLoading)

// 注册全局组件以及别名
app.component('Card', Card)
    .mount('#app')


```

`AnotherLoadingTest.vue`

```vue
<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance } from 'vue';

const { appContext } = getCurrentInstance() as ComponentInternalInstance

const showLoading = () => {
    console.log(appContext)
    appContext.config.globalProperties.$AnotherLoading.show()
    setTimeout(() => {
        appContext.config.globalProperties.$AnotherLoading.hide()
    }, 2000)
}
</script>

<template>
    <div>
        <button @click="showLoading">切换</button>
    </div>
</template>

<style lang="less" scoped>
</style>
```

> ![](http://cdn.ayusummer233.top/img/202204021731338.gif)

---

# 组件系统

> [介绍 | Vue.js (vuejs.org)-组件化应用构建](https://v3.cn.vuejs.org/guide/introduction.html#组件化应用构建)
>
> [学习Vue3 第十二章（认识组件&Vue3生命周期）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122811060)

组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：

![image-20220209222312257](http://cdn.ayusummer233.top/img/202202092223441.png)

> 每一个 vue 文件都可以充当组件来使用, 每一个组件都可以复用

> 例如:
>
> 在组件 `App.vue` 中通过 `Prop` 传数据给 `msg` 调用 `HelloWorld.vue` 组件
>
> > [组件基础-通过 Prop 向子组件传递数据 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/component-basics.html#通过-prop-向子组件传递数据)
>
> ![image-20220214183148443](http://cdn.ayusummer233.top/img/202202141831137.png)
>
> ![image-20220214183318826](http://cdn.ayusummer233.top/img/202202141833363.png)
>

---

## 生命周期

下图展示了实例的生命周期。我们不需要立马弄明白所有的东西，不过随着不断学习和使用，它的参考价值会越来越高。

![实例的生命周期](https://v3.cn.vuejs.org/images/lifecycle.svg)

---

## 单文件组件SFC(Single File Component)

> [学习Vue3 第三章（Vite目录 & Vue单文件组件）_qq1195566313的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122771007)
>
> [单文件组件  | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/sfc-script-setup.html)

`<script setup>` 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。相比于普通的 `<script>` 语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

---

`*.vue` 组件都由三种类型的顶层语法块所组成：`<template>`、`<script>`、`<style>`

- `<template>`
  - 每个 `*.vue` 文件最多可同时包含一个顶层 `<template>` 块。
  - 其中的内容会被提取出来并传递给 `@vue/compiler-dom`，预编译为 JavaScript 的渲染函数，并附属到导出的组件上作为其 `render` 选项。
  
- `<script>`
  - 每一个 `*.vue` 文件最多可同时包含一个 `<script>` 块(不包括`<script setup>`)
  - 该脚本将作为 ES Module 来执行。
  - 其**默认导出**的内容应该是 Vue 组件选项对象，它要么是一个普通的对象，要么是 [defineComponent](https://v3.cn.vuejs.org/api/global-api.html#definecomponent) 的返回值。
  
- `<script setup>`
  - 每个 `*.vue` 文件最多可同时包含一个 `<script setup>` 块 (不包括常规的 `<script>`)
  - 该脚本会被预处理并作为组件的 `setup()` 函数使用，也就是说它会在每个组件实例中执行。`<script setup>` 的顶层绑定会自动暴露给模板。更多详情请查看[单文件组件  | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/sfc-script-setup)
  
- `<style>`

  > [单文件组件样式特性 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/sfc-style.html)

  - 一个 `*.vue` 文件可以包含多个 `<style>` 标签。
  - `<style>` 标签可以通过 scoped 或 module attribute 将样式封装在当前组件内。多个不同封装模式的 `<style>` 标签可以在同一个组件中混

---

### 基本语法

```vue
<script setup>
console.log('hello script setup')
</script>
```

里面的代码会被编译成组件 `setup()` 函数的内容。这意味着与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在**每次组件实例被创建的时候执行**

 

---

## 模板语法

### `v-on`

> [Web/03-v-on的事件修饰符.md at master · qianguyihao/Web (github.com)](https://github.com/qianguyihao/web/blob/master/12-Vue基础/03-v-on的事件修饰符.md)
>
> [JS事件冒泡 (biancheng.net)](http://c.biancheng.net/view/8245.html)
>
> [指令 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/directives.html#v-on)

- 修饰符

  - `.stop` 阻止冒泡。调用 `event.stopPropagation()`。

  - `.prevent` 阻止默认事件（默认行为）。本质是调用 event.preventDefault()。

  - `.capture` 添加事件监听器时，使用捕获的方式（也就是说，事件采用捕获的方式，而不是采用冒泡的方式）。

  - `.self` 只有当事件在该元素本身（比如不是子元素）触发时，才会触发回调。

  - `.once` 事件只触发一次。

  - `.{keyCode | keyAlias}` 只当事件是从侦听器绑定的元素本身触发时，才触发回调。

  - `.native` 监听组件根元素的原生事件。

> PS：一个事件，允许同时使用多个事件修饰符。

---

### `.stop`

![image-20220224092027021](http://cdn.ayusummer233.top/img/202202240920741.png)

此代码冲存在冒泡现象, 当点击字标签(绿色区域)时父标签也被触发, 如果不想让字标签的点击事件冒泡到父标签可以给字标签添加一个事件修饰符 `.stop` 阻止冒泡

> 事件冒泡：当一个元素接收到事件时，会把它接收到的事件逐级向上传播给它的祖先元素，一直传到顶层的 window 对象（关于最后传播到的顶层对象，不同浏览器有可能不同，例如 IE9 及其以上的 IE、FireFox、Chrome、Safari 等浏览器，事件冒泡的顶层对象为 window 对象，而 IE7/8 顶层对象则为 document对象）。
>
> 例如，在 Chrome 浏览器中，当用户单击了<div>元素，click 事件将按照 <div>→<body>→<html>→document→window 的顺序进行传播，如图 1 所示。事件冒泡可以形象地比喻为把一块石头投入水中，泡泡会一直从水底冒出水面，也就是说从下向上开始传播。
>
> ![image-20220224092651971](http://cdn.ayusummer233.top/img/202202240926187.png)
>
> 事件冒泡对所有浏览器都是默认存在的，且由元素的 HTML 结构决定，而不是由元素在页面中的位置决定，所以即便使用定位或浮动使元素脱离父元素的范围，单击元素时，其依然存在冒泡现象。

![image-20220224094027373](http://cdn.ayusummer233.top/img/202202240940558.png)

> 只是不想触发父组件的单击事件时也可以使用 `.self` 将父组件的单击事件设置为仅当自己被点击时触发 
>
> ![image-20220224095055036](http://cdn.ayusummer233.top/img/202202240950223.png)

---

### `v-model`

- `v-bind` 可以实现数据的**单向**绑定
- `v-model` 可以实现数据的**双向**绑定

> `v-model` 只能运用在**表单元素**中，或者用于自定义组件。常见的表单元素包括：`input(radio, text, address, email....) 、select、checkbox 、textarea`

---

#### 计算器示例

```vue
<!-- v-model 实现简易计算器, v-model 双向绑定示例 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'

const n1: Ref<number> = ref(0)
const n2: Ref<number> = ref(0)
const result: Ref<number> = ref(0)
const opt: Ref<string> = ref('+')

const message: Ref<string> = ref("v-model字符串")

const calculate = (): void => {
    switch (opt.value) {
        case '+':
            result.value = n1.value + n2.value
            break
        case '-':
            result.value = n1.value - n2.value
            break
        case '*':
            result.value = n1.value * n2.value
            break
        case '/':
            result.value = n1.value / n2.value
            break
        default:
            break
    }
}

</script>

<template>
    {{ result }}
    <input type="number" v-model="n1" />
    <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" v-model="n2" />
    <input type="button" value="=" @click="calculate" />
    <input type="number" v-model="result" />

    <input v-model="message" type="text" />
    <div>{{ message }}</div>
</template>

<style scoped>
</style> 
```



![image-20220228153518969](http://cdn.ayusummer233.top/img/202202281535505.png)

![image-20220301085411622](http://cdn.ayusummer233.top/img/202203010854905.png)

---

### `v-bind`

> [学习Vue3 第四章（模板语法 & vue指令）_qq1195566313的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122773486)

`v-bind` 绑定 `style` 样例:

```vue
<!-- v-bind 示例 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'

let flag: Ref<boolean> = ref(false)

type Cls = {
    other: boolean,
    h: boolean
}

const flag1: Cls = {
    other: false,
    h: true
}


type Style = {
    height: string,
    color: string
}

const style: Style = {
    height: "300px",
    color: "blue"
}

</script>

<template>
    <!-- v-model 下拉菜单绑定 flag -->
    <select v-model="flag">
        <option type="string" value="true">true</option>
        <option type="string" value="false">false</option>
    </select>
    <!-- 绑定样式 -->
    <div :class="[flag ? 'active' : 'other', 'h']">12323</div>
    <!-- 利用元组进行样式绑定 -->
    <div :class="flag1">{{ flag1 }}</div>
    <div :style="style">2222</div>
</template>

<style scoped>
.active {
    color: red;
}
.other {
    color: blue;
}
.h {
    height: 300px;
    border: 1px solid #ccc;
}
</style>

```

![image-20220228223823608](http://cdn.ayusummer233.top/img/202202282238402.png)

---

## 父子组件传参

父组件通过 `v-bind` 绑定一个数据，然后子组件通过 `defineProps` 接受传过来的值，

### 传递字符串

字符串传递可以直接在父组件调用子组件的之后写个字符串上去;

例如在父组件 `less_layout` 中调用子组件 `lessMenu` 时传一个字符串 `message` 过去

```vue
<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'

</script>

<template>
    <div class="layout_less">
        <lessMenu message="传递一个字符串" />
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

子组件 `lessMenu`  则通过 `defineProps` 来接收父组件传递过来的值

> `defineProps` 是无需引入的直接使用即可

使用 `TypeScript` 的话可以使用传递字面量类型的纯类型语法做为参数

```vue
<script setup lang="ts">
defineProps<{
    message: string
}>()


</script>

<template>
    <div class="menu_less">
        菜单区域
        {{ message }}
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
```

---

### 传递任意类型参数

父组件使用 `v-bind` 对子组件进行传参

```vue
<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'
import { reactive } from 'vue'

const data_array = reactive<number[]>([1, 2, 3])

</script>

<template>
    <div class="layout_less">
        <lessMenu message="传递一个字符串" v-bind:data_array="data_array" />
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

子组件使用 `definePops` 接收父组件传递的参数

```vue
<script setup lang="ts">
defineProps<{
    message: string
    data_array: number[]
}>()


</script>

<template>
    <div class="menu_less">
        菜单区域
        {{ message }}
        <div v-for="item in data_array" :key="item">{{ item }}</div>
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
```

---

###  参数默认值

TS 特有的默认值方式

withDefaults是个函数也是无须引入开箱即用接受一个props函数第二个参数是一个对象设置默认值

例如:

```vue
<script setup lang="ts">
type Props = {
    message?: string
    data_array?: number[]
    omit?: string
}
withDefaults(defineProps<Props>(), {
    message: 'Hello World',
    data_array: () => [1, 2, 3],
    omit: 'omit'
})

</script>

<template>
    <div class="menu_less">
        菜单区域
        {{ message }}
        <div v-for="item in data_array" :key="item">{{ item }}</div>
        {{ omit }}
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
```

---

### 子组件给父组件传参

在子组件绑定一个 `click` 事件, 然后通过 `defineEmits` 注册一个自定义事件,  点击 click 触发 emit 调用注册的时间然后传递参数

```vue
<script setup lang="ts">
import { reactive } from 'vue'

/* 子组件给父组件传参 */
const list = reactive<number[]>([4, 5, 6])
const emit = defineEmits(['onclickTap'])
const clickTap = () => {
    emit('onclickTap', list)
}

// 参数默认值
type Props = {
    message?: string
    data_array?: number[]
    omit?: string
}
withDefaults(defineProps<Props>(), {
    message: 'Hello World',
    data_array: () => [1, 2, 3],
    omit: 'omit'
})

</script>

<template>
    <div class="menu_less">
        菜单区域
        {{ message }}
        <div v-for="item in data_array" :key="item">{{ item }}</div>
        {{ omit }}
        <button @click="clickTap">派发给父组件</button>
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
```

父组件接收子组件的事件

```vue
<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'
import { reactive } from 'vue'

const data_array = reactive<number[]>([1, 2, 3])

// 父组件接收子组件传参
const getList = (list: number[]) => {
    console.log(list, "父组件接收子组件")
}

</script>

<template>
    <div class="layout_less">
        <lessMenu
            message="传递一个字符串"
            v-bind:data_array="data_array"
            @onclickTap="getList"
            omit="233"
        />
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

> ![image-20220320175309546](http://cdn.ayusummer233.top/img/202203201753539.png)
>
> 需要注意的是: 虽然子组件传过来的是个 `reactive<number[]>`, 父组件的接收函数中的参数类型应但是 `number[]`, 否则将无法正常接收

---

### 子组件暴露给父组件内部属性

通过 `defineExpose` 将子组件的内部属性暴露给父组件

```vue
<script setup lang="ts">
import { reactive } from 'vue'

/* 子组件通过 defineExpose 将内部属性 exposeArray 暴露给父组件 */
const exposeArray = reactive<number[]>([7, 8, 9])
defineExpose({
    exposeArray
})


/* 子组件给父组件传参 */
const list = reactive<number[]>([4, 5, 6])
const emit = defineEmits(['onclickTap'])
const clickTap = () => {
    emit('onclickTap', list)
}

// 参数默认值
type Props = {
    message?: string
    data_array?: number[]
    omit?: string
}
withDefaults(defineProps<Props>(), {
    message: 'Hello World',
    data_array: () => [1, 2, 3],
    omit: 'omit'
})

</script>

<template>
    <div class="menu_less">
        菜单区域
        {{ message }}
        <div v-for="item in data_array" :key="item">{{ item }}</div>
        {{ omit }}
        <button @click="clickTap">派发给父组件</button>
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
```

父组件通过 `ref` 接收子组件暴露给父组件的内部属性

```vue
<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'
import { reactive, ref } from 'vue'

const exposeArrayFromMenu = ref(null)

const data_array = reactive<number[]>([1, 2, 3])

// 父组件接收子组件传参
const getList = (list: number[]) => {
    console.log(list, "父组件接收子组件")
}

</script>

<template>
    <div class="layout_less">
        {{ exposeArrayFromMenu }}
        <lessMenu
            message="传递一个字符串"
            v-bind:data_array="data_array"
            @onclickTap="getList"
            omit="233"
            ref="exposeArrayFromMenu"
        />
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

---

## 兄弟组件传参

> [学习Vue3 第二十四章（兄弟组件传参和Bus）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123158620)

---

### 利用父组件中转实现兄弟组件传参

`BCTP_A.vue`:

```vue
<!-- 与 B 组件互为兄弟组件 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'

const emit = defineEmits(['transferFlag'])
let flag: Ref<boolean> = ref(false)

const emitFlag = () => {
    flag.value = !flag.value
    console.log("A组件待传值flag:" + flag.value + "到父组件")
    emit('transferFlag', flag.value)
}
</script>

<template>
    <div class="BCTP_A">
        <button @click="emitFlag">flag 取反并传给 parent</button>
    </div>
</template>

<style lang="less" scoped>
.BCTP_A {
    width: 200px;
    height: 200px;
    background: blue;
    color: #fff;
}
</style>
```

`BCTP_parent.vue`:

```vue
<!-- 兄弟组件传参-父组件 -->
<script setup lang="ts">
import BCTP_A from './BCTP_A.vue'
import BCTP_B from './BCTP_B.vue'
import { Ref, ref } from 'vue'
// 定义一个 ref 变量, 用于接收 BCTP_A 组件的 flag 值, 并且设置默认值为 false
let BCTP_A_flag: Ref<boolean> = ref(false)
// 接收 BCTP_A 组件传递过来的 flag 值
const getFlag = (flag: boolean) => {
    BCTP_A_flag.value = flag
    console.log('父组件接收到 A 组件的传值为:', BCTP_A_flag.value)
}
</script>

<template>
    <div>
        <BCTP_A @transferFlag="getFlag"></BCTP_A>
        <BCTP_B :flag="BCTP_A_flag"></BCTP_B>
    </div>
</template>

<style lang="less" scoped>
</style>
```

`BCTP_B.vue`

```vue
<!-- 与 A 组件互为兄弟组件 -->
<script setup lang="ts">
type Props = {
    flag: boolean
}
defineProps<Props>()
</script>

<template>
    <div class="BCTP_B">B 组件接收到父组件传过来的值为: {{ flag }}</div>
</template>

<style lang="less" scoped>
.BCTP_B {
    width: 200px;
    height: 200px;
    background: green;
    color: #fff;
}
</style>
```

> ![](http://cdn.ayusummer233.top/img/202203301801215.gif)

虽然这种凭借父组件中转的方法可以实现兄弟组件之间的传参, 但是这样做未免太过繁琐, 每次传参都需要写三处传入传出

---

### 通过发布订阅模式传参

> [学习Vue3 第二十四章（兄弟组件传参和Bus）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123158620)

`Bus.ts`

```typescript
type BusClass<T> = {
    emit: (name: T) => void
    on: (name: T, callback: Function) => void
}
type BusParams = string | number | symbol
type List = {
    [key: BusParams]: Array<Function>
}
class Bus<T extends BusParams> implements BusClass<T> {
    list: List
    constructor() {
        this.list = {}
    }
    emit(name: T, ...args: Array<any>) {
        let eventName: Array<Function> = this.list[name]
        eventName.forEach(ev => {
            ev.apply(this, args)
        })
    }
    on(name: T, callback: Function) {
        let fn: Array<Function> = this.list[name] || [];
        fn.push(callback)
        this.list[name] = fn
    }
}

export default new Bus<string>()
```

`BCTP_A.vue`:

```vue
<!-- 与 B 组件互为兄弟组件 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'
import Bus from '../../Bus'

const emit = defineEmits(['transferFlag'])
let flag: Ref<boolean> = ref(false)

const emitFlag = () => {
    flag.value = !flag.value
    console.log("A组件待传值flag:" + flag.value + "到父组件")
    emit('transferFlag', flag.value)
}

// 使用 bus 传值给 B 组件
const emitFlagToBByBus = () => {
    flag.value = !flag.value
    Bus.emit('transferFlagToBByBus', flag.value)
}
</script>

<template>
    <div class="BCTP_A">
        <button @click="emitFlag">flag 取反并传给 parent</button>
        <button @click="emitFlagToBByBus">flag 取反并通过 Bus 派发给 B 组件</button>
    </div>
</template>

<style lang="less" scoped>
.BCTP_A {
    width: 200px;
    height: 200px;
    background: blue;
    color: #fff;
}
</style>
```

`BCTP_B.vue`:

```vue
<!-- 与 A 组件互为兄弟组件 -->
<script setup lang="ts">
import Bus from '../../Bus'
import { ref, Ref } from 'vue'

let flagB = ref(false)  // 定义一个 ref 变量, 用于接收 A 组件的 flag 值, 并且设置默认值为 false

type Props = {
    flag: boolean
}
defineProps<Props>()

// 利用 Bus 接收 A 组件派发的 flag
Bus.on('transferFlagToBByBus', (flag: boolean) => {
    flagB.value = flag
    console.log('B 组件接收到 A 组件的传值为:', flagB.value)
})
</script>

<template>
    <div class="BCTP_B">
        <div>B 组件接收到父组件传过来的值为: {{ flag }}</div>
        <div>B 组件从 Bus 接收到从 A 组件传过来的值为: {{ flagB }}</div>
    </div>
</template>

<style lang="less" scoped>
.BCTP_B {
    width: 200px;
    height: 200px;
    background: green;
    color: #fff;
}
</style>
```

> ![](http://cdn.ayusummer233.top/img/202203301842020.gif)

---

## 全局组件

> [学习Vue3 第十五章（全局组件，局部组件，递归组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122862736)
>
> [组件注册 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/component-registration.html#全局注册)

有些组件使用频率非常高, 几乎每个界面都在使用

> 此前的示例中我使用的是 `vite` 构建的初始模板, 之后的组件注册主要是在模块系统中进行的局部注册
>
> > [组件注册-在模块系统中局部注册 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/component-registration.html#在模块系统中局部注册)
> >
> > 创建一个 `components` 目录，并将每个组件放置在其各自的文件中。
> >
> > 在局部注册之前导入每个你想使用的组件。例如，假设在 `App.vue` 文件中：
> >
> > ```vue
> > <script setup lang="ts">
> > // This starter template is using Vue 3 <script setup> SFCs
> > // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
> > import HelloWorld from './components/HelloWorld.vue'
> > import Marquee from './components/Marquee.vue';
> > import VueOn from './components/vueon.vue';
> > import VueModel from './components/vuemodel.vue';
> > import VueBind from './components/vuebind.vue';
> > import VueComputed from './components/vuecomputed.vue';
> > import VueComputedT from './components/vuecomputedt_test.vue';
> > import VueWatch from './components/vuewatch.vue';
> > import Vuewatch from './components/vuewatch.vue';
> > import Vuewatcheffect from './components/vuewatcheffect.vue';
> > import lessLayout from './layout_less/less_layout.vue';
> > 
> > </script>
> > 
> > <template>
> >   <div class="vueLogo">
> >     <img alt="Vue logo" src="./assets/logo.png" />
> >   </div>
> > 
> >   <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
> >   <!-- <HelloWorld msg="233" /> -->
> >   <!-- <Marquee /> -->
> >   <!-- <VueOn /> -->
> >   <!-- <VueModel /> -->
> >   <!-- <VueBind /> -->
> >   <!-- <VueComputed /> -->
> >   <!-- <VueComputedT /> -->
> >   <!-- <Vuewatch /> -->
> >   <!-- <vuewatcheffect /> -->
> >   <lessLayout />
> > </template>
> > 
> > <style lang="less">
> > html,
> > body,
> > #app {
> >   // font-family: Avenir, Helvetica, Arial, sans-serif;
> >   // -webkit-font-smoothing: antialiased;
> >   // -moz-osx-font-smoothing: grayscale;
> >   text-align: center;
> >   color: #2c3e50;
> >   // margin-top: 60px;
> >   height: 100%;
> >   overflow: hidden;
> > }
> > 
> > .vueLogo {
> >   height: 40%;
> >   border: 1px solid #ccc;
> > }
> > </style>
> > 
> > ```

例如: 封装一个 `Card` 组件

`card.vue`:

```vue
<!-- 全局组件学习: 封装一个 Card 组件 -->
<script setup lang="ts">

type Props = {
    content: string
}
defineProps<Props>()

// 两种写法是一致的
// defineProps<{
//     content: string
// }>()

</script>

<template>
    <div class="card">
        <div class="card-header">
            <div>标题</div>
            <div>副标题</div>
        </div>
        <div v-if="content" class="card-content">{{ content }}</div>
    </div>
</template>



<style lang="less" scoped>
@border: #ccc;
.card {
    width: 300px;
    border: 1px solid @border;
    border-radius: 3px;
    &:hover {
        box-shadow: 0 0 10px @border;
    }

    &-content {
        padding: 10px;
    }
    &-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid @border;
    }
}
</style>
```

然后在 `main.ts` 引入 `card` 组件跟随在 `createApp(App)` 后面;

> 切记不能放到 `mount` 后面这是一个链式调用
>
> 调用 `component` 第一个参数组件名称 第二个参数组件实例

`main.ts`

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Card from './components/Card.vue'

createApp(App)
    .component('Card', Card)
    .mount('#app')

```

如此一来在其他 vue 页面无需引入 `card 组件` 可以直接使用

`App.vue`

```vue
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Marquee from './components/Marquee.vue';
import VueOn from './components/vueon.vue';
import VueModel from './components/vuemodel.vue';
import VueBind from './components/vuebind.vue';
import VueComputed from './components/vuecomputed.vue';
import VueComputedT from './components/vuecomputedt_test.vue';
import VueWatch from './components/vuewatch.vue';
import Vuewatch from './components/vuewatch.vue';
import Vuewatcheffect from './components/vuewatcheffect.vue';
import lessLayout from './layout_less/less_layout.vue';

</script>

<template>
  <div class="vueLogo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <HelloWorld msg="233" /> -->
  <!-- <Marquee /> -->
  <!-- <VueOn /> -->
  <!-- <VueModel /> -->
  <!-- <VueBind /> -->
  <!-- <VueComputed /> -->
  <!-- <VueComputedT /> -->
  <!-- <Vuewatch /> -->
  <!-- <vuewatcheffect /> -->
  <!-- <lessLayout /> -->
  <Card content="此处为内容区域 233333" />
</template>

<style lang="less">
html,
body,
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  height: 100%;
  overflow: hidden;
}

.vueLogo {
  height: 40%;
  border: 1px solid #ccc;
}
</style>

```

![image-20220321211051296](http://cdn.ayusummer233.top/img/202203212110626.png)

---

## 局部组件

在一个组件中通过引入另一个组件以达到在此组件中局部使用另一个组件的目的

例如在 `App 根组件` 中引入并使用 `Helloworld 组件` :

`Helloworld.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<!-- 在<style>标签中使用 scoped 属性会限制样式只影响 <style> 标签的父元素和它所有的后代元素。 -->
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

```

`App.vue`:

```vue
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Marquee from './components/Marquee.vue';
import VueOn from './components/vueon.vue';
import VueModel from './components/vuemodel.vue';
import VueBind from './components/vuebind.vue';
import VueComputed from './components/vuecomputed.vue';
import VueComputedT from './components/vuecomputedt_test.vue';
import VueWatch from './components/vuewatch.vue';
import Vuewatch from './components/vuewatch.vue';
import Vuewatcheffect from './components/vuewatcheffect.vue';
import lessLayout from './layout_less/less_layout.vue';

</script>

<template>
  <div class="vueLogo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <HelloWorld msg="233" />
  <!-- <Marquee /> -->
  <!-- <VueOn /> -->
  <!-- <VueModel /> -->
  <!-- <VueBind /> -->
  <!-- <VueComputed /> -->
  <!-- <VueComputedT /> -->
  <!-- <Vuewatch /> -->
  <!-- <vuewatcheffect /> -->
  <!-- <lessLayout /> -->
  <!-- <Card content="此处为内容区域 233333" /> -->
</template>

<style lang="less">
html,
body,
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  height: 100%;
  overflow: hidden;
}

.vueLogo {
  height: 40%;
  border: 1px solid #ccc;
}
</style>

```

![image-20220321210853862](http://cdn.ayusummer233.top/img/202203212108166.png)

---

## 递归组件

> [学习Vue3 第十五章（全局组件，局部组件，递归组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122862736)
>
> [递归组件  | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/sfc-script-setup.html#递归组件)

递归组件自己调用自己, 通过一个条件来结束递归(否则将导致内存泄露)

例如:

`Tree.vue`

```vue
<script setup lang="ts">

type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | [];
}

type  Props = {
    dataTreeList?: TreeList[]    
}
defineProps<Props>()

const emit = defineEmits(['on-click'])

const ClickItem = (item:TreeList) =>{
    console.log(item, 2333);
    emit('on-click', item)
}

</script>

<script lang="ts">
export default{
    name: "Tree"
}

</script>


<template>
    <div style="margin-left: 10px;">
        <!-- {{dataTreeList}} -->
        <div 
            :key="index" v-for="(item, index) in dataTreeList" 
            @click.stop="ClickItem(item)">
            {{item.name}}
            <Tree 
                v-if="item?.children?.length" :dataTreeList="item.children"
                @on-click="ClickItem" />
        </div>
    </div>
</template>

<style lang="less" scoped>
</style>
```

> `item?.children?.length`:
>
> 当读 `item` 和 `item.children` 时读出 `undefined` 或 `null`  时不会继续调用 `.length` 而是直接返回 `undefined`, 这样就避免了读 `undefined.length` 导致的报错
>
> 可以配合 `??` 使用: `item?.children?.length ?? []`:
>
> 当 `??` 前面的式子读出 `undefined` 时采用后面的 `[]`

`lessMenu.vue`

```vue
<script setup lang="ts">
import { reactive } from 'vue'
import Tree from '../../components/Tree.vue'

/* 子组件通过 defineExpose 将内部属性 exposeArray 暴露给父组件 */
const exposeArray = reactive<number[]>([7, 8, 9])
defineExpose({
    exposeArray
})


/* 子组件给父组件传参 */
const list = reactive<number[]>([4, 5, 6])
const emit = defineEmits(['onclickTap'])
const clickTap = () => {
    emit('onclickTap', list)
}

// 参数默认值
type Props = {
    message?: string
    data_array?: number[]
    omit?: string
}
withDefaults(defineProps<Props>(), {
    message: 'Hello World',
    data_array: () => [1, 2, 3],
    omit: 'omit'
})

// 递归组件测试
type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | [];
}
const dataArrayTreeList = reactive<TreeList[]>([
    {
        name: "no.1",
        children: [
            {
                name: "no.1-1",
                children: [
                    {
                        name: "no.1-1-1",
                    },
                ],
            },
        ],
    },
    {
        name: "no.2",
        children: [
            {
                name: "no.2-1",
            },
        ],
    },
    {
        name: "no.3",
    }
])

const getItem = (item: TreeList) => {
    console.log("父组件的item"+item.name);
}
</script>

<template>
    <div class="menu_less">
        <div>菜单区域</div>
        {{ message }}
        <div v-for="item in data_array" :key="item">{{ item }}</div>
        {{ omit }}
        <button @click="clickTap">派发给父组件</button>
        <Card content="测试字符串"/>    
        <Tree :dataTreeList="dataArrayTreeList" @on-click="getItem"/>
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column; // 垂直方向
    flex: 1;
    overflow: auto;
}
</style>
```

`less_layout.vue`

```vue
<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'
import { reactive, ref } from 'vue'

const exposeArrayFromMenu = ref(null)

const data_array = reactive<number[]>([1, 2, 3])

// 父组件接收子组件传参
const getList = (list: number[]) => {
    console.log(list, "父组件接收子组件")
}

</script>

<template>
    <div class="layout_less">
        <!-- <div>{{ exposeArrayFromMenu }}</div> -->
        <lessMenu
            message="传递一个字符串"
            v-bind:data_array="data_array"
            @onclickTap="getList"
            ref="exposeArrayFromMenu"
        />
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



`App.vue`

```vue
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Marquee from './components/Marquee.vue';
import VueOn from './components/vueon.vue';
import VueModel from './components/vuemodel.vue';
import VueBind from './components/vuebind.vue';
import VueComputed from './components/vuecomputed.vue';
import VueComputedT from './components/vuecomputedt_test.vue';
import VueWatch from './components/vuewatch.vue';
import Vuewatch from './components/vuewatch.vue';
import Vuewatcheffect from './components/vuewatcheffect.vue';
import lessLayout from './layout_less/less_layout.vue';

</script>

<template>
  <div class="vueLogo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <HelloWorld msg="233" /> -->
  <!-- <Marquee /> -->
  <!-- <VueOn /> -->
  <!-- <VueModel /> -->
  <!-- <VueBind /> -->
  <!-- <VueComputed /> -->
  <!-- <VueComputedT /> -->
  <!-- <Vuewatch /> -->
  <!-- <vuewatcheffect /> -->
  <lessLayout />
  <!-- <Card content="此处为内容区域 233333" /> -->
</template>

<style lang="less">
html,
body,
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  height: 100%;
  overflow: hidden;
}

.vueLogo {
  height: 40%;
  border: 1px solid #ccc;
}
</style>

```

![image-20220322224213121](http://cdn.ayusummer233.top/img/202203222242790.png)

---

## 动态组件

> [学习Vue3 第十六章（动态组件）_小满zs的博客-CSDN博客_vue3 动态组件](https://blog.csdn.net/qq1195566313/article/details/122891279)

动态组件就是让多个组件使用同一个挂载点并动态切换

在挂载点使用 `component` 标签, 然后使用 `v-bind: is=“组件”`, 用法如下:

```vue
<!-- 引入组件 -->
import A from './A.vue'
import B from './B.vue'
<!-- 通过 is 切换 A B 组件 -->
<component :is="A"></component>
```

使用场景 tab 切换居多

示例:

`A.vue`:

```vue
<script setup lang="ts">
</script>

<template>
<div class = "styleA">A组件内容</div>
</template>

<style lang="less" scoped>
.styleA {
    background: red;
    height: 300px;
    border: 1px solid #ccc;
}

</style>
```

`B.vue`

```vue
<script setup lang="ts">
</script>

<template>
    <div class="styleB">
        B组件内容
    </div>
</template>

<style lang="less" scoped>
.styleB {
    background: greenyellow;
    height: 300px;
    border: 1px solid #ccc;
}

</style>
```

`C.vue`

```vue
<script setup lang="ts">
</script>

<template>
    <div class="styleC">
        C组件内容
    </div>
</template>

<style lang="less" scoped>
.styleC {
    background: burlywood;
    height: 300px;
    border: 1px solid #ccc;
}

</style>
```

`lessContent.vue`

```vue
<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import {reactive, markRaw} from 'vue'

type Tabs = {
    name: string,
    comName:any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: '我是 A 组件',
        comName: markRaw(A)
    },
    {
        name: '我是 B 组件',
        comName: markRaw(B)
    },
    {
        name: '我是 C 组件',
        comName: markRaw(C)
    }
])


let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom =(item: Tabs) =>{
    current.comName = item.comName
}
</script>

<template>
    <div class="content_layout">
        <div class = "tab">
            <div :key="item.name" v-for="item in data"
                @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName" />
        <div class="content_layout-items" 
            :key="item" v-for="item in 100">
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

.tab{
    display: flex;
    flex:1;
    flex-direction: row;
    div{
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
}
</style>
```

![image-20220323101459591](http://cdn.ayusummer233.top/img/202203231015963.png)

> 注意事项
>
> - 在 `Vue2` 的时候 `:is` 是通过组件名称切换的, 而在 `Vue3 setup` 中是通过组件实例切换的
>
> - 如果把组件实例放到 `Reactive` 中那么 `Vue` 会给你一个警告 `runtime-core.esm-bundler.js:38 [Vue warn]: Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with markRaw or using  shallowRef instead of  ref.
>   Component that was made reactive: `
>
>   ![image-20220323102616021](http://cdn.ayusummer233.top/img/202203231026284.png)
>
>   这是因为 `reactive` 会进行 `proxy 代理`; 而我们组件代理之后毫无用处; 为节省性能开销推荐我们使用 `shallowRef` 或者 `markRaw` 跳过 `proxy` 代理:
>
>   ![image-20220323102759875](http://cdn.ayusummer233.top/img/202203231028152.png)

---

## 异步组件

> [动态组件 & 异步组件 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/component-dynamic-async.html#异步组件)
>
> [学习Vue3 第十八章（异步组件&代码分包&suspense）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122909360)

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了实现这个效果，Vue 有一个 `defineAsyncComponent` 方法配合 `Suspense 及其插槽`可以使用异步组件

![image-20220328123937510](http://cdn.ayusummer233.top/img/202203281239688.png)

`data.json`

```json
[
    {
        "name": "张三"
    },
    {
        "name": "李四"
    },
    {
        "name": "王五"
    },
    {
        "name": "赵六"
    }
]
```

`loading.vue`

```vue
<script setup lang="ts">
import {axios} from './server'

const list = await axios('./data.json')
console.log(list)
</script>

<template>
    <div v-for="item in list"> 
        {{item.name}}
    </div>
</template>

<style lang="less" scoped>
</style>
```

`server.ts`

```typescript
type NameList = {
    name: string
}

export const axios = (url: string):Promise<NameList[]> => {
    return new Promise((resolve)=> {
        let xhr: XMLHttpRequest = new XMLHttpRequest()
        
        xhr.open('GET', url)
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 等 2s 返回信息
                setTimeout(() => {
                    resolve(JSON.parse(xhr.responseText))
                }, 2000);
                
            }
        }

        xhr.send()
    })
    
}
```

`lessContent.vue`

```vue
<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog.vue'
// import Loading from '../../components/Loading/loading.vue' 异步化组件后就不能这样直接引入使用了
import {reactive, markRaw, ref, defineAsyncComponent} from 'vue'

const Loading = defineAsyncComponent(() => import('../../components/Loading/loading.vue'))

type Tabs = {
    name: string,
    comName:any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: '我是 A 组件',
        comName: markRaw(A)
    },
    {
        name: '我是 B 组件',
        comName: markRaw(B)
    },
    {
        name: '我是 C 组件',
        comName: markRaw(C)
    }
])


let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom =(item: Tabs) =>{
    current.comName = item.comName
}

// 动态插槽相关
let name = ref('dialog_header')
</script>

<template>
    <div class="content_layout">
        <!-- 异步组件测试 -->
        <Suspense>
            <template #default>
                <Loading></Loading>
            </template>
            <template #fallback>
                <div>加载中...</div>
            </template>
        </Suspense>
        <!-- 插槽测试 -->
        <Dialog>
            <!-- 具名插槽 -->
            <template v-slot:dialog_header>
                <div>
                    摆
                </div>
            </template>
            <!-- 匿名插槽 -->
            <!-- <template v-slot="{data}"> -->
            <!-- 简写: -->
            <template #default="{data}">
                <div>
                    姓名: {{data.name}} 年龄: {{data.age}}
                </div>
            </template>
            <!-- 具名插槽 -->
            <!-- 简写: -->
            <template #dialog_footer>
                <div>
                    摸了
                </div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                动态插槽演示
            </template>
        </Dialog>
        <div class = "tab">
            <div :key="item.name" v-for="item in data"
                @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName" />
        <div class="content_layout-items" 
            :key="item" v-for="item in 100">
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

.tab{
    display: flex;
    flex:1;
    flex-direction: row;
    div{
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
}
</style>
```

![image-20220328151058494](http://cdn.ayusummer233.top/img/202203281510929.png)

![image-20220328151110771](http://cdn.ayusummer233.top/img/202203281511141.png)

---

---

## 通过插槽分发内容

> [组件基础 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/component-basics.html#通过插槽分发内容)
>
> [学习Vue3 第十七章（插槽slot）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122904105)

插槽就是子组件中的提供给父组件使用的一个[占位符](https://so.csdn.net/so/search?q=占位符&spm=1001.2101.3001.7020)，用 `<slot></slot> ` 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的 `<slot></slot>` 标签。

![image-20220325095939066](http://cdn.ayusummer233.top/img/202203250959056.png)

---

### 匿名插槽

在子组件放置一个插槽:

```vue
<template>
    <div>
       <slot></slot>
    </div>
</template>
```

在父组件中使用插槽并给其填充内容:

```vue
        <Dialog>
           <template v-slot>
               <div>寄</div>
           </template>
        </Dialog>
```

---

### 具名插槽

给插槽起个名字, 父组件中通过不同的插槽名调用不同插槽

```vue
    <div>
        <slot name="header"></slot>
        <slot></slot>
 
        <slot name="footer"></slot>
    </div>
```

```vue
        <Dialog>
            <!-- 具名插槽 -->
            <template v-slot:dialog_header>
                <div>
                    摆
                </div>
            </template>
            <!-- 具名插槽 -->
            <!-- 简写: -->
            <template #dialog_footer>
                <div>
                    摸了
                </div>
        </Dialog>
```

---

### 作用域插槽

在子组件插槽中动态绑定参数并派发给父组件调用插槽时使用

```vue
<script setup lang="ts">
import {reactive} from 'vue'

type names = {
    name: string,
    age:number
}
const data = reactive<names[]>([
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 20
    },
    {
        name: '王五',
        age: 22
    }
])

</script>

<template>
	<div>
        <main class="main">
            <div v-for="item in data">
                <slot :data="item"></slot>
            </div>
        </main>
    </div>
</template>

```

通过结构方式取值

```vue
        <Dialog>
            <!-- 匿名插槽 -->
            <!-- <template v-slot="{data}"> -->
            <!-- 简写: -->
            <template #default="{data}">
                <div>
                    姓名: {{data.name}} 年龄: {{data.age}}
                </div>
            </template>
        </Dialog>
```

---

### 动态插槽

父组件中调用插槽时插槽名可以是个变量名, 通过改变变量调用不同名称对应插槽

```vue
const name = ref('header')

<Dialog>
    <template #[name]>
		<div>
    		233
        </div>
    </template>
</Dialog>

```

---

`Dialog.vue`

```vue
<script setup lang="ts">
import {reactive} from 'vue'

type names = {
    name: string,
    age:number
}
const data = reactive<names[]>([
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 20
    },
    {
        name: '王五',
        age: 22
    }
])

</script>

<template>
    <div>
        <header class="header">
            <slot name="dialog_header" />
        </header>
        <main class="main">
            <div v-for="item in data">
                <slot :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="dialog_footer" />
        </footer>
    </div>
</template>

<style lang="less" scoped>
.header{
    height: 100px;
    background: red;
    color: #fff;
}
.main{
    height: 100px;
    background: green;
    color: #fff;
}
.footer{
    height: 100px;
    background: blue;
    color: #fff;
}
</style>
```

`lessContent.vue`:

```vue
<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog.vue'
import {reactive, markRaw, ref} from 'vue'

type Tabs = {
    name: string,
    comName:any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: '我是 A 组件',
        comName: markRaw(A)
    },
    {
        name: '我是 B 组件',
        comName: markRaw(B)
    },
    {
        name: '我是 C 组件',
        comName: markRaw(C)
    }
])


let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom =(item: Tabs) =>{
    current.comName = item.comName
}

// 动态插槽相关
let name = ref('dialog_header')
</script>

<template>
    <div class="content_layout">
        <Dialog>
            <!-- 具名插槽 -->
            <template v-slot:dialog_header>
                <div>
                    摆
                </div>
            </template>
            <!-- 匿名插槽 -->
            <!-- <template v-slot="{data}"> -->
            <!-- 简写: -->
            <template #default="{data}">
                <div>
                    姓名: {{data.name}} 年龄: {{data.age}}
                </div>
            </template>
            <!-- 具名插槽 -->
            <!-- 简写: -->
            <template #dialog_footer>
                <div>
                    摸了
                </div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                动态插槽演示
            </template>
        </Dialog>
        <div class = "tab">
            <div :key="item.name" v-for="item in data"
                @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName" />
        <div class="content_layout-items" 
            :key="item" v-for="item in 100">
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

.tab{
    display: flex;
    flex:1;
    flex-direction: row;
    div{
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
}
</style>
```

![image-20220325102705894](http://cdn.ayusummer233.top/img/202203251027872.png)

---

# 可复用 & 组合

## Teleport

> [学习Vue3 第十九章（Teleport传送组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122916261)
>
> [Teleport | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/teleport.html#teleport)

`Teleport` 是 `Vue 3.0` 新特性之一。

Teleport 可以将模板渲染至指定 DOM 节点，不受父级 style、v-show 等属性影响，但 data、prop 数据依旧能够共用的技术；类似于 React 的 Portal。

> 虽然不受 `v-show` 影响, 但是 `v-if` 的优先级还是比 `teleport` 高的

`index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite-vue-ts 学习</title>
</head>

<body>
  <div id="app"></div>
  <div class="teleport_class_test"></div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>
```

`lessContent.vue`

```vue
<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog.vue'
// import Loading from '../../components/Loading/loading.vue' 异步化组件后就不能这样直接引入使用了
import {reactive, markRaw, ref, defineAsyncComponent} from 'vue'

const Loading = defineAsyncComponent(() => import('../../components/Loading/loading.vue'))

type Tabs = {
    name: string,
    comName:any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: '我是 A 组件',
        comName: markRaw(A)
    },
    {
        name: '我是 B 组件',
        comName: markRaw(B)
    },
    {
        name: '我是 C 组件',
        comName: markRaw(C)
    }
])


let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom =(item: Tabs) =>{
    current.comName = item.comName
}

// 动态插槽相关
let name = ref('dialog_header')
</script>

<template>
    <div class="content_layout">
        <teleport to='.teleport_class_test'>
            <div class="loading">
                loading...
            </div>
        </teleport>
        <!-- 异步组件测试 -->
        <Suspense>
            <template #default>
                <Loading></Loading>
            </template>
            <template #fallback>
                <div>加载中...</div>
            </template>
        </Suspense>
        <!-- 插槽测试 -->
        <Dialog>
            <!-- 具名插槽 -->
            <template v-slot:dialog_header>
                <div>
                    摆
                </div>
            </template>
            <!-- 匿名插槽 -->
            <!-- <template v-slot="{data}"> -->
            <!-- 简写: -->
            <template #default="{data}">
                <div>
                    姓名: {{data.name}} 年龄: {{data.age}}
                </div>
            </template>
            <!-- 具名插槽 -->
            <!-- 简写: -->
            <template #dialog_footer>
                <div>
                    摸了
                </div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                动态插槽演示
            </template>
        </Dialog>
        <div class = "tab">
            <div :key="item.name" v-for="item in data"
                @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName" />
        <div class="content_layout-items" 
            :key="item" v-for="item in 100">
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

.tab{
    display: flex;
    flex:1;
    flex-direction: row;
    div{
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
}

.loading{
    position: absolute;
    right: 10px;
    top: 10px;
    background: greenyellow;
}
</style>
```

![image-20220328153035492](http://cdn.ayusummer233.top/img/202203281530867.png)

---

# API

> [API | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/)

---

## GlobalAPI

### app.config.globalProperties

> [Application API | Vue.js (vuejs.org)](https://vuejs.org/api/application.html#app-config-globalproperties)
>
> [学习Vue3 第二十九章（Vue3定义全局函数和变量）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123292042)

Vue3 没有 Prototype 属性, 使用 `app.config.globalProperties` 代替, 然后去自定义变量和函数

用于注册全局属性以供各位置组件使用

以字符串修饰为例:

`main.ts`



---

## 应用 API

> [应用 API | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/application-api.html)

---

### directive

> [应用 API-directive | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/application-api.html#directive)
>
> [学习Vue3 第二十七章（自定义指令directive）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123228132)

`directive` 是 `vue3` 的一项破坏性更新, 通过 `directive` 我们可以根据自己的需要自定义 vue 指令

当我们要手动操作 DOM 来修改视图并且在多处位置需要同样的操作逻辑时就可以通过自定义 vue 指令从而在各处便捷的进行使用

- **参数：**

  - `{string} name`
  - `{Function | Object} [definition]`

- **返回值：**

  - 如果传入 `definition` 参数，则返回应用实例。
  - 如果不传入 `definition` 参数，则返回指令定义。

- **用法：**

  注册或检索全局指令。

- 钩子函数

  `created`: 元素初始化的时候(在绑定元素的 attribute 或事件监听器被应用之前调用)

  `beforeMount`: 指令绑定到元素后(在绑定元素的父组件挂载之前调用) 只调用一次

  `mounted`: 元素插入父级 dom 时(在绑定元素的父组件挂载之后调用)

  `beforeUpdate`: 元素被更新之前(在包含组件的 VNode 更新之前调用)

  `updated`: 在包含组件的 VNode 及其子组件的 VNode 更新之后调用

  `beforeUnmount`: 在元素被移除前(在绑定元素的父组件卸载之前调用)

  `unmounted`: 指令被移除后(在绑定元素的父组件卸载之后调用) 只调用一次

以拖曳操作为例, 实现组件拖动效果:

```vue
<!-- 组件拖曳示例 -->
<script setup lang="ts">
// 导入 directive 相关模块
import { ref, Directive, DirectiveBinding } from 'vue'
// 自定义 v-move 指令进行组件拖曳
const vMove: Directive<any, void> = (el: HTMLDivElement, binding: DirectiveBinding) => {
    // 取当前元素的第一个子元素作为拖曳元素
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
    console.log(moveElement)
    // 定义鼠标按下事件(拖动)
    const mouseDown = (e: MouseEvent) => {
        let X = e.clientX - el.offsetLeft
        let Y = e.clientY - el.offsetTop
        const move = (e: MouseEvent) => {
            console.log(e)
            el.style.left = e.clientX - X + 'px'
            el.style.top = e.clientY - Y + 'px'
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })
    }
    // 绑定鼠标按下拖曳事件
    moveElement.addEventListener('mousedown', mouseDown)
}

</script>

<template>
    <div v-move class="box">
        <div class="header"></div>
        <div>内容</div>
    </div>
</template>

<style lang="less" scoped>
.box {
    // box 内容区域样式定义
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 3px solid #000;
    // 拖曳 header 样式定义
    .header {
        width: 100%;
        height: 50px;
        background: rgb(5, 5, 5);
    }
}
</style>
```

> ![](http://cdn.ayusummer233.top/img/202203312011082.gif)

---

### mixin

> [应用 API-mixin | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/application-api.html#mixin)
>
> [学习Vue3 第二十八章（自定义Hooks）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123271189)

- **参数：**

  - `{Object} mixin`

- **返回值：**

  - 应用实例

- **用法：**

  将一个 mixin 应用在整个应用范围内。一旦注册，它们就可以在当前的应用中任何组件模板内使用它。插件作者可以使用此方法将自定义行为注入组件。**不建议在应用代码中使用**。

- **参考：**[全局 mixin](https://v3.cn.vuejs.org/guide/mixins.html#全局-mixin)

---

### 自定义 Hook

> [学习Vue3 第二十八章（自定义Hooks）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123271189)
>
> [应用 API-mixin | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/application-api.html#mixin)

vue3 的自定义 hook 主要用来处理复用代码逻辑的一些封装

- Vue3 的 hook函数 相当于 vue2 的 mixin, 不同在与 hooks 是函数
- Vue3 的 hook函数 可以帮助我们提高代码的复用性, 让我们能在不同的组件中都利用 hooks 函数

以获取图片元素 base64 为例:

`ImageToBase64.ts`:

```typescript
// 将图片信息转 base64 的一个 hook
import { onMounted } from 'vue'

// 定义 hook 参数类型
type Options = {
    el: string
}

export default function (options: Options): Promise<{ baseUrl: string }> {
    return new Promise((resolve) => {
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            console.log(img, "=====>")
            img.onload = () => {
                resolve({
                    baseUrl: base64(img)
                })
            }
        })
        // 将图片转 base64
        const base64 = (el: HTMLImageElement) => {
            // 定义画布
            const canvas = document.createElement('canvas')
            // 建立一个 CanvasRenderingContext2D 二维渲染上下文。
            const ctx = canvas.getContext('2d')
            canvas.width = el.width
            canvas.height = el.height
            ctx?.drawImage(el, 0, 0, el.width, el.height)
            // 方法返回一个包含图片展示的 data URI 
            return canvas.toDataURL('image/png')
        }
    })
}

```

> [Promise - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)
>
> [document.querySelector() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)
>
> [Document.createElement() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)
>
> [HTMLCanvasElement.getContext() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext)
>
> [HTMLCanvasElement.toDataURL() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)

`DIYHook.vue`:

```vue
<!-- 自定义hook使用测试 -->
<script setup lang="ts">
import useBase64 from '../../hooks/ImageToBase64'
useBase64({ el: '#img' }).then(res => {
    console.log(res.baseUrl)
})

</script>

<template>
    <div>
        <img id="img" width="512" height="512" src="../../assets/M4.png" alt="M4" />
    </div>
</template>

<style lang="less" scoped>
</style>
```

> [Promise.prototype.then() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

> ![](http://cdn.ayusummer233.top/img/202204010740857.gif)

---

## 指令

### v-model

> [学习Vue3 第二十六章（深入v-model）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123187523)
>
> [指令 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/directives.html#v-model)

> v-model 是 vue3 的一项破坏性更新, 它其实是个语法糖, 是通过 props 和 emit 组合而成的

使用 `v-model` 可以实现父子组件之间的双向绑定:

`Dialog_vmodel.vue`:

```vue
<script setup lang="ts">
import { ref, Ref } from 'vue'
type Props = {
    flag: boolean,
    title: string
    modelModifiers?: {
        change: boolean,
    }
}
const PropsData = defineProps<Props>()
console.log(PropsData)

// 改值:
const emit = defineEmits(['update:flag', 'update:title', 'update:modelModifiers', 'update:peopleModifiers'])
const close = () => {
    if (PropsData.modelModifiers?.change) {
        emit("update:title", "子组件已接收回传change")
    } else {
        console.log(PropsData.modelModifiers?.change)
        emit("update:title", "子组件未接收到change信号")
    }
    emit('update:flag', false)
    // emit('update:title', '咸鱼型')
}

</script>

<template>
    <div v-if="flag" class="Dialog_vmodel">
        <div class="Dialog_vmodel-header">
            <span>标题---{{ title }}</span>
            <span @click="close">X</span>
        </div>
        <div class="Dialog_vmodel-content">
            <span>内容</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.Dialog_vmodel {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &-header {
        header-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    &-content {
        padding: 10px;
    }
}
</style>
```

`Dialog_parent.vue`:

```vue
<script setup lang="ts">
import DialogVModel from './Dialog_vmodel.vue'
import { ref, Ref } from 'vue'

let flag: Ref<boolean> = ref<boolean>(true)
let title: Ref<string> = ref<string>("咸鱼型233")
let change: Ref<boolean> = ref<boolean>(false)
</script>

<template>
    <div>
        <button @click="flag = !flag">change {{ flag }}</button>
        <div>标题:{{ title }}</div>
        <!-- 单个双向绑定可以直接 v-model="xxx" 多个的时候可以用 v-model:xxx="xxx" -->
        <DialogVModel v-model:flag="flag" v-model:title="title" v-model.change="change" />
    </div>
</template>

<style lang="less" scoped></style>
```

> ![](http://cdn.ayusummer233.top/img/202203311004868.gif)

---

## 特殊 attribute

### ref

> [特殊 attribute-ref | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/special-attributes.html#ref)
>
> [模板 ref | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/guide/essentials/template-refs.html)
>
> [Built-in Special Attributes | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/api/built-in-special-attributes.html#ref)

- **Expects:** `string | Function`

`ref` 用于给元素或者子组件注册一个 `reference`





---

## 内置组件

### `transition`

> [内置组件-transition | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/built-in-components.html#component)
>
> [学习Vue3 第二十一章（transition动画组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123000653)
>
> [ css 动画中 ease,seae-in,ease-in-out,ease-out,效果区别_小赞赞No1的博客-CSDN博客_ease-in-out](https://blog.csdn.net/Candy_10181/article/details/80611009)

使用 `v-if` 或 `v-show` 切换组件的显示隐藏比较生硬, 使用 `transition` 配合 css 可以实现一些动效

`tansition_test.vue`

```vue
<script setup lang="ts">
import {ref} from 'vue'

// 定义状态切换标记
const flag = ref<boolean>(true)

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <div v-if="flag" class="box"></div>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
</style>
```

> ![image-20220329095527566](http://cdn.ayusummer233.top/img/202203290955912.png)
>
> ![](http://cdn.ayusummer233.top/img/202203290954418.gif)
>
> 可以看到, 这个切换比较生硬

使用 `<transition>` 包裹元素后可以结合 `css` 实现一些动效:

`transition_test.vue`:

```vue
<script setup lang="ts">
import {ref} from 'vue'

// 定义状态切换标记
const flag = ref<boolean>(true)

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition name="boxFade">
        <div v-if="flag" class="box"></div>
    </transition>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
// 区域显示起点样式
.boxFade-enter-from{
    width: 0px;
    height: 0px;
}

// 区域显示过渡曲线
.boxFade-enter-active{
    // 动画执行 1.5s, 速度由快到慢(ease)[PS: 除了ease外还有 linear ease-in ease-out ease-in-out]
    transition: all 1.5s ease;
}

// 区域显示终点样式(一般与标签内定义样式这里就是与 box 一致)
.boxFade-enter-to{
    width: 400px;
    height: 400px;
}

// 区域隐藏起点样式(一般与标签内定义样式这里就是与 box 一致)
.boxFade-leave-from{
    width: 400px;
    height: 400px;
}

// 区域隐藏过渡曲线
.boxFade-leave-active{
    transition: all 2s ease;
}

// 区域隐藏终点样式
.boxFade-leave-to{
    width: 0px;
    height: 0px;
}
</style>
```

>  - `ease`
>
>     ![image-20220329102544982](http://cdn.ayusummer233.top/img/202203291025134.png)
>
>    默认值, 元素样式从初始状态过渡到终止状态时速度由快到慢, 逐渐变慢
>
>    ![](http://cdn.ayusummer233.top/img/202203291019719.gif)  
>
>
>  - `linear`
>
>    ![image-20220329102857044](http://cdn.ayusummer233.top/img/202203291028209.png)
>
>    元素样式从初始状态过渡到到终止状态速度是恒速（等于 cubic-bezier(0,0,1,1)）。(匀速)
>
>    ![](http://cdn.ayusummer233.top/img/202203291022664.gif)
>
>  - `ease-in`
>
>    ![image-20220329103142854](http://cdn.ayusummer233.top/img/202203291031023.png)
>
>    规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）（相对于匀速，开始的时候慢，之后快）。
>
>    呈加速状态, 常称这种效果为渐显效果 ![](http://cdn.ayusummer233.top/img/202203291024226.gif)
>
>  - `ease-out`
>
>    ![image-20220329103155504](http://cdn.ayusummer233.top/img/202203291031664.png)
>
>    规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）（相对于匀速，开始时快，结束时候间慢，）。
>
>    呈减速状态, 常称这种效果为渐隐效果
>
>    ![](http://cdn.ayusummer233.top/img/202203291040141.gif)
>
>  - `ease-in-out`
>
>    ![image-20220329103207973](http://cdn.ayusummer233.top/img/202203291032144.png)
>
>    规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）（相对于匀速，（开始和结束都慢）两头慢）。
>
>    先加速再减速, 常称这种效果为渐显渐隐效果
>    
>    ![](http://cdn.ayusummer233.top/img/202203291042203.gif)
>
>  - `cubic-bezier(n,n,n,n)`
>
>    在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
>

还可以再加点花里胡哨的效果, 比如旋转:

```less
// 区域显示起点样式
.boxFade-enter-from{
    width: 0px;
    height: 0px;
    // 来点花里胡哨的 360° 旋转
    transform: rotate(360deg);
}

// 区域隐藏起点样式(一般与标签内定义样式这里就是与 box 一致)
.boxFade-leave-from{
    width: 400px;
    height: 400px;
    // 来点花里胡哨的 360° 旋转
    transform: rotate(360deg);
}
```

>   ![](http://cdn.ayusummer233.top/img/202203291046959.gif)

样式表里不光可以使用 `name-xxx` 的形式, 也支持自定义, 比如:

```vue
<script setup lang="ts">
import {ref} from 'vue'

// 定义状态切换标记
const flag = ref<boolean>(true)

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition 
        name="boxFade"
        enter-from-class="boxEF"
        enter-active-class="boxEA"
        enter-to-class="boxET"
        leave-from-class="boxLF"
        leave-active-class="boxLA"
        leave-to-class="boxLT"
        >
        <div v-if="flag" class="box"></div>
    </transition>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
// 区域显示起点样式
.boxEF{
    width: 0px;
    height: 0px;
    // 来点花里胡哨的 360° 旋转
    transform: rotate(360deg);
}

// 区域显示过渡曲线
.boxEA{
    // 动画执行 1.5s, 速度由快到慢(ease)[PS: 除了ease外还有 linear ease-in ease-out ease-in-out]
    transition: all 1.5s ease-in-out;
}

// 区域显示终点样式(一般与标签内定义样式这里就是与 box 一致)
.boxET{
    width: 400px;
    height: 400px;
}

// 区域隐藏起点样式(一般与标签内定义样式这里就是与 box 一致)
.boxLF{
    width: 400px;
    height: 400px;
    // 来点花里胡哨的 360° 旋转
    transform: rotate(360deg);
}

// 区域隐藏过渡曲线
.boxLA{
    transition: all 1.5s ease-in-out;
}

// 区域隐藏终点样式
.boxLT{
    width: 0px;
    height: 0px;
}
</style>
```

> 在使用 `<transition>` 时定义好各个样式的别名即可

---

#### 结合 Animate.css 使用

> [Animate.css](#结合 `vue3 transition` 使用)

`transition_test.vue`:

```vue
<script setup lang="ts">
import {ref} from 'vue'
// 引入 animate.css
import 'animate.css'

// 定义状态切换标记
const flag = ref<boolean>(true)

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition 
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__fadeOut"
    >
        <div v-if="flag" class="box"></div>
    </transition>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
</style>
```

> 
![](http://cdn.ayusummer233.top/img/202203291950307.gif)
---

#### 生命周期 和 GSAP

> [学习Vue3 第二十一章（transition动画组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123000653)
>
> [GreenSock | Docs | GSAP](https://greensock.com/docs/v3/GSAP)

`transition` 有 8 个生命周期

```typescript
  @before-enter="beforeEnter" //对应enter-from
  @enter="enter"//对应enter-active
  @after-enter="afterEnter"//对应enter-to
  @enter-cancelled="enterCancelled"//显示过度打断
  @before-leave="beforeLeave"//对应leave-from
  @leave="leave"//对应enter-active
  @after-leave="afterLeave"//对应leave-to
  @leave-cancelled="leaveCancelled"//离开过度打断
```

当只用 JavaScript 过渡的时候，在 **`enter` 和 `leave` 钩子中必须使用 `done` 进行回调**

结合 `gsap` 动画库使用:

`transition_test_gsap.vue`:

```vue
<script setup lang="ts">
import {ref} from 'vue'
// 引入 gsap
import gsap from 'gsap'

// 定义状态切换标记
const flag = ref<boolean>(true)

const EnterFrom = (el:Element) =>{
    gsap.set(el, {
        width:0,
        height:0
    })
}

const EnterActive = (el:Element, done:gsap.Callback) =>{
    gsap.to(el, {
        width:400,
        height:400,
        onComplete:done
    })
}

const leave = (el:Element, done:gsap.Callback) =>{
    gsap.to(el, {
        width:0,
        height:0,
        onComplete:done
    })
}

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @leave="leave"
    >
        <div v-if="flag" class="box"></div>
    </transition>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
</style>
```

>  ![](http://cdn.ayusummer233.top/img/202203292030940.gif)
---

#### appear

通过这个属性可以设置初始节点过度 就是页面加载完成就开始动画 对应三个状态

```html
appear-active-class=""
appear-from-class=""
appear-to-class=""
appear
```

可以结合 `Animate.css` 调用一些高级的动效:

`transition_test_appear.vue`:

```vue
<script setup lang="ts">
import {ref} from 'vue'
// 引入 animate.css
import 'animate.css'

// 定义状态切换标记
const flag = ref<boolean>(true)

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition 
        appear
        appear-active-class="animate__animated animate__bounce"
    >
        <div v-if="flag" class="box"></div>
    </transition>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
</style>
```

> 
![](http://cdn.ayusummer233.top/img/202203292044079.gif)
---

### `transition-group`

> [内置组件-transition-group | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/built-in-components.html#transition-group)
>
> [学习Vue3 第二十二章（transition-group过度列表）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123058884)

- **Props：**

  - `tag` - `string` - 如果未定义，则不渲染动画元素。
  - `move-class` - 覆盖移动过渡期间应用的 CSS 类。
  - 除了 `mode` - 其他 attribute 和 `<transition>` 相同。

- **事件：**

  - 事件和 `<transition>` 相同。

- **用法：**

  `<transition-group>` 提供了**多个**元素/组件的过渡效果。默认情况下，它不会渲染一个 DOM 元素包裹器，但是可以通过 `tag` attribute 来定义。

  注意，每个 `<transition-group>` 的子节点必须有[**独立的 key**](https://v3.cn.vuejs.org/api/special-attributes.html#key)，动画才能正常工作。

`<transition-group>` 支持通过 CSS transform 过渡移动。当一个子节点被更新，从屏幕上的位置发生变化，它会被应用一个移动中的 CSS 类 (通过 `name` attribute 或配置 `move-class` attribute 自动生成)。如果 CSS `transform` property 是“可过渡” property，当应用移动类时，将会使用 [FLIP 技术](https://aerotwist.com/blog/flip-your-animations/)使元素流畅地到达动画终点。

```html
<transition-group tag="ul" name="slide">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</transition-group>
```

动效用法和 `transition` 一致:

`transition_group_test.vue`:

```vue
<script setup lang="ts">
import {ref, reactive} from 'vue'
import 'animate.css'

const list = reactive<number[]>([1, 2, 3, 4, 5, 6])

const add = () => {
    list.push(list.length + 1)
}

const dec = () => {
    list.pop()
}
</script>

<template>
<div>
    <button @click="add">添加</button>
    <button @click="dec">删除</button>
    <div class="wraps">
        <transition-group 
            enter-active-class="animate__animated animate__bounce"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div v-for="item in list" :key="item" class="box">
                {{item}}
            </div>
        </transition-group>
    </div>
</div>
</template>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;  // 不换行
    border: 1px solid #ccc;
    .box{
        margin: 10px;
    }
}
</style>
```

> ![](http://cdn.ayusummer233.top/img/202203292249471.gif)

---

#### 平面过渡动画

> [学习Vue3 第二十二章（transition-group过度列表）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123058884)
>
> [Lodash](#Lodash)

以打乱数组为例:

`transition_group_test_flip.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))

console.log(list.value)

const random = () => {
    list.value = _.shuffle(list.value)
}
</script>

<template>
    <div>
        <button @click="random">random</button>
        <transition-group move-class="move_active" class="wraps" tag="div">
            <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
        </transition-group>
    </div>
</template>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);
    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center; // 居中
        align-items: center; // 垂直居中
    }
}

.move_active {
    transition: all 1.5s ease-in-out;
}
</style>
```

> ![](http://cdn.ayusummer233.top/img/202203300832433.gif)

---

#### 状态过渡

>  [学习Vue3 第二十二章（transition-group过度列表）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123058884)
>
> [GSAP](#GreenSock)

结合 gsap 实现一个数字更新时的滚动效果:

```vue
<!-- 状态过渡 -->
<script setup lang="ts">
import gsap from 'gsap'
import { reactive, watch } from 'vue'

const num = reactive({
    current: 0,
    tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal,
        onUpdate: () => {
            console.log(num.tweenedNumber)
        }
    })
})
</script>

<template>
    <div>
        <input v-model="num.current" step="20" type="number" />
        <div>{{ num.tweenedNumber.toFixed(0) }}</div>
    </div>
</template>

<style lang="less" scoped>
</style>
```

>  ![](http://cdn.ayusummer233.top/img/202203300846915.gif)

---

### `keep-alive`

> [内置组件-keep-alive | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive)
>
> [学习Vue3 第二十章（keep-alive缓存组件）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122953072)

有时候我们不希望组件被重新渲染影响使用体验；或者处于性能考虑，避免多次重复渲染降低性能。而是希望组件可以缓存下来,维持当前的状态。这时候就需要用到`keep-alive`组件。

> `keep-alive` 主要用于保留组件状态或避免重新渲染。
>
> `<keep-alive>` 不会在函数式组件中正常工作，因为它们没有缓存实例。

- **Props：**
  - `include` - `string | RegExp | Array`。只有名称匹配的组件会被缓存。
  - `exclude` - `string | RegExp | Array`。任何名称匹配的组件都不会被缓存。
  - `max` - `number | string`。最多可以缓存多少组件实例。

`login.vue`:

```vue
<!-- 登录组件 -->
<script setup lang="ts">
import {reactive, onMounted, onUnmounted, onActivated, onDeactivated} from 'vue'
// 只有使用了 keep-alive 组件才会有 onActivated 和 onDeactivated 事件

// 登录表单
const form = reactive({
    login:"",
    password:""
})

// 登录按钮触发事件
const submit = () => {
    console.log(form)
}

onMounted(() => {
    console.log("login mounted")
})

onUnmounted(() => {
    console.log("login unmounted")
})

onActivated(() => {
    console.log("login activated")
})

onDeactivated(() => {
    console.log("login deactivated")
})
</script>

<template>
<div>
    <!-- 账密输入表单 -->
    <table>
        <!-- 账号输入区域 -->
        <tr>
            <td>账号</td>
            <td>
                <input type="text" v-model="form.login" placeholder="请输入账号">
            </td>
        </tr>
        <!-- 密码输入区域 -->
        <tr>
            <td>密码</td>
            <td>
                <input type="password" v-model="form.password" placeholder="请输入密码">
            </td>
        </tr>
    </table>
    <button @click="submit">登录</button>

</div>
</template>

<style lang="less" scoped>
</style>
```

> 只有使用了 `keep-alive` 组件才会有 `onActivated` 和 `onDeactivated` 事件
>
> > (这会运用在 `<keep-alive>` 的直接子节点及其所有子孙节点。)
>
> ![image-20220328211128813](https://cdn.ayusummer233.top/img/202203282111604.png)
>
> 如图所示, `Login 组件` 只会 `mounted` 一次, 点击 `切换按钮` 后不会 `unmounted`, 不过点击切换按钮会调起 `onDeactivated`, 再点击一次会变再调起 `onActivated`
>
> ![](http://cdn.ayusummer233.top/img/202203282120763.gif)

`register.vue`

```vue
<!-- 登录组件 -->
<script setup lang="ts">
import {reactive} from 'vue'

// 登录表单
const form = reactive({
    login:"",
    password:"",
    code:""
})

// 登录按钮触发事件
const submit = () => {
    console.log(form)
}
</script>

<template>
<div>
    <!-- 账密输入表单 -->
    <table>
        <!-- 账号输入区域 -->
        <tr>
            <td>账号</td>
            <td>
                <input type="text" v-model="form.login" placeholder="请输入账号">
            </td>
        </tr>
        <!-- 密码输入区域 -->
        <tr>
            <td>密码</td>
            <td>
                <input type="password" v-model="form.password" placeholder="请输入密码">
            </td>
        </tr>
        <!-- 验证码输入区域 -->
        <tr>
            <td>验证码</td>
            <td>
                <input type="text" v-model="form.code" placeholder="请输入验证码">
            </td>
        </tr>
    </table>
    <button @click="submit">注册</button>

</div>
</template>

<style lang="less" scoped>
</style>
```

> 在登录组件中演示了使用 `keep-alive` 后组件声明周期的变化, 可以得知如果想在切换组件的时候做些什么, 那么应当修改 `onActivated` 和 `onDeactivated` 方法
>
> 例如在从注册界面切换到登录界面时清空注册页面的验证码输入框:
>
> ```typescript
> // 设置切换到登录界面时, 注册界面的验证码会清空
> onDeactivated(() => {
>     console.log("register deactivated")
>     form.code=""
>     console.log("验证码已清空")
> })
> ```
>
> ![](http://cdn.ayusummer233.top/img/202203282137692.gif)

`lessContent.vue`:

```vue
<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog.vue'
// import Loading from '../../components/Loading/loading.vue' 异步化组件后就不能这样直接引入使用了
// 引入登录组件
import Login from '../../components/login/login.vue'
// 引入注册组件
import Register from '../../components/register/register.vue'
import {reactive, markRaw, ref, defineAsyncComponent} from 'vue'

const Loading = defineAsyncComponent(() => import('../../components/Loading/loading.vue'))

type Tabs = {
    name: string,
    comName:any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: '我是 A 组件',
        comName: markRaw(A)
    },
    {
        name: '我是 B 组件',
        comName: markRaw(B)
    },
    {
        name: '我是 C 组件',
        comName: markRaw(C)
    }
])


let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom =(item: Tabs) =>{
    current.comName = item.comName
}

// 动态插槽相关
let name = ref('dialog_header')

// 切换登录注册表单页面
const flag = ref(true)
const switchLoginRegist = () => {
    flag.value = !flag.value
}
</script>

<template>
    <div class="content_layout">
        <button @click="switchLoginRegist">切换</button>
        <keep-alive>
            <Login v-if="flag"></Login>
            <Register v-else></Register>
        </keep-alive>
        <teleport to='.teleport_class_test'>
            <div class="loading">
                loading...
            </div>
        </teleport>
        <!-- 异步组件测试 -->
        <Suspense>
            <template #default>
                <Loading></Loading>
            </template>
            <template #fallback>
                <div>加载中...</div>
            </template>
        </Suspense>
        <!-- 插槽测试 -->
        <Dialog>
            <!-- 具名插槽 -->
            <template v-slot:dialog_header>
                <div>
                    摆
                </div>
            </template>
            <!-- 匿名插槽 -->
            <!-- <template v-slot="{data}"> -->
            <!-- 简写: -->
            <template #default="{data}">
                <div>
                    姓名: {{data.name}} 年龄: {{data.age}}
                </div>
            </template>
            <!-- 具名插槽 -->
            <!-- 简写: -->
            <template #dialog_footer>
                <div>
                    摸了
                </div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                动态插槽演示
            </template>
        </Dialog>
        <div class = "tab">
            <div :key="item.name" v-for="item in data"
                @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName" />
        <div class="content_layout-items" 
            :key="item" v-for="item in 100">
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

.tab{
    display: flex;
    flex:1;
    flex-direction: row;
    div{
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
}

.loading{
    position: absolute;
    right: 10px;
    top: 10px;
    background: greenyellow;
}
</style>
```

如果想选择性的使 `keep-alive 标签` 内的组件应用 `keep-alive` 的话可以使用 `:include`

例如, 如果想让上面的 `keep-alive 标签` 内的两个组件 `Login` 和 `Register` 只有前者应用 `keep-alive` 的话可以如此书写:

```html
        <keep-alive :include="['Login']">
            <Login v-if="flag"></Login>
            <Register v-else></Register>
        </keep-alive>
```

> 这样写法需要注意的是定位 `Login 组件` 使用的 `“”` 字符串, 那么在使用 `vue3 setup 语法糖` 的情况下应当在 `Login 组件` 中添加一个 `script 标签` 并在其中定义组件别名:
>
> ```typescript
> <script lang="ts">
> export default{
>  name: "Login"
> }
> </script>
> ```
>
> ![](http://cdn.ayusummer233.top/img/202203282148228.gif)

与 `include` 相对的则是 `exclude`, 使用 `exclude` 可以使 `exclude` 后面数组内的组件不应用缓存

> 二者都可以用逗号分隔字符串、正则表达式或一个数组来表示:
>
> ```html
> <!-- 逗号分隔字符串 -->
> <keep-alive include="a,b">
>   <component :is="view"></component>
> </keep-alive>
> 
> <!-- regex (使用 `v-bind`) -->
> <keep-alive :include="/a|b/">
>   <component :is="view"></component>
> </keep-alive>
> 
> <!-- Array (使用 `v-bind`) -->
> <keep-alive :include="['a', 'b']">
>   <component :is="view"></component>
> </keep-alive>
> ```



除此以外 `max` prop 的作用是决定最多可以缓存多少组件实例, 一旦这个数字达到了，在新实例被创建之前，已缓存组件中**最久没有被访问的实例**会被销毁掉。

```html
<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```

---
### `slot`

> [内置组件 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/built-in-components.html#slot)
>
> [学习Vue3 第十七章（插槽slot）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122904105)

详见 [通过插槽分发内容](#通过插槽分发内容)

---

## 响应性 API

### 响应性基础 API

#### reactive

> [响应性基础 API-reactive | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)

返回对象的响应式副本

```js
const obj = reactive({ count: 0 })
```

响应式转换是“深层”的——它影响所有嵌套 property。在基于 [ES2015 Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 的实现中，返回的 proxy 是**不**等于原始对象的。建议只使用响应式 proxy，避免依赖原始对象。

**类型声明：**

```typescript
function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
```

> 提示: 
>
> `reactive` 将解包所有深层的 [refs](https://v3.cn.vuejs.org/api/refs-api.html#ref)，同时维持 ref 的响应性。
>
> ```typescript
> const count = ref(1)
> const obj = reactive({ count })
> 
> // ref 会被解包
> console.log(obj.count === count.value) // true
> 
> // 它会更新 `obj.count`
> count.value++
> console.log(count.value) // 2
> console.log(obj.count) // 2
> 
> // 它也会更新 `count` ref
> obj.count++
> console.log(obj.count) // 3
> console.log(count.value) // 3
> ```
>
> ---
>
> **重要**
>
> 重要
>
> 当将 [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref) 分配给 `reactive` property 时，ref 将被自动解包。
>
> ```typescript
> const count = ref(1)
> const obj = reactive({})
> 
> obj.count = count
> 
> console.log(obj.count) // 1
> console.log(obj.count === count.value) // true
> ```

> 官方建议定义数据的时候, `reactive` 定义复杂的数据类型的数据, `ref` 推荐定义基本数据类型,

---

### Refs

#### ref

> [Refs | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/refs-api.html#ref)

接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 `.value` property，指向该内部值。

`示例`:

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

![image-20220214182536248](http://cdn.ayusummer233.top/img/202202141825974.png)

![image-20220214182603068](http://cdn.ayusummer233.top/img/202202141826424.png)

如果将对象分配为 ref 值，则它将被 [reactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive) 函数处理为深层的响应式对象。

**类型声明：**

```ts
interface Ref<T> {
  value: T
}

function ref<T>(value: T): Ref<T>
```

有时我们可能需要为 ref 的内部值指定复杂类型。可以在调用 `ref` 时传递一个泛型参数以覆盖默认推断，从而简洁地做到这一点：

```ts
const foo = ref<string | number>('foo') // foo 的类型：Ref<string | number>

foo.value = 123 // ok!
```

如果泛型的类型未知，则建议将 `ref` 转换为 `Ref<T>`：

```ts
function useState<State extends string>(initial: State) {
  const state = ref(initial) as Ref<State> // state.value -> State extends string
  return state
}
```

---

### `Computed` 与 `watch`

#### `computed`

> [Computed 与 watch | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed)
>
> [Vue+TypeScript中如何处理computed_语霖BABA的博客-CSDN博客](https://blog.csdn.net/weixin_45614615/article/details/112057767)
>
> [TypeScript 支持 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/typescript-support.html#注解返回类型)

**「computed」** 是[Vue](https://so.csdn.net/so/search?q=Vue&spm=1001.2101.3001.7020)中提供的一个计算属性。它被混入到Vue实例中，所有的getter和setter的this上下文自动的绑定为Vue实例。计算属性的结果会被缓存，除非依赖的响应式property变化才会从新计算。

由于 Vue 声明文件的循环特性，TypeScript 可能难以推断 computed 的类型。因此，你可能需要**注解**计算属性的返回类型。

```typescript
import { defineComponent } from 'vue'

const Component = defineComponent({
  data() {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    // 需要注解
    greeting(): string {
      return this.message + '!'
    },

    // 在使用 setter 进行计算时，需要对 getter 进行注解
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase()
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase()
      }
    }
  }
})
```

**类型声明 computed**

```typescript
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CounterButton',
  setup() {
    let count = ref(0)

    // 只读
    const doubleCount = computed(() => count.value * 2)

    const result = doubleCount.value.split('') // => Property 'split' does not exist on type 'number'
  }
})
```

![image-20220302173614712](http://cdn.ayusummer233.top/img/202203021736254.png)

---

`购物车示例`

![image-20220303153601773](http://cdn.ayusummer233.top/img/202203031536279.png)

---

#### watch

`watch` API 与选项式 API [this.$watch](https://v3.cn.vuejs.org/api/instance-methods.html#watch) (以及相应的 [watch](https://v3.cn.vuejs.org/api/options-data.html#watch) 选项) 完全等效。`watch` 需要侦听特定的数据源，并在单独的回调函数中执行副作用。默认情况下，它也是惰性的——即回调仅在侦听源发生变化时被调用。

- 与 [watchEffect](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect) 相比，`watch` 允许我们：
  - 惰性地执行副作用；
  - 更具体地说明应触发侦听器重新运行的状态；
  - 访问被侦听状态的先前值和当前值。

```vue
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'

let message = ref({
    nav: {
        bar: {
            name: "233"
        }
    }
})

let message2 = reactive({
    nav: {
        bar: {
            title: "233"
        }
    }
})

watch(message, (newVal, oldVal) => {
    console.log("message新值:" + newVal + "，旧值：" + oldVal)
},
    {
        deep: true
    }
)

watch(() => message2.nav.bar.title, (newVal, oldVal) => {
    console.log("message2新值:" + newVal + "，旧值：" + oldVal)
})


</script>

<template>
    <div>
        message.nav.bar.name:
        <input v-model="message.nav.bar.name" type="text" />
    </div>
    <div>
        message2.nav.bar.title:
        <input v-model="message2.nav.bar.title" type="text" />
    </div>
</template>

<style>
</style>
```

![image-20220316184424436](http://cdn.ayusummer233.top/img/202203161844749.png)

---

#### watchEffect

> [Computed 与 watch | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect)
>
> [学习Vue3 第十一章（认识watchEffect高级侦听器）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/122802130)

立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数

```typescript
<script setup lang="ts">
import { watchEffect, ref } from 'vue'

let message = ref<string>('233')
let message2 = ref<string>("寄")

const stop = watchEffect((oninvalidate) => {
    // let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
    console.log("messgae===>" + message.value)
    // console.log("messgae2===>" + message2.value)

    // console.log(ipt, "ell")

    oninvalidate(() => {
        console.log("before")
    })
}, {
    flush: "post",
    onTrigger: (e) => {
        debugger
    }
}

);

const stopWatch = () => stop()

</script>

<template>
    <div>
        <input id="ipt" type="text" v-model="message" />
        <input type="text" v-model="message2" />
        <button @click="stopWatch">停止监听</button>
    </div>
</template>

<style scoped>
</style>
```

![image-20220317143305226](http://cdn.ayusummer233.top/img/202203171433600.png)

- 副作用刷新时机 flush 一般使用post

|          |        pre         |         sync         |        post        |
| :------: | :----------------: | :------------------: | :----------------: |
| 更新时机 | 组件**更新前**执行 | 强制效果始终同步触发 | 组件**更新后**执行 |

- `onTrigger` 可以帮助调试 `watchEffect`

---

## 组合式 API

## Provide/inject

> [组合式 API | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/composition-api.html#provide-inject)
>
> [学习Vue3 第二十三章（依赖注入Provide / Inject）_小满zs的博客-CSDN博客](https://blog.csdn.net/qq1195566313/article/details/123143981)

`provide` 和 `inject` 启用依赖注入。这两者只能在使用当前活动实例的 [`setup()`](https://v3.cn.vuejs.org/api/composition-api.html#setup) 期间被调用。

当出现多层组件嵌套时, 要从根组件向下传递信息除了可以通过逐级传递之外还可以使用依赖注入的方式进行传递

使用上比较简单, 根组件使用 `provide` 定义需要的传给子组件的数据, 然后各级子组件直接使用 `inject` 取值即可

`PI_A.vue`:

```vue
<script setup lang="ts">
import PIB from './PI_B.vue'
import { provide, ref } from 'vue'

provide('flag', ref(false))  // 两个参数, 前者是 key 后者是 value
</script>

<template>
    <div class="PI_A">
        <div>A 组件内容区域</div>
        <PIB></PIB>
    </div>
</template>

<style lang="less" scoped>
.PI_A {
    width: 300px;
    height: 300px;
    background: red;
    color: #fff;
}
</style>
```

`PI_B.vue`

```vue
<script setup lang="ts">
import PIC from './PI_C.vue'
import { inject } from 'vue'

let data = inject('flag')
</script>

<template>
    <div class="PI_B">
        <h1>B 组件内容区域</h1>
        <div>{{ data }}</div>
        <PIC></PIC>
    </div>
</template>

<style lang="less" scoped>
.PI_B {
    width: 300px;
    height: 300px;
    background: blue;
    color: #fff;
}
</style>
```

`PI_C.vue`

```vue
<script setup lang="ts">
import { inject, Ref, ref } from 'vue'

let data = inject<Ref<boolean>>('flag', ref(false)) // 两个参数, 前者是 key 后者是 默认值
</script>

<template>
    <div class="PI_C">
        <!-- 通过按钮改变 data 接受的 flag 值(取反)-->
        <button @click="data = !data">改变 flag</button>
        <h1>C 组件内容区域</h1>
        <h1>{{ data }}</h1>
    </div>
</template>

<style lang="less" scoped>
.PI_C {
    width: 300px;
    height: 300px;
    background: green;
    color: #fff;
}
</style>
```

> ![](http://cdn.ayusummer233.top/img/202203301011461.gif)

> 底层逻辑是使用类似对象继承的方式实现的, 构造子对象的时候会自动继承父级的属性

