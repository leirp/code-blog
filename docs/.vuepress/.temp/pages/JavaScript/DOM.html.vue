<template><div><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1>
<h2 id="_1-dom-的概念" tabindex="-1"><a class="header-anchor" href="#_1-dom-的概念" aria-hidden="true">#</a> 1. DOM 的概念</h2>
<h3 id="_1-1-什么是dom" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是dom" aria-hidden="true">#</a> 1.1 什么是DOM</h3>
<p>HTML DOM是HTML Document Object Model(<a href="https://baike.baidu.com/item/%E6%96%87%E6%A1%A3%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B/1033822" target="_blank" rel="noopener noreferrer">文档对象模型<ExternalLinkIcon/></a>)的缩写，HTML DOM则是专门适用于HTML/XHTML的文档对象模型。是一套对文档的内容进行抽象和概念化的方法。可以将HTML DOM理解为网页的API。当网页被加载时，浏览器会创建页面的文档对象模型</p>
<h3 id="_1-2-dom-树" tabindex="-1"><a class="header-anchor" href="#_1-2-dom-树" aria-hidden="true">#</a> 1.2 DOM 树</h3>
<p><img src="@source/JavaScript/images/dom.png" alt="图片"></p>
<h3 id="_1-3-dom节点" tabindex="-1"><a class="header-anchor" href="#_1-3-dom节点" aria-hidden="true">#</a> 1.3 DOM节点</h3>
<p>DOM标准规定HTML文档中的每个成分都是一个节点(node)：</p>
<ul>
<li>文档节点(document对象)：代表整个文档</li>
<li>元素节点(element 对象)：代表一个元素（标签）</li>
<li>文本节点(text对象)：代表元素（标签）中的文本</li>
<li>属性节点(attribute对象)：代表一个属性，元素（标签）才有属性</li>
<li>注释是注释节点(comment对象)</li>
</ul>
<p>JavaScript 可以通过DOM创建动态的 HTML：</p>
<ul>
<li>JavaScript 能够改变页面中的所有 HTML 元素</li>
<li>JavaScript 能够改变页面中的所有 HTML 属性</li>
<li>JavaScript 能够改变页面中的所有 CSS 样式</li>
<li>JavaScript 能够对页面中的所有事件做出反应</li>
</ul>
<h2 id="_2-dom获取节点方法" tabindex="-1"><a class="header-anchor" href="#_2-dom获取节点方法" aria-hidden="true">#</a> 2.  DOM获取节点方法</h2>
<h3 id="_2-1-获取元素节点" tabindex="-1"><a class="header-anchor" href="#_2-1-获取元素节点" aria-hidden="true">#</a> 2.1 获取元素节点</h3>
<h4 id="getelementbyid" tabindex="-1"><a class="header-anchor" href="#getelementbyid" aria-hidden="true">#</a> getElementById()</h4>
<p>返回一个匹配特定 ID的元素（element 对象）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="getelementsbyclassname" tabindex="-1"><a class="header-anchor" href="#getelementsbyclassname" aria-hidden="true">#</a> getElementsByClassName()</h4>
<p>返回一个包含了所有指定类名的子元素的类数组对象。当在document对象上调用时，会搜索整个DOM文档，包含根节点。你也可以在任意元素上调用getElementsByClassName() 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 此api 不支持ie8 j</span>
<span class="token keyword">var</span> elements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
<span class="token keyword">var</span> elements <span class="token operator">=</span> rootElement<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>elements 是一个实时集合，包含了找到的所有元素。</li>
<li>names 是一个字符串，表示要匹配的类名列表；类名通过空格分隔</li>
<li>getElementsByClassName 可以在任何元素上调用，不仅仅是 document。 调用这个方法的元素将作为本次查找的根元素.</li>
</ul>
<h4 id="getelementsbytagname-tagname" tabindex="-1"><a class="header-anchor" href="#getelementsbytagname-tagname" aria-hidden="true">#</a> getElementsByTagName(tagName)</h4>
<p>返回一个包括所有给定标签名称的元素的HTML集合<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection" target="_blank" rel="noopener noreferrer"><code v-pre>HTMLCollection</code><ExternalLinkIcon/></a>(NodeList)。 整个文件结构都会被搜索，包括根节点。返回的 <code v-pre>HTML集合</code>是动态的, 意味着它可以自动更新自己来保持和 DOM 树的同步而不用再次调用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> elements <span class="token operator">=</span> domcument<span class="token punctuation">.</span><span class="token function">getElemenstByTagName</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
<span class="token keyword">var</span> elements <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getElemenstByTagName</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>elements</code> 是一个由发现的元素出现在树中的顺序构成的动态的HTML集合</li>
<li><code v-pre>name</code> 是一个代表元素的名称的字符串。特殊字符 &quot;*&quot; 代表了所有元素。</li>
</ul>
<h4 id="getelementsbyname-name" tabindex="-1"><a class="header-anchor" href="#getelementsbyname-name" aria-hidden="true">#</a> getElementsByName(name)</h4>
<p>根据给定的<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/name" target="_blank" rel="noopener noreferrer"><code v-pre>name</code><ExternalLinkIcon/></a> 返回一个在 (X)HTML document的节点列表集合。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> elements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> 
<span class="token keyword">var</span> elements <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>elements</code> 是一个实时更新的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList" target="_blank" rel="noopener noreferrer"><code v-pre>NodeList</code><ExternalLinkIcon/></a> 集合。当文档中有同一个name属性的元素被添加或移除时，这个集合会自动更新。</li>
<li><code v-pre>name</code> 是元素的 <code v-pre>name</code> 属性的值。</li>
</ul>
<h4 id="queryselector" tabindex="-1"><a class="header-anchor" href="#queryselector" aria-hidden="true">#</a> querySelector()</h4>
<p>文档对象模型<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document" target="_blank" rel="noopener noreferrer"><code v-pre>Document</code><ExternalLinkIcon/></a>引用的querySelector()方法返回文档中与指定选择器或选择器组匹配的第一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement" target="_blank" rel="noopener noreferrer"><code v-pre>HTMLElement</code><ExternalLinkIcon/></a>对象。 如果找不到匹配项，则返回<code v-pre>null</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 支持 ie9 及以上</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数：selectors</p>
<p>包含一个或多个要匹配的选择器的 DOM字符串<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString" target="_blank" rel="noopener noreferrer"><code v-pre>DOMString</code><ExternalLinkIcon/></a>。 该字符串必须是有效的CSS选择器字符串；如果不是，则引发<code v-pre>SYNTAX_ERR</code>异常。</p>
<h4 id="queryselectorall" tabindex="-1"><a class="header-anchor" href="#queryselectorall" aria-hidden="true">#</a> querySelectorAll()</h4>
<p>返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList" target="_blank" rel="noopener noreferrer"><code v-pre>NodeList</code><ExternalLinkIcon/></a> 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 支持 ie9 及以上</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2间接获取元素" tabindex="-1"><a class="header-anchor" href="#_2-2间接获取元素" aria-hidden="true">#</a> 2.2间接获取元素</h3>
<h4 id="查找子元素" tabindex="-1"><a class="header-anchor" href="#查找子元素" aria-hidden="true">#</a> 查找子元素</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取所有的第一级子元素 返回的对象是nodeList</span>
<span class="token keyword">var</span> children <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">;</span>

<span class="token comment">// 获取所有的第一级子元素的数量</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> node<span class="token punctuation">.</span>childElementCount

<span class="token comment">// 获取所有第一级子元素中的第一个元素，如果没有子元素，则为null。</span>
<span class="token keyword">var</span> firstChild <span class="token operator">=</span> node<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">;</span> <span class="token comment">//不支持ie8及以下</span>
<span class="token keyword">var</span> firstChild <span class="token operator">=</span> node<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span> 

<span class="token comment">// 获取所有第一级子元素中的最后一个元素，如果没有子元素，则为null。</span>
<span class="token keyword">var</span> lastChild <span class="token operator">=</span> node<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">;</span> <span class="token comment">//不支持ie8及以下</span>
<span class="token keyword">var</span> lastChild <span class="token operator">=</span> node<span class="token punctuation">.</span>lastChild<span class="token punctuation">;</span> 

<span class="token comment">// 当前节点是否有子节点，返回布尔值</span>
element<span class="token punctuation">.</span><span class="token function">hasChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>firstChild 与 firstElementChild 的不同</p>
<ul>
<li>firstChild: IE6、7、8 第一个元素节点; 非IE6、7、8：返回第一个元素节点或文本节点</li>
<li>firstElementChild： IE6、7、8不支持；非IE6、7、8，获取第一个元素节点</li>
</ul>
<h4 id="查找父元素" tabindex="-1"><a class="header-anchor" href="#查找父元素" aria-hidden="true">#</a> 查找父元素</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 返回当前节点的父元素节点，如果该元素没有父节点，或者父节点不是一个 DOM,则返回 `null`。	</span>
<span class="token keyword">var</span> parentElement <span class="token operator">=</span> node<span class="token punctuation">.</span>parentElement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找兄弟元素" tabindex="-1"><a class="header-anchor" href="#查找兄弟元素" aria-hidden="true">#</a> 查找兄弟元素</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 查找上一个兄弟元素，如果本身为最后一个元素则返回 null</span>
<span class="token keyword">var</span> nextNode <span class="token operator">=</span> node<span class="token punctuation">.</span>nextSibling

<span class="token comment">// 查找上一个兄弟元素,如果本身为第一个元素则返回 null</span>
<span class="token keyword">var</span> prevNode <span class="token operator">=</span> node<span class="token punctuation">.</span>previousElementSibling
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-dom-节点操作方法" tabindex="-1"><a class="header-anchor" href="#_3-dom-节点操作方法" aria-hidden="true">#</a> 3. DOM 节点操作方法</h2>
<h3 id="_3-1元素节点操作方法" tabindex="-1"><a class="header-anchor" href="#_3-1元素节点操作方法" aria-hidden="true">#</a> 3.1元素节点操作方法</h3>
<h4 id="创建节点" tabindex="-1"><a class="header-anchor" href="#创建节点" aria-hidden="true">#</a> 创建节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建元素节点</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建文本节点</span>
<span class="token keyword">var</span> text <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将文本节点插入到元素节点中也使用appendChild 方法</span>
element<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加节点" tabindex="-1"><a class="header-anchor" href="#添加节点" aria-hidden="true">#</a> 添加节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 追加一个子节点（作为最后的子节点）。</span>
parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newnode<span class="token punctuation">)</span>

<span class="token comment">// 把增加的节点放到某个节点的前边。				</span>
parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newnode<span class="token punctuation">,</span>referenceNode<span class="token punctuation">)</span>
<span class="token comment">// insertedNode 被插入节点(newNode)</span>
<span class="token comment">// parentNode 新插入节点的父节点</span>
<span class="token comment">// newNode 用于插入的节点</span>
<span class="token comment">// referenceNode newNode 将要插在这个节点之前</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 从DOM中删除一个子节点。返回删除的节点。</span>
<span class="token keyword">let</span> oldChild <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//OR</span>
element<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 删除本节点 ie11 全系列不支持此方法</span>
node<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>child</code> 是要移除的那个子节点.</li>
<li><code v-pre>node</code> 是<code v-pre>child</code>的父节点.</li>
<li>oldChild保存对删除的子节点的引用. <code v-pre>oldChild</code> === child，被移除的这个子节点仍然存在于内存中,只是没有添加到当前文档的DOM树中,因此,当使用第一种方法时，还可以把这个节点重新添加回文档中</li>
</ul>
<h4 id="替换文本节点" tabindex="-1"><a class="header-anchor" href="#替换文本节点" aria-hidden="true">#</a> 替换文本节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// innerText 属性表示一个节点及其后代的“渲染”文本内容。</span>
<span class="token keyword">var</span> renderedText <span class="token operator">=</span> HTMLElement<span class="token punctuation">.</span>innerText<span class="token punctuation">;</span>
HTMLElement<span class="token punctuation">.</span>innerText <span class="token operator">=</span> string<span class="token punctuation">;</span>

<span class="token comment">// Node 接口的 textContent 属性表示一个节点及其后代的文本内容。</span>
<span class="token keyword">let</span> text <span class="token operator">=</span> someNode<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
someOtherNode<span class="token punctuation">.</span>textContent <span class="token operator">=</span> string<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>innerText 与 textContent 的区别</p>
<ul>
<li><code v-pre>textContent</code> 会获取<em>所有</em>元素的内容，包括 <a href="https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style" target="_blank" rel="noopener noreferrer"><code v-pre>](https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script) 和 [</code><ExternalLinkIcon/></a> 元素，然而 <code v-pre>innerText</code> 只展示给人看的元素。</li>
<li><code v-pre>textContent</code> 会返回节点中的每一个元素。相反，<code v-pre>innerText</code> 受 CSS 样式的影响，并且不会返回隐藏元素的文本，此外，由于 <code v-pre>innerText</code> 受 CSS 样式的影响，它会触发回流（ <a href="https://wiki.developer.mozilla.org/en-US/docs/Glossary/Reflow" target="_blank" rel="noopener noreferrer">reflow<ExternalLinkIcon/></a> ）去确保是最新的计算样式。（回流在计算上可能会非常昂贵，因此应尽可能避免。）</li>
<li>在 Internet Explorer (小于和等于 11 的版本) 中对 <code v-pre>innerText</code> 进行修改， 不仅会移除当前元素的子节点，而且还会<em>永久性地破坏</em>所有后代文本节点。在之后不可能再次将节点再次插入到任何其他元素或同一元素中。</li>
</ul>
<h4 id="替换元素节点" tabindex="-1"><a class="header-anchor" href="#替换元素节点" aria-hidden="true">#</a> 替换元素节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Element.innerHTML 属性设置或获取HTML语法表示的元素的后代。</span>
<span class="token comment">// 获取节点</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> element<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span> 

<span class="token comment">// 替换节点</span>
element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlString<span class="token punctuation">;</span>

<span class="token comment">// 示例：</span>
 box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;a href="http://www.baidu.com">无故加之而不怒&lt;/a></span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>当 HTML 没有被正确标记时，设置 <code v-pre>innerHTML</code> 将会抛出语法错误。</li>
<li>当父元素是 <code v-pre>Document</code>时，设置 <code v-pre>innerHTML</code> 将会提示不允许修改。</li>
<li>使用<code v-pre>innerHTML </code>不安全，应该尽量避免使用，以免插入恶意代码</li>
<li><code v-pre>innerHTML </code>虽然也能达到 <code v-pre>createElement</code>方法的效果，且较为简单，但是当大量创建元素节点时， <code v-pre>createElement</code>方法的速度要快很多</li>
</ul>
<h3 id="_3-2-元素属性操作方法" tabindex="-1"><a class="header-anchor" href="#_3-2-元素属性操作方法" aria-hidden="true">#</a> 3.2 元素属性操作方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。</span>
element<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取属性</span>
<span class="token keyword">let</span> attribute <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>attributeName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 删除属性</span>
element<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span>attrName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果没有这个属性，则使用 <code v-pre>getAttribute</code>方法时，值为null</li>
<li><code v-pre>setAttribute()</code> 方法会将其属性名称参数小写化</li>
<li>布尔属性只要出现在元素上就会被认为是 <code v-pre>true</code> ，无论它的值是什么,应该将 <code v-pre>value</code> 设置为空字符串 (<code v-pre>&quot;&quot;</code>)</li>
</ul>
<h3 id="_3-3-元素值操作方法" tabindex="-1"><a class="header-anchor" href="#_3-3-元素值操作方法" aria-hidden="true">#</a> 3.3 元素值操作方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取某个元素的值,适用于input select textarea 标签</span>
<span class="token keyword">let</span> eleValue <span class="token operator">=</span> element<span class="token punctuation">.</span>value
element<span class="token punctuation">.</span>value <span class="token operator">=</span> newValue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-class-操作方法" tabindex="-1"><a class="header-anchor" href="#_3-4-class-操作方法" aria-hidden="true">#</a> 3.4 class 操作方法</h3>
<h4 id="获取类属性类属性的集合" tabindex="-1"><a class="header-anchor" href="#获取类属性类属性的集合" aria-hidden="true">#</a> 获取类属性类属性的集合</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Element.classList 是一个只读属性，返回一个元素的类属性的实时 DOMTokenList 集合。</span>
<span class="token comment">// 虽然 element.classList 本身是只读的，但是你可以使用 add() 和 remove() 方法修改它。</span>
<span class="token keyword">const</span> elementClasses <span class="token operator">=</span> elementNodeReference<span class="token punctuation">.</span>classList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="classlist的操作方法" tabindex="-1"><a class="header-anchor" href="#classlist的操作方法" aria-hidden="true">#</a> <code v-pre>classList</code>的操作方法</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  删除指定类
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  添加类
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  存在返回<span class="token boolean">true</span>，否则返回<span class="token boolean">false</span>
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  存在就删除，否则添加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-style-操作方法" tabindex="-1"><a class="header-anchor" href="#_3-5-style-操作方法" aria-hidden="true">#</a> 3.5 style 操作方法</h3>
<p><code v-pre>HTMLElement.style</code> 属性返回一个 CSSStyleDeclaration 对象，表示元素的 内联<code v-pre>style</code> 属性，但忽略任何样式表应用的属性。 通过 <code v-pre>style</code> 可以访问的 CSS 属性列表，并可以这个对象修改元素的内联样式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 需要注意的是：通过这种方法只能获取到内联样式，并且对含有中横线的CSS属性，将中横线后面的第一个字母换成大写且去掉横线。</span>
element<span class="token punctuation">.</span>style
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>margin
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>margin<span class="token operator">=</span><span class="token string">"属性"</span>   
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token operator">=</span><span class="token string">"属性"</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left<span class="token operator">=</span><span class="token string">"属性"</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position<span class="token operator">=</span><span class="token string">"属性"</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginTop<span class="token operator">=</span><span class="token string">"属性"</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>borderLeftWidth<span class="token operator">=</span><span class="token string">"属性"</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>zIndex<span class="token operator">=</span><span class="token string">"属性"</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontFamily<span class="token operator">=</span><span class="token string">"属性"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如上所示，style 方法只能获取到内联样式，对于其他样式是获取不到的，想用获取全部的css 可以使用如下方法</span>
<span class="token keyword">let</span> elem1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"elemId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> style <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>elem1<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 它等价于</span>
<span class="token keyword">let</span> style <span class="token operator">=</span> document<span class="token punctuation">.</span>defaultView<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>elem1<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取值</span>
style<span class="token punctuation">.</span>left
style<span class="token punctuation">[</span><span class="token string">'background-color'</span><span class="token punctuation">]</span>
style<span class="token punctuation">.</span>backgroundColor

<span class="token comment">// getComputedStyle 可以从伪元素拉取样式信息 (比如, ::after, ::before, ::marker, ::line-marker)</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>h3<span class="token punctuation">,</span> <span class="token string">'::after'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>content<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>getComputedStyle</code>是通过 <code v-pre>document.defaultView</code> 对象来调用的。大部分情况下，这是不需要的，因为可以直接通过<code v-pre>window</code>对象调用。但有一种情况，你必需要使用 <code v-pre>defaultView</code>, 那是在firefox3.6上访问子框架内的样式 。</p>
<h2 id="_4-事件" tabindex="-1"><a class="header-anchor" href="#_4-事件" aria-hidden="true">#</a> 4.  事件</h2>
<h3 id="_4-1-传统注册方式" tabindex="-1"><a class="header-anchor" href="#_4-1-传统注册方式" aria-hidden="true">#</a> 4.1 传统注册方式</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>// 第一种方式
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">function</span> <span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token parameter">ths</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ths<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor<span class="token operator">=</span><span class="token string">"green"</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// this是实参，表示触发事件的当前元素。函数定义过程中的ths为形参。</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

// 第二种方式
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> divEle2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"d2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    divEle2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>innerText<span class="token operator">=</span><span class="token string">"呵呵"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// 删除事件</span>
    element<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>传统注册方式的特点：唯一性</li>
<li>同一个元素同一个事件只能注册一个处理函数，最后注册的会覆盖前面注册的</li>
</ul>
<h3 id="_4-2-方法监听注册方式" tabindex="-1"><a class="header-anchor" href="#_4-2-方法监听注册方式" aria-hidden="true">#</a> 4.2 方法监听注册方式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// type:表示监听事件类型的字符串</span>
<span class="token comment">// listener:当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。</span>
<span class="token comment">// options</span>

<span class="token comment">//删除事件</span>
element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span>fn<span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
element<span class="token punctuation">.</span><span class="token function">removeAddEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span>fn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数：</p>
<p>type：表示监听<a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" target="_blank" rel="noopener noreferrer">事件类型<ExternalLinkIcon/></a>的字符串。</p>
<p>listener： 当所监听的事件类型触发时，会接收到一个事件通知（实现了 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Event" target="_blank" rel="noopener noreferrer"><code v-pre>Event</code><ExternalLinkIcon/></a> 接口的对象）对象。<code v-pre>listener</code> 必须是一个实现了 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventListener" target="_blank" rel="noopener noreferrer"><code v-pre>EventListener</code><ExternalLinkIcon/></a> 接口的对象，或者是一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions" target="_blank" rel="noopener noreferrer">函数<ExternalLinkIcon/></a>。</p>
<p>options：</p>
<ul>
<li>
<p><code v-pre>capture</code>:  <code v-pre>Boolean</code>，表示 <code v-pre>listener</code> 会在该类型的事件捕获阶段传播到该 <code v-pre>EventTarget</code> 时触发。</p>
</li>
<li>
<p><code v-pre>once</code>:  <code v-pre>Boolean</code>，表示 <code v-pre>listener 在添加之后最多只调用一次。如果是</code> <code v-pre>true，</code> <code v-pre>listener</code> 会在其被调用之后自动移除。</p>
</li>
<li>
<p><code v-pre>passive</code>: <code v-pre>Boolean</code>，设置为true时，表示 <code v-pre>listener</code> 永远不会调用 <code v-pre>preventDefault()</code>。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。</p>
<p>useCapture: <code v-pre>Boolean</code>，当值为true 时，行为为事件捕获，当为false 时，为事件冒泡，默认为false</p>
</li>
<li>
<p>同一个元素同一个事件可以注册多个监听器，按顺序依次执行</p>
</li>
<li>
<p>ie9之前不支持此方法，可以使用attachEvent() 代替</p>
</li>
</ul>
<h2 id="_5-dom事件流" tabindex="-1"><a class="header-anchor" href="#_5-dom事件流" aria-hidden="true">#</a> 5. DOM事件流</h2>
<p>事件流描述的是从页面接受事件的顺序，事件发生时会在元素节点中按特定的顺序传播，这个传播过程既DOM事件流</p>
<p>事件流又称为事件传播，DOM 2级事件规定的事件流包括三个阶段：事件捕获阶段(capture phase)、处于目标阶段(target phase)和事件冒泡阶段(bubbling phase)</p>
<p>首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件，最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应</p>
<p><img src="G:\我的坚果云\note\WEB\JavaScript\img\DOM事件流.jpg" alt=""></p>
<h3 id="_5-1-事件冒泡与事件捕获" tabindex="-1"><a class="header-anchor" href="#_5-1-事件冒泡与事件捕获" aria-hidden="true">#</a> 5.1 事件冒泡与事件捕获</h3>
<h4 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h4>
<p>事件冒泡(event bubbling)，即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到较为不具体的节点(文档)</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token selector">.father</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #1179c2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.son</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f37b1d<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>father<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> father <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.father'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> son <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.son'</span><span class="token punctuation">)</span>
  father<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'father'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  son<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'son'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件捕获" tabindex="-1"><a class="header-anchor" href="#事件捕获" aria-hidden="true">#</a> 事件捕获</h4>
<p>事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前就捕获它</p>
<p>传统事件注册方式如 onclick attachEvent 等为事件冒泡，无法改变，而addEventListener 的第三个参数决定了是时间冒泡还是事件捕获。</p>
<p>在实际开发中，事件捕获很少使用，更多的是事件冒泡。</p>
<p>有些事件是没有事件冒泡的，如：onblur onfocus onmouseenter onmouseleave 等</p>
<h3 id="_5-2-event-对象" tabindex="-1"><a class="header-anchor" href="#_5-2-event-对象" aria-hidden="true">#</a> 5.2 event 对象</h3>
<h4 id="event-对象标准定义的属性及方法" tabindex="-1"><a class="header-anchor" href="#event-对象标准定义的属性及方法" aria-hidden="true">#</a> event 对象标准定义的属性及方法</h4>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">bubbles</td>
<td style="text-align:left">返回布尔值，指示事件是否是起泡事件类型。</td>
</tr>
<tr>
<td style="text-align:left">cancelable</td>
<td style="text-align:left">返回布尔值，指示事件是否可拥可取消的默认动作。</td>
</tr>
<tr>
<td style="text-align:left">currentTarget</td>
<td style="text-align:left">返回其事件监听器触发该事件的元素。</td>
</tr>
<tr>
<td style="text-align:left">eventPhase</td>
<td style="text-align:left">返回事件传播的当前阶段。</td>
</tr>
<tr>
<td style="text-align:left">target</td>
<td style="text-align:left">返回触发此事件的元素（事件的目标节点）。</td>
</tr>
<tr>
<td style="text-align:left">timeStamp</td>
<td style="text-align:left">返回事件生成的日期和时间。</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">回当前 Event 对象表示的事件的名称</td>
</tr>
<tr>
<td style="text-align:left">initEvent()</td>
<td style="text-align:left">初始化新创建的 Event 对象的属性。</td>
</tr>
<tr>
<td style="text-align:left">preventDefault()</td>
<td style="text-align:left">通知浏览器不要执行与事件关联的默认动作。</td>
</tr>
<tr>
<td style="text-align:left">stopPropagation()</td>
<td style="text-align:left">不再派发事件。</td>
</tr>
</tbody>
</table>
<h4 id="target属性与this-的区别" tabindex="-1"><a class="header-anchor" href="#target属性与this-的区别" aria-hidden="true">#</a> target属性与this 的区别</h4>
<p>this 返回绑定事件的对象</p>
<p>target 返回的触发事件的对象</p>
<p>currentTarget：与this 一样，返回绑定事件的对象，但 ie8 及以下不支持</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span>
  ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当点击 li 元素时</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ul</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// li</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span>  <span class="token comment">// li</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="event-对象的兼容性" tabindex="-1"><a class="header-anchor" href="#event-对象的兼容性" aria-hidden="true">#</a> event 对象的兼容性</h4>
<p>在ie8 及以下版本中，不能直接调用event 对象，应该使用window.evnet</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 兼容性写法</span>
element<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event
    <span class="token comment">// 是否有event 对象,如果没有，则执行window.event</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="阻止默认行为" tabindex="-1"><a class="header-anchor" href="#阻止默认行为" aria-hidden="true">#</a> 阻止默认行为</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
	
  a<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token operator">&amp;&amp;</span>e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不支持ie8 及以下</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>event<span class="token punctuation">.</span>returnValue  <span class="token comment">// ie8 及以下使用</span>
    <span class="token punctuation">}</span>
    

    <span class="token keyword">return</span> <span class="token boolean">false</span>  <span class="token comment">// 没有兼容性问题，但后面的代码会不执行且只限于传统注册方式</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="阻止事件冒泡" tabindex="-1"><a class="header-anchor" href="#阻止事件冒泡" aria-hidden="true">#</a> 阻止事件冒泡</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>father<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'father'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  son<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'son'</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不支持ie8 及以下</span>
    window<span class="token punctuation">.</span>event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span>  <span class="token comment">// ie8 及以下使用</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h4>
<p>原理：给父节点绑定侦听器，利用事件冒泡原理影响每一个子节点</p>
<p>优点：</p>
<ul>
<li>大量节省内存，减少事件注册</li>
<li>简化了dom节点更新时，相应事件的更新。（如新加了一个子节点时，不需要再绑定事件）</li>
</ul>
<p>缺点：</p>
<ul>
<li>事件委托基于冒泡，对于不冒泡的事件不支持。</li>
<li>层级过多，冒泡过程中，可能会被某层阻止掉。</li>
<li>理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托</li>
<li>把所有事件都用代理就可能会出现事件误判。</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>333<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span>
  ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"red"</span>
  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
