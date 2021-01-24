<!--
 * @Author: 咸鱼型233
 * @Date: 2021-01-21 22:57:37
 * @LastEditTime: 2021-01-22 09:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\README.md
-->
# DailyNotes概述
- 普通的日常学习记录以用于区别课程笔记
- 用于保存类纯文本格式的笔记,本库中最常使用Markdown,其中使用的图片资源为相对链接引用的另一个Gitee库中的图片
- 另一个Gitee中的res库中除了本库的图片资源还有各种非纯文本格式的笔记,如JupyterLab笔记本,OneNote笔记本等
  - 单个的笔记本文件无法直接预览也无法进行增量更新确实不如人意,不过图文在同一个文件里倒是方便了查阅
  - 不用OneNote的共享功能是因为国内同步速度较慢还容易出问题

---
# 项目部署指南
- 本项目为一个笔记整理型项目,主要工作在本地`VSCode`编辑器中完成,并通过`GitHub Desktop`来快捷提交并推送以及拉取仓库
- 配合[此处](https://gitee.com/ayusummer233/res_-daily-notes)的Gitee库构成一个整体,两个库都clone下来后将Gitee库放到本仓库的根目录下(.gitignore文件已添加根目录下Gitee库的文件夹名,不会被Github同步)

---
### 本地环境配置
- 首先你要创建一个GitHub账号并且**用GitHub账号**再登录Gitee,并且由加入到笔记仓库以及res仓库
  - 加入仓库由本仓库创建者发起邀请链接
  - 请务必使用GItHub登录Gitee或者Gitee绑定GItHub账户
- 在本地下载并安装并配置如下软件
  - [Git](https://github.com/git-for-windows/git/releases/download/v2.29.2.windows.2/Git-2.29.2.2-64-bit.exe)
    - 安装时注意观察,其中有一项编辑器选择,建议选择`VSCode`
    - 下载安装好后打开`git bash`,使用如下命令配置你的`GitHub绑定邮箱`以及`GitHub用户名`
      ```
      git config --global user.email "GitHub绑定邮箱"
      git config --global user.name "GitHub用户名"
      ```
      - GitHub绑定邮箱请根据自己注册的账号邮箱填写
      - 用户名随个人喜好即可
    > 请务必使用GitHub登录Gitee或者在Gitee的`设置`页面绑定GitHub账号 ,否则你将无法使用你本地的GitHub账号配置藉由`GitHub Desktop`对仓库进行任何操作
  - [GitHub Desktop](https://central.github.com/deployments/desktop/desktop/latest/win32)
    - 下载安装好后打开登录你的GitHub账户
      - 界面左上角`File`->`Options...`->`Accounts`->登录你的GitHub账户
    - 克隆笔记仓库以及res仓库
      - 克隆笔记仓库
        - `File`->`Clone repository`->`URL`
          - 第一栏的链接填写`https://github.com/Ayusummer/JuniorLessons_beta.git`
          - 第二栏的`Local path`选择一个你本地的目录
            - 尽量是一个纯英文无空格的目录,因为仓库中含有部分示例代码文件,如果你想在原位置运行的话尽量让你的目录符合规范
      - 克隆res仓库
        - res仓库含有笔记仓库的笔记文件中的图片源文件,由于其体积较笔记文本文件比较大故而放在了国内访问更快的`Gitee`平台
        - 步骤和克隆笔记仓库的步骤一致
          - 链接为:`https://gitee.com/junior-lesson_beta/res.git`
          - `Local path`选择上一步笔记仓库本地位置的根目录
          > `res`仓库正确`clone`后本地笔记仓库的文件结构应当是下面这样的: 
          ![仓库文件结构](https://images.gitee.com/uploads/images/2020/1207/100533_e59b60e3_7703072.png "屏幕截图.png")
  - [VSCode](https://vscode.cdn.azure.cn/stable/e5a624b788d92b8d34d1392e4c4d9789406efe8f/VSCode-darwin-stable.zip)
    - 这里选用了VSCode来进行笔记的整理,其对Markdown以及其他类型文件的支持性比较好
      - 编写以及预览Markdown文件使用的VSCode扩展
        - Markdown All in One
        - Markdown Converter
    > 当然,你也可以选择"宇宙第一IDE"VisualStudio,自己习惯就好


---
## res包
- [res包同步更新项目](https://gitee.com/ayusummer233/res_-daily-notes)
  - 在clone完本笔记项目后在本地文件资源管理器打开项目的根目录并在此处打开命令行或者powershell,输入`git clone https://gitee.com/ayusummer233/res_-daily-notes.git`并回车以克隆res仓库
    - 或者使用部署指南中的`GitHub Desktop`快速部署

---
## 修改仓库操作提醒
- 请注意钉钉群聊的仓库变动提醒,及时将仓库更新`pull`到本地
  - 提交修改之前**务必注意**是否有未`pull`到本地的远程修改,**切勿**直接覆盖远程仓库;
  - 使用VSCode可以快捷地处理`conflict`
- `GitHub Desktop`的基本使用
  > 此部分采用了本地图片,请在正确克隆了res仓库后阅读(毕竟内容主要都在图的注释上)
  - **务必不要**把图片推送给笔记仓库,笔记仓库在GItHub上,访问速度不佳
  - 置项说明
    - 下面的操作有时会产生`conflict`,此时说明本地与远程的仓库存在冲突,**请不要强制本地仓库覆盖远程仓库**,而应该通过VScode打开来处理这些冲突
      - VSCode提供了可交互式按钮,在修改文件的修改行会有按钮可供选择保留本地的修改,保留远程的修改以及保留二者的修改
      - 当然也不要随意强制远程覆盖本地,有的朋友没有备份的观念,强制远程同步本地就会导致自己在本地做的修改丢失
  - `commit`
    - 提交本地的修改形成一份提交记录
    - ![](res_-daily-notes/img/README/commit.png)
  - `push`
    - 将本地提交的修改记录推送到远程仓库
    - ![](res_-daily-notes/img/README/push.png)
  - `pull`
    - 将远程仓库的更新拉取到本地
    - ![](res_-daily-notes/img/README/Fetch.png)
  > 不需要修改仅仅是为了查阅的话会`pull`即可 

---
## 本项目使用到的软件
- 建议将项目clone到本地配合GitHub Desktop以及VSCode使用
  - GitHub Desktop用于commit,pull,push...
  - VSCode结合相关扩展用于查看内容
- 本项目涉及到的语言,配置及相关软件如下
  - markdown
    - VSCode
      - 使用扩展
        - Markdown All in One
        - Markdown Converter
  - Java
    - 使用软件:IDEA
    - JDK14 
    - Android Studio
    - 编码方案:
      - 没有特殊说明则为UTF-8
  - C++
    - Visual Studio Community
  - Python
    - Pycharm
    - Anaconda
    - python3.8


---
## Markdown的基本使用
- 见本文件同目录下的`Markdown.md`文件,里面记录着Markdown的一些使用方法

---
### 本仓库使用markdown的注意事项
- 插入图片请尽可能将图片源文件放在`res_-daily-notes/img`文件夹中的对应课程文件夹中并使用相对链接插入图片
  - `res_-daily-notes`文件夹已加入`.gitignore`,不会被本仓库同步
    - 不要删除`.gitignore`中的信息,可以在里面增添你想要忽略的自己的文件夹,把`res_-daily-note`s加入`.gitignore`是因为它太大了,不适合放在访问速度较慢的GitHub上,以免需要下载或者clone整个项目时花费过多时间
  - 提交本仓库的修改若新增或删改了`res_-daily-notes`中的文件请不要忘记向`res_-daily-notes`仓库提交并推送修改


