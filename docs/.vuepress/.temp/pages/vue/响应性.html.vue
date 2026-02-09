<template><div><h1 id="响应性" tabindex="-1"><a class="header-anchor" href="#响应性" aria-hidden="true">#</a> 响应性</h1>
<h2 id="声明响应式状态" tabindex="-1"><a class="header-anchor" href="#声明响应式状态" aria-hidden="true">#</a> 声明响应式状态</h2>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3>
<p>选用选项式 API 时，会用 <code v-pre>data</code> 选项来声明组件的响应式状态。此选项的值应为返回一个对象的函数。Vue 将在创建新组件实例的时候调用此函数，并将函数返回的对象用响应式系统进行包装。此对象的所有顶层属性都会被代理到组件实例 (即方法和生命周期钩子中的 <code v-pre>this</code>) 上。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `this` 指向当前组件实例</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// => 1</span>
    <span class="token comment">// 数据属性也可以被更改</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例上的属性仅在实例首次创建时被添加，因此需要确保它们都出现在 <code v-pre>data</code> 函数返回的对象上。若所需的值还未准备好，在必要时也可以使用 <code v-pre>null</code>、<code v-pre>undefined</code> 或者其他一些值占位。虽然也可以不在 <code v-pre>data</code> 上定义，直接向组件实例添加新属性，但这个属性将无法触发响应式更新。</p>
<p>在 Vue 3 中，数据是基于 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">JavaScript Proxy（代理）<ExternalLinkIcon/></a> 实现响应式的。与 Vue 2 不同的是，这里原始的 <code v-pre>newObject</code> 不会变为响应式：请确保始终通过 <code v-pre>this</code> 来访问响应式状态。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">someObject</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>someObject <span class="token operator">=</span> newObject
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObject <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>someObject<span class="token punctuation">)</span> <span class="token comment">// false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h3>
<p>使用 <a href="https://cn.vuejs.org/api/reactivity-core.html#reactive" target="_blank" rel="noopener noreferrer"><code v-pre>reactive()</code><ExternalLinkIcon/></a> 函数创建一个响应式对象或数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      increment
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>reactive()</code> 的局限性：</p>
<ul>
<li>仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。</li>
<li>因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失，同时这也意味着当我们将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，我们会失去响应性</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）</span>
state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// n 是一个局部变量，同 state.count</span>
<span class="token comment">// 失去响应性连接</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> state<span class="token punctuation">.</span>count
<span class="token comment">// 不影响原始的 state</span>
n<span class="token operator">++</span>
<span class="token comment">// count 也和 state.count 失去了响应性连接</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> state
<span class="token comment">// 不会影响原始的 state</span>
count<span class="token operator">++</span>
<span class="token comment">// 该函数接收一个普通数字，并且</span>
<span class="token comment">// 将无法跟踪 state.count 的变化</span>
<span class="token function">callSomeFunction</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3>
<p><code v-pre>reactive()</code> 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。为此，Vue 提供了一个 <a href="https://cn.vuejs.org/api/reactivity-core.html#ref" target="_blank" rel="noopener noreferrer"><code v-pre>ref()</code><ExternalLinkIcon/></a> 方法来允许我们创建可以使用任何值类型的响应式 <strong>ref</strong>，<code v-pre>ref()</code> 将传入参数的值包装为一个带 <code v-pre>.value</code> 属性的 ref 对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// { value: 0 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 0</span>
count<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和响应式对象的属性类似，ref 的 <code v-pre>.value</code> 属性也是响应式的。同时，当值为对象类型时，会用 <code v-pre>reactive()</code> 自动转换它的 <code v-pre>.value</code>。这个对象将通过 <a href="https://cn.vuejs.org/api/reactivity-core.html#reactive" target="_blank" rel="noopener noreferrer">reactive()<ExternalLinkIcon/></a> 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。</p>
<p>一个包含对象类型值的 ref 可以响应式地替换整个对象，ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> objectRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 这是响应式的替换</span>
objectRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 该函数接收一个 ref</span>
<span class="token comment">// 需要通过 .value 取值</span>
<span class="token comment">// 但它会保持响应性</span>
<span class="token function">callSomeFunction</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
<span class="token comment">// 仍然是响应式的</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token operator">=</span> obj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简言之，<code v-pre>ref()</code> 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。</p>
<p>ref 在模板中的解包：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ count }} <span class="token comment">&lt;!-- 无需 .value --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， foo 是顶层属性，但 object.foo 不是，此时就会渲染错误。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const object = { foo: ref(1) }
{{ object.foo + 1 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过解构赋值的方式：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> object
<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ foo+2 }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组和集合类型的 ref 解包：</p>
<p>跟响应式对象不同，当 ref 作为响应式数组或像 <code v-pre>Map</code> 这种原生集合类型的元素被访问时，不会进行解包。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> books <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'Vue 3 Guide'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 这里需要 .value</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>books<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'count'</span><span class="token punctuation">,</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 这里需要 .value</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'count'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h3>
<p>接受一个对象 (不论是响应式还是普通的) 或是一个 <a href="https://cn.vuejs.org/api/reactivity-core.html#ref" target="_blank" rel="noopener noreferrer">ref<ExternalLinkIcon/></a>，返回一个原值的只读代理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 用来做响应性追踪</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copy<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 更改源属性会触发其依赖的侦听器</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  original<span class="token punctuation">.</span>count<span class="token operator">++</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 更改该只读副本将会失败，并会得到一个警告</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  copy<span class="token punctuation">.</span>count<span class="token operator">++</span>  <span class="token comment">// warning!</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isref" tabindex="-1"><a class="header-anchor" href="#isref" aria-hidden="true">#</a> isRef</h3>
<p>检查某个值是否为 ref</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">请注意，返回值是一个类型判定</span> <span class="token punctuation">(</span>type predicate<span class="token punctuation">)</span>，这意味着 isRef 可以被用作类型守卫
<span class="token keyword">let</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> unknown
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// foo 的类型被收窄为了 Ref&lt;unknown></span>
  foo<span class="token punctuation">.</span>value
<span class="token punctuation">}</span> <span class="token comment">// </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>请注意，返回值是一个类型判定 (type predicate)，这意味着 isRef 可以被用作类型守卫</p>
</div>
<h3 id="isreactive" tabindex="-1"><a class="header-anchor" href="#isreactive" aria-hidden="true">#</a> isReactive</h3>
<p>检查一个对象是否是由 <a href="https://cn.vuejs.org/api/reactivity-core.html#reactive" target="_blank" rel="noopener noreferrer"><code v-pre>reactive()</code><ExternalLinkIcon/></a> 或 <a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive" target="_blank" rel="noopener noreferrer"><code v-pre>shallowReactive()</code><ExternalLinkIcon/></a> 创建的代理。</p>
<h3 id="isreadonly" tabindex="-1"><a class="header-anchor" href="#isreadonly" aria-hidden="true">#</a> isReadonly</h3>
<p>检查一个对象是否是由 <a href="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank" rel="noopener noreferrer"><code v-pre>readonly()</code><ExternalLinkIcon/></a> 或 <a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly" target="_blank" rel="noopener noreferrer"><code v-pre>shallowReadonly()</code><ExternalLinkIcon/></a> 创建的代理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> isRef<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> isReactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> isReadonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copyData <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"---------isRef"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>copyData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"---------isReactive"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>copyData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"isReadonly"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>copyData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>需要注意的是，如果 readOnly 接受的是 ref 或者 reavtive 代理的值，则使用 isRef 或 isReavtive 来检查这个值时返回为 true</p>
</div>
<h3 id="isproxy" tabindex="-1"><a class="header-anchor" href="#isproxy" aria-hidden="true">#</a> isProxy</h3>
<p>检查一个对象是否是由 <a href="https://cn.vuejs.org/api/reactivity-core.html#reactive" target="_blank" rel="noopener noreferrer"><code v-pre>reactive()</code><ExternalLinkIcon/></a>、<a href="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank" rel="noopener noreferrer"><code v-pre>readonly()</code><ExternalLinkIcon/></a>、<a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive" target="_blank" rel="noopener noreferrer"><code v-pre>shallowReactive()</code><ExternalLinkIcon/></a> 或 <a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly" target="_blank" rel="noopener noreferrer"><code v-pre>shallowReadonly()</code><ExternalLinkIcon/></a> 创建的代理。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>需要注意的是，isProxy 仅限于上述代理方式的检查，如果使用 ref ，则会返回  false</p>
</div>
<h3 id="unref" tabindex="-1"><a class="header-anchor" href="#unref" aria-hidden="true">#</a> unref</h3>
<p>如果参数是 ref，则返回内部值，否则返回参数本身。这是 <code v-pre>val = isRef(val) ? val.value : val</code> 计算的一个语法糖。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">,</span>unref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"leirp"</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//leirp</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h3>
<p>基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span>toRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"leirp"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">"lx"</span>
<span class="token comment">// 修改 name 的值,person.name 的值也相应改变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span> lx
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"hell"</span>
<span class="token comment">// 修改person.name 的值，name 的值也相应改变。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span>   <span class="token comment">// hell</span>

age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">15</span>
<span class="token comment">// 还是原来的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>使用 ref 直接赋值，不会和原始值保持同步，因为ref 接收到的是一个纯数值。</p>
</div>
<p><code v-pre>toRef()</code> 这个函数在你想把一个 prop 的 ref 传递给一个组合式函数时会很有用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>

<span class="token comment">// 将 `props.foo` 转换为 ref，然后传入</span>
<span class="token comment">// 一个组合式函数</span>
<span class="token function">useSomeFeature</span><span class="token punctuation">(</span><span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code v-pre>toRef</code> 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效。尝试将新的值传递给 ref 等效于尝试直接更改 props，这是不允许的。在这种场景下，你可能可以考虑使用带有 <code v-pre>get</code> 和 <code v-pre>set</code> 的 <a href="https://cn.vuejs.org/api/reactivity-core.html#computed" target="_blank" rel="noopener noreferrer"><code v-pre>computed</code><ExternalLinkIcon/></a> 替代。</p>
<p>即使源属性当前不存在，<code v-pre>toRef()</code> 也会返回一个可用的 ref。这让它在处理可选 props 的时候格外实用，相比之下 <a href="https://cn.vuejs.org/api/reactivity-utilities.html#torefs" target="_blank" rel="noopener noreferrer"><code v-pre>toRefs</code><ExternalLinkIcon/></a> 就不会为可选 props 创建对应的 refs。</p>
<h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h3>
<p>将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 <a href="https://cn.vuejs.org/api/reactivity-utilities.html#toref" target="_blank" rel="noopener noreferrer"><code v-pre>toRef()</code><ExternalLinkIcon/></a> 创建的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"leirp"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> personAsToRefs <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"lx"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personAsToRefs<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// lx</span>

personAsToRefs<span class="token punctuation">.</span>age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">15</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">//15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当从组合式函数中返回响应式对象时，<code v-pre>toRefs</code> 相当有用。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// ...基于状态的操作逻辑</span>
  <span class="token comment">// 在返回时都转为 ref</span>
  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 可以解构而不会失去响应性</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
