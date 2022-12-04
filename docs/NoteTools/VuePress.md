# VuePress

## pnpm,Github Actions, Github Pages 自动化部署文档

> [快速上手 | VuePress (vuejs.org)](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)
>
> ---

- 使用 [pnpm](https://pnpm.io/zh/) 时，需要安装 `vue` 和 `@vuepress/client` 作为 peer-dependencies ，即 

  ````sh
  pnpm add -D vue @vuepress/client@next
  ````

- 然后将 VuePress 安装为本地依赖

  ```sh
  pnpm install -D vuepress@next
  ```

- 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

  ```json
  {
    "scripts": {
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
    }
  }
  ```

- 编辑 `.gitignore` 文件, 添加临时目录和缓存目录以及 `dist` 目录

  ```properties
  node_modules
  .temp
  .cache
  docs/.vuepress/dist
  ```

- 在根目录下创建 `docs` 目录然后新建一个 `README.md` 文件并随便输入些文字
- 可以先在本地尝试运行和打包下

  ```sh
  pnpm run docs:dev
  pnpm run dos:build
  ```

- 在 `docs/.vuepress` 目录下创建 `config.js`

  > [配置 | VuePress (vuejs.org)](https://v2.vuepress.vuejs.org/zh/reference/config.html)

  ```js
  module.exports = {
      // 站点的标题
      title: "VuePressTest",
      // 站点的描述
      description: "This is a blog.",
      // 站点配置, 设置为 /[仓库名]/
      base: '/VuePressTest/',
  }
  ```

> 需要注意的是, 这里的 base 务必配置好, 否则之后部署完后可能会出现引入资源找不到的情况
>
> > 因为默认 base 是 `/`, 所以如果将站点部署到具体到仓库的子路径的话, 构建的 html 文档中的资源引入链接仍然指向了根目录, 就会 404
>
> > [React/Vue 项目在 GitHub Pages 上部署时资源的路径问题_mob60475707634e的技术博客_51CTO博客](https://blog.51cto.com/u_15127702/4680048)
> >
> > [部署 | VuePress (vuejs.org)](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)

---

- 在根目录下新建 `.github/workflows/docs.yml`'

```yaml
name: Deploy Docs

on:
  push:
    branches:
      # make sure this is the branch you are using
      - main

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # if your docs needs submodules, uncomment the following line
          # submodules: true

      - name: Setup Node.js environment
        uses: actions/setup-node@v3.5.1
        with:
          # 选择要使用的 node 版本
          node-version: '18'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2.2.4
        with: 
          version: 6.0.2


      - name: Install Deps
        run: pnpm install

      - name: Build Docs
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        # 需要注意的是 github pages的jekyll模版会忽略下划线开头的文件
        # 所以要禁用jekyll才能正确加载带下划线的资源  
        # 可以通过在项目根目录下创建一个名为 .nojekyll 的空文件来禁用jekyll
        # 关于 -run 和 run | 的区别可参阅:  
        # https://stackoverflow.com/questions/59529042/difference-between-run-and-multiple-runs-in-github-actions
        run: |-
          pnpm run docs:build
          echo > docs/.vuepress/dist/.nojekyll


      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: GitHub Pages
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with: 
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

- 提交并推送你的修改, 然后可以在 Github 仓库的 Actions 中查看下运行状态

> ![image-20221107011741954](http://cdn.ayusummer233.top/img/202211070117032.png)

---

- 打开仓库的 `Settings->Pages` 将 `BUild and deployment->source` 修改为 `Deploy from a branch`(默认值就是这个), 然后选择 `gh-pages->/root` 并 `Save`

> ![image-20221107013516165](http://cdn.ayusummer233.top/img/202211070135213.png)

- 然后就可以在 `Actions` 界面看到多了一个 Action

> ![image-20221107013604098](http://cdn.ayusummer233.top/img/202211070136126.png)
>
> ![image-20221107013613106](http://cdn.ayusummer233.top/img/202211070136148.png)

- 仓库主页右下角也会多一个 Environment, 在上一步的 Actions 中可以看到部署链接, 亦可以在此处看到部署链接

> ![image-20221107013756939](http://cdn.ayusummer233.top/img/202211070137988.png)
>
> ![image-20221107013848612](http://cdn.ayusummer233.top/img/202211070138645.png)

![image-20221107013913233](http://cdn.ayusummer233.top/img/202211070139287.png)

---

## 配合 vuepress_theme_hope 食用

> [主页 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/)
>
> [安装/使用 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/get-started/install.html)
>
> ---

```bash
# 使用 vuepress_theme_hope 初始化一个 vuepress 项目
pnpm create vuepress-theme-hope@next [dir]

# 获取为当前项目添加 vuepress_theme_hope 支持
pnpm install -D vuepress-theme-hope@next
```

> 这里的 `[dir]` 是一个参数，你需要使用真实的文件夹名称替换它，例如 `docs`、`src` 或其他你喜欢的名称。

---

## 报错收集

### `Vuepress Error: ENOSPC: System limit for number of file watchers reach`

> [Error: ENOSPC: System limit for number of file watchers reached - Get Help - Vue Forum (vuejs.org)](https://forum.vuejs.org/t/error-enospc-system-limit-for-number-of-file-watchers-reached/107904/3)
>
> ---

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

---



