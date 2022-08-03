// import { createStore } from 'vuex'
// import axios from 'axios'
// import apiEndpoints from '@/constants/apiEndpoints'


const cart = ({
  namespaced: true,  
  state: {
    cart: JSON.parse(localStorage.getItem('cartData')) || [],
    total:0,

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {

    cartLength:(state) => state.cart.length,

    carts:(state) => state.cart,
     
    total:(state)=>{
      let sum = 0;
        state.cart.forEach(obj => {
          sum += (obj.count * obj.price)
        })
        return sum
      
      },

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
  
    changeCount(state, objChangeCount) {
      const obj = state.cart.find((obj)=> obj.id === objChangeCount.id)
      if (obj) {
        if (obj.count <= 0) {
          obj.count = 1
        } 
        else {
          obj.count = objChangeCount.count
        }
      }
    },

    addIngredientToCart(state, product) {
      if (state.cart.length<=10) {
      state.cart.push(product)
      // localStorage.removeItem('cartData')
      localStorage.setItem('cartData', JSON.stringify(state.cart))
      // state.cart = JSON.parse(localStorage.getItem('cartData'))
      }
    },
    delObj(state, idObj) {
      state.cart = state.cart.filter((obj)=> obj.id !== idObj )
      
      localStorage.setItem('cartData', JSON.stringify(state.cart))
      // state.cart = JSON.parse(localStorage.getItem('cartData'))
    },
    
    cleanCart(state) {
      localStorage.removeItem('cartData')
      console.log(state.cart);
      // state.cart = []
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
    changeUserCount({ commit }, objChangeCount) {
      commit('changeCount', objChangeCount)
    },
    deleteObj({ commit }, id) {
      commit('delObj', id)
    },
    cleanCartList({ commit }, ) {
      commit('cleanCart')
    },
    
  },
})

export default cart


