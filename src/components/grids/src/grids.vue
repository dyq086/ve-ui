<template>
  <div class="" :class="classObject">
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
    computed: {
      classObject(){
        let a='etc-grid-'+this.$parent.row;
        let b;
        if(this.$parent.border){
          b='etc-grid-border-'+this.$parent.row;
        }
        return a+" "+b
      }
    },
    methods: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './grids.scss';
</style>
