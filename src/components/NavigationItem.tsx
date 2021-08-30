import React from 'react';

export interface INavigationItem {
	title: string;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	linkToRef: React.RefObject<HTMLElement>;
}

interface NavigationItemProps {
	item: INavigationItem;
	isSelected: boolean;
	index: number;
	onSectionChange: (section: number) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	item: { title, Icon },
	isSelected,
	index,
	onSectionChange,
}) => {
	return (
		<div
			className={`navbar__item navbar__item--about ${isSelected ? 'selected' : ''}`}
			onClick={() => onSectionChange(index)}
		>
			<Icon className='navbar__icon' />
			<h4 className='navbar__name'>{title}</h4>
		</div>
	);
};

export default NavigationItem;
