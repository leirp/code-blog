# Hook

## React 组件分类

- 函数组件
  - 不具备状态、ref、周期函数等内容，第一次渲染完毕后，无法通过组件内部的操作控制其更新，因此称为为静态组件。
  - 但是具备属性及插槽，父组件可以控制其重新渲染。
  - 渲染流程简单，渲染速度较快!
  - 基于FP(函数式编程)思想设计，提供更细粒度的逻辑组织和复用!


- 类组件
  - 具备“状态、ref、周期函数、属性、插槽”等内容，可以灵活的控制组件更新，基于钩子函数也可灵活掌控不同阶段处理不同的事情!
  - 渲染流程繁琐，渲染速度相对较慢!
  - 基于OOP(面向对象编程)思想设计，更方便实现继承等!

React Hooks 组件，就是基于 React 中新提供的 Hook 函数，可以 让**函数组件动态化**!

React Hooks 是 React 16.8的新增特性，并且只能运用到函数组件中。



## Hook 函数概览

- 基础Hook

  - `useState` 状态管理

  - `useEffect` 使用周期函数

  - `useContext` 使用上下文信息

- 额外的Hook

  - `useReducer` useState的替代方案，借鉴redux的思想，管理更复杂的状态和逻辑

  - `useCallback` 构建缓存优化方案

  - `useMemo` 构建缓存优化方案

  - `useRef` 使用 ref 获取 DOM

  - `useImperativeHandle` 配合 forwardRef 一起使用

  - `useLayoutEffect` 与 useEffect相同，但会在所有的DOM 变更后同步调用 effect

- 自定义Hook



## `useState`

`useState` 是一个 React Hook，它允许向组件添加一个状态，基于状态的修改，可以使视图更新

### 基础使用

语法如下：

```js
const [state, setState] = useState(initialState)
// state 状态
// setState 修改状态的方法，调用此方法修改状态值为
```

`state` 为当前的状态

`setState` 为修改状态的方法，调用此方法，修改状态值为新的value, 并通知视图更新，可以直接传递新状态，也可以传递一个根据先前状态来计算新状态的函数。

```
import { useState } from "react";
function Index() {
  let [num, setNum] = useState(0);
  return (
    <div>
      <p>计数： {num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        累加
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        累减
      </button>
    </div>
  );
}
export default Index;


```

更新对象或者数组

```jsx
import { useState } from "react";

 function Vote() {
  let [state,setState] = useState({
    agree:0,
    disagree:0	
  })
  
  const handle = (type) => {
    console.log(type)
      // 如果只赋值单个值，其他值就会丢失
    // if (type === 'agree') {
    //   setState({agree: state.agree+1})
    // } else {
    //   setState({disagree: state.disagree+1})
    // }
    type === 'agree' ? setState({...state,agree:state.agree + 1}) : setState({...state,disagree:state.disagree + 1})
  }
  
  return (
    <div className="container">
      <div className="show">
        <span>支持人数： {state.agree}人</span>
        <span>反对人数: {state.disagree}</span>
      </div>
      <div className="button">
        <button onClick={handle.bind(undefined,'agree')}>支持</button>
        <button onClick={handle.bind(undefined,'disagree')}>反对</button>
      </div>
    </div>
  )
}

export default Vote;
```





### 底层处理机制

因为函数式组件的每次一次更新或渲染，都会把函数重新执行，重新产生一个私有的上下文，所以当使用 setState 时，渲染后返回的是修改后的的 state 与 setState	

`set` 函数仅更新下一次渲染的状态变量。如果你在调用 `set` 函数后读取状态变量，则 [你仍然会得到旧的值](https://react.nodejs.cn/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value) 在你调用之前显示在屏幕上。

### 异步与同步

```jsx
import { useState } from "react";
// import { flushSync } from "react-dom";

function Demo() {
  console.log('页面已被重新渲染')
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [t, setT] = useState(0);
  const handle = () => {
    setX(x + 10);
    setY(y + 20);
    setZ(z + 30);
    setTimeout(()=>{
      setT(t + 40)
    })
  };
  return (
    <div>
      <p>x: {x}</p>
      <p>y: {y}</p>
      <p>z: {z}</p>
      <p>t: {t}</p>
      <button onClick={handle}>增加</button>
    </div>
  );
}
// console.log会打印两次，
```

在React18 及以上版本中，基于 useState 创建出来的修改状态的方法执行时，会加入到更新队列中然后一起执行，在所有事件处理程序运行并调用其 `set` 函数后更新屏幕。异步的方法除外。

如果需要某些修改状态的方法立即执行渲染，可以使用 `flushSync` 方法

```jsx
const handle = () => {
      flushSync(()=>{
        // 第一次渲染
        setX(x + 10);
        setY(y + 20);
      })
    // 第二次渲染
      setZ(z + 30);
      setTimeout(()=>{
          // 第三次渲染
        setT(t + 40)
      })
    };
```

### 优化机制

如果提供的新值与当前的 `state` 相同（通过 [`Object.is`](https://web.nodejs.cn/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 比较确定），React 将跳过重新渲染组件及其子组件。这是一个优化。尽管在某些情况下 React 可能仍需要在跳过子级之前调用你的组件，但这不应该影响你的代码。

### 根据状态更新状态

```jsx
import { useState } from "react";

function App() {
  console.log("渲染了")
  const [num,setNum] = useState(10)
  const handle = ()=> {
    for(let i = 0; i<10000; i++) {
      setNum(num + 1)
    }
  }
  return (
      <div className="App">
        <span>{num}</span>  {/* 输出的值为11*/}
        <button onClick={handle}>点击</button>
      </div>
  );
}
export default App;
```

在上面的示例中，在按钮点击后，因为更新队列的原因，调用 `setNum` 后页面并没有重新渲染，而是加入到了更新队列，所以`num`取到的值一直为10，直到循环结束，页面才会渲染，所以输出的值为11。

> [!NOTE]
>
> set 函数仅更新下一次渲染的状态变量。如果你在调用 set 函数后读取状态变量，则 你仍然会得到旧的值 在你调用之前显示在屏幕上。



```jsx
import { useState } from "react";
import { flushSync } from "react-dom";

function App() {
  
  const [num, setNum] = useState(10);
  console.log("num",num);
  const handle = () => {
    for (let i = 0; i < 10; i++) {
      console.log("循环次数start")
       flushSync(() => {
        setNum(num + 1);
      });
    }
  };
  return (
    <div className="App">
      <span>{num}</span>
      <button onClick={handle}>点击</button>
    </div>
  );
}
export default App;
```

在上面使用 `flashSync` 的示例中，因为还是在同一作用域中，所以每次读取的 num 都为 10 ，所以点击后输出还是为11，但是（渲染了两次页面，需要解释）

```jsx
import { useState } from "react";

function App() {
  console.log("渲染了")
  const [num,setNum] = useState(10)
  const handle = ()=> {
    for(let i = 0; i<10000; i++) {
      setNum(num + 1)
    }
  }
  return (
      <div className="App">
        <span>{num}</span>  {/* 输出的值为11*/}
        <button onClick={handle}>点击</button>
      </div>
  );
}
export default App;
```

如果需要每次都执行对应的运算，可以将更新函数传递给 `setState` 而不是下一个状态，React 将更新函数放到 [队列](https://react.nodejs.cn/learn/queueing-a-series-of-state-updates) 中。然后，在下一次渲染期间，以相同的顺序调用更新函数，然后在执行渲染

```jsx
function App() {
  console.log();
  const [num, setNum] = useState(10);
  
  const handle = () => {
      for (let i = 0; i < 10; i++) {
        setNum((num)=>{
          // 参数为上一次的状态
          return num+1;
        });
      }

  };
  return (
    <div className="App">
      <span>{num}</span>
      <button onClick={handle}>点击</button>
    </div>
  );
}
export default App;
```

### 避免重建初始状态

React 会保存一次初始状态，并在下一次渲染时忽略它。

```jsx
function App() {
  let number = 0
  for (let i = 0; i < 10; i++) {
    number += +String(Math.random()).slice(5)
  }
  const [num, setNum] = useState(number);
  
  const handle = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <span>{num}</span>
      <button onClick={handle}>点击</button>
    </div>
  );
}
export default App;
```

上面的计算 number 的代码虽然第一次渲染时保存他的状态，后续渲染时使用`useState` 修改的值，但是每次渲染时都会重新执行，造成非必要的性能浪费。为了解决这个问题，你可以将其作为初始化函数传递给 `useState`。

```jsx
function App() {
  const [num, setNum] = useState(() => {
    let number = 0;
    for (let i = 0; i < 10; i++) {
      number += +String(Math.random()).slice(5);
    }
  });

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <span>{num}</span>
      <button onClick={handle}>点击</button>
    </div>
  );
}
export default App;
```

> [!IMPORTANT]
>
> 请注意，传递的是函数本身，而不是 它是调用它的结果`func()`。如果传递一个函数给 `useState`，React 只会在初始化时调用它。




## useEffect

副作用钩子，用于处理组件中的副作用，用来取代生命周期函数。弥补了函数式组件没有生命周期的缺陷。并且提供了为某些依赖项增加副作用函数，当依赖项发生改变，触发副作用函数。

### 基础使用

```jsx
useEffect(setup, dependencies?)
```

- `setup`：具有副作用逻辑的设置函数。该设置函数也可以选择返回一个清理函数。当组件被添加到 DOM 时，React 将运行设置函数。在每次使用更改的依赖重新渲染后，React 将首先使用旧值运行清理函数，然后使用新值运行设置函数。在你的组件从 DOM 中移除后，React 将运行清理函数。
- 可选 `dependencies`：`setup` 代码需要执行时所依赖的反应值的列表。反应值包括属性、状态以及直接在组件主体内声明的所有变量和函数。如果你的 linter 是 [为 React 配置](https://react.nodejs.cn/learn/editor-setup#linting)，它将验证每个反应值是否正确指定为依赖。依赖列表必须具有恒定数量的条目，并且像 `[dep1, dep2, dep3]` 一样写成内联。React 将使用 [`Object.is`](https://web.nodejs.cn/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 比较将每个依赖与其先前的值进行比较。如果省略此参数，你的副作用将在每次重新渲染组件后重新运行。[查看传递依赖数组、空数组和完全不依赖之间的区别。](https://react.nodejs.cn/reference/react/useEffect#examples-dependencies)

```jsx
import { useEffect, useState } from "react";
function App() {

  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  useEffect(()=>{
    console.log('设置函数：页面每一次渲染后触发，包括初始渲染')
    return ()=>{
      console.log('清理函数：页面重新渲染前，旧页面卸载时使用触发，拿到的为旧值')
    }
  })
  useEffect(()=>{
    console.log('设置函数：依赖项为空时，页面第一次渲染时触发')
    return ()=>{
      console.log('清理函数：依赖项为空时，页面完全卸载时触发，拿到的为旧值')
    }
  },[])
  useEffect(()=>{
    console.log('设置函数：存在依赖项时，页面第一次渲染后及依赖项改变时渲染后触发')
    return ()=>{
      console.log('清理函数：依赖项触发的渲染前及旧页面卸载时触发，拿到的为旧值')
    }
  },[num])
  const handle = () => {
    setNum(num + 1);
  };
  const handle1 = () => {
    setNum1(num1 + 1);
  };
  return (
    <div className="App">
      <span>数字1： {num}</span>
      <span>数字2： {num1}</span>
      <button onClick={handle}>点击</button>
      <button onClick={handle1}>点击</button>
    </div>
  );
}
export default App;
```

调用 set 函数不会更新已在运行中的代码的状态变量

```jsx
function Demo() {
    console.log('页面已被重新渲染')
    const [x, setX] = useState(0);
    
    const handle = () => {
      setX(x + 1);
      setX(x + 1);
      setX(x + 1);
    };
    return (
      <div>
        <p>x: {x}</p>
        <button onClick={handle}>增加</button>
      </div>
    );
  }
// 每点击一次更新结果+1 而不是加3
```

可以向 setAge 传递一个 更新函数，而不是下一个状态,React 将更新函数放入 [队列](https://react.docschina.org/learn/queueing-a-series-of-state-updates) 中。然后，在下一次渲染期间，将按照相同的顺序调用这些更新函数：

 

```jsx
function Demo() {
    console.log('页面已被重新渲染')
    const [x, setX] = useState(0);
    
    const handle = () => {
      setX(x + 1);
      setX(x + 1);
      setX(x + 1);
    };
    return (
      <div>
        <p>x: {x}</p>
        <button onClick={handle}>增加</button>
      </div>
    );
  }
  // 没点击一次+3
```

## `useEffect`

### 基础使用

```
useEffect(setup, dependencies?)
```

#### 参数

- `setup`：处理 Effect 的函数。setup 函数选择性返回一个 **清理（cleanup）** 函数。当组件被添加到 DOM 的时候，React 将运行 setup 函数。在每次依赖项变更重新渲染后，React 将首先使用旧值运行 cleanup 函数（如果你提供了该函数），然后使用新值运行 setup 函数。在组件从 DOM 中移除后，React 将最后一次运行 cleanup 函数。
- **可选** `dependencies`：`setup` 代码中引用的所有响应式值的列表。响应式值包括 props、state 以及所有直接在组件内部声明的变量和函数。依赖项列表的元素数量必须是固定的，并且必须像 `[dep1, dep2, dep3]` 这样内联编写。React 将使用 [`Object.is`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 来比较每个依赖项和它先前的值。如果省略此参数，则在每次重新渲染组件之后，将重新运行 Effect 函数。

```jsx
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  
}
```

> [!WARNING]
>
> `useEffect` 需要在函数的最外层执行，否则会报错。

### 执行逻辑

```jsx
function Demo() {
    console.log('页面已被重新渲染')
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(()=>{
      // 第一次执行，每次重新渲染后也执行
      console.log('@1',x)
    })
    useEffect(()=>{
      // 第一次执行
      console.log('@2',x)
    },[])
    useEffect(()=>{
      // 第一次执行，每次x变化时也执行
      console.log('@3',x)
    },[x])
    useEffect(()=>{
      return () => {
        // 组件被释放并在重新渲染后使用旧值执行
        // 如果依赖项为空，则永远不执行，如果没有依赖项，则每次重新渲染前都会执行
        console.log('@4',x)
      };
    })
    const handleX = () => {
      setX(x + 1);
    };
    const handleY = () => {
      setY(y + 1);
    };
    return (
      <div>
        <p>x: {x}</p>
        <button onClick={handleX}>增加X</button>
        <p>y: {x}</p>
        <button onClick={handleY}>增加Y</button>
      </div>
    );
  }
```

### 异步请求

```jsx
function Demo() {
    console.log('页面已被重新渲染')
    const [list,setList] = useState([])
    useEffect(() => {
      getData().then(res => {
        setList(res)
      })
    },[])
    // 或
    useEffect(() => {
      const getResult = async () => {
        const res = await getData()
        setList(res)
      }
      getResult()
    },[])

    // 报错
    // useEffect(async () => {
    //  const res = await getData()
    //  setList(res)
    //},[])
    return (
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
```

> [!CAUTION]
>
> `useEffect` 函数的callback的返回值必须是个函数（代表组件重新渲染时用旧值触发），如果直接使用async进行修饰，返回的是一个primise 实例，会导致报错。

### 注意事项









## `useLayoutEffect`

`useLayoutEffect` 是 [`useEffect`](https://react.nodejs.cn/reference/react/useEffect) 的一个版本，它在浏览器渲染之前触发（会在虚拟dom 创建并变为真实DOM后及在浏览器渲染绘制真实DOM前执行）。

### 基础使用

```jsx
useLayoutEffect(setup, dependencies?)
```

#### 参数

- ​	`setup`：具有副作用逻辑的函数。你的设置函数也可以选择返回一个清理函数。在你的组件被添加到 DOM 之前，React 将运行你的设置函数。在每次使用更改的依赖重新渲染后，React 将首先使用旧值运行清理函数（如果你提供了它），然后使用新值运行你的设置函数。在你的组件从 DOM 中删除之前，React 将运行你的清理函数。
- 可选 `dependencies`：`setup` 代码中引用的所有反应值的列表。反应值包括属性、状态以及直接在组件主体内声明的所有变量和函数。如果你的 linter 是 [为 React 配置](https://react.nodejs.cn/learn/editor-setup#linting)，它将验证每个反应值是否正确指定为依赖。依赖列表必须具有恒定数量的条目，并且像 `[dep1, dep2, dep3]` 一样写成内联。React 将使用 [`Object.is`](https://web.nodejs.cn/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 比较将每个依赖与其先前的值进行比较。如果省略此参数，你的副作用将在每次重新渲染组件后重新运行。

### 注意事项

- `useLayoutEffect` 中的代码以及从中安排的所有状态更新都会阻止浏览器重新绘制屏幕，阻塞浏览器的渲染。当过度使用时，这会使你的应用变慢，应该尽量使用`useEffect`。
- `useLayoutEffect` 是一个 Hook，所以你只能在你的组件的顶层或者你自己的钩子中调用它。你不能在循环或条件内调用它。如果需要，请提取一个组件并将副作用移到那里。
- 副作用仅在客户端上运行。它们不会在服务器渲染期间运行。
- 如果你在 `useLayoutEffect` 中触发状态更新，React 将立即执行所有剩余的效果，包括 `useEffect`。



## `useRef`

`useRef` 是一个 React 钩子，可让你引用渲染不需要的值。

- 他返回一个可变的 **Ref 对象**，其 `current` 属性可以存储任意值（如 DOM 元素、变量、对象等）。
- Ref 对象在组件的整个生命周期内 **保持不变**，即使组件重新渲染，`ref.current` 的值也不会重置。
- 修改 `ref.current` 的值 **不会触发组件重新渲染**（与 `useState` 不同）。
- 

```
const ref = useRef(initialValue)
```



### 操作DOM

#### 基本操作

直接获取 DOM 元素的引用，用于手动操作（如聚焦输入框、滚动到指定位置等）。

在 React 创建 DOM 节点并将其渲染完毕后，React 会将`useRef`对象的 `current` 属性 设置为该 DOM 节点

```jsx
const Demo = () => {
  const inputRef = useRef(null);
  const handle = () => {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handle}>聚焦</button>
    </>
  )
}
export default Demo
```

#### 获取自定义组件的引用

默认情况下，组件不会将引用公开给其中的 DOM 节点，在控制台中会报错。

```jsx
const inputRef = useRef(null);

return <MyInput ref={inputRef} />;  
```

要解决此问题，需要在获取引用的组件将 `ref` 添加到组件接受的属性列表中，并将 `ref` 作为属性传递给相关子 [内置组件](https://react.nodejs.cn/reference/react-dom/components/common)

```jsx

import React,{ useState, useRef } from "react";
import { useEffect } from "react";

const Child = React.forwardRef(function Child(prop,ref){
  return <div ref={ref}>child</div>
})

const Demo = () => {

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, [])
  return (
    <>
      <p>{count}</p>
      <p>哈哈哈</p>
      <Child  ref={ref} />
      <button onClick={() => { setCount(count + 1)
      }}>累加</button>
      
    </>
  )
}
export default Demo
```

> [!CAUTION]
>
> 从 React 19 开始，[`ref` 可用作 prop。](https://react.nodejs.cn/blog/2024/12/05/react-19#ref-as-a-prop) 在 React 18 及更早版本中，需要从 [`forwardRef`。](https://react.nodejs.cn/reference/react/forwardRef) 获取 `ref`



#### 多次渲染只创建一次`useRef对象`

`useRef` 再次执行渲染的时候不会重新再创建新的对象，获取到的还是第一次渲染时的对象，在函数式中应该尽量使用 `useRef`去获取 `DOM` ，使用`React.Ref`，会造成性能浪费。

```jsx

import React,{ useState, useRef } from "react";
let prev1,prev2 
const Demo = () => {
  const box1 = useRef(null);
  const box2 = React.createRef()
  const [count, setCount] = useState(0);
  if (!prev1) {
    console.log("第一次执行")
    prev1 = box1
    prev2 = box2
  } else {
    console.log(prev1 === box1) // true
    console.log(prev2 === box2) // false
  }

  return (
    <>
      <p>{count}</p>
      <p ref={box1}>哈哈哈</p>
      <p ref={box2}>嘻嘻嘻</p>
      <button onClick={() => { setCount(count + 1)
      }}>累加</button>
      
    </>
  )
}
export default Demo

```





### 保存临时变量或状态

```jsx

import { useState, useRef } from "react";
const Demo = () => {
  const [count,setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    // setCount(0)
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1)
    },1000)
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}
export default Demo
```

## `useImperativeHandle`

`useImperativeHandle` 是 React 提供的 Hook，可让你自定义公开为 [引用](https://react.nodejs.cn/learn/manipulating-the-dom-with-refs) 的句柄。用于**自定义通过 ref 暴露给父组件的实例方法或属性**，允许子组件选择性地暴露特定方法或状态给父组件，避免直接暴露整个组件实例，保持封装性。

```typescript
useImperativeHandle(ref: React.MutableRefObject<any>, createHandle: () => any, deps?: DependencyList);
```

| 参数               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| **`ref`**          | 父组件传递给子组件的 ref，通过 `forwardRef` 接收。           |
| **`createHandle`** | 一个返回对象的函数，定义要暴露给父组件的方法或属性。         |
| **`deps`**         | 依赖数组（可选）。当依赖项变化时，会重新执行 `createHandle` 更新 ref。 |

```jsx

import React,{ useState, useRef,useImperativeHandle } from "react";
import { useEffect } from "react";

const MyInput = React.forwardRef(function MyInput(prop, ref) {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const submit = () => {
    console.log(submit);
  };
  useImperativeHandle(ref, () => {
    return {
      submit,
      count,
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <input ref={inputRef} />;
})
const Demo = () => {

  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, [])
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <>
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
      
    </>
  )
}
export default Demo
```

> [!CAUTION]
>
> 从 React 19 开始，[`ref` 可用作 prop。](https://react.nodejs.cn/blog/2024/12/05/react-19#ref-as-a-prop) 在 React 18 及更早版本中，需要从 [`forwardRef`。](https://react.nodejs.cn/reference/react/forwardRef) 获取 `ref`

## `useMemo`

`useMemo` 是 React 提供的 Hook，用于**缓存计算结果**，避免在每次渲染时重复执行昂贵的计算。

通过记忆化（Memoization）技术，仅在依赖项变化时重新计算，提升性能。

适用于**复杂计算**（如大数据处理、数学运算、数组过滤等）或**频繁触发渲染的场景**。

### 基础使用

```
const memoizedValue = useMemo(() => {
  // 执行计算或逻辑
  return 计算结果;
}, [依赖项1, 依赖项2]); // 依赖数组
```

#### **关键点**

1. **初始渲染**：`useMemo` 会立即执行传入的函数，并缓存结果。
2. **后续渲染**：只有当依赖数组中的某项发生变化时，才会重新执行函数并更新缓存值。
3. **依赖数组**：若依赖数组为空 `[]`，则仅在首次渲染时计算，后续渲染始终返回初始值。

### 跳过昂贵计算

```jsx
const Demo = () => {
  const [support, setSupport] = useState(0);
  const [ oppose, setOppose] = useState(0);
  const [count, setCount] = useState(0);

  const approvalRating = useMemo(() => {
    console.log('support', support)
    let approvalRating = 0
    if (support > 0) {
      approvalRating = (support / (support + oppose) * 100).toFixed(2)
    } 
    return approvalRating
  },[support,oppose])
  	

  const addSupport = () => {
    setSupport(support + 1)
  }
  const addOppose = () => {
    setOppose(oppose + 1)
  }

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>支持：{support}</p>
      <p>反对：{oppose}</p>
      <p>支持率：{approvalRating}</p>
      <p>{count}</p>
      <button onClick={addSupport}>支持</button>
      <button onClick={addOppose}>反对</button>
      <button onClick={handleClick}>点击更新视图</button>

    </div>
  )
}
export default Demo
```

### 跳过组件重新渲染

```tsx
const MemoizedChild = React.memo(({ data }) => {
  // 只有 data 变化时才重新渲染
  return <div>{data}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ key: 'value' });

  // 使用 useMemo 缓存 data 对象
  const memoizedData = useMemo(() => ({ ...data }), [data]);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <MemoizedChild data={memoizedData} /> {/* 仅在 data 变化时渲染 */}
    </div>
  );

```

### 缓存函数或对象

```jsx
function DynamicComponent({ condition }) {
  const memoizedFn = useMemo(
    () => () => console.log('Expensive computation'),
    [condition]
  );

  return <button onClick={memoizedFn}>Click me</button>;
}
```

当 `condition` 不变时，`memoizedFn` 的引用不变，避免频繁创建新函数。

## useCallback

#### **1. 基础概念**

- **定义**：
   `useCallback` 是 React 提供的一个 Hook，用于**缓存函数的引用**（即记忆化函数），避免在组件重新渲染时重复创建相同的函数实例。它返回一个**记忆化的函数**，只有当依赖项发生变化时，才会重新生成该函数。
- **核心作用**：
  1. **减少不必要的函数创建**：
     每次组件渲染时，未被缓存的函数会被重新定义，导致引用变化。使用 `useCallback` 可以避免这种情况，保持函数引用稳定。
  2. **优化子组件渲染**：
     当将函数作为 `props` 传递给使用 `React.memo` 包裹的子组件时，稳定函数引用可以避免子组件因 `props` 变化而重新渲染。
  3. **防止副作用无限循环**：
     在 `useEffect` 或 `useMemo` 中使用函数作为依赖项时，若未缓存函数可能导致无限循环（如依赖项变化触发重新渲染，进而重新定义函数，形成闭环）。

------

#### **2. 语法与参数**

```javascript
const memoizedCallback = useCallback(
  (args) => {
    // 函数逻辑
  },
  [dependency1, dependency2, ...] // 依赖项数组
);
```

- 参数说明
  1. **函数（`callback`）**：需要缓存的函数。
  2. 依赖项数组（`deps`）：
     - 类似 `useEffect`，当依赖项发生变化时，函数才会重新生成。
     - **空数组 `[]`**：函数仅在组件首次渲染时创建，后续不会更新。
     - **包含变量**：若依赖项变化（如状态或 props），函数会重新生成。
     - **省略数组**：函数会在每次渲染时重新生成（等同于不使用 `useCallback`）。

------

#### **3. 核心作用详解**

##### **3.1 避免函数重复创建**

- **问题**：
   组件每次渲染时，未缓存的函数会被重新定义，导致引用变化。例如：

  ```jsx
  function Parent() {
    const [count, setCount] = useState(0);
    
    // 每次渲染都会创建新函数
    const handleClick = () => {
      console.log("Clicked");
    };
    
    return (
      <Child onClick={handleClick} />
    );
  }
  ```

  - **问题**：`handleClick` 的引用每次渲染都会变化，导致 `Child` 组件重新渲染（即使 `handleClick` 内容未变）。

- **解决方案**：
   使用 `useCallback` 缓存函数：

  ```jsx
  function Parent() {
    const [count, setCount] = useState(0);
    
    // 仅在依赖项变化时更新函数（空数组则永不更新）
    const handleClick = useCallback(() => {
      console.log("Clicked");
    }, []);
    
    return (
      <Child onClick={handleClick} />
    );
  }
  ```

##### **3.2 与 `React.memo` 结合优化子组件**

- **场景**：
   子组件使用 `React.memo` 避免重复渲染，但父组件传递的函数未被缓存时，子组件仍会因 `props` 变化而重新渲染。

- **示例**：

  ```
  // 子组件 Child.js（使用 React.memo）
  const Child = React.memo(({ onClick }) => {
    console.log("Child Rendered"); // 每次父组件渲染都会触发
    return <button onClick={onClick}>Click</button>;
  });
  
  // 父组件 Parent.js（未使用 useCallback）
  function Parent() {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
      console.log("Clicked");
    };
    
    return (
      <div>
        <Child onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </div>
    );
  }
  ```

  - **问题**：点击“Update Count”时，父组件重新渲染，`handleClick` 引用变化，导致 `Child` 重新渲染（即使 `handleClick` 逻辑未变）。

  - 解决方案

    ：使用useCallback缓存handleClick，确保其引用稳定：

    ```
    const handleClick = useCallback(() => {
      console.log("Clicked");
    }, []);
    ```

##### **3.3 防止 `useEffect` 的无限循环**

- 问题：若useEffect的依赖项包含未缓存的函数，每次渲染时函数会重新定义，导致useEffect不断触发。

  

  ```
  function Component() {
    const [data, setData] = useState([]);
    
    // 未缓存的函数
    const fetchData = () => {
      // 异步请求
    };
    
    useEffect(() => {
      fetchData();
    }, [fetchData]); // 依赖项每次渲染都会变化 → 无限循环
  }
  ```

- 解决方案

  使用 `useCallback` 缓存 `fetchData`，并确保依赖项仅包含必要变量：

  ```javascript
  const fetchData = useCallback(() => {
    // 异步请求
  }, [/* 依赖项如 API 端点 */]);
  ```

------

#### **4. 使用场景**

1. **传递函数给 `React.memo` 子组件**：
   确保子组件的 `props` 引用稳定，避免不必要的渲染。
2. **作为 `useEffect` 或 `useMemo` 的依赖项**：
   防止因函数重新定义导致的无限循环或重复计算。
3. **性能敏感场景**：
   如大型列表组件中，避免频繁创建函数导致的性能问题。

------

#### **5. 示例代码**

##### **5.1 未使用 `useCallback` 的问题**

```javascript
// 父组件
function Parent() {
  const [count, setCount] = useState(0);
  
  // 每次渲染都会创建新函数
  const handleClick = () => {
    console.log("Clicked");
  };
  
  return (
    <Child onClick={handleClick} />
  );
}

// 子组件（使用 React.memo）
const Child = React.memo(({ onClick }) => {
  console.log("Child re-rendered"); // 每次父组件渲染都会触发
  return <button onClick={onClick}>Click</button>;
});
```

##### **5.2 使用 `useCallback` 优化**

```javascript
function Parent() {
  const [count, setCount] = useState(0);
  
  // 使用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // 空数组 → 函数仅创建一次
  
  return (
    <Child onClick={handleClick} />
  );
}
```

------

#### **6. 注意事项**

1. **依赖项数组的正确配置**：

   - 依赖项缺失：可能导致函数过早更新（闭包问题）。

     ```javascript
     // 错误示例：handleClick 依赖 `count` 但未包含在依赖项中
     const handleClick = useCallback(() => {
       console.log(count); // 闭包会引用外部 count
     }, []); // 依赖项缺少 count → 可能读取旧值
     ```

   - 依赖项过多：可能导致函数频繁更新，抵消缓存效果。

     ```javascript
     // 错误示例：依赖项包含频繁变化的 state
     const handleClick = useCallback(() => {
       // ...
     }, [count, anotherState]); // 每次 count 或 anotherState 变化都会重新生成函数
     ```

2. **与 `useMemo` 的区别**：

   - `useCallback` 缓存**函数引用**。
   - `useMemo` 缓存**计算结果**（如复杂对象、计算值）。
   - **关系**：`useCallback` 类似 `useMemo`，但专门用于函数。

3. **避免滥用**：

   - 若函数逻辑简单且创建成本低，无需使用 `useCallback`。
   - 对于高频变化的依赖项，缓存可能无效甚至增加内存负担。

4. **闭包问题**：

   - 如果函数内部依赖外部状态，需确保依赖项包含该状态，否则可能读取到旧值。

     ```javascript
     // 正确示例：依赖项包含 `count`
     const handleClick = useCallback(() => {
       console.log(count); // 读取最新 count
     }, [count]); // 依赖项包含 count → 函数更新时会获取最新值
     ```

------

#### **7. 常见问题**

**Q：`useCallback` 的依赖项数组是否必须包含 `useState` 的 `setter`（如 `setCount`）？**
 A：通常不需要。因为 `useState` 的 `setter` 函数（如 `setCount`）在组件初始化后不会变化，因此无需包含在依赖项中。

javascript

深色版本



```
// 正确写法
const handleClick = useCallback(() => {
  setCount(prev => prev + 1); // 使用 setter
}, []); // 不需要包含 setCount
```

**Q：如何调试 `useCallback` 是否生效？**
 A：可以通过在控制台打印函数引用地址：

```javascript
console.log("Function ID:", handleClick); // 若多次渲染后地址相同，则缓存生效
```

------

#### **8. 总结**

- **核心作用**：缓存函数引用，优化性能，避免不必要的渲染。
- 关键点：
  1. 依赖项数组需正确配置，避免闭包问题或无效缓存。
  2. 与 `React.memo` 和 `useEffect` 结合使用效果显著。
  3. 不要滥用，需权衡性能与代码复杂度。
- **适用场景**：
  函数作为 `props` 传递给子组件、作为副作用依赖项时，或需频繁复用的函数。

通过合理使用 `useCallback`，可以显著提升 React 应用的性能和可维护性！

## 自定义Hook

- **定义**：自定义 Hook 是一个以 `use` 开头的 JavaScript 函数，可以调用其他内置的 React Hook（如 `useState`、`useEffect` 等），用于将组件中的逻辑提取并复用。
- **核心思想**：将状态逻辑与 UI 分离，提高代码的复用性、可维护性和可读性。
- 优势
  - **复用逻辑**：将重复的逻辑（如表单验证、网络请求、副作用处理）封装到一个函数中，供多个组件调用。
  - **简洁灵活**：相比高阶组件（HOC）和渲染属性（Render Props），Hook 不会引入额外的组件层级。
  - **直观命名**：通过 `use` 前缀明确标识功能，便于团队协作和代码维护。

```tsx
import { useState } from "react";
const usePartialState = <T extends object>(initialState: T):[T, (partialState: Partial<T>) => void]  => {
    const [state, setState] = useState<T>(initialState);
    const setPartialState = (partialState: Partial<T>) => {
        setState((prevState) => ({ ...prevState, ...partialState })); 
    }
    return [state, setPartialState]
}
type State = { name: string; age: number; city: string };
const Demo = () => {
    const [state, setPartialState] = usePartialState<State>({
        name: "John",
        age: 30,
        city: "New York",
    });
  
    const update = () => {
        
        setPartialState({ age: 31 }); 
        setPartialState({ name: "Jane" }); // 正确的用法 
    }
    return (
        <div>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <p>City: {state.city}</p>
            <button onClick={update}>点击</button>
        </div>
    )
}

export default Demo;
```

> [!NOTE]
>
> 如果hook 使用use开头，React 会进行校验。如果没有在函数顶层作用域使用，会报错。

