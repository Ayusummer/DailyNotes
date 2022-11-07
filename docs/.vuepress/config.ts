import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

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
        navbar: [
            // 导航栏
            { text: "主页", link: "/" },
            { text: "Bot", link: "/Bot/" },
            { text: "CS", link: "/CS/" },
        ],
        sidebar: {
            // 侧边栏
            "/Bot/": [
                {
                    text: "频道Bot",
                    link: "/Bot/频道Bot.md",
                },
                {
                    text: "企微Bot",
                    link: "/Bot/企微Bot.md",
                },
                {
                    text: "commonNotes",
                    link: "/Bot/commonNotes.md",
                },
            ],
        }
    })
});
