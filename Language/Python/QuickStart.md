# 目录
- [目录](#目录)
- [快速开始](#快速开始)
  - [开发环境方面](#开发环境方面)
    - [Anaconda](#anaconda)
      - [Anaconda 换源](#anaconda-换源)
      - [新建一个 conda 环境](#新建一个-conda-环境)
      - [环境变量](#环境变量)
    - [VSCode](#vscode)
      - [VSCode 扩展安装](#vscode-扩展安装)
  - [Matplotlib](#matplotlib)
  - [Pandas](#pandas)

# 快速开始

## 开发环境方面

Anaconda + VSCode + jupyter插件 + Python相关插件
- `Anaconda`: 用于管理 python 环境
- `VSCode`: 用于编写与运行 python 程序
- `VSCode 中的 Jupyter 插件`: 用于交互式编写 python 程序
- `VSCode 中的 Python 相关插件`: 用于支持一些 Python 相关的代码提示, 语法高亮之类

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


### VSCode

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

----

## Matplotlib

[Matplotlib 中文文档](https://www.matplotlib.org.cn/)

Python 的一个绘图库, 可以便捷地绘制柱状图, 饼图, 折线图, 散点图, 雷达图等数据可视化图表

[学习的时候记的一些 markdown 笔记](https://gitee.com/ayusummer233/DailyNotes/blob/main/ProgrammingLanguage/Python/Note-python.md#matplotlib)

[后面使用 jupyter 重写了遍笔记](https://gitee.com/ayusummer233/DailyNotes/blob/main/ProgrammingLanguage/Python/libs/Matplotlib.ipynb), 这一版相当于上一版而言好处在于可以边阅读边执行示例代码, 网页上不方便执行代码块可以如下图所示下载 zip 文件解压后使用VSCode 打开阅读及执行

![image-20220113133816489](http://cdn.ayusummer233.top/img/202201131338785.png)

---

## Pandas

[Pandas 中文文档(pypandas.cn)](https://www.pypandas.cn/)

[当时学习的时候记录的一些 markdown 笔记](https://gitee.com/ayusummer233/DailyNotes/blob/main/ProgrammingLanguage/Python/Note-python.md#pandas)

---

