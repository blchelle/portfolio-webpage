const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./index.html', './src/**/*.tsx'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				gray: {
					1: '#f8f8f8',
					2: '#ebebeb',
					3: '#d6d6d6',
					4: '#72767f',
					5: '#393e41',
					6: '#2f3437',
					7: '#26292c',
				},
				primary: {
					DEFAULT: '#26c485',
					dark: '#21ab74',
					transparent: '#87e8c144',
				},
				github: {
					DEFAULT: '#111111',
					dark: '#000000',
				},
				error: {
					DEFAULT: '#d06262',
				},
			},
		},
	},
	variants: {
		extend: {
			height: ['group-hover', 'hover'],
			width: ['hover'],
			margin: ['last'],
		},
	},
	plugins: [],
};
