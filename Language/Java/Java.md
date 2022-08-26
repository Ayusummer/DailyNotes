# 环境配置

## JDK

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