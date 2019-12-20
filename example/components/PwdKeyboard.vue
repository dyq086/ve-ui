<template>
  <div>
    <div class="demo-pwd-box">
      <div class="demo-title">设置6位数字支付密码</div>
      <div class="demo-title-child">输入新密码</div>
      <ve-pwd-input @click.native="open" :nums="num"></ve-pwd-input>
      <div class="demo-title-child">请再输入一次</div>
      <ve-pwd-input @click.native="open" :nums="num1"></ve-pwd-input>
    </div>
    <ve-pwd-keyboard ref="keyboard" @done="done" @callback="inputing" @repeatDone="done1" @repeatCallback="inputing1" repeat></ve-pwd-keyboard>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 0,
        num1: 0
      }
    },
    mounted() {
      this.open();
    },
    methods: {
      open() {
        this.$refs.keyboard.open();
      },
      done(num) {
        console.log(num)
      },
      inputing(val) {
        this.num = val;
        console.log(val)
      },
      done1(num) {
        console.log(num)
      },
      inputing1(val) {
        console.log(val)
        this.num1 = val;
      }
    }
  }
</script>

<style lang="scss">
  .demo-pwd-box {
    padding: 2rem 1.75rem;
  }
  .demo-title {
    text-align: center;
    color: #333333;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .demo-title-child {
    color: #999999;
    font-size: 0.7rem;
    margin: 1rem 0 .5rem 0;
  }
</style>
