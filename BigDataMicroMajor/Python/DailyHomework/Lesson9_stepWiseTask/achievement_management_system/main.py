import os
import json
import re

import menu.menu as menu
from function_asm import add_asm
from function_asm import delete_asm
from function_asm import change_asm
from function_asm import search_asm

while True:
    menu.menu_show()
    funcSelect = eval(input("请输入功能序号:"))
    if funcSelect == 1:
        add_asm.function_add()
    elif funcSelect == 2:
        delete_asm.function_delete()
    elif funcSelect == 3:
        change_asm.function_change()
    elif funcSelect == 4:
        search_asm.function_search()
    else:
        print("未找到该功能,程序已退出")
        break

