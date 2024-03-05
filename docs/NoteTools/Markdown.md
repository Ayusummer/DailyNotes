# Markdown

- [Markdown](#markdown)
  - [基础语法](#基础语法)
    - [链接](#链接)
    - [图片](#图片)
    - [表格](#表格)
    - [分页符](#分页符)
    - [html](#html)
      - [排版](#排版)
      - [字体类型与颜色](#字体类型与颜色)
    - [目录](#目录)
    - [插入数学公式](#插入数学公式)
      - [公式内部打空格](#公式内部打空格)
      - [多行公式等号对齐](#多行公式等号对齐)
    - [矩阵](#矩阵)
  - [Markdown 编辑软件](#markdown-编辑软件)
    - [Typora](#typora)
      - [配置项推荐](#配置项推荐)
        - [外观](#外观)
          - [窗口样式](#窗口样式)
          - [字体大小](#字体大小)
          - [状态栏](#状态栏)
          - [阅读速度](#阅读速度)
          - [侧边栏](#侧边栏)
          - [主题](#主题)
        - [通用](#通用)
          - [启动选项](#启动选项)
          - [保存与恢复](#保存与恢复)
          - [语言](#语言)
          - [更新](#更新)
          - [许可证信息](#许可证信息)
          - [快捷键](#快捷键)
          - [对话框](#对话框)
          - [高级设置](#高级设置)
          - [Typora 服务器](#typora-服务器)
        - [编辑器](#编辑器)
        - [图像](#图像)
          - [本地图像](#本地图像)
          - [个人图床](#个人图床)
        - [Markdown](#markdown-1)
        - [导出](#导出)
      - [主题推荐](#主题推荐)
        - [导出 PDF 主题推荐](#导出-pdf-主题推荐)
        - [深色主题推荐](#深色主题推荐)
        - [浅色主题推荐](#浅色主题推荐)
      - [报错收集](#报错收集)
        - [image load failed](#image-load-failed)
        - [无法正常导出PDF](#无法正常导出pdf)
        - [无法显示局域网https图片](#无法显示局域网https图片)
      - [LaTeX 相关](#latex-相关)
    - [在 VSCode 中编辑 Markdown 文件](#在-vscode-中编辑-markdown-文件)
      - [Markdown All in One](#markdown-all-in-one)
      - [Markdown Preview Enhanced](#markdown-preview-enhanced)
    - [vnote](#vnote)
  - [工具](#工具)
    - [图床](#图床)
      - [七牛云对象存储](#七牛云对象存储)
      - [Nextcloud+Picgo](#nextcloudpicgo)
      - [Gitlab+Picgo](#gitlabpicgo)
    - [PicGo](#picgo)
      - [PicGo 设置正确但是传不上去图片](#picgo-设置正确但是传不上去图片)
      - [继续配合 ShareX 使用](#继续配合-sharex-使用)
    - [Pandoc](#pandoc)
    - [reveal-md](#reveal-md)
    - [CodiMD](#codimd)
      - [部署](#部署)
  - [something interesting](#something-interesting)
    - [徽章](#徽章)
    - [markdown + pandoc 写论文](#markdown--pandoc-写论文)
      - [文献管理工具: Zotero](#文献管理工具-zotero)
      - [Better BibTex](#better-bibtex)

---

## 基础语法

````markdown
# 一级标题
## 二级标题
### 三级标题

分割线↓

---

- 无序列表
1. 有序列表

[待加入超链接的文字](链接)
![图片描述信息](图链)
`短代码或者专用名词`
==高亮文本==

```代码块语言
代码块内容
```
````

> - 无序列表
> 1. 有序列表
>
> [待加入超链接的文字](链接)
> `![图片描述信息](图链)` (PS: 这里不贴出来是因为会导致站点构建错误, 可在 [图片章节](#图片) 查看演示效果) 
> `短代码或者专用名词`
> ==高亮文本==
>
> ```代码块语言
> 代码块内容
> ```
>
> ---
>
> > 上面的源码部分在 `分割线` 与 `---` 中间空了一行, 是有原因的, 如果不空行的话有可能会把 `---` 上面的文本识别成标题                                                                                                                                                                                                                                                                                                 

- 换行

  - 行末两个空格并换行

    ```markdown
    第一行文字  
    第二行文字
    ```

    第一行文字  
    第二行文字

    > Typora 中对应 `Space Space Shift+Enter`

  - 直接空一行

    ```markdown
    第一行文字
    
    第二行文字
    ```

    第一行文字

    第二行文字

    > Typora 中对应 `Enter`

---
### 链接

- 常规链接写法

  ```markdown
  [百度](http://www.baidu.com)
  ```

  [百度](http://www.baidu.com)

- 文内标题链接写法

  ```markdown
  [->编辑软件](#Markdown 编辑软件)
  [->Typora](#Typora)
  ```

  [->编辑软件](#Markdown 编辑软件)
  [->Typora](#Typora)

  > 不管是跳转到几级标题, `()` 内都只需要用 1 个 `#`, 不过要注意所有的标题不要有重名


---
### 图片
  ```markdown
  ![图片标识](图片地址)
  ```
  - 图片标识想起就起,不想起空着也行
  
  - 图片地址可以填相对地址也可以填网络中的绝对地址
    - 相对地址
      - 意指图片源文件存放在本地, 使用当前文件与使用的图片文件间的相对地址定位到图片
        ```
        ./ 当前目录
        ../ 上1层目录
        ../../ 上2层目录
        ```
      
        > 一般也就只能用到 `./`, 比如:
        >
        > ```markdown
        > ![](./Markdown.assets/202212110347663.png)
        > ```
        >
        > ![](./Markdown.assets/202212110347663.png)
      
    - 网络绝对地址(`http/https`)
      - 不推荐使用本地文件的绝对地址, 不是相对路径拼接的绝对路径是坏文明(, 毕竟这样做可移植性几乎没有, 不管是个人设备中迁移 markdown 文件还是共享
      - 需要先将图片上传到图床上然后再获取图片的链接,可以借用Gitee 或 Github 的 Issue 中评论框粘贴图片直接生成图链或者是使用一些免费的公共图床
      
      > ```markdown
      > ![](http://cdn.ayusummer233.top/img/202212111515300.png)
      > ```
      >
      > ![](http://cdn.ayusummer233.top/img/202212111515300.png)
      
      > PS: Gitee 在年初更新了防盗链规则, 不推荐在 Gitee 站外使用 Gitee 图链, 否则就丢图了
      >
      > > 目前在 Gitee 站外引用的 Gitee 图链会变成一个  Gitee 图标
      >
      > ---
      >
      > 推荐使用个人图床(比如七牛云对象存储, 正常使用前期存储较少的时候一个月不到一毛钱, 存了几千张图片之后也不过一个月两三毛的样子, 两三年前充了 50 现在还有四十七块多)
      >
      > 反而域名才是消耗品, `.top` 域名首年九块九, 后面续费就二十多了
      >
      > ---
      >
      > 不推荐使用公共图床是因为不好管理以及怕丢以及不清楚公共图床是否会压图

---
### 表格

  ```markdown
  | 列1  |  列2  |  列3 |
  | :--- | :---: | ---: |
  | 值1  |  值2  |  值3 |
  ```

  > 实际上一般不会手打表格语法, 在 Typora 中可以用 `Ctrl + T` 或者在右键菜单中选择快捷插入表格
  >
  > ---
  >
  > :---`, `:--:`, `---:` 分别对应左对齐, 居中对齐和右对齐(中间的 `-` 数量其实无所谓, 主要是用来对齐 `|` 这样源码比较美观)
  >
  > 可以在 VSCode 中使用 Markdown All in One 扩展来一键格式化 markdown 文档源码 `Alt + Shift + F`

  | 列1  |  列2  |  列3 |
  | :--- | :---: | ---: |
  | 值1  |  值2  |  值3 |


---
### 分页符

```html
<div STYLE="page-break-after: always;"></div>
```

直接在 markdown 源码中插入此行, 这样在导出 PDF 文件时会在此行处分页

> 之所以有这个需求是因为经常出现一张长图片导致前一页或者后一页出现大面积空白或是一段源码在 PDF 中刚好分在了两页上, 这样阅读起来就比较别扭, 因此可以手动插入分页符进行调整
>
> > 不过后来分享 PDF 页数越来越多时手动插入分页符的操作非常耗费精力, 因此就引出了导出 HTML 分享的解决方案
> >
> > > 对应 [VNote 导出](#vnote)以及 [MPE 导出](#使用 MPE 导出 base64图片 && 带侧边目录的 HTML)
> >
> > 有了解决方案后又有了新的问题, 不是所有分享媒介都直接预览 HTML 文件(比如微盘和gitlab都不支持直接预览 HTML), 从而引出了新的解决方案: 
> >
> > - 对于 Gitlab 而言, 默认支持 markdown 文件的渲染显示
> > - 对于微盘而言, 最终还是分享 markdown + 图片文件夹 +  PDF
> > - 使用 VuePress, VitePress 等工具自己起个文档站点展示 markdown 文件

-----
### html

markdown 是兼容 html 语法的, 所以你可以在 Markdown 中使用 html + css 来实现各种自定义的效果

#### 排版

通常, 在 Typora 中一份 markdown 文档展示给我们的预览效果是通过根据当前主题的 css 样式将当前文档的 markdown 源码渲染为 html 显示的

当我们切换主题时就会看到预览效果的变化, 比如有些主题的标题预览是居中显示的

而我们同样也可以直接在 Markdown 源码中写 html 来自定义该部分内容的排版

例如使用 `<center>` 标签将文字居中显示:

```html
  <center>文字居中</center>
```

  <center>文字居中</center>

图像居中显示:

```html
<div align=center><img src="http://cdn.ayusummer233.top/img/20210514111630.png" width="  "></div>
```

<div align=center><img src="http://cdn.ayusummer233.top/img/20210514111630.png" width="  "></div>


----
#### 字体类型与颜色

- ```markdown
  <font face="黑体">使用黑体</font>
  ```
  <font face="黑体">使用黑体</font>
- ```markdown
  <font face="黑体" size=10>我是黑体10号字</font> 
  ```
  <font face="黑体" size=10>我是黑体10号字</font>  
- ```markdown
  <font color=red>红色</font>
  ```
  <font color=red>红色</font>


---
#### 字体大小

```html
<font size = 5>示例</font>
```

<font size = 5>示例</font>

> 对于全局字体大小的设置也可以在 Typora 的偏好设置中的外观设置中进行自定义配置
>
> ![image-20221211150947284](http://cdn.ayusummer233.top/img/202212111509314.png)

---

### 目录

 本地阅读的话一般编辑器侧边栏大纲都是展示全部的目录的, 但是很多站点的 Markdown 渲染侧边栏只支持深度到2级的目录展示, 所以在顶部有一个目录还是有些用的

Typora 可以选择插入目录, 但是对于源码的改动只是加了个 `[TOC]`, 这种配置只有在  Typora 中才能正确解析, 而 VSCode 中的 Markdown All in One 扩展的插入目录则是直接以无序列表的形式将目录插入到了源码中, 不管在哪里都是可以正常渲染出来的

![image-20221210222920898](http://cdn.ayusummer233.top/img/202212111731173.png)

在命令面板中选择使用 Markdown All in One 生成目录即可在当前光标位置生成目录, 且每次保存时会自动更新目录

![img](http://cdn.ayusummer233.top/img/202212111728926.png)


----

### 插入数学公式

- 将公式用 `$$` 包围,例:  

  ```markdown
  $y_1 = m_{11} + x^{12} + x^2$
  ```

  $y_1 = m_{11} + x^{12} + x^2$

- [更多公式](https://blog.csdn.net/konglongdanfo1/article/details/85204312)

- [希腊字母表](https://blog.csdn.net/krone_/article/details/99710062)

---

#### 公式内部打空格

> [怎么在LaTeX,Markdown和知乎上写数学公式时打出空格 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/265517357)
>
> ----

![img](http://cdn.ayusummer233.top/img/20210628102451.jpeg)

---
#### 多行公式等号对齐

`NPV  = 现金流入现值和 - 现金流出现值和`

```markdown
\begin{aligned}
    NPV  &= CI - CO \\
    	 &= \sum_{t=0}^n CI_t (P/F, i_0, t) - \sum_{t=0}^n CO_t (P/F, i_0, t)  \\
\end{aligned}
```

$$
\begin{aligned}
    NPV  &= CI - CO \\
    	 &= \sum_{t=0}^n CI_t (P/F, i_0, t) - \sum_{t=0}^n CO_t (P/F, i_0, t)  \\
\end{aligned}
$$


---

### 矩阵

> [如何在 markdown 中表示矩阵？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/269245898)
>
> ---

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


---

## Markdown 编辑软件

----
### Typora

> [六年后才推出首个正式版，Typora 1.0 详细评测 - 少数派 (sspai.com)](https://sspai.com/post/70292)

---

- 与 VSCode 相较而言在大文件的续写方面渲染速度太慢, 但是当文档仅有一千行左右时渲染速度还不错

  > PS: 长期使用过后我个人写 Markdown 的主力工具仍是 Typora, 因其对表格以及图片的支持比较好, 以及用 VSCode 写 Markdown 经常需要同时打开源码和预览两个窗口, 即便装了类似 Typora 的插件体验依旧不及 Typora 本体, 而且一两千行, 一两万字基本上对于写一个文档而言也够用了

- VSCode 主要在文档中含有太多外链图片资源时编辑文档经常乱跳屏幕, 编辑体验不是很好

- Typora 编辑 markdown 文件也有如下顺手之处
  - 自动空行, 使得回车时确实能够换行书写
  
    > 编辑 markdown 源码时要实现预览时的话行需要在源码行尾输入两个空格或者是一个或多个空行
  
  - 可视化编辑格式(尤其是表格的插入和编辑体验很好)
  
    > 直接编辑 Markdown 文件主要是看不到图片, 因此在 VSCode 中编辑 Markdown 时通常会开两个 tab, 一个编辑源码一个用来预览
  
  - 配合PicGo 也可以自动上传图片到个人图床, 截图完直接粘贴可以自动生成图链
  
  - 超链接的生成比较灵活, 复制完网页链接之后直接粘贴会根据内容生成超链接及其文本, 对于参考链接的书写比较友好, 省下了不少自己打描述的时间

---

Typora 激活前没挂梯子的话最好在偏好设置中把使用国内服务器勾选上

![image-20221211020334256](http://cdn.ayusummer233.top/img/202212110203586.png)

---

#### 配置项推荐

在 `偏好设置` 中可以自定义自己的配置项

---

##### 外观

![image-20221211011126291](http://cdn.ayusummer233.top/img/202212110111592.png)

---

###### 窗口样式

`窗口样式`: 分为 `经典` 与 `一体化` 两个选项, 可以根据自己的喜好进行设置

`一体化`:

![image-20221211010829668](http://cdn.ayusummer233.top/img/202212110108540.png)

`经典`:

![image-20221211010918350](http://cdn.ayusummer233.top/img/202212110109099.png)

---

###### 字体大小

`字体大小`:  推荐使用 `自动`, 如果字体大小实在看着不舒服也可以自定义设置大小

![image-20221211011241834](http://cdn.ayusummer233.top/img/202212110112520.png)

---

###### 状态栏

`状态栏`: 推荐显示状态栏, 就是页面最下面这几个

![image-20221211012545188](http://cdn.ayusummer233.top/img/202212110125677.png)

---

###### 阅读速度

`阅读速度`: 默认即可, 一般也不会用到

![image-20221211012645241](http://cdn.ayusummer233.top/img/202212110126378.png)

---

###### 侧边栏

`侧边栏`: 勾选以允许折叠与展开大纲视图, 这个配置项无所谓, 因为在编辑时会根据需要在侧边栏右键进行调整

![image-20221211012704477](http://cdn.ayusummer233.top/img/202212110127351.png)

![image-20221211012856059](http://cdn.ayusummer233.top/img/202212110128457.png)

有时侧边栏目录太长是打开折叠展开的, 有时折叠后目录比较短但是层级比较深, 此时为了方便跳转一般会关闭允许折叠(也即全展开)(换言之折叠与否完全看心情)

![image-20221211013124468](http://cdn.ayusummer233.top/img/202212110131486.png)

---

###### 主题

根据自己的喜好设置主题即可, 具体主题详见 [主题推荐](#主题推荐)

![image-20221211013454092](http://cdn.ayusummer233.top/img/202212110134173.png)

---

##### 通用

![image-20221211020218008](http://cdn.ayusummer233.top/img/202212110202508.png)

---

###### 启动选项

默认情况下是打开 Typora 之后全是空白, 推荐选择重新打开上次使用的文件和目录, 这样可以方便继续之前的工作

![image-20221211020432747](http://cdn.ayusummer233.top/img/202212110204570.png)

---

###### 保存与恢复

推荐勾选自动保存

> 想必 WPS 卡死导致文件被吞过的同学比较有感触

![image-20221211020629290](http://cdn.ayusummer233.top/img/202212110206318.png)

---

###### 语言

选择系统语言即可

![image-20221211020806930](http://cdn.ayusummer233.top/img/202212110208950.png)

---

###### 更新

已经激活了的话推荐勾选自动检查更新

个人倾向于也勾选上更新至开发板, 目前为止还没遇到什么不能接收的恶性 bug, 倾向求稳的同学可以只勾选自动检查更新

![image-20221211020939385](http://cdn.ayusummer233.top/img/202212110209409.png)

---

###### 许可证信息

![image-20221211020956716](http://cdn.ayusummer233.top/img/202212110209738.png)

在详情界面可以查看序列号, 在换设备以及在其他设备使用 Typora 时会查看此项

----

###### 快捷键

> [Shortcut Keys - Typora Support](https://support.typora.io/Shortcut-Keys/#change-shortcut-keys)
>
> [Typora快捷键大全 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/570173026)
>
> ---

这里的自定义快捷键会跳转到官方文档, 该文档中会教授如何自定义快捷键, 翻到文档起始可以看到快捷键表格

![image-20221211021058855](http://cdn.ayusummer233.top/img/202212110210882.png)

Typora 中最常用的快捷键是

- `Ctrl + T`: 新建表格

- `Ctrl + /`: 切换到源码模式

- `Ctrl + Shift + C`: 将选中内容复制为 Markdown

- `Enter`: 换段(体现在源码里就是空一行)

- `Space Space Shift + Enter`: 换行

  > 源码中在行尾打两个空格并换行
  >
  > 不推荐直接只使用 Shift + Enter, 这样虽然在 Typora 中可以看到换行了, 但是不符合 markdown 语法, 在其他软件中就看不到换行了, 而是会显示在同一行

- 

---

###### 对话框

没用过, 不清楚有什么用

![image-20221211021528300](http://cdn.ayusummer233.top/img/202212110215322.png)

---

###### 高级设置

只用来写文档看文档一般不会开调试模式


匿名使用数据方面除非写开源博客否则一般也不会开

点击打开高级设置会打开一个本地文件夹, 里面有两个 json 文件对应配置文件, 个人没用过, 就不再展开了

![image-20221211021644889](http://cdn.ayusummer233.top/img/202212110216913.png)

---

###### Typora 服务器

在激活 Typora 之前会勾选上, 一般是安装好 Typora 之后第一个配置的偏好设置

![image-20221211021841266](http://cdn.ayusummer233.top/img/202212110218289.png)

---

##### 编辑器

建议打开即时渲染, 显示当前块元素的 Markdown 源码, 这对于调整目录层级比较有帮助, 在光标点到任意一级标题时会显示标题前的 `#`, 这样就可以快速通过加减 `#` 来调整层级而不用再 `Ctrl + /` 切换到源码做修改

![image-20221211022022856](http://cdn.ayusummer233.top/img/202212110220895.png)

---

##### 图像

![image-20221211022533292](http://cdn.ayusummer233.top/img/202212110225324.png)

---

###### 本地图像

当图片存放在本地时推荐如此配置

![image-20221211022550266](http://cdn.ayusummer233.top/img/202212110225292.png)

插入图片时的动作其实有 6 项

![image-20221211022940136](http://cdn.ayusummer233.top/img/202212110229167.png)

- 选择 ==复制图片到 ./${filename}.assets 文件夹== 是因为个人喜好, 这样可以保证一个 markdown 文件的图片对应一个图片目录

- 不选择复制图片到当前文件夹是因为若勾选了此项, 当文档中插入的图片比较多时, 打开本地文件目录就会看到一堆图片文件中夹杂着一个 markdown 文件(以及可能存在的导出的 PDF 等其他文件以及其他的参考文档等等), 这就会使得文件目录显得很混乱
- 不选择复制图片到 `./assets` 文件夹是因为当一个目录下有多个 markdown 文件时, 这些 markdown 中的图片就全混在同级目录下的 `assets` 文件夹里了
- 不选择复制到指定路径是因为这样设置基本就告别相对路径了, 而绝对路径字符串是坏文明, 换个地方就不能用了

---

- 优先使用相对路径, 相对路径是好文明

- 勾选为相对路径添加 `/` 是因为有的 markdown 文档渲染站点不支持没有 `./` 的相对路径

  > 比如 VuePress 不支持没有 `./` 的相对路径图像渲染, 如果引用了当前文档同级目录下的 `图片/文件夹中的图片` 而没有使用 `./` 则会导致渲染出来的 html 无法正确索引到图片文件从而显示不出来图片
  
- 不勾选插入时自动转义图片 URL 是因为选上之后相对链接中的中文会自动 URLEncode, 读 Markdown 源码时看着不舒服(


---

###### 个人图床

有个人图床时, 写个人博客的情况下可以选择结合 PicGo 上传图片到个人图床, 可以参考 [Ubuntu+PicGo+七牛云图床+Typora搭建笔记神器_xcy.小相的博客-CSDN博客_typroa写ubuntu](https://blog.csdn.net/qq_45807032/article/details/113772697) 

> 之所以不贴自己的实现步骤是因为很早之前从域名申请到具体配置的过程中没有做相关记录, 现在也不想重新来一遍, 所以就不贴了
>
> ---
>
> 标题中有 Ubuntu, 但是实际上 Windows 上的配置也是一样的, 而且 Ubuntu 上的 Typora 版本要落后于 Windows 上的 Typora

这里需要注意的是 ==不要勾选为相对路径添加 ./==, 否则会上传失败(感觉应该是个 bug)

> 勾选了优先使用相对路径是因为这样的话当写文档时需要在本地存放图像时不用再改动此项配置了
>
> 关于勾选了相对路径添加 `./` 会导致上传失败个人认为是 bug 是因为
>
> - 取消勾选此项后就可以正常上传图像了
> - 选了上传图片时其实相对路径的相关配置是没有意义的, 而现实逻辑上不相关的配置具在体实现上出现 bug 的情况并不少见, 属于是合理推测(
> - 为相对路径添加 `./` 是最近几个版本新增的功能

![image-20221211024905446](http://cdn.ayusummer233.top/img/202212110249474.png)

- 勾选允许根据 YAML 设置自动上传图片是因为感觉可能有用就勾上了

  > 在 [Typora 支持自定义图片上传服务了 - 少数派 (sspai.com)](https://sspai.com/post/59128) 中有提到该配置项可能在 mac 上有用
  >
  > ![image-20221211024621288](http://cdn.ayusummer233.top/img/202212110246317.png)

---

##### Markdown

![image-20221211030226276](http://cdn.ayusummer233.top/img/202212110302318.png)

不勾选智能引号是因为在个人写文档中有时用单引号还是双引号是有原因的, 不能随便换

> 比如 SQL 注入中的单引号与双引号以及 Python 中字符串的单双引号混用
>
> 不过一般涉及代码都会使用三个间隔号(`)标记代码块或者是使用两个间隔号包裹单行代码片段, 比如:
>
> ```Python
> print("Hello World")
> ```
>
> `print("Hello World")`

---

不勾选智能破折号是因为个人用破折号的情况很少, 用破折号的时候也不希望其发生变化

---

不勾选转化 Unicode 标点是因为个人标点全是半角, 所以不需要


----

首行缩进根据个人喜好设置即可

---

不显示 `<br>`  是因为勾选了之后个人认为看起来不美观

![image-20221211034028441](http://cdn.ayusummer233.top/img/202212110340464.png)

> `<br>` 一般用于表格内单个单元格中的文字换行

---

##### 导出

基本上要配的就一个 PDF,  需要注意的配置项也就一个主题, 默认是使用当前主题导出, 但是个人编辑 markdown 时一般用深色的主题, 而 Typora 又不支持深色主题导出, 所以这里需要勾选一个浅色的主题, 这里选了 Vue

![image-20221211034137359](http://cdn.ayusummer233.top/img/202212110341404.png)


---

#### 主题推荐

个人收集的主题包整合在这里了: [Typora主题](https://ayusummer-my.sharepoint.com/:f:/g/personal/233_ayusummer_onmicrosoft_com/EkVN-9VxuLxPqnwRyHBVAjcBSe_ihPifsnmnknfOc9qsbw?e=aPpTlR)

下载对应的主题压缩包, 解压后将其中的 css 文件复制到主题文件夹中即可, 如果解压后不只有 css 文件还有其他文件夹, 而且开其他文件夹后里面不光是图片, 还有字体等文件时, 将这些 `其他的文件夹` 也拷贝到主题目录中即可

> ![image-20221211015751913](http://cdn.ayusummer233.top/img/202212110157152.png)
>
> ![image-20221211015858909](http://cdn.ayusummer233.top/img/202212110159363.png)

---

##### 导出 PDF 主题推荐

因为 Typora 导出 PDF 不支持深色主题, 因此这里在浅色主题中进行推荐, 导出 PDF 推荐使用 Github 和 Vue 主题

`Vue`:

![image-20221211013710509](http://cdn.ayusummer233.top/img/202212110137396.png)

`Github`:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

![image-20221211013857064](http://cdn.ayusummer233.top/img/202212110138275.png)



---

##### 深色主题推荐

自带的 Night, Dracula, VueDark 都不错

`Dracula`:

![image-20221211014418661](http://cdn.ayusummer233.top/img/202212110144835.png)

---

`VueDark`:

![image-20221211014504318](http://cdn.ayusummer233.top/img/202212110145253.png)

---

`Night`:

![image-20221211014348462](http://cdn.ayusummer233.top/img/202212110143718.png)

---

##### 浅色主题推荐

前面打印主题中展示的 `Github` 和 `Vue` 主题都不错, 在[分享的主题包](https://ayusummer-my.sharepoint.com/:f:/g/personal/233_ayusummer_onmicrosoft_com/EkVN-9VxuLxPqnwRyHBVAjcBSe_ihPifsnmnknfOc9qsbw?e=aPpTlR)中还有很多浅色主题, 由于个人不常用所以就不过多推荐了

---

#### 报错收集

----
##### image load failed

- 自动上传图片后路径转义为:`http:cdn.ayusummer233.top/img/image-20210607155126647.png`无法正常显示

  > 刚开始用的时候照着教程配置没有仔细考量配置项, 在 VScode 中 `http:cnd......` 的形式是可以正常渲染图片的, 所以当时没注意到链接不完整的问题    
  > 实际上是PicGo 的上传路径配置有问题, 少了个 `//`, 加上就可以了

---
##### 无法正常导出PDF

导出 PDF 点保存后没有提示也没有导出成功

有可能是打印机服务 down 了

打开计算机`服务`菜单, `启动 Print Spooler` 即可

---

##### 无法显示局域网https图片

如果图链源自自签名的https局域网站点, 那么需要为 Typora 的启动项添加 `--ignore-certificate-errors` 参数, 具体如图所示

![image-20230414005417928](http://cdn.ayusummer233.top/DailyNotes/202304140100968.png)

![image-20230414010122695](http://cdn.ayusummer233.top/DailyNotes/202304140101720.png)

> exe 路径加引号后点击应用可能会自动把引号删掉, 应该不影响使用

----
#### LaTeX 相关

> [将Typora伪装成LaTeX的中文样式主题](https://github.com/Keldos-Li/typora-latex-theme)


---

### 在 VSCode 中编辑 Markdown 文件

- 安装 VSCode 扩展
  - Markdown All in One / [Markdown Preview Enhanced](#Markdown Preview Enhanced)
  - Markdown Converter
- markdown文件的后缀名为`md`
  ![image-20220906085910035](http://cdn.ayusummer233.top/img/202209060859172.png)
- 使用大纲快速索引章节位置
  ![image-20220906085945030](http://cdn.ayusummer233.top/img/202209060859150.png)
- 使用插件快速更新生成目录

---

#### Markdown All in One

功能如其名字所示, all in one, 常用于预览 Markdown 文件以及格式化 markdown 文本和目录生成

主要是目录生成比较有用, Typora 虽然可以选择插入目录, 但是对于源码的改动只是加了个 `[TOC]`, 这种配置只有在  Typora 中才能正确解析, 而 Markdown All in One 的插入目录则是直接以无序列表的形式将目录插入到了源码中, 不管在哪里都是可以正常渲染出来的

![image-20221210222920898](http://cdn.ayusummer233.top/img/202212102229847.png)

`预览`:

![image-20221210223153261](http://cdn.ayusummer233.top/img/202212102231338.png)

`格式化文档`:

![image-20221210223247083](http://cdn.ayusummer233.top/img/202212102232282.png)

![image-20221210223300055](http://cdn.ayusummer233.top/img/202212102233317.png)

---

`目录`

在命令面板中选择使用 Markdown All in One 生成目录即可在当前光标位置生成目录, 且每次保存时会自动更新目录

![img](http://cdn.ayusummer233.top/img/202212111728926.png)



---

#### Markdown Preview Enhanced

个人觉得在预览方面有 Markdown All in One 就足够了, MPE(Markdown Preview Enhanced) 有时被用于导出包含 base64 图片的 HTML 文档

---

使用 MPE 预览 markdown 文件时若出现如下问题


![20211117085220](http://cdn.ayusummer233.top/img/20211117085220.png)

> [报错 Error: spawn pandoc ENOENT · Issue #429 · shd101wyy/markdown-preview-enhanced (github.com)](https://github.com/shd101wyy/markdown-preview-enhanced/issues/429)
>
> [How to compile to pdf from a markdown doc?! · Issue #421 · shd101wyy/markdown-preview-enhanced (github.com)](https://github.com/shd101wyy/markdown-preview-enhanced/issues/421)

[安装 Pandoc](#Pandoc) 再重启 VSCode 即可

---

`使用 MPE 导出 base64图片 && 带侧边目录的 HTML`:

> [3.1 HTML 导出-markdown preview enhanced文档(简体中文版) -面试哥 (mianshigee.com)](https://www.mianshigee.com/tutorial/mpe/zh-cn-html.md)
>
> [最完善的markdown转html/pdf方法、带目录生成_所谓向日葵族的博客-CSDN博客_markdown转html](https://blog.csdn.net/weixin_38601833/article/details/94585595)
>
> [Markdown转换单一html文件并添加侧边栏目录_吟风划彩虹的博客-CSDN博客_html添加目录](https://blog.csdn.net/yqahx/article/details/119785262)
>
> [HTML (shd101wyy.github.io)](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/html)
>
> ---

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

#### picgo

![image-20221210225602987](http://cdn.ayusummer233.top/img/202212102256856.png)

可参阅 [七牛云+阿里云域名+PicGo](https://blog.csdn.net/qq_45807032/article/details/113772697) 进行配置, 最终在 VSCode 中的配置如下:

![VSCodePicGo插件配置](http://cdn.ayusummer233.top/img/20210309122224.png)

使用说明  
![具体使用](http://cdn.ayusummer233.top/img/20210309122603.png)


---


#### markmap

> [Markmap - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode)
>
> [Try markmap](https://markmap.js.org/repl)
>
> [gera2ld/markmap: Visualize your Markdown as mindmaps with Markmap. (github.com)](https://github.com/gera2ld/markmap)

能够将 markdown 文件根据目录层级转换为思维导图

![image-20220814212254716](http://cdn.ayusummer233.top/img/202208142122676.png)

---


---

#### markdownlint

> PS: 该扩展提供 Markdown 语法检查, 但是==个人认为==该扩展提供的检查有些过于严格了, ==不是特别实用==, 个人更倾向于使用 Markdown All in One 提供的一键格式化 markdown 文本

在启用 `markdownlint` 时, 若当前  markdown 文本中包含 html 则会被警告, 但是有时 html 标签是在自定义一些个人想要的特性时所需要使用的, 以下是关闭此警告的相关处理方案

---

> [vscode markdownlint插件让你的markdown更加规范 -- Rules规则提示信息 一介布衣 (yijiebuyi.com)](https://yijiebuyi.com/blog/79347d0e8c1739bd1f9d9d7c1dcbcccf.html#md012---multiple-consecutive-blank-lines)
>
> [markdownlint取消部分html标签警告_sbwww的博客-CSDN博客](https://blog.csdn.net/qq_44926567/article/details/109167394)
>
> ---

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

### vnote

> [vnote-githubRepo](https://github.com/vnotex/vnote)
>
> ----

开始之初，VNote是一款专为Markdown设计的Vim风格笔记应用程序。它不仅仅是一个Markdown编辑器。VNote旨在成为一个带有便捷笔记管理的功能强大的Markdown编辑器，或者一个拥有舒适Markdown体验的笔记软件。

现在，VNote致力于成为一个舒适的笔记平台，会逐步支持更多的文档格式。

VNote是免费、开源的。您可以获得适用于Linux，Windows和macOS的版本。

> 可以导出嵌入图片的带侧边大纲的 HTML  
> 但是 PDF 导出有些差强人意

---
## 工具

### 图床

#### 七牛云对象存储

请参阅 [Ubuntu+PicGo+七牛云图床+Typora搭建笔记神器_ubuntu挂载七牛云_xcy.小相的博客-CSDN博客](https://blog.csdn.net/qq_45807032/article/details/113772697)

> 之所以不贴自己的实现步骤是因为很早之前从域名申请到具体配置的过程中没有做相关记录, 现在也不想重新来一遍, 所以就不贴了
>
> ---
>
> 上述链接标题中有 Ubuntu, 但是实际上 Windows 上的配置也是一样的
>
> PS: Ubuntu 上的 Typora 版本要落后于 Windows 上的 Typora 的

---

#### Nextcloud+Picgo

> [Docker系列 深度使用nextcloud(三) Typora图床 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/507984461)

Nextcloud 也可以配合 Picgo 作为图床使用, 简单来说上传图片到 nextcloud 并通过公开链接共享后可以在链接后缀加上 `/preview` 预览

![image-20230322165531684](http://cdn.ayusummer233.top/DailyNotes/image-20230322165531684.png)

![image-20230322165555120](http://cdn.ayusummer233.top/DailyNotes/image-20230322165555120.png)

而 Nextcloud 提供了用于上传图片以及分享链接的接口, 因此可以制作 Picgo 上传 Nextcloud 的插件并配合 Typora  使用

---

在 PicGo 插件设置中搜索 Nextcloud 并安装此项:

![image-20230322103955291](http://cdn.ayusummer233.top/DailyNotes/202303221039302.png)

然后在 `图床设置` 中配置 Nextcloud 的地址以及登录账密以及图像存储根目录即可

![image-20230322104119590](http://cdn.ayusummer233.top/DailyNotes/202303221041054.png)

> PS: 插件市场里的两个插件最终都没能使用成功, 而且 log 里没什么有用的信息, 查了下对应的仓库, 最后一次更新均是在 21 年了, 打算后面有空二开一下
>
> PS: 后来考量了下使用了 Gitlab 当图床, 继而不再去考虑二开 nextcloud 的插件了

---

#### Gitlab+Picgo

> [d-w-x/picgo-plugin-gitlab-files: PicGo 向 Gitlab 的指定项目中上传图片 (github.com)](https://github.com/d-w-x/picgo-plugin-gitlab-files)

Gitlab 也可以配合 Picgo 当做图床使用, 需要新建一个公开的 Gitlab 项目, 然后配置项目 Token, 详细配置请参阅上述链接

Gitlab 仓库中的图片可以通过 `仓库链接/raw/{分支名}/pictures/{图片路径}` 进行访问, 且 Gitlab 提供了上传文件的接口, 因此可以制作 Picgo 上传图像到 gitlab 仓库的插件并配合 Typora  使用

---

在 PicGo 中下载

![image-20230322164819962](http://cdn.ayusummer233.top/DailyNotes/22_16_48_20_image-20230322164819962.png)

并按照 [d-w-x/picgo-plugin-gitlab-files: PicGo 向 Gitlab 的指定项目中上传图片 (github.com)](https://github.com/d-w-x/picgo-plugin-gitlab-files) 进行配置即可

> 需要注意的是 token 那里如果项目里要选角色的话默认是 `Guest`, 权限是不够的, 可以给个 `Owner` 权限

---

需要注意的是可能上传时会报错 `Error: Client network socket disconnected before secure TLS connection was established`  这可能是由于 Picgo 挂了本地代理, 将其关掉即可

![image-20230323093607447](http://cdn.ayusummer233.top/DailyNotes/image-20230323093607447.png)

![image-20230323093615890](http://cdn.ayusummer233.top/DailyNotes/image-20230323093615890.png)

---

如果报错 `RequestError: **Error**: self signed certificate` 那么可能是 gitlab 地址用了自签名的 SSL 证书, 忽略自签名即可, 具体操作如下

打开插件主程序 js 文件, 该文件默认为: `C:\Users\[Username]\AppData\Roaming\picgo\node_modules\picgo-plugin-gitlab-files\dist\index.js`

使用 `process.env` 对象来临时修改环境变量，来忽略自签名证书错误, 然后，你就可以在后面的代码中发送HTTPS请求，而忽略自签名证书错误。

> PS: 这种方法只会影响当前Node.js进程，不会永久改变环境变量。

```js
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
```

![image-20230606100829892](http://cdn.ayusummer233.top/DailyNotes/202306061008982.png)

---

如果报错 `Request failed with status code 403` 可能是 token 给的权限不够, 看下是不是只给了 Guest 权限

---

如果上传成功了但是 Typora 中无法正确渲染图像, 可能是因 Gitlab 使用了自签名的 SSL 证书, 可以设置 Typora 启动参数 `--ignore-certificate-errors` 来忽略该问题

![image-20230322171611111](http://cdn.ayusummer233.top/DailyNotes/22_17_16_11_image-20230322171611111.png)

![image-20230322171715554](http://cdn.ayusummer233.top/DailyNotes/image-20230322171715554.png)

---

### PicGo

> [Molunerfinn/PicGo: A simple & beautiful tool for pictures uploading built by vue-cli-electron-builder (github.com)](https://github.com/Molunerfinn/PicGo)
>
> ---

PicGo 之于 Markdown 主要是用于上传图片到个人图床并返回 Markdown 引用链接; 在前文 VSCode 中编辑 Markdown 中有提到 VSCode 中有PicGo 扩展,PicGo 也是有 PC 端软件的, 在 [Releases · Molunerfinn/PicGo (github.com)](https://github.com/Molunerfinn/PicGo/releases) 中可以下载对应系统版本的PicGo 安装包

![image-20221211025951361](http://cdn.ayusummer233.top/img/202212110259392.png)


---

#### PicGo 设置正确但是传不上去图片

可能是有设备拦截了请求, 可以在PicGo 设置中配置代理来解决

---

#### 继续配合 ShareX 使用

有时单纯的静态图片可能不能很明确地展示效果, 用 GIF 可能会更好些

在插入静态图片时通常是截屏后剪贴板中会有该截图, 直接粘贴到 Typora 中就可以自动调佣 PicGo 将剪贴板中的静态图片上传到图床并生成 markdown 引用代码

但是对于 GIF, 首先是在截图方面最常使用的工具多为: Windows 自带的 `Win + Shift + S`, Snipaste, QQ截图, 但是这些工具通常不支持截 GIF, ShareX 是支持截 GIF 的

设置截图后复制==文件==到剪贴板:

![](http://cdn.ayusummer233.top/img/202212110055198.png)

然后直接在 Typora 上粘贴即可自动调用PicGo 上传到图床

> 比如:
>
> ![](http://cdn.ayusummer233.top/img/202212110048562.gif)

---

### Pandoc

> [安装和使用Pandoc | typora中文网](https://www.typora.net/1193.html)
>
> [Pandoc 2.16.1-windows-x86_64.msi - OneDrive Share](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EfwTtm_9ifpOmU-DP6dVdT8BPsdarssrIctgWWs_cyv1zA?e=yT8wBM)
>
> ---

Pandoc 是通用文档文本转换器。Typora 使用它来支持几种文件类型的文件导入/导出功能。

---
### reveal-md

> [markdown写ppt (史上最全)  - 疯狂创客圈 - 博客园 (cnblogs.com)](https://www.cnblogs.com/crazymakercircle/p/14372042.html)

像演示 PPT 一样演示 markdown

`安装`:

执行如下命令进行全局安装 `reveal-md`

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

### CodiMD

> [hackmdio/codimd: CodiMD - Realtime collaborative markdown notes on all platforms. (github.com)](https://github.com/hackmdio/codimd)
>
> [实时、多平台协作的markdown开源神器--CodiMD - 开源指北 (gitee.io)](https://coderguide.gitee.io/blog/2022/02/27/实时-多平台协作的markdown开源神器-CodiMD.html)

---

#### 部署

```bash
# 进入 mysql 命令行后创建一个数据库
create schema codimd default character set utf8 collate utf8_general_ci;
# 创建用户
create user '[用户名称]'@'%' identified by '[用户密码]';
# 授权用户
GRANT ALL PRIVILEGES ON *.* TO 用户名@'%' IDENTIFIED BY '密码';
# 刷新生效
flush privileges;
use mysql;
select host, user from user;
show databases;
#确认具有操作codimd 库的权限
```

![image-20231228154504763](http://cdn.ayusummer233.top/DailyNotes/202312281545656.png)

![image-20231228155430388](http://cdn.ayusummer233.top/DailyNotes/202312281554965.png)

新建并编辑一个 `docker-compose.yml` 文件

```yml
version: "3"
services:
  codimd:
    image: hackmdio/hackmd:2.4.2
    environment:
      - CMD_DB_URL=mysql://codimd:此处填写密码@172.17.0.1:3306/codimd
      - CMD_USECDN=false
    ports:
      - "3000:3000"
    volumes:
      - upload-data:/home/hackmd/app/public/uploads
    restart: always
volumes:
  database-data: {}
  upload-data: {}
```

这里需要注意两点

- 首先是 172 网段的 ip, 需要确认一下主机上的 docker 网段的 ip

  ![image-20231228164324926](http://cdn.ayusummer233.top/DailyNotes/202312281652654.png)

- 其次是 mysql 的端口绑定, 默认绑定在 `localhost`, 需要手动改到 `0.0.0.0`

  一般这个配置文件在 `/etc/mysql/mariadb.conf.d/50-server.cnf`

  ```properties
  bind-address            = 0.0.0.0
  ```

  然后重启 mysql

  ```bash
  service mysql restart
  ```

配置完成后执行

```bash
docker-compose up -d
# 或新版的 docker compose up -d
```

访问默认映射的 3000 端口可以看到  CodiMD 的页面

![image-20231228165140455](http://cdn.ayusummer233.top/DailyNotes/202312281651017.png)

> 如果看不到页面的话请自行查看 docker logs 进行排错
>
> 官方提供的 postgres 版本的 docker-compose.yml 尝试了几次无法成功所以直接用了本地的 mariadb(mysql)


---
## something interesting

### 徽章

> [RimoChan/unv-shield: 【幼盾】个性化图片徽章服务！ (github.com)](https://github.com/RimoChan/unv-shield)
>
> ---

```markdown
![](https://unv-shield.librian.net/api/unv_shield?code=1&url=https://avatars.githubusercontent.com/u/59549826&scale=2&txt=好!&border=4&barradius=999)
```

![](https://unv-shield.librian.net/api/unv_shield?code=1&url=https://avatars.githubusercontent.com/u/59549826&scale=2&txt=好!&border=4&barradius=999)

---
### markdown + pandoc 写论文

> 没搞定, 太繁杂了感觉, mark 下, 以后有空再弄

> [使用Markdown搭配Pandoc撰写学术论文的详细指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/395193554)

#### 文献管理工具: Zotero

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

#### Better BibTex

> [Better BibTeX](https://retorque.re/zotero-better-bibtex/)

下载此 `xpi` 文件后打开 `Zotero->工具->插件->右上方齿轮图标-> Install add-on From File...` 选择下载好的 `xpi` 文件进行安装, 安装完后重启 `Zotero` 会自动进入 `Better BibTeX` 的配置页面(均默认即可)

然后进入 `Zotero` 主界面 `编辑->首选项->Better BibTeX` 进行如下配置:

![20220309152816](http://cdn.ayusummer233.top/img/20220309152816.png)

![20220309152859](http://cdn.ayusummer233.top/img/20220309152859.png)

返回 `Zotero` 主界面后会看到多了一列 `Citation Key` 属性

![20220309153131](http://cdn.ayusummer233.top/img/20220309153131.png)

> `Citation Key` 可以理解成每个条目的唯一 id, 在上述配置过程中我们将其配置成了 `[auth:lower[year]`的形式, 如果有重复的话会在后面添加 `a b c` 或者数字进行区分
