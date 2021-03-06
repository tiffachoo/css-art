export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		titleTemplate: '%s * CSS art',
		title: 'CSS art',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'@/assets/styles/styles.scss'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/style-resources'
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	},

	styleResources: {
		scss: [
			'@/assets/styles/_mixins.scss',
		]
	}
}
