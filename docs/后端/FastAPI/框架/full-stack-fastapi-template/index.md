# full-stack-fastapi-template

> [tiangolo/full-stack-fastapi-template: Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more.](https://github.com/tiangolo/full-stack-fastapi-template)

---

## 常见问题

### 本地开发调试

不使用 docker 的情况下需要

1. 在项目的 `backend` 目录下初始化 poetry 环境:

    ```bash
    poetry install
    ```
    
    ---

2. 修改配置文件

   修改 `.env` 中的如下信息

   ![image-20240507234827626](http://cdn.ayusummer233.top/DailyNotes/202405072348664.png)

3. 初始化数据库

   首先修改 `backend\app\core\db.py`

   加一行 `SQLModel` 导入并取消新建数据库的那行注释

   ![image-20240507234618392](http://cdn.ayusummer233.top/DailyNotes/202405072346423.png)

   然后运行 `backend\app\initial_data.py` 即可

   ```bash
   python .\app\initial_data.py
   ```

   ![image-20240507234729227](http://cdn.ayusummer233.top/DailyNotes/202405072347246.png)

   然后查看数据库可以看到对应表单已经创建完成, 并且 `user` 表中已有一条 `env` 中定义的 `SUPERUSER` 的账户信息

   ![image-20240507234908094](http://cdn.ayusummer233.top/DailyNotes/202405072349119.png)

   

   

   