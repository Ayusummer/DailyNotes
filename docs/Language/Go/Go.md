# Go

## 安装(ubuntu/debian)

- 拉取官网最新的 stable release
  ```bash
  wget https://golang.google.cn/dl/go1.19.1.linux-amd64.tar.gz
  ```
- 解压到 `/usr/local/go`
  ```bash
  sudo tar -C /usr/local -xzf go1.19.1.linux-amd64.tar.gz
  ```
  > 如果之前安装了其他版本的 go 那么可以备份后先移除该版本目录再运行上面的命令
  > ```bash
  > sudo rm -rf /usr/local/go2
  > ```
- 编辑 `~/.bashrc`, 在文件尾添加
  ```bash
  export PATH=$PATH:/usr/local/go/bin
  ```
  > 如果之前还添加了其他 PATH 变量的话使用 `:` 间隔开即可
  >
  > 添加完环境变量后若想立即生效则需要重启计算机或者执行下面的 shell 命令
  >
  > ```bash
  > source ~/.profile
  > ```
- 验证
  ```bash
  go version
  ```

---
## 代理

> [goproxy.cn/README.zh-CN.md at master · goproxy/goproxy.cn (github.com)](https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md)

用法:
- 在终端中执行:
  ```bash
  go env -w GO111MODULE=on
  go env -w GOPROXY=https://goproxy.cn,direct
  ```
  
- macOS 或 Linux
  ```bash
  export GO111MODULE=on
  export GOPROXY=https://goproxy.cn
  ```

---

## 问题整理

### go get 已弃用

> [Golang弃用go get工具 - 简书 (jianshu.com)](https://www.jianshu.com/p/b93567e0af09)
>
> [Deprecation of 'go get' for installing executables - The Go Programming Language](https://go.dev/doc/go-get-install-deprecation)

---

```bash
'go get' is no longer supported outside a module.
        To build and install a command, use 'go install' with a version,
        like 'go install example.com/cmd@latest'
        For more information, see https://golang.org/doc/go-get-install-deprecation
        or run 'go help get' or 'go help install'.
```

go get 在 `g.mod` 中同时用于更新依赖和安装命令。这种组合很混乱，使用起来也很不方便，因为开发人员不想同时进行更新和安装。

`1.17.1` 及其后版本不再支持 `go get` 命令

如果要在当前模块的上下文中安装可执行文件时，使用 `go install` 不带版本后缀

```bash
go install example.com/cmd
```

这个命令适用于安装当前目录或父目录中go.mod定义的版本要求和其他命令。

---

要安装可执行文件同时忽略当前模块go.mod，使用go install带上版本后缀例如

```bash
go install example.com/cmd@latest
```



