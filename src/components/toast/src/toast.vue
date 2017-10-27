<template>
  <div class="etc-dialog-box">
    <div class="etc-toast showAlert">
      <div class="icon success animate" v-if="type=='success'">
        <span class="line tip animateSuccessTip"></span>
        <span class="line long animateSuccessLong"></span>
        <div class="placeholder"></div>
        <div class="fix"></div>
      </div>
      <div v-if="type!==''&&type!=='success'" class="icon animate" :class="this.type">
        <span class="icon-text">{{icon}}</span>
      </div>
      <div class="title">{{mes}}</div>
    </div>
    <div class="etc-toast-mask"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      type: String,
      mes: String,
      timeout: Number
    },
    computed: {
      icon() {
        let icon;
        switch (this.type) {
          case 'info':
            icon = "i";
            break;
          case 'error':
            icon = "x";
            break;
          case 'warning':
            icon = "!";
            break;
          default:
            break;
        }
        return icon;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './toast.scss';
</style>
