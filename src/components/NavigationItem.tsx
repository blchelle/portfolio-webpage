import React from 'react';

import classes from '@tailwind/NavigationItem';
import { ISection } from '@content/sections';

interface NavigationItemProps {
	item: ISection;
	isSelected: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	item: { title, Icon, ref },
	isSelected,
}) => {
	const isMobile = window.innerWidth < 640;

	const scrollToSection = () => {
		const { current } = ref;
		if (!current) return;

		window.scrollTo({ top: current.offsetTop + 20, behavior: 'smooth' });
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
