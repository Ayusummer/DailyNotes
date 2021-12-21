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
