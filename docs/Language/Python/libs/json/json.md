# 目录
- [目录](#目录)
- [json](#json)
  - [dumps](#dumps)


---
# json
- [参考链接@CSDN:滴滴滴'cv](https://blog.csdn.net/weixin_38842821/article/details/108359551)

  ---
| 方法 | 作用 |
| -- | -- |
| json.dumps() | 将python对象编码成Json字符串 |
| json.loads() | 将Json字符串解码成python对象 |
| json.dump() |  将python中的对象转化成json储存到文件中 |
| json.load() | 将文件中的json的格式转化成python对象提取出来 |

---
## dumps
- json.dumps将一个Python数据结构转换为JSON
  ```python
  json.dumps( obj, 
              skipkeys=False, ensure_ascii=True, 
              check_circular=True, allow_nan=True, 
              cls=None, 
              indent=None, 
              separators=None, 
              encoding="utf-8", default=None, 
              sort_keys=False, 
              **kw)
  ```
  - `obj` : 待转化成json的对象。
  - `sort_keys =True` : 是告诉编码器按照字典排序(a到z)输出。如果是字典类型的python对象，就把关键字按照字典排序。
  - `indent` : 参数根据数据格式缩进显示，读起来更加清晰。
  - `separators` : 是分隔符的意思，参数意思分别为不同dict项之间的分隔符和dict项内key和value之间的分隔符，把：和，后面的空格都除去了。



  ```python
  import json
  data = {
      'name' : 'myname',
      'age' : 100,
  }
  json_str = json.dumps(data)
  print(json_str)
  ```
  - 运行结果 : `{"name": "myname", "age": 100}`


----