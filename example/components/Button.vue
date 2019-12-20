<template>
  <div class="button-group">
    <div class="lg">
      <ve-button>default</ve-button>
      <ve-button type="primary">primary</ve-button>
      <ve-button type="danger">danger</ve-button>
      <ve-button disabled>disable</ve-button>
    </div>
     <div class="lg">
      <ve-button shape="circle">default</ve-button>
      <ve-button shape="circle" type="primary">primary</ve-button>
      <ve-button shape="circle" type="danger">danger</ve-button>
      <ve-button shape="circle" disabled>disable</ve-button>
    </div>
    <div class="medium">
      <ve-button size="medium">default</ve-button>
      <ve-button type="primary" size="medium">primary</ve-button>
      <ve-button type="danger" size="medium">danger</ve-button>
      <ve-button disabled size="medium">disable</ve-button>
    </div>
    <div class="small">
      <ve-button size="small">default</ve-button>
      <ve-button type="primary" size="small">primary</ve-button>
      <ve-button type="danger" size="small">danger</ve-button>
      <ve-button disabled size="small">disable</ve-button>
    </div>
    <div class="lg">
      <ve-button  bgcolor="#44b549" color="#fff" >自定义颜色</ve-button>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .button-group {
    background: #fff;
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
