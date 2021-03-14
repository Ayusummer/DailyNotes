# 用递归函数实现：输出斐波那契数列的前20项，每行输出4个数字。
def fib(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fib(n-1)+fib(n-2)


def print_fib(n):
    for i in range(1, n+1):
        if i % 4 == 0:
            print(fib(i))
        else:
            print(fib(i), end=" ")


print_fib(20)
