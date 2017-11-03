<template>
  <div class="index">
    <div class="commpent-name">vue-etc-ui 组件</div>
    <etc-cell-group>
      <etc-cell-item arrow v-for="(item,index) in list" :key="index" type="link" :href="item.link">
        <svg slot="icon" class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
        <span slot="left">{{item.name}}</span>
      </etc-cell-item>
    </etc-cell-group>
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
          },
          {
            icon: '#icon-xingxi',
            name: 'Grids',
            link: '/grids'
          },
          {
            icon: '#icon-xingxi',
            name: 'Toast',
            link: '/toast'
          },
          {
            icon: '#icon-xingxi',
            name: 'Indicator',
            link: '/indicator'
          },
          {
            icon: '#icon-xingxi',
            name: 'Alert',
            link: '/alert'
          },
          {
            icon: '#icon-xingxi',
            name: 'Tab',
            link: '/tab'
          },
          {
            icon: '#icon-xingxi',
            name: 'Picker',
            link: '/picker'
          },
          {
            icon: '#icon-xingxi',
            name: 'DateTimePicker',
            link: '/datetime-picker'
          },
          {
            icon: '#icon-xingxi',
            name: 'PwdKeyboard',
            link: '/pwd-keyboard'
          },
          {
            icon: '#icon-xingxi',
            name: 'ActionSheet',
            link: '/actionsheet'
          },
          {
            icon: '#icon-xingxi',
            name: 'Vscroll',
            link: '/vscroll'
          },
          {
            icon: '#icon-xingxi',
            name: 'Swiper',
            link: '/swiper'
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
