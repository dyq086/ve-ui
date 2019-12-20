<template>
  <div class="ve-dialog-box">
    <div class="ve-alert showAlert">
      <div class="ve-alert-title">{{title}}</div>
      <div class="ve-alert-content">{{content}}</div>
      <div class="alert-button">
        <div class="alert-button-left" :style="{color: cancelColor}" @click.stop="closeAlert(false)" v-if="type!==''">{{cancelTxt}}</div>
        <div class="alert-button-right" :style="{color: okColor}" @click.stop="closeAlert(true)">{{okTxt}}</div>
      </div>
    </div>
    <div class="ve-alert-mask" @click.stop="closeAlert()"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      type: String,
      title: String,
      content: String,
      okTxt: String,
      cancelTxt: String,
      okColor: String,
      cancelColor: String,
      ok: Function,
      cancel: Function
    },
    computed: {}
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './alert.scss';
</style>
