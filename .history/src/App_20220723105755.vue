<template>
<div class="container">
  <router-view></router-view>
</div>

 
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
@use '@/assets/style/global';
.container{
  padding: 0 20px;
}
</style>
