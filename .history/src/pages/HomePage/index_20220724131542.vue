<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div><img src="@/assets/homeIMG.jpg" alt=""></div>
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
  name: "HomePage",
  components: {
    productList,
    MainMasterPage,
  },
  data() {
    return {};
  },
  watch: {
    
  },

  computed: {
    ...mapGetters("product",["products"]),
  },
  methods: {
    ...mapActions("product",["loadProducts", "deleteProduct"]),

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
    this.loadProducts('pizza');
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(40, 40, 40);
  
}
/* .container * {
 margin-left: 100px;
} */
</style>
