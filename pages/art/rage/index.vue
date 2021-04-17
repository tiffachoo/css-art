<template>
	<div class="retsuko">
		<div class="retsuko-head">
			<div class="retsuko-face">
				<div class="retsuko-eye retsuko-eye-left"></div>
				<div class="retsuko-eye retsuko-eye-right"></div>
				<div class="retsuko-snout">
					<div class="retsuko-nose"></div>
					<div class="retsuko-mouth"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'rage',
		head() {
			return {
				title: 'rage',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />