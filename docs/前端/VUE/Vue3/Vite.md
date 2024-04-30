
# Vite

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

---

> [开始 | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/)
>
> Vite 是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
>
> - 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新(HMR) ](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
> - 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
>
> Vite 意在提供开箱即用的配置，同时它的 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 带来了高度的可扩展性，并有完整的类型支持。
>
> 你可以在 [为什么选 Vite](https://cn.vitejs.dev/guide/why.html) 中了解更多关于项目的设计初衷。

> [学习 Vue3 第二章(配置环境) \_qq1195566313 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/122769982)

- `vite` 的优势

  `冷服务`: 默认的构建目标浏览器是能 [在 script 标签上支持原生 ESM](https://caniuse.com/es6-module) 和 [原生 ESM 动态导入](https://caniuse.com/es6-module-dynamic-import)

  HMR 速度快到惊人的 [模块热更新(HMR) ](https://vitejs.cn/guide/features.html#hot-module-replacement)

  Rollup 打包 它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的 并且支持大部分 rollup 插件

```powershell
pnpm create v
```

---

## 目录结构

> [学习 Vue3 第三章(Vite 目录 & Vue 单文件组件) \_qq1195566313 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/122771007)

- `public` - 不会被编译, 放置静态资源

- `assets` - 存放可编译的静态资源

- `components` - 存放组件

- `App.vue` - 全局组件

- `main.ts` - 全局 ts 文件

- `index.html` - 非常重要的入口文件**(webpack，rollup 他们的入口文件都是 enrty input 是一个 js 文件 而 Vite 的入口文件是一个 html 文件，他刚开始不会编译这些 js 文件 只有当你用到的时候 如 script src="xxxxx.js" 会发起一个请求被 vite 拦截这时候才会解析 js 文件) **

- `vite.config.ts` - vite 配置项

- `tsconfig.json` - TS 编译器配置

  > [详解 TypeScript 项目中的 tsconfig.json 配置 - 简书 (jianshu.com)](https://www.jianshu.com/p/0383bbd61a6b)

---

## 路径别名配置

> [(32) vite 配置项目路径别名 - SegmentFault 思否](https://segmentfault.com/a/1190000041417219)

`vite.config.ts`:

```typescript
// vite.config.js/ts
import { join } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
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

如果你是刚创建的 TypeScript 项目，有可能会遇到`找不到模块“path”或其相应的类型声明`的错误提示，安装`@types/node`即可。

```shell
pnpm install @types/node --save-dev
```

---

## 单页面应用与多页面应用

> [前端：你要懂的单页面应用和多页面应用 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903512107663368)

![image-20220209225014834](http://cdn.ayusummer233.top/img/202202092250005.png)

---

## 开始

## 搭建一个 `Vite` 项目

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

## 构建应用

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

## 本地测试应用

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

## 环境变量

Vite 在一个特殊的 **`import.meta.env`** 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

- **`import.meta.env.MODE`**: {string} 应用运行的[模式](https://cn.vitejs.dev/guide/env-and-mode.html#modes)。
- **`import.meta.env.BASE_URL`**: {string} 部署应用时的基本 URL。他由[`base` 配置项](https://cn.vitejs.dev/config/#base)决定。
- **`import.meta.env.PROD`**: {boolean} 应用是否运行在生产环境。
- **`import.meta.env.DEV`**: {boolean} 应用是否运行在开发环境 (永远与 `import.meta.env.PROD`相反)

---

### 生产环境替换

在生产环境中，这些环境变量会在构建时被**静态替换**，因此，在引用它们时请使用**完全静态的字符串**。动态的 key 将无法生效。例如，动态 key 取值 `import.meta.env[key]` 是无效的。

它还将替换出现在 JavaScript 和 Vue 模板中的字符串。这本应是非常少见的，但也可能是不小心为之的。在这种情况下你可能会看到类似 `Missing Semicolon` 或 `Unexpected token` 等错误，例如当 `"process.env.NODE_ENV"` 被替换为 `"development": ""`。有一些方法可以避免这个问题：

- 对于 JavaScript 字符串，你可以使用 unicode 零宽度空格 **`\u200b`** (一个看不见的分隔符)来分割这个字符串，例如： `'import.meta\u200b.env.MODE'`。
- 对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 [\<wbr> 标签](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)，例如：`import.meta.<wbr>env.MODE`。

---

## .env 文件

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
> 一份用于指定模式的文件(例如 `.env.production`) 会比通用形式的优先级更高(例如 `.env`) 。
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

### TypeScript 智能提示

默认情况下，Vite 在 [`vite/client.d.ts`](https://github.com/vitejs/vite/blob/main/packages/vite/client.d.ts) 中为 `import.meta.env` 提供了类型定义。随着在 `.env[mode]` 文件中自定义了越来越多的环境变量，你可能想要在代码中获取这些以 `VITE_` 为前缀的用户自定义环境变量的 TypeScript 智能提示。

要想做到这一点，你可以在 `src` 目录下创建一个 `env.d.ts` 文件，接着按下面这样增加 `ImportMetaEnv` 的定义：

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

## 模式

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

### `listen EACCES: permission denied 127.0.0.1:3000`

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

### `找不到模块“vue”或其相应的类型声明。ts(2307)`

> [vue3 报错解决：找不到模块‘xxx.vue’或其相应的类型声明。(Vue 3 can not find module)  - 小船二 - 博客园 (cnblogs.com)](https://www.cnblogs.com/JasmineHan/p/13673560.html)

使用 vite 构建 vue-ts 项目时发现该报错

![image-20220212003136197](http://cdn.ayusummer233.top/img/202202120031251.png)

原因在于 typescript 只能理解 .ts 文件，无法理解 .vue 文件

解决方案: 在项目根目录或 `src` 文件夹下创建一个后缀为 `.d.ts` 的文件，并写入以下内容：

```typescript
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
```

然后发现本来就已经有了(

![image-20220212004458873](http://cdn.ayusummer233.top/img/202202120044180.png)

重启窗口后再看 `HelloWorld.vue`, 报错消失了 😅

![image-20220212004613823](http://cdn.ayusummer233.top/img/202202120046085.png)

> PS: `App.vue` 里的错误是 `vuter` 报的, 使用 vue3 开发的话可以禁用 `vuter`, 使用 `volar`
>
> > [Volar - vue 终极开发神器！ - 掘金 (juejin.cn)](https://juejin.cn/post/6966106927990308872)

---
