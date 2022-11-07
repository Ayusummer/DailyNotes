# 编写程序将这两个文件内容合并后保存到一个新文件中
import os

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './webs.txt'))
file_path1 = os.path.abspath(os.path.join(os.path.dirname(__file__), './url.txt'))
file_path_result = os.path.abspath(os.path.join(os.path.dirname(__file__), './joinFile.txt'))

# 读取第一个文件
with open(file_path, 'r', encoding='UTF-8') as f:
    my1 = f.readlines()
print("f.read():", my1)
# 清除第一个文件中的换行符
newLstItem = [x.strip() for x in my1]
print("newLstItem:{0}".format(newLstItem))
# 读取第二个文件
with open(file_path1, 'r', encoding='UTF-8') as f1:
    my2 = f1.readlines()
print("f1.readlines():", my2)

with open(file_path_result, 'w', encoding='UTF-8') as f_result:
    for i in range(len(my2)):
        f_result.write(newLstItem[i])
        f_result.write("  ")
        f_result.write(my2[i])


