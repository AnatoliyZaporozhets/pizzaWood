export default {
    products: {
      readList: `${process.env.VUE_APP_API_URL}/pizza-app`,
      add: `${process.env.VUE_APP_API_URL}/pizza-app`,
      update: `${process.env.VUE_APP_API_URL}/pizza-app`,
      getProdById: (id) => `${process.env.VUE_APP_API_URL}/pizza-app/${id}`,
      delete: `${process.env.VUE_APP_API_URL}/pizza-app`,
    },
  }
  