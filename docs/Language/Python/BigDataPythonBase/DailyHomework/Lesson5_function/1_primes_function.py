import math     # 后面开平方要用


def primes_tolist(max_limit):
    l_primes = list()                # 存储数据用列表
    for i in range(2, max_limit+1):  # 1不是素数,忽略掉
        sq = int(math.sqrt(i))
        if sq + 1 <= 2:
            l_primes.append(i)
        else:
            for k in range(2, sq + 1):  # k遍历[2,sq)
                if i % k == 0:  # 如果i是合数,则退出循环
                    break
                elif k == sq:  # 如果循环结束则说明i是素数,则存入列表
                    # print(i)
                    l_primes.append(i)
    return l_primes


print(primes_tolist(300))
