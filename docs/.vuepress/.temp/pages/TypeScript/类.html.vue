<template><div><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1>
<h2 id="标注类型" tabindex="-1"><a class="header-anchor" href="#标注类型" aria-hidden="true">#</a> 标注类型</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>string
    <span class="token literal-property property">age</span><span class="token operator">:</span> number
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">str</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'working...'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> Grade <span class="token punctuation">{</span>
    one<span class="token operator">=</span><span class="token string">'三年级'</span><span class="token punctuation">,</span>
    two<span class="token operator">=</span><span class="token string">"二年级"</span><span class="token punctuation">,</span>
    three <span class="token operator">=</span><span class="token string">"一年级"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token literal-property property">grade</span><span class="token operator">:</span>Grade
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token literal-property property">grade</span><span class="token operator">:</span>Grade</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
    <span class="token punctuation">}</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	
        <span class="token keyword">return</span> <span class="token string">'study...'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">'sun'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span>Grade<span class="token punctuation">.</span>three<span class="token punctuation">)</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Student</code> 是一个_派生类_，它派生自 <code v-pre>Person</code> <em>基类</em>，通过 <code v-pre>extends</code> 关键字。 派生类通常被称作_子类_，基类通常被称作_超类_</p>
<p>派生类包含了一个构造函数,它会执行基类的构造函数。 而且，在构造函数里访问 <code v-pre>this</code> 的属性之前，我们_一定_要调用 <code v-pre>super()</code> 。 这个是 <code v-pre>TypeScript </code>强制执行的一条重要规则。</p>
<h2 id="公共-私有与受保护修饰符" tabindex="-1"><a class="header-anchor" href="#公共-私有与受保护修饰符" aria-hidden="true">#</a> 公共，私有与受保护修饰符</h2>
<h3 id="public-修饰符" tabindex="-1"><a class="header-anchor" href="#public-修饰符" aria-hidden="true">#</a> <code v-pre>Public</code> 修饰符</h3>
<p>在 typescript 中，如果没有标注任何修饰符，则成员都默认为 <code v-pre>public</code>，当然也可以显式的标注出修饰符。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">public</span> <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">say</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'working...'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="private-私有修饰符" tabindex="-1"><a class="header-anchor" href="#private-私有修饰符" aria-hidden="true">#</a> <code v-pre>private</code> 私有修饰符</h3>
<p>当成员被标记成 <code v-pre>private</code> 时，它就不能在声明它的类的外部访问。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span>string
    <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number
    <span class="token keyword">public</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我今年 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 了</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'working...'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'lei'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// err 属性“age”为私有属性，只能在类“Person”中访问。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>protected</code> 受保护的修饰符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token literal-property property">name</span><span class="token operator">:</span>string
    <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">str</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'working...'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> Grade <span class="token punctuation">{</span>
    one<span class="token operator">=</span><span class="token string">'三年级'</span><span class="token punctuation">,</span>
    two<span class="token operator">=</span><span class="token string">"二年级"</span><span class="token punctuation">,</span>
    three <span class="token operator">=</span><span class="token string">"一年级"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token literal-property property">grade</span><span class="token operator">:</span>Grade
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token literal-property property">grade</span><span class="token operator">:</span>Grade</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
    <span class="token punctuation">}</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 正在学习中</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我今年 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 了</span><span class="token template-punctuation string">`</span></span> <span class="token comment">// err 属性“age”为私有属性，只能在类“Person”中访问。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">'sun'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span>Grade<span class="token punctuation">.</span>three<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment">// err 属性“name”受保护，只能在类“Person”及其子类中访问。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">`protected` 修饰符与 `private` 修饰符的行为很相似，但有一点不同， `protected` 成员在派生类中仍然可以访问。</p>
<h3 id="readonly-只读修饰符" tabindex="-1"><a class="header-anchor" href="#readonly-只读修饰符" aria-hidden="true">#</a> <code v-pre>readonly</code> 只读修饰符</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'working...'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'lei'</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span> <span class="token comment">// error 无法为“age”赋值，因为它是只读属性.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h2>
<p>类的静态成员，存在于类本身而不是类的实例，使用static 定义。0</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">static</span> ancestors <span class="token operator">=</span> <span class="token string">'monkey'</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>ancestors<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>
