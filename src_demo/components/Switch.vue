<template>
  <div class="box">
    <h2>普通尺寸</h2>
    <etc-switch v-model="switchTest"></etc-switch>
    <div>当前状态为:{{switchTest}}</div>
    <etc-switch v-model="switchTest1"></etc-switch>
    <div>当前状态为:{{switchTest1}}</div>
    <etc-switch v-model="switchTest2" disabled></etc-switch>
    <div>当前状态为:{{switchTest2}}--不可点击状态</div>
    <h2>小尺寸</h2>
    <etc-switch v-model="switchTest" size="sm"></etc-switch>
    <div>当前状态为:{{switchTest}}</div>
    <etc-switch v-model="switchTest1" size="sm"></etc-switch>
    <div>当前状态为:{{switchTest1}}</div>
    <h2>大尺寸</h2>
    <etc-switch v-model="switchTest" size="lg"></etc-switch>
    <div>当前状态为:{{switchTest}}</div>
    <etc-switch v-model="switchTest1" size="lg"></etc-switch>
    <div>当前状态为:{{switchTest1}}</div>
    <h2>自定义颜色</h2>
    <etc-switch v-model="switchTest1" color="#26a2ff"></etc-switch>
    <div>当前状态为:{{switchTest1}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchTest: false,
        switchTest1: true,
        switchTest2: true,
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .box {
    padding: 1rem;
  }
</style>
