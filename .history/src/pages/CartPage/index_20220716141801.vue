<template>
     <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div>
            <h1>Корзина</h1>
            <hr>
        </div>
        <div>
            <table>
                <tr>
                    <th>
                        Photo
                    </th>
                    <th>
                        Name
                    </th>
                    <th>Prise</th>
                    <th>Count</th>
                    <th>TotalPrise</th>
                </tr>
                <tr v-for="prod in carts" :key="prod.id">
                    <td>
                      photo
                      <!-- <img :src="getImgSrc(prod.photo)" alt="" /> -->
                      </td>
                    <td>{{prod.title}}</td>
                    <td>{{prod.price}}</td>
                    <td>{{prod.count}}</td>
                    <td> sum</td>
                </tr>
            </table>
            <div>
              <button @click="btn">
                btn
              </button>
            </div>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";
import {Buffer} from 'buffer';
import { mapGetters, mapActions } from "vuex";
    export default {
        name:'CartPage',
        components: {
            MainMasterPage,
        },
        data() {
    return {

    };
  },
  watch: {
      
  },

  computed: {
    ...mapGetters("cart",["carts"]),
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
    btn(){
      console.log(this.carts);
    }
  },
  async mounted() {
    //  this.getProductById(this.objData);
    //  this.loadIngredients(this.$route.params.prodName)

  },
    }
</script>

<style lang="scss" scoped>
table{
border: 2px solid white ;
 }
 tr{
border: 2px solid white ;

 }
 td{
border: 2px solid white ;
padding: 10px;

 }
 th{
border: 2px solid white ;
padding: 10px;

 }
</style>