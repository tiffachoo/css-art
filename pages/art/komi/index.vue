<template>
	<div class="komi">
		<div class="komi-head">
			<div class="komi-hair-back">
				<div class="komi-hair-back-1"></div>
			</div>
			<div class="komi-face"></div>
			<div class="komi-hair-bangs">
				<div class="komi-hair-bangs-1"></div>
				<div class="komi-hair-bangs-2"></div>
			</div>
			<div class="komi-face-inner">
				<div class="komi-eye komi-eye-left"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'komi',
		head() {
			return {
				title: 'komi',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />