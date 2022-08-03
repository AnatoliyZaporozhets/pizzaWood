<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div>
          <label @click="goAddProd"> Add Prod </label>
         
        </div>
        <div>
          <ul>
            <li>
              <label @click="loadProducts('pizza')">Pizza</label>
            </li>
            <li>
              <label @click="loadProducts('burger')">Burger</label>
            </li>
            <li>
              <label @click="loadProducts('set')">Set</label>
            </li>
            <li>
              <label @click="loadProducts('snack')">Snack</label>
            </li>
            <li>
              <label @click="loadProducts('sauce')">Sauce</label>
            </li>
            <li>
              <label @click="loadProducts('drink')">Drink</label>
            </li>
          </ul>
        </div>
       <div>
          <table>
            <tr v-for="prod in products" :key="prod._id">
              <td>{{prod.title}}</td>
              <td>{{prod.title}}</td>
              <td>{{prod.title}}</td>
              <td>{{prod.title}}</td>
            </tr>
          </table>
       </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductEditPage",
  components: {
  
    MainMasterPage,
  },
  data() {
    return {};
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.loadProducts(this.$route.params.prodName);
        this.products;
      },
    },
  },

  computed: {
    ...mapGetters("product", ["products"]),
  },
  methods: {
    ...mapActions("product", ["loadProducts", "deleteProduct"]),

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
    goAddProd(){
      this.$router.push({ name: "productEdit" })
    }
  },
  mounted() {
    this.loadProducts('pizza');
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(40, 40, 40);
}
.pizza{
  margin: 25px;
  text-align: left;
  
}
.pizza *{
  padding: 5px;
}
/* .container * {
 margin: 25%;
} */
</style>
