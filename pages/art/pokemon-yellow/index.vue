<template>
	<div class="container">
		<div class="gbc">
			<div class="gbc-screen-wrap">
				<div class="gbc-screen"></div>
			</div>
			<div class="gbc-controls">
				<div class="gbc-dpad"></div>
				<div class="gbc-button gbc-button-a"></div>
				<div class="gbc-button gbc-button-b"></div>
				<div class="gbc-pill gbc-pill-start"></div>
				<div class="gbc-pill gbc-pill-select"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Yellow',
		head() {
			return {
				title: 'yellow',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />