> 用于记录markdown使用的一些随笔

# 目录
- [目录](#目录)
- [编辑软件](#编辑软件)
  - [在VSCode中编写Markdown文件](#在vscode中编写markdown文件)
  - [Typora](#typora)
  - [vnote](#vnote)
- [个人图床(七牛云+阿里云域名+picgo)](#个人图床七牛云阿里云域名picgo)
  - [继续配合 ShareX 使用](#继续配合-sharex-使用)
- [基本用法](#基本用法)
  - [分页符](#分页符)
  - [排版](#排版)
  - [字体格式](#字体格式)
  - [字体大小](#字体大小)
  - [公式](#公式)
    - [公式内部打空格](#公式内部打空格)
    - [多行公式等号对齐](#多行公式等号对齐)
  - [链接](#链接)
  - [矩阵](#矩阵)
  - [内嵌 HTML](#内嵌-html)
    - [markdownlint 取消部分 html 标签警告](#markdownlint-取消部分-html-标签警告)
- [something interesting](#something-interesting)
  - [徽章](#徽章)
- [工具](#工具)
  - [Markdown Preview Enhanced](#markdown-preview-enhanced)
    - [使用 MPE 导出 base64图片 && 带侧边目录的 HTML](#使用-mpe-导出-base64图片--带侧边目录的-html)
- [markdown + pandoc 写论文](#markdown--pandoc-写论文)
  - [文献管理工具: Zotero](#文献管理工具-zotero)
  - [Better BibTex](#better-bibtex)

---

# 编辑软件

## 在VSCode中编写Markdown文件
- 安装VSCode扩展
  - Markdown All in One
  - Markdown Converter
- markdown文件的后缀名为`md`
  ![](res_-daily-notes/img/README/markdown打开.png)
- 使用大纲快速索引章节位置
  ![](res_-daily-notes/img/README/markdown大纲.png)
- 使用插件快速更新生成目录

----
## Typora
- 与 VSCode 相较而言在大文件的续写方面渲染速度太慢, 但是当文档仅有一千行左右时渲染速度还不错
- VSCode 主要在文档中含有太多外链图片资源时编辑文档经常乱跳屏幕, 编辑体验不是很好
- Typora 编辑 markdown 文件也有如下顺手之处
  - 自动空行, 使得回车时确实能够换行书写
  - 可视化编辑格式(尤其是表格的插入和编辑体验很好)
  - 配合 PicGo 也可以自动上传图片到个人图床, 截图完直接粘贴可以自动生成图链(不过可能会出现转义问题, `http:` 后面记得加上 `//`)
  - 超链接的生成比较灵活, 复制完网页链接之后直接粘贴会根据内容生成超链接及其文本, 对于参考链接的书写比较友好, 省下了不少自己打描述的时间

---

## vnote

[vnote-githubRepo](https://github.com/vnotex/vnote)

开始之初，VNote是一款专为Markdown设计的Vim风格笔记应用程序。它不仅仅是一个Markdown编辑器。VNote旨在成为一个带有便捷笔记管理的功能强大的Markdown编辑器，或者一个拥有舒适Markdown体验的笔记软件。

现在，VNote致力于成为一个舒适的笔记平台，会逐步支持更多的文档格式。

VNote是免费、开源的。您可以获得适用于Linux，Windows和macOS的版本。

> 可以导出嵌入图片的带侧边大纲的 HTML  
> 但是 PDF 导出有些差强人意


----
# 个人图床(七牛云+阿里云域名+picgo)
- [七牛云+阿里云域名+PicGo](https://blog.csdn.net/qq_45807032/article/details/113772697)
- ![VSCode PicGo插件配置](http://cdn.ayusummer233.top/img/20210309122224.png)
- 使用说明  
  ![具体使用](http://cdn.ayusummer233.top/img/20210309122603.png)

---

## 继续配合 ShareX 使用

用 shareX 主要是其功能比较强大, 这里主要说下 gif:

设置截图后复制文件到剪贴板:

![image-20220405100108067](http://cdn.ayusummer233.top/img/202204051001244.png)

然后直接在 Typora 上粘贴即可自动调用 PicGo 上传到图床

---
# 基本用法
```markdown
# 一级标题
## 二级标题
### 三级标题
--- 分割线
- 无序列表
1. 有序列表
[待加入超链接的文字](链接)
```

---
- 插入图片
  ```markdown
  ![图片标识](图片地址)
  ```
  - 图片标识想起就起,不想起空着也行
  - 图片地址可以填相对地址也可以填网络中的绝对地址
    - 相对地址
      - 也是本仓库推荐使用的一种地址
      - 意指图片源文件存放在本地(这里就是指在res/img文件夹里),使用当前文件与使用的图片文件间的相对地址定位到图片
        ```
        ./ 当前目录
        ../ 上1层目录
        ../../ 上2层目录
        ```
        - 以当前文件为例`./`表示本仓库的根目录,如图
          ![](./res_-daily-notes/img/README/本仓库的根目录.png)
    - 网络绝对地址
      - **一定别用本地**文件的绝对地址,你有这个路径不代表别人也有
      - 原理是输入网上图床中图片的链接,所以你需要先将图片上传到图床上然后再获取图片的链接,可以借用Gitee的Issue中评论框粘贴图片直接生成图链

---
- 插入表格
  | 列1 | 列2 | 列3 |
  | --- | --- | --- |
  | 值1 | 值2 | 值3 |

---
- 插入数学公式
  - 将公式用$$包围,例:
    - $y_1 = m_{11} + x^{12} + x^2$
  - [更多公式](https://blog.csdn.net/konglongdanfo1/article/details/85204312)
  - [希腊字母表](https://blog.csdn.net/krone_/article/details/99710062)

---
## 分页符
```
<div STYLE="page-break-after: always;"></div>
```

-----
## 排版
- markdown兼容html
- <center>文字居中</center>
- 图像居中显示
  
  <div align=center><img src="http://cdn.ayusummer233.top/img/20210514111630.png" width="  "></div>


----
## 字体格式
- <font face="黑体">使用黑体</font>
- <font face="黑体" size=10>我是黑体10号字</font>
- <font color=red>红色</font>


---
## 字体大小
- 使用html标签解决
  - ```html
    <font size = 5>示例</font>
    ```
    - 预览
      - <font size = 5>示例</font>

----
## 公式

---
### 公式内部打空格
- [怎么在LaTeX,Markdown和知乎上写数学公式时打出空格 - 知乎 (zhihu.com)
- [![img](http://cdn.ayusummer233.top/img/20210628102451.jpeg)](https://zhuanlan.zhihu.com/p/265517357)

---
### 多行公式等号对齐

$$
\begin{aligned}
    NPV  &= 现金流入现值和 - 现金流出现值和 \\
    	 &= \sum_{t=0}^n CI_t (P/F, i_0, t) - \sum_{t=0}^n CO_t (P/F, i_0, t)  \\
\end{aligned}
$$


---
## 链接

- 常规链接写法

  ```markdown
  [百度](http://www.baidu.com)
  ```

  [百度](http://www.baidu.com)

- 文内标题链接写法

  ```markdown
  [->编辑软件](#编辑软件)
  [->Typora](#Typora)
  ```

  [->编辑软件](#编辑软件)
  [->Typora](#Typora)

  > 不管是跳转到几级标题, `()` 内都只需要用 1 个 `#`, 不过要注意所有的标题不要有重名

----

## 矩阵

> [如何在 markdown 中表示矩阵？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/269245898)

```markdown
$$\begin{matrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{matrix}$$
```

> 中括号边框: `bmatrix`

$$\begin{matrix}
0&1&1\\
1&1&0\\
1&0&1\\
\end{matrix}$$




----

## 内嵌 HTML

markdown 支持内嵌 HTML

---

### markdownlint 取消部分 html 标签警告

> [vscode markdownlint插件让你的markdown更加规范 -- Rules规则提示信息 一介布衣 (yijiebuyi.com)](https://yijiebuyi.com/blog/79347d0e8c1739bd1f9d9d7c1dcbcccf.html#md012---multiple-consecutive-blank-lines)
>
> [markdownlint取消部分html标签警告_sbwww的博客-CSDN博客](https://blog.csdn.net/qq_44926567/article/details/109167394)

- 问题

  在 vscode 中使用 markdownlint 插件进行代码分析，当使用了 html 标签时，插件会给出 `MD033/no-inline-html` 警告,

  > 如果整篇 markdown 很长且遍布这种错误时该插件会导致 VSCode 十分卡顿

- 原因 

  插件作者的意图是为了使 markdown 文件是纯 markdown 的，避免在使用 html 以外的方式渲染时出错。

  > [markdownlint/Rules.md at v0.21.0 · DavidAnson/markdownlint (github.com)](https://github.com/DavidAnson/markdownlint/blob/v0.21.0/doc/Rules.md#md033)

- 解决方案

  > [markdownlint取消部分html标签警告_sbwww的博客-CSDN博客](https://blog.csdn.net/qq_44926567/article/details/109167394)
  
  打开 VSCode 设置 json 文件, 添加如下配置:
  
  ```json
        "markdownlint.config": {
          "default": true,
          "MD033": {
            "allowed_elements": [ "font", "li", "table", "tr", "td", "br" ]
          }
        },
  ```
  
  其中 `"allowed_elements"` 的列表中填入不想提出警告的 html 标签, 保存修改后，markdownlint 将不再对 `"allowed_elements"` 中的 html 标签提出警告
  
  


---
# something interesting

## 徽章
- [repo链接](https://github.com/RimoChan/unv-shield)   
- ![](https://unv-shield.librian.net/api/unv_shield?code=1&url=https://avatars.githubusercontent.com/u/59549826&scale=2&txt=好!&border=4&barradius=999)

---
# 工具

## Markdown Preview Enhanced

![20211117085220](http://cdn.ayusummer233.top/img/20211117085220.png)

> [报错 Error: spawn pandoc ENOENT · Issue #429 · shd101wyy/markdown-preview-enhanced (github.com)](https://github.com/shd101wyy/markdown-preview-enhanced/issues/429)
>
> [How to compile to pdf from a markdown doc?! · Issue #421 · shd101wyy/markdown-preview-enhanced (github.com)](https://github.com/shd101wyy/markdown-preview-enhanced/issues/421)

[安装 Pandoc](#Pandoc) 再重启 VSCode 即可

---

### 使用 MPE 导出 base64图片 && 带侧边目录的 HTML

> [3.1 HTML 导出-markdown preview enhanced文档（简体中文版）-面试哥 (mianshigee.com)](https://www.mianshigee.com/tutorial/mpe/zh-cn-html.md)
>
> [最完善的markdown转html/pdf方法、带目录生成_所谓向日葵族的博客-CSDN博客_markdown转html](https://blog.csdn.net/weixin_38601833/article/details/94585595)
>
> [Markdown转换单一html文件并添加侧边栏目录_吟风划彩虹的博客-CSDN博客_html添加目录](https://blog.csdn.net/yqahx/article/details/119785262)
>
> [HTML (shd101wyy.github.io)](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/html)

安装完 MPE 插件后在设置中打开脚本执行支持

![image-20220813031117722](http://cdn.ayusummer233.top/img/202208141930666.png)

使用 VSCode 打开 markdown 文件后, 打开 `Markdown Preview Enhanced` 的预览模式

![image-20220812161158973](http://cdn.ayusummer233.top/img/202208121629553.png)

将光标放到第一行，然后(按 `Ctrl+Shift+P` )呼出命令面板，输入 `Markdown Preview Enhanced: Create Toc` 会在光标位置生成一段代码：

![image-20220812161806527](http://cdn.ayusummer233.top/img/202208121629592.png)

```html
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
```

此时每次保存文件都会自动生成目录

![image-20220812161844235](http://cdn.ayusummer233.top/img/202208121629879.png)

然后在头部添加

```yaml
---
html:
  embed_local_images: true
  embed_svg: true
  offline: true
  toc: true
print_background: true
export_on_save:
  html: true
---
```

- `embed_local_images` 被设置为 `true`，那么所有的本地图片将会被嵌入为 `base64` 格式。

- `toc` 

  - 设置为 `false`，那么边栏目录将会被隐藏。
  - `toc` 被设置为 `true`，那么边栏目录将会被缺省启动并显示。
  - `toc` 没有被设置，那么缺省边栏目录将会被启动，但是并不显示。

- ```yaml
  export_on_save:
    html: true
  ```

  保存时自动导出 html

- `offline`

  - `HTML (offline)`
    选择这个选项如果你要离线使用这个 html 文件。
  - `HTML (cdn hosted)`
    选择这个选项如果你要远程或在服务器上使用这个 html 文件。

- `print_background`: 使用当前背景样式


---

## Pandoc

> [安装和使用Pandoc | typora中文网](https://www.typora.net/1193.html)
>
> [Pandoc 2.16.1-windows-x86_64.msi - OneDrive Share](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EfwTtm_9ifpOmU-DP6dVdT8BPsdarssrIctgWWs_cyv1zA?e=yT8wBM)

Pandoc 是通用文档文本转换器。Typora 使用它来支持几种文件类型的文件导入/导出功能。

---
## reveal-md

> [markdown写ppt （史上最全） - 疯狂创客圈 - 博客园 (cnblogs.com)](https://www.cnblogs.com/crazymakercircle/p/14372042.html)

像演示 PPT 一样演示 markdown

`安装`:

执行如下命令进行全局安装 reveal-md

```shell
npm install -g reveal-md
```

> 没装 nodejs 的话需要先装 nodejs

`使用`:

执行如下命令以使用 reveal-md 演示 markdown 文件

```shell
reveal-md path_markdown_file
```

如:

![20220120231927](http://cdn.ayusummer233.top/img/20220120231927.png)

---
# markdown + pandoc 写论文

> 没搞定, 太繁杂了感觉, mark 下, 以后有空再弄

> [使用Markdown搭配Pandoc撰写学术论文的详细指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/395193554)

## 文献管理工具: Zotero

> [Zotero | Your personal research assistant](https://www.zotero.org/)

![20220309100246-Zotero](http://cdn.ayusummer233.top/img/20220309100246.png)

官网下载 [Zotero](https://www.zotero.org/download/client/dl?channel=release&platform=win32&version=5.0.96.3), [EDGE 插件](https://microsoftedge.microsoft.com/addons/detail/nmhdhpibnnopknkmonacoephklnflpho) 以及 VSCode Zotero 插件[可选, 主要看自己习惯用什么写 markdown]

> ![20220309100613-Citation Picker for Zotero](http://cdn.ayusummer233.top/img/20220309100613.png)

> [quick start guide [Zotero Documentation\]](https://www.zotero.org/support/quick_start_guide)
>
> [adding items to zotero [Zotero Documentation\]](https://www.zotero.org/support/adding_items_to_zotero)
>
> [collections and tags [Zotero Documentation\]](https://www.zotero.org/support/collections_and_tags)
>
> [creating bibliographies [Zotero Documentation\]](https://www.zotero.org/support/creating_bibliographies)
>
> [word processor plugin usage [Zotero Documentation\]](https://www.zotero.org/support/word_processor_plugin_usage)

## Better BibTex

> [Better BibTeX](https://retorque.re/zotero-better-bibtex/)

下载此 `xpi` 文件后打开 `Zotero->工具->插件->右上方齿轮图标-> Install add-on From File...` 选择下载好的 `xpi` 文件进行安装, 安装完后重启 `Zotero` 会自动进入 `Better BibTeX` 的配置页面(均默认即可)

然后进入 `Zotero` 主界面 `编辑->首选项->Better BibTeX` 进行如下配置:

![20220309152816](http:cdn.ayusummer233.top/img/20220309152816.png)

![20220309152859](http:cdn.ayusummer233.top/img/20220309152859.png)

返回 `Zotero` 主界面后会看到多了一列 `Citation Key` 属性

![20220309153131](http:cdn.ayusummer233.top/img/20220309153131.png)

> `Citation Key` 可以理解成每个条目的唯一 id, 在上述配置过程中我们将其配置成了 `[auth:lower[year]`的形式, 如果有重复的话会在后面添加 `a b c` 或者数字进行区分
