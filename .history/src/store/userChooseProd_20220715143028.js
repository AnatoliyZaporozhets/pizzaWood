import { createStore } from 'vuex'
// import axios from 'axios'
// import apiEndpoints from '@/constants/apiEndpoints'


const store = createStore({
  state: {
    searchProd:[],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    searchProduct:(state) => state.searchProd,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    addIngredientToSearchProd(state, ingredient) {
      const obj = state.searchProd.userIngredients.find((obj)=> obj._id === ingredient._id)
      console.log('obj');
      console.log(obj);
      
      if (obj) {
        if (obj.count === 0) {
          state.searchProd.userIngredients =  state.searchProd.userIngredients.filter((ingredient)=>ingredient._id !== obj._id)
        } 
        else {
          obj.count = ingredient.count
        }
      }
      else {
        state.searchProd.userIngredients.push(ingredient)
      }
      
      
    },
    search(state,obj){
      state.searchProd = {...obj,userIngredients:[],price:0,count:1}
    },
    setLoading(state, data) {
      state.loading = data
    },
    setError(state, data) {
      state.error = data
    },
  },
  actions: {
    addIngredientToSearch({ commit }, ingredient) {
      commit('addIngredientToSearchProd', ingredient)
    },
  },
})

export default store


