<template>
  <div class="group">
    <etc-button type="default" @click.native="showLoading" class="mt">indicator不带文字</etc-button>
    <etc-button type="default" @click.native="showLoading1" class="mt">indicator带文字</etc-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoading() {
      this.$dialog.indicator.open()
      // setTimeout(() => {
      //   this.$dialog.indicator.close();
      // }, 2000)

    },
    showLoading1() {
      this.$dialog.indicator.open("很努力的加载中")
      // setTimeout(() => {
      //   this.$dialog.indicator.close();
      // }, 2000)

    }
  }
}

</script>
<style lang="scss">
a {
  display: block;
}

.group {
  padding: 1rem;
}

.mt {
  margin-top: .5rem;
}

</style>
