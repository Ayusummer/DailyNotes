# 编程实现：猜数小游戏。游戏开始由机器产生一个1~100之间随机数，
# 然后游戏者在程序的提示下猜数（输入一个数），若输入的数比这个数大，
# 程序提示：“太大了，请再试一次” ，若输入的数比这个数小，程序提示：“太小了，请再试一次”，
# 继续猜数，直到猜对为止。当猜对时程序输出“你太棒了，你共用了X次猜对”。
# 参考源代码：

import random
rand2 = random.randint(1, 100)
guess = int(input('请猜一个100以内的正整数：'))
count = 1
while rand2 != guess:
    if guess > rand2:
        print('太大了,请重猜！')
    else:
        print('太小了，请重猜！')
    guess = int(input("请猜一个数："))
    count += 1
print('你太棒了,你用 %d 次猜对了' % count)
# %d:有符号整数(十进制[decimal])
