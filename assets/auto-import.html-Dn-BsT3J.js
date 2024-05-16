import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as i,a as n,d as a,b as t,e as u}from"./app-DxMJFouC.js";const l={},c=n("h1",{id:"auto-import",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#auto-import"},[n("span",null,"auto-import")])],-1),r={href:"https://github.com/antfu/unplugin-auto-import",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/qq1195566313/article/details/123187523",target:"_blank",rel:"noopener noreferrer"},m=u(`<ul><li><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> unplugin-auto-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>vite 配置</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueJsx <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue-jsx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&quot;unplugin-auto-import/vite&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">VueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      dts<span class="token operator">:</span> <span class="token string">&quot;src/auto-import.d.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr>`,2);function k(v,b){const s=o("ExternalLinkIcon");return p(),i("div",null,[c,n("blockquote",null,[n("p",null,[n("a",r,[a("antfu/unplugin-auto-import: Auto import APIs on-demand for Vite, Webpack and Rollup (github.com)"),t(s)])]),n("p",null,[n("a",d,[a("学习 Vue3 第二十六章(深入 v-model) _小满 zs 的博客-CSDN 博客"),t(s)])])]),m])}const h=e(l,[["render",k],["__file","auto-import.html.vue"]]),_=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/VUE/Vue3/auto-import.html","title":"auto-import","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1714448416000,"updatedTime":1714448416000,"contributors":[{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":0.31,"words":93},"filePathRelative":"前端/VUE/Vue3/auto-import.md","localizedDate":"2024年4月30日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://github.com/antfu/unplugin-auto-import\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">antfu/unplugin-auto-import: Auto import APIs on-demand for Vite, Webpack and Rollup (github.com)</a></p>\\n<p><a href=\\"https://blog.csdn.net/qq1195566313/article/details/123187523\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">学习 Vue3 第二十六章(深入 v-model) _小满 zs 的博客-CSDN 博客</a></p>\\n</blockquote>"}');export{h as comp,_ as data};
