import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.84f90f1e.js";const p="/verce-blog/assets/pnpm.c2d29fa5.png",_=JSON.parse('{"title":"npm vs yarn vs pnpm","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/杂文/4.npm vs yarn vs pnpm.md","filePath":"MiscellaneousTalk/杂文/4.npm vs yarn vs pnpm.md"}'),e={name:"MiscellaneousTalk/杂文/4.npm vs yarn vs pnpm.md"},o=l(`<h1 id="npm-vs-yarn-vs-pnpm" tabindex="-1">npm vs yarn vs pnpm <a class="header-anchor" href="#npm-vs-yarn-vs-pnpm" aria-label="Permalink to &quot;npm vs yarn vs pnpm&quot;">​</a></h1><blockquote><p>npm/yarn install 原理</p></blockquote><ul><li>主要分为两个部分, 首先，执行 npm/yarn install 之后，包如何到达项目 node_modules 当中。其次，node_modules 内部如何管理依赖;执行命令后，首先会构建依赖树，然后针对每个节点下的包，会经历下面四个步骤:</li></ul><ol><li>将依赖包的版本区间解析为某个具体的版本号</li><li>下载对应版本依赖的 tar 包到本地离线镜像</li><li>将依赖从离线镜像解压到本地缓存</li><li>将依赖从缓存拷贝到当前目录的 node_modules 目录</li></ol><blockquote><p>依赖在 node_modules 内部目录结构</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//  npm1、npm2 中呈现出的是嵌套结构</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">node_modules</span></span>
<span class="line"><span style="color:#E1E4E8;">└─ foo</span></span>
<span class="line"><span style="color:#E1E4E8;">   ├─ index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">   ├─ package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">   └─ node_modules</span></span>
<span class="line"><span style="color:#E1E4E8;">      └─ bar</span></span>
<span class="line"><span style="color:#E1E4E8;">         ├─ index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">         └─ package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设计存在什么问题:</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 依赖层级太深，会导致文件路径过长的问题，尤其在 window 系统下。</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 大量重复的包被安装，文件体积超级大。比如跟 foo 同级目录下有一个baz，两者都依赖于同一个版本的lodash，那么 lodash 会分别在两者的 node_modules 中被安装，也就是重复安装。</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 模块实例不能共享。比如 React 有一些内部变量，在两个不同包引入的 React 不是同一个模块实例，因此无法共享内部变量，导致一些不可预知的 bug。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//  npm1、npm2 中呈现出的是嵌套结构</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">node_modules</span></span>
<span class="line"><span style="color:#24292E;">└─ foo</span></span>
<span class="line"><span style="color:#24292E;">   ├─ index.js</span></span>
<span class="line"><span style="color:#24292E;">   ├─ package.json</span></span>
<span class="line"><span style="color:#24292E;">   └─ node_modules</span></span>
<span class="line"><span style="color:#24292E;">      └─ bar</span></span>
<span class="line"><span style="color:#24292E;">         ├─ index.js</span></span>
<span class="line"><span style="color:#24292E;">         └─ package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设计存在什么问题:</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 依赖层级太深，会导致文件路径过长的问题，尤其在 window 系统下。</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 大量重复的包被安装，文件体积超级大。比如跟 foo 同级目录下有一个baz，两者都依赖于同一个版本的lodash，那么 lodash 会分别在两者的 node_modules 中被安装，也就是重复安装。</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 模块实例不能共享。比如 React 有一些内部变量，在两个不同包引入的 React 不是同一个模块实例，因此无法共享内部变量，导致一些不可预知的 bug。</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//  npm3 中呈现出的是嵌套结构</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">node_modules</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ foo</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  ├─ index.js</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  └─ package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">└─ bar</span></span>
<span class="line"><span style="color:#E1E4E8;">   ├─ index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">   └─ package.json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 依赖结构的不确定性(不确定性是指，foo和bar都依赖 base64的npm，但是版本不一致，谁先被提到node_modules下面的是不确定的)。</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 扁平化算法本身的复杂性很高，耗时较长。</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 项目中仍然可以非法访问没有声明过依赖的包</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//  npm3 中呈现出的是嵌套结构</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">node_modules</span></span>
<span class="line"><span style="color:#24292E;">├─ foo</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  ├─ index.js</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  └─ package.json</span></span>
<span class="line"><span style="color:#24292E;">└─ bar</span></span>
<span class="line"><span style="color:#24292E;">   ├─ index.js</span></span>
<span class="line"><span style="color:#24292E;">   └─ package.json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 依赖结构的不确定性(不确定性是指，foo和bar都依赖 base64的npm，但是版本不一致，谁先被提到node_modules下面的是不确定的)。</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 扁平化算法本身的复杂性很高，耗时较长。</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 项目中仍然可以非法访问没有声明过依赖的包</span></span></code></pre></div><ul><li>pnpm 结构 <ol><li>根目录下的 node_modules 下面不再是眼花缭乱的依赖，而是跟 package.json 声明的依赖基本保持一致。即使 pnpm 内部会有一些包会设置依赖提升，会被提升到根目录 node_modules 当中，但整体上，根目录的 node_modules 比以前还是清晰和规范了许多</li><li>外层的目录会映射到 pnpm 目录下的包里面</li></ol></li></ul><p><img src="`+p+'" alt="pnpm 结构"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><blockquote><p>npm（包管理鼻祖）</p></blockquote><ul><li>优点</li></ul><ol><li>官方支持：npm 是 Node.js 的官方包管理器，因此它得到了广泛的支持和使用。</li><li>自动依赖项解析：npm 可以自动解析项目中的依赖项，并安装所需的软件包。</li><li>版本控制：npm 使用 package-lock.json 文件来确保安装过程中使用相同的依赖项版本。</li></ol><ul><li>缺点</li></ul><ol><li>安装速度较慢：由于 npm 是单线程解析依赖项，因此安装速度可能相对较慢。</li><li>文件冲突：由于 npm 使用 package-lock.json 文件来锁定依赖项版本，</li></ol><blockquote><p>yarn（解决 npm 不能并发和锁版本问题）</p></blockquote><ul><li>优点</li></ul><ol><li>安装速度快：由于 yarn 可以并行下载和缓存软件包，因此安装速度通常比 npm 快。</li><li>版本控制：yarn 使用 yarn.lock 文件来确保安装过程中使用相同的依赖项版本。</li><li>离线模式：yarn 支持离线模式，可以在没有互联网连接的情况下工作。<a href="https://www.yarnpkg.cn/features/offline-cache" target="_blank" rel="noreferrer">https://www.yarnpkg.cn/features/offline-cache</a></li></ol><blockquote><p>缺点</p></blockquote><ol><li>依赖项缓存：yarn 将所有软件包都缓存在本地，这可能会占用大量磁盘空间。</li></ol><blockquote><p>pnpm（解决幽灵依赖问题）</p></blockquote><ul><li>优点</li></ul><ol><li>安装速度最快：由于 pnpm 可以共享依赖项，因此它可以更快地安装和更新模块。</li><li>多线程解析：与 yarn 类似，pnpm 也可以使用多线程解析依赖项。</li><li>离线模式：pnpm 支持离线模式，并且可以在没有互联网连接的情况下工作。</li><li>更好的内存管理：pnpm 使用更好的内存管理技术，可以更有效地利用系统资源。</li></ol><ul><li>缺点</li></ul><ol><li>相对较新：由于 pnpm 是较新的包管理器，因此可能会缺乏一些 npm 和 yarn 中的功能和资源。</li><li>可能存在兼容性问题：由于 pnpm 采用了不同的依赖项解析方法，因此可能会存在一些兼容性问题。</li></ol><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7232114747347484709" target="_blank" rel="noreferrer">https://juejin.cn/post/7232114747347484709</a></li><li><a href="https://juejin.cn/post/6932046455733485575" target="_blank" rel="noreferrer">https://juejin.cn/post/6932046455733485575</a></li></ul>',27),c=[o];function i(t,r,d,m,u,y){return n(),a("div",null,c)}const h=s(e,[["render",i]]);export{_ as __pageData,h as default};
