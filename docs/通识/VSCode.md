<!--
 * @Author: your name
 * @Date: 2021-02-27 17:22:36
 * @LastEditTime: 2022-04-26 19:14:37
 * @LastEditors: 咸鱼型233
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\通识\VSCode.md
-->
> 用于记录 VSCode 使用的一些随笔

# 目录

- [目录](#目录)
- [VSCode 下载](#vscode-下载)
- [用户代码片段](#用户代码片段)
	- [自用代码片段 stash](#自用代码片段-stash)
	- [KoroFileHeader](#korofileheader)
		- [快捷键](#快捷键)
			- [文件头部注释快捷键](#文件头部注释快捷键)
			- [函数注释注释快捷键](#函数注释注释快捷键)
			- [多行函数参数鼠标选中后函数声明后按快捷键自动提取](#多行函数参数鼠标选中后函数声明后按快捷键自动提取)
- [插件食用记录](#插件食用记录)
	- [open](#open)
	- [Python-autopep8](#python-autopep8)
	- [Terminal](#terminal)
	- [vscode-icons](#vscode-icons)
	- [prettier + ESLint](#prettier--eslint)
	- [Sourcery](#sourcery)
	- [Thunder Client](#thunder-client)
	- [CodeTour](#codetour)
	- [markmap](#markmap)
- [报错收集](#报错收集)
	- [git Missing or invalid credentials.](#git-missing-or-invalid-credentials)


# VSCode 下载
> [VsCode下载，使用国内镜像秒下载_bielaiwuyang1999的博客-CSDN博客](https://blog.csdn.net/bielaiwuyang1999/article/details/117814237)

官网下载 VSCode 速度比较慢, 可以在下载时将直链替换国内镜像地址, 以达到更快的下载速度.  

[VSCode 官网下载地址](https://code.visualstudio.com/Download)  

点击下载后开始下载会获得一个 URL  

![20211119092740](http://cdn.ayusummer233.top/img/20211119092740.png)  

复制该 URL 然后将 /stable 前的地址替换为国内镜像地址再进行下载即可, 如:  

- 原地址: `https://az764295.vo.msecnd.net/stable/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/VSCodeUserSetup-x64-1.62.3.exe`  
  将 `az764295.vo.msecnd.net` 替换为 `vscode.cdn.azure.cn` 得到新地址:  
  新地址: `https://vscode.cdn.azure.cn/stable/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/VSCodeUserSetup-x64-1.62.3.exe`  
  然后通过这个新地址下载即可

---

# 用户代码片段

> [Visual Studio Code 中的代码片段](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

`设置 -> 用户代码片段`

<img src="http://cdn.ayusummer233.top/img/202204182056018.png" alt="image-20220418205657668"  />

![image-20220418205804643](http://cdn.ayusummer233.top/img/202204182058812.png)

---

## 自用代码片段 stash

`python.json`:

```json
{
	// Place your snippets for python here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	"python-template": {
		"prefix": "py",
		"body": [
		  "'''",
		  "-*- encoding: utf-8 -*-",
		  "@文件: $RELATIVE_FILEPATH",
		  "@时间: $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
		  "@作者: 咸鱼型233",
		  "@说明: ",
		  "'''",
		],
	  }
}
```

`vue.json`:

```json
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"vue-template": {
		"prefix": "vue3",
		"body": [
			"<script setup lang=\"ts\">",
			"</script>",
			"",
			"<template>",
			"<div>",
			"</div>",
			"</template>",
			"",
			"<style lang=\"less\" scoped>",
			"</style>"
		],
		"description": "vue3 template"
	}
}
```

---

## KoroFileHeader

> [配置字段 · OBKoro1/koro1FileHeader Wiki (github.com)](https://github.com/OBKoro1/koro1FileHeader/wiki/配置字段)
>
> [安装和快速上手 · OBKoro1/koro1FileHeader Wiki (github.com)](https://github.com/OBKoro1/koro1FileHeader/wiki/安装和快速上手)

可用于创建文件时自动生成注释

个人配置 stash

```json
  // 头部注释
  "fileheader.customMade": {
    "Author": "咸鱼型233", // 创建文件的作者
    "Date": "Do not edit", // 文件创建时间(不变)
    "LastEditors": "咸鱼型233", // 文件最后编辑者
    // 由于编辑文件就会变更最后编辑时间，多人协作中合并的时候会导致merge
    // 可以将时间颗粒度改为周、或者月，这样冲突就减少很多。搜索变更时间格式: dateFormat
    "LastEditTime": "Do not edit", // 文件最后编辑时间
    // 输出相对路径，类似: /文件夹名称/src/index.js
    "FilePath": "Do not edit", // 文件在项目中的相对路径 自动更新
    // 插件会自动将光标移动到Description选项中 方便输入 Description字段可以在specialOptions更改
    "Description": "", // 介绍文件的作用、文件的入参、出参。
    // custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
    // 可以设置多条自定义信息 设置个性签名、留下QQ、微信联系方式、输入空行等
    "custom_string_obkoro1": "",
    // 版权声明 保留文件所有权利 自动替换年份
    "custom_string_obkoro1_copyright": "Copyright (c) ${now_year} by 咸鱼型233, All Rights Reserved. "
  },
  // 函数注释
  "fileheader.cursorMode": {
    "description": "", // 函数注释生成之后，光标移动到这里
    "param": "", // param 开启函数参数自动提取 需要将光标放在函数行或者函数上方的空白行
    "return": "",
  },
  // 插件配置项
  "fileheader.configObj": {
    // 自动添加头部注释黑名单
    "prohibitAutoAdd": [
      "json"
    ],
    "folderBlacklist": [
      "node_modules",
      "README.md",
    ], // 文件夹或文件名禁止自动添加头部注释
  },
```

### 快捷键

#### 文件头部注释快捷键

- 记录文件信息/文件的传参/出参，设置个性签名、留下QQ、微信联系方式、输入空行等等
- 支持用户高度自定义注释选项, 适配各种需求的注释形式。
- 保存文件的时候，自动更新最后的编辑时间和编辑人
- `window`：`ctrl+win+i`,`mac`：`ctrl+cmd+i`, `linux`: `ctrl+meta+i`,`Ubuntu`: `ctrl+super+i`

#### 函数注释注释快捷键

> 更多关于函数参数自动请查阅[配置-函数注释自动提取函数的参数](https://github.com/OBKoro1/koro1FileHeader/wiki/配置#函数注释自动提取函数的参数)文档

- 将光标放在函数行或者将光标放在函数上方的空白行。
- 自动解析函数参数，生成函数参数注释。
- 快捷键：`window`：`ctrl+win+t`,`mac`：`ctrl+cmd+t`,`linux`: `ctrl+meta+t`, `Ubuntu`: `ctrl+super+t`

#### 多行函数参数鼠标选中后函数声明后按快捷键自动提取

1. **鼠标左键选择多行函数声明区域，函数声明区域尽量精准**
2. **按函数注释快捷键**

---

# 插件食用记录

## open
- ![open插件](https://images.gitee.com/uploads/images/2021/0227/172655_7022876f_7703072.png "屏幕截图.png")
- 用于从VSCode中使用系统默认应用打开文件
  - ![open插件使用演示](https://images.gitee.com/uploads/images/2021/0227/172856_1bc3b066_7703072.png "屏幕截图.png")
  - 装了`open`插件之后VSCode不支持打开的文件可以通过右键菜单调用系统默认应用打开该文件;这样既不用再打开文件资源浏览器中的该文件再打开了

---
## Python-autopep8
- 自动按照pep8规范格式化python代码

---
## Terminal
- 命令行终端  
  ![Terminal](https://images.gitee.com/uploads/images/2021/0302/173330_e0cd5e6b_7703072.png "屏幕截图.png")
- 安装之后点击有效较的`Terminal`图标进行使用  
  ![Terminal图标](https://images.gitee.com/uploads/images/2021/0302/173555_2cc6665a_7703072.png "屏幕截图.png")  
  点开之后默认采用当前项目的根目录
  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0302/173623_407de49c_7703072.png "屏幕截图.png")

清空终端信息

1. ctrl+shift+p 呼出命令面板
2. 搜索 open keyboard shortcuts
3. 搜索 workbench.action.terminal.clea

---

## vscode-icons

![](http://cdn.ayusummer233.top/img/202204212054230.png)

---

## prettier + ESLint

> [Prettier · Opinionated Code Formatter](https://prettier.io/)
>
> [Prettier 文档](https://prettier.io/docs/en/index.html)
>
> [Prettier Playground v2.6.2](https://prettier.io/playground/)
>
> [ESLint - Pluggable JavaScript linter - ESLint中文](http://eslint.cn/)

![](http://cdn.ayusummer233.top/img/202204212028180.png)

![image-20220421202926005](http://cdn.ayusummer233.top/img/202204212029364.png)用 ESLint 做约束, 用 Prettier 做代码格式化

-----

## Sourcery

> [Sourcery Documentation](https://docs.sourcery.ai/)

![image-20220517211545800](http://cdn.ayusummer233.top/img/202205172115029.png)

Sourcery-ai 可以给开发者提供 Python 代码的重构建议:

![image-20220517212351093](http://cdn.ayusummer233.top/img/202205172123260.png)

![image-20220517211830963](http://cdn.ayusummer233.top/img/202205172118184.png)

---

## Thunder Client

> [(95) I Don't Need Postman Anymore!! I Use VS Code Instead... - YouTube](https://www.youtube.com/watch?v=AbCTlemwZ1k)

![image-20220517215708231](http://cdn.ayusummer233.top/img/202205172157643.png)

![image-20220517215904117](http://cdn.ayusummer233.top/img/202205172159573.png)

可以当成 Postman 的平替, 这样就不用多开一个软件调试接口了

> 不过目前个人开发后端接口使用的是 FastAPI, 自带可交互式文档, 相对而言 postman 对我来说不重要, 后面使用其他的框架开发 api 的时候应该能用到

---

## CodeTour

> [microsoft/codetour: VS Code extension that allows you to record and play back guided tours of codebases, directly within the editor. (github.com)](https://github.com/microsoft/codetour)

![image-20220520220919634](http://cdn.ayusummer233.top/img/202205202209885.png)

![image-20220520221430457](http://cdn.ayusummer233.top/img/202205202214733.png)

可以用来写业务逻辑步骤或者代码分步骤讲解式引导

---

## markmap

> [Markmap - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode)
>
> [Try markmap](https://markmap.js.org/repl)
>
> [gera2ld/markmap: Visualize your Markdown as mindmaps with Markmap. (github.com)](https://github.com/gera2ld/markmap)

能够将 markdown 文件根据目录层级转换为思维导图

![image-20220814212254716](http://cdn.ayusummer233.top/img/202208142122676.png)

---

# 报错收集

---

## git Missing or invalid credentials.

> [git Missing or invalid credentials. · Issue #107024 · microsoft/vscode (github.com)](https://github.com/microsoft/vscode/issues/107024)

![image-20220503212809785](http://cdn.ayusummer233.top/img/202205032128921.png)

![image-20220503212826597](http://cdn.ayusummer233.top/img/202205032128654.png)

---

## remote-ssh 一直 waiting for server log

> [vscode ssh连接失败_我歌月徘徊、的博客-CSDN博客_vscode连不上ssh](https://blog.csdn.net/myWorld001/article/details/119443079)

