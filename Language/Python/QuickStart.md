# 目录
- [目录](#目录)
- [快速开始](#快速开始)
  - [Windows](#windows)
    - [Anaconda](#anaconda)
      - [Anaconda 换源](#anaconda-换源)
      - [新建一个 conda 环境](#新建一个-conda-环境)
      - [环境变量](#环境变量)
  - [Ubuntu](#ubuntu)
    - [Pipenv](#pipenv)
  - [VSCode](#vscode)
      - [VSCode 扩展安装](#vscode-扩展安装)

# 快速开始

Anaconda + VSCode + jupyter插件 + Python相关插件
- `Anaconda`: 用于管理 python 环境
- `VSCode`: 用于编写与运行 python 程序
- `VSCode 中的 Jupyter 插件`: 用于交互式编写 python 程序
- `VSCode 中的 Python 相关插件`: 用于支持一些 Python 相关的代码提示, 语法高亮之类

----

## Windows

---

### Anaconda

> 需要注意的是, 使用 Anaconda Navigator 或者 conda 环境操作时需要关掉梯子, 否则可能会报 host 错误

[安装包](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EeoLeabp6RtDnVkgJ46y_fIB9gqFsNbpyO8BqSZzQv_r3w?e=NwyQXf)

安装完成后打开 `Anaconda Navigator`:

![image-20220523093633147](http://cdn.ayusummer233.top/img/202205230936469.png)

#### Anaconda 换源

> [anaconda修改国内源 - 余者皆可 - 博客园 (cnblogs.com)](https://www.cnblogs.com/yuvejxke/p/13169172.html)

- 打开 `anaconda prompt`   
  ![20220113131937](http://cdn.ayusummer233.top/img/20220113131937.png)  
  ![20220113132007](http://cdn.ayusummer233.top/img/20220113132007.png)

- 执行以下命令来配置清华源：
  ```shell
  conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
  conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
  ```

  配置清华源是为了后续使用 `pip` 命令安装 python 库时快些, 不配置换源而直接使用默认源的话在墙内容易超时报错

---

#### 新建一个 conda 环境

打开 `Anaconda Navigator -> Environments` 在环境列表底部按钮中找到 `Create` 并点击

![image-20220517153334579](http://cdn.ayusummer233.top/img/202205171533981.png)

为新环境命一个名(英文命名, 尽量简短些, 之后激活要用)

> 这里选择了 Python 3.8.13, 不上 3.9 或者 3.10 主要是因为有一些三方库更新没跟上, 不一定支持 python3.9 及以上

![image-20220517153442365](http://cdn.ayusummer233.top/img/202205171534732.png)

在命令行中使用 conda 环境可以使用如下指令激活:

```bash
conda activate 环境名
```

![image-20220517153733464](http://cdn.ayusummer233.top/img/202205171537691.png)

---
#### 环境变量

在控制台输入 `conda -V` 没有反应的话应该是环境变量没加(虽然我记得装的时候会提示勾选添加环境变量)

如果没添加环境变量的话可以编辑系统环境变量, 在 `系统变量` 的 `Path` 项中添加两条环境变量

```bash
C:\Users\zhangyufan\Anaconda3
C:\Users\zhangyufan\Anaconda3\Scripts
```

> 第一条对应自己的 Anaconda 安装位置根目录  
> 第二条对应 Anaconda 根目录下的 Scripts 目录

---

## Ubuntu

> [Ubuntu安装Python3 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/149796622)

更新源:

```bash
apt-get update
```

安装 python3

```bash
apt install python3-pip
```

验证

```bash
pip -V
python3 -V
```
---

### Pipenv

> 如果上一步使用 `Python Environment Manager` 安装了 conda 环境的话建议使用 conda 环境, 就没必要用  pipenv 了

> [如何开始使用 Pipenv？ | w3c笔记 (w3cschool.cn)](https://www.w3cschool.cn/article/94449206.html)
>
> [WSL Ubuntu 18.04上使用pipenv的4个关键点 | 老梅笔记 (laomeinote.com)](https://laomeinote.com/4-points-need-to-be-noticed-about-pipenv-usage-in-wsl-ubuntu-18.04)
>
> [Pipenv: Python Dev Workflow for Humans — pipenv 2021.11.9 documentation (pypa.io)](https://pipenv.pypa.io/en/latest/)
>
> [12. Virtual Environments and Packages — Python 3.10.0 documentation](https://docs.python.org/3/tutorial/venv.html)

[Pipenv](https://pipenv.pypa.io/en/latest/) 是 Python 的 Python 打包工具，是对使用 [Pip](https://pip.pypa.io/en/stable/)、[Venv](https://docs.python.org/3/library/venv.html) 和 requirements.txt的升级。Pipenv 是将包管理与虚拟环境相结合的好方法。

虚拟环境是一个自包含的目录树，其中包含针对特定 Python 版本的 Python 安装，以及许多其他包。


安装 `pipenv` 模块:

```sh
apt install pipenv
pip insatll pipenv
```

使用 `cd` 命令切换到需要安装虚拟环境的目录安装虚拟环境(如果当前目录下没有 `Pipfile` 则会先生成 `Pipfile`, 如果有的话便会继续安装虚拟环境):

```sh
pipenv install
```

> `Pipfile` 中将 `[[source]]` 区域下的 `url` 改为国内的源
>
> ```sh
> # 华为镜像
> https://repo.huaweicloud.com/repository/pypi/simple
> # 阿里镜像
> https://mirrors.aliyun.com/pypi/simple
> # 官方源
> https://pypi.python.org/simple
> ```
>
> ![image-20211114221709756](http://cdn.ayusummer233.top/img/202208031439022.png)
>
> 如果默认生成的 `Pipfile` 中的包特别多, 那么这条命令会执行很长时间且没有 log, 这将会是一个很折磨的过程(

启动虚拟环境

```sh
pipenv shell
```

可以通过 `exit` 退出虚拟环境



---


## VSCode

[VSCode 安装包](https://ayusummer-my.sharepoint.com/:u:/g/personal/233_ayusummer_onmicrosoft_com/EazLjY72FsFBvNS9qfiXUNsBoncvju914TnopNKvIkyU_A?e=H46sLL)

用于编辑与运行 python 程序, 选择 VSCode 主要是其比较轻量, 启动比较快, 用起来比较顺手, 且插件市场庞大, 对于许多语言都有插件支持, 按需下载

比起安装 python 解释器自带的 IDLE 友好许多, 又不会像 Pycharm 一样庞大/启动慢/占资源, 作为平时写点小脚本, 小玩意儿来说完全够用

#### VSCode 扩展安装

- 汉化插件

  ![image-20220113132736972](http://cdn.ayusummer233.top/img/202201131327282.png)

- Python 相关基础插件

  ![image-20220113132900552](http://cdn.ayusummer233.top/img/202201131329644.png)

- jupyter 插件

  ![image-20220113132930881](http://cdn.ayusummer233.top/img/202201131329984.png)

  使用 Jupyter 的好处在于可以边写笔记边写代码, 如下图所示, 在笔记中可以插入代码块并运行及显示

  ![image-20220113133105876](http://cdn.ayusummer233.top/img/202201131331074.png)

- Markdown 插件

  ![image-20220113133332281](http://cdn.ayusummer233.top/img/202201131333467.png)

- 命令行插件 Terminal

  ![image-20220113134443536](http://cdn.ayusummer233.top/img/202201131344681.png)

  用于在 VSCode 中打开 powershell 执行命令

  ![image-20220113134623777](http://cdn.ayusummer233.top/img/202201131346049.png)

