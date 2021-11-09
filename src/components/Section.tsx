import React from 'react';

type SectionProps = React.HTMLProps<HTMLDivElement> & {
	title: string;
	description?: string;
	backgroundColor?: string;
};

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const { title, description, backgroundColor = 'bg-gray-7', children } = props;

	return (
		<section
			className={`flex-center flex-col ${backgroundColor} py-16 px-section border-t-8 border-primary transition-colors`}
			ref={ref}
		>
			<h2
				className='text-6xl text-gray-7 dark:text-gray-1 text-center mb-12 uppercase tracking-widest'
				data-aos='fade-up'
			>
				{title}
			</h2>
			<div className='w-64 h-2 mb-20 bg-primary' data-aos='fade-up' />
			{description && (
				<p className='w-full mb-8 text-3xl leading-relaxed text-center' data-aos='fade-up'>
					{description}
				</p>
			)}
			{children}
		</section>
	);
});

export default Section;
