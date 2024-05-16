import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as c,c as u,b as s,a as n,d as p,e as a}from"./app-DxMJFouC.js";const l={},r=a(`<h1 id="oauth2-0-的授权模式" tabindex="-1"><a class="header-anchor" href="#oauth2-0-的授权模式"><span>OAuth2.0 的授权模式</span></a></h1><ul><li><a href="#oauth20-%E7%9A%84%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F">OAuth2.0 的授权模式</a><ul><li><a href="#%E5%AF%86%E7%A0%81%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8Fresource-owner-password-credentials-grant">密码授权模式(Resource Owner Password Credentials Grant)</a></li><li><a href="#oauth2-%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E5%92%8C-fastapi-%E7%9A%84-oauth2passwordbearer">OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer</a></li><li><a href="#%E5%9F%BA%E4%BA%8E-password-%E5%92%8C-bearer-token-%E7%9A%84-oauth2-%E8%AE%A4%E8%AF%81">基于 Password 和 Bearer token 的 OAuth2 认证</a></li><li><a href="#%E5%BC%80%E5%8F%91%E5%9F%BA%E4%BA%8E-json-web-tokens-%E7%9A%84%E8%AE%A4%E8%AF%81">开发基于 JSON Web Tokens 的认证</a></li></ul></li></ul><hr><ul><li>授权码授权模式(Authorization Code Grant)</li><li>隐式授权模式(Implicit Grant)</li><li>**密码授权模式(Resource Owner Password Credentials Grant) **</li><li>客户端凭证授权模式(Client Credentials Grant)</li></ul><hr><h2 id="密码授权模式-resource-owner-password-credentials-grant" tabindex="-1"><a class="header-anchor" href="#密码授权模式-resource-owner-password-credentials-grant"><span>密码授权模式(Resource Owner Password Credentials Grant)</span></a></h2><p><img src="http://cdn.ayusummer233.top/img/202204302017634.png" alt="image-20220430201704453"></p><hr><h2 id="oauth2-密码模式和-fastapi-的-oauth2passwordbearer" tabindex="-1"><a class="header-anchor" href="#oauth2-密码模式和-fastapi-的-oauth2passwordbearer"><span>OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>security <span class="token keyword">import</span> <span class="token punctuation">(</span>
    OAuth2PasswordBearer<span class="token punctuation">,</span>   <span class="token comment"># OAuth2的认证方式</span>
<span class="token punctuation">)</span>

<span class="token comment">##### OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer #####</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
OAuth2PasswordBearer是接收URL作为参数的一个类: 
客户端会向该URL发送username和password参数, 然后得到一个Token值
OAuth2PasswordBearer并不会创建相应的URL路径操作, 
只是指明客户端用来请求Token的URL地址
当请求到来的时候, FastAPI会检查请求的Authorization头信息, 
如果没有找到Authorization头信息,或者头信息的内容不是Bearer token,
它会返回401状态码(UNAUTHORIZED)
&quot;&quot;&quot;</span>

<span class="token comment"># 请求Token的URL地址 http://127.0.0.1:8000/chapter06/token</span>
oauth2_schema <span class="token operator">=</span> OAuth2PasswordBearer<span class="token punctuation">(</span>tokenUrl<span class="token operator">=</span><span class="token string">&quot;/chapter06/token&quot;</span><span class="token punctuation">)</span>  


<span class="token decorator annotation punctuation">@app06<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/oauth2_password_bearer&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">oauth2_password_bearer</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>oauth2_schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> token<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="基于-password-和-bearer-token-的-oauth2-认证" tabindex="-1"><a class="header-anchor" href="#基于-password-和-bearer-token-的-oauth2-认证"><span>基于 Password 和 Bearer token 的 OAuth2 认证</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">##### 基于 Password 和 Bearer token 的 OAuth2 认证 #####</span>

<span class="token comment"># 模拟数据库信息</span>
fake_users_db <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;john snow&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;john snow&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;full_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;John Snow&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;johnsnow@example.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;hashed_password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;fakehashedsecret&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alice&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;alice&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;full_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice Wonderson&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;alice@example.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;hashed_password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;fakehashedsecret2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">fake_hash_password</span><span class="token punctuation">(</span>password<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;对密码进行加密&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;fakehashed&quot;</span> <span class="token operator">+</span> password


<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;用户信息schema&quot;&quot;&quot;</span>
    username<span class="token punctuation">:</span> <span class="token builtin">str</span>
    email<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    full_name<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    disabled<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">bool</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>


<span class="token keyword">class</span> <span class="token class-name">UserInDB</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">:</span>
    hashed_password<span class="token punctuation">:</span> <span class="token builtin">str</span>


<span class="token decorator annotation punctuation">@app06<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/token&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>form_data<span class="token punctuation">:</span> OAuth2PasswordRequestForm <span class="token operator">=</span> Depends<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;登录操作
    密码加密使用前缀字符串的形式
    token使用username
    &quot;&quot;&quot;</span>
    user_dict <span class="token operator">=</span> fake_users_db<span class="token punctuation">.</span>get<span class="token punctuation">(</span>form_data<span class="token punctuation">.</span>username<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> user_dict<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;Incorrect username or password-用户不存在&quot;</span><span class="token punctuation">)</span>
    user <span class="token operator">=</span> UserInDB<span class="token punctuation">(</span><span class="token operator">**</span>user_dict<span class="token punctuation">)</span>
    hashed_password <span class="token operator">=</span> fake_hash_password<span class="token punctuation">(</span>form_data<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> hashed_password <span class="token operator">==</span> user<span class="token punctuation">.</span>hashed_password<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>hashed_password<span class="token punctuation">,</span> user<span class="token punctuation">.</span>hashed_password<span class="token punctuation">)</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;Incorrect username or password-密码错误&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;access_token&quot;</span><span class="token punctuation">:</span> user<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&quot;token_type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;bearer&quot;</span><span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">get_user</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> username<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;获取用户信息&quot;&quot;&quot;</span>
    <span class="token keyword">if</span> username <span class="token keyword">in</span> db<span class="token punctuation">:</span>
        user_dict <span class="token operator">=</span> db<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
        <span class="token keyword">return</span> UserInDB<span class="token punctuation">(</span><span class="token operator">**</span>user_dict<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">fake_decode_token</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;解码token&quot;&quot;&quot;</span>
    user <span class="token operator">=</span> get_user<span class="token punctuation">(</span>fake_users_db<span class="token punctuation">,</span> token<span class="token punctuation">)</span>
    <span class="token keyword">return</span> user


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_current_user</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>oauth2_schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> fake_decode_token<span class="token punctuation">(</span>token<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> user<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>
            status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_401_UNAUTHORIZED<span class="token punctuation">,</span>
            detail<span class="token operator">=</span><span class="token string">&quot;Invalid authentication credentials&quot;</span><span class="token punctuation">,</span>
            <span class="token comment"># OAuth2的规范，如果认证失败，请求头中返回“WWW-Authenticate”</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;WWW-Authenticate&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token punctuation">)</span>
    <span class="token keyword">return</span> user


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_current_active_user</span><span class="token punctuation">(</span>current_user<span class="token punctuation">:</span> User <span class="token operator">=</span> Depends<span class="token punctuation">(</span>get_current_user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> current_user<span class="token punctuation">.</span>disabled<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;Inactive user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> current_user


<span class="token decorator annotation punctuation">@app06<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/users/me&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">read_users_me</span><span class="token punctuation">(</span>current_user<span class="token punctuation">:</span> User <span class="token operator">=</span> Depends<span class="token punctuation">(</span>get_current_active_user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    活跃用户返回用户信息  
    不活跃用户返回 Inactive user
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> current_user

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>login</code> 执行逻辑:</p>`,14),d=n("p",null,[n("code",null,"read_users_me"),p(" 执行逻辑:")],-1),k=a('<p><img src="http://cdn.ayusummer233.top/img/202204302128756.png" alt="image-20220430212806528"></p><p><img src="http://cdn.ayusummer233.top/img/202204302129260.png" alt="image-20220430212933083"></p><p><img src="http://cdn.ayusummer233.top/img/202204302131447.png" alt="image-20220430213118220"></p><hr><h2 id="开发基于-json-web-tokens-的认证" tabindex="-1"><a class="header-anchor" href="#开发基于-json-web-tokens-的认证"><span>开发基于 JSON Web Tokens 的认证</span></a></h2>',5),v={href:"https://www.bilibili.com/video/BV1iN411X72b?p=32",target:"_blank",rel:"noopener noreferrer"},m=a(`<p><img src="http://cdn.ayusummer233.top/img/202204302221258.png" alt="image-20220430222152045"></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 先更新下模拟数据库吗修改下 hash 密码使其更接近真实值:</span>
fake_users_db<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&quot;john snow&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;john snow&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;full_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;John Snow&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;johnsnow@example.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;hashed_password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 生成密钥 openssl rand -hex 32</span>
SECRET_KEY <span class="token operator">=</span> <span class="token string">&quot;09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7&quot;</span>  
<span class="token comment"># 加密算法</span>
ALGORITHM <span class="token operator">=</span> <span class="token string">&quot;HS256&quot;</span>  
<span class="token comment"># 访问令牌过期分钟</span>
ACCESS_TOKEN_EXPIRE_MINUTES <span class="token operator">=</span> <span class="token number">30</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># from datetime import (</span>
<span class="token comment">#     datetime, </span>
<span class="token comment">#     timedelta</span>
<span class="token comment"># )</span>
<span class="token comment"># from jose import (</span>
<span class="token comment">#     JWTError, </span>
<span class="token comment">#     jwt</span>
<span class="token comment"># )</span>
<span class="token comment"># from passlib.context import CryptContext    # 用于对用户传过来的密码进行加密</span>

pwd_context <span class="token operator">=</span> CryptContext<span class="token punctuation">(</span>
    schemes<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;bcrypt&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>     <span class="token comment"># 密码加密算法使用 bcrypt</span>
    deprecated<span class="token operator">=</span><span class="token string">&quot;auto&quot;</span>   
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 用于接收用户名密码, 创建 token 的接口</span>
oauth2_schema <span class="token operator">=</span> OAuth2PasswordBearer<span class="token punctuation">(</span>tokenUrl<span class="token operator">=</span><span class="token string">&quot;/chapter06/jwt/token&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">verity_password</span><span class="token punctuation">(</span>plain_password<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> hashed_password<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;对密码进行校验&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> pwd_context<span class="token punctuation">.</span>verify<span class="token punctuation">(</span>plain_password<span class="token punctuation">,</span> hashed_password<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">jwt_get_user</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> username<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;获取当前用户并返回解构信息
    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> username <span class="token keyword">in</span> db<span class="token punctuation">:</span>
        user_dict <span class="token operator">=</span> db<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
        <span class="token keyword">return</span> UserInDB<span class="token punctuation">(</span><span class="token operator">**</span>user_dict<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">jwt_authenticate_user</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> username<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    验证用户是否存在以及  
    验证用户名和密码是否匹配
    &quot;&quot;&quot;</span>
    user <span class="token operator">=</span> jwt_get_user<span class="token punctuation">(</span>db<span class="token operator">=</span>db<span class="token punctuation">,</span> username<span class="token operator">=</span>username<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> user<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> verity_password<span class="token punctuation">(</span>plain_password<span class="token operator">=</span>password<span class="token punctuation">,</span> hashed_password<span class="token operator">=</span>user<span class="token punctuation">.</span>hashed_password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> user


<span class="token keyword">def</span> <span class="token function">create_access_token</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">,</span> expires_delta<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>timedelta<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;创建token  
    :param data: 包含用户信息的字典
    :param expires_delta: token 过期时间  
    copy 一份用户信息用户编码

    &quot;&quot;&quot;</span>
    to_encode <span class="token operator">=</span> data<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 如果传入了过期时间就更新下过期时间: 当前时间+过期时间</span>
    <span class="token keyword">if</span> expires_delta<span class="token punctuation">:</span>
        expire <span class="token operator">=</span> datetime<span class="token punctuation">.</span>utcnow<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> expires_delta
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token comment"># 没传入过期时间的话默认设置过期时间为 15 min</span>
        expire <span class="token operator">=</span> datetime<span class="token punctuation">.</span>utcnow<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> timedelta<span class="token punctuation">(</span>minutes<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">)</span>
    to_encode<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;exp&quot;</span><span class="token punctuation">:</span> expire<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># 创建编码后的 jwt</span>
    encoded_jwt <span class="token operator">=</span> jwt<span class="token punctuation">.</span>encode<span class="token punctuation">(</span>
        claims<span class="token operator">=</span>to_encode<span class="token punctuation">,</span> 
        key<span class="token operator">=</span>SECRET_KEY<span class="token punctuation">,</span> 
        algorithm<span class="token operator">=</span>ALGORITHM
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> encoded_jwt


<span class="token decorator annotation punctuation">@app06<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/jwt/token&quot;</span><span class="token punctuation">,</span> response_model<span class="token operator">=</span>Token<span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">login_for_access_token</span><span class="token punctuation">(</span>form_data<span class="token punctuation">:</span> OAuth2PasswordRequestForm <span class="token operator">=</span> Depends<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;创建并返回 Token  
    :param form_data: 表单数据
    &quot;&quot;&quot;</span>
    <span class="token comment"># jwt 校验</span>
    user <span class="token operator">=</span> jwt_authenticate_user<span class="token punctuation">(</span>db<span class="token operator">=</span>fake_users_db<span class="token punctuation">,</span> username<span class="token operator">=</span>form_data<span class="token punctuation">.</span>username<span class="token punctuation">,</span> password<span class="token operator">=</span>form_data<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    <span class="token comment"># 认证失败则抛出异常: 用户名或密码不正确</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> user<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>
            status<span class="token punctuation">.</span>HTTP_401_UNAUTHORIZED<span class="token punctuation">,</span>
            detail<span class="token operator">=</span><span class="token string">&quot;Incorrect username or password&quot;</span><span class="token punctuation">,</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;WWW-Authenticate&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token comment"># 获取 token 过期时间</span>
    access_token_expires <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>minutes<span class="token operator">=</span>ACCESS_TOKEN_EXPIRE_MINUTES<span class="token punctuation">)</span>
    <span class="token comment"># 创建 token</span>
    access_token <span class="token operator">=</span> create_access_token<span class="token punctuation">(</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;sub&quot;</span><span class="token punctuation">:</span> user<span class="token punctuation">.</span>username<span class="token punctuation">}</span><span class="token punctuation">,</span> expires_delta<span class="token operator">=</span>access_token_expires
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;access_token&quot;</span><span class="token punctuation">:</span> access_token<span class="token punctuation">,</span> <span class="token string">&quot;token_type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;bearer&quot;</span><span class="token punctuation">}</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">jwt_get_current_user</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Depends<span class="token punctuation">(</span>oauth2_schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;获取当前用户
    :param token: jwt token
    &quot;&quot;&quot;</span>
    <span class="token comment"># 定义错误返回信息</span>
    credentials_exception <span class="token operator">=</span> HTTPException<span class="token punctuation">(</span>
        status<span class="token punctuation">.</span>HTTP_401_UNAUTHORIZED<span class="token punctuation">,</span>
        detail<span class="token operator">=</span><span class="token string">&quot;Could not validate credentials&quot;</span><span class="token punctuation">,</span>
        headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;WWW-Authenticate&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># jwt 解码</span>
        payload <span class="token operator">=</span> jwt<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>token<span class="token operator">=</span>token<span class="token punctuation">,</span> key<span class="token operator">=</span>SECRET_KEY<span class="token punctuation">,</span> algorithms<span class="token operator">=</span><span class="token punctuation">[</span>ALGORITHM<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment"># 获取解码后的用户名</span>
        username <span class="token operator">=</span> payload<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;sub&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果用户名不存在则抛出异常</span>
        <span class="token keyword">if</span> username <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> credentials_exception
    <span class="token comment"># 如果解码失败则抛出异常</span>
    <span class="token keyword">except</span> JWTError<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> credentials_exception
    user <span class="token operator">=</span> jwt_get_user<span class="token punctuation">(</span>db<span class="token operator">=</span>fake_users_db<span class="token punctuation">,</span> username<span class="token operator">=</span>username<span class="token punctuation">)</span>
    <span class="token keyword">if</span> user <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> credentials_exception
    <span class="token keyword">return</span> user


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">jwt_get_current_active_user</span><span class="token punctuation">(</span>current_user<span class="token punctuation">:</span> User <span class="token operator">=</span> Depends<span class="token punctuation">(</span>jwt_get_current_user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;获取活跃用户&quot;&quot;&quot;</span>
    <span class="token keyword">if</span> current_user<span class="token punctuation">.</span>disabled<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;Inactive user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> current_user


<span class="token decorator annotation punctuation">@app06<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/jwt/users/me&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">jwt_read_users_me</span><span class="token punctuation">(</span>current_user<span class="token punctuation">:</span> User <span class="token operator">=</span> Depends<span class="token punctuation">(</span>jwt_get_current_active_user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;获取当前用户信息&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> current_user

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.ayusummer233.top/img/202204302251027.png" alt="image-20220430225118757"></p><hr>`,6);function b(q,h){const t=e("Mermaid"),o=e("ExternalLinkIcon");return c(),u("div",null,[r,s(t,{id:"mermaid-75",code:"eJxlUM9KwzAYv/cp8gKFHTzK7oInr2OULMvWstmMpGWH4UFQKWKhsE4cjlYUdRetJ3UO8WVM2r2FSRu3obfk+32/f1+nT4bIhtQD+wcGAD7DtJHHcxG8NYFpqq8LD/Fui9YHkLEhoW31Fum9mLyI8Jl/jE2zDhy25xqSzvxWl8KBDfqk67hyoIDRrwoQVxmPHvhsviZ/vz8d6TVpJ0GlhikldKdW00F4FIrgkmdn+c3xKp4WWdbcUKSkoiCKoYetMn7xeCeSk7WFzFpkt/lyLJJZHqciiNSWktgiSaUO7GHLhsy2tptWDDWuAkgzhyFCKUbeqBrpVheL1WlYldH4/0Z/UB2+PJbFfIQwY418uuSfE2nKz9NNAr54Lb5ifp3AcsvySA+7qgR228YPcZPVyQ=="}),d,s(t,{id:"mermaid-79",code:"eJx1UU9LAkEUv/sp5miHjYKOKQgaCVEgeklkmd196qLuxsxuBdEh6tBFCDIQCqOi8mJ2CJQ6+GXcaT9GO7M76xY2pzfz+/N+b169bR/pTUwctFNKIURdrUHwQRMRwIbqUiBU7UAAJKAGOKruEgKWo2LdMQ9BEAXpH1oCTzDquAWqAbptgOrYLbBiyh+bX3J++IOFO5CWxUoCBstI3CQDKQq7f/bHj+zmnXXfvM9rRclysGjltbT/+sQGFzE0n47CeuGbdJWywDOLTFo4Nqlzwvpj7+rFG/W9u+FpTI3QgLmF2xS4AAixycbaerWym6uUt/dKxf1CvoaWSMrEFQreT4wq4yzC8Nd4NH5ZNUyKtTYYYbacWFAUjn18+ZNzGU6CgVxqMhneclMj2fm0G7L5jKYV7rlajArRtiZ8ZJSlbmJmbrfwij6vblf9Wc+7HXz3huxyMp89sLMxdwz9Uj/8RPOx"}),k,n("blockquote",null,[n("p",null,[n("a",v,[p("【独家新技术】从0到1学习 FastAPI 框架的所有知识点_哔哩哔哩_bilibili"),s(o)])])]),m])}const g=i(l,[["render",b],["__file","OAuth2.0授权模式.html.vue"]]),y=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/FastAPI/OAuth2.0%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F.html","title":"OAuth2.0 的授权模式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"密码授权模式(Resource Owner Password Credentials Grant)","slug":"密码授权模式-resource-owner-password-credentials-grant","link":"#密码授权模式-resource-owner-password-credentials-grant","children":[]},{"level":2,"title":"OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer","slug":"oauth2-密码模式和-fastapi-的-oauth2passwordbearer","link":"#oauth2-密码模式和-fastapi-的-oauth2passwordbearer","children":[]},{"level":2,"title":"基于 Password 和 Bearer token 的 OAuth2 认证","slug":"基于-password-和-bearer-token-的-oauth2-认证","link":"#基于-password-和-bearer-token-的-oauth2-认证","children":[]},{"level":2,"title":"开发基于 JSON Web Tokens 的认证","slug":"开发基于-json-web-tokens-的认证","link":"#开发基于-json-web-tokens-的认证","children":[]}],"git":{"createdTime":1714457095000,"updatedTime":1714457095000,"contributors":[{"name":"233JG","email":"ayusummer233@gmail.com","commits":1}]},"readingTime":{"minutes":4.85,"words":1455},"filePathRelative":"后端/FastAPI/OAuth2.0授权模式.md","localizedDate":"2024年4月30日","excerpt":"\\n<ul>\\n<li><a href=\\"#oauth20-%E7%9A%84%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F\\">OAuth2.0 的授权模式</a>\\n<ul>\\n<li><a href=\\"#%E5%AF%86%E7%A0%81%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8Fresource-owner-password-credentials-grant\\">密码授权模式(Resource Owner Password Credentials Grant)</a></li>\\n<li><a href=\\"#oauth2-%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8F%E5%92%8C-fastapi-%E7%9A%84-oauth2passwordbearer\\">OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer</a></li>\\n<li><a href=\\"#%E5%9F%BA%E4%BA%8E-password-%E5%92%8C-bearer-token-%E7%9A%84-oauth2-%E8%AE%A4%E8%AF%81\\">基于 Password 和 Bearer token 的 OAuth2 认证</a></li>\\n<li><a href=\\"#%E5%BC%80%E5%8F%91%E5%9F%BA%E4%BA%8E-json-web-tokens-%E7%9A%84%E8%AE%A4%E8%AF%81\\">开发基于 JSON Web Tokens 的认证</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{g as comp,y as data};
