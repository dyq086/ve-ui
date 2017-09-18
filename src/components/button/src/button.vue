<template>
  <div style="padding:.5rem">
    <button class="etc-button btn-defult">确认 (btn-defult)</button>
    <button class="etc-button btn-primary">确认 (btn-primary)</button>
    <button class="etc-button btn-disable">确认 (btn-disable)</button>
  </div>
</template>
<script type="text/babel">
  export default { name: 'etc-button', }
</script>
<style lang="scss">
@import '../../../style/base.scss';
@import './button.scss';
.etc-button{
	margin-top: .5rem;
}
</style>
