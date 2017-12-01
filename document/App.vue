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
  font-family: "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif; // -webkit-font-smoothing: antialiased;
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
  color: #4078c0
}

table {
  width: 100%;
  color: #333;
  box-sizing: border-box;
  table-layout: fixed;
  th,
  td {
    padding: 6px 13px;
    border: 1px solid rgb(223, 226, 229);
    vertical-align: middle;
    text-align: left;
    word-wrap: break-word;
    word-break: break-word
  }

  th {
    font-weight: 600;
    background-color: #efefef;
  }
}

</style>
