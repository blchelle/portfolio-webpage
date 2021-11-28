import { classnames } from 'tailwindcss-classnames';

export default {
	description: classnames('text-3xl', 'col-span-1', 'xl:col-span-2', 'mb-8'),
	card: classnames('flex', 'overflow-x-hidden'),
	categoryPage: classnames(
		'p-8',
		'grid',
		'gap-8',
		'grid-cols-1',
		'sm:grid-cols-2',
		'lg:grid-cols-3',
		'2xl:grid-cols-5'
	),
	skillCard: classnames('group', 'flex', 'items-center', 'relative'),
};
