x = 5;
y = 2;

#Ctrl+D,复制当前行到下一行,省去写print的时间
print(x + y);   #7
print(x - y);   #3
print(x * y);   #10
print(x / y);   #2.5
print(x // y);  #2(取整)
print(x % y);   #1(取余)
print(x ** y);  #25(幂)
print(x > y);   #True
print(x == y);  #False\
# 1.and的优先级要大于or
# 2.a and b语句的输出全看a的Boolean值，如果a为True，输出b；反之，如果a为False，输出a
# 3.a or b语句的输出也全看a的Boolean值，如果a为True，输出a；反之，如果a为False，输出b
print(x and y); #2
print(x or y);  #5
# 在python中not是逻辑判断词，用于布尔型True和False，not True为False，not False为True
# 只有0、None、空、False的布尔值为False，其余的为True。
print(not x);   #False


