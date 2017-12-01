<template>
  <ul class="menu-list">
    <li class="menu-title" v-for="item in menuList">
      {{item.name}}
      <ul class="menu-list-item">
        <li v-for="(chlid, key) in item.subList" :key="key">
          <router-link active-class="menu-active" :to="{path: key}">{{chlid}}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import menuConfig from '../config/menu-list.json'
export default {
  name: "menu-list",
  props: {

  },
  data() {
    return {
      menuList: menuConfig
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
  padding: 0;
  margin: 20px;
  width: 180px;
  border-right: 1px solid #efefef;
  .menu-title {
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    color: #999;
  }
  &-item {
    list-style: none;
    margin: 0;
    padding-left: 5px;
    font-size: 14px;
    li {
      cursor: pointer;

      a {
        display: block;
        height: 100%;
        padding: 10px;
        color: #333;
      }
      &:hover {
        background: #efefef;
      }
    }
  }
  .menu-active {
    color: #E64340;
    font-weight: 400;
  }
}

</style>
