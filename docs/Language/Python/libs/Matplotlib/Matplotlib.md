# 目录
- [目录](#目录)
  - [# Matplotlib](#-matplotlib)
  - [pyplot](#pyplot)
    - [pyplot绘图的基本操作](#pyplot绘图的基本操作)
      - [创建画布与创建子图](#创建画布与创建子图)
      - [添加图的基本要素](#添加图的基本要素)
      - [rcParams参数](#rcparams参数)
      - [正常显示中文和负号](#正常显示中文和负号)
        - [例子:绘制$sin(x)$](#例子绘制sinx)
          - [1.使用字体管理器font_manager](#1使用字体管理器font_manager)
          - [为不同标题(图、坐标轴)设置不同的字体，大小，采用字体管理器](#为不同标题图坐标轴设置不同的字体大小采用字体管理器)
          - [显示图中的负号](#显示图中的负号)
          - [绘制sin(x)，cos(x)](#绘制sinxcosx)
        - [例题:烧烤店营业额折线图](#例题烧烤店营业额折线图)
      - [legend.loc参数](#legendloc参数)
      - [设置图例](#设置图例)
        - [例1:给三角函数图加图例](#例1给三角函数图加图例)
        - [给四个子图分别添加图例](#给四个子图分别添加图例)
      - [保存与显示图](#保存与显示图)
        - [保存：](#保存)
          - [实例](#实例)
        - [显示](#显示)
      - [例1 商场优惠](#例1-商场优惠)
        - [修改线的形状](#修改线的形状)
    - [散点图实战](#散点图实战)
      - [例1:折线图重绘为散点图](#例1折线图重绘为散点图)
      - [例2:商场信号强度](#例2商场信号强度)
      - [例3:商场优惠折线图散点图结合](#例3商场优惠折线图散点图结合)
        - [标注数字](#标注数字)
  - [Matplotlib数据可视化](#matplotlib数据可视化)
    - [数据可视化的误区](#数据可视化的误区)
    - [可视化方式](#可视化方式)
      - [趋势](#趋势)
        - [示例:商场部门业绩](#示例商场部门业绩)
      - [对比](#对比)
        - [示例:商场男女装销售对比](#示例商场男女装销售对比)
          - [图形美化-"倒影"柱状图](#图形美化-倒影柱状图)
          - [美化-并列柱状图](#美化-并列柱状图)
          - [美化:添加注释文字](#美化添加注释文字)
          - [转化:条形图:barh()](#转化条形图barh)
      - [结构](#结构)
        - [示例1:成绩分段](#示例1成绩分段)

---
# Matplotlib
---
- [中文文档](https://www.matplotlib.org.cn/)

---
- 数据可视化
- 是python的绘图库
  - 可以绘制诸如散点/饼状/线/直方/误差线图
  - 图形质量满足出版要求

---
## pyplot

---
### pyplot绘图的基本操作

![pyplot绘图的基本操作备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_aa6ca071f9d619b0c934dcf9bd737568.png)

---
#### 创建画布与创建子图
- 创建一张空白画图,并可以选择是否将整个画布划分为多个部分,方便在同一幅图上绘制多个图形
  - 也可以省略,直接在默认的画布上进行图形绘制,通常情况下省略

| 函数          | 函数作用                                              |
| ------------- | ----------------------------------------------------- |
| plt.figure()  | 创建一个空白画布,可以指定画布大小,像素                |
| plt.subplot() | 创建并选中子图,可以指定子图的行数,列数,与选中图片编号 |


- figure
```python
matplotlib.pyplot def figure(num: Union[int, str, None] = None,
           figsize: Any = None,
           dpi: Optional[int] = None,
           facecolor: Any = None,
           edgecolor: Any = None,
           frameon: Optional[bool] = True,
           FigureClass: Any = Figure,
           clear: Optional[bool] = False,
           **kwargs: Any) -> Any
```
> 注意:当你使用画布时,务必记得在不使用该画布时使用 pyplot.close 来关闭画布以清理其占用的**内存**
> - 否则你可能会因为内存溢出而头痛不已
- num
  - 图像编号或名称
    - 数字为编号 
    - 字符串为名称 
- figsize
  - 指定figure的宽和高
  - 单位为英寸； 
- dpi
  - 指定绘图对象的分辨率
    - 即每英寸多少个像素，缺省值为80 
      > - 1英寸等于2.5cm
      > - A4纸是 21*30cm的纸张 
- facecolor
  - 背景颜色 
- edgecolor
  - 边框颜色
```python 
import matplotlib.pyplot as plt
import numpy as np

a = np.arange(1, 13)
b = np.array([12, 12, 34, 23, 56, 45, 24, 45, 23, 45, 21, 12])
c = a ** 2 + 1
plt.figure('qwqerr', figsize=(10, 5), dpi=60)  # 定义画布
plt.plot(a, b)
plt.figure('12', figsize=(10, 5), dpi=60)
plt.plot(a, c)
plt.show()

```
- 运行结果
  ![](https://codimd.s3.shivering-isles.com/demo/uploads/upload_dcc66c8cc53de5a90af45842a9ac6f6c.png)

  


---
#### 添加图的基本要素
- 添加标题(图, xy轴), 设置可读与范围(x, y轴)
- 添加图标题,坐标轴名称,设置刻度与范围
  - 没有先后顺序

<!-- ![结构示意图](../../res/img/BigDataMicroMajor/Python/Pyplot绘图结构示意图.png) -->

---

| 函数       | 函数作用                                                           |
| ---------- | ------------------------------------------------------------------ |
| plt.title  | 在当前图形中添加图表题,可以确定标题的名称,位置,颜色,字体大小等参数 |
| plt.xlable | 在当前图形中添加x轴名称(标题),可以指定位置,颜色,字体大小等参数     |
| plt.ylable | 在当前图形中添加y轴名称(标题),可以指定位置,颜色,字体大小等参数     |
| plt.xlim   | 指定当前x轴的范围,只能确定一个数值区间,而无法使用字符串标识        |
| plt.ylim   | 指定当前y轴的范围,只能确定一个数值区间,而无法使用字符串标识        |
| plt.xticks | 指定x轴可读的数目与取值                                            |
| plt.yticks | 指定y轴可读的书目与取值                                            |

---
#### rcParams参数
- [原文链接](https://blog.csdn.net/weixin_39010770/article/details/88200298)
- plt(matplotlib.pyplot) 使用rc配置文件来自定义图形的各种**默认属性**，称之为rc配置或rc参数。
- 通过rc参数可以修改默认的属性，包括窗体大小、每英寸的点数、线条宽度、颜色、样式、坐标轴、坐标和网络属性、文本、字体等。
- rc参数存储在字典变量中，通过字典的方式进行访问。

<!-- ![rcParams](../../res/img/BigDataMicroMajor/Python/rcParams参数.png) -->

- [matplotlib命令与格式：参数配置文件与参数配置](https://blog.csdn.net/helunqu2017/article/details/78652261)

---
#### 正常显示中文和负号
Matplotlib内无中文字节码,需要另外添加显示中文的模块
- 1.使用字体管理器font_manager
```python
from matplotlib.font_manager import FontProperties as FP
font = FP(fname = 'C:/WINDOWS/Fonts/STKAITI.TTF', size=16)
```
- 2.使用matplotlib的rcParams属性
```python
matplotlib.rcParams['font.family'] = ['SimHei']
```
- 3.使用matplotlib的rcParams属性
```python
plt.rcParams['axes.unicode_minus'] = False
```

---
##### 例子:绘制$sin(x)$
绘制sin(x) ,并添加标题

---
```python
title('文本',fontsize=None,fontweight=None,fontstyle=None) 
```
- fontsize
  - 默认12
  - 可选参数 
    ``` 
    [‘xx-small’, ‘x-small’, ‘small’, ‘medium’, ‘large’,‘x-large’, ‘xx-large’] 
    ```
- fontweight
  - 设置字体粗细
  - 可选参数 
    ```
    [‘light’, ‘normal’, edium’, ‘semibold’, ‘bold’, ‘heavy’, ‘black’] 
    ```
  - fontstyle
    - 设置字体类型
    - 可选参数
      ```
      [ ‘normal’ | ‘italic’ | ‘oblique’ ]
      ```
    - italic斜体
    - oblique倾斜 
- backgroundcolor标题背景颜色

---
###### 1.使用字体管理器font_manager
```python
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.font_manager import FontProperties as FP

font = FP(fname='C:/WINDOWS/Fonts/STKAITI.TTF', size=12)
a1 = np.linspace(0, 2 * np.pi)
b1 = np.sin(a1)
plt.title('sin(x)函数图', fontproperties=font, size=18)  # 设置图的标题
plt.xlabel('x轴', fontproperties=font)  # 设置X轴的名称
plt.ylabel('y轴', fontproperties=font)  # 设置y轴的名称
plt.plot(a1, b1)  # 画折线图
plt.show()

```
- 运行结果

  ![使用fontmanager绘制sin(x)备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_13dae5dc395d4b8e084abbc6312e927a.png)

---
###### 为不同标题(图、坐标轴)设置不同的字体，大小，采用字体管理器 
  ```python
  import matplotlib.pyplot as plt
  import numpy as np
  from matplotlib.font_manager import fontManager

  a1 = np.linspace(0, 2 * np.pi)
  b1 = np.sin(a1)
  plt.title('sin(x)函数图', fontproperties='FangSong', size=16)  # 设置图的标题
  plt.xlabel('x值', fontproperties='simhei', fontsize=10)  # 设置X轴的名称
  plt.ylabel('函数值', fontproperties='stkaiti')  # 设置y轴的名称
  plt.plot(a1, b1)  # 画折线图
  plt.show()

  ```
  - 运行结果

    ![sin(x)采用多种字体备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_409fdda16adf62e809a2655eede7d387.png)

---
###### 显示图中的负号
> 虽然这里这么写了,但是在字体管理器那里我已经可以正常显示负号了 
- 配置rc参数 
    ```python
    rcParams['axes.unicode_minus']=False #修改y轴的名称(标题) 
    ```

  ```python 
  import matplotlib.pyplot as plt
  import numpy as np
  
  plt.rcParams['font.family'] = ['simhei']
  plt.rcParams['axes.unicode_minus'] = False
  a1 = np.linspace(0, 2 * np.pi)
  b1 = np.sin(a1)
  plt.title('sin(x)函数图', size=16)  # 设置图的标题
  plt.xlabel('x 值', labelpad=10)    # 设置X轴的名称
  plt.ylabel('函\n数\n值',
            rotation=0,          # 文本中的文字水平显示
            linespacing=2,       # 行距
            labelpad=20,         # 文本名称与坐标轴的距离
            position=(10, 0.35)  # 文本名称的纵坐标(第2个数值) 
            )
  plt.plot(a1, b1)  # 画折线图
  plt.show()
  
  ```
  - 运行结果

    ![sin(x)纵坐标旋转备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_1636f9321d75ba33b05eb07922a51076.png)

---
- 使用matplotlib的rcParams属性
```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
a1 = np.linspace(0, 2 * np.pi)
b1 = np.sin(a1)
plt.title('sin(x)函数图', fontsize='large')  # 设置图的标题
plt.xlabel('x的值')    # 设置X轴的名称
plt.ylabel('函数值')   # 设置y轴的名称
plt.plot(a1, b1)      # 画折线图
plt.show()

# 运行结果
C:\Users\233\AppData\Local\Programs\Python\Python38\lib\site-packages\matplotlib\backends\backend_agg.py:214: RuntimeWarning: Glyph 8722 missing from current font.
  font.set_text(s, 0.0, flags=flags)
C:\Users\233\AppData\Local\Programs\Python\Python38\lib\site-packages\matplotlib\backends\backend_agg.py:183: RuntimeWarning: Glyph 8722 missing from current font.
  font.set_text(s, 0, flags=flags)

```
<!-- - ![运行截图](../../res/img/BigDataMicroMajor/Python/11.26-rcParams错误使用.png) -->
  - 出错问题在于使用了默认的Unicode负号
    <!-- - ![](../../res/img/BigDataMicroMajor/Python/11.26-Unicode和ASCII负号.png) -->
    - 但是用的`SimHei`字体不支持Unicode负号

---
###### 绘制sin(x)，cos(x)
- 方案一：在一张图上绘两条曲线

```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
plt.plot(a1, b1)
plt.plot(a1, c1)
plt.title('sin---cos 曲线图')
plt.show()

```
- 运行结果

  ![同图二线备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_196560d2c52b06d240d2f432a9705f59.png)

---
- 方案二：在一张图figure上画多个小图subplot 
  - 创建画布对象 
    - fig=plt.figure() 
  - 在fig画布创建子图并分配子图的位置 
    - fig.add_subplot(rawnum,colnum,stanum) 
      - 将整个图分成rawnum行，colnum列个子图， 
      - stanum为子图的位置
        - 从左到右从上到下排序

```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
d1 = 2 * a1 + 4
fig = plt.figure(figsize=(12, 4))  # 定义了图对象
fig.add_subplot(2, 2, 1)  # fig.add_subplot(221)
plt.plot(a1, b1)
fig.add_subplot(2, 2, 2)
plt.plot(a1, c1)
fig.add_subplot(223)
plt.plot(a1, d1)
plt.show()

```

- 运行结果

  ![绘制子图备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_b01bb91975e606844d6a7654a24fa05c.png)

----
- 添加子图标题
  - 每次调用plt.plot绘制一张子图之前调用plt.title添加一次标题
    - 这样就可以添加到当前绘制的图上

```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
d1 = 2 * a1 + 4
fig = plt.figure(figsize=(12, 4))  # 定义了图对象
fig.add_subplot(2, 2, 1)  # fig.add_subplot(221)
plt.title('sin(x)')
plt.plot(a1, b1)
fig.add_subplot(2, 2, 2)
plt.title('cos(x)')
plt.plot(a1, c1)
fig.add_subplot(223)
plt.title('直线')
plt.plot(a1, d1)
plt.show()

```
- 运行结果

  ![给子图加标题备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_e0b86349b199a291ed8d7c5adb3b2fbc.png)

---
- 子图的位置分布
  - tight_layout可以通过参数pad, w_pad, h_pad来设置一些布局的细节 
  - 添加总标题 
    ```
    plt.suptitle()
    ```

```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
d1 = 2 * a1 + 4
e1 = a1 ** 2 + 4 * a1 + 3
plt.figure(figsize=(8, 4))  # 创建画布
plt.suptitle('Figuer 标题', fontsize=14)

plt.subplot(2, 2, 1)  # plt.subplot(221)
plt.title('sin(x)')
plt.plot(a1, b1)

plt.subplot(2, 2, 2)
plt.title('cos(x)')
plt.plot(a1, c1)

plt.subplot(223)
plt.title('直线')
plt.plot(a1, d1)

plt.subplot(224)
plt.title('二次函数')
plt.plot(a1, e1)
plt.tight_layout(1, 3, 3)
plt.show()

```
- 运行截图
<!-- ![](../../res/img/BigDataMicroMajor/Python/子图位置分布.png) -->


---
##### 例题:烧烤店营业额折线图
- 已知某商场2019年每个月份的营业额如下所示。绘制折线图对该烧烤店全年营业额进行可视化。 

| 月份 | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- ||
| 营业额(万元)  | 5.2 | 4   | 3.7 | 5.2 | 4.9 | 3.6 | 5.8 | 3.8 | 6.7 | 6.1 | 4.5 | 5.7 |


```python 
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['simhei']
a = list(range(1, 13))
b = [5.2, 4, 3.7, 5.2, 4.9, 3.6, 5.8, 3.8, 6.7, 6.1, 4.5, 5.7]
plt.title('烧烤店营业额')
plt.xlabel('月')
plt.ylabel('营\n业\n额', rotation=0, labelpad=20)
xnum = range(1, 13)
xlabel = [str(i) + '月' for i in range(1, 13)]
plt.xticks(xnum, xlabel)  # 设置x轴的刻度与标签
plt.plot(a, b)
plt.show()

```
- 运行结果

  ![烧烤店营业额备用链接](https://codimd.s3.shivering-isles.com/demo/uploads/upload_3c8191fee8c201d31117c42ea9fcab56.png)

---
#### legend.loc参数
- [原文链接](https://zhuanlan.zhihu.com/p/111108841)
- legend()不加任何参数
  - 则默认获取图中曲线的`label`及颜色生成图例在图内
- loc = 'best'
  - 图例自动‘安家’在一个坐标面内的数据图表最少的位置
- loc = 'XXX'
  - 这里的'XXX'代表了坐标面中的九个位置，例如loc = 'center'表示坐标平面中心位置，九种参数值及所对应位置如下图所示
  <!-- - ![](../../res/img/BigDataMicroMajor/Python/loc字符串示意.png) -->
  <!-- - ![与数值对应](../../res/img/BigDataMicroMajor/Python/loc字符串数值对照表.png) -->
- loc = (x, y)
  - (x, y) 表示图例左下角的位置，这是最灵活的一种放置图例的方法，慢慢调整，总会找到你想要的放置图例的位置
  - x, y并不是轴域中实际的x, y的值，而是将x轴, y轴分别看成1, 即： 
    - $( x / (x\_max-x\_min) , y / (y\_max - y\_min) )$
      - 即进行归一化处理

---
#### 设置图例
- 图例往往位于图形绘制结果的一角或一侧,主要用于对所绘制的图形中使用各种符号和颜色进行说明,便于理解图形
- 使用方法
  - matplotlib.pyplot中的legend()函数;

---
legend的主要参数如下:
- loc
  - 用来说明图例的位置,可为整数,字符串或实数元组
  - 可用的字符串值有
    - best(0)
    - upper right(1),upper left(2),
    - lower left(3), lower right(4)
    - right(5),left(6)
    - lower center(8),upper center(9)
    - center(10) 
  - 通常情况下，legend()如果不设置任何参数，默认是加到图像的内的位置。
  - 若要放至的图之外，可设置参数`bbox_to_anchor`的值。 
    - ```python
      bbox_to_anchor=(levelnum,vernum)
      ```
- fontsize	
  - 用来指定图例中的文本使用的字号
  - 可以是表示绝对大小的整数,实数或表示相对大小的字符串.
- facecolor	
  - 用来指定图例的背景颜色
- edgecolor	
  - 用来指定图例的边框颜色
- shadow	
  - 用来指定图例是否显示阴影的布尔值
- framealpha	
  - 用来指定图例背景透明度的实数
- title	
  - 用来指定图例标题的字符串
- handles
  - 图例对应的plot对象
- labels
  - 图例的名称
    - 能够覆盖在plt.plot( )中label参数值



---
##### 例1:给三角函数图加图例
```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
plt.title('sin---cos 曲线图')
plt.plot(a1, c1)
plt.plot(a1, b1)
plt.legend(['cosx', 'sinx'], loc=3) # loc=3对应lower left
plt.show()

```
- 运行截图
  <!-- - ![](../../res/img/BigDataMicroMajor/Python/图例实例1.png) -->


---
##### 给四个子图分别添加图例
```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
d1 = 2 * a1 + 4
e1 = a1 ** 2 + 4 * a1 + 3

plt.figure(figsize=(8, 4))  # 创建画布
plt.suptitle('Figuer 标题', fontsize=14)

plt.subplot(2, 2, 1)  # plt.subplot(221)
plt.title('sin(x)')
plt.plot(a1, b1)
plt.legend(['sinx'])
plt.subplot(2, 2, 2)
plt.title('coswe')
plt.plot(a1, c1)
plt.legend(['cosx'])
plt.subplot(223)
plt.title('直线')
plt.plot(a1, d1)
plt.legend(['straight lines'], edgecolor='r')
plt.subplot(224)
plt.title('二次函数')
plt.plot(a1, e1)
plt.tight_layout(1, 3, 3)
plt.show()

```
- 运行截图
<!-- ![](../../res/img/BigDataMicroMajor/Python/图例例2.png) -->





---
#### 保存与显示图

---
##### 保存：
- ```python
  savefig(fname, dpi=None)
  ```
  - 常用的两个参数：保存的文件名与像素.
- matplotlib文件保存有格式要求，当输入一个错误的格式如.bmp，系统会显示错误，并提示其支持的格式：
  ```python
  ValueError: Format 'bmp' is not supported (supported formats: eps, jpeg, jpg, pdf, pgf, png, ps, raw, rgba, svg, svgz, tif, tiff)
  ```

---
###### 实例
```python
import matplotlib.pyplot as plt
import numpy as np
import os

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '123.png'))

plt.rcParams['font.family'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
a1 = np.linspace(-2 * np.pi, 2 * np.pi)
b1 = np.sin(a1)
c1 = np.cos(a1)
d1 = 2 * a1 + 4
e1 = a1 ** 2 + 4 * a1 + 3
plt.figure(figsize=(8, 4))  # 创建画布
plt.suptitle('Figuer 标题', fontsize=14)

plt.subplot(2, 2, 1)  # plt.subplot(221)
plt.title('sin(x)')
plt.plot(a1, b1)
plt.legend(['sinx'])
plt.subplot(2, 2, 2)
plt.title('coswe')
plt.plot(a1, c1)
plt.legend(['cosx'])
plt.subplot(223)
plt.title('直线')
plt.plot(a1, d1)
plt.legend(['straight lines'], edgecolor='r')
plt.subplot(224)
plt.title('二次函数')
plt.plot(a1, e1)
plt.tight_layout(1, 3, 3)

# 图的保存
plt.savefig(file_path)
plt.show()

```
- 这里将图片保存在了py文件同级目录下
  - 因为这个文件属于测试冗余文件,放在这里方便删除


---
##### 显示
- ```python
  show()
  ```

---
### 折线图:plot()实例
- 折线图比较适合描述和比较
  - 多组数据随时间变化的趋势。
  - 或者一组数据对另外一组数据的依赖程度。
- 使用方法
  - matplotlib.pyplot中的plot()函数。
- 相关参数可以设置：
  -  折线图上图上端点的位置,标记符号的形状,大小和颜色以及线条的颜色,线型等样式。
- pyplot绘图
  - 1.生成源始数据，导入数据。
  - 2.设置标签和坐标轴刻度
  - 3.设置标题
  - 4.确定绘制的图形形状。
  - 5.设置图例
  - 7.保存图
  - 8.显示图

- `plot()`函数
  ```python
  plot(x轴,y轴,折线形状颜色标记，设置标签显示信息) 
  ```

  <!-- ![图例标签](../../res/img/BigDataMicroMajor/Python/图例标签.png) -->


---
#### 例1 商场优惠
- 某商品进价49元，售价75元，现在商场新品上架搞促销活动，
  - 顾客每多买一件就给优惠1%，
    - 但是每人最多可以购买30件。
  - 对于商场而言
    - 活动越火爆商品单价越低，但总收入和盈利越多。
  - 对于顾客来说
    - 虽然买的越多单价越低，但是消费总金额却是越来越多的
    - 并且购买太多也会因为用不完而导致过期不得不丢弃造成浪费。
  - 现在要求计算并使用折线图可视化
    - 顾客购买数量num与商家收益、顾客总消费以及顾客省钱情况的关系
      - 并标记商场收益最大的批发数量和商场收益。

```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['simhei']
# 购买数量数据存储
num = np.array(range(1, 31))
# 购买数量对应的优惠价
price = 75
wnum = np.array([price * (1 - 0.01 * i) for i in num])
# 商家收益数据
earnnum = (wnum - 49) * num
# 顾客总消费
cusprice = wnum * num
# 顾客省钱
cusnum = num * (price - wnum)
plt.xlabel('顾客购买数量(件) ')
plt.ylabel('金额(元) ')
plt.plot(num, earnnum)
plt.plot(num, cusprice)
plt.plot(num, cusnum)
plt.title('数量--金额关系图')
plt.legend(['商家收益', '顾客总消费', '顾客省钱'])
plt.show()

```
- 运行结果
  <!-- - ![](../../res/img/BigDataMicroMajor/Python/折线图实例1.png) -->

---
##### 修改线的形状
- 可以在plot中增加参数
  - 修改线的形状： 
    - '-' 实线
    - '--' 虚线
    - '-.' 点线
    - ':' 点虚线
    - '.' 点
    - ','像素
    - 'o' 圆形
    - 'v' 朝下的三角形
    - '^' 朝上的三角形
    - 's' 正方形
    - '*' 五角形 
  - 修改线的颜色:
    - ‘b’蓝色
    - ‘g’绿色
    - ‘r’红色
    - ‘c’青色
    - ‘m’品红
    - ‘y’黄色、
    - ‘k’黑色
    - ‘w’ 白色 
  - 加入图例的标签 
    - label='文本'

```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['simhei']
num = np.array(range(1, 31))  # 购买数量数据存储
# 购买数量对应的优惠价
price = 75
wnum = np.array([price * (1 - 0.01 * i) for i in num])
earnnum = (wnum - 49) * num  # 商家收益数据
cusprice = wnum * num  # 顾客总消费
cusnum = num * (price - wnum)  # 顾客省钱
plt.xlabel('顾客购买数量(件) ')
plt.ylabel('金额(元) ')
plt.plot(num, earnnum, '--', label='商家收益')
plt.plot(num, cusprice, label='顾客总消费')
plt.plot(num, cusnum, ':', label='顾客省钱')
plt.title('数量--金额关系图')

plt.legend()
plt.show()

```
- 运行截图
  <!-- - ![](../../res/img/BigDataMicroMajor/Python/折线图实例1.2.png) -->

---
### 散点图实战

---
#### 例1:折线图重绘为散点图
- 结合折线图和散点图，重新绘制例9-2中要求的图形。
  - 使用plot()函数依次连接若干端点绘制折线图
  - 使用scatter()函数在指定的端点处绘制散点图
  - 结合以上两个函数，可以实现例9-2同样的效果图。
  - 为了稍做区分，在本例中把端点符号设置为蓝色三角形。

<!-- ![图](../../res/img/BigDataMicroMajor/Python/11.26-散点图实例1.png) -->


---
#### 例2:商场信号强度
- 某商场开业三个月后，有顾客反应商场一楼部分位置的手机信号不好，个别收银台有时无法正常使用微信支付或支付宝，商场内也有些位置无法正常使用微信。
  - 为此，商场安排工作人员在不同位置对手机信号强度进行测试以便进一步提高服务质量和用户体验
    - 测试数据保存于文件`D:\服务质量保证\商场一楼手机信号强度.txt`中
      - 文件中每行使用逗号分隔的三个数字分别表示商场内一个位置的x、y坐标和信号强度
        - 其中x、y坐标值以商场西南角为坐标原点且向东为x正轴(共150米) 、向北为y正轴(共30米) 
        - 信号强度以0表示无信号、100表示最强。
-  编写程序，使用散点图对该商场一楼所有测量位置的手机信号强度进行可视化
   - 既可以直观地发现不同位置信号的强度以便分析原因
   - 也方便观察测试位置的分布是否合理。
   - 在散点图中
     - 使用横轴表示x坐标位置
     - 纵轴表示y坐标位置
     - 使用五角星标记测量位置
     - 五角星大小表示信号强度
       - 五角星越大表示信号越强，反之表示信号越弱。
       - 为了获得更好的可视化效果,信号强度
         - 高于或等于70的位置使用绿色五角星
         - 低于70且高于或等于40的使用蓝色五角星
         - 低于40的位置使用红色五角星。


---
#### 例3:商场优惠折线图散点图结合
```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['simhei']
num = np.array(range(1, 31))  # 购买数量数据存储
# 购买数量对应的优惠价
price = 75
wnum = np.array([price * (1 - 0.01 * i) for i in num])
earnnum = (wnum - 49) * num  # 商家收益数据
cusprice = wnum * num  # 顾客总消费
cusnum = num * (price - wnum)  # 顾客省钱
plt.xlabel('顾客购买数量(件) ')
plt.ylabel('金额(元) ')
plt.plot(num, earnnum, '--', label='商家收益')
plt.plot(num, cusprice, label='顾客总消费')
plt.plot(num, cusnum, ':', label='顾客省钱')
plt.title('数量--金额关系图')
# 求商场收益的最大值
maxearn = max(earnnum)
# 求商场收益最大值在earnnum中的位置。采用列表求索引的方法
pos = list(earnnum).index(maxearn)
# 用散点图标出商场收益的最大值
plt.scatter(pos + 1, maxearn, marker='*', color='r', s=240)
plt.legend()
plt.show()

```
- 运行截图
  <!-- - ![](../../res/img/BigDataMicroMajor/Python/散点图例3.png) -->

---
##### 标注数字
- 如何实现标注
  ```python
  annotate(s='str', 
          xy=(x, y), 
          xytext=(l1, l2), 
          arrowprops=dict())
  ```
- s:标注的文本 
- xy=(横坐标，纵坐标) 箭头尖端 
- xytext=(横坐标，纵坐标) 文字的坐标
- arrowprops= {facecolor= '颜色',shrink = '数字' ,arrowstyle=''}

---
```python
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = ['simhei']
num = np.array(range(1, 31))    # 购买数量数据存储
# 购买数量对应的优惠价
price = 75
wnum = np.array([price * (1 - 0.01 * i) for i in num])
earnnum = (wnum - 49) * num     # 商家收益数据
cusprice = wnum * num           # 顾客总消费
cusnum = num * (price - wnum)   # 顾客省钱
plt.xlabel('顾客购买数量(件) ')
plt.ylabel('金额(元) ')
plt.plot(num, earnnum, '--', label='商家收益')
plt.plot(num, cusprice, label='顾客总消费')
plt.plot(num, cusnum, ':', label='顾客省钱')
plt.title('数量--金额关系图')
# 求商场收益的最大值
maxearn = max(earnnum)
# 求商场收益最大值在earnnum中的位置。采用列表求索引的方法
pos = list(earnnum).index(maxearn)
# 用散点图标出商场收益的最大值
plt.scatter(pos + 1, maxearn, marker='*', color='r', s=240)
plt.annotate(maxearn, xy=(pos + 1, maxearn + 40),
             xytext=(pos, maxearn + 300),
             arrowprops=dict(facecolor='blue',
                             shrink=5,
                             )
             )
plt.legend()
plt.show()

```
- 运行截图
  <!-- - ![](../../res/img/BigDataMicroMajor/Python/散点图例1.2.png) -->


---
## Matplotlib数据可视化

---
### 数据可视化的误区
- 没有明确可视化的目标
- 通过特殊图形设置误导受众
- 选择过于“花哨”的图形却忽略了可视化的本质
- 缺乏根据信息表达目标选择“最佳”图形的意识
- 信息过载

---
### 可视化方式
- 可视化要表达的信息内容按主题可分为四种：
  - 趋势
  - 对比
  - 结构
  - 关系

---
#### 趋势
- 趋势指多组数据随时间变化的发展趋势，或者一组数据对另个一组数据的依赖程度。
- 例如走势的高低、状态的变化好坏，按周的订单量趋势、按月的转化率趋势等等通常用于按时间发展的眼光来评估事物的场景。
- 常用的可视化图形是**折线图**(**plot**())
  - 在**数据项较少**的情况下，也可以使用**柱形图**(**bar**())。

<!-- ![折线图与柱形图](../../res/img/BigDataMicroMajor/Python/折线图与柱形图.png)   -->
- 数据项比较少时用柱状图比较清晰,但是当数据项多时柱状图会显得并排会显得比较挤

---
##### 示例:商场部门业绩
```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
woman_d = [70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60]
food_d = [60, 40, 46, 50, 57, 76, 70, 33, 70, 61, 49, 45]
cos_d = [110, 75, 133, 80, 83, 95, 87, 89, 96, 88, 86, 89]
gold_d = [143, 100, 89, 90, 78, 129, 100, 97, 108, 152, 96, 87]

mo = [str(i) + '月' for i in range(1, 13)]

plt.figure(figsize=(10, 5))
plt.title('某商场各部门业绩(万元) ')
plt.xticks(month, mo)
plt.xlabel('月份')
plt.ylabel('营业额(万元) ', labelpad=12)
# 绘制折线
plt.plot(month, food_d, linestyle='--', color='blue')
plt.plot(month, man_d, color='r')
plt.plot(month, woman_d, color='c', linestyle=':')
plt.plot(month, cos_d, color='y')
plt.plot(month, gold_d, linestyle='-.')
# 添加图例
plt.legend(['餐饮', '男装', '女装', '化妆品', '金银首饰'])

plt.show()

```
- 运行截图
  <!-- ![](../../res/img/BigDataMicroMajor/Python/部门业绩折线图.png) -->


---
#### 对比
- 对比指不同事物之间或同一事物在不同时间下的优劣等的对照，能够比较清晰地反映数据的差异，一般情况下用来反映分类项目之间的比较。
- 例如商场中不同部门的月业绩情况，某课程的成绩的分布情况，新用户与老用户的客单价对比、不同广告来源渠道的订单量和利润率对比等。
- 常用的可视化图形
  - **对比数据较少**时选
    - 择柱形图(bar())、条形图(barh())；
  - 而多个对象的多个指标的同时对比可用
    - 雷达图(polar())等。

<!-- ![](../../res/img/BigDataMicroMajor/Python/绘图-对比-1.png) -->
<!-- ![](../../res/img/BigDataMicroMajor/Python/绘图-对比-2.png) -->
<!-- ![](../../res/img/BigDataMicroMajor/Python/绘图-对比-3-雷达图.png) -->

---
##### 示例:商场男女装销售对比
```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
woman_d = [70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60]
mo = [str(i) + '月' for i in range(1, 13)]
plt.figure(figsize=(10, 5))
plt.xticks(month, mo)
plt.xlabel('月份')
plt.ylabel('营业额(万元) ', labelpad=12)
plt.bar(month, man_d, 0.8, color='#FF00FF', label='男装', )
plt.bar(month, woman_d, color='lightskyblue', label='女装')
plt.title('某商场各部门业绩(万元) ')
plt.legend()
plt.show()

```
<!-- ![](../../res/img/BigDataMicroMajor/Python/商场各部门业绩1.png) -->

---
###### 图形美化-"倒影"柱状图
- 绘图时另一组数据的纵坐标取相反数
```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
plt.rcParams['axes.unicode_minus'] = False
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
# 为了方便取每个数的负数，womana_d转换为数组
woman_d = np.array([70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60])
mo = [str(i) + '月' for i in range(1, 13)]
plt.figure(figsize=(10, 5))
plt.xticks(month, mo)
plt.xlabel('月份')
plt.ylabel('营业额(万元) ', labelpad=12)
plt.bar(month, man_d, 0.8, color='#FF00FF', label='男装', )
plt.bar(month, -woman_d, color='lightskyblue', label='女装')
plt.title('某商场各部门业绩(万元) ')
plt.legend()
plt.show()

```
- 运行截图
  <!-- !["倒影"柱状图](../../res/img/BigDataMicroMajor/Python/商场各部门业绩2.png) -->

---
###### 美化-并列柱状图
- 一组数据的x轴坐标左/右平移一定距离
  - 平移的距离应当 >= 柱状图的宽度以避免图象重叠
```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
plt.rcParams['axes.unicode_minus'] = False
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
woman_d = [70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60]
mo = [str(i) + '月' for i in range(1, 13)]
plt.figure(figsize=(10, 5))
plt.xticks(month, mo)
plt.xlabel('月份')
plt.ylabel('营业额(万元) ', labelpad=12)
plt.bar(month - 0.4, man_d, 0.4, color='#FF00FF', label='男装', )
plt.bar(month, woman_d, 0.4, color='lightskyblue', label='女装')
plt.title('某商场各部门业绩(万元) ')
plt.legend()
plt.show()

```

---
###### 美化:添加注释文字

```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
plt.rcParams['axes.unicode_minus'] = False
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
woman_d = [70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60]
mo = [str(i) + '月' for i in range(1, 13)]
plt.figure(figsize=(10, 5))
plt.xticks(month, mo)
plt.xlabel('月份')
plt.ylabel('营业额(万元) ', labelpad=12)
plt.bar(month - 0.4, man_d, 0.4, color='#FF00FF', label='男装', )
plt.bar(month, woman_d, 0.4, color='lightskyblue', label='女装')
plt.title('某商场各部门业绩(万元) ')
plt.legend()

for i, j in zip(month, man_d):
    plt.text(i - 0.4, j/2, j, ha='center')
    # i-0.4 :文字起始(左边沿)横坐标
    # j/2 :文字起始(下边沿)纵坐标
    # ha = 'center' : i-0.4作为文字的横向中点,文字均匀分布在i-0.4两侧
    # j : 待绘制的文字/数值


for i, j in zip(month, woman_d):
    plt.text(i - 0.1, j - 10, j)
plt.show()

```
- ```python 
  for i, j in zip(month, man_d):
    plt.text(i - 0.4, j/2, j, ha='center')
  ```
  - j
    - 待绘制的文字/数值
  - i-0.4
    - 文字/数值起始(左边沿)横坐标
  - j/2
    - 文字/数值起始(下边沿)纵坐标
  - ha = 'center'
    - i-0.4作为文字的横向中点,文字/数值均匀分布在i-0.4两侧


- 运行截图
  <!-- ![](../../res/img/BigDataMicroMajor/Python/商场各部门业绩3.png) -->

---
##### 示例2:商场各部门业绩
```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
woman_d = [70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60]
re_d = [60, 40, 46, 50, 57, 76, 70, 33, 70, 61, 49, 45]
hua_d = [110, 75, 133, 80, 83, 95, 87, 89, 96, 88, 86, 89]
gl_d = [143, 100, 89, 90, 78, 129, 100, 97, 108, 152, 96, 87]
mo = [str(i) + '月' for i in range(1, 13)]
plt.figure(figsize=(10, 5))
plt.xticks(month, mo)
plt.xlabel('月份')
plt.ylabel('营业额(万元) ', labelpad=12)
plt.bar(month - 0.1, re_d, 0.1)
plt.bar(month, man_d, 0.1, color='r')
plt.bar(month + 0.1, woman_d, 0.1, color='b')
plt.bar(month + 0.2, hua_d, 0.1)
plt.bar(month + 0.3, gl_d, 0.1)
plt.title('某商场各部门业绩(万元) ')
plt.legend(['餐饮', '男装', '女装', '化妆品', '金银首饰'])
plt.show()

```
- 运行截图
  <!-- ![](../../res/img/BigDataMicroMajor/Python/商场各部门业绩4.png) -->
  - 显得比较挤,感觉上没有折线图美观
  - 并且数据项多了之后同一组数据的变化趋势就不明显了
    - 单作对比数据实用的话这样画柱状图还好
    - 但是用折线图的话还能同时反映每组数据的变化趋势

---
###### 转化:条形图:barh()
```python
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = ['simhei']
# 数据存储
month = np.array(range(1, 13))  # 存储月份
man_d = [51, 32, 58, 57, 30, 46, 38, 38, 40, 53, 58, 50]
woman_d = [70, 30, 48, 73, 82, 80, 43, 25, 30, 49, 79, 60]
re_d = [60, 40, 46, 50, 57, 76, 70, 33, 70, 61, 49, 45]
hua_d = [110, 75, 133, 80, 83, 95, 87, 89, 96, 88, 86, 89]
gl_d = [143, 100, 89, 90, 78, 129, 100, 97, 108, 152, 96, 87]
mo = [str(i) + '月' for i in range(1, 13)]

plt.figure(figsize=(10, 6))
plt.ylim(0, 13)
plt.yticks(month, mo)
plt.ylabel('月份')
plt.xlabel('营业额(万元) ', labelpad=12)
plt.barh(month - 0.2, re_d, 0.2, color='pink')
plt.barh(month, man_d, 0.2, color='r')
plt.barh(month + 0.2, woman_d, 0.2, color='c')
plt.barh(month + 0.4, hua_d, 0.2, color='yellow')
plt.barh(month + 0.6, gl_d, 0.2, color='blue')
plt.title('某商场各部门业绩(万元) ')
plt.legend(['餐饮', '男装', '女装', '化妆品', '金银首饰'])
plt.show()

```
- 运行截图
  <!-- ![](../../res/img/BigDataMicroMajor/Python/商场各部门业绩5_条形图.png) -->


---
#### 结构
- 结构也可以称为成分、构成或内容组成，指的是一个整体内有哪些元素组成，以及各个元素的影响因素或程度的大小。
- 例如不同品类的利润占比、不同类型客户的销售额占比、总体中各组成部分所占比重等。
- 常用的可视化图形，一般使用饼图(圆形图) 及其变体，
  - 变体例如玫瑰图、扇形图、环形图等；

<!-- ![](../../res/img/BigDataMicroMajor/Python/绘图-结构-1.png) -->


---
##### 示例1:成绩分段
```python
import matplotlib.pyplot as plt
import random

plt.rcParams['font.family'] = ['simhei']
# random.seed(30)
# 随机生成30位学生的考试成绩
stu_s = [random.randint(40, 100) for i in range(30)]
grade = {'0-49': 0,
         '50-59': 0,
         '60-69': 0,
         '70-79': 0,
         '80-89': 0,
         '90-100': 0}

plt.figure(figsize=(10, 6))
plt.title('学生成绩分段统计图')
plt.ylabel('学生成绩分段人数')
plt.xlabel('分数段')

for i in stu_s:
    if i <= 49:
        s = '0-49'
        grade[s] = grade.get(s, 0) + 1
    elif i <= 59:
        s = '50-59'
        grade[s] = grade.get(s, 0) + 1
    elif i <= 69:
        s = '60-69'
        grade[s] = grade.get(s, 0) + 1
    elif i <= 79:
        s = '70-79'
        grade[s] = grade.get(s, 0) + 1
    elif i <= 89:
        s = '80-89'
        grade[s] = grade.get(s, 0) + 1
    else:
        s = '90-100'
        grade[s] = grade.get(s, 0) + 1

gr1_name = list()
gr1_data = list()
for i in grade:
    gr1_name.append(i)
    gr1_data.append(grade[i])
gr1 = range(len(gr1_name))
plt.xticks(gr1, gr1_name)
plt.bar(gr1_name, gr1_data, 0.6, color='c')
for x, y in zip(gr1_name, gr1_data):
    plt.text(x, y + 0.1, str(y))

plt.show()


```