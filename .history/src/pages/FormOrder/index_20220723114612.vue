<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="formOrder">
          <div class="imgWidth">
            <img :src="photoSrc" alt="" />
          </div>
          <div class="orderWidth">
          <h2 class="productTitle">{{ searchProduct.title }}</h2>
          <p class="productIngredient">{{searchProduct.ingredients}}</p>
          <div v-if="searchProduct.maxPrice == 0">
            <p>Price = {{ searchProduct.price  }}</p>
          </div>
          <div v-else>
            <div class="checkPrise">
              <input checked type="radio" name="typeObg" @click="choice(1)" />
              <label>Середня {{ searchProduct.minPrice }}.грн</label>
            </div>
            <div  class="checkPrise">
              <input type="radio" name="typeObg" @click="choice(2)" />
              <label>Велика {{ searchProduct.maxPrice }}.грн</label>
            </div>
        </div>
        <div class="orderTable" v-if="searchProduct.typeProd==='pizza' || searchProduct.typeProd==='burger'">
          <table >
            <tr v-for="ingr in ingredients" :key="ingr.id">
                <th>
                  {{ingr.title}}
                </th>
                <th>+ ₴{{ingr.price}}.00</th>
                <th>
                  <span @click="changeCount({change:-1,obj:ingr})">-</span>
                  <!-- <button @click="changeCount({change:-1,obj:ingr})">-</button> -->
                  <span class="chooseCount">{{ingr.count}}</span>
                  <!-- <button @click="changeCount({change:1,obj:ingr})">+</button> -->
                  <span @click="changeCount({change:1,obj:ingr})">+</span>


                </th>
            </tr>
          </table>
        </div>
        <div> 
          Сумма замовлення : 
          Ціна {{totalSum}}.грн  
          <div>
            <button @click="change(-1)">----</button>
             Кількість {{searchProduct.count}} 
            <button @click="change(1)">++++</button>

          </div>
         
          = {{totalSum * searchProduct.count}} 
          </div>

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
    ...mapGetters("userChooseProd",["searchProduct",'total']),
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
.chooseCount{
  padding: 6.5px 12px;
  border: 2px solid #707475;
  background-color: #1c1c1c;
}.productTitle{
  text-align: left;
  margin: 0 15px;
}
.productIngredient{
      text-align: left;
    margin: 15px;
}
.container {
  background-color: rgb(40, 40, 40);
}
img {
  width: 100%;
  /* height: 120px; */
}
table{
  width: 100%;
  /* border: 2px solid black; */
  overflow: scroll;
  background-color: #080a0a;
  /* margin: 0 auto; */
}
/* table :nth-child(even){
  background-color: beige;
} */
th{
  /* border: 2px solid black; */
  margin: 5px;
  padding: 10px;
  
}
tr{
  height: 37px;
}
tr:nth-child(odd){
  background-color: #1c1c1c;
}
.formOrder{
  /* width: 50%; */
  display: flex;
  gap: 15px;
  margin: 25px;
}
.imgWidth{
  width: 50%;
  display: block;
}
.imgWidth * {
  width: 100%;
 
}
.orderWidth{
  width: 50%;
  display: block;
}
/* .orderWidth * {
  width: 100%;
} */
.checkPrise{
  border: 1px solid white;
  background-color: #192021;
  display: flex;
  text-align: left;
  padding: 5px;
  margin: 15px;
}
.checkPrise input{
  width: 20px;
  
}
.orderTable{
  overflow-y: scroll;
  margin: 15px;
  height: 150px;
}
/* .formOrder div{
  
} */
/* .container * {
 margin-left: 100px;
} */
</style>
