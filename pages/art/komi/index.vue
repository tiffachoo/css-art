<template>
	<div class="komi">
		<div class="komi-head">
			<div class="komi-hair-back">
				<div class="komi-hair-back-1"></div>
			</div>
			<div class="komi-ear komi-ear-left"></div>
			<div class="komi-ear komi-ear-right"></div>
			<div class="komi-face"></div>
			<div class="komi-hair-bangs">
				<div class="komi-hair-bangs-1"></div>
				<div class="komi-hair-bangs-2"></div>
				<div class="komi-hair-bangs-3"></div>
			</div>
			<div class="komi-face-inner">
				<div class="komi-eye komi-eye-left">
					<div class="komi-eye-pupil"></div>
				</div>
				<div class="komi-eye komi-eye-right">
					<div class="komi-eye-pupil"></div>
				</div>
			</div>
		</div>
		<div class="komi-panel">
			<div class="komi-hair-extension"></div>
			<div class="komi-body">
				<div class="komi-neck"></div>
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