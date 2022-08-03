<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div>
          <!-- <img :src="getImgSrc(searchProduct.photo)" alt="" /> -->
          <h2>{{ searchProduct.title }}</h2>
          <div v-if="searchProduct.maxPrice == 0">
            <p>Price = {{ searchProduct.price  }}</p>
          </div>
          <div v-else>
            <div>
              <input type="radio" name="typeObg" @click="choice(1)" />
              <label>Середня {{ searchProduct.minPrice }}.грн</label>
            </div>
            <div>
              <input type="radio" name="typeObg" @click="choice(2)" />
              <label>Велика {{ searchProduct.maxPrice }}.грн</label>
            </div>
          </div>
        </div>
        <div>
          <table>
            <tr v-for="ingr in ingredients" :key="ingr.id">
                <th>
                  {{ingr.title}}
                </th>
                <th>{{ingr.price}}</th>
                <th>
                  <button @click="changeCount({change:-1,obj:ingr})">-</button>
                  <span>{{ingr.count}}</span>
                  <button @click="changeCount({change:1,obj:ingr})">+</button>

                </th>
            </tr>
          </table>
        </div>
        <!-- <div>total{{total}}</div> -->
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import {Buffer} from 'buffer';
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormOrder",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      // product: {},
      objData: {
        prodName: this.$route.params.prodName,
        id: this.$route.params.id,
      },
    };
  },
  watch: {
      searchProduct() {
       this.choice(1)
       this.total
      },
  },

  computed: {
    ...mapGetters(["searchProduct", 'isLoading' ,'ingredients','total']),
  },
  methods: {
    ...mapActions(['addIngredientToSearch',"getProductById", "deleteProduct",'loadIngredients','changePriceUserProd']),

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
          this.changePriceUserProd(this.searchProduct.minPrice) ;
          break;
        case 2:
          this.changePriceUserProd(this.searchProduct.maxPrice)
          break;
        default:
          break;
      }
    },
    changeCount(value){
      value.obj.count = value.obj.count + value.change
      if (value.obj.count < 0) {
        value.obj.count = 0
      } else {
        this.addIngredientToSearch(value.obj)
      }
      console.log(this.product);
    },
  },
  async mounted() {
     this.getProductById(this.objData);
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
