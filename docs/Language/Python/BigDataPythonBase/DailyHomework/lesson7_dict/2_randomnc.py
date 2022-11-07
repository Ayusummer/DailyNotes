# 2．编写程序，随机生成由英文字母和数字组成的4位验证码。
import string   # 用于获取所有大小写字母
import random

list1 = list()
for i in range(10):
    list1.append(i)
for i in string.ascii_letters:
    list1.append(i)
list_IDCode = list()
for i in range(4):
    list_IDCode.append(random.choice(list1))
print(list_IDCode)
