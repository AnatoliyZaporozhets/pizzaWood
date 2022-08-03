export default {
    products: {

      read:(prodName)=>`${process.env.VUE_APP_API_URL}/products/${prodName}`,


      readList: `${process.env.VUE_APP_API_URL}/products`,
      add: `${process.env.VUE_APP_API_URL}/products`,
      update: `${process.env.VUE_APP_API_URL}/products`,
      getProdById: (objData) => `${process.env.VUE_APP_API_URL}/products/${objData.prodName}/${objData.id}`,
      delete: `${process.env.VUE_APP_API_URL}/products`,
    },
    ingredients: {
      read:(prodName)=>`${process.env.VUE_APP_API_URL}/ingredients/${prodName}`,
      readList: `${process.env.VUE_APP_API_URL}/ingredients`,
      add: `${process.env.VUE_APP_API_URL}/ingredients`,
      update: `${process.env.VUE_APP_API_URL}/ingredients`,
      getIngredientById: (objData) => `${process.env.VUE_APP_API_URL}/ingredients/${objData.prodName}/${objData.id}`,
      delete: `${process.env.VUE_APP_API_URL}/ingredients`,
    },
    user: {
      usersList: `${process.env.VUE_APP_API_URL}/users`,
      signup: `${process.env.VUE_APP_API_URL}/users/signup`,
      login: `${process.env.VUE_APP_API_URL}/users/login`,
    },
  }
  