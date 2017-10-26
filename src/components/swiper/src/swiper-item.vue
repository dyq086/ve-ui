<template>
	<div :class="$parent.mode==0?'etc-swiper-item':'etc-swiper-item-free' ">
		<slot></slot>
	</div>
</template>

<script type="text/babel">
	export default {
		name: 'etc-swiper-item',
	}
</script>