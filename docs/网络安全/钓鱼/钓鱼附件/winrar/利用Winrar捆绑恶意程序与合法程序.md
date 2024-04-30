# 利用Winrar捆绑恶意程序与合法程序

> [X 上的 Binni Shah：“Embed A Malicious Executable in a Normal PDF or EXE : https://t.co/Uko8EQhzFj https://t.co/512NXzey0d” / X (twitter.com)](https://twitter.com/binitamshah/status/1784612260624932990)
>
> [在普通 PDF 或 EXE 中嵌入恶意可执行文件 |作者：萨姆·罗斯利斯伯格 |中等的 --- Embed A Malicious Executable in a Normal PDF or EXE | by Sam Rothlisberger | Medium](https://medium.com/@sam.rothlisberger/embed-a-malicious-executable-in-a-normal-pdf-or-exe-81ee5339707e)
>
> [WinRAR 归档程序，处理 RAR 和 ZIP 文件的强大工具 --- WinRAR archiver, a powerful tool to process RAR and ZIP files (rarlab.com)](https://www.rarlab.com/download.htm?source=post_page-----81ee5339707e--------------------------------)

可以在 [WinRAR archiver, a powerful tool to process RAR and ZIP files (rarlab.com)](https://www.rarlab.com/download.htm?source=post_page-----81ee5339707e--------------------------------) 下载 WinRAR, 使用 Winrar 将恶意软件和合法软件捆绑起来, 通过合法软件调用恶意软件在一定程度上可以绕过EDR

可以在 [383 chrome icons - Iconfinder](https://www.iconfinder.com/search?q=chrome) 查找目标合法软件的图标并下载 PNG 文件

可以使用 `https://iconconverter.com` 将 PNG 转换成 ICO 图标

> 文中提到的这个网站我刚问不到, 拿 Go 写了个转换程序: [DailyNotesCode/Go/usecase/Picture/ToICO/main.go at main · Ayusummer/DailyNotesCode (github.com)](https://github.com/Ayusummer/DailyNotesCode/blob/main/Go/usecase/Picture/ToICO/main.go)
>
> 常见程序 ICO 分辨率:
>
> ![image-20240429162640096](http://cdn.ayusummer233.top/DailyNotes/image-20240429162640096.png)

选中 Chrome 浏览器快捷方式和恶意程序, 使用 WinRAR `Add to Archive` 来创建压缩包

![image-20240429150415492](http://cdn.ayusummer233.top/DailyNotes/image-20240429150415492.png)

起一个合适的名字, 例如 `Chrome.exe` 并确保选中了 `Create SFX archive`

![image-20240429151231670](http://cdn.ayusummer233.top/DailyNotes/image-20240429151231670.png)

继续在 `Advance -> SFX options -> Setup` 中配置启动项

![image-20240429151743366](http://cdn.ayusummer233.top/DailyNotes/image-20240429151743366.png)

> 如果你的恶意程序是阻塞性质的程序那么在写 `Run after extraction` 的时候如果恶意程序在前则会在其关闭时调起 Chrome, 反之则会在 Chrome 关闭后调起恶意程序

![image-20240429151758013](http://cdn.ayusummer233.top/DailyNotes/image-20240429151758013.png)

在 `Modes` 中设置解压到临时目录以及 `Hide all`

![image-20240429151843345](http://cdn.ayusummer233.top/DailyNotes/image-20240429151843345.png)

在 [383 chrome icons - Iconfinder](https://www.iconfinder.com/search?q=chrome) 查找目标合法软件的图标并下载 PNG 文件, 然后用工具转换成 ICO 文件并在 `Text and icon -> Load SFX icon from the file` 设置 ico 图标 

![image-20240429152043450](http://cdn.ayusummer233.top/DailyNotes/image-20240429152043450.png)

在 `Update` 中选择 `Extract and update files` 以及 `Overwrite all files`

![image-20240429152204461](http://cdn.ayusummer233.top/DailyNotes/image-20240429152204461.png)

最后逐级确定即可收获一个名为 `Chrome.exe` 且带有合适图标的可执行程序

![image-20240429152352945](http://cdn.ayusummer233.top/DailyNotes/image-20240429152352945.png)

此时执行 `Chrome.exe` 即可打开 Chrome 并执行恶意程序

> PS: 如果你的恶意程序是阻塞性质的程序那么在写 `Run after extraction` 的时候如果恶意程序在前则会在其关闭时调起 Chrome, 反之则会在 Chrome 关闭后调起恶意程序

![image-20240429153043430](http://cdn.ayusummer233.top/DailyNotes/image-20240429153043430.png)

---

