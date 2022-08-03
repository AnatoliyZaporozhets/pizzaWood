<template>
  <div class="container">
    <div>
      <img :src="getImgSrc(productData.photo)" alt="" />
    </div>
    <div>
      {{ productData.title }}
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
  },
};
</script>

<style lang="css" scoped>
img {
  width: 120px;
  height: 120px;
}
.container {
  display: block;
  width: 155px;
  color: white;
  background-color: #222222;
}
.container * {
  margin: 9px;
}
</style>
