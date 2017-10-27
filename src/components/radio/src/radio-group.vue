<template>
  <div class="etc-radio-group">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import {
    isColor
  } from '../../../plug-in/utils'
  export default {
    name: 'etc-radio-group',
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
      value: {
        default: '',
        type: String,
      },
      type: {
        default: '',
        type: String
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
    mounted() {
      this.$nextTick(() => {
        this.upChildren();
      })
    },
    methods: {
      upChildren() {
        const value = this.value;
        if (this.childrens.length > 0) {
          this.childrens.forEach(element => {
            element.modelValue = value;
          });
        }
      },
      change(val) {
        this.$emit('input', val);
      }
    },
    computed: {
      childrens() {
        return this.$children.filter(item => item.$options.name === 'etc-radio');
      }
    },
    watch: {
      value() {
        this.upChildren();
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './radio.scss';
</style>
