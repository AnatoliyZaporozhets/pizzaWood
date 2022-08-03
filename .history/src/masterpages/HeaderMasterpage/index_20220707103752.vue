<template>
  <div class="header">
    <a :href="goBurger()">Головна</a>
    <a href="">Вхід</a>
    <a href="">Реєстрація</a>
    <a href="">Оформлення заовлення</a>
    <a href="">+38(066)480 28 48</a>
    <a href="">Корзина</a>
  </div>
</template>

<script>
export default {
  name: "HeaderMasterpage",

  methods: {
    goBurger() {
        console.log(this.$router.push({ name: "products", params: { prodName: "burger" } }));
      this.$router.push({ name: "products", params: { prodName: "burger" } });
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
