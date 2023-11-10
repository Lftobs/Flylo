/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				'bg' :{
					intro: 'hsl(217, 28%, 15%)', //intro
					main:'hsl(218, 28%, 13%)', //main
					footer: ' hsl(216, 53%, 9%)',
					tma: ' hsl(219, 30%, 18%)'
				},
			},
			fontFamily : {
				   raleway : [],
				   openSans : []
			},
		},
	},
	plugins: [],
}
