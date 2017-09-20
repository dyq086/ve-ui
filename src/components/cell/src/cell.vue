<template>
  <div>
    <div class="item-block">
      <div class="item">
        <div class="item-title">粤通卡卡号:</div>
        <div class="item-inner">
          <input type="number" class="inner-input" value="" placeholder="请输入粤通卡卡号">
        </div>
      </div>
      <div class="item">
        <div class="item-title">支付方式</div>
        <div class="item-inner">
          <span>微信</span>
        </div>
      </div>
    </div>
    <div class="item-block" style="margin-top:1rem">
      <div class="item">
        <div class="item-title">
          <svg class="icon icon-location" aria-hidden="true">
                <use xlink:href="#icon-location"></use>
            </svg>
          <span>我的地址</span>
        </div>
        <div class="item-inner">
          <span>修改地址</span>
          <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </div>
      </div>
       <div class="item">
        <div class="item-title">
          <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-phone"></use>
            </svg>
          <span>电话号码</span>
        </div>
        <div class="item-inner">
          <span>13719477521</span>
          <svg class="icon icon-arrow-right" aria-hidden="true">
                  <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import iconfont from "../../../icon/iconfont"
  export default {
    name: 'etc-cell-item',
    props: {},
    computed: {}
  }
</script>

<style lang="scss">
  @import '../../../style/base.scss';
  @import './cell.scss';
</style>
