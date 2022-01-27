module.exports = {
	purge: {
		content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
	},
	darkMode: 'class',
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
					transparent1: '#f8f8f8dd',
					transparent7: '#26292cdd',
				},
				primary: {
					DEFAULT: '#26c485',
					dark: '#21ab74',
					transparent: '#26c48544',
				},
				secondary: {
					light: '#94C5C7',
					DEFAULT: '#1c3435',
				},
				github: {
					DEFAULT: '#111111',
					dark: '#000000',
				},
				ualberta: {
					DEFAULT: '#05894F',
				},
				willowglen: {
					DEFAULT: '#F18221',
				},
				tesla: {
					DEFAULT: '#CC0000',
				},
				header: {
					close: '#2CA060',
					far: '#8FE0B4',
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
			width: ['group-hover', 'hover'],
			borderRadius: ['group-hover'],
			borderWidth: ['hover'],
			rotate: ['group-hover'],
		},
	},
	plugins: [],
};
