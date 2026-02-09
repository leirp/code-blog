<template><div><h1 id="守卫" tabindex="-1"><a class="header-anchor" href="#守卫" aria-hidden="true">#</a> 守卫</h1>
<p>守卫是一个使用 <code v-pre>@Injectable()</code> 装饰器的类。 守卫应该实现 <code v-pre>CanActivate</code> 接口。</p>
<p>守卫有一个单独的责任。它们根据运行时出现的某些条件（例如权限，角色，访问控制列表等）来确定给定的请求是否由路由处理程序处理。这通常称为授权。</p>
<p>中间件不知道调用 <code v-pre>next()</code> 函数后会执行哪个处理程序。另一方面，守卫可以访问 <code v-pre>ExecutionContext</code> 实例，因此确切地知道接下来要执行什么。它们的设计与异常过滤器、管道和拦截器非常相似，目的是让您在请求/响应周期的正确位置插入处理逻辑，并以声明的方式进行插入。这有助于保持代码的简洁和声明性。</p>
<p>:::tips 守卫在每个中间件之后执行，但在任何拦截器或管道之前执行。</p>
<h2 id="授权守卫" tabindex="-1"><a class="header-anchor" href="#授权守卫" aria-hidden="true">#</a> 授权守卫</h2>
<p>一个基本的守卫如下所示：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RolesGuard</span> <span class="token keyword">implements</span> <span class="token class-name">CanActivate</span> <span class="token punctuation">{</span>
  <span class="token function">canActivate</span><span class="token punctuation">(</span>
    context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2>
<p><code v-pre>canActivate()</code> 函数接收单个参数 <code v-pre>ExecutionContext</code> 实例。<code v-pre>ExecutionContext</code> 继承自 <code v-pre>ArgumentsHost</code> 。具体可查看应用上下文章节</p>
</div></template>
