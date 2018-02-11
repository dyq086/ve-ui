<template>
  <lable class="item" v-if="type=='label' || type=='checkbox' || type=='radio'">
    <div class="item-left">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <i class="iconfont icon-arrowsgright" v-if="arrow"></i>
    </div>
  </lable>
  <a class="item" :href="href" v-else-if="type=='a'">
    <div class="item-left">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <i class="iconfont icon-arrowsgright" v-if="arrow"></i>
    </div>
  </a>
  <router-link class="item" :to="href" v-else-if="type=='link'">
    <div class="item-left">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
      <i class="iconfont icon-arrowsgright" v-if="arrow"></i>
    </div>
  </router-link>
  <div class="item" v-else>
    <div class="item-left" :class="[is_right?'':'item-flex']">
      <slot name="icon"></slot>
      <slot name="left"></slot>
    </div>
    <div class="item-right">
      <slot name="right" class="67890"></slot>
      <i class="iconfont icon-arrowsgright" v-if="arrow"></i>
    </div>
  </div>
</template>
<script>
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
  mounted() {},
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
