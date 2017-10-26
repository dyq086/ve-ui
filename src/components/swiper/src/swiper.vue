<template>
	<div class="etc-swiper-wrap" @touchstart="touchStart" @touchmove.prevent="touchMove" @touchend="touchEnd">
		<div class="etc-swiper-content" :class="[direction, {'etc-swiper-page': !mode}]" ref="content" :style="{'transform': 'translate3d('+posX+'px,'+posY+'px,0)', 'transition-duration': transitionDuration}">
			<slot></slot>
		</div>
		<div v-if="indicator && mode == 0" :class="indicatorClass">
			<span v-for="(item, index) in iLength" :class="{'current': index == currentIndex}"></span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'etc-swiper',
		data() {
			return {
				player: null,
				currentIndex: 0,
				iLength: 0,
				maxDistance: 0,
				posX: 0,
				posY: 0,
				posOldX: 0,
				posOldY: 0,
				startX: 0,
				startY: 0,
				transitionDuration: '0ms',
				lastMove: {
					hasMove: false,
					time: 0,
					distance: 0
				}
			}
		},
		props: {
			indicator: {
				type: Boolean,
				default: false
			},
			mode: {
				type: Number,
				default: 0
			},
			autoplay: {
				type: Number,
				default: 0
			},
			direction: {
				type: String,
				default: 'horizontal'
			}
		},
		computed: {
			iDistance() {
				return this.direction == 'horizontal' ? this.$refs.content.offsetWidth : this.$refs.content.offsetHeight;
			},
			dir() {
				return this.direction == 'horizontal' ? 'X' : 'Y';
			},
			indicatorClass() {
				return this.direction == 'horizontal' ? 'etc-swiper-indicator' : 'etc-swiper-indicator-vertical';
			}
		},
		methods: {
			init() {
				let target = this.mode == 0 ? '.etc-swiper-item' : '.etc-swiper-item-free';
				const els = this.$refs.content.querySelectorAll(target);
				let val = 0,
					dir, marginBefore, marginAfter;
				if (this.direction == 'horizontal') {
					dir = 'offsetWidth';
					marginBefore = 'marginLeft';
					marginAfter = 'marginRight';
				} else {
					dir = 'offsetHeight';
					marginBefore = 'marginTop';
					marginAfter = 'marginBottom';
				}
				this.iLength = els.length;
				//计算etc-swiper-item总长度
				for (let i = 0; i < this.iLength; i++) {
					val -= els[i][dir] + parseInt(window.getComputedStyle(els[i])[marginBefore]) + parseInt(window.getComputedStyle(els[i])[marginAfter]);
				}
				//防止etc-swiper-item靠图片撑开大小，图片未加载完的情况
				if (!val) {
					//setTimeout(this.init, 200);
				} else {
					if (val + this.iDistance > 0) {
						this.maxDistance = 0;
					} else {
						this.maxDistance = val + this.iDistance;
					}
					this.autoplay && this.setAuto();
				}
			},
			setAuto() {
				if (this.mode == 0 && this.iLength > 1) {
					clearInterval(this.player);
					this.player = setInterval(this.toNext, this.autoplay);
				}
			},
			touchStart(event) {
				if (this.player) {
					this.mode == 0 ? clearInterval(this.player) : cancelAnimationFrame(this.player);
				}
				if (this.mode == 0) this.lastMove.time = Date.now();
				this.transitionDuration = '0ms';
				this.posOldX = this.posX;
				this.posOldY = this.posY;
				this.startX = event.changedTouches[0].pageX;
				this.startY = event.changedTouches[0].pageY;
			},
			touchMove(event) {
				let distance = event.changedTouches[0]['page' + this.dir] - this['start' + this.dir],
					overFlow = distance + this['posOld' + this.dir],
					now;
				this.lastMove.hasMove = true;
				if (this.mode == 1) {
					now = Date.now();
					if (now - this.lastMove.time > 160) {
						this.lastMove.time = now;
						this.lastMove.distance = parseInt(event.changedTouches[0]['page' + this.dir]);
					}
				}
				if (overFlow < this.maxDistance) {
					overFlow -= this.maxDistance;
				} else if (overFlow < 0) {
					overFlow = 0;
				}
				distance = distance - overFlow + overFlow / 3;
				this['pos' + this.dir] = parseInt(distance) + this['posOld' + this.dir];
			},
			touchEnd(event) {
				if (!this.lastMove.hasMove) return;
				switch (this.mode) {
					case 0:
						this.touchEndMode0();
						break;
					case 1:
						this.touchEndMode1(event);
						break;
				}
				this.lastMove.hasMove = false;
			},
			touchEndMode0() {
				let index;
				if (Date.now() - this.lastMove.time < 400 && this['pos' + this.dir] != this['posOld' + this.dir]) {
					index = this['pos' + this.dir] > this['posOld' + this.dir] ? this.currentIndex - 1 : this.currentIndex + 1;
				} else {
					index = -Math.round(this['pos' + this.dir] / this.iDistance);
				}
				if (index < 0) {
					this.currentIndex = 0;
				} else if (index >= this.iLength) {
					this.currentIndex = this.iLength - 1;
				} else {
					this.currentIndex = index;
				}
				this.pageSwitch();
				this.autoplay && this.setAuto();
			},
			touchEndMode1(event) {
				let overFlow, distance, overFlowMax;
				if (this['pos' + this.dir] > 0 || this['pos' + this.dir] < this.maxDistance) {
					this.lastMove.distance = 0
				} else {
					distance = parseInt(((event.changedTouches[0]['page' + this.dir] - this.lastMove.distance) / (Date.now() - this.lastMove.time) * 700) / 2);
					overFlow = distance + this['pos' + this.dir];
					if (overFlow < this.maxDistance) {
						overFlow -= this.maxDistance;
					} else if (overFlow < 0) {
						overFlow = 0;
					}
					overFlowMax = overFlow > 0 ? 8 : -8;
					this.lastMove.distance = distance - overFlow + overFlowMax;
				}
				this.player = requestAnimationFrame(this.inertia);
			},
			inertia() {
				if (this.lastMove.distance == 0) {
					if (this['pos' + this.dir] > 0) {
						this.lastMove.distance = -this['pos' + this.dir];
					} else if (this['pos' + this.dir] < this.maxDistance) {
						this.lastMove.distance = this.maxDistance - this['pos' + this.dir];
					} else {
						cancelAnimationFrame(this.player);
						return false;
					}
				}
				let step = 0.12 * this.lastMove.distance;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				this.lastMove.distance -= step;
				this['pos' + this.dir] += step;
				this.player = requestAnimationFrame(this.inertia);
			},
			pageSwitch() {
				if (this.mode == 0) {
					this['pos' + this.dir] = this.currentIndex * -this.iDistance;
					this.transitionDuration = '300ms';
				}
			},
			setPage(val = this.iLength - 1) {
				this.currentIndex = val;
				this.pageSwitch();
			},
			toPrev() {
				if (this.mode == 0) {
					this.currentIndex = this.currentIndex == 0 ? this.iLength - 1 : this.currentIndex - 1;
					this.pageSwitch();
				}
			},
			toNext() {
				if (this.mode == 0) {
					this.currentIndex = this.currentIndex == this.iLength - 1 ? 0 : this.currentIndex + 1;
					this.pageSwitch();
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.init()
			})
		},
		destroyed() {
			clearInterval(this.player)
		}
	}
</script>


<style lang="scss">
	@import '../../../style/base.scss';
	@import './swiper.scss';
</style>
