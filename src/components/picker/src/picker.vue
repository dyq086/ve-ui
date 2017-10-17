<template>
  <div class="etc-picker">
    <div class="etc-picker-panle" :class="[is_show ? 'fade-in':'']">
      <div class="etc-picker-header">
        <div class="btn-left" @click.stop="cancel()">取消</div>
        <header class="title">请选择省市区</header>
        <div class="btn-right" @click.stop="ok()">确定</div>
      </div>
      <div class="etc-picker-wrapper">
        <div class="etc-picker-scroller" v-for="n in types" ref="scroller">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li v-if="n==1" v-for="(item,index) in get_frist">{{item.Name}}</li>
            <li v-if="n==2" v-for="(item,index) in get_second">{{item.Name}}</li>
            <li v-if="n==3" v-for="(item,index) in get_third">{{item.Name}}</li>
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
  import cityData from "../../../plug-in/city";
  export default {
    name: 'etc-picker',
    data() {
      return {
        is_show: this.value,
        cityData: [],
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
        default: 3
      }
    },
    mounted() {
      this.cityData = cityData;
      //闭包
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
            if (i == 2) {
              this.currentItem2 = obj.index;
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
      get_frist() {
        return cityData;
      },
      get_second() {
        let second = this.get_frist[this.currentItem0].level;
        return typeof second === 'object' && second;
      },
      get_third() {
        if (!!this.get_second[this.currentItem1]) {
          let third = this.get_second[this.currentItem1].level;
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
