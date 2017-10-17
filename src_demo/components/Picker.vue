<template>
  <div>
    <div class="picker">
      <etc-button type="default" @click.native="open" class="mt">打开</etc-button>
    </div>
    <etc-picker v-model="show"  ></etc-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      open() {
        this.show = !this.show;
      }
    }
  }
</script>

<style lang="scss">
  .picker {
    padding: 1rem;
  }
</style>
