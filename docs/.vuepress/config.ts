import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { cut } from "nodejs-jieba";

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
      // 索引全部内容
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
      ],
      indexOptions: {
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
    sitemapPlugin({
      // 配置选项
      hostname: "ayusummer.github.io",
    }),
  ],

  // 主题配置
  theme,
});
