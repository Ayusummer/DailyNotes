# -*- coding: utf-8 -*-
"""
Created on Wed Sep  9 06:46:47 2020

@author: user
"""
# 输入三角形三条边，用海伦公式计算三角形的面积
import math
# 利用While True实现输入错误继续循环,循环中所有条件满足退出循环
while True:
    try:
        a = eval(input("请输入a的边长:"))
        b = eval(input("请输入b的边长:"))
        c = eval(input("请输入c的边长:"))
        assert a > 0 and b > 0 and c > 0, 'a,b,c需是正数'
        assert a + b > c and a + c > b and b + c > a, 'a,b,c不能构成三角形'
        break
    except Exception as result:
        print("输入异常,请输入数", result)

print(a, b, c)
p = (a + b + c) / 2
s = math.sqrt(p * (p - a) * (p - b) * (p - c))
print("三角形的面积是%.2f" % s);