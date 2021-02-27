<!--
 * @Author: your name
 * @Date: 2021-01-21 23:01:29
 * @LastEditTime: 2021-02-27 16:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\社区相关\Github.md
-->

# 杂项

---
## PC网页端用户头像加载不出来
- [解决Github网页上图片显示失败的问题](https://zhuanlan.zhihu.com/p/139219691)[参考链接]
- 当前无法显示用户头像的页面下`Ctrl+Shift+C`打开元素选择器选择未加载出的头像定位到其在源码中的标签并记下其域名
  - ![](../res_-daily-notes/img/Github/获取缺失图片域名.png)
- 打开`https://www.ipaddress.com/`输入域名并回车得到一个ip
  - ![](../res_-daily-notes/img/Github/获取ip.png)
- 打开路径`C:\Windows\System32\drivers\etc`
- 修改该路径下的`host`文件的文件属性中的`安全`一栏中的`Users`组的权限,勾选`完全控制`
- 用记事本打开`host`文件,在末尾粘贴以下文字并保存退出,返回原网页刷新即可
    ```
    # GitHub Start(更新于2021.1.22) 
    140.82.113.3      github.com
    140.82.114.20     gist.github.com

    199.232.96.133    assets-cdn.github.com
    199.232.96.133    raw.githubusercontent.com
    199.232.96.133    gist.githubusercontent.com
    199.232.96.133    cloud.githubusercontent.com
    199.232.96.133    camo.githubusercontent.com
    199.232.96.133    avatars.githubusercontent.com
    199.232.68.133     avatars.githubusercontent.com
    199.232.96.133    avatars0.githubusercontent.com
    199.232.68.133     avatars0.githubusercontent.com
    199.232.28.133     avatars1.githubusercontent.com
    199.232.96.133    avatars1.githubusercontent.com
    199.232.96.133    avatars2.githubusercontent.com
    199.232.28.133     avatars2.githubusercontent.com
    199.232.96.133    avatars3.githubusercontent.com
    199.232.68.133     avatars3.githubusercontent.com
    199.232.96.133    avatars4.githubusercontent.com
    199.232.68.133     avatars4.githubusercontent.com
    199.232.96.133    avatars5.githubusercontent.com
    199.232.68.133     avatars5.githubusercontent.com
    199.232.96.133    avatars6.githubusercontent.com
    199.232.68.133     avatars6.githubusercontent.com
    199.232.96.133    avatars7.githubusercontent.com
    199.232.68.133     avatars7.githubusercontent.com
    199.232.96.133    avatars8.githubusercontent.com
    199.232.68.133     avatars8.githubusercontent.com

    # GitHub End
    ```
  > 如若你得到的ip并非`199.232.96.133`则只需把上面代码中的`199.232.96.133`利用查找替换替换为你得到的ip即可(当再次无法看到头像时可以试着重查一次ip然后替换掉原ip)

---
## .git过大
- 初用git时有时会错把资源文件传到源码仓库里去,这样下来仓库本身就会变得特别大,即使是后来删掉了资源文件也会导致`.git`文件过大从而直接`clone`的时候可能会因为仓库过大而失败
- 提交次数过多也会让`.git`越来越大
- **解决方法[@Ever-Lose](https://www.cnblogs.com/everlose/p/12826025.html)**:如果确定之前的提交对现在已经没有用了,那么在`clone`仓库的时候在最后加上`--depth 1`只克隆最后一次`commit`


---
## github连接超时问题
- 使用腾讯云北京的轻量应用服务器推送更新时总是连接超时,最终找到了有效的如下[解决方案](https://cloud.tencent.com/developer/article/1704705)
- 打开 ipaddress.com,查询github.com域名，记录下其对应的ip(IP Address项内容)
- 修改并保存`/etc/hosts`:末尾加上 
  ```
  查询到的域名 github.com
  ```







---
# Git配置
- 设置用户名
  ```
  git config --global user.name "GitHub用户名"
  ```
  - 用户名随个人喜好即可,并非必须要Github的用户名,可以起一个能够代表当前修改环境的名字
- 设置用户邮箱
  ```
  git config --global user.email "GitHub绑定邮箱"
  ```
  - GitHub绑定邮箱请根据自己注册的账号邮箱填写
- 查看当前配置项列表
  ```
  git config --list
  ```
- 删除某个配置项(以`user.name`为例)
  ```
  git config --global --unset user.name
  ```
- 编辑某个配置项
  ```
  git config --global --edit user.name '用户名'
  ```

----
# Issues


---
# Pull Request
- [参考链接](https://www.zhihu.com/question/21682976)
- 以下为文章原文:
- 我尝试用类比的方法来解释一下 pull reqeust。想想我们中学考试，老师改卷的场景吧。
  - 你做的试卷就像仓库，你的试卷肯定会有很多错误，就相当于程序里的 bug。
  - 老师把你的试卷拿过来，相当于先 fork。
    - 在你的卷子上做一些修改批注，相当于 git commit。
    - 最后把改好的试卷给你，相当于发 pull request，
  - 你拿到试卷重新改正错误，相当于 merge。

---
# Actions
- [参考链接](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)


# Markdown
## 数学公式
- [参考链接]
- [访问改地址](https://github.com/orsharir/github-mathjax/releases/tag/v0.2.1)
  - 下载`Source code(zip)`
  - 解压到`C:/Users/"你的用户名"/AppDataLocal/Google/Chrome/User Data/Default/Extensions
    - 注意解压后的文件夹表层和里一层都是一样的文件夹名
      - 只要里层的
  - 打开Chrome扩展程序,打开开发者模式
  - 加载已解压的扩展程序
    - 就是刚才放到上面目录里的整个文件夹
    - ![结构示意图](../res_-daily-notes/img/Github/Chrome插件github-mathjax文件结构示意图.png)
  - 此时再打开Github查看源码就能显示markdown的数学公式了
  - ![成功演示](../res_-daily-notes/img/Github/Github查看Markdown数学公式成功演示.png)

# webhooks
## 借助钉钉的Github机器人将仓库变动通知到钉钉群里
- [参考链接](https://blog.csdn.net/q563573095/article/details/79580249)
- 进入钉钉群聊
  - 侧边栏第一个图标`群设置`
  - 智能群助手
  - 添加机器人
  - 更多`...`
  - **Github**机器人
  - 添加
  - 复制Webhook链接
- 打开Github仓库
  - Settings
  - 左侧边栏`Webhooks`
  - `Add webhook`
  - `Payload URL`填刚才从钉钉Github机器人那里复制来的webhook链接
  - 其余选项自行发挥
    - 记得勾选Active
  - `Add webhook`
- push一次提交
  - 这时候就会有钉~的提醒啦

# 开源许可证选择
![开源许可证选择](https://images.gitee.com/uploads/images/2021/0213/173905_ce78c29a_7703072.png "屏幕截图.png")
> [from 阮一峰-2011.5.2](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)