import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";


export default defineUserConfig({
    lang: "zh-CN",
    // 站点的标题
    title: "DailyNotes",
    // 站点的描述
    description: "233的日常学习记录",
    // 站点配置, 设置为 /[仓库名]/
    base: "/DailyNotes/",

    // 主题配置
    theme: hopeTheme({
        navbar: Navbar,
        // 侧边栏
        sidebar: {
            "/通识/Docker/": [
                {
                    text: "Docker",
                    link: "/通识/Docker/Docker.md",
                },
                {
                    text: "Harbor",
                    link: "/通识/Docker/Harbor.md",
                },
            ],
        }),
        sitemapPlugin({
            // 配置选项
            hostname: "ayusummer.github.io",
        }),
        seoPlugin({
            // 你的选项
            hostname: "ayusummer.github.io",
        }),
    ],
});
