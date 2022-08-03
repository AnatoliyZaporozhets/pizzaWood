<template>
  <div>
    <main-master-page>
      <template v-slot:main>
        <div class="addIngredientContainer">
          <label>
            Назва :
            <input class="addContainerInput" type="text" v-model="ingredient.title" />
          </label>
        
        <div class="inputRadio">
          Для :
          <div>
            <input type="radio" name="typeObg" @click="choice(1)" />
            <label>Pizza</label>
          </div>
          <div>
            <input  type="radio" name="typeObg" @click="choice(2)" />
            <label>Burger</label>
          </div>
        </div>

        <div>
          <label>
            Ціна :
            <input class="addContainerInput" type="number" v-model="ingredient.price" />
          </label>
        </div>
        <button @click="onSave">{{ btnLabel }}</button>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "IngredientEdit",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      ingredient: {},
    };
  },
  watch: {
    searchIngredient() {
      this.ingredient = this.searchIngredient;
      console.log("123");
      console.log(this.ingredient);
    },
  },

  computed: {
    ...mapGetters("ingredient", ["searchIngredient"]),
    receivedIngredientId() {
      return this.$route.params.id;
    },
    btnLabel() {
      return this.receivedIngredientId ? "Update" : "Add";
    },
  },

  methods: {
    ...mapActions("ingredient", [
      "getIngredientById",
      "addIngredient",
      "updateIngredient",
    ]),
    choice(type) {
      switch (type) {
        case 1:
          this.ingredient.typeProd = "pizza";
          break;
        case 2:
          this.ingredient.typeProd = "burger";
          break;
        default:
          break;
      }
    },
    async onSave() {
      try {
        if (!this.receivedIngredientId)
          await this.addIngredient(this.ingredient);
        else {
          console.log(this.ingredient);
          await this.updateIngredient(this.ingredient);
        }
        this.$router.push({ name: "ingredientEditList" });
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    if (this.receivedIngredientId) {
      try {
        this.getIngredientById({ id: this.receivedIngredientId });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.addIngredientContainer{
  text-align: left;
  width: 400px;
  background-color: #192021;
  border: 1px solid #707475;
    border-top: 3px solid #f46534;
    margin: 50px auto;
    padding: 30px;
    border-radius: 0;
    box-shadow: none;
}
.addIngredientContainer div{
      margin: 15px 0px
}
.addContainerInput{
  width: 50%;
  background-color: #1c1c1c;
  color: white;
  padding: 6.5px 10px 6.5px 20px;
  border: 2px solid #707475;
  font-size: 14px;
    height: 15px;
}
.inputRadio{
  display: flex;
  padding: 0 25px
}
button{
  padding: 11px 22px;
  // margin: 25px 0;
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
