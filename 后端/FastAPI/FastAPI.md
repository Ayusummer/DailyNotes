#   目录
- [目录](#目录)
- [前言](#前言)
- [请求模型](#请求模型)
  - [路径参数和数据的解析验证](#路径参数和数据的解析验证)
    - [枚举类型](#枚举类型)
  - [查询参数和数据的解析, 验证](#查询参数和数据的解析-验证)
    - [默认参数与可选参数](#默认参数与可选参数)
    - [bool 参数](#bool-参数)
    - [多个参数, 列表, 字符串验证, 正则, 参数别名](#多个参数-列表-字符串验证-正则-参数别名)
  - [请求体及混合参数](#请求体及混合参数)
    - [请求体和字段](#请求体和字段)
    - [多参数混合](#多参数混合)
  - [数据格式嵌套的请求体](#数据格式嵌套的请求体)
  - [配置 Cookie 和 Header 参数](#配置-cookie-和-header-参数)
    - [Cookie 校验](#cookie-校验)
    - [Header 校验](#header-校验)
- [响应模型](#响应模型)
  - [响应状态码](#响应状态码)
  - [表单数据处理](#表单数据处理)
  - [文件上传及参数详解](#文件上传及参数详解)
  - [静态文件的配置](#静态文件的配置)
  - [路径操作配置](#路径操作配置)
  - [FastAPI 配置项](#fastapi-配置项)
  - [错误处理](#错误处理)
    - [自定义异常处理](#自定义异常处理)
- [依赖注入](#依赖注入)
  - [创建, 导入和声明依赖](#创建-导入和声明依赖)
  - [类作为依赖项](#类作为依赖项)
  - [子依赖的创建和调用](#子依赖的创建和调用)
  - [路径操作装饰器中导入依赖](#路径操作装饰器中导入依赖)
  - [FastAPI 框架中全局依赖的使用](#fastapi-框架中全局依赖的使用)
  - [使用 yield 的依赖和子依赖](#使用-yield-的依赖和子依赖)
- [OAuth2.0 的授权模式](#oauth20-的授权模式)
  - [密码授权模式(Resource Owner Password Credentials Grant)](#密码授权模式resource-owner-password-credentials-grant)
  - [OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer](#oauth2-密码模式和-fastapi-的-oauth2passwordbearer)
  - [基于 Password 和 Bearer token 的 OAuth2 认证](#基于-password-和-bearer-token-的-oauth2-认证)
  - [开发基于 JSON Web Tokens 的认证](#开发基于-json-web-tokens-的认证)
- [FastAPI 的数据库操作及大型工程应用的目录结构设计](#fastapi-的数据库操作及大型工程应用的目录结构设计)
  - [配置 SQLAlchemy ORM](#配置-sqlalchemy-orm)
  - [DataBase Models](#database-models)
- [大型工程的目录结构设计 - 应用文件拆分](#大型工程的目录结构设计---应用文件拆分)
- [中间件](#中间件)
- [跨域资源共享](#跨域资源共享)
  - [源](#源)
  - [步骤](#步骤)
  - [通配符](#通配符)
  - [使用 CORSMiddleWare](#使用-corsmiddleware)
    - [CORS 预检请求](#cors-预检请求)
    - [简单请求](#简单请求)
- [后台任务](#后台任务)
- [测试用例](#测试用例)

---

# 前言

随笔基于慕课网 21 年发的一份 `FastAPI` 基础教程

[【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iN411X72b?p=19&spm_id_from=333.1007.top_right_bar_window_history.content.click)

---

# 请求模型

## 路径参数和数据的解析验证

### 枚举类型

可以使用枚举类型来指定参数范围

```python
# 导入枚举类型
from enum import Enum

class CityName(str, Enum):
    Beijing 
```

需要注意的是定义整型枚举类型是在 FastAPI 中不可以用 (int, Enum) 或者仅仅是使用 Enum, 应当先从 enum 导入 IntEnum, 然后使用 IntEnum 来定义整型枚举类型

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

# FastAPI 的数据库操作及大型工程应用的目录结构设计

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

    # 排序相关
    __mapper_args__ = {
        # 倒序的话可以使用   "order_by": did.desc()
        "order_by": did
    }

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

    # 排序相关
    __mapper_args__ = {
        # 倒序的话可以使用   "order_by": did.desc()
        "order_by": sid
    }

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

---

# 大型工程的目录结构设计 - 应用文件拆分

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

# 测试用例

