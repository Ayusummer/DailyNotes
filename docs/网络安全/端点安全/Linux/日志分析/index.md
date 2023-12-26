# Linux 日志

---

## 概述

Linux 系统的目录组织是一个树形的结构, 其根节点为根目录 `/`, 以 Ubuntu 为例, 根目录下的子目录包括如下这些:

![image-20230920150853543](http://cdn.ayusummer233.top/DailyNotes/202312210830360.png)

- **/bin**：二进制文件的存储位置。包含了系统启动和修复所需的基本命令，如ls、cp、mv等。
- **/boot**：包含启动Ubuntu Linux所需的内核文件和引导加载程序配置文件。
- **/dev**：设备文件目录。包含系统用于与硬件设备进行通信的特殊文件，如磁盘分区、USB设备、键盘等。
- **/etc**：配置文件的存储位置。包含系统和应用程序的配置文件，用于管理系统和应用程序的设置。
- **/home**：用户的主目录。每个用户通常都有一个子目录，用于存储其个人文件和设置。
- **/lib**：共享库文件的存储位置, 存放着系统最基本的动态链接共享库，类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库,包含了用于系统启动和运行的共享库。
- **/media**：可移动媒体设备的挂载点。当插入USB闪存驱动器或CD/DVD时，这些设备通常会在此处挂载。
- **/mnt**：手动挂载其他文件系统的临时挂载点。
- **/opt**：可选软件包的安装位置。某些第三方软件可能安装在此处。
- **/proc**：虚拟文件系统，用于访问有关系统进程和内核状态的信息。
- **/root**：超级用户（root）的主目录。
- **/run**：在系统启动期间创建的临时运行时文件的存储位置。
- **/sbin**：系统命令的存储位置。包含只能由超级用户执行的系统命令。
- **/srv**：服务数据的存储位置。用于存储系统提供的一些服务的数据。
- **/sys**：用于与Linux内核进行交互的虚拟文件系统。
- **/tmp**：临时文件的存储位置。通常用于存储临时数据，文件在重启后会被清除。
- **/usr**：用户数据的次要存储位置。包含系统的大多数用户级程序和文件，包括可执行文件、库文件、头文件等。
- **/var**：可变数据的存储位置。包括日志文件、数据库文件、邮件和其他可变数据。

Linux日志存储在`/var/log`目录下，涵盖了从用户登录到服务错误等系统运行过程中发生的各种事件的信息。

它是系统安全管理的重要手段，可以用于监控系统运行状态、发现安全漏洞、追踪攻击行为等。

- 日志格式

  - 文本格式：是最常见的日志格式, 可以使用 `cat`, `less`, `tail`, `grep` 等命令阅读

  - 二进制格式：由计算机直接处理，人无法直接阅读和理解; 需要使用专门的命令阅读

- 日志级别

  日志级别从调试到严重错误不等，了解这些级别有助于我们筛选和理解日志内容
  
- Linux 日志数量比较庞大, 漫无目的的翻找日志是比较低效的做法, 可以带有明确目的来分析日志

  例如，频繁的登录失败可能表明有人试图破解密码。
  
- 终端侧的日志也可以作为关联分析的依据, 结合网络侧流量以及终端侧日志可以更全面地分析与响应安全事件

---

### 关键日志

- ``/var/log/syslog`（或 **/var/log/messages**）: 记录了系统的绝大多数活动，包括系统错误、警告和其他重要消息。

- `/var/log/auth.log`（在某些系统中是 **/var/log/secure**）: 记录所有关于用户认证过程的信息，包括登录尝试、sudo命令的使用等, 可用于安全分析

- **/var/log/boot.log**: 包含系统启动过程中的信息，可用于排查启动问题

- **/var/log/dmesg**: 存储内核在引导过程中的消息，可用于诊断硬件和驱动问题

- **/var/log/kern.log**: 包含内核产生的消息和错误，可用于分析硬件和系统级别的问题

- **/var/log/apache2**（Apache）或 **/var/log/nginx**（Nginx）: 记录了Web服务器的活动，可用于分析HTTP请求和定位Web服务器问题

- **/var/log/mail.log**: (邮件服务器)记录了所有关于邮件服务的活动

- **/var/log/cron.log**: 记录cron守护进程的活动，包括计划任务的执行情况

  由于系统不一定默认记录 cron 日志, 因此该文件不一定存在, 且 cron 信息可能被记录下 syslog 或 messages 中

- `/var/log/faillog`: 记录登录失败的尝试，可用于排查潜在的非法登录尝试

- **/var/log/ufw.log** 或 **/var/log/firewalld**: 如果安装了UFW或Firewalld等防火墙工具，这些日志文件记录了防火墙活动。

- **/var/log/yum.log** 或 **/var/log/dpkg.log**: 对于使用YUM（如CentOS）或dpkg（如Debian/Ubuntu）的系统，这些文件记录软件包管理器的活动。

- `/var/log/lastlog`: 记录系统中所有用户的最后一次登录信息, 不是文本文件, 而是一个格式化的数据库, 可以通过 `lastlog` 命令阅读

---

## 基础日志分析技巧

### 使用命令行工具辅助日志分析

使用命令行工具，如`grep`，可以帮助我们快速搜索关键词。例如，`grep 'error' /var/log/syslog`能够找出所有包含'error'的日志行。

```bash
grep 'error' /var/log/syslog
```

![image-20231222111016176](http://cdn.ayusummer233.top/DailyNotes/202312221128726.png)

或者用 view 命令或其他预览命令阅读

```bash
view /var/log/syslog
```

![image-20231222111153535](http://cdn.ayusummer233.top/DailyNotes/202312221128773.png)

或者直接在 VSCode 这类编辑器中查看

![image-20231222111341257](http://cdn.ayusummer233.top/DailyNotes/202312221128434.png)

---

### 查看一些关键日志

#### lastlog

`/var/log/lastlog`: 记录系统中所有用户的最后一次登录信息, 不是文本文件, 而是一个格式化的数据库, 可以通过 `lastlog` 命令阅读

![image-20231222112428289](http://cdn.ayusummer233.top/DailyNotes/202312221128125.png)

对于其中陌生的 ip 我们可以进一步进行排查

---

#### authlog

`/var/log/auth.log`（在某些系统中是 **/var/log/secure**）: 记录所有关于用户认证过程的信息，包括登录尝试、sudo命令的使用等, 可用于安全分析

![image-20231222112711225](http://cdn.ayusummer233.top/DailyNotes/202312221128852.png)

- `dbus-daemon` 是 D-Bus（Desktop Bus）系统的核心组件，是一种在 Linux 和其他类 Unix 系统中广泛使用的消息总线系统。D-Bus 被设计用来提供一种简单的方式，使得在同一系统上运行的应用程序和服务之间能够相互通信

- SSH 守护进程（`sshd`），在尝试连接到 IP 地址 `34.240.117.4` 的 `443` 端口时失败了

  `sshd`（SSH 守护进程）默认情况下监听在 22 端口上，用于处理 SSH 连接, 这里尝试连接到一个外网 ip 的 443 端口是有些异常的, 可以结合恶意域名ip之类的情报查看

- ```log
  Dec 17 00:10:01 hillstone-virtual-machine CRON[958697]: pam_unix(cron:session): session opened for user root by (uid=0)
  Dec 17 00:10:01 hillstone-virtual-machine CRON[958697]: pam_unix(cron:session): session closed for user root
  ```

  上述日志描述了一个 cron 会话的执行与结束的认证日志

---

#### syslog

`/var/log/syslog`（或 **/var/log/messages**）: 记录了系统的绝大多数活动，包括系统错误、警告和其他重要消息。

![image-20231222112816916](http://cdn.ayusummer233.top/DailyNotes/202312221128933.png)

```bash
ls -lhta /var/log | grep syslog
```

![image-20231222113025908](http://cdn.ayusummer233.top/DailyNotes/202312221130064.png)

syslog 包含了很多信息, 这里就不再手动一点点翻了, 很费精力, 因此我们需要一些手段来帮助我们快速分析这些日志

----



#### 一些常用的分析命令

统计登入失败次数

```bash
zgrep "Failed password" /var/log/auth.log* | wc -l
```

- `zgrep "Failed password" /var/log/auth.log*`：
  - `zgrep` 是 `grep` 的一个变体，可以处理普通和压缩（gzip）格式的文件
  - 使用通配符 `*` 来包含 `/var/log` 目录下所有以 `auth.log` 开头的文件
  - 使用 `zgrep` 在 `/var/log/auth.log` 及其所有旧文件（包括 `.gz` 结尾的压缩文件）中搜索包含 "Failed password" 的行
- `| wc -l`：
  - 将 `zgrep` 的输出（所有包含 "Failed password" 的行）传递给 `wc -l`
  - `wc -l` 统计接收到的行数

![image-20231222113259693](http://cdn.ayusummer233.top/DailyNotes/202312221132878.png)

---



---

### 日志分析工具

- Logwatch(免费,开源)
- Graylog(基础版开源)
- ELK Stack (Elasticsearch, Logstash, and Kibana)(基础版开源)
- Splunk(免费版限制数据量)
- **rsyslog(免费,开源)**
- **Syslog-ng**(社区版免费)
- **Grafana Loki(免费,开源)**

```bash
apt install logwatch
```

---

### 简单案例分析

假设我们想找出过去一小时内所有失败的登录尝试。我们可以使用`grep`和`awk`命令组合来实现这一点

----

## 安全相关日志应用

### 识别安全事件

Linux 日志数量比较庞大, 漫无目的的翻找日志是比较低效的做法, 可以带有明确目的来分析日志

例如，频繁的登录失败可能表明有人试图破解密码。

---

### 日志与网络安全工具

对于入侵检测系统（IDS）和入侵防御系统（IPS）而言, 其主要依赖网络流量来检测与响应安全事件

不过终端侧的日志也可以作为关联分析的依据, 结合网络侧流量以及终端侧日志可以更全面地分析与响应安全事件

---



