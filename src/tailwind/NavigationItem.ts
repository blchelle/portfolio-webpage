import { classnames } from 'tailwindcss-classnames';

export default {
	container: (isSelected: boolean, isMobile: boolean) =>
		classnames(
			'cursor-pointer',
			'group',
			'flex',
			'justify-center',
			'w-1/5',
			'sm:w-24',
			'h-24',
			'mb-4',
			'overflow-hidden',
			'sm:rounded-lg',
			{ 'hover:w-max': !isMobile },
			{ 'hover:border': !isSelected }
		),
	iconContainer: classnames(
		'flex',
		'items-center',
		'justify-center',
		'w-full',
		'sm:w-24',
		'h-full',
		'bg-gray-3',
		'dark:bg-gray-7',
		'group-hover:bg-primary',
		'transition-colors'
	),
	icon: (isSelected: boolean) =>
		classnames('w-24', 'h-24', 'p-6', 'z-30', 'stroke-current', 'group-hover:text-gray-1', {
			'text-gray-1': isSelected,
			[classnames('text-gray-5', 'dark:text-gray-4')]: !isSelected,
		}),
	textContainer: (isSelected: boolean, isMobile: boolean) =>
		classnames(
			'box-content',
			'flex',
			'items-center',
			'overflow-hidden',
			'w-0',
			'h-full',
			'text-3xl',
			'font-bold',
			'bg-gray-3',
			'dark:bg-gray-7',
			'group-hover:bg-primary',
			'transition-all',
			{
				'group-hover:w-48': !isSelected && !isMobile,
			}
		),
};
