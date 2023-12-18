import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.84f90f1e.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewQuestions/4.JavaScript.md","filePath":"InterviewQuestions/4.JavaScript.md","lastUpdated":1702893101000}'),p={name:"InterviewQuestions/4.JavaScript.md"},o=l(`<h2 id="您能提供一个柯里化函数的例子-以及为什么这个语法会有优势" tabindex="-1">您能提供一个柯里化函数的例子，以及为什么这个语法会有优势？ <a class="header-anchor" href="#您能提供一个柯里化函数的例子-以及为什么这个语法会有优势" aria-label="Permalink to &quot;您能提供一个柯里化函数的例子，以及为什么这个语法会有优势？&quot;">​</a></h2><p>柯里化是一种模式，即一个有多个参数的函数被分解成多个函数，当被串联调用时，将一次积累所有需要的参数。 这种技术有助于使以函数式风格的代码更容易阅读和组合。 值得注意的是，要使一个函数被柯里化，它需要从一个函数开始，然后分解成一连串的函数，每个函数接受一个参数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">curry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (fn.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fn;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_curried</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">depth</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newArgument</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (depth </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args, newArgument);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_curried</span><span style="color:#E1E4E8;">(depth </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args, newArgument]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_curried</span><span style="color:#E1E4E8;">(fn.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> curriedAdd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">curry</span><span style="color:#E1E4E8;">(add);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> addFive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">curriedAdd</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(addFive); </span><span style="color:#6A737D;">// [5, 6, 7, 8, 9, 10]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">curry</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (fn.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fn;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_curried</span><span style="color:#24292E;">(</span><span style="color:#E36209;">depth</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">newArgument</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (depth </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args, newArgument);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_curried</span><span style="color:#24292E;">(depth </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args, newArgument]);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_curried</span><span style="color:#24292E;">(fn.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">, []);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> curriedAdd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">curry</span><span style="color:#24292E;">(add);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> addFive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">curriedAdd</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(addFive); </span><span style="color:#6A737D;">// [5, 6, 7, 8, 9, 10]</span></span></code></pre></div><h2 id="描述事件冒泡过程" tabindex="-1">描述事件冒泡过程 <a class="header-anchor" href="#描述事件冒泡过程" aria-label="Permalink to &quot;描述事件冒泡过程&quot;">​</a></h2><p>事件冒泡是 DOM（文档对象模型）中的一种传播机制，其中事件，如点击或键盘事件，首先在启动事件的目标元素上触发，然后向上（冒泡）通过 DOM 树传播到文档的根部。</p><h3 id="冒泡阶段" tabindex="-1">冒泡阶段 <a class="header-anchor" href="#冒泡阶段" aria-label="Permalink to &quot;冒泡阶段&quot;">​</a></h3><p>在冒泡阶段期间，事件从目标元素开始，并通过其在 DOM 层次结构中的祖先向上冒泡。这意味着附加到目标元素及其祖先的事件处理程序都有可能接收并响应事件。</p><p>以下是使用现代 ES6 语法演示事件冒泡的示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// HTML:</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">//   &lt;button id=&quot;child&quot;&gt;点击我！&lt;/button&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">parent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;parent&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;child&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">parent.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;click&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;单击了父元素&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">child.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;click&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;单击了子元素&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// HTML:</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">//   &lt;button id=&quot;child&quot;&gt;点击我！&lt;/button&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">parent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;parent&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">child</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;child&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">parent.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;单击了父元素&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">child.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;单击了子元素&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>当单击 &quot;点击我！&quot; 按钮时，由于事件冒泡，子元素和父元素的事件处理程序都将被触发。</p><h3 id="阻止传播" tabindex="-1">阻止传播 <a class="header-anchor" href="#阻止传播" aria-label="Permalink to &quot;阻止传播&quot;">​</a></h3><p>在冒泡阶段，可以使用 <code>stopPropagation()</code> 方法停止事件传播。如果事件处理程序调用 <code>stopPropagation()</code>，它将阻止事件继续向上冒泡到 DOM 树，确保只有位于层次结构中的元素的处理程序被执行。</p><h3 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-label="Permalink to &quot;事件委托&quot;">​</a></h3><p>事件冒泡是一种称为 &quot;事件委托&quot; 的技术的基础，其中将单个事件处理程序附加到多个元素的共同祖先，并使用事件委托有效地处理这些元素的事件。当您有大量类似元素，例如项目列表时，希望避免为每个项目附加单独的事件处理程序时，这种方法特别有用。</p><h3 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling" target="_blank" rel="noreferrer">MDN Web Docs 上的事件冒泡</a></li><li><a href="https://javascript.info/bubbling-and-capturing" target="_blank" rel="noreferrer">JavaScript.info - 冒泡和捕获</a></li><li><a href="https://www.w3.org/TR/DOM-Level-3-Events/#event-flow" target="_blank" rel="noreferrer">W3C DOM Level 3 事件规范</a></li></ul><h2 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h2><ul><li>javascript 创建对象的几种方式？</li><li>JavaScript 继承的几种实现方式？</li><li>什么是 DOM 和 BOM？</li><li>如何判断一个对象是否属于某个类</li><li>new 操作符具体干了什么呢？如何实现？</li><li>谈一谈浏览器的缓存机制？</li><li>如何解决跨域问题？</li><li>JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？ <a href="https://www.zhihu.com/question/21157540" target="_blank" rel="noreferrer">https://www.zhihu.com/question/21157540</a></li><li>简单介绍一下 V8 引擎的垃圾回收机制</li><li>什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？</li><li>为什么 0.1 + 0.2 != 0.3？如何解决这个问题？</li><li>什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？</li></ul>`,18),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
