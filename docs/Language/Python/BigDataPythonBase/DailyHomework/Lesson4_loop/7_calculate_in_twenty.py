# 7.编写程序：随机生成20以内加减乘除的单一算式，进行计算。
# 若计算错误，重新计算；若计算正确，选择是否继续计算。
# 生成算式样例，如 2+13=  输入计算结果。 然后判断其结果的是否正确，
# 正确随机生成另一算式，继续，不正确继续计算，直到正确。
from random import randint


def calculate_in_twenty():
    i = randint(0, 20)
    j = randint(0, 20)
    k = randint(0, 3)
    if k == 0:
        ans = eval(input("{0}+{1}=".format(i, j)))
        while ans != i + j:
            ans = eval(input("计算错误,请重新输入计算结果:"))
        if ans == i + j:
            calculate_in_twenty()
    elif k == 1:
        ans = eval(input("{0}-{1}=".format(i, j)))
        while ans != i - j:
            ans = eval(input("计算错误,请重新输入计算结果:"))
        if ans == i - j:
            calculate_in_twenty()
    elif k == 2:
        ans = eval(input("{0}×{1}=".format(i, j)))
        while ans != i * j:
            ans = eval(input("计算错误,请重新输入计算结果:"))
        if ans == i * j:
            calculate_in_twenty()
    elif k == 3 and j != 0:
        ans = eval(input("{0}÷{1}=".format(i, j)))
        while ans != i / j:
            ans = eval(input("计算错误,请重新输入计算结果:"))
        if ans == i / j:
            calculate_in_twenty()
    else:
        calculate_in_twenty()


calculate_in_twenty()
