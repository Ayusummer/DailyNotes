import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as r,a as e,d as n,b as s,e as o}from"./app-DxMJFouC.js";const c={},d=e("hr",null,null,-1),p=e("h1",{id:"tensorflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tensorflow"},[e("span",null,"TensorFlow")])],-1),u=e("hr",null,null,-1),m=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),h=o(`<li><code>TensorFlow</code>安装的时候需要装<code>dll</code>,因此不可以通过直接拷贝别人装好的的<code>site-packages/TensorFlow...</code>来安装</li><li>相应环境命令行执行<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install TensorFlow --user --no-warn-script-location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>--user</code> : pip 默认安装 package 到 system directory, 通过 --user 可以将 package 安装到 /home 路径下</li><li><code>--no-warn-script-location</code> : 忽略脚本警告</li><li>个人使用清华的源安装 <code>TensorFlow</code> 时经常超时,可以使用阿里的源</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install TensorFlow --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr></li>`,2),v=e("code",null,"TensorFlow",-1),g=e("code",null,"keras",-1),y=e("code",null,"python",-1),x={href:"https://docs.floydhub.com/guides/environments/",target:"_blank",rel:"noopener noreferrer"},b=o(`<li>最新版本的 <code>TensorFlow2.2.0</code> 适配 <code>keras2.3.1</code> + <code>python3.7.</code></li><li>找网上的往期项目往往依赖比较老,例如:<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> keras<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>saving
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>相应版本 <code>keras2.2.4</code> 对应 <code>python3.6.</code>, <code>tensorflow 1.13.0</code> 安装时可以<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install TensorFlow==1.13.1 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install keras==2.2.4 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这里注意阿里云的源中 1.13.0 后都有rc 因此直接 <code>==1.13.0</code> 会报错找不到相应版本,因此这里安装<code>1.13.1</code></li></ul></li>`,2),w=o(`<hr><h2 id="安装报错记录" tabindex="-1"><a class="header-anchor" href="#安装报错记录"><span>安装报错记录</span></a></h2><hr><h3 id="modulenotfounderror-no-module-named-numpy-core-multiarray-umath" tabindex="-1"><a class="header-anchor" href="#modulenotfounderror-no-module-named-numpy-core-multiarray-umath"><span><code>ModuleNotFoundError: No module named &#39;numpy.core._multiarray_umath&#39;</code></span></a></h3><ul><li>适应 <code>numpy</code> 版本 <code>1.14.6 ~ 1.17.2</code><ul><li>满足 <code>tensorflow1.13.1</code> 要求的 <code>numpy &gt;= 1.13.3</code></li><li><code>numpy==1.15.0</code>测试成功</li></ul></li></ul><hr><h3 id="importerror-cannot-import-name-ccallback-c" tabindex="-1"><a class="header-anchor" href="#importerror-cannot-import-name-ccallback-c"><span><code>ImportError: cannot import name &#39;_ccallback_c&#39;</code></span></a></h3><ul><li>当前 <code>scipy==1.4.0</code></li></ul><hr><h3 id="接收的某个项目的依赖安装记录" tabindex="-1"><a class="header-anchor" href="#接收的某个项目的依赖安装记录"><span>接收的某个项目的依赖安装记录</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install TensorFlow==1.13.1 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/

pip install keras==2.2.4 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/

pip install opencv-python -i https://mirrors.aliyun.com/pypi/simple/

pip install matplotlib -i https://mirrors.aliyun.com/pypi/simple/

pip install Pillow -i https://mirrors.aliyun.com/pypi/simple/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function _(k,f){const l=i("ExternalLinkIcon");return t(),r("div",null,[d,p,u,m,e("ul",null,[h,e("li",null,[v,n(" 与 "),g,n(" 以及 "),y,n(" 版本要相匹配 "),e("ul",null,[e("li",null,[e("a",x,[n("表格参考"),s(l)])]),b])])]),w])}const N=a(c,[["render",_],["__file","TensorFlow.html.vue"]]),E=JSON.parse(`{"path":"/Language/Python/libs/TensorFlow/TensorFlow.html","title":"TensorFlow","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"安装报错记录","slug":"安装报错记录","link":"#安装报错记录","children":[{"level":3,"title":"ModuleNotFoundError: No module named 'numpy.core._multiarray_umath'","slug":"modulenotfounderror-no-module-named-numpy-core-multiarray-umath","link":"#modulenotfounderror-no-module-named-numpy-core-multiarray-umath","children":[]},{"level":3,"title":"ImportError: cannot import name '_ccallback_c'","slug":"importerror-cannot-import-name-ccallback-c","link":"#importerror-cannot-import-name-ccallback-c","children":[]},{"level":3,"title":"接收的某个项目的依赖安装记录","slug":"接收的某个项目的依赖安装记录","link":"#接收的某个项目的依赖安装记录","children":[]}]}],"git":{"createdTime":1694760760000,"updatedTime":1694760760000,"contributors":[{"name":"233Official","email":"ayusummr233@gmail.com","commits":1}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"Language/Python/libs/TensorFlow/TensorFlow.md","localizedDate":"2023年9月15日","excerpt":"<hr>\\n<h1>TensorFlow</h1>\\n<hr>\\n<h2>安装</h2>\\n<ul>\\n<li><code>TensorFlow</code>安装的时候需要装<code>dll</code>,因此不可以通过直接拷贝别人装好的的<code>site-packages/TensorFlow...</code>来安装</li>\\n<li>相应环境命令行执行<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>pip install TensorFlow --user --no-warn-script-location\\n</code></pre></div><ul>\\n<li><code>--user</code> : pip 默认安装 package 到 system directory, 通过 --user 可以将 package 安装到 /home 路径下</li>\\n<li><code>--no-warn-script-location</code> : 忽略脚本警告</li>\\n<li>个人使用清华的源安装 <code>TensorFlow</code> 时经常超时,可以使用阿里的源</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>pip install TensorFlow --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/\\n</code></pre></div><hr>\\n</li>\\n<li><code>TensorFlow</code> 与 <code>keras</code> 以及 <code>python</code> 版本要相匹配\\n<ul>\\n<li><a href=\\"https://docs.floydhub.com/guides/environments/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">表格参考</a></li>\\n<li>最新版本的 <code>TensorFlow2.2.0</code> 适配 <code>keras2.3.1</code> + <code>python3.7.</code></li>\\n<li>找网上的往期项目往往依赖比较老,例如:<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> keras<span class=\\"token punctuation\\">.</span>engine<span class=\\"token punctuation\\">.</span>saving\\n</code></pre></div>相应版本 <code>keras2.2.4</code> 对应 <code>python3.6.</code>, <code>tensorflow 1.13.0</code>\\n安装时可以<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>pip install TensorFlow==1.13.1 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/\\n</code></pre></div><hr>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>pip install keras==2.2.4 --user --no-warn-script-location -i https://mirrors.aliyun.com/pypi/simple/\\n</code></pre></div><ul>\\n<li>这里注意阿里云的源中 1.13.0 后都有rc 因此直接 <code>==1.13.0</code> 会报错找不到相应版本,因此这里安装<code>1.13.1</code></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}`);export{N as comp,E as data};