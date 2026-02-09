<template><div><h1 id="promise-与-异步" tabindex="-1"><a class="header-anchor" href="#promise-与-异步" aria-hidden="true">#</a> Promise 与 异步</h1>
<h2 id="_1-promise" tabindex="-1"><a class="header-anchor" href="#_1-promise" aria-hidden="true">#</a> 1. Promise</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<p>ECMAscript 6 原生提供了 Promise 对象。Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。</p>
<h3 id="_1-2-特点" tabindex="-1"><a class="header-anchor" href="#_1-2-特点" aria-hidden="true">#</a> 1.2 特点</h3>
<p>对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：</p>
<ul>
<li>
<p>pengding：初始状态，不代表成功或者失败。</p>
</li>
<li>
<p>fulfilled：意味着操作成功完成。</p>
</li>
<li>
<p>rejected： 意味着操作失败。</p>
</li>
</ul>
<p>只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变。</p>
<p>一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。</p>
<p>有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调地狱。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</p>
<h3 id="_1-4-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-4-简单使用" aria-hidden="true">#</a> 1.4 简单使用</h3>
<p>使用 new 来调用 Promise 的构造器来进行实例化。</p>
<ul>
<li>
<p>resolve将Promise的状态置为fullfiled。</p>
</li>
<li>
<p>reject是将Promise的状态置为rejected。</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 异步处理</span>
	<span class="token comment">// 处理结束后、调用resolve 或 reject</span>
	<span class="token comment">//当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)</span>
     <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"成功!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//代码正常执行！</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
myPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">successMessage</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//successMessage的值是上面调用resolve(...)方法传入的值.</span>
    <span class="token comment">//successMessage参数不一定非要是字符串类型，这里只是举个例子</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"Yay! "</span> <span class="token operator">+</span> successMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例化的 <code v-pre>promise</code> 对象会立即执行里面的内容，所以我们一般将需要<code v-pre>promise</code> 对象放在函数中。再需要的时候再去执行这个函数。</p>
<p>对于已经实例化过的 promise 对象可以调用 promise.then() 方法，传递 resolve 和 reject 方法作为回调。promise.then() 是 promise 最为常用的方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>promise简化了对error的处理，上面的代码我们也可以这样写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">URL</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token function">resolve</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">"/try/ajax/testpromise.php"</span><span class="token punctuation">;</span> 
<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'内容是：'</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'错误：'</span> <span class="token operator">+</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-链式操作" tabindex="-1"><a class="header-anchor" href="#_1-5-链式操作" aria-hidden="true">#</a> 1.5 链式操作</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务1执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务2执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runAsync3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务3执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">runAsync3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以接收到数据</span>
<span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">'直接返回数据'</span><span class="token punctuation">;</span>  <span class="token comment">//这里直接返回数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-并行操作" tabindex="-1"><a class="header-anchor" href="#_1-6-并行操作" aria-hidden="true">#</a> 1.6 并行操作</h3>
<p>Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务1执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务2执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runAsync3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务3执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


Promise
    <span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">runAsync3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>  <span class="token comment">// [ '随便什么数据1', '随便什么数据2', '随便什么数据3' ]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用Promise.all来执行，all接收一个数组参数，里面的值最终都算返回Promise对象。这样，三个异步操作的并行执行的，</p>
<p>all方法的效果实际上是「谁跑的慢，以谁为准执行回调」，那么相对的就有另一个方法「谁跑的快，以谁为准执行回调」，这就是race方法，这race的用法与all一样。</p>
<p>虽然 race 与 all 方法都是并行执行，但是与all 不同的是，race 在最快的那个方法执行完后then 里的回调函数开始执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务1执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务2执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runAsync3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//做一些异步操作</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'异步任务3执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'随便什么数据3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


Promise
    <span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">runAsync1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">runAsync2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">runAsync3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment">// "随便什么数据1"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-async-与-await" tabindex="-1"><a class="header-anchor" href="#_2-async-与-await" aria-hidden="true">#</a> 2. async 与 await</h2>
<p>async 是“异步”的简写，而 await 可以认为是 async wait 的简写。 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。</p>
<p>await 只能出现在 async 函数中。</p>
<h3 id="_2-1-async-的作用" tabindex="-1"><a class="header-anchor" href="#_2-1-async-的作用" aria-hidden="true">#</a> 2.1 async 的作用</h3>
<p>async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象。如果在函数中 <code v-pre>return</code> 一个直接量，async 会把这个直接量通过 <code v-pre>Promise.resolve()</code> 封装成 Promise 对象。</p>
<p><code v-pre>Promise.resolve(x)</code> 可以看作是 <code v-pre>new Promise(resolve =&gt; resolve(x))</code> 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"hello world"</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// promise {"hello world"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：<code v-pre>then()</code> 链来处理这个 Promise 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 async 函数没有返回值，则为undefined</span>
    <span class="token keyword">return</span> <span class="token string">"hello world"</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>  <span class="token comment">// hello world</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-await-的作用" tabindex="-1"><a class="header-anchor" href="#_2-2-await-的作用" aria-hidden="true">#</a> 2.2 await 的作用</h3>
<p>一般来说，都认为 await 是在等待一个 async 函数完成。不过按<a href="https://link.segmentfault.com/?enc=HB%2BRtEqSbSV%2BOdMW9vfaAw%3D%3D.9ru4rXKwPAxROFddGqG8ejjpE6KIuwj%2BW9nxano%2B4a5j4pW%2BOMWL3Z%2Bc3PEakYKUV1xzqTf5qH2JOrWlHSRFH454XuTd896Nd3gL%2FWjNdPU%3D" target="_blank" rel="noopener noreferrer">语法说明<ExternalLinkIcon/></a>，await 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值。</p>
<p>因为 async 函数返回一个 Promise 对象，所以 await 可以用于等待一个 async 函数的返回值——这也可以说是 await 在等 async 函数，但要清楚，它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量的。所以下面这个示例完全可以正确运行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"something"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"hello async"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>await</code> 是个运算符，用于组成表达式，<code v-pre>await </code>表达式的运算结果取决于它等的东西。</p>
<p>如果 <code v-pre>await</code> 等到的不是一个 <code v-pre>Promise</code> 对象，那 <code v-pre>await</code> 表达式的运算结果就是它等到的东西。</p>
<p>如果 <code v-pre>await</code> 等到的是一个 <code v-pre>Promise </code>对象，await 会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。</p>
<p>虽然  <code v-pre>await</code> 等到的是一个 <code v-pre>Promise </code>对象时会阻塞后面的代码，但是async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行，这也是await 必须用在 async 函数中的原因。</p>
</div></template>
