<template>
  <div class="button-group">
    <div class="lg">
      <etc-button>default</etc-button>
      <etc-button type="primary">primary</etc-button>
      <etc-button type="danger">danger</etc-button>
      <etc-button disabled>disable</etc-button>
    </div>
     <div class="lg">
      <etc-button shape="circle">default</etc-button>
      <etc-button shape="circle" type="primary">primary</etc-button>
      <etc-button shape="circle" type="danger">danger</etc-button>
      <etc-button shape="circle" disabled>disable</etc-button>
    </div>
    <div class="medium">
      <etc-button size="medium">default</etc-button>
      <etc-button type="primary" size="medium">primary</etc-button>
      <etc-button type="danger" size="medium">danger</etc-button>
      <etc-button disabled size="medium">disable</etc-button>
    </div>
    <div class="small">
      <etc-button size="small">default</etc-button>
      <etc-button type="primary" size="small">primary</etc-button>
      <etc-button type="danger" size="small">danger</etc-button>
      <etc-button disabled size="small">disable</etc-button>
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
    .medium {
      margin-top: 1rem;
      padding: 0 4rem;
      button {
        margin: .5rem auto;
      }
    }
    .small {
      padding: 0 1.5rem;
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      margin-left: .5rem;
    }
  }
</style>
