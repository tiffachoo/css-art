---
to: pages/art/<%= name %>/styles.scss
unless_exists: true
---
:root {
	--black: #444;
	--white: #fff;
	--primary-color: #00ffd5;
	--primary-color-dark: #00bd9e;
	--primary-color-tint: #99ffee;
	--accent-color: #ff00c8;

	--background: #eaeaea;
}

* { box-sizing: border-box; }
.body {
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: var(--background);
	font-size: 16px;
	line-height: 1;
}

.<%= name %> {
	position: relative;

	*,
	*::before,
	*::after {
		position: absolute;
	}
}