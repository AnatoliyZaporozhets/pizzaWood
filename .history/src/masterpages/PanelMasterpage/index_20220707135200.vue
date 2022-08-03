<template>
  <div class="panel">
      <div>
        <img
          class="imgPanel"
          src="http://pizzawood.com.ua/image/catalog/PizzaWood%202(R)(1).png"
          alt=""
        />
      </div>
      <div>
        <label @click="goPizza">Піца</label>
      </div>
      <div>
        <label @click="goBurger">Бургери</label>
      </div>
      <div>
        <label @click="goSets">Сети</label>
      </div>
      <div>
        <label @click="goSnacks">Снеки</label>
      </div>
      <div>
        <label @click="goSauces">Соуси</label>
      </div>
      <div>
        <label @click="goDrinks">Напої</label>
      </div>
      <div>
        <input type="text" :value="search" />
        <button @click="searchObg()">Знайти</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "PanelMasterpage",

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
  background-color: rgb(0, 0, 0);
}
.panel * {
  height: 60px;
  margin: 15px;
  padding: 5px;

  width: 20%;

  color: white;
  display: flex;
}
.panel * :hover {
  color: orangered;
}
.panel * input {
  width: 75px;
  height: 15px;
  margin-right: 0px;
  color: black;
}
.panel input:hover {
  color: black;
}
.panel button {
  margin-left: 0px;
}
input {
  width: 45px;
}
.imgPanel {
  width: 60px;
  margin: 0px;
}
.panel button {
  width: 60px;
  height: 30px;
  background-color: orangered;
  display: block;
}
</style>
