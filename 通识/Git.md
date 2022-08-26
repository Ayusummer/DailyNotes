# 目录
- [目录](#目录)
- [查看与升级版本](#查看与升级版本)
- [配置相关](#配置相关)
- [仓库相关](#仓库相关)
  - [常规操作](#常规操作)
- [relations](#relations)
  - [code996](#code996)
- [learnGitBranching](#learngitbranching)
- [报错收集](#报错收集)
  - [fatal: Authentication failed](#fatal-authentication-failed)

# 查看与升级版本

> [How to upgrade Git on Windows to the latest version - Stack Overflow](https://stackoverflow.com/questions/13790592/how-to-upgrade-git-on-windows-to-the-latest-version)

```bash
# 查看版本
git --version
# 升级 windows git
git update-git-for-windows
```

> 版本 > 2.16.1 则使用： git update-git-for-windows
> 版本 2.14.2-2.16.1 则使用： git update
> 版本 <2.14.2 请重新下载安装覆盖

命令执行完毕后弹出 `git 安装弹窗`, 根据提示进行安装即可

> 通过命令行下载慢的话可以选择 [Git (git-scm.com)](https://git-scm.com/) 下载 exe 执行更新即可

---

# 配置相关

```shell
git config --global user.email "GitHub绑定邮箱"
git config --global user.name "GitHub用户名"
```

---

# 仓库相关

查看远程仓库地址

```shell
git remote -v
```

---

## 常规操作

```shell
# stage 当前所有修改
git add .
# commit 并加备注
git commit -m "备注"
# 推送到 origin master
git push origin master
```

---

# relations

## code996

> [hellodigua/code996: code996 是一个分析工具，它可以统计 Git 项目的 commit 时间分布，进而推导出这个项目的编码工作强度 (github.com)](https://github.com/hellodigua/code996)
>
> code996 是一个分析工具，它可以统计 Git 项目的 commit 时间分布，进而推导出这个项目的编码工作强度。

[Preview](https://hellodigua.github.io/code996/)

Mac 或 Linux 用户：

**在 Git 项目的根目录**，执行以下命令：

```shell
curl -fsSL https://fastly.jsdelivr.net/gh/hellodigua/code996/bin/code996.sh | bash
```

> 或者下载 `https://fastly.jsdelivr.net/gh/hellodigua/code996/bin/code996.sh` 后直接 `bash code996.sh`

Windows 用户：

下载该脚本 `https://fastly.jsdelivr.net/gh/hellodigua/code996/bin/code996.sh`

然后将该脚本移至要分析的 Git 项目目录，并执行以下命令：

```shell
iwr https://fastly.jsdelivr.net/gh/hellodigua/code996/bin/code996.ps1 -OutFile ([System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), 'code996.ps1')); & ([System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), 'code996.ps1')); ri ([System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), 'code996.ps1'))
```

> 需要使用 PowerShell 7 或更高版本
>
> [PowerShell 7相关](https://github.com/Ayusummer/DailyNotes/blob/main/通识/软件相关.md#powershell-7)

---

# learnGitBranching

> [pcottle/learnGitBranching: An interactive git visualization and tutorial. Aspiring students of git can use this app to educate and challenge themselves towards mastery of git! (github.com)](https://github.com/pcottle/learnGitBranching)

Github 仓库拉取速度可能会比较慢, 所以可以将其导入到 Gitee 仓库中: [learnGitBranching: https://github.com/pcottle/learnGitBranching 学习 Git, 用于个人部署 (gitee.com)](https://gitee.com/ayusummer233/learnGitBranching)

![image-20220826194715403](http://cdn.ayusummer233.top/img/202208261947482.png)

选择一台设备装好 Python 和 nodejs+yarn 并配置好 Git, 本次试验环境为 ubuntu16.04

```bash
# clone 仓库
git clone https://gitee.com/ayusummer233/learnGitBranching.git
# 安装依赖
yarn install
yarn gulp fastBuild # skips tests and linting, faster build
yarn gulp build # runs tests and lint
# 使用 screen 创建一个窗口(或者使用 tmux 或者 zellij 均可)
screen -S gitLearn
# 使用 Python http.server 部署到本地 9222 端口(或随便换个自己喜欢的端口)
python -m http.server 9222
# Ctrl A D 挂起当前 screen
```

---

# 报错收集

---

## fatal: Authentication failed

> [Token authentication requirements for Git operations | The GitHub Blog](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
>
> [Creating a personal access token - GitHub Docs](https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

`remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: Authentication failed for 'https://github.com/Ayusummer/vue-vben-admin.git/'`

![image-20220503212613312](http://cdn.ayusummer233.top/img/202205032126873.png)

![image-20220503212933997](http://cdn.ayusummer233.top/img/202205032129065.png)

需要在 github 上创建一个私有的 access token 来用

![image-20220503213035692](http://cdn.ayusummer233.top/img/202205032130796.png)

![image-20220503213144120](http://cdn.ayusummer233.top/img/202205032131211.png)

填写自拟的token名并设置过期时间以及权限后点击页面左下角的 `Generate token`创建即可

> **Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

然后就可以通过 `username` 和 `token` 来进行一些权限操作了

![image-20220503213634670](http://cdn.ayusummer233.top/img/202205032136970.png)

---

