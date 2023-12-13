import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.84f90f1e.js";const h=JSON.parse('{"title":"SourceMap","description":"","frontmatter":{},"headers":[],"relativePath":"TechnologyExploration/前端技术探索/4.SourceMap.md","filePath":"TechnologyExploration/前端技术探索/4.SourceMap.md","lastUpdated":1702452449000}'),l={name:"TechnologyExploration/前端技术探索/4.SourceMap.md"},e=p(`<h1 id="sourcemap" tabindex="-1">SourceMap <a class="header-anchor" href="#sourcemap" aria-label="Permalink to &quot;SourceMap&quot;">​</a></h1><h2 id="sourcemap-是什么" tabindex="-1">SourceMap 是什么？ <a class="header-anchor" href="#sourcemap-是什么" aria-label="Permalink to &quot;SourceMap 是什么？&quot;">​</a></h2><ul><li>SourceMap 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码</li></ul><h2 id="sourcemap-解决了什么问题" tabindex="-1">SourceMap 解决了什么问题？ <a class="header-anchor" href="#sourcemap-解决了什么问题" aria-label="Permalink to &quot;SourceMap 解决了什么问题？&quot;">​</a></h2><ul><li>在前端开发中，为了提高网页性能，我们通常会对代码进行转换、压缩和合并等操作。然而，这些转换后的代码往往难以阅读和调试，因为它们与原始源代码之间的映射关系丢失了。这就导致了在生产环境中调试代码变得困难，开发者很难定位到错误的具体位置。</li><li>SourceMap 解决了这个问题，它通过记录转换后的代码与原始源代码之间的映射关系，使得开发者能够在调试工具中看到原始源代码的位置信息。这样，开发者就能够更轻松地进行错误定位、调试和优化，提高了开发效率和代码质量。</li></ul><h2 id="如何生成-sourcemap" tabindex="-1">如何生成 SourceMap？ <a class="header-anchor" href="#如何生成-sourcemap" aria-label="Permalink to &quot;如何生成 SourceMap？&quot;">​</a></h2><p>最常用的方法是使用 Google 的 <a href="https://developers.google.com/closure/compiler?hl=zh-cn" target="_blank" rel="noreferrer">Closure 编译器</a>。</p><h2 id="sourcemap-的工作原理" tabindex="-1">SourceMap 的工作原理 <a class="header-anchor" href="#sourcemap-的工作原理" aria-label="Permalink to &quot;SourceMap 的工作原理&quot;">​</a></h2><h3 id="source-map-文件-它大概是这个样子" tabindex="-1">Source map 文件，它大概是这个样子 <a class="header-anchor" href="#source-map-文件-它大概是这个样子" aria-label="Permalink to &quot;Source map 文件，它大概是这个样子&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">file</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;out.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sourceRoot</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sources</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;foo.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar.js&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">names</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;maps&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;are&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;fun&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mappings</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;AAgBC,SAAQ,CAAEA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// version：Source map的版本，目前为3。</span></span>
<span class="line"><span style="color:#6A737D;">// file：转换后的文件名。</span></span>
<span class="line"><span style="color:#6A737D;">// sourceRoot：转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空。</span></span>
<span class="line"><span style="color:#6A737D;">// sources：转换前的文件。该项是一个数组，表示可能存在多个文件合并。</span></span>
<span class="line"><span style="color:#6A737D;">// names：转换前的所有变量名和属性名。</span></span>
<span class="line"><span style="color:#6A737D;">// mappings：记录位置信息的字符串。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">file</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;out.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sourceRoot</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sources</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;foo.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar.js&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">names</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;src&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;maps&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;are&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;fun&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mappings</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;AAgBC,SAAQ,CAAEA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// version：Source map的版本，目前为3。</span></span>
<span class="line"><span style="color:#6A737D;">// file：转换后的文件名。</span></span>
<span class="line"><span style="color:#6A737D;">// sourceRoot：转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空。</span></span>
<span class="line"><span style="color:#6A737D;">// sources：转换前的文件。该项是一个数组，表示可能存在多个文件合并。</span></span>
<span class="line"><span style="color:#6A737D;">// names：转换前的所有变量名和属性名。</span></span>
<span class="line"><span style="color:#6A737D;">// mappings：记录位置信息的字符串。</span></span></code></pre></div><h3 id="mappings-属性" tabindex="-1">mappings 属性 <a class="header-anchor" href="#mappings-属性" aria-label="Permalink to &quot;mappings 属性&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一层是行对应，以分号（;）表示，每个分号对应转换后源码的一行。所以，第一个分号前的内容，就对应源码的第一行，以此类推。</span></span>
<span class="line"><span style="color:#e1e4e8;">第二层是位置对应，以逗号（,）表示，每个逗号对应转换后源码的一个位置。所以，第一个逗号前的内容，就对应该行源码的第一个位置，以此类推。</span></span>
<span class="line"><span style="color:#e1e4e8;">第三层是位置转换，以 VLQ 编码表示，代表该位置对应的转换前的源码位置。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">举例来说，假定mappings属性的内容如下：</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  mappings: &quot;AAAAA,BBBBB;CCCCC&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">就表示，转换后的源码分成两行，第一行有两个位置，第二行有一个位置</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一层是行对应，以分号（;）表示，每个分号对应转换后源码的一行。所以，第一个分号前的内容，就对应源码的第一行，以此类推。</span></span>
<span class="line"><span style="color:#24292e;">第二层是位置对应，以逗号（,）表示，每个逗号对应转换后源码的一个位置。所以，第一个逗号前的内容，就对应该行源码的第一个位置，以此类推。</span></span>
<span class="line"><span style="color:#24292e;">第三层是位置转换，以 VLQ 编码表示，代表该位置对应的转换前的源码位置。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">举例来说，假定mappings属性的内容如下：</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  mappings: &quot;AAAAA,BBBBB;CCCCC&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">就表示，转换后的源码分成两行，第一行有两个位置，第二行有一个位置</span></span></code></pre></div><h3 id="位置对应的原理" tabindex="-1">位置对应的原理 <a class="header-anchor" href="#位置对应的原理" aria-label="Permalink to &quot;位置对应的原理&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">第一位，表示这个位置在（转换后的代码的）的第几列。</span></span>
<span class="line"><span style="color:#e1e4e8;">第二位，表示这个位置属于 sources 属性中的哪一个文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">第三位，表示这个位置属于转换前代码的第几行。</span></span>
<span class="line"><span style="color:#e1e4e8;">第四位，表示这个位置属于转换前代码的第几列。</span></span>
<span class="line"><span style="color:#e1e4e8;">第五位，表示这个位置属于 names 属性中的哪一个变量</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">特殊说明：</span></span>
<span class="line"><span style="color:#e1e4e8;">所有的值都是以0作为基数的。其次，第五位不是必需的，如果该位置没有对应names属性中的变量，可以省略第五位。再次，每一位都采用VLQ编码表示；由于VLQ编码是变长的，所以每一位可以由多个字符构成。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">如果某个位置是AAAAA，由于A在VLQ编码中表示0，因此这个位置的五个位实际上都是0。它的意思是，该位置在转换后代码的第0列，对应sources属性中第0个文件，属于转换前代码的第0行第0列，对应names属性中的第0个变量</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">第一位，表示这个位置在（转换后的代码的）的第几列。</span></span>
<span class="line"><span style="color:#24292e;">第二位，表示这个位置属于 sources 属性中的哪一个文件。</span></span>
<span class="line"><span style="color:#24292e;">第三位，表示这个位置属于转换前代码的第几行。</span></span>
<span class="line"><span style="color:#24292e;">第四位，表示这个位置属于转换前代码的第几列。</span></span>
<span class="line"><span style="color:#24292e;">第五位，表示这个位置属于 names 属性中的哪一个变量</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">特殊说明：</span></span>
<span class="line"><span style="color:#24292e;">所有的值都是以0作为基数的。其次，第五位不是必需的，如果该位置没有对应names属性中的变量，可以省略第五位。再次，每一位都采用VLQ编码表示；由于VLQ编码是变长的，所以每一位可以由多个字符构成。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">如果某个位置是AAAAA，由于A在VLQ编码中表示0，因此这个位置的五个位实际上都是0。它的意思是，该位置在转换后代码的第0列，对应sources属性中第0个文件，属于转换前代码的第0行第0列，对应names属性中的第0个变量</span></span></code></pre></div><h2 id="sourcemap-如何配置" tabindex="-1">SourceMap 如何配置？ <a class="header-anchor" href="#sourcemap-如何配置" aria-label="Permalink to &quot;SourceMap 如何配置？&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// webpack</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">devtool</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;source-map&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// https://webpack.js.org/configuration/devtool/</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// vite build.sourcemap</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sourcemap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// boolean | &#39;inline&#39; | &#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// https://vitejs.dev/config/build-options#build-sourcemap</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// rollup output.sourcemap</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sourcemap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// boolean | &#39;inline&#39; | &#39;hidden&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// https://rollupjs.org/configuration-options/#output-sourcemap</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// webpack</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">devtool</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;source-map&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// https://webpack.js.org/configuration/devtool/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// vite build.sourcemap</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sourcemap</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// boolean | &#39;inline&#39; | &#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// https://vitejs.dev/config/build-options#build-sourcemap</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// rollup output.sourcemap</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sourcemap</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// boolean | &#39;inline&#39; | &#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// https://rollupjs.org/configuration-options/#output-sourcemap</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6969748500938489892#heading-2" target="_blank" rel="noreferrer">https://juejin.cn/post/6969748500938489892#heading-2</a></li><li><a href="https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html</a></li><li><a href="https://webdesign.tutsplus.com/source-maps-101--net-29173t" target="_blank" rel="noreferrer">如何生成 SourceMap</a></li></ul>`,18),o=[e];function c(t,r,i,y,u,E){return a(),n("div",null,o)}const m=s(l,[["render",c]]);export{h as __pageData,m as default};
