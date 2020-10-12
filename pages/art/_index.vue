<template>
	<component :is="componentName"></component>
</template>

<script>
	export default {
		name: 'Art',
		computed: {
			componentName() {
				const route = this.$route.params.index;
				return () => import(`@/views/${route}/${route}.vue`);
			}
		}
	}
</script>
