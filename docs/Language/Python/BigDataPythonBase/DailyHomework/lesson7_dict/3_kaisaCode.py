# 提醒用户输入明文，根据字典映射关系对明文进行加密，并输出密文。

switchNum = eval(input("请输入偏移数目:"))
dictResult = dict()
for i in range(26):
    if i < 23:
        dictResult[chr(ord('a') + i)] = chr(ord('a') + i + switchNum)
    else:
        dictResult[chr(ord('a') + i)] = chr(ord('a') + i - 23)
print(dictResult)
