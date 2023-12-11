import{_ as t,o as c,c as d,Q as o}from"./chunks/framework.ef8e9df1.js";const j=JSON.parse('{"title":"micromatch","description":"","frontmatter":{},"headers":[],"relativePath":"home/每日工具库/15.micromatch.md","filePath":"home/每日工具库/15.micromatch.md","lastUpdated":1702300734000}'),e={name:"home/每日工具库/15.micromatch.md"},a=o(`<h1 id="micromatch" tabindex="-1">micromatch <a class="header-anchor" href="#micromatch" aria-label="Permalink to &quot;micromatch&quot;">​</a></h1><h2 id="什么是micromatch" tabindex="-1">什么是micromatch？ <a class="header-anchor" href="#什么是micromatch" aria-label="Permalink to &quot;什么是micromatch？&quot;">​</a></h2><p>micromatch 是一个用于匹配文件路径的 npm 包，它提供了强大的通配符匹配功能，可以用于在 JavaScript 或 Node.js 环境中进行文件路径匹配。</p><blockquote><p>作用</p></blockquote><ul><li>文件路径匹配：micromatch 可以根据指定的通配符模式，对文件路径进行匹配，用于筛选出符合条件的文件路径。</li><li>支持多种通配符：它支持多种通配符，包括 *（匹配任意数量的字符）、?（匹配单个字符）、[...]（匹配字符集合）等，使得匹配更加灵活和精确。</li><li>可用于构建构建工具和任务：micromatch 可以被用于构建各种构建工具、任务和文件操作相关的功能，例如文件查找、文件筛选、路径转换等。</li></ul><blockquote><p>原理</p></blockquote><ul><li>基于正则表达式：micromatch 的匹配原理基于正则表达式，它会将通配符模式转换为对应的正则表达式，然后使用这些正则表达式来匹配文件路径。</li><li>路径分割和匹配：在匹配过程中，micromatch 会将文件路径分割成各个部分（目录、文件名等），然后根据通配符模式对这些部分进行匹配。</li><li>支持多种选项：micromatch 提供了丰富的选项和配置，可以控制匹配的行为，例如是否区分大小写、是否匹配隐藏文件、是否启用扩展名匹配等。</li></ul><p>总的来说，micromatch 通过将通配符模式转换为正则表达式，并对文件路径进行分割和匹配，实现了强大的文件路径匹配功能。它在构建工具、任务和文件操作相关的场景中有着广泛的应用。</p><h2 id="案例-api说明" tabindex="-1">案例 &amp;&amp; api说明 <a class="header-anchor" href="#案例-api说明" aria-label="Permalink to &quot;案例 &amp;&amp; api说明&quot;">​</a></h2><table><thead><tr><th>API</th><th>API说明</th><th>Demo和输出</th></tr></thead><tbody><tr><td><code>match</code></td><td>对给定的字符串数组进行匹配，返回匹配成功的字符串数组。</td><td><code> micromatch.match([&#39;foo.js&#39;, &#39;bar.js&#39;], &#39;*.js&#39;); // [&#39;foo.js&#39;, &#39;bar.js&#39;]</code></td></tr><tr><td><code>matcher</code></td><td>返回一个函数，用于对字符串进行匹配。</td><td><code> const isMatch = micromatch.matcher(&#39;*.js&#39;); isMatch(&#39;foo.js&#39;); // true</code></td></tr><tr><td><code>isMatch</code></td><td>用于检查指定的字符串是否与给定的通配符模式匹配。</td><td><code> micromatch.isMatch(&#39;foo.js&#39;, &#39;*.js&#39;); // true</code></td></tr><tr><td><code>any</code></td><td>检查指定的字符串是否与给定的任何一个通配符模式匹配。</td><td><code> micromatch.any(&#39;foo.js&#39;, [&#39;*.js&#39;, &#39;*.json&#39;]); // true</code></td></tr><tr><td><code>not</code></td><td>返回一个函数，用于对字符串进行排除匹配。</td><td><code> const notJs = micromatch.not(&#39;*.js&#39;); notJs(&#39;foo.js&#39;); // false</code></td></tr><tr><td><code>contains</code></td><td>检查指定的字符串是否包含任何通配符模式匹配的部分。</td><td><code> micromatch.contains(&#39;aa-bb-cc&#39;, &#39;*-bb-*&#39;); // true</code></td></tr><tr><td><code>matchKeys</code></td><td>返回一个函数，用于对对象的键进行匹配。</td><td><code> const isMatch = micromatch.matchKeys({ &#39;a.js&#39;: &#39;a&#39;, &#39;b.js&#39;: &#39;b&#39; }, &#39;*.js&#39;); // { &#39;a.js&#39;: &#39;a&#39;, &#39;b.js&#39;: &#39;b&#39; }</code></td></tr><tr><td><code>some</code></td><td>检查指定的字符串是否与给定的任何一个通配符模式匹配。</td><td><code> micromatch.some(&#39;foo.js&#39;, [&#39;*.js&#39;, &#39;*.json&#39;]); // true</code></td></tr><tr><td><code>every</code></td><td>检查指定的字符串是否与给定的所有通配符模式匹配。</td><td><code> micromatch.every(&#39;foo.js&#39;, [&#39;*.js&#39;, &#39;*.json&#39;]); // false</code></td></tr><tr><td><code>all</code></td><td>检查指定的字符串是否与给定的所有通配符模式匹配。</td><td><code> micromatch.all(&#39;foo.js&#39;, [&#39;*.js&#39;, &#39;*.json&#39;]); // false</code></td></tr><tr><td><code>capture</code></td><td>用于提取字符串中与通配符模式匹配的部分。</td><td><code> micromatch.capture(&#39;test.js&#39;, &#39;t[a-z]*.js&#39;); // [&#39;test.js&#39;, &#39;test&#39;]</code></td></tr><tr><td><code>makeRe</code></td><td>用于将通配符模式转换为对应的正则表达式。</td><td><code> micromatch.makeRe(&#39;*.js&#39;); // /^.*\\.js$/</code></td></tr><tr><td><code>scan</code></td><td>用于在字符串中扫描匹配的部分。</td><td><code> micromatch.scan(&#39;a-b-c&#39;, &#39;*-b-*&#39;); // [&#39;a-b-c&#39;, &#39;a&#39;, &#39;c&#39;]</code></td></tr><tr><td><code>parse</code></td><td>用于解析通配符模式，返回一个对象表示该模式的结构。</td><td><code> micromatch.parse(&#39;*.js&#39;); // { isBrace: false, isExtglob: false, ... }</code></td></tr><tr><td><code>braces</code></td><td>用于展开大括号表达式。</td><td><code> micromatch.braces(&#39;a/{b,c}/d&#39;, { expand: true }); // [&#39;a/b/d&#39;, &#39;a/c/d&#39;]</code></td></tr><tr><td><code>braceExpand</code></td><td>用于展开大括号表达式。</td><td><code> micromatch.braceExpand(&#39;a/{b,c}/d&#39;); // [&#39;a/b/d&#39;, &#39;a/c/d&#39;]</code></td></tr></tbody></table><pre><code>            |
</code></pre>`,11),r=[a];function m(s,i,h,l,n,p){return c(),d("div",null,r)}const _=t(e,[["render",m]]);export{j as __pageData,_ as default};
