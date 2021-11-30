# 缩放图像
from PIL import Image
import os
import os.path
import math
import time
import tkinter as tk
from tkinter import filedialog, messagebox


def resize_pic(pic_path, new_width, new_height):
    """缩放图像并保存副本
    """
    # 图像缩放
    img = Image.open(pic_path)
    img = img.resize((new_width, new_height), Image.ANTIALIAS)
    # 副本路径定义(去掉原有扩展名, 加上_resize.png后缀)
    new_pic_path = os.path.splitext(pic_path)[0] + '_resize.png'
    # 保存副本
    img.save(new_pic_path)


def GUI_resize_pic():
    """缩放图像并保存副本可视化操作界面
    调用 explorer 选择被缩放图像
    可视化设定缩放后的大小
    """
    def GetPath():
        """选择源图像
        """
        path.set(filedialog.askopenfilename())

    def ResizePic():
        """缩放图像, 处理完成后弹出提示窗并打开图像所在文件夹
        """
        # 缩放图像并存储副本
        resize_pic(path.get(), int(entry_width.get()), int(entry_height.get()))
        # 处理完成后弹出提示窗
        messagebox.showinfo('提示', '图像缩放完成!')
        # 打开图像所在文件夹
        os.startfile(os.path.split(path.get())[0])

    # 创建窗口
    root = tk.Tk()
    # 设置窗口标题
    root.title('缩放图像')
    # 设置窗口屏幕居中显示
    root.geometry('300x200+%d+%d' % (root.winfo_screenwidth() /
                                     2 - 150, root.winfo_screenheight() / 2 - 100))
    # 设置窗口大小不可变
    root.resizable(0, 0)

    # 定义输入图像路径
    path = tk.StringVar()

    # 定义控件
    label_pic_path = tk.Label(root, text="图像路径: ")   # 标签_图像路径
    entry_pic_path = tk.Entry(root, textvariable=path)   # 输入框_图像路径
    button1 = tk.Button(root, text="选择图像", command=GetPath)         # 按钮(选择源图像)
    label_width = tk.Label(root, text="宽度：")     # 标签_缩放后的宽度
    entry_width = tk.Entry(root)                    # 输入框_缩放后的宽度
    label_height = tk.Label(root, text="高度：")    # 标签_缩放后的高度
    entry_height = tk.Entry(root)                   # 输入框_缩放后的高度
    button2 = tk.Button(root, text="开始处理",
                        command=ResizePic)     # 按钮(缩放图像并保存副本)

    # 调整控件布局
    label_pic_path.grid(row=0, column=0)    # 标签_图像路径
    entry_pic_path.grid(row=0, column=1)    # 输入框_图像路径
    button1.grid(row=0, column=2)           # 按钮(选择源图像)

    label_width.grid(row=1, column=0)       # 标签_缩放后的宽度
    entry_width.grid(row=1, column=1)       # 输入框_缩放后的宽度

    label_height.grid(row=2, column=0)      # 标签_缩放后的高度
    entry_height.grid(row=2, column=1)      # 输入框_缩放后的高度

    button2.grid(row=3, column=1)           # 按钮(缩放图像并保存副本)

    root.mainloop()  # 进入消息循环


# 直接调用核心函数用法
# pic_path = 'E:\OneDriveE5\OneDrive233\OneDrive - ayusummer\资源\Pictures\流泪猫猫头.jpg'
# resize_pic(pic_path, 512, 512)


# 可视化用法
GUI_resize_pic()
