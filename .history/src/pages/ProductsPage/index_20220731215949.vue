<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div v-if="isLoading" class="loading">
            <!-- <h1> Loading ...</h1> -->
          <div class="wrapper">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
            <span class="circle circle-5"></span>
            <span class="circle circle-6"></span>
            <span class="circle circle-7"></span>
            <span class="circle circle-8"></span>
          </div>

        </div>
        <div v-else>
          <div v-if="$route.params.prodName === 'pizza'" class="pizza">
          <h2>Піца</h2>
          <br>
          <h3>Піца на дровах.</h3>
          <h3>Якісно, швидко, смачно.</h3>
          <h3>Безкоштовна доставка від 400 грн.</h3>
        </div>
        <div class="productContainer"> 
          <product-list :productArr="products" />
        </div>
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
    ...mapGetters("product", ["products",'isLoading']),
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

  margin: 10px 45px;
  text-align: left;
  
}
.pizza *{
  padding: 5px;
  margin: 5px 0;
}
.productContainer{
  margin: 0 25px;
}
.loading{
  width: 100%;
  height: 800px;
}
.wrapper{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%); 
}
.circle{
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #fcdc29;
  border-radius: 50%;
  animation: loading 1.5s cubic-bezier(.8, .5, .2, 1.4) infinite;
  transform-origin: bottom center;
  position: relative;
}
@keyframes loading{
  0%{
    transform: translateY(0px);
    background-color: #fcdc29;
  }
  50%{
    transform: translateY(50px);
    background-color: #ef584a;
  }
  100%{
    transform: translateY(0px);
    background-color: #fcdc29;
  }
}
.circle-1{
  animation-delay: 0.1s;
}
.circle-2{
  animation-delay: 0.2s;
}
.circle-3{
  animation-delay: 0.3s;
}
.circle-4{
  animation-delay: 0.4s;
}
.circle-5{
  animation-delay: 0.5s;
}
.circle-6{
  animation-delay: 0.6s;
}
.circle-7{
  animation-delay: 0.7s;
}
.circle-8{
  animation-delay: 0.8s;
}
</style>
