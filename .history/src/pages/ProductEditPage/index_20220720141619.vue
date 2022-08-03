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
    receivedProductId() {
      return this.$route.params.id
    },
    
  },

  methods: {
    ...mapActions('product',['loadProductsList',]),
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
      this.loadProductsList
  },
}
</script>

<style lang="scss" scoped></style>


