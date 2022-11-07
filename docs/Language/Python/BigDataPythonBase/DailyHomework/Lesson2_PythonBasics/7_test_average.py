# 输入一个包含若干自然数的列表，输出这些自然数的平均值，结果保留3位小数。
import numpy as np
import ast

try:
    list1 = ast.literal_eval(input("请输入一个自然数组成的列表(元素间用,隔开):"))
    # 将获得的列表返回一个由自然数组成的列表
    list1 = list(map(int, list1))
except Exception as result:
    print("输入异常,请输入列表", result)

aver1 = np.mean(list1)
print("该组自然数的平均值为:{:.3f}".format(aver1), "(结果保留三位小数)")