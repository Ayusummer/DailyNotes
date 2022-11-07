# 实现二分查找功能
from random import randint


def binary_sort(des_num, list1, begin, end):
    if begin >= end - 1:
        print("该列表中没有该数据")
    elif list1[(end + begin) // 2] == des_num:
        print("该数据在列表中的第一次出现时下标为:", (end + begin) // 2)
        return
    elif list1[(end + begin) // 2] > des_num:
        binary_sort(des_num, list1, begin, (end + begin) // 2)
    else:
        binary_sort(des_num, list1, (end + begin) // 2, end)


listNum = list()
# 生成无序数组
for i in range(30):
    listNum.append(randint(0, 100))
# 排序生成有序数组
listNum.sort()
print("已知列表为:", listNum)
desti_num = eval(input("请输入查询数据:"))
binary_sort(desti_num, listNum, 0, len(listNum)-1)
