import{_ as t,o as d,c as e,Q as r}from"./chunks/framework.84f90f1e.js";const o="/verce-blog/assets/semver_api.cddca43d.jpg",_=JSON.parse('{"title":"semver","description":"","frontmatter":{},"headers":[],"relativePath":"Toolkit/每日工具库/7.semver.md","filePath":"Toolkit/每日工具库/7.semver.md"}'),c={name:"Toolkit/每日工具库/7.semver.md"},a=r('<h1 id="semver" tabindex="-1">semver <a class="header-anchor" href="#semver" aria-label="Permalink to &quot;semver&quot;">​</a></h1><h2 id="官方说明" tabindex="-1">官方说明 <a class="header-anchor" href="#官方说明" aria-label="Permalink to &quot;官方说明&quot;">​</a></h2><ul><li>semver 的原理是基于语义化版本规范（Semantic Versioning Specification）的定义，通过解析版本号字符串，将其转换为对象表示，并根据规范定义的版本号格式进行比较、验证和操作。它遵循语义化版本规范的约定，使得开发者能够方便地处理和管理软件的版本号，确保版本号的语义化和一致性。</li></ul><h2 id="所有-api" tabindex="-1">所有 API <a class="header-anchor" href="#所有-api" aria-label="Permalink to &quot;所有 API&quot;">​</a></h2><table><thead><tr><th>API</th><th>说明</th><th>示例</th><th>输出值</th></tr></thead><tbody><tr><td>parse</td><td>解析版本号字符串，转换为对象表示</td><td><code>semver.parse(&#39;1.2.3&#39;)</code></td><td><code>{ major: 1, minor: 2, patch: 3 }</code></td></tr><tr><td>valid</td><td>验证版本号是否符合语义化版本规范</td><td><code>semver.valid(&#39;1.2.3&#39;)</code></td><td><code>true</code></td></tr><tr><td>clean</td><td>清理版本号，去除不必要的字符或修正</td><td><code>semver.clean(&#39; =v1.2.3 &#39;)</code></td><td><code>&#39;1.2.3</code>&#39;</td></tr><tr><td>inc</td><td>增加指定版本号的主要/次要/修订版本</td><td><code>semver.inc(&#39;1.2.3&#39;, &#39;patch&#39;) </code></td><td><code>&#39;1.2.4&#39;</code></td></tr><tr><td>diff</td><td>计算两个版本号之间的差异</td><td><code>semver.diff(&#39;1.2.3&#39;, &#39;2.0.0&#39;)</code></td><td><code>{ major: 1, minor: 0, patch: 0 }</code></td></tr><tr><td>major</td><td>获取版本号中的主要版本号</td><td><code>semver.major(&#39;1.2.3&#39;)</code></td><td>1</td></tr><tr><td>minor</td><td>获取版本号中的次要版本号</td><td><code>semver.minor(&#39;1.2.3&#39;)</code></td><td>2</td></tr><tr><td>patch</td><td>获取版本号中的修订版本号</td><td><code>semver.patch(&#39;1.2.3&#39;)</code></td><td>3</td></tr><tr><td>prerelease</td><td>获取版本号中的预发布标识符</td><td><code>semver.prerelease(&#39;1.2.3-alpha.1&#39;)</code></td><td><code>[&#39;alpha&#39;, 1]</code></td></tr><tr><td>compare</td><td>比较两个版本号的大小关系</td><td><code>semver.compare(&#39;1.2.3&#39;, &#39;1.2.2&#39;)</code></td><td>1</td></tr><tr><td>rcompare</td><td>反向比较两个版本号的大小关系</td><td><code>semver.rcompare(&#39;1.2.3&#39;, &#39;1.2.2&#39;)</code></td><td><code>-1 </code></td></tr><tr><td>compareLoose</td><td>宽松比较两个版本号的大小关系</td><td><code>semver.compareLoose(&#39;1.2.3&#39;, &#39;v1.2.3&#39;)</code></td><td><code>0 </code></td></tr><tr><td>compareBuild</td><td>比较版本号的构建标识符</td><td><code>semver.compareBuild(&#39;1.2.3+build&#39;, &#39;1.2.3+other&#39;)</code></td><td><code>0</code></td></tr><tr><td>sort</td><td>对版本号数组进行排序</td><td><code>semver.sort([&#39;1.2.3&#39;, &#39;1.0.0&#39;, &#39;1.5.0&#39;])</code></td><td><code>[&#39;1.0.0&#39;, &#39;1.2.3&#39;, &#39;1.5.0&#39;]</code></td></tr><tr><td>rsort</td><td>对版本号数组进行反向排序</td><td><code>semver.rsort([&#39;1.2.3&#39;, &#39;1.0.0&#39;, &#39;1.5.0&#39;])</code></td><td><code>[&#39;1.5.0&#39;, &#39;1.2.3&#39;, &#39;1.0.0&#39;]</code></td></tr><tr><td>gt</td><td>判断第一个版本号是否大于第二个版本号</td><td><code>semver.gt(&#39;1.2.3&#39;, &#39;1.2.2&#39;)</code></td><td><code>true</code></td></tr><tr><td>lt</td><td>判断第一个版本号是否小于第二个版本号</td><td><code>semver.lt(&#39;1.2.3&#39;, &#39;1.2.4&#39;)</code></td><td><code>true</code></td></tr><tr><td>eq</td><td>判断两个版本号是否相等</td><td><code>semver.eq(&#39;1.2.3&#39;, &#39;1.2.3&#39;)</code></td><td><code>true</code></td></tr><tr><td>neq</td><td>判断两个版本号是否不相等</td><td><code>semver.neq(&#39;1.2.3&#39;, &#39;1.2.4&#39;)</code></td><td><code>true</code></td></tr><tr><td>gte</td><td>判断第一个版本号是否大于或等于第二个版本号</td><td><code>semver.gte(&#39;1.2.3&#39;, &#39;1.2.3&#39;)</code></td><td><code>true</code></td></tr><tr><td>lte</td><td>判断第一个版本号是否小于或等于第二个版本号</td><td><code>semver.lte(&#39;1.2.3&#39;, &#39;1.2.3&#39;)</code></td><td><code>true</code></td></tr><tr><td>cmp</td><td>比较两个版本号的大小关系，返回 -1/0/1</td><td><code>semver.cmp(&#39;1.2.3&#39;, &#39;1.2.4&#39;)</code></td><td><code>-1</code></td></tr><tr><td>coerce</td><td>将非标准版本号转换为标准版本号</td><td><code>semver.coerce(&#39;v2&#39;)</code></td><td><code>&#39;2.0.0&#39;</code></td></tr><tr><td>Comparator</td><td>用于比较版本号的比较器对象</td><td><code>new semver.Comparator(&#39;&gt;=1.2.3&#39;)</code></td><td><code>Comparator 对象 </code></td></tr><tr><td>Range</td><td>用于表示和操作版本范围的对象</td><td><code>new semver.Range(&#39;^1.2.3&#39;)</code></td><td><code>Range 对象</code></td></tr><tr><td>satisfies</td><td>判断指定版本号是否满足指定的版本范围</td><td><code>semver.satisfies(&#39;1.2.3&#39;, &#39;^1.2.0&#39;)</code></td><td><code>true</code></td></tr><tr><td>maxSatisfying</td><td>找到满足指定版本范围的最高版本号</td><td><code>semver.maxSatisfying([&#39;1.2.3&#39;, &#39;2.0.0&#39;, &#39;1.5.0&#39;], &#39;^1.0.0&#39;)</code></td><td><code>&#39;1.5.0&#39;</code></td></tr><tr><td>minSatisfying</td><td>找到满足指定版本范围的最低版本号</td><td><code>semver.minSatisfying([&#39;1.2.3&#39;, &#39;2.0.0&#39;, &#39;1.5.0&#39;], &#39;^1.0.0&#39;)</code></td><td><code>&#39;1.2.3&#39;</code></td></tr><tr><td>minVersion</td><td>找到给定版本号列表中的最低版本号</td><td><code>semver.minVersion([&#39;1.2.3&#39;, &#39;2.0.0&#39;, &#39;1.5.0&#39;])</code></td><td><code>&#39;1.2.3&#39;</code></td></tr><tr><td>validRange</td><td>验证版本范围是否符合语义化版本规范</td><td><code>semver.validRange(&#39;^1.2.3&#39;)</code></td><td><code>true</code></td></tr><tr><td>outside</td><td>判断指定版本号是否在指定的版本范围之外</td><td><code>semver.outside(&#39;1.2.3&#39;, &#39;^1.0.0&#39;, &#39;&lt;2.0.0&#39;)</code></td><td><code>true</code></td></tr><tr><td>gtr</td><td>判断指定版本号是否大于指定的版本范围</td><td><code>semver.gtr(&#39;1.2.3&#39;, &#39;^1.0.0&#39;)</code></td><td><code>true</code></td></tr><tr><td>ltr</td><td>判断指定版本号是否小于指定的版本范围</td><td><code>semver.ltr(&#39;1.2.3&#39;, &#39;^2.0.0&#39;)</code></td><td><code>false</code></td></tr><tr><td>intersects</td><td>判断两个版本范围是否有交集</td><td><code>semver.intersects(&#39;^1.2.3&#39;, &#39;~1.2.4&#39;)</code></td><td><code>true</code></td></tr></tbody></table><h2 id="图片展示" tabindex="-1">图片展示 <a class="header-anchor" href="#图片展示" aria-label="Permalink to &quot;图片展示&quot;">​</a></h2><ul><li><img src="'+o+'" alt="semver_api"></li></ul>',7),s=[a];function m(i,n,l,v,h,p){return d(),e("div",null,s)}const f=t(c,[["render",m]]);export{_ as __pageData,f as default};
