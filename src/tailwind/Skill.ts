import { classnames } from 'tailwindcss-classnames';

export default {
	stripe: classnames(
		'absolute',
		'w-2',
		'h-0',
		'top-0',
		'left-0',
		'rounded-l-lg',
		'bg-primary',
		'transition-all',
		'group-hover:h-full'
	),
	logo: classnames('w-auto', 'h-16', 'mr-8'),
	name: classnames('text-3xl', 'font-bold'),
};
