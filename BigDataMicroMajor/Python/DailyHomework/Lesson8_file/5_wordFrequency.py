# 编写程序统计该文件内容中单词的词频，并将统计结果保存到一个新的文件中

import os

# 读文件
file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './yzy3.txt'))
with open(file_path, 'r', encoding='UTF-8') as f:
    my1 = f.readlines()
print("f1.readlines():", my1)

# 过滤掉.\n并生成文件单词列表
word_list = list()  # 文件中的单词列表
for i in my1:
    newLstItem = str()
    for char1 in i:
        if char1 != '.':
            newLstItem = newLstItem + char1
        if char1 == '.':
            break
    newLstItem = newLstItem.split()
    for t in newLstItem:
        word_list.append(t)
print(word_list)

count_dict = {}
for item in word_list:
    count_dict[item] = count_dict[item] + 1 if item in count_dict else 1
result_lst = sorted(count_dict.items(), key=lambda x: x[1], reverse=True)
print(result_lst)

# 将结果写入文件
file_path1 = os.path.abspath(os.path.join(os.path.dirname(__file__), './wordFrequency.txt'))
with open(file_path1, 'w', encoding='UTF-8') as f:
    for i in result_lst:
        f.write(str(i[0]))
        f.write(" ")
        f.write(str(i[1]))
        f.write("\n")

