<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="ingredientEditContainer">
        <div class="addIngredientDiv">
          <label class="addIngredient" @click="goAddIngredient" > Add Prod </label>
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
              <td>Тип продукту</td>
              <td>Ціна</td>
              <td>Змінити</td>
              <td>Видалити</td>
            </tr>
            <tr v-for="ingredient in ingredients" :key="ingredient._id">
              <td>{{ingredient.title}}</td>
              <td>{{ingredient.typeProd}}</td>
    
              <td>{{ingredient.price}}</td>
              
              <td @click="onEdit(ingredient._id)">Змінити</td>
              <td @click="onDelete(ingredient._id)">Видалити</td>
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
    return {};
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
    onDelete(id) {
      this.deleteIngredients(id);
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

}
table *{
  border: 2px solid white;
  padding: 5px;
  margin: 5px;
}
th *{
  color: orangered;
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
img{
  width: 200px;
}

</style>
