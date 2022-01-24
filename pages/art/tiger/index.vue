<template>
	<div class="tiger">
		<div class="tiger-front">
			<div class="tiger-head">
				<div class="tiger-face">
					<div class="tiger-eyebrow tiger-eyebrow-left"></div>
					<div class="tiger-eyebrow tiger-eyebrow-right"></div>
					<div class="tiger-eye tiger-eye-left"></div>
					<div class="tiger-eye tiger-eye-right"></div>
					<div class="tiger-nose"></div>
					<div class="tiger-snout"></div>
					<div class="tiger-blush tiger-blush-left"></div>
					<div class="tiger-blush tiger-blush-right"></div>
					<div class="tiger-face-fluff tiger-face-fluff-left"></div>
					<div class="tiger-face-fluff tiger-face-fluff-right"></div>
					<div class="tiger-face tiger-face-mask">
						<div class="tiger-stripes-top"></div>
						<div class="tiger-stripes-side tiger-stripes-side-left"></div>
						<div class="tiger-stripes-side tiger-stripes-side-right"></div>
					</div>
				</div>
				<div class="tiger-ear tiger-ear-left"></div>
				<div class="tiger-ear tiger-ear-right"></div>
			</div>
			<div class="tiger-front-mask">
				<div class="tiger-body">
					<div class="tiger-chest"></div>
				</div>
			</div>
			<div class="tiger-paw tiger-paw-left"></div>
			<div class="tiger-paw tiger-paw-right"></div>
		</div>
		<div class="tiger-back"></div>
	</div>
</template>

<script>
	export default {
		name: 'tiger',
		head() {
			return {
				title: 'tiger',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />