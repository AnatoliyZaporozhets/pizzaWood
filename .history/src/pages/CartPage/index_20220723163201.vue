<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="cartName">
          <h1>Корзина</h1>
          <hr />
        </div>
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
                <button class="changeCountBtn" @click="changeCount({change:-1,id:prod.id,count:prod.count})">---</button>
                 <div class="changeCountDiv"> {{ prod.count }}</div>
                
                <button class="changeCountBtn" @click="changeCount({change:1,id:prod.id,count:prod.count})">+++</button>
                </td>
              <td>{{prod.price*prod.count}}</td>
              <td>
                <label @click="onDelete(prod.id)"><img class="trashCan" src="@/assets/trash-can-solid.svg" alt=""></label>
              </td>
            </tr>
          </table>
        </div>
        <div>
          Total sum : {{total}}
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
    return {};
  },
  watch: {
    // carts(){
    //   this.total
    // }
  },

  computed: {
    ...mapGetters("cart", ["carts",'total']),
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
    }
  
  },
  
  mounted() {},
};
</script>

<style lang="scss" scoped>

.changeCountBtn{
  padding: 6.5px 12px;
  border: 2px solid #707475;
  background-color: #1c1c1c;
  height: 40px;
  font-size: 20px;
  // vertical-align: middle;
}
.changeCountDiv{
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
  margin: 15px 0;
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
</style>
