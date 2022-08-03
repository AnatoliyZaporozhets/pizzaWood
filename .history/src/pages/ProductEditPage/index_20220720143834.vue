<template>
  <div>
    <table>
      <tr v-for="prod in products " :key="prod._id"></tr>
      <td>
        {{prod.title}}
      </td>
      <!-- <td>
        {{prod.in}}
      </td> -->
    </table>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'ProductEditPage',

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters('product',['products']),

    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.product.photo && this.getImgSrc(this.product.photo))
      )
    },
    
  },

  methods: {
    ...mapActions('product',['loadProductsList']),
   
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

    // async onSave() {
    //   try {
    //     if (!this.receivedProductId) await this.addProduct(this.product)
    //     else await this.updateBook(this.product)
    //     this.$router.push({ name: 'products' })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
  },

 mounted() {
      this.loadProductsList
      this.products
      console.log('56');
      console.log(this.products);
  },
}
</script>

<style lang="scss" scoped></style>


