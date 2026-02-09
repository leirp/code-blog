<template><div><h1 id="组合式api" tabindex="-1"><a class="header-anchor" href="#组合式api" aria-hidden="true">#</a> 组合式API</h1>
<h2 id="_1-什么是组合式api" tabindex="-1"><a class="header-anchor" href="#_1-什么是组合式api" aria-hidden="true">#</a> 1.  什么是组合式API</h2>
<p>​</p>
<p>他是一种一组低侵入式的、函数式的 API，使得我们能够更灵活地「组合」组件的逻辑</p>
<h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h2>
<p>使用传统的option 配置方法:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'HelloWorld'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">double</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">*</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用  Composition API</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 定义数据</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token comment">// 使用 computed 计算属性</span>
      <span class="token literal-property property">double</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>data<span class="token punctuation">.</span>count<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>data<span class="token punctuation">,</span>add<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-加载顺序与生命周期" tabindex="-1"><a class="header-anchor" href="#_3-加载顺序与生命周期" aria-hidden="true">#</a> 3. 加载顺序与生命周期</h2>
<h3 id="_3-1-加载顺序" tabindex="-1"><a class="header-anchor" href="#_3-1-加载顺序" aria-hidden="true">#</a> 3.1 加载顺序</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"setup"</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"this"</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Created"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"beforeMount"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Mounted"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setup
this undefined
beforeCreate
Created
beforeMount
Mounted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到setup 在beforeCreate 之前，此时vue 实例还未加载，也无法使用this。</p>
<h3 id="_3-2-生命周期" tabindex="-1"><a class="header-anchor" href="#_3-2-生命周期" aria-hidden="true">#</a> 3.2 生命周期</h3>
<p>虽然使用组合式API 的时候也可以在 setup 函数外部使用原始的生命周期函数，但却无法调用setup 中的变量及方法，所以vue 在setup 中也提供了单独的生命周期函数。</p>
<p>下面为组合式API 与普通API 生命周期的对应关系：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>beforeCreate  -----> setup
created       -----> setup
beforeMount   -----> onBeforeMount
mounted       -----> onMounted
beforeUnmount -----> onBeforeUnount
unmounted     -----> onUnounted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-参数" tabindex="-1"><a class="header-anchor" href="#_4-参数" aria-hidden="true">#</a> 4. 参数</h2>
<p>setup 函数提供了两个参数 props 和 context</p>
<ul>
<li>props: 用来接收父组件传递过来的参数，必须使用 props 属性接收后才能在 setup 种的props 种调用出来。</li>
<li>context : 函数的上下文。其中包含了</li>
</ul>
<p>props 的使用:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">world</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>world<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>context 的使用：</p>
<ul>
<li>context.attr : 属性,未通过props 属性接收的数据可以使用context.attrs.值获取</li>
<li>context.slots : 获取插槽</li>
<li>context.parent: 父对象</li>
<li>context.root：根</li>
<li>context.rmit: 给父组件传值</li>
<li>context.refs：</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">one</span><span class="token operator">:</span>
        <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">two</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>one<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>two<span class="token punctuation">)</span>
    <span class="token comment">// 未通过props 属性接收的值可以通过attrs 接收</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>three<span class="token punctuation">)</span>
    <span class="token comment">// 获取插槽</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>slots<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取缺省的插槽</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// emit 给父组件传值</span>
    context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span><span class="token string">'给父组件传值'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-常用api" tabindex="-1"><a class="header-anchor" href="#_5-常用api" aria-hidden="true">#</a> 5. 常用API</h2>
<h3 id="_5-1-ref-的使用" tabindex="-1"><a class="header-anchor" href="#_5-1-ref-的使用" aria-hidden="true">#</a> 5.1 ref 的使用：</h3>
<p><code v-pre>ref </code>函数用来给定的值创建一个响应式数据对象，<code v-pre>ref()</code>的返回值是一个对象，这个对象上只包含一个 value 的属性</p>
<p><code v-pre>isRef</code> 用来判断变量或常量是否时通过 <code v-pre>ref</code> 来声明</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>ref<span class="token punctuation">,</span>isRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 直接声明变量时变量为非响应的，当在改变num 的值的时候 html 页面上的num 并不会随之改变。</span>
    <span class="token keyword">let</span> <span class="token function-variable function">changeNum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      num<span class="token operator">++</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 可以通过ref 声明值使其变成响应式，在模板中直接调用如 {{num2}}，在script 种通过 变量.value 调用</span>
    <span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> <span class="token function-variable function">changeNum2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      num2<span class="token punctuation">.</span>value <span class="token operator">=</span> newValue
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> num3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token comment">// 判断值是否是通过ref 声明的，也就是是否是响应式</span>
    <span class="token function">isRef</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token operator">?</span> num3<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token number">20</span><span class="token operator">:</span>num3<span class="token operator">=</span><span class="token number">20</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      changeNum<span class="token punctuation">,</span>
      num<span class="token punctuation">,</span>
      num2<span class="token punctuation">,</span>
      changeNum2
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-reactive-函数的使用" tabindex="-1"><a class="header-anchor" href="#_5-2-reactive-函数的使用" aria-hidden="true">#</a> 5.2 reactive 函数的使用：</h3>
<p><code v-pre>reactive</code> 函数用来创建一个响应式对象</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>username:{{user.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>age:{{user.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'alex'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'18'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span>
       
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用readonly 可以将响应式数据转换为非响应式数据，使用频率较少</span>
    <span class="token comment">// const user2 = readonly(user)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用<code v-pre>reactive</code>来创建一个响应式对象时，通过 <code v-pre>...</code> 解构时会变成非响应式的，为了解决这个问题，可以使用 <code v-pre>toRefs</code>：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>username:{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>age:{{age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>toRefs<span class="token punctuation">,</span>readonly<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'alex'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'18'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-computed-计算属性" tabindex="-1"><a class="header-anchor" href="#_5-3-computed-计算属性" aria-hidden="true">#</a> 5.3 computed 计算属性</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>firstName:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.firstName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>lastName:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.lastName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>fullName:{{fullName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">,</span>isRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">'alex'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">'lei'</span><span class="token punctuation">,</span>
      <span class="token comment">// 也可以将计算属性直接写在对象中,但不建议这么做</span>
      <span class="token comment">// fullName: computed(()=>{})</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">,</span>
      fullName
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-watch-数据监听" tabindex="-1"><a class="header-anchor" href="#_5-4-watch-数据监听" aria-hidden="true">#</a> 5.4 watch 数据监听</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>a:{{a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>b:{{b}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a++<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>b++<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>username:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>age: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">,</span>isRef<span class="token punctuation">,</span>watch<span class="token punctuation">,</span>toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">'leirp'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 默认监听</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token comment">// 需要执行才能监听</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听单个值</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token operator">+</span><span class="token string">"++++++++"</span><span class="token operator">+</span>oldVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听多个值</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newValA<span class="token punctuation">,</span>newValB<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>oldValA<span class="token punctuation">,</span>oldValB<span class="token punctuation">]</span><span class="token punctuation">,</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValA<span class="token operator">+</span> <span class="token string">"++++++++"</span> <span class="token operator">+</span> oldValA<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValB<span class="token operator">+</span> <span class="token string">"--------"</span> <span class="token operator">+</span> oldValB<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用immediate 来控制第一次绑定值时也监听变化</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newValA<span class="token punctuation">,</span>newValB<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>oldValA<span class="token punctuation">,</span>oldValB<span class="token punctuation">]</span><span class="token punctuation">,</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValA<span class="token operator">+</span> <span class="token string">"++++++++"</span> <span class="token operator">+</span> oldValA<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValB<span class="token operator">+</span> <span class="token string">"--------"</span> <span class="token operator">+</span> oldValB<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听对象的值</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>user<span class="token punctuation">.</span>a<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValA<span class="token punctuation">,</span>oldValA</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValA<span class="token operator">+</span> <span class="token string">"++++++++"</span> <span class="token operator">+</span> oldValA<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听对象的多个值</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>user<span class="token punctuation">.</span>a<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>user<span class="token punctuation">.</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newValA<span class="token punctuation">,</span>newValB<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>oldValA<span class="token punctuation">,</span>oldValB<span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValA<span class="token operator">+</span> <span class="token string">"++++++++"</span> <span class="token operator">+</span> oldValA<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValB<span class="token operator">+</span> <span class="token string">"--------"</span> <span class="token operator">+</span> oldValB<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// watch 也可以直接监听对象</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newUser<span class="token punctuation">,</span>oldUser</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      a<span class="token punctuation">,</span>
      b<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 wtach 可以用来监听以外，组合式API 还提供了另外一个函数：<code v-pre>watchEffect</code>，但使用这个函数实现的功能 <code v-pre>watch</code> 都能实现</p>
<h2 id="_6-provide-与-inject" tabindex="-1"><a class="header-anchor" href="#_6-provide-与-inject" aria-hidden="true">#</a> 6.  provide 与 inject</h2>
<p><code v-pre>provide</code> 与 <code v-pre>inject</code> 允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，在起上下游关系成立的时间里始终生效。与选项API 不同的是：他们是响应式的，修改祖先组件后子孙组件也随之改变，且修改子孙组件祖先组件也随之改变，并且可实时刷新到页面上</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>// 祖先组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>这是根组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">'./components/HelloWorld.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>provide<span class="token punctuation">,</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HelloWorld
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'这是一个祖先组件的标题'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">'leirp'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">,</span>title<span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      title
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

// 子孙组件

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>这是子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>username:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>age: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">,</span>isRef<span class="token punctuation">,</span>watch<span class="token punctuation">,</span>toRefs<span class="token punctuation">,</span>inject<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Child"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      title<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
