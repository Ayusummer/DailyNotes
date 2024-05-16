import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as l,a as e,d as n,b as s,e as t}from"./app-DxMJFouC.js";const c={},d=e("h1",{id:"vectr",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vectr"},[e("span",null,"Vectr")])],-1),p={href:"https://vectr.io/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/SecurityRiskAdvisors/VECTR",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"紫队工具, 可以帮助跟踪红队和蓝队测试活动以衡量不同攻击场景的检测和预防能力",-1),v=e("hr",null,null,-1),h=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),k={href:"https://docs.vectr.io/Installation/",target:"_blank",rel:"noopener noreferrer"},b=t('<hr><h3 id="硬件要求" tabindex="-1"><a class="header-anchor" href="#硬件要求"><span>硬件要求</span></a></h3><p>官方推荐使用 ubuntu LTS 版本(18.04 - 22.04) 安装</p><ul><li>能够通过 Internet 访问 Github 和 DockerHub</li><li><code>&gt;= 4C8G</code></li><li>100 +GB SSD</li></ul><hr><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h3>',6),g={href:"https://ayusummer.github.io/DailyNotes/%E9%80%9A%E8%AF%86/Docker/Docker.html#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},_=t(`<hr><h3 id="确定安装路径" tabindex="-1"><a class="header-anchor" href="#确定安装路径"><span>确定安装路径</span></a></h3><p>官方推荐将 Vectr 安装在 <code>/opt/vectr</code> 中</p><blockquote><p><code>/opt</code>: 可选软件包的安装位置。某些第三方软件可能安装在此处。</p></blockquote><hr><h3 id="下载-vector-runtime" tabindex="-1"><a class="header-anchor" href="#下载-vector-runtime"><span>下载 Vector Runtime</span></a></h3><p>在 <code>/opt/vectr</code> 目录下运行如下命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://ghproxy.com/https://github.com/SecurityRiskAdvisors/VECTR/releases/download/ce-8.9.1/sra-vectr-runtime-8.9.1-ce.zip 
<span class="token function">unzip</span> sra-vectr-runtime-8.9.1-ce.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201539716.png" alt="image-20230920153844593"></p><hr><h3 id="配置-env-文件" tabindex="-1"><a class="header-anchor" href="#配置-env-文件"><span>配置 .env 文件</span></a></h3><p>编辑 <code>/opt/vectr</code> 目录下的 <code>.env</code> 文件, 写入并编辑如下配置:</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># .env file</span>
<span class="token comment"># VECTR URL, 如果尝试通过 IP 访问, 也会被重定向为此 hostname; 需要配置 DNS 解析俩支持此项配置</span>
<span class="token key attr-name">VECTR_HOSTNAME</span><span class="token punctuation">=</span><span class="token value attr-value">sravectr.internal</span>
<span class="token comment"># Tomcat 实例监听 HTTPS 的端口(VECTR不支持HTTP访问)</span>
<span class="token key attr-name">VECTR_PORT</span><span class="token punctuation">=</span><span class="token value attr-value">8081</span>

<span class="token comment"># defaults to warn, debug useful for development</span>
<span class="token key attr-name">VECTR_CONTAINER_LOG_LEVEL</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;DEBUG&quot;</span>

<span class="token key attr-name">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">=</span><span class="token value attr-value">admin</span>

<span class="token comment"># PLEASE change this and store it in a safe place.  Encrypted data like passwords</span>
<span class="token comment"># to integrate with external systems (like TAXII) use this key</span>
<span class="token comment"># 用于与外部系统(如 TAXII) 集成的密码登加密数据会使用此密钥</span>
<span class="token key attr-name">VECTR_DATA_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">CHANGEMENOW</span>

<span class="token comment"># ALSO change and store in a safe place</span>
<span class="token comment"># 默认的 MongoDB 登录密码</span>
<span class="token key attr-name">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">=</span><span class="token value attr-value">CHANGEMENOW</span>

<span class="token comment"># JWT signing (JWS) and encryption (JWE) keys</span>
<span class="token comment"># Do not use the same value for both signing and encryption!</span>
<span class="token comment"># JWT Signing 和 JWT Encryption Key, 不建议使用相同的值, 至少 16 个可打印的 Unicode 字符</span>
<span class="token key attr-name">JWS_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">CHANGEME</span>
<span class="token key attr-name">JWE_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">CHANGEMENOW</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>VSCode 左侧目录树默认不显示这些<code>.</code>开头的隐藏文件, 可以使用 <code>code .env</code> 打开, 或者使用 <code>打开文件</code> 找到并打开此文件</p></blockquote><hr><h3 id="启动-docker-containers" tabindex="-1"><a class="header-anchor" href="#启动-docker-containers"><span>启动 Docker Containers</span></a></h3><p>在 <code>/opt/vectr</code> 目录下运行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动并后台执行容器</span>
<span class="token function">sudo</span> <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201612011.png" alt="image-20230920161208935"></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201612218.png" alt="image-20230920161221160"></p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201614534.png" alt="image-20230920161430439"></p><hr><h3 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts"><span>配置 hosts</span></a></h3><p>编辑 <code>/etc/hosts</code>, 加一行解析, 其中 <code>sravectr.internal</code> 就是先前配置的 <code>.env</code> 中的 <code>VECTR_HOSTNAME</code></p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">127.0.0.1</span> <span class="token value attr-value">      sravectr.internal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存后,系统会立即开始使用新的映射关系, 可以尝试 ping 下看看</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ping</span> sravectr.internal <span class="token parameter variable">-c</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201611091.png" alt="image-20230920161114620"></p><p>如果没生效, 可以尝试清除 DNS 缓存:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemd-resolve --flush-caches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者重启试试</p><hr><p>要在其他主机上访问该主机上的 Vectr 服务请将该主机 ip 和 <code>sravectr.internal</code> 写到 hosts 里, Windwos 的 Hosts 在 <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p><hr><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>访问宿主机的 8081 端口的HTTPS 服务</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201618274.png" alt="image-20230920161834164"></p><p>使用默认凭据登入:</p><ul><li><code>User</code>: <code>admin</code></li><li><code>Password</code>: <code>11_ThisIsTheFirstPassword_11</code></li></ul><p>登入后可以在 Profile 页修改密码:</p><p><img src="http://cdn.ayusummer233.top/DailyNotes/202309201703333.png" alt="image-20230920170340643"></p>`,41);function f(T,y){const a=o("ExternalLinkIcon");return r(),l("div",null,[d,e("blockquote",null,[e("p",null,[e("a",p,[n("VECTR | Collaborate. Quantify. Improve. --- 向量|合作。量化。提升。"),s(a)])]),e("p",null,[e("a",u,[n("SecurityRiskAdvisors/VECTR: VECTR is a tool that facilitates tracking of your red and blue team testing activities to measure detection and prevention capabilities across different attack scenarios --- SecurityRiskAdvisors/VECTR：VECTR 是一种工具，可帮助跟踪红队和蓝队测试活动，以衡量不同攻击场景的检测和预防能力 (github.com)"),s(a)])])]),m,v,h,e("blockquote",null,[e("p",null,[e("a",k,[n("Getting Started - VECTR Documentation --- 入门 - VECTR 文档"),s(a)])])]),b,e("blockquote",null,[e("p",null,[e("a",g,[n("Docker | DailyNotes (ayusummer.github.io)"),s(a)])])]),e("p",null,[n("可参阅 "),e("a",E,[n("Install Docker Engine on Ubuntu | Docker Docs"),s(a)]),n(" 安装 Docker")]),_])}const C=i(c,[["render",f],["__file","Vectr.html.vue"]]),A=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/%E7%AB%AF%E7%82%B9%E5%AE%89%E5%85%A8/AtomicRedTeam/Vectr.html","title":"Vectr","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"硬件要求","slug":"硬件要求","link":"#硬件要求","children":[]},{"level":3,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]},{"level":3,"title":"确定安装路径","slug":"确定安装路径","link":"#确定安装路径","children":[]},{"level":3,"title":"下载 Vector Runtime","slug":"下载-vector-runtime","link":"#下载-vector-runtime","children":[]},{"level":3,"title":"配置 .env 文件","slug":"配置-env-文件","link":"#配置-env-文件","children":[]},{"level":3,"title":"启动 Docker Containers","slug":"启动-docker-containers","link":"#启动-docker-containers","children":[]},{"level":3,"title":"配置 hosts","slug":"配置-hosts","link":"#配置-hosts","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]}],"git":{"createdTime":1695206989000,"updatedTime":1695206989000,"contributors":[{"name":"233Official","email":"ayusummr233@gmail.com","commits":1}]},"readingTime":{"minutes":2.45,"words":735},"filePathRelative":"网络安全/端点安全/AtomicRedTeam/Vectr.md","localizedDate":"2023年9月20日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://vectr.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">VECTR | Collaborate. Quantify. Improve. --- 向量|合作。量化。提升。</a></p>\\n<p><a href=\\"https://github.com/SecurityRiskAdvisors/VECTR\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SecurityRiskAdvisors/VECTR: VECTR is a tool that facilitates tracking of your red and blue team testing activities to measure detection and prevention capabilities across different attack scenarios --- SecurityRiskAdvisors/VECTR：VECTR 是一种工具，可帮助跟踪红队和蓝队测试活动，以衡量不同攻击场景的检测和预防能力 (github.com)</a></p>\\n</blockquote>"}');export{C as comp,A as data};