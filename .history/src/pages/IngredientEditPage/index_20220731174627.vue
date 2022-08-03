<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="addIngredientDiv">
          <label class="addIngredient" @click="goAddIngredient" > Add Prod </label>
        </div>
        <div>
          <ul>
            <li>
              <label @click="loadIngredients('pizza')">Pizza</label>
            </li>
            <li>
              <label @click="loadIngredients('burger')">Burger</label>
            </li>
          </ul>
        </div>
       <div class="table">
          <table>
            <tr>
              <td>Назва</td>
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

.table{
  width: 100%;
}
.table *{
  border: 2px solid white;
  padding: 5px;
  margin: 5px;
}
img{
  width: 200px;
}
</style>
