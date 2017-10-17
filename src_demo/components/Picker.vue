<template>
  <div>
    <div class="picker">
      <etc-button type="default" @click.native="open" class="mt">打开</etc-button>
    </div>
    <etc-picker v-model="show" :values="city_data" :types="3" pickerTitle="请选择省市区" ></etc-picker>
  </div>
</template>

<script>
  import regions from "../data/city";
  export default {
    data() {
      return {
        show: false,
        city_data: regions,
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
