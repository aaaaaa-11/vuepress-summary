import{_ as n,p as s,q as a,a1 as p}from"./framework-5866ffd3.js";const t={},o=p(`<h1 id="antd上传图片到七牛云" tabindex="-1"><a class="header-anchor" href="#antd上传图片到七牛云" aria-hidden="true">#</a> antd上传图片到七牛云</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>一开始是根据官网案例，使用action上传到七牛云，报错<code>this.props.data.map is not a function</code>，且网页会刷新，然后白屏。 但是将官网demo直接复制过来是可以的，猜测是上传七牛云的配置之类有问题。</p><h2 id="尝试1" tabindex="-1"><a class="header-anchor" href="#尝试1" aria-hidden="true">#</a> 尝试1</h2><p>参考：https://www.shuzhiduo.com/A/pRdBkjoGzn 使用customRequest，在上传前先获取七牛云的上传凭证，然后调用axios.post方法上传图片</p><p>结果：不白屏了，但是400， 使用debugger发现报错：<code>{&quot;error&quot;:&quot;invalid multipart format: request Content-Type isn&#39;t multipart/form-data&quot;}</code></p><h2 id="尝试2" tabindex="-1"><a class="header-anchor" href="#尝试2" aria-hidden="true">#</a> 尝试2</h2><p>根据上面的报错，修改content-type为multipart/form-data， 结果报错<code>{error: &quot;invalid multipart format: multipart: NextPart: EOF&quot;}</code></p><p>根据官方文档：https://developer.qiniu.com/kodo/kb/3971/upload-a-message-assembly提示，Content-Length值有误， 解决方法：取消报文中的这个字段</p><p>结果：不配置headers还是报错</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>参考：https://blog.qiatia.cn/2019/05/18/Axios/</p><p>axios在请求的时候会拦headers，所以上传图片的时候需要创建一个干净的axios对象来提交</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Upload<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span>


<span class="token operator">&lt;</span>Upload<span class="token punctuation">.</span>Dragger <span class="token punctuation">{</span><span class="token operator">...</span>uploadProps<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;ant-upload-drag-icon&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>InboxOutlined <span class="token operator">/</span><span class="token operator">&gt;</span>  <span class="token comment">// antd图标</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;ant-upload-text&quot;</span><span class="token operator">&gt;</span>点击或拖拽上传名片<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;ant-upload-hint&quot;</span><span class="token operator">&gt;</span>支持的图片格式：<span class="token constant">PNG</span>、<span class="token constant">JPG</span>、<span class="token constant">JPEG</span>，暂不支持 <span class="token constant">GIF</span> 格式<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Upload<span class="token punctuation">.</span>Dragger<span class="token operator">&gt;</span>

<span class="token keyword">function</span> <span class="token function">beforeUpload</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isJpgOrPng <span class="token operator">=</span> file<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;image/jpeg&quot;</span> <span class="token operator">||</span> file<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isJpgOrPng<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;支持的图片格式：PNG、JPG、JPEG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> isLt2M <span class="token operator">=</span> file<span class="token punctuation">.</span>size <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLt2M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;图片大小需小于20MB!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;上传网络异常，请重试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> uploadProps <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showUploadList</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">accept</span><span class="token operator">:</span> <span class="token string">&#39;.png, .jpg, .jpeg, .gif&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;http://upload.qiniu.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">beforeUpload</span><span class="token operator">:</span> beforeUpload<span class="token punctuation">,</span>  <span class="token comment">// 上传之前预操作</span>
        <span class="token function">onStart</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">debugger</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token parameter">ret<span class="token punctuation">,</span> file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">debugger</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">onProgress</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token punctuation">,</span> file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onProgress&#39;</span><span class="token punctuation">,</span> percent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">debugger</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">customRequest</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
            action<span class="token punctuation">,</span>
            file<span class="token punctuation">,</span>
            onError<span class="token punctuation">,</span>
            onProgress<span class="token punctuation">,</span>
            onSuccess<span class="token punctuation">,</span>
            withCredentials<span class="token punctuation">,</span>
        <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>
            formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>  <span class="token comment">// 七牛云的token</span>
            formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>  <span class="token comment">// 设置一个唯一key，这里是时间戳+随机数： Date.now() + Math.floor(Math.random()*(999999-100000)+100000)+1</span>
            <span class="token comment">// 创建一个干净的axios</span>
            <span class="token keyword">let</span> $upload <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">$upload</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> action<span class="token punctuation">,</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> formData<span class="token punctuation">,</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
                <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">//imgLoadPercent 是上传进度，可以用来添加进度条</span>
                    <span class="token keyword">let</span> imgLoadPercent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>progressEvent<span class="token punctuation">.</span>loaded <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">/</span> progressEvent<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>imgLoadPercent<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">debugger</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">debugger</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><ol><li>使用customRequest自定义请求</li><li>参考七牛云官网设置配置参数</li><li>上传时创建新的干净的axios对接调上传接口</li></ol>`,16),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","uploadToQiniuyun.html.vue"]]);export{r as default};