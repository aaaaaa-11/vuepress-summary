# v-html 为什么会导致XSS

**XSS**： 跨站脚本攻击（Cross-Site Scripting），是一种安全漏洞，攻击者通过注入恶意脚本（通常是 JavaScript 代码）到应用程序中，以在用户端执行该脚本。

Vue指令 `v-html`，用于将数据渲染为 HTML。然而，使用   `v-html` 不正确地渲染未经信任的用户输入可能会导致XSS的风险。

例如：
```vue
<template>
  <div v-html="userInput"></div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '<img src=x onerror=alert("XSS")>',
    };
  },
};
</script>
```

在这个例子中，userInput 包含了一个带有 onerror 事件的图片标签，当 v-html 渲染这个输入时，将触发 onerror 事件，执行 alert("XSS")，从而导致 XSS 攻击。

要防止 XSS 攻击，可以考虑以下几点：

1. 输入验证和过滤： 在接收用户输入之前，进行输入验证并过滤潜在的恶意内容。

2. 使用DOMPurify： DOMPurify 是一个用于净化 HTML 的库，可以帮助防止 XSS 攻击。在使用 v-html 渲染用户输入时，可以使用 DOMPurify 对输入进行处理。
```vue
<script>
import DOMPurify from 'dompurify';

// ...

export default {
  data() {
    return {
      userInput: '<img src=x onerror=alert("XSS")>',
    };
  },
  computed: {
    sanitizedHTML() {
      return DOMPurify.sanitize(this.userInput);
    },
  },
};
</script>
```

3. 避免直接插入未经处理的用户输入： 尽量避免直接将未经处理的用户输入插入到 HTML 中，而是通过其他方式展示用户输入，如文本节点或属性。


总的来说，要注意在使用 v-html 渲染用户输入时，确保对用户输入进行适当的验证和过滤，以防止潜在的 XSS 攻击。

