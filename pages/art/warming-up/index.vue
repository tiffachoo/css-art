<template>
	<div class="scor">
		<div class="scor-head">
			<div class="scor-face">
				<div class="scor-eye scor-eye-left"></div>
				<div class="scor-eye scor-eye-right"></div>
				<div class="scor-face-lower">
					<div class="scor-nose"></div>
					<div class="scor-mouth">
						<div class="scor-mouth-outer"></div>
						<div class="scor-mouth-inner"></div>
					</div>
					<div class="scor-mouth-line"></div>
				</div>
				<div class="scor-blush scor-blush-left"></div>
				<div class="scor-blush scor-blush-right"></div>
			</div>
			<div class="scor-face-fluff scor-face-fluff-left"></div>
			<div class="scor-face-fluff scor-face-fluff-right"></div>
			<div class="scor-ear scor-ear-left"></div>
			<div class="scor-ear-right-wrap">
				<div class="scor-ear scor-ear-right"></div>
				<div class="scor-ear-right-fluff"></div>
			</div>
		</div>
		<div class="scor-body">
			<div class="scor-tail"></div>
			<div class="scor-torso"></div>
			<div class="scor-neck"></div>
			<div class="scor-arm scor-arm-left"></div>
			<div class="scor-arm scor-arm-right"></div>
			<div class="scor-leg scor-leg-left">
				<div class="scor-leg-foot">
					<div class="scor-leg-foot-pad"></div>
				</div>
			</div>
			<div class="scor-leg scor-leg-right">
				<div class="scor-leg-foot">
					<div class="scor-leg-foot-pad"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WarmingUp',
		head() {
			return {
				title: 'Warming up',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />