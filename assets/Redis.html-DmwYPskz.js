import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c as u,a as e,d as s,b as a,w as t,e as r}from"./app-DxMJFouC.js";const m={},h=e("h1",{id:"redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis"},[e("span",null,"Redis")])],-1),b={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"},v=r('<hr><p>REmote DIctionary Server(Redis) 是一个由 Salvatore Sanfilippo 写的 key-value 存储系统，是跨平台的非关系型数据库。</p><p>Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存、分布式、可选持久性的键值对(Key-Value)存储数据库，并提供多种语言的 API。</p><p>Redis 通常被称为数据结构服务器，因为值(value) 可以是字符串(String)、哈希(Hash)、列表(list)、集合(sets)和有序集合(sorted sets)等类型。</p><blockquote><p>Redis is an open source (BSD licensed), in-memory <strong>data structure store</strong> used as a database, cache, message broker, and streaming engine.</p></blockquote><ul><li><a href="#redis">Redis</a><ul><li><a href="#%E5%AE%89%E8%A3%85">安装</a><ul><li><a href="#ubuntudebian">Ubuntu/Debian</a></li></ul></li><li><a href="#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4">常用命令</a></li></ul></li></ul><hr><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>',8),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` lsb-release

`),e("span",{class:"token comment"},"# 将仓库加入到 apt index, 并更新以及安装 redis"),s(`
`),e("span",{class:"token function"},"curl"),s(),e("span",{class:"token parameter variable"},"-fsSL"),s(" https://packages.redis.io/gpg "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"sudo"),s(" gpg "),e("span",{class:"token parameter variable"},"--dearmor"),s(),e("span",{class:"token parameter variable"},"-o"),s(` /usr/share/keyrings/redis-archive-keyring.gpg

`),e("span",{class:"token builtin class-name"},"echo"),s(),e("span",{class:"token string"},[s('"deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb '),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),s("lsb_release "),e("span",{class:"token parameter variable"},"-cs"),e("span",{class:"token variable"},")")]),s(' main"')]),s(),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"tee"),s(` /etc/apt/sources.list.d/redis.list

`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt-get"),s(` update
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt-get"),s(),e("span",{class:"token function"},"install"),s(` redis
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("p",null,"@tab windows",-1),_={href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"msi",-1),w=r(`<p>进入 redis 安装目录, 以管理员方式运行 <code>redis-server.exe</code> 即可</p><p>:::</p><hr><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> redis <span class="token comment"># 查看redis服务器进程</span>
<span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> pid <span class="token comment"># 杀死redis服务器</span>
<span class="token function">sudo</span> <span class="token function">killall</span> <span class="token parameter variable">-9</span> redis-server <span class="token comment"># 杀死redis服务器</span>
<span class="token function">sudo</span> redis-server /etc/redis/redis.conf <span class="token comment"># 指定加载的配置文件</span>
<span class="token function">netstat</span> -nlt<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">6372</span> <span class="token comment"># 我们检查Redis的网络监听端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>启动与停止</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/etc/init.d/redis-server stop
/etc/init.d/redis-server start
/etc/init.d/redis-server restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="安全相关" tabindex="-1"><a class="header-anchor" href="#安全相关"><span>安全相关</span></a></h2><h3 id="未授权访问" tabindex="-1"><a class="header-anchor" href="#未授权访问"><span>未授权访问</span></a></h3><p>低版本 Redis 默认配置下没有密码并绑定在 <code>0.0.0.0</code>, 因此可以直接被远程连接登入达成未授权访问 Redis 以及读取 Redis 的数据。</p><p>需要注意的是, 使用官网下载的 <code>redis.exe</code> 安装后是挂在 Windows 服务中的, 对应的配置文件是 <code>redis.windows-service.conf</code> 而非 <code>redis.windows</code></p><p>攻击者在未授权访问 Redis 的情况下，利用 Redis 自身的提供的config 命令，可以进行写文件操作</p><ul><li>如果目标服务器为 Linux 设备, 那么攻击者可以将自己的ssh公钥写入目标服务器的 <code>/root/.ssh</code> 文件夹的 <code>authotrized_keys</code> 文件中，进而可以使用对应私钥直接使用ssh服务登录目标服务器。</li><li>如果目标服务器为 Windows 设备 <ul><li>如果其上有 Web 服务的话, 通过暴破目录或者站点上有 php探针啥的页面获取到服务器上的 Web 目录后则可以尝试向其中写 webshell</li></ul></li></ul><hr>`,15);function x(E,y){const n=i("ExternalLinkIcon"),l=i("Tabs");return p(),u("div",null,[h,e("blockquote",null,[e("p",null,[e("a",b,[s("Redis"),a(n)])]),e("p",null,[e("a",k,[s("Redis 教程 | 菜鸟教程 (runoob.com)"),a(n)])])]),v,a(l,{id:"56",data:[{id:"Ubuntu/Debian"}],active:0},{title0:t(({value:o,isActive:c})=>[s("Ubuntu/Debian")]),tab0:t(({value:o,isActive:c})=>[f]),_:1}),g,e("p",null,[s("到 "),e("a",_,[s("Releases · tporadowski/redis --- 发布 · tporadowski/redis (github.com)"),a(n)]),s(" 下载 "),R,s(" 文件进行安装即可")]),w])}const S=d(m,[["render",x],["__file","Redis.html.vue"]]),D=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis.html","title":"Redis","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"安全相关","slug":"安全相关","link":"#安全相关","children":[{"level":3,"title":"未授权访问","slug":"未授权访问","link":"#未授权访问","children":[]}]}],"git":{"createdTime":1667837365000,"updatedTime":1709635981000,"contributors":[{"name":"咸鱼型233","email":"ayusummer233@qq.com","commits":2},{"name":"233Official","email":"ayusummer233@qq.com","commits":1},{"name":"233Official","email":"ayusummr233@gmail.com","commits":1},{"name":"Ayusummer","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"后端/数据库/Redis.md","localizedDate":"2022年11月7日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://redis.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Redis</a></p>\\n<p><a href=\\"https://www.runoob.com/redis/redis-tutorial.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Redis 教程 | 菜鸟教程 (runoob.com)</a></p>\\n</blockquote>\\n<hr>\\n<p>REmote DIctionary Server(Redis) 是一个由 Salvatore Sanfilippo 写的 key-value 存储系统，是跨平台的非关系型数据库。</p>"}');export{S as comp,D as data};
