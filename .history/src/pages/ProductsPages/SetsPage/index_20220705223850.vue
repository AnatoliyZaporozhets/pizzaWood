<template>
    <div class="container">
        <main-master-page>
        <template  v-slot:main>
                <div>
                    <div>Sets</div>
                    <product-list
                    :productArr='products'
                    />
                </div>
        </template>
        </main-master-page>
    </div>
  
   
</template>

<script>
import MainMasterPage from "@/masterpage/MainMasterPage.vue";
import productList from "@/components/productList";
import { mapGetters, mapActions } from "vuex";
    export default {
        name:'SetsPage',
        components: {
            productList,
            MainMasterPage,
        },
        computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["loadProducts", "deleteProduct"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    onDelete(id) {
      this.deleteProduct(id);
    },
    onEdit(id) {
      this.$router.push({ name: "productEdit", params: { id } });
    },
  },
  mounted() {
    this.loadProducts("set")
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(40, 40, 40);
}
</style>