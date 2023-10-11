# JS单线程为什么可以同时发起多个异步请求

JavaScript 是一种单线程的编程语言，这意味着它在任意时刻只能执行一个任务。然而，JavaScript 引擎采用了事件循环（event loop）和异步编程模型，使得在单线程的情况下能够同时发起多个异步请求。

### 事件循环（Event Loop）：

JavaScript 的事件循环是一种机制，用于处理异步操作。事件循环使得 JavaScript 可以通过将异步任务推送到任务队列（task queue）中，并在适当的时候将它们取出执行，从而实现异步执行。

事件循环的基本流程如下：

1. **执行同步代码：** 首先执行当前调用栈中的同步代码。

2. **检查任务队列：** 检查任务队列是否有任务待执行。

3. **执行异步任务：** 如果有异步任务，将任务从队列中取出并执行。

4. **重复：** 重复上述步骤，不断执行同步代码和异步任务。

### 异步请求：

当 JavaScript 代码发起异步请求时，例如通过 `XMLHttpRequest`、`fetch`、或者在 Node.js 中使用 `fs.readFile` 等，这些操作会被放入任务队列中等待执行。在请求的过程中，JavaScript 引擎可以继续执行后续的同步代码或者处理其他异步任务。

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task 1");
}, 1000);

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Async Task 2");
  });

console.log("End");
```

在上述例子中，`setTimeout` 和 `fetch` 都是异步任务，它们会在事件循环的某个阶段被执行，而不会阻塞后续代码的执行。这样，即使 JavaScript 是单线程的，我们可以通过事件循环机制来实现并发处理多个异步任务。

总结：JavaScript 的单线程是指在同一时刻只能执行一个任务，但通过异步编程和事件循环，可以实现在单线程中并发处理多个异步任务。