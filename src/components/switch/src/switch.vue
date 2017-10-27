<template>
  <div class="etc-switch-box">
    <input type="checkbox" :class="classObject" class="etc-switch" :size="size" :disabled="disabled" v-model="checked" :style="{color: color}" />
  </div>
</template>

<script type="text/babel">
  import {
    isColor
  } from '../../../plug-in/utils'
  export default {
    name: 'etc-switch',
    data() {
      return {
        checked: this.value
      }
    },
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
      value: Boolean,
      size: {
        validator(value) {
          return ['sm', 'md', 'lg'].indexOf(value) > -1;
        },
        default: "md"
      },
      color: {
        validator(value) {
          if (!value) return true;
          return isColor(value);
        },
        default: '#28bc93'
      }
    },
    computed: {
      classObject() {
        return "etc-switch-size-" + this.size;
      }
    },
    watch: {
      checked(val) {
        this.$emit("input", val);
      },
      value(val) {
        this.checked = val;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './switch.scss';
</style>
