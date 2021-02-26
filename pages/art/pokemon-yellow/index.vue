<template>
	<div class="container">
		<div class="gbc">
			<div class="gbc-screen-wrap">
				<div class="gbc-screen">
					<div class="pika-wrap">
						<div class="pika">
							<div class="pika-head">
								<div class="pika-face">
									<div class="pika-eye pika-eye-left"></div>
									<div class="pika-eye pika-eye-right"></div>
									<div class="pika-nose"></div>
									<div class="pika-mouth">
										<div class="pika-mouth-3"></div>
										<div class="pika-mouth-inner"></div>
									</div>
									<div class="pika-cheek pika-cheek-left"></div>
									<div class="pika-cheek pika-cheek-right"></div>
								</div>
								<div class="pika-ear pika-ear-left"></div>
								<div class="pika-ear pika-ear-right"></div>
							</div>
							<div class="pika-body">
								<div class="pika-torso"></div>
								<div class="pika-arm pika-arm-left">
									<div class="pika-arm-fingers"></div>
									<div class="pika-arm-shadow"></div>
								</div>
								<div class="pika-arm pika-arm-right">
									<div class="pika-arm-fingers"></div>
									<div class="pika-arm-shadow"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
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