# 前言

随笔有一部分内容基于慕课网 21 年发的一份 `FastAPI` 基础教程

[【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=19&spm_id_from=333.1007.top_right_bar_window_history.content.click)

---
# 起步

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


## 导入 FastAPI

```python
from fastapi import FastAPI
```

`FastAPI` 是一个为你的 API 提供了所有功能的 Python 类。

`FastAPI` 是直接从 [Starlette](https://www.starlette.io/) 继承的类。

> [Starlette (worldlink.com.cn)](https://www.worldlink.com.cn/en/osdir/starlette.html)  
> ![20220408094954](http://cdn.ayusummer233.top/img/20220408094954.png)

可以通过 `FastAPI` 使用所有的 `Starlette` 的功能。

## 创建一个 FastAPI 实例

```python
app = FastAPI()
```

这里的变量 app 会是 FastAPI 类的一个「实例」

这个实例将是创建你所有 API 的主要交互对象。

这个 app 同样在如下命令中被 uvicorn 所引用：

```bash
uvicorn main:app --reload
```

## 创建一个路径操作

### 路径

> [路径 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#_6)

这里的「路径」指的是 URL 中从第一个 / 起的后半部分。

所以，在一个这样的 URL 中: `https://example.com/items/foo` 路径会是 `/items/foo`

> 「路径」也通常被称为「端点」或「路由」。

开发 API 时，「路径」是用来分离「关注点」和「资源」的主要手段。

### 操作

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

在 HTTP 协议中，你可以使用以上的其中一种（或多种）「方法」与每个路径进行通信。

在开发 API 时，通常使用特定的 HTTP 方法去执行特定的行为。

通常使用：
- `POST`: 创建数据。
- `GET`: 读取数据。
- `PUT`: 更新数据。
- `DELETE`: 删除数据。

因此，在 OpenAPI 中，每一个 HTTP 方法都被称为「操作」。

我们也打算称呼它们为「操作」。

### 定义一个路径操作装饰器

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


## 定义路径操作函数

> [定义路径操作函数- FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#4)

这是我们的「路径操作函数」：

路径：是 /。  
操作：是 get。  
函数：是位于「装饰器」下方的函数（位于 @app.get("/") 下方）。  

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
```

每当 FastAPI 接收一个使用 GET 方法访问 URL「/」的请求时这个函数会被调用。


## 返回内容

> [返回内容- FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/first-steps/#5)

```python
return {"message": "Hello World"}
```

你可以返回一个 dict、list，像 str、int 一样的单个值，等等。

你还可以返回 Pydantic 模型（稍后你将了解更多）。

还有许多其他将会自动转换为 JSON 的对象和模型（包括 ORM 对象等）。尝试下使用你最喜欢的一种，它很有可能已经被支持。


---

# 请求模型

## 路径参数和数据的解析验证

### 枚举类型

可以使用枚举类型来指定参数范围

```python
# 导入枚举类型
from enum import Enum

class CityName(str, Enum):
    Beijing = 'Beijing'
    Xian = 'Xian'
```

需要注意的是定义整型枚举类型是在 FastAPI 中不可以用 `(int, Enum) ` 或者仅仅是使用 Enum, 应当先从 enum 导入 IntEnum, 然后使用 IntEnum 来定义整型枚举类型

```python
# 引入枚举类
from enum import Enum, IntEnum

# 定义部门 id 枚举类型
class DidEnum(IntEnum):
    LinChuang=1
    NeiKe=2
    WaiKe=3
    Fuke=4
    ErKe=5
    
    
@router.get("/getStaffByDid/{did}", tags=["获取某个部门的员工"])
async def readStaffByDid(did: DidEnum):
    return {"username": "Rick"+str(type(did)) + "value:" + str(did)}
```
---

## 查询参数和数据的解析, 验证

### 默认参数与可选参数

```python
from typing import Optional

@router.get("/query")
def page_limit(page: int=1, limit: Optional[int] = None):
    if limit:
        return {"page": page, "limit": limit}
    return {"page": page}
```

从 typing 引入 Optional 然后在参数中使用即可

---

### bool 参数

```python
# bool 参数
@router.get("/query/bool/conversion")
async def type_conversion(param: bool=False):
    return {"param": param}
```

若非 bool 类型传参则会报 `422 Unprocessable Entity`

![image-20220429150218133](http://cdn.ayusummer233.top/img/202204291502848.png)

![image-20220429150320838](http://cdn.ayusummer233.top/img/202204291503015.png)

---

### 多个参数, 列表, 字符串验证, 正则, 参数别名

```python
from typing import (
    Optional, # 用于指定可选参数
    List, # 列表
)

from fastapi import( 
    APIRouter, 
    Depends, 
    HTTPException,
    Path,   # 用于校验路径        
    Query, # 用于校验查询参数    
    )

# 多个查询参数列表, 正则, 参数别名
@router.get("/query/validations")
async def query_params_validate(
    # value: 字符串: 最小长度 8, 最大长度 16, 必须以 a 开头
    value: str = Query(..., min_length=8, max_length=16, regex="^a"),
    values: List[str] = Query(default=["v1", "v2"], alias="alias_name")
    ):
    return value, values
```

![image-20220429154441432](http://cdn.ayusummer233.top/img/202204291544786.png)

需要注意的是: 当时用参数别名时, 查询时 query 参数应当使用别名

![image-20220429154600704](http://cdn.ayusummer233.top/img/202204291546033.png)

---

## 请求体及混合参数

### 请求体和字段

```python
from pydantic import (
    BaseModel,  # 基本模型类, 用于构建数据模型
    Field,  # 字段类, 用于构建数据模型
)

####### 请求体和混合参数 #######

class CityInfo(BaseModel):
    name: str = Field(..., example='Beijing')   # example 是注解作用, 值不会被验证
    country: str = Field(..., example='China')
    contry_code: str = Field(..., example='CN')
    contry_population: int = Field(default=800,  title="人口数量", 
                                                    description="国家的人口数量", ge=800)
    class Config:
        schema_extra = {
            "example": {
                "name": "Beijing",
                "country": "China",
                "contry_code": "CN",
                "contry_population": 1400000000
            }
        }

@router.post("/request_body/city", tags=["city"])
async def city_info(city: CityInfo):
    print(city.name, city.country)
    return city.dict()
```

![image-20220429211641949](http://cdn.ayusummer233.top/img/202204292116611.png)

成功响应:

![image-20220429211727171](http://cdn.ayusummer233.top/img/202204292117373.png)

`country_population` 不在允许范围内:

![image-20220429211953031](http://cdn.ayusummer233.top/img/202204292119236.png)

需要注意的是, 这里的请求体就不是 query 了而是 body(application/json)

![image-20220429212813608](http://cdn.ayusummer233.top/img/202204292128796.png)

---

### 多参数混合

```python
# 多参数混合
@router.put("/request_body/city/{name}")
async def mix_city_info(
    name: str,
    city01: CityInfo,
    city02: CityInfo,
    confirmed: int = Query(ge=0, description="确诊数", default=0),
    death: int = Query(ge=0, description="死亡数", default=0)
    ):
    if name == "Shanghai":
        return {
            "Shanghai":
            {
                "confirmed": confirmed,
                "death": death
            }
        }
    return city01.dict(), city02.dict()
```

直接在参数中添加不同类型参数即可

query 包括 name, confirmed, death

body 包括两个 CityInfo: city01, city02

![image-20220429215047949](http://cdn.ayusummer233.top/img/202204292150419.png)

![image-20220429215120620](http://cdn.ayusummer233.top/img/202204292151154.png)

![image-20220429215200273](http://cdn.ayusummer233.top/img/202204292152593.png)

---

## 数据格式嵌套的请求体

在使用 Pydantic 定义请求体数据的时候, 校验使用 pydantic.Field

校验路径使用 fastapi.Path

校验查询参数用 fastapi.Query

```python
# 引入日期类
from datetime import date

# ####### 数据格式嵌套的请求体 #######

class Data(BaseModel):
    city: List[CityInfo] = None # 定义数据格式嵌套的请求体
    date: date
    # 使用 Field 进行数据校验
    confirmed: int = Field(default=0, ge=0, description="确诊数")
    death: int = Field(default=0, ge=0, description="死亡数")
    recovered: int = Field(default=0,  ge=0, description="治愈数")

@router.put("/request_body/nested")
async def nested_models(data: Data):
    return data


```

![image-20220429233413969](http://cdn.ayusummer233.top/img/202204292334127.png)

![image-20220429233435690](http://cdn.ayusummer233.top/img/202204292334851.png)

---

## 配置 Cookie 和 Header 参数

### Cookie 校验

```python
from fastapi import Cookie

@router.get("/cookie")
async def cookie(cookie_id: Optional[str] =  Cookie(None)):
    return {"cookie_id": cookie_id}
```

调试需要在 apipost 中调下, 在 Header 中设置 Cookie

![image-20220429235629565](http://cdn.ayusummer233.top/img/202204292356756.png)

---

### Header 校验

```python
from fastapi import Header

# 校验 Header
@router.get("/header")
async def header(user_agent: Optional[str] = Header(
            None, 
            convert_underscores=True    # 将下划线转换为 - 
        ),
        # 不加下划线转化的话就变成了普通的query列表参数了
        x_token: List[str] = Header(None)  
    ):
    return {"user_agent": user_agent, "x_token": x_token}
```

需要注意的是, 第二个参数就是普通的 Header 参数, 只有将参数名称设置为 user_agent 时才能正确接收到 user_agent

![image-20220430001220308](http://cdn.ayusummer233.top/img/202204300012561.png)

![image-20220430001314429](http://cdn.ayusummer233.top/img/202204300013654.png)

需要注意的是, 设置了 `*convert_underscores=True` 的话发请求的时候 Header 中的相应参数要使用短横线而非下划线, 如 user-agent, x-token, 否则会无法正确接收到信息

![image-20220430002420244](http://cdn.ayusummer233.top/img/202204300024484.png)

![image-20220430002550536](http://cdn.ayusummer233.top/img/202204300025727.png)

---

# 响应模型

---

## response_model

使用 `pydantic.BaseModel` 派生子类创建响应模型类, 在写路由时使用 `response_model=xxx` 来指定 `xxx` 为响应模型, 这样返回的响应就是一个 `xxx` 实例

```python
class UserBase(BaseModel):
    username: str
    email: EmailStr
    mobile: str = "10086"
    address: str = None
    full_name: Optional[str] = None

class UserIn(UserBase):
    """用于创建 User 对象
    用户创建时需要给出 password
    但是访问用户时不应当返回 password
    """
    password: str

class UserOut(UserBase):
    pass

users = {
    "user01": {"username": "user01", "password": "123123", "email": "user01@example.com"},
    "user02": {"username": "user02", "password": "123456", "email": "user02@example.com", "mobile": "110"}
}

# 使用响应模型
@app04.post("/response_model/", response_model=UserOut, response_model_exclude_unset=True)
async def response_model(user: UserIn):
    """
    response_model_exclude_unset=True 表示默认值不包含在响应中, 仅包含实际给的值, 
    如果实际给的值与默认值相同也会包含在响应中
    """
    print(user.password)  # password不会被返回
    # return user
    return users["user02"]
```

![image-20220430141333793](http://cdn.ayusummer233.top/img/202204301413543.png)

---

```python
@app04.post(
    "/response_model/attributes",
    # response_model=UserOut,
    # response_model=Union[UserIn, UserOut],    # 取并集(也就是两个类的属性都有)
    response_model=List[UserOut],
    # 包含某些字段, 这里的 mobile 会被下面 exclude 覆盖掉
    # response_model_include=["username", "email", "mobile"], 
    response_model_include=["username", "email"], # 包含某些字段
    response_model_exclude=["mobile"]   # 排除掉某些字段
)
async def response_model_attributes(user: UserIn):
    """response_model_include列出需要在返回结果中包含的字段  
    response_model_exclude列出需要在返回结果中排除的字段
    """
    # del user.password  # Union[UserIn, UserOut]后，删除password属性也能返回成功
    # return user
    return [user, user]
```

响应模型可以使用单个响应模型类, 也可以使用模型类并集, 模型类列表;

响应模型亦可以进行特定字段的选取与排除

![image-20220430142357442](http://cdn.ayusummer233.top/img/202204301423796.png)

---

### 复杂类型响应

比如这种响应:

![image-20220502192305698](http://cdn.ayusummer233.top/img/202205021923030.png)

首先这是从数据库中获取到的数据加上一些修饰得到的

实现这种需求的两种方式:

---

#### 直接搓 JSON

```python
# 引入 jsonable_encoder
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

staffs = crud.read_staff_by_page(db, page, pageSize)
staffs = list(jsonable_encoder(staffs))
return JSONResponse(content={
    "code":0,
    "message":"ok",
    "result":{
        "items":staffs,
        "total": len(staffs)
    },
    "type":"success"
})    
```

---

#### 封装 schema

先用 `pydantic.BaseModel` 和 `staff schema` 封装一个响应模型类

```python
# 虚拟一个默认员工
default_staff = {
    "sid": 0,
    "sname": "咸鱼型233",
    "did": 0
}

class ResultSchema(BaseModel):
    """结果类"""
    items: List[Staff] = [Staff(**default_staff)]
    total: int = len(items)

# StaffListGetResultModel 
class StaffListGetResultModel(BaseModel):
    """员工列表获取结果类  
    :param items: 员工列表; 默认值: [default_staff]  
    :param total: 员工总数; 默认值: 1  
    """
    code: int = 0
    message: str = "ok"
    result: ResultSchema = ResultSchema(**default_staff)
    type: str = "success"
```

然后再返回需要从数据库中读取的数据以及默认值:

```python
# 查询 page 页, 页大小为 pageSize 的员工信息
@router.get(
    "/getStaffByPage/", 
    summary="分页按条目获取员工信息",
    response_model= schema.StaffListGetResultModel,
    response_model_exclude_unset=False,
)
async def get_staff_by_page(
    page: int = 1, 
    pageSize: int = 10, 
    db:Session = Depends(get_db),
):
    """分页按条目获取员工信息  
    :param page: 页码  
    :param pageSize: 页大小  
    :param db: 数据库连接  
    :param response_model: 返回结果类型: schema.StaffListGetResultModel  
    :param response_model_exclude_unset: 是否排除未设置的字段, 表示默认值不包含在响应中, 仅包含实际给的值,   
                                        如果实际给的值与默认值相同也会包含在响应中
    """
    staffs = crud.read_staff_by_page(db, page, pageSize)
    return {
        "result":{
            "items":staffs,
            "total": len(staffs)
        },
    }
```

![image-20220502193659478](http://cdn.ayusummer233.top/img/202205021936876.png)

---

## 响应状态码

在路由中通过 `status_code` 进行指定, 其值为整型, 可以通过 `status.HTTP_xx_xx` 获得名称上的提示

```python
@app04.post("/status_code", status_code=200)
async def status_code():
    """返回status_code: 200"""
    return {"status_code": 200}


@app04.post("/status_attribute", status_code=status.HTTP_200_OK)
async def status_attribute():
    """返回 status.HTTP_200_OK
    """
    print(type(status.HTTP_200_OK))
    return {"status_code": status.HTTP_200_OK}
```

---

## 表单数据处理

引入 `fastapi.Form` 用于处理表单数据

```python
# from fastapi import Form   # 用于处理表单数据

@app04.post("/login/")
async def login(username: str = Form(...), password: str = Form(...)):  # 定义表单参数
    """
    Form(...) 表示参数为必填项  
    用Form类需要pip install python-multipart;   
    Form类的元数据和校验方法类似Body/Query/Path/Cookie
    """
    return {"username": username}
```

![image-20220430145257599](http://cdn.ayusummer233.top/img/202204301452811.png)

---

## 文件上传及参数详解

引入 `fastapi.File & UploadFile`, 路由函数参数中使用 `File` 和 `UploadFile` 来注解参数

```python
"""Request Files 单文件、多文件上传及参数详解"""
# from fastapi import (
#     File,   # 文件处理
#     UploadFile,     # 用于处理文件上传
# )

@app04.post("/file")
async def file_(file: bytes = File(...)):  
    """
    如果要上传多个文件 files: List[bytes] = File(...)  
    使用File类 文件内容会以bytes的形式读入内存  
    适合于上传小文件
    """
    return {"file_size": len(file)}


@app04.post("/upload_files")
async def upload_files(files: List[UploadFile] = File(...)):  
    """
    如果要上传单个文件 file: UploadFile = File(...)  
    使用 UploadFile 类的优势:  
    1.文件存储在内存中，使用的内存达到阈值后，将被保存在磁盘中  
    2.适合于图片、视频大文件  
    3.可以获取上传的文件的元数据，如文件名，创建时间等  
    4.有文件对象的异步接口  
    5.上传的文件是Python文件对象, 可以使用write(), read(), seek(), close()操作  
    """
    for file in files:
        contents = await file.read()
        print(contents)
    return {"filename": files[0].filename, "content_type": files[0].content_type}
```

![image-20220430150417033](http://cdn.ayusummer233.top/img/202204301504212.png)

![image-20220430150355031](http://cdn.ayusummer233.top/img/202204301503316.png)

---

## 静态文件的配置

静态文件一般放在 `static ` 文件夹中, 需要在 `main app` (而非 `APIRouter` 分路由) 中进行挂载方可使用

```python
import os   # 用于拼接路径

app = FastAPI(
    title='FastAPI Tutorial and Coronavirus Tracker API Docs',
    description='FastAPI教程 \
        新冠病毒疫情跟踪器API接口文档, \
        项目代码:https://github.com/liaogx/fastapi-tutorial',
    version='1.0.0',
    docs_url='/docs',
    redoc_url='/redocs',
)

# mount表示将某个目录下一个完全独立的应用挂载过来，这个不会在API交互文档中显示
# .mount()不要在分路由APIRouter().mount()调用，模板会报错
static_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './coronavirus/static'))
app.mount(path='/static', app=StaticFiles(directory=static_path), name='static')  
```

---

## 路径操作配置

```python 
"""Path Operation Configuration 路径操作配置"""
# 响应的状态码, 标签, 相应的描述符, 参数类型, 参数名称, 参数描述等等

@app04.post(
    "/path_operation_configuration",    # URL 地址
    response_model=UserOut,   # 响应的结果类型
    # tags=["Path", "Operation", "Configuration"],    # 标签, 在 doc 中会按照标签进行分类展示
    summary="This is summary",  # 接口描述, 在 doc 中会在路径后面显示
    description="This is description",  # 描述, 在 doc 中会在接口描述下面显示
    response_description="This is response description",    # 响应描述, 在 doc 中会在响应结果下面显示
    # deprecated=True,    # 是否弃用
    status_code=status.HTTP_200_OK  # 响应状态码
)
async def path_operation_configuration(user: UserIn):
    """
    Path Operation Configuration 路径操作配置
    :param user: 用户信息
    :return: 返回结果
    """
    return user.dict()
```

![image-20220430153331803](http://cdn.ayusummer233.top/img/202204301533021.png)

---

## FastAPI 配置项

```python
# FastAPI 配置项
app = FastAPI(
    # 标题
    title='FastAPI Tutorial and Coronavirus Tracker API Docs',
    # 描述
    description='FastAPI教程 \
        新冠病毒疫情跟踪器API接口文档, \
        项目代码:https://github.com/liaogx/fastapi-tutorial',
    # 版本
    version='1.0.0',
    # Swagger UI 文档地址
    docs_url='/docs',
    # ReDoc 文档地址
    redoc_url='/redocs',
)
```

---

## 错误处理

引入 `fastapi.HTTPException` 后在路由函数中进行使用

```python
####### Handling Errors 错误处理 #######
# HTTP Exception 以及自定义异常处理器
# from fastapi import HTTPException   # 用于处理HTTP异常

@app04.get("/http_exception")
async def http_exception(city: str):
    """默认的异常处理测试   
    :param city: 城市名称  
    :return: 返回城市名称  
    若 city 不是 Beijing 则抛出 404 错误
    """
    if city != "Beijing":
        raise HTTPException(status_code=404, detail="City not found!", headers={"X-Error": "Error"})
    return {"city": city}
```

---

### 自定义异常处理

在 `main app` 中进行异常处理的重写

```python
from fastapi.exceptions import RequestValidationError # 请求校验错误处理
from fastapi.responses import PlainTextResponse       # 文本形式返回 response
from starlette.exceptions import HTTPException as StarletteHTTPException  # HTTP 异常处理


@app.exception_handler(StarletteHTTPException)  # 重写HTTPException异常处理器
async def http_exception_handler(request, exc):
    """
    使用文本形式返回异常信息
    :param request: request 请求      (这个参数不能省)
    :param exc: 错误
    :return:
    """
    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)
#
#
@app.exception_handler(RequestValidationError)  # 重写请求验证异常处理器
async def validation_exception_handler(request, exc):
    """
    :param request: 这个参数不能省
    :param exc:
    :return:
    """
    return PlainTextResponse(str(exc), status_code=400)
```

重写前HTTP异常:

![image-20220430155058089](http://cdn.ayusummer233.top/img/202204301550627.png)

重写后HTTP异常:

![image-20220430155146255](http://cdn.ayusummer233.top/img/202204301551512.png)

---

重写前请求异常:

![image-20220430155253999](http://cdn.ayusummer233.top/img/202204301552271.png)

重写后请求异常:

![image-20220430155240171](http://cdn.ayusummer233.top/img/202204301552608.png)

---

# 依赖注入

"依赖注入" 是指在编程中, 为保证代码成功运行, 先导入或声明其所需要的 "依赖", 如子函数, 数据库连接等

- 提高代码的复用率
- 共享数据库的链接
- 增强安全, 认证和角色管理

FastAPI 的兼容性

- 所有的关系型数据库，支撑NoSQL数据库
- 第三方的包和API
- 认证和授权系统
- 响应数据注入系统

---

## 创建, 导入和声明依赖

将函数作为依赖进行注入操作(query)

```python
from fastapi import (
    Depends,    # 引入依赖
)

####### Dependencies 创建、导入和声明依赖 #######


async def common_parameters(q: Optional[str] = None, page: int = 1, limit: int = 100):
    """公共函数测试"""
    return {"q": q, "page": page, "limit": limit}


@app05.get("/dependency01")
async def dependency01(commons: dict = Depends(common_parameters)):
    """使用 Depends 进行依赖注入
    """
    return commons


@app05.get("/dependency02")
def dependency02(commons: dict = Depends(common_parameters)):
    """可以在async def中调用def依赖  
    也可以在def中导入async def依赖
    """
    return commons
```

![image-20220430174337819](http://cdn.ayusummer233.top/img/202204301743566.png)

---

## 类作为依赖项

```python
# 假设这是一个从数据库中获取的数据
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


class CommonQueryParams:
    def __init__(self, q: Optional[str] = None, page: int = 1, limit: int = 100):
        self.q = q
        self.page = page
        self.limit = limit


@app05.get("/classes_as_dependencies")
# async def classes_as_dependencies(commons: CommonQueryParams = Depends(CommonQueryParams)):
# async def classes_as_dependencies(commons: CommonQueryParams = Depends()):
async def classes_as_dependencies(commons=Depends(CommonQueryParams)):
    """
    使用 Depends 创建类作为依赖项
    """
    response = {}
    if commons.q:
        response.update({"q": commons.q})
    # 切片操作
    items = fake_items_db[commons.page - 1 : commons.page + commons.limit]
    response.update({"items": items})
    return response

```

需要注意的是, 要与 Pydantic 派生类型作为参数相区分, 使用 `pydantic.BaseModel` 子类作为参数在函数请求体中, 而类作为依赖项进行注入作为 `query` 参数

![image-20220430182936870](http://cdn.ayusummer233.top/img/202204301829321.png)

---

## 子依赖的创建和调用

```python
####### Sub-dependencies 子依赖 #######


def query(q: Optional[str] = None):
    return q


def sub_query(q: str = Depends(query), last_query: Optional[str] = None):
    if not q:
        return last_query
    return q


@app05.get("/sub_dependency")
async def sub_dependency(final_query: str = Depends(sub_query, use_cache=True)):
    """use_cache默认是True,
    表示当多个依赖有一个共同的子依赖时,
    每次request请求只会调用子依赖一次,
    多次调用将从缓存中获取
    """
    return {"sub_dependency": final_query}
```

`query` 是子依赖

![image-20220430184123474](http://cdn.ayusummer233.top/img/202204301841699.png)

![image-20220430184031831](http://cdn.ayusummer233.top/img/202204301840123.png)

---

## 路径操作装饰器中导入依赖

```python
####### Dependencies in path operation decorators 路径操作装饰器中的多依赖 #######


async def verify_token(x_token: str = Header(...)):
    """
    没有返回值的子依赖
    """
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


async def verify_key(x_key: str = Header(...)):
    """
    有返回值的子依赖，但是返回值不会被调用
    """
    if x_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="X-Key header invalid")
    return x_key


@app05.get("/dependency_in_path_operation", 
        dependencies=[Depends(verify_token), Depends(verify_key)]
)   # 这时候不是在函数参数中调用依赖，而是在路径操作中调用依赖
async def dependency_in_path_operation():
    return [
        {"user": "user01"}, 
        {"user": "user02"}
    ]
```

可以用于校验 key 之类的, 在 Header 中包含 key, 后端路径操作装饰器中导入依赖

![image-20220430185536241](http://cdn.ayusummer233.top/img/202204301855666.png)

---

## FastAPI 框架中全局依赖的使用

假设现在有一个子依赖需要在应用的任何地方使用(或者某个组件内部的所有地方), 那么可以使用全局依赖

在 `APIRouter` 中使用:

```python
# 直接在 APIRouter 定义文件中使用:
app05 = APIRouter(dependencies=[Depends(verify_token), Depends(verify_key)])
```

在 `main App` 中使用:

```python
# 引入 chapter05 中的全剧依赖 verify_token 和 verify_key
from .chapter05 import verify_token, verify_key
from fastapi import (
    FastAPI, 
    Request,
    Depends # 引入依赖  
)

# FastAPI 配置项
app = FastAPI(
    # 标题
    title='FastAPI Tutorial and Coronavirus Tracker API Docs',
    # 描述
    description='FastAPI教程 \
        新冠病毒疫情跟踪器API接口文档, \
        项目代码:https://github.com/liaogx/fastapi-tutorial',
    # 版本
    version='1.0.0',
    # Swagger UI 文档地址
    docs_url='/docs',
    # ReDoc 文档地址
    redoc_url='/redocs',
    dependencies = [Depends(verify_token), Depends(verify_key)]
)
```

![image-20220430190445228](http://cdn.ayusummer233.top/img/202204301904524.png)

---

## 使用 yield 的依赖和子依赖

`yield` 关键字在依赖中的使用 


::: tabs
@tab Python3.6

Python3.6需要pip install async-exit-stack async-generator

@tab:active Python3.7


```python
####### Dependencies with yield 带yield的依赖 #######


# 这个需要Python3.7才支持，Python3.6需要pip install async-exit-stack async-generator
# 以下都是伪代码

async def get_db():
    db = "db_connection"
    try:
        yield db
    finally:
        db.endswith("db_close")


async def dependency_a():
    dep_a = "generate_dep_a()"
    try:
        yield dep_a
    finally:
        dep_a.endswith("db_close")


async def dependency_b(dep_a=Depends(dependency_a)):
    dep_b = "generate_dep_b()"
    try:
        yield dep_b
    finally:
        dep_b.endswith(dep_a)


async def dependency_c(dep_b=Depends(dependency_b)):
    dep_c = "generate_dep_c()"
    try:
        yield dep_c
    finally:
        dep_c.endswith(dep_b)

```
:::



实际上使用最多的就是 `get_db`:

```python
# 引入数据库
from ..database import SessionLocal, engine

# Dependency (关键字 yield 可用于共享连接)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

---

# JSON Compatible Encoder

> [JSON Compatible Encoder - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/encoder/)

在某些情况下我们可能需要将数据类型(比如Pydantic model)转换为 JSON 兼容的数据类型(如 dict, list 等等)

例如, 如果我们需要将他存入数据库, FastAPI 提供了 `jsonable_encoder()` 函数

---

## 使用 `jsonable_encoder`

我们假设当前我们有一个只接受 JSON 兼容数据的数据库 `fake_db`.

例如, 它不接受 `datetime` 对象, 因为这些对象与 JSON 不兼容

所以, `datetime` 对象必须转化为包含 ISO 格式数据的 `str`

同样, 这个数据库不会接收到 Pydantic model(带有属性的对象), 只接收 `dict`

我们可以使用 `jsonable_encoder` , 它接收一个对象, 比如 Pydantic model, 并返回一个兼容 JSON 的版本

::: tabs

@tab:active Python 3.6~3.10

```python
from datetime import datetime
from typing import Optional

from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

fake_db = {}


class Item(BaseModel):
    title: str
    timestamp: datetime
    description: Optional[str] = None


app = FastAPI()


@app.put("/items/{id}")
def update_item(id: str, item: Item):
    json_compatible_item_data = jsonable_encoder(item)
    fake_db[id] = json_compatible_item_data

```

@tab 其它



:::

在这个实例中, 它将 Pydantic 模型转化为 dict, 将 `datetime` 转化为 `str`;

调用它的结果可以用 Python 标准 `json.dumps ()` 进行编码。

它不返回包含 JSON 格式数据(以字符串形式)的大型 `str`。它返回一个 Python 标准数据结构(例如 `dict`) ，其值和子值都与 JSON 兼容。

-----

# OAuth2.0 的授权模式

- 授权码授权模式（Authorization Code Grant）
- 隐式授权模式（Implicit Grant）
- **密码授权模式（Resource Owner Password Credentials Grant）**
- 客户端凭证授权模式（Client Credentials Grant）

---

## 密码授权模式(Resource Owner Password Credentials Grant)

![image-20220430201704453](http://cdn.ayusummer233.top/img/202204302017634.png)

---

## OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer

```python
from fastapi.security import (
    OAuth2PasswordBearer,   # OAuth2的认证方式
)

####### OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer #######

"""
OAuth2PasswordBearer是接收URL作为参数的一个类: 
客户端会向该URL发送username和password参数, 然后得到一个Token值
OAuth2PasswordBearer并不会创建相应的URL路径操作, 
只是指明客户端用来请求Token的URL地址
当请求到来的时候, FastAPI会检查请求的Authorization头信息, 
如果没有找到Authorization头信息,或者头信息的内容不是Bearer token,
它会返回401状态码(UNAUTHORIZED)
"""

# 请求Token的URL地址 http://127.0.0.1:8000/chapter06/token
oauth2_schema = OAuth2PasswordBearer(tokenUrl="/chapter06/token")  


@app06.get("/oauth2_password_bearer")
async def oauth2_password_bearer(token: str = Depends(oauth2_schema)):
    return {"token": token}
```

---

## 基于 Password 和 Bearer token 的 OAuth2 认证

```python
####### 基于 Password 和 Bearer token 的 OAuth2 认证 #######

# 模拟数据库信息
fake_users_db = {
    "john snow": {
        "username": "john snow",
        "full_name": "John Snow",
        "email": "johnsnow@example.com",
        "hashed_password": "fakehashedsecret",
        "disabled": False,
    },
    "alice": {
        "username": "alice",
        "full_name": "Alice Wonderson",
        "email": "alice@example.com",
        "hashed_password": "fakehashedsecret2",
        "disabled": True,
    },
}


def fake_hash_password(password: str):
    """对密码进行加密"""
    return "fakehashed" + password


class User(BaseModel):
    """用户信息schema"""
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None


class UserInDB(User):
    hashed_password: str


@app06.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """登录操作
    密码加密使用前缀字符串的形式
    token使用username
    """
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect username or password-用户不存在")
    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        print(hashed_password, user.hashed_password)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect username or password-密码错误")
    return {"access_token": user.username, "token_type": "bearer"}


def get_user(db, username: str):
    """获取用户信息"""
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def fake_decode_token(token: str):
    """解码token"""
    user = get_user(fake_users_db, token)
    return user


async def get_current_user(token: str = Depends(oauth2_schema)):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            # OAuth2的规范，如果认证失败，请求头中返回“WWW-Authenticate”
            headers={"WWW-Authenticate": "Bearer"},  
        )
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Inactive user")
    return current_user


@app06.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    """
    活跃用户返回用户信息  
    不活跃用户返回 Inactive user
    """
    return current_user

```

`login` 执行逻辑:

```mermaid
flowchart LR
  user[用户] --username<br>password<br>查数据库--> isIn

  subgraph login
  isIn{username 是否在数据库中}
  isIn --否--> error400[用户名或密码错误]
  isIn --是--> create_user[解构数据库查询结果生成user]
  create_user --fake_hash_password<br>生成hash密码-->iscorrect{密码是否匹配}
  iscorrect --否--> error400
  iscorrect --是--> login_success[登录成功<br>生成并返回access_token]
  end
```

`read_users_me` 执行逻辑:

```mermaid
flowchart LR
  subgraph read_users_me
    subgraph get_current_active_user
      subgraph get_current_user
        subgraph fake_decode_token
          subgraph get_user
            username(username)
          end
          username --查询数据库-->userInDb(解构数据库中数据)
        end
        userInDb --> isExist{是否存在}
        isExist --False--> error401[UNAUTHORIZED] 
        isExist --True--> user(user)
      end
      user --查询user.disabled--> isActive{是否活跃}
      isActive --disabled==True<br>不活跃 -->inactive[Inactive user]
    end
    isActive --disabled==False<br>活跃 --> userInfo[返回用户信息]
  end
  
```



![image-20220430212806528](http://cdn.ayusummer233.top/img/202204302128756.png)

![image-20220430212933083](http://cdn.ayusummer233.top/img/202204302129260.png)

![image-20220430213118220](http://cdn.ayusummer233.top/img/202204302131447.png)

---

## 开发基于 JSON Web Tokens 的认证

> [【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=32)

![image-20220430222152045](http://cdn.ayusummer233.top/img/202204302221258.png)

```python
# 先更新下模拟数据库吗修改下 hash 密码使其更接近真实值:
fake_users_db.update({
    "john snow": {
        "username": "john snow",
        "full_name": "John Snow",
        "email": "johnsnow@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
})
# 生成密钥 openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"  
# 加密算法
ALGORITHM = "HS256"  
# 访问令牌过期分钟
ACCESS_TOKEN_EXPIRE_MINUTES = 30  
```

```python
# from datetime import (
#     datetime, 
#     timedelta
# )
# from jose import (
#     JWTError, 
#     jwt
# )
# from passlib.context import CryptContext    # 用于对用户传过来的密码进行加密

pwd_context = CryptContext(
    schemes=["bcrypt"],     # 密码加密算法使用 bcrypt
    deprecated="auto"   
)
```

```python
# 用于接收用户名密码, 创建 token 的接口
oauth2_schema = OAuth2PasswordBearer(tokenUrl="/chapter06/jwt/token")


def verity_password(plain_password: str, hashed_password: str):
    """对密码进行校验"""
    return pwd_context.verify(plain_password, hashed_password)


def jwt_get_user(db, username: str):
    """获取当前用户并返回解构信息
    """
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def jwt_authenticate_user(db, username: str, password: str):
    """
    验证用户是否存在以及  
    验证用户名和密码是否匹配
    """
    user = jwt_get_user(db=db, username=username)
    if not user:
        return False
    if not verity_password(plain_password=password, hashed_password=user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """创建token  
    :param data: 包含用户信息的字典
    :param expires_delta: token 过期时间  
    copy 一份用户信息用户编码

    """
    to_encode = data.copy()
    # 如果传入了过期时间就更新下过期时间: 当前时间+过期时间
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        # 没传入过期时间的话默认设置过期时间为 15 min
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    # 创建编码后的 jwt
    encoded_jwt = jwt.encode(
        claims=to_encode, 
        key=SECRET_KEY, 
        algorithm=ALGORITHM
    )
    return encoded_jwt


@app06.post("/jwt/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    """创建并返回 Token  
    :param form_data: 表单数据
    """
    # jwt 校验
    user = jwt_authenticate_user(db=fake_users_db, username=form_data.username, password=form_data.password)
    # 认证失败则抛出异常: 用户名或密码不正确
    if not user:
        raise HTTPException(
            status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    # 获取 token 过期时间
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    # 创建 token
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


async def jwt_get_current_user(token: str = Depends(oauth2_schema)):
    """获取当前用户
    :param token: jwt token
    """
    # 定义错误返回信息
    credentials_exception = HTTPException(
        status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        # jwt 解码
        payload = jwt.decode(token=token, key=SECRET_KEY, algorithms=[ALGORITHM])
        # 获取解码后的用户名
        username = payload.get("sub")
        # 如果用户名不存在则抛出异常
        if username is None:
            raise credentials_exception
    # 如果解码失败则抛出异常
    except JWTError:
        raise credentials_exception
    user = jwt_get_user(db=fake_users_db, username=username)
    if user is None:
        raise credentials_exception
    return user


async def jwt_get_current_active_user(current_user: User = Depends(jwt_get_current_user)):
    """获取活跃用户"""
    if current_user.disabled:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Inactive user")
    return current_user


@app06.get("/jwt/users/me")
async def jwt_read_users_me(current_user: User = Depends(jwt_get_current_active_user)):
    """获取当前用户信息"""
    return current_user

```

![image-20220430225118757](http://cdn.ayusummer233.top/img/202204302251027.png)

---
# SQL(Relational) Databases

示例项目结构:

- `sql_app`
    - `__init__.py`
    - `crud.py`
    - `database.py`
    - `main.py`
    - `models.py`
    - `schemas.py`

> `__init__.py` 是个空文件，它只是为了让 Python 识别这是一个 module。


## 创建 SQLAlchemy

> [SQLAlchemy](https://www.sqlalchemy.org/)

首先要装下  `SQLAlchemy` 库

```bash
pip install sqlalchemy
```

编辑 `database.py` 文件

### 引入 SQLAlchemy 库

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
```

### 为 SQLAlchemy 创建 database URL

```python
SQLALCHEMY_DATABASE_URL = "sqlite:///E:/ProgrammingLessons/Vue/vite/ViteLearningBackend/ViteLearningBackend.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"
```

在本次示例中, 使用 SQLite 作为数据库, 在 `E:/ProgrammingLessons/Vue/vite/ViteLearningBackend/` 目录下有一个 `ViteLearningBackend.db` 数据库文件, 因此 URL 最后部分是 `E:/ProgrammingLessons/Vue/vite/ViteLearningBackend/ViteLearningBackend.db`

![20220419093125](http://cdn.ayusummer233.top/img/20220419093125.png)

如果使用 `PostgreSQL` 的话可以如注释这般使用

使用其他数据库的话把 `sqlite` 字段相应的换成  `MySQL`, `mariadb` 等即可

### 创建 SQLAlchemy engine

```python
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
```

`connect_args={"check_same_thread": False}` 字段只有在使用 `SQLite` 时才需要

> SQLite 默认只允许一个线程通信, 假设每个线程处理一个独立的请求
> 
> 这是为了防止意外地为不同请求共享相同的 connection
> 
> 但是在 FastAPI 的函数中, 不止一个 thread 可以向 database 发起请求, 所以我们需要让 SQLIte 知道它应当通过  `connect_args = {"check_same_thread": False}` 允许这些 thread 向数据库发请求

### 创建一个 SessionLocal 类

SessionLocal 类的每个实例都是一个 database session, 不过该类本身并非 database session(数据库会话)

但是一旦我们创建了一个 SessionLocal 类的示例, 那么这个实例将会成为实际的 database session

我们将其命名为 SessionLocal 以与从 SQLAlchemy 中引入的 Session 相区分

使用 sessionmaker 来创建一个 SessionLocal 类

```python
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
```

### 创建一个 Base 类

使用 declarative_base 来返回一个类赋给 Base

后面我们会继承这个类来创建每个数据库的 model 和 class(ORM models)

```python
Base = declarative_base()
```

## 创建 database models

编辑 `models.py`

### 从 Base 类创建 SQLAlchemy model

> SQLAlchemy 使用术语 "model" 来指代这些与数据库交互的 class 及 instance
> 
> 不过需要注意的是 Pydantic 也使用术语 "model" 来指代不同的东西, data validation, coversion, documentation classes 以及 instances

从 `database.py` 引入 `Base` 类

创建继承于 Base 类的子类

这些子类都是 SQLAlchemy model

```python
from .database import Base

class Admin(Base):
    __tablename__ = "admin"

class Good(Base):
__tablename__ = "Good"
```

```python
# 因为这里是直接在 jupyter笔记本里写的, 已经运行过代码块了直接使用 Base 即可
# from .database import Base
from tokenize import Double
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, FLOAT
from sqlalchemy.orm import relationship

class Admin(Base):
    __tablename__ = "admin"

    uid = Column(Integer, primary_key=True, index=True)
    password = Column(String)

class Good(Base):
    __tablename__ = "Good"

    GoodID = Column(Integer, primary_key=True, index=True)
    GoodName = Column(String)
    GoodPrice = Column(FLOAT)
```

`__tablename__` 属性告诉 SQLAlchemy 在数据库中为每个 model 使用的表名


---

### 创建 model attributes/columns

创建所有 model 的 attribute

这些 attribute 对应的表示数据库相应表中的一列

我们使用 SQLAlchemy 中的 `Column` 作为默认值

然后传递一个 SQLAlchemy 类 "type", 作为 `Interger`, `String`, 或者 `Boolean`, 将数据库中的字段类型定义为一个参数

![20220419103008](http://cdn.ayusummer233.top/img/20220419103008.png)


---

### 创建 relationships

> 个人写的示例中没有定义外键, 因为后面要加速开发原型, 所以个人示例比较简略
> 
> 因此这部分搬下官方示例

我们使用 SQLAlchemy ORM 提供的  `relationship` 来创建 relationship

这将或多或少称为一个 "magic" attribute, 他讲包含与此表关联的其他表的值

![20220419103414](http://cdn.ayusummer233.top/img/20220419103414.png)

当我们从 `User` 中访问 `items` 属性时, 比如 `my_user.items`, 他将生成一个 `Item` SQLAlchemy models 列表(来自 `items` 表), 其中有一个外键指向 `users` 表中的这个记录

当访问 `my_usr.items` 时, SQLAlchemy 实际上会从数据库的  `items` 表中查询到这些 items并填入这里

当我们访问 `Item` 中的 `owner` 属性时, 他将包含来自 `users` 表的 `User` SQLAlchemy model; 他将使用 `onwer_id`  attribute/column 及其外键来决定从 `users` 表中获取哪些记录

---

## 创建 Pydantic model

编辑 `schemas.py`

> 为了避免 `SQLAlchemy models` 和 `Pydantic models` 之间的混淆，我们在 `models.py` 中创建 `SQLAlchemy models`, 在  `shcemas.py` 中创建`Pydantic models`

> 这些 `Pydantic models` 或多或少地定义了一个`"schema"`(一个有效的 `data shape`)。

> 因此，这将有助于我们避免在使用二者时可能产生的混淆

### 创建 initial Pydantic models / schemas

创建一个 `StaffBase Pydantic model` (或者说 `schema`)  一遍在创建和读取数据时由公共属性

然后创建一个 `StaffCreate` 继承自 `StaffBase`

![20220425192442](http://cdn.ayusummer233.top/img/20220425192442.png)

---

#### SQLAlchemy style 和 Pydantic style

在 SQLAlchemy models 中定义属性时使用的是 `=`, 并将类型作为参数传给 `Column`, 如下:

```python
name = Column(String)
```

然而在 Pydantic models 中使用 `:` 声明这些类型, 如下:

```python
name: str
```

---

### 创建用于 reading / returning 的 Pydantic models / schemas

创建 Pydantic models(schemas), 当从 API 返回数据时, 将在读取数据时使用它

例如, 在创建一个 staff 时我们不知道他的 id 是什么, 但是当读取他(从 API 返回他) 时, 我们已经知道它的 ID

![20220425193620](http://cdn.ayusummer233.top/img/20220425193620.png)

---

### 使用 Pydantic 的 orm_mode

现在, 在 Pydantic models 中为了方便读取, 给 Staff 类添加一个内部的 Config 类

这个 Config 类用于向 Pydantic 提供配置

在 Config 类中, 将 orm_mode 属性设置为 True

> 需要注意的是使用 `=` 进行赋值  
> 它不像前面一样使用 `:` 进行类型声明  
> 这是设置一个配置值而非声明一个类型

Pydantic 的 orm-mode 会告诉 Pydantic model 读取数据, 即便它并非是个 dict 而是 ORM model(或者其他任何具有属性的任意对象)

如此一来, 不再只是类似如下操作一样从 dict 中获取类型:

```python
id = data['id']
```

它也会尝试从属性中获取到 id, 如:

```python
id = data.id
```

有了这些, Pydantic model 就和 ORM 兼容了, 并且你可以只在 path 操作中的 `response_model` 参数中声明它

您将能够返回一个 database model, 并从中读取数据

---

#### 关于 ORM mode 的技术细节

[关于 ORM mode 的技术细节](https://fastapi.tiangolo.com/zh/tutorial/sql-databases/#technical-details-about-orm-mode)

SQLAlchemy 和许多其他的默认方法是“lazy loading”。

这意味着，例如，它们不会从数据库中获取关系数据，除非您尝试访问将包含该数据的属性。

例如，访问 items 属性:

```python
current_user.items
```

将使 SQLAlchemy 转到 items 表并获取该用户的条目，但不是在此之前。

如果没有 orm_mode，则如果从路径操作返回 SQLAlchemy 模型，它将不包含关系数据。

即使你在你的 Pydantic 模型中声明了这些关系。

但是在 ORM 模式下，由于 Pydantic 本身将尝试从属性访问它需要的数据(而不是假设 dict) ，你可以声明你想要返回的特定数据，它将能够去获取它，甚至是从 ORM。


---

## CRUD utils

编辑 `crud.py`

在这个文件中，我们将使用可重用的函数与数据库中的数据进行交互。

CRUD 来自: Creat(创建)、Read(读取)、Update(更新) 和 Delete(删除)。

```python
'''
Author: 咸鱼型233
Date: 2022-04-25 16:35:15
LastEditors: 咸鱼型233
LastEditTime: 2022-04-25 20:29:15
FilePath: \VbenBackend\sql_app\curd.py
Description: 
Copyright (c) 2022 by 咸鱼型233, All Rights Reserved.
'''
'''
-*- encoding: utf-8 -*-
@文件    :curd.py
@时间    :2022/04/18 21:07:48
@作者    :咸鱼型233
@说明    :
'''
from sqlalchemy.orm import Session

from . import models, schemas

# 通过 id 读取 Staff
def get_staff(db: Session, id: int):
    return db.query(models.Staff).filter(models.Staff.id == id).first()

# 通过 staffNo 读取 Staff
def get_staff_by_staffNo(db: Session, staffNo: str):
    return db.query(models.Staff).filter(models.Staff.staffNo == staffNo).first()

# 获取所有 Staff
def get_staffs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Staff).offset(skip).limit(limit).all()

# 创建 Staff
def create_staff(db: Session, staff: schemas.StaffCreate):
    db_staff = models.Staff(**staff.dict())
    db.add(db_staff)
    db.commit()
    db.refresh(db_staff)
    return db_staff

# 更新 staffNo
def update_staff_staffNo(db: Session, id: int, staffNo: str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.staffNo = staffNo
    db.commit()
    return db_staff

# 更新 name
def update_staff_name(db: Session, id: int, name: str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.name = name
    db.commit()
    return db_staff

# 更新 sex
def update_staff_sex(db:Session, id: int, sex:str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.sex = sex
    db.commit
    return db_staff

# 更新 birthday
def update_staff_birthday(db:Session, id: int, birthday:str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.birthday = birthday
    db.commit
    return db_staff

# 更新 phone
def update_staff_phone(db:Session, id: int, phone:str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.phone = phone
    db.commit
    return db_staff

# 更新 education
def update_staff_education(db:Session, id: int, education:str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.education = education
    db.commit
    return db_staff

# 更新 namePinyin
def update_staff_namePinyin(db:Session, id: int, namePinyin:str):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db_staff.namePinyin = namePinyin
    db.commit
    return db_staff


# 删除 Staff
def delete_staff(db: Session, id: int):
    db_staff = db.query(models.Staff).filter(models.Staff.id == id).first()
    db.delete(db_staff)
    db.commit()
    return db_staff

```

---

## Main FastAPI app

编辑 `main.py`


---

### 创建数据库表

用一种非常简单的方式创建数据库表

```python
models.Base.metadata.create_all(bind=engine)
```

---

### 创建 dependency

现在使用我们在 `sql_app/databases.py` 文件中创建的 `SessionLocal` 类创建一个依赖项。

我们需要每个请求都有一个独立的数据库会话/连接(SessionLocal) ，在所有请求中使用同一个会话，然后在请求完成后关闭它。

然后为下一个请求创建一个新会话。

为此，我们将创建一个带有 yield 的新 dependency，如前面关于 Dependencies 与 yield 的部分所解释的那样。

我们的依赖项将创建一个新的 SQLAlchemy SessionLocal，它将在单个请求中使用，然后在请求完成后关闭它。

```python
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

> 我们将 `SessionLocal()` 的创建和请求的处理放在一个 try 块中。  
> 然后我们在 finally 块关闭它。
> 这样我们就可以确保在请求之后数据库会话总是关闭的。即使在处理请求时出现异常。
> 但是您不能从退出代码(在 yield 之后)中引发另一个异常

然后，当在路径操作函数中使用依赖项时，我们使用直接从 SQLAlchemy 导入的 Session 类型声明它。

这样我们就可以在路径操作函数中获得更好的编辑器支持，因为编辑器会知道 db 参数的类型是 Session:

---

## Prisma

> [What is the best tool or ORM to manage database in Fast API? · Issue #4659 · tiangolo/fastapi (github.com)](https://github.com/tiangolo/fastapi/issues/4659#issuecomment-1143744431)
>
> [Prisma Client Python (prisma-client-py.readthedocs.io)](https://prisma-client-py.readthedocs.io/en/stable/)
>
> [prisma/prisma: Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB (Preview) (github.com)](https://github.com/prisma/prisma)
>
> [Prisma - Next-generation Node.js and TypeScript ORM for Databases](https://www.prisma.io/)

[TODO:  前端 TS 能用, 后端可以用 Prisma-python, 看起来比 SQLAlchemy 好用, 下个项目准备上 Prisma && Prisma-python]



---

---

# 数据库操作(慕课网)

## 配置 SQLAlchemy ORM

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# sqlite 数据库 url
SQLALCHEMY_DATABASE_URL = "sqlite:///E:/GithubProject/Vben/VbenBackend/static/data/vben.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

# 创建 SQLAlchemy 引擎
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, 
    encoding='utf-8',
    # echo=True表示引擎将用repr()函数记录所有语句及其参数列表到日志
    echo=True,
    # 由于SQLAlchemy是多线程，
    # 指定check_same_thread=False来让建立的对象任意线程都可使用。
    # 这个参数只在用SQLite数据库时设置
    connect_args={"check_same_thread": False}
)

# 在SQLAlchemy中，CRUD都是通过会话(session)进行的，
# 所以我们必须要先创建会话，每一个SessionLocal实例就是一个数据库session
# 创建SessionLocal 类
SessionLocal = sessionmaker(
    # commit()是指提交事务，将变更保存到数据库文件
    autocommit=False, 
    # flush()是指发送数据库语句到数据库，但数据库不一定执行写入磁盘；
    autoflush=False, 
    bind=engine
)

# 创建一个 Base 类, 后面继承这个类来创建每个数据库的 ORM Model
Base = declarative_base()

```

---

## DataBase Models

> [【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=35)

```python
'''
Author: 咸鱼型233
Date: 2022-04-28 16:38:14
LastEditors: 咸鱼型233
LastEditTime: 2022-04-30 23:54:14
FilePath: \VbenBackend\app\model.py
Description: database model
Copyright (c) 2022 by 咸鱼型233, All Rights Reserved.
'''
from xml.etree.ElementTree import Comment
from sqlalchemy import (
    Boolean, 
    Column, 
    ForeignKey, 
    Integer, 
    String, 
    FLOAT,
    BigInteger,
    Date,
    DateTime,
    func, 
)
from sqlalchemy.orm import relationship
from .database import Base

# 部门/科室类
class Department(Base):
    """部门类
    """
    __tablename__ = "department"    # 表名

    did = Column(Integer, primary_key=True, nullable=False, comment = "部门id")
    dname = Column(String(30), nullable=False, comment="部门名称")
    
    # 关联 <- staff.did
    staffs = relationship("Staff", back_populates="reDid")

    # 当数据创建或者更新时插入当前时间
    created_at = Column(DateTime, server_default=func.now(), comment="创建时间")
    updated_at = Column(DateTime, server_default=func.now(), 
                            onupdate=func.now(), comment="更新时间")

    # # 排序相关(新版 SQLAlchemy 已弃用)
    # __mapper_args__ = {
    #     # 倒序的话可以使用   "order_by": did.desc()
    #     "order_by": did
    # }

    # 显示类对象
    def __repr__(self):
        return f"<Department {self.did}_{self.dname}>"


# 员工类
class Staff(Base):
    """员工类
    """
    __tablename__ = "staff"   # 表名

    sid = Column(Integer, primary_key=True, nullable=False, comment="员工id")
    sname = Column(String(30), nullable=False, comment="员工姓名")
    did = Column(Integer, ForeignKey("department.did"), comment="员工所属单位id")     # 外键

    # 外键 -> department.did
    reDid = relationship("Department", back_populates="staffs")

    # 当数据创建或者更新时插入当前时间
    created_at = Column(DateTime, server_default=func.now(), comment="创建时间")
    updated_at = Column(DateTime, server_default=func.now(), 
                            onupdate=func.now(), comment="更新时间")

    # # 排序相关(新版 SQLAlchemy 已弃用)
    # __mapper_args__ = {
    #     # 倒序的话可以使用   "order_by": did.desc()
    #     "order_by": sid
    # }

    # 显示类对象
    def __repr__(self):
        return f"<Staff {self.sid}_{self.sname}_{self.did}>"

# 用户类
class User(Base):
    """用户类
    """
    __tablename__ = "user"

    uid = Column(Integer, primary_key=True, nullable=False,  autoincrement=True, comment="用户id")
    account = Column(Integer, nullable=False, comment="账号")
    password = Column(String(30), nullable=False, comment="密码")
    uname = Column(String(30), comment="用户名")
    role = Column(Integer, nullable=False, comment="身份组")
```

> [__mapper_args__ = {"order_by":...-慕课网 (imooc.com)](https://www.imooc.com/qadetail/353354)
>
> 新版本的 sqlalchemy 丢弃了 __mappter_args__ 当中设置的方法
>
> 应当用 db.query().order_by() 直接在 Query 对象后面显示地调用 order_by 函数
>
> 例如:
>
> ```python
> db.query(models.City).order_by(models.City.province).offset().limit().all()
> 
> db.query(models.Data).order_by(models.Data.confirmed)....
> ```

---

# 大型工程的目录结构设计

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



# 中间件

> [【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=38)

对于每一个 `request` 请求到来, 在到达应用(业务逻辑处理)之前会先经过一/多层中间件处理后到达应用(视图, 函数等) , 在返回前经过一/多层中间件处理, 返回结果给客户端

可以使用中间件拦截所有的 `request` 请求或者 `response` 响应

![image-20220501005558644](http://cdn.ayusummer233.top/img/202205010055975.png)

在 `main app` 中

```python
@app.middleware('http')
async def add_process_time_header(request: Request, call_next):
    """拦截所有 request 请求, 计算其在框架中的处理时间并把结果加载 response header 中
    :param request: request 请求
    :param call_next: 将接收request请求做为参数
    """
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers['X-Process-Time'] = str(process_time)  # 添加自定义的以“X-”开头的请求头
    return response
```

![image-20220501010427259](http://cdn.ayusummer233.top/img/202205010104457.png)

> **需要注意的是带yield的依赖的退出部分的代码 和 后台任务 会在中间件之后运行**

---

# 跨域资源共享

> [CORS（跨域资源共享） - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/cors/)

[CORS 或者「跨域资源共享」](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 指浏览器中运行的前端拥有与后端通信的 JavaScript 代码，而后端处于与前端不同的「源」的情况。

---

## 源

源是协议（`http`，`https`）、域（`myapp.com`，`localhost`，`localhost.tiangolo.com`）以及端口（`80`、`443`、`8080`）的组合。

因此，这些都是不同的源：

- `http://localhost`
- `https://localhost`
- `http://localhost:8080`

即使它们都在 `localhost` 中，但是它们使用不同的协议或者端口，所以它们都是不同的「源」。

---

## 步骤

假设你的浏览器中有一个前端运行在 `https://localhost:3100`，并且它的 JavaScript 正在尝试与运行在 `http://localhost:8000` 的后端通信

然后，浏览器会向后端发送一个 HTTP `OPTIONS` 请求，如果后端发送适当的 headers 来授权来自这个不同源（`https://localhost:3100`）的通信，浏览器将允许前端的 JavaScript 向后端发送请求。

为此，后端必须有一个「允许的源」列表。

在这种情况下，它必须包含 `https://localhost:3100`，前端才能正常工作。

---

## 通配符

也可以使用 `"*"`（一个「通配符」）声明这个列表，表示全部都是允许的。

但这仅允许某些类型的通信，不包括所有涉及凭据的内容：像 Cookies 以及那些使用 Bearer 令牌的授权 headers 等。

因此，为了一切都能正常工作，最好显式地指定允许的源。

---

## 使用 CORSMiddleWare

你可以在 **FastAPI** 应用中使用 `CORSMiddleware` 来配置它。

- 导入 `CORSMiddleware`。
- 创建一个允许的源列表（由字符串组成）。
- 将其作为「中间件」添加到你的 **FastAPI** 应用中。

你也可以指定后端是否允许：

- 凭证（授权 headers，Cookies 等）。
- 特定的 HTTP 方法（`POST`，`PUT`）或者使用通配符 `"*"` 允许所有方法。
- 特定的 HTTP headers 或者使用通配符 `"*"` 允许所有 headers。

```python
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:3100",
    "https://localhost:3100",
]

app = FastAPI()

# 跨域资源共享配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 跨域信任列表
    allow_credentials=True, # 允许使用整数
    allow_methods=["*"],    # 允许跨域的方法, *(通配符) 表示全部允许
    allow_headers=["*"],    # 允许的请求头, * 表示全部允许
)
```

默认情况下，这个 `CORSMiddleware` 实现所使用的默认参数较为保守，所以你需要显式地启用特定的源、方法或者 headers，以便浏览器能够在跨域上下文中使用它们。

支持以下参数：

- `allow_origins` - 一个允许跨域请求的源列表。例如 `['https://example.org', 'https://www.example.org']`。你可以使用 `['*']` 允许任何源。
- `allow_origin_regex` - 一个正则表达式字符串，匹配的源允许跨域请求。例如 `'https://.*\.example\.org'`。
- `allow_methods` - 一个允许跨域请求的 HTTP 方法列表。默认为 `['GET']`。你可以使用 `['*']` 来允许所有标准方法。
- `allow_headers` - 一个允许跨域请求的 HTTP 请求头列表。默认为 `[]`。你可以使用 `['*']` 允许所有的请求头。`Accept`、`Accept-Language`、`Content-Language` 以及 `Content-Type` 请求头总是允许 CORS 请求。
- `allow_credentials` - 指示跨域请求支持 cookies。默认是 `False`。另外，允许凭证时 `allow_origins` 不能设定为 `['*']`，必须指定源。
- `expose_headers` - 指示可以被浏览器访问的响应头。默认为 `[]`。
- `max_age` - 设定浏览器缓存 CORS 响应的最长时间，单位是秒。默认为 `600`。

中间件响应两种特定类型的 HTTP 请求……

---

### CORS 预检请求

这是些带有 `Origin` 和 `Access-Control-Request-Method` 请求头的 `OPTIONS` 请求。

在这种情况下，中间件将拦截传入的请求并进行响应，出于提供信息的目的返回一个使用了适当的 CORS headers 的 `200` 或 `400` 响应。

---

### 简单请求

任何带有 `Origin` 请求头的请求。在这种情况下，中间件将像平常一样传递请求，但是在响应中包含适当的 CORS headers。

---

# 后台任务

> [【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=41)
>
> [Background Tasks - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/background-tasks/)

最典型的使用是: 用户注册之后发邮件

用户能够在前端立刻得到返回, 但是接口中实行的是比较耗时的任务

引入 `fastapi.BackgroundTask` 后通过在异步函数中调用其中的 `add_task` 来添加后台任务

```python
####### Background Tasks 后台任务 #######
import os
from fastapi import APIRouter, BackgroundTasks, Depends

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), './README.md'))

def bg_task(framework: str):
    """已续写的形式用 utf-8 编码写入README.md"""
    with open(file_path, mode="a", encoding="utf-8") as f:
        f.write(f"\n## {framework} 框架精讲")


@app08.post("/background_tasks")
async def run_bg_task(framework: str, background_tasks: BackgroundTasks):
    """
    :param framework: 被调用的后台任务函数的参数
    :param background_tasks: FastAPI.BackgroundTasks
    :return:
    """
    background_tasks.add_task(bg_task, framework)
    return {"message": "任务已在后台运行"}


def continue_write_readme(background_tasks: BackgroundTasks, q: Optional[str] = None):
    if q:
        background_tasks.add_task(bg_task, 
        "\n> 整体的介绍 FastAPI, 快速上手开发, 结合 API 交互文档逐个讲解核心模块的使用\n")
    return q


@app08.post("/dependency/background_tasks")
async def dependency_run_bg_task(q: str = Depends(continue_write_readme)):
    """用依赖注入的方式导入后台任务
    """
    if q:
        return {"message": "README.md更新成功"}

```

---

## 与依赖注入一起使用

> [Background Tasks - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/background-tasks/#dependency-injection)
>
> ---

使用 `BackgroundTasks` 还可以与依赖注入系统一起工作, 你可以在多个层次上声明一个 `BackgroundTasks`  类型的参数(可以在 `path operation` 函数中, 在 `dependency(dependable)` 中, 亦可以在 `sub-dependency` 等处声明)

::: tabs

@tab:active Python 3.10 and above

```python
# Python 3.10 and above
from fastapi import BackgroundTasks, Depends, FastAPI

app = FastAPI()


def write_log(message: str):
    with open("log.txt", mode="a") as log:
        log.write(message)


def get_query(background_tasks: BackgroundTasks, q: str | None = None):
    if q:
        message = f"found query: {q}\n"
        background_tasks.add_task(write_log, message)
    return q


@app.post("/send-notification/{email}")
async def send_notification(
    email: str, background_tasks: BackgroundTasks, 
    q: str = Depends(get_query)
):
    message = f"message to {email}\n"
    background_tasks.add_task(write_log, message)
    return {"message": "Message sent"}

```

:::

![image-20221031174537122](http://cdn.ayusummer233.top/img/202210311745358.png)

在这个示例中 query 参数传入 `email` 和 `q`

接口在处理完 `email` 生成 `message`  并返回给用户后会将 `message` 传给后台任务 `weite_log` 来记录日志

如果 query 参数中有 `q`, 那么它会在 `get_query` 函数中处理然后创给后台任务 `write_log` 来记录日志

---

# 高级用户指南

## 启动和停止事件

> [Events: startup - shutdown - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/advanced/events/?h=log#events-startup-shutdown)
>
> ---

你可以定义  `event handlers(functions)` 让其在应用程序启动前，或在应用程序关闭时执行。

这些函数可以是同步的也可以是异步的

> 需要注意的是你只能在 `main application` 中定义这种函数而不能在 [sub application](https://fastapi.tiangolo.com/zh/advanced/sub-applications/) 中定义它们

---

### `startup` 事件

如果你需要在应用开始前执行一个函数, 那么可以使用 `startup` 事件来定义这样一个函数

```python
from fastapi import FastAPI

app = FastAPI()

items = {}


@app.on_event("startup")
async def startup_event():
    items["foo"] = {"name": "Fighters"}
    items["bar"] = {"name": "Tenders"}


@app.get("/items/{item_id}")
async def read_items(item_id: str):
    return items[item_id]

```

在此事例中, 在应用启动前将会通过 `startup_event` 函数初始化 `items` 字典

---

我们可以在应用启动前记录 uvicorn 产生的日志

```python
import logging

@app.on_event("startup")
async def startup_event():
    logger = logging.getLogger("uvicorn.access")
    handler = logging.handlers.RotatingFileHandler("api.log",mode="a",maxBytes = 100*1024, backupCount = 3)
    handler.setFormatter(logging.Formatter("%(asctime)s - %(levelname)s - %(message)s"))
    logger.addHandler(handler)
```

这样记录的话, uvicorn 的输出就会记录在 `api.log` 中

---

### `shutdown` 事件

 与 `startup` 事件类似, 你也可以通过 `shutdown` 事件定义一个函数以在应用关闭后执行

```Python
from fastapi import FastAPI

app = FastAPI()


@app.on_event("shutdown")
def shutdown_event():
    with open("log.txt", mode="a") as log:
        log.write("Application shutdown")


@app.get("/items/")
async def read_items():
    return [{"name": "Foo"}]

```

在此示例中, 在应用关闭后将会将 `Application shutdown` 写入到 `log.txt` 的末尾

> 需要注意的是, 在此事例中我们用到了 `open` 函数, 其不可以用于异步, 因此这里使用了 `def` 而非 `async def`

----



---

# 测试用例

> [Testing - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/zh/tutorial/testing/)
>
> [【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=43)

需要使用 `fastapi.testclient.TestClient` 以及 `pytest`

```python
#!/usr/bin/python3
# -*- coding:utf-8 -*-
# __author__ = '__Jack__'

from fastapi.testclient import TestClient

from .run import app

####### Testing 测试用例 #######

client = TestClient(app)  # 先pip install pytest


def test_run_bg_task():
    """函数名用“test_”开头是 pytest 的规范。注意不是 async def
    """
    response = client.post(url="/chapter08/background_tasks?framework=FastAPI")
    assert response.status_code == 200
    assert response.json() == {"message": "任务已在后台运行"}


def test_dependency_run_bg_task():
    response = client.post(url="/chapter08/dependency/background_tasks")
    assert response.status_code == 200
    assert response.json() is None


def test_dependency_run_bg_task_q():
    response = client.post(url="/chapter08/dependency/background_tasks?q=1")
    assert response.status_code == 200
    assert response.json() == {"message": "README.md更新成功"}

```

测试使用 `pytest` 进行测试

在命令行中 `cd` 到测试文件所在目录然后 `pytest`

![image-20220501020126599](http://cdn.ayusummer233.top/img/202205010201866.png)

---

# 运行

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

## 放在主程序中运行

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

# Pydantic

> [pydantic (helpmanual.io)](https://pydantic-docs.helpmanual.io/)
>
> [Python笔记：Pydantic库简介_Espresso Macchiato的博客-CSDN博客_pydantic](https://blog.csdn.net/codename_cys/article/details/107675748#pydantic库简介)

## 数据类型

### 多种数据类型(Unions)

> [Field Types - pydantic (helpmanual.io)](https://pydantic-docs.helpmanual.io/usage/types/#unions)
>
> [Python笔记：Pydantic库简介_Espresso Macchiato的博客-CSDN博客_pydantic](https://blog.csdn.net/codename_cys/article/details/107675748#2-可选数据类型)

`Union` type 允许 Model属性支持不同的类型,例如:

::: tabs

@tab:active Python 3.7~3.9

```python
# Python 3.7-3.9
from uuid import UUID
from typing import Union
from pydantic import BaseModel

class User(BaseModel):
    id: Union[int, str, UUID]
    name: str
```

:::

需要注意的是, **使用 `Union` 类型时, Pydantic 会尝试匹配其中的各种类型, 并且会使用其匹配到的第一个合适的类型**;因此在以上示例中, 由于 `UUID` 类型可以被解析为 `int` 类型, 因此 `pydantic` 会将其认定为 `int` 类型并不再向后排查类型; 因此, 以上示例应当改为:

::: tabs

@tab:active Python 3.7~3.9

```python
# Python 3.7-3.9
from uuid import UUID
from typing import Union
from pydantic import BaseModel

class User(BaseModel):
    id: Union[UUID,int, str]
    name: str
```

:::

---

# 报错收集

## 文档站点加载不出来

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
