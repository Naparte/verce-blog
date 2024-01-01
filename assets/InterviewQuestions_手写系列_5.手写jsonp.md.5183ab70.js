import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.84f90f1e.js";const u=JSON.parse('{"title":"手写 jsonp","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewQuestions/手写系列/5.手写jsonp.md","filePath":"InterviewQuestions/手写系列/5.手写jsonp.md","lastUpdated":1704035115000}'),p={name:"InterviewQuestions/手写系列/5.手写jsonp.md"},o=l(`<h1 id="手写-jsonp" tabindex="-1">手写 jsonp <a class="header-anchor" href="#手写-jsonp" aria-label="Permalink to &quot;手写 jsonp&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jsonp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;callback&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//准备好带有padding的请求url</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dataStr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;?&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;?&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&amp;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(dataStr);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataStr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}=\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">[</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}&amp;\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  dataStr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`callback=\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> callback;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//构造 script</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> oScript </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  oScript.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dataStr;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//appendChild () 方法可向节点的子节点列表的末尾添加新的子节点</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(oScript);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// window[callback]=(data)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window[callback] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        oScript.parentNode.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(oScript); </span><span style="color:#6A737D;">// 注意这句代码，OScript移除,细节</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">jsonp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://www.naparte.com/index?a=1&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  page: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  cate: </span><span style="color:#9ECBFF;">&quot;recommend&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jsonp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;callback&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//准备好带有padding的请求url</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dataStr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> url.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;?&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;?&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&amp;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(dataStr);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> data) {</span></span>
<span class="line"><span style="color:#24292E;">    dataStr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">key</span><span style="color:#032F62;">}=\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">[</span><span style="color:#24292E;">key</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}&amp;\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  dataStr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`callback=\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> callback;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//构造 script</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> oScript </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;script&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  oScript.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> url </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> dataStr;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//appendChild () 方法可向节点的子节点列表的末尾添加新的子节点</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(oScript);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// window[callback]=(data)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(data);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    window[callback] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(e);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        oScript.parentNode.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(oScript); </span><span style="color:#6A737D;">// 注意这句代码，OScript移除,细节</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">jsonp</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://www.naparte.com/index?a=1&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  page: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  cate: </span><span style="color:#032F62;">&quot;recommend&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,2),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};
