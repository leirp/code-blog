<template><div><h1 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h1>
<h2 id="object-defineproperty的使用" tabindex="-1"><a class="header-anchor" href="#object-defineproperty的使用" aria-hidden="true">#</a> <code v-pre>Object.defineProperty</code>的使用</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p><code v-pre>Object.defineProperty</code> ，顾名思义，为对象定义属性。</p>
<p>对象是由多个名/值对组成的无序的集合。对象中每个属性对应任意类型的值。
定义对象可以使用构造函数或字面量的形式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">;</span>  <span class="token comment">//obj = {}</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span>  <span class="token comment">//添加描述</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">//添加行为</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了以上方式，还可以使用 <code v-pre>Object.defineProperty</code> 方法定义新属性或修改原有的属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：</p>
<ul>
<li>obj：必需。目标对象</li>
<li>prop：必需。需定义或修改的属性的名字</li>
<li>descriptor：必需。目标属性所拥有的特性</li>
</ul>
<p>返回值：</p>
<ul>
<li>被传递给函数的对象。</li>
</ul>
<h3 id="属性描述符" tabindex="-1"><a class="header-anchor" href="#属性描述符" aria-hidden="true">#</a> 属性描述符</h3>
<p>对象里目前存在的属性描述符有两种主要形式：<strong>数据描述符</strong>和<strong>存取描述符</strong>。<strong>数据描述符</strong>是一个拥有可写或不可写值的属性。<strong>存取描述符</strong>是由一对 getter-setter 函数功能来描述的属性。描述符必须是两种形式之一；不能同时是两者，即：</p>
<ul>
<li>value 与 get 作用相同，只能用同时一个。</li>
<li>writable和set作用相同，只能用同时一个。</li>
</ul>
<p>value：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"leirp"</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>age<span class="token punctuation">)</span>   <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>writable：当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"leirp"</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"sex"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
a<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// 18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>sex<span class="token punctuation">)</span> <span class="token comment">// 1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>configurable： 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变且从对应的对象上可被删除。默认为 false。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"leirp"</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"sex"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">delete</span> a<span class="token punctuation">.</span>age   
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 18</span>
<span class="token keyword">delete</span> a<span class="token punctuation">.</span>sex
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enumerable： 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"leirp"</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">"sex"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印   name  sex</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Setters 和 Getters</p>
<ul>
<li>get： 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值，在读取被代理的值时被调用。默认为 undefined。</li>
<li>set：一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。当修改被代理的值的时候被调用。默认为 undefined</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">const</span> parson <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"leirp"</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>parson<span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> number
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">set</span><span class="token operator">:</span> <span class="token function">funcation</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// value: 被设置的新值</span>
        number <span class="token operator">=</span> value <span class="token comment">// 将新值赋值给value</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	configurable： <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parson<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// 18</span>
number <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parson<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 20</span>
parson<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>  <span class="token comment">// 30</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据代理-1" tabindex="-1"><a class="header-anchor" href="#数据代理-1" aria-hidden="true">#</a> 数据代理</h3>
<p>通过一个对象代理对另外一个对象中属性的操作（读和写）叫做数据代理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">"x"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> obj1<span class="token punctuation">.</span>x
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
		obj1<span class="token punctuation">.</span>x <span class="token operator">=</span> value
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>x<span class="token punctuation">,</span>obj2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// 100 100</span>
obj1<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">300</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>x<span class="token punctuation">)</span>  <span class="token comment">// 300</span>
obj2<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">400</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// 400</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-中的数据代理" tabindex="-1"><a class="header-anchor" href="#vue-中的数据代理" aria-hidden="true">#</a> vue 中的数据代理</h3>
<p>在vue2中通过data对象中的属性来实现数据代理，实例化时，将data 赋值在vue实例的 <code v-pre>_data</code>属性中 ，然后将<code v-pre>_data</code>属性中的数据添加到vue实例中，并为每一个添加到vue实例中的属性通过<code v-pre>Object.defineProperty</code> 指定一个 getter/setter。 使之更加方便的操作data中的数据。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
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
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学校：{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学校1：{{_data.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"zzz"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span><span class="token punctuation">,</span>
      data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以下代码可以看到，name 的值与 _data中name的值是相互改变的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vm<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"清华大学"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//清华大学</span>
vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"北京大学"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>name<span class="token punctuation">)</span>   <span class="token comment">//北京大学</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/vue/images/vm.png" alt="vue实例"></p>
<p>原理图如下：</p>
<p><img src="@source/vue/images/defineProperty.png" alt="数据代理示意图"></p>
</div></template>
