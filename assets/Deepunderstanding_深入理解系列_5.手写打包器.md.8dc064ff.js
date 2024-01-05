import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.84f90f1e.js";const p="/verce-blog/assets/mybundler.3e1d7567.jpg",C=JSON.parse('{"title":"Build your own bundler","description":"","frontmatter":{},"headers":[],"relativePath":"Deepunderstanding/深入理解系列/5.手写打包器.md","filePath":"Deepunderstanding/深入理解系列/5.手写打包器.md"}'),o={name:"Deepunderstanding/深入理解系列/5.手写打包器.md"},e=l(`<h1 id="build-your-own-bundler" tabindex="-1">Build your own bundler <a class="header-anchor" href="#build-your-own-bundler" aria-label="Permalink to &quot;Build your own bundler&quot;">​</a></h1><h2 id="_1-收集依赖" tabindex="-1">1. 收集依赖 <a class="header-anchor" href="#_1-收集依赖" aria-label="Permalink to &quot;1. 收集依赖&quot;">​</a></h2><ul><li>收集依赖; 通过 ast 语法的 import 节点收集</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fs&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">babylon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;babylon&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">traverse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@babel/traverse&quot;</span><span style="color:#E1E4E8;">).default;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">babel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@babel/core&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAsset</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(filename, </span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> babylon.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(content, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceType: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dependencies</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(ast, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ImportDeclaration</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dependencies.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.source.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ID</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">code</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> babel.</span><span style="color:#B392F0;">transformFromAst</span><span style="color:#E1E4E8;">(ast, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    presets: [</span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dependencies,</span></span>
<span class="line"><span style="color:#E1E4E8;">    code,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fs&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">babylon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;babylon&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">traverse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@babel/traverse&quot;</span><span style="color:#24292E;">).default;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">babel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@babel/core&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAsset</span><span style="color:#24292E;">(</span><span style="color:#E36209;">filename</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(filename, </span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> babylon.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(content, {</span></span>
<span class="line"><span style="color:#24292E;">    sourceType: </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dependencies</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(ast, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ImportDeclaration</span><span style="color:#24292E;">: ({ </span><span style="color:#E36209;">node</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      dependencies.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.source.value);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">id</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ID</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">code</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> babel.</span><span style="color:#6F42C1;">transformFromAst</span><span style="color:#24292E;">(ast, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    presets: [</span><span style="color:#032F62;">&quot;@babel/preset-env&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    id,</span></span>
<span class="line"><span style="color:#24292E;">    filename,</span></span>
<span class="line"><span style="color:#24292E;">    dependencies,</span></span>
<span class="line"><span style="color:#24292E;">    code,</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_2-生成依赖图" tabindex="-1">2. 生成依赖图 <a class="header-anchor" href="#_2-生成依赖图" aria-label="Permalink to &quot;2. 生成依赖图&quot;">​</a></h2><ul><li>生成依赖图；遍历所有的依赖递归收集依赖，形成依赖图；</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mainAsset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAsset</span><span style="color:#E1E4E8;">(entry);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">queue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [mainAsset];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">asset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> queue) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(asset.filename);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    asset.mapping </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    asset.dependencies.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">relativePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">absolutePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(dirname, relativePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAsset</span><span style="color:#E1E4E8;">(absolutePath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      asset.mapping[relativePath] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> child.id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;---依赖图---&quot;</span><span style="color:#E1E4E8;">, queue);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> queue;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createGraph</span><span style="color:#24292E;">(</span><span style="color:#E36209;">entry</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mainAsset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAsset</span><span style="color:#24292E;">(entry);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">queue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [mainAsset];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">asset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> queue) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(asset.filename);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    asset.mapping </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    asset.dependencies.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">relativePath</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">absolutePath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(dirname, relativePath);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">child</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAsset</span><span style="color:#24292E;">(absolutePath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      asset.mapping[relativePath] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> child.id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(child);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;---依赖图---&quot;</span><span style="color:#24292E;">, queue);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> queue;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_3-构建组装代码" tabindex="-1">3. 构建组装代码 <a class="header-anchor" href="#_3-构建组装代码" aria-label="Permalink to &quot;3. 构建组装代码&quot;">​</a></h2><ul><li>构建结果</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bundle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> modules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  graph.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mod</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    modules </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\` \${</span><span style="color:#E1E4E8;">mod</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">} : [</span></span>
<span class="line"><span style="color:#9ECBFF;">        function (require, module , exports) {</span></span>
<span class="line"><span style="color:#9ECBFF;">          \${</span><span style="color:#E1E4E8;">mod</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        \${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">mod</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">mapping</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">      ],</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;--module--&quot;</span><span style="color:#E1E4E8;">, modules);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    (function(modules){</span></span>
<span class="line"><span style="color:#9ECBFF;">      function require(id) {</span></span>
<span class="line"><span style="color:#9ECBFF;">        const [fn, mapping] = modules[id];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        function localRequire(relativePath) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            return require(mapping[relativePath])</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        const module = { exports: {} }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        fn(localRequire, module, module.exports);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        return module.exports;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">      require(0);</span></span>
<span class="line"><span style="color:#9ECBFF;">    }({</span></span>
<span class="line"><span style="color:#9ECBFF;">    \${</span><span style="color:#E1E4E8;">modules</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">    }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;--构建结果--&quot;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bundle</span><span style="color:#24292E;">(</span><span style="color:#E36209;">graph</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> modules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  graph.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">mod</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    modules </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\` \${</span><span style="color:#24292E;">mod</span><span style="color:#032F62;">.</span><span style="color:#24292E;">id</span><span style="color:#032F62;">} : [</span></span>
<span class="line"><span style="color:#032F62;">        function (require, module , exports) {</span></span>
<span class="line"><span style="color:#032F62;">          \${</span><span style="color:#24292E;">mod</span><span style="color:#032F62;">.</span><span style="color:#24292E;">code</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        \${</span><span style="color:#005CC5;">JSON</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#032F62;">(</span><span style="color:#24292E;">mod</span><span style="color:#032F62;">.</span><span style="color:#24292E;">mapping</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">      ],</span></span>
<span class="line"><span style="color:#032F62;">  \`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;--module--&quot;</span><span style="color:#24292E;">, modules);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    (function(modules){</span></span>
<span class="line"><span style="color:#032F62;">      function require(id) {</span></span>
<span class="line"><span style="color:#032F62;">        const [fn, mapping] = modules[id];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        function localRequire(relativePath) {</span></span>
<span class="line"><span style="color:#032F62;">            return require(mapping[relativePath])</span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        const module = { exports: {} }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        fn(localRequire, module, module.exports);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        return module.exports;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">      require(0);</span></span>
<span class="line"><span style="color:#032F62;">    }({</span></span>
<span class="line"><span style="color:#032F62;">    \${</span><span style="color:#24292E;">modules</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">    }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;--构建结果--&quot;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+p+`" alt="手写打包器"></p><h2 id="参考视频" tabindex="-1">参考视频 <a class="header-anchor" href="#参考视频" aria-label="Permalink to &quot;参考视频&quot;">​</a></h2><video width="800" height="400" controls><source src="https://upos-sz-mirrorali.bilivideo.com/upgcxcode/93/89/447178993/447178993-1-208.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&amp;uipk=5&amp;nbs=1&amp;deadline=1701411944&amp;gen=playurlv2&amp;os=alibv&amp;oi=2032205461&amp;trid=c8f3638234494c608e2398b79a383d72T&amp;mid=298741099&amp;platform=html5&amp;upsig=53bc69277bbc0dc17905d7f1b2b07614&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&amp;bvc=vod&amp;nettype=0&amp;bw=61654&amp;orderid=0,1&amp;buvid=&amp;build=0&amp;mobi_app=&amp;f=T_0_0&amp;logo=80000000" type="video/mp4"></video><h2 id="完整代码参考" tabindex="-1">完整代码参考 <a class="header-anchor" href="#完整代码参考" aria-label="Permalink to &quot;完整代码参考&quot;">​</a></h2><ul><li><a href="https://github.com/Naparte/my-bundler" target="_blank" rel="noreferrer">demo 地址 https://github.com/Naparte/my-bundler</a></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fs&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">babylon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;babylon&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">traverse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@babel/traverse&quot;</span><span style="color:#E1E4E8;">).default;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">babel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@babel/core&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ID</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 收集依赖; 通过ast语法的import节点收集</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAsset</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(filename, </span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> babylon.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(content, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceType: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dependencies</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(ast, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ImportDeclaration</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dependencies.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.source.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ID</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">code</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> babel.</span><span style="color:#B392F0;">transformFromAst</span><span style="color:#E1E4E8;">(ast, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    presets: [</span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename,</span></span>
<span class="line"><span style="color:#E1E4E8;">    dependencies,</span></span>
<span class="line"><span style="color:#E1E4E8;">    code,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生成依赖图；遍历所有的依赖递归收集依赖，形成依赖图；</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mainAsset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAsset</span><span style="color:#E1E4E8;">(entry);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">queue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [mainAsset];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">asset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> queue) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(asset.filename);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    asset.mapping </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    asset.dependencies.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">relativePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">absolutePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(dirname, relativePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createAsset</span><span style="color:#E1E4E8;">(absolutePath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      asset.mapping[relativePath] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> child.id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;---依赖图---&quot;</span><span style="color:#E1E4E8;">, queue);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> queue;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 构建结果</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bundle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">graph</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> modules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  graph.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mod</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    modules </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\` \${</span><span style="color:#E1E4E8;">mod</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">} : [</span></span>
<span class="line"><span style="color:#9ECBFF;">        function (require, module , exports) {</span></span>
<span class="line"><span style="color:#9ECBFF;">          \${</span><span style="color:#E1E4E8;">mod</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        },</span></span>
<span class="line"><span style="color:#9ECBFF;">        \${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">mod</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">mapping</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">      ],</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;--module--&quot;</span><span style="color:#E1E4E8;">, modules);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    (function(modules){</span></span>
<span class="line"><span style="color:#9ECBFF;">      function require(id) {</span></span>
<span class="line"><span style="color:#9ECBFF;">        const [fn, mapping] = modules[id];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        function localRequire(relativePath) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            return require(mapping[relativePath])</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        const module = { exports: {} }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        fn(localRequire, module, module.exports);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">        return module.exports;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">      require(0);</span></span>
<span class="line"><span style="color:#9ECBFF;">    }({</span></span>
<span class="line"><span style="color:#9ECBFF;">    \${</span><span style="color:#E1E4E8;">modules</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">    }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;--构建结果--&quot;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">graph</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./example/entry.js&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bundle</span><span style="color:#E1E4E8;">(graph);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fs&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">babylon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;babylon&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">traverse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@babel/traverse&quot;</span><span style="color:#24292E;">).default;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">babel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@babel/core&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ID</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 收集依赖; 通过ast语法的import节点收集</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAsset</span><span style="color:#24292E;">(</span><span style="color:#E36209;">filename</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(filename, </span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> babylon.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(content, {</span></span>
<span class="line"><span style="color:#24292E;">    sourceType: </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dependencies</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(ast, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ImportDeclaration</span><span style="color:#24292E;">: ({ </span><span style="color:#E36209;">node</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      dependencies.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.source.value);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">id</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ID</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">code</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> babel.</span><span style="color:#6F42C1;">transformFromAst</span><span style="color:#24292E;">(ast, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    presets: [</span><span style="color:#032F62;">&quot;@babel/preset-env&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    id,</span></span>
<span class="line"><span style="color:#24292E;">    filename,</span></span>
<span class="line"><span style="color:#24292E;">    dependencies,</span></span>
<span class="line"><span style="color:#24292E;">    code,</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生成依赖图；遍历所有的依赖递归收集依赖，形成依赖图；</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createGraph</span><span style="color:#24292E;">(</span><span style="color:#E36209;">entry</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mainAsset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAsset</span><span style="color:#24292E;">(entry);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">queue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [mainAsset];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">asset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> queue) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(asset.filename);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    asset.mapping </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    asset.dependencies.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">relativePath</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">absolutePath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(dirname, relativePath);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">child</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createAsset</span><span style="color:#24292E;">(absolutePath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      asset.mapping[relativePath] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> child.id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(child);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;---依赖图---&quot;</span><span style="color:#24292E;">, queue);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> queue;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 构建结果</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bundle</span><span style="color:#24292E;">(</span><span style="color:#E36209;">graph</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> modules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  graph.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">mod</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    modules </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\` \${</span><span style="color:#24292E;">mod</span><span style="color:#032F62;">.</span><span style="color:#24292E;">id</span><span style="color:#032F62;">} : [</span></span>
<span class="line"><span style="color:#032F62;">        function (require, module , exports) {</span></span>
<span class="line"><span style="color:#032F62;">          \${</span><span style="color:#24292E;">mod</span><span style="color:#032F62;">.</span><span style="color:#24292E;">code</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">        },</span></span>
<span class="line"><span style="color:#032F62;">        \${</span><span style="color:#005CC5;">JSON</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#032F62;">(</span><span style="color:#24292E;">mod</span><span style="color:#032F62;">.</span><span style="color:#24292E;">mapping</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">      ],</span></span>
<span class="line"><span style="color:#032F62;">  \`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;--module--&quot;</span><span style="color:#24292E;">, modules);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    (function(modules){</span></span>
<span class="line"><span style="color:#032F62;">      function require(id) {</span></span>
<span class="line"><span style="color:#032F62;">        const [fn, mapping] = modules[id];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        function localRequire(relativePath) {</span></span>
<span class="line"><span style="color:#032F62;">            return require(mapping[relativePath])</span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        const module = { exports: {} }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        fn(localRequire, module, module.exports);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">        return module.exports;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">      require(0);</span></span>
<span class="line"><span style="color:#032F62;">    }({</span></span>
<span class="line"><span style="color:#032F62;">    \${</span><span style="color:#24292E;">modules</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">    }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;--构建结果--&quot;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">graph</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createGraph</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./example/entry.js&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bundle</span><span style="color:#24292E;">(graph);</span></span></code></pre></div>`,16),c=[e];function t(r,E,y,i,F,u){return n(),a("div",null,c)}const B=s(o,[["render",t]]);export{C as __pageData,B as default};
