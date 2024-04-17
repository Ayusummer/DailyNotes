# CH3.基础数据类型


Go语言将数据类型分为四类：基础类型、复合类型、引用类型和接口类型

本章介绍基础类型，包括：数字、字符串和布尔型。

复合数据类型——数组（§4.1）和结构体（§4.2）——是通过组合简单类型，来表达更加复杂的数据结构。

引用类型包括指针（§2.3.2）、切片（§4.2)）、字典（§4.3）、函数（§5）、通道（§8），虽然数据种类很多，但它们都是对程序中一个变量或状态的间接引用。

这意味着对任一引用类型数据的修改都会影响所有该引用的拷贝。

我们将在第7章介绍接口类型。

---

- [CH3.基础数据类型](#ch3基础数据类型)
	- [CH3.1.整型](#ch31整型)
	- [CH3.2. 浮点数](#ch32-浮点数)
		- [练习3.1](#练习31)
		- [练习3.2](#练习32)
		- [练习3.3](#练习33)
		- [练习3.4](#练习34)
	- [CH3.3.复数](#ch33复数)
		- [练习3.5](#练习35)
		- [练习3.6](#练习36)
		- [练习3.7](#练习37)
		- [练习3.8](#练习38)
		- [练习3.9](#练习39)
	- [CH3.4.布尔型](#ch34布尔型)
	- [CH3.5.字符串](#ch35字符串)
		- [练习3.10](#练习310)
		- [练习 3.11](#练习-311)


---

## CH3.1.整型

> [整型 - Go语言圣经 (golang-china.github.io)](https://golang-china.github.io/gopl-zh/ch3/ch3-01.html)

Go语言的数值类型包括几种不同大小的整数、浮点数和复数。

每种数值类型都决定了对应的大小范围和是否支持正负符号。

让我们先从整数类型开始介绍。

---

Go语言同时提供了有符号和无符号类型的整数运算。

这里有 `int8`、`int16`、`int32` 和 `int64` 四种截然不同大小的有符号整数类型，分别对应8、16、32、64 bit大小的有符号整数，与此对应的是 `uint8`、`uint16`、`uint32` 和 `uint64` 四种无符号整数类型。

- 有符号整数
  - `int8`: `-2^7 ~ 2^7-1` (-128 ~ 127)
  - `int16`: `-2^15 ~ 2^15-1` (-32768 ~ 32767)
  - `int32`: `-2^31 ~ 2^31-1` (-2147483648 ~ 2147483647)
  - `int64`: `-2^63 ~ 2^63-1` (-9223372036854775808 ~ 9223372036854775807)
- 无符号整数
  - `uint8`: `0 ~ 2^8-1` (0 ~ 255)
  - `uint16`: `0 ~ 2^16-1` (0 ~ 65535)
  - `uint32`: `0 ~ 2^32-1` (0 ~ 4294967295)
  - `uint64`: `0 ~ 2^64-1` (0 ~ 18446744073709551615)

---

这里还有两种一般对应特定CPU平台机器字大小的有符号和无符号整数 int 和 uint；

其中 int 是应用最广泛的数值类型。这两种类型都有同样的大小，32 或 64 bit，但是我们不能对此做任何的假设；

因为不同的编译器即使在相同的硬件平台上可能产生不同的大小。

---

Unicode 字符 rune 类型是和int32等价的类型，通常用于表示一个Unicode码点。这两个名称可以互换使用。同样byte也是uint8类型的等价类型，byte类型一般用于强调数值是一个原始的数据而不是一个小的整数。

---

最后，还有一种无符号的整数类型 `uintptr`，没有指定具体的bit大小但是足以容纳指针。

`uintptr` 类型只有在底层编程时才需要，特别是Go语言和C语言函数库或操作系统接口相交互的地方。

我们将在第十三章的unsafe包相关部分看到类似的例子。

---

不管它们的具体大小，int、uint和uintptr是不同类型的兄弟类型。

其中int和int32也是不同的类型，即使int的大小也是32bit，在需要将int当作int32类型的地方需要一个显式的类型转换操作，反之亦然

---

其中有符号整数采用2的补码形式表示，也就是最高bit位用来表示符号位，一个n-bit的有符号数的值域是从-2n-1到2n-1-1。

无符号整数的所有bit位都用于表示非负数，值域是0到2n-1。

例如，int8类型整数的值域是从-128到127，而uint8类型整数的值域是从0到255。

---

下面是Go语言中关于算术运算、逻辑运算和比较运算的二元运算符，它们按照优先级递减的顺序排列：

```go
*      /      %      <<       >>     &       &^
+      -      |      ^
==     !=     <      <=       >      >=
&&
||

```

二元运算符有五种优先级。在同一个优先级，使用左优先结合规则，但是使用括号可以明确优先顺序，使用括号也可以用于提升优先级，例如`mask & (1 << 28)`。

对于上表中前两行的运算符，例如+运算符还有一个与赋值相结合的对应运算符+=，可以用于简化赋值语句。

-----

算术运算符`+`、`-`、`*`和`/`可以适用于整数、浮点数和复数，但是取模运算符%仅用于整数间的运算。

对于不同编程语言，%取模运算的行为可能并不相同。

在Go语言中，**%取模运算符的符号和被取模数的符号总是一致的**，因此`-5%3`和`-5%-3`结果都是-2。

除法运算符`/`的行为则依赖于操作数是否全为整数，比如`5.0/4.0`的结果是1.25，但是5/4的结果是1，因为整数除法会向着0方向截断余数。

----

一个算术运算的结果，不管是有符号或者是无符号的，如果需要更多的bit位才能正确表示的话，就说明计算结果是溢出了。超出的高位的bit位部分将被丢弃。

如果原始的数值是有符号类型，而且最左边的bit位是1的话，那么最终结果可能是负的，例如int8的例子：

```go
var u uint8 = 255
fmt.Println(u, u+1, u*u) // "255 0 1"

var i int8 = 127
fmt.Println(i, i+1, i*i) // "127 -128 1"

```

---

两个相同的整数类型可以使用下面的二元比较运算符进行比较；比较表达式的结果是布尔类型。

```go
==    等于
!=    不等于
<     小于
<=    小于等于
>     大于
>=    大于等于

```

---

事实上，布尔型、数字类型和字符串等基本类型都是可比较的，也就是说两个相同类型的值可以用==和!=进行比较。

此外，整数、浮点数和字符串可以根据比较结果排序。许多其它类型的值可能是不可比较的，因此也就可能是不可排序的。

对于我们遇到的每种类型，我们需要保证规则的一致性。

这里是一元的加法和减法运算符：

```go
+      一元加法（无效果）
-      负数
```

对于整数，+x是0+x的简写，-x则是0-x的简写；对于浮点数和复数，+x就是x，-x则是x 的负数。

---

Go语言还提供了以下的bit位操作运算符，前面4个操作运算符并不区分是有符号还是无符号数：

```go
&      位运算 AND
|      位运算 OR
^      位运算 XOR
&^     位清空（AND NOT）
<<     左移
>>     右移
```

位操作运算符`^`作为二元运算符时是按位异或（XOR），当用作一元运算符时表示按位取反；也就是说，它返回一个每个bit位都取反的数。

位操作运算符`&^`用于按位置零（AND NOT）：如果对应y中bit位为1的话，表达式`z = x &^ y`结果z的对应的bit位为0，否则z对应的bit位等于x相应的bit位的值。

---

下面的代码演示了如何使用位操作解释uint8类型值的8个独立的bit位。

它使用了Printf函数的%b参数打印二进制格式的数字；

其中%08b中08表示打印至少8个字符宽度，不足的前缀部分用0填充。

```go
var x uint8 = 1<<1 | 1<<5
var y uint8 = 1<<1 | 1<<2

fmt.Printf("%08b\n", x) // "00100010", the set {1, 5}
fmt.Printf("%08b\n", y) // "00000110", the set {1, 2}

fmt.Printf("%08b\n", x&y)  // "00000010", the intersection {1}
fmt.Printf("%08b\n", x|y)  // "00100110", the union {1, 2, 5}
fmt.Printf("%08b\n", x^y)  // "00100100", the symmetric difference {2, 5}
fmt.Printf("%08b\n", x&^y) // "00100000", the difference {5}

for i := uint(0); i < 8; i++ {
    if x&(1<<i) != 0 { // membership test
        fmt.Println(i) // "1", "5"
    }
}

fmt.Printf("%08b\n", x<<1) // "01000100", the set {2, 6}
fmt.Printf("%08b\n", x>>1) // "00010001", the set {0, 4}

```

> （6.5节给出了一个可以远大于一个字节的整数集的实现。）

在`x<<n`和`x>>n`移位运算中，决定了移位操作的bit数部分必须是无符号数；

被操作的x可以是有符号数或无符号数。

算术上，一个`x<<n`左移运算等价于乘以$2^n$，一个`x>>n`右移运算等价于除以$2^n$​。

---

左移运算用零填充右边空缺的bit位，无符号数的右移运算也是用0填充左边空缺的bit位，但是有符号数的右移运算会用符号位的值填充左边空缺的bit位。因为这个原因，最好用无符号运算，这样你可以将整数完全当作一个bit位模式处理。

---

尽管Go语言提供了无符号数的运算，但即使数值本身不可能出现负数，我们还是倾向于使用有符号的int类型，就像数组的长度那样，虽然使用uint无符号类型似乎是一个更合理的选择。事实上，内置的len函数返回一个有符号的int，我们可以像下面例子那样处理逆序循环。

```go
medals := []string{"gold", "silver", "bronze"}
for i := len(medals) - 1; i >= 0; i-- {
    fmt.Println(medals[i]) // "bronze", "silver", "gold"
}
```

另一个选择对于上面的例子来说将是灾难性的。

如果len函数返回一个无符号数，那么i也将是无符号的uint类型，然后条件`i >= 0`则永远为真。

在三次迭代之后，也就是`i == 0`时，i--语句将不会产生-1，而是变成一个uint类型的最大值（可能是$2^{64}-1$​​），然后medals[i]表达式运行时将发生panic异常（§5.9），也就是试图访问一个slice范围以外的元素。

出于这个原因，无符号数往往只有在位运算或其它特殊的运算场景才会使用，就像bit集合、分析二进制文件格式或者是哈希和加密操作等。它们通常并不用于仅仅是表达非负数量的场合。

----

一般来说，需要一个显式的转换将一个值从一种类型转化为另一种类型，并且算术和逻辑运算的二元操作中必须是相同的类型。

虽然这偶尔会导致需要很长的表达式，但是它消除了所有和类型相关的问题，而且也使得程序容易理解。

在很多场景，会遇到类似下面代码的常见的错误：

```go
var apples int32 = 1
var oranges int16 = 2
var compote int = apples + oranges // compile error
```

当尝试编译这三个语句时，将产生一个错误信息：

```go
invalid operation: apples + oranges (mismatched types int32 and int16)
```

这种类型不匹配的问题可以有几种不同的方法修复，最常见方法是将它们都显式转型为一个常见类型：

```go
var compote = int(apples) + int(oranges)
```

如2.5节所述，对于每种类型T，如果转换允许的话，类型转换操作T(x)将x转换为T类型。许多整数之间的相互转换并不会改变数值；它们只是告诉编译器如何解释这个值。

但是对于将一个大尺寸的整数类型转为一个小尺寸的整数类型，或者是将一个浮点数转为整数，可能会改变数值或丢失精度：

```go
f := 3.141 // a float64
i := int(f)
fmt.Println(f, i) // "3.141 3"
f = 1.99
fmt.Println(int(f)) // "1"
```

浮点数到整数的转换将丢失任何小数部分，然后向数轴零方向截断。

你应该避免对可能会超出目标类型表示范围的数值做类型转换，因为截断的行为可能依赖于具体的实现：

```go
f := 1e100  // a float64
i := int(f) // 结果依赖于具体实现
```

任何大小的整数字面值都可以用以0开始的八进制格式书写，例如0666；

或用以0x或0X开头的十六进制格式书写，例如0xdeadbeef。

十六进制数字可以用大写或小写字母。

如今八进制数据通常用于POSIX操作系统上的文件访问权限标志，十六进制数字则更强调数字值的bit位模式。

当使用fmt包打印一个数值时，我们可以用%d、%o或%x参数控制输出的进制格式，就像下面的例子：

```go
o := 0666
fmt.Printf("%d %[1]o %#[1]o\n", o) // "438 666 0666"
x := int64(0xdeadbeef)
fmt.Printf("%d %[1]x %#[1]x %#[1]X\n", x)
// Output:
// 3735928559 deadbeef 0xdeadbeef 0XDEADBEEF
```

请注意fmt的两个使用技巧。

- 通常Printf格式化字符串包含多个%参数时将会包含对应相同数量的额外操作数，但是%之后的`[1]`副词告诉Printf函数再次使用第一个操作数。

- 第二，%后的`#`副词告诉Printf在用%o、%x或%X输出时生成0、0x或0X前缀。

  ---

- 在Go语言中，以0开头的数字代表这是一个八进制数，`0666` 表示八进制的666

- `fmt.Printf("%d %[1]o %#[1]o\n", o)`

  - ``%d`表示以十进制输出
  - `%[1]o`表示以八进制输出
  - `%#[1]o`表示以带有`0`前缀的八进制输出
  - `[1]`是一个参数索引，表示使用第一个参数

----

字符面值通过一对单引号直接包含对应字符。最简单的例子是ASCII中类似'a'写法的字符面值，

但是我们也可以通过转义的数值来表示任意的Unicode码点对应的字符，马上将会看到这样的例子。

字符使用`%c`参数打印，或者是用`%q`参数打印带单引号的字符：

```go
ascii := 'a'
unicode := '国'
newline := '\n'
fmt.Printf("%d %[1]c %[1]q\n", ascii)   // "97 a 'a'"
fmt.Printf("%d %[1]c %[1]q\n", unicode) // "22269 国 '国'"
fmt.Printf("%d %[1]q\n", newline)       // "10 '\n'"
```


---

## CH3.2. 浮点数

> [浮点数 - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch3/ch3-02.html)

Go语言提供了两种精度的浮点数，float32和float64。它们的算术规范由IEEE754浮点数国际标准定义，该浮点数规范被所有现代的CPU支持。

---

这些浮点数类型的取值范围可以从很微小到很巨大。

浮点数的范围极限值可以在math包找到。

常量 `math.MaxFloat32` 表示 float32 能表示的最大数值，大约是 3.4e38；
- `float32` 是一种单精度浮点数类型，其存储结构由 IEEE 754 浮点数标准定义。它由 32 位（或 4 字节）组成，其中：
  
  - 1 位用于表示符号（S）
  - 8 位用于表示指数（E）
  - 23 位用于表示尾数（M）
  
  计算公式为：$(-1)^S * 2^{E-127} * 1.M$​
  
  `float32` 的最大值是通过将指数部分设置为最大值（255，但不包括全 1，即 254），并将尾数部分设置为最大值（即所有位都是 1）来计算的。
  
  ```
  2^(254-127) * 1.111...111 (二进制)
  ≈2^127 * 2 = 2^128 ≈ 3.4 * 10^38
  ```

对应的 `math.MaxFloat64` 常量大约是1.8e308。它们分别能表示的最小值近似为1.4e-45和4.9e-324。

---

一个float32类型的浮点数可以提供大约6个十进制数的精度(2^23 等于 8,388,608)，而float64则可以提供约15个十进制数的精度；

通常应该优先使用float64类型，因为float32类型的累计计算误差很容易扩散，并且float32能精确表示的正整数并不是很大（译注：因为float32的有效bit位只有23个，其它的bit位用于指数和符号；

当整数大于23bit能表达的范围时，float32的表示将出现误差）：

```go
var f float32 = 16777216 // 1 << 24
fmt.Println(f == f+1)    // "true"!
```

> $2^{24}$ 是 16,777,216
>
> ![image-20240416112623152](http://cdn.ayusummer233.top/DailyNotes/image-20240416112623152.png)

浮点数的字面值可以直接写小数部分，像这样：

```go
const e = 2.71828 // (approximately)
```

小数点前面或后面的数字都可能被省略（例如.707或1.）。很小或很大的数最好用科学计数法书写，通过e或E来指定指数部分：

```go
const Avogadro = 6.02214129e23  // 阿伏伽德罗常数
const Planck   = 6.62606957e-34 // 普朗克常数
```

用Printf函数的 `%g` 参数打印浮点数，将采用更紧凑的表示形式打印，并提供足够的精度，但是对应表格的数据，使用 `%e`（带指数）或 `%f` 的形式打印可能更合适。

所有的这三个打印形式都可以指定打印的宽度和控制打印精度。

```go
for x := 0; x < 8; x++ {
    fmt.Printf("x = %d e^x = %8.3f\n", x, math.Exp(float64(x)))
}
```

- `%8.3f` 表示打印浮点数，宽度为8，精度为3。

![image-20240416113415561](http://cdn.ayusummer233.top/DailyNotes/image-20240416113415561.png)

---

math包中除了提供大量常用的数学函数外，还提供了IEEE754浮点数标准中定义的特殊值的创建和测试：正无穷大和负无穷大，分别用于表示太大溢出的数字和除零的结果；

还有NaN非数，一般用于表示无效的除法操作结果0/0或Sqrt(-1).

```go
var z float64
fmt.Println(z, -z, 1/z, -1/z, z/z) // "0 -0 +Inf -Inf NaN"
```

> 在大多数编程语言中，包括 Go，除数为 0 是不合法的，会导致运行时错误。然而，对于浮点数的除法，规则有所不同。
>
> 在 IEEE 754 浮点数标准中，浮点数的除法定义了一些特殊情况：
>
> - 正浮点数除以 0 结果是正无穷（`+Inf`）。
> - 负浮点数除以 0 结果是负无穷（`-Inf`）。
> - 0 除以 0 的结果是 `NaN`（不是一个数字）。
>
> 这些规则允许数学运算在遇到这些特殊情况时继续进行，而不是立即停止并报错
>
> ![image-20240416113934905](http://cdn.ayusummer233.top/DailyNotes/image-20240416113934905.png)

---

函数  `math.IsNaN` 用于测试一个数是否是非数NaN，math.NaN则返回非数对应的值。虽然可以用math.NaN来表示一个非法的结果，但是测试一个结果是否是非数NaN则是充满风险的，因为NaN和任何数都是不相等的

> 译注：在浮点数中，NaN、正无穷大和负无穷大都不是唯一的，每个都有非常多种的bit模式表示
>
> ```go
> nan := math.NaN()
> fmt.Println(nan == nan, nan < nan, nan > nan) // "false false false"
> ```
>
> ![image-20240416114141463](http://cdn.ayusummer233.top/DailyNotes/image-20240416114141463.png)

---

如果一个函数返回的浮点数结果可能失败，最好的做法是用单独的标志报告失败，像这样：

```go
func compute() (value float64, ok bool) {
    // ...
    if failed {
        return 0, false
    }
    return result, true
}
```

-----

接下来的程序演示了通过浮点计算生成的图形。

它是带有两个参数的 `z = f(x, y)` 函数的三维形式，使用了可缩放矢量图形（SVG）格式输出，SVG是一个用于矢量线绘制的XML标准。

图3.1显示了 `sin(r)/r` 函数的输出图形，其中r是`sqrt(x*x+y*y)`。

![img](http://cdn.ayusummer233.top/DailyNotes/ch3-01.png)

```go
// Surface computes an SVG rendering of a 3-D surface function.
package main

import (
    "fmt"
    "math"
)

const (
    width, height = 600, 320            // canvas size in pixels
    cells         = 100                 // number of grid cells
    xyrange       = 30.0                // axis ranges (-xyrange..+xyrange)
    xyscale       = width / 2 / xyrange // pixels per x or y unit
    zscale        = height * 0.4        // pixels per z unit
    angle         = math.Pi / 6         // angle of x, y axes (=30°)
)

var sin30, cos30 = math.Sin(angle), math.Cos(angle) // sin(30°), cos(30°)

func main() {
    fmt.Printf("<svg xmlns='http://www.w3.org/2000/svg' "+
        "style='stroke: grey; fill: white; stroke-width: 0.7' "+
        "width='%d' height='%d'>", width, height)
    for i := 0; i < cells; i++ {
        for j := 0; j < cells; j++ {
            ax, ay := corner(i+1, j)
            bx, by := corner(i, j)
            cx, cy := corner(i, j+1)
            dx, dy := corner(i+1, j+1)
            fmt.Printf("<polygon points='%g,%g %g,%g %g,%g %g,%g'/>\n",
                ax, ay, bx, by, cx, cy, dx, dy)
        }
    }
    fmt.Println("</svg>")
}

func corner(i, j int) (float64, float64) {
    // Find point (x,y) at corner of cell (i,j).
    x := xyrange * (float64(i)/cells - 0.5)
    y := xyrange * (float64(j)/cells - 0.5)

    // Compute surface height z.
    z := f(x, y)

    // Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
    sx := width/2 + (x-y)*cos30*xyscale
    sy := height/2 + (x+y)*sin30*xyscale - z*zscale
    return sx, sy
}

func f(x, y float64) float64 {
    r := math.Hypot(x, y) // distance from (0,0)
    return math.Sin(r) / r
}

```

要注意的是corner函数返回了两个结果，分别对应每个网格顶点的坐标参数。

要解释这个程序是如何工作的需要一些基本的几何学知识，但是我们可以跳过几何学原理，因为程序的重点是演示浮点数运算。

程序的本质是三个不同的坐标系中映射关系，如图3.2所示。

第一个是100x100的二维网格，对应整数坐标(i,j)，从远处的(0,0)位置开始。我们从远处向前面绘制，因此远处先绘制的多边形有可能被前面后绘制的多边形覆盖。

第二个坐标系是一个三维的网格浮点坐标(x,y,z)，其中x和y是i和j的线性函数，通过平移转换为网格单元的中心，然后用xyrange系数缩放。高度z是函数f(x,y)的值。

第三个坐标系是一个二维的画布，起点(0,0)在左上角。画布中点的坐标用(sx,sy)表示。我们使用等角投影将三维点(x,y,z)投影到二维的画布中。

![img](http://cdn.ayusummer233.top/DailyNotes/ch3-02.png)

画布中从远处到右边的点对应较大的x值和较大的y值。并且画布中x和y值越大，则对应的z值越小。x和y的垂直和水平缩放系数来自30度角的正弦和余弦值。z的缩放系数0.4，是一个任意选择的参数。

对于二维网格中的每一个网格单元，main函数计算单元的四个顶点在画布中对应多边形ABCD的顶点，其中B对应(i,j)顶点位置，A、C和D是其它相邻的顶点，然后输出SVG的绘制指令。

![image-20240416134423142](http://cdn.ayusummer233.top/DailyNotes/image-20240416134423142.png)


---

### 练习3.1

**练习 3.1：** 如果f函数返回的是无限制的float64值，那么SVG文件可能输出无效的多边形元素（虽然许多SVG渲染器会妥善处理这类问题）。修改程序跳过无效的多边形

这题需要在调用 `f()` 后加个处理, 标记返回为 NAN 以及 +-INF

```go
// Surface computes an SVG rendering of a 3-D surface function.
package main

import (
	"fmt"
	"math"
)

const (
	width, height = 600, 320            // canvas size in pixels
	cells         = 100                 // number of grid cells
	xyrange       = 30.0                // axis ranges (-xyrange..+xyrange)
	xyscale       = width / 2 / xyrange // pixels per x or y unit
	zscale        = height * 0.4        // pixels per z unit
	angle         = math.Pi / 6         // angle of x, y axes (=30°)
)

var sin30, cos30 = math.Sin(angle), math.Cos(angle) // sin(30°), cos(30°)

func main() {
	fmt.Printf("<svg xmlns='http://www.w3.org/2000/svg' "+
		"style='stroke: grey; fill: white; stroke-width: 0.7' "+
		"width='%d' height='%d'>", width, height)
	for i := 0; i < cells; i++ {
		for j := 0; j < cells; j++ {
			ax, ay, validA := corner(i+1, j)
			bx, by, validB := corner(i, j)
			cx, cy, validC := corner(i, j+1)
			dx, dy, validD := corner(i+1, j+1)
			if validA && validB && validC && validD {
				fmt.Printf("<polygon points='%g,%g %g,%g %g,%g %g,%g'/>\n",
					ax, ay, bx, by, cx, cy, dx, dy)
			}
		}
	}
	fmt.Println("</svg>")
}

func corner(i, j int) (float64, float64, bool) {
	// Find point (x,y) at corner of cell (i,j).
	x := xyrange * (float64(i)/cells - 0.5)
	y := xyrange * (float64(j)/cells - 0.5)

	// Compute surface height z.
	z := f(x, y)

	// If z is infinite or NaN, return invalid.
	if math.IsInf(z, 0) || math.IsNaN(z) {
		return 0, 0, false
	}

	// Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
	sx := width/2 + (x-y)*cos30*xyscale
	sy := height/2 + (x+y)*sin30*xyscale - z*zscale
	return sx, sy, true
}

func f(x, y float64) float64 {
	r := math.Hypot(x, y) // distance from (0,0)
	return math.Sin(r) / r
}

```

> ![image-20240416140417471](http://cdn.ayusummer233.top/DailyNotes/image-20240416140417471.png)
>
> ![image-20240416140609025](http://cdn.ayusummer233.top/DailyNotes/image-20240416140609025.png)
>
> ![image-20240416140651581](http://cdn.ayusummer233.top/DailyNotes/image-20240416140651581.png)

---

### 练习3.2

**练习 3.2：** 试验math包中其他函数的渲染图形。你是否能输出一个egg box、moguls或a saddle图案?

绘图本身不是我们学习这章的目的, 这题的目的主要在于让我们多认识几个 `math` 包的函数, 例如

- `math.Sin(r)`: 正弦函数

  ![image-20240416142357271](http://cdn.ayusummer233.top/DailyNotes/image-20240416142357271.png)

- `math.Hypot(x, y)`: 求两个数的平方和的平方根

  ![image-20240416142438474](http://cdn.ayusummer233.top/DailyNotes/image-20240416142438474.png)

- `math.IsInf(z, 0)`: 判断一个数是否是正无穷大或负无穷大

  ![image-20240416142507139](http://cdn.ayusummer233.top/DailyNotes/image-20240416142507139.png)

- `math.IsNaN(z)`: 判断一个数是否是非数

  ![image-20240416142524844](http://cdn.ayusummer233.top/DailyNotes/image-20240416142524844.png)
  
- `math.Pow(x, y)`: 求 x 的 y 次方

  ![image-20240416142725663](http://cdn.ayusummer233.top/DailyNotes/image-20240416142725663.png)

> ```go
> // Surface computes an SVG rendering of a 3-D surface function.
> package main
> 
> import (
> 	"fmt"
> 	"math"
> 	"os"
> )
> 
> const (
> 	width, height = 600, 320            // canvas size in pixels
> 	cells         = 100                 // number of grid cells
> 	xyrange       = 30.0                // axis ranges (-xyrange..+xyrange)
> 	xyscale       = width / 2 / xyrange // pixels per x or y unit
> 	zscale        = height * 0.4        // pixels per z unit
> 	angle         = math.Pi / 6         // angle of x, y axes (=30°)
> )
> 
> var sin30, cos30 = math.Sin(angle), math.Cos(angle) // sin(30°), cos(30°)
> 
> func main() {
> 	draw("eggbox.svg", corner)
> 	draw("moguls.svg", corner_moguls)
> 	draw("saddle.svg", corner_saddle)
> }
> 
> func draw(out_path string, function func(i, j int) (float64, float64, bool)) {
> 	// 输出文件
> 	f, err := os.Create(out_path)
> 	if err != nil {
> 		fmt.Fprintf(os.Stderr, "create file: %v\n", err)
> 		return
> 	}
> 	defer f.Close()
> 
> 	fmt.Printf("<svg xmlns='http://www.w3.org/2000/svg' "+
> 		"style='stroke: grey; fill: white; stroke-width: 0.7' "+
> 		"width='%d' height='%d'>", width, height)
> 	fmt.Fprintf(f, "<svg xmlns='http://www.w3.org/2000/svg' "+
> 		"style='stroke: grey; fill: white; stroke-width: 0.7' "+
> 		"width='%d' height='%d'>", width, height)
> 
> 	for i := 0; i < cells; i++ {
> 		for j := 0; j < cells; j++ {
> 			ax, ay, validA := function(i+1, j)
> 			bx, by, validB := function(i, j)
> 			cx, cy, validC := function(i, j+1)
> 			dx, dy, validD := function(i+1, j+1)
> 			if validA && validB && validC && validD {
> 				fmt.Printf("<polygon points='%g,%g %g,%g %g,%g %g,%g'/>\n",
> 					ax, ay, bx, by, cx, cy, dx, dy)
> 				fmt.Fprintf(f, "<polygon points='%g,%g %g,%g %g,%g %g,%g'/>\n",
> 					ax, ay, bx, by, cx, cy, dx, dy)
> 			}
> 		}
> 	}
> 	fmt.Println("</svg>")
> }
> 
> func corner(i, j int) (float64, float64, bool) {
> 	// Find point (x,y) at corner of cell (i,j).
> 	x := xyrange * (float64(i)/cells - 0.5)
> 	y := xyrange * (float64(j)/cells - 0.5)
> 
> 	// Compute surface height z.
> 	// z := f(x, y)
> 	z := eggBox(x, y)
> 
> 	// If z is infinite or NaN, return invalid.
> 	if math.IsInf(z, 0) || math.IsNaN(z) {
> 		return 0, 0, false
> 	}
> 
> 	// Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
> 	sx := width/2 + (x-y)*cos30*xyscale
> 	sy := height/2 + (x+y)*sin30*xyscale - z*zscale
> 	return sx, sy, true
> }
> 
> func corner_moguls(i, j int) (float64, float64, bool) {
> 	// Find point (x,y) at corner of cell (i,j).
> 	x := xyrange * (float64(i)/cells - 0.5)
> 	y := xyrange * (float64(j)/cells - 0.5)
> 
> 	// Compute surface height z.
> 	z := moguls(x, y)
> 
> 	// If z is infinite or NaN, return invalid.
> 	if math.IsInf(z, 0) || math.IsNaN(z) {
> 		return 0, 0, false
> 	}
> 
> 	// Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
> 	sx := width/2 + (x-y)*cos30*xyscale
> 	sy := height/2 + (x+y)*sin30*xyscale - z*zscale
> 	return sx, sy, true
> }
> 
> func f(x, y float64) float64 {
> 	r := math.Hypot(x, y) // distance from (0,0)
> 	return math.Sin(r) / r
> }
> 
> func eggBox(x, y float64) float64 {
> 	return (math.Sin(x) + math.Sin(y)) / 10.0
> }
> 
> func moguls(x, y float64) float64 {
> 	return (math.Sin(x) * math.Sin(y)) / 10.0
> }
> 
> func corner_saddle(i, j int) (float64, float64, bool) {
> 	// Find point (x,y) at corner of cell (i,j).
> 	x := xyrange * (float64(i)/cells - 0.5)
> 	y := xyrange * (float64(j)/cells - 0.5)
> 
> 	// Compute surface height z.
> 	z := saddle(x, y)
> 
> 	// If z is infinite or NaN, return invalid.
> 	if math.IsInf(z, 0) || math.IsNaN(z) {
> 		return 0, 0, false
> 	}
> 
> 	// Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
> 	sx := width/2 + (x-y)*cos30*xyscale
> 	sy := height/2 + (x+y)*sin30*xyscale - z*zscale
> 	return sx, sy, true
> }
> 
> func saddle(x, y float64) float64 {
> 	return (math.Pow(x, 2) - math.Pow(y, 2)) / 25.0
> }
> 
> ```
>
> ![image-20240416145408266](http://cdn.ayusummer233.top/DailyNotes/image-20240416145408266.png)
>
> ![image-20240416145419222](http://cdn.ayusummer233.top/DailyNotes/image-20240416145419222.png)
>
> ![image-20240416145426987](http://cdn.ayusummer233.top/DailyNotes/image-20240416145426987.png)

---

### 练习3.3

**练习 3.3：** 根据高度给每个多边形上色，那样峰值部将是红色（#ff0000），谷部将是蓝色（#0000ff）。

这题需要在 main 函数中加一次遍历找到 z 的最大值和最小值,然后根据偏差上色

```go
// Surface computes an SVG rendering of a 3-D surface function.
package main

import (
	"fmt"
	"math"
	"os"
)

const (
	width, height = 600, 320            // canvas size in pixels
	cells         = 100                 // number of grid cells
	xyrange       = 30.0                // axis ranges (-xyrange..+xyrange)
	xyscale       = width / 2 / xyrange // pixels per x or y unit
	zscale        = height * 0.4        // pixels per z unit
	angle         = math.Pi / 6         // angle of x, y axes (=30°)
)

var sin30, cos30 = math.Sin(angle), math.Cos(angle) // sin(30°), cos(30°)

func main() {
	// 输出文件
	f, err := os.Create("output.svg")
	if err != nil {
		fmt.Fprintf(os.Stderr, "create file: %v\n", err)
		return
	}
	defer f.Close()
	fmt.Printf("<svg xmlns='http://www.w3.org/2000/svg' "+
		"style='stroke: grey; fill: white; stroke-width: 0.7' "+
		"width='%d' height='%d'>", width, height)
	fmt.Fprintf(f, "<svg xmlns='http://www.w3.org/2000/svg' "+
		"style='stroke: grey; fill: white; stroke-width: 0.7' "+
		"width='%d' height='%d'>", width, height)

	minZ, maxZ := math.Inf(1), math.Inf(-1)
	for i := 0; i < cells; i++ {
		for j := 0; j < cells; j++ {
			_, _, z1, valid1 := corner(i+1, j)
			_, _, z2, valid2 := corner(i, j)
			_, _, z3, valid3 := corner(i, j+1)
			_, _, z4, valid4 := corner(i+1, j+1)
			if valid1 && valid2 && valid3 && valid4 {
				z := (z1 + z2 + z3 + z4) / 4
				if z < minZ {
					minZ = z
				}
				if z > maxZ {
					maxZ = z
				}
			}
		}
	}

	for i := 0; i < cells; i++ {
		for j := 0; j < cells; j++ {
			ax, ay, z1, valid1 := corner(i+1, j)
			bx, by, z2, valid2 := corner(i, j)
			cx, cy, z3, valid3 := corner(i, j+1)
			dx, dy, z4, valid4 := corner(i+1, j+1)
			if valid1 && valid2 && valid3 && valid4 {
				z := (z1 + z2 + z3 + z4) / 4
				color := getColor(z, minZ, maxZ)
				fmt.Fprintf(f, "<polygon points='%g,%g %g,%g %g,%g %g,%g' style='fill: #%06x'/>\n",
					ax, ay, bx, by, cx, cy, dx, dy, color)
			}
		}
	}
	fmt.Println("</svg>")
}

func corner(i, j int) (float64, float64, float64, bool) {
	// Find point (x,y) at corner of cell (i,j).
	x := xyrange * (float64(i)/cells - 0.5)
	y := xyrange * (float64(j)/cells - 0.5)

	// Compute surface height z.
	z := f(x, y)

	// If z is infinite or NaN, return invalid.
	if math.IsInf(z, 0) || math.IsNaN(z) {
		return 0, 0, 0, false
	}

	// Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
	sx := width/2 + (x-y)*cos30*xyscale
	sy := height/2 + (x+y)*sin30*xyscale - z*zscale
	return sx, sy, z, true
}

func getColor(z, min, max float64) int {
	ratio := (z - min) / (max - min)
	r := int(255 * ratio)
	b := int(255 * (1 - ratio))
	return r<<16 | b
}

func f(x, y float64) float64 {
	r := math.Hypot(x, y) // distance from (0,0)
	return math.Sin(r) / r
}

```

![image-20240416145455279](http://cdn.ayusummer233.top/DailyNotes/image-20240416145455279.png)

> ![image-20240416145524363](http://cdn.ayusummer233.top/DailyNotes/image-20240416145524363.png)
>
> ![image-20240416145539183](http://cdn.ayusummer233.top/DailyNotes/image-20240416145539183.png)
>
> ![image-20240416145552706](http://cdn.ayusummer233.top/DailyNotes/image-20240416145552706.png)

---

### 练习3.4

**练习 3.4：** 参考1.7节Lissajous例子的函数，构造一个web服务器，用于计算函数曲面然后返回SVG数据给客户端。服务器必须设置Content-Type头部：

```go
w.Header().Set("Content-Type", "image/svg+xml")
```

> （这一步在Lissajous例子中不是必须的，因为服务器使用标准的PNG图像格式，可以根据前面的512个字节自动输出对应的头部。）允许客户端通过HTTP请求参数设置高度、宽度和颜色等参数。

```go
package main

import (
	"fmt"
	"log"
	"math"
	"net/http"
)

const (
	width, height = 600, 320            // canvas size in pixels
	cells         = 100                 // number of grid cells
	xyrange       = 30.0                // axis ranges (-xyrange..+xyrange)
	xyscale       = width / 2 / xyrange // pixels per x or y unit
	zscale        = height * 0.4        // pixels per z unit
	angle         = math.Pi / 6         // angle of x, y axes (=30°)
)

var sin30, cos30 = math.Sin(angle), math.Cos(angle) // sin(30°), cos(30°)

func generateSurface(w http.ResponseWriter) {
	fmt.Fprintf(w, "<svg xmlns='http://www.w3.org/2000/svg' "+
		"style='stroke: grey; fill: white; stroke-width: 0.7' "+
		"width='%d' height='%d'>", width, height)

	minZ, maxZ := math.Inf(1), math.Inf(-1)
	for i := 0; i < cells; i++ {
		for j := 0; j < cells; j++ {
			_, _, z1, valid1 := corner(i+1, j)
			_, _, z2, valid2 := corner(i, j)
			_, _, z3, valid3 := corner(i, j+1)
			_, _, z4, valid4 := corner(i+1, j+1)
			if valid1 && valid2 && valid3 && valid4 {
				z := (z1 + z2 + z3 + z4) / 4
				if z < minZ {
					minZ = z
				}
				if z > maxZ {
					maxZ = z
				}
			}
		}
	}

	for i := 0; i < cells; i++ {
		for j := 0; j < cells; j++ {
			ax, ay, z1, valid1 := corner(i+1, j)
			bx, by, z2, valid2 := corner(i, j)
			cx, cy, z3, valid3 := corner(i, j+1)
			dx, dy, z4, valid4 := corner(i+1, j+1)
			if valid1 && valid2 && valid3 && valid4 {
				z := (z1 + z2 + z3 + z4) / 4
				color := getColor(z, minZ, maxZ)
				fmt.Fprintf(w, "<polygon points='%g,%g %g,%g %g,%g %g,%g' style='fill: #%06x'/>\n",
					ax, ay, bx, by, cx, cy, dx, dy, color)
			}
		}
	}
	fmt.Fprintf(w, "</svg>")
}

func corner(i, j int) (float64, float64, float64, bool) {
	// Find point (x,y) at corner of cell (i,j).
	x := xyrange * (float64(i)/cells - 0.5)
	y := xyrange * (float64(j)/cells - 0.5)

	// Compute surface height z.
	z := f(x, y)

	// If z is infinite or NaN, return invalid.
	if math.IsInf(z, 0) || math.IsNaN(z) {
		return 0, 0, 0, false
	}

	// Project (x,y,z) isometrically onto 2-D SVG canvas (sx,sy).
	sx := width/2 + (x-y)*cos30*xyscale
	sy := height/2 + (x+y)*sin30*xyscale - z*zscale
	return sx, sy, z, true
}

func getColor(z, min, max float64) int {
	ratio := (z - min) / (max - min)
	r := int(255 * ratio)
	b := int(255 * (1 - ratio))
	return r<<16 | b
}

func f(x, y float64) float64 {
	r := math.Hypot(x, y) // distance from (0,0)
	return math.Sin(r) / r
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "image/svg+xml")
	generateSurface(w)
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

```

![image-20240416151121425](http://cdn.ayusummer233.top/DailyNotes/image-20240416151121425.png)



---

## CH3.3.复数

> [复数 - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch3/ch3-03.html)

Go语言提供了两种精度的复数类型：`complex64` 和 `complex128`，分别对应float32和float64两种浮点数精度。

内置的complex函数用于构建复数，内建的real和imag函数分别返回复数的实部和虚部：

```go
var x complex128 = complex(1, 2) // 1+2i
var y complex128 = complex(3, 4) // 3+4i
fmt.Println(x*y)                 // "(-5+10i)"
fmt.Println(real(x*y))           // "-5"
fmt.Println(imag(x*y))           // "10"
```

如果一个浮点数面值或一个十进制整数面值后面跟着一个i，例如3.141592i或2i，它将构成一个复数的虚部，复数的实部是0：

```go
fmt.Println(1i * 1i) // "(-1+0i)", i^2 = -1
```

在常量算术规则下，一个复数常量可以加到另一个普通数值常量（整数或浮点数、实部或虚部），我们可以用自然的方式书写复数，就像1+2i或与之等价的写法2i+1。上面x和y的声明语句还可以简化：

```go
x := 1 + 2i
y := 3 + 4i
```

复数也可以用==和!=进行相等比较。只有两个复数的实部和虚部都相等的时候它们才是相等的

> 译注：浮点数的相等比较是危险的，需要特别小心处理精度问题

----

`math/cmplx` 包提供了复数处理的许多函数，例如求复数的平方根函数和求幂函数。

```go
fmt.Println(cmplx.Sqrt(-1)) // "(0+1i)"
```

---

下面的程序使用 `complex128` 复数算法来生成一个 Mandelbrot 图像。

```go
// Mandelbrot emits a PNG image of the Mandelbrot fractal.
package main

import (
	"image"
	"image/color"
	"image/png"
	"math/cmplx"
	"os"
)

func main() {
	// 定义图片输出路径
	f, err := os.Create("mandelbrot.png")
	if err != nil {
		panic(err)
	}

	const (
		xmin, ymin, xmax, ymax = -2, -2, +2, +2
		width, height          = 1024, 1024
	)

	img := image.NewRGBA(image.Rect(0, 0, width, height))
	for py := 0; py < height; py++ {
		y := float64(py)/height*(ymax-ymin) + ymin
		for px := 0; px < width; px++ {
			x := float64(px)/width*(xmax-xmin) + xmin
			z := complex(x, y)
			// Image point (px, py) represents complex value z.
			img.Set(px, py, mandelbrot(z))
		}
	}
	png.Encode(f, img)
}

func mandelbrot(z complex128) color.Color {
	const iterations = 200
	const contrast = 15

	var v complex128
	for n := uint8(0); n < iterations; n++ {
		v = v*v + z
		if cmplx.Abs(v) > 2 {
			return color.Gray{255 - contrast*n}
		}
	}
	return color.Black
}

```

> ![image-20240416153659556](http://cdn.ayusummer233.top/DailyNotes/image-20240416153659556.png)

用于遍历 `1024x1024` 图像每个点的两个嵌套的循环对应 -2 到 +2 区间的复数平面。

程序反复测试每个点对应复数值平方值加一个增量值对应的点是否超出半径为2的圆。

- 如果超过了，通过根据预设置的逃逸迭代次数对应的灰度颜色来代替。
- 如果不是，那么该点属于Mandelbrot集合，使用黑色颜色标记。

最终程序将生成的PNG格式分形图像输出到标准输出，如图3.3所示。

![img](http://cdn.ayusummer233.top/DailyNotes/ch3-03.png)

---

### 练习3.5

**练习 3.5：** 实现一个彩色的Mandelbrot图像，使用image.NewRGBA创建图像，使用color.RGBA或color.YCbCr生成颜色。

这一题偏离了本章主题, 实际上只需要修改 `mandelbrot`函数 return 的颜色值

可以是

```go
// Mandelbrot emits a PNG image of the Mandelbrot fractal.
package main

import (
	"image"
	"image/color"
	"image/png"
	"math/cmplx"
	"os"
)

func main() {
	f, err := os.Create("mandelbrot.png")
	if err != nil {
		panic(err)
	}

	const (
		xmin, ymin, xmax, ymax = -2, -2, +2, +2
		width, height          = 1024, 1024
	)

	img := image.NewRGBA(image.Rect(0, 0, width, height))
	for py := 0; py < height; py++ {
		y := float64(py)/height*(ymax-ymin) + ymin
		for px := 0; px < width; px++ {
			x := float64(px)/width*(xmax-xmin) + xmin
			z := complex(x, y)
			img.Set(px, py, mandelbrot(z))
		}
	}
	png.Encode(f, img)
}

func mandelbrot(z complex128) color.Color {
	const iterations = 200
	const contrast = 15

	var v complex128
	for n := uint8(0); n < iterations; n++ {
		v = v*v + z
		if cmplx.Abs(v) > 2 {
			return color.RGBA{
				R: uint8(contrast * n % 255),
				G: uint8(255 - contrast*n%255),
				B: uint8((contrast * n / 2) % 255),
				A: 255,
			}
		}
	}
	return color.RGBA{0, 0, 0, 255}
}

```

> ![image-20240416155151443](http://cdn.ayusummer233.top/DailyNotes/image-20240416155151443.png)

---

### 练习3.6

**练习 3.6：** 升采样技术可以降低每个像素对计算颜色值和平均值的影响。简单的方法是将每个像素分成四个子像素，实现它。

偏离本章主题, 不写了(

----

### 练习3.7

**练习 3.7：** 另一个生成分形图像的方式是使用牛顿法来求解一个复数方程，例如$z^4-1=0$。每个起点到四个根的迭代次数对应阴影的灰度。方程根对应的点用颜色表示

偏离主题, 不写了(

----

### 练习3.8

**练习 3.8：** 通过提高精度来生成更多级别的分形。使用四种不同精度类型的数字实现相同的分形：complex64、complex128、big.Float和big.Rat。后面两种类型在math/big包声明。Float是有指定限精度的浮点数；Rat是无限精度的有理数。）

它们间的性能和内存使用对比如何？当渲染图可见时缩放的级别是多少？

不想画图了(

---

### 练习3.9

**练习 3.9：** 编写一个web服务器，用于给客户端生成分形的图像。运行客户端通过HTTP参数指定x、y和zoom参数。

和 1.7 没有本质区别, 不写了(

---

## CH3.4.布尔型

一个布尔类型的值只有两种：true和false。

if和for语句的条件部分都是布尔类型的值，并且==和<等比较操作也会产生布尔型的值。

一元操作符`!`对应逻辑非操作，因此`!true`的值为`false`，更罗嗦的说法是`( !true==false)==true`，虽然表达方式不一样，不过我们一般会采用简洁的布尔表达式，就像用x来表示`x==true`。

布尔值可以和&&（AND）和||（OR）操作符结合，并且有短路行为：如果运算符左边值已经可以确定整个布尔表达式的值，那么运算符右边的值将不再被求值，因此下面的表达式总是安全的：

```go
s != "" && s[0] == 'x'
```

其中s[0]操作如果应用于空字符串将会导致panic异常, 但如果是空字符串的话就会在 `s!=""` 短路掉, 因此不会运算 s[0] 也就不会异常

-----

因为`&&`的优先级比`||`高（助记：`&&`对应逻辑乘法，`||`对应逻辑加法，乘法比加法优先级要高），下面形式的布尔表达式是不需要加小括弧的：

```go
if 'a' <= c && c <= 'z' ||
    'A' <= c && c <= 'Z' ||
    '0' <= c && c <= '9' {
    // ...ASCII letter or digit...
}

```

---

布尔值并不会隐式转换为数字值0或1，反之亦然。必须使用一个显式的if语句辅助转换：

```go
i := 0
if b {
    i = 1
}
```

如果需要经常做类似的转换，包装成一个函数会更方便：

```go
// btoi returns 1 if b is true and 0 if false.
func btoi(b bool) int {
    if b {
        return 1
    }
    return 0
}

```

数字到布尔型的逆转换则非常简单，不过为了保持对称，我们也可以包装一个函数：

```go
// itob reports whether i is non-zero.
func itob(i int) bool { return i != 0 }
```

---

## CH3.5.字符串

> [字符串 - Go语言圣经 (gopl-zh.github.io)](https://gopl-zh.github.io/ch3/ch3-05.html)

一个字符串是一个不可改变的字节序列。

字符串可以包含任意的数据，包括byte值0，但是通常是用来包含人类可读的文本。

文本字符串通常被解释为采用UTF8编码的Unicode码点（rune）序列，我们稍后会详细讨论这个问题。

内置的len函数可以返回一个字符串中的字节数目（不是rune字符数目），索引操作s[i]返回第i个字节的字节值，i必须满足0 ≤ i< len(s)条件约束。

```go
s := "hello, world"
fmt.Println(len(s))     // "12"
fmt.Println(s[0], s[7]) // "104 119" ('h' and 'w')
```

如果试图访问超出字符串索引范围的字节将会导致panic异常：

```go
c := s[len(s)] // panic: index out of range
```

第i个字节并不一定是字符串的第i个字符，因为对于非ASCII字符的UTF8编码会要两个或多个字节。我们先简单说下字符的工作方式。



–

### 练习3.10

**练习 3.10：** 编写一个非递归版本的comma函数，使用bytes.Buffer代替字符串链接操作。



```go
```



---

### 练习 3.11

**练习 3.11**: 完善comma函数，以支持浮点数处理和一个可选的正负号的处理。

















