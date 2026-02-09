# Promise 与 异步

## 1. Promise 

### 1.1 简介

ECMAscript 6 原生提供了 Promise 对象。Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。

### 1.2 特点

对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：

- pengding：初始状态，不代表成功或者失败。

- fulfilled：意味着操作成功完成。

- rejected： 意味着操作失败。

只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变。

一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调地狱。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。

```

```

Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。



### 1.4 简单使用

使用 new 来调用 Promise 的构造器来进行实例化。

- resolve将Promise的状态置为fullfiled。

- reject是将Promise的状态置为rejected。

```javascript
const myPromise = new Promise(function(resolve,reject){
	// 异步处理
	// 处理结束后、调用resolve 或 reject
	//当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
     setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
}) 
myPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    document.write("Yay! " + successMessage);
});

```

实例化的 `promise` 对象会立即执行里面的内容，所以我们一般将需要`promise` 对象放在函数中。再需要的时候再去执行这个函数。

对于已经实例化过的 promise 对象可以调用 promise.then() 方法，传递 resolve 和 reject 方法作为回调。promise.then() 是 promise 最为常用的方法。

```javascript
promise.then(onFulfilled, onRejected)
```

promise简化了对error的处理，上面的代码我们也可以这样写：

```javascript
promise.then(onFulfilled).catch(onRejected)
```

```javascript
function ajax(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest(); 
        req.open('GET', URL, true);
        req.onload = function () {
        if (req.status === 200) { 
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            } 
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send(); 
    });
}
var URL = "/try/ajax/testpromise.php"; 
ajax(URL).then(function onFulfilled(value){
    document.write('内容是：' + value); 
}).catch(function onRejected(error){
    document.write('错误：' + error); 
});

```

### 1.5 链式操作

```javascript
function runAsync1() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}

function runAsync2() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}

function runAsync3() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}

runAsync1()
    .then(function (data) {
        console.log(data);
        return runAsync2();
    })
    .then(function (data) {
        console.log(data);
        return runAsync3();
    })
    .then(function (data) {
        console.log(data);
    });
```

```javascript
// 在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以接收到数据
runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return '直接返回数据';  //这里直接返回数据
})
.then(function(data){
    console.log(data);
});
```



### 1.6 并行操作

Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

```javascript
function runAsync1() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}

function runAsync2() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}

function runAsync3() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}


Promise
    .all([runAsync1(),runAsync2(),runAsync3()])
    .then((results)=>{
        console.log(results)  // [ '随便什么数据1', '随便什么数据2', '随便什么数据3' ]
    })

```

用Promise.all来执行，all接收一个数组参数，里面的值最终都算返回Promise对象。这样，三个异步操作的并行执行的，

all方法的效果实际上是「谁跑的慢，以谁为准执行回调」，那么相对的就有另一个方法「谁跑的快，以谁为准执行回调」，这就是race方法，这race的用法与all一样。

虽然 race 与 all 方法都是并行执行，但是与all 不同的是，race 在最快的那个方法执行完后then 里的回调函数开始执行

```javascript
function runAsync1() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}

function runAsync2() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}

function runAsync3() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}


Promise
    .race([runAsync1(),runAsync2(),runAsync3()])
    .then((result)=>{
        console.log(result)  // "随便什么数据1"
    })

```



## 2. async 与 await

async 是“异步”的简写，而 await 可以认为是 async wait 的简写。 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。

await 只能出现在 async 函数中。

### 2.1 async 的作用

async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象。如果在函数中 `return` 一个直接量，async 会把这个直接量通过 `Promise.resolve()` 封装成 Promise 对象。

`Promise.resolve(x)` 可以看作是 `new Promise(resolve => resolve(x))` 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。

```javascript
async function test() {
    return "hello world"
}

console.log(test()) // promise {"hello world"}
```

async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：`then()` 链来处理这个 Promise 对象

```javascript
async function test() {
    // 如果 async 函数没有返回值，则为undefined
    return "hello world"
}

test().then((v)=>{
    console.log(v)  // hello world
})
```

### 2.2 await 的作用

一般来说，都认为 await 是在等待一个 async 函数完成。不过按[语法说明](https://link.segmentfault.com/?enc=HB%2BRtEqSbSV%2BOdMW9vfaAw%3D%3D.9ru4rXKwPAxROFddGqG8ejjpE6KIuwj%2BW9nxano%2B4a5j4pW%2BOMWL3Z%2Bc3PEakYKUV1xzqTf5qH2JOrWlHSRFH454XuTd896Nd3gL%2FWjNdPU%3D)，await 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值。

因为 async 函数返回一个 Promise 对象，所以 await 可以用于等待一个 async 函数的返回值——这也可以说是 await 在等 async 函数，但要清楚，它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量的。所以下面这个示例完全可以正确运行。

```javascript
function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();
```

`await` 是个运算符，用于组成表达式，`await `表达式的运算结果取决于它等的东西。

如果 `await` 等到的不是一个 `Promise` 对象，那 `await` 表达式的运算结果就是它等到的东西。

如果 `await` 等到的是一个 `Promise `对象，await 会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

虽然  `await` 等到的是一个 `Promise `对象时会阻塞后面的代码，但是async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行，这也是await 必须用在 async 函数中的原因。















