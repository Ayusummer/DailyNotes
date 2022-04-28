# 目录
- [目录](#目录)
- [路径参数和数据的解析验证](#路径参数和数据的解析验证)
  - [枚举类型](#枚举类型)

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

