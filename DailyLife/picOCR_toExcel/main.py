# -*- coding: utf-8 -*-
# @Time    : 2021/5/8 7:27
# @Author  : 咸鱼型233
# @File    : main.py.py
# @Software: PyCharm
# @Function: 用于测试不同版次的函数的测试文件
# @ChangeLog
from config import APPCODE, path_image
from pic_ocr import OCR_to_Excel_aliyunAPI

OCR_to_Excel_aliyunAPI(APPCODE, path_image)
