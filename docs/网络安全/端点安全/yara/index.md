# yara

> [VirusTotal/yara: The pattern matching swiss knife (github.com)](https://github.com/VirusTotal/yara)
>
> [入门 — yara 4.4.0 文档 --- Getting started — yara 4.4.0 documentation](https://yara.readthedocs.io/en/stable/gettingstarted.html#compiling-and-installing)

---

## 简介

YARA 是一款旨在(但不限于) 帮助恶意软件研究人员识别和分类恶意软件样本的工具

使用 YARA 可以根据文本或二进制模式创建恶意软件系列(或其他你想描述的任何内容) 的描述

每个描述(或称 `规则-rule`) 由一组字符串和一个决定其逻辑的布尔表达式组成, 例如

```yara
rule silent_banker : banker
{
    meta:
        description = "This is just an example"
        threat_level = 3
        in_the_wild = true

    strings:
        $a = {6A 40 68 00 30 00 00 6A 14 8D 91}
        $b = {8D 4D B0 2B C1 83 C0 27 99 6A 4E 59 F7 F9}
        $c = "UVODFRYSIHLNWPEJXQZAKCBGMT"

    condition:
        $a or $b or $c
}
```

- `规则名称:标签` 
  - `silent_banker` 是这个规则的名称, 用于唯一标识该规则, 可以在其他地方使用这个名称来表示这个规则
  - `banker` 是这个规则的标签, 可以用于更具体地描述规则所关注的威胁类型; 在这个示例中, 这个规则可能用于检测银行木马(banker)家族的样本
- `元数据(meta)`
  - **description：** 规则的描述，说明这只是一个示例。
  - **threat_level：** 威胁级别，设置为3。
  - **in_the_wild：** 标记为true，表示规则用于检测在实际网络中发现的样本。
- `字符串模式(strings)`
  - **$a：** 匹配十六进制字符串 `{6A 40 68 00 30 00 00 6A 14 8D 91}`。
  - **$b：** 匹配十六进制字符串 `{8D 4D B0 2B C1 83 C0 27 99 6A 4E 59 F7 F9}`。
  - **$c：** 匹配ASCII字符串 `UVODFRYSIHLNWPEJXQZAKCBGMT`
- `条件(condition)`: 规则的匹配条件是 $a 或 $b 或 $c。如果目标文件中存在任何这些字符串模式，规则就会匹配

---

YARA 是跨平台的, 可以在 Windows/Linux/MacOS 上运行, 可以通过气命令行页面或者带有 `yara-python` 扩展的 Python脚本来使用

---

## 其他资源

如果使用 Github 存储库来存储 YARA 规则的话. [YARA-CI](https://yara-ci.cloud.virustotal.com/)  将会是个不错的工具, 它是一个 Github 应用, 可以为你的 YARA 规则提供持续测试, 帮助你识别常见的错误和误报

如果要使用 YARA 来扫描压缩文件(`.zip`, `.tar` 等) , 可以使用 [yextend](https://github.com/BayshoreNetworks/yextend) 来帮助你处理这些压缩文件

网络安全公司 InQuest 的人员还整理了一份与 YARA 相关的[资源清单](https://github.com/InQuest/awesome-yara)

---

## 安装

> [入门 — yara 4.4.0 文档 --- Getting started — yara 4.4.0 documentation](https://yara.readthedocs.io/en/stable/gettingstarted.html#compiling-and-installing)

:::tabs

@tab:active Windows

在 [Releases · VirusTotal/yara (github.com)](https://github.com/VirusTotal/yara/releases) 找到对应版本的压缩包, 例如:

![image-20240307234709099](http://cdn.ayusummer233.top/DailyNotes/202403072347160.png)

解压后即可获得可执行程序

![image-20240307234817387](http://cdn.ayusummer233.top/DailyNotes/202403072348408.png)



:::

---

### 安装 yara-python

如果想要在 Python 中使用 YARA 的话则需要安装 `yara-python` 扩展, 可以参阅[VirusTotal/yara-python: The Python interface for YARA (github.com)](https://github.com/VirusTotal/yara-python) 获取安装说明

---





