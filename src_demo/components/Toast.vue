<template>
  <div class="group">
    <etc-button type="default" @click.native="success" class="mt">success</etc-button>
    <etc-button type="danger" @click.native="error" class="mt">error</etc-button>
    <etc-button type="primary" @click.native="info" class="mt">info</etc-button>
    <etc-button type="danger" @click.native="warning" class="mt">warning</etc-button>
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
  a {
    display: block;
  }
  .group{
    padding: 1rem;
  }
  .mt{
    margin-top: .5rem;
  }
</style>
