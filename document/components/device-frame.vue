<template>
  <div class="device-box">
    <div class="device device-iphone-8 device-spacegray">
      <div class="device-frame">
        <iframe :src="ifrSrc" frameborder="0" width="100%" height="100%"></iframe>
      </div>
      <div class="device-stripe"></div>
      <div class="device-header"></div>
      <div class="device-sensors"></div>
      <div class="device-btns"></div>
      <div class="device-power"></div>
    </div>
  </div>
</template>
<script>
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://etc-ui.github.io/vue-etc-ui/docs/example/' : `http://${window.location.hostname}:3000/#/`

export default {
  name: 'device-frame',
  props: {

  },
  data() {
    return {
      ifrSrc: baseUrl
    }
  },
  methods: {

  },
  mounted() {

  },
  computed: {

  }
}

</script>
<style lang="scss">
@import '../style/devices.min.css';
.device-box {
  width: 450px;
}

.device-iphone-8 {
  margin: 0 auto;
}

</style>
