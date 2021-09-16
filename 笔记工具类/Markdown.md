<!--
 * @Author: your name
 * @Date: 2021-01-22 00:43:47
 * @LastEditTime: 2021-06-28 10:23:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\Markdown.md
-->
> 用于记录markdown使用的一些随笔

# 编辑软件
## 在VSCode中编写Markdown文件
- 安装VSCode扩展
  - Markdown All in One
  - Markdown Converter
- markdown文件的后缀名为`md`
  ![](res_-daily-notes/img/README/markdown打开.png)
- 使用大纲快速索引章节位置
  ![](res_-daily-notes/img/README/markdown大纲.png)
- 使用插件快速更新生成目录

----
## Typora
- 与 VSCode 相较而言在大文件的续写方面渲染速度太慢, 但是当文档仅有一千行左右时渲染速度还不错
- VSCode 主要在文档中含有太多外链图片资源时编辑文档经常乱跳屏幕, 编辑体验不是很好
- Typora 编辑 markdown 文件也有如下顺手之处
  - 自动空行, 使得回车时确实能够换行书写
  - 可视化编辑格式(尤其是表格的插入和编辑体验很好)
  - 配合 PicGo 也可以自动上传图片到个人图床, 截图完直接粘贴可以自动生成图链(不过可能会出现转义问题, `http:` 后面记得加上 `//`)
  - 超链接的生成比较灵活, 复制完网页链接之后直接粘贴会根据内容生成超链接及其文本, 对于参考链接的书写比较友好, 省下了不少自己打描述的时间



----
# 个人图床(七牛云+阿里云域名+picgo)
- [七牛云+阿里云域名+PicGo](http:cdn.ayusummer233.top/qq_45807032/article/details/113772697)
- ![VSCode PicGo插件配置](http:cdn.ayusummer233.top/img/20210309122224.png)
- 使用说明  
  ![具体使用](http:cdn.ayusummer233.top/img/20210309122603.png)


---
# 基本用法
```markdown
# 一级标题
## 二级标题
### 三级标题
--- 分割线
- 无序列表
1. 有序列表
[待加入超链接的文字](链接)
```

---
- 插入图片
  ```markdown
  ![图片标识](图片地址)
  ```
  - 图片标识想起就起,不想起空着也行
  - 图片地址可以填相对地址也可以填网络中的绝对地址
    - 相对地址
      - 也是本仓库推荐使用的一种地址
      - 意指图片源文件存放在本地(这里就是指在res/img文件夹里),使用当前文件与使用的图片文件间的相对地址定位到图片
        ```
        ./ 当前目录
        ../ 上1层目录
        ../../ 上2层目录
        ```
        - 以当前文件为例`./`表示本仓库的根目录,如图
          ![](./res_-daily-notes/img/README/本仓库的根目录.png)
    - 网络绝对地址
      - **一定别用本地**文件的绝对地址,你有这个路径不代表别人也有
      - 原理是输入网上图床中图片的链接,所以你需要先将图片上传到图床上然后再获取图片的链接,可以借用Gitee的Issue中评论框粘贴图片直接生成图链

---
- 插入表格
  | 列1 | 列2 | 列3 |
  | -   | -   | -   |
  | 值1 | 值2 | 值3 |

---
- 插入数学公式
  - 将公式用$$包围,例:
    - $y_1 = m_{11} + x^{12} + x^2$
  - [更多公式](https://blog.csdn.net/konglongdanfo1/article/details/85204312)
  - [希腊字母表](https://blog.csdn.net/krone_/article/details/99710062)

---
## 分页符
```
<div STYLE="page-break-after: always;"></div>
```

-----
## 排版
- markdown兼容html
- <center>文字居中</center>
- 图像居中显示
  
  <div align=center><img src="http://cdn.ayusummer233.top/img/20210514111630.png" width="  "></div>


----
## 字体格式
- <font face="黑体">使用黑体</font>
- <font face="黑体" size=10>我是黑体10号字</font>
- <font color=red>红色</font>


---
## 字体大小
- 使用html标签解决
  - ```html
    <font size = 5>示例</font>
    ```
    - 预览
      - <font size = 5>示例</font>

----
## 公式

---
### 公式内部打空格
- [怎么在LaTeX,Markdown和知乎上写数学公式时打出空格 - 知乎 (zhihu.com)
- [![img](http://cdn.ayusummer233.top/img/20210628102451.jpeg)](https://zhuanlan.zhihu.com/p/265517357)

---

## 链接

- 常规链接写法

  ```markdown
  [百度](http://www.baidu.com)
  ```

  [百度](http://www.baidu.com)

- 文内标题链接写法

  ```markdown
  [->编辑软件](#编辑软件)
  [->Typora](#Typora)
  ```

  [->编辑软件](#编辑软件)
  [->Typora](#Typora)

  > 不管是跳转到几级标题, `()` 内都只需要用 1 个 `#`, 不过要注意所有的标题不要有重名


---
# something interesting

## 徽章
- [repo链接](https://github.com/RimoChan/unv-shield)   
- ![](https://unv-shield.librian.net/api/unv_shield?code=1&url=https://avatars.githubusercontent.com/u/59549826&scale=2&txt=好!&border=4&barradius=999)

