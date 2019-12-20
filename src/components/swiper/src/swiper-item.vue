<template>
	<div :class="$parent.mode==0?'ve-swiper-item':'ve-swiper-item-free' ">
		<slot></slot>
	</div>
</template>

<script type="text/babel">
	export default {
		name: 've-swiper-item',
	}
</script>
<style lang="scss">

</style>
