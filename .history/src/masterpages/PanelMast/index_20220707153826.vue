<template>
  <div class="panel">
    <img
      class="imgPanel"
      src="http://pizzawood.com.ua/image/catalog/PizzaWood%202(R)(1).png"
      alt=""
    />

    <label @click="goPizza"><span>Піца</span> </label>

    <label @click="goBurger">Бургери</label>

    <label @click="goSets">Сети</label>

    <label @click="goSnacks">Снеки</label>

    <label @click="goSauces">Соуси</label>

    <label @click="goDrinks">Напої</label>
    <div>
      <input type="text" :value="search" />
      <button @click="searchObg()">Знайти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelMast",

  methods: {
    goBurger() {
      this.$router.push({ name: "products", params: { prodName: "burger" } });
    },
    goPizza() {
      this.$router.push({ name: "products", params: { prodName: "pizza" } });
    },
    goSets() {
      this.$router.push("/products/set");
    },
    goSnacks() {
      this.$router.push("/products/snack");
    },
    goSauces() {
      this.$router.push("/products/sauce");
    },
    goDrinks() {
      this.$router.push("/products/drink");
    },
    goBasket() {
      this.$router.push({ name: "BasketPage" });
    },
    searchObg(obgSearch) {
      this.$router.push(`/products/${obgSearch}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
   display: flex;
  background-color: rgb(19, 20, 21);

  position: relative;
    // padding: 18px 0 15px;

  padding-top: 8px;
  padding-bottom: 8px;

  justify-content: center;
  // align-items: center
}
.panel * {
  width: 20%;
  margin: 15px;
  padding: 5px;
  color: white;
  // justify-content: center;
  // align-items: center
}
.panel * *{
 display: table-cell;
  vertical-align: middle;
}
.panel label :hover {
  color: orangered;
}
// .panel * input {
//   width: 75px;
//   height: 15px;
//   margin-right: 0px;
//   color: black;
// }
// .panel input:hover {
//   color: black;
// }
// .panel button {
//   margin-left: 0px;
// }
// input {
//   width: 45px;
// }
.imgPanel {
  width: 60px;
  
   margin: 15px;
  padding: 5px;
}
// .panel button {
//   width: 60px;
//   height: 30px;
//   background-color: orangered;
//   display: block;
// }
</style>
