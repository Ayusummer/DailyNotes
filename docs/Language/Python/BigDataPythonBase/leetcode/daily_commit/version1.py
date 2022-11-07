# -*- coding: utf-8 -*-
# @Time    : 2020/11/22 10:54
# @Author  : 咸鱼型233
# @File    : version1.py
# @Software: PyCharm
# @Function: 字典存储词频
# 实测评价: 
def isAnagram(s: str, t: str) -> bool:
    count_dict = {}
    count_dict_s = {}
    for item in t:
        count_dict[item] = count_dict[item] + 1 if item in count_dict else 1
    for item in s:
        count_dict_s[item] = count_dict_s[item] + 1 if item in count_dict_s else 1
    if count_dict.keys() != count_dict_s.keys():
        return False
    for i in count_dict.keys():
        if count_dict[i] != count_dict_s[i]:
            return False
    return True


print(isAnagram('ab', 'a'))
