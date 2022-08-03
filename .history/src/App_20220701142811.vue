<template>
  <main-masterpage>
    <template #header>
      <router-link to="/">Home</router-link>
      <router-link to="/products/pizza">Products</router-link>
      <router-link to="/product">Add product</router-link>
    </template>

    <router-view></router-view>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage'
export default {
  name: 'App',
  components: {
    MainMasterpage,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
