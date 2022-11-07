<!--
 * @Author: your name
 * @Date: 2021-05-09 16:49:38
 * @LastEditTime: 2021-05-09 17:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\BigDataMicroMajor\MachineLearning\MachineLearning.md
-->
## 2.3-特征工程

---
### 2.3.2-特征选择
- 特征选择的目的主要是降维，从特征集合中挑选一组最具统计意义的特征子集来代表整体样本的特点。特征选择的方法是用一些评价指标单独地计算出各个特征与目标变量之间的关系。常见的有Pearson相关系数、基尼指标(Gini index )、信息增益(Information Gain )等 ，下面以Pearson相 关系数为例，它的计算方式如下
  - ![20210509171131](http://cdn.ayusummer233.top/img/20210509171131.png)



---
### 2.3.3-特征提取


----
### 类别可分离性判据
- 衡量不同特征及其组合是否有效的的定量准则
- 应满足条件：
  - 度量特性：不同类大于零 同类等于零
  - 与错误率单调关系
  - 特征独立时有可加性
  - 单调性：特征越多，盘踞越大
- 分类：
  - 基于距离
  - 概率
  - 熵函数
- 分类特征要求
  - 类别可分性
  - 可靠性
  - 特征间独立性
  - 数量尽量少