<template>
  <div class="main-view">
    <menu-list  class="overflow"></menu-list>
    <router-view :style="{'height':scrollHeight+'px'}" class="overflow flex"></router-view>
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
  computed: {
  }
}

</script>
<style lang="scss">
.main-view {
  display: flex;
}
.overflow{
  overflow: auto
}
.flex{
  flex:1
}
</style>
