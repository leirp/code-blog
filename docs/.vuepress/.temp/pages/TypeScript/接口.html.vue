<template><div><h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h1>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>TypeScript的核心原则之一是对值所具有的结构进行类型检查。它有时被称做“鸭式辨型法”或“结构性子类型化”。
在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 普通方式进行类型检查</span>
<span class="token keyword">function</span> <span class="token function">printLabel</span><span class="token punctuation">(</span>labelledObj<span class="token operator">:</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>labelledObj<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"Size 10 Object"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printLabel</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用接口</span>
<span class="token keyword">interface</span> <span class="token class-name">LabelledValue</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printLabel</span><span class="token punctuation">(</span>labelledObj<span class="token operator">:</span> LabelledValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>labelledObj<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span>size<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">"Size 10 Object"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printLabel</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>对象字面量的某个属性如果定义，则必须要传入</p>
</li>
<li>
<p>对象字面量传入指定的属性的值必须符合定义，如果传入一个已定义的值，但类型不符合会报错</p>
</li>
<li>
<p>对象字面量只能指定已知属性，如果传入一个未定义的值，会报错</p>
</li>
<li>
<p>对象字面量的某个属性如果是可选的，这个属性可以不传入</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token function-variable function">say</span><span class="token operator">:</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person<span class="token operator">:</span>IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'lei'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token function">say</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name <span class="token operator">+</span> age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性" aria-hidden="true">#</a> 可选属性</h2>
<p>接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。</p>
<p>带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个<code v-pre>?</code>符号。</p>
<p>可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> 
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createSquare</span><span class="token punctuation">(</span>config<span class="token operator">:</span> SquareConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> area<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newSquare <span class="token operator">=</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span> area<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newSquare<span class="token punctuation">.</span>color <span class="token operator">=</span> config<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newSquare<span class="token punctuation">.</span>area <span class="token operator">=</span> config<span class="token punctuation">.</span>width <span class="token operator">*</span> config<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newSquare<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> mySquare1 <span class="token operator">=</span> <span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 无报错 因为 color 为非必要的参数</span>
<span class="token keyword">let</span> mySquare2 <span class="token operator">=</span> <span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 报错，因为with 为必要的参数</span>
<span class="token keyword">let</span> mySquare3 <span class="token operator">=</span> <span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">100</span><span class="token operator">:</span>color<span class="token operator">:</span> <span class="token number">2222</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 报错，因为 color 传值必须符合其类型</span>
<span class="token keyword">let</span> mySquare4 <span class="token operator">=</span> <span class="token function">createSquare</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 报错，对象字面量可以只指定已知属性，并且“height”不在类型“SquareConfig”中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h2>
<h3 id="对象设置只读" tabindex="-1"><a class="header-anchor" href="#对象设置只读" aria-hidden="true">#</a> 对象设置只读</h3>
<p>一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 <code v-pre>readonly</code>来指定只读属性</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p1<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 无报错</span>
p1<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 错误，因为设置了只读属性后，其值只能在定义时修改，后续无法修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量设置只读" tabindex="-1"><a class="header-anchor" href="#变量设置只读" aria-hidden="true">#</a> 变量设置只读</h3>
<p>TypeScript具有<code v-pre>ReadonlyArray&lt;T&gt;</code>类型，它与<code v-pre>Array&lt;T&gt;</code>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray&lt;number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
let b = ro; // error!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的最后一行，可以看到就算把整个<code v-pre>ReadonlyArray</code>赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let b = ro as number[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span>  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    sex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'lei'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span>
    say<span class="token operator">:</span> <span class="token string">'hello world'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦定义了任意属性，那么确定属性和可选属性的的类型必须是任意属性类型的子集。</p>
<h2 id="可索引的类型" tabindex="-1"><a class="header-anchor" href="#可索引的类型" aria-hidden="true">#</a> 可索引的类型</h2>
<p>与使用接口描述函数类型差不多，我们也可以描述那些能够 “通过索引得到” 的类型，比如 <code v-pre>a[10]</code> 或 <code v-pre>ageMap[&quot;daniel&quot;]</code> 。 可索引类型具有一个_索引签名_，它描述了对象索引的类型，还有相应的索引返回值类型。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Arr</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr1<span class="token operator">:</span>Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">,</span><span class="token string">'4'</span><span class="token punctuation">]</span> <span class="token comment">// 正常</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span>Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment">// err: 不能将类型“number”分配给类型“string”。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数接口" tabindex="-1"><a class="header-anchor" href="#函数接口" aria-hidden="true">#</a> 函数接口</h2>
<p>接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。</p>
<p>为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IFnc</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义函数使用冒号，定义方法使用箭头</span>
    <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>
<span class="token comment">// 正确</span>
<span class="token keyword">const</span> fn<span class="token operator">:</span><span class="token function-variable function">IFnc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name <span class="token operator">+</span>age
<span class="token punctuation">}</span>
<span class="token comment">// err: 不能将类型“(name: string, age: string) => string”分配给类型“IFnc”。</span>
<span class="token keyword">const</span> fn1<span class="token operator">:</span><span class="token function-variable function">IFnc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> name <span class="token operator">+</span>age 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
