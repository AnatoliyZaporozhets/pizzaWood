<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="productEditContainer">
          <div v-if="isLoading" class="loading">
                <div class="wrapper">
            
            <h1 class="animate"> Loading ...</h1>
          </div>
          </div>
          <div v-else>
            <div v-if="checkDel" class="checkDel">
                        <div>
                          <h1>Ви дійсно хочете видалити цей об'єкт ?</h1>
                          <h1>'{{titleProduct}}'</h1>
                          
                          <button @click="checkDelete(1)"> Так</button>
                          <button @click="checkDelete(2)"> Ні</button>
                        </div>
                          
                    </div>
                    <div class="addProductDiv">
                      <label class="addProduct" @click="goAddProd"> Додати товар </label>
                    </div>
                    <div>
                      <ul>
                        <li @click="loadProducts('pizza')">
                          <label>Піца</label>
                        </li>
                        <li @click="loadProducts('burger')">
                          <label >Бургер</label>
                        </li>
                        <li @click="loadProducts('set')">
                          <label>Сет</label>
                        </li>
                        <li @click="loadProducts('snack')">
                          <label>Снек</label>
                        </li>
                        <li @click="loadProducts('sauce')">
                          <label>Соус</label>
                        </li>
                        <li @click="loadProducts('drink')">
                          <label>Напій</label>
                        </li>
                      </ul>
                    </div>
                  
                  <div class="table">
                      <table>
                        <tr>
                          <th>Photo</th>
                          <th>Назва</th>
                          <th>Тип продукту</th>
                          <th>Інгредієнти</th>
                          <th>Ціна</th>
                          <th>Змінити</th>
                          <th>Видалити</th>
                        </tr>
                        <tr v-for="prod in products" :key="prod._id">
                          <td><img :src="getImgSrc(prod.photo)" alt=""></td>
                          <td>{{prod.title}}</td>
                          <td>{{prod.typeProd}}</td>
                          <td>{{prod.ingredients}}</td>
                          <td v-if="prod.maxPrice === 0">{{prod.minPrice}}.грн</td>
                          <td v-else> {{prod.minPrice}}.грн  {{prod.maxPrice}}.грн </td>
                          <td class="changeColor" @click="onEdit(prod._id)">Змінити</td>
                          <td class="changeColor" @click="onDelete({id:prod._id,title:prod.title})">Видалити</td>
                        </tr>
                      </table>
                  </div>
            
            </div>

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
      id:'',
      titleProduct:''

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
    onDelete(Obj) {
      this.checkDel = true,
      this.id = Obj.id;
      this.titleProduct = Obj.title;
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
.addProductDiv{
  margin: 25px 0;
  width: 100%;
}
.addProduct{
  width: 100%;
  padding: 10px;
  color: white;
  background-color: orangered;
  border: 2px solid orangered;
}
.addProduct:hover{
  
  color: orangered;
  background-color: white;
}
table{
  background-color: rgb(39, 40, 42);
  width: 100%;
}
.table *{
  border: 2px solid white;
  padding: 5px;
  margin: 5px;
}
ul{
  justify-content: space-between;
    list-style: none;
    display: flex;
    padding: 10px;
    /* border: 1px solid white; */
}
th {
  color: #dd5e2f;
}
li {
  padding: 10px 15px;
  border: 1px solid white;
  background-color: orangered;
}
li:hover{
  padding: 10px 15px;
  
  background-color: white;
  color: orangered;
  border: 2px solid orangered;

}
img{
  width: 200px;
}
/* .checkDel{
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  position: absolute;
  justify-content: space-between;
  text-align: center;
} */
.checkDel div{
  width: 400px;
  height:  200px;
  margin: auto;
  /* background-color: rgb(27, 15, 151); */
  position: fixed;
  justify-content: space-between;
  text-align: center;

  background-color: #192021;
  border: 1px solid #707475;
    border-top: 3px solid #f46534;
    margin: 0 30%;
    padding: 30px;
    /* border-radius: 0; */
    box-shadow: none;


}
button{
  padding: 11px 22px;
   margin: 25px;
  background-color: #f46534;
  border: 2px solid #f46534 ;
  color: white;
  border-radius: 5px
}
button:hover{
  background-color: white;
  color: #f46534;

}
.changeColor:hover{
 color: orangered;
 cursor: pointer;
}
.productEditContainer{
  padding: 0 35px;
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
