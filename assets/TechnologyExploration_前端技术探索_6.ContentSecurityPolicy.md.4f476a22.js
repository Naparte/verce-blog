import{_ as t,o as s,c as a,Q as e}from"./chunks/framework.84f90f1e.js";const E=JSON.parse('{"title":"Content Security Policy","description":"","frontmatter":{},"headers":[],"relativePath":"TechnologyExploration/前端技术探索/6.ContentSecurityPolicy.md","filePath":"TechnologyExploration/前端技术探索/6.ContentSecurityPolicy.md","lastUpdated":1702904055000}'),l={name:"TechnologyExploration/前端技术探索/6.ContentSecurityPolicy.md"},o=e(`<h1 id="content-security-policy" tabindex="-1">Content Security Policy <a class="header-anchor" href="#content-security-policy" aria-label="Permalink to &quot;Content Security Policy&quot;">​</a></h1><h2 id="csp-是什么" tabindex="-1">CSP 是什么？ <a class="header-anchor" href="#csp-是什么" aria-label="Permalink to &quot;CSP 是什么？&quot;">​</a></h2><ul><li>Content Security Polic （CSP） 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置</li></ul><h2 id="csp-解决了什么问题" tabindex="-1">CSP 解决了什么问题？ <a class="header-anchor" href="#csp-解决了什么问题" aria-label="Permalink to &quot;CSP 解决了什么问题？&quot;">​</a></h2><ul><li><code>跨域脚本攻击 XSS</code> 是最常见、危害最大的网页安全漏洞，了防止它们，要采取很多编程措施，非常麻烦。很多人提出，能不能根本上解决问题，浏览器自动禁止外部注入恶意脚本，这就是&quot;网页安全政策&quot;的来历</li></ul><h2 id="csp-如何启用" tabindex="-1">CSP 如何启用？ <a class="header-anchor" href="#csp-如何启用" aria-label="Permalink to &quot;CSP 如何启用？&quot;">​</a></h2><ul><li>通过 HTTP 头信息的 <code>Content-Security-Policy</code> 的字段</li></ul><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">Content-Security-Policy</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">script-src &#39;self&#39;; object-src &#39;none&#39;;style-src cdn.example.org third-party.org; child-src https:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">Content-Security-Policy</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">script-src &#39;self&#39;; object-src &#39;none&#39;;style-src cdn.example.org third-party.org; child-src https:</span></span></code></pre></div><ul><li>通过网页的<code>&lt;meta&gt;</code>标签</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">http-equiv</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Content-Security-Policy&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;script-src &#39;self&#39;; object-src &#39;none&#39;; style-src cdn.example.org third-party.org; child-src https:&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">meta</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Content-Security-Policy&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;script-src &#39;self&#39;; object-src &#39;none&#39;; style-src cdn.example.org third-party.org; child-src https:&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre></div><blockquote><p>上述配置解释</p></blockquote><ul><li>脚本：只信任当前域名</li><li><code>&lt;object&gt;</code>标签：不信任任何 URL，即不加载任何资源</li><li>样式表：只信任 cdn.example.org 和 third-party.org</li><li>框架（frame）：必须使用 HTTPS 协议加载</li><li>其他资源：没有限制</li></ul><h2 id="csp-如何配置" tabindex="-1">CSP 如何配置？ <a class="header-anchor" href="#csp-如何配置" aria-label="Permalink to &quot;CSP 如何配置？&quot;">​</a></h2><h3 id="资源加载限制配置" tabindex="-1">资源加载限制配置 <a class="header-anchor" href="#资源加载限制配置" aria-label="Permalink to &quot;资源加载限制配置&quot;">​</a></h3><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>script-src</td><td>外部脚本</td></tr><tr><td>style-src</td><td>样式表</td></tr><tr><td>img-src</td><td>图像</td></tr><tr><td>media-src</td><td>媒体文件（音频和视频）</td></tr><tr><td>font-src</td><td>字体文件</td></tr><tr><td>object-src</td><td>插件（比如 Flash）</td></tr><tr><td>child-src</td><td>框架</td></tr><tr><td>frame-ancestors</td><td>嵌入的外部资源（比如<code>&lt;frame&gt;</code>、<code>&lt;iframe&gt;</code>、<code>&lt;embed&gt;</code>和<code>&lt;applet&gt;</code>）</td></tr><tr><td>connect-src</td><td>HTTP 连接（通过 XHR、WebSockets、EventSource 等）</td></tr><tr><td>worker-src</td><td>worker 脚本</td></tr><tr><td>manifest-src</td><td>manifest 文件</td></tr></tbody></table><h3 id="default-src" tabindex="-1"><code>default-src</code> <a class="header-anchor" href="#default-src" aria-label="Permalink to &quot;\`default-src\`&quot;">​</a></h3><ul><li>default-src 用来设置上面各个选项的默认值</li></ul><h3 id="url-限制" tabindex="-1"><code>URL 限制</code> <a class="header-anchor" href="#url-限制" aria-label="Permalink to &quot;\`URL 限制\`&quot;">​</a></h3><ul><li><p>网页会跟其他 URL 发生联系，这时也可以加以限制</p><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>frame-ancestors</td><td>限制嵌入框架的网页</td></tr><tr><td>base-uri</td><td>限制<code>&lt;base#href&gt;</code></td></tr><tr><td>form-action</td><td>限制<code>&lt;form#action&gt;</code></td></tr></tbody></table></li></ul><h3 id="其他限制" tabindex="-1"><code>其他限制</code> <a class="header-anchor" href="#其他限制" aria-label="Permalink to &quot;\`其他限制\`&quot;">​</a></h3><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>block-all-mixed-content</td><td>HTTPS 网页不得加载 HTTP 资源（浏览器已经默认开启）</td></tr><tr><td>upgrade-insecure-requests</td><td>自动将网页上所有加载外部资源的 HTTP 链接换成 HTTPS 协议</td></tr><tr><td>plugin-types</td><td>限制可以使用的插件格式</td></tr><tr><td>sandbox</td><td>浏览器行为的限制，比如不能有弹出窗口等</td></tr></tbody></table><h3 id="report-uri" tabindex="-1">report-uri <a class="header-anchor" href="#report-uri" aria-label="Permalink to &quot;report-uri&quot;">​</a></h3><ul><li>report-uri 就用来告诉浏览器，应该把注入行为报告给哪个网址</li></ul><h2 id="csp-如何配置选项值" tabindex="-1">CSP 如何配置选项值？ <a class="header-anchor" href="#csp-如何配置选项值" aria-label="Permalink to &quot;CSP 如何配置选项值？&quot;">​</a></h2><blockquote><p>每个限制选项可以设置以下几种值，这些值就构成了白名单</p></blockquote><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>主机名</td><td>example.org, <a href="https://example.com:443" target="_blank" rel="noreferrer">https://example.com:443</a></td></tr><tr><td>路径名</td><td>example.org/resources/js/</td></tr><tr><td>通配符</td><td><em>.example.org, <em>😕/</em>.example.com:</em></td></tr><tr><td>协议名</td><td>https:, data:</td></tr><tr><td>关键字&#39;self&#39;</td><td>&#39;self&#39;</td></tr><tr><td>关键字&#39;none&#39;</td><td>&#39;none&#39;</td></tr></tbody></table><blockquote><p>多个值也可以并列，用空格分隔</p></blockquote><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">Content-Security-Policy</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">script-src &#39;self&#39; https://apis.google.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">Content-Security-Policy</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">script-src &#39;self&#39; https://apis.google.com</span></span></code></pre></div><blockquote><p>script-src 的特殊值</p></blockquote><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>&#39;unsafe-inline&#39;</td><td>允许执行页面内嵌的<code>&lt;script&gt;</code>标签和事件监听函数</td></tr><tr><td>&#39;unsafe-eval&#39;</td><td>允许将字符串当作代码执行，比如使用 eval、setTimeout、setInterval 和 Function 等函数。</td></tr><tr><td>nonce 值</td><td>每次 HTTP 回应给出一个授权 token，页面内嵌脚本必须有这个 token，才会执行</td></tr><tr><td>hash 值</td><td>列出允许执行的脚本代码的 Hash 值，页面内嵌脚本的哈希值只有吻合的情况下，才能执行。</td></tr></tbody></table><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><p>script-src 和 object-src 是必设的，除非设置了 default-src</p><blockquote><p>因为攻击者只要能注入脚本，其他限制都可以规避。而 object-src 必设是因为 Flash 里面可以执行外部脚本</p></blockquote></li><li><p>script-src 不能使用 unsafe-inline 关键字（除非伴随一个 nonce 值），也不能允许设置 data:URL</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 两个恶意攻击的例子 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;x&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onerror</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">evil</span><span style="color:#9ECBFF;">()&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data:text/javascript,evil()&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 两个恶意攻击的例子 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;x&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onerror</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">evil</span><span style="color:#032F62;">()&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data:text/javascript,evil()&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li><li><p>必须特别注意 JSONP 的回调函数</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 加载的脚本来自当前域名，但是通过改写回调函数，攻击者依然可以执行恶意代码 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/path/jsonp?callback=alert(document.domain)//&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 加载的脚本来自当前域名，但是通过改写回调函数，攻击者依然可以执行恶意代码 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/path/jsonp?callback=alert(document.domain)//&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li></ul><h2 id="拓展-content-security-policy-report-only" tabindex="-1">拓展：Content-Security-Policy-Report-Only <a class="header-anchor" href="#拓展-content-security-policy-report-only" aria-label="Permalink to &quot;拓展：Content-Security-Policy-Report-Only&quot;">​</a></h2><ul><li>除了 Content-Security-Policy，还有一个 Content-Security-Policy-Report-Only 字段，表示不执行限制选项，只是记录违反限制的行为。它必须与 report-uri 选项配合使用</li></ul><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">Content-Security-Policy-Report-Only</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default-src &#39;self&#39;; ...; report-uri /my_amazing_csp_report_parser;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">Content-Security-Policy-Report-Only</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default-src &#39;self&#39;; ...; report-uri /my_amazing_csp_report_parser;</span></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2016/09/csp.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2016/09/csp.html</a></li></ul>`,37),n=[o];function r(p,c,d,i,y,h){return s(),a("div",null,n)}const b=t(l,[["render",r]]);export{E as __pageData,b as default};
