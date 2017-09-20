<template>
  <div class="block">
    <etc-cell-block>
      <etc-cell-item>
        <span slot="title">卡号:</span>
        <input slot="inner" type="number" placeholder="请输入粤通卡卡号" />
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
        <input slot="title" type="number" placeholder="请输入手机号码" />
      </etc-cell-item>
      <etc-cell-item>
        <svg slot="icon" class="icon" aria-hidden="true"><use xlink:href="#icon-code"></use></svg>
        <input slot="title" type="number" placeholder="输入验证码" />
        <div slot="inner" class="btn-box">
          <etc-button type="primary" size="md">发送验证码</etc-button>
        </div>
      </etc-cell-item>
      <etc-cell-item arrow type="a" href="tel:13719477521">
        <svg slot="icon" class="icon" aria-hidden="true"><use xlink:href="#icon-tel"></use></svg>
        <span slot="title">我的电话</span>
        <span slot="inner">13719477521</span>
      </etc-cell-item>
      <etc-cell-item arrow type="link" href="#">
        <svg slot="icon" class="icon" aria-hidden="true"><use xlink:href="#icon-location"></use></svg>
        <span slot="title">我的地址</span>
        <span slot="inner">修改地址</span>
      </etc-cell-item>

       <etc-cell-item arrow type="a">
         <img slot="icon" class="icon" src="../assets/logo.png" />
        <span slot="title">我的图标</span>
        <span slot="inner">可自定义图标</span>
      </etc-cell-item>
    </etc-cell-block>
  </div>
</template>

<script>
  export default {
    methods: {
      test() {
        alert("666")
      }
    }
  }
</script>

<style lang="scss">
  .btn-box {
    width: 6rem;
  }
</style>
