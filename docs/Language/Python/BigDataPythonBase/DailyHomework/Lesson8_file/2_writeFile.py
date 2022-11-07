# 2．新建一文本文件yzy2.txt，编写程序将如下两行内容写入该文件中：

import os
file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './yzy2.txt'))
str1 = "游子吟\n唐代：孟郊\n"
with open(file_path, 'w', encoding='UTF-8') as f:
    f.write(str1)


