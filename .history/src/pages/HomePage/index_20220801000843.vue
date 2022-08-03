<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div v-if="isLoading" class="loading">
            <div class="wrapper">
              <h1 class="animate"> Loading ...</h1>
            </div>  
        </div>
        <div v-else>
        <div class="homeImgDiv"><img class="homeImg" src="@/assets/homeIMG.jpg" alt=""></div>
                <div class="pizzaWood"> <label class="pizzaWoodLabel">PIZZAWOOD</label> </div>
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
    ...mapGetters("product",["products",'isLoading']),
  },
  methods: {
    ...mapActions("product",["loadProducts", "deleteProduct"]),

  },
  async mounted() {
   await this.loadProducts('pizza');
  },
};
</script>

<style lang="css" scoped>
.productContainer{
  margin: 0 25px;
}
.container {
  background-color: rgb(40, 40, 40);
  /* background-color: #080a0a; */
  
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
/*         font-size: 10px; */
/* 				font-weight: 400; */
				filter: blur(5px);
				letter-spacing: 3px;
        }
    100%{
/*         opacity: 1; */
/*         font-size: 12px; */
/* 				font-weight:600; */
/* 				filter: blur(0); */
        }
}
.animate {
	display:flex;
	justify-content: center;
	align-items: center;
	height:100%;
	margin: auto;
/* 	width: 350px; */
/* 	font-size:26px; */
	font-family: Helvetica, sans-serif, Arial;
	animation: load 1.2s infinite 0s ease-in-out;
	animation-direction: alternate;
	text-shadow: 0 0 1px white;
}
/* .container * {
 margin-left: 100px;
} */
</style>
