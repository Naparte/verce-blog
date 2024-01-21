import{_ as s,o as n,c as l,Q as a}from"./chunks/framework.84f90f1e.js";const F=JSON.parse('{"title":"Markdown is broken","description":"","frontmatter":{},"headers":[],"relativePath":"thirdpartys/es6tutorial/app/bower_components/marked/doc/broken.md","filePath":"thirdpartys/es6tutorial/app/bower_components/marked/doc/broken.md"}'),p={name:"thirdpartys/es6tutorial/app/bower_components/marked/doc/broken.md"},o=a(`<h1 id="markdown-is-broken" tabindex="-1">Markdown is broken <a class="header-anchor" href="#markdown-is-broken" aria-label="Permalink to &quot;Markdown is broken&quot;">​</a></h1><p>I have a lot of scraps of markdown engine oddities that I&#39;ve collected over the years. What you see below is slightly messy, but it&#39;s what I&#39;ve managed to cobble together to illustrate the differences between markdown engines, and why, if there ever is a markdown specification, it has to be absolutely thorough. There are a lot more of these little differences I have documented elsewhere. I know I will find them lingering on my disk one day, but until then, I&#39;ll continue to add whatever strange nonsensical things I find.</p><p>Some of these examples may only mention a particular engine compared to marked. However, the examples with markdown.pl could easily be swapped out for discount, upskirt, or markdown.js, and you would very easily see even more inconsistencies.</p><p>A lot of this was written when I was very unsatisfied with the inconsistencies between markdown engines. Please excuse the frustration noticeable in my writing.</p><h2 id="examples-of-markdown-s-stupid-list-parsing" tabindex="-1">Examples of markdown&#39;s &quot;stupid&quot; list parsing <a class="header-anchor" href="#examples-of-markdown-s-stupid-list-parsing" aria-label="Permalink to &quot;Examples of markdown&#39;s &quot;stupid&quot; list parsing&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ markdown.pl</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  * item1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    * item2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  text</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;&lt;p&gt;text&lt;/p&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;&lt;/p&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ markdown.pl</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * item1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    * item2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  text</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;&lt;p&gt;text&lt;/p&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;&lt;/p&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ marked</span></span>
<span class="line"><span style="color:#e1e4e8;">  * item1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    * item2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  text</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;text&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ marked</span></span>
<span class="line"><span style="color:#24292e;">  * item1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    * item2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  text</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;text&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p>Which looks correct to you?</p><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ markdown.pl</span></span>
<span class="line"><span style="color:#e1e4e8;">* hello</span></span>
<span class="line"><span style="color:#e1e4e8;">  &gt; world</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;p&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/blockquote&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ markdown.pl</span></span>
<span class="line"><span style="color:#24292e;">* hello</span></span>
<span class="line"><span style="color:#24292e;">  &gt; world</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;p&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/blockquote&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ marked</span></span>
<span class="line"><span style="color:#e1e4e8;">* hello</span></span>
<span class="line"><span style="color:#e1e4e8;">  &gt; world</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hello&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;world&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/blockquote&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ marked</span></span>
<span class="line"><span style="color:#24292e;">* hello</span></span>
<span class="line"><span style="color:#24292e;">  &gt; world</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hello&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;world&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/blockquote&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p>Again, which looks correct to you?</p><hr><p>EXAMPLE:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ markdown.pl</span></span>
<span class="line"><span style="color:#e1e4e8;">* hello</span></span>
<span class="line"><span style="color:#e1e4e8;">  * world</span></span>
<span class="line"><span style="color:#e1e4e8;">    * hi</span></span>
<span class="line"><span style="color:#e1e4e8;">          code</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hello</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hi</span></span>
<span class="line"><span style="color:#e1e4e8;">  code&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ markdown.pl</span></span>
<span class="line"><span style="color:#24292e;">* hello</span></span>
<span class="line"><span style="color:#24292e;">  * world</span></span>
<span class="line"><span style="color:#24292e;">    * hi</span></span>
<span class="line"><span style="color:#24292e;">          code</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hello</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hi</span></span>
<span class="line"><span style="color:#24292e;">  code&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p>The code isn&#39;t a code block even though it&#39;s after the bullet margin. I know, lets give it two more spaces, effectively making it 8 spaces past the bullet.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ markdown.pl</span></span>
<span class="line"><span style="color:#e1e4e8;">* hello</span></span>
<span class="line"><span style="color:#e1e4e8;">  * world</span></span>
<span class="line"><span style="color:#e1e4e8;">    * hi</span></span>
<span class="line"><span style="color:#e1e4e8;">            code</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hello</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hi</span></span>
<span class="line"><span style="color:#e1e4e8;">    code&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ markdown.pl</span></span>
<span class="line"><span style="color:#24292e;">* hello</span></span>
<span class="line"><span style="color:#24292e;">  * world</span></span>
<span class="line"><span style="color:#24292e;">    * hi</span></span>
<span class="line"><span style="color:#24292e;">            code</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hello</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hi</span></span>
<span class="line"><span style="color:#24292e;">    code&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p>And, it&#39;s still not a code block. Did you also notice that the 3rd item isn&#39;t even its own list? Markdown screws that up too because of its indentation unaware parsing.</p><hr><p>Let&#39;s look at some more examples of markdown&#39;s list parsing:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ markdown.pl</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  * item1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    * item2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  text</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;&lt;p&gt;text&lt;/p&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;&lt;/p&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ markdown.pl</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * item1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    * item2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  text</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;&lt;p&gt;text&lt;/p&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;&lt;/p&gt;</span></span></code></pre></div><p>Misnested tags.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ marked</span></span>
<span class="line"><span style="color:#e1e4e8;">  * item1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    * item2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  text</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;text&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ marked</span></span>
<span class="line"><span style="color:#24292e;">  * item1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    * item2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  text</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;&lt;p&gt;item1&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;item2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;text&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p>Which looks correct to you?</p><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ markdown.pl</span></span>
<span class="line"><span style="color:#e1e4e8;">* hello</span></span>
<span class="line"><span style="color:#e1e4e8;">  &gt; world</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;p&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/blockquote&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ markdown.pl</span></span>
<span class="line"><span style="color:#24292e;">* hello</span></span>
<span class="line"><span style="color:#24292e;">  &gt; world</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;p&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/blockquote&gt;</span></span></code></pre></div><p>More misnested tags.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ marked</span></span>
<span class="line"><span style="color:#e1e4e8;">* hello</span></span>
<span class="line"><span style="color:#e1e4e8;">  &gt; world</span></span>
<span class="line"><span style="color:#e1e4e8;">^D</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;li&gt;hello&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;world&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/blockquote&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ marked</span></span>
<span class="line"><span style="color:#24292e;">* hello</span></span>
<span class="line"><span style="color:#24292e;">  &gt; world</span></span>
<span class="line"><span style="color:#24292e;">^D</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;li&gt;hello&lt;blockquote&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;world&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/blockquote&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p>Again, which looks correct to you?</p><hr><h1 id="why-quality-matters-part-2" tabindex="-1">Why quality matters - Part 2 <a class="header-anchor" href="#why-quality-matters-part-2" aria-label="Permalink to &quot;Why quality matters - Part 2&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown.pl</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">world</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p&gt;&lt;ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">blockquote</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">p&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul&gt;&lt;/p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/blockquote</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown.pl</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">world</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p&gt;&lt;ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">blockquote</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">p&gt;world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul&gt;&lt;/p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/blockquote</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sundown</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># upskirt</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">world</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span></span>
<span class="line"><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sundown</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># upskirt</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">world</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span></span>
<span class="line"><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">world&lt;/li&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">marked</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">world</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul&gt;&lt;li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">blockquote&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">world</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p&gt;&lt;/blockquote&gt;&lt;/li&gt;&lt;/ul</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">marked</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">world</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul&gt;&lt;li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">blockquote&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">world</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p&gt;&lt;/blockquote&gt;&lt;/li&gt;&lt;/ul</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Which looks correct to you?</p><hr><p>See: <a href="https://github.com/evilstreak/markdown-js/issues/23" target="_blank" rel="noreferrer">https://github.com/evilstreak/markdown-js/issues/23</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown.pl</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># upskirt/markdown.js/discount</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> world</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span></span>
<span class="line"><span style="color:#B392F0;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">world</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown.pl</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># upskirt/markdown.js/discount</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">var</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> world</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span></span>
<span class="line"><span style="color:#6F42C1;">var</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">world</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">marked</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> world</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul&gt;&lt;li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">pre</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">code</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">var a = 1;</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/code&gt;&lt;/pre&gt;&lt;/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">world</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li&gt;&lt;/ul</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">marked</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">var</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> world</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul&gt;&lt;li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">pre</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">code</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">var a = 1;</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/code&gt;&lt;/pre&gt;&lt;/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">world</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li&gt;&lt;/ul</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Which looks more reasonable? Why shouldn&#39;t code blocks be able to appear in list items in a sane way?</p><hr><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown.js</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">span</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/span</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p</span><span style="color:#F97583;">&gt;&amp;</span><span style="color:#B392F0;">lt</span><span style="color:#E1E4E8;">;</span><span style="color:#B392F0;">div</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">;</span><span style="color:#B392F0;">hello</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">lt</span><span style="color:#E1E4E8;">;</span><span style="color:#B392F0;">/div</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">;</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p</span><span style="color:#F97583;">&gt;&amp;</span><span style="color:#B392F0;">lt</span><span style="color:#E1E4E8;">;</span><span style="color:#B392F0;">span</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">;</span><span style="color:#B392F0;">hello</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">lt</span><span style="color:#E1E4E8;">;</span><span style="color:#B392F0;">/span</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">;</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown.js</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">span</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/span</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p</span><span style="color:#D73A49;">&gt;&amp;</span><span style="color:#6F42C1;">lt</span><span style="color:#24292E;">;</span><span style="color:#6F42C1;">div</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">;</span><span style="color:#6F42C1;">hello</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">lt</span><span style="color:#24292E;">;</span><span style="color:#6F42C1;">/div</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">;</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p</span><span style="color:#D73A49;">&gt;&amp;</span><span style="color:#6F42C1;">lt</span><span style="color:#24292E;">;</span><span style="color:#6F42C1;">span</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">;</span><span style="color:#6F42C1;">hello</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">lt</span><span style="color:#24292E;">;</span><span style="color:#6F42C1;">/span</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">;</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">marked</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">span</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/span</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p&gt;&lt;span</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/span</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">marked</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">span</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/span</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p&gt;&lt;span</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/span</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><hr><p>See: <a href="https://github.com/evilstreak/markdown-js/issues/27" target="_blank" rel="noreferrer">https://github.com/evilstreak/markdown-js/issues/27</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown.js</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">[an image](/image)](</span><span style="color:#B392F0;">/link</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p&gt;&lt;a href=</span><span style="color:#9ECBFF;">&quot;/image)](/link&quot;</span><span style="color:#F97583;">&gt;!</span><span style="color:#E1E4E8;">[an image</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/a</span><span style="color:#F97583;">&gt;&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown.js</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">[an image](/image)](</span><span style="color:#6F42C1;">/link</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p&gt;&lt;a href=</span><span style="color:#032F62;">&quot;/image)](/link&quot;</span><span style="color:#D73A49;">&gt;!</span><span style="color:#24292E;">[an image</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/a</span><span style="color:#D73A49;">&gt;&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">marked</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">[an image](/image)](</span><span style="color:#B392F0;">/link</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p&gt;&lt;a href=</span><span style="color:#9ECBFF;">&quot;/link&quot;</span><span style="color:#E1E4E8;">&gt;&lt;img src=</span><span style="color:#9ECBFF;">&quot;/image&quot;</span><span style="color:#E1E4E8;"> alt=</span><span style="color:#9ECBFF;">&quot;an image&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/a</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">marked</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">[an image](/image)](</span><span style="color:#6F42C1;">/link</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p&gt;&lt;a href=</span><span style="color:#032F62;">&quot;/link&quot;</span><span style="color:#24292E;">&gt;&lt;img src=</span><span style="color:#032F62;">&quot;/image&quot;</span><span style="color:#24292E;"> alt=</span><span style="color:#032F62;">&quot;an image&quot;</span><span style="color:#24292E;">&gt;&lt;/a</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><hr><p>See: <a href="https://github.com/evilstreak/markdown-js/issues/24" target="_blank" rel="noreferrer">https://github.com/evilstreak/markdown-js/issues/24</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown.js</span></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> c</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">blockquote&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">bundefined&amp;</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">c&lt;/p&gt;&lt;/blockquote&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown.js</span></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> c</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">blockquote&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">bundefined&amp;</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">c&lt;/p&gt;&lt;/blockquote&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">marked</span></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> c</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">blockquote&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p&gt;&lt;/blockquote</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">blockquote&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p&gt;&lt;/blockquote</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">blockquote&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">c</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p&gt;&lt;/blockquote</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">marked</span></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> c</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">blockquote&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p&gt;&lt;/blockquote</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">blockquote&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p&gt;&lt;/blockquote</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">blockquote&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">c</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p&gt;&lt;/blockquote</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><hr><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown.pl</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">world</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">how</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">are</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">you</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">today</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hi</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">world</span></span>
<span class="line"><span style="color:#B392F0;">how&lt;/li&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">are</span></span>
<span class="line"><span style="color:#B392F0;">you&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">today</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul&gt;&lt;/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hi</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown.pl</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">world</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">how</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">are</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">you</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">today</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hi</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">world</span></span>
<span class="line"><span style="color:#6F42C1;">how&lt;/li&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">are</span></span>
<span class="line"><span style="color:#6F42C1;">you&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">today</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul&gt;&lt;/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hi</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">marked</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hello</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">world</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">how</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">are</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">you</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">today</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hi</span></span>
<span class="line"><span style="color:#B392F0;">^D</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hello</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">world</span></span>
<span class="line"><span style="color:#B392F0;">how&lt;/p&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">are</span></span>
<span class="line"><span style="color:#B392F0;">you&lt;/p&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li&gt;&lt;p</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">today</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">li</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">hi</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/li</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">/ul</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">marked</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hello</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">world</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">how</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">are</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">you</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">today</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hi</span></span>
<span class="line"><span style="color:#6F42C1;">^D</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hello</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">world</span></span>
<span class="line"><span style="color:#6F42C1;">how&lt;/p&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">are</span></span>
<span class="line"><span style="color:#6F42C1;">you&lt;/p&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li&gt;&lt;p</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">today</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">li</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">hi</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/li</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">/ul</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>`,54),e=[o];function t(c,r,y,i,E,g){return n(),l("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
