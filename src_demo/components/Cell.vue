<template>
  <div class="block">
    <etc-cell-block>
      <etc-cell-item>
        <span slot="title">输入卡号:</span>
        <input slot="inner" type="number" placeholder="请输入卡号" />
      </etc-cell-item>
        <etc-cell-item arrow>
        <span slot="title">项目资料</span>
      </etc-cell-item>
      <etc-cell-item>
        <span slot="title">支付方式</span>
        <span slot="inner">微信</span>
      </etc-cell-item>
    </etc-cell-block>
    <etc-cell-block>
      <etc-cell-item>
        <svg slot="icon" class="icon" aria-hidden="true"><use xlink:href="#icon-phone"></use></svg>
        <span slot="title">我的电话</span>
        <span slot="inner">13719477521</span>
      </etc-cell-item>
      <etc-cell-item arrow>
        <svg slot="icon" class="icon" aria-hidden="true"><use xlink:href="#icon-location"></use></svg>
        <span slot="title">我的地址</span>
        <span slot="inner">修改地址</span>
      </etc-cell-item>
    </etc-cell-block>
  </div>
</template>

<script>
  export default {
    methods:{
      test(){
        alert("666")
      }
    }
  }
</script>

<style lang="scss">

</style>
