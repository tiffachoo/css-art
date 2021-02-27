<template>
	<div class="container">
		<h1>CSS art</h1>
		<p>by tiffachoo</p>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.body {
	display: grid;
	place-items: center;
}

h1 {
	position: relative;
	font-family: var(--ca-font-family);
	font-size: 3rem;

	&::before,
	&::after {
		position: absolute;
		z-index: -1;
	}

	&::before {
		content: '';
		bottom: 0;
		left: -1ch;
		height: 0.5ch;
		width: 4ch;
		background-color: var(--ca-accent);
	}

	&::after {
		content: '*';
		top: -1rem;
		right: -3rem;
		font-size: 2em;
		line-height: 1;
		color: var(--ca-accent);
	}
}

p {
	font-family: var(--ca-font-family);
	font-style: italic;
	letter-spacing: 0.02em;
	text-align: right;
}
</style>
