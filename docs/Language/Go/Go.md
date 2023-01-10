# Go

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

- `gotests`
- `gomodifytags`
- `impl`
- `goplay`
- `dlv`
- `staticcheck`
- `gopls`

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

### Hello World

> [Hello, World - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch1/ch1-01.html)
>
> ---

需要先初始化一个 Go 应用

```powershell
# go mod init [应用名], 例如:
go mod init GoLearning
```

比如新建一个 `HelloWorld.go`

```go
package main

import "fmt"

func main(){
    fmt.Println("Hello World")
}
```

Go 是一门编译型语言(静态编译), Go 语言的工具链将源代码及其依赖转换成计算机的机器指令

Go 语言提供的工具都可以使用 `go` 命令来调用, 其包含一系列子命令, 比如

- `run` 命令可以编译一个或多个以 `.go` 结尾的源文件, 链接库文件, 并运行最终生成的可执行文件
- `build` 命令可以将 `.go` 源文件编译生成对应的可执行的二进制文件, 由于是静态编译, 从而不用担心在系统库更新的时候会产生冲突

终端执行 `go run HelloWorld.go` 或者利用 VSCode+Go 扩展 F5 直接运行此 go 程序文件

> Go 语言原生支持 Unicode, 可以处理全世界任何语言的文本

> `run` 命令:
>
> ![image-20221111005128048](http://cdn.ayusummer233.top/img/202211110051074.png)
>
> ![image-20221111005237588](http://cdn.ayusummer233.top/img/202211110052616.png)
>
> ---
>
> `build` 命令
>
> ![image-20221113182359950](http://cdn.ayusummer233.top/img/202211131823978.png)
>
> ---

#### 包管理

Go 语言的代码通过 `包(package)` 组织, `package` 类似于其他语言中的 `库(libraries)` 或者 `模块(modules)`

一个 `package` 由位于单个目录下的一个或者多个 `.go` 源代码文件组成，目录定义 `package` 的作用。

每个源文件都以一条 `package` 声明语句开始，这个例子里就是 `package main`，表示该文件属于哪个包，紧跟着一系列导入（import）的包，之后是存储在这个文件里的程序语句。

Go 的标准库提供了 100 多个 `package`, 以支持常见功能，如输入、输出、排序以及文本处理。比如:

- `fmt` 包含格式化输出、接收输入的函数;

  `Println` 是其中一个基础函数，可以打印以空格间隔的一个或多个值，并在最后添加一个换行符，从而输出一整行。

----

###### package main

`main` 包比较特殊。它定义了一个独立可执行的程序，而不是一个库。在 `main` 里的 `main` *函数*也很特殊，它是整个程序执行时的入口（译注：C 系语言差不多都这样）。`main` 函数所做的事情就是程序做的。当然了，`main` 函数一般调用其它包里的函数完成很多工作（如：`fmt.Println`）。

---

必须告诉编译器源文件需要哪些包，这就是跟随在 `package` 声明后面的 `import` 声明扮演的角色。`hello world` 例子只用到了一个包，大多数程序需要导入多个包。

必须恰当导入需要的包，缺少了必要的包或者导入了不需要的包，程序都无法编译通过。这项严格要求避免了程序开发过程中引入未使用的包（译注：Go 语言编译过程没有警告信息，争议特性之一）。

`import` 声明必须跟在文件的 `package` 声明之后。随后，则是组成程序的函数、变量、常量、类型的声明语句（分别由关键字 `func`、`var`、`const`、`type` 定义）。

> 学到这里发现最初写的示例下意识开了个目录存放了测试文件, 然后还用了 `package main` 声明, 感觉不妥:
>
> ![image-20221111005128048](http://cdn.ayusummer233.top/img/202211132207683.png)
>
> 因此还是只保留根目录下的 `main` 作为主程序入口, 将 `print hello world` 另外定义一个 `package` 和 `function` 存放并在 `main` 中导入使用
>
> > [Relative imports in Go - Stack Overflow](https://stackoverflow.com/questions/38517593/relative-imports-in-go)
> >
> > [go - func not exported by package. - SegmentFault 思否](https://segmentfault.com/q/1010000041390281)
> >
> > ---
>
> ![image-20221113220959407](http://cdn.ayusummer233.top/img/202211132209441.png)
>
> > - 新建了一个 `pkg` 目录用来统一存放自定义的 `package`, 毕竟后续可能在根目录下添加 `docs`, `.github` 之类的, 比如(随手在 Github Activity 中找了个群友 star 的) Go 项目, 目录很规整
> >
> >   ![image-20221113221402704](http://cdn.ayusummer233.top/img/202211132214754.png)
> >
> > - 在 `pkg` 目录下新建了一个 `hello` 目录用来存放输出语句测试文件
> >
> >   这里新建了两个文件, 都使用了同一个 `package` 名 `hello_test`
> >
> >   不过在 `main` 中导入包的时候仍用的 `"GoLearning/pkg/hello"`, 而且如果将其中一个 `package` 名称改为其他名称则会触发报错, 在 "hello" 中找到了多个 package
> >
> >   ![image-20221113221746673](http://cdn.ayusummer233.top/img/202211132217703.png)
> >
> >   ==因此合理推测一个文件目录下的 go 文件应当同属一个 package==
> >
> >   所以为了统一格式, 不如将该目录下的所有文件的 package 名都直接用目录的名称(除了根目录下的 package main)
> >
> >   ![image-20221113222244698](http://cdn.ayusummer233.top/img/202211132222731.png)
> >
> > - 在 `main.go` 中引入了 `GoLearning/pkg/hello` 并给了它一个别名 `hello` 
> >
> >   > [Relative imports in Go - Stack Overflow](https://stackoverflow.com/questions/38517593/relative-imports-in-go)
> >   >
> >   > ---
> >
> >   > 在 [Hello World](https://ayusummer.github.io/DailyNotes/Language/Go/Go.html#hello-world) 章节最开始做的第一步就是初始化了一个 Go 应用, 在这个过程里就定义了应用名
> >   >
> >   > ```bash
> >   > # go mod init [应用名], 例如:
> >   > go mod init GoLearning
> >   > ```
> >   >
> >   > ![image-20221113223108545](http://cdn.ayusummer233.top/img/202211132231568.png)
> >   >
> >   > 别名不一定和包名一样, 有辨识度即可
> >   >
> >   > ![image-20221113222526417](http://cdn.ayusummer233.top/img/202211132225437.png)
> >
> > - 此外需要注意的是, 函数名称首字母一定要大写, 否则找不到
> >
> >   > [go - func not exported by package. - SegmentFault 思否](https://segmentfault.com/q/1010000041390281)
> >   >
> >   > ---
> >
> >   ![image-20221113222851217](http://cdn.ayusummer233.top/img/202211132228251.png)
>
> ---
>
> - 除此以外, 还需要注意的是, 当模块内只有一个 go 文件时, 该 go 文件不可以 `_test` 结尾, 否则会被认为是测试文件, 如果在其他模块中需要使用此模块则会引起导入失败
>
>   ![image-20221122213851749](http://cdn.ayusummer233.top/img/202211222138814.png)
>
>   ![image-20221122213950074](http://cdn.ayusummer233.top/img/202211222139098.png)
>
>   ![image-20221122213930332](http://cdn.ayusummer233.top/img/202211222139359.png)
>
>   > `_test` 在 Go 中似乎有特殊含义, 随手写模块时需要注意(这部分内容在 Go 语言圣经第 11 章会讲)
>   >
>   > > [go test - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch11/ch11-01.html)
>   > >
>   > > [测试函数 - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch11/ch11-02.html)
>   > >
>   > > ---
>   >
>   > ![image-20221122223908189](http://cdn.ayusummer233.top/img/202211222239244.png)

---

#### function

一个函数的声明由 `func` 关键字、函数名、参数列表、返回值列表以及包含在大括号里的函数体组成。

> 这个例子里的 `main` 函数参数列表和返回值都是空的
>
> 在学习第五章时会进一步考察 `function` 的用法

---

#### 分号的问题

Go 语言不需要在语句或者声明的末尾添加分号，除非一行上有多条语句。实际上，==编译器会主动把特定符号后的换行符转换为分号，因此换行符添加的位置会影响 Go 代码的正确解析==

> 比如行末是标识符、整数、浮点数、虚数、字符或字符串文字、关键字 `break`、`continue`、`fallthrough`或 `return` 中的一个、运算符和分隔符 `++`、`--`、`)`、`]` 或 `}` 中的一个）。
>
> 举个例子，函数的左括号 `{` 必须和 `func` 函数声明在同一行上，且位于末尾，不能独占一行
>
> ![image-20221113223753964](http://cdn.ayusummer233.top/img/202211132237989.png)
>
> 而在表达式 `x+y` 中，可在 `+` 后换行，不能在 `+` 前换行
>
> > 以+结尾的话不会被插入分号分隔符，但是以 x 结尾的话则会被分号分隔符，从而导致编译错误）。
> >
> > ![image-20221113224118032](http://cdn.ayusummer233.top/img/202211132241059.png)
> >
> > ![image-20221113224151044](http://cdn.ayusummer233.top/img/202211132241073.png)
> >
> > ![image-20221113224224293](http://cdn.ayusummer233.top/img/202211132242322.png)

----

#### 引号的问题

> [Golang 单引号、双引号和反引号 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1615783)
>
> ---

需要注意的是, Go 语言中的单引号, 双引号, 反引号的功能是各不相同的

- `单引号` 表示 byte 类型或 rune 类型，对应 uint8 和 int32 类型，默认是 rune 类型。

  - byte 用来强调数据是 raw data，而不是数字；
  - rune 用来表示 Unicode 的 code point。 

- `双引号` 才是字符串, 实际上是字符数组; 可以用索引访问某字节, 也可以用 `len()` 函数来获取字符串所占的字节长度

- `反引号` 表示字符串字面量, 但不支持任何转义序列; 

  可以理解成 Python 中的 `r"string"` , 将内部字符串原样输出, 不转义 `\n, \t, \r` 等具有特殊含义的字符串

---

#### 代码格式

Go 语言在代码格式上采取了很强硬的态度。`gofmt`工具把代码格式化为标准格式，并且 `go` 工具中的 `fmt` 子命令会对指定包, 否则默认为当前目录中所有 `.go`  源文件应用 `gofmt` 命令。

> 译者注：
>
> - 这个格式化工具没有任何可以调整代码格式的参数，Go 语言就是这么任性
> - 这也导致了 Go 语言的 TIOBE 排名较低，因为缺少撕逼的话题）。更重要的是，这样可以做多种自动源码转换，如果放任 Go 语言代码格式，这些转换就不大可能了。

很多文本编辑器都可以配置为保存文件时自动执行 `gofmt`，这样你的源代码总会被恰当地格式化。还有个相关的工具：`goimports`，可以根据代码需要，自动地添加或删除 `import` 声明。这个工具并没有包含在标准的分发包中，可以用下面的命令安装：

::: tabs

@tab bellow go1.17.1

```bash
go get golang.org/x/tools/cmd/goimports
```

@tab:active above go1.17.1

VSCode 安装 Go 扩展时应该是已经装了类似的工具了, 这点在个人编辑 go 文件时体会到了

> TODO: VSCode 安装 Go 扩展时顺带安装的几个工具的具体作用 -> [更新 Go 工具](https://ayusummer.github.io/DailyNotes/Language/Go/Go.html#hello-world#%66F4%65B0%20%47%6F%20%5DE5%5177)

:::

> 对于大多数用户来说，下载、编译包、运行测试用例、察看 Go 语言的文档等等常用功能都可以用 go 的工具完成。学习 [10.7 节](https://gopl-zh.github.io/ch10/ch10-07.html) 时会详细介绍这些知识。

---

### 命令行参数

`os` 包以跨平台的方式，提供了一些与操作系统交互的函数和变量。程序的命令行参数可从 `os` 包的 `Args` 变量获取；

`os` 包外部使用 `os.Args` 访问该变量。

`os.Args` 变量是一个字符串（string）的 *切片*（slice）(类似于 Python 中的切片, 是一个简化版的动态数组)

---

例如, 对于切片 `a = [1, 2, 3, 4, 5]`

- 可以用 `a[i]` 访问当个元素, 例如 `a[1] = 2`

- 可以用 `a[m:n]` 访问 a 的子序列, 如 `a[0:2] = [1, 2, 3]`

  > 左闭右开获取数组元素

> ![image-20221122215213354](http://cdn.ayusummer233.top/img/202211222152384.png)

---

```go
package cmd_param

import (
	"fmt"
	"os"
)

// 类似于 echo, 默认分隔符为一个空格
func Print_cmd_args() {
	// 定义一个字符串切片, 用于存储命令行参数
	var getParams string
	// 分隔符为一个空格
	var sep string = " "
	// 第 0 个参数是程序名, 第 1 个参数才是实际传入的首个参数
	for i := 0; i < len(os.Args); i++ {
		getParams += os.Args[i] + sep
	}
	fmt.Println(getParams)
}

```

> - 导入多个模块时, `gofmt` 会按照字典序对模块名排序
>
> - 注释方面与 C/C++ 一致, 单行注释用 `//`, 多行注释用 `/**/`
>
>   `//` 到行末之前的内容都是注释, 会被编译器忽略
>
>   一般来说会在每个包声明前添加注释, 从整体角度对程序做个描述
>
> - var 声明定义了两个 string 类型的变量 `getParams` 和 `sep`
>
>   变量会在声明时直接初始化。如果变量没有显式初始化，则被隐式地赋予其类型的 *零值*（zero value）
>
>   > 数值类型是 `0`，字符串类型是空字符串 `""`
>
>   如果要在一行里定义两个 string 变量, 可以如下书写:
>
>   ```go
>   var getParams, sep string
>   ```
>
> - `+` 用于连接字符串
>
> - `:=` 是短变量声明(shrot variable declaration)的一部分, 可用于定义一个或多个变量并根据它们的初始值为这些变量赋予适当类型的语句
>
> - `a += 1` 与 `a = a + 1` 以及 `a++` 等价, ==都是语句==
>
>   ==相对的==, 在 C 系语言中, `i++, i--` ==是表达式==, 存在 `b = a++` 的写法, 但是 Go 中不允许这样写
>
>   此外 Go 中也没有 `++i` 的写法, 在 Go 中, `++` 和 `--` 都只能放在变量名后面
>
> - Go 语言==只有 for 循环==一种循环语句, `for` 循环有很多种形式, 其中一种就如上述代码一样, 形如:
>
>   ```go
>   for initialization; condition; post {
>       // zero or more statements
>   }
>   ```
>
>   - 三个部分不需要用括号包围, 但是要有大括号, 且 `{` 必须与 for 在同一行(像前面说的一样, 因为 Go 编译时会自动给每行加分号, 所以大括号单起一行过不了编译)
>
>   - *`initialization`* 语句是可选的，在循环开始前执行。
>
>     *`initalization`* 如果存在，必须是一条 *简单语句*（simple statement），即，短变量声明、自增语句、赋值语句或函数调用。
>
>   - `condition` 是一个布尔表达式（boolean expression），其值在每次循环迭代开始时计算。如果为 `true` 则执行循环体语句
>
>   - `post` 语句在循环体执行结束后执行，之后再次对 `condition` 求值。`condition` 值为 `false` 时，循环结束。
>
>   ---
>
>   - `for` 循环的三个部分都可以省略(分号需要保留, 用于确定位置), 当 `initialization` 和 `post` 都省略时才可以省略分号
>
>   - 当三个部分都省略时则构造了个无限循环(类比 Python 中的 `While 1:`)
>
>     ```go
>     // a traditional infinite loop
>     for {
>         // ...
>     }
>     ```
>
>     > 可以用 `break` 或者 `return` 语句终止循环

```go
package main

import (
	"GoLearning/pkg/cmd_param"
)

func main() {
	cmd_param.Print_cmd_args()
}

```

![image-20221122225915715](http://cdn.ayusummer233.top/img/202211222259750.png)

---

#### 优化上述 echo 程序

在上述代码中, 命令行参数的获取是这样进行的:

```go
for i := 0; i < len(os.Args); i++ {
    getParams += os.Args[i] + sep
}
```

那么首先需要遍历 `os.Args` 获取其长度, 在进入每次循环时需要先根据索引 `i` 遍历 `os.Args` 获取到 `os.Args[i]`, 然后再拼接到 `getParams` 的末尾再拼个空格

可以使用切片来对此步骤进行优化

```go
// 使用切片构造 echo 语句
func Echo_Slice() {
	var getParams, sep string
	sep = " "
	for _, arg := range os.Args[1:] {
		getParams += arg + sep
	}
	fmt.Println(getParams)
}
```

> - Go 中不允许有未使用的局部变量, 但是可以使用空标识符 `_` 来忽略某个变量
>
>   `_` 可用于在任何语法上需要变量名但是程序逻辑中之处
>
> - 对于已声明的变量, 使用 ` := ` 会报错 ` "no new variables on left side of :="`
>
>   此时可以使用 = 赋值

> ![image-20221122234757090](http://cdn.ayusummer233.top/img/202211222347133.png)

---

每次循环迭代字符串 `getParams` 的内容都会更新。`+=` 连接原字符串、空格和下个参数，产生新字符串，并把它赋值给 `getParams`。==getParams 原来的内容已经不再使用，将在适当时机对它进行垃圾回收==。

如果连接涉及的数据量很大，这种方式代价高昂。一种简单且高效的解决方案是使用 `strings` 包的 `Join` 函数：

```go
// 使用 strings.Join() 方法构造 echo 语句
func Echo_Join() {
	fmt.Println(strings.Join(os.Args[1:], " "))
}
```

![image-20221122235236614](http://cdn.ayusummer233.top/img/202211222352664.png)

---

如果不关心输出格式的话, 直接打印 `os.Args[1:]` 也是可以的

```go
// 不考虑输出格式, 直接打印 os.Args 切片
func Echo_direct_print_slice() {
	fmt.Println(os.Args[1:])
}
```

```go
package main

import (
	"GoLearning/pkg/cmd_param"
	"fmt"
)

func main() {
	fmt.Println("echo 基本写法:")
	cmd_param.Print_cmd_args()
	fmt.Println("echo 切片写法:")
	cmd_param.Echo_Slice()
	fmt.Println("echo strings.Join() 写法:")
	cmd_param.Echo_Join()
	fmt.Println("echo 直接打印切片:")
	cmd_param.Echo_direct_print_slice()
}

```

![image-20221122235412091](http://cdn.ayusummer233.top/img/202211222354162.png)

---

> TODO:: 加入计时分析, 以直观地对比各优化版本的实际效果
>
> > （[1.6 节](https://gopl-zh.github.io/ch1/ch1-06.html)讲解了部分 `time` 包，[11.4 节](https://gopl-zh.github.io/ch11/ch11-04.html)展示了如何写标准测试程序，以得到系统性的性能评测。）

---

### 查找重复的行

> [查找重复的行 - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch1/ch1-03.html)

对文件做拷贝、打印、搜索、排序、统计或类似事情的程序都有一个差不多的程序结构：一个处理输入的循环，在每个元素上执行计算处理，在处理的同时或最后产生输出。

本节展示一个名为`dup` 的程序的三个版本；灵感来自于 Unix 的 `uniq` 命令，其寻找相邻的重复行。

---

`dup` 的第一个版本打印标准输入中多次出现的行，以重复次数开头。该程序将引入 `if` 语句，`map` 数据类型以及 `bufio` 包。

```go
package ch1

import (
	"bufio"
	"fmt"
	"os"
)

// 打印标准输入中多次出现的行, 以重复次数开头
func Dup1() {
	// 创建一个空的 map, 键为 string, 值为 int
	counts := make(map[string]int)
	// 创建一个从标准输入读取数据的 Scanner
	input := bufio.NewScanner(os.Stdin)
	// 逐行读取标准输入并更新 map counts
	for input.Scan() {
		// 遇到 0 时, input.Scan() 退出循环
		if input.Text() == "0" {
			break
		}
		counts[input.Text()]++

	}
	// 注意: 忽略input.Err()中可能的错误
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}

```

![image-20230108234453299](http://cdn.ayusummer233.top/img/202301082345766.png)

- map 从功能上来说和 Python 的 dict 比较像, 都可以存储键值对

  **map** 存储了键/值（key/value）的集合，对集合元素，提供常数时间的存、取或测试操作。

  - 键可以是任意类型，只要其值能用 `==` 运算符比较，最常见的例子是字符串；
  - 值则可以是任意类型。
  - 这个例子中的键是字符串，值是整数。

  内置函数 `make` 创建空 `map`

  > 关于 Map 的其他用法学到 4.3 会有一章讲解: [Map - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch4/ch4-03.html)

- `bufio` 包使处理输入和输出方便又高效。`Scanner` 类型是该包最有用的特性之一，它读取输入并将其拆成行或单词；通常是处理行形式的输入最简单的方法。

  程序使用短变量声明创建 `bufio.Scanner` 类型的变量 `input`。

  ```go
  input := bufio.NewScanner(os.Stdin)
  ```

  该变量从程序的标准输入中读取内容。每次调用 `input.Scan()`，即读入下一行，并移除行末的换行符；读取的内容可以调用 `input.Text()` 得到。`Scan` 函数在读到一行时返回 `true`，不再有输入时返回 `false`。

- if 后面跟的条件语句不用括号, 但是主体部分必须加花括号, 就算只有一行也要加

  > ![image-20230109000500558](http://cdn.ayusummer233.top/img/202301090005852.png)

- `map` 中不含某个键时不用担心，首次读到新行时，等号右边的表达式 `counts[line]` 的值将被计算为其类型的零值，对于 `int` 即 `0`。

- 关于 Printf 格式化输出:

  ```
  %d          十进制整数
  %x, %o, %b  十六进制，八进制，二进制整数。
  %f, %g, %e  浮点数： 3.141593 3.141592653589793 3.141593e+00
  %t          布尔：true或false
  %c          字符（rune） (Unicode码点)
  %s          字符串
  %q          带双引号的字符串"abc"或带单引号的字符'c'
  %v          变量的自然形式（natural format）
  %T          变量的类型
  %%          字面上的百分号标志（无操作数）
  ```

---

很多程序要么从标准输入中读取数据，如上面的例子所示，要么从一系列具名文件中读取数据。`dup` 程序的下个版本读取标准输入或是使用 `os.Open` 打开各个具名文件，并操作它们。

```go
// 统计标准输入或文件中重复的行
func countLines(f *os.File, counts map[string]int) {
	input := bufio.NewScanner(f)
	for input.Scan() {
		// 遇到 -1 时, input.Scan() 退出循环
		if input.Text() == "-1" {
			break
		}
		counts[input.Text()]++
	}
	// 注意: 忽略input.Err()中可能的错误
}

// 读取标准输入或是使用 os.Open 打开各个具名文件，并操作它们
func Dup2() {
	counts := make(map[string]int)
	files := os.Args[1:]
	if len(files) == 0 {
		countLines(os.Stdin, counts)
	} else {
		for _, arg := range files {
			f, err := os.Open(arg)
			if err != nil {
				fmt.Fprintf(os.Stderr, "dup2: %v\n", err)
				continue
			}
			countLines(f, counts)
			f.Close()
		}
	}
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}
```

> ![](http://cdn.ayusummer233.top/img/202301090030819.png)

- `os.Open` 函数返回两个值

  - 第一个值是被打开的文件（`*os.File`），其后被 `Scanner` 读取。
  - 第二个值是内置 `error` 类型的值
    - 如果 `err` 等于内置值`nil`（相当于其它语言里的 `NULL`），那么文件被成功打开。读取文件，直到文件结束，然后调用 `Close` 关闭该文件，并释放占用的所有资源。
    - 如果 `err` 的值不是 `nil`，说明打开文件时出错了。这种情况下，错误值描述了所遇到的问题; 在上面的程序中对于此种情况的处理只是简单地将错误输出了
      - 在 Printf 中用了 `%v` 表示任意类型默认格式值
      - `continue` 语句直接跳到 `for` 循环的下个迭代开始执行。

- 关于 CountLines 函数, 其实放在 Dup2 函数后面声明也是可以正常调用的, 不过个人习惯还是写把 Dup2 中要用到的函数写在前面了

  > 函数和包级别的变量（package-level entities）可以任意顺序声明，并不影响其被调用。

- `map` 是一个由 `make` 函数创建的数据结构的==引用==。`map` 作为参数传递给某函数时，该函数接收这个==引用的一份拷贝==，被调用函数对 `map` 底层数据结构的任何修改，调用者函数都可以通过持有的 `map` 引用看到。在我们的例子中，`countLines` 函数向 `counts` 插入的值，也会被 `Dup2` 函数看到。

---

`dup` 的前两个版本以"流”模式读取输入，并根据需要拆分成多个行。理论上，这些程序可以处理任意数量的输入数据。

还有另一个方法，就是一口气把全部输入数据读到内存中，一次分割为多行，然后处理它们。下面这个版本，`dup3`，就是这么操作的。这个例子引入了 `ReadFile` 函数（来自于`io/ioutil`包），其读取指定文件的全部内容，`strings.Split` 函数把字符串分割成子串的切片。（`Split` 的作用与前文提到的 `strings.Join` 相反。）

```go
// 一次性读取指定文件到内存中, 然后进行分割与计算重复行的操作
func Dup3() {
	counts := make(map[string]int)
	for _, filename := range os.Args[1:] {
		data, err := ioutil.ReadFile(filename)
		if err != nil {
			fmt.Fprintf(os.Stderr, "dup3: %v\n", err)
			continue
		}
		for _, line := range strings.Split(string(data), "\n") {
			counts[line]++
		}
	}
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}
```

> ![image-20230109005116705](http://cdn.ayusummer233.top/img/202301090051746.png)

- `ReadFile` 函数返回一个字节切片（byte slice），必须把它转换为 `string`，才能用 `strings.Split` 分割。

  > 在 3.5.4 章中会有对字符串和字节切片的详细讲解

- 实现上，`bufio.Scanner`、`ioutil.ReadFile` 和 `ioutil.WriteFile` 都使用 `*os.File` 的 `Read` 和 `Write` 方法，但是，大多数程序员很少需要直接调用那些低级（lower-level）函数。高级（higher-level）函数，像 `bufio` 和 `io/ioutil` 包中所提供的那些，用起来要容易点。

> 仔细看上图中的输出会发现 cmd3 只计算到了 2 次, 这是因为文件最后没有换行, 可以将所有键值对输出看看:
>
> ![image-20230109005755298](http://cdn.ayusummer233.top/img/202301090057333.png)
>
> 可以看到有两个 cmd3
>
> 这是因为我们使用的 `\n` 切分的字符串, Windows 下的默认行尾序列时 `CRLF` 也即 `\r\n`, VSCode 中可以调节行尾序列, 这里我用的 Windows 系统, VSCode 中默认也是 CRLF, 所以实际上最后三行切分的结果是: `cmd3\r`, `cmd3\r`, `cmd3`; 因此输出的时候会看到两个 cmd3
>
> 如果修改为根据 `\r\n` 切分的话就可以得到预期结果了:
>
> ![image-20230109005903573](http://cdn.ayusummer233.top/img/202301090059617.png)

> 除此以外,在 Go 1.16 之后 io/ioutil 已经弃用了
>
> ![image-20230110230449977](http://cdn.ayusummer233.top/img/202301102304003.png)
>
> ![image-20230110230328271](http://cdn.ayusummer233.top/img/202301102303317.png)
>
> 这里可以直接使用 `os.ReadFile`, 效果是一样的:
>
> ![image-20230110230525093](http://cdn.ayusummer233.top/img/202301102305142.png)

---

### GIF 动画

```go
package ch1

import (
	"image"
	"image/color"
	"image/gif"
	"io"
	"math"
	"math/rand"
	"os"
	"time"
)

var palette = []color.Color{color.White, color.Black}

const (
	whiteIndex = 0 // first color in palette
	blackIndex = 1 // next color in palette
)

func LissajousMain() {
	rand.Seed(time.Now().UTC().UnixNano())
	lissajous(os.Stdout)
}

func lissajous(out io.Writer) {
	const (
		cycles  = 5     // number of complete x oscillator revolutions
		res     = 0.001 // angular resolution
		size    = 100   // image canvas covers [-size..+size]
		nframes = 64    // number of animation frames
		delay   = 8     // delay between frames in 10ms units
	)
	/* rand.Float64() 返回一个 64 位也即小数点后保留 16 位的浮点数 f，
	0.0 <= f < 1.0*/
	freq := rand.Float64() * 3.0 // relative frequency of y oscillator
	anim := gif.GIF{LoopCount: nframes}
	phase := 0.0 // phase difference
	for i := 0; i < nframes; i++ {
		rect := image.Rect(0, 0, 2*size+1, 2*size+1)
		img := image.NewPaletted(rect, palette)
		for t := 0.0; t < cycles*2*math.Pi; t += res {
			x := math.Sin(t)
			y := math.Sin(t*freq + phase)
			img.SetColorIndex(size+int(x*size+0.5), size+int(y*size+0.5),
				blackIndex)
		}
		phase += 0.1
		anim.Delay = append(anim.Delay, delay)
		anim.Image = append(anim.Image, img)
	}
	// EncodeAll 函数将生成的  gif anim 写入到 out 中
	gif.EncodeAll(out, &anim) // NOTE: ignoring encoding errors
}

```

> ![image-20230109230457018](http://cdn.ayusummer233.top/img/202301092305092.png)
>
> ![out](http://cdn.ayusummer233.top/img/202301092305753.gif)

- `line27~33` 的常量声明给出了一系列的常量值，常量是指在程序编译后运行时始终都不会变化的值，比如圈数、帧数、延迟值。常量声明和变量声明一般都会出现在包级别，所以这些常量在整个包中都是可以共享的，或者你也可以把常量声明定义在函数体内部，那么这种常量就只能在函数体内用。目前常量声明的值必须是一个数字值、字符串或者一个固定的boolean值。

- `[]color.Color{...}` 和 `gif.GIF{...}` 这两个表达式是复合声明（4.2和4.4.1节有说明）。这是实例化Go语言里的复合类型的一种写法。

  前者生成的是一个slice切片，后者生成的是一个struct结构体。

- lissajous 函数内部有两层嵌套的for循环。外层循环会循环64次，每一次都会生成一个单独的动画帧。它生成了一个包含两种颜色的201*201大小的图片，白色和黑色。所有像素点都会被默认设置为其零值（也就是调色板palette里的第0个值），这里我们设置的是白色。每次外层循环都会生成一张新图片，并将一些像素设置为黑色。其结果会append到之前结果之后。这里我们用到了append(参考4.2.1)内置函数，将结果append到anim中的帧列表末尾，并设置一个默认的80ms的延迟值。循环结束后所有的延迟值被编码进了GIF图片中，并将结果写入到输出流。out这个变量是io.Writer类型，这个类型支持把输出结果写到很多目标，很快我们就可以看到例子。

  内层循环设置两个偏振值。x轴偏振使用sin函数。y轴偏振也是正弦波，但其相对x轴的偏振是一个0-3的随机值，初始偏振值是一个零值，随着动画的每一帧逐渐增加。循环会一直跑到x轴完成五次完整的循环。每一步它都会调用SetColorIndex来为(x,y)点来染黑色。

  main函数调用lissajous函数，用它来向标准输出流打印信息，所以下面这个命令会像图1.1中产生一个GIF动画。

  ```bash
  go build main
  main.exe > out.gif
  ```

  > Windows 下需要在 CMD 下执行该命令, 使用 powershell 生成的 gif 文件无法查看, 检查 hex 可以看到一些 00
  >
  > ![image-20230110000030361](http://cdn.ayusummer233.top/img/202301100000401.png)
  >
  > 可参阅: 
  >
  > - [image - Go-generated animated GIFs didn't work in windows - Stack Overflow](https://stackoverflow.com/questions/56323293/go-generated-animated-gifs-didnt-work-in-windows)
  > - [image/gif: result of EncodeAll not viewable in Eye of GNOME · Issue #13746 · golang/go (github.com)](https://github.com/golang/go/issues/13746)
  >
  > - [os: Binary data written to os.Stdout gets corrupted on Windows 8.1 · Issue #42337 · golang/go (github.com)](https://github.com/golang/go/issues/42337)
  >
  > - [《Go语言圣经》 读书笔记与个人思考 ① 第一章、包括源码分析 - 小能日记 - 博客园 (cnblogs.com)](https://www.cnblogs.com/linxiaoxu/p/16187331.html)
  >
  >   如果使用 powershell 重定向管道 `go run main.exe > out.gif` 生成的 gif 图片将会出错无法打开。具体原因是 powershell 的标准输出流如果进行管道重定向会进行转换。
  >
  >   > The GIF file (the gif data) is a binary format, not textual. Attempting to write it to the standard output and redirecting that to a file may suffer transformations. For example, the Windows PowerShell most likely converts some control characters (like `"\n"` to `"\r\n"`), so the resulting binary will not be identical to what [`gif.EncodeAll()`](https://golang.org/pkg/image/gif/#EncodeAll) writes to the standard output. Apparently `cmd.exe` does not do such transformations.
  >
  >   解决方法可以用其他命令行工具比如 cmd，或者在代码中明确使用 `os.File` 创建文件等形式。

> TODO: 这节内容其实有一些代码没有完全理解, 后面学完 ch4 再回来看看

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



