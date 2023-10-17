import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h1 id="防抖节流" tabindex="-1"><a class="header-anchor" href="#防抖节流" aria-hidden="true">#</a> 防抖节流</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>防抖：多次重复操作，之前的操作都会被清空，只允许最后一次操作执行</p><p>例如：登录注册，只需要执行一次就可以了</p><p>节流：一段时间内只允许一次操作</p><p>例如：搜索框输入，隔一段时间更新一下搜索结果</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>防抖：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    timer <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> scrollWithDebounce <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>onscroll<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">scrollWithDebounce</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">scrollWithDebounce</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节流：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    timer <span class="token operator">&amp;&amp;</span> <span class="token keyword">return</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> scrollWithDebounce <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>onscroll<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">scrollWithDebounce</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">scrollWithDebounce</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>let arr = [1, 3, 3, 5, 0, 3, 3, 4, 1] function getSequence(arr: number[]) { const p = arr.slice() // 复制一份数组 const result = [0] // 存放的是arr数组的索引，result数组将要存放的是递增的索引 let i, j, u, v, c // 声明一些变量 const len = arr.length // 获取当前数组的长度 for (i = 0; i &lt; len; i++) { const arrI = arr[i] // 当前要比较的值为arrI if (arrI !== 0) { // 如果当前要比较的值不为0 j = result[result.length - 1] // result数组中最大的值的索引 if (arr[j] &lt; arrI) { // 如果当前值大于result中的最大值，那么就将当前值添加到result数组中，意思是递增序列长度增加1 p[i] = j // 因为result在这里马上会push进去一个值，当前位置存储的是还没push前的最后一位也就是push后的前一位的索引 result.push(i) // 也就是当前值arrI 所在位置的前一位的索引 continue // 这里直接退出当前循环 下方就不需要使用else块 }</p><pre><code>  // 开始二分
  u = 0    //左指针初始值为0
  v = result.length - 1 // 右指针初始值为数组长度-1，也就是最大索引
  while (u &lt; v) {  // 当左指针小于右指针时，才需要进入循环
    c = (u + v) &gt;&gt; 1  // 这个位置是取中间值，Vue最初的代码是 ((u + v)/ 2) | 0 后来改成了 (u+v)&gt;&gt;1， 更好的方式是 u+ ((v-u) &gt;&gt; 1) 可以避免指针越界，不过在vue中节点的数量远达不到越界的情况可暂时忽略
    if (arr[result[c]] &lt; arrI) { // 如果中间值的位置的值小于当前值
      u = c + 1   // 那么就说明要找的值在中间值的右侧，因此左指针变为中间值+1
    } else {      // 否则就是大于等于当前值
      v = c       // 那么右指针变为中间值，再进行下一次循环
    }
  }   // 最后输出的左指针的索引一定是非小于当前值的，有可能大于也有可能等于
  if (arrI &lt; arr[result[u]]) {  // 如果当前值小于第一个非小于的值，那么就意味着这个值是大于的，排除了等于的情况。
    if (u &gt; 0) {  // 如果u === 0 说明当前值是最小的，不会有比它小的值，那么它前面不会有任何的值，只有u大于0时才需要存储它前面的值
      p[i] = result[u - 1]  //  当前位置因为result[u]马上就被arrI替换，所以result[u - 1]就是当前值存储位置的前一位，也就是比当前值小的那个值所在的位置
    }
    result[u] = i     // 将第一个比当前值大的值替换为当前值，依次来让数组递增的更缓慢
  }
}
</code></pre><p>} // 使用二分可以找到最长的长度但是无法判断最长的序列 // 开始回溯倒序找到最长的序列，因为p中当前位置存放的是上一个比当前值小的数所在的位置，所以使用倒序 u = result.length // 获取递增数组的长度 v = result[u - 1] // 获取递增数组的最后一项也就是最大值的索引 while (u-- &gt; 0) { // 当u的索引没有越界时一直循环 result[u] = v // 一开始result的最后一个值存放的索引一定是最大值 v = p[v] // 根据当前值就是该序列中最大的部分来查找是谁跳动这个位置的，依次往前查 } return result // 最后输出结果数组，此数组中存放的就是最大递增子序列的索引值 }Ï</p>`,14),c=[p];function o(l,u){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","防抖节流.html.vue"]]);export{r as default};
