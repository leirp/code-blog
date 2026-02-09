# API

## memo

`memo` 允许你在属性不变时跳过重新渲染组件。

```jsx
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

```
import {useState,useMemo,memo, useEffect} from 'react'

const List = 
    memo(
        ({list}:{list:number[]}) => {
        useEffect(() => {
            console.log('List组件重新渲染')
        })
        return (
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))} 
            </ul>
        )
    }
)
List.displayName = 'List'
export const Demo = () => {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([1,3,5])
    const handle = () => {
        
       // 生成随机数，并插入list 数组
       const randomNumber = Math.floor(Math.random() * 100) + 1;
       setList([...list, randomNumber])
    }
    useEffect(() => {
        console.log('重新渲染') 
    })
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>增加</button>
            
            <button onClick={handle}>更新数组</button>
            List:
            <List list={list}></List>
        </div>
    )
}
```

