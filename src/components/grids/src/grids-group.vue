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
        default: 4,
        type: [String, Number]
      },
      title: {
        default: "",
        type: String
      }
    },
    mounted() {},
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './grids.scss';
</style>
