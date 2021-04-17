---
to: pages/art/<%= name %>/index.vue
unless_exists: true
---
<template>
	<div class="">
	</div>
</template>

<script>
	export default {
		name: '<%= name %>',
		head() {
			return {
				title: '<%= name %>',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />