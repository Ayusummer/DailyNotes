# -*- coding: utf-8 -*-
# @Time    : 2020/11/17 18:09
# @Author  : 咸鱼型233
# @File    : 2_salesPredict.py
# @Software: PyCharm
# @Function: 预测销售额
import numpy as np
import os                           # 拼接文件路径
from sklearn import linear_model    # 创建回归器对象
import matplotlib.pyplot as plt     # 可视化输出

# 读取文件，前面是x，后面是y，现在用空格分开
filename = os.path.abspath(os.path.join(os.path.dirname(__file__), './res/liner_regressor.txt'))
X = []  # 自变量列表
Y = []  # 因变量列表
# 读入数据
with open(filename, 'r')as f:
    for line in f.readlines():
        xt, yt = [int(i) for i in line.split()]  # 若两个数据之间是空格，则括号不填东西，否则就填分割的符号
        X.append(xt)
        Y.append(yt)


# 将数据分成训练集、测试集

num_training = int(0.8 * len(X))
num_test = len(X) - num_training

# 训练数据
# 利用分片取出前num_training并重组数组成列向量
X_train = np.array(X[:num_training]).reshape((num_training, 1))
Y_train = np.array(Y[:num_training])    # Y_train切分出Y的前num_training个数据

# 测试数据
X_test = np.array(X[num_training:]).reshape((num_test, 1))
Y_test = np.array(Y[num_training:])

# 创建线性回归器对象
linear_regressor = linear_model.LinearRegression()

# 利用训练集训练模型
linear_regressor.fit(X_train, Y_train)

# 预测当吃饭人数达到35000时，饭店的销售额是多少？
print("预测当吃饭人数达到35000时，饭店的销售额为: {0}千元".format(int(linear_regressor.predict([[35000]]))))

# 先计算对应X的拟合直线输出值
X_total = np.array(X).reshape((len(X), 1))    # 将列表X格式化成一列的数组
# 利用创建好的线性回归器带入自变量生成预测因变量
y_train_pred = linear_regressor.predict(X_total)

plt.figure()
# 绘制散点图
plt.scatter(X, Y, color="orange")   # 绘制橙色散点
# 绘制拟合直线
plt.plot(X_total, y_train_pred, color="blue", linewidth=4)
plt.title("salesPredict")           # 设置图表标题
plt.show()                          # 显示图表


