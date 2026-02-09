# JSX

JSX是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。

React 并没有采用将*标记与逻辑进行分离到不同文件*这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现[*关注点分离*](https://en.wikipedia.org/wiki/Separation_of_concerns)。

```jsx
const Element = <h1>Hello, world!</h1>;
```

## 嵌入表达式

 jsx 语法中嵌入表达式可以填入变量，也可以写入简单的js 表达式。

```jsx
import ReactDOM from 'react-dom/client';
const name = 'leirp'
const Element = <h1>Hello, {name}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    Element
);
```

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    Element
);
```

再jsx 的语法当中，每一个构建的试图，都只能有一个根节点，如果出现多个根节点，则会报错。再React中给我们提供了一个特殊的标签React.fragment，空文档标记标签，既保证了只有一个根节点，又不新增一个html 层级结构：

```jsx
function App() {
  return (
    <>
      <div className="App">
      </div>
      <div>hello world</div>
    </>

  );
}
```

## 胡子语法表现形式

number/string：如实渲染

undefined/null/boolean/symbol/BigInt：渲染内容为空

普通对象：不支持渲染

数组：把数组中的每一项分别渲染

数组中嵌套的普通对象： 不支持渲染

函数：不支持在胡子语法中渲染，但可以作为函数组件使用

## 行内样式

行内样式需要基于对象格式渲染，否则回报错，并且样式的属性要基于小驼峰命名法

```jsx
function App() {
  return (
      <div className="App" style={{color: 'red',fontSize: '18px'}}>
      </div>
  );
}
```

## 注释

```jsx
function App() {
  const  flag = false
  return (
      // jsx 顶层的注释可以使用双斜线，如果使用{/* */},需要使用空白标签包裹,
      <div className="App" style={{color: 'red',fontSize: '18px'}}>
        {/* jsx 里面的注释无法使用双斜线，否则会报错 */}
        <button style={{display: flag ? 'block': 'none'}}>按钮1</button>
      </div>
  );
}
```



## 元素的渲染

```jsx
function App() {
  const  flag = false
  return (
      // 这是注释
      <div className="App" style={{color: 'red',fontSize: '18px'}}>
        {/* 控制元素的display,无论是否展示，元素都被渲染 */}
        <button style={{display: flag ? 'block': 'none'}}>按钮1</button>
        {/* 控制元素是否渲染， */}
        {flag ? <button>按钮2</button> : null}
      </div>
  );
}
```



## 条件判断

在 React 中，没有用于编写条件的特殊语法。而是使用与编写常规 JavaScript 代码。例如，你可以使用 [`if`](https://web.nodejs.cn/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 语句有条件地包含 JSX：

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

也可以使用三元运算符，与 `if` 不同，它在 JSX 内部工作：

```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```



## 循环与遍历

在数组中使用循环，可以使用 map 方法

循环创建的元素需要加属性值key，并且这个值在本次循环中是唯一的，以便于优化 DOM-DIFF 算法

```jsx
function App() {
  const  data = [
    {
      id: 1,
      title: 'vue'
    },
    {
      id: 2,
      title: 'jquery'
    },
    {
      id: 3,
      title: 'react'
    },
  ]
  return (
      <div className="App" style={{color: 'red',fontSize: '18px'}}>
        <ul className='list'>
          {data.map((item,index)=>{
            return (
              <li className='item' key={item.id}><span>{index}</span><span>{item.title}</span></li>
            )
          })}
        </ul>
      </div>
  );
}
```

或：

```jsx
function App() {
  const  data = [
    {
      id: 1,
      title: 'vue'
    },
    {
      id: 2,
      title: 'jquery'
    },
    {
      id: 3,
      title: 'react'
    },
  ]
  const listItems = data.map(product =>
    <li key={data.id}>
      {product.title}
    </li>
  );
  return (
      <div className="App" style={{color: 'red',fontSize: '18px'}}>
        <ul className='list'>
          {listItems}
        </ul>
      </div>
  );
}
```



在jsx 中如果需要单纯循环多次，可以使用如下方法

```jsx
function App() {
  return (
      <div className="App" style={{color: 'red',fontSize: '18px'}}>
        <div className='list'>
          {new Array(5).fill(null).map((_,index)=>{
            return <button>button{index}</button>
          })}
        </div>
      </div>
  );
}
```

::: tip
`new Array(5)` 可以生成一个长度为5的稀疏数组，稀疏数组无法被遍历，可以使用fill 方法填充后变为密集数组（普通数组）
:::
## 底层处理机制

React.createElement 方法

```
React.createElement(
    type, // 元素的标签名或组件
    props, //是一个对象,包含当前节点的所有属性，如果没有任何属性，此值为null，
    ...children //可以作为多个参数，也可以放在一个数组里，为当前元素的子节点
)
```



首先，通过babel-preset-react-app 将 jsx 语法通过React.createElement`转换为虚拟DOM（virtualDOM）

```jsx
// babel 转换前
function App() {
  const x = 'hello'
  const y = 'react'
  return (
    <>
      <div>hello world</div>
      <div><span>{x}</span><span> </span><span>{y}</span></div>
    </>
  );
}
// babel-preset-react-app 转换为 React.createElement
function App() {
  const x = 'hello';
  const y = 'react';
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "title",
        style: {
          color: 'red'
        }
      },
      "hello world"
    ),
    React.createElement(
      "div",
      {
        className: "content"
      },
      React.createElement("span", null, x),
      React.createElement("span", null, " "),
      React.createElement("span", null, y)
    )
  );
    
```

然后将 虚拟DOM（virtualDOM） 通过`React.render`转换为真实DOM

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

::: warning
 第一次渲染页面直接将虚拟DOM转换为真实DOM，但是后续视图更新时，需要经过DOM-DIFF算法对比，计算出补丁包PATCH（两次差异的部分），将PATCH 补丁包进行渲染
:::



