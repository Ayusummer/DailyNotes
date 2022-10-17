# Java 代码审计

## Java 本地调试和远程调试技巧(IDEA)

> VSCode 也可以远程调试 Java, 打算等在 IDEA 上玩熟练后再转 VSCode 试试
>
> ---
>
> [告别脚本小子系列丨JAVA安全(1)——JAVA本地调试和远程调试技巧 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkzNjMxNDM0Mg==&mid=2247483768&idx=1&sn=36ff6d279fa7dbd7d5ae00b06a3c3ddc&chksm=c2a1d5f1f5d65ce701e1f73ce0f584412bfc38a507622758f2acabce370cdcc4bb4af2270045&mpshare=1&scene=1&srcid=1228ltotPbA9s9n82O4p0ut7&sharer_sharetime=1640682315288&sharer_shareid=364b318b59e17770cdf42d79a4539355&version=3.1.23.6025&platform=win#rd)
>
> ---

Java编写的项目一般较复杂，而且通常会引用大量第三方jar包。如果直接看代码逻辑会是一件很痛苦的事情，学会调试是开始java安全的必备技能。

---

### 本地调试

![image-20221017144824417](http://cdn.ayusummer233.top/img/202210171501758.png)

- `打断点`: 可以通过打断点来调试程序, IDEA 提供了不少断点调试按键, 如

  - `F7`：步入，如果当前行有方法调用，会进入方法内部，否则继续下一行执行。不能进入官方类库的方法。
  - `F8`：步过，一行一行执行代码，如果当前行有方法调用，不会进行方法内部。
  - `Alt + Shift + F7`：强制步入，能进去任何方法，和F7的区别是==能步入官方类库的方法==。
  - `Shift + F8`：步出，从步入的方法内退出到方法外面，此时方法已经执行完毕。

  `查看当前断点信息`:

  - 对于大型的项目，很多时候我们会下很多断点，但是自己都会忘记在哪个文件还打了断点的，这时候通过断点管理的功能就可以很方便的对断点进行管理。
  - 另外这个位置还提供了异常断点的功能，异常断点是断点调试中的重要调试技巧之一。如果我们不确定程序的运行逻辑，但是知道程序一定会暴异常，这时候就可以通过异常断点来查看程序的运行逻辑。通过搜索异常名称就可以在对应异常位置下断点了

  > ![image-20221017150806985](http://cdn.ayusummer233.top/img/202210171511125.png)

- `运行即时表达式`: 即时表达式是java调试中的重要工具，能帮助我们查看当前环境中变量值，查看线程信息，判断程序中的对比条件。

  > ![image-20221017150418543](http://cdn.ayusummer233.top/img/202210171504715.png)
  >
  > ![image-20221017150609452](http://cdn.ayusummer233.top/img/202210171506644.png)

- `查看当前的栈调用信息`: 栈调用是非常重要的调试信息，通常栈调用过程就是程序运行时的逻辑顺序，对java漏洞调试非常重要。

  > ![image-20221017151551454](http://cdn.ayusummer233.top/img/202210171515561.png)
  >
  > ![image-20221017151613224](http://cdn.ayusummer233.top/img/202210171516436.png)

- `当前变量信息`: 显示程序执行到当前位置时环境中的变量信息

  > ![image-20221017151912226](http://cdn.ayusummer233.top/img/202210171519359.png)

---

### 远程调试

多数情况下，我们进行代码审计或者漏洞复现，都是把靶机环境装在虚拟机中，然后通过远程调试的方式来对系统进行利用。要让服务器支持远程调试，必须在启动的时候增加KVM参数，如下所示。

```bash
-Xdebug -Xrunjdwp:transport=dt_socket,suspend=n,server=y,address=0.0.0.0:5555
```

- `Xdebug`: 启动调试，需要与 `-Xrunjdwp` 一起配合实现完整的调试模式。

- `Xrunjdwp`: 代表本次远程调试的参数设置。

  - `transport`：指定远程调试的协议，一般使用的是 `dt_socket`，其他还有 `dt_shmem` 等。

  - `suspend`: 代表是否在调试客户端建立起来之后才运行 `KVM`

    一般选择 `n`。这样调试程序不会影响主程序的运行。

  - `server`: 代表是否支持在 server 模式的 VM 中运行调试模式。

  - `address`：代表远程调试监听的端口  `[host]:[port]`。

    这里的 host 字段支持省略的写法，但是我们不建议省略 host 字段。

    刚开始进行远程调试时如果发现客户端连不上服务端远程调试的端口，就要检查服务端端口是否监听在 `127.0.0.1` 这样的本机地址，如果监听在本机地址，是不允许远程连接的。

而 KVM 参数需要写在哪里, 对于不同服务器远程调试的参数写的位置不一样

- 如果是打包独立运行的 SpringBoot 的 jar 包，那么可以直接在命令行中增加远程调试的参数。

  ```bash
  java -jar -Xdebug -Xrunjdwp:transport=dt_socket,suspend=n,server=y,address=0.0.0.0:5555   Test.jar
  ```

- 如果是 Tomcat 服务器，则可以直接修改 `bin/catalina.bat` 文件。在文件最前面增加远程调试的参数，如下所示。

  ![img](http://cdn.ayusummer233.top/img/202210171526246.jpeg)

---

上面开启了服务端远程调试的端口之后，下一步就需要客户端连接远程服务器进行调试。

为了保证远程调试的准确性，需要==客户端拥有和服务端完全一样的源代码==（这很重要，一定要完全一样），所以最好直接把服务端整个源码拷贝一份到客户端idea中进行调试。
使用idea本地打开拷贝的服务端源码，并且把所有的 jar 包加入 library。然后新增一个 configuration，选择 Remote JVM Debug，填写开启的远程调试服务器 ip 和端口。

![img](http://cdn.ayusummer233.top/img/202210171527167.jpeg)

然后点击debug按钮，可以看到下面的成功连接到远程服务器的信息，代表远程连接建立成功。后续就可以像本地调试一样对远程项目进行调试了。

![img](http://cdn.ayusummer233.top/img/202210171528089.jpeg)

---



---

# 附录

所有四级标题单独提出来

---

## IDEA 远程调试 Java 项目举例 - CVE-2018-2894 远程调试(寄/TODO: 等看完 Docker 再来试试)

`CVE-2018-2894` 使用的镜像与 `CVE-2020-14882` 相同

编辑 `doker-compose.yml` 文件, 将打算用于远程调试的端口映射上

> 比如这里将 5555 端口用于远程调试

```yaml
version: '2'
services:
 weblogic:
   image: vulhub/weblogic:12.2.1.3-2018
   ports:
    - "7001:7001"
    - "5555:5555"
```

然后启动容器

```bash
docker-compose up -d
```

> ![image-20221017154838944](http://cdn.ayusummer233.top/img/202210171548061.png)

然后进入容器编辑配置文件

> ![image-20221017155143287](http://cdn.ayusummer233.top/img/202210171551385.png)
>
> ![image-20221017154953038](http://cdn.ayusummer233.top/img/202210171549116.png)
>
> ![image-20221017155226548](http://cdn.ayusummer233.top/img/202210171552679.png)

可以看到 `line 48` 通过运行 jar 包启动了服务, 修改 `line 48` 加上调试参数

```bash
cd /u01 && curl -o /u01/fmw_12.2.1.3.0_wls_quick.jar http://ca-docker-stage.us.oracle.com/middleware/weblogic/fmw_12.2.1.3.0_wls_quick.jar && \
$JAVA_HOME/bin/java -jar -Xdebug -Xrunjdwp:transport=dt_socket,suspend=n,server=y,address=0.0.0.0:5555  /u01/fmw_12.2.1.3.0_wls_quick.jar -invPtrLoc /u01/oraInst.loc -jreLoc $JAVA_HOME -ignoreSysPrereqs -force -novalidation ORACLE_HOME=$ORACLE_HOME && \
rm /u01/fmw_12.2.1.3.0_wls_quick.jar /u01/oraInst.loc /u01/install.file
```

> ![image-20221017155601083](http://cdn.ayusummer233.top/img/202210171558182.png)

然后重启容器

```bash
docker restart [container_id]
```

> ![image-20221017155902491](http://cdn.ayusummer233.top/img/202210171559603.png)











































