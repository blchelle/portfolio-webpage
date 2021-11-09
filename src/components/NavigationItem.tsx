import React from 'react';

export interface INavigationItem {
	title: string;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	linkToRef: React.RefObject<HTMLElement>;
}

interface NavigationItemProps {
	item: INavigationItem;
	isSelected: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	item: { title, Icon, linkToRef },
	isSelected,
}) => {
	const containerHoverClass = isSelected ? '' : 'sm:hover:w-72';
	const iconStroke = isSelected ? 'text-gray-1' : 'text-gray-5 dark:text-gray-4';
	const nameHoverClasses = isSelected ? '' : 'sm:group-hover:opacity-100';

	return (
		<div
			className={`group w-1/5 sm:w-24 h-full sm:h-24 flex items-center justify-center sm:justify-start hover:border-gray-5 dark:hover:border-gray-1 border-gray-5 dark:border-gray-4 border bg-gray-3 dark:bg-gray-7 hover:bg-primary dark:hover:bg-primary mb-4 sm:rounded-md transition-all ${containerHoverClass}`}
			onClick={() => linkToRef.current?.scrollIntoView({ behavior: 'smooth' })}
		>
			<Icon className={`w-24 h-24 p-6 z-30 stroke-current ${iconStroke} group-hover:text-gray-1`} />
			<h4 className={`w-0 opacity-0 ${nameHoverClasses} text-3xl`}>{title}</h4>
		</div>
	);
};

export default NavigationItem;
