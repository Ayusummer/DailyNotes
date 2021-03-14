# 5角钱就不找了(
change = eval(input("请输入找零金额:"))
c50, change = change//50, change % 50
c5, c1 = change//5, change % 5
print("找零方案为:50元{0}张,5元{1}张,1元{2}张".format(c50, c5, c1))
