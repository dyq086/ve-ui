<template>
  <div class="etc-toast showAlert">
    <div class="icon success animate"> <span class="line tip animateSuccessTip"></span> <span class="line long animateSuccessLong"></span>
      <div class="placeholder"></div>
      <div class="fix"></div>
    </div>
    <div class="title">支付成功</div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'etc-toast',
    props: {
      // disabled: Boolean,
      // type: {
      //   validator(value) {
      //     return ['default', 'primary', 'danger', , 'disabled'].indexOf(value) > -1;
      //   },
      //   default: 'default'
      // },
      // size: {
      //   validator(value) {
      //     return ['sm', 'md'].indexOf(value) > -1;
      //   }
      // },
    },
    computed: {
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './toast.scss';
</style>
