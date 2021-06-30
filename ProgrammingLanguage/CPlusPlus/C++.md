<!--
 * @Author: 咸鱼型233
 * @Date: 2021-06-28 18:38:31
 * @LastEditTime: 2021-06-28 18:39:16
 * @LastEditors: Please set LastEditors
 * @Description: C++ 学习随笔
 * @FilePath: \DailyNotes\ProgrammingLanguage\CPlusPlus\C++.md
-->

# VisualStudio2019 相关

---

## 为什么VS中会建议宏转换为constexpr？

![image-20210628184054251](http://cdn.ayusummer233.top/img/20210628184101.png)

> 宏是由预处理器而非编译器解析的，比如不能用命名空间，所以使用后必须解除
>
> 以及宏很容易带来各式各样的错误，最简单如括号上的错误，还有宏会导致debug困难等等
>
> [引自:为什么VS中会建议宏转换为constexpr？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/433057879)

---

### constexpr 

[节选自:constexpr 的来龙去脉-云科普blog (winkp.com)](https://www.winkp.com/7505.html)

- 关键字 **`constexpr`** (*constant expression*) 是在 C++11 中引入的，并且在 C++14 中进行了优化。

- **`constexpr`** 和 **`const`** 一样可以用来修饰变量：试图修改 **`constexpr`** 变量时，编译器将会报错。

- 不同于 **`const`**， **`constexpr`** 还可以修饰函数和类的构造函数。 **`constexpr`** 表示值或者返回值是常量，并且如果可能，在编译时计算它们。

- 一个 **`constexpr`** 整型值能够用在任何 **`const`** 整型值可以用的地方，例如模板参数和数组的申明。

- 当值在编译时计算而不是运行时计算时，它能够使程序运行得更快，并使用更少的内存。

  为了限制编译时常量计算的复杂性，以及其对编译时间潜在的影响， C++14 标准需要 **`constexpr`** 类型必须为字面值类型。

> 1、字面值常量：一个形如42的值被称作字面值常量，这样的值一望而知。每个字面值常量都对应一种数据类型，字面值常量的形式和值决定了它的数据类型，包含：
>
> 整型和浮点型字面值
> 字符和字符串字面值
> 布尔字面值和指针字面值：
> bool test = false；
> nullptr是指针字面值；
>
> ————————————————
> 版权声明：本文为CSDN博主「十一月zz」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
> 原文链接：https://blog.csdn.net/baidu_35679960/article/details/78934193

---

####  应该使用 constexpr 的场景

- 只要允许，尽可能使用 **`constexpr`**，当值在编译时计算而不是运行时计算时，它能够使程序运行得更快，并使用更少的内存。

----

#### 不应该使用 constexpr 的场景

- **`constexpr`** 是对象或者函数接口的一部分，所以如果你使用了 **`constexpr`** 但反悔了，移除 **`constexpr`** 可能会导致大量的调用代码编译失败。(比如添加 I/O 操作用于调试或者性能调优可能导致这样的问题，因为 I/O 语句通常不是在 **`constexpr`** 函数中执行的。)

---

### auto

- 从初始化表达中推导出已声明变量的类型。
- 从 `Visual Studio 2010` 开始，**`auto`**关键字宣布一个变量，其类型是从声明的初始化表达中推断出的

---

## C4996

- 使用的函数是过时了已被弃用的函数

---

### strcpy_s

` strcpy_s(str, strlen(str1)+1, str1);`



----

# 实用工具

---

## 快捷生成函数调用关系图

- 之前也接触过快速生成 python 文件的函数关系调用图, 记得是 [code2flow]([scottrogowski/code2flow: Pretty good call graphs for dynamic languages (github.com)](https://github.com/scottrogowski/code2flow))

---

### callgraph

----

#### Ubuntu

- 目前在网上只找到了 Ubuntu 的使用方案

- 流程

  - 安装 `cflow` 和 `graphviz`

    `sudo apt-get install cflow graphviz`

  - 然后在合适的位置创建两个文件 [tree2dotx](https://raw.githubusercontent.com/tinyclub/linux-0.11-lab/master/tools/tree2dotx) 和 `callgraph`

    文件中的内容分别如下:

    `tree2dotx`:

    ```shell
    #!/bin/bash
    #
    # callgraph -- Generate a callgraph of a specified function in specified file/directory
    #
    # -- Based on cflow and tree2dotx
    #
    # Usage:
    #
    #       $ callgraph
    #
    #               -f func_name
    #               -d directory|file
    #               -F filterstr
    #               -D depth
    #               -o directory
    #
    #
    # Output: ../callgraph/func.dir_file_name.svg
    #
    
    # OS
    OS=$(uname)
    
    # Tree2Dot
    TOP_DIR=$(cd $(dirname $0) && pwd)/
    tree2dotx=${TOP_DIR}/tree2dotx
    
    # Output directory
    OUT_DIR=${TOP_DIR}/../callgraph
    [ ! -d $OUT_DIR ] && OUT_DIR=./
    PIC_TYPE=svg
    
    # Get browser
    if [ "x$OS" == "xDarwin" ]; then
        BROWSER=/Applications/Safari.app/Contents/MacOS/Safari
    else
        BROWSER=chromium-browser
    fi
    
    # Default setting
    
    # Input: Function Name [Directory Name]
    func=main
    dir=./
    
    # Default depth of the tree
    depth=
    
    # filterstr for tree2dotx
    filterstr=""
    
    # Usage
    
    function usage
    {
            echo ""
            echo "  $0 "
            echo ""
            echo "   -f func_name"
            echo "   -d directory|file"
            echo "   -F filterstr"
            echo "   -D depth"
            echo "   -o directory"
            echo ""
    }
    
    while getopts "F:f:d:D:o:b:h" opt;
    do
            case $opt in
                    F)
                            filterstr=$OPTARG
                    ;;
                    f)
                            func=$OPTARG
                    ;;
                    d)
                            [ -n "$OPTARG" ] && [ -f "$OPTARG" -o -d "$OPTARG" ] && dir=$OPTARG
                    ;;
                    D)
                            depth=$OPTARG
                    ;;
                    o)
                            output=$OPTARG
                            [ ! -d "$output" ] && mkdir -p $output
                            OUT_DIR=$output
                    ;;
                    b)
                            BROWSER=$OPTARG
                    ;;
                    h|?)
                            usage $0;
                            exit 1;
                    ;;
            esac
    done
    
    # Check the function and find out its file
    if [ -d "$dir" ]; then
    	match=`grep " [a-zA-Z0-9_]*${func}[a-zA-Z0-9_]*(.*)" -iur $dir | grep "\.[ch]:"`
    	file=`echo "$match" | cut -d ':' -f1`
    else
    	match="$dir"`grep " [a-zA-Z0-9_]*${func}[a-zA-Z0-9_]*(.*)" -iur $dir`
    	file="$dir"
    fi
    [ $? -ne 0 ] && echo "Note: No such function found: $func" && exit 1
    echo "Func: $func"
    [ -z "$file" ] && echo "Note: No file found for $func" && exit 1
    
    # Let users choose the target files
    fileno=`echo $file | tr -c -d ' ' | wc -c`
    ((fileno+=1))
    if [ $fileno -ne 0 ]; then
    	echo "Match: $fileno"
    	echo "File:"
    	echo "     0  All files under $dir"
    	echo "$match" | cat -n
    	files=($file)
    	read -p "Select: 0 ~ $fileno ? " file_in
    	if [ $file_in -ne 0 ]; then
              while [ $file_in -lt 1 -o $file_in -gt $fileno ]; do
    		read -p "Select: 1 ~ $fileno ? " file_in
    	  done
    	  ((file_in-=1))
    	  file=${files[$file_in]}
    	  ((file_in+=1))
            fi
    else
    	file_in=1
    fi
    
    if [ $file_in -ne 0 ]; then
      [ -z "$file" ] && echo "Note: No file found for $func" && exit 1
      echo "File: $file"
      func=`echo "$match" | sed -n -e "${file_in},${file_in}p" | sed -n -e "s/.* \([a-zA-Z0-9_]*${func}[a-zA-Z0-9_]*\)(.*).*/\1/p"`
      [ -z "$func" ] && echo "Note: No such function found: $func" && exit 1
    else
      file="`find -L $dir -name '*.c' -or -name '*.h' | tr '\n' ' '`"
    fi
    
    # Genrate the calling tree of this function
    # Convert it to .dot format with tree2dotx
    # Convert it to jpg format with dot of Graphviz
    if [ $file_in -ne 0 ]; then
      tmp=`echo $file | tr '/' '_' | tr '.' '_'`
    else
      tmp="all"
    fi
    pic=${func}.${tmp}.${PIC_TYPE}
    long_pic=${OUT_DIR}/${pic}
    
    which cflow >/dev/null 2>&1
    if [ $? -ne 0 ]; then
            echo "Error: cflow doesn't exist, please install it..."
            exit 1
    else
            [ -n "$depth" ] && depth=" -d $depth "
            calltree="cflow -b $depth -m "
    fi
    
    which dot >/dev/null 2>&1
    [ $? -ne 0 ] && "Error: dot doesn't exist, please install graphviz..."
    
    echo "Command: ${calltree}${func} ${file} | ${tree2dotx} "${filterstr}" 2>/dev/null | dot -T${PIC_TYPE} -o $long_pic"
    ${calltree}${func} ${file} | ${tree2dotx} -f "${filterstr}" 2>/dev/null | dot -T${PIC_TYPE} -o $long_pic
    
    # Tell users
    echo "Target: ${file}: ${func} -> ${long_pic}"
    
    # Display it
    which $BROWSER >/dev/null 2>&1
    [ $? -ne 0 ] && exit 0
    $BROWSER ${long_pic} >/dev/null 2>&1 &
    ```

    `callgraph`:

    ```shell
    #!/bin/bash
    #
    # callgraph -- Generate a callgraph of a specified function in specified file/directory
    #
    # -- Based on cflow and tree2dotx
    #
    # Usage:
    #
    #       $ callgraph
    #
    #               -f func_name
    #               -d directory|file
    #               -F filterstr
    #               -D depth
    #               -o directory
    #
    #
    # Output: ../callgraph/func.dir_file_name.svg
    #
    
    # OS
    OS=$(uname)
    
    # Tree2Dot
    TOP_DIR=$(cd $(dirname $0) && pwd)/
    tree2dotx=${TOP_DIR}/tree2dotx
    
    # Output directory
    OUT_DIR=${TOP_DIR}/../callgraph
    [ ! -d $OUT_DIR ] && OUT_DIR=./
    PIC_TYPE=svg
    
    # Get browser
    if [ "x$OS" == "xDarwin" ]; then
        BROWSER=/Applications/Safari.app/Contents/MacOS/Safari
    else
        BROWSER=chromium-browser
    fi
    
    # Default setting
    
    # Input: Function Name [Directory Name]
    func=main
    dir=./
    
    # Default depth of the tree
    depth=
    
    # filterstr for tree2dotx
    filterstr=""
    
    # Usage
    
    function usage
    {
            echo ""
            echo "  $0 "
            echo ""
            echo "   -f func_name"
            echo "   -d directory|file"
            echo "   -F filterstr"
            echo "   -D depth"
            echo "   -o directory"
            echo ""
    }
    
    while getopts "F:f:d:D:o:b:h" opt;
    do
            case $opt in
                    F)
                            filterstr=$OPTARG
                    ;;
                    f)
                            func=$OPTARG
                    ;;
                    d)
                            [ -n "$OPTARG" ] && [ -f "$OPTARG" -o -d "$OPTARG" ] && dir=$OPTARG
                    ;;
                    D)
                            depth=$OPTARG
                    ;;
                    o)
                            output=$OPTARG
                            [ ! -d "$output" ] && mkdir -p $output
                            OUT_DIR=$output
                    ;;
                    b)
                            BROWSER=$OPTARG
                    ;;
                    h|?)
                            usage $0;
                            exit 1;
                    ;;
            esac
    done
    
    # Check the function and find out its file
    if [ -d "$dir" ]; then
    	match=`grep " [a-zA-Z0-9_]*${func}[a-zA-Z0-9_]*(.*)" -iur $dir | grep "\.[ch]:"`
    	file=`echo "$match" | cut -d ':' -f1`
    else
    	match="$dir"`grep " [a-zA-Z0-9_]*${func}[a-zA-Z0-9_]*(.*)" -iur $dir`
    	file="$dir"
    fi
    [ $? -ne 0 ] && echo "Note: No such function found: $func" && exit 1
    echo "Func: $func"
    [ -z "$file" ] && echo "Note: No file found for $func" && exit 1
    
    # Let users choose the target files
    fileno=`echo $file | tr -c -d ' ' | wc -c`
    ((fileno+=1))
    if [ $fileno -ne 0 ]; then
    	echo "Match: $fileno"
    	echo "File:"
    	echo "     0  All files under $dir"
    	echo "$match" | cat -n
    	files=($file)
    	read -p "Select: 0 ~ $fileno ? " file_in
    	if [ $file_in -ne 0 ]; then
              while [ $file_in -lt 1 -o $file_in -gt $fileno ]; do
    		read -p "Select: 1 ~ $fileno ? " file_in
    	  done
    	  ((file_in-=1))
    	  file=${files[$file_in]}
    	  ((file_in+=1))
            fi
    else
    	file_in=1
    fi
    
    if [ $file_in -ne 0 ]; then
      [ -z "$file" ] && echo "Note: No file found for $func" && exit 1
      echo "File: $file"
      func=`echo "$match" | sed -n -e "${file_in},${file_in}p" | sed -n -e "s/.* \([a-zA-Z0-9_]*${func}[a-zA-Z0-9_]*\)(.*).*/\1/p"`
      [ -z "$func" ] && echo "Note: No such function found: $func" && exit 1
    else
      file="`find -L $dir -name '*.c' -or -name '*.h' | tr '\n' ' '`"
    fi
    
    # Genrate the calling tree of this function
    # Convert it to .dot format with tree2dotx
    # Convert it to jpg format with dot of Graphviz
    if [ $file_in -ne 0 ]; then
      tmp=`echo $file | tr '/' '_' | tr '.' '_'`
    else
      tmp="all"
    fi
    pic=${func}.${tmp}.${PIC_TYPE}
    long_pic=${OUT_DIR}/${pic}
    
    which cflow >/dev/null 2>&1
    if [ $? -ne 0 ]; then
            echo "Error: cflow doesn't exist, please install it..."
            exit 1
    else
            [ -n "$depth" ] && depth=" -d $depth "
            calltree="cflow -b $depth -m "
    fi
    
    which dot >/dev/null 2>&1
    [ $? -ne 0 ] && "Error: dot doesn't exist, please install graphviz..."
    
    echo "Command: ${calltree}${func} ${file} | ${tree2dotx} "${filterstr}" 2>/dev/null | dot -T${PIC_TYPE} -o $long_pic"
    ${calltree}${func} ${file} | ${tree2dotx} -f "${filterstr}" 2>/dev/null | dot -T${PIC_TYPE} -o $long_pic
    
    # Tell users
    echo "Target: ${file}: ${func} -> ${long_pic}"
    
    # Display it
    which $BROWSER >/dev/null 2>&1
    [ $? -ne 0 ] && exit 0
    $BROWSER ${long_pic} >/dev/null 2>&1 &
    ```

    - 给所有用户这两个文件的可执行权限

      `chmod u+x tree2dotx`

      `chmod u+x callgraph`

    - 安装 `gawk`

      sudo apt-get install gawk

    - 将需要分析的 cpp 文件放到上面那两个文件所在的目录下(以 main.cpp 含 main() 函数为例)

      分析 main.cpp 文件中的 main 函数:

      `./callgraph -f main -d ./main.cpp`

      ![image-20210629200950829](http://cdn.ayusummer233.top/img/20210629200950.png)

      



