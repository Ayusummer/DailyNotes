<!--

 * @Author: your name
 * @Date: 2021-01-21 23:01:29
 * @LastEditTime: 2021-06-28 11:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\社区相关\Github.md
-->

# 目录
- [目录](#目录)
- [杂项](#杂项)
  - [PC网页端用户头像加载不出来](#pc网页端用户头像加载不出来)
  - [.git过大](#git过大)
  - [github连接超时问题](#github连接超时问题)
  - [Branch](#branch)
- [Git配置](#git配置)
- [Commit](#commit)
  - [规范](#规范)
- [Issues](#issues)
- [Pull Request](#pull-request)
- [Actions](#actions)
- [Markdown](#markdown)
  - [数学公式](#数学公式)
- [webhooks](#webhooks)
  - [借助钉钉的Github机器人将仓库变动通知到钉钉群里](#借助钉钉的github机器人将仓库变动通知到钉钉群里)
- [开源许可证选择](#开源许可证选择)
- [报错处理](#报错处理)
  - [`Failed to connect to github.com port 443 after 21063 ms: Timed out`](#failed-to-connect-to-githubcom-port-443-after-21063-ms-timed-out)
  - [`OpenSSL SSL_read: Connection was reset, errno 10054`](#openssl-ssl_read-connection-was-reset-errno-10054)

# 杂项

---
## PC网页端用户头像加载不出来
- [解决Github网页上图片显示失败的问题](https://zhuanlan.zhihu.com/p/139219691)[参考链接]
- 当前无法显示用户头像的页面下`Ctrl+Shift+C`打开元素选择器选择未加载出的头像定位到其在源码中的标签并记下其域名
  - ![](../res_-daily-notes/img/Github/获取缺失图片域名.png)
- 打开`https://www.ipaddress.com/`输入域名并回车得到一个ip
  - ![](../res_-daily-notes/img/Github/获取ip.png)
- 打开路径`C:\Windows\System32\drivers\etc`
- 修改该路径下的`host`文件的文件属性中的`安全`一栏中的`Users`组的权限,勾选`完全控制`
- 用记事本打开`host`文件,在末尾粘贴以下文字并保存退出,返回原网页刷新即可
    ```
    # GitHub Start(更新于2021.1.22) 
    140.82.113.3      github.com
    140.82.114.20     gist.github.com
    
    199.232.96.133    assets-cdn.github.com
    199.232.96.133    raw.githubusercontent.com
    199.232.96.133    gist.githubusercontent.com
    199.232.96.133    cloud.githubusercontent.com
    199.232.96.133    camo.githubusercontent.com
    199.232.96.133    avatars.githubusercontent.com
    199.232.68.133     avatars.githubusercontent.com
    199.232.96.133    avatars0.githubusercontent.com
    199.232.68.133     avatars0.githubusercontent.com
    199.232.28.133     avatars1.githubusercontent.com
    199.232.96.133    avatars1.githubusercontent.com
    199.232.96.133    avatars2.githubusercontent.com
    199.232.28.133     avatars2.githubusercontent.com
    199.232.96.133    avatars3.githubusercontent.com
    199.232.68.133     avatars3.githubusercontent.com
    199.232.96.133    avatars4.githubusercontent.com
    199.232.68.133     avatars4.githubusercontent.com
    199.232.96.133    avatars5.githubusercontent.com
    199.232.68.133     avatars5.githubusercontent.com
    199.232.96.133    avatars6.githubusercontent.com
    199.232.68.133     avatars6.githubusercontent.com
    199.232.96.133    avatars7.githubusercontent.com
    199.232.68.133     avatars7.githubusercontent.com
    199.232.96.133    avatars8.githubusercontent.com
    199.232.68.133     avatars8.githubusercontent.com
    
    # GitHub End
    ```
  > 如若你得到的ip并非`199.232.96.133`则只需把上面代码中的`199.232.96.133`利用查找替换替换为你得到的ip即可(当再次无法看到头像时可以试着重查一次ip然后替换掉原ip)

---
## .git过大
- 初用git时有时会错把资源文件传到源码仓库里去,这样下来仓库本身就会变得特别大,即使是后来删掉了资源文件也会导致`.git`文件过大从而直接`clone`的时候可能会因为仓库过大而失败
- 提交次数过多也会让`.git`越来越大
- **解决方法[@Ever-Lose](https://www.cnblogs.com/everlose/p/12826025.html)**:如果确定之前的提交对现在已经没有用了,那么在`clone`仓库的时候在最后加上`--depth 1`只克隆最后一次`commit`


---
## github连接超时问题
- 使用腾讯云北京的轻量应用服务器推送更新时总是连接超时,最终找到了有效的如下[解决方案](https://cloud.tencent.com/developer/article/1704705)
- 打开 ipaddress.com,查询github.com域名，记录下其对应的ip(IP Address项内容)
- 修改并保存`/etc/hosts`:末尾加上 
  ```
  查询到的域名 github.com
  ```

---
## Branch
- 多分支适用于开发环境, 签出多个分支以同时推进多个任务, 提高开发效率





---
# Git配置
- 设置用户名
  ```
  git config --global user.name "GitHub用户名"
  ```
  - 用户名随个人喜好即可,并非必须要Github的用户名,可以起一个能够代表当前修改环境的名字
- 设置用户邮箱
  ```
  git config --global user.email "GitHub绑定邮箱"
  ```
  - GitHub绑定邮箱请根据自己注册的账号邮箱填写
- 查看当前配置项列表
  ```
  git config --list
  ```
- 删除某个配置项(以`user.name`为例)
  ```
  git config --global --unset user.name
  ```
- 编辑某个配置项
  ```
  git config --global --edit user.name '用户名'
  ```

----
# Commit
- 提交代码

---
## 规范

[UvDream/git-commit-lint-vscode: vscode一款git 规范化提交插件 (github.com)](https://github.com/UvDream/git-commit-lint-vscode)

参照 `Angular` 社区的提交规范并结合 emoji, 上面参考链接里这位老哥开发了一款 `VSCode` git 规范化提交插件 `git-commit-lint-vscode`, 提交的时候可视化选择类型然后再手打详细信息

![image-20210628112317321](http://cdn.ayusummer233.top/img/20210628112317.png)


----
# Issues


---
# Pull Request
- [参考链接](https://www.zhihu.com/question/21682976)
- 以下为文章原文:
- 我尝试用类比的方法来解释一下 pull reqeust。想想我们中学考试，老师改卷的场景吧。
  - 你做的试卷就像仓库，你的试卷肯定会有很多错误，就相当于程序里的 bug。
  - 老师把你的试卷拿过来，相当于先 fork。
    - 在你的卷子上做一些修改批注，相当于 git commit。
    - 最后把改好的试卷给你，相当于发 pull request，
  - 你拿到试卷重新改正错误，相当于 merge。

---

# SSH Key

> [git生成连接远程仓库的密钥_旁观者lgp的博客-CSDN博客](https://blog.csdn.net/qq_45515863/article/details/106312232)

- 在主机创建 ssh key

  ```shell
  ssh-keygen -t rsa -C "youremail@example.com"
  ```

  `youremail@example.com` 替换为 github 登录邮箱

  运行命令后一路回车默认配置, 根据运行提示找到 公钥 `id_rsa.pub`

- `Github 右上角头像 -> Settings -> SSH and GPG keys -> add new ssh key`

  title 随便填, key 粘贴 `id_rsa.pub` 的全部内容

- 在主机上使用

  ```shell
  git clone 仓库SSH路径
  ```

  来 clone 仓库

---
# Actions

> [原文链接:GitHub Actions 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
>
> [关于工作流程 - GitHub Docs](https://docs.github.com/cn/github-ae@latest/actions/using-workflows/about-workflows)

持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

很多操作在不同项目里面是类似的，完全可以共享。GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。

GitHub 做了一个[官方市场](https://github.com/marketplace?type=actions)，可以搜索到他人提交的 actions。另外，还有一个 [awesome actions](https://github.com/sdras/awesome-actions) 的仓库，也可以找到不少 action。

每个 action 就是一个独立脚本，因此可以做成代码仓库，使用`userName/repoName`的语法引用 action。比如，`actions/setup-node`就表示`github.com/actions/setup-node`这个[仓库](https://github.com/actions/setup-node)，它代表一个 action，作用是安装 Node.js。事实上，GitHub 官方的 actions 都放在 [github.com/actions](https://github.com/actions) 里面。

 actions 是代码仓库，有版本的概念，用户可以引用某个具体版本的 action。下面都是合法的 action 引用，用的就是 Git 的指针概念，详见[官方文档](https://help.github.com/en/articles/about-actions#versioning-your-action)。

```sh
actions/setup-node@74bc508 # 指向一个 commit
actions/setup-node@v1.0    # 指向一个标签
actions/setup-node@master  # 指向一个分支
```

---

## 基本概念

- `workflow`: 持续集成一次运行的过程，就是一个 workflow。
- `job`: 一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
- `step`: 每个 job 由多个 step 构成，一步步完成。
- `action`: 每个 step 可以依次执行一个或多个命令（action）。

---

## workflow

GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的`.github/workflows`目录。

workflow 文件采用 [YAML 格式](https://www.ruanyifeng.com/blog/2016/07/yaml.html)，文件名可以任意取，但是后缀名统一为`.yml`，比如`foo.yml`。一个库可以有多个 workflow 文件。GitHub 只要发现`.github/workflows`目录里面有`.yml`文件，就会自动运行该文件。

> ![image-20220522071931643](http://cdn.ayusummer233.top/img/202205220719879.png)

workflow 文件的配置字段非常多，详见[官方文档](https://help.github.com/en/articles/workflow-syntax-for-github-actions)。下面是一些基本字段。

- `name`: `name`字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。

  ```yaml
  name: Create Release
  ```

- `on`: `on`字段指定触发 workflow 的条件，通常是某些事件。

  ```yaml
  on: push
  ```

  上面代码指定，`push`事件触发 workflow。

  `on`字段也可以是事件的数组。

  ```yaml
  on: [push, pull_request]
  ```

  完整的事件列表，请查看[官方文档](https://help.github.com/en/articles/events-that-trigger-workflows)。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。

- `on.<push|pull_request>.<tags|branches>`: 指定触发事件时，可以限定分支或标签。

  ```yaml
  on:
    push:
      branches:    
        - master
  ```

  当使用 `push` 事件时, 可以配置 `workflow` 运行在指定的 `branch` 或是 `tag` 上

  如果希望包含 `branch` 名称模式，或者希望同时包含和排除 `branch` 名称模式，可以使用 `branch` 筛选器。当只想排除分支名称模式时，使用`branches-ignore`筛选器。注意不能对工作流中的同一事件同时使用 `branches` 和 `branches-ignore`筛选器

  对于 `tag` 处理和上述 `branch` 处理相似

  像这样类似的 `paths` 以及 `paths-gnore` 关键词支持使用 `*` 和 `**` 通配符匹配多个路径名的 glob pattern; 更多信息请参阅“[过滤器模式备忘清单](https://docs.github.com/cn/github-ae@latest/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

- `jobs.<job_id>.name`

  workflow 文件的主体是`jobs`字段，表示要执行的一项或多项任务。

  `jobs`字段里面，需要写出每一项任务的`job_id`，具体名称自定义。`job_id`里面的`name`字段是任务的说明。

  ```yaml
  jobs:
    my_first_job:
      name: My first job
    my_second_job:
      name: My second job
  ```

  上面代码的`jobs`字段包含两项任务，`job_id`分别是`my_first_job`和`my_second_job`。

  ```yaml
  jobs:
    build:
      name: Create Release
  ```

  `job_id`: build; `name`: Create Release

- `jobs.<job_id>.needs`: `needs`字段指定当前任务的依赖关系，即运行顺序。

  ```yaml
  jobs:
    job1:
    job2:
      needs: job1
    job3:
      needs: [job1, job2]
  ```

  上面代码中，`job1`必须先于`job2`完成，而`job3`等待`job1`和`job2`的完成才能运行。因此，这个 workflow 的运行顺序依次为：`job1`、`job2`、`job3`。

- `jobs.<job_id>.runs-on`: `runs-on`字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。

  ```yaml
  ubuntu-latest，ubuntu-18.04或ubuntu-16.04
  windows-latest，windows-2019或windows-2016
  macOS-latest或macOS-10.14
  ```
  
  > [About self-hosted runners - GitHub Docs](https://docs.github.com/cn/github-ae@latest/actions/hosting-your-own-runners/about-self-hosted-runners)
  

- `jobs.<job_id>.steps`: `steps`字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。
  - `jobs.<job_id>.steps.name`：步骤名称。
  - `jobs.<job_id>.steps.run`：该步骤运行的命令或者 action。
  - `jobs.<job_id>.steps.env`：该步骤所需的环境变量。

  

  

---

# Markdown

## 数学公式

- [访问该地址](https://github.com/orsharir/github-mathjax/releases/tag/v0.2.1)
  - 下载`Source code(zip)`
  - 解压到`C:/Users/"你的用户名"/AppDataLocal/Google/Chrome/User Data/Default/Extensions
    - 注意解压后的文件夹表层和里一层都是一样的文件夹名
      - 只要里层的
  - 打开Chrome扩展程序,打开开发者模式
  - 加载已解压的扩展程序
    - 就是刚才放到上面目录里的整个文件夹
    - ![结构示意图](../res_-daily-notes/img/Github/Chrome插件github-mathjax文件结构示意图.png)
  - 此时再打开Github查看源码就能显示markdown的数学公式了
  - ![成功演示](../res_-daily-notes/img/Github/Github查看Markdown数学公式成功演示.png)

# webhooks
## 借助钉钉的Github机器人将仓库变动通知到钉钉群里
- [参考链接](https://blog.csdn.net/q563573095/article/details/79580249)
- 进入钉钉群聊
  - 侧边栏第一个图标`群设置`
  - 智能群助手
  - 添加机器人
  - 更多`...`          
  - **Github**机器人
  - 添加
  - 复制Webhook链接
- 打开Github仓库
  - Settings
  - 左侧边栏`Webhooks`
  - `Add webhook`
  - `Payload URL`填刚才从钉钉Github机器人那里复制来的webhook链接
  - 其余选项自行发挥
    - 记得勾选Active
  - `Add webhook`
- push一次提交
  - 这时候就会有钉~的提醒啦

# 开源许可证选择
![开源许可证选择](https://images.gitee.com/uploads/images/2021/0213/173905_ce78c29a_7703072.png "屏幕截图.png")
> [from 阮一峰-2011.5.2](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

---

# 报错处理

## `Failed to connect to github.com port 443 after 21063 ms: Timed out`

网不好, 换个结点

---

## `OpenSSL SSL_read: Connection was reset, errno 10054`

> [【Git/GitHub】解决Git上传时OpenSSL SSL_read: Connection was reset, errno 10054的错误_memcpy0的博客-CSDN博客](https://blog.csdn.net/myRealization/article/details/119737101)

我碰到的情况是本地 git 配置错了, 前阵子在 github 上更改了主邮箱, 相应的本地配置要改下邮箱

```shell
git config --global user.email "xxx"
```



