<template>
  <div class="button-group">
    <etc-toast></etc-toast>
  </div>  
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .button-group {
    .lg {
      padding: .5rem;
      button {
        margin-top: .5rem;
      }
    }
    .md {
      margin-top: 2rem;
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
