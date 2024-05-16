import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c,a as e,d as t,b as o,e as a}from"./app-DxMJFouC.js";const l={},h=e("h1",{id:"go-cqhttp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#go-cqhttp"},[e("span",null,"go-cqhttp")])],-1),d={href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},u=e("hr",null,null,-1),m=e("h2",{id:"安装运行-以-ubuntu-为例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装运行-以-ubuntu-为例"},[e("span",null,"安装运行(以 Ubuntu 为例)")])],-1),g={href:"https://github.com/Mrs4s/go-cqhttp/releases",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>解压:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xf</span> go-cqhttp_linux_amd64.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给 <code>go-cqhttp</code> 文件的所有者以执行权限</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> u+x go-cqhttp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首次运行 <code>go-cqhttp</code> 生成配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./go-cqhttp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202205231348243.png" alt="image-20220523134826512"></p><p>修改完配置后再次运行即可</p><hr><h2 id="群内-qa" tabindex="-1"><a class="header-anchor" href="#群内-qa"><span>群内 QA</span></a></h2><h3 id="正在登陆的设备存在风险" tabindex="-1"><a class="header-anchor" href="#正在登陆的设备存在风险"><span>正在登陆的设备存在风险</span></a></h3>`,11),_={href:"https://github.com/Mrs4s/go-cqhttp/issues/1469",target:"_blank",rel:"noopener noreferrer"},f=a('<p><img src="http://cdn.ayusummer233.top/img/202205192017385.png" alt="image-20220519201708016"></p><p>解决方案:</p><p>在本地运行 go-cqhttp, 登陆成功会生成 <code>session.token</code> 文件, 将其拷贝到服务器相应位置即可</p><p><img src="http://cdn.ayusummer233.top/img/202205231424440.png" alt="image-20220523142442098"></p><hr><h1 id="yobot" tabindex="-1"><a class="header-anchor" href="#yobot"><span>yobot</span></a></h1><h2 id="群内-qa-1" tabindex="-1"><a class="header-anchor" href="#群内-qa-1"><span>群内 QA</span></a></h2><hr><h1 id="hoshino" tabindex="-1"><a class="header-anchor" href="#hoshino"><span>Hoshino</span></a></h1><p>—</p><h2 id="群内qa" tabindex="-1"><a class="header-anchor" href="#群内qa"><span>群内QA</span></a></h2><h3 id="jinja2-报错" tabindex="-1"><a class="header-anchor" href="#jinja2-报错"><span>jinja2 报错</span></a></h3><p><code>ImportError: cannot import name ‘escape’ from ‘jinja2’</code></p>',13),q={href:"https://github.com/Ice-Cirno/HoshinoBot/commits/master/requirements.txt",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Ice-Cirno/HoshinoBot/commit/6638354c4b3d30449ffe0ff80d25582052c58924",target:"_blank",rel:"noopener noreferrer"},x=a('<p><img src="http://cdn.ayusummer233.top/img/202205191741126.png" alt="image-20220519174112490"></p><p>这是因为原版 <code>requirements.txt</code> 中 <code>jinja2</code> 用的 <code>&gt;=</code> 默认安装最新版本, 但是 <code>hoshino</code> 无法适应新版本</p><p>在依赖中尽量不要写依赖的 <code>latest</code> 版本, 否则新安装依赖默认安装最新版本容易报错</p><p>解决方案:</p>',4),v=e("code",null,"Hoshino",-1),j=e("code",null,"requirements.txt",-1),B={href:"https://github.com/Ice-Cirno/HoshinoBot/blob/master/requirements.txt",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[e("img",{src:"http://cdn.ayusummer233.top/img/202205192011780.png",alt:"image-20220519201140632"})],-1),H=e("p",null,[e("img",{src:"http://cdn.ayusummer233.top/img/202205192018445.png",alt:"image-20220519201815162"})],-1),I=e("blockquote",null,[e("p",null,[t("与 jinja2 同期的上游依赖不兼容的问题还有 werkzeug, 直接拉 "),e("code",null,"hoshino"),t(" 仓库最新的 "),e("code",null,"requirements"),t(" 更新即可")])],-1),C=e("hr",null,null,-1),M={href:"https://discuss.streamlit.io/t/rror-no-matching-distribution-found-for-dataclasses-0-8/11667/3",target:"_blank",rel:"noopener noreferrer"};function A(N,E){const n=r("ExternalLinkIcon");return i(),c("div",null,[h,e("blockquote",null,[e("p",null,[e("a",d,[t("go-cqhttp 帮助中心"),o(n)])]),e("p",null,[e("a",p,[t("Mrs4s/go-cqhttp: cqhttp的golang实现，轻量、原生跨平台. (github.com)"),o(n)])])]),u,m,e("p",null,[t("在 "),e("a",g,[t("Releases · Mrs4s/go-cqhttp (github.com)"),o(n)]),t(" 获取系统对应版本的 release")]),b,e("blockquote",null,[e("p",null,[e("a",_,[t("Bug: 登录协议崩了 · Issue #1469 · Mrs4s/go-cqhttp (github.com)"),o(n)])])]),f,e("blockquote",null,[e("p",null,[e("a",q,[t("History for requirements.txt - Ice-Cirno/HoshinoBot (github.com)"),o(n)])]),e("p",null,[e("a",k,[t("指定Jinja2与werkzeug的版本(上游依赖有不兼容的改动) · Ice-Cirno/HoshinoBot@6638354 (github.com)"),o(n)])])]),x,e("p",null,[v,t(" 仓库已经更新了 "),j,t(", 直接拉最新的 "),e("a",B,[t("HoshinoBot/requirements.txt at master · Ice-Cirno/HoshinoBot (github.com)"),o(n)]),t(" 安装即可")]),y,H,I,C,e("p",null,[e("a",M,[t("RROR: No matching distribution found for dataclasses==0.8 - Streamlit Cloud - Streamlit"),o(n)])])])}const R=s(l,[["render",A],["__file","index.html.vue"]]),S=JSON.parse('{"path":"/%E5%A8%B1%E4%B9%90/Bot/","title":"go-cqhttp","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装运行(以 Ubuntu 为例)","slug":"安装运行-以-ubuntu-为例","link":"#安装运行-以-ubuntu-为例","children":[]},{"level":2,"title":"群内 QA","slug":"群内-qa","link":"#群内-qa","children":[{"level":3,"title":"正在登陆的设备存在风险","slug":"正在登陆的设备存在风险","link":"#正在登陆的设备存在风险","children":[]}]},{"level":2,"title":"群内 QA","slug":"群内-qa-1","link":"#群内-qa-1","children":[]},{"level":2,"title":"群内QA","slug":"群内qa","link":"#群内qa","children":[{"level":3,"title":"jinja2 报错","slug":"jinja2-报错","link":"#jinja2-报错","children":[]}]}],"git":{"createdTime":1676987863000,"updatedTime":1676987863000,"contributors":[{"name":"咸鱼型233","email":"ayusummer233@qq.com","commits":1}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"娱乐/Bot/index.md","localizedDate":"2023年2月21日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://docs.go-cqhttp.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">go-cqhttp 帮助中心</a></p>\\n<p><a href=\\"https://github.com/Mrs4s/go-cqhttp\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Mrs4s/go-cqhttp: cqhttp的golang实现，轻量、原生跨平台. (github.com)</a></p>\\n</blockquote>\\n<hr>\\n<h2>安装运行(以 Ubuntu 为例)</h2>"}');export{R as comp,S as data};
