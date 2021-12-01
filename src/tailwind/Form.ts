import { classnames } from 'tailwindcss-classnames';

export default {
	container: classnames('relative', 'col-span-1', 'lg:col-span-4', 'overflow-hidden'),
	form: classnames('flex', 'flex-col', 'justify-between', 'flex-1', 'pt-8'),
	sentCard: classnames(
		'absolute',
		'top-0',
		'h-full',
		'w-full',
		'p-8',
		'flex',
		'items-center',
		'justify-center',
		'text-center',
		'text-4xl',
		'font-bold',
		'bg-primary',
		'rounded-lg',
		'z-10',
		'transition-all',
		'duration-500'
	),
};
