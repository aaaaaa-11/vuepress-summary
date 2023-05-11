# 组件挂载后 useEffect()被调用两次
```javascript
const Com = () => {
  useEffect(() => {
    console.log('EFFECT RUNING') // 执行两次
  }, [])

  return <div>Demo</div>
}
```

## [原因](https://zh-hans.react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts)
> 1. 这是 React18 才新增的特性。
> 2. 仅在开发模式("development")下，且使用了严格模式("Strict Mode")下会触发。
  生产环境("production")模式下和原来一样，仅执行一次。
> 3. 之所以执行两次，是为了模拟立即卸载组件和重新挂载组件。
  为了帮助开发者提前发现重复挂载造成的 Bug 的代码。 
  同时，也是为了以后 React的新功能做铺垫。 
  未来会给 React 增加一个特性，允许 React 在保留状态的同时，能够做到仅仅对UI部分的添加和删除。
  让开发者能够提前习惯和适应，做到组件的卸载和重新挂载之后， 重复执行 useEffect的时候不会影响应用正常运行。[参考](https://juejin.cn/post/7137654077743169573)


在开发环境、严格模式下，React会在实际执行useEffect()前先调用一次它的回调和cleanup
```javascript
// index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 组件中执行useEffect()
const Com = () => {
  useEffect(() => {
    console.log('EFFECT')

    return () => {
    console.log('CLEANUP')
    }
  }, [])

  return <div>Demo</div>
}
```
结果：
```
EFFECT
CLEANUP
EFFECT
```

useEffect()会执行2次，是一个压力测试，为了让开发者可以发现组件挂载和卸载时useEffect()的执行过程中可能存在的问题（[demo](https://zh-hans.react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed)）， 例如没有清除某些监听、没有断开某些连接......




开发环境下去掉strict mode，useEffect()就不会在组件挂载后执行2次
