import { createRouter, createWebHashHistory } from 'vue-router'


import Products from '@/pages/ProductsPage'
import ProductEdit from '@/pages/ProductEdit'
import IngredientEdit from '@/pages/IngredientEdit'

const routes = [
 
  { path: '/products/:prodName', component: Products, name: 'products' },
  { path: '/product/:id?', component: ProductEdit, name: 'productEdit' },
  { path: '/ingredient/:id?', component: IngredientEdit, name: 'ingredientEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router