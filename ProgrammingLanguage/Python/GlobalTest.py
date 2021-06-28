# -*- coding : utf-8 -*-
# @Time      : 2021/6/14 9:28
# @Author    : 咸鱼型233
# @File      : GlobalTest.py
# @Software  : PyCharm
# @Function  : 测试文件, 用于随手测试代码
# @ChangeLog :
import os
file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './test.png'))
import PIL.Image as Image
import PIL.ImageDraw as ImageDraw
image = Image.new('RGB', (50, 50), "white")
image_draw = ImageDraw.Draw(image)
image_draw.line((0, image.size[1], image.size[0], 0), fill=128)
image.save(file_path)

