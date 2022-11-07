# -*- coding: utf-8 -*-
# @Time    : 2020/12/1 18:32
# @Author  : 咸鱼型233
# @File    : GradeAnalyze.py
# @Software: PyCharm
# @Function: 大学生学习情况分析(随机数据,就是套个场景)
import numpy as np
import matplotlib.pyplot as plt
from random import randint
import os

# --------------------  数据准备及处理部分 ------------------------------

# 数据准备
array_data = np.zeros(shape=(3, 100))
for i in range(3):
    for j in range(100):
        array_data[i][j] = randint(0, 100)

# 数据分组
"""1个3*5的二维数组
            [0, 60)   [60, 70)  [70, 80)  [80, 90)  [90,100]
高数
英语
程序设计基础
"""
array_data_down = np.zeros(shape=(3, 5))  # 三门学科成绩
for i in range(3):
    for j in range(100):
        if array_data[i][j] in range(0, 60):
            array_data_down[i][0] = array_data_down[i][0] + 1
        elif array_data[i][j] in range(60, 70):
            array_data_down[i][1] = array_data_down[i][1] + 1
        elif array_data[i][j] in range(70, 80):
            array_data_down[i][2] = array_data_down[i][2] + 1
        elif array_data[i][j] in range(80, 90):
            array_data_down[i][3] = array_data_down[i][3] + 1
        else:
            array_data_down[i][4] = array_data_down[i][4] + 1

lst_section = ['不及格', '差', '中', '良', '优']  # x轴显示信息(用于覆盖x轴原刻度)
tick_x = np.array(range(1, 6))  # x轴虚拟刻度(用于绘图)
lst_subject = ['高数', '英语', '程序设计基础']  # 学科名称

# ------------------------ 绘图部分 --------------------------------
# 图片存储路径

# 折线图
file_path_save_line = os.path.abspath(os.path.join(os.path.dirname(__file__), './output/lineChart.png'))
# 柱状图
file_path_save_bar = os.path.abspath(os.path.join(os.path.dirname(__file__), './output/barChart.png'))
# 饼状图
file_path_save_pie = os.path.abspath(os.path.join(os.path.dirname(__file__), './output/pieChart.png'))

# 使用黑体
plt.rcParams['font.family'] = ['SimHei']

# -------------  趋势:折线图 ------------------------

# 创建画布
fig_line = plt.figure(figsize=(10, 5))
plt.title('大学生成绩情况折线图', fontsize=14)
plt.xlabel('分数段')
plt.ylabel('人\n数', rotation=0, labelpad=20)

plt.plot(lst_section, array_data_down[0], label='高数')
plt.plot(lst_section, array_data_down[1], label='英语')
plt.plot(lst_section, array_data_down[2], label='程序设计基础')

plt.legend()
plt.savefig(file_path_save_line)
plt.close()  # 关闭当前plt

# -------------  对比:柱状图 ------------------------
# 创建画布
fig_bar = plt.figure(figsize=(10, 5))
plt.xlabel('分数段')
plt.ylabel('人\n数', rotation=0, labelpad=20)

plt.title('大学生成绩情况柱状图', fontsize=14)
plt.bar(tick_x - 0.2, array_data_down[0], 0.2, label='高数')
plt.bar(tick_x, array_data_down[1], 0.2, label='英语')
plt.bar(tick_x + 0.2, array_data_down[2], 0.2, label='程序设计基础')

for k in range(3):
    for i, j in zip(tick_x, array_data_down[k]):
        plt.text(i + 0.2*(k-1), j / 2, j, ha='center')

plt.xticks([index + 0.1 for index in tick_x], lst_section)
plt.legend()
plt.savefig(file_path_save_bar)
plt.close()  # 关闭当前plt

# -------------  结构:饼状图 ------------------------
# 创建画布
fig_pie = plt.figure(figsize=(8, 5))
plt.title('大学生成绩情况饼状图', fontsize=3)

for i in range(1, 4):
    plt.tight_layout()  # 自动调整子图
    plt.subplot(2, 2, i)
    plt.pie(array_data_down[i - 1],
            labels=lst_section,
            autopct='%.1f%%',
            radius=1.2)
    plt.legend(loc=4, fontsize='2')
    plt.title('{0}成绩饼状图'.format(lst_subject[i-1]))

plt.savefig(file_path_save_pie)
plt.close()  # 关闭当前plt
