import { createApp } from 'vue'
import App from './App.vue'
import store from './store' 
import router from './router' 
import {Buffer} from 'buffer';
Buffer.from('anything','base64');

createApp(App).use(router).use(store).mount('#app')
