# -*- coding: utf-8 -*-
# @Time    : 2020/12/12 10:39
# @Author  : 咸鱼型233
# @File    : Revenue.py.py
# @Software: PyCharm
# @Function: 处理营业额数据
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import os

file_path_load = os.path.abspath(os.path.join(os.path.dirname(__file__), '../res/files/prog/超市营业额.xlsx'))

plt.rcParams['font.family'] = 'simhei'
plt.rcParams['axes.unicode_minus'] = False
# 读入《超市营业额.xlsx》数据
data_excel = pd.read_excel(file_path_load)
print(data_excel.head(10))  # 查看数据列的前10行的内容，默认5行
