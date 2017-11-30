<template>
  <div class="alert-box">
    <etc-button type="default" @click.native="comfirmClick" class="mt">comfirm</etc-button>
    <etc-button type="default" @click.native="AlertClick" class="mt">alert</etc-button>
  </div>
</template>

<script>
  export default {
    methods: {
      comfirmClick() {
        this.$dialog.alert({
          type: "comfirm",
          title: '温馨提示',
          content: "确定执行此操作?",
          // okTxt: "确认",
          // cancelTxt: "取消",
          // okColor: "#123",
          // cancelColor: "#234",
          ok: () => {
            this.$dialog.toast("点了确定");
          },
          cancel: () => {
            this.$dialog.toast("点了取消");
          }
        })
      },
      AlertClick() {
        this.$dialog.alert("恭喜您成功使用者~")
      }
    }
  }
</script>

<style lang="scss">

  .alert-box {
    padding: 1rem;
    height: 100%;
    background: #fff;
  }
  .mt {
    margin-top: 1rem;
  }
</style>
