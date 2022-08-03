<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div v-if="$route.params.prodName === 'pizza'" class="pizza">
          <h2>Піца</h2>
          <br>
          <h3>Піца на дровах.</h3>
          <h3>Якісно, швидко, смачно.</h3>
          <h3>Безкоштовна доставка від 400 грн.</h3>
        </div>
        <product-list :productArr="products" />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import productList from "@/components/productList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductsPage",
  components: {
    productList,
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
  },
  mounted() {
    this.loadProducts(this.$route.params.prodName);
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
  padding: 10px;
}
/* .container * {
 margin: 25%;
} */
</style>
