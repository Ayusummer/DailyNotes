# 4．将一文本文件加密后输出，规则如下：
# 大写字母：A变换为C,B 变换为D，…….，Y变换为A，Z变换为B，
# 小写字母规则同上，其他字符不变。
import os

# 生成编码字典
dictResult = dict()
for i in range(26):
    if i < 23:
        dictResult[chr(ord('a') + i)] = chr(ord('a') + i + 2)
        dictResult[chr(ord('A') + i)] = chr(ord('A') + i + 2)
    else:
        dictResult[chr(ord('a') + i)] = chr(ord('a') + i - 23)
        dictResult[chr(ord('A') + i)] = chr(ord('A') + i - 23)

# 读取文件信息
file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './encipherTxt.txt'))
with open(file_path, 'r', encoding='UTF-8') as f1:
    my2 = f1.readlines()

# 生成密文
lst1 = list()
str1 = str()
for i in my2:
    lst1 = list(filter(str.isalpha, i))
for i in lst1:
    str1 = str1 + dictResult[i]

# 输出密文
print(str1)



