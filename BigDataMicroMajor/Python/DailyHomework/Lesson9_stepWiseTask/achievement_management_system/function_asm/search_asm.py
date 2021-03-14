# -*- coding: utf-8 -*-
# @Time    : 2020/11/8 23:31
# @Author  : 咸鱼型233
# @File    : search_asm.py
# @Software: PyCharm
import os

# 写入文件路径
file_path_read = os.path.abspath(os.path.join(os.path.dirname(__file__), '../score/score.csv'))


def function_search():
    """
    实现学生记录的查询功能
    仅可根据"主键"学号查询信息
    """
    available_mark = 0  # 判断输入信息是否有效的信号0错1对2错了并放弃删除
    while not available_mark:
        id_search = input("请输入待查询学生的学号:")   # csv文件中存的也是文本,所以这里不可以使用eval转换成数字类型
        with open(file_path_read, "r", encoding="utf-8") as f:    # 只读模式
            content = f.readlines()
            for i in content:
                for t in i.split(','):
                    if id_search not in t:
                        continue
                    else:
                        print("已找到该生信息:\n{0}".format(i))
                        available_mark = 1
                        break
            if not available_mark:
                print("未查询到该生信息")
                decision_out = 1  # 决定退出添加功能信号0退出1重新输入
                available_mark_input = 0  # 功能选择生效信号0不生效1生效
                while not available_mark_input:
                    try:
                        decision_out = eval(input("输入0并回车以退出查询模式,输入1并回车以重新输入:"))
                    except (decision_out != 0 and decision_out != 1) or BaseException:
                        decision_out = eval(input("未找到该功能"))
                    else:
                        available_mark_input = 1  # 功能选择有效,退出循环
                if not decision_out:  # 若选择退出
                    available_mark = 2
                    break
                else:  # 若选择重新输入
                    available_mark = 0
                    break
