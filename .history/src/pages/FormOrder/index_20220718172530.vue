<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="formOrder">
          <div>
            <img :src="photoSrc" alt="" />
          </div>
          <div>
          <h2>{{ searchProduct.title }}</h2>
          <div v-if="searchProduct.maxPrice == 0">
            <p>Price = {{ searchProduct.price  }}</p>
          </div>
          <div v-else>
            <div>
              <input checked type="radio" name="typeObg" @click="choice(1)" />
              <label>Середня {{ searchProduct.minPrice }}.грн</label>
            </div>
            <div>
              <input type="radio" name="typeObg" @click="choice(2)" />
              <label>Велика {{ searchProduct.maxPrice }}.грн</label>
            </div>
          
        </div>
        <div >

          <select multiple size="3">
  

  
           
          <table>
            <tr v-for="ingr in ingredients" :key="ingr.id">
              <option>
                <th>
                  {{ingr.title}}
                </th>
                <th>{{ingr.price}}</th>
                <th>
                  <button @click="changeCount({change:-1,obj:ingr})">-</button>
                  <span>{{ingr.count}}</span>
                  <button @click="changeCount({change:1,obj:ingr})">+</button>
                </th>
              </option>
            </tr>
          </table>
          </select>
        </div>
        <div>Сумма замовлення : 
          Ціна {{totalSum}}.грн  
          <div>
            <button @click="change(-1)">----</button>
             Кількість {{searchProduct.count}} 
            <button @click="change(1)">++++</button>

          </div>
         
          = {{totalSum * searchProduct.count}} </div>

          <div>
            <button @click="addTooCart">Add too cart</button>
          </div>
        </div>
        </div>
      </template>

    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import { uid } from 'uid';
import {Buffer} from 'buffer';
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormOrder",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      totalSum: 0,
      objData: {
        prodName: this.$route.params.prodName,
        id: this.$route.params.id,
      },
      photoSrc:''
    };
  },
  watch: {
      searchProduct() {
       this.choice(1)
       this.photoSrc = this.getImgSrc(this.searchProduct.photo)
       
      },
      total(){
        this.totalSum = this.total
      }
  },

  computed: {
    ...mapGetters("userChooseProd",["searchProduct",'total'],"ingredient",["ingredients"]),
    ...mapGetters("ingredient",["ingredients"]),
    ...mapGetters("cart",["carts"]),
  },
  methods: {
    ...mapActions( "ingredient",["loadIngredients"]),
    ...mapActions( "userChooseProd",["addIngredientToSearch",'getProductById','changePriceUserProd','changeCountUserProd']),
    ...mapActions( "cart",["addIngredientToCartList"]),
      

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    // onDelete(id) {
    //   this.deleteProduct(id);
    // },
    // onEdit(id) {
    //   this.$router.push({ name: "productEdit", params: { id } });
    // },
    choice(type) {
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
    },
    change(value){
      this.changeCountUserProd(value)
    },
    addTooCart(){
      this.addIngredientToCartList({
        id: uid(),
        title: this.searchProduct.title,
        price: this.total,
        count: this.searchProduct.count,
        userIngredients: this.searchProduct.userIngredients,
        photo: this.searchProduct.photo,
        ingredients: this.searchProduct.ingredients,
      })
      this.$router.push({ name: "cart" })
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
  width: 100%;
  /* height: 120px; */
}
table{
  border: 2px solid black;
}
th{
  border: 2px solid black;
  margin: 5px;
  padding: 10px;
}
.formOrder{
  /* width: 50%; */
  display: flex;
  margin: 25px;
}
.formOrder div{
  width: 50%;

  display: block;
}
/* .container * {
 margin-left: 100px;
} */
</style>
