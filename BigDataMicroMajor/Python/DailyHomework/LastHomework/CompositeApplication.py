# -*- coding: utf-8 -*-
# @Time    : 2021/1/14 10:06
# @Author  : 咸鱼型233
# @File    : CompositeApplication.py
# @Software: PyCharm
# @Function: 综合应用
import os
import pandas as pd
import matplotlib.pyplot as plt

# 处理过的绘制数据
file_path = os.path.abspath('./resource/re_table.xls')
# 原数据
file_path_origin = os.path.abspath('./resource/r_Concrete_Data.xls')

# 读取数据并给出列名
df = pd.read_excel(file_path,
                   names=['权重', '混凝土压强'])
# 压强/权重数据
efficiency = df['混凝土压强'] / df['权重']

# 使用黑体
plt.rcParams['font.family'] = ['SimHei']

# 创建画布
plt.figure(figsize=(15, 5))
plt.title('权重-混凝土压强图')
plt.xlabel('权重')
plt.ylabel('混\n凝\n土\n压\n强', rotation=0, labelpad=20)
plt.legend()
plt.plot(df['权重'], df['混凝土压强'])
max_efficiency = max(efficiency)  # 获取压强/权重最大值
pos = list(efficiency).index(max_efficiency)  # 获取最大值对应索引
# 标点
plt.scatter(df.loc[[pos], ['权重']], df.loc[[pos], ['混凝土压强']], marker='*', color='r', s=240)

# 通过该点反差原数据配比
df2 = pd.read_excel(file_path_origin,
                    names=['水泥', '高炉渣', '粉煤灰', '水', '高效减水剂', '粗集料', '细集料', '年龄', '混凝土压强'])

print("最省钱的高压强最佳配比为:\n{:<16}{:14}\n{:<16}{:14}\n{:<16}{:14}\n"
      "{:<16}{:14}\n{:<16}{:14}\n{:<16}{:14}\n{:<16}{:14}\n{:<16}{:14}\n"
      "{:<16}{:14}".format("水泥:",
                            df2.loc[pos]['水泥'],
                            "高炉渣:",
                            df2.loc[pos]['高炉渣'],
                            "粉煤灰:",
                            df2.loc[pos]['粉煤灰'],
                            "水:",
                            df2.loc[pos]['水'],
                            "高效减水剂:",

                            df2.loc[pos]['高效减水剂'],
                            "粗集料:",
                            df2.loc[pos]['粗集料'],
                            "细集料:",
                            df2.loc[pos]['细集料'],
                            "年龄:",
                            df2.loc[pos]['年龄'],
                            "对应混凝土压强:",
                            df2.loc[pos]['混凝土压强']))

# print("最省钱的高压强最佳配比为:\n水泥:{0}\n高炉渣:{1}\n粉煤灰:{2}\n"
#       "水:{3}\n高效减水剂:{4}\n粗集料:{5}\n细集料:{6}\n年龄:{7},"
#       "对应混凝土压强:{8}".format(df2.loc[pos]['水泥'],
#                            df2.loc[pos]['高炉渣'],
#                            df2.loc[pos]['粉煤灰'],
#                            df2.loc[pos]['水'],
#                            df2.loc[pos]['高效减水剂'],
#                            df2.loc[pos]['粗集料'],
#                            df2.loc[pos]['细集料'],
#                            df2.loc[pos]['年龄'],
#                            df2.loc[pos]['混凝土压强']))
plt.show()
