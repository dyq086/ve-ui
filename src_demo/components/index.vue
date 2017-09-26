<template>
  <div class="index">
    <div class="commpent-name">CSS 组件</div>
    <etc-cell-block>
      <etc-cell-item arrow v-for="(item,index) in list" :key="index" type="link" :href="item.link">
        <svg slot="icon" class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span slot="title">{{item.name}}</span>
      </etc-cell-item>
    </etc-cell-block>
<!--     <div class="commpent-name">JS 组件</div>
    <etc-cell-block>
      <etc-cell-item arrow v-for="(item,index) in list" :key="index" type="link" :href="item.link">
        <svg slot="icon" class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span slot="title">{{item.name}}</span>
      </etc-cell-item>
    </etc-cell-block> -->
  </div>
</template>
<script>
import iconfont from "../assets/icon/iconfont"
export default {
  data() {
    return {
      list: [{
          icon: '#icon-yuhangyuan',
          name: 'Button',
          link: '/button'
        },
        {
          icon: '#icon-yueqiu',
          name: 'Cell',
          link: '/cell'
        },
        {
          icon: '#icon-xingxi',
          name: 'Switch',
          link: '/switch'
        },
        {
          icon: '#icon-xingxi',
          name: 'Checkbox',
          link: '/checkbox'
        },
         {
          icon: '#icon-xingxi',
          name: 'Radio',
          link: '/radio'
        }
      ]
    }
  }
}

</script>
<style lang="scss">
.index {
  .commpent-name {
    padding: .5rem 1rem;
    text-align: center;
    margin-bottom: -.5rem;
  }
}

</style>
