<template>
  <div>
    <div class="etc-grid-item-block">
      <div v-if="this.title!=''" class="etc-grids-group-title">{{this.title}}</div>
      <div class="etc-grid-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'etc-grids-group',
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
