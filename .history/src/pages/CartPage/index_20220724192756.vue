<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="containerCart">
        <div class="cartName">
          <h1>Корзина</h1>
          <hr />
        </div>
        <div v-if="cartLength === 0">
          <h1>Ваша корзина порожня</h1>
          <button class="btnGoHome" @click="goHome">ПРОДОВЖИТИ</button>
        </div>
        <div v-else>
          <div class="objTable">
          <table>
            <tr>
              <th>ЗОБРАЖЕННЯ</th>
              <th>НАЗВА ТОВАРУ</th>
              <th>ЦІНА ЗА ОДИНИЦЮ</th>
              <th>КІЛЬКІСТЬ</th>
              <th>ЗАГАЛОМ</th>
              <th></th>
            </tr>
            <tr v-for="prod in carts" :key="prod.id">
              <td>
                <!-- photo -->
                <img :src="getImgSrc(prod.photo)" alt="" />
              </td>
              <td>
                <h2>{{ prod.title }}</h2>
                <ul>
                  <li v-for="ingr in prod.userIngredients" :key="ingr.id">
                      {{ingr.title}} x {{ingr.count}}
                  </li>
                </ul>
                </td>
              <td>{{ prod.price }}</td>
              <td class="changeCountTd">
                <button class="changeCountBtn" @click="changeCount({change:-1,id:prod.id,count:prod.count})">-</button>
                 <label class="changeCountLabel" >{{ prod.count }}</label> 
                <button class="changeCountBtn" @click="changeCount({change:1,id:prod.id,count:prod.count})">+</button>
                </td>
              <td>{{prod.price*prod.count}}</td>
              <td>
                <label @click="onDelete(prod.id)">
                <svg  class="trashCan" fill='orangered' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>
                <!-- <img class="trashCan" src="@/assets/trash-can-solid.svg" alt=""> -->
                </label>
              </td>
            </tr>
          </table>
        </div>
        <div>
          Total sum : {{total}}
        </div>
        </div>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import { Buffer } from "buffer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      lengthCart: 0
    };
  },
  watch: {
    cartLength(){
      this.lengthCart = this.cartLength
    }
  },

  computed: {
    ...mapGetters("cart", ["carts",'total','cartLength']),
  },
  methods: {
    ...mapActions("cart",['changeUserCount','deleteObj']),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    changeCount(value){
      value.count +=  value.change
      if (value.count >= 1) {
        this.changeUserCount({id: value.id,count:value.count})
      } 
    },
    onDelete(id){
      this.deleteObj(id)
    },
    goHome(){
      this.$router.push({ name: "home" });
     
    }
  
  },
  
  mounted() {
    this.cartLength
  },
};
</script>

<style lang="scss" scoped>
.trashCan:hover{
  fill: white;
}
.containerCart{
  padding: 0 45px ;
}
.changeCountBtn{
  border-radius: 3px;
  font-size: 20px;
  height: 33px;
  width: 35px;
  margin: 0 10px;
  cursor: pointer;
  color: white;
  border: 2px solid orangered;

  background-color: orangered;


    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}
.changeCountBtn:hover{
  background-color: white;
  color: orangered;
}
.changeCountLabel{
  padding: 6.5px 12px;
  border: 2px solid #ffffff;
  background-color: #1c1c1c;
  height: 40px;
  font-size: 14px;
  // vertical-align: middle;

}
.changeCountTd{
  vertical-align: middle;
}
table {
  border: 2px solid white;
  
}

tr {
  border: 2px solid white;
}
td {
  border: 2px solid white;
  padding: 10px;
}
th {
  border: 2px solid white;
  padding: 10px;
}
hr{
        height: 3px;
        background-color: rgb(255, 255, 255);
        border: none;
        padding: 0px;
        
    }
.cartName *{
  margin: 45px 0;
}
.objTable table{
  margin: 15px ;
  width: 98%;
  background-color: rgb(19, 20, 21);

}
img{
  width: 80px;
}
.trashCan{
  width: 20px;
}
h1{
  margin: 55px;
}
.btnGoHome{
  margin: 25px;
  background-color: orangered;
  color: white;
  padding: 15px 20px ;
  border-radius: 10px;
  border: 2px solid orangered;
}
.btnGoHome:hover{
  background-color: white;
  color: orangered;
}
</style>
