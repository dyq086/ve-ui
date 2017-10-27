<template>
  <div class="etc-item-group">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import iconfont from "../../../icon/iconfont"
  export default {
    name: 'etc-cell-group',
    props: {},
    computed: {}
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './cell.scss';
</style>
