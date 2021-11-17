import React from 'react';
import { ISection } from '@content/sections';

interface NavigationItemProps {
	item: ISection;
	isSelected: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	item: { title, Icon, ref },
	isSelected,
}) => {
	const iconStroke = isSelected ? 'text-gray-1' : 'text-gray-5 dark:text-gray-4';

	const scrollToSection = () => {
		const { current } = ref;
		if (!current) return;

		window.scrollTo({ top: current.offsetTop + 20, behavior: 'smooth' });
	};

	const containerClasses = Object.values({
		display: `group flex justify-center sm:rounded-lg overflow-hidden ${
			isSelected ? '' : 'hover:border'
		}`,
		position: 'mb-4',
		size: 'w-1/5 sm:w-24 sm:hover:w-max h-24',
		misc: 'cursor-pointer',
	}).reduce((acc, curr) => acc + ' ' + curr, '');

	const itemClasses = Object.values({
		display: 'flex items-center justify-center',
		size: 'w-full sm:w-24 h-full',
		color: 'bg-gray-3 dark:bg-gray-7 group-hover:bg-primary dark:group-hover:bg-primary',
		animation: 'transition-colors',
	}).reduce((acc, curr) => acc + ' ' + curr, '');

	const textClasses = Object.values({
		display: `box-content flex items-center overflow-hidden ${
			isSelected ? '' : 'sm:group-hover:w-48'
		}`,
		size: 'w-0 h-full',
		text: 'text-3xl font-bold',
		color: 'bg-gray-3 dark:bg-gray-7 group-hover:bg-primary dark:group-hover:bg-primary',
		animation: 'transition-all',
	}).reduce((acc, curr) => acc + ' ' + curr, '');

	return (
		<div className={containerClasses}>
			<div className={itemClasses} onClick={scrollToSection}>
				<Icon
					className={`w-24 h-24 p-6 z-30 stroke-current ${iconStroke} group-hover:text-gray-1`}
				/>
			</div>
			<div className={textClasses}>{title}</div>
		</div>
	);
};

export default NavigationItem;
