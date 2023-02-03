import { classnames } from 'tailwindcss-classnames';

export default {
	container: classnames('grid', 'gap-8', 'grid-cols-1', 'xl:grid-cols-2', 'mb-16'),
	mockupContainer: classnames('hidden', 'xl:flex', 'justify-center', 'items-center'),
	mockup: classnames('w-3/4', 'p-8', 'xl:w-full'),
	contentContainer: classnames('flex', 'flex-col'),
	contentHeaderCard: classnames('flex', 'flex-col', 'mb-8'),
	contentHeaderCardTopRow: classnames('flex', 'items-center', 'mb-8'),
	logo: classnames('w-20', 'h-20', 'mr-8'),
	title: classnames('text-5xl', 'font-bold'),
	description: classnames('text-3xl', 'leading-relaxed', 'mb-16'),
	buttonsContainer: classnames('flex', 'justify-start', 'mt-auto'),
};
