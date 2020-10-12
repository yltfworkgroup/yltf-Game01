import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')
const vue = createApp(App)

vue.config.productionTip = false

vue.use(store)
vue.use(router)

vue.mount('#app')
