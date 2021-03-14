# 描述:
# filter() 函数用于过滤序列，过滤掉不符合条件的元素，返回由符合条件元素组成的新列表。
# 该接收两个参数，第一个为函数，第二个为序列，序列的每个元素作为参数传递给函数进行判断，然后返回 True 或 False，最后将返回 True 的元素放到新列表中。
# 注意: Pyhton2.7 返回列表，Python3.x 返回迭代器对象，具体内容可以查看：Python3 filter() 函数
# 语法:
# 以下是 filter() 方法的语法:
# filter(function, iterable)
# 参数:
# function -- 判断函数。
# iterable -- 可迭代对象。
# 返回值:
# 返回列表。

seq = ['abcd', '1234', '.,?!', '']
print(list(filter(str.isdigit, seq)))  # 只保留数字字符串
print(list(filter(str.isalpha, seq)))  # 只保留英文字母字符串
print(list(filter(str.isalnum, seq)))  # 只保留数字字符串和英文字符串alnum->al(pha)num
print(list(filter(None, seq)))  # 只保留等价于True的元素
