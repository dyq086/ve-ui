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
html,
body {
  height: 100%;
}
body {
   font-family:"Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
  // -webkit-font-smoothing: antialiased;
  color: #333;
}


a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
}

a,
label,
button,
input,
select {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}



</style>
