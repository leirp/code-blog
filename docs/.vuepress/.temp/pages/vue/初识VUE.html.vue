<template><div><h1 id="初识vue" tabindex="-1"><a class="header-anchor" href="#初识vue" aria-hidden="true">#</a> 初识VUE</h1>
<h2 id="命令式编程与声明式编程" tabindex="-1"><a class="header-anchor" href="#命令式编程与声明式编程" aria-hidden="true">#</a> 命令式编程与声明式编程</h2>
<h3 id="命令式编程" tabindex="-1"><a class="header-anchor" href="#命令式编程" aria-hidden="true">#</a> 命令式编程</h3>
<ul>
<li>创建div元素，设置id属性</li>
<li>定义一个变量叫message</li>
<li>将message变量放在div元素中显示</li>
<li>修改message数据</li>
<li>将修改的元素替换到div</li>
</ul>
<h3 id="创建一个div元素-设置id属性" tabindex="-1"><a class="header-anchor" href="#创建一个div元素-设置id属性" aria-hidden="true">#</a> 创建一个div元素，设置id属性</h3>
<ul>
<li>定义一个vue对象，将div挂载在vue对象上</li>
<li>在vue对象内定义变量message，并绑定数据</li>
<li>将message变量放在div元素上显示</li>
<li>修改vue对象中的变量message，div元素数据自动改变</li>
</ul>
<h2 id="创建-vue-实例" tabindex="-1"><a class="header-anchor" href="#创建-vue-实例" aria-hidden="true">#</a> 创建 VUE 实例</h2>
<p>在创建 VUE 实例的时候，传入一个对象 options，options中包含的选项有：</p>
<blockquote>
<p>el</p>
<blockquote>
<p>类型：string|HTMLELement;</p>
<p>作用：决定之后 Vue 实例会管理哪一个 DOM。</p>
</blockquote>
<p>data</p>
<blockquote>
<p>类型：Object|function(组件)</p>
<p>作用：Vue 实例对应的数据对象。</p>
</blockquote>
<p>methods</p>
<blockquote>
<p>类型：{[key:string]:function}</p>
<p>作用：VUE 实例的方法对象</p>
</blockquote>
<p>computed</p>
<blockquote>
<p>类型：{[key:string]:function}</p>
<p>作用：计算属性</p>
</blockquote>
<p>watch</p>
<blockquote>
<p>类型：{[key:string]:function}</p>
<p>作用：监听数据变化</p>
</blockquote>
<p>fitler</p>
</blockquote>
<h2 id="vue-的简单使用" tabindex="-1"><a class="header-anchor" href="#vue-的简单使用" aria-hidden="true">#</a> VUE 的简单使用</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>		<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>HelloVuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
		      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
		    <span class="token comment">//let变量/const常量</span>
		    <span class="token comment">//编程范式：声明式编程</span>
		    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		      <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span><span class="token punctuation">,</span><span class="token comment">//用于挂载要管理的元素</span>
		      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//定义数据</span>
		        <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"HelloVuejs"</span><span class="token punctuation">,</span>
		        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"zzz"</span>
		      <span class="token punctuation">}</span>
		    <span class="token punctuation">}</span><span class="token punctuation">)</span>
		  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个vue 实例不能同时接管两个容器，一个容器也不能同时接管两个实例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>		<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>HelloVuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
		      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  <span class="token comment">&lt;!--第二个不生效--></span>
		      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
		      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
		    
		    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		      <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">".app"</span><span class="token punctuation">,</span>
		      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
		        <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"HelloVuejs"</span><span class="token punctuation">,</span>
		        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"zzz"</span>
		      <span class="token punctuation">}</span>
		    <span class="token punctuation">}</span><span class="token punctuation">)</span>
		  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
