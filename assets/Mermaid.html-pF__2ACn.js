import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as t,c,b as i,a as e,d,e as n}from"./app-DxMJFouC.js";const o={},m=n(`<h1 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h1><ul><li><a href="#mermaid">Mermaid</a><ul><li><a href="#%E7%BB%93%E7%82%B9%E5%86%85%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C">结点内文字换行</a></li><li><a href="#%E9%99%90%E5%88%B6%E6%B5%81%E7%A8%8B%E5%9B%BE%E5%A4%A7%E5%B0%8F">限制流程图大小</a></li><li><a href="#%E6%98%BE%E7%A4%BA%E6%94%AF%E6%8C%81">显示支持</a></li><li><a href="#%E7%94%98%E7%89%B9%E5%9B%BE">甘特图</a></li><li><a href="#%E6%B5%81%E7%A8%8B%E5%9B%BE">流程图</a><ul><li><a href="#%E6%B5%81%E7%A8%8B%E5%9B%BE%E6%95%B4%E4%BD%93%E6%96%B9%E5%90%91">流程图整体方向</a></li><li><a href="#%E7%BB%93%E7%82%B9%E5%BD%A2%E7%8A%B6">结点形状</a></li><li><a href="#%E8%BF%9E%E6%8E%A5%E7%BA%BF%E5%BD%A2%E7%8A%B6">连接线形状</a></li><li><a href="#%E8%AF%AD%E6%B3%95%E5%86%B2%E7%AA%81%E7%9A%84%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6">语法冲突的特殊字符</a></li></ul></li><li><a href="#%E6%97%B6%E5%BA%8F%E5%9B%BE">时序图</a></li></ul></li></ul><hr><h2 id="结点内文字换行" tabindex="-1"><a class="header-anchor" href="#结点内文字换行"><span>结点内文字换行</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>graph LR;
a--&gt;b[2&lt;br&gt;3&lt;br&gt;3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u=n(`<hr><h2 id="限制流程图大小" tabindex="-1"><a class="header-anchor" href="#限制流程图大小"><span>限制流程图大小</span></a></h2><ul><li>绘图时在当前方向上绘制的结点数量及文字比较多那么篇幅会无限扩大, 目前没有找到特别好的限制区域大小的方法</li><li>不过通常编辑文档时的界面左右大小适应屏幕左右宽度, 上下可以滚动, 那么可以指定 Mermaid 图左右方向绘制以避免图像过长</li></ul><hr><h2 id="显示支持" tabindex="-1"><a class="header-anchor" href="#显示支持"><span>显示支持</span></a></h2><ul><li>VSCode 需要安装扩展-Markdown Preview Mermaid Support 以预览 Mermaid 图像</li></ul><hr><h2 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图"><span>甘特图</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gantt
dateFormat  YYYY-MM-DD
title 甘特图
excludes weekdays 2014-01-10

Completed task  : des1, 2014-01-06,2014-01-08
Active task     : des2, 2014-01-09, 2d
Future task     : des3, after des2, 5d
Future task2    : des4, after des3, 5d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=e("hr",null,null,-1),h=e("h2",{id:"流程图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图"},[e("span",null,"流程图")])],-1),b={href:"https://mermaid-js.github.io/mermaid/#/flowchart?id=graph",target:"_blank",rel:"noopener noreferrer"},E=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>flowchart TD
    Start --&gt; Stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=n('<hr><blockquote><p><code>--&gt;</code> 实线箭头</p></blockquote><hr><h3 id="流程图整体方向" tabindex="-1"><a class="header-anchor" href="#流程图整体方向"><span>流程图整体方向</span></a></h3><ul><li><code>TB</code> - top to bottom</li><li><code>TD</code> - top-down/ same as top to bottom</li><li><code>BT</code> - bottom to top</li><li><code>RL</code> - right to left</li><li><code>LR</code> - left to right</li></ul><hr><h3 id="结点形状" tabindex="-1"><a class="header-anchor" href="#结点形状"><span>结点形状</span></a></h3>',7),p={href:"https://mermaid-js.github.io/mermaid/#/flowchart?id=node-shapes",target:"_blank",rel:"noopener noreferrer"},B=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>flowchart LR
  id1(round edges)
  id2([stadium-shaped])
  id3[[subroutine shape]]
  id4[(A node in a cylindrical shape)]
  id5((A node in the form of a circle))
  id6&gt;A node in an asymmetric shape]
  id7{A node rhombus}
  id8{{A hexagon node}}
  id9[/Parallelogram/]
  id10[\\Parallelogram alt\\]
  id11[/Trapezoid\\]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=e("hr",null,null,-1),x=e("h3",{id:"连接线形状",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#连接线形状"},[e("span",null,"连接线形状")])],-1),f={href:"https://mermaid-js.github.io/mermaid/#/flowchart?id=links-between-nodes",target:"_blank",rel:"noopener noreferrer"},C=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>flowchart LR
  A --&gt; B
  A --实线单箭头--&gt; B
  A --&gt;|实线单箭头|C
  
  B --- C
  B --实线--- C
  B ---|实线|D
  
  C -.-|虚线|D
  C -.-&gt;|虚线单箭头|D
  
  D ==&gt; E
  D ==&gt;|粗实线单箭头|E
  
  E --&gt; F &amp; G --&gt; H
  
  H &amp; I --&gt; J &amp; K
  
  L --o|实线圆头|M
  M --x|实线x头|N
  
  N &lt;--&gt; |双向箭头|O
  O o--o P
  P x--x Q
  
  R -------|横线越多越长| S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=e("hr",null,null,-1),k=e("h3",{id:"语法冲突的特殊字符",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#语法冲突的特殊字符"},[e("span",null,"语法冲突的特殊字符")])],-1),w={href:"https://mermaid-js.github.io/mermaid/#/flowchart?id=special-characters-that-break-syntax",target:"_blank",rel:"noopener noreferrer"},S=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>flowchart LR
  A[&quot;结点内使用(括号)&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F=n(`<hr><h3 id="子图" tabindex="-1"><a class="header-anchor" href="#子图"><span>子图</span></a></h3><p><code>语法</code>:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>subgraph title
    graph definition
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>示例</code>:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>flowchart TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),T=e("hr",null,null,-1),D=e("h2",{id:"时序图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#时序图"},[e("span",null,"时序图")])],-1),M={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},L={href:"https://blog.csdn.net/qq_37196887/article/details/112764646",target:"_blank",rel:"noopener noreferrer"},y=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sequenceDiagram
participant C as Client.discard(9)
participant S as Server.47660
C -&gt;&gt; S: [SYN] 请求建立 TCP 连接
S -&gt;&gt; C: [SYN ACK] 确认建立 TCP 连接
C -&gt;&gt; S: [ACK] 确认收到确认建立 TCP 连接

Note over C,S: ↑ 3 次握手

loop 数据传输(不分片情况)
C -&gt;&gt; S: [PSH ACK] 发送数据
S -&gt;&gt; C: [ACK]确认接收数据
end

Note over C,S: ↓ 4 次挥手

C -&gt;&gt; S: [FIN, ACK] 发起终止连接请求
S -&gt;&gt; C: [ACK] 确认终止连接请求
S -&gt;&gt; C: [FIN, ACK] 发起终止连接请求
C -&gt;&gt; S: [ACK] 确认终止连接请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function K(R,V){const l=s("Mermaid"),a=s("ExternalLinkIcon");return t(),c("div",null,[m,i(l,{id:"mermaid-69",code:"eJxLL0osyFDwCbLmStTVtUuKNrJJKrIzBhOxXACEvQhn"}),u,i(l,{id:"mermaid-102",code:"eJxLT8wrKeFKSSxJdcsvyk0sUVCIBAJdX19dFxeuksySnFSF51NmPO/c+XT2Pq7UiuSc0pTUYoXy1NTslMTKYgUjA0MTXQNDXUMDLi7n/NyCnNSS1BSFksTibAUFKwWgUkMduBoDMx0404LLMbkksywVqhQIwKqNkFRbAtkpXG6lJaVF6MqMdRQS00pSi6BaTFGUGcGVmSApA2oBKgMAqWVHzg=="}),v,h,e("blockquote",null,[e("p",null,[e("a",b,[d("Flowchart (mermaid-js.github.io)"),i(a)])])]),E,i(l,{id:"mermaid-113",code:"eJxLy8kvT85ILCpRCHHhUgCC4BIQR1fXDsjKL+ACAKoYCaM="}),g,e("blockquote",null,[e("p",null,[e("a",p,[d("Flowchart (mermaid-js.github.io)"),i(a)])])]),B,i(l,{id:"mermaid-161",code:"eJxVjbtuwzAMRfd+BUd7KFz33aVA9w5F0U3xwFi0JUASC0pGmwT59yiShwTgdO7hvZPjv9GgJPj8vgGwum+El6CB9EyxLei+UTGhtou/jQZ/SQ+VPygVl23Wkw0EJRqGkjyq5gMCawIbAGHcORu02BFd1dqqPTUXWjIEE4sHns4vVkZHbR16fr9oyxd33lPKfetokV4OqySG/XaJx0JfDxkb+seZQ4mPlb+p7gsFnSPHs6Dvakl/pzZXHNClzZr1qvuRvLdnqzM7AQLYaEE="}),A,x,e("blockquote",null,[e("p",null,[e("a",f,[d("Flowchart (mermaid-js.github.io)"),i(a)])])]),C,i(l,{id:"mermaid-172",code:"eJxLy8kvT85ILCpR8AniUlBwVNDVtVNwgrKerpv3fNf+p71Tn69b+3TJFmQpuxo0yRpnoAwQOQEldRVAHBALoghZRBeqscYFot5ZQVdPt+bFzFkwMbCAHVQEYTxUuYuCra2dgiuMVfN803R0h4AkgcgV7BU3BTUFdzDLAyLsARTwBAt4AVneEEEfoEA+zEdz2kCm+AKFfYHCFVDhCpCgH0S5n4INyICap/09TydMhFrrD5TwV8gHGqQQAGQGKFQANSsEQnQEgXwOAjXPVqwCmvZiW9fTJbOA5Mup+2sUgrkAHxWVzw=="}),_,k,e("blockquote",null,[e("p",null,[e("a",w,[d("Flowchart (mermaid-js.github.io)"),i(a)])])]),S,i(l,{id:"mermaid-183",code:"eJxLy8kvT85ILCpR8AniUlBwjFZ6vnvy86adT9tan+zd/3zKCo1n3Wue9m/XVIrlAgDAaBV9"}),F,i(l,{id:"mermaid-196",code:"eJxLy8kvT85ILCpRCHHiUgCCZENdXbtEIzC7uDQpvSixIEMhPy8VLJCIJJmal4KqqKQ8HyyQBFKUhEtRRlEqxCywRckIZQD3KSO4"}),T,D,e("blockquote",null,[e("p",null,[e("a",M,[d("Sequence diagram (mermaid-js.github.io)"),i(a)])]),e("p",null,[e("a",L,[d("Mermaid之时序图语法_Feng乍起的博客-CSDN博客_时序图语法"),i(a)])])]),y,i(l,{id:"mermaid-210",code:"eJwrTi0sTc1LTnXJTEwvSszlKkgsKslMzixIzCtRcFZILFZwzslMzSvRS8ksTk4sStGw1ERREgxSEpxaVJZapGdibmZmwOWsoGtnpxBspRAdHOkXq/Bi/fZnG5ue7t71fHW3QohzgMKL/fOe9S3lCgYrc4YoU3B09o5VeL5w3Yt1SzCVIkxEUvZsyranHRtwaeHyyy9JVcgHukrBWQeo81HbRAVjhWdrFj7rX/iss5uLKyc/v0Dh2dQNz3rXPdmz4MW+yRpPdvQ+7Wh73tn+rLn1adtWTSRrA4I9IC582j/xZUMjRBuSD0ByUFf1LQU6DKogNS8Fi0MmK5iAHdKzFOwQhC1unn46cGtebN3+fHfHs7WLIB6ChCKaldCQwKuOCEOxBi8WdQCT7AEh"})])}const Q=r(o,[["render",K],["__file","Mermaid.html.vue"]]),H=JSON.parse('{"path":"/NoteTools/Mermaid.html","title":"Mermaid","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"结点内文字换行","slug":"结点内文字换行","link":"#结点内文字换行","children":[]},{"level":2,"title":"限制流程图大小","slug":"限制流程图大小","link":"#限制流程图大小","children":[]},{"level":2,"title":"显示支持","slug":"显示支持","link":"#显示支持","children":[]},{"level":2,"title":"甘特图","slug":"甘特图","link":"#甘特图","children":[]},{"level":2,"title":"流程图","slug":"流程图","link":"#流程图","children":[{"level":3,"title":"流程图整体方向","slug":"流程图整体方向","link":"#流程图整体方向","children":[]},{"level":3,"title":"结点形状","slug":"结点形状","link":"#结点形状","children":[]},{"level":3,"title":"连接线形状","slug":"连接线形状","link":"#连接线形状","children":[]},{"level":3,"title":"语法冲突的特殊字符","slug":"语法冲突的特殊字符","link":"#语法冲突的特殊字符","children":[]},{"level":3,"title":"子图","slug":"子图","link":"#子图","children":[]}]},{"level":2,"title":"时序图","slug":"时序图","link":"#时序图","children":[]}],"git":{"createdTime":1667840449000,"updatedTime":1677546919000,"contributors":[{"name":"咸鱼型233","email":"ayusummer233@qq.com","commits":4},{"name":"233Official","email":"ayusummer233@qq.com","commits":3}]},"readingTime":{"minutes":3.76,"words":1127},"filePathRelative":"NoteTools/Mermaid.md","localizedDate":"2022年11月7日","excerpt":"\\n<ul>\\n<li><a href=\\"#mermaid\\">Mermaid</a>\\n<ul>\\n<li><a href=\\"#%E7%BB%93%E7%82%B9%E5%86%85%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C\\">结点内文字换行</a></li>\\n<li><a href=\\"#%E9%99%90%E5%88%B6%E6%B5%81%E7%A8%8B%E5%9B%BE%E5%A4%A7%E5%B0%8F\\">限制流程图大小</a></li>\\n<li><a href=\\"#%E6%98%BE%E7%A4%BA%E6%94%AF%E6%8C%81\\">显示支持</a></li>\\n<li><a href=\\"#%E7%94%98%E7%89%B9%E5%9B%BE\\">甘特图</a></li>\\n<li><a href=\\"#%E6%B5%81%E7%A8%8B%E5%9B%BE\\">流程图</a>\\n<ul>\\n<li><a href=\\"#%E6%B5%81%E7%A8%8B%E5%9B%BE%E6%95%B4%E4%BD%93%E6%96%B9%E5%90%91\\">流程图整体方向</a></li>\\n<li><a href=\\"#%E7%BB%93%E7%82%B9%E5%BD%A2%E7%8A%B6\\">结点形状</a></li>\\n<li><a href=\\"#%E8%BF%9E%E6%8E%A5%E7%BA%BF%E5%BD%A2%E7%8A%B6\\">连接线形状</a></li>\\n<li><a href=\\"#%E8%AF%AD%E6%B3%95%E5%86%B2%E7%AA%81%E7%9A%84%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6\\">语法冲突的特殊字符</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%97%B6%E5%BA%8F%E5%9B%BE\\">时序图</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{Q as comp,H as data};
