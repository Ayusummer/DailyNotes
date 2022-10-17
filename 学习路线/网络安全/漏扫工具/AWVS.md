# AWVS

---

## 安装

---

### docker 安装 AWVS

> [XRSec/AWVS14-Update: Awvs 14 Scanner、fahai (github.com) - 镜像 by xrsec](https://github.com/XRSec/AWVS14-Update)
>
> [Docker安装AWVS AWVS批量扫描 AWVS+XRAY批量扫描 - admax11 - 博客园 (cnblogs.com) - 镜像 by secfa](https://www.cnblogs.com/ctfisnull/p/15059461.html)
>
> [Docker安装AWVS和Nessus - 徐也 - 博客园 (cnblogs.com)-镜像 by 雷石安全](https://www.cnblogs.com/hxlinux/p/14749230.html)
>
> ----

```bash
# 找下关于 awvs 的镜像
docker search awvs
# 选择一个镜像进行拉取
docker pull secfa/awvs
# 将镜像跑位容器
docker run -it -d --name awvs -p 3443:3443 --restart=always secfa/awvs:latest
# 进入容器编辑 /home/acunetix/.acunetix/data/license/license_info.json 填入 license 信息
# 访问 web 页面
URL: https://[ip]:3443/#/login
UserName: admin@admin.com
PassWord: Admin123
```

---

