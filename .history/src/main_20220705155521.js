import { createApp } from 'vue'
import App from './App.vue'
import store from './store' 
import router from './router' 
import {Buffer} from 'buffer';


createApp(App).use(Buffer).use(router).use(store).mount('#app')
