<template>
  <div class="header">
        <label @click="goBurger">Головна</label>
        <label @click="goBurger">Вхід</label>
        <label @click="goBurger">Реєстрація</label>
        <label @click="goBurger">Оформлення заовлення</label>
        <label @click="goBurger">+38(066)480 28 48</label>
        <label @click="goBasket">Корзина</label>
  </div>
</template>

<script>
export default {
  name: "HeaderMasterpage",

  methods: {
    goBurger() {
      this.$router.push({ name: "products", params: { prodName: "burger" } });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: rgb(19, 20, 21);

  padding-top: 10px;
  padding-bottom: 10px;

  justify-content: center;
}
.header * {
  width: 20%;
  margin: 15px;
  padding: 5px;
  color: white;
}
</style>
