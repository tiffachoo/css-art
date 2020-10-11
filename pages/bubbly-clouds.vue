<template>
	<div class="w-100">
		<div id="waddleDee" class="waddle-dee">
			<div class="parasol">
				<div class="parasol-top">
					<div class="parasol-top-material"></div>
					<div class="parasol-top-footer">
						<div class="parasol-top-footer-left"></div>
						<div class="parasol-top-footer-center"></div>
						<div class="parasol-top-footer-right"></div>
					</div>
				</div>
				<div class="parasol-stick"></div>
			</div>
			<div class="waddle-arm waddle-arm-left"></div>
			<div class="waddle-arm waddle-arm-right"></div>
			<div class="waddle-body">
				<div class="waddle-face">
					<div class="waddle-blush waddle-blush-left"></div>
					<div class="waddle-blush waddle-blush-right"></div>
					<div class="waddle-eye waddle-eye-left"></div>
					<div class="waddle-eye waddle-eye-right"></div>
				</div>
			</div>
			<div class="waddle-foot waddle-foot-left"></div>
			<div class="waddle-foot waddle-foot-right"></div>
		</div>

		<div class="cloud cloud-large cloud-1"></div>
		<div class="cloud cloud-medium cloud-2">
			<div class="waddle-dee-the-second">
				<div class="sign">
					scroll
				</div>
				<div class="waddle-arm waddle-arm-left"></div>
				<div class="waddle-arm waddle-arm-right"></div>
				<div class="waddle-body">
					<div class="waddle-face">
						<div class="waddle-blush waddle-blush-left"></div>
						<div class="waddle-blush waddle-blush-right"></div>
						<div class="waddle-eye waddle-eye-left"></div>
						<div class="waddle-eye waddle-eye-right"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="cloud cloud-3"></div>
		<div class="cloud cloud-medium cloud-4"></div>
		<div class="cloud cloud-large cloud-5"></div>
		<div class="cloud cloud-medium cloud-6"></div>
		<div class="cloud cloud-7"></div>
		<div class="cloud cloud-large cloud-8"></div>
		<div class="cloud cloud-9"></div>

		<div class="star-block star-block-1"><div class="star-block-star"></div></div>
		<div class="star-block star-block-2"><div class="star-block-star"></div></div>
		<div class="star-block star-block-3"><div class="star-block-star"></div></div>
		<div class="star-block star-block-4"><div class="star-block-star"></div></div>
		<div class="star-block star-block-5"><div class="star-block-star"></div></div>

		<div id="ground" class="ground">
			<div class="ground-grass"></div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			const dee = document.getElementById('waddleDee');
			const deeBottom = dee.getBoundingClientRect().height + dee.getBoundingClientRect().top;
			const ground = document.getElementById('ground');
			const groundPos = ground.getBoundingClientRect().top + window.pageYOffset;
			const offset = 50; // px on the ground

			window.addEventListener('scroll', handleScroll)

			function handleScroll() {
				let pos = window.pageYOffset;
				
				if (pos > groundPos - deeBottom + offset) {
					if (!dee.classList.contains('is-sitting')) {
						dee.classList.add('is-sitting');
						dee.style.top = `${pos + dee.getBoundingClientRect().height + (offset * 2)}px`;
					}
				} else {
					dee.classList.remove('is-sitting');
					dee.style.top = null;
				}
			}
		}
	}
</script>

<style lang="scss" src="@/styles/bubbly-clouds.scss" />