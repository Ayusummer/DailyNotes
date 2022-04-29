#   目录
- [目录](#目录)
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

# 路径参数和数据的解析验证

## 枚举类型

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

# 查询参数和数据的解析, 验证

## 默认参数与可选参数

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

## bool 参数

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

## 多个参数, 列表, 字符串验证, 正则, 参数别名

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

# 请求体及混合参数

## 请求体和字段

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

## 多参数混合

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













