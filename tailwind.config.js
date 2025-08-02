/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				rosa: '#ffd6d6',
				blanco: '#f5f5f5',
				oscuro: '#333',
			}
		},
	},
	plugins: [],
}
