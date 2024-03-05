import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export default hopeTheme({
  // logo
  logo: "/logo.svg",

  // 主题色选择器
  themeColor: true,

  // 导航栏
  navbar: Navbar,
  // 侧边栏
  sidebar: Sidebar,

  // 仓库链接
  repo: "Ayusummer/DailyNotes",
  // 文档仓库地址，默认同主题选项中的 repo
  docsRepo: "Ayusummer/DailyNotes",
  // 文档在仓库中的目录，默认为根目录
  docsDir: "docs",
  // 文档存放的分值，默认为 "main"
  docsBranch: "main",

  // 全屏
  fullscreen: true,

  // 插件相关
  plugins: {
    seo: true,
    // markdown 增强
    mdEnhance: {
      tabs: true,
      mermaid: true,
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 与选项卡功能相同，但它是专门为代码块构建的。
      // 代码选项卡只会渲染 @tab 标记后的代码块，其他 Markdown 内容将被忽略
      codetabs: true,
      // 文件支持任务列表
      tasklist: true,
      // 支持标记 使用 == == 进行标记。请注意两边需要有空格
      mark: true,
    },
    searchPro: {
      indexContent: true,
    },
    sitemap: {},
  },
});
