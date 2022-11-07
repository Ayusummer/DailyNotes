# 3．现需要将两名学生的语文、数学这两门课的成绩保存到文件test.csv中，
# 要求在文件中将学号及成绩（数据自定）使用英文逗号分隔，且在一行中保存一名学生的所有信息。
import csv
import os

stu1 = list()
stu2 = list()

stu1.append(input("请输入第一名学生的语文成绩:")+"")
stu1.append(input("请输入第一名学生的数学成绩:")+"\n")
stu2.append(input("请输入第一名学生的语文成绩:")+"")
stu2.append(input("请输入第一名学生的数学成绩:")+"\n")

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './test.csv'))
with open(file_path, 'a', encoding='UTF-8') as f:       # append追加模式
    f.write(",".join(stu1))
    f.write(",".join(stu2))





