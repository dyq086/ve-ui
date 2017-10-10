<template>
  <div class="etc-dialog-box">
    <div class="etc-indicator">
<!--        <div class="spinner">
        <div class="spinner-container container1">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container2">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container3">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
      </div> -->
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
