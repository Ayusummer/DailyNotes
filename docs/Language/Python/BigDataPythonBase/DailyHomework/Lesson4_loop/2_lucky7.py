# 2.赌场中有一种称为“幸运7”的游戏，游戏规则是:
# 玩家掷两枚骰子，如果其点数之和为7，玩家赢4元，不是7，玩家输1元。
# 请你分析一下，这样的规则是否公平。
# （算法提示：可以用计算机模拟掷骰子的过程，测算两个骰子点数之和为7的概率。
# 在模拟过程中，可以让计算机循环执行1万次，运行代码5次）
from random import randint

suc_time = 0
for i in range(10000):
    r1 = randint(1, 6)
    r2 = randint(1, 6)
    if r1+r2 == 7:
        suc_time = suc_time+1
suc_per = suc_time/10000
print("获胜概率为:", "%.2f%%" % suc_per)


