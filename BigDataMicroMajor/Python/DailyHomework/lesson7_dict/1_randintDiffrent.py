# 1．编写程序：生成20个0-20之间的随机数并输出其中互不相同的数。
from random import randint

list1 = list()
for i in range(20):
    list1.append(randint(0, 20))
list2 = list()
for i in list1:
    if i not in list2:
        list2.append(i)
for i in list2:
    print(i, end=" ")
