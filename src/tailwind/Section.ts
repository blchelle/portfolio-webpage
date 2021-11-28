import { classnames } from 'tailwindcss-classnames';

export default {
	container: (index: number) =>
		classnames(
			'flex',
			'flex-col',
			'items-center',
			'px-16',
			'sm:px-40',
			'md:px-60',
			'xl:px-80',
			'py-16',
			'border-t-8',
			'border-primary',
			'transition-colors',
			{
				[classnames('bg-gray-2', 'dark:bg-gray-6')]: index % 2 === 0,
				[classnames('bg-gray-1', 'dark:bg-gray-5')]: index % 2 === 1,
			}
		),
	title: classnames('text-6xl', 'text-center', 'mb-12', 'uppercase', 'tracking-widest'),
	divider: classnames('w-64', 'h-2', 'mb-20', 'bg-primary'),
};
