import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import fmtPlugin from './plugins/fmt'

createApp(App).use(store).use(router).use(fmtPlugin).mount('#app')
App.$axios = axios
store.$axios = axios
