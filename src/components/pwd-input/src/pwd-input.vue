<template>
  <div class="etc-pwd-input">
    <div class="pwd-box-item" v-for="n in 6">
      <i class="dot" v-show="nums >= n"></i>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'etc-pwd-input',
    data() {
      return {}
    },
    props: {
      nums: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './pwd-input.scss';
</style>

