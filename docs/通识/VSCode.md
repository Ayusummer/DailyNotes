# VSCode

---

## VSCode 下载
> [VsCode下载，使用国内镜像秒下载_bielaiwuyang1999的博客-CSDN博客](https://blog.csdn.net/bielaiwuyang1999/article/details/117814237)

[官网下载 VSCode](https://code.visualstudio.com/Download) 速度比较慢, 可以在下载时将直链替换国内镜像地址, 以达到更快的下载速度.  

在下载按钮上右键复制链接, 或者点击下载后在浏览器下载或者是其他下载工具中可以找到软件下载的直链

![20211119092740](http://cdn.ayusummer233.top/img/20211119092740.png)  

复制该 URL 然后将 /stable 前的地址替换为国内镜像地址再进行下载即可, 如:  

- 原地址: `https://az764295.vo.msecnd.net/stable/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/VSCodeUserSetup-x64-1.62.3.exe`  
  将 `az764295.vo.msecnd.net` 替换为 `vscode.cdn.azure.cn` 得到新地址:  
  新地址: `https://vscode.cdn.azure.cn/stable/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/VSCodeUserSetup-x64-1.62.3.exe`  
  然后通过这个新地址下载即可

---

## 安装

:::tabs

@tab:active ubuntu

```bash
wget https://az764295.vo.msecnd.net/stable/97dec172d3256f8ca4bfb2143f3f76b503ca0534/code_1.74.3-1673284829_amd64.deb
su root
apt install ./code_1.74.3-1673284829_amd64.deb
```

> ps: 下载链接请参阅 [官网](https://code.visualstudio.com/)  
> 直接 `sudo apt install ... ` 可能会报权限不够的问题，先 `su root` 似乎不会

安装完成后需要使用

```bash
sudo code --no-sandbox --disable-gpu-sandbox --user-data-dir="~/.vscode"
```

来以管理员模式打开 VSCode, 但是似乎无法使用中文输入法(ubuntu2204)

不用管理员模式, 直接打开 VSCode 的话似乎无法编辑系统盘之外硬盘的文件, 这是因为挂载硬盘的时候可能使用的 root 账户, 所以普通用户没有权限, 可以 `su root` 后使用 `chmod -R 777 [目标目录]` 来放通权限

:::


---

## 查找替换

### 使用正则表达式

> [VS Code正则匹配替换 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/414806629)
>
> ---

```
(&#[0-9]{2,3};)
`$1`
```

> 需要注意的是匹配部分的 `()` 可以划定分组, 在替换部分可以使用 `$x` 来指代匹配到的分组

![image-20221213152425236](http://cdn.ayusummer233.top/DailyNotes/202212131524550.png)

![image-20221213152552391](http://cdn.ayusummer233.top/DailyNotes/202212131525580.png)

```
(&[a-z]{2,6}[0-9]{0,2};)
`$1`
```

![image-20221213152705815](http://cdn.ayusummer233.top/DailyNotes/202212131527487.png)

![image-20221213152729921](http://cdn.ayusummer233.top/DailyNotes/202212131527100.png)

---

## 用户代码片段

> [Visual Studio Code 中的代码片段](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

`设置 -> 用户代码片段`

<img src="http://cdn.ayusummer233.top/img/202204182056018.png" alt="image-20220418205657668"  />

![image-20220418205804643](http://cdn.ayusummer233.top/img/202204182058812.png)

---

### 自用代码片段 stash

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

### KoroFileHeader

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

#### 快捷键

##### 文件头部注释快捷键

- 记录文件信息/文件的传参/出参，设置个性签名、留下QQ、微信联系方式、输入空行等等
- 支持用户高度自定义注释选项, 适配各种需求的注释形式。
- 保存文件的时候，自动更新最后的编辑时间和编辑人
- `window`：`ctrl+win+i`,`mac`：`ctrl+cmd+i`, `linux`: `ctrl+meta+i`,`Ubuntu`: `ctrl+super+i`

##### 函数注释注释快捷键

> 更多关于函数参数自动请查阅[配置-函数注释自动提取函数的参数](https://github.com/OBKoro1/koro1FileHeader/wiki/配置#函数注释自动提取函数的参数)文档

- 将光标放在函数行或者将光标放在函数上方的空白行。
- 自动解析函数参数，生成函数参数注释。
- 快捷键：`window`：`ctrl+win+t`,`mac`：`ctrl+cmd+t`,`linux`: `ctrl+meta+t`, `Ubuntu`: `ctrl+super+t`

##### 多行函数参数鼠标选中后函数声明后按快捷键自动提取

1. **鼠标左键选择多行函数声明区域，函数声明区域尽量精准**
2. **按函数注释快捷键**


---

## 扩展食用记录

### 基础使用

#### 汉化

![image-20221209094145345](http://cdn.ayusummer233.top/DailyNotes/202212090941728.png)

可以以中文模式显示 VSCode UI

![image-20221209094224450](http://cdn.ayusummer233.top/DailyNotes/202212090942961.png)

![image-20221209094235641](http://cdn.ayusummer233.top/DailyNotes/202212090942916.png)

---

#### open

![open插件](http://cdn.ayusummer233.top/DailyNotes/202212090939646.png "屏幕截图.png")

用于从VSCode中使用系统默认应用打开文件

![open插件使用演示](http://cdn.ayusummer233.top/DailyNotes/202212090939503.png "屏幕截图.png")

装了`open`插件之后VSCode不支持打开的文件可以通过右键菜单调用系统默认应用打开该文件;这样既不用再打开文件资源浏览器中的该文件再打开了

---

#### vscode-icons

该扩展可以让左侧文档树文档类型更加明显

![](http://cdn.ayusummer233.top/img/202204212054230.png)

![image-20221210221817120](http://cdn.ayusummer233.top/img/202212102218612.png)


---

#### Resource Monitor

显示设备(可以是远程连接的设备)当前的 CPU, 内存, 硬盘状态

![image-20221118143151456](https://cdn.ayusummer233.top/img/image-20221118143151456.png)

![image-20221118143221753](https://cdn.ayusummer233.top/img/image-20221118143221753.png)

---

### Drawio Preview

安装了 Drawio Preview 扩展后支持打开 `.drawio` 文件并开始绘图

![image-20221209103532954](http://cdn.ayusummer233.top/DailyNotes/202212091035875.png)

![image-20221209103632603](http://cdn.ayusummer233.top/DailyNotes/202212091037830.png)

---



---

### CodeTour

> [microsoft/codetour: VS Code extension that allows you to record and play back guided tours of codebases, directly within the editor. (github.com)](https://github.com/microsoft/codetour)
>
> ---

该扩展可以用来写业务逻辑步骤或者代码分步骤讲解式引导

![image-20220520220919634](http://cdn.ayusummer233.top/img/202205202209885.png)

![image-20220520221430457](http://cdn.ayusummer233.top/img/202205202214733.png)

---

### Markdown 相关

个人编辑 Markdown 文件更倾向于使用 Typora, VSCode 中更多用于预览仓库中的 Markdown 文件以及格式化 markdown 文本

---

---

### 远程开发

#### Remote - SSH + Docker + Dev Containers

以 Vulhub 为例

使用 [Remote-SSH 链接远程主机](https://ayusummer.github.io/DailyNotes/%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/Linux/Linux.html#vscode-remote-ssh)

![image-20221209094819132](http://cdn.ayusummer233.top/DailyNotes/202212090948481.png)

安装了 Docker 插件后可以便捷地在左侧查看当前的容器以及镜像列表以及 Compose 列表

![image-20221209095119504](http://cdn.ayusummer233.top/DailyNotes/202212090951840.png)

![image-20221209095335524](http://cdn.ayusummer233.top/DailyNotes/202212090956072.png)

> 图中没显示 stop 的容器是因为容器太多了, stop 的容器可能很久都不会用了所以直接全清了, 镜像基本全推过 Habor 了所以也没什么顾虑

在安装了 Dev Containers 扩展后在任意一个容器上右键 `Attach Visual Studio Code`  会在页面上方弹出选择容器的菜单, 选择对应容器即可使用 VSCode 打开该容器

![image-20221209095559457](http://cdn.ayusummer233.top/DailyNotes/202212090956480.png)

![image-20221209095703833](http://cdn.ayusummer233.top/DailyNotes/202212090957188.png)

![image-20221209095856499](http://cdn.ayusummer233.top/DailyNotes/202212090958494.png)

像首次 SSH 连接远程主机一样, 首次进入该容器时也会在其内安装 server

![image-20221209100015216](http://cdn.ayusummer233.top/DailyNotes/202212091000601.png)

安装完 Server 后便连上了

![image-20221209100109900](http://cdn.ayusummer233.top/DailyNotes/202212091001782.png)

选择 `打开文件夹` 打开相应目录后即可像正常远程开发一样使用了

![image-20221209100335268](http://cdn.ayusummer233.top/DailyNotes/202212091003613.png)

---

### 网络相关

---

#### REST Client

安装了 REST Client 扩展后可以直接发送 Burp 拦截的请求包, 比如 pikachu 靶场的 sql 宽字节注入:

![image-20221209101309491](http://cdn.ayusummer233.top/DailyNotes/202212091013530.png)

在当前窗口右键选择 `Copy Request As cURL` 还可以拷贝当前请求为 cURL 命令

![image-20221209101348338](http://cdn.ayusummer233.top/DailyNotes/202212091013539.png)

> 拷贝后的 cURL 命令可以直接在 Linux 上发, 也可以导入到 Thunder Client 或者利用 curlconvert 转换为代码

----

#### curlconverter

安装了 `curlconverter` 后可以将剪贴板上的 cURL 命令生成代码, 流程如下:

使用 REST Client 将 Burp 拦截的请求转换为 cURL 命令后新建一个代码文件, 如 `xxx.py`, 打开该文件后右键可以看到 `Paste cURL As Python`, 点击后即可生成对应的 Python 代码

![image-20221209101906926](http://cdn.ayusummer233.top/DailyNotes/202212091019127.png)

> PS: 有些请求在被自定义修改后使用 REST Client 可能不见得能生成对应的 cURL 命令, 比如 SQL 注入的请求, 此时可以选择在修改前的请求上 copy cURL 命令

![image-20221209102540506](http://cdn.ayusummer233.top/DailyNotes/202212091025957.png)

> 实际上查看 curlconverter 扩展页面可以看到最下面有说受限于 VSCode, 该扩展可能比起官网的版本要老很多, 所以当认为该扩展不太好使时可以去其官网 [Convert curl commands to code (curlconverter.com)](https://curlconverter.com/) 试试
>
> ![image-20221209102648796](http://cdn.ayusummer233.top/DailyNotes/202212091026124.png)

---

#### Thunder Client

> [(95) I Don't Need Postman Anymore!! I Use VS Code Instead... - YouTube](https://www.youtube.com/watch?v=AbCTlemwZ1k)

![image-20220517215708231](http://cdn.ayusummer233.top/img/202205172157643.png)

![image-20220517215904117](http://cdn.ayusummer233.top/img/202205172159573.png)

可以当成 Postman 的平替, 这样就不用多开一个软件调试接口了

![image-20221209102833257](http://cdn.ayusummer233.top/DailyNotes/202212091028826.png)

支持预览响应页

![image-20221209102849877](http://cdn.ayusummer233.top/DailyNotes/202212091028162.png)

支持将请求生成对应语言代码

![image-20221209103032673](http://cdn.ayusummer233.top/DailyNotes/202212091030230.png)



![image-20221209103104828](http://cdn.ayusummer233.top/DailyNotes/202212091031186.png)


---

### 编程相关

---

#### Error Lens

结合相关语言的语法提示扩展, 安装 `Error Lens` 扩展后可以在当前报错行显示报错/告警信息

![image-20221209100440296](http://cdn.ayusummer233.top/DailyNotes/202212091004135.png)

![image-20221209100717053](http://cdn.ayusummer233.top/DailyNotes/202212091007347.png)

#### Python

---
##### Python-autopep8
- 自动按照pep8规范格式化python代码


-----

##### Sourcery

> [Sourcery Documentation](https://docs.sourcery.ai/)

![image-20220517211545800](http://cdn.ayusummer233.top/img/202205172115029.png)

Sourcery-ai 可以给开发者提供 Python 代码的重构建议:

![image-20220517212351093](http://cdn.ayusummer233.top/img/202205172123260.png)

![image-20220517211830963](http://cdn.ayusummer233.top/img/202205172118184.png)


---

#### 前端

---

##### prettier + ESLint

> [Prettier · Opinionated Code Formatter](https://prettier.io/)
>
> [Prettier 文档](https://prettier.io/docs/en/index.html)
>
> [Prettier Playground v2.6.2](https://prettier.io/playground/)
>
> [ESLint - Pluggable JavaScript linter - ESLint中文](http://eslint.cn/)

![](http://cdn.ayusummer233.top/img/202204212028180.png)

![image-20220421202926005](http://cdn.ayusummer233.top/img/202204212029364.png)用 ESLint 做约束, 用 Prettier 做代码格式化

----

### 已弃用扩展

---
#### ~~Terminal~~

> PS: 新版本 VSCode 该扩展已弃用, 目前直接使用工具栏上的终端指令
>
> ![image-20221209094459551](http://cdn.ayusummer233.top/DailyNotes/202212090945117.png)

- 命令行终端  
  ![Terminal](http://cdn.ayusummer233.top/DailyNotes/202212090939597.png "屏幕截图.png")
- 安装之后点击有效较的`Terminal`图标进行使用  
  ![Terminal图标](http://cdn.ayusummer233.top/DailyNotes/202212090939498.png "屏幕截图.png")  
  点开之后默认采用当前项目的根目录
  ![输入图片说明](http://cdn.ayusummer233.top/DailyNotes/202212090939105.png "屏幕截图.png")

清空终端信息

1. ctrl+shift+p 呼出命令面板
2. 搜索 open keyboard shortcuts
3. 搜索 workbench.action.terminal.clea



---

## 报错收集

---

### git Missing or invalid credentials.

> [git Missing or invalid credentials. · Issue #107024 · microsoft/vscode (github.com)](https://github.com/microsoft/vscode/issues/107024)

![image-20220503212809785](http://cdn.ayusummer233.top/img/202205032128921.png)

![image-20220503212826597](http://cdn.ayusummer233.top/img/202205032128654.png)

---

### remote-ssh 一直 waiting for server log

> [vscode ssh连接失败_我歌月徘徊、的博客-CSDN博客_vscode连不上ssh](https://blog.csdn.net/myWorld001/article/details/119443079)
>
> ---

解决方案为删掉对应的加锁文件

```bash
rm -rf ****/vscode-server/bin/****
```

---

### Remote-SSH + tmux 每次 bash 命令执行完都会有红色报错 ``-bash: __vsc_prompt_cmd_original: command not found`

> [visual studio code - VSCode Remote SSH Extension + tmux = -bash: __vsc_prompt_cmd_original: command not found - Stack Overflow](https://stackoverflow.com/questions/73421978/vscode-remote-ssh-extension-tmux-bash-vsc-prompt-cmd-original-command-n/73798469#73798469)
>
> ---

![image-20221118232314707](http://cdn.ayusummer233.top/img/202211182323764.png)

---