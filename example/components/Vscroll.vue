<template>
  <div>
    <ve-vscroll :on-infinite="infinite" :pageSize="pageSize" toTop ref="vscroll" :use-refresh="true">
      <div slot="list">
        <ul class="data-list" @click="refresh">
          <li v-for="(pd,index) in products_list" :key="index">
            <img :src="pd.image_url" class="pd-img">
            <p class="pd-name">{{pd.name}}</p>
            <p class="pd-price">{{pd.price}} 元</p>
            <p class="pd-sold">月销量{{pd.month_sales}}元</p>
          </li>
        </ul>
      </div>
      <div slot="empty">
        <div class="ve-list-empty">
          <img class="empty-icon" src="../assets/icon/icon_empty_data.png" />
          <p class="empty-tip">亲,暂无相关数据哦~</p>
          <ve-button class="btn-empty">去逛逛</ve-button>
        </div>
      </div>
    </ve-vscroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products_list: [],
      pageSize: 10
    }
  },
  mounted() {
    this.$refs.vscroll.init();//初始化
  },
  methods: {
    infinite(pageNum, pageSize, successCallback, errorCallback) {
      const url = 'http://rap2api.taobao.org/app/mock/240405/v1/api/goods/list';
      this.$http.jsonp(url, {
        params: {
          page: pageNum,
          size: pageSize
        }
      }).then((response) => {
        let _list = response.body.data.products;
        setTimeout(() => {
          //如果是第一页需手动制空列表
          if (pageNum == 1) {
            this.products_list = [];
          }
          //TODO 相当于concat、
          this.products_list = [...this.products_list, ..._list];
          // 成功回调
          successCallback && successCallback(_list);
        }, 1000)
      }).catch(() => {
        //失败回调
        errorCallback && errorCallback();
      });
    },
    refresh() {
      //刷新名称
      this.products_list=[];
      this.$refs.vscroll.refresh();
    }
  }
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

.data-list {
  li {
    position: relative;
    padding: 0.5rem 0.4rem 0.5rem 6rem;
    border-bottom: 1px solid #eee;
  }
  .pd-img {
    position: absolute;
    left: 0.9rem;
    top: 0.9rem;
    width: 4rem;
    height: 4rem;
  }
  .pd-name {
    font-size: 0.8rem;
    line-height: 1rem;
    height: 2rem;
    overflow: hidden;
  }
  .pd-price {
    margin-top: 0.4rem;
    color: red;
  }
  .pd-sold {
    font-size: 0.6rem;
    margin-top: 0.4rem;
    color: gray;
  }
}

.btn-empty {
  margin-top: 1rem;
}

</style>
