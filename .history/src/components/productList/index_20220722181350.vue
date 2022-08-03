<template>
    <div class="container1">
        <product-card
        v-for="product in productArr" 
        :key="product._id"
        :productData="product"
        />
    </div>
</template>

<script>
import productCard from "./productCard";
    export default {
        name:'productList',
        components: {
            productCard,
        },
        props: {
            productArr: {
                type: Array,
                default: ()=>[]
            },
        },
    }
</script>

<style lang="css" scoped>
.container1{
    /* width: 100%; */
    display: flex;
}
/* .container1 *{
   
} */
</style>