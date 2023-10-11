export default {
  '/problems/': [
    {
      text: '开发问题',
      children: [
        '/problems/crashInWXShare.md',
        '/problems/loadingOptimization.md',
        '/problems/uploadToQiniuyun.md',
        '/problems/unableToFindRole.md',
        '/problems/useEffect called twice.md',
        '/problems/memoryLeaks.md',
        '/problems/422.md',
        '/problems/className type error.md',
      ]
    }
  ],
  '/interview/': [
    {
      text: '面试问题',
      children: [
        {
          text: 'CSS相关',
          children: [
            '/interview/CSS/Style Isolation.md'
          ]
        },
        {
          text: 'JS/ES相关',
          children: [
            '/interview/JS/var&let&const.md',
            '/interview/JS/JSDataType.md',
            '/interview/JS/Promise.md',
            '/interview/JS/JS Event Loop.md',
          ],
        },
        {
          text: 'Vue相关',
          children: [
            '/interview/Vue/Vue vs Nuxt.md',
            '/interview/Vue/Nuxt Performance Improvement.md',
            '/interview/Vue/Vue Parent-Child Component Lifecycle.md',
            '/interview/Vue/XSS caused by v-html.md',
          ]
        },
        {
          text: 'TS',
          children: [
            '/interview/TS/Tuple vs Array.md'
          ]
        },
        {
          text: '笔试题',
          children: [
            '/interview/written exam/index.md',
            '/interview/written exam/lx-230921.md',
          ]
        },
        {
          text: '其他',
          children: [
            '/interview/Others/crossDomain.md',
            '/interview/Others/Memory Leak vs Memory Overflow.md',
            '/interview/Others/Message Bus.md',
            '/interview/Others/Webpack vs Vite.md',
            '/interview/Others/Websocket Lifecycle.md',
          ]
        }
      ]
    }
  ],
  '/knowledge/': [
    {
      text: '小知识',
      children: [
        '/knowledge/scope.md',
        '/knowledge/stack memory vs heap memory.md',
        '/knowledge/divInPElement.md',
        '/knowledge/records',
        '/knowledge/url',
        '/knowledge/processAndThread',
      ]
    }
  ],
}