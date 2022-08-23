import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/v-mask/dist/v-mask'


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

  


  
