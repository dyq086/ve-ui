<template>
  <lable class="etc-checkbox-box">
    <input type="checkbox" :class="[shape?'circled':'']" class="etc-checkbox" :shape="shape" :disabled="disabled" v-model="checked" :style="{color: color}" />
    <span class="etc-checkbox-label">{{text}}</span>
  </lable>
</template>

<script type="text/babel">
  import {
    isColor
  } from '../../../plug-in/utils'
  export default {
    name: 'etc-checkbox',
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
      shape: {
        default: false,
        type: Boolean
      },
      color: {
        validator(value) {
          if (!value) return true;
          return isColor(value);
        },
        default: '#28bc93'
      },
      text: {
        default: "",
        type: String
      }
    },
    computed: {},
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
  @import '../../../style/base.scss';
  @import './checkbox.scss';
</style>
