# VitePress

> [vuejs/vitepress: Vite & Vue powered static site generator. (github.com)](https://github.com/vuejs/vitepress)
>
> [VitePress | Vite & Vue Powered Static Site Generator (vuejs.org)](https://vitepress.vuejs.org/)
>
> [什么是 VitePress？ | VitePress中文网 (vitejs.cn)](https://vitejs.cn/vitepress/)
>
> ---

- [VitePress](#vitepress)
  - [快速开始 - 搭建一个 vitepress 项目](#快速开始---搭建一个-vitepress-项目)
    - [新建一个项目目录并使用自己喜欢的包管理工具进行初始化(以 pnpm 为例)](#新建一个项目目录并使用自己喜欢的包管理工具进行初始化以-pnpm-为例)
    - [安装依赖](#安装依赖)
    - [编辑测试文档](#编辑测试文档)
    - [启动开发环境](#启动开发环境)
    - [添加更多页面](#添加更多页面)
- [ideas](#ideas)
  - [权限控制](#权限控制)


## 快速开始 - 搭建一个 vitepress 项目

### 新建一个项目目录并使用自己喜欢的包管理工具进行初始化(以 pnpm 为例)

```bash
pnpm init
```

初始化后会在当前项目目录生成 `package.json` 文件, 使用 pnpm 需要编辑下该文件, 将下面的内容作为键值插入到 json 字典中

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

---

### 安装依赖

```bash
pnpm install vitepress vue -D
```

---

### 编辑测试文档

在项目目录下创建一个 `docs` 目录, 进入该目录创建一个 `index.md` 文件

随便编辑下该文档用于待会儿测试页面内容显示

---

### 启动开发环境

在 `packages.json` 中添加一些 `scripts`

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

在本地运行 vitepress

```bash
pnpm docs:dev
```

默认会在本地的 `5173` 端口启动服务, 访问 `http://localhost:5173/` 即可查看页面

![image-20220930002251257](http://cdn.ayusummer233.top/img/202209300023668.png)

---

### 添加更多页面

按照类似目录结构创建更多文档

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

---

# ideas

## 权限控制

1. 使用类似 github pages 的私有部署(需要 github pro), 不清楚 gitlab 有没有对应功能
2. 前端 mock 个登录接口写上 mock 的账密
3. 后台新写个权限控制系统

---

