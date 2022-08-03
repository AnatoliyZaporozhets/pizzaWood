<template>
  <div class="messenger">
    <div><h3>Ми в соціальних мережах :</h3></div>
    <div>
      <a href="https://www.facebook.com/pizzawood.uzhgorod"
        ><img src="@/assets/facebook-brands.svg" alt=""
      /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/accounts/login/?next=/pizzawooduzhhorod/">
        <img src="@/assets/instagram-square-brands.svg" alt=""/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerMasterpage",
};
</script>

<style lang="scss" scoped>
.messenger img {
  width: 35px;
  margin: 5px;
}
.messenger {
  text-align: left;
  display: flex;
  padding: 5px;
  background-color: rgb(19, 20, 21);
  align-items: center;
}
.messenger * {
  display: block;
  margin-right: 10px;
  color: white;
  margin-top: 4px;
}
</style>
