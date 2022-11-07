# 随机产生10个整数存入列表，对其进行由大到小的排序
from random import randint


def sort_nums(m, n):    # 随机返回一个有10个从大到小排列的元素的列表
    # 参数要求:m>n且均为整数
    list_nums = list()
    for i in range(10):
        list_nums.append(randint(m, n))
    list_nums.sort(reverse=True)
    return list_nums


print(sort_nums(-50, 50))


