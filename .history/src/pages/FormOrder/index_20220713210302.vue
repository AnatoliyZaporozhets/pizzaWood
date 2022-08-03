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
    };
  },
  // watch: {
  //     handler() {
  //       this.loadProducts(this.$route.params.prodName);
  //       this.products;
  //     },
  // },

  computed: {
    ...mapGetters(["searchProduct"]),
  },
  methods: {
    ...mapActions(["getProductById", "deleteProduct"]),

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
  },
  mounted() {
    console.log(this.getProductById(this.objData));
    this.getProductById(this.objData);
    console.log(this.searchProduct);
    this.product = this.searchProduct
    console.log(this.product);
    
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
/* .container * {
 margin-left: 100px;
} */
</style>
