import os


path = input(r"请输入完整的文件夹名称：")
func_select = eval(input("修改所有文件的后缀按1，修改指定后缀文件的后缀按2:"))
if func_select == 1:
    suffix_new = input("请输入修改后的文件后缀名:")
    os.chdir(path)  # 改变当前工作目录到指定的路径
    files = os.listdir(path)  # os.listdir() 方法用于返回指定的文件夹包含的文件或文件夹的名字的列表。
    i2 = 1  # 递增量,用于区分原同名文件
    for filename in files:
        portion = os.path.splitext(filename)  # 分离文件名与后缀名，并放在一个列表中
        name_new = portion[0] + str(i2) + "." + suffix_new
        os.rename(filename, name_new)
        i2 += 1  # i递增1
else:
    suf_origin = input("请输入要修改的文件后缀名:")
    suf_new = input("请输入修改后的文件后缀名:")
    os.chdir(path)
    files = os.listdir(path)
    i2 = 1
    for filename in files:
        portion = os.path.splitext(filename)  # 分离文件名与后缀名，并放在一个列表中
        if portion[1] == suf_origin:
            name_new = portion[0] + str(i2) + "." + suf_new
            os.rename(filename, name_new)
            i2 += 1
