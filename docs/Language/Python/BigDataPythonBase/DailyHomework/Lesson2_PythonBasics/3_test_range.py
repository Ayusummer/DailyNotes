#range(start, stop[, step])
# 参数说明：
#
# start: 计数从 start 开始。默认是从 0 开始。例如range（5）等价于range（0， 5）;
# stop: 计数到 stop 结束，但不包括 stop。例如：range（0， 5） 是[0, 1, 2, 3, 4]没有5
# step：步长，默认为1。例如：range（0， 5） 等价于 range(0, 5, 1)
rg1 = range(6)
print(list(rg1))

rg2 = range(2,10)
print(list(rg2))

rg3 = range(2,20,2)
print(list(rg3))

rg4 = range(20,0,-2)
print(list(rg4))