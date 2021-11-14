import React, { useEffect, useState } from 'react';
import NavigationItem from '@components/NavigationItem';
import { ISection } from '@content/sections';

interface NavigationProps {
	section: number;
	sections: ISection[];
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
		? { left: `${(section * 100) / sections.length}%`, width: `${100 / sections.length}%` }
		: { top: `${(section * 100) / sections.length}%`, width: '6rem' };

	return (
		<nav className='flex sm:flex-col sm:transform sm:translate-y-1/2 w-full sm:w-24 h-24 sm:h-auto fixed left-0 sm:left-12 bottom-0 sm:bottom-1/2 z-20'>
			<div
				className='z-10 absolute w-1/5 sm:w-24 h-full sm:h-24 sm:rounded-md bg-primary transition-all'
				style={sliderStyle}
			/>
			{sections.map((item, index) => (
				<NavigationItem key={item.title} item={item} isSelected={index === section} />
			))}
		</nav>
	);
};

export default Navigation;
