<template>
	<nav 
		:class="{ active: isActive }"
		class="nav"
	>
		<button 
			aria-label="Toggle menu" 
			class="nav-burg"
			@click="toggleMenu"
		>
			<span class="nav-burg-lines"></span>
		</button>
		<ul class="nav-items">
			<li 
				v-for="route in routes" 
				:key="route.name"
				class="nav-item"
			>
				<a
					:href="route.path"
					class="nav-link"
				>
					{{ route.display }}
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
		},
		data() {
			return {
				isActive: false
			};
		},
		methods: {
			toggleMenu() {
				this.isActive = !this.isActive;
			}
		}
	}
</script>

<style lang="scss">
.nav {
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
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
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(var(--nav-transform, -100%));
		padding: 0;
		margin: 0;
		height: 100vh;
		width: 20em;
		padding: 3.5em 1.5em 2em 3.5em;
		overflow: auto;
		visibility: var(--nav-visiblity, hidden);
		background-color: var(--ca-white);
		list-style: none;
		transition: 0.3s ease-in-out;
	}

	&-burg {
		position: fixed;
		z-index: 1001;
		top: 1em;
		left: 1em;
		padding: 0;
		height: 2em;
		width: 2em;
		border: none;
		background-color: transparent;
		cursor: pointer;

		&-lines {
			top: calc(50% - 1px);
			left: 0;
			background-color: var(--burg-line-middle-color, var(--ca-black));

			&,
			&::before,
			&::after {
				position: absolute;
				width: 100%;
				height: 2px;
				border-radius: 1px;
				transition: 0.3s;
			}
	
			&::before,
			&::after {
				content: '';
				left: 50%;
				background-color: var(--ca-black);
				transform: translateX(-50%);
			}

			&::before {
				--burg-line-bottom: -0.5em;
				--burg-line-rotate: 45deg;
				top: var(--burg-line-bottom);
			}

			&::after {
				--burg-line-bottom: 0.5625em;
				--burg-line-rotate: -45deg;
				top: var(--burg-line-bottom);
			}
		}
	}

	&.active {
		--nav-transform: 0;
		--nav-visiblity: visible;
		--burg-line-middle-color: transparent;

		.nav-burg {
			&-lines {
				transition: 0s 0.35s;

				&::before,
				&::after {
					top: 0;
					transform-origin: 0 center;
					transform: rotate(var(--burg-line-rotate)) translateX(-50%);
					animation: burgMoveLine 0.8s ease-in-out forwards;
				}
			}
		}
	}
}

@keyframes burgMoveLine {
	0% { 
		top: var(--burg-line-bottom);
		transform: rotate(0deg) translateX(-50%);
	}

	43%, 45% { 
		top: 0; 
		width: 100%;
		transform: rotate(0deg) translateX(-50%);
	}

	55% { 
		top: 0; 
		width: 2px;
		transform: rotate(0deg) translateX(-50%);
	}

	60% { 
		top: 0; 
		width: 2px;
		transform: rotate(var(--burg-line-rotate)) translateX(-50%);
	}

	90% { 
		top: 0; 
		width: 130%;
		transform: rotate(var(--burg-line-rotate)) translateX(-50%);
	}

	100% { 
		top: 0; 
		width: 100%;
		transform: rotate(var(--burg-line-rotate)) translateX(-50%);
	}
}
</style>