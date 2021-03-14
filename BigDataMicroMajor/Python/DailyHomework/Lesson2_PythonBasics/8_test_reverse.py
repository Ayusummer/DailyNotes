# 输入一个包含若干自然数的列表，输出这些自然数的平均值，结果保留3位小数。
import ast

try:
    list1 = ast.literal_eval(input("请输入一个自然数组成的列表(元素间用,隔开):"))
    # 将获得的列表返回一个由自然数组成的列表
    list1 = list(map(int, list1))
except Exception as result:
    print("输入异常,请输入列表", result)

list1 = sorted(list1, reverse=True)
print("将输入的自然数降序得:", list1)