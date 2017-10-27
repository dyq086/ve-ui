<template>
  <div class="etc-picker">
    <div class="etc-picker-panle" :class="[is_show ? 'fade-in':'']">
      <div class="etc-picker-header">
        <div class="btn-left" @click.stop="cancel()">{{cancelTxt}}</div>
        <header class="title">{{pickerTitle}}</header>
        <div class="btn-right" @click.stop="ok()">{{comfirmTxt}}</div>
      </div>
      <div class="etc-picker-wrapper">
        <div class="etc-picker-scroller" v-for="n in types" ref="scroller" :style="{width:liWidth}">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li v-if="n==1" v-for="(item,index) in getFristItem" :class="[currentItem0==index? 'selected': '']" :data-code="item.code">{{item.name}}</li>
            <li v-if="n==2" v-for="(item,index) in getSecondItem" :class="[currentItem1==index? 'selected': '']" :data-code="item.code">{{item.name}}</li>
            <li v-if="n==3" v-for="(item,index) in getThirdItem" :class="[currentItem2==index? 'selected': '']" :data-code="item.code">{{item.name}}</li>
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
        element_scroll: [],
        positionIndex: []
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      types: {
        type: Number,
        validator(value) {
          return [1, 2, 3].indexOf(value) > -1;
        },
        default: 1
      },
      datas: {
        type: Array,
        default: []
      },
      defaultValue: {
        type: String,
        default: ""
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
      this.initData();
    },
    methods: {
      initScroll() {
        //初始化默认值
        this.initData()
        //绑定滚动列表
        for (let i = 0; i < this.types; i++) {
          this.bindScroll(i);
        }
      },
      initData() {
        //设置初始值
        let target = this.defaultValue.split(" ");
        if (target.length > 0) {
          //computed脏数据检查
          this.positionIndex[0] = this.currentItem0 = this.deepArray(this.getFristItem, target[0]);
          this.positionIndex[1] = this.currentItem1 = this.deepArray(this.getSecondItem, target[1]);
          this.positionIndex[2] = this.currentItem2 = this.deepArray(this.getThirdItem, target[2]);
        }
      },
      bindScroll(i) {
        this.element_scroll[i] = this.$refs.scroller[i];
        let childNode = this.element_scroll[i].children[0];
        let itemHeight = childNode.children[0].clientHeight; //子元素高度
        this.scroll[i] = new Scroll(this.element_scroll[i], {
          //步长（每次滚动固定距离）
          step: itemHeight,
          // 列表默认位置(默认为0)
          defaultPlace: itemHeight * this.positionIndex[i],
          // 滚动结束回调函数
          callback: (obj) => {
            if (i == 0) {
              this.currentItem0 = obj.index;
              this.currentItem1 = 0;
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
      },
      deepArray(data, target) {
        let num = 0;
        if (typeof data === 'object') {
          data.forEach(function(element, index) {
            if (target === element.name) {
              num = index;
            }
          });
        }
        return num
      },
      close() {
        this.is_show = false;
      },
      open() {
        this.is_show = true;
      },
      cancel() {
        this.close();
      },
      ok() {
        let callbackValues = "",
          currentObj = {};
        let temp = [];
        for (let i = 0; i < this.types; i++) {
          let elementSelected = this.element_scroll[i].querySelector(".selected");
          if (elementSelected) {
            callbackValues += elementSelected.innerText + " ";
            temp.push(elementSelected)
          }
        }
        currentObj.selectNodes = temp;
        currentObj.value = callbackValues;
        this.$emit('callback', currentObj);
        this.close();
      }
    },
    watch: {
      is_show(currentValue) {
        if (currentValue) {
          this.initScroll();
          pageScroll.lock();
        } else {
          pageScroll.unlock();
        }
        this.is_show = currentValue;
      }
    },
    computed: {
      getFristItem() {
        return this.datas;
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
      },
      liWidth() {
        return (100 / this.types).toFixed(3) + "%"
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

