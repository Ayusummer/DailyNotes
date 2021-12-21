# C

## [2021-12-20-Armstrong Numbers](https://exercism.org/tracks/c/exercises/armstrong-numbers)

### Instruction

[Narcissistic number - Wikipedia](https://en.wikipedia.org/wiki/Narcissistic_number)

An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

Armstrong number 的每一位数字的 n 次方和等于它本身(n 为该数的位数)。

For example:

9 is an Armstrong number, because $9 = 9^1 = 9$   
10 is not an Armstrong number, because $10 != 1^2 + 0^2 = 1$  
153 is an Armstrong number, because: $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$   
154 is not an Armstrong number, because: $154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190$  
Write some code to determine whether a number is an Armstrong number.

---
### 解题思路

通过循环整除10计算数字位数  
通过 %10 获取末位数字, /10 去除末位数字  
已知所有参数, 累加求和与原数字比较即可

---
### Tips

第一次用 CLion 写 C 项目, 踩了一鞋坑

#### 行分隔符

Windows 下使用 \r\n, 单独使用 \r 或 \n 要么编译报错, 要么运行奇怪  
尤其是后者, 排查了半天代码没找到逻辑错误最后才发现是先前好奇行分隔符有什么用随手改了下

---
#### CMakeList.txt

<img alt="image-20211221121538494"  src="https://cdn.ayusummer233.top/img/202112211215638.png" title="CMakeLists" />

有时候添加文件会自动变更 CMakeLists.txt, 需要留意下

---
## [2021-12-21-Resistor Color](https://exercism.org/tracks/c/exercises/resistor-color)

> Resistor - 电阻器

### Instructions

[Maud de Vries, Erik Schierboom](https://github.com/exercism/problem-specifications/issues/1458)

![image](http://cdn.ayusummer233.top/img/202112211248811.png)  

Each resistor has a resistance value.  
每个电阻器都有一个电阻值

Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
电阻器一般比较小, 所以如果将其电阻值印在上面, 就很难看

To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.
为了解决这个问题, 厂商会在电阻器上印上`颜色编码带`来表示它们的电阻值. 每个`带`有对应的位置和数值

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.
电阻器的前两个圈带有简单的编码方案: 每个颜色都映射到一个单一的数字

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands.
在这个练习中, 你要创建一个有用的程序, 以便你不必记住带的值

These colors are encoded as follows:
- Black: 0
- Brown: 1
- Red: 2
- Orange: 3
- Yellow: 4
- Green: 5
- Blue: 6
- Violet: 7
- Grey: 8
- White: 9

![schermafbeelding 2019-02-10 om 13 15 39](http://cdn.ayusummer233.top/img/202112211249031.png)

The goal of this exercise is to create a way:
这个练习的目标是创建一个方式:
- to look up the numerical value associated with a particular color band  
  查找与特定颜色带相关的数值  
- to list the different band colors  
  列出不同的颜色带

Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.  
映射颜色到数字, 当存储为数组时, 它们会映射到数组的索引: 映射最好准确否则将可能得到错误的 big values

---
### 解题思路

这题给的模板很简略, 就给了一个枚举类型的定义框架, 函数需要去看测试用例来确定返回值, 函数名以及参数

![20211221142340](https://cdn.ayusummer233.top/img/20211221142340.png)

测试用例里用到了两个函数, `color_code(WHITE)` 和 `colors()`

`color_code()` 的参数为头文件中定义的枚举类型参数, 返回值看测试用例应当是整数

`colors()` 的参数为空, 返回值看测试用例应当是一个枚举数组, 不过需要注意的是返回数组实际上返回的是一个指针, 因此则需要指针指向的数组是不可变的也即该数组不应随着函数调用结束而释放, 因此该数组应当是静态的

---
### code

[resistor_color.h](./20211221_ResistorColor/resistor_color.h)  
[resistor_color.c](./20211221_ResistorColor/resistor_color.c)

---
### Tips

#### 枚举类型

> [C语言--enum，typedef enum 枚举类型详解 - 哈哈呵h - 博客园 (cnblogs.com)](https://www.cnblogs.com/yaowen/p/4785342.html)

