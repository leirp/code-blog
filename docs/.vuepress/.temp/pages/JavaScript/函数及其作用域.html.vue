<template><div><h1 id="函数及其作用域" tabindex="-1"><a class="header-anchor" href="#函数及其作用域" aria-hidden="true">#</a> 函数及其作用域</h1>
<h2 id="_1-函数的样式" tabindex="-1"><a class="header-anchor" href="#_1-函数的样式" aria-hidden="true">#</a> 1. 函数的样式</h2>
<h3 id="_1-1-普通函数" tabindex="-1"><a class="header-anchor" href="#_1-1-普通函数" aria-hidden="true">#</a> 1.1. 普通函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">'hello world'</span>
<span class="token punctuation">}</span>
<span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-带参数的函数" tabindex="-1"><a class="header-anchor" href="#_1-2-带参数的函数" aria-hidden="true">#</a> 1.2. 带参数的函数</h3>
<p>带参数的函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func3</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带默认值参数的函数（如果给有默认值的参数不传递参数，按照默认值计算,且默认值参数写在最后）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">func2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当实参的数量小于形参的数量时，多余的形参默认为 <code v-pre>undefined</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当实参的数量大于形参的数量时，多余的实参不计算在内</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-匿名函数-函数表达式" tabindex="-1"><a class="header-anchor" href="#_1-3-匿名函数-函数表达式" aria-hidden="true">#</a> 1.3.  匿名函数（函数表达式）</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token operator">+</span>b
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>与普通函数相比，使用var、const 、let 声明的匿名函数，在加载时，只会预加载变量名，等到调用的时候才会加载函数本身，而普通函数在js 加载时就已预加载</p>
</div>
<h3 id="_1-4-立即执行函数" tabindex="-1"><a class="header-anchor" href="#_1-4-立即执行函数" aria-hidden="true">#</a> 1.4. 立即执行函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello 自调用函数2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello 自调用函数1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-1立即执行函数的优势" tabindex="-1"><a class="header-anchor" href="#_1-4-1立即执行函数的优势" aria-hidden="true">#</a> 1.4.1立即执行函数的优势：</h4>
<p>防止变量污染：es6 之前 js中没有块级作用域，用来隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span><span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// jQuery code</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-作用域" tabindex="-1"><a class="header-anchor" href="#_2-作用域" aria-hidden="true">#</a> 2. 作用域</h2>
<h3 id="_2-1-变量与函数的作用域" tabindex="-1"><a class="header-anchor" href="#_2-1-变量与函数的作用域" aria-hidden="true">#</a> 2.1. 变量与函数的作用域</h3>
<p>使用 var 声明的变量没有块级作用域，函数有作用域。</p>
<p>块级作用域：使用 {} 包裹为块级作用域</p>
<h3 id="_2-2-全局作用域" tabindex="-1"><a class="header-anchor" href="#_2-2-全局作用域" aria-hidden="true">#</a> 2.2. 全局作用域</h3>
<ul>
<li>
<p>直接编写在 script 标签中的 js 代码都是全局作用域</p>
</li>
<li>
<p>全局作用域在页面打开时创建，在页面关闭时销毁</p>
</li>
<li>
<p>在全局作用域中有一个对象：window，window 对象 代表一个浏览器的窗口，他由浏览器创建我们可以直接使用。</p>
</li>
<li>
<p>在全局作用域中使用 var 创建的变量都会作为 window 对象的一个属性保存,在全局作用域中创建的函数都会作为 window 对象的一个方法保存(只针对于浏览器中)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token string">'hello window'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// hello window</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-3-函数的作用域" tabindex="-1"><a class="header-anchor" href="#_2-3-函数的作用域" aria-hidden="true">#</a> 2.3 函数的作用域</h3>
<ul>
<li>
<p>调用函数时，创建函数作用域，函数执行完毕后，作用域销毁</p>
</li>
<li>
<p>每调用一次函数就会创建新的作用域，他们之间时相互独立的</p>
</li>
<li>
<p>在函数的作用域中，可以访问和改变全局作用域的变量，在全局作用域中，无法访问局部作用域的变量</p>
</li>
<li>
<p>在局部作用域使用 var 声明变量时，会在局部作用域中重新创建一个变量，并不会改变全局作用域的值（两块内存地址），而直接赋值时，默认声明为全局变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">funca</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token function">funca</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">//输出 2 </span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">funcb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">funcb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
输出 <span class="token number">4</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-4-作用域链" tabindex="-1"><a class="header-anchor" href="#_2-4-作用域链" aria-hidden="true">#</a> 2.4. 作用域链</h3>
<p>当在局部作用域中访问变量时，他会现在自身作用域中寻找，如果有就直接使用，否则向上级寻找。</p>
<h3 id="_2-5-if-与-for-的作用域" tabindex="-1"><a class="header-anchor" href="#_2-5-if-与-for-的作用域" aria-hidden="true">#</a> 2.5. if 与 for 的作用域</h3>
<p>在 javascript 中 ,在 es6之前因为 if 和 for 都没有块级作用域的概念，所以在很多时候，我们都必须借助与函数的作用域来解决应用外部变量的问题,在es6中，加入了let,let 是有if 和 for 的块级作用域的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//  i 是循环体内局部作用域，不受外界影响。</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出结果：0  1  2  3  4  5  6  7  8 9</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 同步注册回调函数到 异步的 宏任务队列。</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 执行此代码时，同步代码for循环已经执行完成</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 <span class="token comment">// 输出结果:10   共10个 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数" aria-hidden="true">#</a> 3. 箭头函数</h2>
<h3 id="_3-1-箭头函数的基本写法" tabindex="-1"><a class="header-anchor" href="#_3-1-箭头函数的基本写法" aria-hidden="true">#</a> 3.1  箭头函数的基本写法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">ccc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-参数和返回值" tabindex="-1"><a class="header-anchor" href="#_3-2-参数和返回值" aria-hidden="true">#</a> 3.2. 参数和返回值</h3>
<p>多个参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> num1<span class="token operator">+</span>num2
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个参数(括号可省略)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">power</span> <span class="token operator">=</span> <span class="token parameter">num</span> <span class="token operator">=></span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> num <span class="token operator">*</span> num
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码块中只有一行代码时,可省略大括号和 return</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mul</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span><span class="token operator">=></span>num1<span class="token operator">*</span>num2
<span class="token keyword">const</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span>   <span class="token comment">//console.log() 没有返回值，所以也成立</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-this-的指向" tabindex="-1"><a class="header-anchor" href="#_4-this-的指向" aria-hidden="true">#</a> 4. this 的指向</h2>
<h3 id="_4-1-this-是什么" tabindex="-1"><a class="header-anchor" href="#_4-1-this-是什么" aria-hidden="true">#</a> 4.1 this 是什么</h3>
<p>解析器在调用函数时，每次都会向函数内部传递一个隐含的参数，这个参数就是 this,this 指向的时一个对象，这个对象我们称之为函数的上下文对象。</p>
<h3 id="_4-2-this-的指向" tabindex="-1"><a class="header-anchor" href="#_4-2-this-的指向" aria-hidden="true">#</a> 4.2 this 的指向</h3>
<p>this即表示调用函数或方法的当前对象</p>
<p>以函数形式调用时，this 永远指向的时 window</p>
<p>以方法的形式调用时，this 就是调用方法的那个对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// innerDiameter函数中的this是window</span>
<span class="token comment">// outerDiameter方法中的 this 是 circle 对象</span>
<span class="token keyword">var</span> circle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token function">outerDiameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> <span class="token function-variable function">innerDiameter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">innerDiameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
circle<span class="token punctuation">.</span><span class="token function">outerDiameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当对象中包含另外一个对象时</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//obj1对象的o1属性值是obj2对象的地址，而obj2对象的fn属性的值是函数foo的地址；</span>
<span class="token comment">//函数foo的调用环境是在obj2中的，因此this指向对象obj2;</span>

函数foo的调用环境是在obj2中的，因此<span class="token keyword">this</span>指向对象obj2<span class="token punctuation">;</span>

函数foo的调用环境是在obj2中的，因此<span class="token keyword">this</span>指向对象obj2<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fn</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">o1</span><span class="token operator">:</span> obj2
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>o1<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-箭头函数的-this-指向" tabindex="-1"><a class="header-anchor" href="#_4-3-箭头函数的-this-指向" aria-hidden="true">#</a> 4.3. 箭头函数的 this 指向</h3>
<p>箭头函数没有自己的this值，箭头函数中所使用的this来自于函数作用域链。它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// innerDiameter函数中的this是 circle 对象 因为 innerDiameter 是箭头函数 没有 this,他继承作用域链中 outerDiameter 方法的 this</span>
<span class="token comment">// outerDiameter方法中的 this 是 circle 对象</span>
<span class="token keyword">var</span> circle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token function">outerDiameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> <span class="token function-variable function">innerDiameter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    	<span class="token function">innerDiameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
circle<span class="token punctuation">.</span><span class="token function">outerDiameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-不同情况下的-this-指向" tabindex="-1"><a class="header-anchor" href="#_4-4-不同情况下的-this-指向" aria-hidden="true">#</a> 4.4 . 不同情况下的  this 指向</h3>
<h4 id="_4-4-1-行内样式绑定" tabindex="-1"><a class="header-anchor" href="#_4-4-1-行内样式绑定" aria-hidden="true">#</a> 4.4.1. 行内样式绑定</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按钮<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">clickFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">clickFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span> <span class="token comment">// 此函数的运行环境在全局window对象下，因此this指向window;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按钮<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token keyword">this</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 运行环境在节点对象中，因此this指向本节点对象 --></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>行内绑定事件的语法是在html节点内，以节点属性的方式绑定，属性名是事件名称前面加'on'，属性的值则是一段可执行的 JS 代码段；而属性值最常见的就是一个函数调用；</p>
<p>当事件触发时，属性值就会作为JS代码被执行，当前运行环境下没有<code v-pre>clickFun</code>函数，因此浏览器就需要跳出当前运行环境，在整个环境中寻找一个叫<code v-pre>clickFun</code>的函数并执行这个函数，所以函数内部的this就指向了全局对象window；如果不是一个函数调用，直接在当前节点对象环境下使用this，那么显然this就会指向当前节点对象；</p>
<h4 id="_4-4-2-动态绑定与事件监听" tabindex="-1"><a class="header-anchor" href="#_4-4-2-动态绑定与事件监听" aria-hidden="true">#</a> 4.4.2. 动态绑定与事件监听</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按钮<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span> <span class="token punctuation">;</span>  <span class="token comment">// this指向本节点对象</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为动态绑定的事件本就是为节点对象的属性(事件名称前面加'on')重新赋值为一个匿名函数，因此函数在执行时就是在节点对象的环境下，this自然就指向了本节点对象</p>
<h4 id="_4-4-3-构造函数中的this" tabindex="-1"><a class="header-anchor" href="#_4-4-3-构造函数中的this" aria-hidden="true">#</a> 4.4.3 构造函数中的this</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Pro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-4-window定时器中的this" tabindex="-1"><a class="header-anchor" href="#_4-4-4-window定时器中的this" aria-hidden="true">#</a> 4.4.4. window定时器中的this</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">fun</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>fun<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// this指向window对象</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token string">'obj.fun()'</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// this指向obj对象</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>setInterval()</code> 是window对象下内置的一个方法，接受两个参数，第一个参数允许是一个函数或者是一段可执行的 JS 代码，第二个参数则是执行前面函数或者代码的时间间隔；</p>
<p>在上面的代码中，<code v-pre>setInterval(obj.fun,1000)</code> 的第一个参数是<code v-pre>obj</code>对象的<code v-pre>fun</code> ，因为 JS 中函数可以被当做值来做引用传递，实际就是将这个函数的地址当做参数传递给了 <code v-pre>setInterval</code> 方法，换句话说就是 <code v-pre>setInterval</code> 的第一参数接受了一个函数，那么此时1000毫秒后，函数的运行就已经是在window对象下了，也就是函数的调用者已经变成了window对象，所以其中的this则指向的全局window对象；</p>
<p>而在 <code v-pre>setInterval('obj.fun()',1000)</code> 中的第一个参数，实际则是传入的一段可执行的 JS 代码；1000毫秒后当 JS 引擎来执行这段代码时，则是通过 <code v-pre>obj</code> 对象来找到 <code v-pre>fun</code> 函数并调用执行，那么函数的运行环境依然在 对象 <code v-pre>obj</code> 内，所以函数内部的this也就指向了 <code v-pre>obj</code> 对象；</p>
<h3 id="_4-5-函数对象的call-与-apply-方法" tabindex="-1"><a class="header-anchor" href="#_4-5-函数对象的call-与-apply-方法" aria-hidden="true">#</a> 4.5. 函数对象的<code v-pre>call()</code> 与 <code v-pre>apply() </code>方法</h3>
<h4 id="_4-5-1-this-的本质" tabindex="-1"><a class="header-anchor" href="#_4-5-1-this-的本质" aria-hidden="true">#</a> 4.5.1. <code v-pre>this 的本质</code></h4>
<p>函数作为对象提供了<code v-pre>call()</code>，<code v-pre>apply()</code> 方法，他们也可以用来调用函数，这两个方法都接受一个对象作为参数，用来指定本次调用时函数中this的指向</p>
<p>函数不同的调用方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'hello'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">method</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1. 函数的调用</span>
<span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
<span class="token comment">// 2. 方法的调用</span>
obj<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
<span class="token comment">// 3. 使用 call () 方法调用</span>
<span class="token function">func</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种调用形式，才是正常调用形式：其他两种都是语法糖，可以等价地变为 call 形式。如下所示，this，就是上面代码中的 context。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func.call(context, p1, p2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>如果的 context 是值 null 或 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）</p>
</blockquote>
<p>这样也解释了 严格模式下 <code v-pre>this</code> 的指向问题。</p>
<h3 id="_4-5-2-call-与-apply-方法-的用途" tabindex="-1"><a class="header-anchor" href="#_4-5-2-call-与-apply-方法-的用途" aria-hidden="true">#</a> 4.5.2. <code v-pre>call()</code> 与 <code v-pre>apply() </code>方法  的用途</h3>
<blockquote>
<p><code v-pre>call</code>方法使用的语法规则
函数名称：<code v-pre>call(obj,arg1,arg2...argN)</code>
参数说明：</p>
<blockquote>
<p><code v-pre>obj</code>：函数内this要指向的对象,
<code v-pre>arg1,arg2...argN</code> ：参数列表，参数与参数之间使用一个逗号隔开</p>
</blockquote>
</blockquote>
<blockquote>
<p><code v-pre>apply</code>方法使用的语法规则
函数名称：<code v-pre>apply(obj,[arg1,arg2...argN])</code>
参数说明：</p>
<blockquote>
<p><code v-pre>obj</code>：函数内this要指向的对象,
<code v-pre>arg1,arg2...argN</code> ：参数列表，参数与参数之间使用一个逗号隔开</p>
</blockquote>
</blockquote>
<p><code v-pre>call()</code> 与 <code v-pre>apply()</code> 方法的用途相同，都接受一个对象作为参数，用来指定本次调用时函数中this的指向，只是传递参数的形式不同。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> lisi <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">names</span><span class="token operator">:</span><span class="token string">'lisi'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> zs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">names</span><span class="token operator">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//undefined</span>
<span class="token comment">//将f函数中的this指向固定到对象zs上；</span>
<span class="token function">f</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>zs<span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//zhangsan</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> lisi <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'lisi'</span><span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> zs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span>age<span class="token operator">+</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token comment">//将f函数中的this指向固定到对象zs上；</span>
<span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>zs<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token string">'nan'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-高阶函数的使用" tabindex="-1"><a class="header-anchor" href="#_5-高阶函数的使用" aria-hidden="true">#</a> 5. 高阶函数的使用</h2>
<h3 id="_5-1-filter-方法" tabindex="-1"><a class="header-anchor" href="#_5-1-filter-方法" aria-hidden="true">#</a> 5.1. <code v-pre> filter()</code>  方法</h3>
<p><code v-pre>filter()</code>用于对数组进行过滤。当每次遍历数组，返回的结果为 true 时，加入新的数组。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [6, 7, 8, 9, 10]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-map-方法" tabindex="-1"><a class="header-anchor" href="#_5-2-map-方法" aria-hidden="true">#</a> 5.2. <code v-pre>map()</code>方法</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-reduce-方法" tabindex="-1"><a class="header-anchor" href="#_5-3-reduce-方法" aria-hidden="true">#</a> 5.3. <code v-pre>reduce()</code> 方法</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-闭包" tabindex="-1"><a class="header-anchor" href="#_6-闭包" aria-hidden="true">#</a> 6. 闭包</h2>
<h3 id="_6-1-闭包概念" tabindex="-1"><a class="header-anchor" href="#_6-1-闭包概念" aria-hidden="true">#</a> 6.1. 闭包概念</h3>
<p>如果在一个内部函数里，对在外部作用域（但不是在全局作用域）的变量进行引用，那么内部函数就被认为是闭包(closure).</p>
<h3 id="_6-2-闭包的类型" tabindex="-1"><a class="header-anchor" href="#_6-2-闭包的类型" aria-hidden="true">#</a> 6.2. 闭包的类型</h3>
<p>函数模式的闭包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象模式的闭包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
 	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
 		<span class="token literal-property property">age</span><span class="token operator">:</span>num<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>				
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-闭包的作用" tabindex="-1"><a class="header-anchor" href="#_6-3-闭包的作用" aria-hidden="true">#</a> 6.3 闭包的作用</h3>
<p>缓存数据，既是优点也是缺点，没有及时的释放。</p>
<p>延长作用域链：闭包后里面的局部变量的使用作用域链将会被延长。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      num<span class="token operator">++</span>
      <span class="token keyword">return</span> num
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2</span>
  
  <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  		num<span class="token operator">++</span><span class="token punctuation">;</span>
  		<span class="token keyword">return</span> num
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> ff <span class="token operator">=</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：产生三个随机数，每次都是相同的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> num
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> ff <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-回调函数" tabindex="-1"><a class="header-anchor" href="#_7-回调函数" aria-hidden="true">#</a> 7. 回调函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">openFile</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'开始打开文件'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">·我已经打开文件·</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">·我已经写入文件·</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我在干其他事'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">openFile</span><span class="token punctuation">(</span>writeFile<span class="token punctuation">)</span>
  <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-递归函数" tabindex="-1"><a class="header-anchor" href="#_8-递归函数" aria-hidden="true">#</a> 8. 递归函数</h2>
<h2 id="function-构造函数" tabindex="-1"><a class="header-anchor" href="#function-构造函数" aria-hidden="true">#</a> Function 构造函数</h2>
</div></template>
