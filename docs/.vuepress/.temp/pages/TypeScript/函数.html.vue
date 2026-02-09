<template><div><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>基本声明：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">"hello world"</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定返回值类型注释:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数定义</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>string <span class="token punctuation">{</span> <span class="token comment">// 返回一个字符串</span>
    <span class="token keyword">return</span> <span class="token string">"Hello World"</span> 
<span class="token punctuation">}</span> 

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">123</span>  <span class="token comment">// 如果返回的类型与指定的返回值类型不同，则会报错</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无返回值：使用 void</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数定义</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span> <span class="token comment">// void 代表函数没有返回值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">123</span>  <span class="token comment">// 如果指定了 void 但是有返回值，则会报错</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定参数类型注释</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token operator">+</span><span class="token string">"world"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传递对象类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printCoord</span><span class="token punctuation">(</span>pt<span class="token operator">:</span><span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"坐标的x轴是"</span><span class="token punctuation">,</span>pt<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"坐标的x轴是"</span><span class="token punctuation">,</span>pt<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选参数：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span>obj<span class="token operator">:</span><span class="token punctuation">{</span>firstName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>lastName<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span>
    <span class="token comment">// console.log(obj.lastName.toLocaleUpperCase()) // 必须得判断obj.lastName 是否存在才能调用字符串方法，不然会报错</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>lastName <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>lastName<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 或使用可选链（es6）</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>lastName<span class="token operator">?.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printName1</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>lastName<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lastName<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 或</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lastName<span class="token operator">?.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
