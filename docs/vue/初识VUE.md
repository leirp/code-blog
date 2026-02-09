# 初识VUE

## 命令式编程与声明式编程

###  命令式编程

+ 创建div元素，设置id属性
+ 定义一个变量叫message
+ 将message变量放在div元素中显示
+ 修改message数据
+ 将修改的元素替换到div

### 创建一个div元素，设置id属性

+ 定义一个vue对象，将div挂载在vue对象上
+ 在vue对象内定义变量message，并绑定数据
+ 将message变量放在div元素上显示
+ 修改vue对象中的变量message，div元素数据自动改变

## 创建 VUE 实例

在创建 VUE 实例的时候，传入一个对象 options，options中包含的选项有：

> el
>
> >类型：string|HTMLELement;
> >
> >作用：决定之后 Vue 实例会管理哪一个 DOM。
>
> data
>
> > 类型：Object|function(组件)
> >
> > 作用：Vue 实例对应的数据对象。
>
> methods
>
> > 类型：{[key:string]:function}
> >
> > 作用：VUE 实例的方法对象
>
> computed
>
> > 类型：{[key:string]:function}
> >
> > 作用：计算属性
>
> watch
>
> >类型：{[key:string]:function}
> >
> >作用：监听数据变化
>
> fitler

##  VUE 的简单使用

```vue
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta http-equiv="X-UA-Compatible" content="ie=edge">
		  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
		  <title>HelloVuejs</title>
		</head>
		<body>
		  <div id="app">
		      <h2>{{message}}</h2>
		      <p>{{name}}</p>
		  </div>
		  <script>
		    //let变量/const常量
		    //编程范式：声明式编程
		    const app = new Vue({
		      el:"#app",//用于挂载要管理的元素
		      data:{//定义数据
		        message:"HelloVuejs",
		        name:"zzz"
		      }
		    })
		  </script>
		</body>
		</html>

```

一个vue 实例不能同时接管两个容器，一个容器也不能同时接管两个实例

```html
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta http-equiv="X-UA-Compatible" content="ie=edge">
		  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
		  <title>HelloVuejs</title>
		</head>
		<body>
		  <div class="app">
		      <h2>{{message}}</h2>
		      <p>{{name}}</p>
		  </div>
           <div class="app">  <!--第二个不生效-->
		      <h2>{{message}}</h2>
		      <p>{{name}}</p>
		  </div>
		  <script>
		    
		    const app = new Vue({
		      el:".app",
		      data:{
		        message:"HelloVuejs",
		        name:"zzz"
		      }
		    })
		  </script>
		</body>
		</html>
```





 















