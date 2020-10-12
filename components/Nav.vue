<template>
	<nav class="nav">
		<ul clsas="nav-items">
			<li 
				v-for="route in routes" 
				:key="route.link"
				class="nav-item"
			>
				<a
					:href="`/art/${route.link}`"
					class="nav-link"
				>
					{{ route.name }}
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Nav',
		props: {
			routes: Array
		}
	}
</script>

<style lang="scss">
.nav {
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	height: 100vh;
	min-width: 15em;
	padding: 1em 1.5em;
	overflow: auto;
	background: var(--ca-white);
	font-size: 16px;

	&-link {
		display: block;
		padding: 0.25em 0;
		font-family: 'Roboto';
		font-weight: 400;
		font-size: 1.125em;
		line-height: 1.5;
		text-decoration: none;
	}

	&-items {
		padding: 0;
		margin: 0;
		list-style: none;
	}
}
</style>