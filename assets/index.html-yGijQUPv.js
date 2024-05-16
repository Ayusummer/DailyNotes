import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as u,c as d,a as n,d as a,b as e,w as l,e as i}from"./app-DxMJFouC.js";const g={},h=i('<h1 id="go" tabindex="-1"><a class="header-anchor" href="#go"><span>Go</span></a></h1><ul><li><a href="#go">Go</a><ul><li><a href="#%E5%8F%82%E8%80%83%E4%B9%A6%E7%B1%8D">参考书籍</a></li><li><a href="#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">开发环境配置</a><ul><li><a href="#%E5%AE%89%E8%A3%85">安装</a></li><li><a href="#%E4%BB%A3%E7%90%86">代理</a></li><li><a href="#vscode-%E9%85%8D%E7%BD%AE">VSCode 配置</a><ul><li><a href="#%E5%AE%89%E8%A3%85-go-%E6%89%A9%E5%B1%95">安装 Go 扩展</a></li><li><a href="#%E6%9B%B4%E6%96%B0-go-%E5%B7%A5%E5%85%B7">更新 Go 工具</a></li></ul></li></ul></li><li><a href="#%E9%97%AE%E9%A2%98%E6%95%B4%E7%90%86">问题整理</a><ul><li><a href="#go-get-%E5%B7%B2%E5%BC%83%E7%94%A8">go get 已弃用</a></li></ul></li></ul></li></ul><hr><h2 id="参考书籍" tabindex="-1"><a class="header-anchor" href="#参考书籍"><span>参考书籍</span></a></h2>',4),m=n("p",null,"系统学习Go语言的基础知识",-1),k={href:"https://gopl-zh.github.io/ch1/ch1-01.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"CGO、Go汇编语言等高级用法",-1),v={href:"https://chai2010.cn/advanced-go-programming-book/",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"深入学习Go语言语法树结构",-1),_={href:"https://chai2010.cn/go-ast-book/",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"了解Go2的最新动向",-1),x={href:"https://golang-china.github.io/go2-book/",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"从头实现一个玩具Go语言",-1),G={href:"https://wa-lang.org/ugo-compiler-book/",target:"_blank",rel:"noopener noreferrer"},A=n("hr",null,null,-1),w={href:"https://learn.microsoft.com/zh-cn/training/paths/go-first-steps/",target:"_blank",rel:"noopener noreferrer"},B=n("hr",null,null,-1),y=n("h2",{id:"开发环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发环境配置"},[n("span",null,"开发环境配置")])],-1),C=n("h3",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装"},[n("span",null,"安装")])],-1),D={href:"https://go.dev/doc/install",target:"_blank",rel:"noopener noreferrer"},P=n("hr",null,null,-1),S={href:"https://golang.google.cn/dl/",target:"_blank",rel:"noopener noreferrer"},L=n("ul",null,[n("li",null,[n("p",null,"拉取官网最新的 stable release"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"wget"),a(` https://golang.google.cn/dl/go1.19.3.linux-amd64.tar.gz
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[a("解压到 "),n("code",null,"/usr/local/go")]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"tar"),a(),n("span",{class:"token parameter variable"},"-C"),a(" /usr/local "),n("span",{class:"token parameter variable"},"-xzf"),a(` go1.19.3.linux-amd64.tar.gz
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])]),n("blockquote",null,[n("p",null,"如果之前安装了其他版本的 go 那么可以备份后先移除该版本目录再运行上面的命令"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 可以先看看有没有"),a(`
`),n("span",{class:"token function"},"ls"),a(" /usr/local "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token function"},"grep"),a(` go

`),n("span",{class:"token comment"},"# 如果有的话可以删除"),a(`
`),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"rm"),a(),n("span",{class:"token parameter variable"},"-rf"),a(` /usr/local/go2
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])]),n("li",null,[n("p",null,[a("编辑 "),n("code",null,"~/.bashrc"),a(", 在文件尾添加")]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),a(),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"PATH")]),n("span",{class:"token operator"},"="),n("span",{class:"token environment constant"},"$PATH"),a(`:/usr/local/go/bin
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])]),n("blockquote",null,[n("p",null,[a("如果之前还添加了其他 PATH 变量的话使用 "),n("code",null,":"),a(" 间隔开即可")]),n("p",null,"添加完环境变量后若想立即生效则需要重启计算机或者执行下面的 shell 命令"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),a(` ~/.profile
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])])]),n("li",null,[n("p",null,"验证"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`go version
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])]),n("blockquote",null,[n("p",null,[n("img",{src:"http://cdn.ayusummer233.top/img/202211100112060.png",alt:"image-20221110011243044"})])])])],-1),O=n("p",null,"在官网下载 Windows 版本的 Go 安装包并运行该 msi 文件进行安装",-1),T=n("p",null,"安装完成后可在 cmd 或 powershell 中验证下版本号",-1),z=n("p",null,[n("img",{src:"http://cdn.ayusummer233.top/img/202211102225614.png",alt:"image-20221110222548586"})],-1),V=n("hr",null,null,-1),H=n("h3",{id:"代理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代理"},[n("span",null,"代理")])],-1),M={href:"https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,[a("由于中国政府的网络监管系统，Go 生态系统中有着许多中国 Gopher 们无法获取的模块，比如最著名的 "),n("code",null,"golang.org/x/..."),a("。并且在中国大陆从 GitHub 获取模块的速度也有点慢。因此，我们创建了 Goproxy.cn，使在中国的 Gopher 们能更好地使用 Go 模块。事实上，由于 Goproxy.cn 已在全球范围内通过 CDN 加速，所以你可以在任何地方使用它。")],-1),F=n("hr",null,null,-1),W=n("p",null,"在终端中执行:",-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("go "),n("span",{class:"token function"},"env"),a(),n("span",{class:"token parameter variable"},"-w"),a(),n("span",{class:"token assign-left variable"},"GO111MODULE"),n("span",{class:"token operator"},"="),a(`on
go `),n("span",{class:"token function"},"env"),a(),n("span",{class:"token parameter variable"},"-w"),a(),n("span",{class:"token assign-left variable"},"GOPROXY"),n("span",{class:"token operator"},"="),a(`https://goproxy.cn,direct
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),a(),n("span",{class:"token assign-left variable"},"GO111MODULE"),n("span",{class:"token operator"},"="),a(`on
`),n("span",{class:"token builtin class-name"},"export"),a(),n("span",{class:"token assign-left variable"},"GOPROXY"),n("span",{class:"token operator"},"="),a(`https://goproxy.cn
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("hr",null,null,-1),j=n("h3",{id:"vscode-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode-配置"},[n("span",null,"VSCode 配置")])],-1),J={href:"https://learn.microsoft.com/zh-cn/azure/developer/go/configure-visual-studio-code",target:"_blank",rel:"noopener noreferrer"},X=n("hr",null,null,-1),Y=i(`<h4 id="安装-go-扩展" tabindex="-1"><a class="header-anchor" href="#安装-go-扩展"><span>安装 Go 扩展</span></a></h4><p><img src="http://cdn.ayusummer233.top/img/202211110011319.png" alt="image-20221111001128293"></p><hr><h4 id="更新-go-工具" tabindex="-1"><a class="header-anchor" href="#更新-go-工具"><span>更新 Go 工具</span></a></h4><p>如果没有合适的科技手段的话那就先<a href="#%E4%BB%A3%E7%90%86">加个 Go 模块代理</a></p><blockquote><p>设置完后记得退出并重开 VSCode 加载环境变量</p></blockquote><hr><p><code>Ctrl+Shift+P</code> 打开命令面板, 然后输入</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Go: Install/Update tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202211110019859.png" alt="image-20221111001341882"></p></blockquote><p>单击进入该命令的提示项, 全选并确定, 之后会运行安装</p><blockquote><p><img src="http://cdn.ayusummer233.top/img/202211110013368.png" alt="image-20221111001322348"></p><p><img src="http://cdn.ayusummer233.top/img/202211110024764.png" alt="image-20221111002439729"></p><blockquote><p>悲ಥ_ಥ, 全装 C 盘去了, 不过还好 C 盘分配的空间比较多且性能相对好些, 就放这里了</p></blockquote></blockquote><ul><li><code>gotests</code>: 可以根据源文件的函数和方法签名自动生成表格驱动测试</li><li><code>gomodifytags</code>: 可以修改结构体的标签</li><li><code>impl</code>: 可以生成接口的实现</li><li><code>goplay</code>: 可以在浏览器中运行Go代码片段</li><li><code>dlv</code>: 是一个Go语言的调试器</li><li><code>staticcheck</code>: 是一个静态分析工具，可以检查代码中的错误和不良风格</li><li><code>gopls</code>: 是官方开发的Go语言服务器，可以提供智能提示、代码导航、代码编辑和诊断等功能。</li></ul><hr><p>创建一个新文件夹并使用 VSCode 打开此文件夹, 在终端运行如下命令初始化 Go 应用</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># go mod init [应用名], 例如:</span>
go mod init GoLearning
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://cdn.ayusummer233.top/img/202211110032630.png" alt="image-20221111003208612"></p><p><img src="http://cdn.ayusummer233.top/img/202211110032449.png" alt="image-20221111003240428"></p></blockquote><hr><p>在当前文件夹根目录创建一个 <code>main.go</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    name <span class="token operator">:=</span> <span class="token string">&quot;Go Developers&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Azure for&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在 line 7 打个断点, 然后 F5 运行下程序, 鼠标悬停在 name 上即可看到此时变量 name 的值</p><blockquote><p><img src="http://cdn.ayusummer233.top/img/202211110035920.png" alt="image-20221111003534890"></p></blockquote><p>继续运行可以看到如是输出</p><blockquote><p><img src="http://cdn.ayusummer233.top/img/202211110036826.png" alt="image-20221111003609799"></p></blockquote><hr><h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译"><span>编译</span></a></h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li><code>-o &lt;output&gt;</code>: 指定生成的可执行文件的名称和路径</li><li><code>-v</code>: 显示编译过程中的详细信息, 包括编译的包和文件</li><li><code>-a</code>: 强制重新编译所有包, 而不使用缓存</li><li><code>-race</code>: 开启数据竞争检测器, 用于检测并发程序中的数据竞争问题</li><li><code>-gcflags &lt;flag&gt;</code>: 设置 Go 编译器的代码生成标志, 例如 <code>-gcflags=&quot;-N -l&quot;</code> 可以关闭优化和内联</li><li><code>-tags &lt;tag&gt;</code>: 指定额外的编译标签, 例如 <code>-tags=jsoniter</code> 可以根据指定的标签条件编译程序</li><li><code>-mod &lt;value&gt;</code>: 设置 Go 模块的行为, 例如 <code>-mod=vendor</code> 可以优先使用 <code>vendor</code> 目录中的依赖</li></ul><hr><h3 id="隐藏命令调用的黑窗" tabindex="-1"><a class="header-anchor" href="#隐藏命令调用的黑窗"><span>隐藏命令调用的黑窗</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>go build <span class="token operator">-</span>ldflags=<span class="token string">&quot;-H windowsgui&quot;</span> <span class="token operator">-</span>o main<span class="token punctuation">.</span>exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-ldflags=&quot;-H windowsgui&quot;</code> 用于设置链接标志</p><ul><li><p><code>-ldflags</code> 用于指定链接标志</p></li><li><p><code>-H windowsgui</code> 指示链接器使用 <code>windowsgui</code> 子系统以隐藏命令行窗口</p><p>可以用于创建 GUI 应用程序, 因其不需要显示命令行窗口</p></li></ul><p>这里如果要达到隐藏效果除了设置链接标志外还需要保证程序里不直接调用命令行, 如 CMD, 例如对于如下命令</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>get_ip_config_cmd <span class="token operator">:=</span> <span class="token string">&quot;ipconfig /all&quot;</span>
cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;cmd&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/C&quot;</span><span class="token punctuation">,</span> get_ip_config_cmd<span class="token punctuation">)</span>
cmd<span class="token punctuation">.</span>SysProcAttr <span class="token operator">=</span> <span class="token operator">&amp;</span>syscall<span class="token punctuation">.</span>SysProcAttr<span class="token punctuation">{</span>HideWindow<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
output<span class="token punctuation">,</span> err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要修改为</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ipconfig&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/all&quot;</span><span class="token punctuation">)</span>
cmd<span class="token punctuation">.</span>SysProcAttr <span class="token operator">=</span> <span class="token operator">&amp;</span>syscall<span class="token punctuation">.</span>SysProcAttr<span class="token punctuation">{</span>HideWindow<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
output<span class="token punctuation">,</span> err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又如 调用系统默认应用打开文件:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;cmd&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;file:///&quot;</span><span class="token operator">+</span>home<span class="token operator">+</span><span class="token string">&quot;/&quot;</span><span class="token operator">+</span>filename<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改为:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;rundll32.exe&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;url.dll,FileProtocolHandler&quot;</span><span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="问题整理" tabindex="-1"><a class="header-anchor" href="#问题整理"><span>问题整理</span></a></h2><h3 id="go-get-已弃用" tabindex="-1"><a class="header-anchor" href="#go-get-已弃用"><span>go get 已弃用</span></a></h3>`,44),$={href:"https://www.jianshu.com/p/b93567e0af09",target:"_blank",rel:"noopener noreferrer"},K={href:"https://go.dev/doc/go-get-install-deprecation",target:"_blank",rel:"noopener noreferrer"},Q=i(`<hr><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">&#39;go get&#39;</span> is no longer supported outside a module.
        To build and <span class="token function">install</span> a command, use <span class="token string">&#39;go install&#39;</span> with a version,
        like <span class="token string">&#39;go install example.com/cmd@latest&#39;</span>
        For <span class="token function">more</span> information, see https://golang.org/doc/go-get-install-deprecation
        or run <span class="token string">&#39;go help get&#39;</span> or <span class="token string">&#39;go help install&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go get 在 <code>g.mod</code> 中同时用于更新依赖和安装命令。这种组合很混乱，使用起来也很不方便，因为开发人员不想同时进行更新和安装。</p><p><code>1.17.1</code> 及其后版本不再支持 <code>go get</code> 命令</p><p>如果要在当前模块的上下文中安装可执行文件时，使用 <code>go install</code> 不带版本后缀</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> example.com/cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令适用于安装当前目录或父目录中go.mod定义的版本要求和其他命令。</p><hr><p>要安装可执行文件同时忽略当前模块go.mod，使用go install带上版本后缀例如</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> example.com/cmd@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function Z(nn,an){const s=p("ExternalLinkIcon"),c=p("Tabs");return u(),d("div",null,[h,n("ul",null,[n("li",null,[m,n("p",null,[n("a",k,[a("Go 语言圣经"),e(s)])])]),n("li",null,[b,n("p",null,[n("a",v,[a("Go语言高级编程 - Go语言高级编程 (chai2010.cn)"),e(s)])])]),n("li",null,[f,n("p",null,[n("a",_,[a("Go语言定制指南 - Go语言定制指南 (chai2010.cn)"),e(s)])])]),n("li",null,[E,n("p",null,[n("a",x,[a("Introduction · Go2编程指南 (golang-china.github.io)"),e(s)])])]),n("li",null,[q,n("p",null,[n("a",G,[a("µGo语言实现 - µGo语言实现 (wa-lang.org)"),e(s)])])])]),A,n("ul",null,[n("li",null,[a("MicrosoftLearn 上的 Go 学习路线: "),n("a",w,[a("开始使用 Go - Training | Microsoft Learn"),e(s)])])]),B,y,C,n("blockquote",null,[n("p",null,[n("a",D,[a("Download and install - The Go Programming Language"),e(s)])]),P]),n("p",null,[a("可在 "),n("a",S,[a("Downloads - The Go Programming Language (google.cn)"),e(s)]),a(" 获取不同系统的 Go 安装包")]),e(c,{id:"133",data:[{id:"ubuntu/debian"},{id:"Windows"}],active:0},{title0:l(({value:o,isActive:t})=>[a("ubuntu/debian")]),title1:l(({value:o,isActive:t})=>[a("Windows")]),tab0:l(({value:o,isActive:t})=>[L]),tab1:l(({value:o,isActive:t})=>[O,T,z]),_:1}),V,H,n("blockquote",null,[n("p",null,[n("a",M,[a("goproxy.cn/README.zh-CN.md at master · goproxy/goproxy.cn (github.com)"),e(s)])]),N,F]),e(c,{id:"207",data:[{id:"Windows"},{id:"Linux/MacOS"}],active:0},{title0:l(({value:o,isActive:t})=>[a("Windows")]),title1:l(({value:o,isActive:t})=>[a("Linux/MacOS")]),tab0:l(({value:o,isActive:t})=>[W,I]),tab1:l(({value:o,isActive:t})=>[R]),_:1}),U,j,n("blockquote",null,[n("p",null,[n("a",J,[a("配置 Visual Studio Code for Go 开发 | Microsoft Learn"),e(s)])]),X]),Y,n("blockquote",null,[n("p",null,[n("a",$,[a("Golang弃用go get工具 - 简书 (jianshu.com)"),e(s)])]),n("p",null,[n("a",K,[a("Deprecation of 'go get' for installing executables - The Go Programming Language"),e(s)])])]),Q])}const ln=r(g,[["render",Z],["__file","index.html.vue"]]),on=JSON.parse('{"path":"/Language/Go/","title":"Go","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"参考书籍","slug":"参考书籍","link":"#参考书籍","children":[]},{"level":2,"title":"开发环境配置","slug":"开发环境配置","link":"#开发环境配置","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"代理","slug":"代理","link":"#代理","children":[]},{"level":3,"title":"VSCode 配置","slug":"vscode-配置","link":"#vscode-配置","children":[]}]},{"level":2,"title":"编译","slug":"编译","link":"#编译","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"隐藏命令调用的黑窗","slug":"隐藏命令调用的黑窗","link":"#隐藏命令调用的黑窗","children":[]}]},{"level":2,"title":"问题整理","slug":"问题整理","link":"#问题整理","children":[{"level":3,"title":"go get 已弃用","slug":"go-get-已弃用","link":"#go-get-已弃用","children":[]}]}],"git":{"createdTime":1678901875000,"updatedTime":1712625897000,"contributors":[{"name":"咸鱼型233","email":"ayusummer233@qq.com","commits":2},{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":5.64,"words":1692},"filePathRelative":"Language/Go/index.md","localizedDate":"2023年3月15日","excerpt":"\\n<ul>\\n<li><a href=\\"#go\\">Go</a>\\n<ul>\\n<li><a href=\\"#%E5%8F%82%E8%80%83%E4%B9%A6%E7%B1%8D\\">参考书籍</a></li>\\n<li><a href=\\"#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE\\">开发环境配置</a>\\n<ul>\\n<li><a href=\\"#%E5%AE%89%E8%A3%85\\">安装</a></li>\\n<li><a href=\\"#%E4%BB%A3%E7%90%86\\">代理</a></li>\\n<li><a href=\\"#vscode-%E9%85%8D%E7%BD%AE\\">VSCode 配置</a>\\n<ul>\\n<li><a href=\\"#%E5%AE%89%E8%A3%85-go-%E6%89%A9%E5%B1%95\\">安装 Go 扩展</a></li>\\n<li><a href=\\"#%E6%9B%B4%E6%96%B0-go-%E5%B7%A5%E5%85%B7\\">更新 Go 工具</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E9%97%AE%E9%A2%98%E6%95%B4%E7%90%86\\">问题整理</a>\\n<ul>\\n<li><a href=\\"#go-get-%E5%B7%B2%E5%BC%83%E7%94%A8\\">go get 已弃用</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{ln as comp,on as data};