import React from 'react';
import NavigationItem, { INavigationItem } from '@components/NavigationItem';

interface NavigationProps {
	section: number;
	onSectionChange: (section: number) => void;
	sections: INavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ section, onSectionChange, sections }) => {
	return (
		<nav className='navbar'>
			<div className='navbar__slider' style={{ top: `${(section * 100) / sections.length}%` }} />
			{sections.map((item, index) => (
				<NavigationItem
					key={index}
					index={index}
					onSectionChange={onSectionChange}
					item={item}
					isSelected={index === section}
				/>
			))}
		</nav>
	);
};

export default Navigation;
