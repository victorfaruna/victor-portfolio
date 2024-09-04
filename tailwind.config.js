/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: { max: '640px' }, // Max-width: 640px
				md: { max: '768px' }, // Max-width: 768px
				lg: { max: '1024px' }, // Max-width: 1024px
				xl: { max: '1280px' }, // Max-width: 1280px
				'2xl': { max: '1536px' } // Max-width: 1536px
			},
			colors: {
				main: 'rgba(var(--bg-main))',
				'color-1': 'rgba(var(--color-1))',
				'color-2': 'rgba(var(--color-2))',
				'color-3': 'rgba(var(--color-3))',
				'color-4': 'rgba(var(--color-4))'
			}
		}
	},
	plugins: []
};
