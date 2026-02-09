# React 基础

## 介绍

### 声明式

React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。

### 组件化

构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。

由于组件逻辑使用 JavaScript 编写而非模板，因此你可以轻松地在应用中传递数据，并保持状态与 DOM 分离。

## 创建一个react应用

```
npx create-react-app my-app
cd my-app
npm start
```

```react
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>hello world</h1>
);
```



## 类组件

使用类组件，需要先定义一个类，这个类需继承 `React.Component`，且需要定义一个`render` 方法 

```jsx
import React from 'react';
export default class App extends React.Component {
  state = { num: 0 }
  render() {
    let { num } = this.state;
    return (
      <div>
        <button onClick={() => {
          this.setState({ num: num + 1 });
        }}>点击我</button>
        <h1>{num}</h1>
      </div>
    );
  }
}
```

## 函数式组件

在16.8 之前，函数式组件是无状态的，在16.8之后推出了hook后，函数式组件可以完成类组件的全部功能

```jsx
function HelloWorld(){
  return (
    <div>hello world</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelloWorld></HelloWorld>
);
```

## 组件嵌套

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

class NavBar extends React.Component {
  render() {
    return (
      <p>this is NavBar</p>
    )
  }
}
class MainContent extends React.Component {
  render() {
    return (
      <p>this is MainContent</p>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer>this is footer</footer>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <MainContent/>
        <Footer/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App></App>
);	
```



## 组件样式

### 行内样式

要给需要dom 添加行内样式，需要使用表达式传入样式对象的方式来实现：

```jsx
class App extends React.Component {
  render() {
    const style = {
      backgroundColor: 'red'
    }
    return <h1 style={style}>this is React Component</h1>
  }
}
```

行内样式需要写入一个样式文件，而这个样式对象可以放在很多地方，如 `render` 函数中，组件原型中，外链js 文件中等。

### 引入样式文件

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class App extends React.Component {
  // render() {
  //   return <h1 style={{backgroundColor: 'red'}}>this is React Component</h1>
  // }
  render() {
    const style = {
      backgroundColor: 'red'
    }
    return <h1 style={style} className='active'>this is React Component</h1>
  }
}
```

react 推荐使用行内样式的方式，因为react 觉得每一个组件都是一个独立的整体

但是在大多数情况下，我们还是为这些元素添加类名，但需要注意的是`class` 需要写成`className` ,因为在javascript 中 ` class` 是关键字。

