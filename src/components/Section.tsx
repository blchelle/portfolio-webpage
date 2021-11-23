import React from 'react';

type SectionProps = React.HTMLProps<HTMLDivElement> & {
	title: string;
	index: number;
};

export const BackgroundColorContext = React.createContext('bg-gray-2 dark:bg-gray-6');

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const { title, index, children } = props;
	if (!children) return null;

	const backgroundColor = index % 2 === 0 ? 'bg-gray-2 dark:bg-gray-6' : 'bg-gray-1 dark:bg-gray-5';

	return (
		<BackgroundColorContext.Provider value={backgroundColor}>
			<section
				className={`flex-center flex-col bg-gray-${backgroundColor} dark:bg-gray-${
					backgroundColor + 4
				} py-16 px-section border-t-8 border-primary transition-colors`}
				ref={ref}
			>
				<h2 className='text-6xl text-center mb-12 uppercase tracking-widest' data-aos='fade-up'>
					{title}
				</h2>
				<div className='w-64 h-2 mb-20 bg-primary' data-aos='fade-up' />
				{children}
			</section>
		</BackgroundColorContext.Provider>
	);
});

export default Section;
