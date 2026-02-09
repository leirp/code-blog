<template><div><h1 id="循环与遍历" tabindex="-1"><a class="header-anchor" href="#循环与遍历" aria-hidden="true">#</a> 循环与遍历</h1>
<h2 id="遍历方法" tabindex="-1"><a class="header-anchor" href="#遍历方法" aria-hidden="true">#</a> 遍历方法</h2>
<h3 id="some-方法-es5" tabindex="-1"><a class="header-anchor" href="#some-方法-es5" aria-hidden="true">#</a> <code v-pre>some()</code> 方法(ES5)</h3>
<p><code v-pre>some()</code> 方法会对数组中的每一项进行遍历，只要有一个元素符合条件，就会返回true，且剩余的元素不会再进行检测，否则就会返回 false</p>
<p><code v-pre>some()</code> 为数组中的每一个元素执行一次 <code v-pre>callback</code> 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，<code v-pre>some()</code> 将会立即返回 <code v-pre>true</code>。否则，<code v-pre>some()</code> 返回 <code v-pre>false</code>。<code v-pre>callback</code> 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。</p>
<blockquote>
<p>语法： <code v-pre>array.some((element,index,array,self) =&gt; /*...*/)</code></p>
<p>参数：</p>
<blockquote>
<p>element 必填，数组中正在处理的元素。</p>
<p>index 可选，数组中正在处理的元素的索引值。</p>
<p>array 可选，被调用的数组。</p>
<p>self 可选，执行 <code v-pre>callback</code> 时使用的 <code v-pre>this</code> 值。</p>
</blockquote>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
a<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token operator">=></span>x<span class="token operator">></span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
a<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token operator">=></span>x<span class="token operator">></span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="every-方法" tabindex="-1"><a class="header-anchor" href="#every-方法" aria-hidden="true">#</a> <code v-pre>every</code> 方法</h3>
<p><strong><code v-pre>every()</code></strong> 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。</p>
<p><code v-pre>every()</code> 方法会对数组中的每一项进行遍历，只要有一个元素不符合条件，就会返回false，且剩余的元素不会再进行检测，否则就会返回 true</p>
<p><code v-pre>every()</code> 方法与<code v-pre>some</code>正好相反</p>
<h3 id="filter-方法" tabindex="-1"><a class="header-anchor" href="#filter-方法" aria-hidden="true">#</a> <code v-pre> filter()</code>  方法</h3>
<p><code v-pre>filter()</code>用于对数组进行过滤。当每次遍历数组，返回的结果为 true 时，加入新的数组。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [6, 7, 8, 9, 10]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-方法" tabindex="-1"><a class="header-anchor" href="#map-方法" aria-hidden="true">#</a> <code v-pre>map()</code>方法</h3>
<p><code v-pre>map()</code> 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。</p>
<p><code v-pre>map()</code> 方法按照原始数组元素顺序依次处理元素</p>
<blockquote>
<p>语法：<code v-pre>array.map(function(currentValue,index,arr), thisValue)</code></p>
<p>参数</p>
<blockquote>
<p><code v-pre>currentValue</code> 必须。当前元素的值</p>
<p><code v-pre>index</code> 可选。当期元素的索引值</p>
<p><code v-pre>arr</code> 可选。当期元素属于的数组对象</p>
</blockquote>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> array1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span>
打印结果为：<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reduce-方法" tabindex="-1"><a class="header-anchor" href="#reduce-方法" aria-hidden="true">#</a> <code v-pre>reduce()</code> 方法</h3>
<p><code v-pre>reduce()</code> 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。</p>
<blockquote>
<p>语法：<code v-pre>array.reduce(function(total, currentValue, currentIndex, arr), initialValue)</code></p>
<p>参数：</p>
<blockquote>
<p><code v-pre>total</code>    必需。初始值, 或者计算结束后的返回值。</p>
<p><code v-pre>currentValue</code>    必需。当前元素</p>
<p><code v-pre>currentIndex</code>    可选。当前元素的索引</p>
<p><code v-pre>arr</code>    可选。当前元素所属的数组对象。</p>
<p><code v-pre>initialValue</code>    可选。传递给函数的初始值</p>
</blockquote>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> cur<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-方法" tabindex="-1"><a class="header-anchor" href="#find-方法" aria-hidden="true">#</a> <code v-pre>find() </code>方法</h3>
<p><strong><code v-pre>find()</code></strong> 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank" rel="noopener noreferrer"><code v-pre>undefined</code><ExternalLinkIcon/></a>。</p>
<blockquote>
<p>语法：<code v-pre>array.find(function(currentValue,index,arr), thisValue)</code></p>
<p>参数：</p>
<blockquote>
<p><code v-pre>currentValue</code> 必须。当前元素的值</p>
<p><code v-pre>index</code> 可选。当期元素的索引值</p>
<p><code v-pre>arr</code> 可选。当期元素属于的数组对象</p>
</blockquote>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> inventory <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'apples'</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bananas'</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'cherries'</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inventory<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span>item<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'cherries'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
