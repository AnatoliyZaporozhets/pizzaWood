import { createRouter, createWebHashHistory } from 'vue-router'


import Products from '@/pages/ProductsPage'
import ProductEdit from '@/pages/ProductEdit'
import ProductEditPage from '@/pages/ProductEditPage'
import IngredientEditPage from '@/pages/IngredientEditPage'
import IngredientEdit from '@/pages/IngredientEdit'
import FormOrder from '@/pages/FormOrder'
import Home from "@/pages/HomePage";
import Cart from "@/pages/CartPage";
import Search from "@/pages/SearchPage";
import AboutUs from "@/pages/AboutUsPage";
import DeliveryInform from "@/pages/DeliveryInformPage";

import Login from "@/pages/LoginPage";
import Signup from "@/pages/SignupPage";



const routes = [
 
  { path: '/', component: Home, name: 'home' },
  { path: '/cart', component: Cart, name: 'cart' },

  { path: '/login', component: Login, name: 'login' },
  { path: '/signup', component: Signup, name: 'signup' },


  { path: '/aboutUs', component: AboutUs, name: 'aboutUs' },
  { path: '/deliveryInform', component: DeliveryInform, name: 'deliveryInform' },


  { path: '/products/search/:userSearchObj', component: Search, name: 'search' },



  { path: '/products/:prodName', component: Products, name: 'products' },
  { path: '/products/:prodName/:id', component: FormOrder, name: 'formOrder' },


  { path: '/product', component: ProductEditPage, name: 'productEditList' },
  { path: '/product/edit/:id?', component: ProductEdit, name: 'productEdit' },
  
  { path: '/ingredients', component: IngredientEditPage, name: 'ingredientEditList' },
  { path: '/ingredients/edit/:id?', component: IngredientEdit, name: 'ingredientEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router