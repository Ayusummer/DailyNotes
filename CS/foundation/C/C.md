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

---
## [2021-12-22-Isogram](https://exercism.org/tracks/c/exercises/isogram)

---
### Instructions

> [Heterogram (literature)](https://en.wikipedia.org/wiki/Isogram)

Determine if a word or phrase is an isogram.  


An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

Examples of isograms:
- lumberjacks
- background
- downstream
- six-year-old

The word isograms, however, is not an isogram, because the s repeats.

> hyphens - 连字符

---
### 解题思路

新建一个长度为 26 默认值为 0 的整型数组, 遍历 const 字符数组, 定义一个 char ch 接收遍历到的字符, 若 ch 为大写字母则转换为小写字母, 若 ch 并非字母则继续下一步遍历, 将 ch 作为哈希表的键访问对应值, 若为 0 则说明该字符尚未出现过并将其置 1, 若为 1 则说明该字母已经出现过一次, 返回 false

也可以定义一个哈希表, 捏合上面的操作为一个哈希函数

[isogram.c](./20211222_Isogram/isogram.c)

---
### Tips

#### `Exercism Segmentation fault (core dumped)`

> [Core Dump (Segmentation fault) in C/C++ - GeeksforGeeks](https://www.geeksforgeeks.org/core-dump-segmentation-fault-c-cpp/)

通常情况该这是由于访问了不该访问的内存导致的, 可以通过 `valgrind` 来检查

具体情况可能是数组下标越界, 或者是指针指向的内存已被释放或其他原因

在做此题的过程中检查了半天问题, 最终发现是 TestCase 中有 NULL, 我忘记考虑 NULL 的情况了

---
#### 散点

- 大写字母和小写字母可以通过 `- 'A'` 和 `- 'a'` 获取其在字母表中的相对位置
- 字符串以 '\0' 结尾, 可借此遍历字符数组

---
## [2021-12-23-Hamming](https://exercism.org/tracks/c/exercises/hamming)

> hamming distance 汉明间距；代码间距；汉娩距  
> hamming code 汉明码（误差检验及纠正码）

### Instructions

[The Calculating Point Mutations problem at Rosalind](https://rosalind.info/problems/hamm/)

Calculate the Hamming Distance between two DNA strands.  
计算两个 DNA 片段的汉明间距

Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing, which they achieve by dividing into daughter cells. In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!  
身体由细胞组成, 细胞内含 DNA. 细胞每天都会衰老, 需要代谢, 它们通过分裂来完成代谢. 实际上, 人类的身体在一生中经历了 10 千万亿次细胞分裂.

When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "Hamming Distance".  
细胞分裂时, DNA 也会复制. 有时候会发生错误, 有些 DNA 片段会被编码为错误的信息. 如果我们比较两个 DNA 片段, 并计算两个片段之间的不同, 我们可以看到产生了多少错误. 这称为 "汉明距".

We read DNA using the letters C,A,G and T. Two strands might look like this:

```
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
```

They have 7 differences, and therefore the Hamming Distance is 7.

The Hamming Distance is useful for lots of things in science, not just biology, so it's a nice phrase to be familiar with :)

The Hamming distance is only defined for sequences of equal length, so an attempt to calculate it between sequences of different lengths should not work. The general handling of this situation (e.g., raising an exception vs returning a special value) may differ between languages.

---
### 解题思路

- `hamming.h`
  ```C
  #ifndef HAMMING_H
  #define HAMMING_H

  int compute(const char *lhs, const char *rhs);

  #endif
  ```  
  就只有一个计算函数
- Tests
  ```C
  #include "test-framework/unity.h"
  #include "hamming.h"
  void setUp(void)
  {
  }
  void tearDown(void)
  {
  }
  static void test_empty_strands(void)
  {
    TEST_ASSERT_EQUAL(0, compute("", ""));
  }
  static void test_single_identical_strands(void)
  {
    TEST_IGNORE();   // delete this line to run test
    TEST_ASSERT_EQUAL(0, compute("A", "A"));
  }
  static void test_single_letter_different_strands(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(1, compute("G", "T"));
  }
  static void test_long_identical_strands(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(0, compute("GGACTGAAATCTG", "GGACTGAAATCTG"));
  }
  static void test_long_different_strands(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(9, compute("GGACGGATTCTG", "AGGACGGATTCT"));
  }
  static void test_disallow_first_strand_when_longer(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(-1, compute("AATG", "AAA"));
  }
  static void test_disallow_second_strand_when_longer(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(-1, compute("ATA", "AGTG"));
  }
  static void test_disallow_empty_first_strand(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(-1, compute("", "G"));
  }
  static void test_disallow_empty_second_strand(void)
  {
    TEST_IGNORE();
    TEST_ASSERT_EQUAL(-1, compute("G", ""));
  }
  int main(void)
  {
    UnityBegin("test_hamming.c");
    RUN_TEST(test_empty_strands);
    RUN_TEST(test_single_identical_strands);
    RUN_TEST(test_single_letter_different_strands);
    RUN_TEST(test_long_identical_strands);
    RUN_TEST(test_long_different_strands);
    RUN_TEST(test_disallow_first_strand_when_longer);
    RUN_TEST(test_disallow_second_strand_when_longer);
    RUN_TEST(test_disallow_empty_first_strand);
    RUN_TEST(test_disallow_empty_second_strand);
    return UnityEnd();
  }
  ```  
  观察测试用例可以发现, 当两字符串长度不同时返回 -1  
  当两字符串长度相同时且两字符串完全一致时,返回 0, 否则返回不同的字符数

那这就没什么难度了, 用 `string.h` 中的 `strlen` 函数来计算字符串长度, 不同则返回 -1  
否则定义并初始化计数器, 遍历字符串找出不同字符数目即可

> [Hamming.c](./20211223_Hamming/Hamming.c)

---
