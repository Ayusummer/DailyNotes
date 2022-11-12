# HMAC

> [HMAC算法及其应用 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/136590049)
>
> [Securing your webhooks - GitHub Docs](https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks)
>
> [消息认证码与哈希算法的区别 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/398292957)
>
> [Hmac算法 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1252599548343744/1305366354722849)

在身份认证过程中，有很多种方式可以保证用户信息的安全，`MAC(message authentication code)` 就是一种常用的方法。

消息认证码是对消息进行认证并确认其完整性的技术。通过使用发送者和接收者之间共享的密钥，就可以识别出是否存在伪装和篡改行为。

MAC 是通过 **MAC算法 + 密钥 + 要加密的信息一起计算**得出的。

- Hash与MAC的区别，Hash只能保证消息的完整性，MAC不仅能够保证完整性，还能够保证真实性。

> [哈希算法 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1252599548343744/1304227729113121)
>
> ---
>
> 哈希算法（Hash）又称摘要算法（Digest），它的作用是：对任意一组输入数据进行计算，得到一个固定长度的输出摘要。
>
> 哈希算法最重要的特点就是：
>
> - 相同的输入一定得到相同的输出；
> - 不同的输入**大概率**得到不同的输出。
>
> 哈希算法的目的就是为了验证原始数据是否被篡改。

- 同公私钥体系相比，因为MAC的密钥在发送方和接收方是一样的，所以发送方和接收方都可以来生成MAC，而公私钥体系因为将公钥和私钥分开，所以增加了不可抵赖性。

- MAC有很多实现方式，比较通用的是基于 hash 算法的 MAC，比如 `HMAC`。还有一种是基于分组密码的实现，比如``OMAC, CBC-MAC and PMAC`

---

对于 Hash 算法 $$digest = hash(input)$$ 相同的输入会产生相同的输出，我们加盐的目的就在于，使得输入有所变化：$digest = hash(salt + input)$ 这个 salt 可以看作是一个额外的“认证码”，同样的输入，不同的认证码，会产生不同的输出。因此，要验证输出的哈希，必须同时提供“认证码”。

`HMAC(Hash-based Message Authentication Code)` 算法就是一种基于密钥的消息认证码算法, 是一种更安全的消息摘要算法.

HMAC算法是一种执行“校验和”的算法，它通过对数据进行“校验”来检查数据是否被更改了。在发送数据以前，HMAC算法对数据块和双方约定的公钥进行“散列操作”，以生成称为“摘要”的东西，附加在待发送的数据块中。当数据和摘要到达其目的地时，就使用HMAC算法来生成另一个校验和，如果两个数字相匹配，那么数据未被做任何篡改。否则，就意味着**数据在传输或存储过程中**被篡改了。

HMAC 的 MAC 算法是 hash 算法，它可以是 `MD5`, `SHA-1` 或者 `SHA-256`，他们分别被称为 `HMAC-MD5`，``HMAC-SHA1`， `HMAC-SHA256`。

---

## 公式和计算流程

> [HMAC算法原理 - 月染霜华 - 博客园 (cnblogs.com)](https://www.cnblogs.com/shoshana-kong/p/11497676.html)
>
> [HMAC算法及其应用 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/136590049)

HMAC 用公式可以表示为:

$HMAC(K, M) = H(K \bigoplus opad , H(K \bigoplus ipad, text))$

- `H`: hash算法，比如（``MD5`，`SHA-1`，`SHA-256`）
- `B`: 块字节的长度，块是hash操作的基本单位。这里B=64
- `L`: hash算法计算出来的字节长度。(L=16 for MD5, L=20 for SHA-1)
- `K`: 共享密钥，K的长度可以是任意的，但是为了安全考虑，还是推荐 `K的长度 > B`。
  - K 的长度 > B 时会先在 K 上面执行 hash 算法，将得到的 L 长度结果作为新的共享密钥。
  - K 的长度 < B 时那么会在 K 后面填充 0x00 一直到等于长度 B
- `M`: 要加密的内容
- `opad`: 外部填充常量, 是 `0x5c` 重复 B 次
- `ipad`: 内部填充常量, 是 `0x36` 重复 B 次
- $\bigoplus$: 异或运算

计算步骤:

1. 将 0x00 填充到 K 的后面，直到其长度等于B。 
2. 将步骤 1 的结果跟 ipad 做异或。
3. 将要加密的信息附在步骤 2 的结果后面
4. 调用 H 方法计算步骤 3 的结果
5. 将步骤 1 的结果跟 opad 做异或。 
6. 将步骤 4 的结果附在步骤 5 的结果后面。 
7. 调用 H 方法计算步骤 6 的结果

---

## 应用

> [HMAC算法原理 - 月染霜华 - 博客园 (cnblogs.com)](https://www.cnblogs.com/shoshana-kong/p/11497676.html)

HMAC 算法的一个典型应用是用在 `“挑战/响应”（Challenge/Response）` 身份认证中，认证流程如下：

1. 先由客户端向服务器发出一个验证请求。

2. 服务器接到此请求后生成一个随机数并通过网络传输给客户端（此为挑战）。

3. 客户端将收到的随机数与自己的密钥进行 HMAC-SHA1 运算并得到一个结果作为认证证据传给服务器（此为响应）。

4. 与此同时，服务器也使用该随机数与存储在服务器数据库中的该客户密钥进行 HMAC-SHA1 运算

   如果服务器的运算结果与客户端传回的响应结果相同，则认为客户端是一个合法用户 。

---

## 安全性

> [HMAC算法安全性浅析 | FEITIAN (ftsafe.com.cn)](https://www.ftsafe.com.cn/service/kbase/infomation-2)
>
> [HMAC算法原理 - 月染霜华 - 博客园 (cnblogs.com)](https://www.cnblogs.com/shoshana-kong/p/11497676.html)

HMAC算法引入了密钥，其安全性已经不完全依赖于所使用的HASH算法，安全性主要有以下几点保证：

- 使用的密钥是双方事先约定的，第三方不可能知道。由上面介绍应用流程可以看出，作为非法截获信息的第三方，能够得到的信息只有作为“挑战”的随机数和作为“响应”的HMAC结果，无法根据这两个数据推算出密钥。由于不知道密钥，所以无法仿造出一致的响应。
- 在HMAC算法的应用中，第三方不可能事先知道输出（如果知道，不用构造输入，直接将输出送给服务器即可）。
- HMAC算法与一般的加密重要的区别在于它具有“瞬时”性，即认证只在当时有效，而加密算法被破解后，以前的加密结果就可能被解密。









