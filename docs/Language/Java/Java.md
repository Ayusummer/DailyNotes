# Java 环境配置

## 安装 jdk

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

## IDEA

### ubuntu 安装 IDEA

直接远程连接安装即可

![image-20220923185210262](http://cdn.ayusummer233.top/img/202209231852362.png)

