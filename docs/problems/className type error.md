# React className 收到错误的类型：布尔值
```javascript
  const classes = condition ? 'class-name' : ''
  return <div className={!classes}>content</div> // 很显然，我不小心把 ! 错误的加到了classes前面
```
报错：
```
Warning: Received `false` for a non-boolean attribute `className`.

If you want to write it to the DOM, pass a string instead: className="false" or className={value.toString()}.

If you used to conditionally omit it with className={condition && value}, pass className={condition ? value : undefined} instead.
```

更常见的一种错误写法：
```javascript
  return <div className={condition && 'class-name'}>content</div> // 如果condition为false， 则className会接收一个false，所以不要用这种方式
```

正确写法：
```javascript
  return <div className={condition ? 'class-name' : ''}>content</div>
```