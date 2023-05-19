import { defineClientConfig } from '@vuepress/client'
import Scope from './components/Scope.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Scope', Scope)
  },
})