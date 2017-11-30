<template>
  <div class="demo-swpier-group">
    <div class="group-title">【横向滚动，自动轮播】</div>
    <div class="demo-swpier-box">
      <etc-swiper :indicator="true" :autoplay="3000">
        <etc-swiper-item>
          <div class="demo-color-block demo-bule"></div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-color-block demo-yellow"></div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-color-block demo-green"></div>
        </etc-swiper-item>
      </etc-swiper>
    </div>
    <div class="group-title">【纵向滚动】</div>
    <div class="demo-swpier-box">
      <etc-swiper :indicator="true" direction="vertical">
        <etc-swiper-item>
          <div class="demo-color-block demo-yellow"></div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-color-block demo-bule"></div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-color-block demo-green"></div>
        </etc-swiper-item>
      </etc-swiper>
    </div>
    <div class="group-title">【自由滚动】</div>
    <div class="demo-swpier-box">
      <etc-swiper :indicator="true" :mode="1">
        <etc-swiper-item>
          <div class="demo-free">1</div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-free">2</div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-free">3</div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-free">4</div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-free">5</div>
        </etc-swiper-item>
        <etc-swiper-item>
          <div class="demo-free">6</div>
        </etc-swiper-item>
      </etc-swiper>
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
