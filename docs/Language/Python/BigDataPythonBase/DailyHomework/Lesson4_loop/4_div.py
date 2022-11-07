# 4.编写程序：输出1-100之间所有能被3整除，但不能被5整除的数。

for i in range(100):
    if i % 3 == 0 and i % 5 != 0:
        print(i)
