# 数组
创建新数组的三种方式：
```js
const a1 = [] // 字面量的方式创建
// 构造函数
const a2 = Array() // 实际上调用new Array()
const a3 = new Array()

[10] // 传的任意参数都是作为数组元素

// 对于Array()或new Array():
// 1. 传了一个参数，且为数字类型，则表示数组长度
//   1.1 这个数字 大于0, 创建一个以该数字为长度的元素均为空的数组
new Array(3) // [empty x 3]，即[,,]
//   1.2 这个数字 不大于0，报错
new Array(-1) // Invalid array length
// 2. 否则，参数作为数组元素
new Array('3') // ['3']
new Array(1, 2) // [1, 2]
```


## map方法
```javascript
new Array() // [empty x 3]

new Array()[0] === undefined // true

new Array(3).map((item, index) => console.log(item, index)) // [empty x 3]
```
[原因：](https://blog.csdn.net/qq_17175013/article/details/82155667)

new Array(length) 会创建一个长度为length的数组，但是数组中每个元素都是空的。

比较空元素 === undefined时为true，但是空元素并不真的是undefined。

Array的map()方法接收一个回调函数，但是只有对应元素有值的索引会调用，哪些从未赋过值或被delete删除的元素的索引则不会调用。

```js
let a = ['a', 'b', 'c']
delete a[0] // [empty, 'a', 'b']，即[,'a','b']
let b = a.map((item, index) => console.log(item, index))
// 'a' 1
// 'b' 2
b // [empty, undefined, undefined]
```

所以一般new Array(length)之后会调用fill(element)使用指定元素element填充数组，如
```js
let a = new Array(3).fill(0) // [0, 0, 0]
a.map(item => console.log(item))
// 0
// 0
// 0
```