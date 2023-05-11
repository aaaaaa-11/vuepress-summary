# JS数据类型
[学习网站](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview)
>JS是一种有着动态类型的动态语言，其变量可以分配/重新分配所有类型的值。

JS数据类型包含基本数据类型和引用数据类型（复杂数据类型）。其中基本数据类型包含Number、String、Boolean、Symbol、null、undefined，引用数据类型包含Object，其中Object又包含Function、Array、Date、RegExp。
- Number
- String
- Boolean
- Symbol
- Object
  - Function
  - Array
  - Date
  - RegExp
- null
- undefined

基本类型的数据存在栈内存中，引用类型数据存在堆内存中，声明的引用类型变量存储的是一个堆内存地址。

## 数字
数字类型的数据，其实是浮点数，在运算时，可能会出现精度不准的情况：
```javascript
0.1 + 0.2 = 0.30000000000000004
0.1 + 0.2 === 0.3 // false
```

0开头的数字会被视为八进制，0x开头视为十六进制，0b开头视为二进制
```javascript
012 // 10
0x12 // 18
0b11 // 3
```

`NaN`（Not a Number），不合法的数字
```javascript
NaN == NaN // false
NaN === NaN // false
isNaN(NaN) // true
```

Infinity（正无穷）和-Infinity（负无穷）
```javascript
1 / 0 // Infinity
-1 / 0 // -Infinity
isFinite(-1 / 0) // false
isFinite(-1) // true
isFinite(NaN) // false
isFinite('a') // false
isFinite('0') // true
Number.isFinite('0') // false
```

JS能表示的整数范围：-2**53 ~ 2**53（不含两端点），ES6新增了`BigInt`类型，可以用来表示任意大的整数。需要注意：不能用于Math对象中的方法；不能和Number实例混合运算，两者必须转换成同一类型，但是BigInt转Number时可能会丢失精度。
```javascript
typeof 1n // 'bigint'

+1n // Cannot convert a BigInt value to a number

// 带小数的运算会被取整
1n / 2n // 0n

1n == 1 // true
1n === 1 // false
1n < 2 // true

[1, -1n, 0, 4, 3n].sort() // [-1n, 0, 1, 3n, 4]

JSON.stringify(1) // '1'
JSON.stringify(1n) // Do not know how to serialize a BigInt
JSON.stringify(1n + '') // '"1"'
```
