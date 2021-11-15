type BackgroundGrayColor = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type BackgroundGrayClasses =
	`bg-gray-${BackgroundGrayColor} dark:bg-gray-${BackgroundGrayColor}`;

type RoundedSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type RoundedClass = `rounded-${RoundedSizes}`;

type ShadowSize = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ShadowClass = `shadow-${ShadowSize}`;

type PaddingSizes = 0 | 1 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16;
export type PaddingClass = `p-${PaddingSizes}`;

type AOSFadeDirection = 'right' | 'left' | 'up' | 'down';
type AOSZoomDirection = 'in' | 'out';
export type AOSAnimation = `fade-${AOSFadeDirection}` | `zoom-${AOSZoomDirection}`;
