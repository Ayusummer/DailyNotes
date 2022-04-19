<!--
 * @Author: your name
 * @Date: 2021-02-27 17:22:36
 * @LastEditTime: 2021-03-02 17:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\社区相关\VSCode.md
-->
> 用于记录 VSCode 使用的一些随笔

# 目录

- [目录](#目录)
- [VSCode 下载](#vscode-下载)
- [用户代码片段](#用户代码片段)
	- [自用代码片段 stash](#自用代码片段-stash)
- [插件食用记录](#插件食用记录)
	- [open](#open)
	- [Python-autopep8](#python-autopep8)
	- [Terminal](#terminal)


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