# -*- coding: utf-8 -*-
# @Time    : 2020/11/8 19:17
# @Author  : 咸鱼型233
# @File    : delete_asm.py
# @Software: PyCharm
import os

# 写入文件路径
file_path_write = os.path.abspath(os.path.join(os.path.dirname(__file__), '../score/score.csv'))
# 文件内容暂存
content = list()


def function_delete():
    """
    实现学生记录的删除功能
    仅可根据"主键"学号删除信息
    """
    available_mark = 0  # 判断输入信息是否有效的信号0错1对2错了并放弃删除
    while not available_mark:
        id_del = input("请输入待删除学生的学号:")   # csv文件中存的也是文本,所以这里不可以使用eval转换成数字类型
        with open(file_path_write, "r", encoding="utf-8") as f:    # 只读模式
            global content
            content = f.readlines()
            for i in content:
                for t in i.split(','):
                    if id_del not in t:
                        continue
                    else:
                        available_mark = 1
                        break
            if not available_mark:
                print("未查询到该生信息")
                decision_out = 1  # 决定退出添加功能信号0退出1重新输入
                available_mark_input = 0  # 功能选择生效信号0不生效1生效
                while not available_mark_input:
                    try:
                        decision_out = eval(input("输入0并回车以退出删除模式,输入1并回车以重新输入:"))
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

    # 根据选择判断添加还是退出
    if available_mark == 1:
        # 先以覆写模式初始化文件
        with open(file_path_write, "w", encoding="utf-8") as f:
            f.write("")
        # 再以追加模式写入数据
        with open(file_path_write, "a", encoding="utf-8") as f:
            for i in content:
                is_id_del_in_i = 0
                for t in i.split(','):
                    if id_del == t:
                        is_id_del_in_i = is_id_del_in_i + 1
                if is_id_del_in_i == 0:
                    f.write(i)
