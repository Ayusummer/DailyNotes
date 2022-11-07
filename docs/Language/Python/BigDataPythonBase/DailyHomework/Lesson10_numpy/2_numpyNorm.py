# -*- coding: utf-8 -*-
# @Time    : 2020/11/10 18:22
# @Author  : 咸鱼型233
# @File    : 2_numpyNorm.py
# @Software: PyCharm
# @Function: 用numpy求欧氏距离
import numpy as np
import math     # 用于比对的包

a = np.array([0, 0, 0])
b = np.array([3, 4, 5])
distance = np.linalg.norm(a-b)
print(distance)
print(math.sqrt(3**2+4**2+5**2))
