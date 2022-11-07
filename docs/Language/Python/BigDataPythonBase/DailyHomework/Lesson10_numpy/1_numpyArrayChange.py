# -*- coding: utf-8 -*-
# @Time    : 2020/11/10 17:31
# @Author  : 咸鱼型233
# @File    : 1_numpyArrayChange.py
# @Software: PyCharm
# @Function: 输出:
# [[1. 0. 1. 0. 1.]
# [0. 1. 0. 1. 0.]
# [1. 0. 1. 0. 1.]
# [0. 1. 0. 1. 0.]
# [1. 0. 1. 0. 1.]]

import numpy as np

# 先构造一个全0的5行5列数组
array_result = np.zeros(shape=(5, 5))

# 很明显这是一个奇偶间隔01的数组,因此利用此性质重构数组
for i in range(5):
    for j in range(5):
        if (i + j) % 2 == 0:
            array_result[i][j] = 1
        else:
            array_result[i][j] = 0

# 输出数组
# print(array_result)

# 老师的解法
arr = np.ones((5, 5))
arr[1::2, ::2] = 0
arr[::2, 1::2] = 0
print(arr)


