import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as u,a as n,d as e,b as c,w as a,e as l}from"./app-DxMJFouC.js";const m={},k=n("h1",{id:"json-compatible-encoder",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#json-compatible-encoder"},[n("span",null,"JSON Compatible Encoder")])],-1),b={href:"https://fastapi.tiangolo.com/zh/tutorial/encoder/",target:"_blank",rel:"noopener noreferrer"},_=l('<p>在某些情况下我们可能需要将数据类型(比如Pydantic model)转换为 JSON 兼容的数据类型(如 dict, list 等等)</p><p>例如, 如果我们需要将他存入数据库, FastAPI 提供了 <code>jsonable_encoder()</code> 函数</p><hr><h2 id="使用-jsonable-encoder" tabindex="-1"><a class="header-anchor" href="#使用-jsonable-encoder"><span>使用 <code>jsonable_encoder</code></span></a></h2><p>我们假设当前我们有一个只接受 JSON 兼容数据的数据库 <code>fake_db</code>.</p><p>例如, 它不接受 <code>datetime</code> 对象, 因为这些对象与 JSON 不兼容</p><p>所以, <code>datetime</code> 对象必须转化为包含 ISO 格式数据的 <code>str</code></p><p>同样, 这个数据库不会接收到 Pydantic model(带有属性的对象), 只接收 <code>dict</code></p><p>我们可以使用 <code>jsonable_encoder</code> , 它接收一个对象, 比如 Pydantic model, 并返回一个兼容 JSON 的版本</p>',9),h=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),e(" datetime "),n("span",{class:"token keyword"},"import"),e(` datetime
`),n("span",{class:"token keyword"},"from"),e(" typing "),n("span",{class:"token keyword"},"import"),e(` Optional

`),n("span",{class:"token keyword"},"from"),e(" fastapi "),n("span",{class:"token keyword"},"import"),e(` FastAPI
`),n("span",{class:"token keyword"},"from"),e(" fastapi"),n("span",{class:"token punctuation"},"."),e("encoders "),n("span",{class:"token keyword"},"import"),e(` jsonable_encoder
`),n("span",{class:"token keyword"},"from"),e(" pydantic "),n("span",{class:"token keyword"},"import"),e(` BaseModel

fake_db `),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),e(`


`),n("span",{class:"token keyword"},"class"),e(),n("span",{class:"token class-name"},"Item"),n("span",{class:"token punctuation"},"("),e("BaseModel"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),e(`
    title`),n("span",{class:"token punctuation"},":"),e(),n("span",{class:"token builtin"},"str"),e(`
    timestamp`),n("span",{class:"token punctuation"},":"),e(` datetime
    description`),n("span",{class:"token punctuation"},":"),e(" Optional"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"str"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token boolean"},"None"),e(`


app `),n("span",{class:"token operator"},"="),e(" FastAPI"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),e(`


`),n("span",{class:"token decorator annotation punctuation"},[e("@app"),n("span",{class:"token punctuation"},"."),e("put")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/items/{id}"'),n("span",{class:"token punctuation"},")"),e(`
`),n("span",{class:"token keyword"},"def"),e(),n("span",{class:"token function"},"update_item"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"id"),n("span",{class:"token punctuation"},":"),e(),n("span",{class:"token builtin"},"str"),n("span",{class:"token punctuation"},","),e(" item"),n("span",{class:"token punctuation"},":"),e(" Item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),e(`
    json_compatible_item_data `),n("span",{class:"token operator"},"="),e(" jsonable_encoder"),n("span",{class:"token punctuation"},"("),e("item"),n("span",{class:"token punctuation"},")"),e(`
    fake_db`),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"id"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(` json_compatible_item_data

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,null,-1),f=l("<p>在这个实例中, 它将 Pydantic 模型转化为 dict, 将 <code>datetime</code> 转化为 <code>str</code>;</p><p>调用它的结果可以用 Python 标准 <code>json.dumps ()</code> 进行编码。</p><p>它不返回包含 JSON 格式数据(以字符串形式)的大型 <code>str</code>。它返回一个 Python 标准数据结构(例如 <code>dict</code>) ，其值和子值都与 JSON 兼容。</p><hr>",4);function y(N,O){const i=o("ExternalLinkIcon"),p=o("Tabs");return r(),u("div",null,[k,n("blockquote",null,[n("p",null,[n("a",b,[e("JSON Compatible Encoder - FastAPI (tiangolo.com)"),c(i)])])]),_,c(p,{id:"33",data:[{id:"Python 3.6~3.10"},{id:"其它"}],active:0},{title0:a(({value:s,isActive:t})=>[e("Python 3.6~3.10")]),title1:a(({value:s,isActive:t})=>[e("其它")]),tab0:a(({value:s,isActive:t})=>[h]),tab1:a(({value:s,isActive:t})=>[v]),_:1}),f])}const g=d(m,[["render",y],["__file","JSON兼容.html.vue"]]),J=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/FastAPI/JSON%E5%85%BC%E5%AE%B9.html","title":"JSON Compatible Encoder","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用 jsonable_encoder","slug":"使用-jsonable-encoder","link":"#使用-jsonable-encoder","children":[]}],"git":{"createdTime":1714457095000,"updatedTime":1714457095000,"contributors":[{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":1.11,"words":333},"filePathRelative":"后端/FastAPI/JSON兼容.md","localizedDate":"2024年4月30日","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://fastapi.tiangolo.com/zh/tutorial/encoder/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JSON Compatible Encoder - FastAPI (tiangolo.com)</a></p>\\n</blockquote>\\n<p>在某些情况下我们可能需要将数据类型(比如Pydantic model)转换为 JSON 兼容的数据类型(如 dict, list 等等)</p>\\n<p>例如, 如果我们需要将他存入数据库, FastAPI 提供了 <code>jsonable_encoder()</code> 函数</p>"}');export{g as comp,J as data};
