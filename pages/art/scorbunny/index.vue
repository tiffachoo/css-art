<template>
	<div class="scor">
		<div class="scor-head">
			<div class="scor-face">
				<div class="scor-eye scor-eye-left"></div>
				<div class="scor-eye scor-eye-right"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Scorbunny',
		head() {
			return {
				title: 'Scorbunny',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />