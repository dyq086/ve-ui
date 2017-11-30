<template>
  <etc-tab @tabclick="handlerClick">
    <etc-tab-panel label="选项一"></etc-tab-panel>
    <etc-tab-panel label="选项二"></etc-tab-panel>
    <etc-tab-panel label="选项三"></etc-tab-panel>
    <etc-tab-panel label="选项四"></etc-tab-panel>
  </etc-tab>
</template>

<script>
  export default {
    methods: {
      handlerClick(lable,index) {
       console.log(lable,index)
      }
    }
  }
</script>

<style lang="scss">

</style>
