<template>
  <div class="header">
    <slot name="heder">
        <label @click="goBurger">Головна</label>
      <div>Вхід</div>
      <div>Реєстрація</div>
      <!-- <div>Оформлення заовлення</div> -->
      <div>+38(066)480 28 48</div>
      <!-- <div>Мова</div> -->
      <div>
        <label @click="goBasket">Корзина</label>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "HeaderMasterpage",

  methods: {
    goBurger() {
      console.log();
      this.$router.push({ name: "products", params: { prodName: "burger" } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
