import { createApp } from 'vue'
import App from './App.vue'
import store from './store' 
import router from './router' 
import axios from 'axios'


//---------------------------
axios.interceptors.request.use(function (config) {
    const isAuthenticated = store.getters['auth/isAuthenticated']()
    if (isAuthenticated) {
      config.headers['Authorization'] =
        'Bearer ' + store.getters['auth/getAccessToken']()
    } else {
      config.headers['Authorization'] = null
    }
    return config
  })
  
  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        // Якщо сервер відповів «401»
        router.push({ path: '/login' })
      }
      return Promise.reject(error)
    }
  )
  //---------------------------
  router.beforeEach((to, from, next) => {
    console.log('store.getters[');
    console.log( store.getters['auth/isAuthenticated'] && store.getters['auth/admin']  );
    let check =
      !store.getters['auth/isAuthenticated']() 
      &&
      // !store.getters['auth/admin']()
      // &&
      // !['/login', '/signup','/products','/','/cart'].includes(to.path)
      ['/product','/ingredients'].includes(to.path)
  
    if (check) {
      // Недопускаємо до захищених роутів, якщо немає токена
  
      next({ path: '/login' })
      return
    } else {
      next()
    }
  })
  //---------------------------


createApp(App).use(router).use(store).mount('#app')
