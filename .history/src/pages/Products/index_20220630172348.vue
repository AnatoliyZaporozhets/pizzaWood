<template>
  <div>
    <div v-if="isEmpty">The library is empty</div>
    <div v-else>
      <div v-for="product in products" :key="product._id" class="container">
        <div>{{ product.title }}</div>
        <!-- <div>{{ product.price }}</div> -->
        <img :src="getImgSrc(product.photo)" alt="" />
        <button @click="onDelete(product._id)">Delete</button>
        <button @click="onEdit(product._id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductsS',

  computed: {
    ...mapGetters(['products']),

    isEmpty() {
      return !this.products.length
    },
  },

  methods: {
    ...mapActions(['loadProducts', 'deleteProduct']),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data)
      let imgData = new Blob([binary.buffer], {
        type: 'application/octet-stream',
      })
      let link = URL.createObjectURL(imgData)
      return link
    },
    onDelete(id) {
      this.deleteProduct(id)
    },
    onEdit(id) {
      this.$router.push({ name: 'productEdit', params: { id } })
    },
  },

  mounted() {
    this.loadProducts()
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  > * {
    margin: 20px;
  }
  img {
    width: 70px;
  }
}
</style>


