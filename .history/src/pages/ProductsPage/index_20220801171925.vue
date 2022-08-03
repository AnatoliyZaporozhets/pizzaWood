<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div v-if="isLoading" class="loading">
          <div class="wrapper">
            
            <h1 class="animate"> Loading ...</h1>
          </div>

        </div>
        <div v-else-if="isError" class="loading">
            <div class="wrapper">
            <h1>{{isError}}</h1>
            <h1> Винекли технічні неполадки :( <br> Спробуйте перезавантажити сторінку</h1>
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
        // this.products;
      },
    },
  },

  computed: {
    ...mapGetters("product", ["products",'isLoading','isError']),
  },
  methods: {
    ...mapActions("product", ["loadProducts"]),

  },
  async mounted() {
    await this.loadProducts(this.$route.params.prodName);
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
  height: 400px;
}
.wrapper{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%); 
}
@keyframes load {
    0%{
        opacity: 0.08;
				filter: blur(5px);
				letter-spacing: 3px;
        }
    100%{

        }
}
.animate {
	display:flex;
	justify-content: center;
	align-items: center;
	height:100%;
	margin: auto;
	font-family: Helvetica, sans-serif, Arial;
	animation: load 1.2s infinite 0s ease-in-out;
	animation-direction: alternate;
	text-shadow: 0 0 1px white;
}

</style>
