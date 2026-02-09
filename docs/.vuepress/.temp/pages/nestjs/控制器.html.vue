<template><div><h1 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h1>
<p>控制器负责处理传入的<strong>请求</strong>和向客户端返回<strong>响应</strong>。</p>
<p>控制器的目的是接收应用的特定请求。<strong>路由</strong>机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。</p>
<p>为了创建一个基本的控制器，我们使用类和<code v-pre>装饰器</code>。装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。</p>
<h2 id="创建控制器" tabindex="-1"><a class="header-anchor" href="#创建控制器" aria-hidden="true">#</a> 创建控制器</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// cats.controller.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/common'</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">'cats'</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CatsController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'This action returns all cats'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 命令行自动创建控制器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nest g controller cats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
