<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "../src/style/base.scss";
  #app {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .group-title {
    padding: .8rem 1rem .5rem 1rem;
    color: #999;
    font-size: .7rem;
  }
</style>
