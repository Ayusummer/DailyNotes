# FantasticAdmin

> 看Vben源码看的眼花, 准备试试这个~
>
> ---
>
> 后续PS: 官方的 basic 群只有零星几十人而且几乎没人说话, 项目 issue 也没太有, 感觉后面如果遇到问题几乎无法通过社区解决, 暂且观望, 再回去看看 vben

> [文档-Fantastic-admin | 一款 Vue 中后台管理系统框架](https://fantastic-admin.github.io/)
>
> [源码仓库-fantastic-admin/basic: ⭐⭐⭐⭐⭐ 一款开箱即用的 Vue 中后台管理系统框架，支持多款 UI 组件库，兼容PC、移动端。vue-admin, vue-element-admin, vue后台, 后台系统, 后台框架, 管理后台, 管理系统 (github.com)](https://github.com/fantastic-admin/basic)

---

- [FantasticAdmin](#fantasticadmin)
  - [部署](#部署)
  - [排错](#排错)
    - [找不到模块“@/views/login.vue”或其相应的类型声明。ts(2307)](#找不到模块viewsloginvue或其相应的类型声明ts2307)

---

## 部署

> [开始 | Fantastic-admin 官方文档](https://fantastic-admin.github.io/guide/start.html)

拉取 github 源码(或者其稳定可以直接下 release 里源码压缩包), 这里为了跟着更新所以拉取了源码

```bash
git clone https://github.com/fantastic-admin/basic.git
```

然后可以通过切换 branch 到 `example` 来查看带演示的源码

---

安装依赖:

```bash
pnpm install
```

运行:

```bash
pnpm run dev
```

访问 `http://localhost:9000` 以查看前端页面

---





---

## 排错

### 找不到模块“@/views/login.vue”或其相应的类型声明。ts(2307)

> [declare module '*.vue'-掘金 (juejin.cn)](https://juejin.cn/s/declare module '*.vue')

.vue 文件是 Vue.js 组件的文件格式，它包含了 Vue.js 模板、样式和脚本。在使用 Vue.js 开发应用时，我们通常会将一个组件封装到一个 .vue 文件中。这个 .vue 文件可以被其他组件引用和使用。

但是 TypeScript 编译器默认并不支持 .vue 文件的类型检查，因为 .vue 文件不是标准的 JavaScript 模块格式。为了解决这个问题，我们可以在项目中添加 .d.ts 文件，使用 declare module '*.vue' 来声明 .vue 文件模块。

![image-20240412170300951](http://cdn.ayusummer233.top/DailyNotes/202404121703172.png)

![image-20240412170415903](http://cdn.ayusummer233.top/DailyNotes/202404121704985.png)

---





















