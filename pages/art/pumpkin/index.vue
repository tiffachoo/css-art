<template>
	<div class="pumpkin">
		<div class="pumpkin-body-smol">
			<div class="pumpkin-body-front"></div>
			<div class="pumpkin-body-side pumpkin-body-side-left"></div>
			<div class="pumpkin-body-side pumpkin-body-side-right"></div>
			<div class="pumpkin-stem">
				<div class="pumpkin-stem-stick"></div>
				<div class="pumpkin-stem-base"></div>
			</div>
		</div>
		<div class="pumpkin-body">
			<div class="pumpkin-ear pumpkin-ear-left"></div>
			<div class="pumpkin-ear pumpkin-ear-right"></div>
			<div class="pumpkin-face">
				<div class="pumpkin-eye pumpkin-eye-left"></div>
				<div class="pumpkin-eye pumpkin-eye-right"></div>
				<div class="pumpkin-nose"></div>
				<div class="pumpkin-mouth"></div>
				<div class="pumpkin-cheek pumpkin-cheek-left"></div>
				<div class="pumpkin-cheek pumpkin-cheek-right"></div>
			</div>
			<div class="pumpkin-body-front"></div>
			<div class="pumpkin-body-side pumpkin-body-side-left"></div>
			<div class="pumpkin-body-side pumpkin-body-side-right"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'pumpkin',
		head() {
			return {
				title: 'pumpkin',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />