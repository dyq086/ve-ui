<template>
  <label class="etc-checkbox-box">
        <template v-if="this.$parent.group">
            <input type="checkbox" 
                  v-model="modelValue" 
                  :class="[groupShapge?'circled':'']" 
                  :value="checkedValue" class="etc-checkbox" 
                  :shape="groupShapge" 
                  :disabled="disabled" 
                  :style="{color: groupColor}"
                  @change="changeHandler" 
                  />
        </template>
        <template v-else>
          <input type="checkbox" 
                  class="etc-checkbox" 
                  v-model="checked" 
                  :class="[shape?'circled':'']" 
                  :shape="shape" 
                  :disabled="disabled" 
                  :style="{color: color}" 
                  />
        </template>
             <span class="etc-checkbox-label">{{text}}</span>
    </label>
</template>

<script type="text/babel">
  import {
    isColor
  } from '../../../plug-in/utils'
  export default {
    name: 'etc-checkbox',
    data() {
      return {
        checked: this.value,
        modelValue: []
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
      shape: {
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
    computed: {
      groupColor() {
        return this.$parent.color ? this.$parent.color : this.color;
      },
      groupShapge(){
         return this.$parent.shape ? this.$parent.shape : this.shape;
      },
      checkedValue(){
          return this.id ? this.id : this.text;
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
  @import './checkbox.scss';
</style>
