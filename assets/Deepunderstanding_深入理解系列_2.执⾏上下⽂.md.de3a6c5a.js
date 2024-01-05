import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.84f90f1e.js";const d=JSON.parse('{"title":"执⾏上下⽂","description":"","frontmatter":{},"headers":[],"relativePath":"Deepunderstanding/深入理解系列/2.执⾏上下⽂.md","filePath":"Deepunderstanding/深入理解系列/2.执⾏上下⽂.md"}'),p={name:"Deepunderstanding/深入理解系列/2.执⾏上下⽂.md"},o=l(`<h1 id="执行上下文" tabindex="-1">执⾏上下⽂ <a class="header-anchor" href="#执行上下文" aria-label="Permalink to &quot;执⾏上下⽂&quot;">​</a></h1><ul><li>解释一：⼀段 JavaScript 代码在执⾏之前需要被 JavaScript 引擎编译，编译完成之后，才会进⼊执⾏阶段。代码经过编译后会生成执行上下文(Execution Context)和可执行代码(Executable Code)</li><li>解释二：JavaScript 引擎并⾮⼀⾏⼀⾏地分析和执⾏程序，⽽是⼀段⼀段地分析执⾏。当执⾏⼀段代码的时候，会进⾏⼀个“准备⼯作”，这⾥的“准备⼯作”，更专业⼀点的说法，就叫做&quot;执⾏上下⽂( execution context )&quot;</li></ul><h2 id="执行上下文栈" tabindex="-1">执⾏上下⽂栈 <a class="header-anchor" href="#执行上下文栈" aria-label="Permalink to &quot;执⾏上下⽂栈&quot;">​</a></h2><blockquote><p>JavaScript 引擎创建了执⾏上下⽂栈（Execution context stack，ECS）来管理执⾏上下⽂</p></blockquote><ul><li>当 JavaScript 遇到下⾯的这段代码</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fun3</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fun3&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fun2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fun3</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fun1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fun2</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">fun1</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun3</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fun3&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fun3</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fun2</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">fun1</span><span style="color:#24292E;">();</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 伪代码</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [globalContext];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun1()</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fun1_functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun1中竟然调⽤了fun2，还要创建fun2的执⾏上下⽂</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fun2_functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 擦，fun2还调⽤了fun3！</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fun3_functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun3执⾏完毕</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun2执⾏完毕</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun1执⾏完毕</span></span>
<span class="line"><span style="color:#E1E4E8;">ECStack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// javascript接着执⾏下⾯的代码，但是ECStack底层永远有个globalContext</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 伪代码</span></span>
<span class="line"><span style="color:#24292E;">ECStack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">ECStack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [globalContext];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun1()</span></span>
<span class="line"><span style="color:#24292E;">ECStack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(fun1_functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun1中竟然调⽤了fun2，还要创建fun2的执⾏上下⽂</span></span>
<span class="line"><span style="color:#24292E;">ECStack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(fun2_functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 擦，fun2还调⽤了fun3！</span></span>
<span class="line"><span style="color:#24292E;">ECStack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(fun3_functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun3执⾏完毕</span></span>
<span class="line"><span style="color:#24292E;">ECStack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun2执⾏完毕</span></span>
<span class="line"><span style="color:#24292E;">ECStack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fun1执⾏完毕</span></span>
<span class="line"><span style="color:#24292E;">ECStack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// javascript接着执⾏下⾯的代码，但是ECStack底层永远有个globalContext</span></span></code></pre></div><h2 id="上下文-之-变量对象" tabindex="-1">上下文 之 变量对象 <a class="header-anchor" href="#上下文-之-变量对象" aria-label="Permalink to &quot;上下文 之 变量对象&quot;">​</a></h2><blockquote><p><code>对于每个执⾏上下⽂，都有三个重要属性：</code></p></blockquote><ol><li>变量对象( Variable object ，VO)</li><li>作⽤域链( Scope chain )</li><li>this</li></ol><blockquote><p>全局上下⽂</p></blockquote><ol><li>全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使⽤全局对象，可以访问所有其他所有预定义的对象、函数和属性。</li><li>在顶层 JavaScript 代码中，可以⽤关键字 this 引⽤全局对象。因为全局对象是作⽤域链的头，这意味着所有⾮限定性的变量和函数名都会作为该对象的属性来查询。</li><li>例如，当 JavaScript 代码引⽤ parseInt()函数时，它引⽤的是全局对象的 parseInt 属性。全局对象是作⽤域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。</li></ol><ul><li><code>简单点说: 在客户端 JavaScript 中，全局对象就是 Window 对象</code></li></ul><blockquote><p>函数上下⽂</p></blockquote><ul><li>在函数上下⽂中，⽤活动对象( activation object, AO)来表示变量对象</li></ul><blockquote><p>函数执⾏过程</p></blockquote><ul><li>执⾏上下⽂的代码会分成两个阶段进⾏处理：分析和执⾏，也可以叫做：</li></ul><ol><li>进⼊执⾏上下⽂；</li><li>代码执⾏；</li></ol><p>变量对象会包括：</p><ol><li>函数的所有形参(如果是函数上下⽂) <ul><li>由名称和对应值组成的⼀个变量对象的属性被创建</li><li>没有实参，属性值设为 undefined</li></ul></li><li>函数声明 <ul><li>由名称和对应值（函数对象(function-object)）组成⼀个变量对象的属性被创建</li><li><code>如果变量对象已经存在相同名称的属性，则完全替换这个属性</code></li></ul></li><li>变量声明 <ul><li>由名称和对应值（undefined）组成⼀个变量对象的属性被创建</li><li><code>如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会⼲扰已经存在的这类属性</code></li></ul></li></ol><blockquote><p>举个例⼦：</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">d</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在进⼊执⾏上下⽂后，这时候的 AO 是：</span></span>
<span class="line"><span style="color:#79B8FF;">AO</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  arguments: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    length: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  c: reference to </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c</span><span style="color:#E1E4E8;">(){},</span></span>
<span class="line"><span style="color:#E1E4E8;">  d: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当代码执⾏完后，这时候的 AO 是：</span></span>
<span class="line"><span style="color:#79B8FF;">AO</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  arguments: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    length: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  c: reference to </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c</span><span style="color:#E1E4E8;">(){},</span></span>
<span class="line"><span style="color:#E1E4E8;">  d: reference to FunctionExpression </span><span style="color:#9ECBFF;">&quot;d&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#24292E;">  b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在进⼊执⾏上下⽂后，这时候的 AO 是：</span></span>
<span class="line"><span style="color:#005CC5;">AO</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  arguments: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    length: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  b: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  c: reference to </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c</span><span style="color:#24292E;">(){},</span></span>
<span class="line"><span style="color:#24292E;">  d: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当代码执⾏完后，这时候的 AO 是：</span></span>
<span class="line"><span style="color:#005CC5;">AO</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  arguments: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    length: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  b: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  c: reference to </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c</span><span style="color:#24292E;">(){},</span></span>
<span class="line"><span style="color:#24292E;">  d: reference to FunctionExpression </span><span style="color:#032F62;">&quot;d&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">  a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// Uncaught ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这是因为函数中的&quot;a&quot;并没有通过var关键字声明，所有不会被存放在 AO中。</span></span>
<span class="line"><span style="color:#6A737D;">// 当第⼆段执⾏console的时候，全局对象已经被赋予了a属性，这时候就可以从全局找到 a 的值1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">  a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// Uncaught ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这是因为函数中的&quot;a&quot;并没有通过var关键字声明，所有不会被存放在 AO中。</span></span>
<span class="line"><span style="color:#6A737D;">// 当第⼆段执⾏console的时候，全局对象已经被赋予了a属性，这时候就可以从全局找到 a 的值1</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo);</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 会打印函数，⽽不是 undefined</span></span>
<span class="line"><span style="color:#6A737D;">// 这是因为在进⼊执⾏上下⽂时，⾸先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会⼲扰已经存在的这类属性。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo);</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 会打印函数，⽽不是 undefined</span></span>
<span class="line"><span style="color:#6A737D;">// 这是因为在进⼊执⾏上下⽂时，⾸先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会⼲扰已经存在的这类属性。</span></span></code></pre></div><h2 id="上下文-之-作用域链" tabindex="-1">上下文 之 作⽤域链 <a class="header-anchor" href="#上下文-之-作用域链" aria-label="Permalink to &quot;上下文 之 作⽤域链&quot;">​</a></h2><ul><li>当查找变量的时候，会先从当前上下⽂的变量对象中查找，如果没有找到，就会从⽗级(词法层⾯上的⽗级)执⾏上下⽂的变量对象中查找，⼀直找到全局上下⽂的变量对象，也就是全局对象。这样由多个执⾏上下⽂的变量对象构成的链表就叫做作⽤域链</li><li>函数的作⽤域在函数定义的时候就决定了</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 举个例⼦：</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 函数创建时，各⾃的[[scope]]为：</span></span>
<span class="line"><span style="color:#E1E4E8;">foo.[[scope]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  globalContext.</span><span style="color:#79B8FF;">VO</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">bar.[[scope]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  fooContext.</span><span style="color:#79B8FF;">AO</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  globalContext.</span><span style="color:#79B8FF;">VO</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 举个例⼦：</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 函数创建时，各⾃的[[scope]]为：</span></span>
<span class="line"><span style="color:#24292E;">foo.[[scope]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  globalContext.</span><span style="color:#005CC5;">VO</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">bar.[[scope]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  fooContext.</span><span style="color:#005CC5;">AO</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  globalContext.</span><span style="color:#005CC5;">VO</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><h2 id="上下文-之-this" tabindex="-1">上下文 之 this <a class="header-anchor" href="#上下文-之-this" aria-label="Permalink to &quot;上下文 之 this&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Types are further subclassified into ECMAScript language types and specification types.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">我们简单的翻译一下：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ECMAScript 的类型分为语言类型和规范类型。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">没懂？没关系，我们只要知道在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Types are further subclassified into ECMAScript language types and specification types.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">我们简单的翻译一下：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ECMAScript 的类型分为语言类型和规范类型。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">没懂？没关系，我们只要知道在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。</span></span></code></pre></div><blockquote><p>Reference</p></blockquote><ul><li>The Reference type is used to explain the behaviour of such operators as delete, typeof, and the assignment operators</li><li>这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中</li></ul><blockquote><p>Reference 的构成，由三个组成部分，分别是：</p></blockquote><ol><li>base value</li><li>referenced name</li><li>strict reference</li></ol><ul><li>简单的理解的话：</li></ul><ol><li>base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种</li><li>referenced name 就是属性的名称。</li><li>strict 标识是不是严格模式</li></ol><blockquote><p>如何确定 this 的值</p></blockquote><ol><li>计算 MemberExpression 的结果赋值给 ref <ol><li><code>简单理解 MemberExpression 其实就是()左边的部分。</code></li></ol></li><li>判断 ref 是不是一个 Reference 类型。 <ol><li>如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)</li><li>如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么 this 的值为 ImplicitThisValue(ref)</li><li>如果 ref 不是 Reference，那么 this 的值为 undefined</li></ol></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//示例1</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo.</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#6A737D;">//示例2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo.</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#6A737D;">//示例3</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((foo.bar </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> foo.bar)());</span></span>
<span class="line"><span style="color:#6A737D;">//示例4</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> foo.bar)());</span></span>
<span class="line"><span style="color:#6A737D;">//示例5</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((foo.bar, foo.bar)());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//示例1</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo.</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#6A737D;">//示例2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo.</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#6A737D;">//示例3</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((foo.bar </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> foo.bar)());</span></span>
<span class="line"><span style="color:#6A737D;">//示例4</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> foo.bar)());</span></span>
<span class="line"><span style="color:#6A737D;">//示例5</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((foo.bar, foo.bar)());</span></span></code></pre></div><blockquote><p>foo.bar()</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 该表达式返回了⼀个 Reference 类型;该值为</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> Reference </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  base: foo,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  strict: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 该值是 Reference 类型，那么 IsPropertyReference(ref) 的结果是多少呢？</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 前面我们已经铺垫了 IsPropertyReference 方法，如果 base value 是一个对象，结果返回 true。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// base value 为 foo，是一个对象，所以 IsPropertyReference(ref) 结果为 true。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这个时候我们就可以确定 this 的值了：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// this = GetBase(ref)，</span></span>
<span class="line"><span style="color:#6A737D;">// GetBase 也已经铺垫了，获得 base value 值，这个例子中就是foo，所以 this 的值就是 foo ，示例1的结果就是 2！</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 该表达式返回了⼀个 Reference 类型;该值为</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Reference </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  base: foo,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  strict: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 该值是 Reference 类型，那么 IsPropertyReference(ref) 的结果是多少呢？</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 前面我们已经铺垫了 IsPropertyReference 方法，如果 base value 是一个对象，结果返回 true。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// base value 为 foo，是一个对象，所以 IsPropertyReference(ref) 结果为 true。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这个时候我们就可以确定 this 的值了：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// this = GetBase(ref)，</span></span>
<span class="line"><span style="color:#6A737D;">// GetBase 也已经铺垫了，获得 base value 值，这个例子中就是foo，所以 this 的值就是 foo ，示例1的结果就是 2！</span></span></code></pre></div><blockquote><p>(foo.bar)()</p></blockquote><ul><li>实际上 () 并没有对 MemberExpression 进行计算，所以其实跟示例 1 的结果是一样的</li></ul><blockquote><p>(foo.bar = foo.bar)()</p></blockquote><ul><li>有赋值操作符, (foo.bar = foo.bar) 返回的值不是 Reference 类型</li><li><code>this 为 undefined，非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。</code></li></ul><blockquote><p>(false || foo.bar)()</p></blockquote><ul><li>(false || foo.bar) 返回的不是 Reference 类型，this 为 undefined</li></ul><blockquote><p>(foo.bar, foo.bar)()</p></blockquote><ul><li>逗号操作符,(foo.bar, foo.bar)返回的不是 Reference 类型，this 为 undefined</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//示例1</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo.</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#6A737D;">//示例2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo.</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#6A737D;">//示例3</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((foo.bar </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> foo.bar)()); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6A737D;">//示例4</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> foo.bar)()); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6A737D;">//示例5</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((foo.bar, foo.bar)()); </span><span style="color:#6A737D;">// 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//示例1</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo.</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#6A737D;">//示例2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo.</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#6A737D;">//示例3</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((foo.bar </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> foo.bar)()); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6A737D;">//示例4</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> foo.bar)()); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6A737D;">//示例5</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((foo.bar, foo.bar)()); </span><span style="color:#6A737D;">// 1</span></span></code></pre></div>`,49),e=[o];function c(t,r,E,i,y,u){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
