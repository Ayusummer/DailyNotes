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
            {text: "通识", link: "/通识/通识.md"},
            { text: "Language", link: "/Language/CPlusPlus/C++.md" },
            { text: "后端", link: "/后端/FastAPI/FastAPI.md" },
            { text: "前端", link: "/前端/通识.md" },
            { text: "社区相关", link: "/社区相关/Github.md" },
            { text: "Bot", link: "/Bot/" },
            { text: "CS", link: "/CS/统括.md" },
        ],
        // 侧边栏
        sidebar: {
            "/通识/": [
                {
                    text: "通识",
                    link: "/通识/通识.md",
                },
                {
                    text: "Docker",
                    children: [
                        {
                            text: "Docker",
                            link: "/通识/Docker/Docker.md",
                        },
                        {
                            text: "Harbor",
                            link: "/通识/Docker/Harbor.md",
                        }
                    ]
                },
                {
                    text: "换源",
                    link: "/通识/换源.md",
                },
                {
                    text: "外设",
                    link: "/通识/外设.md",
                },
                {
                    text: "Git",
                    link: "/通识/Git.md",
                },
                {
                    text: "VSCode",
                    link: "/通识/VSCode.md",
                },
            ],
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
            "/后端/": [
                {
                    text: "FastAPI",
                    link: "/后端/FastAPI/FastAPI.md",
                },
                {
                    text: "Flask",
                    link: "/后端/Flask/Flask.md",
                },
                {
                    text: "前后端交互数据的编码方案",
                    link: "/后端/前后端交互数据的编码方案.md",
                },
                {
                    text: "数据库",
                    children: [
                        {
                            text: "数据库",
                            link: "/后端/数据库/数据库.md",
                        },
                        {
                            text: "Redis",
                            link: "/后端/数据库/Redis.md",
                        },
                        {
                            text: "SQLAlchemy",
                            link: "/后端/数据库/SQLAlchemy.md",
                        },
                    ],
                },
            ],
            "/前端/": [
                {
                    text: "通识",
                    link: "/前端/通识.md",
                },
                {
                    text: "Vue",
                    children: [
                        {
                            text: "Vue",
                            link: "/前端/Vue/Vue.md",
                        },
                        {
                            text: "Vben",
                            link: "/前端/Vue/Vben.md",
                        },
                        {
                            text: "vue-admin-template",
                            link: "/前端/Vue/vue-admin-template.md",
                        },
                    ],
                },
                {
                    text: "HTML",
                    link: "/前端/HTML/DOM学习.md",
                },
                {
                    text: "HTTP",
                    link: "/前端/HTTP/资源和URI.md",
                },
            ],
            "/社区相关/": [
                {
                    text: "Github",
                    link: "/社区相关/Github.md",
                },
                {
                    text: "Gitee",
                    link: "/社区相关/Gitee.md",
                },
                {
                    text: "Gitlab",
                    link: "/社区相关/Gitlab.md",
                },
            ],
        }
    })
});
