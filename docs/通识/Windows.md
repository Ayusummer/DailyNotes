# Windows

- [Windows](#windows)
  - [软链接与硬链接](#软链接与硬链接)

---

## 软链接与硬链接

- 软链接是路径的别名

  - 软链接可以不存在的路径, 因此可能引入死链接

  - 软链接可以指向文件也可以指向目录, 也可以跨磁盘分区

  - 软链接可以用于链接深层目录从而缩短访问路径

  - 为 `C:\Users\233\Documents\test.txt` 创建一个软链接到 `D:\link.txt`

    ```CMD
    mklink D:\link.txt C:\Users\233\Documents\test.txt
    ```

    为 `C:\Users\233\Documents` 创建一个软链接到 `D:\Documents`

    ```CMD
    mklink /D D:\Documents C:\Users\233\Documents
    ```

    > `/D` 表示创建目录的软链接

- 硬链接是文件对应物理数据块的别名

  - 硬链接是同一文件系统中创建的多个文件名, 指向同一物理数据快

  - 硬链接只能连接到实际存在的文件, 不能链接到目录, 不能跨磁盘分区

  - 可以用于备份文件, 防止误删文件

  - 为 `C:\Users\233\Documents\test.txt` 创建一个硬链接到 `D:\link.txt`

    ```CMD
    mklink /H D:\link.txt C:\Users\233\Documents\test.txt
    ```

---
