# 参考链接:https://blog.csdn.net/weixin_47585551/article/details/109577877

# 导入需要的库
import tkinter as tk
from tkinter import filedialog
import os


# 控制文件列表显示函数
def DisplayList():
    listbox.delete(0, tk.END)
    for file in os.listdir(path.get()):
        listbox.insert(tk.END, file)


# 获取文件夹路径函数
def GetPath():
    filepath = filedialog.askdirectory()
    path.set(filepath)
    DisplayList()


# 批量重命名函数
def HandelFiles():
    num = 1
    for file in os.listdir(path.get()):
        print(file)
        os.rename(os.path.join(path.get(), file), os.path.join(path.get(), str(num)) + '.' + file.split('.')[-1])
        num = num + 1
    DisplayList()


root = tk.Tk()
root.title('批量重命名')
root.resizable(0, 0)

path = tk.StringVar()  # 定义路径变量

# 定义控件
listbox = tk.Listbox(root)
label = tk.Label(root, text="文件夹路径：")
entry = tk.Entry(root, textvariable=path)
button1 = tk.Button(root, text="选择路径", command=GetPath)
button2 = tk.Button(root, text="开始处理", command=HandelFiles)

# 调整控件布局
label.grid(row=0, column=0)
entry.grid(row=0, column=1)
button1.grid(row=0, column=2)
button2.grid(row=0, column=3)
listbox.grid(row=1, column=0, columnspan=4, sticky=tk.W + tk.E)

root.mainloop()
