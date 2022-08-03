<template>
  <div class="container"> 
        <div>
          <table>
            <tr v-for="ingr in ingredients" :key="ingr.id">
                <th>
                  {{ingr.title}}
                </th>
                <th>{{ingr.price}}</th>
                <th>
                  <button @click="changeCount({change:-1,obj:ingr})">-</button>
                  <span>{{count}}</span>
                  <button @click="changeCount({change:1,obj:ingr})">+</button>

                </th>
            </tr>
          </table>
        </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormOrder",
  components: {
    
  },
  props: {
    ingredients: {
        type: Array,
        default: ()=>[]
    },
  },
  data() {
    return {
      product: {},
      objData: {
        prodName: this.$route.params.prodName,
        id: this.$route.params.id,
      },
      count:0 ,
    };
  },
  watch: {
      searchProduct() {
        this.product = this.searchProduct
      },
  },

  computed: {
    ...mapGetters(["searchProduct", 'isLoading' ,'ingredients']),
  },
  methods: {
    ...mapActions(['addIngredientToSearch',"getProductById", "deleteProduct",'loadIngredients']),

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
    choice(type) {
      console.log(type);
      switch (type) {
        case 1:
          this.product.price === this.product.minPrice;
          break;
        case 2:
          this.product.price === this.product.maxPrice;
          break;
        default:
          break;
      }
    },
    goLog(){
      this.product = this.searchProduct;
      console.log(this.product.photo.data);
      
    },
    changeCount(value){
      this.count = this.count + value.change
      if (this.count <= 0) {
        this.count = 0
      } else {
        this.addIngredientToSearch({...value.obj,count:this.count})
      }
      console.log(this.product);
    },
  },
  async mounted() {
     this.getProductById(this.objData);
     this.product = this.searchProduct
     this.loadIngredients(this.$route.params.prodName)
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(40, 40, 40);
}
img {
  width: 120px;
  height: 120px;
}
table{
  border: 2px solid black;
}
th{
  border: 2px solid black;
  margin: 5px;
  padding: 10px;
}
/* .container * {
 margin-left: 100px;
} */
</style>
