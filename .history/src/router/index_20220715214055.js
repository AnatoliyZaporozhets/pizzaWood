import { createRouter, createWebHashHistory } from 'vue-router'


import Products from '@/pages/ProductsPage'
import ProductEdit from '@/pages/ProductEdit'
import IngredientEdit from '@/pages/IngredientEdit'
import FormOrder from '@/pages/FormOrder'
import Home from "@/pages/HomePage";
import Cart from "@/pages/CartPage";

const routes = [
 
  { path: '/', component: Home, name: 'home' },
  { path: '/cart', component: Cart, name: 'cart' },

  { path: '/products/:prodName', component: Products, name: 'products' },
  { path: '/products/:prodName/:id', component: FormOrder, name: 'formOrder' },
  { path: '/product/:id?', component: ProductEdit, name: 'productEdit' },
  { path: '/ingredients/:id?', component: IngredientEdit, name: 'ingredientEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router