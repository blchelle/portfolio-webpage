import { classnames } from 'tailwindcss-classnames';

export default {
	container: (isLink: boolean) =>
		classnames(
			'group',
			'w-full',
			'h-24',
			'flex',
			'items-center',
			'hover:bg-primary-transparent',
			'transition-colors',
			'rounded-lg',
			{ 'cursor-pointer': isLink }
		),
	iconContainer: classnames(
		'flex',
		'justify-center',
		'items-center',
		'w-24',
		'h-full',
		'rounded-lg',
		'group-hover:rounded-r-none',
		'mr-8',
		'bg-primary-transparent',
		'group-hover:bg-primary',
		'transition-all',
		'fill-current'
	),
	icon: classnames(
		'w-12',
		'fill-current',
		'text-primary',
		'group-hover:text-gray-1',
		'transition-colors'
	),
	contentContainer: classnames('flex', 'flex-col'),
	title: classnames('text-3xl', 'font-bold'),
	subtitle: classnames('text-2xl'),
};
