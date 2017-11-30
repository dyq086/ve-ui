<template>
  <div class="bg">
    <etc-grids-group :row="2" title="粤通卡服务【二栏】设置title可隐藏">
      <etc-grids-item v-for="(item,index) in list" :key="index" v-if="index<2">
        <svg slot="icon" class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg>
        <span slot="text">etc-grid-2</span>
      </etc-grids-item>
      </etc-grids-item>
    </etc-grids-group>
    <etc-grids-group :row="3" title="粤通卡服务【三栏】rows可设置2,3,4,5">
      <etc-grids-item v-for="(item,index) in list" :key="index" v-if="index<3">
        <svg slot="icon" class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg>
        <span slot="text">etc-grid-3</span>
      </etc-grids-item>
      </etc-grids-item>
    </etc-grids-group>
    <etc-grids-group :row="4" title="粤通卡服务【四栏】可以设置border" border>
      <etc-grids-item v-for="(item,index) in list" :key="index">
        <svg slot="icon" class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg>
        <span slot="text">etc-grid-4</span>
      </etc-grids-item>
      </etc-grids-item>
    </etc-grids-group>
    <etc-grids-group :row="5" title="汽车服务【五栏】Duang~">
      <etc-grids-item v-for="(item,index) in list1" :key="index">
        <svg slot="icon" class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg>
        <span slot="text">{{item.name}}</span>
      </etc-grids-item>
    </etc-grids-group>
    <etc-grids-group :row="4" title="不想要图标也行 （图标尺寸1:1）" border>
      <etc-grids-item v-for="(item,index) in list1" :key="index">
        <!-- <svg slot="icon" class="icon" aria-hidden="true"><use :xlink:href="item.icon"></use></svg> -->
        <span slot="text">图标呢</span>
      </etc-grids-item>
      </etc-grids-item>
    </etc-grids-group>
  </div>
</template>

<script>
  import iconfont from "../assets/icon/iconfont"
  export default {
    data() {
      return {
        list: [{
            icon: '#icon-yuhangyuan',
            name: '粤通卡服务',
            link: '/grids'
          },
          {
            icon: '#icon-yueqiu',
            name: '加油服务',
            link: '/grids'
          },
          {
            icon: '#icon-xingxi',
            name: '停车服务',
            link: '/grids'
          },
          {
            icon: '#icon-xingyue',
            name: '云支付',
            link: '/grids'
          }
        ],
        list1: [{
            icon: '#icon-xinghe',
            name: '加油服务',
            link: '/grids'
          },
          {
            icon: '#icon-xinggui',
            name: '停车服务',
            link: '/grids'
          },
          {
            icon: '#icon-xingqiu',
            name: '商城',
            link: '/grids'
          },
          {
            icon: '#icon-wangyuanjing',
            name: '洗车',
            link: '/grids'
          },
          {
            icon: '#icon-sanqiu',
            name: '车主卡',
            link: '/grids'
          }, {
            icon: '#icon-taikong',
            name: '加油充值',
            link: '/grids'
          }, {
            icon: '#icon-raohang',
            name: '车险',
            link: '/grids'
          }, {
            icon: '#icon-waixingren',
            name: '违章',
            link: '/grids'
          }
        ]
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .bg {
    background: #fff;
  }
  .mt {
    margin-top: 1.5rem;
  }
</style>
