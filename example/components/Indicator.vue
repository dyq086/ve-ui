<template>
  <div class="alert-box">
    <ve-button type="default" @click.native="showLoading" class="mt">indicator不带文字</ve-button>
    <ve-button type="default" @click.native="showLoading1" class="mt">indicator带文字</ve-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showLoading() {
        this.$dialog.indicator.open();
        setTimeout(() => {
          this.$dialog.indicator.close();
        }, 2000)
      },
      showLoading1() {
        this.$dialog.indicator.open("很努力的加载中");
        setTimeout(() => {
          this.$dialog.indicator.close();
        }, 2000)
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
