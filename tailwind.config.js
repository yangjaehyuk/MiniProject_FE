/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			lg: '768px',
		},
		extend: {
			fontFamily: {
				body: ['Malgun Gothic','AppleSDGothicNeoL', 'Roboto', 'sans-serif'],
			},
			colors: {
				primary: '#FF3478',
				secondary: '#de2e5f',
				text: '#1A1A1A',
				navy: '#oo2d79',
				blue: '#0152cc',
				gray: '#ccc',
				black: '#1A1A1A',
				bgGray: '#F2F2F2',
				white: '#FFF',
				lightGray: '#F5F5F5',
				textGray: '#919191',
				secondaryTextGray: '#616161',
				green: '#008161',
				orange: '#E67000',
				borderGray: '#e6e6e6',
				hoverSecondary: '#B1244C',
				soldOut: '#CCCCCC',
				bgOrange: '#FEF8F3',
				red : '#DC0328'
			},
			fontSize: {
				title: '18px',
				content: '14px',
				md: '13px',
				sm: '12px',
				xs: '11px',
				xxsm: '10px',
				lg: '20px',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
});
