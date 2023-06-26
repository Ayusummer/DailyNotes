import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  lang: "zh-CN",
  // 站点的标题
  title: "DailyNotes",
  // 站点的描述
  description: "233的日常学习记录",
  // 站点配置, 设置为 /[仓库名]/
  base: "/DailyNotes/",

  plugins: [
    searchProPlugin({
      // 配置选项
    }),
    sitemapPlugin({
      // 配置选项
      hostname: "ayusummer.github.io",
    }),
  ],

  // 主题配置
  theme,
});
