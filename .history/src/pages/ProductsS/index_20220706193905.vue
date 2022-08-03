<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div>
          <div>Pizza</div>
          <product-list :productArr="products" />
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import productList from "@/components/productList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductsS",
  components: {
    productList,
    MainMasterPage,
  },
  data() {
    return {
      
    };
  },
  watch: {
    $route: {
      deep: true,
      handler() {
         this.loadProducts(this.$route.params.prodName)
         this.products
      },
    },
  },
  
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["loadProducts", "deleteProduct"]),

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
  },
  mounted() {
    console.log(this.$route.params.prodName);
    this.loadProducts(this.$route.params.prodName);
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(40, 40, 40);
}
</style>
