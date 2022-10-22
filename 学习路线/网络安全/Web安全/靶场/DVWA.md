# DVWA

## 使用 docker 搭建 DVWA

> [ubuntu 安装 docker](../../../../%E9%80%9A%E8%AF%86/Docker/Docker.md)

```bash
# 拉取 dvwa 镜像
docker pull vulnerables/web-dvwa
# 运行 dvwa 镜像(将容器 80 端口映射到主机 9220 端口)
docker run -it -d -p 9220:80 vulnerables/web-dvwa
```

- **-i:** 以交互模式运行容器，通常与 -t 同时使用；
- **-t:** 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
- **-d:** 后台运行容器，并返回容器ID；
- **-p:** 端口映射，格式为：主机(宿主)端口:容器端口

