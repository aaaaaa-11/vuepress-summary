import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="var-let-const区别" tabindex="-1"><a class="header-anchor" href="#var-let-const区别" aria-hidden="true">#</a> var let const区别</h1><ul><li><strong>var严格来说不支持块级作用域只有全局作用域和函数作用域，let const声明一个块级作用域</strong>，var声明的全局作用域可以挂载到window上（如果顶层对象是window的话，nodejs中的顶层是global，var声明的变量是函数变量，不会挂载到global上）</li></ul><blockquote><p>块级作用域：ES6新增的，使用{}包裹的一段代码，例如函数、判断语句、循环语句，甚至-个单独的{}都可以被看作是一个块级作用域。let和const声明的变量是有块级作用域的。</p></blockquote><ul><li><strong>const let不存在变量声明的提前，var有声明提前</strong>，所以const和let在声明变量/常量之前是不能获取到的——<strong>暂时性死区</strong>。</li><li>const、let是ES6新增的，var是ES5</li><li>const声明的是常量，不能被修改，let和var声明的是变量，可以修改</li><li>const在声明时必须赋值，let和var不需要</li><li>let和const不能重复声明同一个变量，但是var可以，var最后一个声明的值会覆盖之前的<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 全局变量会挂载到window上，window.a 1</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 不会挂载到window上 window.b undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 不要在块级作用域中使用var，因为var形成不了块级作用域，代码块外面还是能访问到</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// a not defined</span>
  <span class="token comment">// b not defined</span>
  c <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 结果：点击元素后，全都打印3</span>
  <span class="token comment">// 异步执行回调函数，事件在循环时绑定，循环走完i=3，鼠标点击时触发回调函数，此时访问到的i为3</span>


  <span class="token comment">// 解决</span>
  <span class="token keyword">var</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 使用let形成块级作用域，每次迭代重新绑定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">f</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 函数作用域</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// a not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 声明提前</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 没有声明提前，报错</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> a <span class="token comment">// 报错，必须在声明时赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 可以重复声明，后面的声明会覆盖前面的声明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 报错，let和var不能重复声明同一变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 报错，let不能重复声明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","var_let_const.html.vue"]]);export{u as default};