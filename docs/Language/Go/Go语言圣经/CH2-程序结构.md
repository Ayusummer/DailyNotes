# CH2 程序结构

---

- [CH2 程序结构](#ch2-程序结构)
  - [CH2.1 命名](#ch21-命名)
  - [CH2.2 声明](#ch22-声明)
  - [CH2.3 变量](#ch23-变量)
    - [CH2.3.1 简短变量声明](#ch231-简短变量声明)
    - [CH2.3.2 指针](#ch232-指针)
    - [2.3.3 new 函数](#233-new-函数)
    - [2.3.4 变量的生命周期](#234-变量的生命周期)
  - [CH2.4 赋值](#ch24-赋值)
    - [CH2.4.1 元组赋值](#ch241-元组赋值)
    - [2.4.2 可赋值性](#242-可赋值性)
  - [2.5 类型](#25-类型)
  - [2.6  包和文件](#26--包和文件)
    - [练习 2.1](#练习-21)
    - [2.6.1.导入包](#261导入包)
    - [练习2.2](#练习22)
    - [2.6.2.包的初始化](#262包的初始化)
    - [练习2.3](#练习23)
    - [练习2.4](#练习24)
    - [练习2.5](#练习25)
  - [2.7.作用域](#27作用域)


---

## CH2.1 命名

> [命名 - Go语言圣经 (golang-china.github.io)](https://golang-china.github.io/gopl-zh/ch2/ch2-01.html)

Go 语言中的函数名、变量名、常量名、类型名、语句标号和包名等所有的命名，都遵循一个简单的命名规则：一个名字必须以一个字母(Unicode 字母) 或下划线开头，后面可以跟任意数量的字母、数字或下划线。

大写字母和小写字母是不同的：`heapSort` 和 `Heapsort` 是两个不同的名字。

Go 语言中类似 if 和 switch 的关键字有 25 个; 关键字不能用于自定义名字, 只能在特定语法结构中使用:

```
break      default       func     interface   select
case       defer         go       map         struct
chan       else          goto     package     switch
const      fallthrough   if       range       type
continue   for           import   return      var
```

此外, 还有大约 30 多个预定义的名字, 比如 int 和 true 等, 主要对应内建的常量, 类型和函数

```
内建常量: true false iota nil

内建类型: int int8 int16 int32 int64
          uint uint8 uint16 uint32 uint64 uintptr
          float32 float64 complex128 complex64
          bool byte rune string error

内建函数: make len cap new append copy close delete
          complex real imag
          panic recover
```

这些内部预先定义的名字并不是关键字, 你可以在定义中重新使用它们

一些特殊的场景中重新定义它们也是有意义的, 但是也要注意避免过度而引起语义混乱

---

如果一个名字是在函数内部定义, 那么它就只在函数内部有效; 如果是在函数外部定义, 那么将在当前包的所有文件中都可以访问

==名字的开头字母的大小写决定了名字在包外的可见性==; 如果一个名字是大写字母开头的(译注: 必须是在函数外部定义的包级名字; 包级函数名本身也是包级名字）, 那么它将是导出的，也就是说可以被外部的包访问，例如 `fmt` 包的 `Printf` 函数就是导出的, 可以在 `fmt` 包外部访问; 包本身的名字一般总是用小写字母

---

名字的长度没有逻辑限制, 但是Go语言的风格是尽量使用短小的名字, 对于局部变量尤其是这样; 你会经常看到 i 之类的短名字, 而不是冗长的 theLoopIndex 命名

通常来说, 如果一个名字的作用域比较大, 生命周期也比较长, 那么用长的名字将会更有意义

---

在习惯上，Go语言程序员推荐使用 **驼峰式** 命名，当名字由几个单词组成时优先使用大小写分隔, 而不是优先用下划线分隔

因此，在标准库有 `QuoteRuneToASCII` 和 `parseRequestLine` 这样的函数命名, 但是一般不会用`quote_rune_to_ASCII` 和 `parse_request_line` 这样的命名

而像 ASCII 和 HTML 这样的缩略词则避免使用大小写混合的写法, 它们可能被称为 `htmlEscape`, `HTMLEscape`或 `escapeHTML`, 但不会是 `escapeHtml`

---

## CH2.2 声明

> [声明 - Go语言圣经 (golang-china.github.io)](https://golang-china.github.io/gopl-zh/ch2/ch2-02.html)

声明语句定义了程序的各种实体对象以及部分或全部的属性

Go语言主要有四种类型的声明语句: `var`, `const`, `type` 和 `func`, 分别对应变量, 常量, 类型和函数实体对象的声明。

这一章我们重点讨论 `变量-var` 和 `类型-type` 的声明, 第三章将讨论常量的声明, 第五章将讨论函数的声明

一个Go语言编写的程序对应一个或多个以. `go` 为文件后缀名的源文件; 每个源文件中以包的声明语句开始, 说明该源文件是属于哪个包; 包声明语句之后是 import 语句导入依赖的其它包, 然后是包一级的类型,  变量, 常量, 函数的声明语句, 包一级的各种类型的声明语句的顺序无关紧要(译注: 函数内部的名字则必须先声明之后才能使用)

例如, 下面的例子中声明了一个常量, 一个函数和两个变量:

```go
// Boiling prints the boiling point of water.
package main

import "fmt"

const boilingF = 212.0

func main() {
    var f = boilingF
    var c = (f - 32) * 5 / 9
    fmt.Printf("boiling point = %g°F or %g°C\n", f, c)
    // Output:
    // boiling point = 212°F or 100°C
}

```

- `%g `- general - 根据情况选择 %e 或 %f 以提供更紧凑的输出
- `%e` - scientific notation, 即科学计数法; 它将浮点数以科学计数法的形式输出, 例如 1.234567e+02 表示 123.4567
- `%f` - decimal floating-point notation, 即十进制浮点数; 它将浮点数以普通的十进制形式输出, 例如 123.4567

其中常量 boilingF 是在包一级范围声明语句声明的, f 和 c 两个变量是在 main 函数内部声明的

在包一级声明的名字可在整个包对应的每个源文件中访问, 而不是仅仅在其声明语句所在的源文件中访问

相比之下, 局部声明的名字就只能在函数内部很小的范围被访问

---

一个函数的声明由一个函数名字, 参数列表(由函数的调用者提供参数变量的具体值), 一个可选的返回值列表和包含函数定义的函数体组成

如果函数没有返回值, 那么返回值列表是省略的

执行函数从函数的第一个语句开始, 依次顺序执行直到遇到 return 返回语句, 如果没有返回语句则是执行到函数末尾, 然后返回到函数调用者

前面的章节中我们已经看到过很多函数声明和函数调用的例子了, 之后会在第五章将深入讨论函数的相关细节, 这里只简单解释下

下面的 `fToC` 函数封装了温度转换的处理逻辑, 这样它只需要被定义一次, 就可以在多个地方多次被使用

在这个例子中, main 函数就调用了两次 `fToC` 函数, 分别使用在局部定义的两个常量作为调用函数的参数

```go
// Ftoc prints two Fahrenheit-to-Celsius conversions.
package main

import "fmt"

func main() {
    const freezingF, boilingF = 32.0, 212.0
    fmt.Printf("%g°F = %g°C\n", freezingF, fToC(freezingF)) // "32°F = 0°C"
    fmt.Printf("%g°F = %g°C\n", boilingF, fToC(boilingF))   // "212°F = 100°C"
}

func fToC(f float64) float64 {
    return (f - 32) * 5 / 9
}

```

![image-20240313233701133](http://cdn.ayusummer233.top/DailyNotes/202403132337181.png)

---

## CH2.3 变量

> [变量 - Go语言圣经 (golang-china.github.io)](https://golang-china.github.io/gopl-zh/ch2/ch2-03.html)

var 声明语句可以创建一个特定类型的变量, 然后给变量附加一个名字, 并且设置变量的初始值

变量声明的一般语法如下:

```go
var 变量名字 类型 = 表达式
```

其中 `类型` 或 `= 表达式` 两个部分可以省略其中的一个

- 如果省略的是类型信息, 那么将根据初始化表达式来推导变量的类型信息
- 如果初始化表达式被省略, 那么将用零值初始化该变量
  -  数值类型变量对应的零值是0
  - 布尔类型变量对应的零值是false
  - 字符串类型对应的零值是空字符串
  - 接口或引用类型(包括slice, 指针, map, chan和函数)变量对应的零值是nil
  - 数组或结构体等聚合类型对应的零值是每个元素或字段都是对应该类型的零值

零值初始化机制可以确保每个声明的变量总是有一个良好定义的值, 因此 **在Go语言中不存在未初始化的变量**

这个特性可以简化很多代码, 而且可以在没有增加额外工作的前提下确保边界条件下的合理行为; 例如:

```go
var s string
fmt.Println(s) // ""
```

这段代码将打印一个空字符串, 而不是导致错误或产生不可预知的行为

![image-20240313234909670](http://cdn.ayusummer233.top/DailyNotes/202403132349697.png)

Go语言程序员应该让一些聚合类型的零值也具有意义, 这样可以保证不管任何类型的变量总是有一个合理有效的零值状态

---

也可以在一个声明语句中同时声明一组变量, 或用一组初始化表达式声明并初始化一组变量

如果省略每个变量的类型, 将可以声明多个类型不同的变量(类型由初始化表达式推导):

```go
var i, j, k int                 // int, int, int
var b, f, s = true, 2.3, "four" // bool, float64, string
```

---

初始化表达式可以是字面量或任意的表达式; 在包级别声明的变量会在 main 入口函数执行前完成初始化（§2.6.2）, 局部变量将在声明语句被执行到的时候完成初始化

一组变量也可以通过调用一个函数, 由函数返回的多个返回值初始化:

```go
var f, err = os.Open(name) // os.Open returns a file and an error
```

---

### CH2.3.1 简短变量声明

在函数内部, 有一种称为简短变量声明语句的形式可用于声明和初始化局部变量, 它以 `名字 := 表达式` 形式声明变量, 变量的类型根据表达式来自动推导

下面是 `lissajous` 函数中的三个简短变量声明语句([§1.4](CH1-入门.md#ch1.4-GIF-动画)):

```go
anim := gif.GIF{LoopCount: nframes}
freq := rand.Float64() * 3.0
t := 0.0
```

因为简洁和灵活的特点, 简短变量声明被广泛用于大部分的局部变量的声明和初始化

var 形式的声明语句往往是用于需要显式指定变量类型的地方, 或者因为变量稍后会被重新赋值而初始值无关紧要的地方

```go
i := 100                  // an int
var boiling float64 = 100 // a float64
var names []string
var err error
var p Point
```

---

和 var 形式声明语句一样, 简短变量声明语句也可以用来声明和初始化一组变量:

```go
i, j := 0, 1
```

但是这种同时声明多个变量的方式应该限制只在可以提高代码可读性的地方使用, 比如 for 语句的循环的初始化语句部分

---

请记住 **`:=` 是一个变量声明语句**, 而 **`=` 是一个变量赋值操作**;

也不要混淆多个变量的声明和元组的多重赋值(§2.4.1), 后者是将右边各个表达式的值赋值给左边对应位置的各个变量:

```go
i, j = j, i // 交换 i 和 j 的值
```

----

和普通 var 形式的变量声明语句一样, 简短变量声明语句也可以用函数的返回值来声明和初始化变量, 像下面的`os.Open` 函数调用将返回两个值:

```go
f, err := os.Open(name)
if err != nil {
    return err
}
// ...use f...
f.Close()

```

---

这里有一个比较微妙的地方: 简短变量声明左边的变量可能并不是全部都是刚刚声明的

如果有一些已经在相同的词法域声明过了(§2.7), 那么简短变量声明语句对这些已经声明过的变量就只有赋值行为了

> 对于已声明的变量, 单独使用 `:=` 会报错 `"no new variables on left side of :="`
>
> 此时可以使用 = 赋值

在下面的代码中, 第一个语句声明了 `in` 和 `err` 两个变量, 在第二个语句只声明了 `out` 一个变量, 然后对已经声明的 `err` 进行了赋值操作

```go
in, err := os.Open(infile)
// ...
out, err := os.Create(outfile)
```

简短变量声明语句中必须至少要声明一个新的变量, 下面的代码将不能编译通过:

```go
f, err := os.Open(infile)
// ...
f, err := os.Create(outfile) // compile error: no new variables
```

![image-20240314001823305](http://cdn.ayusummer233.top/DailyNotes/202403140018336.png)

解决的方法是第二个简短变量声明语句改用普通的多重赋值语句

简短变量声明语句只有对已经在同级词法域声明过的变量才和赋值操作语句等价, 如果变量是在外部词法域声明的, 那么简短变量声明语句将会在当前词法域重新声明一个新的变量, 我们在本章后面将会看到类似的例子

---

### CH2.3.2 指针

一个变量对应一个保存了变量对应类型值的内存空间; 普通变量在声明语句创建时被绑定到一个变量名, 比如叫 x 的变量, 但是还有很多变量始终以表达式方式引入, 例如 `x[i]` 或 `x.f` 变量; 所有这些表达式一般都是读取一个变量的值, 除非它们是出现在赋值语句的左边, 这种时候是给对应变量赋予一个新的值

一个指针的值是另一个变量的地址; 一个指针对应变量在内存中的存储位置; 

并不是每一个值都会有一个内存地址, 但是对于每一个变量必然有对应的内存地址;

通过指针, 我们可以直接读或更新对应变量的值, 而不需要知道该变量的名字(如果变量有名字的话)

如果用 `var x int` 声明语句声明一个 x 变量，那么 `&x` 表达式（取 x 变量的内存地址）将产生一个指向该整数变量的指针, 指针对应的数据类型是 `*int`, 指针被称之为 "指向int类型的指针"; 

如果指针名字为 p, 那么可以说 "p指针指向变量x", 或者说 "p指针保存了x变量的内存地址"

同时`*p`表达式对应 p 指针指向的变量的值; 一般`*p`表达式读取指针指向的变量的值, 这里为 int 类型的值, 同时因为`*p`对应一个变量, 所以该表达式也可以出现在赋值语句的左边, 表示更新指针所指向的变量的值

```go
x := 1
p := &x         // p, of type *int, points to x
fmt.Println(*p) // "1"
*p = 2          // equivalent to x = 2
fmt.Println(x)  // "2"
```

![image-20240314002527986](http://cdn.ayusummer233.top/DailyNotes/202403140025031.png)

---

对于聚合类型每个成员——比如结构体的每个字段, 或者是数组的每个元素——也都是对应一个变量, 因此可以被取地址

变量有时候被称为可寻址的值; 即使变量由表达式临时生成, 那么表达式也必须能接受`&`取地址操作

任何类型的指针的零值都是nil; 如果p指向某个有效变量, 那么`p != nil`测试为真

指针之间也是可以进行相等测试的, 只有当它们指向同一个变量或全部是nil时才相等

```go
var x, y int
fmt.Println(&x == &x, &x == &y, &x == nil) // "true false false"
```

![image-20240314003033951](http://cdn.ayusummer233.top/DailyNotes/202403140030991.png)

---

在Go语言中, 返回函数中局部变量的地址也是安全的

例如下面的代码, 调用 f 函数时创建局部变量 v, 在局部变量地址被返回之后依然有效, 因为指针 p 依然引用这个变量:

```go
var p = f()

func f() *int {
    v := 1
    return &v
}
```

每次调用f函数都将返回不同的结果:

```go
fmt.Println(f() == f()) // "false"
```

![image-20240314003528522](http://cdn.ayusummer233.top/DailyNotes/202403140035557.png)

> 这里的警告都是提示不要在 `==` 两边放相同的字样, 因为一般这是 true 是没意义的, 不过这里显然并非如此, 因此忽略警告即可~
>
> ![image-20240314003540326](http://cdn.ayusummer233.top/DailyNotes/202403140035359.png)

---

因为指针包含了一个变量的地址, 因此如果将指针作为参数调用函数, 那将可以在函数中通过该指针来更新变量的值

例如下面这个例子就是通过指针来更新变量的值, 然后返回更新后的值, 可用在一个表达式中

> 译注：这是对C语言中`++v`操作的模拟, 这里只是为了说明指针的用法, `incr`函数模拟的做法并不推荐

```go
func incr(p *int) int {
    *p++ // 非常重要：只是增加p指向的变量的值，并不改变p指针！！！
    return *p
}

v := 1
incr(&v)              // side effect: v is now 2
fmt.Println(incr(&v)) // "3" (and v is 3)

```

![image-20240314004028336](http://cdn.ayusummer233.top/DailyNotes/202403140040377.png)

---

每次我们对一个变量取地址, 或者复制指针, 我们都是为原变量创建了新的别名, 例如, `*p`就是变量 v 的别名

指针特别有价值的地方在于我们可以不用名字而访问一个变量, 但是这是一把双刃剑: 要找到一个变量的所有访问者并不容易, 我们必须知道变量全部的别名(译注：这是Go语言的垃圾回收器所做的工作)

不仅仅是指针会创建别名, 很多其他引用类型也会创建别名, 例如 slice, map 和 chan, 甚至结构体, 数组和接口都会创建所引用变量的别名

指针是实现标准库中 flag 包的关键技术, 它使用命令行参数来设置对应变量的值, 而这些对应命令行标志参数的变量可能会零散分布在整个程序中

为了说明这一点, 在早些的echo版本中, 就包含了两个可选的命令行参数

- `-n`用于忽略行尾的换行符
- `-s sep`用于指定分隔字符(默认是空格)

下面这是第四个版本, 对应包路径为 `gopl.io/ch2/echo4`

```go
// Echo4 prints its command-line arguments.
package main

import (
    "flag"
    "fmt"
    "strings"
)

var n = flag.Bool("n", false, "omit trailing newline")
var sep = flag.String("s", " ", "separator")

func main() {
    flag.Parse()
    fmt.Print(strings.Join(flag.Args(), *sep))
    if !*n {
        fmt.Println()
    }
}
```

调用 `flag.Bool` 函数会创建一个新的对应布尔型标志参数的变量, 它有三个属性

- 第一个是命令行标志参数的名字 `n`

- 然后是该标志参数的默认值(这里是false)

- 最后是该标志参数对应的描述信息

  如果用户在命令行输入了一个无效的标志参数, 或者输入`-h`或`-help`参数, 那么将打印所有标志参数的名字, 默认值和描述信息

类似的, 调用 `flag.String` 函数将创建一个对应字符串类型的标志参数变量, 同样包含命令行标志参数对应的参数名, 默认值和描述信息

程序中的`sep`和`n`变量分别是指向对应命令行标志参数变量的指针, 因此必须用`*sep`和`*n`形式的指针语法间接引用它们

当程序运行时, 必须在使用标志参数对应的变量之前先调用 `flag.Parse` 函数, 用于更新每个标志参数对应变量的值(之前是默认值)

对于非标志参数的普通命令行参数可以通过调用 `flag.Args()` 函数来访问; 返回值对应一个字符串类型的 `slice`

如果在 `flag.Parse` 函数解析命令行参数时遇到错误, 默认将打印相关的提示信息, 然后调用 `os.Exit(2)` 终止程序

让我们运行一些echo测试用例:

![image-20240314010345408](http://cdn.ayusummer233.top/DailyNotes/202403140103927.png)

> 这样可能看不太出来 `-n` 的作用, 那么多输出几个空行看看
>
> ![image-20240314010558559](http://cdn.ayusummer233.top/DailyNotes/202403140105594.png)
>
> ![image-20240314010608870](http://cdn.ayusummer233.top/DailyNotes/202403140106024.png)
>
> 默认不省略换行符, 会打印3个换行; 使用 `-n` 时省略换行符

---

### 2.3.3 new 函数

另一个创建变量的方法是调用内建的 new 函数

表达式 `new(T)` 将创建一个 T 类型的匿名变量, 初始化为 T 类型的零值, 然后返回变量地址, 返回的指针类型为`*T`

```go
p := new(int)   // p, *int 类型, 指向匿名的 int 变量
fmt.Println(*p) // "0"
*p = 2          // 设置 int 匿名变量的值为 2
fmt.Println(*p) // "2"
```

![image-20240314010840816](http://cdn.ayusummer233.top/DailyNotes/202403140108854.png)

用 new 创建变量和普通变量声明语句方式创建变量没有什么区别, 除了不需要声明一个临时变量的名字外, 我们还可以在表达式中使用 new(T); 换言之, new 函数类似是一种语法糖, 而不是一个新的基础概念

下面的两个 `newInt` 函数有着相同的行为:

```go
func newInt() *int {
    return new(int)
}

func newInt() *int {
    var dummy int
    return &dummy
}
```

每次调用 new 函数都是返回一个新的变量的地址, 因此下面两个地址是不同的:

```go
p := new(int)
q := new(int)
fmt.Println(p == q) // "false"
```

当然也可能有特殊情况: 如果两个类型都是空的, 也就是说类型的大小是 0, 例如`struct{}`和`[0]int`, 有可能有相同的地址(依赖具体的语言实现)

> 译注：请谨慎使用大小为0的类型, 因为如果类型的大小为 0 的话, 可能导致 Go 语言的自动垃圾回收器有不同的行为, 具体请查看`runtime.SetFinalizer`函数相关文档

---

new 函数使用通常相对比较少, 因为对于结构体来说, 直接用字面量语法创建新变量的方法会更灵活(§4.4.1)

---

由于 new 只是一个预定义的函数, 它并不是一个关键字, 因此我们可以将 new 名字重新定义为别的类型

例如下面的例子:

```go
func delta(old, new int) int { return new - old }
```

由于 new 被定义为 int 类型的变量名, 因此在 delta 函数内部是无法使用内置的 new 函数的

---

### 2.3.4 变量的生命周期

变量的生命周期指的是在程序运行期间变量有效存在的时间段

对于在包一级声明的变量来说, 它们的生命周期和整个程序的运行周期是一致的

而相比之下, 局部变量的生命周期则是动态的: 每次从创建一个新变量的声明语句开始, 直到该变量不再被引用为止, 然后变量的存储空间可能被回收; 函数的参数变量和返回值变量都是局部变量, 它们在函数每次被调用的时候创建

例如，下面是从 1.4 节的 Lissajous 程序摘录的代码片段:

```go
for t := 0.0; t < cycles*2*math.Pi; t += res {
    x := math.Sin(t)
    y := math.Sin(t*freq + phase)
    img.SetColorIndex(size+int(x*size+0.5), size+int(y*size+0.5),
        blackIndex)
}

```

> 译注: 函数的右小括弧也可以另起一行缩进, 同时为了防止编译器在行尾自动插入分号而导致的编译错误, 可以在末尾的参数变量后面显式插入逗号
>
> 像下面这样:
>
> ```go
> for t := 0.0; t < cycles*2*math.Pi; t += res {
>     x := math.Sin(t)
>     y := math.Sin(t*freq + phase)
>     img.SetColorIndex(
>         size+int(x*size+0.5), size+int(y*size+0.5),
>         blackIndex, // 最后插入的逗号不会导致编译错误，这是Go编译器的一个特性
>     )               // 小括弧另起一行缩进，和大括弧的风格保存一致
> }
> 
> ```

在每次循环的开始会创建临时变量 t, 然后在每次循环迭代中创建临时变量 x 和 y

那么Go语言的自动垃圾收集器是如何知道一个变量是何时可以被回收的呢? 这里我们可以避开完整的技术细节, 基本的实现思路是: 从每个包级的变量和每个当前运行函数的每一个局部变量开始, 通过指针或引用的访问路径遍历, 是否可以找到该变量; 如果不存在这样的访问路径, 那么说明该变量是不可达的, 也就是说它是否存在并不会影响程序后续的计算结果

因为一个变量的有效周期只取决于是否可达, 因此一个循环迭代内部的局部变量的生命周期可能超出其局部作用域; 同时, 局部变量可能在函数返回之后依然存在

编译器会自动选择在栈上还是在堆上分配局部变量的存储空间, 但可能令人惊讶的是, 这个选择并不是由用 var 还是 new 声明变量的方式决定的

```go
var global *int

func f() {
    var x int
    x = 1
    global = &x
}

func g() {
    y := new(int)
    *y = 1
}
```

f 函数里的 x 变量必须在堆上分配, 因为它在函数退出后依然可以通过包一级的 global 变量找到, 虽然它是在函数内部定义的; 用Go语言的术语说, 这个 x 局部变量从函数 f 中逃逸了

相反, 当 g 函数返回时, 变量`*y`将是不可达的, 也就是说可以马上被回收的; 因此，`*y`并没有从函数g中逃逸

编译器可以选择在栈上分配`*y`的存储空间(译注: 也可以选择在堆上分配, 然后由Go语言的GC回收这个变量的内存空间), 虽然这里用的是 new 方式; 其实在任何时候, 你并不需为了编写正确的代码而要考虑变量的逃逸行为, 要记住的是, 逃逸的变量需要额外分配内存, 同时对性能的优化可能会产生细微的影响

> `堆` 和 `栈` 是计算机内存管理中的两个常用术语, 用于描述内存中不同类型的分配方式
> - `堆(Heep)`: 是一种动态的数据结构, 通常用于存储程序运行时动态分配的内存;
>
>   堆上的内存可以在任意时刻分配和释放, 并没有固定的大小限制;
>
>   在堆上分配内存需要手动管理, 通常通过内存分配函数(如 `malloc` 或 `new`)来分配内存, 并通过相应的内存释放函数(如 `free` 或 `delete`)来释放内存;
>
>   堆上的变量的生命周期通常是由程序员显式地控制的
>
> - `栈(Stack)`: 是一种线性的数据结构, 通常用于存储函数的局部变量和函数调用的状态
>
>   当一个函数被调用时, 该函数的局部变量被存储在栈上, 函数的参数和返回地址也被压入栈中
>
>   当函数执行完毕时, 栈上的这些数据会被弹出, 栈的空间会被释放
>
>   栈的内存分配和释放都是由编译器自动管理的, 分配和释放操作都非常高效, 但栈的大小通常是固定的, 因此栈上的变量的生命周期也是固定的

---

Go 语言的自动垃圾收集器对编写正确的代码是一个巨大的帮助, 但也并不是说你完全不用考虑内存了;

你虽然不需要显式地分配和释放内存, 但是要编写高效的程序你依然需要了解变量的生命周期; 例如, 如果将指向短生命周期对象的指针保存到具有长生命周期的对象中, 特别是保存到全局变量时, 会阻止对短生命周期对象的垃圾回收(从而可能影响程序的性能)

----

## CH2.4 赋值

使用赋值语句可以更新一个变量的值, 最简单的赋值语句是将要被赋值的变量放在 `=` 的左边, 新值的表达式放在 `=` 的右边

```go
x = 1                       // 命名变量的赋值
*p = true                   // 通过指针间接赋值
person.name = "bob"         // 结构体字段赋值
count[x] = count[x] * scale // 数组、slice或map的元素赋值
```

特定的二元算术运算符和赋值语句的复合操作有一个简洁形式, 例如上面最后的语句可以重写为:

```go
count[x] *= scale
```

这样可以省去对变量表达式的重复计算

数值变量也可以支持`++`递增和`--`递减语句

> 译注: 自增和自减是语句, 而不是表达式, 因此`x = i++`之类的表达式是错误的

```go
v := 1
v++    // 等价方式 v = v + 1；v 变成 2
v--    // 等价方式 v = v - 1；v 变成 1
```

---

### CH2.4.1 元组赋值

元组赋值是另一种形式的赋值语句, 它允许同时更新多个变量的值

在赋值之前, 赋值语句右边的所有表达式将会先进行求值, 然后再统一更新左边对应变量的值

这对于处理有些同时出现在元组赋值语句左右两边的变量很有帮助, 例如我们可以这样交换两个变量的值:

```go
x, y = y, x

a[i], a[j] = a[j], a[i]
```

---

或者是计算两个整数值的的最大公约数(GCD)(译注: 欧几里德的GCD(Greatest Common Divisor) 是最早的非平凡算法)

```go
func gcd(x, y int) int {
    for y != 0 {
        x, y = y, x%y
    }
    return x
}

```

---

或者是计算斐波纳契数列(Fibonacci)的第 N 个数:

```go
func fib(n int) int {
    x, y := 0, 1
    for i := 0; i < n; i++ {
        x, y = y, x+y
    }
    return x
}
```

---

元组赋值也可以使一系列琐碎赋值更加紧凑(译注: 特别是在for循环的初始化部分)

```go
i, j, k = 2, 3, 5
```

但如果表达式太复杂的话, 应该尽量避免过度使用元组赋值; 因为每个变量单独赋值语句的写法可读性会更好

----

有些表达式会产生多个值, 比如调用一个有多个返回值的函数

当这样一个函数调用出现在元组赋值右边的表达式中时(译注: 右边不能再有其它表达式), 左边变量的数目必须和右边一致

```go
f, err = os.Open("foo.txt") // function call returns two values
```

通常, 这类函数会用额外的返回值来表达某种错误类型, 例如 `os.Open` 是用额外的返回值返回一个 error 类型的错误, 还有一些是用来返回布尔值, 通常被称为ok

在稍后我们将看到的三个操作都是类似的用法; 如果map查找(§4.3), 类型断言(§7.10) 或通道接收(§8.4.2)出现在赋值语句的右边, 它们都可能会产生两个结果, 有一个额外的布尔结果表示操作是否成功:

```go
v, ok = m[key]             // map lookup
v, ok = x.(T)              // type assertion
v, ok = <-ch               // channel receive
```

>  译注: map查找(§4.3), 类型断言(§7.10) 或通道接收(§8.4.2) 出现在赋值语句的右边时, 并不一定是产生两个结果, 也可能只产生一个结果; 对于只产生一个结果的情形:
>
> - map查找失败时会返回零值
> - 类型断言失败时会发生运行时panic异常
> - 通道接收失败时会返回零值（阻塞不算是失败）
>
> 例如下面的例子:
>
> ```go
> v = m[key]                // map查找，失败时返回零值
> v = x.(T)                 // type断言，失败时panic异常
> v = <-ch                  // 管道接收，失败时返回零值（阻塞不算是失败）
> 
> _, ok = m[key]            // map返回2个值
> _, ok = mm[""], false     // map返回1个值
> _ = mm[""]                // map返回1个值
> ```
>
> > 上面文档中的的例子不是很具体, 下面给出一个具体些的例子
> >
> > ```go
> > package main
> > 
> > func main() {
> > 	// 定义一个 map 字典
> > 	var m map[string]int = map[string]int{"one": 1, "two": 2, "three": 3}
> > 	// 尝试读取一个 m 中存在的 key
> > 	v, ok := m["one"]
> > 	ok1_2 := m["one"]
> > 	println(v, ok)
> > 	println(ok1_2)
> > 	// 尝试读取一个 m 中不存在的 key
> > 	v2, ok2 := m["four"]
> > 	ok2_2 := m["four"]
> > 	// 打印结果
> > 	println(v2, ok2)
> > 	println(ok2_2)
> > 
> > }
> > ```
> >
> > ![image-20240325011225899](http://cdn.ayusummer233.top/DailyNotes/202403250112987.png)
> >
> > 从这里可以看到, 至少在我这里的尝试中可以看到其实 map 函数允许返回 1 或 2 个变量, 和文中描述不符, 可能是版本更新导致的, 这里附一下 go 版本:
> >
> > ![image-20240325011301250](http://cdn.ayusummer233.top/DailyNotes/202403250113296.png)
> >
> > ---
> >
> > 另外两个类型断言和通道接收目前都没用过, 之后用到再另行讨论

---

和变量声明一样, 我们可以用下划线空白标识符`_`来丢弃不需要的值:

```go
_, err = io.Copy(dst, src) // 丢弃字节数
_, ok = x.(T)              // 只检测类型, 忽略具体值
```

---

### 2.4.2 可赋值性

赋值语句是显式的赋值形式, 但是程序中还有很多地方会发生隐式的赋值行为

- 函数调用会隐式地将调用参数的值赋值给函数的参数变量

- 一个返回语句会隐式地将返回操作的值赋值给结果变量

- 一个复合类型的字面量(§4.2)也会产生赋值行为; 例如下面的语句:

  ```go
  // 创建一个字符串切片
  medals := []string{"gold", "silver", "bronze"}
  ```

  隐式地对 slice 的每个元素进行赋值操作, 类似这样写的行为:

  ```go
  medals[0] = "gold"
  medals[1] = "silver"
  medals[2] = "bronze"
  ```

`map` 和 `chan` 的元素, 虽然不是普通的变量, 但是也有类似的隐式赋值行为

>  `chan` 是用于通信的数据类型, 是 Go 中的一个内建类型, 用于在 Go 协程之间传递数据
>
> `chan` 类型表示一个具体类型的通道, 可以通过 `make` 函数来创建

---

不管是隐式还是显式地赋值, 在赋值语句左边的变量和右边最终的求到的值必须有相同的数据类型

更直白地说, 只有右边的值对于左边的变量是可赋值的, 赋值语句才是允许的

---

可赋值性的规则对于不同类型有着不同要求, 对每个新类型特殊的地方我们会专门解释

对于目前我们已经讨论过的类型, 它的规则是简单的

- 类型必须完全匹配
- nil 可以赋值给任何指针或引用类型的变量
- 常量(§3.6)则有更灵活的赋值规则, 因为这样可以避免不必要的显式的类型转换

---

对于两个值是否可以用`==`或`!=`进行相等比较的能力也和可赋值能力有关系:

对于任何类型的值的相等比较, 第二个值必须是对第一个值类型对应的变量是可赋值的, 反之亦然

和前面一样, 我们会对每个新类型比较特殊的地方做专门的解释

---

## 2.5 类型

变量或表达式的类型定义了对应存储值的属性特征, 例如数值在内存的存储大小(或者是元素的bit个数), 它们在内部是如何表达的, 是否支持一些操作符, 以及它们自己关联的方法集等

在任何程序中都会存在一些变量有着相同的内部结构, 但是却表示完全不同的概念, 例如

- 一个 int 类型的变量可以用来表示一个循环的迭代索引, 或者一个时间戳, 或者一个文件描述符, 或者一个月份
- 一个 float64 类型的变量可以用来表示每秒移动几米的速度, 或者是不同温度单位下的温度
- 一个字符串可以用来表示一个密码或者一个颜色的名称

一个类型声明语句创建了一个新的类型名称, 和现有类型具有相同的底层结构, 新命名的类型提供了一个方法, 用来分隔不同概念的类型, 这样即使它们底层类型相同也是不兼容的

```go
type 类型名字 底层类型
```

类型声明语句一般出现在包一级, 因此如果新创建的类型名字的首字符大写, 则在包外部也可以使用

> 译注: 对于中文汉字, Unicode标志都作为小写字母处理, 因此中文的命名默认不能导出
>
> 不过国内的用户针对该问题提出了不同的看法, 根据RobPike的回复, 在Go2中有可能会将中日韩等字符当作大写字母处理
>
> 下面是RobPik在 [Issue763](https://github.com/golang/go/issues/5763) 的回复:
>
> ```
> A solution that's been kicking around for a while:
> 
> For Go 2 (can't do it before then): Change the definition to “lower case letters and _ are package-local; all else is exported”. Then with non-cased languages, such as Japanese, we can write 日本语 for an exported name and _日本语 for a local name. This rule has no effect, relative to the Go 1 rule, with cased languages. They behave exactly the same.
> ```

为了说明类型声明, 我们将不同温度单位分别定义为不同的类型:

```go
// Package tempconv performs Celsius and Fahrenheit temperature computations.
package tempconv

import "fmt"

type Celsius float64    // 摄氏温度
type Fahrenheit float64 // 华氏温度

const (
    AbsoluteZeroC Celsius = -273.15 // 绝对零度
    FreezingC     Celsius = 0       // 结冰点温度
    BoilingC      Celsius = 100     // 沸水温度
)

func CToF(c Celsius) Fahrenheit { return Fahrenheit(c*9/5 + 32) }

func FToC(f Fahrenheit) Celsius { return Celsius((f - 32) * 5 / 9) }

```

我们在这个包声明了两种类型: Celsius 和 Fahrenheit 分别对应不同的温度单位

它们虽然有着相同的底层类型float64, 但是它们是不同的数据类型, 因此它们不可以被相互比较或混在一个表达式运算

刻意区分类型可以避免一些像无意中使用不同单位的温度混合计算导致的错误

因此需要一个类似 Celsius(t) 或 Fahrenheit(t) 形式的显式转型操作才能将 float64 转为对应的类型

Celsius(t) 和 Fahrenheit(t) 是类型转换操作, 它们并不是函数调用

类型转换不会改变值本身, 但是会使它们的语义发生变化

另一方面, CToF 和 FToC 两个函数则是对不同温度单位下的温度进行换算, 它们会返回不同的值

----

对于每一个类型 T, 都有一个对应的类型转换操作T(x), 用于将x转为T类型

> 译注: 如果 T 是指针类型, 可能会需要用小括弧包装 T , 比如 `(*int)(0)`
>
> 只有当两个类型的底层基础类型相同时才允许这种转型操作，或者是两者都是指向相同底层结构的指针类型，这些转换只改变类型而不会影响值本身
>
> 如果x是可以赋值给T类型的值, 那么x必然也可以被转为T类型, 但是一般没有这个必要

----

数值类型之间的转型也是允许的, 并且在字符串和一些特定类型的slice之间也是可以转换的, 在下一章我们会看到这样的例子; 这类转换可能改变值的表现; 例如

- 将一个浮点数转为整数将丢弃小数部分
- 将一个字符串转为`[]byte`类型的slice将拷贝一个字符串数据的副本

在任何情况下, 运行时不会发生转换失败的错误(译注: 错误只会发生在编译阶段)

---

底层数据类型决定了内部结构和表达方式, 也决定是否可以像底层类型一样对内置运算符的支持

这意味着, 正如我们所期望的那样, Celsius 和 Fahrenheit 类型的算术运算行为和底层的 float64 类型是一样的

```go
fmt.Printf("%g\n", BoilingC-FreezingC) // "100" °C
boilingF := CToF(BoilingC)
fmt.Printf("%g\n", boilingF-CToF(FreezingC)) // "180" °F
fmt.Printf("%g\n", boilingF-FreezingC)       // compile error: type mismatch
```

> ![image-20240401013638689](http://cdn.ayusummer233.top/DailyNotes/202404010136744.png)

![image-20240401013706077](http://cdn.ayusummer233.top/DailyNotes/202404010137125.png)

---

比较运算符`==`和`<`也可以用来比较一个命名类型的变量和另一个有相同类型的变量, 或有着相同底层类型的未命名类型的值之间做比较

但是如果两个值有着不同的类型, 则不能直接进行比较:

```go
var c Celsius
var f Fahrenheit
fmt.Println(c == 0)          // "true"
fmt.Println(f >= 0)          // "true"
fmt.Println(c == f)          // compile error: type mismatch
fmt.Println(c == Celsius(f)) // "true"!
```

> ![image-20240401013818637](http://cdn.ayusummer233.top/DailyNotes/202404010138709.png)

注意最后那个语句; 尽管看起来像函数调用, 但是Celsius(f)是类型转换操作, 它并不会改变值, 仅仅是改变值的类型而已; 测试为真的原因是因为c和f都是零值

----

一个命名的类型可以提供书写方便, 特别是可以避免一遍又一遍地书写复杂类型

> 译注: 例如用匿名的结构体定义变量

虽然对于像 float64 这种简单的底层类型没有简洁很多, 但是如果是复杂的类型将会简洁很多, 特别是我们即将讨论的结构体类型

----

命名类型还可以为该类型的值定义新的行为; 这些行为表示为一组关联到该类型的函数集合, 我们称为类型的方法集

我们将在第六章中讨论方法的细节, 这里只说些简单用法

---

下面的声明语句, Celsius 类型的参数 c 出现在了函数名的前面, 表示声明的是 Celsius 类型的一个名叫 String 的方法, 该方法返回该类型对象 c 带着 °C 温度单位的字符串:

```go
func (c Celsius) String() string { return fmt.Sprintf("%g°C", c) }
```

`Sprintf` 名字来源于 "String print format", 意思是将格式化的输出打印为字符串返回一个 string 类型的值

在 Go 语言中, 函数和方法是两个不同的概念

- 函数是一段独立的代码, 它可以接收一些参数, 执行一些操作, 然后返回一个或多个结果

  函数不依赖于任何特定的类型或值

  例如 `func Add(a, b int) int` 是一个函数, 它接收两个整数, 返回它们的和

- 方法则是与特定类型关联的函数

  方法的定义方式是在函数名前添加一个参数，这个参数定义了这个方法所属的类型

  例如 `func (c Celsius) String() string` 是一个方法, 它属于 Celsius 类型

  当你在某个类型上定义了方法后, 你就可以在这个类型的值上调用这个方法。例如对于 `c Celsius` 调用 `c.String()` 来获取 `c` 的字符串表示

---

许多类型都会定义一个 String 方法, 因为当使用 fmt 包的打印方法时，将会优先使用该类型对应的 String 方法返回的结果打印, 我们将在7.1节讲述

```go
c := FToC(212.0)
// fmt.Println(c.String()) // "100°C"
fmt.Printf("%v\n", c)   // "100°C"; no need to call String explicitly
fmt.Printf("%s\n", c)   // "100°C"; 使用 %v 格式化字符串表示, 由于 Celsius 类型已经定义了 String() 方法, 所以会自动调用, 输出为 "100°C"
fmt.Println(c)          // "100°C"; 使用 %s 格式化字符串表示, 同样会调用 String() 方法, 输出为 "100°C"
fmt.Printf("%g\n", c)   // "100"; does not call String;使用 %g 格式化字符串表示, 不会调用 String() 方法, 输出为 "100"
fmt.Println(float64(c)) // "100"; does not call String; 直接打印 Celsius 类型的底层 float64 值, 不会调用 String() 方法, 输出为 "100"
```

> ![image-20240401014307627](http://cdn.ayusummer233.top/DailyNotes/202404010143683.png)

![image-20240401014746493](http://cdn.ayusummer233.top/DailyNotes/202404010147556.png)

---

## 2.6  包和文件

Go 语言中的包和其他语言的库或模块的概念类似, 目的都是为了支持模块化, 封装, 单独编译和代码重用

一个包的源代码保存在一个或多个以 `.go` 为文件后缀名的源文件中, 通常一个包所在目录路径的后缀是包的导入路径

例如包 `gopl.io/ch1/helloworld` 对应的目录路径是 `$GOPATH/src/gopl.io/ch1/helloworld`

每个包都对应一个独立的名字空间
例如, 在 image 包中的 Decode 函数和在 `unicode/utf16` 包中的 Decode 函数是不同的
要在外部引用该函数, 必须显式使用 `image.Decode` 或 `utf16.Decode` 形式访问

---

包还可以让我们通过控制哪些名字是外部可见的来隐藏内部实现信息

在Go语言中, 一个简单的规则是: 如果一个名字是大写字母开头的, 那么该名字是导出的

> 译注: 因为汉字不区分大小写, 因此汉字开头的名字是没有导出的

---

为了演示包基本的用法, 先假设我们的温度转换软件已经很流行, 我们希望到Go语言社区也能使用这个包

我们该如何做呢？

让我们创建一个名为 `gopl.io/ch2/tempconv` 的包, 这是前面例子的一个改进版本(这里我们没有按照惯例按顺序对例子进行编号, 因此包路径看起来更像一个真实的包)

包代码存储在两个源文件中, 用来演示如何在一个源文件声明然后在其他的源文件访问(虽然在现实中, 这样小的包一般只需要一个文件)

我们把变量的声明, 对应的常量, 还有方法都放到 `tempconv.go` 源文件中:

`gopl.io/ch2/tempconv`

```go
// Package tempconv performs Celsius and Fahrenheit conversions.
package tempconv

import "fmt"

type Celsius float64
type Fahrenheit float64

const (
    AbsoluteZeroC Celsius = -273.15
    FreezingC     Celsius = 0
    BoilingC      Celsius = 100
)

func (c Celsius) String() string    { return fmt.Sprintf("%g°C", c) }
func (f Fahrenheit) String() string { return fmt.Sprintf("%g°F", f) }

```

转换函数则放在另一个 `conv.go` 源文件中:

```go
package tempconv

// CToF converts a Celsius temperature to Fahrenheit.
func CToF(c Celsius) Fahrenheit { return Fahrenheit(c*9/5 + 32) }

// FToC converts a Fahrenheit temperature to Celsius.
func FToC(f Fahrenheit) Celsius { return Celsius((f - 32) * 5 / 9) }
```

每个源文件都是以包的声明语句开始, 用来指明包的名字; 当包被导入的时候, 包内的成员将通过类似 `tempconv.CToF` 的形式访问

而包级别的名字, 例如在一个文件声明的类型和常量, 在同一个包的其他源文件也是可以直接访问的, 就好像所有代码都在一个文件一样

要注意的是 `tempconv.go` 源文件导入了 fmt 包, 但是 `conv.go` 源文件并没有, 因为这个源文件中的代码并没有用到 fmt 包

因为包级别的常量名都是以大写字母开头, 它们可以像 `tempconv.AbsoluteZeroC` 这样被外部代码访问:

```go
fmt.Printf("Brrrr! %v\n", tempconv.AbsoluteZeroC) // "Brrrr! -273.15°C"
```

要将摄氏温度转换为华氏温度, 需要先用 `import` 语句导入 `gopl.io/ch2/tempconv` 包, 然后就可以使用下面的代码进行转换了:

```go
fmt.Println(tempconv.CToF(tempconv.BoilingC)) // "212°F"
```

在每个源文件的包声明前紧跟着的注释是包注释(§10.7.4)

通常, 包注释的第一句应该先是包的功能概要说明

一个包通常只有一个源文件有包注释, 如果包注释很大, 通常会放到一个独立的 `doc.go` 文件中

> 译注: 如果有多个包注释, 目前的文档工具会根据源文件名的先后顺序将它们链接为一个包注释

---

### 练习 2.1

向 `tempconv` 包添加类型, 常量和函数用来处理 Kelvin 绝对温度的转换, Kelvin 绝对零度是 `−273.15°C`, Kelvin 绝对温度 1K 和摄氏度 1°C 的单位间隔是一样的

> Kelvin(开尔文)是国际单位制中的温度单位, 符号为 K, 它是热力学温度的基本单位, 也是唯一的绝对温度单位, 即其零点是绝对零度, 这是自然界可能达到的最低温度
>
> 在 Kelvin 温度尺度中, 1K 的温度间隔与 1°C 的温度间隔相同, 但是它们的零点不同
>
> Celsius(摄氏)温度尺度的零点是冰点(水从固态变为液态的温度), 而 Kelvin 温度尺度的零点是绝对零度

![image-20240406232958942](http://cdn.ayusummer233.top/DailyNotes/202404062330056.png)

`temp.go`:

```GO
// Package tempconv performs Celsius and Fahrenheit conversions.
package tempconv

import "fmt"

type Celsius float64
type Fahrenheit float64
type Kelvin float64

const (
	AbsoluteZeroC Celsius = -273.15
	FreezingC     Celsius = 0
	BoilingC      Celsius = 100
)

func (c Celsius) String() string    { return fmt.Sprintf("%g°C", c) }
func (f Fahrenheit) String() string { return fmt.Sprintf("%g°F", f) }
func (k Kelvin) String() string     { return fmt.Sprintf("%g°K", k) }

```

`conv.go`:

```GO
package tempconv

// CToF converts a Celsius temperature to Fahrenheit.
func CToF(c Celsius) Fahrenheit { return Fahrenheit(c*9/5 + 32) }

// FToC converts a Fahrenheit temperature to Celsius.
func FToC(f Fahrenheit) Celsius { return Celsius((f - 32) * 5 / 9) }

// CToK converts a Celsius temperature to Kelvin.
func CToK(c Celsius) Kelvin { return Kelvin(c - AbsoluteZeroC) }

// KToC converts a Kelvin temperature to Celsius.
func KToC(k Kelvin) Celsius { return Celsius(k) + AbsoluteZeroC }

```

`main.go`

```go
package main

import (
	// "CH2_6/tempconv"
	"GoLearning/Chapter/ch2/ch2_6_package_and_file/tempconv"
	"fmt"
)

func main() {
	c1 := tempconv.Celsius(100)
	f1 := tempconv.CToF(c1)
	fmt.Println("100°C to Fahrenheit:", f1)
	k1 := tempconv.CToK(c1)
	fmt.Println("100°C to Kelvin:", k1)
}

```

---

### 2.6.1.导入包

在Go语言程序中，每个包都有一个全局唯一的导入路径。

导入语句中类似 `gopl.io/ch2/tempconv` 的字符串对应包的导入路径。

Go语言的规范并没有定义这些字符串的具体含义或包来自哪里，它们是由构建工具来解释的。

当使用Go语言自带的go工具箱时（第十章），一个导入路径代表一个目录中的一个或多个Go源文件。

除了包的导入路径，每个包还有一个包名，包名一般是短小的名字（并不要求包名是唯一的），包名在包的声明处指定。

按照惯例，一个包的名字和包的导入路径的最后一个字段相同，例如gopl.io/ch2/tempconv包的名字一般是tempconv。

要使用 `gopl.io/ch2/tempconv` 包，需要先导入：

`gopl.io/ch2/cf`:

```go
// Cf converts its numeric argument to Celsius and Fahrenheit.
package main

import (
    "fmt"
    "os"
    "strconv"

    "gopl.io/ch2/tempconv"
)

func main() {
    for _, arg := range os.Args[1:] {
        t, err := strconv.ParseFloat(arg, 64)
        if err != nil {
            fmt.Fprintf(os.Stderr, "cf: %v\n", err)
            os.Exit(1)
        }
        f := tempconv.Fahrenheit(t)
        c := tempconv.Celsius(t)
        fmt.Printf("%s = %s, %s = %s\n",
            f, tempconv.FToC(f), c, tempconv.CToF(c))
    }
}

```

> PS: 在上一节的练习中我们就用到了导入包：
>
> ![image-20240407232152646](http://cdn.ayusummer233.top/DailyNotes/202404072321791.png)

导入语句将导入的包绑定到一个短小的名字，然后通过该短小的名字就可以引用包中导出的全部内容。

上面的导入声明将允许我们以 `tempconv.CToF` 的形式来访问 `gopl.io/ch2/tempconv` 包中的内容。

在默认情况下，导入的包绑定到 `tempconv`名字（译注：指包声明语句指定的名字），但是我们也可以绑定到另一个名称，以避免名字冲突（§10.4）。

---

cf程序将命令行输入的一个温度在Celsius和Fahrenheit温度单位之间转换：

```go
$ go build gopl.io/ch2/cf
$ ./cf 32
32°F = 0°C, 32°C = 89.6°F
$ ./cf 212
212°F = 100°C, 212°C = 413.6°F
$ ./cf -40
-40°F = -40°C, -40°C = -40°F

```

---

如果导入了一个包，但是又没有使用该包将被当作一个编译错误处理。

这种强制规则可以有效减少不必要的依赖，虽然在调试期间可能会让人讨厌，因为删除一个类似 `log.Print("got here!")` 的打印语句可能导致需要同时删除log包导入声明，否则，编译器将会发出一个错误。

在这种情况下，我们需要将不必要的导入删除或注释掉。

> VSCode 的 Go 扩展自动安装的工具包会自动格式化， 当导入的包未使用时会自动删除~
>
> ![image-20240407232448841](http://cdn.ayusummer233.top/DailyNotes/202404072324962.png)

不过有更好的解决方案，我们可以使用 `golang.org/x/tools/cmd/goimports` 导入工具，它可以根据需要自动添加或删除导入的包；

许多编辑器都可以集成goimports工具，然后在保存文件的时候自动运行。类似的还有gofmt工具，可以用来格式化Go源文件。

---

### 练习2.2

**练习 2.2：** 写一个通用的单位转换程序，用类似 cf 程序的方式从命令行读取参数，如果缺省的话则是从标准输入读取参数，然后做类似 Celsius 和 Fahrenheit 的单位转换，长度单位可以对应英尺和米，重量单位可以对应磅和公斤等。

> 英尺（Feet）和米（Meter）的关系是1英尺等于0.3048米
> 磅（Pound）和公斤（Kilogram）的关系是1磅等于0.45359237公斤
>
> PS： `lb`是磅（Pound）的拉丁缩写，源自拉丁词“libra”

写对应的三个转换模块, 然后写个 main 函数处理输入并用 switch case 来判断单位以及转换函数即可

![image-20240408000929196](http://cdn.ayusummer233.top/DailyNotes/202404080009265.png)

`tempconv.go`:

```go
// 定义温度以及温度转换相关的类型和函数
package tempconv

import "fmt"

type Celsius float64
type Fahrenheit float64
type Kelvin float64

const (
	AbsoluteZeroC Celsius = -273.15
	FreezingC     Celsius = 0
	BoilingC      Celsius = 100
)

func (c Celsius) String() string    { return fmt.Sprintf("%g°C", c) }
func (f Fahrenheit) String() string { return fmt.Sprintf("%g°F", f) }
func (k Kelvin) String() string     { return fmt.Sprintf("%g°K", k) }

func CToF(c Celsius) Fahrenheit { return Fahrenheit(c*9/5 + 32) }

func CToK(c Celsius) Kelvin { return Kelvin(c - AbsoluteZeroC) }

func FToC(f Fahrenheit) Celsius { return Celsius((f - 32) * 5 / 9) }

func FToK(f Fahrenheit) Kelvin {
	ftoc := FToC(f)
	ctok := CToK(ftoc)
	return ctok
}

func KToC(k Kelvin) Celsius { return Celsius(k) + AbsoluteZeroC }
func KToF(k Kelvin) Fahrenheit {
	ktoc := KToC(k)
	ctof := CToF(ktoc)
	return ctof
}

```

`weightconv.go`

```go
// 定义重量(磅和公斤)以及重量转换相关的类型和函数
package weightconv

import "fmt"

type Pound float64
type Kilogram float64

const (
	PoundToKilogram = 0.45359237
)

func (p Pound) String() string    { return fmt.Sprintf("%g lb", p) }
func (k Kilogram) String() string { return fmt.Sprintf("%g kg", k) }

func PToK(p Pound) Kilogram { return Kilogram(p * PoundToKilogram) }
func KToP(k Kilogram) Pound { return Pound(k / PoundToKilogram) }

```

`lengthconv.go`

```go
// 定义长度（英尺和米）以及长度转换相关的类型和函数
package lengthconv

import "fmt"

type Feet float64
type Meter float64

const (
	FeetToMeter = 0.3048
)

func (f Feet) String() string  { return fmt.Sprintf("%g ft", f) }
func (m Meter) String() string { return fmt.Sprintf("%g m", m) }

func FToM(f Feet) Meter { return Meter(f * FeetToMeter) }
func MToF(m Meter) Feet { return Feet(m / FeetToMeter) }

```

`main.go`

```go
// 通用的单位转换程序,支持长度、重量、温度的单位转换;从命令行读取参数, 如果缺省的话则是从标准输入读取参数然后做相应的转换
package main

import (
	"GoLearning/Chapter/ch2/ch2_6_package_and_file/ex2_2/lengthconv"
	"GoLearning/Chapter/ch2/ch2_6_package_and_file/ex2_2/tempconv"
	"GoLearning/Chapter/ch2/ch2_6_package_and_file/ex2_2/weightconv"
	"fmt"
	"os"
	"strconv"
)

func main() {
	var number string
	var unit string

	// 获取命令行参数
	if len(os.Args) > 1 {
		// 第一个参数为待转换的单位,例如: 100F, 100ft, 100lb
		number = os.Args[1]
		// 第二个参数为待转换的单位,例如: F, ft, lb
		unit = os.Args[2]
	} else {
		// 从标准输入读取参数
		fmt.Println("Please input the number and unit:")
		fmt.Scanln(&number, &unit)
	}

	// 将输入的数字转换为浮点数
	num, err := strconv.ParseFloat(number, 64)
	if err != nil {
		fmt.Fprintf(os.Stderr, "unitconv: %v\n", err)
		os.Exit(1)
	}

	// 根据输入的单位进行转换
	switch unit {
	case "°C":
		c := tempconv.Celsius(num)
		f := tempconv.CToF(c)
		k := tempconv.CToK(c)
		fmt.Printf("%s = %s, %s = %s\n", c, f, c, k)
	case "°F":
		f := tempconv.Fahrenheit(num)
		c := tempconv.FToC(f)
		k := tempconv.FToK(f)
		fmt.Printf("%s = %s, %s = %s\n", f, c, f, k)
	case "°K":
		k := tempconv.Kelvin(num)
		c := tempconv.KToC(k)
		f := tempconv.KToF(k)
		fmt.Printf("%s = %s, %s = %s\n", k, c, k, f)
	case "ft":
		f := lengthconv.Feet(num)
		m := lengthconv.FToM(f)
		fmt.Printf("%s = %s\n", f, m)
	case "m":
		m := lengthconv.Meter(num)
		f := lengthconv.MToF(m)
		fmt.Printf("%s = %s\n", m, f)
	case "lb":
		p := weightconv.Pound(num)
		k := weightconv.PToK(p)
		fmt.Printf("%s = %s\n", p, k)
	case "kg":
		k := weightconv.Kilogram(num)
		p := weightconv.KToP(k)
		fmt.Printf("%s = %s\n", k, p)
	default:
		fmt.Fprintf(os.Stderr, "unitconv: unknown unit %s\n", unit)
		os.Exit(1)
	}
}

```

![image-20240408001212248](http://cdn.ayusummer233.top/DailyNotes/202404080012359.png)

---

### 2.6.2.包的初始化

包的初始化首先是解决包级变量的依赖顺序，然后按照包级变量声明出现的顺序依次初始化：

```go
var a = b + c // a 第三个初始化, 为 3
var b = f()   // b 第二个初始化, 为 2, 通过调用 f (依赖c)
var c = 1     // c 第一个初始化, 为 1

func f() int { return c + 1 }

```

如果包中含有多个 `.go` 源文件，它们将按照发给编译器的顺序进行初始化，Go语言的构建工具首先会将 `.go` 文件根据文件名排序(字典序)，然后依次调用编译器编译。

对于在包级别声明的变量，如果有初始化表达式则用表达式初始化，还有一些没有初始化表达式的，例如某些表格数据初始化并不是一个简单的赋值过程。

在这种情况下，我们可以用一个特殊的init初始化函数来简化初始化工作。

每个文件都可以包含多个init初始化函数

```go
func init() { /* ... */ }
```

这样的 `init` 初始化函数除了不能被调用或引用外，其他行为和普通函数类似。

在每个文件中的init初始化函数，在程序开始执行时按照它们声明的顺序被自动调用。

---

每个包在解决依赖的前提下，以导入声明的顺序初始化，每个包只会被初始化一次。

因此，如果一个p包导入了q包，那么在p包初始化的时候可以认为q包必然已经初始化过了。

初始化工作是自下而上进行的，main包最后被初始化。

以这种方式，可以确保在main函数执行之前，所有依赖的包都已经完成初始化工作了。

----

下面的代码定义了一个 PopCount 函数，用于返回一个数字中含二进制 1bi t的个数。

它使用 init 初始化函数来生成辅助表格pc，pc表格用于处理每个 8bit 宽度的数字含二进制的 1bit 的 bit 个数（也称为汉明权重或者种群数量），这样的话在处理 64bit 宽度的数字时就没有必要循环64次，只需要8次查表就可以了。

> PS: 这并不是最快的统计1bit数目的算法，但是它可以方便演示init函数的用法，并且演示了如何预生成辅助表格，这是编程中常用的技术

`gopl.io/ch2/popcount`:

```go
package popcount

// pc[i] is the population count of i.
var pc [256]byte

func init() {
    // 这里的 for i:=range pc 只接收 range 返回的 index, value 中的 index, 也就是说 i 的值是 0-255
    for i := range pc {
        // go 语言中整数除法是向下取整的, 也就是说 1/2 = 0
        pc[i] = pc[i/2] + byte(i&1)
    }
}

// PopCount returns the population count (number of set bits) of x.
func PopCount(x uint64) int {
    return int(pc[byte(x>>(0*8))] +
        pc[byte(x>>(1*8))] +
        pc[byte(x>>(2*8))] +
        pc[byte(x>>(3*8))] +
        pc[byte(x>>(4*8))] +
        pc[byte(x>>(5*8))] +
        pc[byte(x>>(6*8))] +
        pc[byte(x>>(7*8))])
}

```

> 译注：对于pc这类需要复杂处理的初始化，可以通过将初始化逻辑包装为一个匿名函数处理，像下面这样：
>
> ```go
> // pc[i] is the population count of i.
> var pc [256]byte = func() (pc [256]byte) {
>     for i := range pc {
>         pc[i] = pc[i/2] + byte(i&1)
>     }
>     return
> }()
> 
> ```
>
> 要注意的是在init函数中，range循环只使用了索引，省略了没有用到的值部分。循环也可以这样写：
>
> ```go
> for i, _ := range pc {
> ```
>
> 我们在下一节和10.5节还将看到其它使用init函数的地方。

---

### 练习2.3

**练习 2.3：** 重写PopCount函数，用一个循环代替单一的表达式。比较两个版本的性能。

> 11.4节将展示如何系统地比较两个不同实现的性能。

按理来说, 直接手动把 8 次计算都明确写出来是要比循环快的, 因为引入循环会增加额外的开销, 例如

- **循环控制语句的开销**：每次循环都需要进行条件检查，以确定是否继续执行循环
- **变量更新的开销**：在循环中，通常会有一些变量需要在每次循环时更新（例如循环计数器）
- **函数调用的开销**：如果在循环中调用了函数，那么每次函数调用都会有一定的开销，包括参数传递、返回值处理、栈帧管理等

这里由于还没有接触后面 11 章系统比较程序性能的方法, 因此采用了循环多次计算函数调用时间的方式来比较两个版本的性能

![image-20240408020704725](http://cdn.ayusummer233.top/DailyNotes/202404080207767.png)

`ex2_3/popcount`:

```go
// 重写PopCount函数，用一个循环代替单一的表达式。比较两个版本的性能。
package popcount

// pc[i] is the population count of i.
var pc [256]byte

func init() {
	// 这里的 for i:=range pc 只接收 range 返回的 index, value 中的 index, 也就是说 i 的值是 0-255
	for i := range pc {
		// go 语言中整数除法是向下取整的, 也就是说 1/2 = 0
		pc[i] = pc[i/2] + byte(i&1)
	}
}

// PopCount returns the population count (number of set bits) of x.
func PopCount(x uint64) int {
	var count int
	for i := 0; i < 8; i++ {
		count += int(pc[byte(x>>(uint(i)*8))])
	}
	return count
}

```

`main.go`:

```go
// 比较两个版本 PopCount函数的性能
package main

import (
	ex2_3_popcount "GoLearning/Chapter/ch2/ch2_6_package_and_file/ex2_3/popcount"
	popcount "GoLearning/Chapter/ch2/ch2_6_package_and_file/popcount"
	"fmt"
	"time"
)

func main() {
	// 通过运行时长来比较两个版本的性能
	start := time.Now()
	for i := 0; i < 1000000; i++ {
		ex2_3_popcount.PopCount(0x1234567890ABCDEF)
	}
	time_spent := time.Since(start).Nanoseconds()
	fmt.Printf("%-25s %v ns\n", "ex2_3_popcount.PopCount:", time_spent)

	start = time.Now()
	for i := 0; i < 1000000; i++ {
		popcount.PopCount(0x1234567890ABCDEF)
	}
	time_spent = time.Since(start).Nanoseconds()
	fmt.Printf("%-25s %v ns\n", "popcount.PopCount:", time_spent)

}

```

![image-20240408021101266](http://cdn.ayusummer233.top/DailyNotes/202404080211356.png)

可以看到直接写出 8 次运算的性能是要优于循环的

----

### 练习2.4

**练习 2.4：** 用移位算法重写 `PopCount` 函数，每次测试最右边的1bit，然后统计总数。比较和查表算法的性能差异。

这里还是延续 2.3 的思路, 通过循环多次计算函数调用时间来比较两个版本的性能

```go
// 用移位算法重写 PopCount 函数，每次测试最右边的1bit，然后统计总数
func PopCount(x uint64) int {
	var count int
	for i := 0; i < 64; i++ {
		count += int(x & 1)
		x >>= 1
	}
	return count
}

```

可以预见的是, ex2.4 的 PopCount 函数每次都要做 64 次循环以及位操作, 所以他的性能远不及 ex2.3 的版本

![image-20240408232531678](http://cdn.ayusummer233.top/DailyNotes/202404082325775.png)

---

### 练习2.5

**练习 2.5：** 表达式`x&(x-1)`用于将x的最低的一个非零的bit位清零。使用这个算法重写PopCount函数，然后比较性能。

写这个函需要利用 `x&(x-1)` 这个表达式来清除 x 的最低位的 1 直到 x 为 0

```go
func PopCount(x uint64) int {
	var count int
	for x != 0 {
		count++
		x &= x - 1
	}
	return count
}
```

可以预见的是, 需要计算的 x 并不一定全部位都是非0, 因此这个版本的性能应该会优于 ex2.4 的版本,但是由于每次循环都要做位操作, 所以他的性能也远不及 ex2.3 的版本

![image-20240408234900132](http://cdn.ayusummer233.top/DailyNotes/202404082349231.png)

---

## 2.7.作用域

一个声明语句将程序中的实体和一个名字关联，比如一个函数或一个变量。

声明语句的作用域是指源代码中可以有效使用这个名字的范围。

---

不要将作用域和生命周期混为一谈。

- 声明语句的作用域对应的是一个源代码的文本区域；

  它是一个编译时的属性。

- 一个变量的生命周期是指程序运行时变量存在的有效时间段，在此时间区域内它可以被程序的其他部分引用；

  是一个运行时的概念。

---

句法块是由花括弧所包含的一系列语句，就像函数体或循环体花括弧包裹的内容一样。

句法块内部声明的名字是无法被外部块访问的, 这个块决定了内部声明的名字的作用域范围。

我们可以把块（block）的概念推广到包括其他声明的群组，这些声明在代码中并未显式地使用花括号包裹起来，我们称之为词法块。

对全局的源代码来说，存在一个整体的词法块，称为全局词法块；

对于每个包；每个for、if和switch语句，也都有对应词法块；

每个switch或select的分支也有独立的词法块；

当然也包括显式书写的词法块（花括弧包含的语句）。

![image-20240408235404185](http://cdn.ayusummer233.top/DailyNotes/202404082354275.png)

---

声明语句对应的词法域决定了作用域范围的大小。

对于内置的类型、函数和常量，比如int、len和true等是在全局作用域的，因此可以在整个程序中直接使用。

任何在函数外部（也就是包级语法域）声明的名字可以在同一个包的任何源文件中访问的。

对于导入的包，例如tempconv导入的fmt包，则是对应源文件级的作用域，因此只能在当前的文件中访问导入的fmt包，当前包的其它源文件无法访问在当前源文件导入的包。

还有许多声明语句，比如 `tempconv.CToF` 函数中的变量c，则是局部作用域的，它只能在函数内部（甚至只能是局部的某些部分）访问。

---

控制流标号，就是break、continue或goto语句后面跟着的那种标号，则是函数级的作用域。

这里的控制流标签（Control Flow Labels）是 Go 语言中一种特殊的标签，它们可以被用在 `break`、`continue` 或 `goto` 语句后面，用来明确指定跳转的目标位置, 例如:

```go
package main

import "fmt"

func main() {
    for i := 0; i < 10; i++ {
        for j := 0; j < 10; j++ {
            if i == 5 && j == 5 {
                break // 这里的 break 会跳出内层的 for 循环
            }
            fmt.Println(i, j)
        }
    }

    fmt.Println("------")

    OuterLoop: // 这是一个控制流标签
    for i := 0; i < 10; i++ {
        for j := 0; j < 10; j++ {
            if i == 5 && j == 5 {
                break OuterLoop // 这里的 break 会跳出标签指定的外层 for 循环
            }
            fmt.Println(i, j)
        }
    }
}
```

如上述代码所示

- 在第一个 `for` 循环中，当 `i` 和 `j` 都等于 5 时，`break` 语句会跳出内层的 `for` 循环。
- 在第二个循环前定义一个标签，然后在循环体内部使用 `break` 或 `continue` 语句加上这个标签，来跳出或继续这个标签所在的循环，而不仅仅是最内层的循环

---

goto 则和我们在 C 中接触的 goto 差不多, 例如:

```go
package main

import "fmt"

func main() {
    i := 0
    Here: // 这是一个控制流标签
    fmt.Println(i)
    i++
    if i < 5 {
        goto Here // 这里的 goto 会跳转到 Here 标签指定的位置
    }
}
```

---

这里所说的函数级作用域, 例如:

```go
package main

import "fmt"

func func1() {
    i := 0
    Here: // 这是一个控制流标签
    fmt.Println(i)
    i++
    if i < 5 {
        goto Here // 这里的 goto 会跳转到 Here 标签指定的位置
    }
}

func func2() {
    // goto Here // 这是错误的，因为 Here 标签在另一个函数内部定义
}

func main() {
    func1()
    func2()
}
```

这些标签不是全局的, 无法离开当前所在的块区域

----

一个程序可能包含多个同名的声明，只要它们在不同的词法域就没有关系。

例如，你可以声明一个局部变量，和包级的变量同名。

或者是像2.3.3节的例子那样，你可以将一个函数参数的名字声明为new，虽然内置的new是全局作用域的。

但是物极必反，如果滥用不同词法域可重名的特性的话，可能导致程序很难阅读。

----

当编译器遇到一个名字引用时，它会对其定义进行查找，查找过程从最内层的词法域向全局的作用域进行。

如果查找失败，则报告“未声明的名字”这样的错误。

如果该名字在内部和外部的块分别声明过，则内部块的声明首先被找到。在这种情况下，内部声明屏蔽了外部同名的声明，让外部的声明的名字无法被访问：

```go
func f() {}

var g = "g"

func main() {
    f := "f"
    fmt.Println(f) // "f"; local var f shadows package-level func f
    fmt.Println(g) // "g"; package-level var
    fmt.Println(h) // compile error: undefined: h
}

```

在函数中词法域可以深度嵌套，因此内部的一个声明可能屏蔽外部的声明。

----

还有许多语法块是 if 或 for 等控制流语句构造的。

下面的代码有三个不同的变量x，因为它们是定义在不同的词法域

> 这个例子只是为了演示作用域规则，但不是好的编程风格

```go
func main() {
    x := "hello!"
    for i := 0; i < len(x); i++ {
        x := x[i]
        if x != '!' {
            x := x + 'A' - 'a'
            fmt.Printf("%c", x) // "HELLO" (one letter per iteration)
        }
    }
}

```

在`x[i]`和`x + 'A' - 'a'`声明语句的初始化的表达式中都引用了外部作用域声明的x变量，稍后我们会解释这个。（注意，后面的表达式与unicode.ToUpper并不等价。）

----

正如上面例子所示，并不是所有的词法域都显式地对应到由花括弧包含的语句, 还有一些隐含的规则。

上面的for语句创建了两个词法域：

- 花括弧包含的是显式的部分，是for的循环体部分词法域

- 另外一个隐式的部分则是循环的初始化部分，比如用于迭代变量i的初始化。

  隐式的词法域部分的作用域还包含条件测试部分和循环后的迭代部分（`i++`），当然也包含循环体词法域。

下面的例子同样有三个不同的x变量，每个声明在不同的词法域，一个在函数体词法域，一个在for隐式的初始化词法域，一个在for循环体词法域；只有两个块是显式创建的：

```go
func main() {
    x := "hello"
    for _, x := range x {
        x := x + 'A' - 'a'
        fmt.Printf("%c", x) // "HELLO" (one letter per iteration)
    }
}

```

---

和 for 循环类似，if 和 switch 语句也会在条件部分创建隐式词法域，还有它们对应的执行体词法域。

下面的if-else测试链演示了x和y的有效作用域范围：

```go
if x := f(); x == 0 {
    fmt.Println(x)
} else if y := g(x); x == y {
    fmt.Println(x, y)
} else {
    fmt.Println(x, y)
}
fmt.Println(x, y) // compile error: x and y are not visible here

```

第二个 if 语句嵌套在第一个内部，因此第一个 if 语句条件初始化词法域声明的变量在第二个if中也可以访问。

switch语句的每个分支也有类似的词法域规则：条件部分为一个隐式词法域，然后是每个分支的词法域。

---

在包级别，声明的顺序并不会影响作用域范围，因此一个先声明的可以引用它自身或者是引用后面的一个声明，这可以让我们定义一些相互嵌套或递归的类型或函数。

但是如果一个变量或常量递归引用了自身，则会产生编译错误。

在这个程序中:

```go
if f, err := os.Open(fname); err != nil { // compile error: unused: f
    return err
}
f.ReadByte() // compile error: undefined f
f.Close()    // compile error: undefined f

```

变量f的作用域只在if语句内，因此后面的语句将无法引入它，这将导致编译错误。

你可能会收到一个局部变量f没有声明的错误提示，具体错误信息依赖编译器的实现。

通常需要在if之前声明变量，这样可以确保后面的语句依然可以访问变量：

```go
f, err := os.Open(fname)
if err != nil {
    return err
}
f.ReadByte()
f.Close()

```

你可能会考虑通过将ReadByte和Close移动到if的else块来解决这个问题：

```go
if f, err := os.Open(fname); err != nil {
    return err
} else {
    // f and err are visible here too
    f.ReadByte()
    f.Close()
}

```

但这不是Go语言推荐的做法，Go语言的习惯是在if中处理错误然后直接返回，这样可以确保正常执行的语句不需要代码缩进。

---

要特别注意短变量声明语句的作用域范围

考虑下面的程序，它的目的是获取当前的工作目录然后保存到一个包级的变量中。这本来可以通过直接调用 `os.Getwd` 完成，但是将这个从主逻辑中分离出来可能会更好，特别是在需要处理错误的时候。

函数log.Fatalf用于打印日志信息，然后调用os.Exit(1)终止程序。

```go
var cwd string

func init() {
    cwd, err := os.Getwd() // compile error: unused: cwd
    if err != nil {
        log.Fatalf("os.Getwd failed: %v", err)
    }
}

```

虽然cwd在外部已经声明过，但是`:=`语句还是将cwd和err重新声明为新的局部变量。

因为内部声明的cwd将屏蔽外部的声明，因此上面的代码并不会正确更新包级声明的cwd变量。

由于当前的编译器会检测到局部声明的cwd并没有使用，然后报告这可能是一个错误，但是这种检测并不可靠。因为一些小的代码变更，例如增加一个局部cwd的打印语句，就可能导致这种检测失效。

```go
var cwd string

func init() {
    cwd, err := os.Getwd() // NOTE: wrong!
    if err != nil {
        log.Fatalf("os.Getwd failed: %v", err)
    }
    log.Printf("Working directory = %s", cwd)
}

```

全局的cwd变量依然是没有被正确初始化的，而且看似正常的日志输出更是让这个BUG更加隐晦。

----

有许多方式可以避免出现类似潜在的问题。

最直接的方法是通过单独声明err变量，来避免使用`:=`的简短声明方式：

```go
var cwd string

func init() {
    var err error
    cwd, err = os.Getwd()
    if err != nil {
        log.Fatalf("os.Getwd failed: %v", err)
    }
}

```

我们已经看到包、文件、声明和语句如何来表达一个程序结构。在下面的两个章节，我们将探讨数据的结构。

---



































