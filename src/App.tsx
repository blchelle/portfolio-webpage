import React, { useEffect, useRef, useState } from 'react';

import Section from '@components/Section';
import Header from '@components/sections/Header';
import Footer from '@components/sections/Footer';
import Navigation from '@components/Navigation';

import ThemeToggler from '@components/ThemeToggler';
import CONTENT_SECTIONS from '@content/sections';

const App: React.FC = () => {
	const [section, setSection] = useState(0);
	const footerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (): any => {
		const { scrollY, innerHeight } = window;

		for (let i = CONTENT_SECTIONS.length - 1; i >= 0; i--) {
			const sectionOffset = CONTENT_SECTIONS[i].ref.current?.offsetTop ?? 0;
			const isLastSection = i === CONTENT_SECTIONS.length - 1;
			const bottomPastFooter = scrollY + innerHeight >= (footerRef.current?.offsetTop ?? 0);
			const topPastSection = scrollY >= sectionOffset;

			if (topPastSection || (isLastSection && bottomPastFooter)) {
				setSection(i);
				break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
	}, [section]);

	return (
		<>
			<Navigation section={section} sections={CONTENT_SECTIONS} />
			<ThemeToggler />
			<main className='overflow-x-hidden text-gray-7 dark:text-gray-1'>
				<Header ref={CONTENT_SECTIONS[0].ref} />
				{CONTENT_SECTIONS.map(({ title, ref, children }, i) => (
					<Section title={title} ref={ref} index={i} key={title}>
						{children}
					</Section>
				))}
				<Footer sections={CONTENT_SECTIONS} ref={footerRef} />
			</main>
		</>
	);
};

export default App;
