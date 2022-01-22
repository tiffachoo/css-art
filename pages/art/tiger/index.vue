<template>
	<div class="tiger">
		<div class="tiger-front">
			<div class="tiger-head">
				<div class="tiger-face">
					<div class="tiger-eye tiger-eye-left"></div>
					<div class="tiger-eye tiger-eye-right"></div>
					<div class="tiger-nose"></div>
					<div class="tiger-snout"></div>
					<div class="tiger-blush tiger-blush-left"></div>
					<div class="tiger-blush tiger-blush-right"></div>
				</div>
			</div>
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