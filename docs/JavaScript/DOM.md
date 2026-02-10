# DOM

## 1. DOM 的概念

### 1.1 什么是DOM

HTML DOM是HTML Document Object Model([文档对象模型](https://baike.baidu.com/item/文档对象模型/1033822))的缩写，HTML DOM则是专门适用于HTML/XHTML的文档对象模型。是一套对文档的内容进行抽象和概念化的方法。可以将HTML DOM理解为网页的API。当网页被加载时，浏览器会创建页面的文档对象模型

### 1.2 DOM 树

![图片](./images/dom.png)

### 1.3 DOM节点

DOM标准规定HTML文档中的每个成分都是一个节点(node)：

- 文档节点(document对象)：代表整个文档
- 元素节点(element 对象)：代表一个元素（标签）
- 文本节点(text对象)：代表元素（标签）中的文本
- 属性节点(attribute对象)：代表一个属性，元素（标签）才有属性
- 注释是注释节点(comment对象)

JavaScript 可以通过DOM创建动态的 HTML：

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

## 2.  DOM获取节点方法

### 2.1 获取元素节点

#### getElementById()

返回一个匹配特定 ID的元素（element 对象）

```javascript
var element = document.getElementById(id);
```

#### getElementsByClassName() 

返回一个包含了所有指定类名的子元素的类数组对象。当在document对象上调用时，会搜索整个DOM文档，包含根节点。你也可以在任意元素上调用getElementsByClassName() 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。

```javascript
// 此api 不支持ie8 j
var elements = document.getElementsByClassName(names)
var elements = rootElement.getElementsByClassName(names)
```

- elements 是一个实时集合，包含了找到的所有元素。
- names 是一个字符串，表示要匹配的类名列表；类名通过空格分隔
- getElementsByClassName 可以在任何元素上调用，不仅仅是 document。 调用这个方法的元素将作为本次查找的根元素.

#### getElementsByTagName(tagName)

返回一个包括所有给定标签名称的元素的HTML集合[`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)(NodeList)。 整个文件结构都会被搜索，包括根节点。返回的 `HTML集合`是动态的, 意味着它可以自动更新自己来保持和 DOM 树的同步而不用再次调用 

```javascript
var elements = domcument.getElemenstByTagName(names)
var elements = element.getElemenstByTagName(names)
```

- `elements` 是一个由发现的元素出现在树中的顺序构成的动态的HTML集合
- `name` 是一个代表元素的名称的字符串。特殊字符 "*" 代表了所有元素。

#### getElementsByName(name) 

根据给定的[`name`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/name) 返回一个在 (X)HTML document的节点列表集合。

```javascript
var elements = document.getElementsByName(name) 
var elements = element.getElementsByName(name) 
```

- `elements` 是一个实时更新的 [`NodeList`](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList) 集合。当文档中有同一个name属性的元素被添加或移除时，这个集合会自动更新。
- `name` 是元素的 `name` 属性的值。

#### querySelector()

文档对象模型[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)引用的querySelector()方法返回文档中与指定选择器或选择器组匹配的第一个 [`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)对象。 如果找不到匹配项，则返回`null`。

```javascript
// 支持 ie9 及以上
var element = document.querySelector(selectors);
var element = element.querySelector(selectors);
```

参数：selectors

包含一个或多个要匹配的选择器的 DOM字符串[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)。 该字符串必须是有效的CSS选择器字符串；如果不是，则引发`SYNTAX_ERR`异常。

#### querySelectorAll()

返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 [`NodeList`](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList) 。

```javascript
// 支持 ie9 及以上
var element = document.querySelectorAll(selectors);
var element = element.querySelectorAll(selectors);
```

### 2.2间接获取元素

#### 查找子元素

```javascript
// 获取所有的第一级子元素 返回的对象是nodeList
var children = node.children;

// 获取所有的第一级子元素的数量
var count = node.childElementCount

// 获取所有第一级子元素中的第一个元素，如果没有子元素，则为null。
var firstChild = node.firstElementChild; //不支持ie8及以下
var firstChild = node.firstChild; 

// 获取所有第一级子元素中的最后一个元素，如果没有子元素，则为null。
var lastChild = node.lastElementChild; //不支持ie8及以下
var lastChild = node.lastChild; 

// 当前节点是否有子节点，返回布尔值
element.hasChildNodes()

```

firstChild 与 firstElementChild 的不同

- firstChild: IE6、7、8 第一个元素节点; 非IE6、7、8：返回第一个元素节点或文本节点
- firstElementChild： IE6、7、8不支持；非IE6、7、8，获取第一个元素节点

#### 查找父元素

```javascript
// 返回当前节点的父元素节点，如果该元素没有父节点，或者父节点不是一个 DOM,则返回 `null`。	
var parentElement = node.parentElement
```

#### 查找兄弟元素

```javascript
// 查找上一个兄弟元素，如果本身为最后一个元素则返回 null
var nextNode = node.nextSibling

// 查找上一个兄弟元素,如果本身为第一个元素则返回 null
var prevNode = node.previousElementSibling
```

## 3. DOM 节点操作方法

### 3.1元素节点操作方法

#### 创建节点

```javascript
// 创建元素节点
var element = document.createElement(tagName[, options]);

// 创建文本节点
var text = document.createTextNode(data);
// 将文本节点插入到元素节点中也使用appendChild 方法
element.appendChild(text)
```

#### 添加节点

```javascript
// 追加一个子节点（作为最后的子节点）。
parentNode.appendChild(newnode)

// 把增加的节点放到某个节点的前边。				
parentNode.insertBefore(newnode,referenceNode)
// insertedNode 被插入节点(newNode)
// parentNode 新插入节点的父节点
// newNode 用于插入的节点
// referenceNode newNode 将要插在这个节点之前

```

#### 删除节点

```javascript
// 从DOM中删除一个子节点。返回删除的节点。
let oldChild = node.removeChild(child);
//OR
element.removeChild(child);


// 删除本节点 ie11 全系列不支持此方法
node.remove()
```

- `child` 是要移除的那个子节点.
- `node` 是`child`的父节点.
- oldChild保存对删除的子节点的引用. `oldChild` === child，被移除的这个子节点仍然存在于内存中,只是没有添加到当前文档的DOM树中,因此,当使用第一种方法时，还可以把这个节点重新添加回文档中

#### 替换文本节点

```javascript
// innerText 属性表示一个节点及其后代的“渲染”文本内容。
var renderedText = HTMLElement.innerText;
HTMLElement.innerText = string;

// Node 接口的 textContent 属性表示一个节点及其后代的文本内容。
let text = someNode.textContent;
someOtherNode.textContent = string;
```

innerText 与 textContent 的区别

- `textContent` 会获取*所有*元素的内容，包括 [``](https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script) 和 [``](https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style) 元素，然而 `innerText` 只展示给人看的元素。
- `textContent` 会返回节点中的每一个元素。相反，`innerText` 受 CSS 样式的影响，并且不会返回隐藏元素的文本，此外，由于 `innerText` 受 CSS 样式的影响，它会触发回流（ [reflow](https://wiki.developer.mozilla.org/en-US/docs/Glossary/Reflow) ）去确保是最新的计算样式。（回流在计算上可能会非常昂贵，因此应尽可能避免。）
- 在 Internet Explorer (小于和等于 11 的版本) 中对 `innerText` 进行修改， 不仅会移除当前元素的子节点，而且还会*永久性地破坏*所有后代文本节点。在之后不可能再次将节点再次插入到任何其他元素或同一元素中。

#### 替换元素节点

```javascript
// Element.innerHTML 属性设置或获取HTML语法表示的元素的后代。
// 获取节点
const content = element.innerHTML; 

// 替换节点
element.innerHTML = htmlString;

// 示例：
 box.innerHTML = `<a href="http://www.baidu.com">无故加之而不怒</a>`
```

- 当 HTML 没有被正确标记时，设置 `innerHTML` 将会抛出语法错误。
- 当父元素是 `Document`时，设置 `innerHTML` 将会提示不允许修改。
- 使用`innerHTML `不安全，应该尽量避免使用，以免插入恶意代码
- `innerHTML `虽然也能达到 `createElement`方法的效果，且较为简单，但是当大量创建元素节点时， `createElement`方法的速度要快很多

### 3.2 元素属性操作方法

```javascript
// 设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。
element.setAttribute(name, value);
// 获取属性
let attribute = element.getAttribute(attributeName);
// 删除属性
element.removeAttribute(attrName);
```

- 如果没有这个属性，则使用 `getAttribute`方法时，值为null
- `setAttribute()` 方法会将其属性名称参数小写化
- 布尔属性只要出现在元素上就会被认为是 `true` ，无论它的值是什么,应该将 `value` 设置为空字符串 (`""`) 

 ### 3.3 元素值操作方法

```javascript
// 获取某个元素的值,适用于input select textarea 标签
let eleValue = element.value
element.value = newValue
```

### 3.4 class 操作方法

#### 获取类属性类属性的集合

```javascript
// Element.classList 是一个只读属性，返回一个元素的类属性的实时 DOMTokenList 集合。
// 虽然 element.classList 本身是只读的，但是你可以使用 add() 和 remove() 方法修改它。
const elementClasses = elementNodeReference.classList;
```

#### `classList`的操作方法

```javascript
element.classList.remove(cls)  删除指定类
element.classList.add(cls)  添加类
element.classList.contains(cls)  存在返回true，否则返回false
element.classList.toggle(cls)  存在就删除，否则添加
```

### 3.5 style 操作方法

`HTMLElement.style` 属性返回一个 CSSStyleDeclaration 对象，表示元素的 内联`style` 属性，但忽略任何样式表应用的属性。 通过 `style` 可以访问的 CSS 属性列表，并可以这个对象修改元素的内联样式

```javascript
// 需要注意的是：通过这种方法只能获取到内联样式，并且对含有中横线的CSS属性，将中横线后面的第一个字母换成大写且去掉横线。
element.style
element.style.margin
element.style.margin="属性"   
element.style.width="属性"
element.style.left="属性"
element.style.position="属性"
element.style.marginTop="属性"
element.style.borderLeftWidth="属性"
element.style.zIndex="属性"
element.style.fontFamily="属性"
```

```javascript
// 如上所示，style 方法只能获取到内联样式，对于其他样式是获取不到的，想用获取全部的css 可以使用如下方法
let elem1 = document.getElementById("elemId");
let style = window.getComputedStyle(elem1, null);
// 它等价于
let style = document.defaultView.getComputedStyle(elem1, null);

// 获取值
style.left
style['background-color']
style.backgroundColor

// getComputedStyle 可以从伪元素拉取样式信息 (比如, ::after, ::before, ::marker, ::line-marker)
let result = getComputedStyle(h3, '::after').content;
```

`getComputedStyle`是通过 `document.defaultView` 对象来调用的。大部分情况下，这是不需要的，因为可以直接通过`window`对象调用。但有一种情况，你必需要使用 `defaultView`, 那是在firefox3.6上访问子框架内的样式 。

## 4.  事件

### 4.1 传统注册方式

```html
// 第一种方式
<div id="d1" onclick="changeColor(this);">点我</div>
<script>
	function changeColor(ths) {
		ths.style.backgroundColor="green";
	}
    // this是实参，表示触发事件的当前元素。函数定义过程中的ths为形参。

</script>

// 第二种方式
<div id="d2">点我</div>
<script>
    var divEle2 = document.getElementById("d2");
    divEle2.onclick=function () {
        this.innerText="呵呵";
    }
</script>
<script>
	// 删除事件
    element.onclick = null
</script>


```

- 传统注册方式的特点：唯一性
- 同一个元素同一个事件只能注册一个处理函数，最后注册的会覆盖前面注册的

### 4.2 方法监听注册方式

```javascript
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
// type:表示监听事件类型的字符串
// listener:当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。
// options

//删除事件
element.addEventListener('click',fn)
fn(){}
element.removeAddEventListener('click',fn)
```

参数：

type：表示监听[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events)的字符串。

listener： 当所监听的事件类型触发时，会接收到一个事件通知（实现了 [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 接口的对象）对象。`listener` 必须是一个实现了 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventListener) 接口的对象，或者是一个[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)。

options：

- `capture`:  `Boolean`，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。
- `once`:  `Boolean`，表示 `listener 在添加之后最多只调用一次。如果是` `true，` `listener` 会在其被调用之后自动移除。
- `passive`: `Boolean`，设置为true时，表示 `listener` 永远不会调用 `preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

  useCapture: `Boolean`，当值为true 时，行为为事件捕获，当为false 时，为事件冒泡，默认为false

- 同一个元素同一个事件可以注册多个监听器，按顺序依次执行
- ie9之前不支持此方法，可以使用attachEvent() 代替

## 5. DOM事件流

事件流描述的是从页面接受事件的顺序，事件发生时会在元素节点中按特定的顺序传播，这个传播过程既DOM事件流

事件流又称为事件传播，DOM 2级事件规定的事件流包括三个阶段：事件捕获阶段(capture phase)、处于目标阶段(target phase)和事件冒泡阶段(bubbling phase)

首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件，最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应

![](./images/DOMEvent.jpg)

### 5.1 事件冒泡与事件捕获

#### 事件冒泡

事件冒泡(event bubbling)，即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到较为不具体的节点(文档)

```html
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .father {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1179c2;
  }

  .son {
    width: 100px;
    height: 100px;
    background-color: #f37b1d;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
<a href=""></a>
<script>
  const father = document.querySelector('.father')
  const son = document.querySelector('.son')
  father.addEventListener('click',function () {
    alert('father')
  })
  son.addEventListener('click',function () {
    alert('son')
  })

</script>
```



#### 事件捕获

事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前就捕获它

传统事件注册方式如 onclick attachEvent 等为事件冒泡，无法改变，而addEventListener 的第三个参数决定了是时间冒泡还是事件捕获。

在实际开发中，事件捕获很少使用，更多的是事件冒泡。

有些事件是没有事件冒泡的，如：onblur onfocus onmouseenter onmouseleave 等

### 5.2 event 对象

#### event 对象标准定义的属性及方法

| 属性              | 描述                                           |
| :---------------- | :--------------------------------------------- |
| bubbles           | 返回布尔值，指示事件是否是起泡事件类型。       |
| cancelable        | 返回布尔值，指示事件是否可拥可取消的默认动作。 |
| currentTarget     | 返回其事件监听器触发该事件的元素。             |
| eventPhase        | 返回事件传播的当前阶段。                       |
| target            | 返回触发此事件的元素（事件的目标节点）。       |
| timeStamp         | 返回事件生成的日期和时间。                     |
| type              | 回当前 Event 对象表示的事件的名称              |
| initEvent()       | 初始化新创建的 Event 对象的属性。              |
| preventDefault()  | 通知浏览器不要执行与事件关联的默认动作。       |
| stopPropagation() | 不再派发事件。                                 |

#### target属性与this 的区别

this 返回绑定事件的对象

target 返回的触发事件的对象

currentTarget：与this 一样，返回绑定事件的对象，但 ie8 及以下不支持

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.addEventListener('click',function (e) {
    // 当点击 li 元素时
    console.log(e.target); // ul
    console.log(this); // li
    console.log(e.currentTarget)  // li
  })
</script>
```



#### event 对象的兼容性

在ie8 及以下版本中，不能直接调用event 对象，应该使用window.evnet

```javascript
// 兼容性写法
element.onclick = function (e){
    e = e || window.event
    // 是否有event 对象,如果没有，则执行window.event
}
```

#### 阻止默认行为

```javascript
const a = document.querySelector('a')
  a.addEventListener('click',function (e) {
    e.preventDefault()
  })
	
  a.onclick = function (e) {
    if (e&&e.preventDefault()) {
        e.preventDefault() // 不支持ie8 及以下
    } else {
            window.event.returnValue  // ie8 及以下使用
    }
    

    return false  // 没有兼容性问题，但后面的代码会不执行且只限于传统注册方式
  }
```

#### 阻止事件冒泡

```javascript
father.addEventListener('click',function () {
    alert('father')
  })
  son.addEventListener('click',function (e) {
    alert('son')
    e.stopPropagation() // 不支持ie8 及以下
    window.event.cancelBubble = true  // ie8 及以下使用
  })
```

#### 事件委托

原理：给父节点绑定侦听器，利用事件冒泡原理影响每一个子节点

优点：

- 大量节省内存，减少事件注册
- 简化了dom节点更新时，相应事件的更新。（如新加了一个子节点时，不需要再绑定事件）

缺点：

- 事件委托基于冒泡，对于不冒泡的事件不支持。
- 层级过多，冒泡过程中，可能会被某层阻止掉。
- 理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托
- 把所有事件都用代理就可能会出现事件误判。

```html
<ul>
  <li>111</li>
  <li>222</li>
  <li>333</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.addEventListener('click',function (e) {
    console.log(e.target);
    e.target.style.color = "red"
  
</script>
```









