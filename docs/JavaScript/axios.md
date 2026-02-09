# axios 的使用

## 1. 什么是Axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 2. 安装

```javascript
npm install axios
```

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## 3. 基本操作方法

### 3.1 get方法

```javascript
# 直接请求
axios.get('/user?ID=12345').then(function (response) {
    console.log(response);
  })
.catch(function (error) {
    console.log(error);
  });
# 带参数的请求
axios.get('/user', {
    params: {
      ID: 12345
    }
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
```

### 3.2 post 方法