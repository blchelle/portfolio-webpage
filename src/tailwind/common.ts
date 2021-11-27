import { classnames } from 'tailwindcss-classnames';

export const center = (horizontal: boolean, vertical: boolean) =>
	classnames('absolute', 'transform-gpu', {
		[classnames('-translate-y-1/2', 'top-1/2')]: vertical,
		[classnames('-translate-x-1/2', 'left-1/2')]: horizontal,
	});
