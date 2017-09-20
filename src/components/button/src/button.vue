<template>
  <button :disabled="disabled" :class="classObject">
          <slot></slot>
        </button>
</template>

<script type="text/babel">
  export default {
    name: 'etc-button',
    props: {
      disabled: Boolean,
      type: {
        validator(value) {
          return ['default','primary', 'danger', , 'disabled'].indexOf(value) > -1;
        },
        default: 'default'
      },
      size: {
        validator(value) {
          return ['sm', 'md'].indexOf(value) > -1;
        }
      },
      // bgcolor: {
      //   validator(value) {
      //     if (!value) return true;
      //     return isColor(value);
      //   }
      // },
      // color: {
      //   validator(value) {
      //     if (!value) return true;
      //     return isColor(value);
      //   }
      // },
      // shape: {
      //   validator(value) {
      //     return ['square', 'circle'].indexOf(value) > -1;
      //   },
      //   default: 'square'
      // }
    },
    computed: {
      classObject() {
        let a = 'etc-button';
        let b = 'btn-' + this.type;
        let c = this.size ? 'size-' + this.size : '';
        if (this.disabled) {
          b = 'btn-disable'
        }
        return a + ' ' + b + ' ' + c;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './button.scss';
</style>
