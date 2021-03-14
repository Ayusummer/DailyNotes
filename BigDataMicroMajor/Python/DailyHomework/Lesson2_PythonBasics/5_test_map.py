from operator import add

# map() 会根据提供的函数对指定序列做映射。
#
# 第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的新列表。
# 语法
# map() 函数语法：
# map(function, iterable, ...)
# 参数
# function -- 函数
# iterable -- 一个或多个序列
# 返回值
# Python 2.x 返回列表。
# Python 3.x 返回迭代器。


# str() 函数将对象转化为适于人阅读的形式。
# 语法
# 以下是 str() 方法的语法:
# class str(object='')
# 参数
# object -- 对象。
# 返回值
# 返回一个对象的string格式。

print(map(str, range(5)))  # 返回一个将[0,1,2,3,4]依次转化为str类型数据生成的迭代器
print(list(map(str, range(5))))  # 返回一个[0,1,2,3,4]依次转化为str类型数据生成的迭代器转化为的列表
print(list(map(len, ['abc', '1234', 'test'])))  # 返回一个将前式列表中各元素求长度生成的迭代器转化成的列表

# 使用operator标准库中的add运算add运算相当于运算符+
# 如果map()函数的第一个参数func能够接收两个参数，则可以映射到两个序列上
for num in map(add, range(5), range(5, 10)):
    print(num)  # 将两个列表中的同位置的数相加并逐个打印出来
