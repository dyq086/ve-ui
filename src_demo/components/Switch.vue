<template>
  <div>
    <etc-cell-group>
      <etc-cell-item>
        <div slot="title">默认({{switchTest}})</div>
        <div slot="inner">
          <etc-switch v-model="switchTest"></etc-switch>
        </div>
      </etc-cell-item>
      <etc-cell-item>
        <div slot="title">禁止点击</div>
        <div slot="inner">
          <etc-switch v-model="switchTest1" disabled></etc-switch>
        </div>
      </etc-cell-item>
      <etc-cell-item>
        <div slot="title">自定义颜色</div>
        <div slot="inner">
          <etc-switch v-model="switchTest2" color="#26a2ff"></etc-switch>
        </div>
      </etc-cell-item>
      <etc-cell-item>
        <div slot="title">自定义尺寸</div>
        <div slot="inner">
          <etc-switch v-model="switchTest3" size="sm"></etc-switch>
        </div>
      </etc-cell-item>
    </etc-cell-group>
    <!-- <h2>小尺寸</h2>
        <etc-switch v-model="switchTest" size="sm"></etc-switch>
        <div>当前状态为:{{switchTest}}</div>
        <etc-switch v-model="switchTest1" size="sm"></etc-switch>
        <div>当前状态为:{{switchTest1}}</div>
        <h2>大尺寸</h2>
        <etc-switch v-model="switchTest" size="lg"></etc-switch>
        <div>当前状态为:{{switchTest}}</div>
        <etc-switch v-model="switchTest1" size="lg"></etc-switch>
        <div>当前状态为:{{switchTest1}}</div>
        <h2>自定义颜色</h2>
        <etc-switch v-model="switchTest1" ></etc-switch>
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
    }
  }
</script>

<style lang="scss">

</style>
