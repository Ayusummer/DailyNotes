# FastAPI

- [FastAPI](#fastapi)
  - [起步](#起步)
    - [导入 FastAPI](#导入-fastapi)
    - [创建一个 FastAPI 实例](#创建一个-fastapi-实例)
    - [创建一个路径操作](#创建一个路径操作)
      - [路径](#路径)
      - [操作](#操作)
      - [定义一个路径操作装饰器](#定义一个路径操作装饰器)
    - [定义路径操作函数](#定义路径操作函数)
    - [返回内容](#返回内容)
  - [大型工程的目录结构设计](#大型工程的目录结构设计)
  - [运行](#运行)
    - [放在主程序中运行](#放在主程序中运行)
  - [报错收集](#报错收集)
    - [文档站点加载不出来](#文档站点加载不出来)
  - [特殊需求](#特殊需求)
    - [uvicorn 日志添加时间戳](#uvicorn-日志添加时间戳)

---
## 起步

> [第一步 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/)

基本示例:

```python
# main.py

# 导入 FastAPI
from fastapi import FastAPI
# 创建一个 FastAPI 实例
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
```

```shell
uvicorn main:app --reload
```
- `main`: `main.py` 文件(一个 Python「模块」)
- `app`: 在 `main.py` 文件中通过 `app = FastAPI()` 创建的对象。
- `--reload`: 让服务器在更新代码后重新启动。仅在开发时使用该选项。

![20220408093533](http://cdn.ayusummer233.top/img/20220408093533.png)

- 在浏览器中访问 `http://127.0.0.1:8000`  
- 交互式 API 文档: `http://127.0.0.1:8000/docs`
  ![20220408093911](http://cdn.ayusummer233.top/img/20220408093911.png)
- 可选的 API 文档: `http://127.0.0.1:8000/redoc#operation/read_item_items__item_id__get`
  ![20220408094106](http://cdn.ayusummer233.top/img/20220408094106.png)


### 导入 FastAPI

```python
from fastapi import FastAPI
```

`FastAPI` 是一个为你的 API 提供了所有功能的 Python 类。

`FastAPI` 是直接从 [Starlette](https://www.starlette.io/) 继承的类。

> [Starlette (worldlink.com.cn)](https://www.worldlink.com.cn/en/osdir/starlette.html)  
> ![20220408094954](http://cdn.ayusummer233.top/img/20220408094954.png)

可以通过 `FastAPI` 使用所有的 `Starlette` 的功能。

### 创建一个 FastAPI 实例

```python
app = FastAPI()
```

这里的变量 app 会是 FastAPI 类的一个「实例」

这个实例将是创建你所有 API 的主要交互对象。

这个 app 同样在如下命令中被 uvicorn 所引用：

```bash
uvicorn main:app --reload
```

### 创建一个路径操作

#### 路径

> [路径 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_6)

这里的「路径」指的是 URL 中从第一个 / 起的后半部分。

所以，在一个这样的 URL 中: `https://example.com/items/foo` 路径会是 `/items/foo`

> 「路径」也通常被称为「端点」或「路由」。

开发 API 时，「路径」是用来分离「关注点」和「资源」的主要手段。

#### 操作

> [操作 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_7)

这里的「操作」指的是一种 HTTP「方法」。

下列之一:
- `POST`
- `GET`
- `PUT`
- `DELETE`

以及更少见的几种:
- `OPTIONS`
- `HEAD`
- `PATCH`
- `TRACE`

在 HTTP 协议中，你可以使用以上的其中一种(或多种) 「方法」与每个路径进行通信。

在开发 API 时，通常使用特定的 HTTP 方法去执行特定的行为。

通常使用：
- `POST`: 创建数据。
- `GET`: 读取数据。
- `PUT`: 更新数据。
- `DELETE`: 删除数据。

因此，在 OpenAPI 中，每一个 HTTP 方法都被称为「操作」。

我们也打算称呼它们为「操作」。

#### 定义一个路径操作装饰器

> [定义一个路径操作装饰器 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_8)

```python
@app.get("/")
```

`@app.get("/") `  告诉 FastAPI 在它下方的函数负责处理如下访问请求：
- 请求路径为 `/`
- 使用 get 操作

> `@something` 语法在 Python 中被称为「装饰器」。  
> 装饰器接收位于其下方的函数并且用它完成一些工作。  
> 在我们的例子中，这个装饰器告诉 FastAPI 位于其下方的函数对应着路径 / 加上 get 操作。  
> 它是一个「路径操作装饰器」。  


### 定义路径操作函数

> [定义路径操作函数- FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#4)

这是我们的「路径操作函数」：

路径：是 /。  
操作：是 get。  
函数：是位于「装饰器」下方的函数(位于 @app.get("/") 下方) 。  

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
```

每当 FastAPI 接收一个使用 GET 方法访问 URL「/」的请求时这个函数会被调用。


### 返回内容

> [返回内容- FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#5)

```python
return {"message": "Hello World"}
```

你可以返回一个 dict、list，像 str、int 一样的单个值，等等。

你还可以返回 Pydantic 模型(稍后你将了解更多) 。

还有许多其他将会自动转换为 JSON 的对象和模型(包括 ORM 对象等) 。尝试下使用你最喜欢的一种，它很有可能已经被支持。


---

## 大型工程的目录结构设计

应用文件拆分

- `app`	应用根目录
  - `databse.py`	创建 SQLAlchemy
  - `model.py` Database models
  - `schema`  Pydantic models, 定义请求模型与响应模型
    - `....py`
  - `crud`  crud 操作
    - `....py`
  - `routers`  各个部分的 `APIRouter` 
    - `....py`
  - `cors.py`  跨域资源请求配置
  - `main.py` 主应用程序
  - `enums.py`  枚举类定义

---


## 运行

```bash
uvicorn app.mian:app --reload --host 'xxx' --port xxx
```

> `--relaod` 可以更新自动重载
>
> > [Uvicorn 重载目录, 优维康 HTTP/2, 乌维康寿命 (zditect.com)](https://www.zditect.com/article/34997596.html)
> >
> > [uvicorn reload-dir参数_聪明的大嘴花的博客-CSDN博客](https://blog.csdn.net/weixin_46248273/article/details/119930170)
> >
> > [Settings - Uvicorn](https://www.uvicorn.org/settings/#development)
> >
> > ----
> >
> > 需要注意的是 `--reload` 会跟踪当前工作目录， 当前工作目录有文件更新则会自动重载
> >
> > 请使用 `--reload-dir 目录` 来设置重新加载目录
> >
> > > - `--reload-dir` 是一个整体，没有空格
> > >
> > > - `--reload-dir`  需要配合 `--reload` 使用, 具体使用方法如下:
> > >
> > >   ```shell
> > >   uvicorn app.mian:app --reload --reload-dir xxx
> > >   ```
>
> `--port` 可以指定端口运行
>
> `--host` 可以用于指定 host, 当在服务器上跑 uvicorn 时可以指定 `–host ‘0.0.0.0’ ` 否则会自动挂载在本地上

---

### 放在主程序中运行

```python
if __name__ == '__main__':
    uvicorn_run('__main__:app', host=uvicorn_host, port=uvicorn_port, reload=uvicorn_reload)
```

上 HTTPS

```python
uvicorn_run('__main__:app', host=uvicorn_host, port=uvicorn_port, reload=False, ssl_keyfile="./static/ssl/example.key", ssl_certfile="./static/ssl/example.crt")
```

- `ssl_ketfile` 与 `ssl_certfile` 分别为证书与私钥

  > 这里我是用 openssl 创建的自签名 SSL 证书, 可参阅: [通识-使用 OpenSSL 创建自签名证书 | DailyNotes (ayusummer.github.io)](https://ayusummer.github.io/DailyNotes/网络安全/通识.html#使用-openssl-创建自签名-ssl-证书)

---

## 报错收集

### 文档站点加载不出来

> [Python fastapi 内网访问swagger方法_高压锅_1220的博客-CSDN博客_fastapi swagger地址](https://blog.csdn.net/u014651560/article/details/116526653)
>
> ---

一般是 `cdn.jsdelivr.net` 的资源加载不出来, 被 GFW 污染了

找到当前运行 FastAPI 服务的 Python 环境中安装的 FastAPI 依赖包的本地目录下的 `openapi/docs.py`, 如:

`xxx/.venv/lib/python3.10/site-packages/fastapi/openapi/docs.py`

在 `get_swagger_ui_html` 函数中有如下几个参数指向了公网的 js 与 css 和 png 资源文件, 可以将其下载下来之后换上本地目录

![image-20221206094438130](http://cdn.ayusummer233.top/DailyNotes/202212061102340.png)

首先需要在主程序挂载一下静态资源目录

```python
from fastapi.staticfiles import StaticFiles
app = FastAPI()
# 挂载本地资源
app.mount('/static', StaticFiles(directory=os.path.join('/home/xxx/', 'static')), name='static')
```

![image-20221206103105582](http://cdn.ayusummer233.top/DailyNotes/202212061103830.png)

然后相应的将 `xxx/.venv/lib/python3.10/site-packages/fastapi/openapi/docs.py` 中的几个参数改为:

```python
swagger_js_url: str = "/static/js/swagger-ui-bundle.js",
swagger_css_url: str = "/static/css/swagger-ui.css",
swagger_favicon_url: str = "/static/img/favicon.png",
```

然后重启主程序即可

---

如此配置好后访问交互式文档时可能还会报两个资源获取不到的问题, 是两个 `.map` 文件

```
https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui-bundle.js.map
https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui.css.map
```

直接使用 `wget` 命令将其下载到对应位置即可:

![image-20221230161204692](http://cdn.ayusummer233.top/img/202212301612040.png)

---

## 特殊需求

### uvicorn 日志添加时间戳

>  [fastapi（66）- 修改 uvicorn 的日志格式 - 小菠萝测试笔记 - 博客园 (cnblogs.com)](https://www.cnblogs.com/poloyy/p/15549275.html)

新建一个 uvicorn logger 的 json

```json
{
  "version": 1,
  "disable_existing_loggers": false,
  "formatters": {
    "default": {
      "()": "uvicorn.logging.DefaultFormatter",
      "fmt": "%(levelprefix)s %(message)s",
      "use_colors": null
    },
    "access": {
      "()": "uvicorn.logging.AccessFormatter",
      "fmt": "%(asctime)s - %(levelprefix)s %(client_addr)s - \"%(request_line)s\" %(status_code)s"
    }
  },
  "handlers": {
    "default": {
      "formatter": "default",
      "class": "logging.StreamHandler",
      "stream": "ext://sys.stderr"
    },
    "access": {
      "formatter": "access",
      "class": "logging.StreamHandler",
      "stream": "ext://sys.stdout"
    }
  },
  "loggers": {
    "uvicorn": {
      "handlers": [
        "default"
      ],
      "level": "INFO"
    },
    "uvicorn.error": {
      "level": "INFO"
    },
    "uvicorn.access": {
      "handlers": [
        "access"
      ],
      "level": "INFO",
      "propagate": false
    }
  }
}
```

在主程序中使用 `log_config` 参数指向该 json 即可

```python
uvicorn.run("test:app", port=8001, debug=True, log_config="uvicorn_config.json")
```

![image-20240424173343145](http://cdn.ayusummer233.top/DailyNotes/image-20240424173343145.png)

> 需要注意的是 `log_config` 接收字符串, 如果用 pathlib 构造路径的话记得加一层 `str()` 转成字符串传入
