<template><div><h1 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h1>
<h2 id="基本类型-1" tabindex="-1"><a class="header-anchor" href="#基本类型-1" aria-hidden="true">#</a> 基本类型</h2>
<h3 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h3>
<p>数字类型使用关键字number 来表示，它可以用来表示整数和分数。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span> <span class="token comment">// 二进制</span>
<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>    <span class="token comment">// 八进制</span>
<span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>    <span class="token comment">// 十进制</span>
<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>    <span class="token comment">// 十六进制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h3>
<p>字符串类型使用关键字string 来表示，一个字符系列，使用单引号（<strong>'</strong>）或双引号（<strong>&quot;</strong>）来表示字符串类型。反引号（<strong>`</strong>）来定义多行文本和内嵌表达式。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"Runoob"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> years<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> words<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">您好，今年是 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 发布 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> years <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 周年</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h3>
<p>布尔类型使用关键字  <code v-pre>boolean</code> 表示逻辑值 <code v-pre>true</code>和<code v-pre>false</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> fag<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 在元素类型后面加上[]</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 或者使用数组泛型</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function printName(obj:{first:string,last?: string}) {
  console.log(obj.first)
  if (obj.last !== undefined) {
    console.log(obj.last.toLocaleLowerCase())
  }
  console.log(obj.last?.toLocaleLowerCase())
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对象类型不能传入其他额外的属性</li>
<li>如果对象的某个值是可选的，那么他可以不传值，如果传值，则必须符合其定义的类型</li>
<li>可选值可用 <code v-pre>if</code> 判断，也可使用es6 可选链</li>
</ul>
<h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h3>
<p>元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> number<span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Runoob'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 运行正常</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Runoob'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 报错</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 输出 Runoob</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h3>
<p>枚举类型用于定义数值集合。使用关键字 <code v-pre>enum</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>	
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>Red<span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Blue<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 输出 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> void</h3>
<p>用于标识方法返回值的类型，表示该方法没有返回值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello Runoob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> null 和 undefined</h3>
<p>对象缺失使用null 值定义，在 JavaScript 中 null 表示 &quot;什么都没有&quot;。null是一个只有一个值的特殊类型。表示一个空对象引用。用 typeof 检测 null 返回是 object。</p>
<p>undefined 用于初始化变量为一个未定义的值。在 JavaScript 中, undefined 是一个没有设置值的变量。typeof 一个没有值的变量会返回 undefined。Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。而在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型，示例代码如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 启用 --strictNullChecks</span>
<span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 运行正确</span>
x <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>    <span class="token comment">// 运行错误</span>
x <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">// 运行错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中变量 x 只能是数字类型。如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型，示例代码如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 启用 --strictNullChecks</span>
<span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 运行正确</span>
x <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>    <span class="token comment">// 运行正确</span>
x <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">// 运行正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h3>
<p>never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。</p>
<h3 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h3>
<p>任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况。</p>
<p>变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">// 数字类型</span>
x <span class="token operator">=</span> <span class="token string">'I am who I am'</span><span class="token punctuation">;</span>    <span class="token comment">// 字符串类型</span>
x <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>    <span class="token comment">// 布尔类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">ifItExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 正确，ifItExists方法在运行时可能存在，但这里并不会检查</span>
x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义存储各种类型数据的数组时，示例代码如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> arrayList<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'fine'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arrayList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"abc"</span>
a <span class="token operator">=</span> <span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用联合类型注释时，使用某个方法但其中一个类型没有这个方法时，typescript 编译时会报错，所以此时必须先判断类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printValue</span><span class="token punctuation">(</span>val<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2>
<p>使用类型别名可以给需要定义的类型起一个别名，然后在声明时使用，使用 <code v-pre>type</code> 关键字来使用类型别名</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
	y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printCoord</span><span class="token punctuation">(</span>pt<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型别名可以扩展</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Bear</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
	honey<span class="token operator">:</span><span class="token builtin">boolean</span>
    name<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bear<span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">"winnie"</span><span class="token punctuation">,</span>
	honey<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
    
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2>
<h3 id="显式声明" tabindex="-1"><a class="header-anchor" href="#显式声明" aria-hidden="true">#</a> 显式声明</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let [变量名] : [类型] = 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let str: string = "abcdefg"
let num: number = 123456
let fag: boolean = true
let xarr:number[] = [1,2,3,4,5]
let yarr: string[] = ["a","b"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式声明" tabindex="-1"><a class="header-anchor" href="#隐式声明" aria-hidden="true">#</a> 隐式声明</h3>
<p>当声明变量时不传入变量的类型，typescript 会根据声明的值隐式的判断出变量的类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = "hello world!" // 会自动判断为字符串类型
a = 123  // 报错，因为前面已经判断为字符串类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<p>基本声明：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">"hello world"</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定返回值类型注释</p>
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
