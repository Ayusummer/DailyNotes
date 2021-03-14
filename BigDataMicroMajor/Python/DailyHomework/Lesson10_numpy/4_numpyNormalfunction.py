# -*- coding: utf-8 -*-
# @Time    : 2020/11/10 18:39
# @Author  : 咸鱼型233
# @File    : 4_numpyNormalFunction.py
# @Software: PyCharm
# @Function: numpy求平均值,方差,标准差
import numpy as np

height_arr = np.random.normal(169, 4, 10)       # 10个身高
weight_arr = np.random.normal(105, 10, 10)      # 10个体重
values_arr = np.vstack((height_arr, weight_arr))
print("10名同学的身高体重为:", values_arr)
aver_value = np.mean(values_arr, axis=1)
print("10名同学身高体重的平均值为:{0}".format(aver_value))
max_value = np.max(values_arr, axis=1)
print("10名同学身高体重的最大值为:{0}".format(max_value))
min_value = np.min(values_arr, axis=1)
print("10名同学身高体重的最小值为:{0}".format(min_value))
std_value = np.std(values_arr, axis=1)
print("10名同学身高体重的标准差为:{0}".format(std_value))
var_value = np.var(values_arr, axis=1)
print("10名同学身高体重的方差为:{0}".format(var_value))




