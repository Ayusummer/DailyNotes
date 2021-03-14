# -*- coding: utf-8 -*-
# @Time    : 2020/11/8 9:39
# @Author  : 咸鱼型233
# @File    : add_asm.py
# @Software: PyCharm
import os

# 写入文件路径
file_path_write = os.path.abspath(os.path.join(os.path.dirname(__file__), '../score/score.csv'))


# noinspection PyBroadException
def function_add():
    """
    实现学生记录的添加功能
    且不允许学号重复
    """
    print("请依次填入下列选项中的值")
    available_mark = 0  # 判断输入信息是否有效的信号0错1对2错了并放弃添加
    while not available_mark:
        name = input("姓名:")
        stu_id = input("学号:")
        chinese = input("语文成绩:")
        math = input("数学成绩:")
        english = input("英语成绩:")
        with open(file_path_write, "r", encoding="utf-8") as f:
            is_id_in_content = 0   # 信息是否已经出现:0未出现1已出现
            content = f.readlines()
            for i in content:
                if stu_id not in i:
                    continue
                else:
                    is_id_in_content = 1
                    print("记录中已有该生成绩")
                    decision_out = 1            # 决定退出添加功能信号0退出1重新输入
                    available_mark_input = 0    # 功能选择生效信号0错1对
                    while not available_mark_input:
                        try:
                            decision_out = eval(input("输入0并回车以退出添加模式,输入1并回车以重新输入:"))
                        except (decision_out != 0 and decision_out != 1) or BaseException:
                            decision_out = eval(input("未找到该功能"))
                        else:
                            available_mark_input = 1    # 功能选择有效,退出循环
                    if not decision_out:    # 若选择退出
                        available_mark = 2
                        break
                    else:                   # 若选择重新输入
                        available_mark = 0
                        break
            if not is_id_in_content:
                available_mark = 1

    # 根据选择判断添加还是退出
    if available_mark == 1:
        with open(file_path_write, "a", encoding="utf-8") as f:
            f.write(str(name))
            f.write(",")
            f.write(str(stu_id))
            f.write(",")
            f.write(str(chinese))
            f.write(",")
            f.write(str(math))
            f.write(",")
            f.write(str(english))
            f.write("\n\r")
