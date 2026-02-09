<template><div><h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。</p>
<h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>
<p>网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应。</p>
<p>小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。</p>
<p>JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的。</p>
<h2 id="小程序目录结构" tabindex="-1"><a class="header-anchor" href="#小程序目录结构" aria-hidden="true">#</a> 小程序目录结构</h2>
<blockquote>
<p><code v-pre>page</code> 小程序页面存放目录</p>
<blockquote>
<p><code v-pre>wxss</code>：当前页面样式表</p>
<p><code v-pre>js</code>：当前页面逻辑</p>
<p><code v-pre>json</code> ：当前页面配置文件</p>
<p><code v-pre>wxml</code> ：当前页面结构</p>
</blockquote>
<p><code v-pre>app.js</code>: 小程序入口文件</p>
<p><code v-pre>app.json</code>: 小程序公共配置</p>
<p><code v-pre>app.wxss</code>: 小程序公共样式表</p>
<p><code v-pre>project.config.json</code>:项目全局配置文件</p>
<p><code v-pre>project.private.config.js</code>: 项目私有配置文件。</p>
<p><code v-pre>sitemap.js</code>：小程序内搜索配置</p>
</blockquote>
</div></template>
