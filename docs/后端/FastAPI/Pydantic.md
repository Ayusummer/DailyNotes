
# Pydantic

- [Pydantic](#pydantic)
  - [数据类型](#数据类型)
  - [多种数据类型(Unions)](#多种数据类型unions)

---

> [pydantic (helpmanual.io)](https://pydantic-docs.helpmanual.io/)
>
> [Python笔记：Pydantic库简介_Espresso Macchiato的博客-CSDN博客_pydantic](https://blog.csdn.net/codename_cys/article/details/107675748#pydantic库简介)

## 数据类型

## 多种数据类型(Unions)

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
