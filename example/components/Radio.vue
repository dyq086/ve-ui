<template>
  <div>
    <div class="group-title">【取值为标签值】</div>
    <div class="radio-group-box">
      <ve-radio-group v-model="checkboxGroupTest0">
        <ve-radio>香蕉</ve-radio>
        <ve-radio>苹果</ve-radio>
        <ve-radio>雪梨</ve-radio>
        <ve-radio>榴莲</ve-radio>
      </ve-radio-group>
      <div class="radio-state">{{checkboxGroupTest0}}</div>
    </div>
    <div class="group-title">【取值为id值,默认id值】</div>
    <div class="radio-group-box">
      <ve-radio-group v-model="checkboxGroupTest1">
        <ve-radio id="1">选项一</ve-radio>
        <ve-radio id="2">选项二</ve-radio>
        <ve-radio id="3">选项三</ve-radio>
        <ve-radio id="4">选项四</ve-radio>
      </ve-radio-group>
      <div class="radio-state">{{checkboxGroupTest1}}</div>
    </div>
    <div class="group-title">【打勾勾样式】</div>
    <div class="radio-group-box">
      <ve-radio-group v-model="checkboxGroupTest3" type="checkbox">
        <ve-radio>选项一</ve-radio>
        <ve-radio>选项二</ve-radio>
        <ve-radio>选项三</ve-radio>
        <ve-radio>选项四</ve-radio>
      </ve-radio-group>
      <div class="radio-state">{{checkboxGroupTest3}}</div>
    </div>
    <div class="group-title">【自定义颜色】</div>
    <div class="radio-group-box">
      <ve-radio-group v-model="checkboxGroupTest2" color="#26a2ff">
        <ve-radio>选项一</ve-radio>
        <ve-radio>选项二</ve-radio>
        <ve-radio>选项三</ve-radio>
        <ve-radio>选项四</ve-radio>
      </ve-radio-group>
      <div class="radio-state">{{checkboxGroupTest2}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkboxGroupTest0: '香蕉',
        checkboxGroupTest1: '2',
        checkboxGroupTest2: '选项一',
        checkboxGroupTest3: '选项一',
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .radio-group-box {
    background: #ffffff;
    padding: .5rem 0rem;
    .ve-radio-group {
      display: flex;
      justify-content: space-around;
    }
    .radio-state {
      padding: 1rem 1rem 0rem 1rem;
      font-size: .7rem;
      color: #000;
    }
  }
</style>
