# 1.编程实现：找出300以内的所有素数（素数又称质数，只能被1或者自己整除的自然数。）
import math

for i in range(2, 301):             # 1不是素数,忽略掉
    sq = int(math.sqrt(i))
    if sq+1 <= 2:
        print(i)
    else:
        for k in range(2, sq+1):    # k遍历[2,sq)
            if i % k == 0:          # 如果i是合数,则退出循环
                break
            elif k == sq:           # 如果循环结束则说明i是素数,则输出
                print(i)


