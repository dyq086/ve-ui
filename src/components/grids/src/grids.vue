<template>
  <div class="etc-grid-4">
    <div class="etc-grid-icon">
      <slot name="icon"></slot>
    </div>
    <div class="etc-grid-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'etc-grids-item',
    data() {
      return {}
    },
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './grids.scss';
</style>
