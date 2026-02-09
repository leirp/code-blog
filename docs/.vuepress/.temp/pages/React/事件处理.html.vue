<template><div><h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2>
<p>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</p>
<p>使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import ReactDOM from 'react-dom/client';
const clickMe = function (e) {
  e.preventDefault()
  alert('点击了')
}
const Element = &lt;a onClick={clickMe}>click me&lt;/a>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    Element
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault` 。</p>
</div>
</div></template>
