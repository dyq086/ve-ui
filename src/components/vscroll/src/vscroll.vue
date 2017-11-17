<template>
  <div id="mescroll" class="mescroll">
    <slot name="list"></slot>
    <slot name="empty" v-if="is_show_empty && $slots.empty"></slot>
    <img ref="topSrc" v-if="toTop" style="display:none" src="../../../assets/images/icon-totop.png">
  </div>
</template>
<!-- type="text/babel" -->
<script>
import MeScroll from '../../../plug-in/mescroll'
export default {
  name: 'etc-vscroll',
  data() {
    return {
      mescroll: null,
      is_show_empty: false
    }
  },
  props: {
    onInfinite: {
      type: Function
    },
    onRefresh: {
      type: Function
    },
    pageSize: {
      type: [Number, String],
      defalut: 10
    },
    toTop: {
      type: Boolean,
      defalut: false
    },
    useRefresh: {
      type: Boolean,
      defalut: false
    }
  },
  mounted() {

  },
  methods: {
    init() {
      //创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      this.mescroll = new MeScroll("mescroll", {
        down: {
          use: this.useRefresh,
          auto: true,
          callback: this.downCallback,
        },
        up: {
          callback: this.upCallback, //上拉回调
          //以下参数可删除,不配置
          page: {
            size: this.pageSize
          }, //可配置每页8条数据,默认10
          toTop: { //配置回到顶部按钮
            src: this.$refs.topSrc ? this.$refs.topSrc.src : null, //默认滚动到1000px显示,可配置offset修改
            //offset : 1000
          },
        }
      });
    },
    refresh(property) {
      // this.$parent[property] = [];
      this.mescroll.resetUpScroll();
    },
    downCallback(mescroll) {
      mescroll.resetUpScroll();
    },
    //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page) {
      //联网加载数据
      this.onInfinite(page.num, page.size, data => {
        //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        //传参:数据的总数; mescroll会自动判断列表是否有无下一页数据,如果数据不满一页则提示无更多数据;
        if (data.length == 0) {
          this.is_show_empty = true;
        }
        this.mescroll.endSuccess(data.length);
      }, () => {
        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        this.mescroll.endErr();
      });
    }
  }
}

</script>
<style lang="scss">
@import '../../../style/necessary.scss';
@import './vscroll.scss';

</style>
