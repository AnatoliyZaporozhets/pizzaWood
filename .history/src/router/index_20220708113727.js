import { createRouter, createWebHashHistory } from 'vue-router'


import Products from '@/pages/ProductsS'
import ProductEdit from '@/pages/ProductEdit'

const routes = [
 
  { path: '/products/:prodName', component: Products, name: 'products' },
  { path: '/product/:id?', component: ProductEdit, name: 'productEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router