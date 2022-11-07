# -*- coding : utf-8 -*-
# @Time      : 2021/6/5 9:53
# @Author    : 咸鱼型233
# @File      : GradeAnalyse.py
# @Software  : PyCharm
# @Function  : 成绩分析
# @ChangeLog :
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from config import path_xlsx

file_path_load = path_xlsx

# 原数据地址定义
file_path_origin = path_xlsx

# 读取数据并给出列名
df = pd.read_excel(file_path_origin, 'sheet1', index_col=None, na_values=['NA'])
print(type(df))
print(df)

# 使用黑体
plt.rcParams['font.family'] = ['SimHei']
# df = df.cumsum()

df.plot()
plt.show()




# # 创建画布
# plt.figure(figsize=(15, 5))
# plt.title("成绩统计")
#
# plt.bar(pd["语文"])
#
# plt.show()
