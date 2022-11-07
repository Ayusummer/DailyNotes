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
            { text: "Bot", link: "/Bot/" },
            { text: "CS", link: "/CS/统括.md" },
            { text: "Language", link: "/Language/CPlusPlus/C++.md" },
        ],
        sidebar: {
            // 侧边栏
            "/Bot/": [
                {
                    text: "Bot",
                    link: "/Bot/",
                },
                {
                    text: "频道Bot",
                    link: "/Bot/频道Bot.md",
                },
                {
                    text: "企微Bot",
                    link: "/Bot/企微Bot.md",
                },
            ],
            "/CS/": [
                {
                    text: "CS",
                    link: "/CS/统括.md",
                },
                {
                    text: "数据库",
                    link: "/CS/数据库.md",
                },
                {
                    text: "TODOLIST",
                    link: "/CS/TODOLIST.md",
                },
            ],
            "/Language/": [
                {
                    text: "Python",
                    children: [
                        {
                            text: "QuickStart",
                            link: "/Language/Python/QuickStart.md",
                        },
                        {
                            text: "开发环境",
                            link: "/Language/Python/开发环境.md",
                        },
                        {
                            text: "Note-python",
                            link: "/Language/Python/Note-python.md",
                        },
                        {
                            text: "PEP8",
                            link: "/Language/Python/PEP8.md",
                        },
                        {
                            text: "PythonWeb",
                            link: "/Language/Python/PythonWeb.md",
                        }
                    ],
                },
                {
                    text: "C++",
                    link: "/Language/CPlusPlus/C++.md",
                },
                {
                    text: "Go",
                    link: "/Language/Go/Go.md",
                },
                {
                    text: "Java",
                    children: [
                        {
                            text: "Java",
                            link: "/Language/Java/Java.md",
                        },
                        {
                            text: "Java代码审计",
                            link: "/Language/Java/Java代码审计.md",
                        },
                        {
                            text: "JavaWeb",
                            link: "/Language/Java/JavaWeb.md",
                        }
                    ],
                },
                {
                    text: "JavaScript",
                    link: "/Language/JavaScript/JavaScript.md",
                },
                {
                    text: "TypeScript",
                    link: "/Language/TypeScript/TypeScript.md",
                },
            ],
        }
    })
});
