<template>
  <div>
    <etc-vscroll :on-infinite="infinite" :pageSize="pageSize" toTop ref="vscroll">
      <div slot="list">
        <ul class="data-list" @click="refresh">
          <li v-for="pd in products_list">
            <img :src="pd.icon" class="pd-img">
            <p class="pd-name">{{pd.title}}</p>
            <p class="pd-price">{{pd.price}} 元</p>
            <p class="pd-sold">月销量{{pd.month_sales}}元</p>
          </li>
        </ul>
      </div>
      <div slot="empty">
        <div class="etc-list-empty">
          <img class="empty-icon" src="../assets/icon/icon_empty_data.png" />
          <p class="empty-tip">亲,暂无相关数据哦~</p>
          <etc-button class="btn-empty">去逛逛</etc-button>
        </div>
      </div>
    </etc-vscroll>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products_list: [],
        pageSize:10
      }
    },
    methods: {
      infinite(pageNum, pageSize, successCallback, errorCallback) {
        const url = 'https://api-mall.etcchebao.com/goods/list?cateidOne=2&cateidTwo=0&price=0&sales=2';
        this.$http.jsonp(url, {
          params: {
            page: pageNum,
            size: pageSize
          }
        }).then((response) => {
          setTimeout(() => {
            
            let _list = response.body.data.list;
            console.log(_list)
            //如果是第一页需手动制空列表
            if (pageNum == 1) {
              this.products_list = [];
            }
            this.products_list = [...this.products_list,..._list];
            successCallback && successCallback(_list); //成功回调
          }, 1000)
        }).catch(() => {
          errorCallback && errorCallback(); //失败回调
        });
      },
      refresh() {
        this.$refs.vscroll.refresh('products_list'); //this.products_list 属性名称
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
  /*展示上拉加载的数据列表*/
  // .data-list {
  //   display: none;
  // }
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
  .btn-empty{
    margin-top: 1rem;
  }
</style>
