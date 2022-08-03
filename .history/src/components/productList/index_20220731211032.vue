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
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* display: grid; */
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
}
.container1 *{
    
    /* display: flex;
    flex-wrap: wrap; */
    justify-content: space-between;
    margin: 0 auto 0 0;
}
/* .container1 *{
   
} */
</style>