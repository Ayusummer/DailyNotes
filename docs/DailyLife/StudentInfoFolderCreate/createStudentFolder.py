# 读取 ../res/StudentInfo.yml 文件中的 studentInfo 数组中各元素的 name 属性并创建对应的文件夹
import os
import yaml
# 图形化界面库导入
import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox

# 定义 yaml 配置文件路径
yaml_path = os.path.join(os.path.dirname(__file__), '../res/StudentInfo.yml')


def createStudentFolder(yaml_path, output_path):
    """创建学生文件夹"""
    # 读取 yaml 配置文件
    with open(yaml_path, 'r', encoding="utf-8") as f:
        cfg = f.read()
        studentInfo = yaml.load(cfg, Loader=yaml.FullLoader)["studentInfo"]
    # 创建学生信息文件夹
    for student in studentInfo:
        # 创建学生信息文件夹-id+name
        student_id = str(student["id"])
        student_name = student["name"]
        student_path = os.path.join(output_path, student_id + student_name)
        if not os.path.exists(student_path):
            os.mkdir(student_path)


# GUI
def GUI_create_student_folder():
    """GUI 创建学生文件夹"""
    def GetOutputPath():
        """获取输出路径"""
        path_output.set(filedialog.askdirectory())

    def CreateStudentFolder():
        """创建学生文件夹"""
        createStudentFolder(yaml_path, path_output.get())
        messagebox.showinfo('提示', '创建学生文件夹成功')

    # 创建窗口
    root = tk.Tk()
    root.title('创建学生文件夹')
    # 设置窗口屏幕居中显示
    root.geometry('300x200+%d+%d' % (root.winfo_screenwidth() /
                                     2 - 150, root.winfo_screenheight() / 2 - 100))
    # 设置窗口大小
    root.geometry('300x200')
    path_output = tk.StringVar()    # 定义输出路径

    # 定义控件
    label_output = tk.Label(root, text='输出路径：')
    entry_output = tk.Entry(root, textvariable=path_output)
    button_output = tk.Button(root, text='选择输出路径', command=GetOutputPath)
    button_create = tk.Button(root, text='创建学生文件夹',
                              command=CreateStudentFolder)

    # 布局
    label_output.grid(row=0, column=0, sticky=tk.W)
    entry_output.grid(row=0, column=1, sticky=tk.W)
    button_output.grid(row=0, column=2, sticky=tk.W)
    button_create.grid(row=1, column=1, sticky=tk.W)

    # 主循环
    root.mainloop()


if __name__ == '__main__':
    GUI_create_student_folder()
