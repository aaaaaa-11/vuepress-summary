import{_ as e,M as t,p,q as o,R as n,t as s,N as c,a1 as l}from"./framework-5866ffd3.js";const i={},r=n("h1",{id:"js数据类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#js数据类型","aria-hidden":"true"},"#"),s(" JS数据类型")],-1),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview",target:"_blank",rel:"noopener noreferrer"},m=l(`<blockquote><p>JS是一种有着动态类型的动态语言，其变量可以分配/重新分配所有类型的值。</p></blockquote><p>JS数据类型包含基本数据类型和引用数据类型（复杂数据类型）。其中基本数据类型包含Number、String、Boolean、Symbol、null、undefined，引用数据类型包含Object，其中Object又包含Function、Array、Date、RegExp。</p><ul><li>Number</li><li>String</li><li>Boolean</li><li>Symbol</li><li>Object <ul><li>Function</li><li>Array</li><li>Date</li><li>RegExp</li></ul></li><li>null</li><li>undefined</li></ul><p>基本类型的数据存在栈内存中，引用类型数据存在堆内存中，声明的引用类型变量存储的是一个堆内存地址。</p><h2 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h2><p>数字类型的数据，其实是浮点数，在运算时，可能会出现精度不准的情况：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">=</span> <span class="token number">0.30000000000000004</span>
<span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>0开头的数字会被视为八进制，0x开头视为十六进制，0b开头视为二进制</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">012</span> <span class="token comment">// 10</span>
<span class="token number">0x12</span> <span class="token comment">// 18</span>
<span class="token number">0b11</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NaN</code>（Not a Number），不合法的数字</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Infinity（正无穷）和-Infinity（负无穷）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment">// Infinity</span>
<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment">// -Infinity</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS能表示的整数范围：-2<strong>53 ~ 2</strong>53（不含两端点），ES6新增了<code>BigInt</code>类型，可以用来表示任意大的整数。需要注意：不能用于Math对象中的方法；不能和Number实例混合运算，两者必须转换成同一类型，但是BigInt转Number时可能会丢失精度。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1n</span> <span class="token comment">// &#39;bigint&#39;</span>

<span class="token operator">+</span><span class="token number">1n</span> <span class="token comment">// Cannot convert a BigInt value to a number</span>

<span class="token comment">// 带小数的运算会被取整</span>
<span class="token number">1n</span> <span class="token operator">/</span> <span class="token number">2n</span> <span class="token comment">// 0n</span>

<span class="token number">1n</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment">// true</span>
<span class="token number">1n</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// false</span>
<span class="token number">1n</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token comment">// true</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1n</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3n</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [-1n, 0, 1, 3n, 4]</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// &#39;1&#39;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">1n</span><span class="token punctuation">)</span> <span class="token comment">// Do not know how to serialize a BigInt</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">1n</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;&quot;1&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function d(k,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[s("学习网站"),c(a)])]),m])}const g=e(i,[["render",d],["__file","JSDataType.html.vue"]]);export{g as default};