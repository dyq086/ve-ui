<template>
  <label class="etc-radio-box">
    <template>
        <input type="radio" 
        v-model="modelValue" 
        :class="classObject" 
        :value="checkedValue" class="etc-radio" 
        :disabled="disabled" 
        :style="{color: $parent.color}"
        @change="changeHandler" 
        />
</template>
    <div class="etc-radio-label">
      <slot>{{$slots.default}}</slot> 
    </div>
    </label>
</template>

<script type="text/babel">
  import {
    isColor
  } from '../../../plug-in/utils'
  export default {
    name: 'etc-radio',
    data() {
      return {
        checked: this.value,
        modelValue: ''
      }
    },
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
      value: {
        default: false,
        type: Boolean
      },
      id: {
        type: [Boolean, String, Number]
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
    computed: {
      checkedValue() {
        if (this.$slots.default) {
          return this.id ? this.id : this.$slots.default[0].text;
        }
      },
      classObject() {
        return this.$parent.type === 'checkbox' ? 'type-checkbox' : 'circled';
      }
    },
    methods: {
      changeHandler() {
        if (this.disabled) return;
        setTimeout(() => {
          this.$parent.change(this.modelValue);
        }, 0);
      }
    },
    watch: {
      checked(val) {
        this.$emit("input", val);
      },
      value(val) {
        this.checked = val;
      },
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './radio.scss';
</style>
