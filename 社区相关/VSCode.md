<!--
 * @Author: your name
 * @Date: 2021-02-27 17:22:36
 * @LastEditTime: 2021-03-02 17:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\社区相关\VSCode.md
-->
> 用于记录 VSCode 使用的一些随笔

# VSCode 下载
> [VsCode下载，使用国内镜像秒下载_bielaiwuyang1999的博客-CSDN博客](https://blog.csdn.net/bielaiwuyang1999/article/details/117814237)

官网下载 VSCode 速度比较慢, 可以在下载时将直链替换国内镜像地址, 以达到更快的下载速度.  

[VSCode 官网下载地址](https://code.visualstudio.com/Download)  

点击下载后开始下载会获得一个 URL  

![20211119092740](http:cdn.ayusummer233.top/img/20211119092740.png)  

复制该 URL 然后将 /stable 前的地址替换为国内镜像地址再进行下载即可, 如:  

- 原地址: `https://az764295.vo.msecnd.net/stable/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/VSCodeUserSetup-x64-1.62.3.exe`  
  将 `az764295.vo.msecnd.net` 替换为 `vscode.cdn.azure.cn` 得到新地址:  
  新地址: `https://vscode.cdn.azure.cn/stable/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/VSCodeUserSetup-x64-1.62.3.exe`  
  然后通过这个新地址下载即可

# 插件食用记录

## open
- ![open插件](https://images.gitee.com/uploads/images/2021/0227/172655_7022876f_7703072.png "屏幕截图.png")
- 用于从VSCode中使用系统默认应用打开文件
  - ![open插件使用演示](https://images.gitee.com/uploads/images/2021/0227/172856_1bc3b066_7703072.png "屏幕截图.png")
  - 装了`open`插件之后VSCode不支持打开的文件可以通过右键菜单调用系统默认应用打开该文件;这样既不用再打开文件资源浏览器中的该文件再打开了

---
## Python-autopep8
- 自动按照pep8规范格式化python代码

---
## Terminal
- 命令行终端  
  ![Terminal](https://images.gitee.com/uploads/images/2021/0302/173330_e0cd5e6b_7703072.png "屏幕截图.png")
- 安装之后点击有效较的`Terminal`图标进行使用  
  ![Terminal图标](https://images.gitee.com/uploads/images/2021/0302/173555_2cc6665a_7703072.png "屏幕截图.png")  
  点开之后默认采用当前项目的根目录
  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0302/173623_407de49c_7703072.png "屏幕截图.png")