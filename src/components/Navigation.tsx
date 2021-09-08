import React, { useEffect, useState } from 'react';
import NavigationItem, { INavigationItem } from '@components/NavigationItem';

interface NavigationProps {
	section: number;
	onSectionChange: (section: number) => void;
	sections: INavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ section, onSectionChange, sections }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 700);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	const sliderStyle = isMobile
		? { left: `${(section * 100) / sections.length}%` }
		: { top: `${(section * 100) / sections.length}%` };

	return (
		<nav className={`navbar${isMobile ? '--mobile' : ''}`}>
			<div className='navbar__slider' style={sliderStyle} />
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
