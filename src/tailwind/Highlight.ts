import { classnames } from 'tailwindcss-classnames';

export default {
	text: classnames(
		'text-gray-5',
		'hover:text-primary',
		'dark:text-gray-1',
		'dark:hover:text-primary' as 'TAILWIND_STRING',
		'font-bold',
		'transition-colors'
	),
};
