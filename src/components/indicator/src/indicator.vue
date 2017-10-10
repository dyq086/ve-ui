<template>
  <div class="etc-dialog-box">
    <div class="etc-indicator">
      <div class="circle circle-rotate"></div>
      <div class="title" v-if="mes!==''">{{mes}}</div>
    </div>
    <div class="etc-indicator-mask"></div>
  </div>
</template>
<script type="text/babel">
  export default { props: { mes: String }}
</script>
<style lang="scss">
@import '../../../style/base.scss';
@import './indicator.scss';

</style>
