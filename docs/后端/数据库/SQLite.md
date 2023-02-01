# SQLite

- [SQLite](#sqlite)
  - [virtual columns](#virtual-columns)
  - [自增量归零](#自增量归零)
  - [Litestream](#litestream)


## virtual columns

> [JSON and virtual columns in SQLite (antonz.org)](https://antonz.org/json-virtual-columns/)

如何在 SQLite 中使用 JSON 和 Virtual Columns 实现一些更灵活的用法 

假设我们想要保留系统中一些事件的日志, 每个事件都有自己的一组字段, 例如:

`登录`:

```json
{
    "timestamp": "2022-05-15T09:31:00Z",
    "object": "user",
    "object_id": 11,
    "action": "login",
    "details": {
        "ip": "192.168.0.1"
    }
}
```

`账户存款`:

```json
{
    "timestamp": "2022-05-15T09:32:00Z",
    "object": "account",
    "object_id": 12,
    "action": "deposit",
    "details": {
        "amount": "1000",
        "currency": "USD"
    }
}
```

由于这种 json 数据的规范化并不容易, 因此可以直接存储 json

创建一个 events 表, 只包含一个 text 类型的 value 字段

value 字段的值为:

```json
{"timestamp":"2022-05-15T09:31:00Z","object":"user","object_id":11,"action":"login","details":{"ip":"192.168.0.1"}}
{"timestamp":"2022-05-15T09:32:00Z","object":"account","object_id":12,"action":"deposit","details":{"amount":"1000","currency":"USD"}}
{"timestamp":"2022-05-15T09:33:00Z","object":"company","object_id":13,"action":"edit","details":{"fields":["address","phone"]}}
```

此时可以通过 json 解构查表:

```sqlite
select
  json_extract(value, '$.object') as object,
  json_extract(value, '$.action') as action
from events
where json_extract(value, '$.object_id') = 11;
```

![](http://cdn.ayusummer233.top/img/202205230849736.png)

只是满足基本查询的话到此为止就足够了, 但是当数据量起来后, 查询速度会变得很慢, 此时可以通过定义虚拟列并构建索引来加快查询速度:

`定义虚拟列`:

```sqlite
alter table events
add column object_id integer
as (json_extract(value, '$.object_id'));

alter table events
add column object text
as (json_extract(value, '$.object'));

alter table events
add column action text
as (json_extract(value, '$.action'));
```

`构建索引`:

```sqlite
create index events_object_id on events(object_id);
```

![image-20220523090909436](http://cdn.ayusummer233.top/img/202205230909523.png)

然后使用新的虚拟列属性进行查询:

```sqlite
select object, action
from events
where object_id = 11;
```

虚拟列的使用让我们几乎拥有了一个 NoSQL 数据库😉

---

## 自增量归零

> [SQLite 如何清空表数据并将递增量归零 (bbsmax.com)](https://www.bbsmax.com/A/n2d9l3gB5D/)

```sqlite
DELETE FROM sqlite_sequence WHERE name = ‘TableName’; --可以将递增数归零
```

当 SQLite 数据库中包含自增列时，会自动建立一个名为 `sqlite_sequence` 的表。

`sqlite_sequence` 表包含两个列：name 和 seq。

- `name` 记录自增列所在的表

- `seq` 记录当前序号（下一条记录的编号就是当前序号加1）。

  如果想把某个自增列的序号归零，只需要修改 `sqlite_sequence` 表就可以了。

```sqlite
UPDATE sqlite_sequence SET seq = 0 WHERE name = ‘TableName’;
```

也可以直接把该记录删掉：

```sqlite
DELETE FROM sqlite_sequence WHERE name = ‘TableName’;
```

要想将所有表的自增列都归零，直接清空sqlite_sequence表就可以了：

```sqlite
DELETE FROM sqlite_sequence;
```

----

## Litestream

> [benbjohnson/litestream：SQLite 的 Streaming Replication。 (github.com)](https://github.com/benbjohnson/litestream)
>
> [Getting Started - Litestream](https://litestream.io/getting-started/)
>
> [Install - Litestream](https://litestream.io/install/)

`Litestream` 是 SQLite 的独立流复制工具; 其作为后台进行运行, 并安全地将更改增量复制到另一个文件或 S3;

`Litestream` 仅通过 `SQLite API`  与 `SQLite` 通信, 因此它并不会损坏数据库;

> Windows 下使用需要从源码进行构建