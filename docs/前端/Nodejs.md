# Nodejs

- [Nodejs](#nodejs)
  - [安装](#安装)
    - [nvm](#nvm)
      - [安装 nvm](#安装-nvm)
      - [使用 nvm](#使用-nvm)
  - [换源](#换源)
    - [源地址](#源地址)
    - [临时替换](#临时替换)
    - [持久使用](#持久使用)
  - [包管理工具](#包管理工具)
    - [npm, cnpm, pnpm, yarn 常用操作](#npm-cnpm-pnpm-yarn-常用操作)
    - [yarn](#yarn)
      - [ubuntu 安装 yarn](#ubuntu-安装-yarn)
    - [pnpm](#pnpm)
      - [换源](#换源-1)
      - [代理](#代理)
      - [报错收集](#报错收集)
        - [ ERROR  Unable to find the global bin directory](#error-unable-to-find-the-global-bin-directory)
        - [ EBUSY  EBUSY: resource busy or locked, symlink](#ebusy-ebusy-resource-busy-or-locked-symlink)


---

## 安装

:::tabs

@tab:ative Windows

Windows 下直接下载可执行文件安装即可

@tab Ubuntu

Ubuntu 下从 NodeSource 中安装 Node.js 和 npm

> [如何在 Ubuntu 20.04 上安装 Node.js 和 npm-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/760687)
>
>  [nodesource/distributions: NodeSource Node.js Binary Distributions (github.com)](https://github.com/nodesource/distributions#debinstall)
>
> ---

```shell
# 下载并执行 NodeSource 安装脚本
# 这个脚本将会添加 NodeSource 的签名 key 到你的系统，创建一个 apt 源文件，安装必备的软件包，并且刷新 apt 缓存。
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
# NodeSource 源启用成功后，安装 Node.js 和 npm:
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
```

- 想要从 npm 编译本地扩展，则需要安装开发工具：

  ```bash
  sudo apt install build-essential
  ```

:::

---

### nvm

> [coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go. --- coreybutler/nvm-windows：Windows 的 node.js 版本管理实用程序。具有讽刺意味的是用 Go 编写的。 (github.com)](https://github.com/coreybutler/nvm-windows)

NVM(Node Version Manager) 用于在同一台计算机上安装和管理多个 Node.js 版本

在 [coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go. --- coreybutler/nvm-windows：Windows 的 node.js 版本管理实用程序。具有讽刺意味的是用 Go 编写的。 (github.com)](https://github.com/coreybutler/nvm-windows/releases) 下载可执行程序进行安装即可

> 请务必使用 ==管理员模式== 启动安装程序, 否则可能导致符号链接建立出问题而且不会报错, 直到后面使用 nvm use 命令启用对应版本 node 时会报错找不到 node

安装完成后打开命令行输入 `nvm version` 可以看到 nvm 版本号

![image-20230507141230949](http://cdn.ayusummer233.top/DailyNotes/202305071412962.png)

使用 nvm 安装下 `node v16.16.0`

```bash
nvm install 16.16.0
```

![image-20230507141515448](http://cdn.ayusummer233.top/DailyNotes/202305071415483.png)

使用 `nvm list` 可以看到当前在 nvm 管理下的 node 版本:

![image-20230507142108544](http://cdn.ayusummer233.top/DailyNotes/202305071421559.png)

使用 `node v16.16.0`

```bash
nvm use 16.16.0
```

按理来说此时 `node -v` 会显示 `16.16.0`, 但是我显示 node 不可用

> 原因可能是因为安装 nvm 时没有用管理员模式启动安装程序导致符号链接建立上有问题? 总之使用管理员模式重新安装 nvm 解决了此问题

![image-20230507144939140](http://cdn.ayusummer233.top/DailyNotes/202305071449170.png)

---

#### 安装 nvm

:::tabs

@tab:active Windows

在 [GitHub - coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.](https://github.com/coreybutler/nvm-windows) 的 Release 中下载可执行程序进程安装

![image-20240119021421814](http://cdn.ayusummer233.top/DailyNotes/202401190214887.png)

@tab Linux

在 [GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm) 找到 `install.sh` 下载或复制其中的代码(需要其他版本的nvm可以翻下release)

然后使用 `bash install.sh` 执行, 完成后 `source ~/.bashrc` 即可

:::

安装完成后可以在 powershell/bash 中使用 `nvm version` 确认是否安装成功

![image-20240119021632102](http://cdn.ayusummer233.top/DailyNotes/202401190216160.png)

---

#### 使用 nvm

安装特定版本的 nodejs, 例如

```bash
nvm install 14.17.3
```

> timeout的话可以走下代理
>
> 例如 powershell 设置代理
>
> ```powershell
> $env:HTTP_PROXY="http://127.0.0.1:7890"
> $env:HTTPS_PROXY="http://127.0.0.1:7890"
> ```
>
> ![image-20240119022016369](http://cdn.ayusummer233.top/DailyNotes/202401190220405.png)

设置默认的 nodejs 版本:

```bash
nvm use 14.17.3
```

查看当前 nvm 管理的 nodejs 版本:

```bash
nvm list
```

![image-20240119022109568](http://cdn.ayusummer233.top/DailyNotes/202401190221590.png)

---

## 换源

- [winrey/EasyConnectedInChina: 汇总apt，pip，nodejs等各种工具国内镜像源和设置镜像源的方法 (github.com)](https://github.com/winrey/EasyConnectedInChina#npm)

---

### 源地址

- 华为源: `https://repo.huaweicloud.com/repository/npm/`

  没有 Azure 相关服务

- 官方源: `https://registry.npmjs.org/`

- 淘宝源: `http://registry.npmmirror.com`

- cnpmjs: `http://r.cnpmjs.org/`

---

### 临时替换

- 执行 npm 命令时指定 registry 参数即可

  ```bash
  npm --registry http://registry.npmmirror.com install express
  ```

----

### 持久使用

```bash
npm config set registry http://registry.npmmirror.com
```

- 查看更改是否生效

  ```bash
  npm config get registry
  ```


---

## 包管理工具

> [pnpm/pnpm: Fast, disk space efficient package manager -- 快速的，节省磁盘空间的包管理工具 (github.com)](https://github.com/pnpm/pnpm)
>
> [Fast, disk space efficient package manager | pnpm](https://pnpm.io/zh/)
>
> [都2022年了，pnpm快到碗里来！ - 掘金 (juejin.cn)](https://juejin.cn/post/7053340250210795557)

![image-20211116141412200](http://cdn.ayusummer233.top/img/202111161414336.png)

![image-20211116141430125](http://cdn.ayusummer233.top/img/202111161414317.png)

![img](http://cdn.ayusummer233.top/img/202111161413040.svg+xml)


---

### npm, cnpm, pnpm, yarn 常用操作

> [npm、yarn、cnpm、pnpm 使用操作都在这了 - 掘金 (juejin.cn)](https://juejin.cn/post/7009674584211324964)

cnpm、pnpm 用法类似npm，yarn不一样地方列出来单独说明

|                |              npm               |        cnpm         |        pnpm         |        yarn         | Tips                                                                                                                                                                                                                                                        |
| :------------: | :----------------------------: | :-----------------: | :-----------------: | :-----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    全局安装    | // 检查是否安装成功 <br>npm -v | npm install -g cnpm | npm install -g pnpm | npm install -g yarn |                                                                                                                                                                                                                                                             |
| 初始化一个项目 |            npm init            |                     |                     |      yarn init      | 通过 -i 可以快速生成 <br>package.json 默认配置                                                                                                                                                                                                              |
|  安装项目依赖  |     npm install [package]      |                     |                     | yarn add [package]  | // 简写 <br>npm i [package] <br>// 安装指定版本 <br>npm i[package]@[version] <br>npm i [package]@[tag]  <br>yarn add [package]@[version]     <br>yarn add [package]@[tag]    <br>// 全局安装依赖    <br>npm i -g [package]    <br>yarn global add [package] |

- 安装报错处理
  - 删除 node_modules` 目录然后重新安装

- `--no-save`: 查看 `package.json`，文件内容不发生改变，在运行项目时能正常运行，当 `npm i` 时候，不会安装该依赖，提示安装该依赖。

- `--save`: 查看 `package.json` 会有一个 `dependencies` 对象，里面就是项目运行需要的依赖。 `dependencies` 代表项目运行所依赖的模块, 简写 `-S`

- `--save-dev`: 查看 `package.json` 会有一个 `devDependencies` 对象，里面就是项目开发时候需要的依赖。 `devDependencies` 代表项目开发所需要的模块, 简写 `-D`; 

- 查看当前 less 的版本号

  ```bash
  npm list less
  ```

- 查看依赖库最新版本及历史版本

  ```bash
  npm view <packagename> versions --json 
  ```

---

### yarn

#### ubuntu 安装 yarn

> [如何在 Ubuntu 20.04 上安装 Yarn - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/143982255)

导入软件源的 GPG key 并且添加 Yarn APT 软件源到你的系统

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

> ![image-20220824153452665](http://cdn.ayusummer233.top/img/202208241534754.png)

```bash
sudo apt update
sudo apt install yarn
```

> 如果出现 timeout 就多试几次

---

### pnpm

#### 换源

```bash
# 换淘宝源
pnpm config set registry https://registry.npmmirror.com
# 查看当前源
pnpm config get registry
```

默认源:

```
https://registry.npmjs.org/
```

---

#### 代理

> [.npmrc | pnpm](https://pnpm.io/zh/npmrc#proxy)

在项目根目录下创建 `.npmrc` 文件， 写入代理配置， 比如：

```properties
proxy=http://127.0.0.1:7890
https-proxy=http://127.0.0.1:7890
```

然后正常装包即可

---

#### 报错收集

#####  ERROR  Unable to find the global bin directory

![image-20220924162350442](http://cdn.ayusummer233.top/img/202209241623498.png)

运行完 pnpm setup 之后仍出现此报错, 在于环境变量未加载, 可运行如下命令加载 pnpm 环境变量

```bash
source ~/.zshrc
```

> ![image-20220924162518886](http://cdn.ayusummer233.top/img/202209241625947.png)

---

#####  EBUSY  EBUSY: resource busy or locked, symlink

> [node.js - Error: EBUSY: resource busy or locked, rmdir - Stack Overflow](https://stackoverflow.com/questions/55212864/error-ebusy-resource-busy-or-locked-rmdir)
>
> ---

![image-20221118231631624](http://cdn.ayusummer233.top/img/202211182316689.png)

```bash
npm cache verify
```


---

## 报错收集

### 安装git仓库相关包时连不上github

![image-20240119023656548](http://cdn.ayusummer233.top/DailyNotes/202401190236578.png)

```powershell
# 指定 Git 在获取远程仓库时使用 HTTPS 协议而不是 Git 协议（git://）
git config --global url."https://".insteadOf git://
# 结束后记得取消掉配置
git config --global --unset url."https://".insteadOf
# 验证一下
git config --global --get url."https://".insteadOf
```

![image-20240119030200661](http://cdn.ayusummer233.top/DailyNotes/202401190302731.png)

![image-20240119030209175](http://cdn.ayusummer233.top/DailyNotes/202401190302261.png)

![image-20240119030218994](http://cdn.ayusummer233.top/DailyNotes/202401190302089.png)

![image-20240119030151299](http://cdn.ayusummer233.top/DailyNotes/202401190301352.png)



