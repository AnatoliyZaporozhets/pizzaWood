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
    ...mapActions(['getProductById', 'addProduct', 'updateProduct']),
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
        if (!this.receivedProductId) await this.addBook(this.product)
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
        console.log('this.product')
        console.log(this.product)
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>


