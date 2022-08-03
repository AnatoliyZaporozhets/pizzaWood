// import { createStore } from 'vuex'
import axios from 'axios'
import apiEndpoints from '@/constants/apiEndpoints'


const userChooseProd = ({
  namespaced: true,  
  state: {
    searchProd:[],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    searchProduct:(state) => state.searchProd,

    total:(state)=>{
      let sum = 0;
      if (state.searchProd.count) {
        if (state.searchProd.userIngredients.length) {
        state.searchProd.userIngredients.forEach(obj => {
          sum += (obj.count * obj.price );
        });
        return sum + state.searchProd.price
      } else {
        return state.searchProd.price;
      }
      } else {
        return sum
      }
      
      },

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    addIngredientToSearchProd(state, ingredient) {
      const obj = state.searchProd.userIngredients.find((obj)=> obj._id === ingredient._id)
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
    changePrice(state,userPrice){
      state.searchProd.price = userPrice
    },
    changeCount(state,value){
      state.searchProd.count += value
      if (state.searchProd.count <= 0) {
        state.searchProd.count = 1
      } 
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
    changePriceUserProd({ commit }, price){
      commit('changePrice', price)
    },
    changeCountUserProd({ commit }, value){
      commit('changeCount', value)
    },
    getProductById({ commit }, objData) {
      commit('setLoading', true)
      commit('setError', null)
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.products.getProdById(objData))
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) commit('search', resData.data)
            else throw new Error('Fatch failed!')
          })
          .catch((err) => {
            //Якщо погано
            commit('setError', err)
            reject(err)
          })
          .finally(
            //Завжди
            () => commit('setLoading', false)
          )
      })
    },
  },
})

export default userChooseProd


