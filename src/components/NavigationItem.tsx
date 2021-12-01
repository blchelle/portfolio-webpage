import React from 'react';

import classes from '@tailwind/NavigationItem';
import { ISection } from '@content/sections';

interface NavigationItemProps {
	item: ISection;
	isSelected: boolean;
}

// Scroll slightly past the top of the section to make the slider animation smoother
const SCROLL_OFFSET = 20;

const NavigationItem: React.FC<NavigationItemProps> = ({
	item: { title, Icon, ref },
	isSelected,
}) => {
	const isMobile = window.innerWidth < 640;

	const scrollToSection = () => {
		const { current } = ref;
		if (!current) return;

		window.scrollTo({ top: current.offsetTop + SCROLL_OFFSET, behavior: 'smooth' });
	};

	return (
		<div className={classes.container(isSelected, isMobile)}>
			<div className={classes.iconContainer} onClick={scrollToSection}>
				<Icon className={classes.icon(isSelected)} />
			</div>
			<div className={classes.textContainer(isSelected, isMobile)}>{title}</div>
		</div>
	);
};

export default NavigationItem;
