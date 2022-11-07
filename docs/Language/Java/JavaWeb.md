# Java Web

## Maven

> [Maven配置教程_霍英俊-CSDN博客_maven配置](https://blog.csdn.net/huo920/article/details/82082403)

### 下载与配置

在 [Maven – Download Apache Maven](https://maven.apache.org/download.cgi) 下载

<img src="http://cdn.ayusummer233.top/img/202201011531250.png" alt="image-20220101153104101" style="zoom: 80%;" />

解压到某个文件夹

![image-20220101153336808](http://cdn.ayusummer233.top/img/202201011533908.png)

配置 Maven 环境变量

![image-20220101153540046](http://cdn.ayusummer233.top/img/202201011535134.png)

编辑 PATH 变量

![image-20220101153734649](http://cdn.ayusummer233.top/img/202201011537762.png)

验证配置: `mvn -v`

<img src="http://cdn.ayusummer233.top/img/202201011543915.png" alt="image-20220101154317795" style="zoom:80%;" />

修改 Maven 配置 `C:\Programming\Java\apache-maven-3.8.4\conf\settings.xml`

修改本地仓库位置:

![image-20220101154858114](http://cdn.ayusummer233.top/img/202201011548230.png)

修改 maven 默认的 JDK 版本

![image-20220101155951312](http://cdn.ayusummer233.top/img/202201011559443.png)

```xml
    <profile>     
        <id>JDK-1.8</id>       
        <activation>       
            <activeByDefault>true</activeByDefault>       
            <jdk>1.8</jdk>       
        </activation>       
        <properties>       
            <maven.compiler.source>1.8</maven.compiler.source>       
            <maven.compiler.target>1.8</maven.compiler.target>       
            <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>       
        </properties>       
    </profile>
```

添加国内镜像源

```xml
<!-- 阿里云仓库 -->
<mirror>
    <id>alimaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>

<!-- 中央仓库1 -->
<mirror>
    <id>repo1</id>
    <mirrorOf>central</mirrorOf>
    <name>Human Readable Name for this Mirror.</name>
    <url>http://repo1.maven.org/maven2/</url>
</mirror>

<!-- 中央仓库2 -->
<mirror>
    <id>repo2</id>
    <mirrorOf>central</mirrorOf>
    <name>Human Readable Name for this Mirror.</name>
    <url>http://repo2.maven.org/maven2/</url>
</mirror>

```

![image-20220101160226738](http://cdn.ayusummer233.top/img/202201011602870.png)





