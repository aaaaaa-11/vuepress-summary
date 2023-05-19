# 首屏加载慢、白屏
补充：vue+cordova打包，项目第一次打开很慢  
## 解决
1. [路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)  
```javascript
  // vue2.x
  component: () => import(/* chunkName */ './xxx.vue')

  // vite.config.js
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-user': [
            './src/views/UserDetail.vue',
            './src/views/User.vue',
          ],
        },
      }
    },
  }
```  

2. 图片懒加载  
方法一：自定义图片懒加载指令
```javascript
// vue2，参考：https://v2.cn.vuejs.org/v2/guide/custom-directive.html
Vue.directive('指令名称', {
  bind: function (el, bind, vnode) {
    // ...
  }
})

// vue3，参考：https://cn.vuejs.org/guide/reusability/custom-directives.html
app.directive('指令名称', {
  ['钩子函数'] () {
    // ...
  }
})
```
方法二：[使用已有的插件](https://github.com/hilongjw/vue-lazyload)  
```javascript
  <img src="./xxx.png" >
  // 改为
  <img v-lazy="./xxx.png" />
```

3. webpack开启[Gzip压缩](https://github.com/webpack-contrib/compression-webpack-plugin)

4. 将一些访问时间久的文件放到本地
```javascript
  // 假设xxx.js文件不是很大，但是访问需要10s
  <script src="http://xxx.js"></script>
  // 改为
  // 将xxx.js下载到本地，假设路径为./xxx.js
  <script src="./xxx.js"></script>
```

5. 加loading效果  
```javascript
  // html
  // 写一个加载中的遮罩，在加载页面时显示
  // 使用一个全局的状态（可以在vuex中管理）来控制显隐，默认加载中
  <Loading v-show="loadingPage">loading</Loading>
  <router-view v-show="!loadingPage"></router-view>

  // router.js中监听路由离开则显示加载中，路由加载完成时隐藏加载效果
  router.beforeEach((to, from, next) => {
    loadingPage = true
    // ...
    next()
  })
  router.afterEach(() => {
    loadingPage = false
    // ...
  })
```

6. 依赖使用第三方cdn加载  
注意：引入cdn后，需要注释掉main.js中的引入  
问题：第三方cdn可能偶尔会失效（服务器崩了、停了、版本换了、。。。），或者访问的人多加载时间久，可以尝试用4.的方式将cdn下载到本地


7. 不生成map文件
代码打包后会压缩和加密，如果运行出错了，可能看不出来哪里报错，map文件会存储代码转换前后对应位置，可以用来定位报错。

8. 去掉不必要的console.log和debugger

9. 一些UI组件按需导入

10. 打包分析  
分析打包后的文件结构
```
// packae.json
// 在build后面加--report
"scripts": {
  "build": "vue-cli-service build --report",
}

```
vite打包分析插件[rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)  
一些静态资源能否替换，例如将大图片换成小图片  
一些依赖过大，是否能换成其他依赖，例如把moment.js换成day.js  


11. 封装组件，代码优化  

12. SSR

13. 骨架屏（优化体验）
