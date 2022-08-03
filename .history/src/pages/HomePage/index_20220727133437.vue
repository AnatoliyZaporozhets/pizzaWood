<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="homeImgDiv"><img class="homeImg" src="@/assets/homeIMG.jpg" alt=""></div>
        <div class="pizzaWood"> <label class="pizzaWoodLabel">PIZZAWOOD</label> </div>
        <div class="productContainer">
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
.productContainer{
  margin: 0 25px;
}
.container {
  /* background-color: rgb(40, 40, 40); */
  background-color: #080a0a;
  
}
.homeImgDiv{
  padding: 0 35px;
}
.homeImg{
  width: 100%;
}
.pizzaWood{
  height: 50px;
  width: 100%;
  background-color: #192021;
  text-align: left;
  padding: 0 45px;
  display: flex;
  align-items: center;
}
.pizzaWoodLabel{
  padding: 0 25px;
 border-top: 8px solid orangered;
 padding-bottom: 19px;
}
/* .container * {
 margin-left: 100px;
} */
</style>
