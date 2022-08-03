export default {
    products: {

      read:(prodName)=>`${process.env.VUE_APP_API_URL}/products/${prodName}?`,


      readList: `${process.env.VUE_APP_API_URL}/products`,
      add: `${process.env.VUE_APP_API_URL}/products`,
      update: `${process.env.VUE_APP_API_URL}/products`,
      getProdById: (id) => `${process.env.VUE_APP_API_URL}/products/${id}`,
      delete: `${process.env.VUE_APP_API_URL}/products`,
    },
  }
  