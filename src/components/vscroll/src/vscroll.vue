<template>
  <div id="mescroll" class="mescroll">
    <ul id="dataList" class="data-list">
      <li v-for="pd in pdlist">
        <p class="pd-name">{{pd.pdName}}</p>
        <p class="pd-price">{{pd.pdPrice}} 元</p>
        <p class="pd-sold">已售{{pd.pdSold}}件</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import MeScroll from '../../../plug-in/mescroll'
  import pdlist1 from './data'
  export default {
    name: 'etc-vscroll',
    data() {
      return {
        mescroll: null,
        pdlist: [],
      }
    },
    mounted() {
      //创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      var self = this;
      self.mescroll = new MeScroll("mescroll", {
        up: {
          callback: self.upCallback, //上拉回调
          //以下参数可删除,不配置
          //page:{size:8}, //可配置每页8条数据,默认10
          toTop: { //配置回到顶部按钮
            src: "../res/img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
            //offset : 1000
          },
          empty: { //配置列表无任何数据的提示
            warpId: "dataList",
            icon: "../res/img/mescroll-empty.png",
            //						  	tip : "亲,暂无相关数据哦~" , 
            //						  	btntext : "去逛逛 >" , 
            //						  	btnClick : function() {
            //						  		alert("点击了去逛逛按钮");
            //						  	} 
          }
        }
      });
      //初始化vue后,显示vue模板布局
      document.getElementById("dataList").style.display = "block";
    },
    methods: {
      //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback: function(page) {
        console.log("page.num==" + page.num + ", page.size==" + page.size);
        //联网加载数据
        var self = this;
        getListDataFromNet(page.num, page.size, function(data) {
          //data=[]; //打开本行注释,可演示列表无任何数据empty的配置
          //如果是第一页需手动制空列表
          if (page.num == 1) self.pdlist = [];
          //更新列表数据
          self.pdlist = self.pdlist.concat(data);
          console.log("self.pdlist.length==" + self.pdlist.length);
          //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          //传参:数据的总数; mescroll会自动判断列表是否有无下一页数据,如果数据不满一页则提示无更多数据;
          self.mescroll.endSuccess(data.length);
        }, function() {
          //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          self.mescroll.endErr();
        });
      },
    }
  }
  /*联网加载列表数据*/
  function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
    //延时一秒,模拟联网
    setTimeout(() => {
      var data = pdlist1; // 模拟数据: ../res/pdlist1.js
      var listData = []; //模拟分页数据
      for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
        if (i == data.length) break;
        listData.push(data[i]);
      }
      successCallback && successCallback(listData); //成功回调
    }, 500)
  }
</script>

<style lang="scss">

  /*列表*/
  .mescroll {
    position: fixed;
    top: 0px;
    bottom: 0;
    height: auto;
    background: #fff;
  }
  /*展示上拉加载的数据列表*/
  .data-list {
    display: none;
  }
  .data-list li {
    position: relative;
    padding: 10px 8px 10px 120px;
    border-bottom: 1px solid #eee;
  }
  .data-list .pd-img {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 80px;
    height: 80px;
  }
  .data-list .pd-name {
    font-size: 16px;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
  .data-list .pd-price {
    margin-top: 8px;
    color: red;
  }
  .data-list .pd-sold {
    font-size: 12px;
    margin-top: 8px;
    color: gray;
  }
  @import '../../../style/base.scss';
  @import './vscroll.scss';
</style>
