import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './common/ajax'
const app = createApp(App)
app.config.globalProperties.$ajax = ajax

app.use(store).use(router).mount('#app')
