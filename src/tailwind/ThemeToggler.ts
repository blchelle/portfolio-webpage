import { classnames } from 'tailwindcss-classnames';
import { center } from './common';

export default {
	container: classnames(
		'cursor-pointer',
		'fixed',
		'top-8',
		'right-8',
		'w-32',
		'h-16',
		'bg-gray-3',
		'dark:bg-gray-7',
		'border',
		'border-blue-500',
		'dark:border-yellow-400',
		'rounded-full',
		'shadow-xl',
		'z-20'
	),
	knob: classnames(
		center(false, true),
		'h-14',
		'w-14',
		'border-blue-500',
		'bg-blue-200',
		'dark:border-yellow-400',
		'dark:bg-yellow-200',
		'border-4',
		'rounded-full',
		'transition-all',
		'z-30'
	),
	themeIcon: (theme: 'light' | 'dark') =>
		classnames(center(false, true), 'w-12', 'h-12', 'stroke-current', 'z-20', {
			'left-3': theme === 'light',
			'text-yellow-400': theme === 'light',
			'right-3': theme === 'dark',
			'text-blue-500': theme === 'dark',
		}),
};
