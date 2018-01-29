<template>
  <svg class="icon" :style="styles" aria-hidden="true">
    <use :xlink:href="classes"></use>
  </svg>
</template>
<script>
import { isColor } from '../../../plug-in/utils'
  import iconfont from "../../../icon/iconfont"
export default {
  name: 'etc-icon',
  props: {
    name: String,
    color: {
      validator(value) {
        if (!value) return true;
        return isColor(value);
      },
      default: '#666'
    },
    size: {
      validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '1rem'
    }
  },
  computed: {
    classes() {
      return '#icon-' + this.name;
    },
    styles() {
      const style = {};

      if (!!this.size) {
        style.fontSize = this.size;
      }

      if (!!this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
}

</script>
<style lang="scss">
@import './icon.scss';

</style>
