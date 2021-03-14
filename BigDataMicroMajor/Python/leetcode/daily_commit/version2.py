# -*- coding: utf-8 -*-
# @Time    : 2020/11/22 10:55
# @Author  : 咸鱼型233
# @File    : version2.py
# @Software: PyCharm
# @Function: 排序
# 实测评价: 内存占用以及运行效率都不如version1,代码简单不代表效率高
def isAnagram(s: str, t: str) -> bool:
    return False if sorted(s) != sorted(t) else True


print(isAnagram('ab', 'a'))


