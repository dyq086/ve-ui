<template>
  <div class="block">
    <ve-cell-group>
        <ve-cell-item>
            <span slot="left">支付方式</span>
            <span slot="right">微信</span>
        </ve-cell-item>
        <ve-cell-item arrow>
            <span slot="left">项目资料</span>
        </ve-cell-item>
        <ve-cell-item>
            <span slot="left">卡号：</span>
            <input slot="right" type="number" placeholder="请输入VIP卡卡号" />
        </ve-cell-item>
    </ve-cell-group>
    <ve-cell-group>
        <ve-cell-item>
            <ve-icon slot="icon" name="phone"></ve-icon>
            <input slot="right" type="number" placeholder="请输入手机号码" />
        </ve-cell-item>
        <ve-cell-item>
            <ve-icon slot="icon" name="codev"></ve-icon>
            <input slot="left" type="number" placeholder="输入验证码" />
            <div slot="right" style="width: 6rem;">
              <ve-button type="primary" slot="right" size="medium">发送验证码</ve-button>
            </div>
        </ve-cell-item>
        <ve-cell-item arrow type="a" href="tel:13719477521">
            <ve-icon slot="icon" name="tel"></ve-icon>
            <span slot="left">我的电话</span>
            <span slot="right">13719477521</span>
        </ve-cell-item>
        <ve-cell-item arrow type="link" href="#">
            <ve-icon slot="icon" name="location"></ve-icon>
            <span slot="left">我的地址</span>
            <span slot="right">修改地址</span>
        </ve-cell-item>
        <ve-cell-item arrow type="a">
            <img slot="icon" class="icon" src="../assets/logo.png" />
            <span slot="left">我的图标</span>
            <span slot="right">可自定义图标</span>
        </ve-cell-item>
    </ve-cell-group>
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


</style>
