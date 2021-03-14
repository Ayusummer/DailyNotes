while True:
    try:
        # eval() 函数用来执行一个字符串表达式，并返回表达式的值。
        # 故可使用eval函数来保证得到的是一个数值而非字符串
        # 如果在这里出现无法转化为数值的情况则抛出异常
        a_a=eval(input("请输入第一个数的数值:"))
        b_b=eval(input("请输入第一个数的数值:"))
        break
    except Exception as result:
        print("输入异常,请输入数",result)
a_a,b_b=b_b,a_a
print("两数互换后:")
print("第一个数为",a_a)
print("第二个数为",b_b)