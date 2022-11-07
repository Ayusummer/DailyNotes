# -*- coding: utf-8 -*-
# @Time    : 2020/11/17 18:04
# @Author  : 咸鱼型233
# @File    : 1_productOutput.py
# @Software: PyCharm
# @Function: 矩阵的基本运算
import numpy as np

M = np.mat([(0.10, 0.30, 0.15),
            (0.30, 0.40, 0.25),
            (0.10, 0.20, 0.15)])        # 成本/产品表
N = np.mat([[4000, 4500, 4500, 4000],
            [2000, 2600, 2400, 2200],
            [5800, 6200, 6000, 6000]])  # 产品/季度产量表
MN = M*N
print("每一季度中每一类成本的数量为:\n{0}".format(MN))
print("每一季度三类成本的总数量为:\n{0}".format(MN.sum(axis=0)))
print("四个季度每类成本的总数量为:\n{0}".format(MN.sum(axis=1)))

