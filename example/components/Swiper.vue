<template>
  <div class="demo-swpier-group">
    <div class="group-title">【横向滚动，自动轮播】</div>
    <div class="demo-swpier-box">
      <ve-swiper :indicator="true" :autoplay="3000">
        <ve-swiper-item>
          <div class="demo-color-block demo-bule"></div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-color-block demo-yellow"></div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-color-block demo-green"></div>
        </ve-swiper-item>
      </ve-swiper>
    </div>
    <div class="group-title">【纵向滚动】</div>
    <div class="demo-swpier-box">
      <ve-swiper :indicator="true" direction="vertical">
        <ve-swiper-item>
          <div class="demo-color-block demo-yellow"></div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-color-block demo-bule"></div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-color-block demo-green"></div>
        </ve-swiper-item>
      </ve-swiper>
    </div>
    <div class="group-title">【自由滚动】</div>
    <div class="demo-swpier-box">
      <ve-swiper :indicator="true" :mode="1">
        <ve-swiper-item>
          <div class="demo-free">1</div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-free">2</div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-free">3</div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-free">4</div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-free">5</div>
        </ve-swiper-item>
        <ve-swiper-item>
          <div class="demo-free">6</div>
        </ve-swiper-item>
      </ve-swiper>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="scss">
  .demo {
    &-swpier-group {
      height: 100%;
      background: #ffffff;
    }
    &-swpier-box {
      height: 10rem;
      overflow: hidden;
    }
    &-color-block {
      height: 100%;
      width: 100%;
    }
    &-bule {
      background: #10aeff;
    }
    &-yellow {
      background: #ffbe00;
    }
    &-green {
      background: #09bb07;
    }
    &-free {
      height: 5rem;
      width: 5rem;
      line-height: 5rem;
      text-align: center;
      margin:0 1rem;
      background: #cccccc;
    }
  }
</style>
