<template>
  <div class="etc-keyboard">
    <div class="etc-keyboard-panle" :class="[is_show ? 'fade-in':'']">
      <div class="etc-keyboard-content">
        <div v-for="n in numsArr" class="etc-keyboard-item" :class="[(n==-1||n==-2)?'board-bg':'']">
          <span v-if="n==-1" @click.stop="clean" class="clean">清空</span>
          <span v-else-if="n==-2" @click.stop="deleted">
                      <svg class="icon-del" aria-hidden="true"><use xlink:href="#icon-keyboard-delete"></use></svg></span>
          <span v-else @click.stop="numberClick(n)">{{n}}</span>
        </div>
      </div>
    </div>
    <div class="etc-keyboard-mask" v-show="is_show" @click.stop="close"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'etc-pwd-keyboard',
    data() {
      return {
        is_show: false,
        input_value: "",
        input_value_repeat: "",
        numsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0, -2]
      }
    },
    props: {
      repeat: Boolean
    },
    mounted() {},
    methods: {
      deleted() {
        let value = this.input_value;
        let value_repeat = this.input_value_repeat;
        if (this.input_value != "" && this.input_value_repeat == "") {
          this.input_value = value.substr(0, value.length - 1);
        }
        if (this.input_value_repeat != "") {
          this.input_value_repeat = value_repeat.substr(0, value_repeat.length - 1);
        }
      },
      numberClick(n) {
        if (this.input_value.length >= 6) {
          if (this.repeat) {
            if (this.input_value_repeat.length >= 6) {
              return false;
            }
            this.input_value_repeat += n;
          }
          return false;
        }
        this.input_value += n;
      },
      clean() {
        this.input_value = "";
        this.input_value_repeat = "";
      },
      close() {
        this.is_show = false;
      },
      open() {
        this.is_show = true;
      },
    },
    watch: {
      is_show(currentValue) {
        this.is_show = currentValue;
      },
      input_value(val) {
        this.$emit("callback", val.length);
        if (val.length == 6) {
          this.$emit("done", val);
        }
      },
      input_value_repeat(val) {
        this.$emit("repeatCallback", val.length);
        if (val.length == 6) {
          this.$emit("repeatDone", val);
        }
      }
    },
    destroyed() {
      this.close();
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './pwd-keyboard.scss';
</style>

