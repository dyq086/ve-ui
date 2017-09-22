<template>
  <div>
    <etc-cell-block>
      <etc-cell-item arrow v-for="(item,index) in list" :key="index" type="link" :href="item.link">
        <svg slot="icon" class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg>
        <span slot="title">{{item.name}}</span>
      </etc-cell-item>
    </etc-cell-block>
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
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

</style>
