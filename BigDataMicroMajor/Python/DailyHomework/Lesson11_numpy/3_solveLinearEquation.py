# -*- coding: utf-8 -*-
# @Time    : 2020/11/17 18:13
# @Author  : 咸鱼型233
# @File    : 3_solveLinearEquation.py
# @Software: PyCharm
# @Function: 求解线性方程组
import numpy as np

a = np.mat([[1, 2, 3],
            [4, 5, 6],
            [7, 8, 0]])     # 系数矩阵
b = np.mat([[1],
            [1],
            [1]])           # 常数矩阵
print("方阵a的特征值和右特征向量为:\n{0}"
      .format(np.linalg.eig(a)))    # 计算方阵a的特征值和右特征向量
print("系数矩阵的2-范数为:\n{0}"
      .format(np.linalg.norm(a)))   # 计算系数矩阵的2-范数
