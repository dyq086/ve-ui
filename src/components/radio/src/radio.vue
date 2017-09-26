<template>
  <label class="etc-radio-box">
              <template>
                  <input type="radio" 
                        v-model="modelValue" 
                        :class="classObject" 
                        :value="checkedValue" class="etc-radio" 
                        :disabled="disabled" 
                        :style="{color: this.$parent.color}"
                        @change="changeHandler" 
                        />
</template>
             <span class="etc-radio-label">{{text}}</span>
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
        return this.id ? this.id : this.text;
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
  @import '../../../style/base.scss';
  @import './radio.scss';
</style>
