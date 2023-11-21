/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			lg: { max: '768px' },
		},
		extend: {
			fontFamily: {
				body: ['AppleSDGothicNeoL', 'Roboto', 'sans-serif'],
			},
			colors: {
				primary: '#FF3478',
				secondary: '#de2e5f',
				text: '#1A1A1A',
				navy: '#oo2d79',
				gray: '#ccc',
				bgGray: '#F2F2F2',
				white: '#FFF',
			},
			fontSize: {
				title: '18px',
				content: '14px',
			},
		},
	},
	plugins: [],
};
