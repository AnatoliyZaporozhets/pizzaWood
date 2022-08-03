<template>
  <div class="container" @click="goFormOrder">
    <div>
      <img :src="getImgSrc(productData.photo)" alt=""  @click="goFormOrder"/>
    </div>
    <div @click="goFormOrder">
      {{ productData.title }}( Ø30 СМ - {{productData.minPrice}}₴ / Ø40 СМ - {{productData.maxPrice}}₴)
    </div>
    <!-- <div>
      <button @click="goFormOrder">Buy</button>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {Buffer} from 'buffer';
export default {
  name: "productCard",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("basket", ["addObgInBasket"]),
    addPizzaInBasket() {
      this.addObgInBasket({
        ...this.productData,
        count: 1,
      });

    },
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    goFormOrder(){
      this.$router.push({ name: 'formOrder', params:{prodName:this.productData.typeProd, id: this.productData._id} })
    },
  },
};
</script>

<style lang="css" scoped>
img{
  width: 200px;
  height: 200px;
  background-color: #222222;
  padding: 25px;
  margin: 0 auto;

}
.container {
  display: block;
  width: 25%;
  /* width: 270px; */

  
  color: white;
  text-align: left;
  margin: 25px  0px 25px 25px;

}
.container * {
    justify-content: center;

}
</style>
