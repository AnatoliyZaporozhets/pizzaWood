<template>
  <div class="messenger">
    <div><h3>Ми в соціальних мережах :</h3></div>
    <div>
      <a href="https://www.facebook.com/pizzawood.uzhgorod"
        ><img class="facebook" src="@/assets/facebook-f-brands.svg" alt=""
      /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/accounts/login/?next=/pizzawooduzhhorod/">
        <img class="instagram" src="@/assets/instagram-brands.svg" alt=""/>
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
// .messenger img {
//   width: 20px;
//   margin: 5px;
// }
.facebook{
  width: 20px;
  margin: 5px;
}
.instagram{
   width: 30px;
   margin: 5px;
}
.messenger {
  text-align: left;
  display: flex;
  background-color: rgb(19, 20, 21);
  align-items: center;
  justify-content: center;
}
.messenger * {
  display: block;
  margin: 5px;
  color: white;
  
}
</style>
