# var let const区别
- **var严格来说不支持块级作用域只有全局作用域和函数作用域，let const声明一个块级作用域**，var声明的全局作用域可以挂载到window上（如果顶层对象是window的话，nodejs中的顶层是global，var声明的变量是函数变量，不会挂载到global上）
> 块级作用域：ES6新增的，使用{}包裹的一段代码，例如函数、判断语句、循环语句，甚至-个单独的{}都可以被看作是一个块级作用域。let和const声明的变量是有块级作用域的。
- **const let不存在变量声明的提前，var有声明提前**，所以const和let在声明变量/常量之前是不能获取到的——**暂时性死区**。
- const、let是ES6新增的，var是ES5
- const声明的是常量，不能被修改，let和var声明的是变量，可以修改
- const在声明时必须赋值，let和var不需要
- let和const不能重复声明同一个变量，但是var可以，var最后一个声明的值会覆盖之前的
  ```javascript
    var a = 1 // 全局变量会挂载到window上，window.a 1
    let b = 2 // 不会挂载到window上 window.b undefined
  ```
  ```javascript
    {
      let a = 1
      const b = 1
      var c = 1 // 不要在块级作用域中使用var，因为var形成不了块级作用域，代码块外面还是能访问到
    }
    // a not defined
    // b not defined
    c // 1
  ```
  ```javascript
    var li = document.querySelectorAll('li')
    for (var i = 0; i < 3; i++) {
      li[i].onclick = function () {
        console.log(i)
      }
    }
    // 结果：点击元素后，全都打印3
    // 异步执行回调函数，事件在循环时绑定，循环走完i=3，鼠标点击时触发回调函数，此时访问到的i为3


    // 解决
    var li = document.querySelectorAll('li')
    for (let i = 0; i < 3; i++) {
      li[i].onclick = function () {
        console.log(i)
      }
    }
    // 使用let形成块级作用域，每次迭代重新绑定
  ```
  ```javascript
    function f () { // 函数作用域
      var a = 1
    }
    // a not defined
  ```
  ```javascript
    console.log(a) // 声明提前
    var a = 1
    console.log(b) // 没有声明提前，报错
    let b = 1
  ```
  ```javascript
    const a // 报错，必须在声明时赋值
  ```
  ```javascript
    var a = 1
    var a = 2 // 可以重复声明，后面的声明会覆盖前面的声明
  ```
  ```javascript
    var a = 1
    let a = 2 // 报错，let和var不能重复声明同一变量
  ```
  ```javascript
    let a = 1
    let a = 2 // 报错，let不能重复声明
  ```
