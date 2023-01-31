# Java

## Java 环境配置

### 安装 jdk

:::tabs

@tab:active Windows

安装完后需要配置环境变量

```
JAVA_HOME
jdk安装目录
```

```
CLASSPATH
.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
```

```
Path
%JAVA_HOME%\bin
%JAVA_HOME%\jre\bin
```

配完后

```bash
java
javac
```

看下有正常回显即可

---

@tab Ubuntu/Debian

> [OpenJDK: Download and install](https://openjdk.org/install/)
>
> [[环境搭建\] Kali 下多版本JDK 共存 - 2022 年11 月1 日更新 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/399295670)
>
> ---

- 安装 openjdk8

  ```bash
  sudo apt-get install openjdk-8-jre
  sudo apt-get install openjdk-8-jdk
  ```

  安装完后可以 `java -version` 看下
  
  > ![image-20220923112443274](http://cdn.ayusummer233.top/img/202209231124375.png)

---

或者下载 `tar.gz` 包然后解压, 解压后在 `bin` 目录下有 `java` 和 `javac`

多版本 jdk 注册:

```bash
# 注册 java
update-alternatives --install /usr/bin/java java [解压后bin目录下的java文件绝对路径] [优先级数字]
update-alternatives --set java [解压后bin目录下的java文件绝对路径]

# 注册 javac
update-alternatives --install /usr/bin/javac javac [解压后bin目录下的javac文件绝对路径] [优先级数字]
update-alternatives --set javac [解压后bin目录下的javac文件绝对路径]
```

> 例如:
>
> ```bash
> update-alternatives --install /usr/bin/java java /home/ajest/tools/java/jdk1.8.0_351/bin/java 18351
> update-alternatives --set java /home/ajest/tools/java/jdk1.8.0_351/bin/java
> update-alternatives --install /usr/bin/javac javac /home/ajest/tools/java/jdk1.8.0_351/bin/javac 18351
> update-alternatives --set javac /home/ajest/tools/java/jdk1.8.0_351/bin/javac
> 
> update-alternatives --install /usr/bin/java java /home/ajest/tools/java/jdk-11.0.17/bin/java 11017
> update-alternatives --set java /home/ajest/tools/java/jdk-11.0.17/bin/java
> update-alternatives --install /usr/bin/javac javac /home/ajest/tools/java/jdk-11.0.17/bin/javac 11017
> update-alternatives --set javac /home/ajest/tools/java/jdk-11.0.17/bin/javac
> 
> update-alternatives --install /usr/bin/java java /home/ajest/tools/java/jdk-17.0.5/bin/java 1705
> update-alternatives --set java /home/ajest/tools/java/jdk-17.0.5/bin/java
> update-alternatives --install /usr/bin/javac javac /home/ajest/tools/java/jdk-17.0.5/bin/javac 1705
> update-alternatives --set javac /home/ajest/tools/java/jdk-17.0.5/bin/javac
> 
> 
> update-alternatives --install /usr/bin/java java /home/ajest/tools/java/jdk-19.0.1/bin/java 1901
> update-alternatives --set java /home/ajest/tools/java/jdk-19.0.1/bin/java
> update-alternatives --install /usr/bin/javac javac /home/ajest/tools/java/jdk-19.0.1/bin/javac 1901
> update-alternatives --set javac /home/ajest/tools/java/jdk-19.0.1/bin/javac
> ```

多版本 JDK 管理

```bash
update-alternatives --config java
update-alternatives --config javac
```

---

### IDEA

#### ubuntu 安装 IDEA

直接远程连接安装即可

![image-20220923185210262](http://cdn.ayusummer233.top/img/202209231852362.png)

---

### Java 反射

> [Java 反射详解 - YSOcean - 博客园 (cnblogs.com)](https://www.cnblogs.com/ysocean/p/6516248.html)
>
> ---

Java反射就是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意方法和属性；并且能改变它的属性。而这也是Java被视为(准)动态语言的一个关键性质

> 为啥要说是准动态，因为一般而言的动态语言定义是程序运行时，允许改变程序结构或变量类型，这种语言称为动态语言。从这个观点看，Perl，Python，Ruby是动态语言，C++，Java，C#不是动态语言。

反射机制允许程序在运行时取得任何一个已知名称的class的内部信息，包括包括其modifiers(修饰符)，fields(属性)，methods(方法)等，并可于运行时改变fields内容或调用methods。那么我们便可以更灵活的编写代码，代码可以在运行时装配，无需在组件之间进行源代码链接，降低代码的耦合度；还有动态代理的实现等等；

> 但是需要注意的是反射使用不当会造成很高的资源消耗！

---

#### 得到 Class 的三种方式

比如新建一个 Person 类

```java
package reflect;

public class Person {
    private String name = "Jacob";
    public int age = 20;
    public Person(){
        System.out.println("Person()");
    }
    private void say(){
        System.out.println("Hello World!");
    }
    public void work(){
        System.out.println("I'm working!");
    }
}

```

![image-20221207152138868](http://cdn.ayusummer233.top/DailyNotes/202212071556647.png)

现在要在其他类中获取一个 Person 对象的 class 可以使用如下三种方式:

```java
package reflect;

public class reflect {
    // 1. 通过对象调用 getClass() 方法获取 Person 的 Class;
    // 通常用于传入一个 Object 对象, 但是不知道具体是什么类, 通过 getClass() 方法获取 Class 对象;
    public void by_getClass() {
        System.out.println("1. 通过对象调用 getClass() 方法获取 Person 的 Class;");
        Person person1 = new Person();
        Class c1 = person1.getClass();
        System.out.println(c1.getName());
    }

    // 2.直接通过 类名.class 的方式得到,该方法最为安全可靠，程序性能更高
    // 这说明每个类都有一个隐含的静态成员变量 class
    public void by_class() {
        System.out.println("2.直接通过 类名.class 的方式得到,该方法最为安全可靠，程序性能更高");
        Class c2 = Person.class;
        System.out.println(c2.getName());
    }

    // 3.通过 Class 类的静态方法 forName(String className) 得到
    // 该方法将类的全名（包括包名）作为参数，返回对应的 Class 对象
    // 用的最多, 但可能抛出 ClassNotFoundException 异常
    public void by_forName() throws ClassNotFoundException {
        System.out.println("3.通过 Class 类的静态方法 forName(String className) 得到");
        Class c3 = Class.forName("reflect.Person");
        System.out.println(c3.getName());
    }

}

```

```java
import reflect.reflect;

public class test {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        reflect r = new reflect();
        r.by_getClass();
        r.by_class();
        try {
            r.by_forName();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

![image-20221207155641124](http://cdn.ayusummer233.top/DailyNotes/202212071556151.png)

