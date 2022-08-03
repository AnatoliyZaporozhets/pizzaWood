<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div v-if="isLoading" class="loading" >
          <div class="wrapper">
           <h1> Loading ...</h1>
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
.searchContainer{
  margin: 0 25px;
}
.searchNotFound{
  padding: 150px 0;
}
</style>
