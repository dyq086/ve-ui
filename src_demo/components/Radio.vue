<template>
  <div class="box">
    <h5>值和标签不同</h5>
    <br/>
    <etc-radio-group v-model="checkboxGroupTest0">
      <etc-radio text="选项一"></etc-radio>
      <br/>
      <etc-radio text="选项二"></etc-radio>
      <br/>
      <etc-radio text="选项三"></etc-radio>
    </etc-radio-group>
    <div>当前状态为:{{checkboxGroupTest0}}</div>
    <br/>
    <h5>值和标签一致</h5>
    <br/>
    <etc-radio-group v-model="checkboxGroupTest1">
      <etc-radio id="1" text="选项一"></etc-radio>
      <br/>
      <etc-radio id="2" text="选项二"></etc-radio>
      <br/>
      <etc-radio id="3" text="选项三"></etc-radio>
    </etc-radio-group>
    <div>当前状态为:{{checkboxGroupTest1}}</div>
    <br/>
    <h5>我就是我，不一样的颜色</h5>
    <br/>
    <etc-radio-group v-model="checkboxGroupTest2" color="#26a2ff">
      <etc-radio text="选项一"></etc-radio>
      <br/>
      <etc-radio text="选项二"></etc-radio>
      <br/>
      <etc-radio text="选项三"></etc-radio>
    </etc-radio-group>
    <div>当前状态为:{{checkboxGroupTest2}}</div>
    <br/>
    <h5>单选打勾勾</h5>
    <br/>
    <etc-radio-group v-model="checkboxGroupTest3" type="checkbox">
      <etc-radio text="选项一"></etc-radio>
      <br/>
      <etc-radio text="选项二"></etc-radio>
      <br/>
      <etc-radio text="选项三"></etc-radio>
    </etc-radio-group>
    <div>当前状态为:{{checkboxGroupTest3}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkboxGroupTest0: '选项一',
        checkboxGroupTest1: '1',
        checkboxGroupTest2: '选项一',
        checkboxGroupTest3: '选项一',
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .box {
    padding: 1rem;
    background: #fff;
  }
</style>
