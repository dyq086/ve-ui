<template>
  <div>
    <div class="ve-grid-item-block">
      <div v-if="this.title!=''" class="ve-grids-group-title">{{this.title}}</div>
      <div class="ve-grid-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 've-grids-group',
    props: {
      row: {
        validator(value) {
          return [2, 3, 4, 5].indexOf(value) > -1;
        },
        default: 4
      },
      title: {
        default: "",
        type: String
      },
      border: {
        default: false,
        type: Boolean
      }
    },
    mounted() {},
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './grids.scss';
</style>
