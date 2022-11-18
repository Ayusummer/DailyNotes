# php:filter

> [php://filter的妙用 – JohnFrod's Blog](https://johnfrod.top/安全/php-filter的妙用/)
>
> [探索php://filter在实战当中的奇技淫巧-安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/202510)
>
> [谈一谈php://filter的妙用 | 离别歌 (leavesongs.com)](https://www.leavesongs.com/PENETRATION/php-filter-magic.html)
>
> [PHP伪协议总结 | xiaoZ's Blog (xiaozzz.xyz)](https://www.xiaozzz.xyz/2019/09/21/PHP伪协议总结/)
>
> ---


- `php://filter` 是一种元封装器，设计用于数据流打开时的筛选过滤应用。这对于一体式（all-in-one）的文件函数非常有用，类似 `readfile()`、 `file()` 和 `file_get_contents()`，在数据流内容读取之前没有机会应用其他过滤器。

- `php://filter` 目标使用以下的参数作为它路径的一部分。复合过滤链能够在一个路径上指定。

  |         参数名称          |                             描述                             |
  | :-----------------------: | :----------------------------------------------------------: |
  | resource=<要过滤的数据流> |            必要参数; 其指定了需要筛选过滤的数据流            |
  |   read=<读链的筛选列表>   |  可选参数; 可以设定一个或多个过滤器名称, 以管道符 `|` 分隔   |
  |  write=<写链的筛选列表>   |  可选参数; 可以设定一个或多个过滤器名称, 以管道符 `|`  分隔  |
  |   <; 两个链的筛选列表>    | 任何没有以 read= 或 write= 做前缀的筛选器列表会视情况应用于读或写链 |

例如 pikachu 靶场中的 `ssrf -> file_get_content` 题目中可以使用 `php:filter` 将网页源码 base64 编码读取出来, 然后再解码查看


  ```http
  http://[host]:[port]/vul/ssrf/ssrf_fgc.php?file=php://filter/convert.base64-encode/resource=ssrf.php
  ```