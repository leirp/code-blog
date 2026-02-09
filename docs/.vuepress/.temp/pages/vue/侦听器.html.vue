<template><div><h1 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> 侦听器</h1>
<p>计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态。可以使用 <code v-pre>watch</code> 在每次响应式属性发生变化时触发一个函数。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>question<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ answer }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Composition API</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> question <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> answer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>question<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newQuestion<span class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newQuestion<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://yesno.wtf/api'</span><span class="token punctuation">)</span>
      answer<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>answer
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      answer<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'Error! Could not reach the API. '</span> <span class="token operator">+</span> error
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Options API</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">question</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">answer</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token string">'loading...'</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://yesno.wtf/api'</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">answer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token string">'Error! Could not reach the API. '</span> <span class="token operator">+</span> error
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">question</span><span class="token punctuation">(</span><span class="token parameter">newQuestion<span class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newQuestion<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深层侦听器" tabindex="-1"><a class="header-anchor" href="#深层侦听器" aria-hidden="true">#</a> 深层侦听器</h2>
<p>在 <code v-pre>Options API</code>中，watch <code v-pre>watch</code> 默认是浅层的：被侦听的属性，仅在被赋新值时，才会触发回调函数，而嵌套属性的变化不会触发（如给对象的某个属性赋值时）。如果想侦听所有嵌套的变更，你需要深层侦听器.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Options API</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">someObject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 注意：在嵌套的变更中，</span>
        <span class="token comment">// 只要没有替换对象本身，</span>
        <span class="token comment">// 那么这里的 `newValue` 和 `oldValue` 相同</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在 <code v-pre>Composition API</code> 中，直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 在嵌套的属性变更时触发</span>
  <span class="token comment">// 注意：`newValue` 此处和 `oldValue` 是相等的</span>
  <span class="token comment">// 因为它们是同一个对象！</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>count<span class="token operator">++</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比之下，一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调，也可以显式地加上 <code v-pre>deep</code> 选项，强制转成深层侦听器</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>someObject<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 仅当 state.someObject 被替换时触发</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// 加入 deep</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>someObject<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：`newValue` 此处和 `oldValue` 是相等的</span>
    <span class="token comment">// *除非* state.someObject 被整个替换了</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
