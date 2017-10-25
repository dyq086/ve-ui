<template>
  <div>
    <etc-cell-group>
      <etc-cell-item>
        <div slot="title">
          <etc-checkbox v-model="checkboxTest" text="样式一"></etc-checkbox>
        </div>
        <div slot="inner">{{checkboxTest}}</div>
      </etc-cell-item>
      <etc-cell-item>
        <div slot="title">
          <etc-checkbox v-model="checkboxTest1" text="样式二" shape="circled"></etc-checkbox>
        </div>
        <div slot="inner">{{checkboxTest1}}</div>
      </etc-cell-item>
    </etc-cell-group>
    <etc-cell-group>
      <etc-cell-item>
        <div slot="title">
          <etc-checkbox v-model="checkboxTest2" color="#26a2ff" text="自定义颜色"></etc-checkbox>
        </div>
        <div slot="inner"></div>
      </etc-cell-item>
      <etc-cell-item>
        <div slot="title">
          <etc-checkbox v-model="checkboxTest3" disabled text="不可点击状态"></etc-checkbox>
        </div>
        <div slot="inner">{{checkboxTest3}}</div>
      </etc-cell-item>
    </etc-cell-group>
    <div class="group-title">【取值为id值】</div>
    <div class="checkbox-group-box">
      <etc-checkbox-group v-model="checkboxGroupTest">
        <etc-checkbox id="1" text="选项一"></etc-checkbox>
        <etc-checkbox id="2" text="选项二"></etc-checkbox>
        <etc-checkbox id="3" text="选项三"></etc-checkbox>
      </etc-checkbox-group>
      <div class="checkbox-state">{{checkboxGroupTest}}</div>
    </div>
    <div class="group-title">【取值为标签值】</div>
    <div class="checkbox-group-box">
      <etc-checkbox-group v-model="checkboxGroupTestCel">
        <etc-checkbox text="选项一"></etc-checkbox>
        <etc-checkbox text="选项二"></etc-checkbox>
        <etc-checkbox text="选项三"></etc-checkbox>
      </etc-checkbox-group>
      <div class="checkbox-state">{{checkboxGroupTestCel}}</div>
    </div>
    <div class="group-title">【设置默认值】</div>
    <div class="checkbox-group-box">
      <etc-checkbox-group v-model="checkboxGroupTestCel1">
        <etc-checkbox text="选项一"></etc-checkbox>
        <etc-checkbox text="选项二"></etc-checkbox>
        <etc-checkbox text="选项三"></etc-checkbox>
      </etc-checkbox-group>
      <div class="checkbox-state">{{checkboxGroupTestCel1}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkboxTest: false,
        checkboxTest1: true,
        checkboxTest2: true,
        checkboxTest3: true,
        checkboxGroupTest: [],
        checkboxGroupTestCel: [],
        checkboxGroupTestCel1: ['选项一', '选项二']
      }
    },
  }
</script>

<style lang="scss">
  .checkbox-group-box {
    background: #ffffff;
    padding: .5rem 0rem;
    .etc-checkbox-group {
      display: flex;
      justify-content: space-around;
    }
    .checkbox-state {
      padding: 1rem 1rem 0rem 1rem;
      font-size: .7rem;
      color: #000;
    }
  }
</style>
