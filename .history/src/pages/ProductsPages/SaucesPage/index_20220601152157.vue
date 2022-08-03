<template>
    <div class="container">
        <main-master-page>
        <template  v-slot:main>
                <div>
                    <div>Sauces</div>
                    <product-list
                    :productArr='getSaucesList'
                    />
                </div>
        </template>
        </main-master-page>
    </div>
  
   
</template>

<script>
import MainMasterPage from "@/masterpage/MainMasterPage.vue";
import productList from "@/components/productList";
import { mapGetters } from "vuex";
    export default {
        name:'SaucesPage',
        components: {
            productList,
            MainMasterPage,
        },
        computed: {
            ...mapGetters('sauces',['getSaucesList']),
        },

    }
</script>

<style lang="css" scoped>
.container{
    background-color: rgb(40, 40, 40);
}
</style>