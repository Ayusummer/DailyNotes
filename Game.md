<!--
 * @Author: your name
 * @Date: 2021-03-02 09:51:29
 * @LastEditTime: 2021-03-02 10:24:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\Game.md
-->
# Steam

## steam工具箱
- [steam工具箱@rmbadmin](https://github.com/SteamTools-Team/SteamTools/releases/tag/1.1.4)
- 在`Releases`找最新的一次发行,下载第一个压缩文件,解压即可使用
- ![steam工具箱使用示意](https://images.gitee.com/uploads/images/2021/0302/095303_d61c768b_7703072.png "屏幕截图.png")
- 点加速后若提醒443端口被占用可以去找一下是什么进程占用了443端口
  - `Win+R`输入cmd并回车进入命令行界面输入`netstat -ano|findstr "443"`并回车  
    ![查看端口占用](https://images.gitee.com/uploads/images/2021/0302/101831_6b41b097_7703072.png "屏幕截图.png")
  - `tasklist |findstr "16280"`  
     ![输入图片说明](https://images.gitee.com/uploads/images/2021/0302/102101_420d69e1_7703072.png "屏幕截图.png")
     > 我这里已经成功运行了,所以这里是steam工具箱占用了443端口
     - 如果显示`vmware-hosted.exe`占用443端口那么打开VMWare  
       ![输入图片说明](https://images.gitee.com/uploads/images/2021/0302/102428_6dfb9294_7703072.png "屏幕截图.png")