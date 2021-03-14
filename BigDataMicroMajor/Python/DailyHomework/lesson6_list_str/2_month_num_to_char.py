# 编写程序：实现月份数字向英文缩写的转换。
# 从键盘上输入一个表示月份的数字（1-12），输出对应月份的英文缩写。
# 1月为Jan, 2月为Feb，3月为Mar，4月为Apr，5月为May，6月为Jun，
# 7月为Jul，8月为Aug，9月为Sep，10月为Oct，11月为Nov，12月为Dec。

lst_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
num_month = eval(input("请输入月份数字:"))
print("所输入月份对应英文缩写为:{0}".format(lst_month[num_month-1]))
