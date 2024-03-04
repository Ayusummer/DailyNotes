# GoPhish

- [GoPhish](#gophish)
  - [部署](#部署)

---

> [入门 - Gophish 用户指南 --- Getting Started - Gophish User Guide (getgophish.com)](https://docs.getgophish.com/user-guide/getting-started)
>
> [gophish/gophish: Open-Source Phishing Toolkit (github.com)](https://github.com/gophish/gophish?tab=readme-ov-file)

GoPhish是一个开源的钓鱼工具包, 其仓库主页为: [gophish/gophish: Open-Source Phishing Toolkit (github.com)](https://github.com/gophish/gophish?tab=readme-ov-file)

官方文档地址: [Documentation - Gophish (getgophish.com)](https://getgophish.com/documentation/)

---

## 部署

由于是 Go 编写的, 可以直接下载编译后的文件执行, 无需安装额外依赖, 在 [Releases · gophish/gophish (github.com)](https://github.com/gophish/gophish/releases/) 下载对应系统版本的可执行程序

:::tabs

@tab:active linux(kali)

以 linux(这里以kali)为例, 下载如下压缩包

![image-20240226182746064](http://cdn.ayusummer233.top/DailyNotes/202402271335612.png)

```bash
unzip gopish-v0.12.1-linux-64bit.zip
```

编辑解压目录中的 `config.json`

![image-20240227134702295](http://cdn.ayusummer233.top/DailyNotes/202402271347716.png)

例如:

![image-20240227134758512](http://cdn.ayusummer233.top/DailyNotes/202402271347877.png)

具体配置说明可以参考 [安装 - Gophish 用户指南 --- Installation - Gophish User Guide (getgophish.com)](https://docs.getgophish.com/user-guide/installation#understanding-the-config.json)

```bash
# 为当前用户添加 gophish 可执行程序的执行权限
chmod u+x gophish
# 运行 gophish
./gophish
```

![image-20240227135839291](http://cdn.ayusummer233.top/DailyNotes/202402271358648.png)

在执行日志中可以看到账密

```
"Please login with the username admin and the password 5a53368e9c86b783"
```

:::


访问 3333 端口 web 服务可以看到登录页, 输入 admin 账密后会重定向到如下重置密码的页面

![image-20240227154122025](http://cdn.ayusummer233.top/DailyNotes/202402271541387.png)

访问 3333 端口 web 服务可以看到登录页, 输入 admin 账密后会重定向到如下重置密码的页面

完成密码重置后会转到如下页面

![image-20240227155300127](http://cdn.ayusummer233.top/DailyNotes/202402271553719.png)

