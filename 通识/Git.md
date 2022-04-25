# 查看与升级版本

> [How to upgrade Git on Windows to the latest version - Stack Overflow](https://stackoverflow.com/questions/13790592/how-to-upgrade-git-on-windows-to-the-latest-version)

```bash
# 查看版本
git --version
# 升级 windows git
git update-git-for-windows
```

> 版本 > 2.16.1 则使用： git update-git-for-windows
> 版本 2.14.2-2.16.1 则使用： git update
> 版本 <2.14.2 请重新下载安装覆盖

命令执行完毕后弹出 `git 安装弹窗`, 根据提示进行安装即可

> 通过命令行下载慢的话可以选择 [Git (git-scm.com)](https://git-scm.com/) 下载 exe 执行更新即可

---

# 配置相关

```shell
git config --global user.email "GitHub绑定邮箱"
git config --global user.name "GitHub用户名"
```

---

# 仓库相关

查看远程仓库地址

```shell
git remote -v
```

---

## 常规操作

```shell
# stage 当前所有修改
git add .
# commit 并加备注
git commit -m "备注"
# 推送到 origin master
git push origin master
```

