<template>
  <div class="group">
    <a @click="success">success</a>
    <br>
    <a @click="error">error</a>
    <br>
    <a @click="info">info</a>
    <br>
    <a @click="warning">warning</a>
    <br>
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
</style>
