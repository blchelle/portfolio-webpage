import React from 'react';
import { BackgroundGrayColor } from 'src/helpers/tailwind';

type SectionProps = React.HTMLProps<HTMLDivElement> & {
	title: string;
	Content?: React.FC<SectionChildProps>;
	index: number;
};

export interface SectionChildProps {
	cardColor: BackgroundGrayColor;
}

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const { title, Content, index } = props;

	const backgroundColor = index % 2 === 0 ? 2 : 1;
	const cardColor = index % 2 === 0 ? 1 : 2;

	if (!Content) return null;

	return (
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
			<Content cardColor={cardColor} />
		</section>
	);
});

export default Section;
