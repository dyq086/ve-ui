<template>
  <div id="app">
    <img src="./assets/logo.png" width="110" style="margin:0 auto;margin-top:1rem">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style>
 #app{
  margin:0 auto;
  width: 100%;
 }
</style>
