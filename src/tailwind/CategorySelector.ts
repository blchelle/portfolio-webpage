import { classnames } from 'tailwindcss-classnames';

export default {
	list: classnames('relative', 'flex', 'self-start', 'py-4', 'sm:w-max', 'w-full'),
	slider: classnames(
		'absolute',
		'h-2',
		'w-1/4',
		'bottom-0',
		'bg-primary',
		'transition-all',
		'duration-300'
	),
	item: classnames('w-1/4', 'flex', 'items-center', 'justify-center', 'sm:w-48'),
	itemButton: classnames('w-11/12', 'text-2xl', 'font-bold'),
};
