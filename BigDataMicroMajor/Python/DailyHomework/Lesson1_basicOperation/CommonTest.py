x=10;
print(x);               #输出10

str="I am a student";
print(str);             #输出I am a student

#print(y);              #y没有定义,所以这里必定会报错

num=1;
print(num);             #输出1
Num=2.8;
NUM=1+2j;               #python中的复数形式:m+nj(其中m,n分别为实数部和虚数部)

print(num,Num,NUM);     #输出1 2.8 (1+2j)
print(type(num));       #输出<class 'int'>
print(type(Num));       #输出<class 'float'>
print(type(NUM));       #输出<class 'complex'>

st="我是一个字符串";
#print(st+6);    #数据类型不同不可相加,所以这里会报错;

a=5;b=6;
print("a=",a,"b=",b)

a,b=b,a;
print("a=",a,"b=",b);


