import{_ as e,o,c as t,Q as a}from"./chunks/framework.ac649e5f.js";const i=""+new URL("http-base-auth.78fd9886.png",import.meta.url).href,l=""+new URL("cookies-session.5ba229d6.png",import.meta.url).href,s=""+new URL("token.bd85b271.png",import.meta.url).href,n=""+new URL("refresh-token.e5a4f864.png",import.meta.url).href,r=""+new URL("sso2.06ec815b.png",import.meta.url).href,g=JSON.parse('{"title":"前端鉴权","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/P1 概念系列/5.前端鉴权.md","filePath":"MiscellaneousTalk/P1 概念系列/5.前端鉴权.md"}'),c={name:"MiscellaneousTalk/P1 概念系列/5.前端鉴权.md"},h=a('<h1 id="前端鉴权" tabindex="-1">前端鉴权 <a class="header-anchor" href="#前端鉴权" aria-label="Permalink to &quot;前端鉴权&quot;">​</a></h1><h2 id="basic-access-authentication" tabindex="-1">Basic Access Authentication <a class="header-anchor" href="#basic-access-authentication" aria-label="Permalink to &quot;Basic Access Authentication&quot;">​</a></h2><ul><li>基本上被废弃的方案</li><li><a href="https://zhuanlan.zhihu.com/p/64584734" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/64584734</a></li></ul><p><img src="'+i+'" alt="http-base-auth"></p><blockquote><p>过程</p></blockquote><ul><li>客户端访问资源 family</li><li>服务端响应 header <code>www-Authenticate: Basic realm= &quot;family&quot;</code> 告诉客户端需要输入这个安全区的用户名和密码</li><li>客户端会弹出密码框，输入密码，然后 base64 加密信息，响应 <code>Authorization: Basic base64加密之后密文</code></li><li>服务端认真通过响应资源</li></ul><h2 id="cookies-session" tabindex="-1">cookies-session <a class="header-anchor" href="#cookies-session" aria-label="Permalink to &quot;cookies-session&quot;">​</a></h2><p><img src="'+l+'" alt="cookies-session"></p><blockquote><p>Session 的存储方式 (服务端只是给 cookie 一个 sessionId，而 session 的具体内容要自己存一下)</p></blockquote><ol><li>Redis（推荐）：内存型数据库，以 key-value 的形式存，正合 sessionId-sessionData 的场景；且访问快。</li><li>内存：直接放到变量里。一旦服务重启就没了</li><li>数据库：普通数据库。性能不高。</li></ol><blockquote><p>Session 的过期和销毁</p></blockquote><ul><li>只要把存储的 session 数据销毁就可以</li></ul><blockquote><p>Session 的分布式问题</p></blockquote><ul><li>通常服务端是集群，而用户请求过来会走一次负载均衡，不一定打到哪台机器上。那一旦用户后续接口请求到的机器和他登录请求的机器不一致，或者登录请求的机器宕机了，session 就失效了</li></ul><ol><li>一是从「存储」角度，把 session 集中存储。</li><li>二是从「分布」角度，让相同 IP 的请求在负载均衡时都打到同一台机器上。</li></ol><h2 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-label="Permalink to &quot;token&quot;">​</a></h2><p><img src="'+s+'" alt="token"></p><blockquote><p>出现背景</p></blockquote><ul><li>session 的维护给服务端造成很大困扰，我们必须找地方存放它，又要考虑分布式的问题，甚至要单独为了它启用一套 Redis 集群; token 每次只要核验 cookie 带的「证件」有效性就可以了，在 cookies 携带一些轻量的信息</li></ul><blockquote><p>存在的问题</p></blockquote><ul><li><p>容易被篡改，解决方案就是给 token 加签名，来识别 token 是否被篡改过， 于是就有 JWT （它是一种成熟的 token 字符串生成方案，包含了我们前面提到的数据、签名）</p></li><li><p>安全性，防止被盗用；refresh token 应运而生</p><ol><li>access token 用来访问业务接口，由于有效期足够短，盗用风险小，也可以使请求方式更宽松灵活</li><li>refresh token 用来获取 access token，有效期可以长一些，通过独立服务和严格的请求方式增加安全性；由于不常验证，也可以如前面的 session 一样处理</li></ol></li></ul><p><img src="'+n+'" alt="refresh-token"></p><h2 id="单点登录" tabindex="-1">单点登录 <a class="header-anchor" href="#单点登录" aria-label="Permalink to &quot;单点登录&quot;">​</a></h2><ul><li>多业务场景下的「一次登录，全线通用」的能力，叫做「单点登录」</li></ul><blockquote><p>“虚假”的单点登录（一级域名相同）</p></blockquote><ul><li>业务系统都在同一一级域名下，比如 wenku.baidu.com tieba.baidu.com，就好办了。可以直接把 cookie domain 设置为一级域名 baidu.com</li><li>“真实”的单点登录（一级域名不同）</li><li><img src="'+r+'" alt="sso2"></li></ul><p>参考链接：<a href="https://zhuanlan.zhihu.com/p/281414244" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/281414244</a></p><h2 id="oauth" tabindex="-1">OAuth <a class="header-anchor" href="#oauth" aria-label="Permalink to &quot;OAuth&quot;">​</a></h2><ul><li>OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用</li></ul><p>参考链接：</p><ol><li><a href="https://ruanyifeng.com/blog/2019/04/github-oauth.html" target="_blank" rel="noreferrer">https://ruanyifeng.com/blog/2019/04/github-oauth.html</a></li><li><a href="http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html</a></li></ol>',31),u=[h];function p(k,m,b,d,_,f){return o(),t("div",null,u)}const w=e(c,[["render",p]]);export{g as __pageData,w as default};
