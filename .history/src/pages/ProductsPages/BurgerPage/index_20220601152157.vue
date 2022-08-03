<template>
    <div class="container">
        <main-master-page>
        <template  v-slot:main>
                <div>
                    <div>Burger</div>
                    <product-list
                    :productArr='getBurgerList'
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
        name:'BurgerPage',
        components: {
            productList,
            MainMasterPage,
        },
        computed: {
            ...mapGetters('burger',['getBurgerList']),
        },

    }
</script>

<style lang="css" scoped>
.container{
    background-color: rgb(40, 40, 40);
}
</style>