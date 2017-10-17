<template>
  <div class="etc-picker">
    <div class="etc-picker-panle" :class="[is_show ? 'fade-in':'']">
      <div class="etc-picker-header">
        <div class="btn-left" @click.stop="cancel()">{{cancelTxt}}</div>
        <header class="title">{{pickerTitle}}</header>
        <div class="btn-right" @click.stop="ok()">{{comfirmTxt}}</div>
      </div>
      <div class="etc-picker-wrapper">
        <div class="etc-picker-scroller" v-for="n in types" ref="scroller">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li v-if="n==1" v-for="(item,index) in getFristItem" :data-code="item.code">{{item.name}}</li>
            <li v-if="n==2" v-for="(item,index) in getSecondItem" :data-code="item.code">{{item.name}}</li>
            <li v-if="n==3" v-for="(item,index) in getThirdItem" :data-code="item.code">{{item.name}}</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="picker-cover cover-top"></div>
        <div class="picker-cover cover-bottom"></div>
      </div>
    </div>
    <div class="etc-picker-mask" v-show="is_show" @click.stop="close"></div>
  </div>
</template>

<script type="text/babel">
  import {
    pageScroll
  } from "../../../plug-in/utils";
  import Scroll from "../../../plug-in/scroll";
  export default {
    name: 'etc-picker',
    data() {
      return {
        is_show: this.value,
        currentItem0: 0,
        currentItem1: 0,
        currentItem2: 0,
        scroll: [],
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      types: {
        type: Number,
        default: 1
      },
      values: {
        type: Array,
        default: []
      },
      cancelTxt: {
        type: String,
        default: "取消"
      },
      comfirmTxt: {
        type: String,
        default: "确定"
      },
      pickerTitle: {
        type: String,
        default: "请选择"
      }
    },
    mounted() {
      for (let i = 0; i < this.types; i++) {
        this.scroll[i] = new Scroll(this.$refs.scroller[i], {
          defaultPlace: 0,
          callback: (obj) => {
            if (i == 0) {
              this.currentItem0 = obj.index;
              setTimeout(() => {
                !!this.scroll[1] && this.scroll[1].refresh();
                !!this.scroll[2] && this.scroll[2].refresh();
              }, 100)
            }
            if (i == 1) {
              this.currentItem1 = obj.index;
              setTimeout(() => {
                !!this.scroll[2] && this.scroll[2].refresh();
              }, 100)
            }
          }
        });
        setTimeout(() => {
          this.scroll[i].refresh();
        }, 100)
      }
    },
    methods: {
      close() {
        this.$emit('input', false);
      },
      cancel() {
        this.close();
      },
      ok() {
        this.close();
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
    computed: {
      getFristItem() {
        return this.values;
      },
      getSecondItem() {
        let second = this.getFristItem[this.currentItem0].child;
        return typeof second === 'object' && second;
      },
      getThirdItem() {
        if (!!this.getSecondItem[this.currentItem1]) {
          let third = this.getSecondItem[this.currentItem1].child;
          return typeof third === 'object' && third;
        }
      }
    },
    destroyed() {
      this.close();
    }
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './picker.scss';
</style>
