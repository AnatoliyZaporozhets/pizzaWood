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
  width: 1100px;
}
</style>
