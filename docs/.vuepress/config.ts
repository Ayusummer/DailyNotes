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
            {
                text: "笔记工具",
                children: [
                    {
                        text: "VuePress",
                        link: "/NoteTools/VuePress.md",
                    },
                    {
                        text: "Markdown",
                        link: "/NoteTools/Markdown.md",
                    },
                    {
                        text: "Mermaid",
                        link: "/NoteTools/Mermaid.md",
                    },
                    {
                        text: "LaTeX",
                        link: "/NoteTools/LaTex/LateX.md",
                    },
                    {
                        text: "PlantUML",
                        link: "/NoteTools/PlantUML.md",
                    },
                    {
                        text: "VitePress",
                        link: "/NoteTools/VitePress.md",
                    },
                ],
            },
            {
                text: "通识",
                children: [
                    {
                        text: "通识",
                        link: "/通识/通识.md",
                    },
                    {
                        text: "Docker",
                        link: "/通识/Docker/Docker.md",
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
            },
            { text: "日常", link: "/DailyLife/DailyLife.md" },
            {
                text: "网络安全",
                children: [
                    {
                        text: "通识",
                        link: "/网络安全/通识.md",
                    },
                    {
                        text: "随笔",
                        link: "/网络安全/随笔.md",
                    },
                    {
                        text: "kali",
                        link: "/网络安全/kali.md",
                    },
                    {
                        text: "编码",
                        link: "/网络安全/编码.md",
                    },
                    {
                        text: "漏扫工具",
                        link: "/网络安全/漏扫工具/AWVS.md",
                    },
                    {
                        text: "加密算法",
                        link: "/网络安全/加密算法/Hash.md",
                    },
                    {
                        text: "Web安全",
                        link: "/网络安全/Web安全/web安全.md",
                    },
                ],
            },
            {
                text: "Language",
                children: [
                    {
                        text: "Python",
                        link: "/Language/Python/QuickStart.md",
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
                        text: "JavaScript",
                        link: "/Language/JavaScript/JavaScript.md",
                    },
                    {
                        text: "TypeScript",
                        link: "/Language/TypeScript/TypeScript.md",
                    },
                    {
                        text: "Java",
                        link: "/Language/Java/Java.md",
                    },
                ],
            },
            {
                text: "后端",
                children: [
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
                        link: "/后端/数据库/数据库.md",
                    },
                ],
            },
            {
                text: "前端",
                children: [
                    {
                        text: "通识",
                        link: "/前端/通识.md",
                    },
                    {
                        text: "HTML",
                        link: "/前端/HTML/DOM学习.md",
                    },
                    {
                        text: "HTTP",
                        link: "/前端/HTTP/资源和URI.md",
                    },
                    {
                        text: "Vue",
                        link: "/前端/Vue/Vue.md",
                    },
                ],
            },
            {
                text: "社区相关",
                children: [
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
            },
            {
                text: "Bot",
                children: [
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
            },
            {
                text: "CS",
                children: [
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
            },
            {
                text: "学习路线",
                children: [
                    {
                        text: "操作系统",
                        link: "/学习路线/操作系统/Linux/Linux.md",
                    },
                    {
                        text: "机器学习",
                        link: "/学习路线/机器学习/机器学习.md",
                    },
                ],
            },
        ],
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
            "/网络安全/加密算法/": [
                {
                    text: "Hash",
                    link: "/网络安全/加密算法/Hash.md",
                },
                {
                    text: "HMAC",
                    link: "/网络安全/加密算法/HMAC.md",
                },
            ],
            "/网络安全/Web安全/": [
                {
                    text: "web安全",
                    link: "/网络安全/Web安全/web安全.md",
                },
                {
                    text: "靶场",
                    children: [
                        {
                            text: "DVWA",
                            link: "/网络安全/Web安全/靶场/DVWA.md",
                        },
                        {
                            text: "Pikachu",
                            link: "/网络安全/Web安全/靶场/Pikachu.md",
                        },
                    ],
                },
                {
                    text: "漏洞类型",
                    children: [
                        {
                            text: "暴力破解",
                            link: "/网络安全/Web安全/漏洞类型/暴力破解/",
                        },
                        {
                            text: "靶场",
                            children: [
                                {
                                    text: "DVWA",
                                    link: "/网络安全/Web安全/靶场/DVWA.md",
                                },
                                {
                                    text: "Pikachu",
                                    link: "/网络安全/Web安全/靶场/Pikachu.md",
                                },
                            ]
                        },
                        {
                            text: "漏洞类型",
                            children: [
                                {
                                    text: "暴力破解",
                                    link: "/网络安全/Web安全/漏洞类型/暴力破解/",
                                },
                                {
                                    text: "XSS",
                                    link: "/网络安全/Web安全/漏洞类型/XSS/",
                                },
                            ]
                        },
                        {
                            text: "渗透测试工具",
                            children: [
                                {
                                    text: "BurpSuite",
                                    link: "/网络安全/Web安全/渗透测试工具/BurpSuite.md",
                                },
                            ]
                        }
                    ]
                }
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
                    text: "渗透测试工具",
                    children: [
                        {
                            text: "BurpSuite",
                            link: "/网络安全/Web安全/渗透测试工具/BurpSuite.md",
                        },
                    ],
                },
            ],
            "/Language/Python/": [
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
                },
                {
                    text: "libs",
                    children: [
                        {
                            text: "asyncio",
                            link: "/Language/Python/libs/asyncio/异步编程.md",
                        },
                        {
                            text: "json",
                            link: "/Language/Python/libs/json/json.md",
                        },
                        {
                            text: "Matplotlib",
                            link: "/Language/Python/libs/Matplotlib/Matplotlib.md",
                        },
                        {
                            text: "numpy",
                            link: "/Language/Python/libs/numpy/numpy.md",
                        },
                        {
                            text: "OpenCV-python",
                            link: "/Language/Python/libs/OpenCV/OpenCV-python.md",
                        },
                        {
                            text: "Pandas",
                            link: "/Language/Python/libs/Pandas/Pandas.md",
                        },
                        {
                            text: "Pillow",
                            link: "/Language/Python/libs/Pillow/Pillow.md",
                        },
                        {
                            text: "TensorFlow",
                            link: "/Language/Python/libs/TensorFlow/TensorFlow.md",
                        },
                        {
                            text: "turtle",
                            link: "/Language/Python/libs/turtle/turtle.md",
                        },
                    ],
                },
            ],
            "/Language/Java/": [
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
                },
            ],
            "/后端/数据库/": [
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
            "/前端/VUE/": [
                {
                    text: "Vue",
                    link: "/前端/VUE/Vue.md",
                },
                {
                    text: "Vben",
                    link: "/前端/VUE/Vben.md",
                },
                {
                    text: "vue-admin-template",
                    link: "/前端/VUE/vue-admin-template.md",
                },
            ],
        },
    }),
});
