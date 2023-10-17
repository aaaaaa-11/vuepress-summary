import{_ as t,M as e,p,q as o,R as n,t as s,N as c,a1 as i}from"./framework-5866ffd3.js";const l={},r=n("h1",{id:"跨域",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#跨域","aria-hidden":"true"},"#"),s(" 跨域")],-1),u={href:"https://www.bilibili.com/video/BV1wT4y1g788/?p=2&spm_id_from=pageDriver&vd_source=fce3c7fa5d7562f785a0a02cc86c0c08",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h2><p>一个请求的协议、域名、端口三者之中任意一个与当前页面url不同，即为跨域</p><h2 id="为什么有跨域" tabindex="-1"><a class="header-anchor" href="#为什么有跨域" aria-hidden="true">#</a> 为什么有跨域</h2><p>由于浏览器的同源策略，限制了从脚本内发起跨域请求。</p><blockquote><p>同源策略是一个重要的安全策略，它用于限制一个源的文档或它加载的脚本与另一个源的资源进行交互。 同源策略可以减少XSS、CSRF等攻击。</p></blockquote><h2 id="解决跨域" tabindex="-1"><a class="header-anchor" href="#解决跨域" aria-hidden="true">#</a> 解决跨域</h2><h3 id="_1-jsonp" tabindex="-1"><a class="header-anchor" href="#_1-jsonp" aria-hidden="true">#</a> 1. jsonp</h3><p>script、img、iframe等含有src的标签不受同源策略的影响，所以可以利用这一点来做跨域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 前端</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">function</span> <span class="token function">handleData</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对返回的数据做处理</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token comment">// 前端调用接口，拿到数据后，解析成js执行回调函数</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://xxx/api?callback=handleData&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 后端</span>
<span class="token comment">// 1. 准备数据data</span>
<span class="token comment">// 2. 将数据返回客户端，类似：&#39;handleData(&#39; + data + &#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题</strong></p><ul><li>只能发get请求</li><li>不安全，可能会受到XSS攻击</li></ul><h3 id="_2-cors跨域资源共享" tabindex="-1"><a class="header-anchor" href="#_2-cors跨域资源共享" aria-hidden="true">#</a> 2. CORS跨域资源共享</h3><p>前端发送ajax/fetch请求 后端设置相关的头信息，并且需要处理options请求<br> 服务端需要设置Access-Control-Allow-Origin，如果需要带cookie，前端需要设置withCredentials: true<br> Access-Control-Allow-Origin一般可以写*或某一个具体的域，如果想要允许跨多个域，可以把允许的域写在一个数组里，然后判断如果当前的域在数组中，则允许跨域</p><h3 id="_3-http-proxy" tabindex="-1"><a class="header-anchor" href="#_3-http-proxy" aria-hidden="true">#</a> 3. http proxy</h3><p>可以配合webpack、webpack-dev-server使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://xxx&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-nginx反向代理" tabindex="-1"><a class="header-anchor" href="#_4-nginx反向代理" aria-hidden="true">#</a> 4. nginx反向代理</h3><h3 id="_5-postmessage" tabindex="-1"><a class="header-anchor" href="#_5-postmessage" aria-hidden="true">#</a> 5. postMessage</h3><p>window.postMessage(data, origin)，可以用于多窗口、页面与iframe之间的数据传递</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.html（http://origin1/a.html）</span>
<span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">&quot;http://origin2/b.html&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>
  iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
    iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;http://origin2&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理e.data</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// b.html（http://origin2/b.html）</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 处理data</span>
      <span class="token comment">// 处理完再将数据返回给origin1</span>
      window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;http://origin1&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-websocket协议跨域" tabindex="-1"><a class="header-anchor" href="#_6-websocket协议跨域" aria-hidden="true">#</a> 6. WebSocket协议跨域</h3><p>WebSocket protocol，实现了浏览器与服务器全双工通信</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 前端</span>
<span class="token comment">// 引入socket.io</span>
<span class="token comment">// 创建socket.io实例，并建立连接</span>
<span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">&#39;http://origin2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 成功建立连接</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 监听服务端消息</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理接收到的消息</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 监听服务端关闭</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 。。。</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 发送消息</span>
socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>


<span class="token comment">// 服务端</span>
socket<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听到客户端消息，处理消息</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// 向客户端发送消息</span>
    client<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 断开处理</span>
  client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-document-domain-iframe" tabindex="-1"><a class="header-anchor" href="#_7-document-domain-iframe" aria-hidden="true">#</a> 7. document.domain + iframe</h3><p>只能实现同一个主域，不同子域之间的操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父页面http://blog.domain1.com/A.html</span>
<span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">&quot;http://www.domain1.com/B.html&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  document<span class="token punctuation">.</span>domain <span class="token operator">=</span> <span class="token string">&#39;domain1.com&#39;</span>
  <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 子页面http://www.domain1.com/B.html</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  document<span class="token punctuation">.</span>domain <span class="token operator">=</span> <span class="token string">&#39;domain1.com&#39;</span>
  <span class="token comment">// window.parent.user</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-window-name-iframe" tabindex="-1"><a class="header-anchor" href="#_8-window-name-iframe" aria-hidden="true">#</a> 8. window.name + iframe</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">// A页面http://origin1/B.html</span>
<span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">&quot;http://origin2/B.html&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;iframe&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>

<span class="token comment">// iframe.onload第一次等待B加载完然后执行，第二次等待proxy加载完然后执行</span>
iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要先把地址指向同源中，才可以解决跨域</span>
    iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://origin1/proxy.html&#39;</span>
    count<span class="token operator">++</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// B页面</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">// 存储需要返回给客户端的信息</span>
  window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;zzz&#39;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// proxy页面可以为空，反正不写window.name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-location-hash-iframe" tabindex="-1"><a class="header-anchor" href="#_9-location-hash-iframe" aria-hidden="true">#</a> 9. location.hash + iframe</h3><p>A、C同源，B不同源</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// A</span>
<span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">&quot;http://origin2/B.html&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;iframe&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://origin2/B.html#msg=zzz&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">func</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理res</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token comment">// B</span>
<span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">&quot;http://origin1/C.html&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;iframe&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://origin1/C.html&#39;</span> <span class="token operator">+</span> location<span class="token punctuation">.</span>hash
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// C</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function k(v,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[s("学习视频"),c(a)])]),d])}const h=t(l,[["render",k],["__file","crossDomain.html.vue"]]);export{h as default};
