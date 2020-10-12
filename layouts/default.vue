<template>
	<main>
		<Nav :routes="routes" />
		<Nuxt />
	</main>
</template>

<script>
	export default {
		computed: {
			routes() {
				const context = require.context('@/views/', true, /vue$/);
				return context.keys().map(item => {
					const link = item.replace('./', '').split('/')[0];
					return {
						name: link.charAt(0).toUpperCase() + link.replace(/-/g, ' ').slice(1),
						link
					}
				});
			}
		}
	}
</script>

<style lang="scss">
.vue-container,
#__nuxt,
#__layout,
main {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.w-100 {
	width: 100%;
}
</style>
