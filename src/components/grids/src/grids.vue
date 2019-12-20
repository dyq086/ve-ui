<template>
  <div class="" :class="classObject">
    <div class="ve-grid-icon">
      <slot name="icon"></slot>
    </div>
    <div class="ve-grid-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 've-grids-item',
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
        let a='ve-grid-'+this.$parent.row;
        let b;
        if(this.$parent.border){
          b='ve-grid-border-'+this.$parent.row;
        }
        return a+" "+b
      }
    },
    methods: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './grids.scss';
</style>
