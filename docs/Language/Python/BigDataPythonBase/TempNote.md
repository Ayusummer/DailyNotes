<!--
 * @Author: your name
 * @Date: 2021-03-14 20:33:33
 * @LastEditTime: 2021-05-19 15:35:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\BigDataMicroMajor\Python\TempNote.md
-->
----
# TensorFlow

---
## 安装
- `TensorFlow`安装的时候需要装`dll`,因此不可以通过直接拷贝别人装好的的`site-packages/TensorFlow...`来安装
- 相应环境命令行执行
  ```
  pip install TensorFlow --user --no-warn-script-location
  ```
  - `--user` : pip 默认安装 package 到 system directory, 通过 --user 可以将 package 安装到 /home 路径下
  - `--no-warn-script-location` : 忽略脚本警告
  - 个人使用清华的源安装 `TensorFlow` 时经常超时,可以使用阿里的源
  ```
  pip install TensorFlow --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/
  ``` 
    ---
- `TensorFlow` 与 `keras` 以及 `python` 版本要相匹配
  - [表格参考](https://docs.floydhub.com/guides/environments/)
  - 最新版本的 `TensorFlow2.2.0` 适配 `keras2.3.1` + `python3.7.` 
  - 找网上的往期项目往往依赖比较老,例如:
    ```python
    from keras.engine.saving
    ```
    相应版本 `keras2.2.4` 对应 `python3.6.`, `tensorflow 1.13.0`
    安装时可以
    ```
    pip install TensorFlow==1.13.1 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/
    ```
    ----
    ```
    pip install keras==2.2.4 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/
    ```
    - 这里注意阿里云的源中 1.13.0 后都有rc 因此直接 `==1.13.0` 会报错找不到相应版本,因此这里安装`1.13.1`

---
## 安装报错记录

---
### `ModuleNotFoundError: No module named 'numpy.core._multiarray_umath'`
- 适应 `numpy` 版本 `1.14.6 ~ 1.17.2` 
  - 满足 `tensorflow1.13.1` 要求的 `numpy >= 1.13.3`
  - `numpy==1.15.0`测试成功

---
### `ImportError: cannot import name '_ccallback_c'`
- 当前 `scipy==1.4.0`

---
### 接收的某个项目的依赖安装记录
```
pip install TensorFlow==1.13.1 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/

pip install keras==2.2.4 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/

pip install opencv-python -i https://mirrors.aliyun.com/pypi/simple/

pip install matplotlib -i https://mirrors.aliyun.com/pypi/simple/

pip install Pillow -i https://mirrors.aliyun.com/pypi/simple/

```