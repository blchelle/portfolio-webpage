import React, { useState } from 'react';

import classes from '@tailwind/ThemeToggler';
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

	const leftStyle = theme === 'light' ? { left: '0.25rem' } : { left: '4.1rem' };

	return (
		<div className={classes.container} onClick={toggleTheme}>
			<div className={classes.knob} style={leftStyle} />
			<SunIcon className={classes.themeIcon('light')} />
			<MoonIcon className={classes.themeIcon('dark')} />
		</div>
	);
};

export default ThemeToggler;
