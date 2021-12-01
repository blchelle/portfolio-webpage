import React, { useEffect, useState } from 'react';

import classes from '@tailwind/Navigation';
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
		<nav className={classes.container}>
			<div className={classes.slider} style={sliderStyle} />
			{sections.map((item, index) => (
				<NavigationItem key={item.title} item={item} isSelected={index === section} />
			))}
		</nav>
	);
};

export default Navigation;
