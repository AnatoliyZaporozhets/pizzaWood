<template>
  <div class="panel">
    <div class="logo">
      <img
        class="logo__img"
        src="http://pizzawood.com.ua/image/catalog/PizzaWood%202(R)(1).png"
        alt=""
      />
    </div>

    <nav>
      <ul class="panel__nav__list">
        <li><label class="panel__nav__link" @click="goPizza">Піца</label></li>
        <li><label class="panel__nav__link" @click="goBurger">Бургери</label></li>
        <li><label class="panel__nav__link" @click="goSets">Сети</label></li>
        <li><label class="panel__nav__link" @click="goSnacks">Снеки</label></li>
        <li><label class="panel__nav__link" @click="goSauces">Соуси</label></li>
        <li><label class="panel__nav__link" @click="goDrinks">Напої</label></li>
      </ul>
    </nav>

    <div class="cart__wrapper">
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
  background-color: black;
  position: fixed;
  width: 100%;
  // top: 0;
  // z-index: 100;
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 0;
  &__nav__list {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    list-style: none;
    display: flex;
    gap: 45px;
  }
  &__nav__link {
    text-decoration: none;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: rgb(237, 229, 229);
    &:hover {
      color: #6e9c9f;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  &__img {
    width: 60px;
    margin: 0px , 15px;
    // height: 25px;
  };
  }

</style>
