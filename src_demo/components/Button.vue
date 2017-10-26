<template>
  <div class="button-group">
    <div class="lg">
      <etc-button>default</etc-button>
      <etc-button type="primary">primary</etc-button>
      <etc-button type="danger">danger</etc-button>
      <etc-button disabled>disable</etc-button>
    </div>
    <div class="md">
      <etc-button size="md">default</etc-button>
      <etc-button type="primary" size="md">primary</etc-button>
      <etc-button type="danger" size="md">danger</etc-button>
      <etc-button disabled size="md">disable</etc-button>
    </div>
    <div class="sm">
      <etc-button size="sm">default</etc-button>
      <etc-button type="primary" size="sm">primary</etc-button>
      <etc-button type="danger" size="sm">danger</etc-button>
      <etc-button disabled size="sm">disable</etc-button>
    </div>
    <div class="lg">
      <etc-button  bgcolor="#44b549" color="#fff" >自定义颜色</etc-button>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .button-group {
    background: #fff;
    height: 100%;
    .lg {
      padding: .5rem 1.2rem;
      button {
        margin-top: .8rem;
      }
    }
    .md {
      margin-top: 1rem;
      padding: 0 4rem;
      button {
        margin: .5rem auto;
      }
    }
    .sm {
      padding: 0 1.5rem;
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      margin-left: .5rem;
    }
  }
</style>
