<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
         <div v-if="checkDel" class="checkDel">
            <div>
              <h1>Ви дійсно хочете видалити цей об'єкт ?</h1>
              
              <button @click="checkDelete(1)"> Так</button>
              <button @click="checkDelete(2)"> Ні</button>
            </div>
              
        </div>
        <div>
          <label @click="goAddProd"> Add Prod </label>
        </div>
        <div>
          <ul>
            <li>
              <label @click="loadProducts('pizza')">Pizza</label>
            </li>
            <li>
              <label @click="loadProducts('burger')">Burger</label>
            </li>
            <li>
              <label @click="loadProducts('set')">Set</label>
            </li>
            <li>
              <label @click="loadProducts('snack')">Snack</label>
            </li>
            <li>
              <label @click="loadProducts('sauce')">Sauce</label>
            </li>
            <li>
              <label @click="loadProducts('drink')">Drink</label>
            </li>
          </ul>
        </div>
       
       <div class="table">
          <table>
            <tr>
              <td>Photo</td>
              <td>Назва</td>
              <td>Тип продукту</td>
              <td>Інгредієнти</td>
              <td>Ціна</td>
              <td>Змінити</td>
              <td>Видалити</td>
            </tr>
            <tr v-for="prod in products" :key="prod._id">
              <td><img :src="getImgSrc(prod.photo)" alt=""></td>
              <td>{{prod.title}}</td>
              <td>{{prod.typeProd}}</td>
              <td>{{prod.ingredients}}</td>
              <td v-if="prod.maxPrice === 0">{{prod.minPrice}}.грн</td>
              <td v-else> {{prod.minPrice}}.грн  {{prod.maxPrice}}.грн </td>
              <td @click="onEdit(prod._id)">Змінити</td>
              <td @click="onDelete(prod._id)">Видалити</td>
            </tr>
          </table>
       </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import {Buffer} from 'buffer';
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductEditPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      checkDel: false,
      id:''
    };
  },
  watch: {
    products(){
      console.log('10');
      this.products
    }
  },

  computed: {
    ...mapGetters("product", ["products"]),
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
    // onDelete(id) {
    //   this.deleteProduct(id);
    // },
    onEdit(id) {
      this.$router.push({ name: "productEdit", params: { id } });
    },
    goAddProd(){
      this.$router.push({ name: "productEdit" })
    },
    onDelete(idObj) {
      this.checkDel = true,
      this.id = idObj;
    },
    checkDelete(value){
      switch (value) {
        case 1:
          this.deleteProduct(this.id)
          this.checkDel = false
          break;
        case 2:
          this.checkDel = false
          break;
        default:
          
          break;
      }
    }
  },
  mounted() {
    this.loadProducts('pizza');
  },
};
</script>

<style lang="css" scoped>
.table *{
  border: 2px solid white;
  padding: 5px;
  margin: 5px;
}
img{
  width: 200px;
}
.checkDel{
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  position: absolute;
  justify-content: space-between;
  text-align: center;
}
.checkDel div{
  width: 400px;
  height:  400px;
  margin: auto;
  background-color: rgb(27, 15, 151);
  position: fixed;
  justify-content: space-between;
  text-align: center;
}
</style>
