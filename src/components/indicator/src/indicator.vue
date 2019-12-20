<template>
  <div class="ve-dialog-box">
    <div class="ve-indicator">
      <div class="circle circle-rotate"></div>
      <div class="title" v-if="mes!==''">{{mes}}</div>
    </div>
    <div class="ve-indicator-mask"></div>
  </div>
</template>
<script type="text/babel">
  export default { props: { mes: String }}
</script>
<style lang="scss">
@import '../../../style/necessary.scss';
@import './indicator.scss';

</style>
