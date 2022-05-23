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
				<div class="komi-blush komi-blush-left"></div>
				<div class="komi-blush komi-blush-right"></div>
			</div>
		</div>
		<div class="komi-panel">
			<div class="komi-hair-extension"></div>
			<div class="komi-body">
				<div class="komi-neck">
					<div class="komi-collar komi-collar-left"></div>
					<div class="komi-collar komi-collar-right"></div>
					<div class="komi-bow">
						<div class="komi-bow-top"></div>
						<div class="komi-bow-bottom"></div>
					</div>
				</div>
				<div class="komi-shirt"></div>
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