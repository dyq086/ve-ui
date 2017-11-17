<template>
  <lable class="item" v-if="type=='label' || type=='checkbox' || type=='radio'">
    <div class="item-left">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <svg class="icon" aria-hidden="true" v-if="arrow"><use xlink:href="#icon-arrow-right"></use></svg>
    </div>
  </lable>
  <a class="item" :href="href" v-else-if="type=='a'">
    <div class="item-left">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <svg class="icon" aria-hidden="true" v-if="arrow"><use xlink:href="#icon-arrow-right"></use></svg>
    </div>
  </a>
  <router-link class="item" :to="href" v-else-if="type=='link'">
    <div class="item-left">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <svg class="icon" aria-hidden="true" v-if="arrow"><use xlink:href="#icon-arrow-right"></use></svg>
    </div>
  </router-link>
  <div class="item" v-else>
    <div class="item-left" :class="[is_right?'':'item-flex']">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <svg class="icon" aria-hidden="true" v-if="arrow"><use xlink:href="#icon-arrow-right"></use></svg>
    </div>
  </div>
</template>

<script type="text/babel">
  import iconfont from "../../../icon/iconfont"
  export default {
    name: 'etc-cell-item',
    props: {
      type: {
        validator(value) {
          return ['link', 'a', 'label', 'div', 'checkbox', 'radio'].indexOf(value) > -1;
        },
        default: 'div'
      },
      arrow: {
        type: Boolean,
        default: false
      },
      href: {
        type: [String, Object]
      }
    },
    mounted(){
    },
    computed: {
      is_right() {
        return !!this.$slots.right;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/necessary.scss';
  @import './cell.scss';

</style>
