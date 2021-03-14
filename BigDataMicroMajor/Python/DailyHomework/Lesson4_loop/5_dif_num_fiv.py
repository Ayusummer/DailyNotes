# 编写程序：输出各位数字都不相同的所有三位数
import copy     # 用于深拷贝,直接用=会导致浅拷贝,那么对赋值列表的修改会改变原始列表的元素
lst1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for i in range(1, 10):
    lst2 = copy.deepcopy(lst1)
    if i in lst2:
        lst2.remove(i)
    for j in lst2:
        lst3 = copy.deepcopy(lst2)
        if j in lst3:
            lst3.remove(j)
        for k in lst3:
            print(100*i+10*j+k)

# 编写程序：输出各位数字都不相同的所有三位数
# 这里因为不会对列表元素进行修改,所以可以采用浅拷贝
# 假如像字典一样对字典的某个键新增元素,那么会导致其浅拷贝对象相应键发生改变
lst1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for i in range(1, 10):
    lst2 = lst1.copy()
    if i in lst2:
        lst2.remove(i)
    for j in lst2:
        lst3 = lst2.copy()
        if j in lst3:
            lst3.remove(j)
        for k in lst3:
            print(100*i+10*j+k)



