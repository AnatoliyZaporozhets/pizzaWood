<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div class="cartName">
          <h1>Корзина</h1>
          <hr />
        </div>
        <div>
          <table>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Prise</th>
              <th>Count</th>
              <th>TotalPrise</th>
            </tr>
            <tr v-for="prod in carts" :key="prod.id">
              <td>
                <!-- photo -->
                <img :src="getImgSrc(prod.photo)" alt="" />
              </td>
              <td>
                <h2>{{ prod.title }}</h2>
                <ul>
                  <li v-for="ingr in prod.userIngredients" :key="ingr.id">
                      {{ingr.title}} x {{ingr.count}}
                  </li>
                </ul>
                </td>
              <td>{{ prod.price }}</td>
              <td>{{ prod.count }}</td>
              <td>{{prod.price*prod.count}}</td>
            </tr>
          </table>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import { Buffer } from "buffer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {};
  },
  watch: {},

  computed: {
    ...mapGetters("cart", ["carts"]),
  },
  methods: {
    ...mapActions([]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
table {
  border: 2px solid white;
}
tr {
  border: 2px solid white;
}
td {
  border: 2px solid white;
  padding: 10px;
}
th {
  border: 2px solid white;
  padding: 10px;
}
hr{
        height: 3px;
        background-color: rgb(255, 255, 255);
        border: none;
    }
.cartName *{
  padding: 15px;
}
</style>
