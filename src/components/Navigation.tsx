import React, { useEffect, useState } from 'react';
import NavigationItem, { INavigationItem } from '@components/NavigationItem';

interface NavigationProps {
	section: number;
	sections: INavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ section, sections }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 640);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	const sliderStyle = isMobile
		? { left: `${(section * 100) / sections.length}%` }
		: { top: `${(section * 100) / sections.length}%` };

	return (
		<nav className='flex sm:flex-col sm:transform sm:translate-y-1/2 w-full sm:w-24 h-24 sm:h-auto fixed left-0 sm:left-12 bottom-0 sm:bottom-1/2 z-10'>
			<div
				className='absolute w-1/5 sm:w-24 h-full sm:h-24 border sm:rounded-md border-gray-1 bg-primary transition-all'
				style={sliderStyle}
			/>
			{sections.map((item, index) => (
				<NavigationItem key={item.title} item={item} isSelected={index === section} />
			))}
		</nav>
	);
};

export default Navigation;
