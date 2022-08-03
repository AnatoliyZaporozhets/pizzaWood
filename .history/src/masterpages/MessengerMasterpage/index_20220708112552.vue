<template>
  <div class="messenger">
    <div><h3>Ми в соціальних мережах :</h3></div>
    <div>
      <a href="https://www.facebook.com/pizzawood.uzhgorod"
        ><img src="@/assets/facebook-f-brands.svg" alt=""
      /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/accounts/login/?next=/pizzawooduzhhorod/">
        <img src="@/assets/instagram-brands.svg" alt=""/>
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
  width: 20px;
  margin: 5px;
}
.messenger {
  text-align: left;
  display: flex;
  background-color: rgb(19, 20, 21);
  align-items: center;
}
.messenger * {
  display: block;
  margin: 5px;
  color: white;
  
}
</style>
