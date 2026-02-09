<template><div><h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1>
<h2 id="_1-路由的基本概念" tabindex="-1"><a class="header-anchor" href="#_1-路由的基本概念" aria-hidden="true">#</a> 1. 路由的基本概念</h2>
<h3 id="_1-1-路由的两种机制" tabindex="-1"><a class="header-anchor" href="#_1-1-路由的两种机制" aria-hidden="true">#</a> 1.1 路由的两种机制</h3>
<ul>
<li>路由：决定数据包从来源到目的地的路径</li>
<li>转送：将输入端的数据转移到合适的输出端</li>
</ul>
<h3 id="_1-2-路由表" tabindex="-1"><a class="header-anchor" href="#_1-2-路由表" aria-hidden="true">#</a> 1.2 路由表</h3>
<p>路由的本质是一个映射表，决定了数据包的走向</p>
<h3 id="_1-3-路由的发展阶段" tabindex="-1"><a class="header-anchor" href="#_1-3-路由的发展阶段" aria-hidden="true">#</a> 1.3  路由的发展阶段</h3>
<p>后端路由阶段：服务器直接渲染好对象的 html 页面返回个客户端进行展示。</p>
<p>前后端路由阶段：随着 Ajax 的出现，有了前后端分离的开发模式，后端只提供 API 来返回数据，前端通过 Ajax 获取数据，并通过 js 渲染。</p>
<p>单页面富应用阶段（SAP）：SAP 主要的特点是在前后端分离的基础上加了一层前端路由，由前端维护一套路由规则</p>
<h2 id="_2-使用-javascript-操作路由" tabindex="-1"><a class="header-anchor" href="#_2-使用-javascript-操作路由" aria-hidden="true">#</a> 2. 使用 JavaScript 操作路由</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"/aaa"</span> <span class="token comment">//会刷新页面</span>
location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">"/aaa"</span>  <span class="token comment">//不会刷新页面  </span>
history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"home"</span><span class="token punctuation">)</span>  <span class="token comment">//不会刷新页面，类似与栈结构压入</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//从类似栈中取出，类似于返回</span>
history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"home"</span><span class="token punctuation">)</span> <span class="token comment">//直接跳转，不能返回</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">//返回几步或前进几步</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-vue-中的路由" tabindex="-1"><a class="header-anchor" href="#_3-vue-中的路由" aria-hidden="true">#</a> 3. vue 中的路由</h2>
<h3 id="_3-1-vue-router-的概念" tabindex="-1"><a class="header-anchor" href="#_3-1-vue-router-的概念" aria-hidden="true">#</a> 3.1 vue-router 的概念</h3>
<p>vue-router 是 Vue.js 的官方路由插件，他和     Vue 是深度集成的，适合构建单页面复应用。</p>
<p>vue-router 是基于路由和组件的：</p>
<ul>
<li>路由用于设定访问的路径，将路径和组件映射起来</li>
<li>在 vue-router 的单页面应用中，页面的路径的盖面那就是组件的切换</li>
</ul>
<h3 id="_3-2-创建路由" tabindex="-1"><a class="header-anchor" href="#_3-2-创建路由" aria-hidden="true">#</a> 3.2 创建路由</h3>
<p>安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用：</p>
<ul>
<li>在 src 目录下创建 router 文件夹，在 router 文件夹下创建 index.js 文件</li>
<li>导入路由对象，并调用 Vue.use(VueRouter)</li>
<li>创建路由实例，并传入路由映射配置</li>
<li>在 Vue 实例中挂载创建的路由实例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在router.js 中创建路由</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span>createWebHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token comment">// 路由规则</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>

<span class="token punctuation">]</span>
<span class="token comment">// 创建 index 对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// history 用来选择不同的路由模式</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span><span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在 main.js 中挂载路由</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是 vue3（vue-router4）与 vue2（vue-router3）中，创建路由的方式不同，这篇笔记是按照vue3来记录的</p>
<h3 id="_3-3-路由模式" tabindex="-1"><a class="header-anchor" href="#_3-3-路由模式" aria-hidden="true">#</a> 3.3 路由模式</h3>
<p>Hash 模式：</p>
<p>在内部传递的实际 URL 之前使用了一个哈希字符（<code v-pre>#</code>）（类似于锚点）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。也不会返回404错误</p>
<p>hash模式背后的原理是<code v-pre>onhashchange</code>事件,可以在window对象上监听这个事件</p>
<p>history 模式：</p>
<p>利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器的历史记录栈，在当前已有的 back()、forward()、go() 方法的基础之上，这两个方法提供了对历史记录进行修改的功能。当这两个方法执行修改时，只能改变当前地址栏的 URL，但浏览器不会向后端发送请求，也不会触发popstate事件的执行。</p>
<p>在vue-router 中使用 history 来选择使用那种模式：</p>
<p>Hash 模式 ：createWebHashHistory</p>
<p>history 模式： createWebHistory</p>
<h2 id="_4-路由api" tabindex="-1"><a class="header-anchor" href="#_4-路由api" aria-hidden="true">#</a> 4. 路由API</h2>
</div></template>
