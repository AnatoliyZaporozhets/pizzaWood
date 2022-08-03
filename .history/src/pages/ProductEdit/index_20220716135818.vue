<template>
  <div>
    <div>
      <label>
        Title
        <input type="text" v-model="product.title" />
      </label>
    </div>
    <div>
      <label>
        ingredients
        <input type="text" v-model="product.ingredients" />
      </label>
    </div>
    <div>
        <div>
          <input type="radio" name="typeObg" @click="choice(1)">
          <label>Pizza</label>
        </div>
        <div>
          <input type="radio" name="typeObg" @click="choice(2)">
          <label>Burger</label>
        </div>
        <div>
          <input type="radio" name="typeObg" @click="choice(3)">
          <label>Set</label>
        </div>
        <div>
          <input type="radio" name="typeObg" @click="choice(4)">
          <label>Snack</label>
        </div>
        <div>
          <input type="radio" name="typeObg" @click="choice(5)">
          <label>Sauce</label>
        </div>
        <div>
          <input type="radio" name="typeObg" @click="choice(6)">
          <label>Drink</label>
        </div>
    </div>
    
    <div>
      <label>
        minPrice
        <input type="number" v-model="product.minPrice" />
      </label>
    </div>
    <div>
      <label>
        maxPrice
        <input type="number" v-model="product.maxPrice" />
      </label>
    </div>
    <div>
      <label>
        Photo
        <input type="file" @input="createLogoImage" />
      </label>
      <img id="img" :src="photoSrc" alt="" />
    </div>
    <button @click="onSave">{{ btnLabel }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductEdit',

  data() {
    return {
      product: {},
      rawPhotoData: null,
      
    }
  },

  computed: {
    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.product.photo && this.getImgSrc(this.product.photo))
      )
    },
    receivedProductId() {
      return this.$route.params.id
    },
    btnLabel() {
      return this.receivedProductId ? 'Update' : 'Add'
    },
    
  },

  methods: {
    ...mapActions('product',['getProductById', 'addProduct', 'updateProduct']),
    choice(type){
      switch (type) {
        case 1:
          this.product.typeProd = "pizza"
          break;
        case 2:
          this.product.typeProd = "burger"
          break;
        case 3:
          this.product.typeProd = "set"
          break;
        case 4:
          this.product.typeProd = "snack"
          break;
        case 5:
          this.product.typeProd = "sauce"
          break;
        case 6:
          this.product.typeProd = "drink"
          break;
      
        default:
          
          break;
      }
    }
    ,
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data)
      let imgData = new Blob([binary.buffer], {
        type: 'application/octet-stream',
      })
      let link = URL.createObjectURL(imgData)
      return link
    },
    createLogoImage(event) {
      const file = event.target.files[0]
      let reader = new FileReader()
      const self = this
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result
        self.product.photo = file
      }
      reader.readAsDataURL(file)
    },

    async onSave() {
      try {
        if (!this.receivedProductId) await this.addProduct(this.product)
        else await this.updateBook(this.product)
        this.$router.push({ name: 'products' })
      } catch (err) {
        console.log(err)
      }
    },
  },

  async mounted() {
    if (this.receivedProductId) {
      try {
        this.book = await this.getBookById(this.receivedProductId)
        console.log('this.updateProduct')
        console.log(this.product)
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>


