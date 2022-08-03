<template>
   <div >
    <main-master-page>
      <template v-slot:main>
        <div class="addProductContainer">
    <div>
      <label>
        Title
        <input class="addContainerInput" type="text" v-model="product.title" />
      </label>
    </div>
    <div>
      <label>
        ingredients
        <input class="addContainerInput" type="text" v-model="product.ingredients" />
      </label>
    </div>
    <div class="inputRadio">
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
        <input class="addContainerInput" type="number" v-model="product.minPrice" />
      </label>
    </div>
    <div>
      <label>
        maxPrice
        <input class="addContainerInput" type="number" v-model="product.maxPrice" />
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
    </main-master-page>
  </div>
  
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";

import { mapActions , mapGetters} from 'vuex'
import {Buffer} from 'buffer';

export default {
  name: 'ProductEdit',
  components: {
    MainMasterPage,
  },
  data() {
    return {
      product: {},
      rawPhotoData: '',
      
    }
  },
  watch: {
    searchProduct() {
      this.product = this.searchProduct
      console.log(this.product);
    }
  },

  computed: {
    ...mapGetters('userChooseProd',['searchProduct']),
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
    ...mapActions('product',['addProduct', 'updateProduct']),
    ...mapActions('userChooseProd',['getProductById']),
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
        else {
          console.log('Prod');
          console.log(this.product);
          await this.updateProduct(this.product)}
        this.$router.push({ name: 'productEditList' })
      } catch (err) {
        console.log(err)
      }
    },
  },

  async mounted() {
    if (this.receivedProductId) {
      try {
        this.getProductById({ id :this.receivedProductId})
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.addProductContainer{
  text-align: left;
  width: 400px;
  background-color: #192021;
  border: 1px solid #707475;
    border-top: 3px solid #f46534;
    margin: 50px auto;
    padding: 30px;
    border-radius: 0;
    box-shadow: none;
}
.inputRadio{
  display: flex;
}
.addContainerInput{
  width: 92%;
  background-color: #1c1c1c;
  color: white;
  padding: 6.5px 10px 6.5px 20px;
  border: 2px solid #707475;
  font-size: 14px;
    height: 25px;
}
</style>


