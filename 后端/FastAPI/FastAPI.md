# 目录
- [目录](#目录)
- [路径参数和数据的解析验证](#路径参数和数据的解析验证)
  - [枚举类型](#枚举类型)
- [查询参数和数据的解析, 验证](#查询参数和数据的解析-验证)
  - [默认参数与可选参数](#默认参数与可选参数)
  - [bool 参数](#bool-参数)
  - [多个参数, 列表, 字符串验证, 正则, 参数别名](#多个参数-列表-字符串验证-正则-参数别名)

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

