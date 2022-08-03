import { createStore } from 'vuex'
import axios from 'axios'
import apiEndpoints from '@/constants/apiEndpoints'


const store = createStore({
  state: {
    products: [],
    ingredients:[],
    searchProd:[],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    products: (state) => state.products,
    ingredients: (state) => state.ingredients,
    searchProduct:(state) => state.searchProd,

    total:(state)=>{
      let sum = 0;
      if (state.searchProd.length) {
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
      
        
      }
,
    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    setProduct(state, products) {
      state.products = products
    },
    setIngredients(state, ingredient) {
      ingredient.forEach(element => {
        element.count = 0
      });
      state.ingredients = ingredient
    },
    addProductToList(state, product) {
      state.products.push(product)
    },
    addIngredientToList(state, ingredient) {
      state.ingredients.push(ingredient)
    },
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
    deleteProductFromList(state, productId) {
      state.products = state.products.filter((product) => product._id !== productId)
    },
    deleteIngredientFromList(state, ingredientId) {
      state.ingredients = state.ingredients.filter((ingredient) => ingredient._id !== ingredientId)
    },
    search(state,obj){
      state.searchProd = {...obj,userIngredients:[],price:0,count:1}
    },
    changePrice(state,userPrice){
      state.searchProd.price = userPrice
    },
    setLoading(state, data) {
      state.loading = data
    },
    setError(state, data) {
      state.error = data
    },
  },
  actions: {
    loadProducts({ commit },prodName) {
      commit('setLoading', true)
      commit('setError', null)
      //Запит на сервер
      axios
        .get(apiEndpoints.products.read(prodName)) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit('setProduct', resData.data)
          else throw new Error('Fatch failed!')
        })
        .catch((err) => {
          //Якщо погано
          commit('setError', err)
        })
        .finally(
          //Завжди
          () => commit('setLoading', false)
        )
    },
    loadIngredients({ commit },prodName) {
      commit('setLoading', true)
      commit('setError', null)
      //Запит на сервер
      axios
        .get(apiEndpoints.ingredients.read(prodName)) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit('setIngredients', resData.data)
          else throw new Error('Fatch failed!')
        })
        .catch((err) => {
          //Якщо погано
          commit('setError', err)
        })
        .finally(
          //Завжди
          () => commit('setLoading', false)
        )
    },

    addProduct({ commit }, product) {
      commit('setLoading', true)
      commit('setError', null)

      const formData = new FormData()
      for (const key in product) {
        formData.append(key, product[key])
      }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.products.add, formData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true)
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
    addIngredient({ commit }, ingredient) {
      commit('setLoading', true)
      commit('setError', null)

      const formData = new FormData()
      for (const key in ingredient) {
        formData.append(key, ingredient[key])
      }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.ingredients.add, formData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true)
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
    updateProduct({ commit }, product) {
      commit('setLoading', true)
      commit('setError', null)

      const formData = new FormData()
      for (const key in product) {
        formData.append(key, product[key])
      }
      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.products.update, formData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true)
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
    updateIngredient({ commit }, ingredient) {
      commit('setLoading', true)
      commit('setError', null)

      const formData = new FormData()
      for (const key in ingredient) {
        formData.append(key, ingredient[key])
      }
      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.ingredients.update, formData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true)
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
    getIngredientById({ commit }, id) {
      commit('setLoading', true)
      commit('setError', null)
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.products.getProdById(id))
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(resData.data)
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
    deleteProduct({ commit }, id) {
      commit('setLoading', true)
      commit('setError', null)
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.ingredients.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            console.log('-resData')
            console.log(resData)
            if (resData.success) {
              commit('deleteIngredientFromList', id)
              resolve(true)
            } else throw new Error('Delete failed!')
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
    addIngredientToSearch({ commit }, ingredient) {
      // console.log('action');
      // console.log(ingredient);
      commit('addIngredientToSearchProd', ingredient)
    },
    changePriceUserProd({ commit }, price){
      commit('changePrice', price)
    }
  },
})

export default store


