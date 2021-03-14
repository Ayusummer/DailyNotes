# -*- coding: utf-8 -*-
# @Time    : 2020/11/26 7:24
# @Author  : 咸鱼型233
# @File    : chart_population.py
# @Software: PyCharm
# @Function: 绘制人口数据图
import numpy as np
import matplotlib.pyplot as plt
import os
import datetime
import memory_profiler


@memory_profiler.profile
def main():
    begin = datetime.datetime.now()

    # 数据源文件路径
    file_path_arr = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/populations.npz'))
    # 图片存储路径
    file_path_save = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/populations.png'))

    # 载入数据
    arr = np.load(file_path_arr, allow_pickle=True)  # 从.npy、.npz或pickle文件加载阵列或pickle对象。
    arr_data = arr['data']

    # 准备数据
    arr_time = arr_data[0:20, 0]
    arr_sum_population = arr_data[0:20, 1]
    arr_male = arr_data[0:20, 2]
    arr_female = arr_data[0:20, 3]
    arr_city = arr_data[0:20, 4]
    arr_village = arr_data[0:20, 5]

    # 使用黑体
    plt.rcParams['font.family'] = ['SimHei']

    # 创建画布
    plt.figure(figsize=(15, 5))
    plt.suptitle('1996~2015年人口数据特征间的关系', fontsize=14)

    # 绘制子图

    # 绘制散点图
    plt.tight_layout()  # 自动调整子图
    plt.subplot(2, 1, 1)  # 2行1列,第1个子图
    plt.title('散点图')
    plt.xlabel('时间')
    plt.ylabel('人\n口', rotation=0, labelpad=20)
    plt.scatter(arr_time, arr_sum_population, label='年末总人口')
    plt.scatter(arr_time, arr_male, label='男性人口')
    plt.scatter(arr_time, arr_female, label='女性人口')
    plt.scatter(arr_time, arr_city, label='城镇人口')
    plt.scatter(arr_time, arr_village, label='乡村人口')
    plt.legend()

    # 绘制折线图
    plt.tight_layout()  # 自动调整子图
    plt.subplot(2, 1, 2)  # 2行1列,第1个子图
    plt.title('折线图')
    plt.xlabel('时间')
    plt.ylabel('人\n口', rotation=0, labelpad=20)
    plt.plot(arr_time, arr_sum_population, label='年末总人口')
    plt.plot(arr_time, arr_male, '--', label='男性人口')  # 虚线
    plt.plot(arr_time, arr_female, '-.', label='女性人口')  # 点线
    plt.plot(arr_time, arr_city, ':', label='城镇人口')  # 点虚线
    plt.plot(arr_time, arr_village, '.', label='乡村人口')  # 点
    plt.legend()

    # 保存图
    plt.savefig(file_path_save)
    # 显示图
    plt.show()

    end = datetime.datetime.now()
    print("程序执行时间:{0}".format(end - begin))


main()
