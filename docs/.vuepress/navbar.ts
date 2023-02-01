import { navbar } from "vuepress-theme-hope";

/** 笔记工具导航栏 */
let NoteTools = {
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
};

/** 通识 */
let general = {
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
            text: "VSCode",
            link: "/通识/VSCode.md",
        },
        {
            text: "渐构",
            link: "/通识/渐构-断墨寻径.md",
        }
    ],
};

/** 日常 */
let daily = { text: "日常", link: "/DailyLife/DailyLife.md" };

/** 网络安全 */
let security = {
    text: "网络安全",
    children: [
        {
            text: "通识",
            link: "/网络安全/通识.md",
        },
        {
            text: "工具整理",
            link: "/网络安全/工具整理.md",
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
        {
            text: "随笔",
            link: "/网络安全/随笔.md",
        },
    ],
};

/** 编程语言 */
let language = {
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
        {
            text: "PHP",
            link: "/Language/PHP/PHP学习.md",
        }
    ],
};

/** 后端 */
let backend = {
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
};

/** 前端 */
let frontend = {
    text: "前端",
    children: [
        {
            text: "通识",
            link: "/前端/通识.md",
        },
        {
            text: "HTML",
            link: "/前端/HTML.md",
        },
        {
            text: "HTTP",
            link: "/前端/HTTP/资源和URI.md",
        },
        {
            text: "Vue",
            link: "/前端/Vue/Vue.md",
        },
        {
            text: "CSS",
            link: "/前端/CSS.md",
        },
        {
            text: "Nodejs",
            link: "/前端/Nodejs.md",
        },
        {
            text: "Nginx",
            link: "/前端/Nginx.md",
        }
    ],
};

/** 社区相关 */
let community = {
    text: "社区相关",
    children: [
        {
            text: "Git",
            link: "/社区相关/Git.md",
        },
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
};

/** Bot */
let bot = {
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
};

/** 计算机科学 */
let CS = {
    text: "CS",
    children: [
        {
            text: "CS",
            link: "/CS/统括.md",
        },
        {
            text: "TODOLIST",
            link: "/CS/TODOLIST.md",
        },
    ],
};

/** 学习路线 */
let learningRoad = {
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
};

export const Navbar = navbar([
    NoteTools, // 笔记工具
    general, // 通识
    daily, // 日常
    security, // 网络安全
    language, // 编程语言
    backend, // 后端
    frontend, // 前端
    community, // 社区相关
    bot, // Bot
    // CS, // 计算机科学
    learningRoad, // 学习路线
]);
