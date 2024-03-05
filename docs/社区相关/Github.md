# Github

- [Github](#github)
  - [加速](#加速)
    - [Github 镜像](#github-镜像)
      - [Mirrors](#mirrors)
          - [镜像测速](#镜像测速)
    - [PC网页端用户头像加载不出来](#pc网页端用户头像加载不出来)
  - [Git配置](#git配置)
  - [简介](#简介)
    - [Commit](#commit)
      - [规范](#规范)
    - [Issues](#issues)
    - [Pull Request](#pull-request)
  - [SSH Key](#ssh-key)
  - [Actions](#actions)
    - [基本概念](#基本概念)
    - [workflow](#workflow)
  - [Markdown](#markdown)
    - [数学公式](#数学公式)
  - [webhooks](#webhooks)
    - [借助钉钉的Github机器人将仓库变动通知到钉钉群里](#借助钉钉的github机器人将仓库变动通知到钉钉群里)
  - [开源许可证选择](#开源许可证选择)
  - [常见问题](#常见问题)
    - [.git过大](#git过大)
    - [腾讯云 github 连接超时问题](#腾讯云-github-连接超时问题)
  - [报错处理](#报错处理)
    - [`Failed to connect to github.com port 443 after 21063 ms: Timed out`](#failed-to-connect-to-githubcom-port-443-after-21063-ms-timed-out)
    - [`OpenSSL SSL_read: Connection was reset, errno 10054`](#openssl-ssl_read-connection-was-reset-errno-10054)
  - [未成功归档/TODO](#未成功归档todo)
    - [Nginx 反代 Github(TODO: mark下, 没成功跑起来)](#nginx-反代-githubtodo-mark下-没成功跑起来)
      - [安装 Nginx 和 OpenSSL](#安装-nginx-和-openssl)
      - [制作 CA 证书与签名证书](#制作-ca-证书与签名证书)
      - [安装证书](#安装证书)
      - [配置 Nginx](#配置-nginx)


---

## 加速

通用的加速方案最好的措施就是用代理

对于不方便使用代理的场景, 如果是 clone 或者下载项目压缩包, releases 的场景, 可以使用镜像

除此以外, watt Toolkit 等工具也可以用

最不济可以手动改 host

---

### Github 镜像

> [eryajf/Thanks-Mirror: 整理记录各个包管理器，系统镜像，以及常用软件的好用镜像，Thanks Mirror。 走过路过，如觉不错，麻烦点个赞👆🌟 (github.com)](https://github.com/eryajf/Thanks-Mirror#github)

---

#### Mirrors

GitHub 相关的国内镜像，有不同的使用方式，这里仅列出目前可用的国内镜像，具体用法请查阅镜像的官方说明。

- https://hub.fastgit.xyz/

  提供了 GitHub 全站镜像，但注意不要在这个站登陆你的 GitHub 账号。详见[官方文档](https://doc.fastgit.org/zh-cn/)。

  类似fastgit的还有：

  - https://hub.yzuu.cf/
  - https://hub.njuu.cf/

- https://gitclone.com/

  提供了 `GitHub` 全面的加速，详见[官方文档](https://gitclone.com/docs/feature/gitclone_web)。

- https://ghproxy.com/

  `GitHub` 文件 , Releases , archive , gist , `raw.githubusercontent.com` 文件代理加速下载服务，使用细则参见官方。

- https://toolwa.com/github/

- https://github.91chi.fun/

- https://github.abskoop.workers.dev/

- https://pd.zwc365.com/

- https://gh.con.sh/

- https://www.7ed.net/#/raw-cdn

也可以通过其他方式提供的加速方案。

- [油猴脚本](https://greasyfork.org/zh-CN/scripts/397419-fastgithub-镜像加速访问-克隆和下载)

  安装之后，会直接在 `GitHub` 项目当中出现可用的国内加速克隆方式，比较方便，推荐安装。

- [chrome插件](https://chrome.google.com/webstore/detail/github加速/ffjjnphohkfckeplcjflmgneebafggej?hl=zh)

  与油猴脚本效果一致，只是通过插件的形式安装配置。

---

###### 镜像测速

```python
# 读取源列表每一行的地址, 将每个地址拆分为 [协议, 域名, 路径], 然后对每个域名 ping 4次, 按照响应时间递增排序, 输出到目的文件
import os
import re


def ping_linux(host: str, count: int = 4) -> float:
    """Linux 下的 ping 命令  
    :param host: 域名
    :param count: ping 的次数
    :return: 返回平均响应时长
    """
    output = os.popen(f'ping {host} -c {count}').read()
    try:
        min, avg, max, mdev = re.findall(r'rtt min/avg/max/mdev = (\d+\.\d+)/(\d+\.\d+)/(\d+\.\d+)/(\d+\.\d+) ms', output)[0]
        print(f'{host} {avg}ms')
    # 全丢包的情况下就找不到了, 此时返回一个很大的数
    except IndexError:
        print(f'{host} 超时')
        return 999999
    return float(avg)


def split_url_to_hosts(source_path: str) -> list:
    """将源列表每个条目拆分成 [协议, 域名, 路径] 的格式并返回所有条目拆分完后的嵌套列表  
    :param source_path: 源文件
    :return: 拆分后的嵌套列表
    """
    with open(source_path, 'r') as f:
        hosts = f.read().splitlines()
        for i in range(len(hosts)):
            hosts[i] = hosts[i].strip()
            # 根据 :// 进行拆分, 拆分结果作为继续拆分 协议, 域名, 路径 的依据
            main_split = hosts[i].split('://')

            # 第一片为 协议://
            first_fragment = main_split[0] + '://'
            # 第二片为 域名
            second_fragment = main_split[1].split('/')[0]
            # 第三片为 路径
            third_fragment = '/' + '/'.join(main_split[1].split('/')[1:])

            # 将拆分后的三片组合成一个列表
            hosts[i] = [first_fragment, second_fragment, third_fragment]
        # 返回拆分后的嵌套列表
        return hosts


def sort_write_hosts(hosts: list, target_path: str) -> None:
    """根据对源文件拆分后的嵌套列表中的域名进行 ping 操作, 并将结果按响应时间升序输出到目的文件  
    :param hosts: 源文件拆分后的嵌套列表  
    :param target_path: 目标输出文件路径
    :return: None
    """
    # 遍历 hosts 中的每个域名, 并对其进行 ping 操作, 将平均响应时间插入到 hosts 尾部
    for i in range(len(hosts)):
        hosts[i].append(ping_linux(hosts[i][1]))
    # 按照响应时间升序排序
    hosts.sort(key=lambda x: x[3])
    # 将排序后的 hosts 写入到目的文件
    with open(target_path, 'w') as f:
        for host in hosts:
            f.write(f'{host[0]}{host[1]}{host[2]} {host[3]}ms \n')


def sort_sources(source_path: str, target_path: str) -> None:
    """对源文件(kali 镜像列表)进行排序, 并按照响应时间升序输出到目的文件  
    :param source_path: kali 镜像列表文件路径  
    :param target_path: 按照相应时间升序输出的目的文件路径
    """
    print("开始拆分源文件...")
    # 将源文件拆分为嵌套列表
    hosts = split_url_to_hosts(source_path)
    print("拆分完成, 开始排序...")
    # 对拆分后的嵌套列表进行排序并输出到目的文件
    sort_write_hosts(hosts, target_path)    
    print("排序完成, 请查看目的文件")


if __name__ == '__main__':
    source_path = os.path.join(os.path.dirname(__file__), 'sources_github.txt')
    target_path = os.path.join(os.path.dirname(__file__), 'result_github.txt')
    sort_sources(source_path, target_path)
```


---
### PC网页端用户头像加载不出来


- [解决Github网页上图片显示失败的问题](https://zhuanlan.zhihu.com/p/139219691)[参考链接]
- 当前无法显示用户头像的页面下`Ctrl+Shift+C`打开元素选择器选择未加载出的头像定位到其在源码中的标签并记下其域名
  <!-- - ![](../res_-daily-notes/img/Github/获取缺失图片域名.png) -->
- 打开`https://www.ipaddress.com/`输入域名并回车得到一个ip
  <!-- - ![](../res_-daily-notes/img/Github/获取ip.png) -->
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

## Git配置

> [GIt设置代理 - 简书 (jianshu.com)](https://www.jianshu.com/p/b481d2a42274)
>
> ---

- 设置用户名
  ```bash
  git config --global user.name "GitHub用户名"
  ```
  - 用户名随个人喜好即可,并非必须要Github的用户名,可以起一个能够代表当前修改环境的名字
- 设置用户邮箱
  ```bash
  git config --global user.email "GitHub绑定邮箱"
  ```
  - GitHub绑定邮箱请根据自己注册的账号邮箱填写
- 查看当前配置项列表
  ```bash
  git config --list
  ```
- 删除某个配置项(以`user.name`为例)
  ```bash
  git config --global --unset user.name
  ```
- 编辑某个配置项
  ```bash
  git config --global --edit user.name '用户名'
  ```

---

使用 VSCode 拉取更新与推送修改经常出错, 需要配置代理(以本地 7890 端口为例), 在本地项目根目录下打开命令行进行代理配置:

```bash
git config http.proxy http://127.0.0.1:7890
git config https.proxy http://127.0.0.1:7890
git config core.gitPorxy socks5://127.0.0.1:7890
```

> 可以配置全局代理, 但是由于本地还有在用内网的 gitlab, 所以不适合配全局, 这里是针对项目配的
>
> ---
>
> 取消代理配置如下:
>
> ```bash
> git config --global --unset http.proxy
> git config --global --unset https.proxy
> git config --global --unset core.gitPorxy
> ```


---

### SSH Key

> [git生成连接远程仓库的密钥_旁观者lgp的博客-CSDN博客](https://blog.csdn.net/qq_45515863/article/details/106312232)

- 在主机创建 ssh key

  ```shell
  ssh-keygen -t rsa -C "youremail@example.com"
  ```

  `-C(comment)` 随便填, 有辨识度就行

  运行命令后一路回车默认配置, 根据运行提示找到 公钥 `id_rsa.pub`

- `Github 右上角头像 -> Settings -> SSH and GPG keys -> add new ssh key`

  title 随便填, key 粘贴 `id_rsa.pub` 的全部内容

- 在主机上使用

  ```shell
  git clone 仓库SSH路径
  ```

  来 clone 仓库

> 需要注意的是在 Linux 上使用不同的用户创建的 ssh-key 加入到 github 后也只有对应的用户可以使用, 当切换用户后需要将该用户的 ssh-key 也加入到 Github 的 SSH-key 中方可使用

---

### 本地仓库切换 https 到 ssh

> [【求助】开启OpenClash之后，无法使用 git clone/push，kex ssh 密钥错误 · Issue #1960 · vernesong/OpenClash (github.com)](https://github.com/vernesong/OpenClash/issues/1960#issuecomment-1019101426)
>
> [Correct way to set git proxy - Kirovj's Chaos --- 设置 git 代理的正确方法 - Kirovj's Chaos (wuyiting.cn)](https://www.wuyiting.cn/blog/Correct way to set git proxy)
>
> [使用Git时报错Connection reset by 20.205.243.166 port 22_Wrysmile0308的博客-CSDN博客](https://blog.csdn.net/Wrysmile0308/article/details/128801870)
>
> [Has GitHub changed his remote host key ? · community · Discussion #50878 --- GitHub 更改了他的远程主机密钥吗？ · 社区 · 讨论 #50878](https://github.com/orgs/community/discussions/50878)
>
> [We updated our RSA SSH host key - The GitHub Blog --- 我们更新了 RSA SSH 主机密钥 - GitHub 博客](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/)
>
> 

可以使用如下命令查看当前仓库的远程 URL:

```bash
git remote -v
```

![image-20230921013052319](http://cdn.ayusummer233.top/DailyNotes/202309210130370.png)

要想从 https(ssh) 切到 ssh(https) 的话可以如下设置:

```bash
# git remote set-url origin xxx
git remote set-url origin git@github.com:Ayusummer/DailyNotes.git
```

----

### SSH 代理

最近更新仓库时总是莫名其妙被重置, 见到了好多奇怪的报错, 包括但不限于

```
Connection reset by 20.205.243.166 port 22
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

```
Error: Unable to Fetch from Remote(s)
kex_exchange_identification: Connection closed by remote host
Connection closed by UNKNOWN port 65535
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

```
Error: Unable to Fetch from Remote(s)
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

最终达成的解决方案是

1. 把本地的密钥对删了, 重新新建一对密钥并将公钥添加到 github ssh key

2. 清除本地 `know_hosts` 中的 github 条目

   ![image-20230921013523135](http://cdn.ayusummer233.top/DailyNotes/202309210135195.png)

   如果有 `know_hosts.old` 文件, 可以直接把这个 old 删了

   ![image-20230921013757996](http://cdn.ayusummer233.top/DailyNotes/202309210137027.png)

3. 配置 ssh 使用本地代理, 以 clash 默认 7890 端口为例

   配置文件在 `~/.ssh/config`, 不存在则新建, 对于 windows 而言可以是:

   ![image-20230921013914928](http://cdn.ayusummer233.top/DailyNotes/202309210139983.png)

   写入如下配置

   ```properties
   Host github.com
       Hostname ssh.github.com
       Port 443
       User git
       ProxyCommand connect -H 127.0.0.1:7890 %h %p
   ```

4. 关闭 VSCode, 重新打开即可, 可以 git fetch 看下效果

   ![image-20230921014108032](http://cdn.ayusummer233.top/DailyNotes/202309210141058.png)

   ![image-20230921014150077](http://cdn.ayusummer233.top/DailyNotes/202309210141104.png)

至少我如此操作成功修复了, 后续再遇到类似问题再看吧(


---

## 简介

----
### Commit
- 提交代码

---
#### 规范

[UvDream/git-commit-lint-vscode: vscode一款git 规范化提交插件 (github.com)](https://github.com/UvDream/git-commit-lint-vscode)

参照 `Angular` 社区的提交规范并结合 emoji, 上面参考链接里这位老哥开发了一款 `VSCode` git 规范化提交插件 `git-commit-lint-vscode`, 提交的时候可视化选择类型然后再手打详细信息

![image-20210628112317321](http://cdn.ayusummer233.top/img/20210628112317.png)


----
### Issues


---
### Pull Request
- [参考链接](https://www.zhihu.com/question/21682976)
- 以下为文章原文:
- 我尝试用类比的方法来解释一下 pull reqeust。想想我们中学考试，老师改卷的场景吧。
  - 你做的试卷就像仓库，你的试卷肯定会有很多错误，就相当于程序里的 bug。
  - 老师把你的试卷拿过来，相当于先 fork。
    - 在你的卷子上做一些修改批注，相当于 git commit。
    - 最后把改好的试卷给你，相当于发 pull request，
  - 你拿到试卷重新改正错误，相当于 merge。

---

## Actions

> [原文链接:GitHub Actions 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
>
> [关于工作流程 - GitHub Docs](https://docs.github.com/cn/github-ae@latest/actions/using-workflows/about-workflows)

持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

很多操作在不同项目里面是类似的，完全可以共享。GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。

GitHub 做了一个[官方市场](https://github.com/marketplace?type=actions)，可以搜索到他人提交的 actions。另外，还有一个 [awesome actions](https://github.com/sdras/awesome-actions) 的仓库，也可以找到不少 action。

每个 action 就是一个独立脚本，因此可以做成代码仓库，使用`userName/repoName`的语法引用 action。比如，`actions/setup-node`就表示`github.com/actions/setup-node`这个[仓库](https://github.com/actions/setup-node)，它代表一个 action，作用是安装 Node.js。事实上，GitHub 官方的 actions 都放在 [github.com/actions](https://github.com/actions) 里面。

 actions 是代码仓库，有版本的概念，用户可以引用某个具体版本的 action。下面都是合法的 action 引用，用的就是 Git 的指针概念，详见[官方文档](https://help.github.com/en/articles/about-actions#versioning-your-action)。

```sh
actions/setup-node@74bc508 # 指向一个 commit
actions/setup-node@v1.0    # 指向一个标签
actions/setup-node@master  # 指向一个分支
```

---

### 基本概念

- `workflow`: 持续集成一次运行的过程，就是一个 workflow。
- `job`: 一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
- `step`: 每个 job 由多个 step 构成，一步步完成。
- `action`: 每个 step 可以依次执行一个或多个命令(action) 。

---

### workflow

GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的`.github/workflows`目录。

workflow 文件采用 [YAML 格式](https://www.ruanyifeng.com/blog/2016/07/yaml.html)，文件名可以任意取，但是后缀名统一为`.yml`，比如`foo.yml`。一个库可以有多个 workflow 文件。GitHub 只要发现`.github/workflows`目录里面有`.yml`文件，就会自动运行该文件。

> ![image-20220522071931643](http://cdn.ayusummer233.top/img/202205220719879.png)

workflow 文件的配置字段非常多，详见[官方文档](https://help.github.com/en/articles/workflow-syntax-for-github-actions)。下面是一些基本字段。

- `name`: `name`字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。

  ```yaml
  name: Create Release
  ```

- `on`: `on`字段指定触发 workflow 的条件，通常是某些事件。

  ```yaml
  on: push
  ```

  上面代码指定，`push`事件触发 workflow。

  `on`字段也可以是事件的数组。

  ```yaml
  on: [push, pull_request]
  ```

  完整的事件列表，请查看[官方文档](https://help.github.com/en/articles/events-that-trigger-workflows)。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。

- `on.<push|pull_request>.<tags|branches>`: 指定触发事件时，可以限定分支或标签。

  ```yaml
  on:
    push:
      branches:    
        - master
  ```

  当使用 `push` 事件时, 可以配置 `workflow` 运行在指定的 `branch` 或是 `tag` 上

  如果希望包含 `branch` 名称模式，或者希望同时包含和排除 `branch` 名称模式，可以使用 `branch` 筛选器。当只想排除分支名称模式时，使用`branches-ignore`筛选器。注意不能对工作流中的同一事件同时使用 `branches` 和 `branches-ignore`筛选器

  对于 `tag` 处理和上述 `branch` 处理相似

  像这样类似的 `paths` 以及 `paths-gnore` 关键词支持使用 `*` 和 `**` 通配符匹配多个路径名的 glob pattern; 更多信息请参阅“[过滤器模式备忘清单](https://docs.github.com/cn/github-ae@latest/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

- `jobs.<job_id>.name`

  workflow 文件的主体是`jobs`字段，表示要执行的一项或多项任务。

  `jobs`字段里面，需要写出每一项任务的`job_id`，具体名称自定义。`job_id`里面的`name`字段是任务的说明。

  ```yaml
  jobs:
    my_first_job:
      name: My first job
    my_second_job:
      name: My second job
  ```

  上面代码的`jobs`字段包含两项任务，`job_id`分别是`my_first_job`和`my_second_job`。

  ```yaml
  jobs:
    build:
      name: Create Release
  ```

  `job_id`: build; `name`: Create Release

- `jobs.<job_id>.needs`: `needs`字段指定当前任务的依赖关系，即运行顺序。

  ```yaml
  jobs:
    job1:
    job2:
      needs: job1
    job3:
      needs: [job1, job2]
  ```

  上面代码中，`job1`必须先于`job2`完成，而`job3`等待`job1`和`job2`的完成才能运行。因此，这个 workflow 的运行顺序依次为：`job1`、`job2`、`job3`。

- `jobs.<job_id>.runs-on`: `runs-on`字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。

  ```yaml
  ubuntu-latest，ubuntu-18.04或ubuntu-16.04
  windows-latest，windows-2019或windows-2016
  macOS-latest或macOS-10.14
  ```
  
  > [About self-hosted runners - GitHub Docs](https://docs.github.com/cn/github-ae@latest/actions/hosting-your-own-runners/about-self-hosted-runners)
  
- `jobs.<job_id>.steps`: `steps`字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。
  - `jobs.<job_id>.steps.name`：步骤名称。
  - `jobs.<job_id>.steps.run`：该步骤运行的命令或者 action。
  - `jobs.<job_id>.steps.env`：该步骤所需的环境变量。


---

## Markdown

### 数学公式

- [访问该地址](https://github.com/orsharir/github-mathjax/releases/tag/v0.2.1)
  - 下载`Source code(zip)`
  - 解压到`C:/Users/"你的用户名"/AppDataLocal/Google/Chrome/User Data/Default/Extensions
    - 注意解压后的文件夹表层和里一层都是一样的文件夹名
      - 只要里层的
  - 打开Chrome扩展程序,打开开发者模式
  - 加载已解压的扩展程序
    - 就是刚才放到上面目录里的整个文件夹
    - ![image-20221108001752709](http://cdn.ayusummer233.top/img/202211080017729.png)  
  - 此时再打开Github查看源码就能显示markdown的数学公式了
  - ![image-20221108001819213](http://cdn.ayusummer233.top/img/202211080018283.png)

## webhooks
### 借助钉钉的Github机器人将仓库变动通知到钉钉群里
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

## 开源许可证选择
![开源许可证选择](http://cdn.ayusummer233.top/DailyNotes/202302191539879.png "屏幕截图.png")
> [from 阮一峰-2011.5.2](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

---

## 常见问题

### .git过大
- 初用git时有时会错把资源文件传到源码仓库里去,这样下来仓库本身就会变得特别大,即使是后来删掉了资源文件也会导致`.git`文件过大从而直接`clone`的时候可能会因为仓库过大而失败
- 提交次数过多也会让`.git`越来越大
- **解决方法[@Ever-Lose](https://www.cnblogs.com/everlose/p/12826025.html)**:如果确定之前的提交对现在已经没有用了,那么在`clone`仓库的时候在最后加上`--depth 1`只克隆最后一次`commit`


---

### 腾讯云 github 连接超时问题

- 使用腾讯云北京的轻量应用服务器推送更新时总是连接超时,最终找到了有效的如下[解决方案](https://cloud.tencent.com/developer/article/1704705)
- 打开 ipaddress.com,查询github.com域名，记录下其对应的ip(IP Address项内容)
- 修改并保存`/etc/hosts`:末尾加上 
  ```
  查询到的域名 github.com
  ```



----

## 报错处理

### `Failed to connect to github.com port 443 after 21063 ms: Timed out`

网不好, 换个结点

---

### `OpenSSL SSL_read: Connection was reset, errno 10054`

> [【Git/GitHub】解决Git上传时OpenSSL SSL_read: Connection was reset, errno 10054的错误_memcpy0的博客-CSDN博客](https://blog.csdn.net/myRealization/article/details/119737101)

我碰到的情况是本地 git 配置错了, 前阵子在 github 上更改了主邮箱, 相应的本地配置要改下邮箱

```shell
git config --global user.email "xxx"
```

---

## 未成功归档/TODO

---

### Nginx 反代 Github(TODO: mark下, 没成功跑起来)

> 本地测试环境 - ubuntu 20.04 LTS
>
> [nginx本地反代github - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/411165246)
>
> ---

#### 安装 Nginx 和 OpenSSL

> [如何在 Ubuntu 20.04 上安装 Nginx - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/138007915)
>
> ---

```bash
sudo apt update
sudo apt install nginx
```

一旦安装完成，Nginx 将会自动被启动。你可以运行下面的命令来验证它：

```bash
sudo systemctl status nginx
```

在你已经在你的服务器上安装和运行了 Nginx，你需要确保你的防火墙被配置好，允许流量通过 HTTP(`80`) 和 HTTPS(`443`) 端口。

---

- 假设你正在使用`UFW`,你可以做的是启用 ‘Nginx Full’ profile，它包含了这两个端口：

  ```bash
  sudo ufw allow 'Nginx Full'
  ```

  想要验证状态，输入：

  ```bash
  sudo ufw status
  ```

- 而如果使用的是厂商的云服务器则需要在服务器的控制面板的防火墙管理面板处放通端口(一般都是默认放通的)

  ![image-20221012223741767](http://cdn.ayusummer233.top/img/202210122237943.png)

---

> [2.2.1 linux下的安装_OpenSSL 中文手册](https://www.openssl.net.cn/docs/8.html)
>
> ---

服务器默认已经安装了 OpenSSL, 可以使用如下命令查看其版本及位置

```bash
openssl version
whereis openssl
```

---

#### 制作 CA 证书与签名证书

```bash
#### 制作CA证书，如果你没有CA证书的话，必须执行
openssl genrsa 2048 > ca.key # 这是你的CA证书，你可以选择要不要信任CA证书

#### CA证书的公钥，用于信任CA证书，这样你就不必亲自信任每一个用这个CA签名的证书了
export SUBJ="/C=CN/ST=ST$RANDOM/O=O$RANDOM/OU=OU$RANDOM/CN=CN$RANDOM/emailAddress=$RANDOM@localhost"
# $SUB这一行的意思请稍后自行领悟,这里RANDOM的用意是，防止大家生成重复的CA然后产生未知问题
# 如果不知道-subj是什么，不要改。CN写0CN是为了让证书好找(会排到最前面) 
openssl req -new -x509 -days `expr \( \`date -d 99991231 +%s\` - \`date +%s\` \) / 86400 + 1` \
  -key ca.key -out ca.pem -subj $SUBJ -extensions v3_ca
# 上面这节其实是一整行命令(用\换行，于是显示成了两行) 
# 这里 `expr \( \`date -d 99991231 +%s\` - \`date +%s\` \) / 86400 + 1` 是计算当前时间到yyyymmdd=99991231的日期
# 整段内容的意思是，让这个证书的有效期到9999年12月31日
# 我保证RSA失效日期一定比这个日期早……
# 请不要学习这个把签名签到9999年的坏习惯，涉及网络活动的，最好每年换一个签名。
# 这里签到9999年的原因是……谁闲着没事监听你的nginx拿到只有你用的证书之后会对你开展中间人攻击呢？

#### 生成nginx需要的证书
openssl genrsa 1024 > nginx.key # 密钥
openssl req -new -nodes -key nginx.key -out nginx.csr -subj $SUBJ

#### CA签名
openssl x509 -req -days `expr \( \`date -d 99991231 +%s\` - \`date +%s\` \) / 86400 + 1` \
 -in nginx.csr -out nginx.pem -CA ca.pem -CAkey ca.key -set_serial 0 -extensions CUSTOM_STRING_LIKE_SAN_KU\
 -extfile <( cat << EOF
[CUSTOM_STRING_LIKE_SAN_KU]
subjectAltName=IP:127.0.0.1, IP: ::1 ,DNS:github.com, DNS:*.github.com, DNS:githubusercontent.com, DNS:*.githubusercontent.com
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
EOF
)

# 这里，使用-extfile对配置文件做临时修改
# 这样就完成了签名工作
# 事实上，这里可以多写几个subjectAltName，比如subjectAltName=IP:127.0.0.1, IP: ::1 ,DNS:ads-pixiv.net, DNS:*.ads-pixiv.net, DNS:akamaihd.net, DNS:*.akamaihd.net, DNS:arkoselabs.com, DNS:*.arkoselabs.com, DNS:artstation.com, DNS:*.artstation.com, DNS:discordapp.com, DNS:*.discordapp.com, DNS:discordapp.net, DNS:*.discordapp.net, DNS:discord.com, DNS:*.discord.com, DNS:ext-twitch.tv, DNS:*.ext-twitch.tv, DNS:github.com, DNS:*.github.com, DNS:githubusercontent.com, DNS:*.githubusercontent.com, DNS:google.com, DNS:*.google.com, DNS:hcaptcha.com, DNS:*.hcaptcha.com, DNS:pinimg.com, DNS:*.pinimg.com, DNS:pinterest.com, DNS:*.pinterest.com, DNS:pixiv.net, DNS:*.pixiv.net, DNS:pixivsketch.net, DNS:*.pixivsketch.net, DNS:pximg.net, DNS:*.pximg.net, DNS:steam-chat.com, DNS:*.steam-chat.com, DNS:steamcommunity.com, DNS:*.steamcommunity.com, DNS:steampowered.com, DNS:*.steampowered.com, DNS:steamstatic.com, DNS:*.steamstatic.com, DNS:twitch.tv, DNS:*.twitch.tv, DNS:ubi.com, DNS:*.ubi.com, DNS:v2ex.com, DNS:*.v2ex.com
# 多写几个的好处就不说了，说多了可能犯法[狗头]

# openssl x509 -noout -text -in nginx.pem
# 如果你需要检查你生成的pem，或者
# ( openssl x509 -noout -text -in nginx.pem && cat nginx.pem ) > nginx.crt
# 上面这句没测试，也不是本讲的内容……
```

---

#### 安装证书

> [如何将证书颁发机构(CA) 添加到Ubuntu？ (qastack.cn)](https://qastack.cn/superuser/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu)
>
> [Ubuntu安装系统根证书_孙海峰VIP的博客-CSDN博客_ubuntu安装根证书](https://blog.csdn.net/shf4715/article/details/52804689)
>
> ---

```bash
cp ca.pem /usr/local/share/ca-certificates/ca.crt
update-ca-certificates
mkdir /etc/nginx/ca && sudo cp nginx.pem nginx.key /etc/nginx/ca
```

> ![image-20221012231958789](http://cdn.ayusummer233.top/img/202210122319905.png)

---

#### 配置 Nginx









---
