'''
Author: your name
Date: 2020-12-08 10:47:56
LastEditTime: 2021-03-07 12:20:24
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \JuniorLesson_beta2.0\BigDataMicroMajor\Python\DailyHomework\Lesson8_file\1_printFile.py
'''
# 编写程序输出该文件的内容，
# 要求使用一次性读入整个文件内容和逐行读取文件内容两种方式。

import os
file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './yzy.txt'))
with open(file_path, 'r', encoding='UTF-8') as f:
    my1 = f.read()
    print("f.read():", my1)

with open(file_path, 'r', encoding='UTF-8') as f1:
    my2 = f1.readlines()
print("f1.readlines():", my2)

