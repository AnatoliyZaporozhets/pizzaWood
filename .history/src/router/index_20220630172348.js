import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductEdit from '@/pages/ProductsEdit'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/products', component: Products, name: 'products' },
  { path: '/products/:id?', component: ProductEdit, name: 'productEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router