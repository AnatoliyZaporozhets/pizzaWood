import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home'
import Products from '@/pages/ProductsS'
import ProductEdit from '@/pages/ProductEdit'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/products/:prodName', component: Products, name: 'products' },
  { path: '/product/:id?', component: ProductEdit, name: 'productEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router