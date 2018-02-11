<template>
  <div class="main-view">
    <menu-list class="overflow"></menu-list>
    <router-view :style="{'height':scrollHeight+'px'}" class="overflow flex" v-highlight></router-view>
    <device-frame></device-frame>
  </div>
</template>
<script>
import menuList from './menu-list';
import deviceFrame from './device-frame';
export default {
  props: {

  },
  data() {
    return {
      scrollHeight: 0
    }
  },
  components: {
    menuList,
    deviceFrame
  },
  methods: {

  },
  mounted() {
    this.scrollHeight = document.body.clientHeight;
  },
  computed: {}
}

</script>
<style lang="scss">
body{
   color: #495060;
}
.main-view {
  display: flex;
}

.overflow {
  overflow: auto
}

.flex {
  flex: 1
}

table {
  font-family: Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
  width: 100%;
  margin-bottom: 24px;
  td {
    border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
  }

}

</style>
