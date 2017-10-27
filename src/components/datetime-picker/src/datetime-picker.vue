<template>
  <div class="etc-picker">
    <div class="etc-picker-panle" :class="[is_show ? 'fade-in':'']">
      <div class="etc-picker-header">
        <div class="btn-left" @click.stop="cancel()">{{cancelTxt}}</div>
        <header class="title">{{pickerTitle}}</header>
        <div class="btn-right" @click.stop="ok()">{{comfirmTxt}}</div>
      </div>
      <div class="etc-picker-wrapper">
        <div class="etc-picker-scroller" v-for="n in rows" ref="scroller" :style="{width:liWidth}">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li v-if="n=='Ykey'" v-for="(item,index) in getYkeyList" :class="[Ykey==index? 'selected': '']"><i>{{item}}</i><span>年</span></li>
            <li v-if="n=='Mkey'" v-for="(item,index) in getMkeyList" :class="[Mkey==index? 'selected': '']"><i>{{item}}</i><span>月</span></li>
            <li v-if="n=='Dkey'" v-for="(item,index) in getDkeyList" :class="[Dkey==index? 'selected': '']"><i>{{item}}</i><span>日</span></li>
            <li v-if="n=='Hkey'" v-for="(item,index) in getHkeyList" :class="[Hkey==index? 'selected': '']"><i>{{item}}</i><span>时</span></li>
            <li v-if="n=='mkey'" v-for="(item,index) in getmkeyList" :class="[mkey==index? 'selected': '']"><i>{{item}}</i><span>分</span></li>
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
  //总月份数
  const MONTHS = 12,
    HOURS = 23,
    MIN = 59;
  export default {
    name: 'etc-datetime-picker',
    data() {
      return {
        is_show: false,
        Ykey: 0,
        Mkey: 0,
        Dkey: 0,
        Hkey: 0,
        mkey: 0,
        scroll: [],
        element_scroll: [],
        positionIndex: [],
        maxYears: 2050,
        minYears: 2000,
        rows: ["YY", "MM", "DD"]
      }
    },
    props: {
      format: {
        type: String,
        validator(value) {
          return ["yy-mm-dd hh:mm", "yy-mm-dd", "hh:mm"].indexOf(value) > -1;
        },
        default: "yy-mm-dd"
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
      switch (this.format) {
        case "yy-mm-dd hh:mm":
          this.rows = ["Ykey", "Mkey", "Dkey", "Hkey", "mkey"];
          break;
        case "yy-mm-dd":
          this.rows = ["Ykey", "Mkey", "Dkey"];
          break;
        case "hh:mm":
          this.rows = ["Hkey", "mkey"];
          break;
        default:
          break;
      }
      this.initData();
    },
    methods: {
      initScroll() {
        //初始化默认值
        this.initData();
        //绑定滚动列表
        this.rows.forEach((element, key) => {
          this.bindScroll(key);
        });
      },
      initData() {
        //设置初始值
        let target = this.defaultValue.split(/-|\/|\.|\s|:/);
        if (target.length > 0) {
          this.rows.forEach((element, index) => {
            let rowsIndex = this[`get${element}List`].indexOf(target[index]);
            if (rowsIndex < 0) {
              rowsIndex = 0;
            }
            this.positionIndex[index] = this[element] = rowsIndex;
          });
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
            let rowsKey = this.rows[i];
            this[rowsKey] = obj.index;
            this.refreshDate();
          }
        });
      },
      refreshDate() {
        setTimeout(() => {
          !!this.scroll[2] && this.scroll[2].refreshTime();
        }, 100)
      },
      cancel() {
        this.close();
      },
      ok() {
        let callbackValues = "",
          currentObj = {};
        let temp = [];
        let row = this.rows;
        this.rows.forEach((element, key) => {
          let selectNode = this.element_scroll[key].querySelector(".selected"),
            ulNode = this.element_scroll[key].children[0],
            liNode = ulNode.children,
            len = liNode.length,
            childrenNode = selectNode ? selectNode.children[0] : liNode[len - 4].children[0];
          if (childrenNode) {
            let text = childrenNode.innerText;
            if (element == "Dkey") {
              callbackValues += text + " ";
            } else if (element == "Hkey") {
              callbackValues += text + ":";
            } else {
              callbackValues += text + "-";
            }
            temp.push(childrenNode)
          }
        })
        currentObj.selectNodes = temp;
        currentObj.value = callbackValues.substring(0, callbackValues.length - 1);
        this.$emit('callback', currentObj);
        this.close();
      },
      /** 
       * 获取最大数数组列表
       * @min 最小值。
       * @max 最大值
       */
      getDateArray(min, max) {
        let arrays = [];
        for (let i = min; i <= max; i++) {
          arrays.push(i < 10 ? '0' + i : i + "");
        }
        return arrays;
      },
      open() {
        this.is_show = true;
      },
      close() {
        this.is_show = false;
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
      getYkeyList() {
        return this.getDateArray(this.minYears, this.maxYears);
      },
      getMkeyList() {
        return this.getDateArray(1, MONTHS);
      },
      getDkeyList() {
        let currentYear = this.getYkeyList[this.Ykey];
        let currentMonth = this.getMkeyList[this.Mkey];
        //计算某年某月有多少天
        let date = new Date(currentYear, currentMonth, 0);
        return this.getDateArray(1, date.getDate());
      },
      getHkeyList() {
        return this.getDateArray(0, HOURS);
      },
      getmkeyList() {
        return this.getDateArray(0, MIN);
      },
      liWidth() {
        return (100 / this.format).toFixed(3) + "%"
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

