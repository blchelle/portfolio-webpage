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
	const textClasses = isSelected ? '' : 'sm:group-hover:w-48';

	const baseColorClasses = 'bg-gray-3 dark:bg-gray-7';
	const hoverColorClasses = 'hover:bg-primary dark:hover:bg-primary';
	const groupHoverColorClasses = 'group-hover:bg-primary';

	const scrollToSection = () => {
		const { current } = ref;
		if (!current) return;

		window.scrollTo({ top: current.offsetTop + 20, behavior: 'smooth' });
	};

	return (
		<div
			className={`group relative w-1/5 sm:w-24 h-full sm:h-24 flex items-center justify-center sm:justify-start ${baseColorClasses} ${hoverColorClasses} mb-4 sm:rounded-md transition-all cursor-pointer shadow-lg`}
			onClick={scrollToSection}
		>
			<Icon className={`w-24 h-24 p-6 z-30 stroke-current ${iconStroke} group-hover:text-gray-1`} />
			<div
				className={`${textClasses} ${baseColorClasses} ${groupHoverColorClasses} box-content text-3xl font-bold flex items-center absolute left-full rounded-r-lg w-0 overflow-hidden h-full -m-1 transition-all z-30`}
			>
				{title}
			</div>
		</div>
	);
};

export default NavigationItem;
