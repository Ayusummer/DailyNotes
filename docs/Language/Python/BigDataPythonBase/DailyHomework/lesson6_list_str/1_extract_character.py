# 编写程序：对用户输入的英文字母串中出现的英文字母进行提取（不区分大小写，重复字母只计一次），
# 并将提取的结果按照字母顺序升序排列后输出。
# 例如，用户输入”I miss  you”，程序输出”I,m,o,s,u,y” 或”	I,M,O,S,U,Y”

lst1 = list((input("请输入一串英文字符串:")).lower())
lst2 = list()
for i in lst1:
    if i in lst2 or i == " ":
        continue
    else:
        lst2.append(i)
lst2.sort()
print(lst2)

