import React, { useState } from 'react';

import { ReactComponent as SunIcon } from '@assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '@assets/icons/moon.svg';

const ThemeToggler = () => {
	const getTheme = () => {
		return localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)
			? 'dark'
			: 'light';
	};

	const [theme, setTheme] = useState<'dark' | 'light'>(getTheme());

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';

		localStorage.theme = newTheme;
		setTheme(newTheme);
		applyTheme(newTheme);
	};

	const applyTheme = (theme: 'light' | 'dark') => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	const leftStyle = theme === 'light' ? { left: '0.4rem' } : { left: '4.3rem' };

	return (
		<div
			className='fixed z-10 top-8 right-8 w-36 h-20 rounded-full bg-gray-3 dark:bg-gray-7 shadow-xl border border-blue-500 dark:border-yellow-400 '
			onClick={toggleTheme}
		>
			<div
				className={`border-blue-500 bg-blue-200 dark:border-yellow-400 dark:bg-yellow-200 border-4 absolute w-16 h-16 top-1/2 transform -translate-y-1/2 rounded-full transition-all z-30`}
				style={leftStyle}
			/>
			<SunIcon className='absolute left-3 w-12 h-12 top-1/2 transform -translate-y-1/2 z-20 stroke-current text-yellow-400' />
			<MoonIcon className='absolute right-3 w-12 h-12 top-1/2 transform -translate-y-1/2 z-20 stroke-current text-blue-500' />
		</div>
	);
};

export default ThemeToggler;
