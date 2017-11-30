<template>
  <div class="main-view">
    <menu-list></menu-list>
    <router-view></router-view>
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

    }
  },
  components: {
    menuList,
    deviceFrame
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
.main-view {
  display: flex;
}

</style>
