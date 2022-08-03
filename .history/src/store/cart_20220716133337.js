import { createStore } from 'vuex'
// import axios from 'axios'
// import apiEndpoints from '@/constants/apiEndpoints'


const store = createStore({
  namespaced: true,  
  state: {
    cart:[{
        id: 1,
        title: 2,
        price: 3,
        count: 4,
        userIngredients: 5,
        photo: 6,
        ingredients: 7,
    }],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    cart:(state) => state.cart,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
  
    addIngredientToCart(state, product) {
      state.cart.push(product)
    },
    
    setLoading(state, data) {
      state.loading = data
    },
    setError(state, data) {
      state.error = data
    },
  },
  actions: {
    addIngredientToCartList({ commit }, prod){
      commit('addIngredientToCart', prod)
    },
    
  },
})

export default store


