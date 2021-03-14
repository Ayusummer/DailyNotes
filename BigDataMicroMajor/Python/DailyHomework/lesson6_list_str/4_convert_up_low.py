# 4．编写程序：给定一字符串（有大小写字母和其他字符组成），
# 对其中的每一个字符c进行大小写转换：
# 如果c是大写字母，则将它转换成小写字母；
# 如果c是小写字母，则将它转换成大写字母；
# 如果c不是字母，则不进行转换。

s = "This is test1"
s_r = str()     # s_r为s的字母大小写翻转字符串
for i in range(len(s)):
    if s[i].islower():
        s_r = s_r + s[i].upper()
    elif s[i].isupper():
        s_r = s_r + s[i].lower()
    else:
        s_r = s_r + s[i]
print(s_r)
