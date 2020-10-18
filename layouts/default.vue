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
				const routes = this.$router.options.routes;
				return routes
					.filter(route => route.path.includes('/art'))
					.map(route => {
						const display = route.name.replace('art-', '');
						return {
							...route,
							display: display.charAt(0).toUpperCase() + display.replace(/-/g, ' ').slice(1)
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
