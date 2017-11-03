<template>
  <div>
    <etc-pwd-input @click.native="open" :nums="num"></etc-pwd-input>
    <etc-pwd-input @click.native="open" :nums="num1"></etc-pwd-input>
    <etc-pwd-keyboard ref="keyboard" @done="done" @callback="inputing" @repeatDone="done1" @repeatCallback="inputing1" repeat></etc-pwd-keyboard>
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

</style>
