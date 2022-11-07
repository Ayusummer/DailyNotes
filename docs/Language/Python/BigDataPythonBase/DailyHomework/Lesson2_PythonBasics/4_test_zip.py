data = zip('1234', [1, 2, 3, 4, 5, 6])
print(data)
# 在转换为列表时，使用了zip对象中的全部元素，zip对象中不再包含任何内容
print(list(data))
# 如果需要再次访问其中的元素，必须重新创建zip对象
data = zip('1234', [1, 2, 3, 4, 5, 6])
print(tuple(data))
data = zip('1234', [1, 2, 3, 4, 5, 6])
# zip对象是可迭代的，可以使用for循环逐个遍历和访问其中的元素
for item in data:
    print(item)