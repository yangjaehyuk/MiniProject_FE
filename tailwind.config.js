/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily : {
				'body' : ['AppleSDGothicNeoL', 'Roboto', 'sans-serif'],
			}
		},
		colors : {
			primary : '#FF3478',
			secondary : '#de2e5f',
			text : '#151515',
			navy : '#oo2d79',
			gray : '#ccc',
		},
		fontSize : {
			title : '18px',
			content : '14px'
		}
	},
	plugins: [],
};
