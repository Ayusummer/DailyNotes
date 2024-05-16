import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DxMJFouC.js";const t={},i=e(`<h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#pandas">Pandas</a><ul><li><a href="#pandas%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90">Pandas数据分析</a></li><li><a href="#pandas%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84">pandas数据结构</a><ul><li><a href="#series">Series</a><ul><li><a href="#%E5%B8%B8%E7%94%A8%E5%88%9B%E5%BB%BA%E6%96%B9%E6%B3%95">常用创建方法</a></li><li><a href="#%E5%B8%B8%E7%94%A8%E8%BF%90%E7%AE%97">常用运算</a></li><li><a href="#values%E7%9A%84%E8%AE%BF%E9%97%AE%E4%B8%8E%E4%BF%AE%E6%94%B9">values的访问与修改</a></li></ul></li><li><a href="#dataframe">DataFrame</a></li></ul></li><li><a href="#%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA">数据的导入与导出</a><ul><li><a href="#%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AF%BC%E5%85%A5%E5%8F%82%E6%95%B0">数据的导入参数</a><ul><li><a href="#%E5%AF%BC%E5%85%A5xlsx">导入<code>xlsx</code></a></li></ul></li><li><a href="#%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AF%BC%E5%87%BA%E5%8F%82%E6%95%B0">数据的导出参数</a></li></ul></li></ul></li></ul><hr><h1 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas"><span>Pandas</span></a></h1><hr><h2 id="pandas数据分析" tabindex="-1"><a class="header-anchor" href="#pandas数据分析"><span>Pandas数据分析</span></a></h2><ul><li>pandas的名称来自于panel data(面板数据) 和data analysis(数据分析)。</li><li>是基于扩展库numpy和matplotlib的数据分析模块，是一个开源项目。</li><li>Pandas提供了大量标准数据模型和高效操作大型数据集所需要的函数和方法，是使得Python能够成为高效且强大的数据分析工具的重要因素之一。</li></ul><hr><h2 id="pandas数据结构" tabindex="-1"><a class="header-anchor" href="#pandas数据结构"><span>pandas数据结构</span></a></h2><ul><li>Pandas常用的数据结构有： <ul><li><ol><li>Series，带标签的一维数组；</li></ol></li><li><ol start="2"><li>DatetimeIndex，时间序列；</li></ol></li><li><ol start="3"><li>DataFrame，带标签且大小可变的二维表格结构；</li></ol></li><li><ol start="4"><li>Panel，带标签且大小可变的三维数组。</li></ol></li></ul></li></ul><hr><h3 id="series" tabindex="-1"><a class="header-anchor" href="#series"><span>Series</span></a></h3><ul><li>pandas提供的类似于一维数组的字典结构的对象， <ul><li>由<strong>索引</strong>(数据标签) 和<strong>数据</strong>两部分组成。</li></ul></li><li>如果在创建时没有明确指定索引则会自动使用从0开始的非负整数作为索引。</li></ul><hr><ul><li>Series对象<div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>a = pd.Series([23, 54, 32, 65, 87, 54])
# print(a)
0    23
1    54
2    32
3    65
4    87
5    54
dtype: int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通常默认索引从0开始</li><li>自定义索引<div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>b = pd.Series([23, 54, 32, 65, 87, 54],
            index=[chr(i + ord(&#39;A&#39;)) for i in range(6)])
# 输出b
A    23
B    54
C    32
D    65
E    87
F    54
dtype: int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><hr><h4 id="常用创建方法" tabindex="-1"><a class="header-anchor" href="#常用创建方法"><span>常用创建方法</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> pandas <span class="token keyword">import</span> Series
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># 1.使用列表创建Series</span>
s1 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 2. 使用range创建Series</span>
s2 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 3.使用numpy一维数组创建Series</span>
s3 <span class="token operator">=</span> Series<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
s4 <span class="token operator">=</span> Series<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 4.使用字典创建Series，其中字典的键，就是索引</span>
s5 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;语文&#39;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token string">&#39;数学&#39;</span><span class="token punctuation">:</span> <span class="token number">87</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 创建Series时不指定索引，默认生成从0开始的序列，也可自行指定索引</span>
s6 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
s7 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">12.3</span><span class="token punctuation">,</span> <span class="token number">34.5</span><span class="token punctuation">,</span> <span class="token number">3.6</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;II&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;III&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = Series([1, 2, 3, 4]):\\n{0}\\n&quot;</span>
      <span class="token string">&quot;s2 = Series(range(3)):\\n{1}\\n&quot;</span>
      <span class="token string">&quot;s3 = Series(np.array([1, 2, 3, 4])):\\n{2}\\n&quot;</span>
      <span class="token string">&quot;s4 = Series(np.arange(6, 10)):\\n{3}\\n&quot;</span>
      <span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">,</span> s4<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&quot;s5 = Series({&#39;语文&#39;: 90, &#39;数学&#39;: 87}):&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s6 = Series([12, 3, 4], index=[&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]):\\n{0}&quot;</span>
      <span class="token string">&quot;s7 = Series([12.3, 34.5, 3.6, ], [&#39;I&#39;, &#39;II&#39;, &#39;III&#39;]):\\n{0}&quot;</span>
      <span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s6<span class="token punctuation">,</span> s7<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 运行结果</span>
s1 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token number">0</span>    <span class="token number">1</span>
<span class="token number">1</span>    <span class="token number">2</span>
<span class="token number">2</span>    <span class="token number">3</span>
<span class="token number">3</span>    <span class="token number">4</span>
dtype<span class="token punctuation">:</span> int64
s2 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token number">0</span>    <span class="token number">0</span>
<span class="token number">1</span>    <span class="token number">1</span>
<span class="token number">2</span>    <span class="token number">2</span>
dtype<span class="token punctuation">:</span> int64
s3 <span class="token operator">=</span> Series<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token number">0</span>    <span class="token number">1</span>
<span class="token number">1</span>    <span class="token number">2</span>
<span class="token number">2</span>    <span class="token number">3</span>
<span class="token number">3</span>    <span class="token number">4</span>
dtype<span class="token punctuation">:</span> int32
s4 <span class="token operator">=</span> Series<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token number">0</span>    <span class="token number">6</span>
<span class="token number">1</span>    <span class="token number">7</span>
<span class="token number">2</span>    <span class="token number">8</span>
<span class="token number">3</span>    <span class="token number">9</span>
dtype<span class="token punctuation">:</span> int32

s5 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;语文&#39;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token string">&#39;数学&#39;</span><span class="token punctuation">:</span> <span class="token number">87</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
语文    <span class="token number">90</span>
数学    <span class="token number">87</span>
dtype<span class="token punctuation">:</span> int64
s6 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
A    <span class="token number">12</span>
B     <span class="token number">3</span>
C     <span class="token number">4</span>
dtype<span class="token punctuation">:</span> int64s7 <span class="token operator">=</span> Series<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">12.3</span><span class="token punctuation">,</span> <span class="token number">34.5</span><span class="token punctuation">,</span> <span class="token number">3.6</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;II&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;III&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
A    <span class="token number">12</span>
B     <span class="token number">3</span>
C     <span class="token number">4</span>
dtype<span class="token punctuation">:</span> int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="常用运算" tabindex="-1"><a class="header-anchor" href="#常用运算"><span>常用运算</span></a></h4><div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>from pandas import Series

s1 = Series(range(4))
s2 = Series({&#39;语文&#39;: 90, &#39;数学&#39;: 87, &#39;英语&#39;: 67, &#39;程序设计&#39;: 78})
s3 = Series({&#39;语文&#39;: 20, &#39;数学&#39;: 80, &#39;英语&#39;: 67, &#39;程序设计&#39;: 78, &#39;w&#39;: 23})
print(&quot;s1:\\n{0}\\ns2:\\n{1}\\ns3:\\n{2}&quot;.format(s1, s2, s3))
s1:
0    0
1    1
2    2
3    3
dtype: int64
s2:
语文      90
数学      87
英语      67
程序设计    78
dtype: int64
s3:
语文      20
数学      80
英语      67
程序设计    78
w       23
dtype: int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>同索引等长的Series可进行算术运算<div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>print(&quot;s2 - s3:\\n{0}\\ns2 + s3:\\n{1}\\ns2 * s3:\\n{2}\\ns2 / s3:\\n{3}&quot;.format(s2 - s3, s2 + s3, s2 * s3, s2 / s3))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>没有的部分自动补齐<code>NotANumber</code></li></ul></li><li>不同索引运算其相对应的值控制为NaN<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s1+s2:\\n{0}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Series对象与标量进行算术运算<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s3*2:\\n{0}\\ns3**0.5:\\n{1}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s3 <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> s3 <span class="token operator">**</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Series对象的关系运算<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\ns2[s2 &gt;= 80]:\\n{0}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s2<span class="token punctuation">[</span>s2 <span class="token operator">&gt;=</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>计算Series对象的中值<div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>print(&quot;\\ns3.median():\\n{0}&quot;.format(s3.median()))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>计算s2中最小的1个值<div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>print(&#39;\\ns2.nsmallest(1)：\\n&#39;, s2.nsmallest(1))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>计算s2中最大的1个值<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;s2.nlargest(1)：\\n&#39;</span><span class="token punctuation">,</span> s2<span class="token punctuation">.</span>nlargest<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><hr><h4 id="values的访问与修改" tabindex="-1"><a class="header-anchor" href="#values的访问与修改"><span>values的访问与修改</span></a></h4><ul><li>访问与修改都可通过索引、切片实现。</li></ul><div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>from pandas import Series

s1 = Series(range(1, 11))
s2 = Series({&#39;语文&#39;: 90, &#39;数学&#39;: 87, &#39;英语&#39;: 67, &#39;程序设计&#39;: 78})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过索引，切片访问Series的value<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s1[4] : {0}\\ns2[&#39;英语&#39;] : {1}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> s2<span class="token punctuation">[</span><span class="token string">&#39;英语&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s1[1:4]:\\n{0}\\n&quot;</span>
    <span class="token string">&quot;s2[1:3]:\\n{1}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> s2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>通过索引修改Series的value，注意字典的键为索引<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>s2<span class="token punctuation">[</span><span class="token string">&#39;程序设计&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">89</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;s2:\\n{0}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="dataframe" tabindex="-1"><a class="header-anchor" href="#dataframe"><span>DataFrame</span></a></h3><ul><li><p>二维数据，类似于二维表格，由多行多列组成。</p></li></ul><hr><h2 id="数据的导入与导出" tabindex="-1"><a class="header-anchor" href="#数据的导入与导出"><span>数据的导入与导出</span></a></h2><ul><li>pandas可以将读取到的数据转成DataFrame类型的数据结构，通过操作DataFrame进行数据分析，数据预处理以及行和列的操作等。也可以将数据写入文件。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>read_csv            to_csv
read_excel          to_excel
read_json           to_json
read_sql            to_sql  
read_pickle         to_pickle
read_html           to_html
... ...             ... ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="数据的导入参数" tabindex="-1"><a class="header-anchor" href="#数据的导入参数"><span>数据的导入参数</span></a></h3><ul><li><code>student.csv</code><div class="language-csv line-numbers-mode" data-ext="csv" data-title="csv"><pre class="language-csv"><code><span class="token value">姓名</span><span class="token punctuation">,</span><span class="token value">数学</span><span class="token punctuation">,</span><span class="token value">程序设计</span><span class="token punctuation">,</span><span class="token value">英语</span>
<span class="token value">张一</span><span class="token punctuation">,</span><span class="token value">56</span><span class="token punctuation">,</span><span class="token value">94</span><span class="token punctuation">,</span><span class="token value">45</span>
<span class="token value">王宏</span><span class="token punctuation">,</span><span class="token value">76</span><span class="token punctuation">,</span><span class="token value">77</span><span class="token punctuation">,</span><span class="token value">90</span>
<span class="token value">李玉</span><span class="token punctuation">,</span><span class="token value">45</span><span class="token punctuation">,</span><span class="token value">87</span><span class="token punctuation">,</span><span class="token value">77</span>
<span class="token value">吴苛左</span><span class="token punctuation">,</span><span class="token value">87</span><span class="token punctuation">,</span><span class="token value">55</span><span class="token punctuation">,</span><span class="token value">89</span>
<span class="token value">季晶</span><span class="token punctuation">,</span><span class="token value">45</span><span class="token punctuation">,</span><span class="token value">95</span><span class="token punctuation">,</span><span class="token value">75</span>
<span class="token value">五一</span><span class="token punctuation">,</span><span class="token value">83</span><span class="token punctuation">,</span><span class="token value">77</span><span class="token punctuation">,</span><span class="token value">93</span>
<span class="token value">李言</span><span class="token punctuation">,</span><span class="token value">87</span><span class="token punctuation">,</span><span class="token value">45</span><span class="token punctuation">,</span><span class="token value">99</span>
<span class="token value">于旧</span><span class="token punctuation">,</span><span class="token value">92</span><span class="token punctuation">,</span><span class="token value">75</span><span class="token punctuation">,</span><span class="token value">34</span>
<span class="token value">王工</span><span class="token punctuation">,</span><span class="token value">97</span><span class="token punctuation">,</span><span class="token value">67</span><span class="token punctuation">,</span><span class="token value">56</span>
<span class="token value">才一</span><span class="token punctuation">,</span><span class="token value">56</span><span class="token punctuation">,</span><span class="token value">73</span><span class="token punctuation">,</span><span class="token value">78</span>
<span class="token value">于旧</span><span class="token punctuation">,</span><span class="token value">92</span><span class="token punctuation">,</span><span class="token value">75</span><span class="token punctuation">,</span><span class="token value">34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>import pandas as pd
import os

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), &#39;./res/files/prog/student.csv&#39;))
stu = pd.read_csv(file_path,
                  sep=&#39;,&#39;,          # 指定分隔符
                  delimiter=&#39;,&#39;,    # 分隔符
                  encoding=&#39;utf-8&#39;,
                  header=[0],       # 指定行数用来作为列名,默认第一行为列名
                  index_col=0,      # 指定列编号或者列名为索引
                  skiprows=None,    # 需要忽略的行数(从文件开始处算起) 
                  )
print(stu)

# 运行结果
     数学  程序设计  英语
姓名               
张一   56    94  45
王宏   76    77  90
李玉   45    87  77
吴苛左  87    55  89
季晶   45    95  75
五一   83    77  93
李言   87    45  99
于旧   92    75  34
王工   97    67  56
才一   56    73  78
于旧   92    75  34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="导入xlsx" tabindex="-1"><a class="header-anchor" href="#导入xlsx"><span>导入<code>xlsx</code></span></a></h4><ul><li>最新版的xlrd不支持xlsx <ul><li>先卸载:<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip uninstall xlrd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>然后用版本号装一个低版本的<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install -i https://pypi.tuna.tsinghua.edu.cn/simple xlrd==1.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><hr><h3 id="数据的导出参数" tabindex="-1"><a class="header-anchor" href="#数据的导出参数"><span>数据的导出参数</span></a></h3><div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre class="language-Python"><code>import pandas as pd
import os

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), &#39;./res/files/prog/student.csv&#39;))
file_path_save = os.path.abspath(os.path.join(os.path.dirname(__file__), &#39;./res/files/prog/student1.csv&#39;))

stu = pd.read_csv(file_path,
                  sep=&#39;,&#39;,  # 指定分隔符
                  delimiter=&#39;,&#39;,  # 分隔符
                  encoding=&#39;utf-8&#39;,
                  header=[0],  # 指定行数用来作为列名,默认第一行为列名
                  index_col=0,  # 指定列编号或者列名为索引
                  skiprows=None,  # 需要忽略的行数(从文件开始处算起) 
                  )
print(stu)
stu.to_csv(file_path_save,
           sep=&#39;,&#39;,         # 指定分隔符
           encoding=&#39;utf-8&#39;,
           header=False,    # 表示是否写入数据中的列名，默认为False
           index=0,         # 表示是否将行索引写入文件，默认为True
           )
print(stu)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),l=[i];function p(c,u){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","Pandas.html.vue"]]),v=JSON.parse('{"path":"/Language/Python/libs/Pandas/Pandas.html","title":"目录","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Pandas数据分析","slug":"pandas数据分析","link":"#pandas数据分析","children":[]},{"level":2,"title":"pandas数据结构","slug":"pandas数据结构","link":"#pandas数据结构","children":[{"level":3,"title":"Series","slug":"series","link":"#series","children":[]},{"level":3,"title":"DataFrame","slug":"dataframe","link":"#dataframe","children":[]}]},{"level":2,"title":"数据的导入与导出","slug":"数据的导入与导出","link":"#数据的导入与导出","children":[{"level":3,"title":"数据的导入参数","slug":"数据的导入参数","link":"#数据的导入参数","children":[]},{"level":3,"title":"数据的导出参数","slug":"数据的导出参数","link":"#数据的导出参数","children":[]}]}],"git":{"createdTime":1694760760000,"updatedTime":1709635981000,"contributors":[{"name":"233Official","email":"ayusummr233@gmail.com","commits":2},{"name":"Ayusummer","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":5.91,"words":1772},"filePathRelative":"Language/Python/libs/Pandas/Pandas.md","localizedDate":"2023年9月15日","excerpt":"\\n<ul>\\n<li><a href=\\"#%E7%9B%AE%E5%BD%95\\">目录</a></li>\\n<li><a href=\\"#pandas\\">Pandas</a>\\n<ul>\\n<li><a href=\\"#pandas%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90\\">Pandas数据分析</a></li>\\n<li><a href=\\"#pandas%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84\\">pandas数据结构</a>\\n<ul>\\n<li><a href=\\"#series\\">Series</a>\\n<ul>\\n<li><a href=\\"#%E5%B8%B8%E7%94%A8%E5%88%9B%E5%BB%BA%E6%96%B9%E6%B3%95\\">常用创建方法</a></li>\\n<li><a href=\\"#%E5%B8%B8%E7%94%A8%E8%BF%90%E7%AE%97\\">常用运算</a></li>\\n<li><a href=\\"#values%E7%9A%84%E8%AE%BF%E9%97%AE%E4%B8%8E%E4%BF%AE%E6%94%B9\\">values的访问与修改</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#dataframe\\">DataFrame</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA\\">数据的导入与导出</a>\\n<ul>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AF%BC%E5%85%A5%E5%8F%82%E6%95%B0\\">数据的导入参数</a>\\n<ul>\\n<li><a href=\\"#%E5%AF%BC%E5%85%A5xlsx\\">导入<code>xlsx</code></a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AF%BC%E5%87%BA%E5%8F%82%E6%95%B0\\">数据的导出参数</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{r as comp,v as data};
