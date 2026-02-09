# RxJs

## 函数式编程和响应式编程

### 响应式编程

**响应式编程**，Reactive Programing，又称反应式编程，简称 RP，一种面向`数据流`、`变化传播`、实现`异步编程`的编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。数据流可以接受一个，甚至多个。而响应式就是从数据流中过滤、组合等操作出你感兴趣的以生成一个新的数据流，还可以把一个流中的数据值映射到一个新的数据流中。

它的`变化传播`在于一个数据流经过一串操作转化为另一个数据流，然后分发给各个订阅者的过程。它的`异步编程`在于数据流被分发到各个订阅者前对数据进行特殊处理，订阅者根据数据处理后响应新的数据流



### 函数式编程

强调使用函数来解决问题的一种编程方式。主要有以下特点

函数为必须为声明式

函数必须为纯函数： 函数执行过程完全由输入参数决定，不会受参数之外的任何数据影响。不会修改任何外部的全局变量或传入的参数对象。

数据不可变性：不修改原来数据，产生新的数据来作运算结果。

```javascript
// 函数为声明式
const double = (arr)=>arr.map((item:number)=>item*2);
const addOne = (arr)=>arr.map((item:number)=>item+1);

const arrPush1 = (data: Array<number>, addNum: number) => {
// 改变了外部变量，违反了纯函数的规则
    data.push(addNum);
    return data;
};
const arrPush2 = (data: Array<number>, addNum: number) => {
// 产生新数据
   return [...data, addNum];
};
const initData = [1, 2, 3];
const doubleArr1 = arrPush1(initData, 4);
const printArr1 = double(doubleArr1); // [2,4,6,8]
// initData = [1,2,3,4]

const doubleArr2 = arrPush2(initData, 4);
const printArr2 = double(doubleArr2); // [2,4,6,8,8]
// initData=[1,2,3]

```





## 发布订阅模式

