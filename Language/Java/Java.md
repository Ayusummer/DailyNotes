# 安装 jdk

## Windows

### 环境配置

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

## ubuntu

> [OpenJDK: Download and install](https://openjdk.org/install/)

- 安装 openjdk8

  ```bash
  sudo apt-get install openjdk-8-jre
  sudo apt-get install openjdk-8-jdk
  ```

  安装完后可以 `java -version` 看下
  
  > ![image-20220923112443274](http://cdn.ayusummer233.top/img/202209231124375.png)

