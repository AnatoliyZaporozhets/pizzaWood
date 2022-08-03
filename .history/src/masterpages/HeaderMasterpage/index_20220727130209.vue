<template>
  <div class="header">
        <label @click="goHome">Головна</label>
        <label v-if="!userData" @click="goLogin">Вхід</label>
        <label v-if="!userData" @click="goSingup">Реєстрація</label>
        <label >+38(066)480 28 48</label>

        <label v-if="userData" >{{userData.name}}</label>

        <label v-if="userData" @click="logOut" >Вихід</label>


        <label v-if="userData && userData.admin" @click="addProd">Додати товар</label>
        <label v-if="userData && userData.admin" @click="addIngredient">Додати інгредієнт</label>
        
   
        <label @click="goBasket">Корзина {{cartLength}}</label>
  </div>
</template>

<script>
import { mapGetters ,mapActions } from "vuex";

export default {
  name: "HeaderMasterpage",

computed: {
  ...mapGetters("auth",["authData"]),
  ...mapGetters("cart",["cartLength",'cleanCartList']),
  userData(){
    return this.authData
  }
},
  methods: {
    ...mapActions("auth",["logout"]),
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
    logOut(){
      this.logout
      this.$router.push({ name: "home"});


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
label:hover{
  color: orangered;
}
</style>
