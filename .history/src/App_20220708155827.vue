<template>
<router-view></router-view>
 
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
 
}
*{
	padding: 0;
	margin: 0;
	border: 0;
}

/* body{
    font: 400 14px/20px "Roboto", sans-serif;
    color: #fff;
    background: #080a0a;
    min-width: 800px;
    height: 100%;

}

html{
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  height: 100%; */

/* } */

html,body{
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 24px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
   -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: sans-serif;
   font: 400 14px/20px "Roboto", sans-serif;
    color: #fff;
    background: #080a0a;
}

</style>
