# 循环
lst=[90,86,78,65,54,66,48]
#ntp:不及格人数
#maxcj:最高分
ntp=maxcj=0
for item in lst:
    if maxcj<item:
        maxcj=item
    if item<60:
        ntp=ntp+1   #或ntp+=1
print("最高分是{},不及格人数是{}".format(maxcj,ntp))