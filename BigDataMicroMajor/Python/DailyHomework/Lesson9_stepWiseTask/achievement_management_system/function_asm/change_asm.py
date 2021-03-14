# -*- coding: utf-8 -*-
# @Time    : 2020/11/8 23:19
# @Author  : 咸鱼型233
# @File    : change_asm.py
# @Software: PyCharm
import os
import delete_asm
import add_asm


def function_change():
    """
    修改成绩信息
    仅可通过学号定位修改行
    先删后加
    """
    print("您应当先删除再添加该生的成绩信息")
    delete_asm.function_delete()
    add_asm.function_add()

