import React from 'react';
import classes from '@tailwind/Section';

type SectionProps = React.HTMLProps<HTMLDivElement> & {
	title: string;
	index: number;
};

export const BackgroundColorContext = React.createContext('');

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const { title, index, children } = props;
	if (!children) return null;

	const backgroundColor = index % 2 === 0 ? 'bg-gray-2 dark:bg-gray-6' : 'bg-gray-1 dark:bg-gray-5';

	return (
		<BackgroundColorContext.Provider value={backgroundColor}>
			<section className={classes.container(index)} ref={ref}>
				<h2 className={classes.title} data-aos='fade-up'>
					{title}
				</h2>
				<div className={classes.divider} data-aos='fade-up' />
				{children}
			</section>
		</BackgroundColorContext.Provider>
	);
});

export default Section;
