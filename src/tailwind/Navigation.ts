import { classnames } from 'tailwindcss-classnames';

export default {
	container: classnames(
		'fixed',
		'flex',
		'sm:flex-col',
		'w-full',
		'sm:w-24',
		'h-24',
		'sm:h-auto',
		'transform-gpu',
		'sm:translate-y-1/2',
		'left-0',
		'sm:left-12',
		'bottom-0',
		'sm:bottom-1/2',
		'z-20'
	),
	slider: classnames(
		'absolute',
		'w-1/5',
		'sm:w-24',
		'h-full',
		'sm:h-24',
		'bg-primary',
		'border',
		'border-gray-5',
		'dark:border-gray-1',
		'sm:rounded-md',
		'transition-all',
		'z-10'
	),
};
