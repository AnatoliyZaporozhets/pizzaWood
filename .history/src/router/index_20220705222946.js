import { createRouter, createWebHashHistory } from 'vue-router'

import PizzaPage from "@/pages/ProductsPages/PizzaPage";
import BurgerPage from "@/pages/ProductsPages/BurgerPage";
// import SetsPage from "@/pages/ProductsPages/SetsPage";
// import SnacksPage from "@/pages/ProductsPages/SnacksPage";
// import SaucesPage from "@/pages/ProductsPages/SaucesPage";
// import DrinksPage from "@/pages/ProductsPages/DrinksPage";
// import BasketPage from "@/pages/BasketPage";

import Products from '@/pages/ProductsS'
import ProductEdit from '@/pages/ProductEdit'

const routes = [
  { path: "/products/pizza", component: PizzaPage, name: "PizzaPage" },
  { path: "/products/burger", component: BurgerPage, name: "BurgerPage" },
  // { path: "/products/sets", component: SetsPage, name: "SetsPage" },
  // { path: "/products/snacks", component: SnacksPage, name: "SnacksPage" },
  // { path: "/products/sauces", component: SaucesPage, name: "SaucesPage" },
  // { path: "/products/drinks", component: DrinksPage, name: "DrinksPage" },
  // { path: "/products/basket", component: BasketPage, name: "BasketPage" },
  { path: '/products/:prodName', component: Products, name: 'products' },
  { path: '/product/:id?', component: ProductEdit, name: 'productEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router