import { classnames } from 'tailwindcss-classnames';

export default {
	container: classnames('grid', 'grid-cols-1', 'xl:grid-cols-3', 'gap-20', 'mb-16'),
	contentContainer: classnames('flex', 'flex-col', 'col-span-2', 'self-start', 'p-8'),
	contentCard: classnames('mb-8'),
	headerLogo: classnames('h-16', 'w-16', 'mr-4', 'visible', 'xl:hidden'),
	title: classnames('text-6xl', 'font-bold', 'mb-4'),
	subtitle: classnames('flex', 'justify-between', 'text-3xl', 'font-light'),
	imagesContainer: classnames('relative', 'hidden', 'xl:flex', 'justify-center', 'items-end'),
	image: classnames(
		'overflow-hidden',
		'rounded-full',
		'border-solid',
		'border-primary',
		'border-4'
	),
	logoContainer: (bgColorClass: 'TAILWIND_STRING') =>
		classnames(
			'absolute',
			'flex',
			'items-center',
			'justify-center',
			'bottom-0',
			'left-0',
			'overflow-hidden',
			'rounded-full',
			'border-solid',
			'border-gray-6',
			'border-4',
			'p-8',
			bgColorClass
		),
	logo: classnames('w-32', 'h-32'),
};
