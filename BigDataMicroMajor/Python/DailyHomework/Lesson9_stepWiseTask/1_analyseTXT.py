import csv
import os
import string

# 定义读写文件目录
file_path_read = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/aboutPython.txt'))
file_path_write = os.path.abspath(os.path.join(os.path.dirname(__file__), './out/analyse.csv'))

# 定义包含文中所有单词的列表
wordList = list()
# 初始化wordList
with open(file_path_read, 'r', encoding='UTF-8') as f:  # 只读模式打开文件
    originLines = f.readlines()
    for lines in originLines:   # 每一行文字
        for characters in lines:    # 每行文字中的每个字符
            if characters != " ":
                if characters not in string.ascii_letters:
                    # 将所有非字母数据替换为空格,以便之后分词(注意replace生成新字符串)
                    lines = lines.replace(characters, " ")
        for words in lines.split():     # 分割出行中单词
            wordList.append(words)


# 统计词频
count_dict = {}
for item in wordList:
    # 若单词在词典中则其数量+1,若不在则加入词典,数量置1
    count_dict[item] = count_dict[item] + 1 if item in count_dict else 1
# 按照元组第二个数据值降序生成的元组列表
result_lst = sorted(count_dict.items(), key=lambda x: x[1], reverse=True)


# 写入结果
with open(file_path_write, 'w', encoding='UTF-8') as f:
    f.write("单词,出现次数\n")
    for i in result_lst:
        f.write(str(i[0]))
        f.write(",")
        f.write(str(i[1]))
        f.write("\n")
