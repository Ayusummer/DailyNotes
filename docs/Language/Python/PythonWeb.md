# Flask + VUE + Electron + gitee

- [Flask + VUE + Electron + gitee](#flask--vue--electron--gitee)
  - [前后端分离开发](#前后端分离开发)
  - [VUE](#vue)
    - [快速上手](#快速上手)
    - [组件库](#组件库)
    - [模板](#模板)
  - [Flask](#flask)
  - [FastAPI](#fastapi)
  - [Electron](#electron)
  - [Tauri](#tauri)
  - [Gitee](#gitee)
  - [Github](#github)


---

## 前后端分离开发

> [前后端分离和混合开发模式 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/266015809)

---

在传统架构模式中，前后端代码存放于同一个代码库中，甚至是同一工程目录下。页面中还夹杂着后端代码。前后端工程师进行开发时，都必须把整个项目导入到开发工具中。

前后端代码库分离，前端代码中有可以进行 Mock测试(通过构造虚拟测试对象以简化测试环境的方法)的伪后端，能支持前端的独立开发和测试。而后端代码中除了功能实现外，还有着详细的测试用例，以保证 API 的可用性，降低集成风险。

---

![img](http://cdn.ayusummer233.top/img/202201202346444.jpeg)

---

在开发期间前后端共同商定好数据接口的交互形式和数据格式。然后实现前后端的并行开发;  
其中前端工程师在开发完成之后可以独自进行 mock测试，而后端也可以使用 Postman 等接口测试软件进行接口自测，然后前后端一起进行功能联调并校验格式，最终进行自动化测试。  

如此一来可以实现前后端代码解耦, 并行开发项目, 能够提升开发效率且易于维护

---

## VUE

> [Vue.js (vuejs.org)](https://v3.cn.vuejs.org/)
>
> [01-Vue的介绍和vue-cli | 千古前端图文教程 (qianguyihao.com)](https://web.qianguyihao.com/12-Vue基础/01-Vue的介绍和vue-cli.html)

---

Vue 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://v3.cn.vuejs.org/guide/single-file-component.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#components--libraries)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

在 Vue 中, 一个核心的概念就是: 数据驱动, 避免手动操作 DOM 元素, 如此一来开发者则无需关心 DOM 是如何渲染的从而有更多时间专注于业务逻辑的实现

---

### 快速上手

> [官方文档: Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/introduction.html#声明式渲染)
>
> [Microsoft Learn: 开始使用 Vue.js](https://docs.microsoft.com/zh-cn/learn/paths/vue-first-steps/)
>
> [01-Vue的介绍和vue-cli | 千古前端图文教程 (qianguyihao.com)](https://web.qianguyihao.com/12-Vue基础/01-Vue的介绍和vue-cli.html#框架和库的区别)
>
> [尚硅谷: Vue快速入门](https://www.bilibili.com/video/BV1AS4y177xJ?p=84)

---

[练习 - 添加计算属性 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/vue-data-events/7-computed-properties-exercise)

<figure class="half">
<img src="http://cdn.ayusummer233.top/img/202201210034499.png" alt="image-20220121003432151" style="zoom:45%;" />
<img src="http://cdn.ayusummer233.top/img/202201210036491.png" alt="image-20220121003647139" style="zoom:45%;" />
</figure>

---

### 组件库

>  [一个 Vue 3 UI 框架 | Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/)
>
> [即时设计 - 可实时协作的专业 UI 设计工具 (js.design)](https://js.design/home)
>
> [资源广场 - 即时设计 (js.design)](https://js.design/square)
>
> [Element 饿了么设计规范库 - 即时设计 (js.design)](https://js.design/resourceDetails?id=61e62e5a019153e9f2501285)
>
> [饿了么页面模版库 - 即时设计 (js.design)](https://js.design/resourceDetails?id=6172ba2c2c1177fe58a12f50)
>
> [VUE优秀UI组件库合集 - 掘金 (juejin.cn)](https://juejin.cn/post/7008817581129728014)

---



### 模板

> [10 个 GitHub 上超火和超好看的管理后台模版，又能愉快的上班摸鱼了 - SegmentFault 思否](https://segmentfault.com/a/1190000038323430)
>
> [Fantastic-admin 官网 (hooray.github.io)](https://hooray.github.io/fantastic-admin/)

---

## Flask

> [欢迎来到 Flask 的世界 — Flask 中文文档( 1.1.2 )  (dormousehole.readthedocs.io)](https://dormousehole.readthedocs.io/en/1.1.2/index.html)
>
> [Python的Web框架Flask + Vue 生成漂亮的词云 - 云+社区 - 腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1592758)
>
> [Flask+Vue 初试牛刀 - Nsubmarine - 博客园 (cnblogs.com)](https://www.cnblogs.com/dream-on-all-in/p/12630690.html)

---

## FastAPI

> [FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/)
>
> [使用 python fastapi+vue 快速搭建网站 | elprup's blog](https://www.elprup.com/2020/09/19/fastapi_vue/)
>
> [请不要把 Flask 和 FastAPI 放到一起比较 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/369591096)

---

## Electron

> [快速入门 | Electron (electronjs.org)](https://www.electronjs.org/zh/docs/latest/tutorial/quick-start#打包并分发您的应用程序)
>
> [Python + Flask + Electron 混合开发入门 (项目演示)_Likianta 的博客-CSDN博客_electron flask](https://blog.csdn.net/Likianta/article/details/89199793)

---

## Tauri

> [tauri-apps/tauri: Build smaller, faster, and more secure desktop applications with a web frontend. (github.com)](https://github.com/tauri-apps/tauri)
>
> [tauri - 可替换 electron 的PC端 SPA 框架 - SegmentFault 思否](https://segmentfault.com/a/1190000022489403)
>
> [手把手教你用 Tauri+Vue 创建小型桌面应用_Crazymryan的博客-CSDN博客](https://blog.csdn.net/Crazymryan/article/details/108016711)

---

## Gitee

> [我的工作台 - Gitee.com](https://gitee.com/)
>
> https://learngitbranching.js.org/?locale=zh_CN

more branches

先 pull 后 commit/push

---

## Github

> [GitHub](https://github.com/)
>
> [dev-sidecar: 开发者边车](https://gitee.com/docmirror/dev-sidecar?_from=gitee_search)
>
> [GitHub Education](https://education.github.com/globalcampus/student)
>
> [开发人员计划|Microsoft 365开发人员中心](https://developer.microsoft.com/zh-CN/microsoft-365/dev-program)
>
> [Free Educational Licenses - Community Support (jetbrains.com)](https://www.jetbrains.com/community/education/?_ga=2.168774308.446884493.1642700868-458041083.1621420760#students)









