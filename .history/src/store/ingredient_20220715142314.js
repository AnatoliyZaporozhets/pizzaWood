import { createStore } from 'vuex'
import axios from 'axios'
import apiEndpoints from '@/constants/apiEndpoints'


const store = createStore({
  state: {
    ingredients:[],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    ingredients: (state) => state.ingredients,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    setIngredients(state, ingredient) {
      ingredient.forEach(element => {
        element.count = 0
      });
      state.ingredients = ingredient
    },
    addIngredientToList(state, ingredient) {
      state.ingredients.push(ingredient)
    },
    deleteIngredientFromList(state, ingredientId) {
      state.ingredients = state.ingredients.filter((ingredient) => ingredient._id !== ingredientId)
    },

    setLoading(state, data) {
      state.loading = data
    },
    setError(state, data) {
      state.error = data
    },
  },
  actions: {
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
    deleteIngredients({ commit }, id) {
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
  },
})

export default store


