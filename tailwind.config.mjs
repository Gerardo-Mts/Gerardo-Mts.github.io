/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Custom colors

			colors: {
				vividGreen: '#00AB35',
			},
		

			// Custom fonts
			fontFamily: {
				'next-art': ['Next Art', 'sans-serif'],
			},
			fontWeight: {
				'thin': 100,
				'light': 300,
				'normal': 400,
				'semibold': 600,
				'bold': 700,
			},
			fontSize: {
				'4.5xl': '2.5rem',
			},
		},
	},
	plugins: [],
}
