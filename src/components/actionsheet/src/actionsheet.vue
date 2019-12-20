<template>
  <div class="ve-actionsheet">
    <div class="ve-actionsheet-panle" :class="[is_show ? 'fade-in':'']">
      <div class="ve-actionsheet-list">
        <div class="ve-actionsheet-item" v-for="(item,index) in actions" :data-index="index" @click.stop="selectItem">{{item.name}}</div>
        <div class="ve-actionsheet-item item-bottom" v-if="cancelTxt!==''" @click.stop="close">{{cancelTxt}}</div>
      </div>
    </div>
    <div class="ve-actionsheet-mask" v-show="is_show" @click.stop="close"></div>
  </div>
</template>

<script type="text/babel">
  import {
    pageScroll
  } from "../../../plug-in/utils";
  export default {
    name: 've-actionsheet',
    data() {
      return {
        is_show: this.value,
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      actions: {
        type: Array,
        default: []
      },
      cancelTxt: {
        type: String,
        default: ""
      }
    },
    mounted() {},
    methods: {
      selectItem(e) {
        let target = e.target;
        let obj = {};
        let index = target.getAttribute("data-index");
        obj.name = target.innerText;
        obj.index = index;
        this.actions[index].callback(obj);
        this.close();
      },
      close() {
        this.$emit('input', false);
      }
    },
    watch: {
      value(currentValue) {
        if (currentValue) {
          pageScroll.lock();
        } else {
          pageScroll.unlock();
        }
        this.is_show = currentValue;
      }
    },
    destroyed() {
      this.close();
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './actionsheet.scss';
</style>

