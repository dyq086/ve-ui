<template>
  <div class="etc-item-block">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import iconfont from "../../../icon/iconfont"
  export default {
    name: 'etc-cell-block',
    props: {},
    computed: {}
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './cell.scss';
</style>
