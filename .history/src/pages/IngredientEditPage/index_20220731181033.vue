<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="ingredientEditContainer">

        <div v-if="checkDel" class="checkDel">
            <div>
              <h1>Ви дійсно хочете видалити цей об'єкт ?</h1>
              <h1>'{{titleIngredient}}'</h1>
              
              <button @click="checkDelete(1)"> Так</button>
              <button @click="checkDelete(2)"> Ні</button>
            </div>
              
        </div>

        <div class="addIngredientDiv">
          <label class="addIngredient" @click="goAddIngredient" > Add Ingredient </label>
        </div>
        <div>
          <ul>
            <li @click="loadIngredients('pizza')">
              <label >Pizza</label>
            </li>
            <li @click="loadIngredients('burger')">
              <label >Burger</label>
            </li>
          </ul>
        </div>
       <div class="table">
          <table>
            <tr>
              <th>Назва</th>
              <th>Тип продукту</th>
              <th>Ціна</th>
              <th>Змінити</th>
              <th>Видалити</th>
            </tr>
            <tr v-for="ingredient in ingredients" :key="ingredient._id">
              <td>{{ingredient.title}}</td>
              <td>{{ingredient.typeProd}}</td>
    
              <td>{{ingredient.price}}</td>
              
              <td class="changeColor" @click="onEdit(ingredient._id)">Змінити</td>
              <td class="changeColor" @click="onDelete({id:ingredient._id, title:ingredient.title})">Видалити</td>
            </tr>
          </table>
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
  name: "IngredientEditPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      checkDel: false,
      id:'',
      titleIngredient:''
    };
  },
  watch: {
    ingredients(){
      this.ingredients
    }
  },

  computed: {
    ...mapGetters("ingredient", ["ingredients"]),
  },
  methods: {
    ...mapActions("ingredient", ["loadIngredients", "deleteIngredients"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    onDelete(Obj) {
      this.checkDel = true,
      this.id = Obj.id;
      this.titleIngredient = Obj.title;
    },
    checkDelete(value){
      switch (value) {
        case 1:
          this.deleteIngredients(this.id)
          this.checkDel = false
          break;
        case 2:
          this.checkDel = false
          break;
        default:
          
          break;
      }
    },

    onEdit(id) {
      this.$router.push({ name: "ingredientEdit", params: { id } });
    },
    goAddIngredient(){
      this.$router.push({ name: "ingredientEdit" })
    }
  },
  mounted() {
    this.loadIngredients('pizza');
  },
};
</script>

<style lang="css" scoped>
.addIngredientDiv{
  margin: 25px 0;
  width: 100%;
}
.addIngredient{
  width: 100%;
  padding: 10px;
  color: white;
  background-color: orangered;
  border: 2px solid orangered;
}
.addIngredient:hover{
  
  color: orangered;
  background-color: white;
}

table{
  width: 100%;
  border: 2px solid white;
  background-color: rgb(39, 40, 42);

}
table *{
  border: 2px solid white;
  padding: 5px;
  margin: 5px;
}
th {
  color: #dd5e2f;
}
ul{
  justify-content: center;
    list-style: none;
    display: flex;
    padding: 10px;
    /* border: 1px solid white; */
}
li {
  padding: 10px 15px;
  margin: 0 50px;
  border: 1px solid white;
  background-color: orangered;
}
li:hover{
  padding: 10px 15px;
  
  background-color: white;
  color: orangered;
  border: 2px solid orangered;

}
.ingredientEditContainer{
  padding: 0 45px;

}
.changeColor:hover{
 color: orangered;
 cursor: pointer;
}
img{
  width: 200px;
}

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

</style>
