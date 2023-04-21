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
            text: "Linux",
            link: "/通识/Linux.md",
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
            text: "kali",
            link: "/网络安全/kali.md",
        },
        {
            text: "编码",
            link: "/网络安全/编码.md",
        },
        {
            text: "抓包发包",
            link: "/网络安全/抓包发包.md",
        },
        {
            text: "内网渗透",
            link: "/网络安全/内网渗透/",
        },
        {
            text: "信息收集",
            link: "/网络安全/信息收集/端口扫描/nmap.md",
        },
        {   
            text: "ATTCK",
            link: "/网络安全/ATTCK/",
        },
        {
            text: "加密算法",
            link: "/网络安全/加密算法/Hash.md",
        },
        {
            text: "Web安全",
            link: "/网络安全/Web安全/",
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
            link: "/Language/CPlusPlus/CPP.md",
        },
        {
            text: "Go",
            link: "/Language/Go/",
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

/** 娱乐 */
let entertainment = {
    text: "娱乐",
    children: [
        {
            text: "Bot",
            link: "/娱乐/Bot/",
        },
        {
            text: "sovits",
            link: "/娱乐/sovits/sovits_32k.md",
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
    entertainment, // 娱乐
    // bot, // Bot
    // CS, // 计算机科学
    learningRoad, // 学习路线
]);
