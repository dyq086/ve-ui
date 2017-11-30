<template>
  <div class="toast-box">
     <etc-button  bgcolor="#44b549" color="#fff" @click.native="success" class="mt">成功</etc-button>
    <etc-button type="danger" @click.native="error" class="mt">失败</etc-button>
    <etc-button type="primary" @click.native="info" class="mt">提示</etc-button>
    <etc-button type="default" @click.native="warning" class="mt">警告</etc-button>
  </div>
</template>

<script>
  export default {
    methods: {
      success() {
        this.$dialog.toast({
          type: "success",
          mes: '提交成功',
          timeout: 1000,
        }).then(() => {
          this.$dialog.toast({
            mes: 'Duang',
            timeout: 2000,
          })
        })
      },
      error() {
        this.$dialog.toast({
          type: "error",
          mes: '提交失败',
          timeout: 2000,
        })
      },
      info() {
        this.$dialog.toast({
          type: "info",
          mes: 'info',
          timeout: 2000,
        })
      },
      warning() {
        this.$dialog.toast({
          type: "warning",
          mes: 'warning',
          timeout: 2000,
        })
      }
    }
  }
</script>

<style lang="scss">

  .toast-box{
    padding: 1rem 2rem;
    background: #fff;
    height: 100%;
  }
  .mt{
    margin-top: 1rem;
  }
</style>
