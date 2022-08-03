<template>
    <div class="container">
        <main-master-page>
        <template  v-slot:main>
                <div>
                    <div>Drinks</div>
                    <product-list
                    :productArr='getDrinksList'
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
        name:'DrinksPage',
        components: {
            productList,
            MainMasterPage,
        },
        computed: {
            ...mapGetters('drinks',['getDrinksList']),
        },

    }
</script>

<style lang="css" scoped>
.container{
    background-color: rgb(40, 40, 40);
}
</style>