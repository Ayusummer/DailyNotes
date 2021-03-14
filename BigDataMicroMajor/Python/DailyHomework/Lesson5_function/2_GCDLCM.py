# 2.产生两个0-100之间的随机整数，求这两个整数的最大公约数和最小公倍数。
# 生成数范围为(0,100],因为0和其他数没有最大公因数和最小公倍数的概念
from random import randint
from math import sqrt


def gcd_lcm():
    (a, b) = (randint(1, 100), randint(1, 100))
    max_ab = max(a, b)
    min_ab = min(a, b)
    max_sq = int(sqrt(min_ab))       # 小数约数上限
    # 如果二者刚好成倍数则最大公约数是小数最小公倍数是大数
    if max_ab % min_ab == 0:
        gcd = min_ab
        lcm = max_ab
    else:
        for i in range(max_sq, 0, -1):
            if min_ab % i == 0 and max_ab % i == 0:
                gcd = i
                break
        for k in range(max_ab, max_ab*min_ab, max_ab):
            if k % min_ab == 0:
                lcm = k
                break
    print("{0}和{1}的最大公约数是{2},最小公倍数是{3}".format(a, b, gcd, lcm))


gcd_lcm()

