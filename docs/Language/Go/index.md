# Go

- [Go](#go)
	- [参考书籍](#参考书籍)
	- [开发环境配置](#开发环境配置)
		- [安装](#安装)
		- [代理](#代理)
		- [VSCode 配置](#vscode-配置)
			- [安装 Go 扩展](#安装-go-扩展)
			- [更新 Go 工具](#更新-go-工具)
	- [入门](#入门)
	- [问题整理](#问题整理)
		- [go get 已弃用](#go-get-已弃用)


---

## 参考书籍

- 系统学习Go语言的基础知识

  [Go 语言圣经](https://gopl-zh.github.io/ch1/ch1-01.html)

- CGO、Go汇编语言等高级用法

  [Go语言高级编程 - Go语言高级编程 (chai2010.cn)](https://chai2010.cn/advanced-go-programming-book/)

- 深入学习Go语言语法树结构

  [Go语言定制指南 - Go语言定制指南 (chai2010.cn)](https://chai2010.cn/go-ast-book/)

- 了解Go2的最新动向

  [Introduction · Go2编程指南 (golang-china.github.io)](https://golang-china.github.io/go2-book/)

- 从头实现一个玩具Go语言

  [µGo语言实现 - µGo语言实现 (wa-lang.org)](https://wa-lang.org/ugo-compiler-book/)

---

- MicrosoftLearn 上的 Go 学习路线: [开始使用 Go - Training | Microsoft Learn](https://learn.microsoft.com/zh-cn/training/paths/go-first-steps/)

---

## 开发环境配置

### 安装

> [Download and install - The Go Programming Language](https://go.dev/doc/install)
>
> ---

可在 [Downloads - The Go Programming Language (google.cn)](https://golang.google.cn/dl/)  获取不同系统的 Go 安装包

:::tabs

@tab:active ubuntu/debian

- 拉取官网最新的 stable release
  ```bash
  wget https://golang.google.cn/dl/go1.19.3.linux-amd64.tar.gz
  ```
- 解压到 `/usr/local/go`
  ```bash
  sudo tar -C /usr/local -xzf go1.19.3.linux-amd64.tar.gz
  ```
  > 如果之前安装了其他版本的 go 那么可以备份后先移除该版本目录再运行上面的命令
  > ```bash
  > # 可以先看看有没有
  > ls /usr/local | grep go
  > 
  > # 如果有的话可以删除
  > sudo rm -rf /usr/local/go2
  > ```
- 编辑 `~/.bashrc`, 在文件尾添加
  ```bash
  export PATH=$PATH:/usr/local/go/bin
  ```
  > 如果之前还添加了其他 PATH 变量的话使用 `:` 间隔开即可
  >
  > 添加完环境变量后若想立即生效则需要重启计算机或者执行下面的 shell 命令
  >
  > ```bash
  > source ~/.profile
  > ```
- 验证
  ```bash
  go version
  ```
  
  > ![image-20221110011243044](http://cdn.ayusummer233.top/img/202211100112060.png)

@tab Windows

在官网下载 Windows 版本的 Go 安装包并运行该 msi 文件进行安装

安装完成后可在 cmd 或 powershell 中验证下版本号

![image-20221110222548586](http://cdn.ayusummer233.top/img/202211102225614.png)

:::

---

### 代理

> [goproxy.cn/README.zh-CN.md at master · goproxy/goproxy.cn (github.com)](https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md)
>
> 由于中国政府的网络监管系统，Go 生态系统中有着许多中国 Gopher 们无法获取的模块，比如最著名的 `golang.org/x/...`。并且在中国大陆从 GitHub 获取模块的速度也有点慢。因此，我们创建了 Goproxy.cn，使在中国的 Gopher 们能更好地使用 Go 模块。事实上，由于 Goproxy.cn 已在全球范围内通过 CDN 加速，所以你可以在任何地方使用它。
>
> ---

:::tabs

@tab:active Windows

在终端中执行:
```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

@tab Linux/MacOS

```bash
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
```

:::

---

### VSCode 配置

> [配置 Visual Studio Code for Go 开发 | Microsoft Learn](https://learn.microsoft.com/zh-cn/azure/developer/go/configure-visual-studio-code)
>
> ---

#### 安装 Go 扩展

![image-20221111001128293](http://cdn.ayusummer233.top/img/202211110011319.png)

---

#### 更新 Go 工具

如果没有合适的科技手段的话那就先[加个 Go 模块代理](#代理)

> 设置完后记得退出并重开 VSCode 加载环境变量

---

`Ctrl+Shift+P` 打开命令面板, 然后输入

```
Go: Install/Update tools
```

> ![image-20221111001341882](http://cdn.ayusummer233.top/img/202211110019859.png)

单击进入该命令的提示项, 全选并确定, 之后会运行安装

> ![image-20221111001322348](http://cdn.ayusummer233.top/img/202211110013368.png)
>
> ![image-20221111002439729](http://cdn.ayusummer233.top/img/202211110024764.png)
>
> > 悲ಥ_ಥ, 全装 C 盘去了, 不过还好 C 盘分配的空间比较多且性能相对好些, 就放这里了

- `gotests`: 可以根据源文件的函数和方法签名自动生成表格驱动测试
- `gomodifytags`: 可以修改结构体的标签
- `impl`: 可以生成接口的实现
- `goplay`: 可以在浏览器中运行Go代码片段
- `dlv`: 是一个Go语言的调试器
- `staticcheck`: 是一个静态分析工具，可以检查代码中的错误和不良风格
- `gopls`: 是官方开发的Go语言服务器，可以提供智能提示、代码导航、代码编辑和诊断等功能。

---

创建一个新文件夹并使用 VSCode 打开此文件夹, 在终端运行如下命令初始化 Go 应用

```powershell
# go mod init [应用名], 例如:
go mod init GoLearning
```

> ![image-20221111003208612](http://cdn.ayusummer233.top/img/202211110032630.png)
>
> ![image-20221111003240428](http://cdn.ayusummer233.top/img/202211110032449.png)

---

在当前文件夹根目录创建一个 `main.go`

```go
package main

import "fmt"

func main() {
    name := "Go Developers"
    fmt.Println("Azure for", name)
}
```

可以在 line 7 打个断点, 然后 F5 运行下程序, 鼠标悬停在 name 上即可看到此时变量 name 的值

> ![image-20221111003534890](http://cdn.ayusummer233.top/img/202211110035920.png)

继续运行可以看到如是输出

> ![image-20221111003609799](http://cdn.ayusummer233.top/img/202211110036826.png)

---

## 入门

> [入门 - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch1/ch1.html)
>
> ---

Go语言有时候被描述为“类C语言”，或者是“21世纪的C语言”。Go从C语言继承了相似的表达式语法、控制流结构、基础数据类型、调用参数传值、指针等很多思想，还有C语言一直所看中的编译后机器码的运行效率以及和现有操作系统的无缝适配。

---


## 问题整理

### go get 已弃用

> [Golang弃用go get工具 - 简书 (jianshu.com)](https://www.jianshu.com/p/b93567e0af09)
>
> [Deprecation of 'go get' for installing executables - The Go Programming Language](https://go.dev/doc/go-get-install-deprecation)

---

```bash
'go get' is no longer supported outside a module.
        To build and install a command, use 'go install' with a version,
        like 'go install example.com/cmd@latest'
        For more information, see https://golang.org/doc/go-get-install-deprecation
        or run 'go help get' or 'go help install'.
```

go get 在 `g.mod` 中同时用于更新依赖和安装命令。这种组合很混乱，使用起来也很不方便，因为开发人员不想同时进行更新和安装。

`1.17.1` 及其后版本不再支持 `go get` 命令

如果要在当前模块的上下文中安装可执行文件时，使用 `go install` 不带版本后缀

```bash
go install example.com/cmd
```

这个命令适用于安装当前目录或父目录中go.mod定义的版本要求和其他命令。

---

要安装可执行文件同时忽略当前模块go.mod，使用go install带上版本后缀例如

```bash
go install example.com/cmd@latest
```


