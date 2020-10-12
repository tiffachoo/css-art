<template>
	<nav class="nav">
		<button 
			aria-label="Toggle menu" 
			class="nav-burg"
		>
			<span class="nav-burg-lines"></span>
		</button>
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
	width: 20em;
	padding: 3.5em 1.5em 2em;
	overflow: auto;
	background: var(--ca-white);
	font-size: 16px;

	&-link {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 0.25em 0;
		font-family: var(--ca-font-family);
		font-weight: 400;
		font-size: 1.125em;
		line-height: 1.5;
		color: var(--ca-black);
		text-decoration: none;

		&::before {
			content: '*';
			position: relative;
			top: 0.5em;
			order: 2;
			font-size: 2em;
			line-height: 0;
			color: var(--ca-accent);
			transform-origin: 50% -15%;
			transform: rotate(var(--rotate, 180deg));
			opacity: var(--opacity, 0);
			transition: 0.3s ease-in-out;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 3px;
			transform-origin: left center;
			transform: scaleX(var(--scale, 0));
			background-color: var(--ca-accent);
			transition: transform 0.3s ease-in-out;
		}

		&:hover {
			--scale: 1;
			--rotate: 0deg;
			--opacity: 1;

			&::before {
				transition: opacity 0.3s 0.3s, transform 0.45s 0.3s ease-in-out;
			}
		}
	}

	&-items {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	&-burg {
		position: fixed;
		top: 1em;
		left: 1em;
		padding: 0;
		height: 2em;
		width: 2em;
		border: none;
		background-color: transparent;

		&-lines {
			top: calc(50% - 1px);

			&,
			&::before,
			&::after {
				position: absolute;
				left: 0;
				width: 100%;
				height: 2px;
				background-color: var(--ca-black);
			}
	
			&::before,
			&::after {
				content: '';
			}

			&::before {
				top: -0.5em;
			}

			&::after {
				top: 0.5625em;
			}
		}

	}
}
</style>