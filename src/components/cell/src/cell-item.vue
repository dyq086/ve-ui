<template>
  <div class="item">
    <div class="item-title">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </div>
    <div class="item-inner">
      <slot name="inner"></slot>
      <svg class="icon" aria-hidden="true" v-if="arrow"><use xlink:href="#icon-arrow-right"></use></svg>
    </div>
  </div>
</template>

<script type="text/babel">
  import iconfont from "../../../icon/iconfont"
  export default {
    name: 'etc-cell-item',
    props: {
      arrow: Boolean,
    },
    computed: {}
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './cell.scss';
</style>
