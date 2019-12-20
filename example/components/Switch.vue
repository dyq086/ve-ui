<template>
  <div>
    <ve-cell-group>
      <ve-cell-item>
        <div slot="left">默认({{switchTest}})</div>
        <div slot="right">
          <ve-switch v-model="switchTest" @on-change="yu"></ve-switch>
        </div>
      </ve-cell-item>
      <ve-cell-item>
        <div slot="left">禁止点击</div>
        <div slot="right">
          <ve-switch v-model="switchTest1" disabled></ve-switch>
        </div>
      </ve-cell-item>
      <ve-cell-item>
        <div slot="left">自定义颜色</div>
        <div slot="right">
          <ve-switch v-model="switchTest2" color="#26a2ff"></ve-switch>
        </div>
      </ve-cell-item>
      <ve-cell-item>
        <div slot="left">自定义尺寸</div>
        <div slot="right">
          <ve-switch v-model="switchTest3" size="sm"></ve-switch>
        </div>
      </ve-cell-item>
    </ve-cell-group>
    <!-- <h2>小尺寸</h2>
        <ve-switch v-model="switchTest" size="sm"></ve-switch>
        <div>当前状态为:{{switchTest}}</div>
        <ve-switch v-model="switchTest1" size="sm"></ve-switch>
        <div>当前状态为:{{switchTest1}}</div>
        <h2>大尺寸</h2>
        <ve-switch v-model="switchTest" size="lg"></ve-switch>
        <div>当前状态为:{{switchTest}}</div>
        <ve-switch v-model="switchTest1" size="lg"></ve-switch>
        <div>当前状态为:{{switchTest1}}</div>
        <h2>自定义颜色</h2>
        <ve-switch v-model="switchTest1" ></ve-switch>
        <div>当前状态为:{{switchTest1}}</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchTest: false,
      switchTest1: true,
      switchTest2: true,
      switchTest3: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.switchTest = true;
    }, 1000)
  },
  methods: {
    yu() {
      console.log("aa")
    }
  },
  watch: {
    switchTest(val) {
      console.log(val)
    }
  }
}

</script>
<style lang="scss">


</style>
