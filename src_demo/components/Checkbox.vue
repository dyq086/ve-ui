<template>
  <div class="box">
    <etc-checkbox v-model="checkboxTest" text="选项一"></etc-checkbox>
    <div>当前状态为:{{checkboxTest}}</div>
    <br/>
    <etc-checkbox v-model="checkboxTest1"></etc-checkbox>
    <div>当前状态为:{{checkboxTest1}}</div>
    <br/>
    <etc-checkbox v-model="checkboxTest2" disabled></etc-checkbox>
    <div>当前状态为:{{checkboxTest2}}--不可点击状态</div>
    <br/>
    <h2>自定义颜色</h2>
    <etc-checkbox v-model="checkboxTest1" color="#26a2ff"></etc-checkbox>
    <div>当前状态为:{{checkboxTest1}}</div>
    <h5>-------------------------------------</h5>
    <etc-checkbox v-model="checkboxTest" text="选项一" shape></etc-checkbox>
    <div>当前状态为:{{checkboxTest}}</div>
    <br/>
    <etc-checkbox v-model="checkboxTest1" shape="circled"></etc-checkbox>
    <div>当前状态为:{{checkboxTest1}}</div>
    <br/>
    <etc-checkbox v-model="checkboxTest2" disabled shape="circled"></etc-checkbox>
    <div>当前状态为:{{checkboxTest2}}--不可点击状态</div>
    <br/>
    <etc-checkbox v-model="checkboxTest1" color="#26a2ff" shape="circled" text="自定义颜色"></etc-checkbox>
    <div>当前状态为:{{checkboxTest1}}</div>
    <br/>
    <h5>=========groupp【慌形】=========</h5>
    <etc-checkbox-group v-model="checkboxGroupTest" color="#26a2ff">
      <etc-checkbox id="1" text="选项一"></etc-checkbox>
      <br/>
      <etc-checkbox id="2" text="选项二"></etc-checkbox>
      <br/>
      <etc-checkbox id="3" text="选项三"></etc-checkbox>
    </etc-checkbox-group>
    <div>当前状态为:{{checkboxGroupTest}}</div>
    <br/>
    <h5>=========group【圆形】===========</h5>
    <etc-checkbox-group v-model="checkboxGroupTestCel" shape="circled">
      <etc-checkbox text="选项一"></etc-checkbox>
      <br/>
      <etc-checkbox text="选项二"></etc-checkbox>
      <br/>
      <etc-checkbox text="选项三"></etc-checkbox>
    </etc-checkbox-group>
    <div>当前状态为:{{checkboxGroupTestCel}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkboxTest: false,
        checkboxTest1: true,
        checkboxTest2: true,
        checkboxGroupTest: [],
        checkboxGroupTestCel: []
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .box {
    padding: 1rem;
    background: #ffffff;
  }
</style>
