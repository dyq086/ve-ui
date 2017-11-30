<template>
  <ul class="menu-list">
    <li class="menu-title">开始</li>
    <ul class="menu-list-item">
      <li><a>介绍</a></li>
      <li><a>安装</a></li>
      <li><a>快速上手</a></li>
    </ul>
    <li class="menu-title">组件</li>
    <ul class="menu-list-item">
      <li><a>Button</a></li>
      <li><a>Cell</a></li>
      <li><a>Switch</a></li>
    </ul>
  </ul>
</template>
<script>
export default {
  name: "menu-list",
  props: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
  computed: {

  }
}

</script>
<style lang="scss">
.menu-list {
  list-style: none;
  margin: 0;
  margin: 30px;
  width: 200px;
  border-right: 1px solid #efefef;
  .menu-title {
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    color: #000;
  }
  &-item {
    list-style: none;
    margin: 0;
    padding-left: 5px;
    font-size: 14px;
    color: #666;
    li {
      cursor: pointer;
      padding: 10px;
      a {
        display: block;
        height: 100%;
      }
      &:hover {
        background: #efefef;
      }
    }
  }
}

</style>
