import{_ as a,o as s,c as e,Q as t}from"./chunks/framework.84f90f1e.js";const u=JSON.parse('{"title":"原子化 CSS","description":"","frontmatter":{},"headers":[],"relativePath":"TechnologyExploration/前端技术探索/8.原子化CSS.md","filePath":"TechnologyExploration/前端技术探索/8.原子化CSS.md"}'),o={name:"TechnologyExploration/前端技术探索/8.原子化CSS.md"},i=t('<h1 id="原子化-css" tabindex="-1">原子化 CSS <a class="header-anchor" href="#原子化-css" aria-label="Permalink to &quot;原子化 CSS&quot;">​</a></h1><h2 id="原子化-css-是什么" tabindex="-1">原子化 CSS 是什么？ <a class="header-anchor" href="#原子化-css-是什么" aria-label="Permalink to &quot;原子化 CSS 是什么？&quot;">​</a></h2><ul><li>原子化 CSS 是一种将样式属性拆分为最小的、不可再分的单元，并通过组合这些单元来构建样式的方法。它将样式属性（如宽度、颜色、边距等）拆分为独立的类名，然后通过将这些类名组合应用到元素上来实现样式的定义。</li></ul><h2 id="原子化-css-解决了什么问题" tabindex="-1">原子化 CSS 解决了什么问题？ <a class="header-anchor" href="#原子化-css-解决了什么问题" aria-label="Permalink to &quot;原子化 CSS 解决了什么问题？&quot;">​</a></h2><p>原子化 CSS 主要解决了以下几个问题：</p><blockquote><p>样式复用：通过将样式属性拆分为原子级别的类名，可以更灵活地组合和复用样式<br> 样式大小：原子化 CSS 可以减小样式表的大小，因为它只包含了最小的样式单元，避免了重复定义<br> 样式覆盖：由于原子化 CSS 的类名是原子级别的，因此可以更精确地控制样式的覆盖和组合</p></blockquote><h2 id="原子化-css-如何生成" tabindex="-1">原子化 CSS 如何生成？ <a class="header-anchor" href="#原子化-css-如何生成" aria-label="Permalink to &quot;原子化 CSS 如何生成？&quot;">​</a></h2><p>原子化 CSS 可以通过以下几种方式生成：</p><ul><li>手动编写：可以手动编写原子化的 CSS 类名，将样式属性拆分为最小的单元，并定义对应的类名。</li><li>使用工具：也可以使用原子化 CSS 工具（如 Tachyons、Tailwind CSS 等）来生成原子化的 CSS 类名，这些工具提供了预定义的原子级别类名，可以直接应用于元素上。</li></ul><blockquote><p>tailwindcss：基于 postcss 插件系统开发，自动收集用户编写的原子化 css，并生成 style 样式。可通过配置和自定义插件实现定制化样式，基于 rust 实现样式解析算法提高编译速度。tailwind 是目前市场上生态最健全、最稳定的原子化 css 库之一 <br> windicss：设计初衷是作为 tailwindcss 替代品，并提供了很多亮眼特性，比如「自动值推导」、「属性化模式」、「无用样式剔除」等，<br> unocss：由原 windicss 团队成员创建，在技术设计上与 tailwind 完全不同，不再依赖 postcss，构建速度相比于 tailwindcss 有较大提升；windicss 有的它基本也都有，同时还增加了比如 Web fonts、CDN Runtime 等新特性，</p></blockquote><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">https://tailwindcss.com/</a></li><li><a href="https://windicss.org/" target="_blank" rel="noreferrer">https://windicss.org/</a></li><li><a href="https://unocss.dev/" target="_blank" rel="noreferrer">https://unocss.dev/</a></li></ul>',12),r=[i];function l(c,n,S,h,d,_){return s(),e("div",null,r)}const C=a(o,[["render",l]]);export{u as __pageData,C as default};
