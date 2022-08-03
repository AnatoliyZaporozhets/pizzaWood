<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div>
          <!-- <img :src="getImgSrc(product.photo)" alt="" /> -->
          <h2>{{ product.title }}</h2>
          <div v-if="product.maxPrice == 0">
            <p>Price = {{ (product.price = product.minPrice) }}</p>
          </div>
          <div v-else>
            <div>
              <input type="radio" name="typeObg" @click="choice(1)" />
              <label>Середня {{ product.minPrice }}.грн</label>
            </div>
            <div>
              <input type="radio" name="typeObg" @click="choice(2)" />
              <label>Велика {{ product.maxPrice }}.грн</label>
            </div>
          </div>
          <div>
            <button @click="goLog">log</button>
          </div>
        </div>
        <div>
          <table>
            <tr v-for="ingr in ingredients" :key="ingr.id">
                <th>
                  {{ingr.title}}
                </th>
                <th>{{ingr.price}}</th>
                <th>
                  <button>-</button>
                  <span>{{count}}</span>
                  <button>+</button>

                </th>
            </tr>
          </table>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import {Buffer} from 'buffer';
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormOrder",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      product: {},
      objData: {
        prodName: this.$route.params.prodName,
        id: this.$route.params.id,
      },
      count:0 ,
    };
  },
  watch: {
      searchProduct() {
        this.product = this.searchProduct
      },
  },

  computed: {
    ...mapGetters(["searchProduct", 'isLoading' ,'ingredients']),
  },
  methods: {
    ...mapActions(["getProductById", "deleteProduct",'loadIngredients']),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    onDelete(id) {
      this.deleteProduct(id);
    },
    onEdit(id) {
      this.$router.push({ name: "productEdit", params: { id } });
    },
    choice(type) {
      console.log(type);
      switch (type) {
        case 1:
          this.product.price === this.product.minPrice;
          break;
        case 2:
          this.product.price === this.product.maxPrice;
          break;
        default:
          break;
      }
    },
    goLog(){
      this.product = this.searchProduct;
      console.log(this.product.photo.data);
      
    }
  },
  async mounted() {
     this.getProductById(this.objData);
     this.product = this.searchProduct
     this.loadIngredients(this.$route.params.prodName)
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(40, 40, 40);
}
img {
  width: 120px;
  height: 120px;
}
table{
  border: 2px solid black;
}
th{
  border: 2px solid black;
}
/* .container * {
 margin-left: 100px;
} */
</style>
