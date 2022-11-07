# -*- coding: utf-8 -*-
# @Time    : 2021/5/13 22:54
# @Author  : 咸鱼型233
# @File    : 违章现象比例.py
# @Software: PyCharm
# @Function:
# @ChangeLog
# 数据源格式 : 第三列为违章电器,有效数据从第2行开始,第一行为属性行
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from config import path_xlsx

file_path_load = path_xlsx

# 原数据地址定义
file_path_origin = path_xlsx

# 读取数据并给出列名
df = pd.read_excel(file_path_origin, names=["学院", "楼栋", "违章电器"])
# print(df["违章电器"])

# 统计词频
count_dict = {}
for item in df["违章电器"]:
    # 若单词在词典中则其数量+1,若不在则加入词典,数量置1
    count_dict[item] = count_dict[item] + 1 if item in count_dict else 1
# 按照元组第二个数据值降序生成的元组列表
result_lst = sorted(count_dict.items(), key=lambda x: x[1], reverse=True)


# print(result_lst)
# print(result_lst.__len__())

# 饼图图例
lst_section = []
num_section = []
for i in range(len(result_lst)):
    lst_section.append(result_lst[i][0]+" : "+str(result_lst[i][1]))
    num_section.append(result_lst[i][1])

# print(lst_section)
# print(num_section)


# 使用黑体
plt.rcParams['font.family'] = ['SimHei']


# 创建画布
plt.figure(figsize=(15, 5))
plt.title('第11周宿舍安全检查违禁品类目统计\n'+"共"+str(len(df))+"条数据")

plt.pie(num_section,
        labels=lst_section,
        autopct='%.1f%%',
        radius=1.2)

plt.show()
