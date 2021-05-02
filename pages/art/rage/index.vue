<template>
	<div class="retsuko">
		<div class="retsuko-head">
			<div class="retsuko-face">
				<div class="retsuko-eye retsuko-eye-left"></div>
				<div class="retsuko-eye retsuko-eye-right"></div>
				<div class="retsuko-eyebrow retsuko-eyebrow-left"></div>
				<div class="retsuko-eyebrow retsuko-eyebrow-right"></div>
				<div class="retsuko-snout">
					<div class="retsuko-snout-fur-wrap">
						<div class="retsuko-snout-fur"></div>
						<div class="retsuko-face-fur retsuko-face-fur-left"></div>
						<div class="retsuko-face-fur retsuko-face-fur-right"></div>
						<div class="retsuko-face-fur-white retsuko-face-fur-white-left">
							<div class="retsuko-face-fur-white-detail retsuko-face-fur-white-detail-1"></div>
							<div class="retsuko-face-fur-white-detail retsuko-face-fur-white-detail-2"></div>
							<div class="retsuko-face-fur-white-detail retsuko-face-fur-white-detail-3"></div>
						</div>
						<div class="retsuko-face-fur-white retsuko-face-fur-white-right">
							<div class="retsuko-face-fur-white-detail retsuko-face-fur-white-detail-1"></div>
							<div class="retsuko-face-fur-white-detail retsuko-face-fur-white-detail-2"></div>
							<div class="retsuko-face-fur-white-detail retsuko-face-fur-white-detail-3"></div>
						</div>
					</div>
					<div class="retsuko-nose"></div>
					<div class="retsuko-mouth"></div>
				</div>
				<div class="retsuko-blush retsuko-blush-left"></div>
				<div class="retsuko-blush retsuko-blush-right"></div>
			</div>
			<div class="retsuko-ear retsuko-ear-left">
				<div class="retsuko-ear-fur retsuko-ear-fur-1"></div>
				<div class="retsuko-ear-fur retsuko-ear-fur-2"></div>
			</div>
			<div class="retsuko-ear retsuko-ear-right">
				<div class="retsuko-ear-fur retsuko-ear-fur-1"></div>
				<div class="retsuko-ear-fur retsuko-ear-fur-2"></div>
			</div>
		</div>
		<div class="retsuko-body">
			<div class="retsuko-torso">
				<div class="retsuko-shirt"></div>
				<div class="retsuko-shirt-cut">
					<div class="retsuko-shirt-cut-fur"></div>
					<div class="retsuko-shirt-collar retsuko-shirt-collar-left"></div>
					<div class="retsuko-shirt-collar retsuko-shirt-collar-right"></div>
				</div>
				<div class="retsuko-arm retsuko-arm-left">
					<div class="retsuko-arm-lower"></div>
					<div class="retsuko-arm-paw"></div>
				</div>
				<div class="retsuko-arm retsuko-arm-right">
					<div class="retsuko-arm-lower"></div>
					<div class="retsuko-arm-paw"></div>
				</div>
			</div>
			<div class="retsuko-body-lower">
				<div class="retsuko-skirt"></div>
				<div class="retsuko-leg retsuko-leg-left"></div>
				<div class="retsuko-leg retsuko-leg-right"></div>
				<div class="retsuko-tail"></div>
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