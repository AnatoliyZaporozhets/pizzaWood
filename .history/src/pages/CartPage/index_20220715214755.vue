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
                <tr v-for="prod in cart" :key="prod.id">
                    <td>photo</td>
                    <td>{{prod.title}}</td>
                    <td>{{prod.price}}</td>
                    <td>{{prod.count}}</td>
                    <td> sum</td>
                </tr>
            </table>
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
    ...mapGetters(['cart']),
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
    onDelete(id) {
      this.deleteProduct(id);
    },
    onEdit(id) {
      this.$router.push({ name: "productEdit", params: { id } });
    },
  },
  async mounted() {
     this.getProductById(this.objData);
     this.loadIngredients(this.$route.params.prodName)
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

 }
 th{
border: 2px solid white ;

 }
</style>