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
