# 目录
- [目录](#目录)
- [go-cqhttp](#go-cqhttp)
  - [群内 QA](#群内-qa)
    - [正在登陆的设备存在风险](#正在登陆的设备存在风险)
- [yobot](#yobot)
  - [群内 QA](#群内-qa-1)
- [Hoshino](#hoshino)
  - [群内QA](#群内qa)
    - [jinja2 报错](#jinja2-报错)

---

# go-cqhttp

> [go-cqhttp 帮助中心](https://docs.go-cqhttp.org/)
>
> [Mrs4s/go-cqhttp: cqhttp的golang实现，轻量、原生跨平台. (github.com)](https://github.com/Mrs4s/go-cqhttp)

---

## 安装运行(以 Ubuntu 为例)

在 [Releases · Mrs4s/go-cqhttp (github.com)](https://github.com/Mrs4s/go-cqhttp/releases) 获取系统对应版本的 release

解压:

```bash
tar -xf go-cqhttp_linux_amd64.tar.gz 
```

给 `go-cqhttp` 文件的所有者以执行权限

```bash
chmod u+x go-cqhttp
```

首次运行 `go-cqhttp` 生成配置文件

```bash
./go-cqhttp
```

![image-20220523134826512](http://cdn.ayusummer233.top/img/202205231348243.png)

修改完配置后再次运行即可

---

## 群内 QA

### 正在登陆的设备存在风险

> [Bug: 登录协议崩了 · Issue #1469 · Mrs4s/go-cqhttp (github.com)](https://github.com/Mrs4s/go-cqhttp/issues/1469)

![image-20220519201708016](http://cdn.ayusummer233.top/img/202205192017385.png)

解决方案: 

在本地运行 go-cqhttp, 登陆成功会生成 `session.token` 文件, 将其拷贝到服务器相应位置即可

![image-20220523142442098](http://cdn.ayusummer233.top/img/202205231424440.png)

---

# yobot

## 群内 QA





---

# Hoshino





—

## 群内QA

### jinja2 报错

`ImportError: cannot import name ‘escape’ from ‘jinja2’`

> [History for requirements.txt - Ice-Cirno/HoshinoBot (github.com)](https://github.com/Ice-Cirno/HoshinoBot/commits/master/requirements.txt)
>
> [指定Jinja2与werkzeug的版本(上游依赖有不兼容的改动) · Ice-Cirno/HoshinoBot@6638354 (github.com)](https://github.com/Ice-Cirno/HoshinoBot/commit/6638354c4b3d30449ffe0ff80d25582052c58924)

![image-20220519174112490](http://cdn.ayusummer233.top/img/202205191741126.png)

这是因为原版 `requirements.txt` 中 `jinja2` 用的 `>=` 默认安装最新版本, 但是 `hoshino` 无法适应新版本

在依赖中尽量不要写依赖的 `latest` 版本, 否则新安装依赖默认安装最新版本容易报错

解决方案:

`Hoshino` 仓库已经更新了 `requirements.txt`, 直接拉最新的 [HoshinoBot/requirements.txt at master · Ice-Cirno/HoshinoBot (github.com)](https://github.com/Ice-Cirno/HoshinoBot/blob/master/requirements.txt) 安装即可

![image-20220519201140632](http://cdn.ayusummer233.top/img/202205192011780.png)

![image-20220519201815162](http://cdn.ayusummer233.top/img/202205192018445.png)

> 与 jinja2 同期的上游依赖不兼容的问题还有 werkzeug, 直接拉 `hoshino` 仓库最新的 `requirements` 更新即可

---

[RROR: No matching distribution found for dataclasses==0.8 - Streamlit Cloud - Streamlit](https://discuss.streamlit.io/t/rror-no-matching-distribution-found-for-dataclasses-0-8/11667/3)
