<template><div><h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1>
<h2 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h2>
<ul>
<li>在面向对象变成中，是通过类来创建对象的，类相当与模具，根据传递的数据来创建对象，并且可以重复的创建对象。</li>
<li>在 es6 之前的版本，没有类的概念，不过可以利用构造函数来代替进行创建对象。</li>
<li>构造函数跟普通函数没有太大区别，只是调用的时候需要通过 new 关键字来调用。构造函数中的     this 会指向创建出来的对象。并且具备隐式返回操作。</li>
<li>定义类一般要求字母大写。所以定义构造函数也要求字母大写</li>
</ul>
<h2 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h2>
<h3 id="字面量创建方式" tabindex="-1"><a class="header-anchor" href="#字面量创建方式" aria-hidden="true">#</a> 字面量创建方式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Tom'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token function-variable function">say</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统构造函数创建" tabindex="-1"><a class="header-anchor" href="#系统构造函数创建" aria-hidden="true">#</a> 系统构造函数创建</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obg<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Tom"</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义构造函数" tabindex="-1"><a class="header-anchor" href="#自定义构造函数" aria-hidden="true">#</a> 自定义构造函数</h3>
<p>使用字面量或者系统构造函数只能建立单个对象，如果需要批量建立对象，可以使用自定义构造函数或者工厂模式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function People() {
	this.name = name
	this.age = age
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3>
<p>工厂模式是一种用来创建对象的设计模式。我们不暴露对象创建的逻辑,而是将逻辑封装在一个函数内,那么这个函数可以成为工厂。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello wrold'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> obj
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义构造函数和工厂模式的区别</p>
<ul>
<li>工厂模式函数名时小写，自定义构造函数函数名首字母大写</li>
<li>工厂模式生成的对象必须 return，自定义构造函数没有返回值，如果人为return的不是对象，直接忽略，如果人为return的是对象，就取代this。</li>
<li>工厂模式直接调用函数就可以创建对象，自定义构造函数通过 new 的方式创建对象</li>
<li>工厂模式生成的实例对象的__proto__直接指向基类Object的原型</li>
<li>构造函数生成的实例对象的__proto__指向他父类的原型，然后父类的原型上的__proto__指向基类Object的原型。</li>
</ul>
<h3 id="实例对象和构造函数" tabindex="-1"><a class="header-anchor" href="#实例对象和构造函数" aria-hidden="true">#</a> 实例对象和构造函数</h3>
<p>实例对象是通过构造函数（或类）来创建的--创建的过程叫做实例化</p>
<p>判断对象是不是这个这个数据类型</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过构造器的方式来判断	实例对象.构造器==构造函数名称</span>
obj<span class="token punctuation">.</span><span class="token class-name">__proto</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> CreateObject
obj<span class="token punctuation">.</span>constructor <span class="token operator">==</span> CreateObject
<span class="token comment">// 通过 instanceof 判断</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">CreateObject</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2>
<p>除了使用对象字面量、系统构造函数以及工厂模式以外，还可以通过自定义构造函数的方式创建对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token keyword">const</span> lei <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">'leirp'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-关键字" tabindex="-1"><a class="header-anchor" href="#new-关键字" aria-hidden="true">#</a> new 关键字</h3>
<p>当使用new 关键字生成一个对象的时候，会发生一下内容</p>
<ul>
<li>
<p>在堆空间创建一个对象</p>
</li>
<li>
<p>对象的[[Prototype]]指向其构造函数的prototype的</p>
</li>
<li>
<p>constructor 中this被赋值为这个对象</p>
</li>
<li>
<p>执行 constructor构造器函数 给对象创建属性</p>
</li>
</ul>
<h3 id="静态成员和实例成员" tabindex="-1"><a class="header-anchor" href="#静态成员和实例成员" aria-hidden="true">#</a> 静态成员和实例成员</h3>
<p>实例对象的属性及方法即为实例成员，实例对象是相互独立的，实例对象的实例成员仅在当前对象使用</p>
<p>构造函数的属性及方法即为静态成员，静态方法只能构造函数使用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token comment">// 实例属性</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token comment">// 实例方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">work</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'working...'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 静态属性</span>
People<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'people'</span>
<span class="token comment">// 静态方法</span>
People<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是静态方法'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> People<span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">// 访问静态属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>People<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
<span class="token comment">// 访问静态方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>People<span class="token punctuation">.</span>say<span class="token punctuation">)</span>

<span class="token keyword">const</span> lei <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">'lei'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>
<span class="token comment">// 访问实例属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lei<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// 访问实例方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lei<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 在静态方法中，this 指向的是构造函数本身，在实例方法中，this 指向的是生成的对象本身</p>
<h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2>
<h3 id="构造函数的内存浪费问题" tabindex="-1"><a class="header-anchor" href="#构造函数的内存浪费问题" aria-hidden="true">#</a> 构造函数的内存浪费问题</h3>
<p>在构造函数中定义方法，在创建对象的时候，每一个实例都会执行构造函数中的逻辑，将属性和方法都挂载到实例上，所以每创建一个实例的时候，都会创建一个函数对象，并且将实例的属性指向该函数对象。虽然数对每一个实例来说，执行的逻辑都是一样的，但是每一个实例中都会保存一个相同的函数对象，这会造成内存浪费。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>func <span class="token operator">==</span> obj2<span class="token punctuation">.</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//返回 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="原型介绍" tabindex="-1"><a class="header-anchor" href="#原型介绍" aria-hidden="true">#</a> 原型介绍</h3>
<p>原型可以解决多个对象实例之间资源共用的问题，在 javascript 中，任何对象都有原型， 原型可以理解成是一块共享内存块，在这个内存块中存储着一份数据，所有的实例需要的时候，只需要访问该内存块即可，从而达到共用共享的问题。</p>
<ul>
<li>
<p>每个构造函数都有一个prototype 属性，指向另外一个对象，称之为原型对象</p>
</li>
<li>
<p>构造函数通过原型分配的方法是所有对象共享的</p>
</li>
<li>
<p>原型对象可以挂载方法，对象实例化不会多次创建原型上的方法，解约内存</p>
</li>
<li>
<p>原型对象中的this 与构造函数中的this 一样，都指向实例化的对象</p>
</li>
</ul>
<h3 id="原型的优点" tabindex="-1"><a class="header-anchor" href="#原型的优点" aria-hidden="true">#</a> 原型的优点</h3>
<p>节省内存、数据共享、实现继承</p>
<h3 id="原型的案例" tabindex="-1"><a class="header-anchor" href="#原型的案例" aria-hidden="true">#</a> 原型的案例</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">CreateObject</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//通过构造函数的原型添加一个方法</span>
<span class="token class-name">CreateObject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateObject</span><span class="token punctuation">(</span><span class="token string">'lei'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateObject</span><span class="token punctuation">(</span><span class="token string">'rui'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>func <span class="token operator">==</span> obj2<span class="token punctuation">.</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//返回 true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例对象的原型" tabindex="-1"><a class="header-anchor" href="#实例对象的原型" aria-hidden="true">#</a> 实例对象的原型</h3>
<p>实例对象中也有一个原型对象，通过非标准属性<code v-pre>__proto__</code>来访问，他指向的是构造函数的原型对象<code v-pre>prototype</code> ，所以 原型对象中的constructor 也指向的是构造函数本身。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">'xiaoMing'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Student {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// __proto__ 是非标准属性，如果要访问一个对象的原型，建议使用 ES6 新增的 Reflect.getPrototypeOf 或者 Object.getPrototypeOf() 方法。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对象原型的修改方式（不重要）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过 __proto__ 修改</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
a<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Tom'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>

<span class="token comment">// 通过 Object.setPrototypeOf 修改</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Tom'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 需要注意的是当设置原型为非对象或者为null 时，设置的原型不生效</span>
obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token comment">// 非对象和 null 不生效</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {}</span>

<span class="token comment">// 当一个对象是不可扩展的，则抛出异常 TypeError</span>
<span class="token keyword">const</span> frozenObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// Object.isExtensible(obj) 可以判断 obj 是不是可扩展的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>frozenObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => false</span>
frozenObj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// => TypeError: #&lt;Object> is not extensible</span>

<span class="token comment">// 如果一个对象的 __proto__ 属性被设置为null，这种情况比较复杂</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'xiaoming'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// !: 为什么不是 null, 就好像 __proto__ 被 delete 了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => undefined</span>
<span class="token comment">// 说明确实将原型设置为 null 了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => null</span>

<span class="token comment">// 再次赋值为 null</span>
obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// 黑人问号？？？咋不是之前的 undefined 呢？</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => null</span>

obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { a: 1 }</span>
<span class="token comment">// __proto__ 就像一个普通属性一样 obj.xxx = { a: 1 }</span>
<span class="token comment">// 并没有将原型设置成功</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => null</span>

Reflect<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// __proto__ 被设置为 null 后，obj 的 __proto__ 属性和一个普通的属性没有区别</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { a: 1 }</span>
<span class="token comment">// 使用 Reflect.setPrototypeOf 是可以设置原型的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { b: 2 }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造器-constructor" tabindex="-1"><a class="header-anchor" href="#构造器-constructor" aria-hidden="true">#</a> 构造器 constructor</h3>
<p>每个原型对象<code v-pre>prototype</code> 中都有一个 constructor  属性，他指向构造函数本身</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple <span class="token keyword">instanceof</span> <span class="token class-name">Apple</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Apple</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Apple<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给原型批量添加方法时，如果不重新定义 constructor 属性，则constructor 会指向Object，此时原型对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sing'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'dance'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span> <span class="token comment">//Object</span>
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span>
  <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sing'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'dance'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例对象、原型对象、构造器" tabindex="-1"><a class="header-anchor" href="#实例对象、原型对象、构造器" aria-hidden="true">#</a> 实例对象、原型对象、构造器</h3>
<p><img src="@source/JavaScript/images/prototype.jpg" alt="prototype"></p>
<p>构造函数中有个属性，<code v-pre>prototype</code>属性，是构造函数的原型对象，prototype对象相当于特定类型所有实例对象都可以访问的公共容器。</p>
<p>构造函数的原型对象中有个<code v-pre>constructor 属性</code>，这个属性指向的是原型对象<code v-pre>prototype</code>所属的构造函数。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function Apple() {}
const apple = new Apple();
console.log(Apple.prototype.constructor === Apple)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例对象中有个属性，<code v-pre>__proto__</code>属性，是实例对象的原型对象，他指向了构造函数的<code v-pre>prototype</code>原型对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> apple1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Apple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 实例对象的原型与构造函数的原型相等（指向同一块内容）</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Apple</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> apple<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象三大特性" tabindex="-1"><a class="header-anchor" href="#面向对象三大特性" aria-hidden="true">#</a> 面向对象三大特性</h2>
<h3 id="继承-不完整" tabindex="-1"><a class="header-anchor" href="#继承-不完整" aria-hidden="true">#</a> 继承（不完整）</h3>
<p>继承是面向对象中很重要的一个特征，通过继承可以进一步提升代码的封装程度，javascript 中大多数通过原型对象实现继承特性</p>
<h4 id="构造函数继承" tabindex="-1"><a class="header-anchor" href="#构造函数继承" aria-hidden="true">#</a> 构造函数继承</h4>
<p>使用 call 或 或 apply 实现继承</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span>eye</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> head
  <span class="token keyword">this</span><span class="token punctuation">.</span>eye <span class="token operator">=</span> eye
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token function">funcation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello word'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>head<span class="token punctuation">,</span>grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 因为原型上的方法只有在 new 的时候，才会将其指向到对象的原型上，所以这样并不会继承父构造函数原型上的方法</p>
<h4 id="构造函数及原型继承-组合继承" tabindex="-1"><a class="header-anchor" href="#构造函数及原型继承-组合继承" aria-hidden="true">#</a> 构造函数及原型继承（组合继承）</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token function">funcation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello word'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
<span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">body</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token comment">//WoMen.prototype = Person.prototype // 如果直接赋值原型，会增加耦合性，应使用 new Person 的方式</span>
<span class="token comment">//通过 new 的方式改变原型，子构造函数原型上将会出现 父构造函数没用的属性</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student
<span class="token comment">// 增加方法</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">body</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 子构造器原型中new 完父构造器后，子构造器的原型上的constructor将会指向父构造器，可以通过重新赋值的方式改变 constructor 的指向</p>
<h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h2>
<p>原型链是实例对象与原型之间的链接。</p>
<p>当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span>eye</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> head
  <span class="token keyword">this</span><span class="token punctuation">.</span>eye <span class="token operator">=</span> eye
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token function">funcation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello word'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>head<span class="token punctuation">,</span>grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>head<span class="token punctuation">)</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
<span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">body</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token keyword">const</span>  w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>  <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">//null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src=".\images\PrototypeChain.jpg" alt="PrototypeChain"></p>
<h2 id="面向对象三大特性-1" tabindex="-1"><a class="header-anchor" href="#面向对象三大特性-1" aria-hidden="true">#</a> 面向对象三大特性</h2>
<h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2>
<p>ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。</p>
<h3 id="创建类" tabindex="-1"><a class="header-anchor" href="#创建类" aria-hidden="true">#</a> 创建类</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 自定义构造函数</span>
<span class="token keyword">function</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ES6 class</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token comment">// 下面的方法前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法与方法之间不需要逗号分隔，加了会报错。</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中使用 class 定义了一个“类”，可以看到里面有一个<code v-pre>constructor()</code>方法，这就是构造方法，而<code v-pre>this</code>关键字则代表实例对象。这种 class 写法本质与上面的自定义构造函数一致，完全可以看作构造函数的另一种写法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">typeof</span> Point <span class="token comment">// "function"</span>
<span class="token comment">// prototype中的constructor属性指向的就是自己所在的原型对象所在的构造函数</span>
Point <span class="token operator">===</span> <span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token comment">// Person.call(this,name,age)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade 
  <span class="token punctuation">}</span>
  <span class="token function">printGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 直接调用父类中的方法</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello student'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 要继承父类中的属性，必须调用 super 方法，且必须在构造器中第一个调用。</p>
<p>:::tips 使用 super.method 的方式可以直接调用父类的方法</p>
</div></template>
