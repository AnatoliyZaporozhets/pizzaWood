<template>
  <div>
    <!-- <div v-if="isLoading">Loading......</div>
    <div v-if="isError">Error!!!!</div> -->

    <div v-show="!isLoading && !isError">
      <slot name="header">
        <header-masterpage />
      </slot>

      <slot class="panel">
        <panel-masterpage />
      </slot>

      <slot name="main"></slot>
      
     
        <slot name="messenger">
          <messenger-masterpage/>
        </slot>
      
      <div class="footer">
        <slot name="footer">
          <div>
            <h2>Інформація</h2>
            <div><label for="">Про нас</label></div>
            <div><label for="">Інформація про доставку</label></div>
          </div>

          <div>
            <h2>Контакти</h2>
            <div>с. Сторожниця, вул. Українська 10/3</div>
            <div>+38(066)480 28 48</div>
            <div>+38(098)480 28 48</div>
            <div>pizzawoood@gmail.com</div>
            <div>Щодня з 11:00 до 23:00</div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import HeaderMasterpage from "@/masterpages/HeaderMasterpage";
import PanelMasterpage from "@/masterpages/PanelMasterpage";
import MessengerMasterpage from "@/masterpages/MessengerMasterpage";
export default {
  name: "MainMasterpage",

  components: {
    HeaderMasterpage,
    PanelMasterpage,
    MessengerMasterpage
  },

  props: {
    search: null,
  },

  computed: {
    // ...mapGetters(["isLoading", "isError"]),
  },
  methods: {
    goBurger() {
      this.$router.push({ name: "products", params: { prodName: "burger" } });
    },
    goPizza() {
      this.$router.push({ name: "products", params: { prodName: "pizza" } });
    },
    goSets() {
      this.$router.push("/products/set");
    },
    goSnacks() {
      this.$router.push("/products/snack");
    },
    goSauces() {
      this.$router.push("/products/sauce");
    },
    goDrinks() {
      this.$router.push("/products/drink");
    },
    goBasket() {
      this.$router.push({ name: "BasketPage" });
    },
    searchObg(obgSearch) {
      this.$router.push(`/products/${obgSearch}`);
    },
  },
};
</script>

<style lang="scss">
// .header {
//   display: flex;
//   background-color: rgb(19, 20, 21);
// }
// .header * {
//   width: 20%;
//   margin: 15px;
//   padding: 5px;
//   color: white;
// }
// .panel {
//   display: flex;
//   background-color: rgb(0, 0, 0);
// }
// .panel * {
//   height: 60px;
//   margin: 15px;
//   padding: 5px;

//   width: 20%;

//   color: white;
//   display: flex;
// }
// .panel * :hover {
//   color: orangered;
// }
// .panel * input {
//   width: 75px;
//   height: 15px;
//   margin-right: 0px;
//   color: black;
// }
// .panel input:hover {
//   color: black;
// }
// .panel button {
//   margin-left: 0px;
// }
// input {
//   width: 45px;
// }
// .imgPanel {
//   width: 60px;
//   margin: 0px;
// }
// .panel button {
//   width: 60px;
//   height: 30px;
//   background-color: orangered;
//   display: block;
// }
.footer {
  text-align: left;
  display: flex;
  padding: 5px;
  background-color: rgb(0, 0, 0);
}
.footer div {
  display: block;
  margin-right: 10px;
  color: white;
}
.footer div * {
  padding: 5px;
}
// .messenger img {
//   width: 35px;
//   margin: px;
// }
// .messenger {
//   text-align: left;
//   display: flex;
//   padding: 5px;
//   background-color: rgb(19, 20, 21);
// }
// .messenger * {
//   display: block;
//   margin-right: 10px;
//   color: white;
//   margin-top: 4px;
// }
</style>
