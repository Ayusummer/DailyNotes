# 判断今天是今年的第几天。
# 参考源代码：
import time

date = time.localtime()         # 获取当前日期时间
year, month, day = date[:3]     # 获取年、月、日
day_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]    # 每个月的天数
if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):      # 判断是否为闰年
    day_month[1] = 29
if month == 1:
    print(day)
else:
    print(sum(day_month[:month - 1]) + day)
