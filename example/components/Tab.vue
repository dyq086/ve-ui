<template>
  <ve-tab @tabclick="handlerClick">
    <ve-tab-panel label="选项一"></ve-tab-panel>
    <ve-tab-panel label="选项二"></ve-tab-panel>
    <ve-tab-panel label="选项三"></ve-tab-panel>
    <ve-tab-panel label="选项四"></ve-tab-panel>
  </ve-tab>
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
