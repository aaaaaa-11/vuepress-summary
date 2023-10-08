# 跨域
[学习视频](https://www.bilibili.com/video/BV1wT4y1g788/?p=2&spm_id_from=pageDriver&vd_source=fce3c7fa5d7562f785a0a02cc86c0c08)
## 什么是跨域
一个请求的协议、域名、端口三者之中任意一个与当前页面url不同，即为跨域
## 为什么有跨域
由于浏览器的同源策略，限制了从脚本内发起跨域请求。
> 同源策略是一个重要的安全策略，它用于限制一个源的文档或它加载的脚本与另一个源的资源进行交互。
同源策略可以减少XSS、CSRF等攻击。

## 解决跨域
### 1. jsonp
script、img、iframe等含有src的标签不受同源策略的影响，所以可以利用这一点来做跨域
```javascript
// 前端
<script>
  function handleData (data) {
    // 对返回的数据做处理
  }
</script>
// 前端调用接口，拿到数据后，解析成js执行回调函数
<script src="http://xxx/api?callback=handleData"></script>

// 后端
// 1. 准备数据data
// 2. 将数据返回客户端，类似：'handleData(' + data + ')'
```
**问题**
- 只能发get请求
- 不安全，可能会受到XSS攻击

### 2. CORS跨域资源共享
前端发送ajax/fetch请求
后端设置相关的头信息，并且需要处理options请求  
服务端需要设置Access-Control-Allow-Origin，如果需要带cookie，前端需要设置withCredentials: true  
Access-Control-Allow-Origin一般可以写*或某一个具体的域，如果想要允许跨多个域，可以把允许的域写在一个数组里，然后判断如果当前的域在数组中，则允许跨域

### 3. http proxy
可以配合webpack、webpack-dev-server使用
```javascript
// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://xxx',
        changeOrigin: true,
      }
    }
  }
}
```

### 4. nginx反向代理

### 5. postMessage
window.postMessage(data, origin)，可以用于多窗口、页面与iframe之间的数据传递
```javascript
// a.html（http://origin1/a.html）
<iframe src="http://origin2/b.html"></iframe>
<script>
  var iframe = document.getElementById('iframe')
  iframe.onload = function() {
    var data = {...}
    iframe.contentWindow.postMessage(JSON.stringify(data), 'http://origin2')
  }

  window.addEventListener('message', function (e) {
    // 处理e.data
  })
</script>

// b.html（http://origin2/b.html）
<script>
  window.addEventListener('message', function (e) {
    var data = JSON.parse(e.data)
    if (data) {
      // 处理data
      // 处理完再将数据返回给origin1
      window.parent.postMessage(JSON.stringify(data), 'http://origin1')
    }
  })
</script>
```

### 6. WebSocket协议跨域
WebSocket protocol，实现了浏览器与服务器全双工通信
```javascript
// 前端
// 引入socket.io
// 创建socket.io实例，并建立连接
var socket = io('http://origin2')

// 成功建立连接
socket.on('connect', function(socket){
  // 监听服务端消息
  socket.on('message', function (msg) {
    // 处理接收到的消息
  })
  // 监听服务端关闭
  socket.on('disconnect', function () {
    // 。。。
  })
})

// 发送消息
socket.send(val)


// 服务端
socket.listen(server).on('connection', function(client) {
  client.on('message', function() {
    // 监听到客户端消息，处理消息
    // ...
    // 向客户端发送消息
    client.send(data)
  })

  // 断开处理
  client.on('disconnect', function() {
    // ...
  })
})
```

### 7. document.domain + iframe
只能实现同一个主域，不同子域之间的操作
```javascript
// 父页面http://blog.domain1.com/A.html
<iframe src="http://www.domain1.com/B.html"></iframe>

<script>
  document.domain = 'domain1.com'
  var user = 'zs'
</script>

// 子页面http://www.domain1.com/B.html
<script>
  document.domain = 'domain1.com'
  // window.parent.user
</script>
```

### 8. window.name + iframe
```javascript
let count = 0
// A页面http://origin1/B.html
<iframe src="http://origin2/B.html" id="iframe"></iframe>

// iframe.onload第一次等待B加载完然后执行，第二次等待proxy加载完然后执行
iframe.onload = function () {
  if (count === 0) {
    // 需要先把地址指向同源中，才可以解决跨域
    iframe.src = 'http://origin1/proxy.html'
    count++
    return
  }
  console.log(iframe.contentWindow.name)
}

// B页面
<script>
  // 存储需要返回给客户端的信息
  window.name = 'zzz'
</script>

// proxy页面可以为空，反正不写window.name
```

### 9. location.hash + iframe
A、C同源，B不同源
```javascript
// A
<iframe src="http://origin2/B.html" id="iframe"></iframe>

<script>
  iframe.onload = function() {
    iframe.src = 'http://origin2/B.html#msg=zzz'
  }

  function func (res) {
    // 处理res
  }
</script>


// B
<iframe src="http://origin1/C.html" id="iframe"></iframe>

<script>
  window.onhashchange = function () {
    iframe.src = 'http://origin1/C.html' + location.hash
  }
</script>

// C
<script>
  window.onhashchange = function () {
    window.parent.parent.func(location.hash)
  }
</script>
```