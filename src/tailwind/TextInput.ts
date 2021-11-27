import { classnames } from 'tailwindcss-classnames';

export default {
	container: classnames('relative', 'w-full', 'mb-12'),
	label: (visited: boolean, empty: boolean, error: boolean) =>
		classnames(
			'absolute',
			'left-4',
			'transition-all',
			{
				'text-red-500': error && visited,
				'text-gray-4': empty && !(error && visited),
				'text-primary': !empty && !(error && visited),
			},
			{
				'text-3xl': empty,
				'text-2xl': !empty,
			}
		),
	input: (error: boolean, visited: boolean, numLines: number) =>
		classnames(
			'w-full',
			'px-4',
			'bg-gray-1',
			'border-2',
			'border-solid',
			'rounded-md',
			'text-gray-4',
			'text-3xl',
			{
				[classnames('pt-0', 'h-20')]: numLines === 1,
				[classnames('pt-4', 'h-auto')]: numLines !== 1,
			},
			{
				'border-red-500': error && visited,
				'border-gray-3': !(error && visited),
			}
		),
};
