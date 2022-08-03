<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div v-if="isLoading" class="loading" >
          <div class="wrapper">
           <h1 class="animate"> Loading ...</h1>
          </div>
        </div>
        <div v-else>
          <div v-if="products.length === 0">
                  <h1 class="searchNotFound">Об'єктів задовілянючих пошук не знайдено</h1>
                  </div>
                  <div v-else>
                  <div class="searchContainer">
                            <product-list :productArr="products" />
                          </div>
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
  name: "SearchPage",
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
        this.loadSearchProducts(this.$route.params.userSearchObj)
        
      },
    },
  },

  computed: {
    ...mapGetters("product", ["products",'isLoading']),
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
 async mounted() {
   await this.loadSearchProducts(this.$route.params.userSearchObj);
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
.searchContainer{
  margin: 0 25px;
}
.searchNotFound{
  padding: 150px 0;
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
</style>
