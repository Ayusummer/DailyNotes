# Nginx

- [Nginx](#nginx)
  - [安装](#安装)
    - [Failed to start A high performance web server and a reverse proxy server.](#failed-to-start-a-high-performance-web-server-and-a-reverse-proxy-server)
  - [删除](#删除)

---

## 安装

:::tabs

@tab:active Ubuntu/Debian

```bash
sudo apt update
sudo apt install nginx

# 一旦安装完成，Nginx 将会自动被启动。你可以运行下面的命令来验证它：
sudo systemctl status nginx         
```



---

### Failed to start A high performance web server and a reverse proxy server.

> [Nginx: Failed to start A high performance web server and a reverse proxy server - Stack Overflow](https://stackoverflow.com/questions/51525710/nginx-failed-to-start-a-high-performance-web-server-and-a-reverse-proxy-server)
>
> ---

```bash
└─# sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)
     Active: failed (Result: exit-code) since Wed 2022-11-23 11:32:23 CST; 1h 0min ago
       Docs: man:nginx(8)
        CPU: 58ms

11月 23 11:32:21 KailiAttack nginx[3675789]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
11月 23 11:32:21 KailiAttack nginx[3675789]: nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
11月 23 11:32:22 KailiAttack nginx[3675789]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
11月 23 11:32:22 KailiAttack nginx[3675789]: nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
11月 23 11:32:22 KailiAttack nginx[3675789]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
11月 23 11:32:22 KailiAttack nginx[3675789]: nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
11月 23 11:32:23 KailiAttack nginx[3675789]: nginx: [emerg] still could not bind()
11月 23 11:32:23 KailiAttack systemd[1]: nginx.service: Control process exited, code=exited, status=1/FAILURE
11月 23 11:32:23 KailiAttack systemd[1]: nginx.service: Failed with result 'exit-code'.
11月 23 11:32:23 KailiAttack systemd[1]: Failed to start A high performance web server and a reverse proxy server.
```

80 端口被占用

- 有可能是 apchae2 占用的, 所以可以尝试

  ```bash
  sudo service apache2 stop
  sudo systemctl restart nginx
  sudo systemctl status nginx
  ```

:::

## 删除

> [Ubuntu彻底删除nginx - 掘金 (juejin.cn)](https://juejin.cn/post/6844904014136475656)
>
> ---

:::tabs

@tab:active Ubuntu/Debian

```bash
# 删除nginx，–purge包括配置文件
sudo apt-get --purge remove nginx
# 自动移除全部不使用的软件包
sudo apt-get autoremove
# 罗列出与nginx相关的软件
dpkg --get-selections|grep nginx

# 删除上步中查询到的软件, 如:
sudo apt-get --purge remove nginx
sudo apt-get --purge remove nginx-common
sudo apt-get --purge remove nginx-core

# 查看nginx正在运行的进程，如果有就kill掉
ps -ef |grep nginx
```

```bash
└─# ps -ef |grep nginx
root     2104356       1  0 11月21 ?      00:00:00 nginx: master process nginx
www-data 2104357 2104356  0 11月21 ?      00:00:00 nginx: worker process
www-data 2104358 2104356  0 11月21 ?      00:00:00 nginx: worker process
www-data 2104359 2104356  0 11月21 ?      00:00:00 nginx: worker process
www-data 2104360 2104356  0 11月21 ?      00:00:00 nginx: worker process
www-data 2104361 2104356  0 11月21 ?      00:00:00 nginx: worker process
www-data 2104362 2104356  0 11月21 ?      00:00:00 nginx: worker process
root     3707853 3673745  0 12:24 pts/9    00:00:00 grep --color=auto nginx
```

```bash
# kill 掉查到的进程, 如:
kill -9 2104356 2104357 2104358 2104359 2104360 2104361 2104362
```

:::

