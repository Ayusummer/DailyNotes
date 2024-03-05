# 加密算法

- [加密算法](#加密算法)
  - [使用 openssl 生成自签名证书](#使用-openssl-生成自签名证书)

---

## 使用 openssl 生成自签名证书

> [Win32/Win64 OpenSSL Installer for Windows - Shining Light Productions --- 适用于 Windows 的 Win32/Win64 OpenSSL 安装程序 - Shining Light Productions (slproweb.com)](https://slproweb.com/products/Win32OpenSSL.html)
>
> [(21) 一起学加密(23)——证书是什么 - YouTube](https://www.youtube.com/watch?v=1fln7glmX1E&list=PLfQqWeOCIH4AZt3TiSRP4UuL_Y3gxYPAW&index=23)

![image-20231023214800147](http://cdn.ayusummer233.top/DailyNotes/202310232148230.png)

---

- 生成自签名 CA 根证书

  > [(21) 一起学加密(24)——openssl生成自签名证书(1) - YouTube](https://www.youtube.com/watch?v=2sG8lLxOiLU&list=PLfQqWeOCIH4AZt3TiSRP4UuL_Y3gxYPAW&index=24)

  ```bash
  # 生成 rsa 私钥
  openssl genrsa -des3 -out ca.key 2048
  # 用私钥生成公钥证书(PS:时间不要超过13 个月[397 天])
  openssl req -x509 -key ca.key -out ca.crt -days 365
  # 可以读一下证书的内容看看
  openssl x509 -in ca.crt -text -noout
  ```

  ![image-20231024004501134](http://cdn.ayusummer233.top/DailyNotes/202310240045190.png)

  > [google chrome - NET::ERR_CERT_VALIDITY_TOO_LONG - The server certificate has a validity period that is too long - Stack Overflow](https://stackoverflow.com/questions/64597721/neterr-cert-validity-too-long-the-server-certificate-has-a-validity-period-t)

- 生成私钥与证书与签名请求并通过刚才生成的 CA 根证书签名

  ```bash
  # 生成 rsa 私钥
  openssl genrsa -out summer-py-server.key 2048
  # 用私钥生成证书签名请求
  openssl req -new -key summer-py-server.key -out summer-py-server.csr
  ```

  目前的浏览器校验证书都需要一个额外的校验证书备用名称的字段需要额外配置, 新建一个 `.ext` 文件

  ```properties
  basicConstraints = CA:FALSE
  keyUsage = nonRepudiation, digitalSignature, keyEncipherment
  extendedKeyUsage = serverAuth, clientAuth
  subjectAltName = @alt_names
  
  [alt_names]
  DNS.1 = ayusummer.com
  DNS.2 = summer.com
  IP.1 = 172.29.64.1
  IP.3 = 127.0.0.1
  ```

  > [正确使用 OpenSSL 自签发代码|邮件|域名|IP 证书(附免费可信任 IP 证书申请)  - VirCloud's Blog - Learning&Sharing](https://vircloud.net/operations/sign-ip-crt.html)
  >
  > [使用OpenSSL自签发SSL证书，支持chrome识别 - 程序人生♨︎ - 博客园 (cnblogs.com)](https://www.cnblogs.com/springwind2006/p/14273387.html)
  >
  > [自签发SSL证书-解决本地开发跨域调试问题 - 掘金 (juejin.cn)](https://juejin.cn/post/7130417753483116557)

  ```bash
  # 用 CA 根证书签名
  openssl x509 -req -in summer-py-server.csr -CA ../ca/ca.crt -CAkey ../ca/ca.key -extfile ext.ext -set_serial 01 -out summer-py-server.crt -days 365
  ```

  ![image-20231024005104363](http://cdn.ayusummer233.top/DailyNotes/202310240051408.png)

- python 起个 https server 试试

  ```python
  import http.server
  import ssl
  
  server_address = ("0.0.0.0", 443)
  httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
  httpd.socket = ssl.wrap_socket(
      httpd.socket,
      server_side=True,
      certfile="key/py_server/summer-py-server.crt",
      keyfile="key/py_server/summer-py-server.key",
      ssl_version=ssl.PROTOCOL_TLS,
  )
  httpd.serve_forever()
  
  ```

  ![image-20231023221951330](http://cdn.ayusummer233.top/DailyNotes/202310232219356.png)

  ![image-20231023222030322](http://cdn.ayusummer233.top/DailyNotes/202310232220365.png)

  安装根证书:

  ![image-20231023222117285](http://cdn.ayusummer233.top/DailyNotes/202310232221334.png)

  ![image-20231023222132004](http://cdn.ayusummer233.top/DailyNotes/202310232221021.png)

  ![image-20231023222141250](http://cdn.ayusummer233.top/DailyNotes/202310232221264.png)

  然后在双击这个证书可以看到已经能识别了

  ![image-20231023222209941](http://cdn.ayusummer233.top/DailyNotes/202310232222957.png)

  也可以从命令行使用 `certlm.msc` 调起证书管理器进行查看
  
  ![image-20231023222500265](http://cdn.ayusummer233.top/DailyNotes/202310232225280.png)
  
  只需要加这个根证书就行了, 后续通过根证书申请的证书就无需添加了
  
  此时再访问站点就没有不安全提示了
  
  ![image-20231024005304390](http://cdn.ayusummer233.top/DailyNotes/202310240053403.png)
  
  相应的 PowerShell 中 `Invoke-WebRequest` 也可以正常使用了
  
  ![image-20231024010004006](http://cdn.ayusummer233.top/DailyNotes/202310240100033.png)
  
  ![image-20231024010021409](http://cdn.ayusummer233.top/DailyNotes/202310240100419.png)
  
  ![image-20231024010238987](http://cdn.ayusummer233.top/DailyNotes/202310240102000.png)
  
  
  
  

