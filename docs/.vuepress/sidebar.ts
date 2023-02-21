import { sidebar } from "vuepress-theme-hope";

let NoteTools = [
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
];

let Docker = [
    {
        text: "Docker",
        link: "/通识/Docker/Docker.md",
    },
    {
        text: "Harbor",
        link: "/通识/Docker/Harbor.md",
    },
];

/** 加密算法侧边栏 */
let security_encrypt = [
    {
        text: "Hash",
        link: "/网络安全/加密算法/Hash.md",
    },
    {
        text: "HMAC",
        link: "/网络安全/加密算法/HMAC.md",
    },
];

/** 网络安全-web安全侧边栏 */
let security_web = [
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
                text: "XSS",
                link: "/网络安全/Web安全/漏洞类型/XSS/",
            },
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
    {
        text: "Web漏洞通用型Python复现脚本编写指南",
        link: "/网络安全/Web安全/Web漏洞通用型Python复现脚本编写指南/",
    },
];

/** language-python */
let language_python = [
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
            {
                text: "Rocketry",
                link: "/Language/Python/libs/Rocketry/",
            },
        ],
    },
];

/** language-java */
let language_java = [
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
];

/** 后端-数据库 */
let backend_database = [
    {
        text: "数据库",
        link: "/后端/数据库/数据库.md",
    },
    {
        text: "MySQL",
        link: "/后端/数据库/MySQL.md",
    },
    {
        text: "SQLite",
        link: "/后端/数据库/SQLite.md",
    },
    {
        text: "Redis",
        link: "/后端/数据库/Redis.md",
    },
    {
        text: "SQLAlchemy",
        link: "/后端/数据库/SQLAlchemy.md",
    },
];

/** 前端-Vue */
let frontend_vue = [
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
];

/** Bot */
let Bot = [
    {
        text: "Bot",
        link: "/娱乐/Bot/",
    },
    {
        text: "频道Bot",
        link: "/娱乐/Bot/频道Bot.md",
    },
    {
        text: "企微Bot",
        link: "/娱乐/Bot/企微Bot.md",
    },
];

export const Sidebar = sidebar({
    "/NoteTools/": NoteTools,
    "/通识/Docker/": Docker,
    "/网络安全/加密算法/": security_encrypt,
    "/网络安全/Web安全/": security_web,
    "/Language/Python/": language_python,
    "/Language/Java/": language_java,
    "/后端/数据库/": backend_database,
    "/前端/VUE/": frontend_vue,
    "/娱乐/Bot/": Bot,
});
