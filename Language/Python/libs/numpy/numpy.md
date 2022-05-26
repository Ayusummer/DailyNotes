# 目录
- [目录](#目录)
- [numpy](#numpy)
  - [numpy基础](#numpy基础)
    - [np.linspace](#nplinspace)
      - [See Also](#see-also)
      - [Examples](#examples)
      - [参数](#参数)
    - [查看数组各项属性](#查看数组各项属性)
    - [创建特定数组](#创建特定数组)
  - [矩阵(matrix)](#矩阵matrix)
    - [转置矩阵](#转置矩阵)
    - [生成矩阵](#生成矩阵)
      - [matrix()](#matrix)
      - [mat()](#mat)
      - [bmat()](#bmat)
    - [矩阵特有属性](#矩阵特有属性)
    - [矩阵的运算](#矩阵的运算)
      - [矩阵相乘实例分析](#矩阵相乘实例分析)
      - [矩阵乘法及其应用](#矩阵乘法及其应用)
  - [linalg线代模块](#linalg线代模块)
    - [实例分析](#实例分析)
  - [### 一元线性回归分析是最基本的回归模型](#-一元线性回归分析是最基本的回归模型)
      - [概念](#概念)
      - [分析](#分析)
  - [numpy进行数据统计分析时常用的方法](#numpy进行数据统计分析时常用的方法)
    - [去重](#去重)
  - [numpy中的数据常用保存与读取方法](#numpy中的数据常用保存与读取方法)

---
# numpy
- Numpy是Python第三方库中最常用的科学计算库，
  - 所谓科学计算往往是指类似Matlab那样的矩阵运算能力。
    - 这其中包括
      - 多维数组对象、
      - 线性代数计算，
      - 以及一个高性能的C/C++语言内部实现。
  - 而 Numpy完全拥有上面的所有特性，而且还有很多方便的快捷函数，是做数据科学必不可少的工具。
- 线性代数一个最明显的优势就是用矩阵乘法代替循环可以极大地提高运算速度。

## numpy基础
- 在Numpy中，最主要的数据结构就是ndarray，
  - 这个数据结构不仅可以处理一维数组，还可以处理多维数组。
  - 比如下面的数组就是一个二维数组：
    ```python
     [[0  1  2  3   4] 
      [5  6  7  8   9] 
      [10 11 12 13 14]]
    ```
- 通常我们称数组的维度为“秩（rank）”，
    - 可以通过下面的代码创建并查看一个数组的秩：
      ```python
      import numpy as np 
      a = np.array([(1, 2), (3.4, 5)]) 
      print(a) 
      print(a.ndim)
      
      # 运行结果
      [[1.  2. ]
      [3.4 5. ]]
      2
      ```
      
      > List 不支持科学计算, 用 List 数据生成 Numpy.array 数据就可以支持科学计算了
- 习惯上我们会将numpy重命名为np并进行使用。
  - 创建二维数组就使用Python中“列表的列表”这种结构，
  - 如果创建三维数组就是使用“列表中的列表中的列表”的结构。
  - 有时为了方便，我们也会使 用一些手段快速创建数组，可参考下面的代码：
    ```python
    import numpy as np
    
    a = np.arange(15).reshape(3, 5)
    b = np.arange(1, 30, 5)
    c = np.arange(0, 1, 0.2)
    d = np.linspace(0, np.e * 10, 5)
    e = np.random.random((3, 2))
    print('a = ', a)
    print('b = ', b)
    print('c = ', c)
    print('d = ', d)
    print('e = ', e)
        
    # 运行结果
    a =  [[ 0  1  2  3  4]
    [ 5  6  7  8  9]
    [10 11 12 13 14]]
    b =  [ 1  6 11 16 21 26]
    c =  [0.  0.2 0.4 0.6 0.8]
    d =  [ 0.          6.79570457 13.59140914 20.38711371 27.18281828]
    e =  [[0.89648206 0.56055272]
    [0.65490962 0.13706445]
    [0.54199453 0.8091704 ]]
    ```
    - 使用np.arange()的方式与Python的range()类似，
      - 会生成一个ndarray类型的数组，
        - 只不过ndarray类型的reshape()方法会将原始的一维数组改变为一个二维数组，
          - 比如上面的例子中就将其改变为 3×5的二维数组了。
      - 与Python的range()函数稍有不同的是:
        - np.arange()支持小数的步长，
          - 比如上例中的np.arange(0,1,0.2)就生成了小数步长的数组，而使用Python的range时则会报错。
    - Numpy还提供 了一个强大的函数np.linspace()
      - 这个函数的功能类似arange()，但是第三个参数不是步长，而是数量。
      - 这个函数可以按照参数中需要生成元素的数量自动选择步长，
        - 上例中的d就是一个例子。
      - 另外 Numpy中也提供了与math模块中一样的两个常量，
        - 即np.e和np.pi。
          - np.e代表自然底数，
          - np.pi是圆周率。
    - 最后np.random.random()函数提供了直接生成随机元素的多维数组的方法，

---
### np.linspace
```python
numpy.core.function_base 
@array_function_dispatch(_linspace_dispatcher) 
def linspace(start: Union[ndarray, Iterable, int, float],
             stop: Union[ndarray, Iterable, int, float],
             num: Optional[int] = 50,
             endpoint: Optional[bool] = True,
             retstep: Optional[bool] = False,
             dtype: Optional[object] = None,
             axis: Optional[int] = 0) -> Any
```
- Return evenly spaced numbers over a specified interval.
  - evenly(均匀地；平均地)
  - spaced(隔开的)
  - specified(明确规定；具体说明)
  - interval(间隔)
- Returns num evenly spaced samples, calculated over the interval [start, stop].
- The endpoint of the interval can optionally be excluded.
  - endpoint(端点,终点)
  - excluded(排除；拒绝；把…除外；赶出)

---
#### See Also
- arange
  - Similar to linspace, but uses a step size (instead of the number of samples).
- geomspace
  - Similar to linspace, but with numbers spaced evenly on a log scale (a geometric progression).
    - scale(秤；比例尺；范围；刻度)
    - geometric(几何（学）的；（似）几何图形的)
- logspace
  - Similar to geomspace, but with the end points specified as logarithms.
    - specified(明确规定；具体说明；详述；详列)
    - logarithms(【数学】对数)

---
#### Examples
```python
>>> np.linspace(2.0, 3.0, num=5)
array([2.  , 2.25, 2.5 , 2.75, 3.  ]) # 5个数落在[2,3],均分4格,每格0.25
>>> np.linspace(2.0, 3.0, num=5, endpoint=False) # 6个数均分[2, 3],5格*0.2/格,去掉3
array([2. ,  2.2,  2.4,  2.6,  2.8])
>>> np.linspace(2.0, 3.0, num=5, retstep=True)
(array([2.  ,  2.25,  2.5 ,  2.75,  3.  ]), 0.25)
```

- Graphical illustration(图解):
```python
>>> import matplotlib.pyplot as plt
>>> N = 8
>>> y = np.zeros(N)
>>> x1 = np.linspace(0, 10, N, endpoint=True)
>>> x2 = np.linspace(0, 10, N, endpoint=False)
>>> plt.plot(x1, y, 'o')
[<matplotlib.lines.Line2D object at 0x...>]
>>> plt.plot(x2, y + 0.5, 'o')
[<matplotlib.lines.Line2D object at 0x...>]
>>> plt.ylim([-0.5, 1])
(-0.5, 1)
>>> plt.show()

# 完整代码:
import numpy as np
import matplotlib.pyplot as plt

N = 8
y = np.zeros(N)
x1 = np.linspace(0, 10, N, endpoint=True)
x2 = np.linspace(0, 10, N, endpoint=False)
plt.plot(x1, y, 'o')
plt.plot(x2, y + 0.5, 'o')
plt.ylim([-0.5, 1])
plt.show()

```
- 运行结果
  ![图解](../../res/img/BigDataMicroMajor/Python/11.26-图解linspace.png)

---
#### 参数
- start 
  - The starting value of the sequence.
- stop
  - The end value of the sequence, unless `endpoint` is set to False. 
    - In that case, the sequence consists of all but the last of ``num + 1`` evenly spaced samples, so that `stop` is excluded. 
    - Note that the step size changes when `endpoint` is False.
- num 
  - Number of samples to generate. 
  - Default is 50. Must be non-negative.
    - samples(样品；标本；**实例**)
    - non-negative(非负数)
- endpoint 
  - If True, `stop` is the last sample. 
    - Otherwise, it is not included. 
  - Default is True.
- retstep 
  - If True, return (`samples`, `step`), where `step` is the spacing between samples.
- dtype 
  - The type of the output array. If `dtype` is not given, infer the data type from the other input arguments. .. versionadded:: 1.9.0
    - infer(推断；推论；暗示；推理)
- axis
  - The axis in the result to store the samples. 
  - Relevant only if start or stop are array-like. 
  - By default (0), the samples will be along a new axis inserted at the beginning. 
  - Use `-1` to get an axis at the end. .. versionadded:: 1.16.0
    - relevant(紧密相关的；切题的；有价值的；**有意义的**)
    - axis(坐标轴；轴（旋转物体假想的中心线）；对称中心线（将物体平分为二）)
---
- 返回:
  - There are `num` equally spaced samples in the closed interval ``[start, stop]`` or the half-open interval ``[start, stop)`` (depending on whether `endpoint` is True or False).

---
### 查看数组各项属性
- 在了解了如何使用Numpy创建数组之后，再来看看如何查看数组的各项属性，参考下面的代码
  ```Python
  import numpy as np
  
  a = np.arange(15).reshape(3, 5)
  print('a ', '=', a)
  print('a.ndim ', '=', a.ndim)
  print('a.shape ', '=', a.shape)
  print('a.dtype.name ', '=', a.dtype.name)
  print('a.itemsize ', '=', a.itemsize)
  print('a.size ', '=', a.size)
  print('type(a) ', '=', type(a))
  
  # 运行结果
  a  = [[ 0  1  2  3  4]
        [ 5  6  7  8  9]
        [10 11 12 13 14]]
  a.ndim  = 2
  a.shape  = (3, 5)
  a.dtype.name  = int32
  a.itemsize  = 4
  a.size  = 15
  type(a)  = <class 'numpy.ndarray'>
  ```
  - ndim()函数会返回数组的秩数，
  - shape()函数会返回数组的形状。
  - dtype.name属性是数组中数据的类型，
  - itemsize是数据类型占用的内存空间，
  - size则是数组中总共有多少个元素。
  - numpy的对象在打印时会自动格式化，二维数组则会以矩阵的方式打印出来。
    - 不仅如此，当数组非常大以至于不能够完整地显示出来的时候，numpy还会缩略打印结果，可参考 如下代码：
      ```Python
      import numpy as np
      
      print(np.arange(10000).reshape(100, 100))
      
      # 运行结果
      [[   0    1    2 ...   97   98   99]
      [ 100  101  102 ...  197  198  199]
      [ 200  201  202 ...  297  298  299]
      ...
      [9700 9701 9702 ... 9797 9798 9799]
      [9800 9801 9802 ... 9897 9898 9899]
      [9900 9901 9902 ... 9997 9998 9999]]
      ```
---
### 创建特定数组
- Numpy还可以快速地创建一些特定的数组，参考下面的代码：
  ```Python
  import numpy as np
  
  a = np.zeros((3, 4))
  b = np.ones((2, 3, 4), dtype=np.int64)
  c = np.empty((4, 5))
  print('zeros\n', a)
  print('ones \n', b)
  print('empty\n', c)
  
  # 运行结果
  zeros
  [[0. 0. 0. 0.]
    [0. 0. 0. 0.]
    [0. 0. 0. 0.]]
  ones 
  [[[1 1 1 1]
    [1 1 1 1]
    [1 1 1 1]]
  
    [[1 1 1 1]
    [1 1 1 1]
    [1 1 1 1]]]
  empty
  [[3.80261646e-311 4.35210540e-306 1.78716863e-306 1.78022885e-306
    1.16691863e-301]
  [4.20602082e-297 3.25847851e-292 7.06199777e-292 1.21172656e-305
    1.21200470e-305]
  [3.82460765e-297 1.64290200e-287 1.64325271e-287 3.38208191e-292
    7.93893540e-301]
  [1.64290201e-287 1.64357338e-287 5.16064744e-297 3.48020045e-308
    2.50643828e-154]]
  ```
  - 使用zeros()函数可以创建一个对应维度的全零矩阵[1]，
  - ones()则是创建全1矩阵，
  - empty()函数会自动创建一个由随机的小值组成的矩阵

----
## 矩阵(matrix)
- NumPy 中包含了一个矩阵库 numpy.matlib
  - 该模块中的函数返回的是一个矩阵，而不是 ndarray 对象。
    - 矩阵是ndarray的子类,即矩阵是特殊的数组
      - 矩阵的位数是固定的,永远是二位,通常都是数值
- 一个 $m × n$ 的矩阵是一个由 $m$ 行（row） $n$ 列（column）元素排列成的矩形阵列。

---
### 转置矩阵
- NumPy 中除了可以使用 numpy.transpose 函数来对换数组的维度，还可以使用 T 属性。。
- 例如有个 m 行 n 列的矩阵，使用 t() 函数就能转换为 n 行 m 列的矩阵。
```python
import numpy as np

a = np.arange(12).reshape(3, 4)
print('原数组：\n{0}\n\n转置数组：\n{1}'.format(a, a.T))

# 运行结果
原数组：
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]

转置数组：
[[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]

```

---
### 生成矩阵
- Numpy生成矩阵常用方法
  - matrix()函数
  - mat()函数
  - bmat()函数

---
#### matrix()
```python 
import numpy as np

a = np.matrix([(1, 2, 4), (2, 2, 4), (3, 4, 5)])
b = np.matrix([[4, 5], [7, 8]])
c = np.matrix(range(6))
d = np.matrix('1, 2, 3; 4, 5, 6; 7, 8, 9')
print(a, b, c, d, sep='\n\n')

# 运行结果
[[1 2 4]
 [2 2 4]
 [3 4 5]]

[[4 5]
 [7 8]]

[[0 1 2 3 4 5]]

[[1 2 3]
 [4 5 6]
 [7 8 9]]

```

---
#### mat()
- 就是asmatrix()
```python
import numpy as np

a = np.mat([(1, 2, 4), (2, 2, 4), (3, 4, 5)])
b = np.mat([[4, 5], [7, 8]])
c = np.mat(range(6))
d = np.mat('1, 2, 3; 4, 5, 6; 7, 8, 9')
print(a, b, c, d, sep='\n\n')

# 运行结果
[[1 2 4]
 [2 2 4]
 [3 4 5]]

[[4 5]
 [7 8]]

[[0 1 2 3 4 5]]

[[1 2 3]
 [4 5 6]
 [7 8 9]]

进程已结束,退出代码0
```
- Unlike matrix, asmatrix does not make a copy if the input is already a matrix or an ndarray. 
  - Equivalent to matrix(data, copy=False).

---
#### bmat()
- 组合矩阵(默认横向组合)
```python
import numpy as np

mat1 = np.eye(3)    # 生成对角为1的矩阵,可生成单位矩阵
mat2 = np.diag([3]*3)   # 生成对角为3的方阵,可生成单位矩阵
mat3 = np.identity(6)   # 生成单位矩阵
print(mat1, mat2, mat3, sep='\n')
mat = np.bmat('mat1, mat2; mat3')
print('mat:', mat, sep='\n')

# 运行结果
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
[[3 0 0]
 [0 3 0]
 [0 0 3]]
[[1. 0. 0. 0. 0. 0.]
 [0. 1. 0. 0. 0. 0.]
 [0. 0. 1. 0. 0. 0.]
 [0. 0. 0. 1. 0. 0.]
 [0. 0. 0. 0. 1. 0.]
 [0. 0. 0. 0. 0. 1.]]
mat:
[[1. 0. 0. 3. 0. 0.]
 [0. 1. 0. 0. 3. 0.]
 [0. 0. 1. 0. 0. 3.]
 [1. 0. 0. 0. 0. 0.]
 [0. 1. 0. 0. 0. 0.]
 [0. 0. 1. 0. 0. 0.]
 [0. 0. 0. 1. 0. 0.]
 [0. 0. 0. 0. 1. 0.]
 [0. 0. 0. 0. 0. 1.]]

进程已结束,退出代码0
```

---
### 矩阵特有属性

| 矩阵 | 属性 | 说明 |
| -- | -- | -- |
| A | T | A.T 返回自身的转置 |
| A | H | A.H 返回自身的共轭转置 |
| A | I | A.I 返回自身的逆矩阵 |
| A | A | A.A 返回自身数据的2维数组的一个视图 |

```Python
import numpy as np

a = np.mat([(1, 2, 4), (2, 2, 4), (3, 4, 5)])
print("a.A 自身数据2维数组的一个视图:\n{0}".format(a.A))
print("a.T 返回自身的转置:\n{0}".format(a.T))
print("a.I 返回自身的逆矩阵:\n{0}".format(a.I))
print("a.H 返回自身的共轭转置".format(a.H))

# 运行结果
a.A 自身数据2维数组的一个视图:
[[1 2 4]
 [2 2 4]
 [3 4 5]]
a.T 返回自身的转置:
[[1 2 3]
 [2 2 4]
 [4 4 5]]
a.I 返回自身的逆矩阵:
[[-1.          1.          0.        ]
 [ 0.33333333 -1.16666667  0.66666667]
 [ 0.33333333  0.33333333 -0.33333333]]
a.H 返回自身的共轭转置

```

---
### 矩阵的运算
- 在numpy中对矩阵的下列运算可以直接运算
  - 数乘
    - 矩阵与常数的相乘
      - matr1*3
  - 矩阵相加减
    - $matr1 \pm matr2$
      - 必须都是 $n × m$的矩阵(相同形状的矩阵)
  - 矩阵相乘
    - $matr1 × matr2$
      - **第1个矩阵的列数与第二个矩阵的行数相同**

    ```python
    import numpy as np
    
    A = np.mat([(1, 2, -1), (3, 1, 0), (-1, 0, -2)])
    C = np.mat([[1, 2], [3, 4], [5, 6]])
    D = np.mat([[11, 22, 33], [44, 55, 66], [77, 88, 99]])
    print("A×3:\n{0}".format(A*3))
    print("A+D:\n{0}\nA*C:\n{1}\n".format(A+D, A*C))
    
    # 运行结果
    A×3:
    [[ 3  6 -3]
    [ 9  3  0]
    [-3  0 -6]]
    A+D:
    [[12 24 32]
    [47 56 66]
    [76 88 97]]
    A*C:
    [[  2   4]
    [  6  10]
    [-11 -14]]
    
    ```

---
#### 矩阵相乘实例分析
[三种乘法](https://blog.csdn.net/zenghaitao0128/article/details/78715140)

---
- 某工厂生产三种产品,费用支出见表1,生产量见表2
  <!-- ![](https://codimd.s3.shivering-isles.com/demo/uploads/upload_e2ceb36eb9f9f825c773f116563541fb.png)   -->

  ![表1备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_e2ceb36eb9f9f825c773f116563541fb.png)

  <!-- ![矩阵相乘实例分析表2](../../res/img/BigDataMicroMajor/Python/矩阵相乘实例分析表2.png) -->

  ![矩阵相乘实例分析表2备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_a8fbeb28aebf1c6936ac9673a0ddc539.png)
- 计算如下数据:
  - 每一季度中每一类成本的数量
    - 设$M =$
      $$\left[
      \begin{matrix}
      0.10 & 0.30 & 0.15\\
      0.30 & 0.40 & 0.25 \\
      0.10 & 0.20 & 0.15
      \end{matrix}
      \right]
      $$
      $N =$
      $$\left[
      \begin{matrix}
      4000 & 4500 & 4500 & 4000 \\
      2000 & 2600 & 2400 & 2200 \\
      5800 & 6200 & 6000 & 6000  
      \end{matrix}
      \right]$$
    - 则每一季度中每一类成本的数量为:
      - $MN$
  - 每一季度三类成本的总数量
    - $MN.sum(axis = 0)$
  - 四个季度每类成本的总数量
    - $MN.sum(axis = 1$
- 代码如下:
```python
import numpy as np

M = np.mat([(0.10, 0.30, 0.15), (0.30, 0.40, 0.25), (0.10, 0.20, 0.15)])
N = np.mat([[4000, 4500, 4500, 4000], [2000, 2600, 2400, 2200], [5800, 6200, 6000, 6000]])
MN = M*N
print("每一季度中每一类成本的数量为:\n{0}".format(MN))
print("每一季度三类成本的总数量为:\n{0}".format(MN.sum(axis=0)))
print("四个季度每类成本的总数量为:\n{0}".format(MN.sum(axis=1)))

# 运行结果:
每一季度中每一类成本的数量为:
[[1870. 2160. 2070. 1960.]
 [3450. 3940. 3810. 3580.]
 [1670. 1900. 1830. 1740.]]
每一季度三类成本的总数量为:
[[6990. 8000. 7710. 7280.]]
四个季度每类成本的总数量为:
[[ 8060.]
 [14780.]
 [ 7140.]]

```

---
#### 矩阵乘法及其应用
<!-- ![](../../res/img/BigDataMicroMajor/Python/矩阵乘法示意.png) -->

![矩阵乘法示意备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_6c85db63360e553a9c0941e471b8d768.png)

- 求解线性方程组
  <!-- ![](../../res/img/BigDataMicroMajor/Python/线性方程组.png) -->

  ![线性方程组备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_152824e62907db7878dcc4f1454c01be.png)
  - 可以写成矩阵相乘的形式:
    - $ax = b$
    - 解方程求x
      - $x = ba^{-1}$

---
> [三种乘法运算的区别](https://blog.csdn.net/zenghaitao0128/article/details/78715140)




---
##  linalg线代模块
- [官方文档参考链接](https://www.numpy.org.cn/reference/routines/linalg.html#%E7%9F%A9%E9%98%B5%E5%92%8C%E5%90%91%E9%87%8F%E7%A7%AF)
- Numpy中的linalg模块包含线性代数中的函数方法;
  - 如
    - [求矩阵的逆矩阵](https://numpy.org/devdocs/reference/generated/numpy.linalg.inv.html#numpy.linalg.inv)
      - ```python
        linalg.inv(a)
        ```
    - [矩阵的特征值](https://www.numpy.org.cn/reference/routines/linalg.html#%E7%9F%A9%E9%98%B5%E7%89%B9%E5%BE%81%E5%80%BC)
    - [解线性方程组](https://www.numpy.org.cn/reference/routines/linalg.html#%E8%A7%A3%E6%96%B9%E7%A8%8B%E5%92%8C%E9%80%86%E7%9F%A9%E9%98%B5)
    - 求行列式等

```python
import numpy as np

a = np.mat([[3, 1], [1, 2]])        # 系数矩阵
b = np.mat([[9, 8]])                # 常数矩阵
x = np.linalg.solve(a, b.T)         # 求解ax = b.T
y = np.linalg.det(a)                # 计算数组a的行列式。
a_I = np.linalg.inv(a)              # 求a的逆矩阵,等价于a.I
a_eigValue = np.linalg.eigvals(a)   # 计算通用矩阵a的特征值。
print("ax = b.T的解为:\n{0}\na的行列式为:\n{1}\n"
      "a的特征值为:\n{2}\n".format(x, y, a_eigValue))
print("方阵a的特征值和右特征向量为:\n{0}"
      .format(np.linalg.eig(a)))    # 计算方阵a的特征值和右特征向量。
print("ax为:\n{0}".format(a*x))
print("a与其逆矩阵的乘积为:\n{0}".format(a*a_I))

# 运行结果
ax = b.T的解为:
[[2.]
 [3.]]
a的行列式为:
5.000000000000001
a的特征值为:
[3.61803399 1.38196601]

方阵a的特征值和右特征向量为:
(array([3.61803399, 1.38196601]), matrix([[ 0.85065081, -0.52573111],
        [ 0.52573111,  0.85065081]]))
ax为:
[[9.]
 [8.]]
a与其逆矩阵的乘积为:
[[1. 0.]
 [0. 1.]]

```

---
### 实例分析
某地区居民连续几年的年底储蓄总金额如表所示:
- (1)计算y关于t的回归方程$\hat{y} = kt + b$的斜率与截距
- (2)用所求的回归方程预测该地区第6年的年底储蓄总金额
| 年份 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 |
| - | - | - | - | - | - | - |
| 第t年 | 1 | 2 | 3 | 4 | 5 | 6 |
| 储蓄总金额 | 6 | 7 | 7.8 | 8 | 9 | 9.8 |


----
### 一元线性回归分析是最基本的回归模型
---
#### 概念
- 一元线性回归是分析只有一个自变量（自变量x和因变量y）线性相关关系的方法。
  - 一个经济指标的数值往往受许多因素影响，若其中只有一个因素是主要的，起决定性作用，则可用一元线性回归进行预测分析。


---
#### 分析
$\hat{y} = ax + b + \epsilon$
- $\hat{y}$
  - 预测对象
- x
  - 自变:自变量相响因素
- a,b
  - 待估计:待估计为回归系数
- $\epsilon$
  - 估计:估计误差,残差

---
- 估计a,b参数,常用最小二乘法:
  - $\sum_{i = 1}^{n} (y_i - \hat{y}_i)^2$

<font size = 5>$a = \frac{n \sum_{i=1}^n x_iy_i - (\sum_{i=1}^nx_i\sum_{i=1}^ny_i)} {n \sum_{i=1}^n x_i^2 - (\sum_{i=i}^n x_i)^2}$</font>  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<font size = 5>$= \frac{\sum_{i=1}^n x_iy_i - \frac{(\sum_{i=1}^nx_i\sum_{i=1}^ny_i)}{n}}{\sum_{i=1}^n x_i^2 - \frac{(\sum_{i=i}^n x_i)^2}{n}}$</font>

<font size = 5>$b = \frac{1}{n} \sum_{i=1}^ny_i - \frac{a}{n} \sum_{i=1}^n x_i$</font>


---
```python
import numpy as np


def create_a_linear_regressor(X, Y):
    x_m = np.mat(X)
    y_m = np.mat(Y)
    top1 = float(x_m * y_m.T)
    top2 = (X.sum() * Y.sum()) / (X.shape[0])
    top = top1 - top2
    bottom1 = np.multiply(X, X).sum()
    bottom2 = ((X.sum()) * (X.sum())) / (X.shape[0])
    bottom = bottom1 - bottom2
    a = top / bottom
    front = (Y.sum()) / (Y.shape[0])
    back = (a * (X.sum())) / (X.shape[0])
    b = front - back
    return [a, b]


X = np.array([1, 2, 3, 4, 5, 6])
Y = np.array([6.0, 7.0, 7.8, 8.0, 9.0, 9.8])
para = create_a_linear_regressor(X, Y)
print("斜率为:{0}  截距为:{1}".format(para[0], para[1]))
print("第6年年底储蓄总金额为:{0}".format(para[0]*7 + para[1]))

# 运行结果
斜率为:0.7200000000000013  截距为:5.413333333333329
第6年年底储蓄总金额为:10.453333333333337
```


---
## numpy进行数据统计分析时常用的方法
### 去重
- 去掉重复的数据
- 一维数组 unique() 去掉重复数据且返回已排序的结果(只对数组)
```python
unique(b, return_index = True, return_counts = True)
```
- return_index = True
  - 返回元素在数组中第一次出现的位置
- 对二维数组去掉重复行
  - 可以增加一个参数:axis = 0

---
```python
import numpy as np

A = np.random.randint(10, 15, size=(1, 7))
print("原数组:\n{0}".format(A))
B, index = np.unique(A, return_index=True)
print("去重\n{}\nindex\n{}".format(B, index))
C = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [3, 4]])
c = np.unique(C, axis=0)  # 去掉重复的行
print('去掉数组C中重复的行\n', c)

# 运行结果
原数组:
[[12 12 11 13 13 13 10]]
去重
[10 11 12 13]
index
[6 2 0 3]
去掉数组C中重复的行
 [[1 2]
 [3 4]]

```

---
- numpy进行数据统计分析时常用的方法 重复数据，需要将数据重复若干次。常用tile()和repeat() 
  - ```Python
    tile(arr,reps) 
    ```
    - 参数reps指定重复的次数 
  - ```python
    repeat(a,repeats,axis=None) 
    ```
    - a指重复的数组元素,
    - repeats重复次数,
    - axis指沿着哪个轴重复 
  - 它们区别在于：
    - tile函数对数组进行重复，
    - repeat函数是对数组中的每个元素进行重复操作。

```python
import numpy as np

arr = np.arange(5)
arr_tile = np.tile(arr, 2)    # 将数组重复2次
print('原数组为：', arr)
print('重复后的数组为：', arr_tile)
np.random.seed(42)            # 设置随机种子
arr1 = np.random.randint(0, 10, size=(3, 3))  # 生成数组
print('原数组：\n', arr1)
arr1_repeat = np.repeat(arr1, 2, axis=1)
print('重复后数组为：', arr1_repeat)  # 按行进行元素重复，axis=1.按列进行元素重复

# 运行结果
原数组为： [0 1 2 3 4]
重复后的数组为： [0 1 2 3 4 0 1 2 3 4]
原数组：
 [[6 3 7]
 [4 6 9]
 [2 6 7]]
重复后数组为： [[6 6 3 3 7 7]
 [4 4 6 6 9 9]
 [2 2 6 6 7 7]]
```

---
## numpy中的数据常用保存与读取方法
- 二进制的文件和文件列表形式（文本文件和csv文件） 
  - save()函数是以二进制的格式保存数据(保存格式是.npy)。 
    - ```python
      np.save(filename,arr) 
      ```
  - load()函数是从二进制的文件中读取数据(读取npy)。 
    - ```python
      np.load(filename) 
      ```
  - savez函数可以将多个数组保存到一个文件(.npz)中。 
    - ```python
      np.savez(filenme,arr1,arr2) 
      ```
    - ```python
      np.savez(filenme,arr1=arr1,arr2=arr2) 
      ```
    - 存储时可以省略扩展名，但读取时不能省略扩展名。
  - savetxt函数是将数组写到文本文件（txt或cvs）中。
    - ```python
      np.savetxt(filename, arr, fmt="%d", delimiter=" ") 
      ```
  - loadtxt函数把文件加载到一个二维数组中。 
    - ```python
      np.loadtxt(filename,delimiter=",") 
      ```
  - genfromtxt函数面向的是结构化数组和缺失数据。 
    - ```python 
      np.genfromtxt(filename,delimiter = ",")
      ```
```python
import numpy as np
import os

file_path_savez = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/files/prog/matrix'))
file_path_savetxt = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/files/prog/matrix.csv'))
file_path_arr = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/files/prog/matrix.npz'))

A = np.array([1, 2, 3, 4, 5])   # A = [1 2 3 4 5]
B = np.diag(A)                  # 利用A生成对角阵B,对角线上元素从左到右对应A中元素
C = np.linspace(1, 50, 49, dtype=int)\
    .reshape(7, 7)              # 生成[1,50]等间隔的49个数(去掉小数部分)并将其重构为7×7的数组
C = np.mat(C)                   # 将数组C转换成矩阵C
row = len(C)                    # row = 7; len(矩阵)返回矩阵的行数
col = len(C[0, :])              # col = 1; C[0, :] = [[1 2 3 4 5 6 7]] 长度为1
D = np.diagonal(C)              # D为C对角线上的元素,即为[ 1  9 17 25 33 41 50]
D_diag = np.diag(D)             # D_diag是以D为对角元素生成的方阵
E = np.diag(np.diag(C))         # np.diag(C)获取C对角线上的元素;
E_M = np.mat(E)                 # 将E转换为矩阵E_M
F = np.tril(C)                  # F为C的下三角(上三角置0)
F_1 = np.tril(C, -1)            # 主对角线-1 上方元素置0,效果等效为:下三角&主对角线置0
F1 = np.triu(C)                 # F1为C的上三角
F1_1 = np.triu(C, 1)            # 主对角线+1 下方元素置0,效果等效为:上三角&主对角线置0
np.savez(file_path_savez,
         a=A, b=B, c=C)         # 将几个数组以未压缩的.npz格式保存到单个文件中。
np.savetxt(file_path_savetxt,
           E_M, '%d',
           delimiter=',')       # 将数组保存到文本文件,每一个数据都用','分开
arr = np.load(file_path_arr)    # 从.npy、.npz或pickle文件加载阵列或pickle对象。
# 输出相应对象
print("a:\n{0}\nb:\n{1}\nc:\n{2}\n".format(arr['a'], arr['b'], arr['c']))
# 从文本文件加载数据。
arr1 = np.loadtxt(file_path_savetxt, delimiter=',')
print("E_M:\n{0}"
      .format(arr1))            # 输出E_M

```
