<template>
  <div class="container">
    <div>
      <img :src="getImgSrc(productData.photo)" alt="" />
    </div>
    <div>
      {{ productData.title }}
    </div>
    <div>
      <button @click="goFormOrder">Buy</button>
    </div>
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
  margin: 25px;

}
.container {
  display: block;
  width: 270px;
  /* height: 300px; */
  color: white;
}
.container * {
  margin: 9px;
}
</style>
