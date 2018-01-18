<template>
  <button :disabled="disabled" :class="classObject" :style="{background:bgcolor,color:color,border:borders}">
    <slot></slot>
  </button>
</template>
<script>
//type="text/babel"
import {
  isColor
} from '../../../plug-in/utils'
export default {
  name: 'etc-button',
  props: {
    disabled: Boolean,
    type: {
      validator(value) {
        return ['default', 'primary', 'danger', , 'disabled'].indexOf(value) > -1;
      },
      default: 'default'
    },
    size: {
      validator(value) {
        return ['small', 'medium'].indexOf(value) > -1;
      }
    },
    bgcolor: {
      validator(value) {
        if (!value) return true;
        return isColor(value);
      }
    },
    color: {
      validator(value) {
        if (!value) return true;
        return isColor(value);
      }
    },
    borderColor: {
      validator(value) {
        if (!value) return true;
        return isColor(value);
      }
    },
    shape: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject() {
      let a = 'etc-button'; //基础
      let b = 'btn-' + this.type;
      let c = this.size ? 'size-' + this.size : ''; //大小
      if (this.disabled) { //是否禁用
        b = 'btn-disable'
      }
      let e = this.shape != '' ? 'circle-shape' : '' //是否圆角
      return a + ' ' + b + ' ' + c + ' ' + e;
    },
    borders() {
      if (this.bgcolor && this.color) {
        return this.borderColor ? ("1px solid " + this.borderColor) : "none"
      }
    }
  },
  mounted() {}
}

</script>
<style lang="scss">
@import '../../../style/necessary.scss';
@import './button.scss';

</style>
