import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.84f90f1e.js";const u=JSON.parse('{"title":"Mixin","description":"","frontmatter":{},"headers":[],"relativePath":"thirdpartys/es6tutorial/docs/mixin.md","filePath":"thirdpartys/es6tutorial/docs/mixin.md"}'),p={name:"thirdpartys/es6tutorial/docs/mixin.md"},o=l(`<h1 id="mixin" tabindex="-1">Mixin <a class="header-anchor" href="#mixin" aria-label="Permalink to &quot;Mixin&quot;">​</a></h1><p>JavaScript 语言的设计是单一继承，即子类只能继承一个父类，不允许继承多个父类。这种设计保证了对象继承的层次结构是树状的，而不是复杂的<a href="https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem" target="_blank" rel="noreferrer">网状结构</a>。</p><p>但是，这大大降低了编程的灵活性。因为实际开发中，有时不可避免，子类需要继承多个父类。举例来说，“猫”可以继承“哺乳类动物”，也可以继承“宠物”。</p><p>各种单一继承的编程语言，有不同的多重继承解决方案。比如，Java 语言也是子类只能继承一个父类，但是还允许继承多个界面（interface），这样就间接实现了多重继承。Interface 与父类一样，也是一个类，只不过它只定义接口（method signature），不定义实现，因此又被称为“抽象类”。凡是继承于 Interface 的方法，都必须自己定义实现，否则就会报错。这样就避免了多重继承的最大问题：多个父类的同名方法的碰撞（naming collision）。</p><p>JavaScript 语言没有采用 Interface 的方案，而是通过代理（delegation）实现了从其他类引入方法。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Enumerable_first</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;baz&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">Enumerable_first.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(list); </span><span style="color:#6A737D;">// explicit delegation</span></span>
<span class="line"><span style="color:#E1E4E8;">list.</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// &quot;foo&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Enumerable_first</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;baz&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">Enumerable_first.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(list); </span><span style="color:#6A737D;">// explicit delegation</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// &quot;foo&quot;</span></span></code></pre></div><p>上面代码中，<code>list</code>是一个数组，本身并没有<code>first</code>方法。通过<code>call</code>方法，可以把<code>Enumerable_first</code>里面的方法，绑定到<code>list</code>，从而<code>list</code>就具有<code>first</code>方法。这就叫做“代理”（delegation），<code>list</code>对象代理了<code>Enumerable_first</code>的<code>first</code>方法。</p><h2 id="含义" tabindex="-1">含义 <a class="header-anchor" href="#含义" aria-label="Permalink to &quot;含义&quot;">​</a></h2><p>Mixin 这个名字来自于冰淇淋，在基本口味的冰淇淋上面混入其他口味，这就叫做 Mix-in。</p><p>它允许向一个类里面注入一些代码，使得一个类的功能能够“混入”另一个类。实质上是多重继承的一种解决方案，但是避免了多重继承的复杂性，而且有利于代码复用。</p><p>Mixin 就是一个正常的类，不仅定义了接口，还定义了接口的实现。</p><p>子类通过在<code>this</code>对象上面绑定方法，达到多重继承的目的。</p><p>很多库提供了 Mixin 功能。下面以 Lodash 为例。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vowels</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[aeiou]</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { value: </span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">_.</span><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">(obj, {vowels: vowels})</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">vowels</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vowels</span><span style="color:#24292E;">(</span><span style="color:#E36209;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[aeiou]</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">i</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { value: </span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">_.</span><span style="color:#6F42C1;">mixin</span><span style="color:#24292E;">(obj, {vowels: vowels})</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">vowels</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// true</span></span></code></pre></div><p>上面代码通过 Lodash 库的<code>_.mixin</code>方法，让<code>obj</code>对象继承了<code>vowels</code>方法。</p><p>Underscore 的类似方法是<code>_.extend</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">fName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.firstName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fName;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lastName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lName;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sam </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Sam&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Lowry&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> NameMixin </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fullName</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.firstName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lastName;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rename</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">first</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">last</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.firstName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> first;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lastName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> last;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">_.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Person</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">, NameMixin);</span></span>
<span class="line"><span style="color:#E1E4E8;">sam.</span><span style="color:#B392F0;">rename</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Samwise&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Gamgee&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">sam.</span><span style="color:#B392F0;">fullName</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// &quot;Samwise Gamgee&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lName</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.firstName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fName;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.lastName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lName;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sam </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Sam&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Lowry&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> NameMixin </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fullName</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.firstName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.lastName;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rename</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">first</span><span style="color:#24292E;">, </span><span style="color:#E36209;">last</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.firstName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> first;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.lastName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> last;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">_.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Person</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">, NameMixin);</span></span>
<span class="line"><span style="color:#24292E;">sam.</span><span style="color:#6F42C1;">rename</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Samwise&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Gamgee&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">sam.</span><span style="color:#6F42C1;">fullName</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// &quot;Samwise Gamgee&quot;</span></span></code></pre></div><p>上面代码通过<code>_.extend</code>方法，在<code>sam</code>对象上面（准确说是它的原型对象<code>Person.prototype</code>上面），混入了<code>NameMixin</code>类。</p><p><code>extend</code>方法的实现非常简单。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">destination</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> source) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (source.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(k)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      destination[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> source[k];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> destination;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(</span><span style="color:#E36209;">destination</span><span style="color:#24292E;">, </span><span style="color:#E36209;">source</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> source) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (source.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(k)) {</span></span>
<span class="line"><span style="color:#24292E;">      destination[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> source[k];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> destination;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上面代码将<code>source</code>对象的所有方法，添加到<code>destination</code>对象。</p><h2 id="trait" tabindex="-1">Trait <a class="header-anchor" href="#trait" aria-label="Permalink to &quot;Trait&quot;">​</a></h2><p>Trait 是另外一种多重继承的解决方案。它与 Mixin 很相似，但是有一些细微的差别。</p><ul><li>Mixin 可以包含状态（state），Trait 不包含，即 Trait 里面的方法都是互不相干，可以线性包含的。比如，<code>Trait1</code>包含方法<code>A</code>和<code>B</code>，<code>Trait2</code>继承了<code>Trait1</code>，同时还包含一个自己的方法<code>C</code>，实际上就等同于直接包含方法<code>A</code>、<code>B</code>、<code>C</code>。</li><li>对于同名方法的碰撞，Mixin 包含了解决规则，Trait 则是报错。</li></ul>`,24),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
