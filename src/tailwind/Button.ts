import { classnames } from 'tailwindcss-classnames';

export default {
	container: (color: 'primary' | 'github', disabled: boolean) =>
		classnames(
			'flex',
			'items-center',
			'justify-between',
			'text-3xl',
			'text-gray-1',
			'font-bold',
			'h-20',
			'w-max',
			'py-2',
			'px-12',
			'rounded-lg',
			'cursor-pointer',
			'transition',
			{
				[classnames('bg-primary', 'hover:bg-primary-dark')]: color === 'primary',
				[classnames('bg-github', 'hover:bg-github-dark')]: color === 'github',
				[classnames('opacity-50', 'cursor-not-allowed')]: disabled,
			}
		),
	icon: classnames('h-10', 'w-10', 'ml-4', 'text-gray-1', 'fill-current'),
};
