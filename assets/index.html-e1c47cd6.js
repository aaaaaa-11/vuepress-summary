import{_ as n,p as s,q as a,a1 as p}from"./framework-5866ffd3.js";const e={},t=p(`<h1 id="笔试题1" tabindex="-1"><a class="header-anchor" href="#笔试题1" aria-hidden="true">#</a> 笔试题1</h1><ol><li>数组去重[1,2,3,1,4,5] 至少两种写法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment">// 方法1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 类似的：Array.from(new Set(arr))</span>

<span class="token comment">// 方法2</span>
<span class="token keyword">function</span> <span class="token function">unique</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类似的方法：</span>
    <span class="token comment">// !newArr.includes(item)</span>
    <span class="token comment">// newArr.indexOf(item) === -1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newArr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i <span class="token operator">===</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>、
      newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>

<span class="token comment">// 方法3</span>
<span class="token keyword">function</span> <span class="token function">unique</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> isUnique <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token comment">// 从当前索引向后遍历，查找是否元素和当前元素相同</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isUnique <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果后面没有元素和当前元素相同，则当前元素唯一，push进新数组</span>
    isUnique <span class="token operator">&amp;&amp;</span> newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//2. 数组排序从小到大 至少两种写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token comment">// 方法一</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 不改变原数组：arr2.toSort((a, b) =&gt; a - b)</span>

<span class="token comment">// 方法二(冒泡)</span>
<span class="token keyword">function</span> <span class="token function">bubbleSort</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;非数组&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 类似的：</span>
  <span class="token comment">// 选择排序</span>
  <span class="token comment">// for (let i = 0; i &lt; newArr.length - 1; i++) {</span>
  <span class="token comment">//   let minIndex = i</span>
  <span class="token comment">//   for (let j = i + 1; j &lt; newArr.length; j++) {</span>
  <span class="token comment">//     if (newArr[minIndex] &gt; newArr[j]) {</span>
  <span class="token comment">//       minIndex = j</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   if (minIndex !== i) {</span>
  <span class="token comment">//     let temp = newArr[i]</span>
  <span class="token comment">//     newArr[i] = newArr[minIndex]</span>
  <span class="token comment">//     newArr[minIndex] = temp</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  <span class="token comment">// 插入排序</span>
  <span class="token comment">// for (let i = 1; i &lt; newArr.length; i++) {</span>
  <span class="token comment">//   for (let j = i; j &gt; 0 &amp;&amp; newArr[j] &lt; newArr[j - 1]; j--) {</span>
  <span class="token comment">//     temp = newArr[j];</span>
  <span class="token comment">//     newArr[j] = newArr[j-1];</span>
  <span class="token comment">//     newArr[j-1] = temp</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> newArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> newArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> newArr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 或者：newArr[j] ^= newArr[j - 1]; newArr[j - 1] ^= newArr[j]; newArr[j] ^= newArr[j - 1];</span>
        temp <span class="token operator">=</span> newArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        newArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> newArr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        newArr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// console.log(bubbleSort(arr));</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 3.结果输出</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>　　
　 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;local&#39;</span><span class="token punctuation">;</span>　
  <span class="token punctuation">}</span>　　　
　 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 解析</span>
<span class="token comment">// fn中会先执行变量a的声明：var a；，此时a未赋值，为undefined</span>
<span class="token comment">// 然后从上往下执行，第一个a是访问fn作用域中的a，为undefined</span>
<span class="token comment">// if (false) {}里面（a的赋值操作）不会执行</span>
<span class="token comment">// 第二个a依然是fn作用域中的a，为undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 4.去除字符串中的空格 eg: &#39; g o &#39; =&gt; &#39;go&#39;</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39; g o &#39;</span>
<span class="token comment">// 方法1:</span>
<span class="token keyword">let</span> filterStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=&gt;</span> s<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filterStr<span class="token punctuation">)</span>

<span class="token comment">// 方法2:</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex"> </span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 方法3:</span>
str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
