import{_ as e,p as i,q as n,a1 as s}from"./framework-5866ffd3.js";const d={},a=s(`<h1 id="websocket的生命周期" tabindex="-1"><a class="header-anchor" href="#websocket的生命周期" aria-hidden="true">#</a> websocket的生命周期</h1><p>WebSocket 是一种在客户端和服务器之间实现全双工通信的协议。WebSocket 的生命周期包括连接建立、数据传输和连接关闭等阶段。</p><h3 id="_1-连接建立阶段" tabindex="-1"><a class="header-anchor" href="#_1-连接建立阶段" aria-hidden="true">#</a> 1. 连接建立阶段：</h3><ul><li><p><strong>握手阶段：</strong> WebSocket 连接的建立始于客户端发起的握手请求。客户端发送一个 HTTP 请求，包含一个特殊的头信息 <code>Upgrade: websocket</code>。服务器在接收到这个请求后，如果支持 WebSocket，会返回一个状态码为 <code>101 Switching Protocols</code> 的响应，表示协议切换成功。</p></li><li><p><strong>连接打开：</strong> 握手成功后，连接就打开了。此时，可以通过 WebSocket 实例发送和接收消息。</p></li></ul><h3 id="_2-数据传输阶段" tabindex="-1"><a class="header-anchor" href="#_2-数据传输阶段" aria-hidden="true">#</a> 2. 数据传输阶段：</h3><ul><li><strong>消息传输：</strong> 在连接建立后，客户端和服务器可以通过 WebSocket 连接发送和接收消息。消息可以是文本、二进制数据等。通过发送消息，双方可以进行实时通信。</li></ul><h3 id="_3-连接关闭阶段" tabindex="-1"><a class="header-anchor" href="#_3-连接关闭阶段" aria-hidden="true">#</a> 3. 连接关闭阶段：</h3><ul><li><p><strong>主动关闭连接：</strong> 任何一方可以通过发送一个关闭帧来主动关闭连接。帧中包含关闭的状态码和可选的关闭原因。接收方在收到关闭帧后，也会发送一个关闭帧进行确认。</p></li><li><p><strong>被动关闭连接：</strong> 如果连接的任何一方检测到某种错误或需要关闭连接，它可以直接关闭连接。另一方会收到关闭帧，然后执行相应的关闭操作。</p></li><li><p><strong>连接关闭：</strong> 一旦连接关闭，WebSocket 实例就不再可用。在关闭连接之后，不再能够发送或接收消息。</p></li></ul><h3 id="websocket-的生命周期示意图" tabindex="-1"><a class="header-anchor" href="#websocket-的生命周期示意图" aria-hidden="true">#</a> WebSocket 的生命周期示意图：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   +------------------+
   |   握手阶段        |
   +------------------+
          |
          v
   +------------------+
   | 连接打开         |
   +------------------+
          |
          v
   +------------------+
   | 数据传输阶段      |
   +------------------+
          |
          v
   +------------------+
   | 连接关闭阶段      |
   +------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，WebSocket 是一种长连接，通常情况下会保持持久性的连接。在生命周期的任意阶段，都有可能发生连接断开或出现异常的情况，因此在实际使用中，需要进行适当的错误处理和连接状态的监控。</p>`,11),l=[a];function c(r,t){return i(),n("div",null,l)}const v=e(d,[["render",c],["__file","Websocket Lifecycle.html.vue"]]);export{v as default};
