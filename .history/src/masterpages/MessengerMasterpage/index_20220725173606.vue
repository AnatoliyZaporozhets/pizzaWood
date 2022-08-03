<template>
  <div class="messenger">
    <div><h3>Ми в соціальних мережах :</h3></div>
    <div>
      <a href="https://www.facebook.com/pizzawood.uzhgorod">
        <!-- <img class="facebook" src="@/assets/facebook-f-brands.svg" alt=""/> -->
      <svg class="facebook" fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
      </a>
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
.facebook :hover{
  fill: orangered
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
  padding: 0 35px;

}
.messenger * {
  display: block;
  margin: 5px;
  color: white;
  
}
</style>
