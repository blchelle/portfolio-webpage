import React, { useEffect, useRef, useState } from 'react';
import Section from '@components/Section';
import AboutMe from '@components/AboutMe';
import Contact from '@components/Contact';
import Header from '@components/Header';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Navigation from '@components/Navigation';
import { INavigationItem } from '@components/NavigationItem';

import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as PersonIcon } from '@assets/icons/person.svg';
import { ReactComponent as HammerIcon } from '@assets/icons/hammer.svg';
import { ReactComponent as CodeIcon } from '@assets/icons/code.svg';
import { ReactComponent as MailOutlineIcon } from '@assets/icons/mail-outline.svg';
import text from './text';
import Footer from '@components/Footer';

const App: React.FC = () => {
	const [section, setSection] = useState(0);

	const headerRef = useRef<HTMLElement>(null);
	const aboutMeRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);
	const skillsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	const NAVIGATION: INavigationItem[] = [
		{
			title: 'Home',
			Icon: HomeIcon,
			linkToRef: headerRef,
		},
		{
			title: 'About',
			Icon: PersonIcon,
			linkToRef: aboutMeRef,
		},
		{
			title: 'Projects',
			Icon: HammerIcon,
			linkToRef: projectsRef,
		},
		{
			title: 'Skills',
			Icon: CodeIcon,
			linkToRef: skillsRef,
		},
		{
			title: 'Contact',
			Icon: MailOutlineIcon,
			linkToRef: contactRef,
		},
	];

	const handleScroll = (_: Event): any => {
		const { scrollY } = window;
		const headerTop = headerRef.current?.offsetTop ?? 0;
		const aboutMeTop = aboutMeRef.current?.offsetTop ?? 0;
		const projectsTop = projectsRef.current?.offsetTop ?? 0;
		const skillsTop = skillsRef.current?.offsetTop ?? 0;
		const contactTop = contactRef.current?.offsetTop ?? 0;

		if (scrollY >= contactTop) {
			setSection(4);
		} else if (scrollY >= skillsTop) {
			setSection(3);
		} else if (scrollY >= projectsTop) {
			setSection(2);
		} else if (scrollY >= aboutMeTop) {
			setSection(1);
		} else if (scrollY >= headerTop) {
			setSection(0);
		}
	};

	const handleNavChange = (index: number) => {
		NAVIGATION[index].linkToRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [section]);

	return (
		<>
			<Navigation section={section} sections={NAVIGATION} onSectionChange={handleNavChange} />
			<main>
				<Header ref={headerRef} />
				<Section title='About Me' ref={aboutMeRef}>
					<AboutMe />
				</Section>
				<Section title='Portfolio Projects' ref={projectsRef} backgroundColor='bg-gray-5'>
					<Projects />
				</Section>
				<Section title='My Skills' description={text.skills.description} ref={skillsRef}>
					<Skills />
				</Section>
				<Section
					title='Get In Touch'
					description={text.contact.description}
					ref={contactRef}
					backgroundColor='bg-gray-5'
				>
					<Contact />
				</Section>
				<Footer sections={NAVIGATION} />
			</main>
		</>
	);
};

export default App;
