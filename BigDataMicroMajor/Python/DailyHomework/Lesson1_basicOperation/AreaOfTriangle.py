# 输入三角形三条边，用海伦公式计算三角形的面积
import math

# eval() 函数用来执行一个字符串表达式，并返回表达式的值。
# input() 函数接受一个标准输入数据，返回为 string 类型。
a = 0;
b = 0;
c = 0;
# python支持>=,<=的写法
# 当输入的三边长无法构成三角形时循环输入
while (a + b <= c or a + c <= b or b + c <= a):
    # 异常捕获,防止没输入边长直接回车
    # 留下前面这句是用于三边长无法构成三角形时重新输入,如果直接接While循环会导致跳过输入
    try:
        a = eval(input("请输入a的边长:"))
    except:
        print("输入异常")
    # 用while循环保证输入的边长一定是正数
    while (a <= 0):
        try:
            a = eval(input("请输入a的边长:"))
        except:
            print("输入异常")
        if (a <= 0):
            print("三角形边长必须为正数")
    try:
        b = eval(input("请输入b的边长:"))
    except:
        print("输入异常")
    while (b <= 0):
        try:
            b = eval(input("请输入b的边长:"))
        except:
            print("输入异常")
        if (b <= 0):
            print("三角形边长必须为正数")
    try:
        c = eval(input("请输入c的边长:"))
    except:
        print("输入异常")
    while (c <= 0):
        try:
            c = eval(input("请输入c的边长:"))
        except:
            print("输入异常")
        if (c <= 0):
            print("三角形边长必须为正数")
    # 提示性语句,当输入的三边长无法构成三角形时输出提示
    if (a + b <= c or a + c <= b or b + c <= a):
        print("输入的三边长无法构成三角形,请重新输入三边长")

p = (a + b + c) / 2
s = math.sqrt(p * (p - a) * (p - b) * (p - c))
# 格式输出：{0:2.2f}
# 前面的2表示宽度为2，>2则按照原长输出，后面的2表示小数点后保留两位，f表示float ，0用于format函数，后面第一个值赋给0；
# 默认保留6位小数
print("三角形的面积是{:2f}".format(s));
