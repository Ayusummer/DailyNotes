# QA

## CH1遗留问题整理

### echo 的运行时间问题

> PS: 这里之所以循环再多次也看不出差异的关键就在于上面所说的这个理论速度的分析上
>
> 在 Go 中连接字符串有两种常见的方法: 使用 `+=` 运算符或 `strings.Join` 函数
>
> - `+=` 运算符在每次连接时都会创建一个新的字符串
>
>   因为字符串在 Go 中是不可变的, 所以当有很多字符串需要连接时会创建很多临时字符串从而消耗大量的内存和 CPU 时间
>
> - `strings.Join` 函数在连接字符串时更高效
>
>   因为它首先计算出结果字符串的总长度, 然后一次性分配足够的内存, 这避免了创建大量临时字符串
>
>   因此即使有很多字符串需要连接也不会消耗太多的内存和 CPU 时间
>
> 所以这里选择循环多次打印少量参数是看不出时间差异的, 正确的做法是打印大量参数来查看时间差异
>
> 依旧是:
>
> ![image-20240331175221836](http://cdn.ayusummer233.top/DailyNotes/202403311752928.png)
>
> ```powershell
> go run .\main.go op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf op 81 213 19 0 12 90 66 sidhaifgaifiaf edadhiuefiauhdiaheuarueabrdabfbaeuiwiajoejqioejoj12iejore 13143ih 77da 12131rvf
> ```
>
> ![image-20240331175345615](http://cdn.ayusummer233.top/DailyNotes/202403311753704.png)
>
> 可以明显看出来 `strings.Join` 要比 `+=` 快多了
>

---

### append 赋值参数

Go 的 `append` 函数不会直接修改原始切片, 而是返回一个新的切片因此需要被修改的目标接收返回值以进行更新

---

### body 是啥

首先说为什么 body 需要关闭:

具体来说, HTTP 响应的 Body 是一个网络连接的流, 如果不关闭, 这个连接会一直保持打开状态, 即使已经读取了所有的数据, 这个网络连接占用的系统资源(如端口)不能被其他操作复用

 如果程序频繁创建新的网络连接又不关闭它们, 那么最终可能会耗尽系统的网络资源导致新的网络连接无法创建

---

`resp.Body` 是一个 `io.ReadCloser` 类型, 是一个接口类型, 包含 `Read` 和 `Close` 两个方法

对于接口类型(CH7会讲), 这是一种特殊的类型, 它定义了一组方法的集合, 但并没有实现这些方法, 任何实现了这些方法的类型都被认为实现了该接口

  ```go
  type MyInterface interface {
      Method1(param1 int) return_type
      Method2(param1 int, param2 string) return_type
      // 其他方法......
  }
  ```

  上述 `MyInterface` 是一个接口类型, 它定义了 `Method1` 和 `Method2` 两个方法

  任何类型, 只要它定义了这两个方法, 就被认为实现了 `MyInterface` 接口

  在 Go 的 `net/http` 包中, `http.Response` 是一个结构体, 它的 `Body` 字段的类型是 `io.ReadCloser`, 这是一个接口类型

  `io.ReadCloser` 是 `io.Reader` 和 `io.Closer` 这两个接口的组合, 定义如下:

  ```go
  type Reader interface {
      Read(p []byte) (n int, err error)
  }
  
  type Closer interface {
      Close() error
  }
  
  type ReadCloser interface {
      Reader
      Closer
  }
  ```

  任何类型, 只要它实现了 `Read` 和 `Close` 这两个方法就被认为实现了 `io.ReadCloser` 接口

---

### / 和其他 Path 的区别

在Go的http包中, URL路径的匹配是按照前缀进行的, 但是这个前缀必须是一个路径的完整部分, 它必须以 `/` 结束

因此 `/count` 并不是 `/count/xxx` 的前缀, `/count/` 才是

![image-20240331190208506](http://cdn.ayusummer233.top/DailyNotes/202403311902666.png)

---

## CH2-程序结构-遗留问题

### 关于作用域以及简短变量声明的一些作用测试

- 单一变量单独使用简短变量声明

  - 作用域未发生变化时会因为重复声明而无法通过编译

    ![image-20240410095015306](http://cdn.ayusummer233.top/DailyNotes/image-20240410095015306.png)

  - 作用域发生变化时会屏蔽掉外层声明

    ![image-20240410095514210](http://cdn.ayusummer233.top/DailyNotes/image-20240410095514210.png)

- 多变量使用简短变量声明

  - 作用域未发生变化时

    - `:=` 左侧都是已经声明过的变量时会因为重复声明而编译报错

      ![image-20240410095752197](http://cdn.ayusummer233.top/DailyNotes/image-20240410095752197.png)

    - `:=` 左侧有未声明变量时对于已声明的部分作用仅为赋值

      ![image-20240410100541372](http://cdn.ayusummer233.top/DailyNotes/image-20240410100541372.png)

      可以看到在重复 `:=` 的时候 `a` 的地址是没有变化的

  - 作用域发生变化时会屏蔽掉外层声明

    - `:=` 左侧都是已经声明过的变量时会屏蔽掉外层声明

      ![](http://cdn.ayusummer233.top/DailyNotes/image-20240410111824675.png)

      可以看到在 for 循环内部的变量 `a`, `b` 有新的地址

    - `:=` 左侧有未声明变量时会屏蔽掉外层声明

      ![image-20240410101155068](http://cdn.ayusummer233.top/DailyNotes/image-20240410101155068.png)

      可以看到在 for 循环内部的变量 `a` 有新的地址

















