# 	redux

## **Redux 是什么？**

**Redux** 是一个**状态管理库**，主要用于 JavaScript 应用（尤其是 React 应用），帮助集中管理应用的全局状态。其核心思想是**单向数据流**和**不可变性**，通过以下组件协作实现状态管理：

- **Store**：应用的唯一数据源。
- **Action**：触发状态变化的**事件对象**（包含类型和数据）。
- **Reducer**：根据 Action 更新 State 的**纯函数**。
- **Dispatch**：向 Store 分发 Action 的方法。
- **getState**：获取当前 State 的方法。

## **Redux 核心概念详解**

#### **Store（存储）**

- **作用**：创建全局公共的容器，存储应用的全局状态，是唯一的数据源。
- **创建方式**：通过 `createStore(reducer)` 方法创建。
- API：
  - `getState()`：获取当前 State。
  - `dispatch(action)`：触发状态更新。
  - `subscribe(listener)`：监听 State 变化并触发回调。

#### **Action（动作）**

- **定义**：一个描述“发生了什么”的普通对象，必须包含 `type` 字段（标识动作类型），可选 `payload`（携带数据）。

- 示例：

  

  ```
  // 增加计数器的 Action
  const incrementAction = {
    type: 'INCREMENT',
  };
  
  // 异步请求数据的 Action
  const fetchDataAction = {
    type: 'FETCH_DATA_REQUEST',
    payload: { url: '/api/data' },
  };
  ```

#### **Reducer（规约函数）**

- **作用**：根据 Action 更新 State，返回新的 State。

- 规则:

  1. 必须是**纯函数**（输入相同参数，输出相同结果）。
  2. **不可直接修改 State**，而是返回新 State（不可变性）。

- 示例

  ```jsx
  const initialState = { count: 0 };
  
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }
  ```

#### **Dispatch（分发）**

- **作用**：将 Action 发送到 Store，触发 Reducer 更新 State。

- 示例

  ```
  store.dispatch(incrementAction); // 触发计数器增加
  ```

#### 完整示例

```tsx
// store/index.ts
import { createStore } from 'redux'
// 定义状态的接口
interface State {
  supNum: number;
  oppNum: number;
}
// 定义动作的类型
interface AddSupAction {
  type: 'ADD_SUP';
}

interface AddOppAction {
  type: 'ADD_OPP';
}

type Action = AddSupAction | AddOppAction;
const initialState: State = {
  supNum: 10,
  oppNum: 5,
}

const store = createStore<State,Action>((state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUP':
      return {
        ...state,
        supNum: state.supNum + 1,
      }
    case 'ADD_OPP':
      return {
        ...state,
        oppNum: state.oppNum + 1,
      }
    default:
      return state
  }
})

export default store

```

```tsx
// view/Domo.tsx
import { useEffect,useState } from "react";
import store from "../store";
const VoteMain = () => {
  const {oppNum,supNum} = store.getState();

  return (
    <div>
      <p>支持人数： {supNum}人</p>
      <p>反对人数： {oppNum}人</p>
    </div>
  );
};

const VoteTool = () => {
  
    const handle = (type: 'ADD_SUP' | 'ADD_OPP') => {
        // 分发
        store.dispatch({
            type,
        })
    };
  return (
    <div>
      <button onClick={handle.bind(null,'ADD_SUP')}>支持</button>
      <button onClick={handle.bind(null,'ADD_OPP')}>反对</button>
    </div>
  );
};

const Demo = () => {
    const [_, setNum] = useState(0);
    useEffect(()=>{
        // 在组件渲染完毕后，需要将组件更新的方法传递给store，用来在store 更新后触发更新视图。
        store.subscribe(()=>{
            setNum( + new Date())
        })
    },[])
    const {oppNum, supNum} = store.getState();
  return (
    <div>
      <p>投票总人数：{oppNum + supNum}人 </p>
      <VoteMain />
      <VoteTool />
    </div>
  );
};
export default Demo;
```

## combineReducers

- **定义**：
   `combineReducers` 是 Redux 的一个辅助函数，用于将多个分开的 reducer（每个负责管理应用状态的一部分）合并成一个单一的 root reducer。这个 root reducer 可以传递给 `createStore` 作为参数，从而管理整个应用的状态。
- **核心作用**：
   将分散的 state 片段组合成一个统一的 state 对象，并将对应的 reducers 关联到各自的 state 片段上。

### 基本语法

```jsx
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2,
  // ...其他 reducers
});
```

### 使用

```js
// counterReducer.js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}

export default counterReducer;
```

```js
// rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;

// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
```

```javascript
// 组件中访问 state：
const state = store.getState();
console.log(state.counter); // 访问 counter 的 state
console.log(state.user);    // 访问 user 的 state
```

## redux-toolkit

Redux Toolkit 是由 Redux 官方团队提供的工具包，旨在简化 Redux 的使用，消除冗余的配置和样板代码，提供开箱即用的最佳实践。

### 核心目标

- 减少配置复杂度（如 store 配置、中间件集成）。
- 消除冗余代码（如不可变状态更新、action 类型定义）。
- 集成常用工具（如 Immer、Thunk、Reselect）。

### 主要功能

#### **`configureStore`**简化 Store 配置

自动处理 store 创建，内置默认配置（如中间件、DevTools 支持）。

```javascript
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});
```

- **自动合并 reducer**：通过对象形式传递 reducers，无需手动调用 `combineReducers`。
- **默认中间件**：包含 `redux-thunk` 和 `redux-toolkit` 的优化。
- **支持 DevTools**：默认开启 Redux DevTools 扩展。

#### **`createSlice`** 自动化状态管理

生成 reducer 和 action creator 的组合，简化状态逻辑。

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // 直接修改状态（Immer 自动处理不可变性）
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

- **Immer 集成**：允许直接修改状态对象（如 `state.value++`），无需手动返回新对象。
- **自动生成 action type**：通过 `name` 和 `reducers` 自动推导 action 类型，无需手动定义常量。

#### **`createAsyncThunk`**异步操作处理

简化异步操作，自动生成 `pending`、`fulfilled`、`rejected` 三种 action。

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 定义异步操作
const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
});

// 在 slice 中处理
const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
```

#### **其他实用工具**

- **`createEntityAdapter`**：
  管理规范化数据（如列表数据），提供 `addOne`、`addMany`、`removeOne` 等方法。
- **`createSelector`**：
  来自 Reselect，用于缓存复杂派生状态的计算结果，避免重复计算。
- **类型推导**：
  通过 TypeScript 提供类型安全，减少手动类型定义。

### 完整示例

```typescript
// store/counterSlice.ts
import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    supNum: 0,
    oppNum: 0,
  },
  reducers: {
    addSup: (state) => {
      state.supNum += 1;
    },
    addOpp: (state) => {
      state.oppNum += 1;
    },
  },
});

export const {addSup, addOpp} = counterSlice.actions;
export default counterSlice.reducer;

// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});
export default store;

```

```tsx
import { useEffect, useState } from "react";
import store from "../store";
import { addOpp, addSup } from "../store/counterSlice";
const VoteMain = () => {
  
  // store.subscribe(() => {
  //   console.log("store.getState()", store.getState().counter) });
  const { oppNum, supNum } = store.getState().counter;
  return (
    <div>
      <p>支持人数： {oppNum}人</p>
      <p>反对人数： {supNum}人</p>
    </div>
  );
};

const VoteTool = () => {
  
  return (
    <div>
      <button onClick={()=>store.dispatch(addOpp())}>支持</button>
      <button onClick={()=>store.dispatch(addSup())}>反对</button>
    </div>
  );
};

const Demo = () => {
    const [_, setNum] = useState(0);
    useEffect(()=>{
      // 在使用 react-redux 的时候，可通过其他方式进行自动订阅
        store.subscribe(()=>{
          // 让组件更新的方法
            setNum( + new Date())
        })
    },[])
    const {oppNum, supNum} = store.getState().counter;
  return (
    <div>
      <p>投票总人数：{oppNum + supNum}人 </p>
      <VoteMain />
      <VoteTool />
    </div>
  );
};
export default Demo;
```

## react-redux

**React-Redux** 是一个 **React 与 Redux 的绑定库**，它提供了一套工具和 API，使得 React 组件能够方便地与 Redux Store 进行交互。其核心目标是：

1. **集中式状态管理**：将应用的全局状态存储在 Redux Store 中，方便跨组件共享和管理。
2. **组件与状态解耦**：通过 React-Redux 的 API，组件无需直接操作 Store，而是通过声明式的方式订阅和更新状态。
3. **性能优化**：自动处理组件的重新渲染，避免不必要的更新。

### 核心概念

| API         | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| Provider    | 将 Redux Store 提供给整个 React 应用，使所有组件都能访问 Store。 |
| connect     | （类组件）将组件与 Redux Store 连接，映射状态和操作到组件的 props（函数组件也可使用）。 |
| useDispatch | （函数组件）获取 dispatch 方法，用于触发 Action。            |
| useSelector | （函数组件）从 Store 中选择特定状态片段。                    |

### 使用步骤

##### **1. 安装依赖**

```
npm install redux react-redux @reduxjs/toolkit
```

##### **2. 创建 Redux Store**

###### **传统方式（Redux Core）**

```
// store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 支持异步操作
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
```

###### **现代方式（Redux Toolkit）**

javascript

深色版本



```
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

##### **3. 提供 Store 给整个应用**

javascript

深色版本



```
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

##### **4. 在组件中使用 Redux**

###### **方式一：使用 `useSelector` 和 `useDispatch`（推荐）**

```
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
```

###### **方式二：使用 `connect` 高阶组件（旧版 API）**

```
// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.value,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

##### **5. 定义 Reducer 和 Action**

###### **传统方式（Redux Core）**

```
// reducer/counterReducer.js
const initialState = { value: 0 };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

// actions/counterActions.js
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
```

###### **现代方式（Redux Toolkit）**

```
// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

#### **四、React-Redux 的优势**

1. **高效的状态同步**：通过 `useSelector` 和 `connect` 实现组件与 Store 的自动同步。
2. **简化开发流程**：Redux Toolkit 减少了样板代码（如 Action Types、Switch 语句）。
3. **支持异步操作**：结合 `redux-thunk` 或 `redux-saga` 处理异步逻辑。
4. **调试友好**：支持 Redux DevTools 扩展，方便跟踪状态变化。

------

#### **五、最佳实践**

1. **何时使用 React-Redux？**

   - 多个组件需要共享状态。
   - 状态需要跨层级访问（如全局用户信息）。
   - 需要复杂的异步逻辑或缓存。

2. **项目结构建议**

   ```
   src/
   ├── store/
   │   ├── features/       # 按功能划分的 Slice
   │   ├── appStore.js     # 配置 Store
   │   └── index.js        # 导出 Store
   ├── components/         # React 组件
   └── App.js
   ```
   
3. **性能优化**

   - 使用 `useSelector` 的记忆化特性（如 `reselect` 库）避免重复计算。
   - 对大型应用拆分 Reducer（使用 `combineReducers`）。

------

#### **六、常见问题**

1. **为什么状态更新后组件没有重新渲染？**

   - 确保 Reducer 返回新状态（避免直接修改状态）。
   - 检查 `useSelector` 是否正确提取状态路径。

2. **如何处理异步操作？**

   - 使用 `redux-thunk`（推荐）或 `redux-saga`。

   - 示例（Redux Toolkit）：
     ```
     export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
       const response = await fetch('/api/user');
       return response.json();
     });
     
     const userSlice = createSlice({
       name: 'user',
       initialState: { data: null, loading: 'idle' },
       reducers: {},
       extraReducers: (builder) => {
         builder.addCase(fetchUser.pending, (state) => {
           state.loading = 'pending';
         });
         builder.addCase(fetchUser.fulfilled, (state, action) => {
           state.data = action.payload;
           state.loading = 'idle';
         });
       },
     });
     ```

#### **七、总结**

React-Redux 是 React 应用中管理全局状态的首选方案，其核心在于通过 Store 统一管理状态，并通过 `useSelector` 和 `useDispatch` 实现组件与状态的高效交互。结合 Redux Toolkit 可以显著简化开发流程，减少样板代码。对于复杂应用，合理拆分 Reducer 和使用异步中间件（如 `redux-thunk`）是关键。
