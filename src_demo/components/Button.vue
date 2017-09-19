<template>
  <div class="button-group">
    <div class="lg">
      <etc-button>空心 (btn-defult)</etc-button>
      <etc-button type="primary">基本 (btn-primary)</etc-button>
      <etc-button type="danger">删除 (btn-danger)</etc-button>
      <etc-button disabled>禁止 (btn-disable)</etc-button>
    </div>
    <div class="sm">
      <etc-button size="sm">空心</etc-button>
      <etc-button type="primary" size="sm">基本</etc-button>
      <etc-button type="danger" size="sm">删除</etc-button>
      <etc-button disabled size="sm">禁止</etc-button>
    </div>
  </div>
</template>

<script>
  export default {
   
  }
</script>

<style lang="scss">
  .button-group {
    padding: .5rem;
    .lg {
      button {
        margin-top: .5rem;
      }
    }
    .sm {
      margin-top: 1rem;
      button {
        margin: .5rem auto;
      }
    }
  }
</style>
