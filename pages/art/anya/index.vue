<template>
	<div class="anya">
		<div class="anya-head">
			<div class="anya-hair">
				<div class="anya-hair-length anya-hair-length-left">
					<div class="anya-hair-length-flyaway"></div>
				</div>
				<div class="anya-hair-length anya-hair-length-right"></div>
			</div>
			<div class="anya-face">
				<div class="anya-eye anya-eye-left"></div>
				<div class="anya-eye anya-eye-right"></div>
				<div class="anya-mouth"></div>
				<div class="anya-hair-bangs">
					<div class="anya-hair-bangs-1"></div>
					<div class="anya-hair-bangs-2"></div>
					<div class="anya-hair-bangs-3"></div>
				</div>
			</div>
			<div class="anya-hair-front anya-hair-front-left"></div>
			<div class="anya-hair-front anya-hair-front-right"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'anya',
		head() {
			return {
				title: 'anya',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />