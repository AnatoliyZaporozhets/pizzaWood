<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
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
  name: "SearchPage",
  components: {
    productList,
    MainMasterPage,
  },
  data() {
    return {};
  },
  // watch: {
  //   $route: {
  //     deep: true,
  //     handler() {
  //       this.loadProducts(this.$route.params.prodName);
  //       this.products;
  //     },
  //   },
  // },

  computed: {
    ...mapGetters("product", ["products"]),
  },
  methods: {
    ...mapActions("product", ["loadSearchProducts"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
  },
  mounted() {
    this.loadSearchProducts(this.$route.params.userSearchObj);
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
