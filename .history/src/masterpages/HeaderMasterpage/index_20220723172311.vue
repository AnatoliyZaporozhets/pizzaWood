<template>
  <div class="header">
        <label @click="goHome">Головна</label>
        <label @click="goLogin">Вхід</label>
        <label @click="goSingup">Реєстрація</label>
        <!-- <label @click="goBurger">Оформлення заовлення</label> -->
        <label >+38(066)480 28 48</label>

        <label  @click="addProd">Додати товар</label>
        <label  @click="addIngredient">Додати інгредієнт</label>
        
        <!-- <div v-if="admin">I'm admin </div> -->
        <div > <button @click="goAdmin">Admin</button></div>


        <label @click="goBasket">Корзина</label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderMasterpage",

computed: {
  ...mapGetters("auth",["usersList"])
},
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    goBurger() {
      this.$router.push({ name: "products", params: { prodName: "burger" } });
    },
    goBasket() {
      this.$router.push({ name: "cart"});
    },
    goLogin() {
      this.$router.push({ name: "login"});
    },
    goSingup() {
      this.$router.push({ name: "signup"});
    },
    addProd(){
      this.$router.push({ name: "productEditList"});

    },
    addIngredient(){
      this.$router.push({ name: "ingredientEditList"});
    },
    goAdmin(){
      console.log(this.usersList);
    }
  },

};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: rgb(19, 20, 21);
  

  // position: relative;
    // padding: 18px 0 15px;

//   padding-top: 8px;
//   padding-bottom: 8px;

  // justify-content: center;
  align-items: center;
}
.header * {
  width: 100%;
  // margin: 15px;
  padding: 10px;
  color: white;
  justify-content: space-between;
 
}
</style>
