/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				center: '0 0 14px 0px rgb(0 0 0 / 0.1)',
			},
			colors: {},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
